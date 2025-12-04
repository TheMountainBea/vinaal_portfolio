import { motion } from 'framer-motion';
import { ExternalLink, Github, ShoppingCart, BookOpen, Briefcase } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A modern, full-featured online store with shopping cart, user authentication, payment integration, and admin dashboard. Built with scalability in mind.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    icon: ShoppingCart,
    github: '#',
    live: '#',
    color: 'from-red-500 to-orange-500',
  },
  {
    id: 2,
    title: 'Blogging Platform',
    description: 'A content management system with rich text editing, categories, tags, and SEO optimization. Features user roles and comment moderation.',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=400&fit=crop',
    tech: ['Next.js', 'PostgreSQL', 'Tailwind', 'Prisma'],
    icon: BookOpen,
    github: '#',
    live: '#',
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'A sleek, animated portfolio website showcasing projects and skills. Features 3D elements, smooth animations, and a contact form.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    tech: ['React', 'Three.js', 'Framer Motion', 'Django'],
    icon: Briefcase,
    github: '#',
    live: '#',
    color: 'from-blue-500 to-cyan-500',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm uppercase tracking-widest text-purple-500 mb-4 block">My Work</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            A selection of projects that showcase my skills in full-stack development,
            from concept to deployment.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="group relative rounded-2xl overflow-hidden glass hover:glow-gradient transition-all duration-500"
            >
              {/* Image */}
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />

                {/* Icon overlay */}
                <div className={`absolute top-4 right-4 p-3 rounded-xl bg-gradient-to-r ${project.color} opacity-90`}>
                  <project.icon size={20} className="text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gradient transition-all">
                  {project.title}
                </h3>
                <p className="text-zinc-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-mono rounded-full bg-zinc-800/50 text-zinc-400 border border-zinc-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>

              {/* Hover border effect */}
              <div className={`absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
            </motion.div>
          ))}
        </div>

        {/* View more button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full glass text-white font-medium hover:bg-white/10 transition-all"
          >
            View All Projects
            <ExternalLink size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
