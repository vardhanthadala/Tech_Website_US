import * as THREE from 'three';

// Premium acrylic attenuation colors
export const ACRYLIC_COLORS = {
  blueTint: new THREE.Color('#3b82f6'),
  deepBlue: new THREE.Color('#1d4ed8'),
  purpleTint: new THREE.Color('#8b5cf6'),
  clear: new THREE.Color('#ffffff'),
  darkClear: new THREE.Color('#a1a1aa')
};

export const getRandomPremiumColor = () => {
  const colors = [
    ACRYLIC_COLORS.blueTint,
    ACRYLIC_COLORS.deepBlue,
    ACRYLIC_COLORS.purpleTint,
    ACRYLIC_COLORS.clear
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};
