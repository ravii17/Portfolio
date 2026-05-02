import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const HeroCard = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative w-full max-w-md aspect-square perspective-[1000px]"
    >
      
      <div 
        style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }}
        className="absolute inset-0 glass rounded-3xl overflow-hidden animate-float"
      >
        
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-purple-500/10 animate-gradient-shift" />

        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--border)) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />

        <div className="absolute top-1/4 left-1/4 w-20 h-20 rounded-2xl glass-strong animate-pulse-glow" />
        <div className="absolute bottom-1/3 right-1/4 w-16 h-16 rounded-full glass-strong animate-pulse-glow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/3 w-12 h-12 rounded-xl glass-strong animate-pulse-glow" style={{ animationDelay: '2s' }} />

        <div 
          style={{ transform: "translateZ(80px)" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="relative hover-spring">
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-purple-500 animate-pulse-glow" />
            <div className="absolute inset-2 rounded-xl bg-card/80 backdrop-blur-sm flex items-center justify-center">
              <span className="text-4xl font-bold text-gradient-accent">R</span>
            </div>
          </div>
        </div>
      </div>

      <div 
        style={{ transform: "translateZ(10px)" }}
        className="absolute -inset-4 border border-border/20 rounded-[2rem] pointer-events-none" 
      />
      <div 
        style={{ transform: "translateZ(-10px)" }}
        className="absolute -inset-8 border border-border/10 rounded-[2.5rem] pointer-events-none" 
      />
    </motion.div>
  );
};

export default HeroCard;
