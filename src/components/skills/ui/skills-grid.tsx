import { SkillCard } from './skill-card';
import { SkillCategory } from '../data'; // Import the type

interface SkillsGridProps {
  skills: SkillCategory[];
}

export const SkillsGrid = ({ skills }: SkillsGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
      {skills.map((category, index) => (
        <SkillCard 
          key={category.category}
          category={category.category}
          technologies={category.technologies}
          delay={index * 100}
        />
      ))}
    </div>
  );
};