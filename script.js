// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Inicio section animation
gsap.from("#inicio", {
  opacity: 0,
  y: 50,
  duration: 1
});
gsap.from("#inicio h1", {
  opacity: 0,
  y: 60,
  duration: 1.2,
  ease: "power3.out"
});
gsap.from("#inicio .btn-animated", {
  opacity: 0,
  y: 20,
  duration: 0.8,
  delay: 0.6,
  stagger: 0.2,
  ease: "power3.out"
});
gsap.from("#inicio img", {
  opacity: 0,
  scale: 0.8,
  duration: 1,
  ease: "elastic.out(1, 0.5)"
});

// Portfolio item animations
gsap.utils.toArray(".portfolio-item").forEach(item => {
  gsap.from(item, {
    opacity: 0,
    y: 100,
    duration: 1,
    scrollTrigger: {
      trigger: item,
      start: "top 85%",
      toggleActions: "play none none none"
    }
  });
});

// Herramientas section animations
gsap.utils.toArray(".skill-card").forEach(card => {
  gsap.from(card, {
    opacity: 0,
    x: -80,
    duration: 1,
    stagger: 0.3,
    scrollTrigger: {
      trigger: "#herramientas",
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });
});

// Particle System (Luciérnagas)
const particlesContainer = document.getElementById('particles');
const numParticles = 30;

for (let i = 0; i < numParticles; i++) {
  const particle = document.createElement('div');
  particle.classList.add('particle');
  const size = Math.random() * 5 + 2;
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;
  particle.style.left = `${Math.random() * 100}vw`;
  particle.style.top = `${Math.random() * 100}vh`;
  particlesContainer.appendChild(particle);

  gsap.to(particle, {
    x: Math.random() * 200 - 100,
    y: Math.random() * 200 - 100,
    opacity: Math.random() * 0.8 + 0.2,
    duration: Math.random() * 5 + 3,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
    delay: Math.random() * 5
  });
}

// Portfolio Scroll Navigation
function scrollPortfolio(amount) {
  const container = document.getElementById('portfolio-scroll');
  const scrollWidth = container.scrollWidth;
  const clientWidth = container.clientWidth;
  const maxScroll = scrollWidth - clientWidth;
  let currentScroll = container.scrollLeft;

  if (amount > 0) {
    // Desplazamiento hacia la derecha
    if (currentScroll + amount >= maxScroll) {
      container.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: amount, behavior: 'smooth' });
    }
  } else {
    // Desplazamiento hacia la izquierda
    if (currentScroll + amount <= 0) {
      container.scrollTo({ left: maxScroll, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: amount, behavior: 'smooth' });
    }
  }
}

// Language Toggle Functionality
const translations = {
  es: {
    'greeting': 'Hola, soy',
    'job-title': 'Desarrollador de Videojuegos',
    'download-cv': 'Descargar CV',
    'experience': 'Experiencia',
    'experience-1': 'Creación de experiencias inmersivas',
    'experience-2': 'Desarrollo de videojuegos (Unity + C#)',
    'experience-3': 'Diseño de niveles interactivos',
    'experience-4': 'Simulaciones para capacitación industrial',
    'experience-5': 'UI/UX centrado en el usuario',
    'education': 'Educación',
    'education-1': 'Ingeniería Multimedia – UMNG',
    'education-2': 'Efectos Visuales con Unity – Platzi',
    'education-3': 'Junior Unity Developer – Generation',
    'languages': 'Lenguajes',
    'softwares': 'Softwares',
    'frameworks': 'Frameworks',
    'about-me': 'Sobre Mí',
    'about-me-text': 'Ingeniero en Multimedia con enfoque en desarrollo de experiencias XR (realidad virtual, aumentada y mixta), especializado en Unity y C#. Con más de 3 años de experiencia diseñando entornos inmersivos para capacitación, innovación industrial y eventos. Me destaco por mi pensamiento crítico, trabajo en equipo y orientación al usuario, aportando soluciones interactivas que mejoran procesos, fortalecen la cultura organizacional y potencian la innovación dentro de las empresas.',
    'projects': 'Proyectos',
    'products': 'Productos',
    'product': 'Producto',
    'gamejams': 'GameJams',
    'gamejam': 'GameJam',
    'prototypes': 'Prototipos',
    'prototype': 'Prototipo',
    'project-lilith-title': 'Lilith: A Path to Rebirth',
    'project-lilith-desc': 'Desarrollé una demo de juego tipo Metroidvania con estética de pintura digital. Diseñé entornos atmosféricos en 2D por capas e integré todo el arte, incluyendo elementos de ambientación y relleno. Me encargué de ilustrar los espacios, implementé partículas y shaders, y desarrollé el level design desde placeholders hasta su versión final.',
    'level-design': 'Level Design',
    'technical-artist': 'Technical Artist',
    'environment-artist': 'Environment Artist',
    'project-tienda-title': 'Tienda Virtual Gamificada',
    'project-tienda-desc': 'Desarrollé y lideré una experiencia de realidad virtual para las marcas Blancox y Refisal, creando una tienda inmersiva con interacción de productos, minijuegos, animaciones y narración en voz en off, todo optimizado para Meta Quest 2. El proyecto combinó UI/UX adaptado a VR y mecánicas lúdicas para mejorar el engagement, siendo probado por más de 400 personas en la Feria Interna de Innovación de la empresa, con excelente recepción por su accesibilidad e impacto.',
    'developer': 'Desarrollador',
    '3d-modeling': 'Modelado 3D',
    'project-seguridad-title': 'Capacitación Seguridad Laboral',
    'project-seguridad-desc': 'Desarrollé una capacitación inmersiva en realidad virtual para prevenir accidentes en el área de empaque de sal, enfocada en concienciar sobre el uso correcto de los Equipos de Protección Personal (EPP). Mediante simulaciones realistas y feedback inmediato al cometer errores, la experiencia facilita el aprendizaje seguro y emocionalmente impactante. Usé Unity, VR Toolkit y Autodesk Maya, optimizando un equilibrio entre formación efectiva y sensibilidad para el usuario. La capacitación ha mejorado la seguridad del personal, reduciendo riesgos y reforzando buenas prácticas operativas.',
    'project-ti-title': 'Capacitación Área TI',
    'project-ti-desc': 'Desarrollé una experiencia de realidad virtual interactiva para la inducción del área de Tecnología de la Información, diseñada para presentar de forma inmersiva los procesos, herramientas y estructura del equipo. Me encargué del modelado 3D, guion, desarrollo de mecánicas interactivas, animaciones e integración de IA generativa, optimizando todo para Meta Quest 2. Actualmente se usa como herramienta oficial de bienvenida, destacándose por su claridad y valor pedagógico.',
    'project-ciberseguridad-title': 'Capacitación en Ciberseguridad',
    'project-ciberseguridad-desc': 'Desarrollé una capacitación interactiva en realidad virtual para personal administrativo, enfocada en ciberseguridad y prevención de ataques informáticos. Colaboré con expertos para crear contenido educativo, diseñé mecánicas de juego y escenarios 3D que simulan desafíos reales, integrando interfaces intuitivas para facilitar el aprendizaje en VR. Utilicé Unity, VR Toolkit, C# y Adobe Suite para garantizar una experiencia atractiva y didáctica.',
    'project-desafios-title': 'Desafíos Creativos',
    'project-desafios-desc': 'Desarrollé una experiencia inmersiva llamada "Desafíos Creativos" para una feria corporativa, diseñada para motivar a los empleados a generar ideas innovadoras para el medio ambiente. Creé el guion para tres retos interactivos, integré videos y visuales, modelé escenarios y objetos 3D con animaciones y efectos de partículas, y programé mecánicas interactivas controladas para evitar la desorientación del usuario. Usé Unity, Adobe Suite y técnicas de guionización multimedia. La experiencia fue bien recibida y presentada en la feria Bringeniando.',
    'project-flowfixer-title': 'The Flow Fixer',
    'project-flowfixer-desc': 'The Flow Fixer es un juego 2D desarrollado en Unity durante una Game Jam de un día, con un equipo de cuatro personas. El juego consiste en rotar y ensamblar tuberías para guiar el flujo de agua hasta un hidrante y así apagar el incendio antes de que se acabe el tiempo. Se implementaron mecánicas básicas de rotación, se trabajó la interfaz UI/UX, y se utilizó Git para el control de versiones durante el desarrollo.',
    'project-pharmageddon-title': 'Pharmageddon',
    'project-pharmageddon-desc': 'Pharmageddon es un prototipo sensorial desarrollado en una Game Jam. El jugador debe distribuir alivios en un cuerpo para mitigar síntomas representados como obstáculos. Se implementaron Cinemachine para el control de cámara, Animator para animaciones, sistema de luces para ambientación y Object Pooling para optimizar la gestión de objetos en escena.',
    'shooter': 'Shooter',
    'project-rescatista-title': 'ElRescatista',
    'project-rescatista-desc': 'Desarrollé el prototipo “El Rescatista” durante una Game Jam de tres días, un juego de acertijos para liberar animales de traficantes. Implementé mecánicas de juego como persecución, esconderse y distraer a enemigos, además de la inteligencia artificial para los traficantes. Trabajé en equipo sincronizando tareas para cumplir el plazo. Usé Unity, XR Toolkit, C# y GitHub. El objetivo fue crear conciencia sobre la biodiversidad con una experiencia interactiva y desafiante para jugadores casuales.',
    'project-wizard-title': 'Wizard\'s Quest',
    'project-wizard-desc': 'Wizard’s Quest es un juego 3D desarrollado en Unity durante una Game Jam, con un equipo de tres personas. Se implementaron sistemas de partículas para efectos visuales, y se utilizó Cinemachine para manejar dinámicamente los cambios de cámara, además de organizar la interfaz con capas UI específicas para optimizar la experiencia. El juego cuenta con mecánicas de plataformas en islas flotantes, usando runas y poderes elementales para avanzar. El proyecto fue gestionado con GitHub como control de versiones para facilitar la colaboración.',
    'project-deathsfortune-title': 'DeathsFortune',
    'project-deathsfortune-desc': 'DeathsFortune es un juego 3D para una Game Jam donde controlas a un pirata que debe recolectar monedas en plataformas mientras esquiva cañonazos. Se usaron Animator, Shader Graph y Cinemachine para animaciones, efectos visuales y cámara dinámica.',
    'project-cosmoraid-title': 'Cosmo Raid',
    'project-cosmoraid-desc': 'Cosmo Raid es un prototipo 2D de arcade shooter con oleadas y dificultad progresiva. Desarrollé todas las mecánicas, incluyendo object pooling para optimizar rendimiento, power-ups, VFX e interfaces. El proyecto me permitió mejorar debugging y optimización, con versiones funcionales y avances visuales documentados.',
    'project-colorshape-title': 'ColorShape',
    'project-colorshape-desc': 'Color Shape es un prototipo donde debes avanzar atravesando muros que coinciden con tu color. En el nivel hay objetos que cambian tu color, obligándote a adaptarte para seguir avanzando.',
    'project-fartbear-title': 'FartBear',
    'project-fartbear-desc': 'FartBear es un juego tipo Flappy Bird que implementa un sistema de object pooling para optimizar el rendimiento durante el desplazamiento y la generación de obstáculos.',
    'view-project': 'Ver Proyecto',
    'footer': '© 2025 Kenneth Forero. Todos los derechos reservados.'
  },
  en: {
    'greeting': 'Hello, I am',
    'job-title': 'Game Developer',
    'download-cv': 'Download CV',
    'experience': 'Experience',
    'experience-1': 'Creating immersive experiences',
    'experience-2': 'Game development (Unity + C#)',
    'experience-3': 'Interactive level design',
    'experience-4': 'Simulations for industrial training',
    'experience-5': 'User-centered UI/UX',
    'education': 'Education',
    'education-1': 'Multimedia Engineering – UMNG',
    'education-2': 'Visual Effects with Unity – Platzi',
    'education-3': 'Junior Unity Developer – Generation',
    'languages': 'Languages',
    'softwares': 'Software',
    'frameworks': 'Frameworks',
    'about-me': 'About Me',
    'about-me-text': 'Multimedia Engineer focused on developing XR experiences (virtual, augmented, and mixed reality), specialized in Unity and C#. With over 3 years of experience designing immersive environments for training, industrial innovation, and events. I stand out for my critical thinking, teamwork, and user-oriented approach, delivering interactive solutions that enhance processes, strengthen organizational culture, and drive innovation within companies.',
    'projects': 'Projects',
    'products': 'Products',
    'product': 'Product',
    'gamejams': 'Game Jams',
    'gamejam': 'Game Jam',
    'prototypes': 'Prototypes',
    'prototype': 'Prototype',
    'project-lilith-title': 'Lilith: A Path to Rebirth',
    'project-lilith-desc': 'I developed a Metroidvania-style game demo with a digital painting aesthetic. I designed atmospheric 2D layered environments and integrated all art, including ambiance and filler elements. I handled space illustration, implemented particles and shaders, and developed the level design from placeholders to the final version.',
    'level-design': 'Level Design',
    'technical-artist': 'Technical Artist',
    'environment-artist': 'Environment Artist',
    'project-tienda-title': 'Gamified Virtual Store',
    'project-tienda-desc': 'I developed and led a virtual reality experience for the Blancox and Refisal brands, creating an immersive store with product interaction, mini-games, animations, and voice-over narration, all optimized for Meta Quest 2. The project combined VR-adapted UI/UX and playful mechanics to enhance engagement, tested by over 400 people at the company’s Internal Innovation Fair, with excellent reception for its accessibility and impact.',
    'developer': 'Developer',
    '3d-modeling': '3D Modeling',
    'project-seguridad-title': 'Occupational Safety Training',
    'project-seguridad-desc': 'I developed an immersive virtual reality training to prevent accidents in the salt packaging area, focused on raising awareness about the correct use of Personal Protective Equipment (PPE). Through realistic simulations and immediate feedback on errors, the experience facilitates safe and emotionally impactful learning. I used Unity, VR Toolkit, and Autodesk Maya, optimizing a balance between effective training and user sensitivity. The training has improved staff safety, reducing risks and reinforcing best operational practices.',
    'project-ti-title': 'IT Department Training',
    'project-ti-desc': 'I developed an interactive virtual reality experience for the IT department induction, designed to immersively present the team’s processes, tools, and structure. I handled 3D modeling, scripting, interactive mechanics development, animations, and generative AI integration, optimizing everything for Meta Quest 2. It is currently used as an official onboarding tool, noted for its clarity and pedagogical value.',
    'project-ciberseguridad-title': 'Cybersecurity Training',
    'project-ciberseguridad-desc': 'I developed an interactive virtual reality training for administrative staff, focused on cybersecurity and preventing cyberattacks. I collaborated with experts to create educational content, designed game mechanics and 3D scenarios simulating real challenges, and integrated intuitive interfaces to facilitate VR learning. I used Unity, VR Toolkit, C#, and Adobe Suite to ensure an engaging and educational experience.',
    'project-desafios-title': 'Creative Challenges',
    'project-desafios-desc': 'I developed an immersive experience called "Creative Challenges" for a corporate fair, designed to motivate employees to generate innovative environmental ideas. I created the script for three interactive challenges, integrated videos and visuals, modeled 3D scenarios and objects with animations and particle effects, and programmed controlled interactive mechanics to avoid user disorientation. I used Unity, Adobe Suite, and multimedia scripting techniques. The experience was well-received and presented at the Bringeniando fair.',
    'project-flowfixer-title': 'The Flow Fixer',
    'project-flowfixer-desc': 'The Flow Fixer is a 2D game developed in Unity during a one-day Game Jam with a four-person team. The game involves rotating and assembling pipes to guide water flow to a hydrant to extinguish a fire before time runs out. Basic rotation mechanics were implemented, UI/UX was designed, and Git was used for version control during development.',
    'project-pharmageddon-title': 'Pharmageddon',
    'project-pharmageddon-desc': 'Pharmageddon is a sensory prototype developed during a Game Jam. The player distributes relief within a body to mitigate symptoms represented as obstacles. Cinemachine was used for camera control, Animator for animations, lighting systems for ambiance, and Object Pooling to optimize in-scene object management.',
    'shooter': 'Shooter',
    'project-rescatista-title': 'ElRescatista',
    'project-rescatista-desc': 'I developed the “El Rescatista” prototype during a three-day Game Jam, a puzzle game to free animals from traffickers. I implemented gameplay mechanics like pursuit, hiding, and distracting enemies, along with AI for the traffickers. I worked in a team, synchronizing tasks to meet the deadline. I used Unity, XR Toolkit, C#, and GitHub. The goal was to raise biodiversity awareness with an interactive and challenging experience for casual players.',
    'project-wizard-title': 'Wizard\'s Quest',
    'project-wizard-desc': 'Wizard’s Quest is a 3D game developed in Unity during a Game Jam with a three-person team. Particle systems were implemented for visual effects, and Cinemachine was used for dynamic camera changes, with UI layers organized to optimize the experience. The game features platforming mechanics on floating islands, using runes and elemental powers to progress. The project was managed with GitHub for version control to facilitate collaboration.',
    'project-deathsfortune-title': 'DeathsFortune',
    'project-deathsfortune-desc': 'DeathsFortune is a 3D game for a Game Jam where you control a pirate collecting coins on platforms while dodging cannon fire. Animator, Shader Graph, and Cinemachine were used for animations, visual effects, and dynamic camera.',
    'project-cosmoraid-title': 'Cosmo Raid',
    'project-cosmoraid-desc': 'Cosmo Raid is a 2D arcade shooter prototype with waves and progressive difficulty. I developed all mechanics, including object pooling for performance optimization, power-ups, VFX, and interfaces. The project allowed me to improve debugging and optimization, with functional versions and documented visual progress.',
    'project-colorshape-title': 'ColorShape',
    'project-colorshape-desc': 'Color Shape is a prototype where you must advance through walls matching your color. Objects in the level change your color, forcing you to adapt to progress.',
    'project-fartbear-title': 'FartBear',
    'project-fartbear-desc': 'FartBear is a Flappy Bird-style game that implements an object pooling system to optimize performance during movement and obstacle generation.',
    'view-project': 'View Project',
    'footer': '© 2025 Kenneth Forero. All rights reserved.'
  }
};

// Language Toggle Functionality
document.addEventListener('DOMContentLoaded', () => {
  let currentLanguage = 'en';

  // Initialize with English content
  document.querySelectorAll('[data-lang]').forEach(element => {
    const key = element.getAttribute('data-lang');
    if (translations.en[key]) {
      element.textContent = translations.en[key];
    }
  });
  document.documentElement.lang = 'en';
  document.getElementById('language-toggle').textContent = 'Español';

  // Set up language toggle button
  const languageToggle = document.getElementById('language-toggle');
  if (languageToggle) {
    languageToggle.addEventListener('click', () => {
      currentLanguage = currentLanguage === 'en' ? 'es' : 'en';
      languageToggle.textContent = currentLanguage === 'en' ? 'Español' : 'English';
      document.documentElement.lang = currentLanguage;

      document.querySelectorAll('[data-lang]').forEach(element => {
        const key = element.getAttribute('data-lang');
        if (translations[currentLanguage][key]) {
          element.textContent = translations[currentLanguage][key];
        }
      });
    });
  }
});