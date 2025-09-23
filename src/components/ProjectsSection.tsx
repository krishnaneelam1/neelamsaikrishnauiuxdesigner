import { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  tools: string[];
  link: string;
}

export default function ProjectsSection() {
  const { ref, hasAnimated } = useScrollAnimation();
  const [activeCategory, setActiveCategory] = useState<string>('All');
  
  const projects: Project[] = [
    {
      id: 1,
      title: "EXTRA HUSLTE APP (Android and ios App For Blue-Collar Workers)",
      category: "Mobile App",
      image: "https://images.pexels.com/photos/64609/pexels-photo-64609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Led the end-to-end UI/UX design for a blue-collar job discovery app addressing the lack of a centralized job platform. Directed field research, developed user personas, mapped user flows, and created wireframes and interactive prototypes. This resulted in a 45% increase in app adoption within the first three months and a 33% boost in engagement with the financial assistance feature",
      tools: ["Figma", "Prototyping", "User Testing"],
      link: "https://drive.google.com/file/d/1qQ1wJq9qXGxnA4QDjZnd92v4gbwcDarI/view?usp=sharing"
    },
    {
      id: 2,
      title: "Jollof Food App (African food directory) ",
      category: "Mobile App",
      image: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Led the UI/UX strategy for a food app aimed at non-tech-savvy users who struggled with complex interfaces. Managed persona development, journey mapping, accessibility-focused design, and usability testing. Achieved a 60% increase in recipe views and received 85% positive feedback from the target user group.",
      tools: ["Figma", "Prototyping", "User Testing"],
      link: "https://drive.google.com/file/d/1i9Eu2GyJzHBjAeCKjJdy8ETmoR3X0u9P/view?usp=drive_link"
    },
    {
      id: 3,
      title: "Techxplorers.in Website (Corporate Company Website) ",
      category: "Web App",
      image: "https://github.com/krishnaneelamuiux-creator/pics/blob/main/Frame%201%20(1).png?raw=true",
      description: "Led the complete redesign of a website facing poor navigation and non-responsive layout issues that hindered user engagement. Defined the information architecture, created wireframes and responsive layouts, and closely collaborated with the development team for implementation. The redesign reduced bounce rate by 28%, increased session duration by 42%, and improved lead generation by 35%.",
      tools: ["Figma", "Prototyping", "User Testing"],
      link: "https://www.behance.net/gallery/234872195/techxplorers_project_details"
    }, {
      id: 4,
      title: "Memora an app for asset management ",
      category: "Mobile App",
      image: "https://github.com/krishnaneelamuiux-creator/pics/blob/main/memora.png?raw=true",
      description: "Led the complete redesign of Memora is a smart asset management app that helps individuals and businesses track, organize, and manage their physical and digital assets in one place. With features like real-time monitoring, reminders, and easy reporting, Memora ensures better control, reduced losses, and improved efficiency.",
      tools: ["Figma", "Prototyping", "User Testing"],
      link: "https://www.behance.net/gallery/234630125/memora_an_app_for_assets_management"
    },
  ];

  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];
  
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
            My <span className="text-indigo-600 dark:text-indigo-400">Projects</span>
          </h2>
          <div className="h-1 w-20 bg-indigo-600 mx-auto mb-10"></div>
          
          <div className="flex justify-center mb-10">
            <div className="flex flex-wrap gap-2 bg-white dark:bg-gray-800 p-2 rounded-full shadow-md">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category
                      ? 'bg-indigo-600 text-white'
                      : 'bg-transparent text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={hasAnimated ? "visible" : "hidden"}
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative overflow-hidden group h-60">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-indigo-900/70 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                    <a 
                      href={project.link}
                      className="text-white flex items-center gap-2 px-6 py-3 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                    >
                      View Project <ExternalLink size={18} />
                    </a>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-indigo-600 text-white text-xs font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}