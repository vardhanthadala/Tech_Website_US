import React from 'react';
import { Environment, Lightformer, ContactShadows } from '@react-three/drei';

export const Lights = () => {
  return (
    <>
      {/* Soft lavender-tinted ambient to match the screenshot background tone */}
      <ambientLight intensity={0.6} color="#e8e4ff" />

      {/* Key light: upper-right, slightly warm white */}
      <directionalLight 
        position={[8, 12, 6]} 
        intensity={2.0} 
        color="#ffffff" 
        castShadow
        shadow-mapSize={[2048, 2048]}
      />
      
      {/* Fill light: left side, soft blue to enhance the acrylic blue tint */}
      <directionalLight position={[-8, 6, -4]} intensity={1.0} color="#c4d4ff" />
      
      {/* Back/rim light for edge highlights on the glass */}
      <directionalLight position={[0, -5, -8]} intensity={1.2} color="#ffffff" />
      
      <Environment resolution={512}>
        {/* Soft studio environment with lavender tones */}
        <group rotation={[-Math.PI / 4, -0.3, 0]}>
          <Lightformer intensity={5} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} color="#eeeeff" />
          <Lightformer intensity={3} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={[20, 0.4, 1]} color="#d4d8ff" />
          <Lightformer rotation-y={Math.PI / 2} position={[-5, -1, -1]} scale={[20, 0.5, 1]} color="#ffffff" />
          <Lightformer rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={[20, 1, 1]} color="#ffffff" />
          {/* Strong overhead for that bright, clean feel */}
          <Lightformer intensity={4} rotation-x={Math.PI / 2} position={[0, 8, 0]} scale={[15, 15, 1]} color="#f0f0ff" />
        </group>
      </Environment>

      {/* Subtle contact shadows */}
      <ContactShadows 
        position={[0, -3.5, 0]} 
        opacity={0.4} 
        scale={15} 
        blur={2.5} 
        far={4} 
        color="#8888aa"
      />
    </>
  );
};
