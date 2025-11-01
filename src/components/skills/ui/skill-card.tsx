'use client';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardContent } from '../../ui/card';
import { Badge } from '../../ui/badge';
import { SkillCategory } from '../data'; // Import the type

interface SkillCardProps {
  category: string;
  technologies: readonly string[]; // Use readonly since as const makes it readonly
  delay?: number;
}

export const SkillCard = ({ category, technologies, delay = 0 }: SkillCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <Card className="h-full backdrop-blur-sm bg-white/5 border-white/10">
        <CardHeader>
          <h3 className="text-xl font-bold text-white">{category}</h3>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <Badge 
                key={tech}
                variant="secondary"
                className="bg-primary/20 text-primary hover:bg-primary/30"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};