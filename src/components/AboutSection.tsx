import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function AboutSection() {
  const { ref, hasAnimated } = useScrollAnimation();

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
            About <span className="text-indigo-600 dark:text-indigo-400">Me</span>
          </h2>
          <div className="h-1 w-20 bg-indigo-600 mx-auto mb-10"></div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-5">
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={hasAnimated ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="rounded-lg overflow-hidden shadow-xl"
                >
                  <img
                    src="https://images.pexels.com/photos/4792714/pexels-photo-4792714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Neelam Krishna working"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <div className="absolute -bottom-5 -right-5 bg-indigo-600 rounded-lg p-4 shadow-lg">
                  <span className="text-white font-bold text-xl">1+</span>
                  <span className="text-white text-sm block">Year Experience</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  UI/UX Designer with a passion for creating impactful digital experiences
                </h3>
                
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  I'm a UI/UX designer with 1 year of experience crafting digital solutions that balance aesthetic beauty with functional design. My approach combines creative problem-solving with user-centered methodologies to create intuitive, engaging experiences.
                </p>
                
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  I specialize in user research, wireframing, prototyping, and creating high-fidelity designs that transform complex challenges into elegant solutions. I'm passionate about accessibility and inclusive design practices that ensure products work for everyone.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-indigo-600 dark:text-indigo-400 font-semibold mb-2">Education</h4>
                    <p className="text-gray-700 dark:text-gray-300">Bachelor of Arts in Sri Krishnadevaraya University</p>
                  </div>
                  <div>
                    <h4 className="text-indigo-600 dark:text-indigo-400 font-semibold mb-2">Location</h4>
                    <p className="text-gray-700 dark:text-gray-300">Kurnoolcity, Andhra Pradesh, India</p>
                  </div>
                  <div>
                    <h4 className="text-indigo-600 dark:text-indigo-400 font-semibold mb-2">Email</h4>
                    <a href="mailto:nkrishna644@gmail.com" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                      nkrishna644@gmail.com
                    </a>
                  </div>
                  <div>
                    <h4 className="text-indigo-600 dark:text-indigo-400 font-semibold mb-2">LinkedIn</h4>
                    <a 
                      href="https://www.linkedin.com/in/neelam-krishna-uiux" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      neelam-krishna-uiux
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}