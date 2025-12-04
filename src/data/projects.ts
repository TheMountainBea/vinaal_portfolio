// Projects data - easily editable
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string; // Path to project image/thumbnail
  liveLink?: string; // Live demo URL
  githubLink?: string; // GitHub repository URL
  techStack: string[];
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Project One",
    description: "A modern web application built with React and Node.js. Features include real-time updates, user authentication, and a responsive design.",
    image: "/project-placeholder-1.jpg",
    liveLink: "https://example.com",
    githubLink: "https://github.com/yourusername/project-one",
    techStack: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
  },
  {
    id: "2",
    title: "Project Two",
    description: "An innovative solution leveraging Python and machine learning. Includes data visualization and predictive analytics.",
    image: "/project-placeholder-2.jpg",
    liveLink: "https://example.com",
    githubLink: "https://github.com/yourusername/project-two",
    techStack: ["Python", "React", "Docker", "PostgreSQL"],
  },
  {
    id: "3",
    title: "Project Three",
    description: "A full-stack application with microservices architecture. Built for scalability and performance.",
    image: "/project-placeholder-3.jpg",
    liveLink: "https://example.com",
    githubLink: "https://github.com/yourusername/project-three",
    techStack: ["TypeScript", "Node.js", "Docker", "MongoDB"],
  },
];

