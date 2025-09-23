import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string[];
}

export default function ExperienceSection() {
  const { ref, hasAnimated } = useScrollAnimation(0.1);

  const experiences: ExperienceItem[] = [
    {
      title: "UI/UX Designer",
      company: "TechXplorers Private Limited",
      period: "June 2024 - Present",
      location: "Onsite",
      description: [
        "Lead designer for multiple web and mobile application projects",
        "Created and maintained design systems for consistency across products",
        "Conducted user research and usability testing to inform design decisions",
        "Collaborated with cross-functional teams to deliver user-centered solutions",
        "Mentored junior designers and provided design direction"
      ]
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial="hidden"
          animate={hasAnimated ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
            Work <span className="text-indigo-600 dark:text-indigo-400">Experience</span>
          </h2>
          <div className="h-1 w-20 bg-indigo-600 mx-auto mb-16"></div>

          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="relative pl-2 border-l-2 border-indigo-200 dark:border-indigo-900 space-y-12"
              variants={containerVariants}
              initial="hidden"
              animate={hasAnimated ? "visible" : "hidden"}
            >
              {experiences.map((experience, index) => (
                <motion.div 
                  key={`${experience.title}-${index}`}
                  className="relative"
                  variants={itemVariants}
                >
                  <div className="absolute -left-[41px] w-20 h-20 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center">
                    <div className="w-14 h-14 bg-indigo-600 dark:bg-indigo-500 rounded-full flex items-center justify-center">
                      <Briefcase className="text-white" size={24} />
                    </div>
                  </div>
                  
                 <div className="bg-white dark:bg-gray-800 pl-20 pr-6 py-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{experience.title}</h3>
                    <p className="text-indigo-600 dark:text-indigo-400 font-semibold mb-2">{experience.company}</p>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>{experience.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        <span>{experience.location}</span>
                      </div>
                    </div>
                    
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                      {experience.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
