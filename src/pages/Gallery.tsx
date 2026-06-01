import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence, useMotionValue } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, Brain, Code, ChevronRight, Globe, Cpu, Bot } from 'lucide-react';
import { Link } from 'react-router-dom';
import { chapters } from '../data/chapters';

gsap.registerPlugin(ScrollTrigger);

const iconMap: Record<string, React.ComponentType<any>> = {
  code: Code,
  globe: Globe,
  brain: Brain,
  bot: Bot,
  cpu: Cpu,
  sparkles: Sparkles
};

const milestones = chapters.map(c => ({
  ...c,
  icon: iconMap[c.iconName] || Code
}));

const MagneticCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { stiffness: 250, damping: 25, mass: 0.5 });
  const springY = useSpring(cursorY, { stiffness: 250, damping: 25, mass: 0.5 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    let ticking = false;
    const moveCursor = (e: MouseEvent) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          cursorX.set(e.clientX);
          cursorY.set(e.clientY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('mousemove', moveCursor, { passive: true });
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[100] mix-blend-screen hidden md:block"
      style={{
        x: springX,
        y: springY,
        translateX: '-50%',
        translateY: '-50%',
        background: 'radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)',
        boxShadow: '0 0 40px rgba(139,92,246,0.2)',
        scale: isHovering ? 2 : 1,
        willChange: 'transform',
      }}
    >
      <div className="absolute inset-0 border border-primary/40 rounded-full animate-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-white rounded-full shadow-[0_0_10px_white]" />
    </motion.div>
  );
};

const NeuralGrid = () => {
  return (
    <div className="fixed inset-0 pointer-events-none opacity-[0.03]">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
      <svg width="100%" height="100%" className="absolute inset-0">
        <pattern id="neural-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="currentColor" />
          <path d="M 2 2 L 50 50 M 2 2 L 20 80" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#neural-pattern)" />
      </svg>
    </div>
  );
};

const PathParticle = ({ pathRef, delay }: { pathRef: React.RefObject<SVGPathElement>, delay: number }) => {
  const particleRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    if (!pathRef.current || !particleRef.current) return;

    const path = pathRef.current;
    const particle = particleRef.current;
    const length = path.getTotalLength();

    // Precompute points to prevent layout thrashing in the animation loop
    const pointsCount = 200;
    const points: { x: number; y: number }[] = [];
    for (let i = 0; i <= pointsCount; i++) {
      const p = path.getPointAtLength((i / pointsCount) * length);
      points.push({ x: p.x, y: p.y });
    }

    gsap.to(particle, {
      duration: 10 + Math.random() * 5,
      repeat: -1,
      delay: delay,
      ease: "none",
      onUpdate: function () {
        const progress = this.progress();
        const index = Math.min(pointsCount, Math.floor(progress * pointsCount));
        const point = points[index];
        if (point) {
          // Use hardware-accelerated transform properties (x/y) instead of cx/cy
          gsap.set(particle, { x: point.x, y: point.y });
        }
      }
    });
  }, [pathRef]);

  return (
    <circle
      ref={particleRef}
      cx={0}
      cy={0}
      r="2"
      fill="#8B5CF6"
      className="filter blur-[1px]"
      style={{ willChange: "transform" }}
    />
  );
};

const Gallery = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001
  });

  const pathD = "M 500 0 C 600 200, 700 400, 500 600 S 300 1000, 500 1200 S 700 1600, 500 1800 S 300 2200, 500 2400 S 700 2800, 500 3000 S 300 3400, 500 3600 S 700 4000, 500 4200 S 300 4600, 500 5000 S 700 5400, 500 5800 S 300 6200, 500 6600 S 700 7000, 500 7400";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      ref={containerRef}
      className="relative min-h-[800vh] bg-[#030303] text-white selection:bg-primary/30 overflow-x-hidden"
    >
      <MagneticCursor />
      <NeuralGrid />

      {/* Handcrafted Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(139,92,246,0.08),transparent_70%)]" />
        <div className="absolute top-1/3 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-indigo-900/5 to-transparent" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] mix-blend-overlay" />

        {/* Floating Fog Layers */}
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 -left-1/4 w-full h-full bg-purple-600/5 blur-[150px] rounded-full"
          style={{ willChange: "transform" }}
        />
        <motion.div
          animate={{ x: [0, -40, 0], y: [0, -50, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 -right-1/4 w-full h-full bg-blue-600/5 blur-[150px] rounded-full"
          style={{ willChange: "transform" }}
        />
      </div>

      {/* Organic Curved Path */}
      <div className="absolute inset-0 pointer-events-none flex justify-center">
        <svg
          width="1000"
          height="7500"
          viewBox="0 0 1000 7500"
          className="w-full max-w-6xl overflow-visible opacity-40"
        >
          <defs>
            <linearGradient id="main-path-gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.2" />
              <stop offset="20%" stopColor="#D946EF" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.5" />
              <stop offset="80%" stopColor="#10B981" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#F43F5E" stopOpacity="0.2" />
            </linearGradient>
            <filter id="path-glow-filter" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="12" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Base Path */}
          <path
            d={pathD}
            fill="none"
            stroke="rgba(255,255,255,0.03)"
            strokeWidth="2"
          />

          {/* Animated Glow Path */}
          <motion.path
            ref={pathRef}
            d={pathD}
            fill="none"
            stroke="url(#main-path-gradient)"
            strokeWidth="4"
            style={{ pathLength: smoothProgress }}
            filter="url(#path-glow-filter)"
          />

          {/* Energy Particles */}
          {[...Array(12)].map((_, i) => (
            <PathParticle key={i} pathRef={pathRef} delay={i * 1.5} />
          ))}
        </svg>
      </div>

      {/* Cinematic Content Section */}
      <div className="relative z-10 container mx-auto px-6 py-40">
        <header className="max-w-5xl mx-auto text-center mb-80">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center"
          >
            <div className="px-6 py-2 rounded-full border border-white/5 bg-white/5 backdrop-blur-md text-primary text-xs font-bold uppercase tracking-[0.3em] mb-12 shadow-[0_0_20px_rgba(139,92,246,0.15)]">
              Digital Gallery of my Career
            </div>
            <h1 className="text-7xl md:text-9xl font-black mb-10 tracking-tighter leading-none">
              THE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-primary to-purple-800 animate-gradient-shift py-4">EVOLUTION</span>
            </h1>
            <p className="text-white/40 text-xl md:text-2xl max-w-3xl mx-auto font-light leading-relaxed">
              Documenting the evolution of a developer crafting meaningful experiences through technology.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1.5 }}
            className="mt-20 flex flex-col items-center gap-4 text-white/20 animate-bounce"
          >
            <span className="text-xs uppercase tracking-widest">Descent</span>
            <div className="w-px h-20 bg-gradient-to-b from-white/20 to-transparent" />
          </motion.div>
        </header>

        {/* Milestone Flow */}
        <div className="relative space-y-[100vh] pb-[60vh]">
          {milestones.map((milestone, index) => (
            <MilestoneCard
              key={milestone.id}
              milestone={milestone}
              index={index}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const MilestoneCard = ({ milestone, index }: { milestone: any; index: number }) => {
  const isLeft = milestone.side === 'left';
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [burstParticles, setBurstParticles] = useState<{ id: number; x: number; y: number }[]>([]);

  // Magnetic effect values
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

  const rectRef = useRef<DOMRect | null>(null);

  useEffect(() => {
    if (!isHovered) return;

    const updateRect = () => {
      if (cardRef.current) {
        rectRef.current = cardRef.current.getBoundingClientRect();
      }
    };

    updateRect();

    window.addEventListener('scroll', updateRect, { passive: true });
    window.addEventListener('resize', updateRect, { passive: true });

    return () => {
      window.removeEventListener('scroll', updateRect);
      window.removeEventListener('resize', updateRect);
    };
  }, [isHovered]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;

    if (!rectRef.current) {
      rectRef.current = cardRef.current.getBoundingClientRect();
    }
    const rect = rectRef.current;

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    window.requestAnimationFrame(() => {
      x.set(distanceX * 0.05);
      y.set(distanceY * 0.05);
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    // Particle burst effect
    const newParticles = Array.from({ length: 8 }).map((_, i) => ({
      id: Math.random(),
      x: (Math.random() - 0.5) * 100,
      y: (Math.random() - 0.5) * 100
    }));
    setBurstParticles(newParticles);
    setTimeout(() => setBurstParticles([]), 1000);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
    rectRef.current = null;
  };

  const widthClass = {
    normal: 'max-w-md',
    wide: 'max-w-2xl',
    compact: 'max-w-sm'
  }[milestone.size as 'normal' | 'wide' | 'compact'];

  return (
    <div className={`flex w-full ${isLeft ? 'md:justify-start' : 'md:justify-end'} justify-center relative snap-center px-4`}>
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        initial={{
          opacity: 0,
          x: isLeft ? -100 : 100,
          y: 50,
          rotate: milestone.rotation * 2
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          y: 0,
          rotate: milestone.rotation
        }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
          delay: index * 0.1
        }}
        style={{
          translateX: mouseX,
          translateY: mouseY,
          willChange: 'transform',
        }}
        className={`group relative ${widthClass} w-full cursor-none md:cursor-default`}
      >
        {/* Particle Burst */}
        <AnimatePresence>
          {burstParticles.map(p => (
            <motion.div
              key={p.id}
              initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
              animate={{ x: p.x, y: p.y, opacity: 0, scale: 0 }}
              exit={{ opacity: 0 }}
              className="absolute top-1/2 left-1/2 w-1 h-1 bg-primary rounded-full z-50 pointer-events-none"
            />
          ))}
        </AnimatePresence>

        {/* Storytelling Label */}
        <div className={`absolute -top-10 ${isLeft ? 'md:left-0' : 'md:right-0'} left-0 flex items-center gap-3 text-primary/60 font-mono text-[10px] uppercase tracking-[0.4em]`}>
          <motion.span
            className="w-8 h-px bg-current opacity-30"
            animate={{ width: isHovered ? 40 : 32 }}
          />
          {milestone.phase}
        </div>

        {/* Multi-layered Glass Card */}
        <div className="relative z-10 p-6 md:p-12 rounded-[2rem] overflow-hidden">
          {/* Inner Glow and Depth Shadow */}
          <div className="absolute inset-0 bg-[#050505] border border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-700 group-hover:border-primary/20 group-hover:shadow-[0_0_80px_rgba(139,92,246,0.1)]" />

          {/* Breathing Animation Layer */}
          <motion.div
            className="absolute inset-0 bg-primary/2 opacity-0 group-hover:opacity-100"
            animate={{ opacity: isHovered ? [0.05, 0.1, 0.05] : 0 }}
            transition={{ duration: 3, repeat: Infinity }}
          />

          {/* Background Blur Variations */}
          <div className="absolute inset-0 bg-white/[0.01] backdrop-blur-3xl group-hover:bg-white/[0.02]" />

          {/* Animated Border Highlight */}
          <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${milestone.color} transform origin-left scale-x-0 transition-transform duration-700 ease-out group-hover:scale-x-100`} />

          {/* Content */}
          <div className="relative">
            <header className="flex items-start justify-between mb-8">
              <div className="space-y-1">
                <motion.span
                  className="text-xs font-mono text-primary/80 tracking-widest"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  [{milestone.year}]
                </motion.span>
                <h3 className="text-2xl md:text-4xl font-bold tracking-tight text-white/90 group-hover:text-white transition-colors">
                  {milestone.title}
                </h3>
              </div>
              <div className={`p-3 md:p-4 rounded-2xl bg-white/5 border border-white/5 shadow-inner transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 group-hover:bg-primary/10 group-hover:border-primary/20`}>
                <milestone.icon className={`w-6 h-6 md:w-8 md:h-8 ${isHovered ? 'text-white' : 'text-primary'} transition-colors duration-500`} strokeWidth={1.5} />
              </div>
            </header>

            <p className="text-white/40 text-base md:text-lg leading-relaxed mb-10 group-hover:text-white/60 transition-colors">
              {milestone.description}
            </p>

            <footer className="flex items-center justify-between">
              <div className="flex -space-x-2">
                {[1, 2, 3].map(i => (
                  <motion.div
                    key={i}
                    className="w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-[#050505] bg-white/5 flex items-center justify-center text-[8px] md:text-[10px] text-white/30 backdrop-blur-sm"
                    whileHover={{ y: -5, scale: 1.1 }}
                  >
                    {i}
                  </motion.div>
                ))}
              </div>

              <Link to={`/gallery/${milestone.id}`} className="inline-block">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2 md:px-6 md:py-2.5 rounded-full bg-white/5 border border-white/5 text-[10px] md:text-xs font-bold text-white/60 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all group/btn"
                >
                  VIEW CHAPTER
                  <ChevronRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </motion.button>
              </Link>
            </footer>
          </div>
        </div>

        {/* Magnetic Glow Follower (Behind Card) */}
        <div className="absolute -inset-4 bg-primary/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
      </motion.div>

      {/* Connection Point with Ripple Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none z-0">
        <motion.div
          className="w-12 h-12 rounded-full border border-primary/20 bg-primary/5 flex items-center justify-center"
          whileInView={{
            scale: [0.8, 1.2, 1],
            opacity: [0, 1, 0.5]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-3 h-3 rounded-full bg-primary shadow-[0_0_15px_#8B5CF6]" />
        </motion.div>
      </div>
    </div>
  );
};

export default Gallery;
