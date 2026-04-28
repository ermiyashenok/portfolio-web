import { motion } from 'motion/react';
import { certificates } from '../data';
import { Award } from 'lucide-react';

export default function Certificates() {
  return (
    <section id="certificates" className="py-24 container-padding">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-mono font-bold mb-12 tracking-tight text-slate-900 dark:text-white">
          <span className="text-cyan-500">05.</span> CERTIFICATIONS
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {certificates.map((cert) => (
            <a 
              key={cert.id} 
              href={cert.link || '#'} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block glass-card p-6 rounded-xl hover:border-cyan-500/50 transition-all group relative overflow-hidden cursor-pointer"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-bl-full -z-10 group-hover:bg-cyan-500/10 transition-colors" />
              
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-cyan-500/10 rounded-lg text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform">
                  <Award size={24} />
                </div>
                <span className="text-[10px] font-mono font-bold text-cyan-700 dark:text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded">
                  {cert.date}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors mb-2">
                {cert.title}
              </h3>
              
              <h4 className="text-sm font-mono text-slate-600 dark:text-slate-400 uppercase tracking-widest mb-4">
                {cert.issuer}
              </h4>
              
              {cert.description && (
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-sans text-sm">
                  {cert.description}
                </p>
              )}
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
