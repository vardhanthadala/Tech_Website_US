export const randomRange = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

export const degToRad = (degrees: number) => {
  return degrees * (Math.PI / 180);
};

// Map a value from one range to another
export const mapRange = (value: number, inMin: number, inMax: number, outMin: number, outMax: number) => {
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};
