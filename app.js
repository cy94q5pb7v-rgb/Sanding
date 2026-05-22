// ===== Squad filter (cards are static HTML) =====
const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.player-card');

filters.forEach(btn => {
  btn.addEventListener('click', () => {
    filters.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const pos = btn.dataset.pos;
    cards.forEach(card => {
      const show = pos === 'all' || card.dataset.pos === pos;
      card.style.display = show ? '' : 'none';
    });
  });
});

// ===== Counter animation for stats bar =====
function animateCounter(el, target, duration = 1800) {
  const start = performance.now();
  function step(now) {
    const t = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - t, 3);
    const value = Math.floor(eased * target);
    el.textContent = value.toLocaleString('ru-RU');
    if (t < 1) requestAnimationFrame(step);
    else el.textContent = target.toLocaleString('ru-RU');
  }
  requestAnimationFrame(step);
}

const statObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      animateCounter(el, +el.dataset.target);
      statObserver.unobserve(el);
    }
  });
}, { threshold: 0.4 });

document.querySelectorAll('.stat-num').forEach(el => statObserver.observe(el));

// ===== Reveal on scroll =====
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.05 });

document.querySelectorAll('.player-card, .trophy, .stat-card, .t-item, .invincibles, .legend-card, .derby-card').forEach(el => {
  el.classList.add('reveal');
  revealObserver.observe(el);
});

// ===== Active nav link on scroll =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    const top = s.offsetTop - 120;
    if (window.scrollY >= top) current = s.id;
  });
  navLinks.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
});
