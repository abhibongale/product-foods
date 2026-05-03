import bpy
import math
import os
import random

# -------------------------
# USER SETTINGS
# -------------------------
# Get the directory where this script is located
script_dir = os.path.dirname(os.path.abspath(__file__))
img_dir = os.path.join(script_dir, "img")

# Create img directory if it doesn't exist
os.makedirs(img_dir, exist_ok=True)

# Set export paths
export_path = os.path.join(img_dir, "chakali_realistic.glb")
bake_texture_path = os.path.join(img_dir, "chakali_realistic.png")

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
for obj in list(bpy.data.objects):
    bpy.data.objects.remove(obj, do_unlink=True)

# -------------------------
# SET RENDER ENGINE TO CYCLES (required for baking)
# -------------------------
bpy.context.scene.render.engine = 'CYCLES'
bpy.context.scene.cycles.device = 'CPU'  # or 'GPU' if available

# -------------------------
# CREATE RIDGED PROFILE
# -------------------------
profile_curve = bpy.data.curves.new('ProfileCurve', 'CURVE')
profile_curve.dimensions = '2D'
spline = profile_curve.splines.new('POLY')

ridge_points = []
r_outer = 0.009
r_inner = 0.005
segments = 16
for i in range(segments):
    angle = i * (2 * math.pi / segments)
    r = r_outer if i % 2 == 0 else r_inner
    x = r * math.cos(angle)
    y = r * math.sin(angle)
    ridge_points.append((x, y, 0, 1))

spline.points.add(len(ridge_points)-1)
for i, p in enumerate(ridge_points):
    spline.points[i].co = p

profile_obj = bpy.data.objects.new("ProfileObj", profile_curve)
bpy.context.collection.objects.link(profile_obj)

# -------------------------
# CREATE SPIRAL PATH
# -------------------------
spiral_curve = bpy.data.curves.new('SpiralCurve', 'CURVE')
spiral_curve.dimensions = '3D'
spline = spiral_curve.splines.new('POLY')
points = []

for i in range(turns * points_per_turn):
    t = i / points_per_turn * 2 * math.pi
    r = 0.02 + radius_growth * t + random.uniform(-radius_jitter, radius_jitter)
    rot_offset = random.uniform(-rotation_jitter, rotation_jitter)
    z_bump = random.uniform(-vertical_bump, vertical_bump)
    x = r * math.cos(t + rot_offset)
    y = r * math.sin(t + rot_offset)
    z = z_bump
    points.append((x, y, z, 1))

spline.points.add(len(points)-1)
for i, p in enumerate(points):
    spline.points[i].co = p

spiral_obj = bpy.data.objects.new("SpiralObj", spiral_curve)
bpy.context.collection.objects.link(spiral_obj)

# Bevel profile to create ridges
spiral_curve.bevel_mode = 'OBJECT'
spiral_curve.bevel_object = profile_obj

# -------------------------
# CONVERT TO MESH
# -------------------------
bpy.context.view_layer.objects.active = spiral_obj
spiral_obj.select_set(True)
bpy.ops.object.convert(target='MESH')

# -------------------------
# SUBDIVISION
# -------------------------
subd = spiral_obj.modifiers.new(name="SubD", type='SUBSURF')
subd.levels = 2
bpy.ops.object.modifier_apply(modifier=subd.name)

# -------------------------
# UV UNWRAP
# -------------------------
bpy.ops.object.mode_set(mode='EDIT')
bpy.ops.uv.smart_project()
bpy.ops.object.mode_set(mode='OBJECT')

# -------------------------
# CREATE REALISTIC CHAKLI MATERIAL
# -------------------------
mat = bpy.data.materials.new(name="ChakaliMaterial_Realistic")
mat.use_nodes = True
nodes = mat.node_tree.nodes
links = mat.node_tree.links
for n in nodes:
    nodes.remove(n)

# -------------------------
# TEXTURE NODES FOR REALISTIC VARIATION
# -------------------------

# Noise Texture for color variation (sesame seeds & spices)
noise_tex = nodes.new("ShaderNodeTexNoise")
noise_tex.inputs['Scale'].default_value = 50.0
noise_tex.inputs['Detail'].default_value = 8.0
noise_tex.inputs['Roughness'].default_value = 0.6
noise_tex.location = (-800, 0)

# Color Ramp for chakli color variation - GOLDEN CRISPY FRIED
color_ramp = nodes.new("ShaderNodeValToRGB")
color_ramp.location = (-600, 0)
color_ramp.color_ramp.elements[0].position = 0.0
color_ramp.color_ramp.elements[0].color = (0.68, 0.50, 0.28, 1)  # Medium golden-brown shadows
color_ramp.color_ramp.elements[1].position = 1.0
color_ramp.color_ramp.elements[1].color = (0.96, 0.78, 0.45, 1)  # Bright crispy golden highlights

# Mix base golden color with noise variation
mix_color = nodes.new("ShaderNodeMixRGB")
mix_color.blend_type = 'MIX'
mix_color.inputs['Fac'].default_value = 0.35  # 35% variation
mix_color.inputs['Color1'].default_value = (0.90, 0.68, 0.35, 1)  # Bright golden crispy base (MAIN COLOR - like perfectly fried)
mix_color.location = (-400, 0)

# Bump for surface detail (crispy texture)
noise_bump = nodes.new("ShaderNodeTexNoise")
noise_bump.inputs['Scale'].default_value = 100.0
noise_bump.inputs['Detail'].default_value = 12.0
noise_bump.location = (-400, -200)

bump = nodes.new("ShaderNodeBump")
bump.inputs['Strength'].default_value = 0.2
bump.inputs['Distance'].default_value = 0.01
bump.location = (-200, -200)

# Principled BSDF - golden crispy fried food shader
bsdf = nodes.new("ShaderNodeBsdfPrincipled")
bsdf.location = (0, 0)
# Base color connected from mix_color node
bsdf.inputs['Roughness'].default_value = 0.60  # Less rough for crispy shine
bsdf.inputs['Specular IOR Level'].default_value = 0.4  # More specular for oil sheen
bsdf.inputs['Sheen Weight'].default_value = 0.1  # Slight sheen for fried look

# Glossy shader for hot oil sheen (crispy fried look)
gloss = nodes.new("ShaderNodeBsdfGlossy")
gloss.inputs['Color'].default_value = (0.98, 0.90, 0.70, 1)  # Bright golden oil sheen
gloss.inputs['Roughness'].default_value = 0.12  # Sharp highlights from hot oil
gloss.location = (200, 100)

# Mix Shader
mix = nodes.new("ShaderNodeMixShader")
mix.location = (400, 0)

# Output
output = nodes.new("ShaderNodeOutputMaterial")
output.location = (600, 0)

# -------------------------
# CONNECT ALL NODES
# -------------------------

# Connect noise to color ramp
links.new(noise_tex.outputs['Fac'], color_ramp.inputs['Fac'])

# Connect color ramp to mix color
links.new(color_ramp.outputs['Color'], mix_color.inputs['Color2'])

# Connect mixed color to BSDF
links.new(mix_color.outputs['Color'], bsdf.inputs['Base Color'])

# Connect bump mapping for surface detail
links.new(noise_bump.outputs['Fac'], bump.inputs['Height'])
links.new(bump.outputs['Normal'], bsdf.inputs['Normal'])

# Connect BSDF + Glossy to Mix Shader
links.new(bsdf.outputs['BSDF'], mix.inputs[1])
links.new(gloss.outputs['BSDF'], mix.inputs[2])

# Layer Weight controls crispy highlights (fresh fried oil sheen)
layer_weight = nodes.new("ShaderNodeLayerWeight")
layer_weight.inputs["Blend"].default_value = 0.25  # More visible oil sheen for crispy look
layer_weight.location = (0, 100)
links.new(layer_weight.outputs["Facing"], mix.inputs[0])

# Connect Mix Shader to Output
links.new(mix.outputs['Shader'], output.inputs['Surface'])

spiral_obj.data.materials.append(mat)

# -------------------------
# BAKE PROCEDURAL MATERIAL TO BASE COLOR TEXTURE
# -------------------------
# Create image for bake
bake_img = bpy.data.images.new("BakedChakali_Realistic", width=2048, height=2048, alpha=False)
nodes_img = nodes.new("ShaderNodeTexImage")
nodes_img.image = bake_img
nodes_img.location = (200, -200)

# Make sure all nodes are deselected first
for n in nodes:
    n.select = False

# Select only the image texture node (required for baking)
nodes_img.select = True
nodes.active = nodes_img

# Set active material and object
spiral_obj.active_material_index = 0
bpy.context.view_layer.objects.active = spiral_obj
spiral_obj.select_set(True)

# Bake only diffuse color
bpy.ops.object.bake(type='DIFFUSE', pass_filter={'COLOR'}, use_clear=True, margin=4)

# Save baked texture
bake_img.filepath_raw = bake_texture_path
bake_img.file_format = 'PNG'
bake_img.save()

# Simplify material for export - use baked texture
# Remove all nodes except BSDF, texture, and output
for n in list(nodes):
    if n not in [bsdf, nodes_img, output]:
        nodes.remove(n)

# Reconnect with simple setup
links.clear()
links.new(nodes_img.outputs['Color'], bsdf.inputs['Base Color'])
links.new(bsdf.outputs['BSDF'], output.inputs['Surface'])

# Set material properties for web rendering
bsdf.inputs['Metallic'].default_value = 0.0
bsdf.inputs['Roughness'].default_value = 0.7
bsdf.inputs['Specular IOR Level'].default_value = 0.3

# -------------------------
# EXPORT GLB
# -------------------------
bpy.ops.export_scene.gltf(
    filepath=export_path,
    export_format='GLB',
    export_materials='EXPORT'
)

print("✅ GOLDEN CRISPY Chakali exported - just like freshly fried!")
print("🎨 Color features (golden crispy fried look):")
print("   - Bright golden crispy base: RGB(0.90, 0.68, 0.35)")
print("   - Medium golden-brown shadows: RGB(0.68, 0.50, 0.28)")
print("   - Bright crispy highlights: RGB(0.96, 0.78, 0.45)")
print("   - Hot oil sheen with sharp highlights")
print("   - Perfect golden fried appearance")
