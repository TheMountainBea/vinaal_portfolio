import { 
  SiC, 
  SiCplusplus, 
  SiJavascript, 
  SiReact, 
  SiNodedotjs, 
  SiPython, 
  SiDocker,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiGit,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

// Skills data - easily editable
export interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const skills: Skill[] = [
  { name: "C", icon: SiC },
  { name: "C++", icon: SiCplusplus },
  { name: "Java", icon: FaJava }, 
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: SiReact },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Python", icon: SiPython },
  { name: "Docker", icon: SiDocker },
  { name: "HTML5", icon: SiHtml5 },
  { name: "CSS3", icon: SiCss3 },
  { name: "Git", icon: SiGit },
  { name: "MongoDB", icon: SiMongodb },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Tailwind CSS", icon: SiTailwindcss },
];

