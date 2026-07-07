import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { projects } from '../data';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Web', 'Mobile', 'AI'];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-24 container-padding relative">
      <div className="absolute inset-0 tech-grid opacity-10 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-2">
              Projects
            </h2>
            <p className="text-slate-600 dark:text-slate-400 font-mono text-xs uppercase tracking-widest">Compiling project database...</p>
          </div>
          <a href="https://github.com/ermiyashenok" target="_blank" rel="noopener noreferrer" className="text-cyan-600 dark:text-cyan-500 font-mono text-sm hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-2">
            GIT_LOG --ALL <ArrowRight size={16} />
          </a>
        </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap gap-2 md:gap-4">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full font-mono text-xs uppercase tracking-widest transition-all ${
                    activeCategory === category
                      ? 'bg-cyan-500 text-slate-950 font-bold'
                      : 'bg-slate-200/50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 hover:bg-slate-300/50 dark:hover:bg-slate-700/50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map(project => (
                  <motion.div 
                    key={project.id} 
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="w-full"
                  >
                    <ProjectCard project={project} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
      </motion.div>
    </section>
  );
}
