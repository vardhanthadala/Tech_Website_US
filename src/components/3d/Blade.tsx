import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { randomRange } from '@/utils/math';
import { MeshTransmissionMaterial } from '@react-three/drei';
import { ACRYLIC_COLORS } from '@/utils/colors';

interface BladeProps {
  index: number;
  total: number;
}

export const Blade: React.FC<BladeProps> = ({ index, total }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Base transforms based on index for the radial arrangement
  const progress = index / total;
  const angle = progress * Math.PI * 2;
  const radiusOffset = randomRange(0.2, 0.8);
  const heightOffset = progress * 1.5 - 0.75;
  const scale = randomRange(0.8, 1.2);

  // Generate the curved petal geometry
  const geometry = useMemo(() => {
    const shape = new THREE.Shape();
    
    // Abstract petal shape
    shape.moveTo(0, 0);
    shape.bezierCurveTo(0.5, 0.2, 1.5, 0.5, 2, 2);
    shape.bezierCurveTo(1.5, 2.5, 0.5, 2.8, 0, 3);
    shape.bezierCurveTo(-0.5, 2.8, -1.5, 2.5, -2, 2);
    shape.bezierCurveTo(-1.5, 0.5, -0.5, 0.2, 0, 0);

    const extrudeSettings = {
      depth: 0.05,
      bevelEnabled: true,
      bevelSegments: 4,
      steps: 2,
      bevelSize: 0.02,
      bevelThickness: 0.02,
      curveSegments: 24, // smooth curves
    };

    const geo = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    geo.center(); // Center the geometry for better rotation pivot
    return geo;
  }, []);

  // Animation state
  const timeOffset = useRef(randomRange(0, Math.PI * 2));
  const rotationSpeed = useRef(randomRange(0.1, 0.3));

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    
    // Subtle breathing/floating animation
    const floatY = Math.sin(time * 0.5 + timeOffset.current) * 0.05;
    const breatheScale = 1 + Math.sin(time * 0.3 + timeOffset.current) * 0.02;

    // Apply base position + subtle animation
    meshRef.current.position.y = heightOffset + floatY;
    
    // Slight independent rotation
    meshRef.current.rotation.z = Math.sin(time * rotationSpeed.current + timeOffset.current) * 0.05;
    meshRef.current.rotation.x = Math.sin(time * rotationSpeed.current * 0.5 + timeOffset.current) * 0.05;
    
    meshRef.current.scale.setScalar(scale * breatheScale);
  });

  return (
    <group rotation={[0, angle, 0]} position={[Math.cos(angle) * radiusOffset, 0, Math.sin(angle) * radiusOffset]}>
      <mesh
        ref={meshRef}
        geometry={geometry}
        castShadow
        receiveShadow
      >
        <MeshTransmissionMaterial
          transmission={1.0}
          thickness={0.5}
          roughness={0.05}
          ior={1.5}
          chromaticAberration={0.04}
          anisotropicBlur={0.1}
          clearcoat={1}
          clearcoatRoughness={0.1}
          distortion={0.1}
          distortionScale={0.2}
          temporalDistortion={0.1}
          color={ACRYLIC_COLORS.clear}
          attenuationColor={ACRYLIC_COLORS.blueTint}
          attenuationDistance={2}
        />
      </mesh>
    </group>
  );
};
