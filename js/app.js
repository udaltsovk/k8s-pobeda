document.addEventListener('DOMContentLoaded', () => {
  // Set current year
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Smooth scroll for arrow
  const arrow = document.querySelector('.scroll-down-arrow');
  if (arrow) {
    arrow.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = arrow.getAttribute('href');
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });

    // Hide arrow on scroll
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        arrow.style.opacity = '0';
        arrow.style.pointerEvents = 'none';
      } else {
        arrow.style.opacity = '0.7';
        arrow.style.pointerEvents = 'auto';
      }
    });
  }

  // Counter logic (simulating uptime from page load)
  const startTime = Date.now();
  
  const hoursEl = document.getElementById('counter-hours');
  const minutesEl = document.getElementById('counter-minutes');
  const secondsEl = document.getElementById('counter-seconds');
  const msEl = document.getElementById('counter-ms');

  function updateCounter() {
    const diff = Date.now() - startTime;
    
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    const ms = diff % 1000;

    if (hoursEl) hoursEl.textContent = hours.toString().padStart(2, '0');
    if (minutesEl) minutesEl.textContent = minutes.toString().padStart(2, '0');
    if (secondsEl) secondsEl.textContent = seconds.toString().padStart(2, '0');
    if (msEl) msEl.textContent = ms.toString().padStart(3, '0');

    requestAnimationFrame(updateCounter);
  }

  if (hoursEl && minutesEl && secondsEl && msEl) {
    requestAnimationFrame(updateCounter);
  }
});