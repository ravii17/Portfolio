import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface BentoCardProps {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  size?: 'small' | 'medium' | 'large';
  index?: number;
}

const BentoCard = ({ 
  id, 
  title, 
  description, 
  tags, 
  image, 
  size = 'medium',
  index = 0 
}: BentoCardProps) => {
  const sizeClasses = {
    small: 'col-span-1 row-span-1',
    medium: 'col-span-1 md:col-span-1 row-span-1',
    large: 'col-span-1 md:col-span-2 row-span-1 md:row-span-2',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        delay: index * 0.1, 
        duration: 0.6, 
        ease: [0.34, 1.56, 0.64, 1] 
      }}
      className={sizeClasses[size]}
    >
      <Link 
        to={`/project/${id}`}
        className="group block h-full"
      >
        <motion.div 
          whileHover={{ scale: 1.02, y: -4 }}
          transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
          className="glass h-full rounded-2xl overflow-hidden relative"
        >
          
          {image && (
            <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
              <img 
                src={image} 
                alt={title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/80 to-transparent" />
            </div>
          )}
          
          <div className="relative h-full p-6 md:p-8 flex flex-col justify-end min-h-[280px]">
            
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map((tag) => (
                <span 
                  key={tag}
                  className="text-xs uppercase tracking-wider text-muted-foreground bg-secondary/50 px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
              {title}
            </h3>

            <p className="text-muted-foreground text-sm md:text-base mb-4 line-clamp-2">
              {description}
            </p>

            <div className="flex items-center text-sm font-medium text-primary arrow-hover">
              <span>View Project</span>
              <ArrowUpRight className="w-4 h-4 ml-1 arrow-icon" />
            </div>
          </div>

          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default BentoCard;
