export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  image?: string;
  gallery?: string[];
  techStack?: string[];
  features?: string[];
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
    id: 'AI Trading Agent',
    title: 'AI Trading Agent',
    description: 'AI Trading Agent Developed to trade autonomously on via linked broker in my case its running over Hyper-Liquid with your Strategies.',
    longDescription: 'AI Trading Agent Developed to trade autonomously on via linked broker in my case its running over Hyper-Liquid with your back tested Strategies.',
    tags: ['Web Development', 'AI-Agent', 'Langchain', 'Python', 'Hyper-Liquid'],
    techStack: ['Python', 'Langchain', 'Hyper-Liquid', 'Tensor-Flow', 'PyTorch'],
    githubUrl: 'https://github.com/Ravii17/AI-Trading',
    year: '2026',
    featured: true,
  },
  {
    id: 'Smart Parking System Using IoT',
    title: 'Smart Parking System Using IoT',
    description: 'Smart Parking System Using IoT is a comprehensive IoT-based system that helps drivers find parking spots easily and efficiently.',
    longDescription: 'Smart Parking System Using IoT is a comprehensive IoT-based system that helps drivers find parking spots easily and efficiently. It uses sensors to detect available parking spots and provides real-time information to drivers through a mobile app. The system also includes features like automatic payment and navigation to the nearest available parking spot.',
    tags: ['IoT', 'Web Development', 'Full Stack', 'React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS', 'Firebase'],
    techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS', 'Firebase'],
    year: '2024',
    featured: true,
  },
  {
    id: 'Cafe-Bhubaneswar',
    title: 'Cafe Bhubaneswar',
    description: 'Cafe Bhubaneswar is a comprehensive platform for discovering and booking your meal and reservation in Bhubaneswar outlet.',
    longDescription: 'Cafe Bhubaneswar is a comprehensive platform for discovering and booking cafes in Bhubaneswar. It provides a seamless experience for users to find cafes that match their preferences and preferences.',
    tags: ['Web Development', 'Full Stack', 'React', 'Node.js', 'Express', 'Tailwind CSS', 'Firebase'],
    techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS', 'Firebase'],
    githubUrl: 'https://github.com/Ravii17/Cafe_Bhubaneswar',
    year: '2026',
    featured: true,
  },
  {
    id: 'Mentor Connect',
    title: 'Mentor Connect',
    description: 'Mentor Connect is a platform that helps students and professionals discover and book mentorship sessions with experienced professionals from different domains.',
    longDescription: 'Mentor Connect is a comprehensive platform for discovering and booking mentorship sessions with experienced professionals. It provides a seamless experience for users to find mentors that match their preferences and preferences.',
    tags: ['Full Stack', 'React', 'Node.js'],
    techStack: ['React', 'TypeScript', 'Node.js', 'Apache Kafka', 'ClickHouse', 'D3.js'],
    year: '2026',
    featured: true,
  },
  {
    id: 'Promotr',
    title: 'Promotr',
    description: 'Promotr is an platform that helps to connect the organizers with the brands and help them to collaborate for promotional activities thet have the crew section as well as organizer section.',
    longDescription: 'Promotr is an event management platform designed to connect event organizers, workforce (crew), and clients within a single ecosystem. The platform allows crew members to register and offer their services as event staff, while organizers can onboard, manage events, and build credibility through a rating system. Additionally, users who wish to organize events can search for suitable organizers based on location and requirements, making the process efficient and transparent. The application also enables organizers to hire crew members directly within the platform, creating a complete end-to-end event management solution. As an Android Development Intern, I am responsible for developing and optimizing the mobile application, implementing user authentication and role-based navigation, designing responsive UI components, integrating REST APIs for real-time functionality, and improving overall app performance and stability using technologies such as Kotlin/Java, Android SDK, and Firebase.',
    tags: ['Android Development', 'Full Stack', 'React', 'Node.js', 'Express', 'Tailwind CSS', 'Firebase'],
    techStack: ['Kotlin', 'Android SDK', 'Firebase'],
    githubUrl: 'https://github.com/Ravii17/Promotr',
    year: '2026',
    featured: true,
  },
  {
    id: 'Health-Care Plus',
    title: 'Health-Care Plus',
    description: 'Health-Care Plus is an platform to store and manage health records of patients.',
    longDescription: 'Health-Care Plus is a comprehensive platform for storing and managing health records of patients. It provides a seamless experience for users to find cafes that match their preferences and preferences.',
    tags: ['Android Development', 'Full Stack', 'React', 'Node.js', 'Express', 'Tailwind CSS', 'Firebase'],
    techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS', 'Firebase'],
    githubUrl: 'https://github.com/Ravii17/Healthyfit',
    year: '2026',
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
