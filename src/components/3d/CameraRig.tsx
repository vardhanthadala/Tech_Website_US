import React, { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

export const CameraRig = ({ children }: { children: React.ReactNode }) => {
  const group = useRef<THREE.Group>(null);
  const { viewport } = useThree();

  useFrame((state) => {
    if (!group.current) return;
    
    // Smooth cinematic camera movement based on mouse position
    // (We move the group holding the object instead of the camera for a similar effect)
    const targetX = (state.pointer.x * viewport.width) / 20;
    const targetY = (state.pointer.y * viewport.height) / 20;
    
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, targetX, 0.05);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -targetY, 0.05);
  });

  return <group ref={group}>{children}</group>;
};
