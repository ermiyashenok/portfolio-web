import { motion } from 'motion/react';
import { experiences } from '../data';

export default function Experience() {
  return (
    <section id="experience" className="py-24 container-padding">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-mono font-bold mb-12 tracking-tight text-slate-900 dark:text-white">
          <span className="text-cyan-500">04.</span> CAREER_LOG
        </h2>
        
        <div className="space-y-12">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative pl-8 border-l border-cyan-500/30 group">
              <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 bg-cyan-500 rounded-full group-hover:scale-150 transition-transform shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
              
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">{exp.role}</h3>
                <span className="text-[10px] font-mono font-bold text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded">
                  {exp.period}
                </span>
              </div>
              
              <h4 className="text-sm font-mono text-slate-500 uppercase tracking-widest mb-4">
                @ {exp.company}
              </h4>
              
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl font-sans">
                {exp.description}
              </p>
              
              <div className="mt-4 flex gap-2">
                <div className="w-1 h-1 bg-cyan-500/50 rounded-full" />
                <div className="w-1 h-1 bg-cyan-500/50 rounded-full" />
                <div className="w-1 h-1 bg-cyan-500/50 rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
