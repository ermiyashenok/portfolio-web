import { Project, Experience, SkillCategory, Certificate } from './types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'AI Personal Finance Manager App',
    description: 'AI-powered personal finance application that tracks expenses and provides budgeting recommendations using machine learning models to categorize spending patterns.',
    tags: ['Flutter', 'Python', 'AI', 'Machine Learning'],
    github: 'https://github.com/ermiyashenok',
    images: [
      'https://picsum.photos/seed/finance1/800/450',
      'https://picsum.photos/seed/finance2/800/450',
      'https://picsum.photos/seed/finance3/800/450'
    ]
  },
  {
    id: '2',
    title: 'AI Fraud Detection System',
    description: 'A sophisticated Python-based system that uses anomaly detection algorithms to identify fraudulent transactions in real-time with high precision.',
    tags: ['Python', 'Scikit-learn', 'Machine Learning', 'Data Analysis'],
    github: 'https://github.com/ermiyashenok',
    link: 'https://github.com/ermiyashenok',
    images: [
      'https://picsum.photos/seed/fraud1/800/450',
      'https://picsum.photos/seed/fraud2/800/450',
      'https://picsum.photos/seed/fraud3/800/450'
    ]
  },
  {
    id: '3',
    title: 'Anarch Streaming',
    description: 'A premium, high-performance streaming platform with a sleek dark interface, featuring movie discovery, trending global content, and detailed movie previews.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'API Integration'],
    link: 'https://anarch-stream.vercel.app',
    github: 'https://github.com/ermiyashenok',
    images: [
      '/projects/anarch-stream.png'
    ]
  }
];

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Delta Electronic Trading',
    role: 'UI/UX Design Intern',
    period: '2025 (3 Months)',
    description: 'Responsible for creating intuitive user interfaces and prototypes for trading platforms. Collaborated with developers to ensure design feasibility and user-centric features.'
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    skills: ['Python', 'Dart', 'JavaScript', 'TypeScript', 'React']
  },
  {
    title: 'Frameworks & Tools',
    skills: ['Flutter', 'Pandas', 'Scikit-learn', 'Git', 'Figma', 'Tailwind CSS']
  }
];

export const certificates: Certificate[] = [
  {
    id: '1',
    title: 'Placeholder Certificate',
    issuer: 'Certifying Organization',
    date: '2025',
    description: 'Add your certificate description here.',
    link: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
  }
];
