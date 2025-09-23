import { Heart, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center gap-2">
              <div className="h-8 w-8 bg-indigo-600 rounded-md flex items-center justify-center text-white font-bold">
                NSK
              </div>
              <span className="text-xl font-semibold text-white">
                Neelam Sai Krishna
              </span>
            </a>
            <p className="text-gray-400 mt-2 max-w-md">
              Creating thoughtful digital experiences through user-centered design and creative problem-solving.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <button 
              onClick={scrollToTop}
              className="mb-6 p-3 bg-indigo-600 hover:bg-indigo-700 rounded-full transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
            
            <div className="text-gray-400 text-sm">
              <p className="flex items-center gap-1">
                Made with <Heart size={14} className="text-red-500" fill="currentColor" /> in 2025
              </p>
              <p className="mt-1">
                © {new Date().getFullYear()} Neelam Krishna. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}