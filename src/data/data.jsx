// Portfolio data - ready to use when needed
// This file contains sample data for the portfolio application

// Navigation data
export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "designs", label: "Designs" },
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
    category: "Mobile Development",
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
    category: "Web Development",
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

// Designs data
export const designsData = [
  {
    id: 1,
    title: "Modern UI/UX Design System",
    description:
      "A comprehensive design system featuring modern UI components, color palettes, typography, and interaction patterns. Created with Figma and Adobe Creative Suite.",
    image: "img/project-1.jpg", // You can replace with actual design images
    technologies: ["Figma", "Adobe Illustrator", "Adobe Photoshop", "Sketch"],
    link: "https://dribbble.com/sahasra/design-system",
    github: "https://github.com/sahasra/design-system",
    demo: "https://design-system.sahasra.dev",
    category: "UI/UX Design",
  },
  {
    id: 2,
    title: "Brand Identity Package",
    description:
      "Complete brand identity design including logo design, business cards, letterhead, and brand guidelines. Focused on modern, minimalist aesthetic with strong visual impact.",
    image: "img/project-2.jpg",
    technologies: ["Adobe Illustrator", "Adobe InDesign", "Adobe Photoshop"],
    link: "https://behance.net/sahasra/brand-identity",
    github: "#",
    demo: "https://brand-identity.sahasra.dev",
    category: "Brand Design",
  },
  {
    id: 3,
    title: "Mobile App Interface Design",
    description:
      "User interface design for mobile applications with focus on user experience, accessibility, and modern design trends. Includes wireframes, prototypes, and final designs.",
    image: "img/project-3.jpg",
    technologies: ["Figma", "Adobe XD", "Principle", "Sketch"],
    link: "https://dribbble.com/sahasra/mobile-ui",
    github: "#",
    demo: "https://mobile-ui.sahasra.dev",
    category: "Mobile Design",
  },
  {
    id: 4,
    title: "Web Application Wireframes",
    description:
      "Comprehensive wireframing and prototyping for web applications. Includes user flow diagrams, information architecture, and interactive prototypes for better user experience.",
    image: "img/project-4.jpg",
    technologies: ["Figma", "Adobe XD", "Balsamiq", "InVision"],
    link: "https://behance.net/sahasra/web-wireframes",
    github: "#",
    demo: "https://web-wireframes.sahasra.dev",
    category: "Web Design",
  },
  {
    id: 5,
    title: "3D Graphics & Animation",
    description:
      "3D modeling, texturing, and animation projects created with Blender. Includes product visualizations, character designs, and motion graphics for various applications.",
    image: "img/project-5.jpg",
    technologies: ["Blender", "Adobe After Effects", "Cinema 4D", "Maya"],
    link: "https://artstation.com/sahasra/3d-graphics",
    github: "#",
    demo: "https://3d-graphics.sahasra.dev",
    category: "3D Design",
  },
  {
    id: 6,
    title: "Print Design Collection",
    description:
      "Collection of print design work including posters, flyers, brochures, and marketing materials. Focus on typography, layout, and visual hierarchy for effective communication.",
    image: "img/project-6.jpg",
    technologies: ["Adobe InDesign", "Adobe Illustrator", "Adobe Photoshop"],
    link: "https://behance.net/sahasra/print-design",
    github: "#",
    demo: "https://print-design.sahasra.dev",
    category: "Print Design",
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
