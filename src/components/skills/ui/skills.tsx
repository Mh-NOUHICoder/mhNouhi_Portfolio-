'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../../ui/section-heading';
import { Card, CardHeader, CardContent } from '../../ui/card';
import { Badge } from '../../ui/badge';

/** Slimmed, necessary tech skills */
const skillsData = [
  {
    category: 'Frontend',
    technologies: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'Vite',
      'JavaScript',
      'HTML5',
      'CSS3'
    ]
  },
  {
    category: 'Backend',
    technologies: [
      'Python',
      'Flask',
      'PHP',
      'SQLAlchemy',
      'REST APIs'
    ]
  },
  {
    category: 'Databases',
    technologies: [
      'PostgreSQL',
      'MySQL',
      'SQLite'
    ]
  },
  {
    category: 'Tools',
    technologies: [
      'Git',
      'VS Code',
      'Figma'
    ]
  }
] as const;

/** Devicon class map */
const deviconClassMap: Record<string, string | undefined> = {
  'React': 'devicon-react-original colored',
  'Next.js': undefined,
  'TypeScript': 'devicon-typescript-plain colored',
  'Tailwind CSS': 'devicon-tailwindcss-plain colored',
  'Framer Motion': undefined,
  'Vite': undefined,
  'JavaScript': 'devicon-javascript-plain colored',
  'HTML5': 'devicon-html5-plain colored',
  'CSS3': 'devicon-css3-plain colored',
  'Python': 'devicon-python-plain colored',
  'Flask': 'devicon-flask-original colored',
  'PHP': 'devicon-php-plain colored',
  'SQLAlchemy': undefined,
  'REST APIs': undefined,
  'PostgreSQL': 'devicon-postgresql-plain colored',
  'MySQL': 'devicon-mysql-plain colored',
  'SQLite': 'devicon-sqlite-plain colored',
  'Git': 'devicon-git-plain colored',
  'VS Code': 'devicon-vscode-plain colored',
  'Figma': 'devicon-figma-plain colored'
};

/** Brand colors */
const techColorMap: Record<string, string> = {
  'React': '#61DAFB',
  'Next.js': '#000000',
  'TypeScript': '#3178C6',
  'Tailwind CSS': '#38BDF8',
  'Framer Motion': '#0057FF',
  'Vite': '#646CFF',
  'JavaScript': '#F7DF1E',
  'HTML5': '#E34F26',
  'CSS3': '#1572B6',
  'Python': '#3776AB',
  'Flask': '#000000',
  'PHP': '#777BB4',
  'SQLAlchemy': '#184E77',
  'REST APIs': '#6B7280',
  'PostgreSQL': '#336791',
  'MySQL': '#00758F',
  'SQLite': '#003B57',
  'Git': '#F05032',
  'VS Code': '#007ACC',
  'Figma': '#F24E1E'
};

/** Helper functions */
function initialsFromLabel(label?: string | null): string {
  if (!label?.trim()) {
    return "";
  }

  const parts = label.split(/\s+/).filter(part => part && part.trim().length > 0);
  
  if (parts.length === 0) {
    return "";
  }

  const first = parts[0]?.trim() ?? "";
  if (!first) {
    return "";
  }

  if (parts.length === 1) {
    return first.slice(0, 2).toUpperCase();
  }

  const second = parts[1]?.trim() ?? "";
  if (!second) {
    return first.slice(0, 2).toUpperCase();
  }

  const firstChar = first[0] ?? '';
  const secondChar = second[0] ?? '';
  
  return (firstChar + secondChar).toUpperCase();
}

function getContrastColor(hex: string): string {
  try {
    const c = hex.replace('#', '');
    const r = parseInt(c.substring(0, 2), 16);
    const g = parseInt(c.substring(2, 4), 16);
    const b = parseInt(c.substring(4, 6), 16);
    const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
    return luminance > 0.6 ? '#000' : '#fff';
  } catch {
    return '#fff';
  }
}

/** Inline Next.js SVG logo */
const NextJsLogo = () => (
  <svg
    viewBox="0 0 128 128"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-7 h-7"
  >
    <circle cx="64" cy="64" r="64" fill="black" />
    <path
      d="M93.2 105.3L51.5 47.9H47V80h4.5V54.5l38.1 54.3h3.6Zm-18.2-31.4l-4.7-6.6v-21h4.7v27.6Z"
      fill="white"
    />
  </svg>
);

/** Render icon or fallback */
function DeviconOrFallback({ tech }: { tech: string }) {
  const devClass = deviconClassMap[tech];
  const color = techColorMap[tech] ?? '#6B7280';

  if (tech === 'Next.js') {
    return (
      <span title={tech} className="inline-flex items-center justify-center w-9 h-9">
        <NextJsLogo />
      </span>
    );
  }

  if (devClass) {
    return (
      <span
        className="inline-flex items-center justify-center w-9 h-9"
        title={tech}
        style={{ color, fontSize: 24 }}
      >
        <i className={devClass} aria-hidden="true" />
      </span>
    );
  }

  const initials = initialsFromLabel(tech);
  const contrastColor = getContrastColor(color);
  
  return (
    <span
      className="inline-flex items-center justify-center w-9 h-9 rounded-full text-sm font-semibold"
      style={{ backgroundColor: color, color: contrastColor }}
      title={tech}
    >
      {initials}
    </span>
  );
}

export const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Technologies I Master"
          subTitle="Core tools & technologies used across my projects"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {skillsData.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full backdrop-blur-sm bg-white/5 border-white/10">
                <CardHeader>
                  <h3 className="text-xl font-bold text-white">{category.category}</h3>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {category.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-primary/20 text-primary hover:bg-primary/30 flex items-center gap-3 px-4 py-2"
                      >
                        <DeviconOrFallback tech={tech} />
                        <span className="text-sm font-medium text-white/90">{tech}</span>
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};