"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Torus, Sphere, Box, Float, Stars } from "@react-three/drei";
import * as THREE from "three";

function Gear({
  position,
  scale = 1,
  speed = 1,
  color = "#DC2626",
}: {
  position: [number, number, number];
  scale?: number;
  speed?: number;
  color?: string;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.z += delta * speed * 0.4;
    }
  });

  return (
    <mesh ref={ref} position={position} scale={scale}>
      <torusGeometry args={[1, 0.3, 6, 8]} />
      <meshStandardMaterial
        color={color}
        metalness={0.8}
        roughness={0.2}
        emissive={color}
        emissiveIntensity={0.15}
      />
    </mesh>
  );
}

function FloatingRing({
  position,
  scale = 1,
}: {
  position: [number, number, number];
  scale?: number;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.3;
      ref.current.rotation.y += 0.006;
    }
  });

  return (
    <mesh ref={ref} position={position} scale={scale}>
      <torusGeometry args={[1.2, 0.08, 16, 60]} />
      <meshStandardMaterial
        color="#EA580C"
        metalness={0.9}
        roughness={0.1}
        emissive="#EA580C"
        emissiveIntensity={0.3}
      />
    </mesh>
  );
}

function ParticleField() {
  const count = 200;
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return arr;
  }, []);

  const ref = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute args={[positions, 3]} attach="attributes-position" />
      </bufferGeometry>
      <pointsMaterial color="#DC2626" size={0.05} transparent opacity={0.6} />
    </points>
  );
}

function WireframeSphere() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.15;
      ref.current.rotation.x = state.clock.elapsedTime * 0.08;
    }
  });

  return (
    <mesh ref={ref} position={[0, 0, 0]}>
      <icosahedronGeometry args={[2.5, 1]} />
      <meshStandardMaterial
        color="#DC2626"
        wireframe
        transparent
        opacity={0.12}
        emissive="#DC2626"
        emissiveIntensity={0.5}
      />
    </mesh>
  );
}

export default function Scene3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 55 }}
      style={{ background: "transparent" }}
      dpr={[1, 1.5]}
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} color="#DC2626" intensity={2} />
      <pointLight position={[-5, -5, -5]} color="#EA580C" intensity={1} />
      <directionalLight position={[0, 5, 5]} intensity={0.8} />

      <Stars radius={50} depth={20} count={600} factor={2} fade speed={0.5} />
      <ParticleField />
      <WireframeSphere />

      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
        <Gear position={[-3.5, 1.5, 0]} scale={0.7} speed={1.2} color="#DC2626" />
      </Float>
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
        <Gear position={[3.5, -1, 0]} scale={0.5} speed={-0.8} color="#EA580C" />
      </Float>
      <Float speed={1.2} rotationIntensity={0.4} floatIntensity={1}>
        <Gear position={[0, 2.5, -1]} scale={0.4} speed={1.5} color="#EF4444" />
      </Float>

      <Float speed={1} rotationIntensity={0.5} floatIntensity={0.6}>
        <FloatingRing position={[2, 1.5, 0]} scale={0.8} />
      </Float>
      <Float speed={1.8} rotationIntensity={0.3} floatIntensity={0.9}>
        <FloatingRing position={[-2, -1.5, 0.5]} scale={0.6} />
      </Float>
    </Canvas>
  );
}
