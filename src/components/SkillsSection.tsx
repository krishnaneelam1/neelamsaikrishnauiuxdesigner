import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface SkillCategory {
  name: string;
  skills: Skill[];
}

interface Skill {
  name: string;
  proficiency: number; // 0-100
}

export default function SkillsSection() {
  const { ref, hasAnimated } = useScrollAnimation();

  const skillCategories: SkillCategory[] = [
    {
      name: 'Design',
      skills: [
        { name: 'UI Design', proficiency: 95 },
        { name: 'UX Design', proficiency: 90 },
        { name: 'Wireframing', proficiency: 95 },
        { name: 'Prototyping', proficiency: 90 },
        { name: 'Visual Design', proficiency: 85 }
      ]
    },
    {
      name: 'Tools',
      skills: [
        { name: 'Figma', proficiency: 95 },
        { name: 'Adobe XD', proficiency: 85 },
        { name: 'Sketch', proficiency: 80 },
        { name: 'Adobe Photoshop', proficiency: 80 },
        { name: 'Adobe Illustrator', proficiency: 75 }
      ]
    },
    {
      name: 'Methods',
      skills: [
        { name: 'User Research', proficiency: 90 },
        { name: 'Usability Testing', proficiency: 85 },
        { name: 'Information Architecture', proficiency: 85 },
        { name: 'Design Systems', proficiency: 90 },
        { name: 'Responsive Design', proficiency: 95 }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
            My <span className="text-indigo-600 dark:text-indigo-400">Skills</span>
          </h2>
          <div className="h-1 w-20 bg-indigo-600 mx-auto mb-16"></div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate={hasAnimated ? "visible" : "hidden"}
          >
            {skillCategories.map((category, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-6">
                  {category.name}
                </h3>
                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-gray-500 dark:text-gray-400 text-sm">{skill.proficiency}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={hasAnimated ? { width: `${skill.proficiency}%` } : {}}
                          transition={{ duration: 1, delay: 0.2 + (skillIndex * 0.1) }}
                          className="bg-indigo-600 dark:bg-indigo-500 h-2.5 rounded-full"
                        ></motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}