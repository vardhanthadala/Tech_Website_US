import { useScroll, useTransform, useSpring } from 'framer-motion';

export const useHeroAnimation = () => {
  const { scrollYProgress } = useScroll();
  
  // Smooth out the scroll value
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Example mappings for scroll animations
  const yOffset = useTransform(smoothProgress, [0, 1], [0, 300]);
  const opacity = useTransform(smoothProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(smoothProgress, [0, 0.5], [1, 0.8]);

  return {
    scrollYProgress,
    smoothProgress,
    yOffset,
    opacity,
    scale
  };
};
