export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  image?: string;
  gallery?: string[];
  techStack?: string[];
  liveUrl?: string;
  githubUrl?: string;
  year: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 'Trust-Tour',
    title: 'Trust Tour',
    description: 'Trust Tour is a comprehensive travel platform designed to connect travelers with local authorities. It bridges the gap between tourists seeking genuine help in emergency and local authorities, ensuring safe and reliable journeys.',
    longDescription: 'Trust Tour is a comprehensive travel platform designed to connect travelers with local authorities. It bridges the gap between tourists seeking genuine help in emergency and local authorities, ensuring safe and reliable journeys.',
    tags: ['Web Development', 'Full Stack', 'React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS', 'Firebase'],
    techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS', 'Firebase'],
    image: 'C:\Users\ravik\Pictures\Screenshots',
    liveUrl: 'https://trust-toura.pages.dev/',
    githubUrl: 'https://github.com/Ravii17/Trust-Tour',
    year: '2026',
    featured: true,
  },
  {
    id: 'neural-compute-platform',
    title: 'Smart Parking System Using IoT',
    description: 'Smart Parking System Using IoT is a comprehensive IoT-based system that helps drivers find parking spots easily and efficiently.',
    longDescription: 'Smart Parking System Using IoT is a comprehensive IoT-based system that helps drivers find parking spots easily and efficiently. It uses sensors to detect available parking spots and provides real-time information to drivers through a mobile app. The system also includes features like automatic payment and navigation to the nearest available parking spot.',
    tags: ['IoT', 'Web Development', 'Full Stack', 'React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS', 'Firebase'],
    techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS', 'Firebase'],
    year: '2024',
    featured: true,
  },
  {
    id: 'quantum-algorithm-simulator',
    title: 'Quantum Algorithm Simulator',
    description: 'Classical simulation of quantum circuits with optimized tensor network contractions for research applications.',
    longDescription: 'A powerful quantum circuit simulator that uses advanced tensor network methods to efficiently simulate large quantum systems. Designed for algorithm research and education, featuring an intuitive circuit builder and comprehensive visualization tools.',
    tags: ['Quantum Computing', 'Rust', 'Research'],
    techStack: ['Rust', 'Python', 'NumPy', 'React', 'WebAssembly'],
    year: '2023',
    featured: true,
  },
  {
    id: 'realtime-analytics-dashboard',
    title: 'Real-time Analytics Dashboard',
    description: 'Full-stack application for visualizing streaming data with sub-second latency and interactive charts.',
    longDescription: 'A modern analytics platform built for real-time data visualization. Features WebSocket-based streaming, interactive D3.js charts, and a responsive dashboard interface. Handles millions of events per second with efficient data aggregation.',
    tags: ['Full Stack', 'React', 'Node.js'],
    techStack: ['React', 'TypeScript', 'Node.js', 'Apache Kafka', 'ClickHouse', 'D3.js'],
    year: '2023',
    featured: true,
  },
];

export const archiveProjects: Project[] = [
  {
    id: 'cli-task-manager',
    title: 'CLI Task Manager',
    description: 'A minimalist command-line task management tool with vim-like keybindings.',
    tags: ['CLI', 'Rust'],
    year: '2023',
    featured: false,
  },
  {
    id: 'markdown-note-app',
    title: 'Markdown Note App',
    description: 'Electron-based note-taking application with live preview and cloud sync.',
    tags: ['Electron', 'TypeScript'],
    year: '2023',
    featured: false,
  },
  {
    id: 'gpu-path-tracer',
    title: 'GPU Path Tracer',
    description: 'Real-time path tracing renderer using OptiX for photorealistic graphics.',
    tags: ['Graphics', 'CUDA', 'OptiX'],
    year: '2022',
    featured: false,
  },
  {
    id: 'distributed-cache',
    title: 'Distributed Cache System',
    description: 'Consistent hashing-based distributed caching with automatic failover.',
    tags: ['Distributed Systems', 'Go'],
    year: '2022',
    featured: false,
  },
  {
    id: 'code-review-bot',
    title: 'AI Code Review Bot',
    description: 'GitHub bot for automated code reviews using static analysis and ML.',
    tags: ['ML', 'GitHub API', 'Python'],
    year: '2022',
    featured: false,
  },
  {
    id: 'network-monitor',
    title: 'Network Monitor',
    description: 'Real-time network traffic analysis and visualization tool.',
    tags: ['Networking', 'Python', 'React'],
    year: '2021',
    featured: false,
  },
];
