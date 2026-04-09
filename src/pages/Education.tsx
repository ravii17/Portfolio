import { motion } from 'framer-motion';
import PageTransition from '@/components/PageTransition';
import SectionHeader from '@/components/SectionHeader';

const educationData = [
  {
    institution: "KIIT Deemed to be University",
    degree: "Bachelor of Electronics & Computer Science Engineering",
    period: "2023 - 2027",
    description: "Relevant coursework: Data Structures, Algorithms, Distributed Systems, High-Performance Computing, Machine Learning.",
  },
  {
    institution: "High School",
    degree: "High School Diploma",
    period: "2017 - 2019",
    description: "Focused on Mathematics and Computer Science.",
  }
];

const Education = () => {
  return (
    <PageTransition>
      <div className="min-h-screen py-24 px-6 lg:px-16">
        <div className="max-w-3xl mx-auto flex flex-col gap-8">
          <SectionHeader
            title="Education"
            subtitle="My academic background and qualifications."
          />

          <div className="flex flex-col gap-6">
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass p-8 rounded-3xl"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{item.degree}</h3>
                    <p className="text-primary font-medium">{item.institution}</p>
                  </div>
                  <span className="text-muted-foreground whitespace-nowrap mt-2 md:mt-0">
                    {item.period}
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

export default Education;
