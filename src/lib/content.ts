
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
  imageUrls: string[]; 
  imageHints: string[]; 
  liveUrl?: string;
  repoUrl?: string;
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
    about: "About", 
    projects: "Projects",
    skills: "Skills",
    testimonials: "Testimonials",
    contact: "Contact",
  },
  hero: {
    name: "Abdallh Mostafa",
    role: "Flutter Developer & UI/UX Enthusiast",
    introduction:
      "Crafting seamless mobile experiences with Flutter. I specialize in building high-performance, visually appealing applications from concept to deployment. Let's create something amazing together.",
    cta: "View My Work",
    imageUrl: "https://placehold.co/500x500.png", 
    imageHint: "developer portrait",
  },
  about: { 
    title: "About Me",
    greeting: "Hello, I'm Abdallh!",
    description: "A passionate Flutter developer with a keen eye for UI/UX design. I thrive on turning complex problems into elegant, user-friendly mobile applications. My journey in tech is driven by continuous learning and a desire to build impactful products.",
    paragraphs: [
      "With several years of experience in mobile development, I have a strong foundation in Dart and the Flutter framework, enabling me to build cross-platform applications efficiently.",
      "I believe in a collaborative approach, working closely with clients and teams to understand requirements and deliver solutions that exceed expectations.",
      "My goal is to not only write code but to create experiences that users love. I'm always eager to take on new challenges and explore innovative technologies.",
      "When I'm not coding, you can find me exploring new design trends, contributing to open-source projects, or enjoying a good cup of coffee."
    ],
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "coding laptop",
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
        imageUrls: [
            "https://placehold.co/600x400.png", 
            "https://placehold.co/600x400.png",
            "https://placehold.co/600x400.png"
        ], 
        imageHints: ["mobile commerce", "shopping cart", "product page"], 
        liveUrl: "#",
        repoUrl: "#",
      },
      {
        id: "project-2",
        title: "Fitness Tracker 'FitFlow'",
        description:
          "A comprehensive fitness tracking app allowing users to monitor workouts, nutrition, and progress. Features custom workout plans and progress charts.",
        techStack: ["Flutter", "Dart", "SQLite", "Provider"],
        imageUrls: [
            "https://placehold.co/600x400.png",
            "https://placehold.co/600x400.png"
        ], 
        imageHints: ["fitness app", "dashboard chart"], 
      },
      {
        id: "project-3",
        title: "Test Test Test", 
        description:
          "A social platform for users to share and discover new recipes. Implemented with a clean UI and real-time updates.",
        techStack: ["Flutter", "Dart", "Node.js", "MongoDB", "Riverpod"],
        imageUrls: [
            "/images/projects/project-3/screen1.png", // Assuming local path as per previous discussion
            "/images/projects/project-3/screen2.png",
            "/images/projects/project-3/screen3.png",
            "https://placehold.co/600x400.png", // Replaced Unsplash URL
            "https://placehold.co/600x400.png"
        ], 
        imageHints: ["food recipe", "cooking interface", "user profile", "app screenshot", "placeholder image"], 
        liveUrl: "#",
      },
    ] as Project[],
  },
  skills: {
    title: "Technical Skills",
    categories: {
      Frontend: "Flutter & Frontend", 
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
          "Abdallh is a highly skilled Flutter developer. His attention to detail and commitment to quality are outstanding. He delivered an exceptional product on time.", 
        name: "Jane Doe",
        role: "Project Manager, Tech Solutions Inc.",
        avatarUrl: "https://placehold.co/100x100.png",
        avatarHint: "person portrait",
      },
      {
        id: "testimonial-2",
        quote:
          "Working with Abdallh was a pleasure. He has a deep understanding of mobile development and a knack for creating intuitive user interfaces.", 
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
    copy: "© {year} Abdallh Mostafa. All rights reserved.", 
  },
};
