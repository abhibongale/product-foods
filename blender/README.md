# 3D Chakli Generator for Blender

Generate realistic 3D chakli models with authentic golden-brown colors for use in your website hero animations (like Johnny's Dirty Soda cans).

## 📁 Files

- **`chakli.py`** - Original chakli generator with bright orange color
- **`chakli_realistic.py`** - ✨ **Recommended** - Realistic golden-brown chakli with texture variation
- **`img/`** - Output directory for generated 3D models and textures

## 🎨 Realistic Chakli Features

The `chakli_realistic.py` script generates chakli with authentic fried snack appearance:

### Color Palette
- **Base Color**: RGB(0.78, 0.58, 0.24) - Deep golden brown
- **Dark Spots**: RGB(0.68, 0.48, 0.18) - Sesame seeds & spices
- **Highlights**: RGB(0.82, 0.62, 0.28) - Golden fried edges
- **Oil Sheen**: RGB(0.95, 0.85, 0.60) - Subtle edge highlights

### Texture Details
- Procedural noise for color variation (sesame seeds effect)
- Bump mapping for crispy surface texture
- Matte finish (0.7 roughness) for authentic fried look
- Subtle oil sheen on edges only

## 🚀 Usage

### In Blender:

1. Open Blender
2. Switch to Scripting workspace
3. Open `chakli_realistic.py`
4. Click "Run Script" or press `Alt+P`
5. Wait for rendering and baking to complete

### Output Files (in `blender/img/`):

- **`chakali_realistic.glb`** - 3D model with baked textures (use this in WebGL/Three.js)
- **`chakali_realistic.png`** - Baked color texture (2048x2048)

## 🌐 Using in Your Website

The generated GLB file can be used with Three.js or React Three Fiber to create animated 3D chakli that falls and rotates in your hero section, just like the soda cans on Johnny's Dirty Soda website.

### Example Integration:
```jsx
import { Canvas } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

function Chakli() {
  const { scene } = useGLTF('/blender/img/chakali_realistic.glb')
  return <primitive object={scene} />
}

// Use in hero animation
<Canvas>
  <Chakli />
</Canvas>
```

## 🎯 Next Steps

1. Generate multiple variations (rotate/scale parameters)
2. Export different chakli types (kadboli, chivda, etc.)
3. Integrate into React Three Fiber for hero animations
4. Add lighting and environment for realistic rendering

## 📝 Notes

- The script automatically creates the `img/` directory if it doesn't exist
- Baking may take 1-2 minutes depending on your system
- Exported GLB files include embedded textures for easy deployment
- Use Cycles render engine for best results
