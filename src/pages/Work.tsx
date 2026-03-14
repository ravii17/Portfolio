import { motion } from 'framer-motion';
import PageTransition from '@/components/PageTransition';
import SectionHeader from '@/components/SectionHeader';
import BentoCard from '@/components/BentoCard';
import { projects } from '@/data/projects';

const Work = () => {
  const featuredProjects = projects.filter(p => p.featured);

  return (
    <PageTransition>
      <div className="min-h-screen py-24 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="Work" 
            subtitle="Featured projects showcasing expertise in high-performance computing, distributed systems, and modern web development."
          />

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <BentoCard
                key={project.id}
                id={project.id}
                title={project.title}
                description={project.description}
                tags={project.tags}
                image={project.image}
                size={index === 0 ? 'large' : 'medium'}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Footer spacing */}
        <div className="h-32" />
      </div>
    </PageTransition>
  );
};

export default Work;
