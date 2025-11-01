export const skillsData = [
  {
    category: "Frontend",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"]
  },
  {
    category: "Backend", 
    technologies: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs"]
  },
  {
    category: "Tools & Others",
    technologies: ["Git", "VS Code", "Figma", "Linux", "Docker"]
  }
] as const;

export type SkillCategory = typeof skillsData[number];