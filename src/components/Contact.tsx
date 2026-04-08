import { motion } from 'motion/react';
import { Mail, Github, Linkedin, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 container-padding relative overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-5 pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full glass-card p-12 rounded-3xl text-center relative z-10"
      >
        <div className="inline-block p-3 rounded-2xl bg-cyan-500/10 text-cyan-400 mb-8">
          <Mail size={32} />
        </div>
        
        <h2 className="text-4xl font-mono font-bold mb-6 tracking-tighter text-slate-900 dark:text-white">
          ESTABLISH_CONNECTION
        </h2>
        
        <p className="text-slate-600 dark:text-slate-400 text-lg mb-12 max-w-xl mx-auto font-sans">
          My inbox is always open for new protocols and collaborations. 
          Send a ping and let's build something extraordinary.
        </p>
        
        <div className="flex flex-col items-center gap-10">
          <a 
            href="mailto:ermiyashenok44@gmail.com" 
            className="group relative px-10 py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-950 text-xl font-mono font-bold rounded-xl overflow-hidden transition-all hover:scale-105"
          >
            <div className="absolute inset-0 bg-cyan-500 translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
            <span className="relative z-10 flex items-center gap-3">
              ermiyashenok44@gmail.com
              <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
            </span>
          </a>
          
          <div className="flex gap-8">
            {[
              { icon: <Github size={24} />, href: 'https://github.com/ermiyashenok', label: 'GITHUB' },
              { icon: <Linkedin size={24} />, href: 'https://linkedin.com', label: 'LINKEDIN' }
            ].map((social, i) => (
              <a 
                key={i}
                href={social.href}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 text-slate-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors group"
              >
                <div className="p-4 bg-slate-100 dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/5 group-hover:border-cyan-500/30 transition-colors">
                  {social.icon}
                </div>
                <span className="text-[10px] font-mono tracking-[0.2em]">{social.label}</span>
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
