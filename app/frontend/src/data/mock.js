export const portfolioData = {
  hero: {
    name: "Cristhian Loor Quimí",
    location: "Guayaquil, Ecuador",
    tagline: "Estudiante de Ingeniería de Software especializado en backend y UX/UI, con experiencia académica en el ciclo de vida del software, bases de datos relacionales y no relacionales, y diseño de sistemas.",
    cvUrl: "#"
  },
  about: {
    description: "Estudiante de Ingeniería de Software en la Universidad de Guayaquil. Experiencia académica en desarrollo backend, frontend, UX/UI, investigación de usuario con entrevistas, mapas de empatía y journey maps. Diseño de sistemas, documentación técnica y manual de usuario. Bases de datos relacionales y no relacionales. Dirijo Sublirium, mi emprendimiento de sublimación.",
    stack: [
      "C#/.NET",
      "Clean Architecture",
      "Spring Boot",      "Java",
      "JavaScript",
      "PHP",
      "Flutter/Dart",
      "Supabase",
      "PostgreSQL",
      "Oracle SQL",
      "SQL Server",
      "MongoDB",
      "Figma",
      "Design System",
      "UX/UI"
    ]
  },
  projects: [
    {
      id: 1,
      name: "StockFlow",
      description: "SaaS B2B de gestión de inventario para pequeños negocios latinoamericanos. Flutter + Supabase, multitenancy vía RLS, planes escalonados (Basic/Business/Enterprise).",
      tags: ["Flutter", "Supabase", "SaaS", "Multitenancy"],
      category: "Backend & Mobile",
      github: "https://github.com/cristhianl10/Saas-inventario",
      figma: "",
      url: ""
    },
    {
      id: 2,
      name: "Literapp",
      description: "Club de ltectura digital, proyecto en equipo con JSP/Servlets, Java, Supabase/PostgreSQL, documentación de ciclo de vida completa.",
      tags: ["Java", "JSP/Servlets", "PostgreSQL", "Supabase"],
      category: "Full-Stack",
      github: "https://github.com/erigsml/literapp",
      figma: "",
      url: ""
    },
    {
      id: 3,
      name: "Dr UX",
      description: "Proyecto de gestión de catequesis parroquial, metodología Double Diamond, entrevistas de usuario, empatía y journey maps en Figma.",
      tags: ["UX Research", "Figma", "Double Diamond", "User Interviews"],
      category: "UX/UI",
      github: "",
      figma: "https://www.figma.com/design/sq5JLcLzCFLWJm7M37R8P8/UX---CATEQUESIS---PROYECTO-PARCIAL?node-id=460-1582&t=QxSFMbmmsbWthGsQ-1",
      url: ""
    },
    {
      id: 4,
      name: "Catálogo Sublirium",
      description: "Sitio web catálogo de Sublirium, mi emprendimiento de sublimación en Guayaquil. Desarrollado con HTML/CSS/JS y desplegado en Vercel.",
      tags: ["HTML", "CSS", "JavaScript", "Vercel"],
      category: "Frontend",
      github: "https://github.com/cristhianl10/sitioweb_sublirium",
      figma: "",
      url: "https://sitioweb-sublirium.vercel.app"
    },
    {
      id: 5,
      name: "Gestión de Reservas de Laboratorio",
      description: "Sistema de gestión de reservas de laboratorio desarrollado en C# con arquitectura limpia y buenas prácticas de desarrollo de software.",
      tags: ["C#", ".NET", "Clean Architecture"],
      category: "Backend",
      github: "https://github.com/cristhianl10/Laboratory-reservation-management",
      figma: "",
      url: ""
    },
    {
      id: 6,
      name: "POS System",
      description: "Sistema de punto de venta con arquitectura en capas (Api, Application, Domain, Infrastructure, Utilities). Implementa patrones Repository y Unit of Work, separación de responsabilidades y API REST probada con Postman.",
      tags: ["C#", ".NET", "Entity Framework", "SQL Server", "Clean Architecture"],
      category: "Backend",
      github: "https://github.com/cristhianl10/POS",
      figma: "",
      url: ""
    },
    {
      id: 7,
      name: "Petite — Sistema Veterinario",
      description: "Sistema de gestión veterinaria desarrollado en PHP con conexión a base de datos. Proyecto en equipo para el manejo de pacientes, citas y registros clínicos.",
      tags: ["PHP", "MySQL", "Full-Stack"],
      category: "Full-Stack",
      github: "https://github.com/erigsml/petite",
      figma: "",
      url: ""
    }
  ],
  sublirium: {
    title: "Sublirium",
    tagline: "El arte de regalar emociones",
    description: "Dirijo mi propio negocio de sublimación y productos personalizados en Guayaquil. Tazas, camisetas, gorras y más con diseños personalizados, con el objetivo de generar diseños emocionales transmitidos mediante la personalización.",
    products: ["Termos personalizados", "Camisetas", "Gorras", "Productos a medida"]
  },
  contact: {
    linkedin: "https://linkedin.com/in/cristhian-loor",
    github: "https://github.com/cristhianl10",
    email: "cristhian.loor25@outlook.com"
  }
};
