import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageTransition from '@/components/PageTransition';
import SectionHeader from '@/components/SectionHeader';
import { archiveProjects } from '@/data/projects';
import { ArrowUpRight } from 'lucide-react';

const Archive = () => {
  return (
    <PageTransition>
      <div className="min-h-screen py-24 px-6 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <SectionHeader 
            title="Archive" 
            subtitle="A collection of past projects, experiments, and side quests in software engineering."
          />

          <div className="space-y-1">
            
            <div className="hidden md:grid grid-cols-12 gap-4 py-3 text-sm text-muted-foreground border-b border-border">
              <div className="col-span-1">Year</div>
              <div className="col-span-5">Project</div>
              <div className="col-span-5">Tech</div>
              <div className="col-span-1"></div>
            </div>

            {archiveProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
              >
                <Link
                  to={`/project/${project.id}`}
                  className="group grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 py-4 md:py-5 border-b border-border/50 hover:bg-secondary/30 -mx-4 px-4 transition-colors"
                >
                  
                  <div className="md:col-span-1 text-muted-foreground text-sm">
                    {project.year}
                  </div>

                  <div className="md:col-span-5">
                    <h3 className="font-medium group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1 line-clamp-1 md:hidden">
                      {project.description}
                    </p>
                  </div>

                  <div className="md:col-span-5 flex flex-wrap gap-2 mt-2 md:mt-0">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="text-xs uppercase tracking-wider text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="hidden md:flex md:col-span-1 items-center justify-end">
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="h-32" />
      </div>
    </PageTransition>
  );
};

export default Archive;
