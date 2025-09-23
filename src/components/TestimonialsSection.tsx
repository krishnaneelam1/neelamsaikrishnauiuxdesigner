import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  text: string;
}

export default function TestimonialsSection() {
  const { ref, hasAnimated } = useScrollAnimation();

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Naresh PN",
      role: "founder",
      company: "techxplorers private limited.",
      image: "https://techxplorers.in/assets/tx_official_logo-3C6e03n-.png",
      text: "Working with Neelam Sai Krishna was a game-changer for our product. His attention to detail and user-centered approach transformed our application into something our customers love to use. He have a unique ability to balance aesthetics with functionality."
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
            Client <span className="text-indigo-600 dark:text-indigo-400">Testimonials</span>
          </h2>
          <div className="h-1 w-20 bg-indigo-600 mx-auto mb-16"></div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate={hasAnimated ? "visible" : "hidden"}
          >
            {testimonials.map((testimonial) => (
              <motion.div 
                key={testimonial.id}
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 relative hover:shadow-lg transition-shadow"
              >
                <div className="absolute top-6 right-6 text-indigo-200 dark:text-indigo-900">
                  <Quote size={40} />
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 mb-6 z-10 relative">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center">
                  <div className="flex-shrink-0 mr-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}, {testimonial.company}</p>
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