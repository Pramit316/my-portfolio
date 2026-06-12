export type Project = {
  title: string;
  description: string;
  image?: string;
  gradient?: string;
  tech: string[];
  demo: string;
  github?: string;
};

export const PROJECTS: Project[] = [
  {
    title: "Netra",
    description:
      "Netra is an AI-assisted navigation system developed as my major project to support visually impaired users in identifying obstacles and understanding their surroundings. The system uses YOLO for object detection and Depth Anything V2 for depth estimation, combining recognised object classes with depth-based unknown obstacle detection. The project focuses on computer vision, real-time frame processing, accessibility-focused design, and intelligent obstacle awareness.",
    image: "/images/Netra.png",
    tech: ["Python", "YOLO", "Depth Anything V2", "OpenCV", "Computer Vision"],
    demo: "#",
    github: "https://github.com/Pramit316/Netra",
  },
  {
    title: "Quick Fare",
    description:
      "Designed a passenger-centric application that tackles the daily problems of delays and lack of information in Nepal. The app provides real-time bus tracking, route mapping, and balance management, providing travelers with a seamless and efficient experience. Integrated hardware level functionality to display QR codes for live bus locations, enabling transparency and simplicity. Built an intuitive UI and implemented a high-performance, highly dependable backend system utilizing Node.js and PostgreSQL.",
    image: "/images/QuickFare.png",
    tech: ["Flutter", "Node.js", "PostgreSQL"],
    demo: "https://drive.google.com/file/d/1zBhCTC25GgRva7xrAHS1Z0EHKsuikQDq/view?usp=sharing",
  },
  {
    title: "Pracon Services",
    description:
      "I built a cross-platform Flutter application for an Australian consulting firm, integrating migration, education, and legal services with dedicated admin and user panels. The app uses Firebase (Firestore, Authentication, Storage, FCM) for a secure, real-time backend, with GoRouter navigation, a dynamic ShellRoute layout, and Provider for state management. It features a responsive Material 3 UI with smooth validation and role-based dashboards, deployed via Firebase Hosting for scalability.",
    image: "/images/PraconServiceNew1.png",
    tech: ["Flutter", "Firebase"],
    demo: "https://praconservices-user.web.app/#/login",
  },
  {
    title: "FinTrack",
    description:
      "FinTrack is a simple personal finance tracking application built with Angular, Spring Boot, and PostgreSQL. It allows users to record income and expenses, view total balance, and monitor recent transactions in one place. The app focuses on clean dashboard-style financial management with REST API integration between the frontend and backend.",
    image: "/images/Fintrack.png",
    tech: ["Java", "Spring Boot", "Angular"],
    demo: "#",
    github: "https://github.com/Pramit316/FinTrack",
  },
  {
    title: "Console Finance Tracker",
    description:
      "FinTrack Console is a command-line personal finance tracker built to manage income and expenses through a simple terminal interface. It includes file handling to store and retrieve transaction data, along with multithreading concepts for practising concurrent task execution. The project focuses on core Java programming, data handling, application flow, and strengthening backend-style logic without relying on a graphical UI.",
    image: "/images/Console.png",
    tech: ["Java", "Console I/O", "OOP"],
    demo: "#",
    github: "https://github.com/your-username/console-finance-tracker.git",
  },
  {
    title: "Notoro",
    description:
      "Notoro is a full-stack productivity application built with Angular and Spring Boot, combining note-taking functionality with a Pomodoro timer. It allows users to organise notes, manage focused study/work sessions, and improve productivity through a simple task-oriented workflow. The project demonstrates REST API integration, frontend-backend communication, and practical full-stack application development.",
    gradient: "from-fuchsia-600/70 via-violet-800/80 to-indigo-950/90",
    tech: ["Java", "Spring Boot", "Angular"],
    demo: "#",
    github: "#",
  }
];
