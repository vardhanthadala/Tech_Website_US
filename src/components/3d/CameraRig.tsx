import React, { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

export const CameraRig = ({ children }: { children: React.ReactNode }) => {
  return <group>{children}</group>;
};
