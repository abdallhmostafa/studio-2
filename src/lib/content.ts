
export type SkillCategory = "Frontend" | "Backend" | "Tools";

export interface Skill {
  name: string;
  level: number; // 0-100
  category: SkillCategory;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  imageHint: string;
  liveUrl?: string;
  repoUrl?: string;
  mediaEmbed?: string; // YouTube video ID or full embed code
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  avatarUrl?: string;
  avatarHint?: string;
}

export const content = {
  nav: {
    home: "Home",
    projects: "Projects",
    skills: "Skills",
    testimonials: "Testimonials",
    contact: "Contact",
  },
  hero: {
    name: "Alex Johnson",
    role: "Flutter Developer & UI/UX Enthusiast",
    introduction:
      "Crafting seamless mobile experiences with Flutter. I specialize in building high-performance, visually appealing applications from concept to deployment. Let's create something amazing together.",
    cta: "View My Work",
  },
  projects: {
    title: "My Projects",
    filterAll: "All",
    techStackLabel: "Tech:",
    liveDemo: "Live Demo",
    viewCode: "View Code",
    items: [
      {
        id: "project-1",
        title: "E-commerce App 'ShopSphere'",
        description:
          "A full-featured e-commerce mobile application built with Flutter and Firebase. Includes product listings, cart, checkout, and user authentication.",
        techStack: ["Flutter", "Dart", "Firebase", "Bloc"],
        imageUrl: "https://placehold.co/600x400.png",
        imageHint: "mobile commerce",
        mediaEmbed: "dQw4w9WgXcQ", // Placeholder YouTube ID
        liveUrl: "#",
        repoUrl: "#",
      },
      {
        id: "project-2",
        title: "Fitness Tracker 'FitFlow'",
        description:
          "A comprehensive fitness tracking app allowing users to monitor workouts, nutrition, and progress. Features custom workout plans and progress charts.",
        techStack: ["Flutter", "Dart", "SQLite", "Provider"],
        imageUrl: "https://placehold.co/600x400.png",
        imageHint: "fitness app",
        mediaEmbed: "L_LUpnjgPso", // Placeholder YouTube ID
      },
      {
        id: "project-3",
        title: "Recipe Sharing Platform 'CookBook'",
        description:
          "A social platform for users to share and discover new recipes. Implemented with a clean UI and real-time updates.",
        techStack: ["Flutter", "Dart", "Node.js", "MongoDB", "Riverpod"],
        imageUrl: "https://placehold.co/600x400.png",
        imageHint: "food recipe",
        liveUrl: "#",
      },
    ] as Project[],
  },
  skills: {
    title: "Technical Skills",
    categories: {
      Frontend: "Frontend",
      Backend: "Backend",
      Tools: "Tools & Platforms",
    },
    items: [
      { name: "Flutter & Dart", level: 95, category: "Frontend" },
      { name: "React Native", level: 75, category: "Frontend" },
      { name: "UI/UX Design", level: 85, category: "Frontend" },
      { name: "Firebase", level: 90, category: "Backend" },
      { name: "Node.js", level: 70, category: "Backend" },
      { name: "REST APIs", level: 88, category: "Backend" },
      { name: "Git & GitHub", level: 92, category: "Tools" },
      { name: "Docker", level: 65, category: "Tools" },
      { name: "Jira", level: 80, category: "Tools" },
    ] as Skill[],
  },
  testimonials: {
    title: "What Others Say",
    items: [
      {
        id: "testimonial-1",
        quote:
          "Alex is a highly skilled Flutter developer. His attention to detail and commitment to quality are outstanding. He delivered an exceptional product on time.",
        name: "Jane Doe",
        role: "Project Manager, Tech Solutions Inc.",
        avatarUrl: "https://placehold.co/100x100.png",
        avatarHint: "person portrait",
      },
      {
        id: "testimonial-2",
        quote:
          "Working with Alex was a pleasure. He has a deep understanding of mobile development and a knack for creating intuitive user interfaces.",
        name: "John Smith",
        role: "CEO, Innovatech Ltd.",
        avatarUrl: "https://placehold.co/100x100.png",
        avatarHint: "person smiling",
      },
    ] as Testimonial[],
  },
  contact: {
    title: "Get In Touch",
    description:
      "I'm always excited to discuss new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!",
    cvButton: "Download CV",
  },
  footer: {
    copy: "© {year} Alex Johnson. All rights reserved.",
  },
};
