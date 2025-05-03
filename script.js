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

// Sobre Mi section animations
gsap.from("#sobre-mi div", {
  opacity: 0,
  y: 80,
  duration: 1,
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#sobre-mi",
    start: "top 80%",
    toggleActions: "play none none none"
  }
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

// Contacto section animation
gsap.from("#contacto", {
  opacity: 0,
  y: 50,
  duration: 1,
  scrollTrigger: {
    trigger: "#contacto",
    start: "top 80%",
    toggleActions: "play none none none"
  }
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

// Form Submission
document.getElementById('contact-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const form = e.target;
  const formMessage = document.getElementById('form-message');

  formMessage.textContent = '';
  formMessage.className = 'form-message';

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: new FormData(form),
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      formMessage.textContent = '¡Mensaje enviado con éxito!';
      formMessage.className = 'form-message success';
      form.reset();
    } else {
      formMessage.textContent = 'Error al enviar el mensaje. Por favor, intenta de nuevo.';
      formMessage.className = 'form-message error';
    }
  } catch (error) {
    formMessage.textContent = 'Error al enviar el mensaje. Por favor, intenta de nuevo.';
    formMessage.className = 'form-message error';
  }
});