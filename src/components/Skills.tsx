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
        {/* Navbar-style section heading — no numbers */}
        <div className="flex items-center space-x-4 mb-12 relative z-20">
          <h2 className="text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400">
            Skills
          </h2>
          <div className="h-[1px] flex-1 bg-cyan-500/10" />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="group relative p-8 min-h-[280px] rounded-xl glass-card border-2 border-cyan-500/30 transition-all duration-500 bg-background/90 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]"
            >
              <div className="flex items-center space-x-3 mb-6">
                <cat.icon size={28} className="text-cyan-500" />
                <h3 className="text-sm font-mono font-bold uppercase tracking-widest text-slate-800 dark:text-white">
                  {cat.title}
                </h3>
              </div>

              {/* Skills list — always visible, icons are grayscale until hovered */}
              <ul className="grid gap-3">
                {cat.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center space-x-3 text-sm text-slate-600 dark:text-slate-300 cursor-default"
                  >
                    <img
                      src={skillLogos[skill]}
                      alt={skill}
                      className="w-6 h-6 object-contain grayscale brightness-75 dark:brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-300"
                    />
                    <span className="group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-200">
                      {skill}
                    </span>
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
