'use client';

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { ProceduralSculpture } from './ProceduralSculpture';
import { Lights } from './Lights';
import { CameraRig } from './CameraRig';

export const HeroCanvas = () => {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <CameraRig>
            <ProceduralSculpture />
          </CameraRig>
          <Lights />
        </Suspense>
      </Canvas>
    </div>
  );
};
