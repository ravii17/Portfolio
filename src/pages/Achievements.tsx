import { motion } from 'framer-motion';
import PageTransition from '@/components/PageTransition';
import SectionHeader from '@/components/SectionHeader';

const achievementsData = [
  {
    title: "Hackathon Winner",
    organization: "Global Tech Summit 2024",
    date: "2024",
    description: "Secured 1st place for building an innovative AI-driven solution to solve real-world accessibility challenges.",
  },
  {
    title: "Open Source Contributor",
    organization: "GitHub",
    date: "2023 - Present",
    description: "Actively contributing to multiple high-impact open source repositories and acknowledged by maintainers.",
  }
];

const Achievements = () => {
  return (
    <PageTransition>
      <div className="min-h-screen py-24 px-6 lg:px-16">
        <div className="max-w-3xl mx-auto flex flex-col gap-8">
          <SectionHeader
            title="Achievements"
            subtitle="My milestones, awards, and recognitions."
          />

          <div className="flex flex-col gap-6">
            {achievementsData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass p-8 rounded-3xl"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="text-primary font-medium">{item.organization}</p>
                  </div>
                  <span className="text-muted-foreground whitespace-nowrap mt-2 md:mt-0">
                    {item.date}
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="h-32" />
      </div>
    </PageTransition>
  );
};

export default Achievements;
