import React from 'react';
import { ExternalLink } from 'lucide-react';
import { translations } from '../utils/translations';

const PROJECTS_DATA = [
  {
    id: 1,
    title: { es: "Control de Stock", en: "Stock Control" },
    description: {
      es: "El diseño se basa en la creación de una aplicación de control de stock, donde el usuario pueda: Registrarse, Agregar, Editar y Borrar stock y movimientos. Acceder a una lista de productos y movimientos y descargarlos en CSV.",
      en: "Application design based on stock management where users can: Register, Add, Edit, and Delete stock and movements. Access a list of products and transactions and download them in CSV."
    },
    image: "./img/controlDeStock.png",
    largeImage: "./img/controlDeStock.png",
    technologies: [
      { name: "Django", class: "badge-django" },
      { name: "HTML5", class: "badge-html" },
      { name: "CSS3", class: "badge-css" },
      { name: "Bootstrap", class: "badge-bootstrap" },
      { name: "JS", class: "badge-js" },
      { name: "Git", class: "badge-git" }
    ],
    demoUrl: "https://e-comerce-5-sn4h.onrender.com",
    githubUrl: "https://github.com/Obidis/e_comerce"
  },
  {
    id: 2,
    title: { es: "Recetario", en: "Recipe Book" },
    description: {
      es: "El diseño se basa en la creación de una aplicación de recetas, donde el usuario pueda: Registrarse, Crear, Leer, Editar y Borrar recetas. Acceder a una lista de recetas favoritas suyas o de otro usuario. Acceder a una lista de todos los usuarios de la aplicación, pudiendo valorar las recetas y seguir a otros usuarios.",
      en: "Recipe application design where users can: Register, Create, Read, Edit, and Delete recipes. Access a list of favorite recipes (their own or other users'). View all application users, rate recipes, and follow other users."
    },
    image: "./img/recetario.png",
    largeImage: "./img/recetario.png",
    technologies: [
      { name: "Django", class: "badge-django" },
      { name: "HTML5", class: "badge-html" },
      { name: "CSS3", class: "badge-css" },
      { name: "Bootstrap", class: "badge-bootstrap" },
      { name: "JS", class: "badge-js" },
      { name: "Git", class: "badge-git" }
    ],
    demoUrl: "https://recetario-2kf4.onrender.com/es/",
    githubUrl: "https://github.com/Obidis/recetario"
  },
  {
    id: 3,
    title: { es: "Cat Gallery", en: "Cat Gallery" },
    description: {
      es: "Landing page estática con un diseño profesional. Implementación de tipografía, animaciones y colores fieles al diseño original. Uso de Sass para mantener una estructura de estilos organizada y modular. Uso de Fetch para solicitar las imágenes en tiempo real al servidor, con filtrado de imágenes por raza. Comportamiento responsive.",
      en: "Static landing page with a professional design. Typography, animations, and colors faithful to the original design. Uses Sass for modular styles, and Fetch to request images in real-time with breed filtering. Responsive layout."
    },
    image: "./img/catGallery.png",
    largeImage: "./img/catGallery.png",
    technologies: [
      { name: "HTML5", class: "badge-html" },
      { name: "CSS3", class: "badge-css" },
      { name: "JS", class: "badge-js" },
      { name: "Sass", class: "badge-sass" },
      { name: "Vite", class: "badge-vite" },
      { name: "Git", class: "badge-git" }
    ],
    demoUrl: "https://obidis.github.io/Dog-Gallery/",
    githubUrl: "https://github.com/Obidis/Dog-Gallery"
  },
  {
    id: 4,
    title: { es: "Chronograph", en: "Chronograph" },
    description: {
      es: "Cronómetro simple, con funciones de Start, Stop y Reset.",
      en: "Simple stopwatch application featuring Start, Stop, and Reset functionality."
    },
    image: "./img/cronometro.png",
    largeImage: "./img/cronometro.png",
    technologies: [
      { name: "HTML5", class: "badge-html" },
      { name: "CSS3", class: "badge-css" },
      { name: "Sass", class: "badge-sass" },
      { name: "JS", class: "badge-js" },
      { name: "Vite", class: "badge-vite" },
      { name: "Git", class: "badge-git" }
    ],
    demoUrl: "https://obidis.github.io/chronograph/",
    githubUrl: "https://github.com/Obidis/chronograph"
  },
  {
    id: 5,
    title: { es: "Header Business Agency", en: "Header Business Agency" },
    description: {
      es: "Diseño web corporativo moderno para agencia de negocios con maquetación limpia y totalmente adaptable.",
      en: "Modern corporate web design for a business agency with a clean, fully responsive layout."
    },
    image: "./img/smart.jpg",
    largeImage: "./img/smart-grande.jpg",
    technologies: [
      { name: "HTML", class: "badge-html" },
      { name: "CSS", class: "badge-css" }
    ],
    demoUrl: "https://obidis.github.io/bussines/",
    githubUrl: "https://github.com/Obidis/bussines"
  },
  {
    id: 6,
    title: { es: "Creative Agency", en: "Creative Agency" },
    description: {
      es: "Landing page interactiva para estudio creativo enfocada en la experiencia de usuario y animaciones fluidas.",
      en: "Interactive landing page for a creative studio focused on user experience and smooth animations."
    },
    image: "./img/creative.jpg",
    largeImage: "./img/creative-grande.jpg",
    technologies: [
      { name: "HTML", class: "badge-html" },
      { name: "CSS", class: "badge-css" }
    ],
    demoUrl: "https://obidis.github.io/creative/",
    githubUrl: "https://github.com/Obidis/creative"
  },
  {
    id: 7,
    title: { es: "Coworking Space", en: "Coworking Space" },
    description: {
      es: "Plataforma digital para reserva de espacios de trabajo compartido con estética minimalista y profesional.",
      en: "Digital platform for booking shared workspaces with a minimalist and professional aesthetic."
    },
    image: "./img/coworking.jpg",
    largeImage: "./img/coworking-grande.jpg",
    technologies: [
      { name: "HTML", class: "badge-html" },
      { name: "CSS", class: "badge-css" }
    ],
    demoUrl: "https://obidis.github.io/coworking/",
    githubUrl: "https://github.com/Obidis/coworking"
  },
  {
    id: 8,
    title: { es: "NFT Marketplace", en: "NFT Marketplace" },
    description: {
      es: "Interfaz futurista para compra, subasta y exploración de arte digital y coleccionables en la blockchain.",
      en: "Futuristic interface for buying, auctioning, and exploring digital art and collectibles on the blockchain."
    },
    image: "./img/market.jpg",
    largeImage: "./img/market-grande.jpg",
    technologies: [
      { name: "HTML", class: "badge-html" },
      { name: "CSS", class: "badge-css" }
    ],
    demoUrl: "https://obidis.github.io/market/",
    githubUrl: "https://github.com/Obidis/market"
  },
  {
    id: 9,
    title: { es: "Grocery Store", en: "Grocery Store" },
    description: {
      es: "E-commerce de productos frescos e insumos de supermercado con catálogo visual e interactivo.",
      en: "E-commerce for fresh products and supermarket supplies featuring a visual and interactive catalog."
    },
    image: "./img/grocery.jpg",
    largeImage: "./img/grocery-grande.jpg",
    technologies: [
      { name: "HTML", class: "badge-html" },
      { name: "CSS", class: "badge-css" }
    ],
    demoUrl: "https://obidis.github.io/grocery/",
    githubUrl: "https://github.com/Obidis/grocery"
  },
  {
    id: 10,
    title: { es: "Beauty & Spa", en: "Beauty & Spa" },
    description: {
      es: "Sitio web para centro de estética y bienestar con diseño armónico, relajante y tipografía refinada.",
      en: "Website for an aesthetics and wellness center featuring a harmonious, relaxing design and refined typography."
    },
    image: "./img/beauty.jpg",
    largeImage: "./img/beauty-grande.jpg",
    technologies: [
      { name: "HTML", class: "badge-html" },
      { name: "CSS", class: "badge-css" }
    ],
    demoUrl: "https://obidis.github.io/beauty/",
    githubUrl: "https://github.com/Obidis/beauty"
  },
  {
    id: 11,
    title: { es: "Gathsession", en: "Gathsession" },
    description: {
      es: "Portal web especializado en organización de eventos musicales, sesiones en directo y conferencias.",
      en: "Web portal specialized in organizing music events, live sessions, and conferences."
    },
    image: "./img/gathsession.jpg",
    largeImage: "./img/gathsession-grande.jpg",
    technologies: [
      { name: "HTML", class: "badge-html" },
      { name: "CSS", class: "badge-css" }
    ],
    demoUrl: "https://obidis.github.io/gathsession/",
    githubUrl: "https://github.com/Obidis/gathsession"
  },
  {
    id: 12,
    title: { es: "ELearning Landing Page", en: "ELearning Landing Page" },
    description: {
      es: "Plataforma educativa en línea con presentación de cursos, catálogo y llamadas a la acción optimizadas.",
      en: "Online educational platform showcasing courses, catalog, and optimized calls to action."
    },
    image: "./img/elerning.jpg",
    largeImage: "./img/elerning-grande.jpg",
    technologies: [
      { name: "HTML", class: "badge-html" },
      { name: "CSS", class: "badge-css" }
    ],
    demoUrl: "https://obidis.github.io/elerning/",
    githubUrl: "https://github.com/Obidis/elerning"
  },
  {
    id: 13,
    title: { es: "Modern Art Gallery", en: "Modern Art Gallery" },
    description: {
      es: "Galería interactiva para exhibición de piezas de arte contemporáneo con maquetación vanguardista.",
      en: "Interactive gallery for showcasing contemporary art pieces with a cutting-edge layout."
    },
    image: "./img/modernf.jpg",
    largeImage: "./img/modern-grande.jpg",
    technologies: [
      { name: "HTML", class: "badge-html" },
      { name: "CSS", class: "badge-css" }
    ],
    demoUrl: "https://obidis.github.io/art-gallery/",
    githubUrl: "https://github.com/Obidis/art-gallery"
  },
  {
    id: 14,
    title: { es: "Portfolio Website", en: "Portfolio Website" },
    description: {
      es: "Diseño de portafolio profesional centrado en proyectos web, habilidades y experiencia Full Stack.",
      en: "Professional portfolio design centered around web projects, skills, and Full Stack experience."
    },
    image: "./img/porfolio.jpg",
    largeImage: "./img/porfolio-grande.jpg",
    technologies: [
      { name: "HTML", class: "badge-html" },
      { name: "CSS", class: "badge-css" }
    ],
    demoUrl: "https://obidis.github.io/porfolio/",
    githubUrl: "https://github.com/Obidis/porfolio"
  },
  {
    id: 15,
    title: { es: "Web Academy", en: "Web Academy" },
    description: {
      es: "Portal académico dinámico desarrollado con arquitectura modular y lógica interactiva de navegación.",
      en: "Dynamic academic portal developed with modular architecture and interactive navigation logic."
    },
    image: "./img/academy.jpg",
    largeImage: "./img/academy-grande.jpg",
    technologies: [
      { name: "HTML", class: "badge-html" },
      { name: "CSS", class: "badge-css" },
      { name: "JS / JAVA", class: "badge-java" }
    ],
    demoUrl: "https://obidis.github.io/academy/",
    githubUrl: "https://github.com/Obidis/academy"
  }
];

export default function ProjectsGrid({ lang = 'es' }) {
  const t = translations[lang].projects;

  return (
    <section id="proyectos" class="projects-section">
      <div class="section-header">
        <div>
          <h2 class="section-title">{t.title}</h2>
        </div>
        <span class="projects-count">{PROJECTS_DATA.length} {t.countBadge}</span>
      </div>

      {/* SCSS Grid */}
      <div class="projects-grid">
        {PROJECTS_DATA.map((project) => {
          const title = project.title[lang] || project.title.es;
          const description = project.description[lang] || project.description.es;

          return (
            <article class="project-card" key={project.id}>
              <div class="project-img-wrapper">
                <picture>
                  <source media="(min-width:650px)" srcset={project.largeImage} />
                  <img 
                    src={project.image} 
                    alt={title} 
                    class="project-img" 
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80";
                    }}
                  />
                </picture>
              </div>
              <div class="project-body">
                <h3 class="project-title">{title}</h3>
                <p class="project-desc">{description}</p>
                
                {/* Tech Badges */}
                <div class="tech-badges">
                  {project.technologies.map((tech, idx) => (
                    <span class={`tech-badge ${tech.class}`} key={idx}>
                      {tech.name}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div class="project-links">
                  <a 
                    href={project.demoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    class="btn-project btn-demo"
                  >
                    <ExternalLink size={14} />
                    {t.demoBtn}
                  </a>
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    class="btn-project btn-code"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                      <path d="M9 18c-4.51 2-5-2-7-2"></path>
                    </svg>
                    {t.codeBtn}
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
