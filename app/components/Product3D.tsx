"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

interface Product3DProps {
  isAnimating: boolean;
  productIndex: number;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Product3D(_props: Product3DProps) {
  return (
    <div className="w-[90vw] h-[90vw] max-w-[900px] max-h-[900px] md:w-[80vw] md:h-[80vw] lg:w-[70vw] lg:h-[70vw]">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <mesh>
          <torusGeometry args={[1, 0.4, 16, 100]} />
          <meshStandardMaterial color="#f97316" />
        </mesh>
      </Canvas>
    </div>
  );
}
