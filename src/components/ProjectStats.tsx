import { useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { projects } from '@/data/projects';

const Particles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-3xl">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 bg-purple-400/60 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.8)]"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -60],
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
};

const ProjectStats = () => {
  const totalProjects = projects.length; // auto-count
  
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, totalProjects, {
      duration: 2.5,
      ease: "easeOut",
    });

    return animation.stop;
  }, [count, totalProjects]);

  return (
    <div className="relative w-full max-w-5xl mx-auto my-16 px-4">
      {/* Background glow behind the card */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-purple-600/20 blur-[100px] -z-10 rounded-full" />
      
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ scale: 1.02 }}
        className="relative overflow-hidden rounded-3xl border border-purple-500/20 bg-background/40 backdrop-blur-2xl p-8 md:p-12 shadow-[0_0_40px_rgba(139,92,246,0.1)] hover:shadow-[0_0_80px_rgba(139,92,246,0.2)] hover:border-purple-500/40 transition-all duration-500 group"
      >
        <Particles />
        
        {/* Animated glowing streak effect on hover */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/10 to-transparent -translate-x-full"
          whileHover={{ x: ['-100%', '200%'] }}
          transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity, repeatDelay: 0.5 }}
        />
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
          
          {/* Left side: Counter */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-3">
            <h3 className="text-xl md:text-2xl font-semibold text-foreground/80 uppercase tracking-widest">
              Projects Completed
            </h3>
            <div className="flex items-baseline gap-2">
              <motion.span className="text-7xl md:text-9xl font-extrabold bg-clip-text text-transparent bg-gradient-to-br from-purple-400 via-blue-400 to-purple-600 drop-shadow-[0_0_30px_rgba(168,85,247,0.4)]">
                {rounded}
              </motion.span>
              <span className="text-5xl md:text-7xl font-bold text-blue-500">+</span>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground font-medium">
              Total Projects Built
            </p>
          </div>

          {/* Right side: Mini labels */}
          <div className="grid grid-cols-2 gap-4 lg:gap-6 w-full lg:w-auto">
            {[
              { label: 'Full Stack Apps', color: 'from-blue-500/10 to-blue-500/5', border: 'border-blue-500/20', shadow: 'hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]' },
              { label: 'AI Projects', color: 'from-purple-500/10 to-purple-500/5', border: 'border-purple-500/20', shadow: 'hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]' },
              { label: 'Android Apps', color: 'from-green-500/10 to-green-500/5', border: 'border-green-500/20', shadow: 'hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]' },
              { label: 'UI/UX Designs', color: 'from-pink-500/10 to-pink-500/5', border: 'border-pink-500/20', shadow: 'hover:shadow-[0_0_20px_rgba(236,72,153,0.3)]' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1, type: "spring", stiffness: 100 }}
                whileHover={{ scale: 1.05 }}
                className={`flex items-center justify-center p-5 lg:p-6 rounded-2xl border ${stat.border} bg-gradient-to-br ${stat.color} backdrop-blur-md transition-shadow duration-300 ${stat.shadow} cursor-default`}
              >
                <span className="text-base md:text-lg font-semibold text-foreground/90 whitespace-nowrap">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
          
        </div>
        
        {/* Subtle internal pulse effects */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }} 
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-[80px] -translate-y-1/2 -z-10 pointer-events-none" 
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }} 
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/2 right-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px] -translate-y-1/2 -z-10 pointer-events-none" 
        />
      </motion.div>
    </div>
  );
};

export default ProjectStats;
