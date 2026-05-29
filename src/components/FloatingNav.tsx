import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, FolderOpen, Archive, FileText, GraduationCap, Trophy, Mail, Github, Linkedin, Milestone } from 'lucide-react';

const navItems = [
  { path: '/', icon: Home, label: 'Home' },
  { path: '/work', icon: FolderOpen, label: 'Work' },
  { path: '/education', icon: GraduationCap, label: 'Education' },
  { path: '/achievements', icon: Trophy, label: 'Achievements' },
  { path: '/archive', icon: Archive, label: 'Archive' },
  { path: '/notes', icon: FileText, label: 'Notes' },
  { path: '/gallery', icon: Milestone, label: 'Gallery' },
];

const FloatingNav = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const sentinel = document.getElementById('scroll-sentinel');
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsScrolled(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {createPortal(
        <div id="scroll-sentinel" className="absolute top-0 left-0 w-px h-[100px] pointer-events-none" />,
        document.body
      )}
      <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
    >
      <motion.div
        animate={{
          scale: isScrolled ? 0.9 : 1,
          paddingLeft: isScrolled ? 16 : 24,
          paddingRight: isScrolled ? 16 : 24,
        }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="glass-strong rounded-full py-3 px-6 flex items-center gap-1"
      >
        {navItems.map((item) => {
          const isActive = location.pathname === item.path ||
            (item.path === '/work' && location.pathname.startsWith('/project'));

          return (
            <Link
              key={item.path}
              to={item.path}
              className="relative group"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`p-3 rounded-full transition-all duration-300 ${isActive
                  ? 'bg-primary text-primary-foreground shadow-[0_0_20px_rgba(139,92,246,0.6)] scale-110'
                  : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                  }`}
              >
                <item.icon className="w-5 h-5" />
              </motion.div>

              <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-card text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {item.label}
              </span>
            </Link>
          );
        })}

        <div className="w-px h-6 bg-border mx-2" />

        <a
          href="mailto:ravi170@icloud.com"
          className="relative group"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors duration-200"
          >
            <Mail className="w-5 h-5" />
          </motion.div>
          <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-card text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Contact
          </span>
        </a>
        <a
          href="https://github.com/ravii17"
          target="_blank"
          rel="noopener noreferrer"
          className="relative group"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors duration-200"
          >
            <Github className="w-5 h-5" />
          </motion.div>
          <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-card text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            GitHub
          </span>
        </a>

        <a
          href="https://www.linkedin.com/in/ravikumar17"
          target="_blank"
          rel="noopener noreferrer"
          className="relative group"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors duration-200"
          >
            <Linkedin className="w-5 h-5" />
          </motion.div>
          <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-card text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            LinkedIn
          </span>
        </a>
      </motion.div>
    </motion.nav>
    </>
  );
};

export default FloatingNav;
