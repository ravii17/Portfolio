import { motion } from 'framer-motion';
import PageTransition from '@/components/PageTransition';
import TypewriterText from '@/components/TypewriterText';
import TechMarquee from '@/components/TechMarquee';
import HeroCard from '@/components/HeroCard';
import SectionHeader from '@/components/SectionHeader';
import BentoCard from '@/components/BentoCard';
import MagneticButton from '@/components/MagneticButton';
import { projects } from '@/data/projects';
import { ArrowDown } from 'lucide-react';

const roles = ['HPC Engineer', 'Full Stack Developer', 'Software Engineer'];

const Index = () => {
  const featuredProjects = projects.filter(p => p.featured);

  return (
    <PageTransition>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col justify-center px-6 lg:px-16 pt-12 pb-24">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left - Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
              >
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-muted-foreground mb-4 tracking-widest uppercase text-sm"
                >
                  Welcome to my portfolio
                </motion.p>
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
                  Ravi Kumar
                </h1>
                
                <div className="text-2xl md:text-3xl lg:text-4xl font-medium mb-8">
                  <TypewriterText words={roles} />
                </div>
                
                <p className="text-muted-foreground text-lg max-w-lg mb-10 leading-relaxed">
                  Building high-performance systems and elegant web applications. 
                  Passionate about pushing computational boundaries and creating 
                  exceptional user experiences.
                </p>

                <div className="flex gap-4">
                  <MagneticButton
                    as="a"
                    href="#work"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
                  >
                    View My Work
                    <ArrowDown className="w-4 h-4" />
                  </MagneticButton>
                  
                  <MagneticButton
                    as="a"
                    href="mailto:ravi@example.com"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-full font-medium hover:bg-secondary transition-colors"
                  >
                    Get in Touch
                  </MagneticButton>
                </div>
              </motion.div>

              {/* Right - Visual Element */}
              <div className="flex justify-center lg:justify-end">
                <HeroCard />
              </div>
            </div>
          </div>

          {/* Tech Marquee */}
          <div className="mt-auto pt-16">
            <TechMarquee />
          </div>
        </section>

        {/* Selected Works Section */}
        <section id="work" className="py-24 px-6 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <SectionHeader 
              title="Selected Works" 
              subtitle="A curated collection of projects showcasing expertise in high-performance computing, distributed systems, and full-stack development."
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
        </section>

        {/* About Section */}
        <section className="py-24 px-6 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <SectionHeader title="About Me" />
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I'm a software engineer specializing in high-performance computing 
                    and scalable web applications. With expertise spanning from low-level 
                    systems programming to modern frontend frameworks, I bridge the gap 
                    between computational efficiency and user experience.
                  </p>
                  <p>
                    My work focuses on building systems that can handle massive scale—whether 
                    that's simulating molecular dynamics across GPU clusters or architecting 
                    real-time data pipelines for millions of events per second.
                  </p>
                  <p>
                    When I'm not optimizing algorithms or designing APIs, you'll find me 
                    exploring new programming languages, contributing to open source, 
                    or writing about technical topics on my blog.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="glass rounded-3xl p-8"
              >
                <h3 className="text-xl font-semibold mb-6">Tech Stack</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { category: 'Languages', items: ['C++', 'Python', 'TypeScript', 'Rust'] },
                    { category: 'HPC', items: ['CUDA', 'MPI', 'OpenMP', 'SYCL'] },
                    { category: 'Frontend', items: ['React', 'Next.js', 'Tailwind'] },
                    { category: 'Backend', items: ['Node.js', 'PostgreSQL', 'Redis'] },
                  ].map((group) => (
                    <div key={group.category}>
                      <p className="text-sm text-muted-foreground mb-2">{group.category}</p>
                      <div className="flex flex-wrap gap-2">
                        {group.items.map((item) => (
                          <span 
                            key={item}
                            className="text-sm bg-secondary px-2 py-1 rounded"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer spacing for floating nav */}
        <div className="h-32" />
      </div>
    </PageTransition>
  );
};

export default Index;
