import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 to-white dark:from-gray-900 dark:to-gray-950"></div>
        <div className="absolute top-20 right-0 w-72 h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-teal-200 dark:bg-teal-900/20 rounded-full filter blur-3xl opacity-30"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 pt-20 md:pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Hi, I'm <span className="text-indigo-600 dark:text-indigo-400">Neelam Sai Krishna</span>
              </h1>
              <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold text-gray-700 dark:text-gray-300 mt-2 md:mt-4">
                UI/UX Designer
              </h2>
            </motion.div>
            
            <motion.p 
              className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              I create thoughtful digital experiences that balance aesthetic beauty with functional design, 
              always keeping the user at the center of every decision.
            </motion.p>
            
            <motion.div 
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <a 
                href="#contact" 
                className="px-8 py-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded-full font-medium transition-colors duration-300"
              >
                Get in Touch
              </a>
              <a 
                href="#projects" 
                className="px-8 py-3 text-indigo-600 bg-transparent hover:bg-indigo-50 dark:text-indigo-400 dark:hover:bg-gray-800 border border-indigo-600 dark:border-indigo-400 rounded-full font-medium transition-colors duration-300"
              >
                View Projects
              </a>
            </motion.div>
          </div>
          
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square max-w-md mx-auto overflow-hidden rounded-full border-8 border-white dark:border-gray-800 shadow-xl">
                <img 
                  src="https://raw.githubusercontent.com/1Neelamsaikrishna/pics/refs/heads/main/Picsart_25-06-09_21-20-16-041%5B1%5D.jpg" 
                  alt="Neelam Sai Krishna"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 shadow-lg rounded-full p-4">
                <div className="bg-indigo-600 text-white p-3 rounded-full">
                  <span className="sr-only">UI/UX Designer</span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="28" 
                    height="28" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M3 7V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2"></path>
                    <path d="M3 17v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2"></path>
                    <rect x="3" y="7" width="18" height="10" rx="2"></rect>
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex justify-center">
        <motion.a
          href="#about"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.6, 
            delay: 1,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.5
          }}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow"
        >
          <ArrowDown size={20} className="text-indigo-600 dark:text-indigo-400" />
        </motion.a>
      </div>
    </section>
  );
}