import { Project, Experience, SkillCategory, Certificate } from './types';

export const projects: Project[] = [
  {
    id: '1',
    slug: 'anarch-streaming',
    title: 'Anarch Streaming',
    description: 'A premium, high-performance streaming platform with a sleek dark interface, featuring movie discovery, trending global content, watch history, watchlist, and detailed movie previews.',
    inDepthDescription: "Anarch Streaming is a premium web application developed to provide a top-tier media viewing experience. The goal was to build a highly responsive and visually stunning platform for discovering and tracking movies and TV shows. I implemented a seamless integration with TMDB API to fetch trending, popular, and genre-specific content. The sleek dark mode interface prioritizes visual hierarchy and performance, utilizing React and Tailwind CSS. The app features infinite scrolling, detailed media previews, an advanced search functionality, and a robust watchlist system that persists across sessions.",
    learnings: [
      { category: "Technical skills", points: ["Mastered React state management for complex streaming interfaces.", "Optimized API calls and caching strategies with TMDB.", "Built dynamic and reusable Tailwind CSS components for a consistent dark theme."] },
      { category: "UX/UI", points: ["Designed an immersive, image-forward media discovery experience.", "Implemented smooth skeleton loaders and transitions to reduce perceived wait times."] },
      { category: "Process", points: ["Iteratively tested responsive design across multiple device sizes.", "Addressed performance bottlenecks associated with loading large image assets."] }
    ],
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'API Integration'],
    category: 'Web',
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
    slug: 'account-manager-web',
    title: 'Account Manager Web',
    description: 'A comprehensive web-based financial management dashboard providing deep insights into spending habits, net balance tracking, and automated transaction categorization.',
    inDepthDescription: "Account Manager Web is a comprehensive financial dashboard aimed at helping users gain deep insights into their spending habits and net balance. Built with a React frontend and a Node.js backend, it allows users to log transactions, view automated categorizations, and visualize their financial health over time. The platform features secure user authentication and robust data handling to ensure financial records are accurate and protected. Interactive charts provide an at-a-glance summary of monthly income versus expenses, making personal finance management accessible and intuitive.",
    learnings: [
      { category: "Technical skills", points: ["Architected a full-stack solution connecting a React frontend with a secure Node.js backend.", "Implemented complex data aggregation logic for financial charting.", "Integrated secure authentication and session management."] },
      { category: "UX/UI", points: ["Created an intuitive data visualization dashboard using clear charts and metric cards.", "Ensured data entry forms are streamlined and user-friendly."] },
      { category: "Process", points: ["Focused on data integrity and validation to prevent accounting errors.", "Refined the user workflow based on practical accounting needs."] }
    ],
    tags: ['React', 'TypeScript', 'Node.js', 'Tailwind CSS'],
    category: 'Web',
    link: 'https://account-web-gamma.vercel.app',
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
    slug: 'ai-finance-manager',
    title: 'AI Personal Finance Manager App',
    description: 'AI-powered mobile application that tracks expenses and provides budgeting recommendations using machine learning models to categorize spending patterns.',
    inDepthDescription: "This AI-powered mobile application, developed with Flutter, tracks daily expenses and provides intelligent budgeting recommendations. By integrating Python-based machine learning models, the app learns from the user's spending patterns and automatically categorizes new transactions. The goal was to eliminate manual data entry and provide proactive financial advice. The cross-platform nature of Flutter ensures a consistent native-like experience on both iOS and Android, while the backend AI service handles the heavy lifting of predictive analysis.",
    learnings: [
      { category: "Technical skills", points: ["Bridged a Flutter mobile app with a Python machine learning backend via RESTful APIs.", "Implemented offline data persistence in Flutter.", "Developed basic predictive models for categorization."] },
      { category: "UX/UI", points: ["Designed a clean, mobile-first interface optimized for quick transaction entry.", "Used intuitive color coding to represent financial health metrics."] },
      { category: "Process", points: ["Iterated on the machine learning model to improve categorization accuracy.", "Conducted extensive testing on both Android and iOS platforms."] }
    ],
    tags: ['Flutter', 'Python', 'AI', 'Machine Learning'],
    category: 'Mobile',
    link: 'https://accmanager-one.vercel.app',
    github: 'https://github.com/ermiyashenok',
    images: [],
    mobileOnlyPreview: true
  },
  {
    id: '4',
    slug: 'ai-fraud-detection',
    title: 'AI Fraud Detection System',
    description: 'A sophisticated Python-based system that uses anomaly detection algorithms to identify fraudulent transactions in real-time with high precision.',
    inDepthDescription: "This Python-based system was developed to tackle the critical issue of financial fraud by using anomaly detection algorithms. Leveraging the Scikit-learn library, the system processes large datasets of transaction records, identifying patterns that deviate from typical user behavior. The core challenge was achieving high precision to minimize false positives while still catching sophisticated fraudulent activities in real-time. The project involved extensive data preprocessing, feature engineering, and model evaluation to ensure robust performance across various scenarios.",
    learnings: [
      { category: "Technical skills", points: ["Applied advanced machine learning techniques, specifically anomaly detection, using Scikit-learn.", "Performed rigorous data cleaning and feature engineering using Pandas.", "Optimized algorithm performance for large-scale datasets."] },
      { category: "UX/UI", points: ["Generated comprehensive data visualization reports to interpret model decisions.", "Created clear command-line interfaces for batch processing."] },
      { category: "Process", points: ["Focused heavily on evaluating precision-recall tradeoffs to reduce false positives.", "Documented the model development lifecycle extensively."] }
    ],
    tags: ['Python', 'Scikit-learn', 'Machine Learning', 'Data Analysis'],
    category: 'AI',
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
    slug: 'gym-sys',
    title: 'GYM-SYS — Gym Management System',
    description: 'A full-featured multi-tenant gym management platform with role-based access control (SuperAdmin, Manager, Staff, Owner). Features include member & trainer management, branch-level access, payment tracking in Birr, an amenities/shop module, and an Owner analytics dashboard for revenue insights.',
    inDepthDescription: "GYM-SYS is a full-featured, multi-tenant gym management platform tailored for local gym chains. It incorporates a robust role-based access control system featuring SuperAdmin, Manager, Staff, and Owner tiers. The platform allows comprehensive management of members, trainers, and multiple gym branches. I integrated a payment tracking system localized for Birr, and an 'Amenities' module to handle in-gym shop sales. The Owner analytics dashboard provides high-level revenue insights, ensuring that business owners have immediate access to critical operational data. Built with React and Vite, it emphasizes speed and usability.",
    learnings: [
      { category: "Technical skills", points: ["Implemented complex, multi-tiered Role-Based Access Control (RBAC).", "Built a multi-tenant architecture to support multiple gym branches securely.", "Managed complex global state for billing and user permissions."] },
      { category: "UX/UI", points: ["Designed specialized dashboards tailored to different user roles (Owner vs. Staff).", "Created an accessible, modern interface replacing legacy administrative tools."] },
      { category: "Process", points: ["Conducted deep requirements gathering to align features with actual gym operational workflows.", "Iteratively refactored the codebase to ensure the application could scale across new branches."] }
    ],
    tags: ['React', 'JavaScript', 'Multi-tenant', 'Role-based Access', 'Vite'],
    category: 'Web',
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
    slug: 'letterboxd-scraper',
    title: 'Letterboxd Profile Scraper',
    description: 'A modular Python-based web scraper designed to extract comprehensive film data from Letterboxd lists, featuring concurrent multi-threaded scraping, rate-limiting, and robust CSV/JSON data generation.',
    inDepthDescription: "The Letterboxd Profile Scraper is a robust, modular Python script designed to extract comprehensive film data from Letterboxd lists and user profiles. To handle large datasets efficiently, I implemented concurrent multi-threading, which significantly reduced data extraction times. The scraper navigates the site structure using BeautifulSoup, handling rate-limiting gracefully to prevent IP bans. The output is cleanly formatted into CSV or JSON formats, allowing cinephiles and data analysts to easily port their watch history and ratings into other tools.",
    learnings: [
      { category: "Technical skills", points: ["Mastered web scraping techniques using BeautifulSoup and requests.", "Implemented concurrent multi-threading in Python for high-performance scraping.", "Designed robust error handling and rate-limiting to ensure script reliability."] },
      { category: "UX/UI", points: ["Created a configurable, developer-friendly CLI interface.", "Structured output data formats for maximum compatibility with external tools."] },
      { category: "Process", points: ["Analyzed target website DOM structures to create resilient scraping selectors.", "Iteratively updated the scraper to handle edge cases and site layout changes."] }
    ],
    tags: ['Python', 'Web Scraping', 'BeautifulSoup', 'Multi-threading'],
    category: 'Web',
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
    title: 'Hackathon Participation Certificate',
    issuer: 'Hackathon',
    date: '2025',
    description: 'Recognized for participation and contribution in a competitive hackathon event, demonstrating rapid prototyping, teamwork, and innovative problem-solving skills.',
    link: '/certificates/Ermiyas.pdf'
  }
];
