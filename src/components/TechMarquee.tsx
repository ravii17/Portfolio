const technologies = [
  'React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Node.js',
  'Python', 'C++', 'CUDA', 'MPI', 'OpenMP', 'TensorFlow',
  'PostgreSQL', 'Docker', 'Kubernetes', 'AWS', 'Linux'
];

const TechMarquee = () => {
  return (
    <div className="relative w-full overflow-hidden py-8">
      
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
      
      <div className="flex animate-marquee">
        {[...technologies, ...technologies].map((tech, index) => (
          <div
            key={index}
            className="flex items-center mx-8 whitespace-nowrap"
          >
            <span className="text-lg font-medium text-muted-foreground/50 uppercase tracking-widest grayscale opacity-60 hover:opacity-100 hover:text-muted-foreground transition-all duration-300">
              {tech}
            </span>
            <span className="ml-8 text-muted-foreground/20">•</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechMarquee;
