// Portfolio data - ready to use when needed
// This file contains sample data for the portfolio application

// Navigation data
export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

// Skills data
export const skillsData = [
  { name: "Adobe After Effects" },
  { name: "Adobe Illustrator" },
  { name: "Adobe Photoshop" },
  { name: "Adobe Premiere Pro" },
  { name: "Android Studio" },
  { name: "Arduino IDE" },
  { name: "Blender" },
  { name: "Bootstrap" },
  { name: "C++" },
  { name: "CSS" },
  { name: "Express" },
  { name: "Figma" },
  { name: "Firebase" },
  { name: "Git" },
  { name: "GitHub" },
  { name: "HTML" },
  { name: "Java" },
  { name: "JavaScript" },
  { name: "MATLAB" },
  { name: "MongoDB" },
  { name: "MS Office" },
  { name: "MySQL" },
  { name: "NetBeans" },
  { name: "Node.js" },
  { name: "PHP" },
  { name: "Python" },
  { name: "React" },
  { name: "Sketchbook" },
  { name: "Tailwind CSS" },
  { name: "TypeScript" },
  { name: "Unity Engine" },
  { name: "VS Code" },
];

// Projects data
export const projectsData = [
  {
    id: 1,
    title: "Rajarata Community Mobile App",
    description:
      "A comprehensive mobile application for the Rajarata community featuring local news, events, marketplace, and community services. Built with React Native for cross-platform compatibility.",
    image: "img/project-1.jpg",
    technologies: ["React Native", "Firebase", "JavaScript", "Node.js"],
    link: "https://github.com/sahasra/rajarata-community-app",
    github: "https://github.com/sahasra/rajarata-community-app",
    demo: "https://rajarata-community.vercel.app",
    category: "Mobile Appplication, ui/ux design",
  },
  {
    id: 2,
    title: "E-Buy Online Shopping Platform",
    description:
      "A full-stack e-commerce platform with user authentication, product management, shopping cart, and payment integration. Features responsive design and admin dashboard.",
    image: "img/project-2.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    link: "https://github.com/sahasra/ebuy-platform",
    github: "https://github.com/sahasra/ebuy-platform",
    demo: "https://ebuy-platform.vercel.app",
    category: "Website, Mobile Application, UI/UX Design",
  },
  {
    id: 3,
    title: "Inventory Management System",
    description:
      "A comprehensive inventory management solution for small to medium businesses. Features real-time tracking, automated reports, and multi-user access control.",
    image: "img/project-3.jpg",
    technologies: ["React", "Python", "Django", "PostgreSQL", "Bootstrap"],
    link: "https://github.com/sahasra/inventory-management",
    github: "https://github.com/sahasra/inventory-management",
    demo: "https://inventory-management.vercel.app",
    category: "Web Application",
  },
  {
    id: 4,
    title: "Personal Portfolio Web App",
    description:
      "A personal portfolio web application to showcase my skills, projects, and experience. Built with React and Tailwind CSS for a modern design.",
    image: "img/project-4.jpg",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    link: "https://sahasra-portfolio.web.app",
    github: "https://github.com/sahasralive/portfolio",
    demo: "https://sahasra-portfolio.web.app/",
    category: "Web Application",
  },
];
// Services data
export const servicesData = [
  {
    id: 1,
    title: "Web Development",
    description:
      "I create responsive and modern websites using React, HTML, CSS, and JavaScript.",
    icon: "fa fa-code",
  },
  {
    id: 2,
    title: "Mobile Apps",
    description:
      "I develop cross-platform mobile applications using React Native for smooth performance.",
    icon: "fa fa-mobile",
  },
  {
    id: 3,
    title: "UI/UX Design",
    description:
      "I design user-friendly and aesthetic interfaces for web and mobile applications.",
    icon: "fa fa-paint-brush",
  },
];

// Contact information
export const contactInfo = {
  email: "youremail@example.com",
  phone: "+94 71 123 4567",
  address: "Colombo, Sri Lanka",
  social: {
    facebook: "#",
    twitter: "#",
    instagram: "#",
    linkedin: "#",
  },
};
