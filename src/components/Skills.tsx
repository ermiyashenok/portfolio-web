import { motion } from 'motion/react';
import { useState, useRef } from 'react';
import { Cpu, Code2, Database, Terminal, Settings } from 'lucide-react';

interface SkillNodeProps {
  label: string;
  x: number;
  y: number;
  icon?: any;
  onHover: (id: string | null) => void;
  isActive: boolean;
  key?: string;
}

const SkillNode = ({ label, x, y, icon: Icon, onHover, isActive }: SkillNodeProps) => {
  return (
    <motion.div
      className="absolute flex flex-col items-center justify-center cursor-pointer pointer-events-auto z-40"
      style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}
      onMouseEnter={() => onHover(label)}
      onMouseLeave={() => onHover(null)}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
    >
      <div className={`p-3 sm:p-4 rounded-lg border-2 transition-all duration-500 backdrop-blur-md ${isActive ? 'border-cyan-500 dark:border-cyan-400 bg-cyan-500/20 shadow-[0_0_30px_rgba(34,211,238,0.6)]' : 'border-cyan-600/50 dark:border-cyan-500/40 bg-slate-50/90 dark:bg-zinc-950/80 shadow-[0_0_15px_rgba(6,182,212,0.05)]'}`}>
        {Icon ? <Icon size={20} className={isActive ? 'text-cyan-300' : 'text-slate-400'} /> : <div className={`w-1.5 h-1.5 rounded-full transition-colors duration-500 ${isActive ? 'bg-cyan-300 shadow-[0_0_10px_rgba(34,211,238,1)]' : 'bg-cyan-500/50'}`} />}
      </div>
      <span className={`mt-2 font-mono text-[8px] sm:text-[10px] font-bold tracking-tighter transition-colors uppercase ${isActive ? 'text-cyan-300' : 'text-slate-500'}`}>
        {label}
      </span>
    </motion.div>
  );
};

// Helper to generate a 90-degree path
const getPipelinePath = (x1: number, y1: number, x2: number, y2: number, seed: number) => {
  // Simple L-shape or mirrored L-shape
  const useMidX = seed % 2 === 0;
  if (useMidX) {
    return `M ${x1} ${y1} L ${x2} ${y1} L ${x2} ${y2}`;
  }
  return `M ${x1} ${y1} L ${x1} ${y2} L ${x2} ${y2}`;
};

export default function Skills() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const categories = [
    { title: "LANGUAGES", icon: Terminal, nodePos: { x: 25, y: 35 }, skills: [
      { name: "TypeScript", pos: { x: 12, y: 20 } },
      { name: "Python", pos: { x: 38, y: 20 } },
      { name: "Dart", pos: { x: 25, y: 15 } }
    ]},
    { title: "FRONTEND", icon: Code2, nodePos: { x: 75, y: 35 }, skills: [
      { name: "React", pos: { x: 62, y: 20 } },
      { name: "Tailwind CSS", pos: { x: 88, y: 20 } },
      { name: "JavaScript", pos: { x: 75, y: 15 } }
    ]},
    { title: "MOBILE & DESIGN", icon: Cpu, nodePos: { x: 25, y: 65 }, skills: [
      { name: "Flutter", pos: { x: 12, y: 80 } },
      { name: "Figma", pos: { x: 38, y: 80 } },
      { name: "Git", pos: { x: 25, y: 85 } }
    ]},
    { title: "AI & DATA", icon: Database, nodePos: { x: 75, y: 65 }, skills: [
      { name: "Pandas", pos: { x: 62, y: 80 } },
      { name: "Scikit-Learn", pos: { x: 88, y: 80 } },
      { name: "Data Analysis", pos: { x: 75, y: 85 } }
    ]},
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-background">
      <div className="container-padding">
        <div className="flex items-center space-x-4 mb-12 relative z-20">
          <h2 className="text-3xl font-mono font-bold tracking-tight uppercase text-slate-900 dark:text-white">
            02. <span className="text-cyan-500">SYSTEM_CORES</span>
          </h2>
          <div className="h-[1px] flex-1 bg-cyan-500/10" />
        </div>

        {/* Interactive Visualization Graph */}
        <div className="relative aspect-[16/10] md:aspect-[21/9] max-w-6xl mx-auto w-full border border-slate-200 dark:border-white/5 rounded-2xl p-4 overflow-visible bg-slate-50/50 dark:bg-black/20" ref={containerRef}>
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="0.8" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            {categories.map((cat, i) => {
              const isCatActive = hoveredId === cat.title || cat.skills.some(s => s.name === hoveredId);
              
              return (
                <g key={cat.title}>
                  {/* Pipeline from center to category */}
                  <motion.path
                    d={getPipelinePath(50, 50, cat.nodePos.x, cat.nodePos.y, i)}
                    fill="none"
                    stroke={isCatActive ? "#22d3ee" : "rgba(6, 182, 212, 0.15)"}
                    strokeWidth={isCatActive ? "0.6" : "0.3"}
                    initial={{ pathLength: 0 }}
                    animate={{ 
                      pathLength: 1,
                      stroke: isCatActive ? "#22d3ee" : ["rgba(6, 182, 212, 0.15)", "rgba(34, 211, 238, 0.25)", "rgba(6, 182, 212, 0.15)"],
                    }}
                    transition={{ 
                      pathLength: { duration: 1.5, delay: i * 0.3 },
                      stroke: { repeat: Infinity, duration: 4, delay: i * 1, ease: "easeInOut" }
                    }}
                    filter={isCatActive ? "url(#glow)" : "none"}
                  />

                  {/* Pipelines from category to skills */}
                  {cat.skills.map((skill, si) => {
                    const isSkillActive = hoveredId === skill.name;
                    return (
                      <motion.path
                        key={skill.name}
                        d={getPipelinePath(cat.nodePos.x, cat.nodePos.y, skill.pos.x, skill.pos.y, si + i)}
                        fill="none"
                        stroke={isSkillActive || (hoveredId === cat.title) ? "#22d3ee" : "rgba(6, 182, 212, 0.1)"}
                        strokeWidth={isSkillActive ? "0.5" : "0.2"}
                        initial={{ pathLength: 0 }}
                        animate={{ 
                          pathLength: 1,
                          stroke: (isSkillActive || hoveredId === cat.title) ? "#22d3ee" : ["rgba(6, 182, 212, 0.1)", "rgba(34, 211, 238, 0.2)", "rgba(6, 182, 212, 0.1)"],
                        }}
                        transition={{ 
                          pathLength: { duration: 1, delay: (i * 0.3) + 0.8 },
                          stroke: { repeat: Infinity, duration: 4, delay: (i * 1) + 0.5, ease: "easeInOut" }
                        }}
                        filter={isSkillActive || hoveredId === cat.title ? "url(#glow)" : "none"}
                      />
                    );
                  })}
                </g>
              );
            })}
          </svg>

          {/* Root Hub */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className={`p-4 sm:p-5 rounded-lg glass-card border-2 transition-all duration-700 bg-background/90 ${hoveredId ? 'border-cyan-400 shadow-[0_0_50px_rgba(34,211,238,0.5)]' : 'border-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.1)]'}`}
            >
              <Terminal size={24} className={hoveredId ? 'text-cyan-300' : 'text-slate-500'} />
            </motion.div>
          </div>

          {/* Render Nodes */}
          {categories.map((cat) => (
            <div key={cat.title}>
              <SkillNode
                label={cat.title}
                x={cat.nodePos.x}
                y={cat.nodePos.y}
                icon={cat.icon}
                onHover={setHoveredId}
                isActive={hoveredId === cat.title || cat.skills.some(s => s.name === hoveredId)}
              />
              {cat.skills.map((skill) => (
                <SkillNode
                  key={skill.name}
                  label={skill.name}
                  x={skill.pos.x}
                  y={skill.pos.y}
                  onHover={setHoveredId}
                  isActive={hoveredId === skill.name}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Console Log Bar */}
        <div className="mt-8 flex justify-center">
          <div className="font-mono text-[9px] uppercase tracking-[0.4em] px-8 py-3 bg-white/[0.02] border border-slate-200 dark:border-white/5 rounded-sm flex items-center space-x-6">
            <div className="flex space-x-1">
              <div className="w-1 h-4 bg-cyan-500/50 animate-pulse" />
              <div className="w-1 h-4 bg-cyan-500/10" />
            </div>
            <span className="text-slate-600 dark:text-slate-400">
              {hoveredId ? (
                <span className="text-cyan-500/80">ACCESSING_MODULE::{hoveredId}</span>
              ) : (
                "SYS_READY::AWAITING_INPUT"
              )}
            </span>
            <span className="text-slate-700">|</span>
            <span className="text-slate-700 hidden sm:inline">ID: 0x0FE49A</span>
          </div>
        </div>


      </div>
    </section>
  );
}
