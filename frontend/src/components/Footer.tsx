import { Github, Linkedin, Twitter, Heart, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

const socialLinks = [
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
];

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-zinc-950 border-t border-zinc-900 relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 items-center mb-8">
          {/* Logo and tagline */}
          <div>
            <a href="#home" className="text-2xl font-bold tracking-tighter">
              <span className="text-gradient">JD</span>
              <span className="text-white">.</span>
            </a>
            <p className="text-zinc-500 mt-2 text-sm">
              Full Stack Developer crafting digital experiences.
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-zinc-400 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social links */}
          <div className="flex justify-end gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-2 rounded-lg text-zinc-500 hover:text-white hover:bg-zinc-800 transition-all"
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-zinc-800 my-8" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-sm flex items-center gap-1">
            Made with <Heart size={14} className="text-red-500" /> by John Doe
          </p>
          <p className="text-zinc-600 text-sm">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>

      {/* Scroll to top button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={scrollToTop}
        className="absolute right-6 -top-6 p-3 rounded-full bg-gradient-to-r from-red-500 to-purple-500 text-white hover:scale-110 transition-transform glow-gradient"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </motion.button>
    </footer>
  );
}
