'use client';

import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * ProceduralSculpture
 * 
 * A glass spherical 3D object made of many mirror-finish blades
 * arranged radially like a fan/turbine, slowly rotating.
 */
export const ProceduralSculpture = () => {
  const groupRef = useRef<THREE.Group>(null);

  // ---------- BLADE GEOMETRY ----------
  const bladeGeo = useMemo(() => {
    const shape = new THREE.Shape();
    const length = 3.0;
    const widthBase = 0.6;
    const widthTip = 0.08;

    // Elongated blade: wide at base, tapering to narrow tip
    shape.moveTo(0, 0);
    shape.bezierCurveTo(widthBase * 0.5, length * 0.1, widthBase * 0.4, length * 0.5, widthTip, length);
    shape.lineTo(-widthTip, length);
    shape.bezierCurveTo(-widthBase * 0.4, length * 0.5, -widthBase * 0.5, length * 0.1, 0, 0);

    const geo = new THREE.ExtrudeGeometry(shape, {
      depth: 0.03,
      bevelEnabled: true,
      bevelSegments: 4,
      bevelSize: 0.015,
      bevelThickness: 0.01,
      curveSegments: 32,
    });
    geo.translate(0, 0, -0.015);
    return geo;
  }, []);

  // ---------- GLASS SPHERE ----------
  const sphereGeo = useMemo(() => {
    return new THREE.SphereGeometry(0.8, 64, 64);
  }, []);

  const glassMaterial = useMemo(() => {
    return new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#d4efed'),
      transmission: 0.6,
      thickness: 1.0,
      roughness: 0.0,
      ior: 1.5,
      clearcoat: 1.0,
      clearcoatRoughness: 0.0,
      transparent: true,
      opacity: 0.85,
      side: THREE.FrontSide,
      envMapIntensity: 1.5,
      attenuationColor: new THREE.Color('#7ac4be'),
      attenuationDistance: 2.0,
      metalness: 0.0,
      specularIntensity: 1.0,
      specularColor: new THREE.Color('#c8ebe8'),
    });
  }, []);

  // ---------- MIRROR BLADE MATERIAL ----------
  const mirrorMaterial = useMemo(() => {
    return new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#a0ccc8'),
      metalness: 0.7,
      roughness: 0.05,
      clearcoat: 1.0,
      clearcoatRoughness: 0.0,
      reflectivity: 1.0,
      transparent: true,
      opacity: 0.75,
      side: THREE.DoubleSide,
      envMapIntensity: 2.5,
    });
  }, []);

  // ---------- BLADE ARRANGEMENT ----------
  // Multiple rings of blades at different latitudes on a sphere
  const bladeConfigs = useMemo(() => {
    const configs: Array<{
      position: THREE.Vector3;
      rotation: THREE.Euler;
    }> = [];

    const radius = 1.0; // close to orb surface (orb is 0.8)
    const rings = [
      { lat: 0, count: 16, tilt: 0 },                    // single flat ring
    ];

    for (const ring of rings) {
      const y = Math.sin(ring.lat) * radius;
      const ringRadius = Math.cos(ring.lat) * radius;

      for (let i = 0; i < ring.count; i++) {
        const angle = (i / ring.count) * Math.PI * 2;
        const x = Math.cos(angle) * ringRadius;
        const z = Math.sin(angle) * ringRadius;

        // Point blade outward from sphere center
        const pos = new THREE.Vector3(x, y, z);
        const dir = pos.clone().normalize();

        // Calculate rotation to point blade outward
        const up = new THREE.Vector3(0, 1, 0);
        const quat = new THREE.Quaternion();
        quat.setFromUnitVectors(up, dir);
        const euler = new THREE.Euler().setFromQuaternion(quat);

        // Add slight tangential tilt (fan blade angle)
        euler.z += Math.PI * 0.15;

        configs.push({
          position: pos,
          rotation: euler,
        });
      }
    }

    return configs;
  }, []);

  // ---------- ANIMATION ----------
  useFrame((state) => {
    if (!groupRef.current) return;
    const time = state.clock.getElapsedTime();

    // Continuous slow rotation like a fan
    groupRef.current.rotation.y = time * 0.3;
    // Subtle wobble
    groupRef.current.rotation.x = Math.sin(time * 0.2) * 0.08;
    groupRef.current.rotation.z = Math.cos(time * 0.15) * 0.05;
    // Gentle float
    groupRef.current.position.y = 2.2 + Math.sin(time * 0.4) * 0.1;
  });

  return (
    <group ref={groupRef} scale={[0.45, 0.45, 0.45]}>
      {/* Central glass sphere */}
      <mesh geometry={sphereGeo} material={glassMaterial} />



      {/* Mirror blades arranged in spherical fan pattern */}
      {bladeConfigs.map((config, i) => (
        <mesh
          key={i}
          geometry={bladeGeo}
          material={mirrorMaterial}
          position={config.position}
          rotation={config.rotation}
          castShadow
          receiveShadow
        />
      ))}
    </group>
  );
};
