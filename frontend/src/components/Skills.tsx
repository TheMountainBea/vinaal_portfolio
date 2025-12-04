import { motion } from 'framer-motion';
import {
  SiReact, SiNodedotjs, SiTypescript, SiJavascript,
  SiHtml5, SiCss3, SiMongodb, SiPostgresql,
  SiGit, SiDocker, SiFigma, SiNextdotjs,
  SiTailwindcss, SiPython, SiDjango, SiExpress
} from 'react-icons/si';

const skillCategories = [
  {
    category: 'Frontend Development',
    color: 'from-red-500 to-orange-500',
    skills: [
      { name: 'React', icon: SiReact, level: 90 },
      { name: 'Next.js', icon: SiNextdotjs, level: 85 },
      { name: 'TypeScript', icon: SiTypescript, level: 88 },
      { name: 'JavaScript', icon: SiJavascript, level: 95 },
      { name: 'HTML5', icon: SiHtml5, level: 95 },
      { name: 'CSS3', icon: SiCss3, level: 92 },
      { name: 'Tailwind CSS', icon: SiTailwindcss, level: 90 },
    ],
  },
  {
    category: 'Backend Development',
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, level: 88 },
      { name: 'Express.js', icon: SiExpress, level: 85 },
      { name: 'Python', icon: SiPython, level: 82 },
      { name: 'Django', icon: SiDjango, level: 78 },
      { name: 'MongoDB', icon: SiMongodb, level: 85 },
      { name: 'PostgreSQL', icon: SiPostgresql, level: 80 },
    ],
  },
  {
    category: 'Tools & Design',
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'Git', icon: SiGit, level: 90 },
      { name: 'Docker', icon: SiDocker, level: 75 },
      { name: 'Figma', icon: SiFigma, level: 80 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-black relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-red-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm uppercase tracking-widest text-red-500 mb-4 block">What I Do</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            A comprehensive toolkit built through years of hands-on experience in full-stack development
            and software engineering.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.1 }}
              className="p-6 rounded-2xl glass hover:glow-gradient transition-all duration-500 group"
            >
              <h3 className={`text-xl font-bold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                {category.category}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: catIdx * 0.1 + skillIdx * 0.05 }}
                    className="group/skill"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <skill.icon className="w-5 h-5 text-zinc-400 group-hover/skill:text-white transition-colors" />
                      <span className="text-sm text-zinc-300 group-hover/skill:text-white transition-colors">
                        {skill.name}
                      </span>
                      <span className="ml-auto text-xs text-zinc-500">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: catIdx * 0.1 + skillIdx * 0.05, ease: 'easeOut' }}
                        className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
