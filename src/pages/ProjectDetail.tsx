import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import PageTransition from '@/components/PageTransition';
import MagneticButton from '@/components/MagneticButton';
import { projects, archiveProjects } from '@/data/projects';
import { ArrowLeft, ArrowUpRight, Github, ExternalLink } from 'lucide-react';
import { useRef } from 'react';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const heroRef = useRef<HTMLDivElement>(null);
  
  const project = [...projects, ...archiveProjects].find(p => p.id === id);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  if (!project) {
    return (
      <PageTransition>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
            <Link to="/" className="text-primary hover:underline">
              Go back home
            </Link>
          </div>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="min-h-screen">
        {/* Hero Section with Parallax */}
        <section 
          ref={heroRef}
          className="relative min-h-[70vh] flex items-end pb-16 px-6 lg:px-16 overflow-hidden"
        >
          {/* Parallax Background */}
          <motion.div 
            style={{ y }}
            className="absolute inset-0 z-0"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
            <div 
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: `
                  linear-gradient(hsl(var(--border)) 1px, transparent 1px),
                  linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)
                `,
                backgroundSize: '60px 60px'
              }}
            />
          </motion.div>

          {/* Content */}
          <motion.div 
            style={{ opacity }}
            className="relative z-10 max-w-5xl mx-auto w-full"
          >
            {/* Back Link */}
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to projects
            </Link>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span 
                  key={tag}
                  className="text-sm uppercase tracking-wider text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight"
            >
              {project.title}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-xl text-muted-foreground max-w-2xl"
            >
              {project.description}
            </motion.p>
          </motion.div>
        </section>

        {/* Content Section */}
        <section className="py-16 px-6 lg:px-16">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-2xl font-semibold mb-6">Overview</h2>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    {project.longDescription || project.description}
                  </p>

                  {/* Placeholder for project images/gallery */}
                  <div className="glass rounded-2xl aspect-video flex items-center justify-center mb-8">
                    <p className="text-muted-foreground">Project Screenshot / Demo</p>
                  </div>

                  <h2 className="text-2xl font-semibold mb-6">Key Features</h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      High-performance implementation with optimized algorithms
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      Scalable architecture designed for production workloads
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      Comprehensive testing and documentation
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      Clean, maintainable codebase following best practices
                    </li>
                  </ul>
                </motion.div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="glass rounded-2xl p-6 sticky top-8"
                >
                  {/* Year */}
                  <div className="mb-6">
                    <p className="text-sm text-muted-foreground mb-1">Year</p>
                    <p className="font-medium">{project.year}</p>
                  </div>

                  {/* Tech Stack */}
                  {project.techStack && (
                    <div className="mb-6">
                      <p className="text-sm text-muted-foreground mb-2">Tech Stack</p>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <span 
                            key={tech}
                            className="text-sm bg-secondary px-2 py-1 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Links */}
                  <div className="space-y-3 pt-6 border-t border-border">
                    <MagneticButton
                      as="a"
                      href={project.liveUrl || '#'}
                      className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Live
                    </MagneticButton>
                    
                    <MagneticButton
                      as="a"
                      href={project.githubUrl || '#'}
                      className="flex items-center justify-center gap-2 w-full px-4 py-3 border border-border rounded-lg font-medium hover:bg-secondary transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Source Code
                    </MagneticButton>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Next Project */}
        <section className="py-16 px-6 lg:px-16 border-t border-border">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="text-muted-foreground mb-4">Next Project</p>
              <Link
                to={`/project/${projects[(projects.findIndex(p => p.id === id) + 1) % projects.length]?.id || projects[0].id}`}
                className="text-2xl md:text-3xl font-bold hover:text-primary transition-colors inline-flex items-center gap-2 arrow-hover"
              >
                {projects[(projects.findIndex(p => p.id === id) + 1) % projects.length]?.title || projects[0].title}
                <ArrowUpRight className="w-6 h-6 arrow-icon" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Footer spacing */}
        <div className="h-32" />
      </div>
    </PageTransition>
  );
};

export default ProjectDetail;
