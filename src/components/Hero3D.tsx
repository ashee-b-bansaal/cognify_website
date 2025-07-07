"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, Sparkles, Environment } from "@react-three/drei";
import { Suspense } from "react";
import * as THREE from "three";

function NeuralNetwork() {
  // Placeholder: Animated neural network sphere with glowing nodes
  return (
    <group>
      {/* Glowing core */}
      <mesh>
        <sphereGeometry args={[1.2, 32, 32]} />
        <meshPhysicalMaterial
          color="#5f5fff"
          emissive="#a259ff"
          emissiveIntensity={0.7}
          roughness={0.2}
          metalness={0.7}
          clearcoat={1}
          transparent
          opacity={0.85}
        />
      </mesh>
      {/* Neon nodes */}
      {[...Array(24)].map((_, i) => (
        <mesh key={i} position={[Math.sin(i) * 1.5, Math.cos(i) * 1.5, Math.sin(i * 2) * 1.5]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial emissive="#00fff0" color="#a259ff" emissiveIntensity={1.5} />
        </mesh>
      ))}
      {/* Connecting lines */}
      {[...Array(24)].map((_, i) => {
        const positions = new Float32Array([
          Math.sin(i) * 1.5,
          Math.cos(i) * 1.5,
          Math.sin(i * 2) * 1.5,
          Math.sin(i + 1) * 1.5,
          Math.cos(i + 1) * 1.5,
          Math.sin((i + 1) * 2) * 1.5,
        ]);
        return (
          <line key={i + 100}>
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                args={[positions, 3]}
              />
            </bufferGeometry>
            <lineBasicMaterial color="#00fff0" linewidth={2} />
          </line>
        );
      })}
    </group>
  );
}

export default function Hero3D() {
  return (
    <div className="w-full h-full min-h-[320px] max-h-[480px]">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }} gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping }}>
        <color attach="background" args={["#0a0f2c"]} />
        <ambientLight intensity={0.7} />
        <pointLight position={[5, 5, 5]} intensity={1.2} color="#a259ff" />
        <pointLight position={[-5, -5, -5]} intensity={0.8} color="#00fff0" />
        <Suspense fallback={null}>
          <Float speed={2} rotationIntensity={1.2} floatIntensity={1.5}>
            <NeuralNetwork />
          </Float>
          <Sparkles count={60} scale={[6, 2, 6]} color="#00fff0" size={2.5} speed={0.5} />
          <Environment preset="night" />
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1.2} />
      </Canvas>
    </div>
  );
} 