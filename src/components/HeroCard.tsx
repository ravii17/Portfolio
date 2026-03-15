import { motion } from 'framer-motion';

const HeroCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
      transition={{ delay: 0.3, duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
      className="relative w-full max-w-md aspect-square"
    >
      {/* Main card */}
      <div className="absolute inset-0 glass rounded-3xl overflow-hidden animate-float">
        {/* Abstract gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-purple-500/10 animate-gradient-shift" />
        
        {/* Grid pattern */}
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

        {/* Floating elements */}
        <div className="absolute top-1/4 left-1/4 w-20 h-20 rounded-2xl glass-strong animate-pulse-glow" />
        <div className="absolute bottom-1/3 right-1/4 w-16 h-16 rounded-full glass-strong animate-pulse-glow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/3 w-12 h-12 rounded-xl glass-strong animate-pulse-glow" style={{ animationDelay: '2s' }} />

        {/* Center element */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-purple-500 animate-pulse-glow" />
            <div className="absolute inset-2 rounded-xl bg-card/80 backdrop-blur-sm flex items-center justify-center">
              <span className="text-4xl font-bold text-gradient-accent">R</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative rings */}
      <div className="absolute -inset-4 border border-border/20 rounded-[2rem] pointer-events-none" />
      <div className="absolute -inset-8 border border-border/10 rounded-[2.5rem] pointer-events-none" />
    </motion.div>
  );
};

export default HeroCard;
