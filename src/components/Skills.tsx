import { useState } from 'react';
import { Cpu, Code2, Database, Terminal } from 'lucide-react';

// Mapping of skill names to their Devicon CDN SVG URLs (original colored logos)
const skillLogos: Record<string, string> = {
  TypeScript:
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
  Python:
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
  Dart:
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg',
  Kotlin:
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg',
  'C++':
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg',
  React:
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
  'Tailwind CSS':
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
  JavaScript:
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
  HTML:
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
  CSS:
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
  'Three.js':
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/threejs/threejs-original.svg',
  Flutter:
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg',
  Figma:
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg',
  Blender:
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blender/blender-original.svg',
  Git:
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
  Pandas:
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg',
  'Scikit-Learn':
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg',
  'Data Analysis':
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg',
};

export default function Skills() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const categories = [
    {
      title: 'LANGUAGES',
      icon: Terminal,
      skills: ['TypeScript', 'Python', 'Dart', 'Kotlin', 'C++'],
    },
    {
      title: 'FRONTEND',
      icon: Code2,
      skills: ['React', 'Tailwind CSS', 'JavaScript', 'HTML', 'CSS', 'Three.js'],
    },
    {
      title: 'MOBILE & DESIGN',
      icon: Cpu,
      skills: ['Flutter', 'Figma', 'Blender', 'Git'],
    },
    {
      title: 'AI & DATA',
      icon: Database,
      skills: ['Pandas', 'Scikit-Learn', 'Data Analysis'],
    },
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

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="relative p-8 min-h-[280px] rounded-xl glass-card border-2 border-cyan-500/30 transition-all duration-500 bg-background/90 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]"
              onMouseEnter={() => setHoveredId(cat.title)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="flex items-center space-x-3 mb-4">
                <cat.icon size={32} className="text-cyan-500" />
                <h3 className="text-2xl font-semibold uppercase text-slate-800 dark:text-white">
                  {cat.title}
                </h3>
              </div>
              <ul
                className={`grid gap-3 transition-opacity duration-300 ${hoveredId === cat.title ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
              >
                {cat.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center space-x-3 text-sm text-slate-600 dark:text-slate-300"
                  >
                    <img
                      src={skillLogos[skill]}
                      alt={skill}
                      className="w-6 h-6 object-contain"
                    />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
