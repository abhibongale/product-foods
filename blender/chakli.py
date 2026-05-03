import bpy
import math
import os
import random

# -------------------------
# USER SETTINGS
# Get the directory where this script is located
script_dir = os.path.dirname(os.path.abspath(__file__))
img_dir = os.path.join(script_dir, "img")

# Create img directory if it does not exist
os.makedirs(img_dir, exist_ok=True)

# Set export paths
export_path = os.path.join(img_dir, "chakali_final.glb")
bake_texture_path = "C:/Users/abhis/Downloads/chakli.png"

# Spiral parameters
radius_jitter = 0.0008
rotation_jitter = 0.02
radius_growth = 0.0035
turns = 4
points_per_turn = 220
vertical_bump = 0.001

# -------------------------
# CLEAN SCENE
# -------------------------
for obj in list(bpy.data.objects):
    bpy.data.objects.remove(obj, do_unlink=True)

# -------------------------
# SET RENDER ENGINE TO CYCLES (required for baking)
# -------------------------
bpy.context.scene.render.engine = 'CYCLES'
bpy.context.scene.cycles.device = 'CPU'  # or 'GPU' if available

# -------------------------
# CREATE RIDGED PROFILE
# -------------------------
profile_curve = bpy.data.curves.new('ProfileCurve', 'CURVE')
profile_curve.dimensions = '2D'
spline = profile_curve.splines.new('POLY')

ridge_points = []
r_outer = 0.009
r_inner = 0.005
segments = 16
for i in range(segments):
    angle = i * (2 * math.pi / segments)
    r = r_outer if i % 2 == 0 else r_inner
    x = r * math.cos(angle)
    y = r * math.sin(angle)
    ridge_points.append((x, y, 0, 1))

spline.points.add(len(ridge_points)-1)
for i, p in enumerate(ridge_points):
    spline.points[i].co = p

profile_obj = bpy.data.objects.new("ProfileObj", profile_curve)
bpy.context.collection.objects.link(profile_obj)

# -------------------------
# CREATE SPIRAL PATH
# -------------------------
spiral_curve = bpy.data.curves.new('SpiralCurve', 'CURVE')
spiral_curve.dimensions = '3D'
spline = spiral_curve.splines.new('POLY')
points = []

for i in range(turns * points_per_turn):
    t = i / points_per_turn * 2 * math.pi
    r = 0.02 + radius_growth * t + random.uniform(-radius_jitter, radius_jitter)
    rot_offset = random.uniform(-rotation_jitter, rotation_jitter)
    z_bump = random.uniform(-vertical_bump, vertical_bump)
    x = r * math.cos(t + rot_offset)
    y = r * math.sin(t + rot_offset)
    z = z_bump
    points.append((x, y, z, 1))

spline.points.add(len(points)-1)
for i, p in enumerate(points):
    spline.points[i].co = p

spiral_obj = bpy.data.objects.new("SpiralObj", spiral_curve)
bpy.context.collection.objects.link(spiral_obj)

# Bevel profile to create ridges
spiral_curve.bevel_mode = 'OBJECT'
spiral_curve.bevel_object = profile_obj

# -------------------------
# CONVERT TO MESH
# -------------------------
bpy.context.view_layer.objects.active = spiral_obj
spiral_obj.select_set(True)
bpy.ops.object.convert(target='MESH')

# -------------------------
# SUBDIVISION
# -------------------------
subd = spiral_obj.modifiers.new(name="SubD", type='SUBSURF')
subd.levels = 2
bpy.ops.object.modifier_apply(modifier=subd.name)

# -------------------------
# UV UNWRAP
# -------------------------
bpy.ops.object.mode_set(mode='EDIT')
bpy.ops.uv.smart_project()
bpy.ops.object.mode_set(mode='OBJECT')

# -------------------------
# CREATE MATERIAL
# -------------------------
mat = bpy.data.materials.new(name="ChakaliMaterial")
mat.use_nodes = True
nodes = mat.node_tree.nodes
links = mat.node_tree.links
for n in nodes:
    nodes.remove(n)

# Principled BSDF
bsdf = nodes.new("ShaderNodeBsdfPrincipled")
bsdf.location = 0,0
bsdf.inputs['Base Color'].default_value = (0.92, 0.65, 0.28, 1)
bsdf.inputs['Roughness'].default_value = 0.65

# Glossy shader for micro highlights
gloss = nodes.new("ShaderNodeBsdfGlossy")
gloss.inputs['Color'].default_value = (1,1,1,1)
gloss.inputs['Roughness'].default_value = 0.05
gloss.location = 200,100

# Mix Shader
mix = nodes.new("ShaderNodeMixShader")
mix.location = 400,0

# Output
output = nodes.new("ShaderNodeOutputMaterial")
output.location = 600,0
links.new(mix.outputs['Shader'], output.inputs['Surface'])

# Connect BSDF + Glossy
links.new(bsdf.outputs['BSDF'], mix.inputs[1])
links.new(gloss.outputs['BSDF'], mix.inputs[2])

# Layer Weight controls micro highlights
layer_weight = nodes.new("ShaderNodeLayerWeight")
layer_weight.inputs["Blend"].default_value = 0.3
layer_weight.location = 0,100
links.new(layer_weight.outputs["Facing"], mix.inputs[0])

spiral_obj.data.materials.append(mat)

# -------------------------
# BAKE PROCEDURAL MATERIAL TO BASE COLOR TEXTURE
# -------------------------
# Create image for bake
bake_img = bpy.data.images.new("BakedChakali", width=2048, height=2048)
nodes_img = nodes.new("ShaderNodeTexImage")
nodes_img.image = bake_img
nodes_img.select = True

# Set active material and object
spiral_obj.active_material_index = 0
bpy.context.view_layer.objects.active = spiral_obj
spiral_obj.select_set(True)

# Bake only diffuse color
bpy.ops.object.bake(type='DIFFUSE', pass_filter={'COLOR'}, use_clear=True, margin=4)

# Save baked texture
bake_img.filepath_raw = bake_texture_path
bake_img.file_format = 'PNG'
bake_img.save()

# Replace Base Color with baked texture for export
links.new(nodes_img.outputs['Color'], bsdf.inputs['Base Color'])
bsdf.inputs['Base Color'].default_value = (1,1,1,1)  # reset to use texture

# -------------------------
# EXPORT GLB
# -------------------------
bpy.ops.export_scene.gltf(
    filepath=export_path,
    export_format='GLB',
    export_materials='EXPORT'
)

print("✅ Chakali exported with baked Base Color! GLB/WebGL viewers now show correct golden-brown color.")
