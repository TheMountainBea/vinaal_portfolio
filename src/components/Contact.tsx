import { motion } from 'framer-motion';
import { personalInfo } from '../data/personal';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import GlowButton from './GlowButton';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    // Simulate form submission
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialIcons = [
    { name: 'GitHub', icon: Github, href: personalInfo.socialLinks.github },
    { name: 'LinkedIn', icon: Linkedin, href: personalInfo.socialLinks.linkedin },
    { name: 'Twitter', icon: Twitter, href: personalInfo.socialLinks.twitter },
    { name: 'Email', icon: Mail, href: personalInfo.socialLinks.email },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 text-white text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Get In <span className="text-accent-red">Touch</span>
          </motion.h2>

          <motion.p
            className="text-center text-gray-300 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Have a project in mind? Let's work together to bring it to life.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-bg-secondary border border-accent-red/20 rounded-lg text-text-primary focus:outline-none focus:border-accent-red transition-colors"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-bg-secondary border border-accent-red/20 rounded-lg text-text-primary focus:outline-none focus:border-accent-red transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-dark-bg-secondary border border-accent-red/20 rounded-lg text-text-primary focus:outline-none focus:border-accent-red transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>

              <GlowButton
                type="submit"
                variant="primary"
                className="w-full"
              >
                {status === 'sending' ? 'Sending...' : status === 'success' ? 'Sent!' : 'Send Message'}
              </GlowButton>

              {status === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-accent-red text-center"
                >
                  Message sent successfully!
                </motion.p>
              )}

              {status === 'error' && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-accent-red text-center"
                >
                  Something went wrong. Please try again.
                </motion.p>
              )}
            </motion.form>

            {/* Social Links */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Connect With Me</h3>
                <p className="text-gray-300 mb-6">
                  Feel free to reach out through any of these platforms.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                {socialIcons.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target={social.name === 'Email' ? undefined : '_blank'}
                      rel={social.name === 'Email' ? undefined : 'noopener noreferrer'}
                      className="group flex items-center justify-center w-14 h-14 bg-dark-bg-secondary border border-accent-red/20 rounded-lg hover:border-accent-red transition-all duration-300"
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Icon className="w-6 h-6 text-text-secondary group-hover:text-accent-red transition-colors" />
                      <motion.div
                        className="absolute inset-0 rounded-lg bg-accent-red opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300"
                        initial={false}
                      />
                    </motion.a>
                  );
                })}
              </div>

              <div className="mt-8 p-6 bg-dark-bg-secondary border border-accent-red/20 rounded-lg">
                <p className="text-text-secondary text-sm mb-2">Email</p>
                <a
                  href={personalInfo.socialLinks.email}
                  className="text-accent-red hover:text-accent-red-hover transition-colors"
                >
                  {personalInfo.email}
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

