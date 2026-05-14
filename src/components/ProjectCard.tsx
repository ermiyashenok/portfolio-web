import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, ChevronLeft, ChevronRight, Globe, Cpu, BarChart } from 'lucide-react';
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

  const isDeployed = !!(project.link && !project.link.includes('github.com'));
  const mainLink = isDeployed ? project.link : (project.github || "https://github.com/ermiyashenok");

  return (
    <motion.a
      href={mainLink}
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
                className={`w-1.5 h-1.5 rounded-full transition-all ${i === currentImageIndex ? 'bg-cyan-400 w-4' : 'bg-white/30'
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

      <div className="p-6 relative overflow-hidden">
        {/* Main Content */}
        <div className="transition-opacity duration-300 group-hover:opacity-0">
          <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">{project.title}</h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4 font-sans line-clamp-3">
            {project.description}
          </p>
          <div className="pt-4 border-t border-slate-200 dark:border-white/5 flex justify-between items-center">
            <span className="text-[10px] font-mono text-slate-600 dark:text-slate-400 uppercase">Status: {isDeployed ? 'Deployed' : 'Undeployed'}</span>
            <div className={`w-2 h-2 rounded-full ${isDeployed ? 'bg-cyan-500 animate-pulse' : 'bg-slate-400'}`} />
          </div>
        </div>

        {/* Tags Hover Overlay */}
        <div className="absolute inset-0 bg-slate-50 dark:bg-slate-900/95 p-6 -translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out flex flex-col justify-center z-20">
          <div className="text-[10px] font-mono text-cyan-600 dark:text-cyan-400 mb-4 uppercase tracking-[0.2em] border-b border-cyan-500/20 pb-2">
            Technical Stack
          </div>
          <div className="flex flex-wrap gap-3">
            {project.tags.map(tag => {
              const iconMap: Record<string, string> = {
                'React': 'react',
                'TypeScript': 'ts',
                'Tailwind CSS': 'tailwind',
                'Node.js': 'nodejs',
                'Flutter': 'flutter',
                'Python': 'py',
                'Scikit-learn': 'sklearn',
                'AI': 'openai',
                'Machine Learning': 'tensorflow',
                'Data Analysis': 'pandas',
                'API Integration': 'postman',
              };
              const iconName = iconMap[tag] || 'code';
              return (
                <div key={tag} className="group/tag relative">
                  <div className="p-1.5 bg-white/5 border border-white/10 rounded-lg hover:border-cyan-500/50 hover:scale-110 transition-all duration-300">
                    <img 
                      src={`https://skillicons.dev/icons?i=${iconName}`} 
                      alt={tag}
                      className="w-8 h-8"
                    />
                  </div>
                  {/* Tooltip */}
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-900 text-white text-[8px] font-mono rounded opacity-0 group-hover/tag:opacity-100 transition-opacity whitespace-nowrap z-30 border border-white/10 pointer-events-none">
                    {tag.toUpperCase()}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="mt-8">
            <div className="inline-flex items-center gap-2 px-6 py-2.5 bg-cyan-500 text-slate-950 rounded font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-cyan-500/50">
              View Project
              <ExternalLink size={14} />
            </div>
          </div>
        </div>
      </div>
    </motion.a>
  );
}

export default ProjectCard;
