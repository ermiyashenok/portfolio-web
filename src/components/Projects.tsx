import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { projects } from '../data';
import ProjectCard from './ProjectCard';

export default function Projects() {
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <div key={project.id} className="w-full">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
