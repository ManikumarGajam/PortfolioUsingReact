import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Ring } from "@react-three/drei";

export default function ProfileRing3D() {
  return (
    <div style={{ width: 240, height: 240, position: "relative", margin: "auto" }}>
      <Canvas camera={{ position: [0, 0, 3.8] }}>
        <ambientLight intensity={0.7} />
        <pointLight position={[5, 5, 5]} />
        <Ring args={[0.98, 1.18, 128]}>
          <meshStandardMaterial
            color="#00ffc8"
            emissive="#16f1d0"
            emissiveIntensity={0.66}
            toneMapped={false}
            opacity={0.85}
          />
        </Ring>
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.18} />
      </Canvas>
      <img
        src="profile.jpg"
        alt="profile"
        style={{
          width: 176, height: 176, position: "absolute", top: 32, left: 32,
          borderRadius: "50%", border: "0.22em solid #fff", boxShadow: "0 6px 28px 0 #14b2a919"
        }}
      />
    </div>
  );
}
