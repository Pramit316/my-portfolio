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
    title: "Pracon Services",
    description:
      "I built a cross-platform Flutter application for an Australian consulting firm, integrating migration, education, and legal services with dedicated admin and user panels. The app uses Firebase (Firestore, Authentication, Storage, FCM) for a secure, real-time backend, with GoRouter navigation, a dynamic ShellRoute layout, and Provider for state management. It features a responsive Material 3 UI with smooth validation and role-based dashboards, deployed via Firebase Hosting for scalability.",
    image: "/images/PraconServiceNew1.png",
    tech: ["Flutter", "Firebase"],
    demo: "https://praconservices-user.web.app/#/login",
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
    title: "FinTrack",
    description:
      "A personal finance tracker that helps users monitor income, expenses, and savings goals in one place. Built with a clean dashboard, category breakdowns, and monthly summaries so spending habits stay visible and actionable.",
    gradient: "from-emerald-600/80 via-teal-700/80 to-cyan-900/90",
    tech: ["Flutter", "Firebase", "Charts"],
    demo: "#",
    github: "#",
  },
  {
    title: "Console Finance Tracker",
    description:
      "A console-based finance tracking application for budgeting and transaction logging without a GUI. Supports adding entries, viewing balances, and simple reports — ideal for learning OOP, file I/O, and structured CLI design.",
    gradient: "from-violet-600/80 via-indigo-800/80 to-slate-900/90",
    tech: ["Java", "Console I/O", "OOP"],
    demo: "#",
    github: "#",
  },
  {
    title: "Notoro",
    description:
      "A note-taking and organization app focused on quick capture, tagging, and search. Designed for students and developers who need lightweight notes without clutter — with a simple, readable interface and local or cloud sync.",
    gradient: "from-fuchsia-600/70 via-violet-800/80 to-indigo-950/90",
    tech: ["Flutter", "Local Storage", "UI/UX"],
    demo: "#",
    github: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "This portfolio website is a clean and modern showcase of my journey as a developer. It brings together a bold hero section, a visual timeline of my growth, and a curated collection of projects that highlight my skills in web and application development. Each part of the site is designed to be simple, responsive, and easy to navigate.",
    image: "/images/updatedPortfolio1.jpg",
    tech: ["React", "Tailwind", "Vite"],
    demo: "#",
  },
];
