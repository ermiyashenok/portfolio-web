import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 container-padding relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 md:p-12 rounded-2xl relative"
        >
          <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-cyan-500" />
          <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-cyan-500" />

          <h2 className="text-3xl font-mono font-bold mb-8 tracking-tight text-white flex items-center gap-3">
            <span className="text-cyan-500">01.</span> PROFILE_OVERVIEW
          </h2>
          
          <div className="space-y-6 text-lg text-slate-400 leading-relaxed font-sans">
            <p>
              I am a Computer Science graduate specialized in <span className="text-white">full-stack development</span> 
              and <span className="text-cyan-400">artificial intelligence</span>. My approach combines rigorous 
              engineering principles with creative problem-solving to deliver scalable digital solutions.
            </p>
            <p>
              Currently focused on building <span className="text-white italic">intelligent systems</span> that 
              bridge the gap between complex data and intuitive user experiences. I believe in the power of 
              open-source and continuous iteration.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
