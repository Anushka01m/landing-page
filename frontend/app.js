// app.js

// Smooth scroll for internal nav links (#features, #modules, etc.)
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      const targetId = link.getAttribute('href');

      // Ignore plain "#" links
      if (!targetId || targetId === '#') return;

      const targetEl = document.querySelector(targetId);
      if (!targetEl) return;

      event.preventDefault();
      targetEl.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Placeholder: later you can initialize orbit simulation or CV modules here
  // initOrbitSimulation();
  // initCVLab();
});
