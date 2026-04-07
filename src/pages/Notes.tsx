import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageTransition from '@/components/PageTransition';
import SectionHeader from '@/components/SectionHeader';
import { ArrowUpRight, Calendar } from 'lucide-react';

const posts = [
  {
    id: 'Building a platform for Foreign Travellers',
    title: 'Building a platform for Foreign Travellers',
    excerpt: 'I have always wanted to travel to a place where I can just be myself and not worry about anything. This is a platform that I built to help people like me do just that.',
    date: '2026-04-08',
    tags: ['React', 'Node.js', 'MongoDB', 'Cryptography & Blockchain'],
    readTime: '2 hours read',
  },
  {
    id: 'AI Agent Trading Bot Over Hyper-Liquid',
    title: 'AI Agent Trading Bot Over Hyper-Liquid',
    excerpt: 'I have made a bot that trades on Hyper-Liquid but I was too lazy to do it manually. I built an AI agent to do it for me.',
    date: '2026-04-13',
    tags: ['Python', 'Hyper-Liquid', 'AI'],
    readTime: '12 min read',
  },
  {
    id: 'distributed-systems-primer',
    title: 'A Primer on Distributed Systems',
    excerpt: 'Understanding CAP theorem, consensus algorithms, and the fundamental challenges of building reliable distributed systems.',
    date: '2023-12-20',
    tags: ['Distributed Systems', 'Theory'],
    readTime: '15 min read',
  },
  {
    id: 'rust-for-systems-programming',
    title: 'Why Rust for Systems Programming',
    excerpt: 'Exploring Rust\'s ownership model, zero-cost abstractions, and why it\'s becoming the language of choice for systems developers.',
    date: '2023-12-10',
    tags: ['Rust', 'Systems Programming'],
    readTime: '10 min read',
  },
];

const Notes = () => {
  return (
    <PageTransition>
      <div className="min-h-screen py-24 px-6 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            title="Notes"
            subtitle="Thoughts on software engineering, high-performance computing, and the craft of building great software."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Link
                  to={`/notes/${post.id}`}
                  className="group block h-full"
                >
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="glass h-full rounded-2xl p-6 flex flex-col"
                  >

                    <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {new Date(post.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h2 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="text-xs uppercase tracking-wider text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <span className="flex items-center gap-1 text-sm font-medium text-primary arrow-hover">
                        Read
                        <ArrowUpRight className="w-4 h-4 arrow-icon" />
                      </span>
                    </div>
                  </motion.div>
                </Link>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <p className="text-muted-foreground text-sm">
              About what i think of my Projcts so far...
            </p>
          </motion.div>
        </div>

        <div className="h-32" />
      </div>
    </PageTransition>
  );
};

export default Notes;
