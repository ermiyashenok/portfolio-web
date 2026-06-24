import { Project, Experience, SkillCategory, Certificate } from './types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Anarch Streaming',
    description: 'A premium, high-performance streaming platform with a sleek dark interface, featuring movie discovery, trending global content, watch history, watchlist, and detailed movie previews.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'API Integration'],
    link: 'https://anarch-stream.vercel.app',
    github: 'https://github.com/ermiyashenok',
    images: [
      '/projects/anarch/anarch-stream.png',
      '/projects/anarch/anarch-stream2.png',
      '/projects/anarch/anarch-stream3.png'
    ]
  },
  {
    id: '2',
    title: 'Account Manager Web',
    description: 'A comprehensive web-based financial management dashboard providing deep insights into spending habits, net balance tracking, and automated transaction categorization.',
    tags: ['React', 'TypeScript', 'Node.js', 'Tailwind CSS'],
    github: 'https://github.com/ermiyashenok',
    images: [
      '/projects/account manger web/Screenshot 2026-05-02 131142.png',
      '/projects/account manger web/Screenshot 2026-05-02 131159.png',
      '/projects/account manger web/Screenshot 2026-05-02 131305.png',
      '/projects/account manger web/Screenshot 2026-05-02 131518.png'
    ]
  },
  {
    id: '3',
    title: 'AI Personal Finance Manager App',
    description: 'AI-powered mobile application that tracks expenses and provides budgeting recommendations using machine learning models to categorize spending patterns.',
    tags: ['Flutter', 'Python', 'AI', 'Machine Learning'],
    github: 'https://github.com/ermiyashenok',
    images: [] // Pointing to empty folder for now
  },
  {
    id: '4',
    title: 'AI Fraud Detection System',
    description: 'A sophisticated Python-based system that uses anomaly detection algorithms to identify fraudulent transactions in real-time with high precision.',
    tags: ['Python', 'Scikit-learn', 'Machine Learning', 'Data Analysis'],
    github: 'https://github.com/ermiyashenok',
    link: 'https://github.com/ermiyashenok',
    images: [
      '/projects/python proj/photo-1515879218367-8466d910aaa4.avif',
      '/projects/python proj/python-coding-mistakes.jpg',
      '/projects/python proj/images.jpg',
      '/projects/python proj/images (1).jpg'
    ]
  },
  {
    id: '6',
    title: 'GYM-SYS — Gym Management System',
    description: 'A full-featured multi-tenant gym management platform with role-based access control (SuperAdmin, Manager, Staff, Owner). Features include member & trainer management, branch-level access, payment tracking in Birr, an amenities/shop module, and an Owner analytics dashboard for revenue insights.',
    tags: ['React', 'JavaScript', 'Multi-tenant', 'Role-based Access', 'Vite'],
    link: 'https://gym-sys-teal.vercel.app',
    github: 'https://github.com/ermiyashenok',
    images: [
      '/projects/gym-sys/Screenshot 2026-06-24 142840.png',
      '/projects/gym-sys/Screenshot 2026-06-24 142927.png',
      '/projects/gym-sys/Screenshot 2026-06-24 143012.png',
      '/projects/gym-sys/Screenshot 2026-06-24 143050.png'
    ]
  },
  {
    id: '5',
    title: 'Letterboxd Profile Scraper',
    description: 'A modular Python-based web scraper designed to extract comprehensive film data from Letterboxd lists, featuring concurrent multi-threaded scraping, rate-limiting, and robust CSV/JSON data generation.',
    tags: ['Python', 'Web Scraping', 'BeautifulSoup', 'Multi-threading'],
    github: 'https://github.com/ermiyashenok/l_boxd',
    images: [
      '/projects/l_boxd/Screenshot 2026-05-18 092952.png',
      '/projects/l_boxd/Screenshot 2026-05-18 093013.png',
      '/projects/l_boxd/py.png',
      '/projects/l_boxd/wp14813365.webp'
    ]
  }
];

export const experiences: Experience[] = [
  {
    id: '2',
    company: 'Self-Employed',
    role: 'Independent Developer',
    period: '2025 - Present',
    description: 'Building and publishing scalable web & mobile projects, including web-scraping utilities, personal accounting dashboards, and machine learning models. Actively designing and maintaining solutions while staying up-to-date with modern cross-platform engineering workflows.'
  },
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
