import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 z-[10000] origin-left bg-gradient-to-r from-primary via-purple-500 to-blue-500 shadow-[0_0_10px_rgba(var(--primary),0.8)]"
      style={{ scaleX }}
    />
  );
};

export default ScrollProgress;
