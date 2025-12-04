import { motion } from 'framer-motion';
import { personalInfo } from '../data/personal';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 md:py-32 bg-black">
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
            About <span className="text-accent-red">Me</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Photo placeholder */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="relative w-full aspect-square rounded-lg overflow-hidden border-2 border-accent-red/30">
                <div className="w-full h-full bg-dark-bg flex items-center justify-center">
                  <span className="text-text-secondary text-sm">Photo Placeholder</span>
                </div>
                <motion.div
                  className="absolute inset-0 bg-accent-red opacity-0"
                  whileHover={{ opacity: 0.1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div className="absolute -inset-4 border border-accent-red/20 rounded-lg -z-10" />
            </motion.div>

            {/* Bio text */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                {personalInfo.bio}
              </p>
              
              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="px-4 py-2 bg-dark-bg border border-accent-red/30 rounded-lg">
                  <span className="text-text-primary text-sm">Full Stack Developer</span>
                </div>
                <div className="px-4 py-2 bg-dark-bg border border-accent-red/30 rounded-lg">
                  <span className="text-text-primary text-sm">Problem Solver</span>
                </div>
                <div className="px-4 py-2 bg-dark-bg border border-accent-red/30 rounded-lg">
                  <span className="text-text-primary text-sm">Tech Enthusiast</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

