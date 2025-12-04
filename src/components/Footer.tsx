import { motion } from 'framer-motion';
import { personalInfo } from '../data/personal';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-black border-t border-accent-red/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-gray-400 text-sm">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </div>

          <div className="flex space-x-6">
            <motion.a
              href={personalInfo.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-accent-red transition-colors text-sm"
              whileHover={{ scale: 1.1 }}
            >
              GitHub
            </motion.a>
            <motion.a
              href={personalInfo.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-accent-red transition-colors text-sm"
              whileHover={{ scale: 1.1 }}
            >
              LinkedIn
            </motion.a>
            <motion.a
              href={personalInfo.socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-accent-red transition-colors text-sm"
              whileHover={{ scale: 1.1 }}
            >
              Twitter
            </motion.a>
            <motion.a
              href={personalInfo.socialLinks.email}
              className="text-gray-400 hover:text-accent-red transition-colors text-sm"
              whileHover={{ scale: 1.1 }}
            >
              Email
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

