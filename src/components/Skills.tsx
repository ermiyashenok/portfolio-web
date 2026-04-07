import { motion } from 'motion/react';
import { skillCategories } from '../data';

export default function Skills() {
  return (
    <section id="skills" className="py-24 container-padding tech-grid">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-mono font-bold mb-12 tracking-tight text-center md:text-left text-white">
          <span className="text-cyan-500">02.</span> TECH_STACK
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="glass-card p-8 rounded-xl border-cyan-500/10">
              <h3 className="text-sm font-mono uppercase tracking-[0.3em] mb-8 text-cyan-500 flex items-center gap-2">
                <div className="w-2 h-2 bg-cyan-500 rounded-full" />
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill, skillIdx) => (
                  <motion.span 
                    key={skillIdx}
                    whileHover={{ scale: 1.05, borderColor: 'rgba(6, 182, 212, 0.5)' }}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded text-slate-300 font-mono text-sm transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
