import { motion } from 'motion/react';
import { Github, Linkedin, Mail, FileText, Terminal, Cpu, Code } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center container-padding pt-20 relative overflow-hidden tech-grid">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-6">
          <Terminal size={14} />
          <span>SYSTEM_READY: v1.0.4</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-tighter">
          Ermiyas <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Henok</span>
        </h1>
        
        <div className="flex items-center gap-4 mb-8">
          <h3 className="text-2xl md:text-3xl font-mono text-slate-400">
            &gt; Software Engineer
          </h3>
          <motion.div 
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="w-3 h-8 bg-cyan-500"
          />
        </div>

        <p className="max-w-xl text-lg text-slate-400 mb-10 leading-relaxed font-sans">
          Specializing in high-performance distributed systems and 
          <span className="text-slate-200"> artificial intelligence integration</span>. 
          Architecting the future one commit at a time.
        </p>
        
        <div className="flex flex-wrap gap-6 items-center">
          <a 
            href="#projects" 
            className="group relative px-8 py-4 bg-cyan-500 text-slate-950 rounded-lg font-bold overflow-hidden transition-all hover:scale-105 active:scale-95"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative z-10 flex items-center gap-2">
              <Cpu size={20} />
              INITIALIZE_PROJECTS
            </span>
          </a>

          <div className="flex items-center gap-6">
            <a 
              href="https://github.com/ermiyashenok" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-cyan-400 transition-colors"
              title="GitHub"
            >
              <Github size={28} />
            </a>
            <a 
              href="#" 
              className="flex items-center gap-2 text-slate-500 hover:text-cyan-400 transition-colors font-mono text-sm"
              title="Download CV"
            >
              <FileText size={20} />
              <span>FETCH_CV.PDF</span>
            </a>
          </div>
        </div>
      </motion.div>

      {/* Decorative Code Snippet */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 0.4, x: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="hidden lg:block absolute right-24 top-1/2 -translate-y-1/2 glass-card p-6 rounded-xl font-mono text-xs text-cyan-500/70 border-cyan-500/20"
      >
        <pre>
{`const engineer = {
  name: "Ermiyas Henok",
  role: "Software Engineer",
  skills: ["AI", "Distributed Systems"],
  status: "OPEN_FOR_COLLAB",
  location: "Earth.js"
};

while (alive) {
  engineer.learn();
  engineer.build();
  engineer.optimize();
}`}
        </pre>
      </motion.div>
    </section>
  );
}
