import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import PageTransition from '@/components/PageTransition';
import MagneticButton from '@/components/MagneticButton';
import { chapters } from '@/data/chapters';
import { ArrowLeft, Calendar, User, Bookmark, CheckCircle, Clock, BookOpen, ChevronRight, Sparkles } from 'lucide-react';

const ChapterDetail = () => {
  const { id } = useParams<{ id: string }>();
  const readingRef = useRef<HTMLDivElement>(null);

  const chapter = chapters.find(c => c.id === id);

  const handleStartReading = () => {
    readingRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  if (!chapter) {
    return (
      <PageTransition>
        <div className="min-h-screen bg-[#030303] text-white flex items-center justify-center relative overflow-hidden">
          {/* Background Ambient Orbs */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 max-w-md w-full mx-auto px-6 text-center">
            <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shadow-inner relative group">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <Bookmark className="w-8 h-8 text-primary/60" />
            </div>
            
            <h1 className="text-3xl font-black mb-4 tracking-tight">Chapter Not Found</h1>
            <p className="text-white/40 text-base font-light leading-relaxed mb-10">
              The page you are looking for doesn't exist or is currently blank in this digital odyssey.
            </p>
            
            <MagneticButton
              as={Link}
              to="/gallery"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors shadow-lg"
            >
              <ArrowLeft className="w-4 h-4" />
              Return to Gallery
            </MagneticButton>
          </div>
        </div>
      </PageTransition>
    );
  }

  const isCompleted = chapter.status === 'Completed';

  return (
    <PageTransition>
      <div className="min-h-screen bg-[#030303] text-white relative selection:bg-primary/30 overflow-x-hidden">
        
        {/* Glowing Ambient Background Orbs */}
        <div className="absolute top-0 left-0 w-full h-[70vh] bg-[radial-gradient(circle_at_50%_0%,rgba(139,92,246,0.12),transparent_70%)] pointer-events-none" />
        <div className="absolute top-[40vh] left-[-20%] w-[60vw] h-[60vw] bg-purple-900/5 blur-[150px] rounded-full pointer-events-none animate-pulse-glow" style={{ animationDuration: '6s' }} />
        <div className="absolute top-[80vh] right-[-20%] w-[60vw] h-[60vw] bg-blue-900/5 blur-[150px] rounded-full pointer-events-none animate-pulse-glow" style={{ animationDuration: '8s' }} />

        {/* Grain texture */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.08] pointer-events-none z-0" />

        <div className="relative z-10 container mx-auto px-6 py-32 max-w-7xl">
          
          {/* Navigation Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors group text-sm font-mono tracking-widest uppercase"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Back to Gallery
            </Link>
          </motion.div>

          {/* Main Grid Layout */}
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Main Content Column */}
            <div className="lg:col-span-8 space-y-12">
              <div className="space-y-6">
                
                {/* Meta Row: Chapter Number & Status */}
                <div className="flex flex-wrap items-center gap-4">
                  <span className="text-xs font-mono tracking-[0.3em] text-primary/80 uppercase">
                    Chapter {chapter.chapterNumber.toString().padStart(2, '0')}
                  </span>
                  <div className="h-4 w-px bg-white/10" />
                  <span className="text-xs font-mono tracking-[0.2em] text-white/40 uppercase">
                    {chapter.phase}
                  </span>
                  <div className="h-4 w-px bg-white/10" />
                  
                  {/* Status Badge */}
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${
                    isCompleted
                      ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
                      : 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400'
                  }`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${
                      isCompleted ? 'bg-emerald-400 animate-pulse' : 'bg-indigo-400 animate-pulse'
                    }`} />
                    {chapter.status}
                  </span>
                </div>

                {/* Chapter Title */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.6 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/70"
                >
                  {chapter.title}
                </motion.h1>

                {/* Quick Info Bar */}
                <div className="flex flex-wrap gap-6 text-sm text-white/50 pt-2 border-y border-white/5 py-4">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-primary/70" />
                    <span>{chapter.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary/70" />
                    <span>{chapter.publishedDate}</span>
                  </div>
                </div>
              </div>

              {/* Cover Card Banner */}
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="group relative rounded-[2rem] overflow-hidden glass border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.8)] aspect-[21/9]"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                <img
                  src={chapter.coverImage}
                  alt={chapter.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Floating graphic overlay */}
                <div className="absolute bottom-6 right-6 z-20 bg-black/60 backdrop-blur-md border border-white/10 p-4 rounded-2xl flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-white/40 uppercase tracking-widest">Odyssey Phase</p>
                    <p className="text-xs font-bold text-white/80 uppercase">{chapter.phase}</p>
                  </div>
                </div>
              </motion.div>

              {/* Short Description Section */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold tracking-tight text-white/90">Overview</h2>
                <p className="text-white/60 text-lg leading-relaxed font-light">
                  {chapter.longDescription}
                </p>
              </div>

              {/* Action Trigger for reading */}
              <div className="pt-4">
                <MagneticButton
                  onClick={handleStartReading}
                  className="flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold hover:bg-primary/90 transition-all shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:shadow-[0_0_40px_rgba(139,92,246,0.5)]"
                >
                  <BookOpen className="w-5 h-5" />
                  <span>Start Reading</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </MagneticButton>
              </div>
            </div>

            {/* Right Sticky Sidebar Column */}
            <div className="lg:col-span-4 sticky top-32 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="glass rounded-[2rem] p-8 border border-white/5 space-y-8 relative overflow-hidden"
              >
                {/* Decorative border highlight */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-purple-500 to-indigo-500" />
                
                {/* Stats / Parameters */}
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-widest text-white/40 mb-1">Author</h4>
                    <p className="text-base font-bold text-white/90">{chapter.author}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-widest text-white/40 mb-1">Date Created</h4>
                    <p className="text-base font-bold text-white/90">{chapter.publishedDate}</p>
                  </div>

                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-widest text-white/40 mb-1">Status</h4>
                    <p className="text-base font-bold text-white/90 flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${isCompleted ? 'bg-emerald-400' : 'bg-indigo-400'}`} />
                      {chapter.status}
                    </p>
                  </div>
                </div>

                <div className="h-px bg-white/5" />

                {/* Tags Category */}
                <div className="space-y-4">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-white/40">Tags & Categories</h4>
                  <div className="flex flex-wrap gap-2">
                    {chapter.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-white/60 bg-white/5 border border-white/5 hover:border-primary/20 hover:text-white hover:bg-primary/5 px-3 py-1.5 rounded-xl cursor-default transition-all"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="h-px bg-white/5" />

                {/* Sidebar Navigation Helpers */}
                <div className="space-y-3">
                  <Link
                    to="/gallery"
                    className="flex items-center justify-center gap-2 w-full px-5 py-3 border border-white/10 rounded-2xl text-xs font-bold text-white/60 hover:bg-white/5 hover:text-white hover:border-white/20 transition-all"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Gallery
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Reading Mode Section */}
          <section
            ref={readingRef}
            id="reading-section"
            className="mt-32 pt-24 border-t border-white/5 max-w-4xl mx-auto scroll-mt-24"
          >
            <div className="flex flex-col items-center mb-16 text-center">
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-primary to-transparent mb-6" />
              <span className="text-xs font-mono uppercase tracking-[0.4em] text-white/40">Reading Mode</span>
              <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white/90 mt-2 font-serif">
                Chapter {chapter.chapterNumber}: {chapter.title}
              </h3>
            </div>

            {/* Reading Content Wrapper (Lora Serif Font) */}
            <div className="font-serif text-lg md:text-xl text-white/80 leading-relaxed space-y-8 max-w-3xl mx-auto px-4 md:px-0">
              <p className="first-letter:text-5xl first-letter:font-black first-letter:text-primary first-letter:float-left first-letter:mr-3 first-letter:line-height-none first-letter:font-sans">
                {chapter.readingContent}
              </p>
              
              <div className="pt-16 pb-8 text-center text-white/20 text-xs tracking-widest font-mono select-none">
                ✦ ✦ ✦ END OF CHAPTER ✦ ✦ ✦
              </div>
            </div>

            {/* Back Button underneath reading */}
            <div className="flex justify-center mt-16 pb-12">
              <MagneticButton
                as={Link}
                to="/gallery"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 rounded-full font-medium hover:bg-white/5 hover:text-white hover:border-white/20 transition-all text-sm text-white/60"
              >
                <ArrowLeft className="w-4 h-4" />
                Finish & Go Back
              </MagneticButton>
            </div>
          </section>

        </div>
      </div>
    </PageTransition>
  );
};

export default ChapterDetail;
