import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container-padding">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-4 mb-8">
              <h2 className="text-3xl md:text-4xl font-black font-mono tracking-tighter uppercase whitespace-nowrap">
                01. <span className="text-cyan-500">PROFILE_OVERVIEW</span>
              </h2>
              <div className="h-[2px] w-full bg-cyan-500/20" />
            </div>

            <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
              <p>
                I am a Computer Science graduate specializing in cross-platform mobile development, web technologies, and artificial intelligence. My approach combines rigorous engineering principles with creative problem-solving to build scalable, high-performance systems.
              </p>
              <p>
                Currently focused on building responsive mobile applications with <strong>Flutter and Dart</strong>, alongside modern web interfaces using <strong>React and TypeScript</strong>. I enjoy integrating intelligent features using <strong>Python</strong> to bridge the gap between complex backend logic and clean, intuitive user experiences.
              </p>
              <p className="font-mono text-sm text-cyan-500 bg-cyan-500/5 p-4 border-l-2 border-cyan-500">
                // I build services that scale..then automate for consistency..
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="aspect-square rounded-2xl overflow-hidden relative z-10 border border-white/10">
              <div className="absolute inset-0 bg-cyan-500/20 mix-blend-multiply group-hover:bg-transparent transition-all duration-500" />
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop"
                alt="Workspace"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            {/* Background Decorations */}
            <div className="absolute -inset-4 bg-cyan-500/20 blur-3xl opacity-20 group-hover:opacity-40 transition-opacity" />
            <div className="absolute top-8 left-8 w-full h-full border-2 border-cyan-500/30 rounded-2xl -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
