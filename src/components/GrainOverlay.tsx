import { useEffect } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';

const GrainOverlay = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    // Set initial position to center
    mouseX.set(window.innerWidth / 2);
    mouseY.set(window.innerHeight / 2);
    
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const bgImage = useMotionTemplate`radial-gradient(600px circle at ${springX}px ${springY}px, hsl(var(--primary) / 0.15), transparent 80%)`;

  return (
    <>
      <div className="grain-overlay" />
      <div className="mesh-gradient" />
      <motion.div
        className="fixed inset-0 pointer-events-none z-[-1]"
        style={{
          background: bgImage,
        }}
      />
    </>
  );
};

export default GrainOverlay;
