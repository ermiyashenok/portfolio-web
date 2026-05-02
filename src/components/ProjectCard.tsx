import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import { Project } from '../types';

export interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = project.images || [];

  useEffect(() => {
    if (images.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <motion.a 
      href={project.link || "https://google.com"}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -5 }}
      className="group glass-card rounded-xl overflow-hidden shadow-lg transition-all hover:border-cyan-500/50 block cursor-pointer"
    >
      <div className="aspect-video bg-slate-900 flex items-center justify-center relative overflow-hidden p-0">
        <div className="absolute inset-0 tech-grid opacity-20" />
        
        <AnimatePresence mode="wait">
          {images.length > 0 ? (
            <motion.img 
              key={currentImageIndex}
              src={images[currentImageIndex]} 
              alt={project.title} 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full object-cover transition-opacity relative z-10"
              referrerPolicy="no-referrer"
            />
          ) : (
            <div className="text-slate-800 font-mono font-bold text-2xl tracking-tighter uppercase">
              &lt;{project.title.split(' ')[0]}/&gt;
            </div>
          )}
        </AnimatePresence>

        {/* Manual Navigation */}
        {images.length > 1 && (
          <>
            <button 
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length); }}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 bg-black/50 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-40 hover:bg-black/70"
            >
              <ChevronLeft size={16} />
            </button>
            <button 
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); setCurrentImageIndex((prev) => (prev + 1) % images.length); }}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-black/50 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-40 hover:bg-black/70"
            >
              <ChevronRight size={16} />
            </button>
          </>
        )}

        {/* Carousel Indicators */}
        {images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
            {images.map((_, i) => (
              <div 
                key={i} 
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  i === currentImageIndex ? 'bg-cyan-400 w-4' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        )}

        <div className="absolute inset-0 bg-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 z-30 pointer-events-none">
          <div className="p-3 bg-white rounded-lg text-slate-950 shadow-xl pointer-events-auto">
            <ExternalLink size={20} />
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map(tag => (
            <span key={tag} className="text-[10px] font-mono uppercase tracking-tighter px-2 py-0.5 bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border border-cyan-500/20 rounded">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">{project.title}</h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4 font-sans">
          {project.description}
        </p>
        <div className="pt-4 border-t border-slate-200 dark:border-white/5 flex justify-between items-center">
          <span className="text-[10px] font-mono text-slate-600 dark:text-slate-400 uppercase">Status: Deployed</span>
          <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
        </div>
      </div>
    </motion.a>
  );
}

export default ProjectCard;
