import { motion } from 'framer-motion';
import { skills } from '../data/skills';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="skills" className="py-20 md:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-12 text-white text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            My <span className="text-accent-red">Skills</span>
          </motion.h2>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  className="group relative"
                >
                  <motion.div
                    className="flex flex-col items-center justify-center p-6 bg-dark-bg-secondary rounded-lg border border-accent-red/20 hover:border-accent-red transition-all duration-300 cursor-pointer"
                    whileHover={{ 
                      scale: 1.1,
                      y: -5,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon 
                      className="w-12 h-12 md:w-16 md:h-16 text-text-secondary group-hover:text-accent-red transition-colors duration-300 mb-3" 
                    />
                    <span className="text-sm md:text-base text-text-secondary group-hover:text-text-primary transition-colors duration-300 text-center">
                      {skill.name}
                    </span>
                    
                    {/* Glow effect on hover */}
                    <motion.div
                      className="absolute inset-0 rounded-lg bg-accent-red opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300"
                      initial={false}
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

