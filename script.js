document.addEventListener('DOMContentLoaded', () => {
  const startBtn = document.getElementById('start-btn');
  const introScreen = document.getElementById('intro-screen');

  // Transición para ocultar la pantalla de inicio
  startBtn.addEventListener('click', () => {
    introScreen.style.opacity = '0';
    setTimeout(() => {
      introScreen.style.display = 'none';
    }, 800);
  });

  // Animaciones de revelado suave al deslizar por la página
  const reveals = document.querySelectorAll('.reveal');

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    reveals.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const revealPoint = 90;

      if (elementTop < windowHeight - revealPoint) {
        element.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll(); // Ejecución inicial
});
