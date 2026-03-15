import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, FolderOpen, Archive, FileText, Mail } from 'lucide-react';

const navItems = [
  { path: '/', icon: Home, label: 'Home' },
  { path: '/work', icon: FolderOpen, label: 'Work' },
  { path: '/archive', icon: Archive, label: 'Archive' },
  { path: '/notes', icon: FileText, label: 'Notes' },
];

const FloatingNav = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
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
                className={`p-3 rounded-full transition-colors duration-200 ${
                  isActive 
                    ? 'bg-primary text-primary-foreground' 
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                }`}
              >
                <item.icon className="w-5 h-5" />
              </motion.div>
              
              {/* Tooltip */}
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-card text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {item.label}
              </span>
            </Link>
          );
        })}

        <div className="w-px h-6 bg-border mx-2" />

        <a
          href="mailto:ravi@example.com"
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
      </motion.div>
    </motion.nav>
  );
};

export default FloatingNav;
