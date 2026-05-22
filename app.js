// ===== Squad data =====
const squad = [
  // GK
  { num: 22, name: 'David Raya', full: 'David Raya Martín', pos: 'gk', posName: 'Вратарь', flag: '🇪🇸', age: 30, apps: 38, goals: 0, assists: 0, cleansheets: 15 },
  { num: 32, name: 'Karl Hein', full: 'Karl Jakob Hein', pos: 'gk', posName: 'Вратарь', flag: '🇪🇪', age: 23, apps: 4, goals: 0, assists: 0, cleansheets: 1 },

  // DF
  { num: 2, name: 'William Saliba', full: 'William Alain André Gabriel Saliba', pos: 'df', posName: 'Защитник', flag: '🇫🇷', age: 24, apps: 37, goals: 1, assists: 2, cleansheets: 14 },
  { num: 6, name: 'Gabriel', full: 'Gabriel dos Santos Magalhães', pos: 'df', posName: 'Защитник', flag: '🇧🇷', age: 27, apps: 36, goals: 5, assists: 0, cleansheets: 14 },
  { num: 4, name: 'Ben White', full: 'Benjamin William White', pos: 'df', posName: 'Защитник', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', age: 27, apps: 32, goals: 2, assists: 6, cleansheets: 12 },
  { num: 12, name: 'Jurriën Timber', full: 'Jurriën Timber', pos: 'df', posName: 'Защитник', flag: '🇳🇱', age: 24, apps: 34, goals: 1, assists: 3, cleansheets: 13 },
  { num: 35, name: 'Oleksandr Zinchenko', full: 'Oleksandr Zinchenko', pos: 'df', posName: 'Защитник', flag: '🇺🇦', age: 28, apps: 21, goals: 0, assists: 4, cleansheets: 8 },
  { num: 17, name: 'Riccardo Calafiori', full: 'Riccardo Calafiori', pos: 'df', posName: 'Защитник', flag: '🇮🇹', age: 23, apps: 24, goals: 1, assists: 3, cleansheets: 10 },
  { num: 18, name: 'Takehiro Tomiyasu', full: 'Takehiro Tomiyasu', pos: 'df', posName: 'Защитник', flag: '🇯🇵', age: 26, apps: 12, goals: 0, assists: 1, cleansheets: 5 },

  // MF
  { num: 8, name: 'Martin Ødegaard ©', full: 'Martin Ødegaard (Капитан)', pos: 'mf', posName: 'Полузащитник', flag: '🇳🇴', age: 26, apps: 28, goals: 3, assists: 9, cleansheets: 0 },
  { num: 5, name: 'Thomas Partey', full: 'Thomas Teye Partey', pos: 'mf', posName: 'Полузащитник', flag: '🇬🇭', age: 31, apps: 27, goals: 4, assists: 1, cleansheets: 0 },
  { num: 41, name: 'Declan Rice', full: 'Declan Rice', pos: 'mf', posName: 'Полузащитник', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', age: 26, apps: 38, goals: 9, assists: 5, cleansheets: 0 },
  { num: 25, name: 'Mikel Merino', full: 'Mikel Merino Zazón', pos: 'mf', posName: 'Полузащитник', flag: '🇪🇸', age: 29, apps: 32, goals: 7, assists: 2, cleansheets: 0 },
  { num: 20, name: 'Jorginho', full: 'Jorge Luiz Frello Filho', pos: 'mf', posName: 'Полузащитник', flag: '🇮🇹', age: 33, apps: 19, goals: 1, assists: 3, cleansheets: 0 },
  { num: 10, name: 'Fábio Vieira', full: 'Fábio Daniel Soares Silva Vieira', pos: 'mf', posName: 'Полузащитник', flag: '🇵🇹', age: 25, apps: 14, goals: 1, assists: 4, cleansheets: 0 },

  // FW
  { num: 7, name: 'Bukayo Saka', full: 'Bukayo Ayoyinka Temidayo Saka', pos: 'fw', posName: 'Нападающий', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', age: 23, apps: 27, goals: 8, assists: 13, cleansheets: 0 },
  { num: 11, name: 'Gabriel Martinelli', full: 'Gabriel Teodoro Martinelli Silva', pos: 'fw', posName: 'Нападающий', flag: '🇧🇷', age: 23, apps: 36, goals: 8, assists: 4, cleansheets: 0 },
  { num: 9, name: 'Gabriel Jesus', full: 'Gabriel Fernando de Jesus', pos: 'fw', posName: 'Нападающий', flag: '🇧🇷', age: 27, apps: 17, goals: 4, assists: 2, cleansheets: 0 },
  { num: 14, name: 'Kai Havertz', full: 'Kai Lukas Havertz', pos: 'fw', posName: 'Нападающий', flag: '🇩🇪', age: 25, apps: 30, goals: 9, assists: 3, cleansheets: 0 },
  { num: 19, name: 'Leandro Trossard', full: 'Leandro Trossard', pos: 'fw', posName: 'Нападающий', flag: '🇧🇪', age: 30, apps: 34, goals: 10, assists: 4, cleansheets: 0 },
  { num: 29, name: 'Raheem Sterling', full: 'Raheem Shaquille Sterling', pos: 'fw', posName: 'Нападающий', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', age: 30, apps: 18, goals: 2, assists: 2, cleansheets: 0 },
  { num: 56, name: 'Ethan Nwaneri', full: 'Ethan Kwame Colin Nwaneri', pos: 'fw', posName: 'Талант академии', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', age: 17, apps: 20, goals: 6, assists: 2, cleansheets: 0 },
];

const squadDedup = squad;

// ===== Render Squad =====
const squadGrid = document.getElementById('squadGrid');
function renderSquad(filter = 'all') {
  squadGrid.innerHTML = '';
  const list = filter === 'all' ? squadDedup : squadDedup.filter(p => p.pos === filter);
  list.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'player-card reveal';
    card.style.transitionDelay = `${i * 30}ms`;
    card.innerHTML = `
      <div class="player-top">
        <div class="player-num">${p.num}</div>
        <div class="player-flag">${p.flag}</div>
        <div class="player-pos-badge">${p.posName}</div>
      </div>
      <div class="player-info">
        <div class="player-name">${p.name}</div>
        <div class="player-fullname">${p.full} · ${p.age} лет</div>
        <div class="player-stats">
          <div class="pstat"><div class="pstat-val">${p.apps}</div><div class="pstat-lab">Матчи</div></div>
          <div class="pstat"><div class="pstat-val">${p.goals}</div><div class="pstat-lab">Голы</div></div>
          <div class="pstat"><div class="pstat-val">${p.assists}</div><div class="pstat-lab">Передачи</div></div>
          ${p.pos === 'gk'
            ? `<div class="pstat"><div class="pstat-val">${p.cleansheets}</div><div class="pstat-lab">Сухарей</div></div>`
            : `<div class="pstat"><div class="pstat-val">${p.goals + p.assists}</div><div class="pstat-lab">Г+П</div></div>`}
        </div>
      </div>
    `;
    squadGrid.appendChild(card);
  });
  requestAnimationFrame(() => {
    document.querySelectorAll('.player-card.reveal').forEach(el => el.classList.add('visible'));
  });
}
renderSquad();

document.querySelectorAll('.filter').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderSquad(btn.dataset.pos);
  });
});

// ===== Top scorers =====
const scorers = [
  { name: 'Kai Havertz', goals: 9 },
  { name: 'Declan Rice', goals: 9 },
  { name: 'Leandro Trossard', goals: 10 },
  { name: 'Bukayo Saka', goals: 8 },
  { name: 'Gabriel Martinelli', goals: 8 },
  { name: 'Mikel Merino', goals: 7 },
].sort((a, b) => b.goals - a.goals);

const max = Math.max(...scorers.map(s => s.goals));
const scorerList = document.getElementById('scorerList');
scorers.forEach((s, i) => {
  const row = document.createElement('div');
  row.className = 'scorer';
  row.innerHTML = `
    <div class="scorer-rank">${i + 1}</div>
    <div class="scorer-name">${s.name}</div>
    <div class="scorer-bar"><div class="scorer-bar-fill" style="width: ${(s.goals / max) * 100}%"></div></div>
    <div class="scorer-goals">${s.goals}</div>
  `;
  scorerList.appendChild(row);
});

// ===== Matches =====
const upcoming = [
  { comp: 'Premier League', date: '24 мая 2026 · 16:00', home: 'Arsenal', away: 'Manchester City', homeFlag: '🔴', awayFlag: '🔵', isHome: true, venue: 'Emirates' },
  { comp: 'Champions League', date: '28 мая 2026 · 22:00', home: 'Arsenal', away: 'Real Madrid', homeFlag: '🔴', awayFlag: '⚪', isHome: true, venue: 'Emirates · 1/2' },
  { comp: 'Premier League', date: '03 июня 2026 · 14:30', home: 'Tottenham', away: 'Arsenal', homeFlag: '⚪', awayFlag: '🔴', isHome: false, venue: 'NLD · выезд' },
  { comp: 'Premier League', date: '10 июня 2026 · 17:30', home: 'Arsenal', away: 'Chelsea', homeFlag: '🔴', awayFlag: '🔵', isHome: true, venue: 'Emirates' },
  { comp: 'FA Cup', date: '17 июня 2026 · 19:45', home: 'Liverpool', away: 'Arsenal', homeFlag: '🔴', awayFlag: '🔴', isHome: false, venue: 'Anfield' },
];

const results = [
  { comp: 'Premier League', date: '18 мая 2026', home: 'Arsenal', away: 'Newcastle', homeFlag: '🔴', awayFlag: '⚫', score: '3 — 1', result: 'win', isHome: true, venue: 'Emirates' },
  { comp: 'Champions League', date: '13 мая 2026', home: 'Arsenal', away: 'PSG', homeFlag: '🔴', awayFlag: '🔵', score: '2 — 0', result: 'win', isHome: true, venue: 'Emirates · 1/4' },
  { comp: 'Premier League', date: '10 мая 2026', home: 'Aston Villa', away: 'Arsenal', homeFlag: '🟣', awayFlag: '🔴', score: '1 — 2', result: 'win', isHome: false, venue: 'Villa Park' },
  { comp: 'Premier League', date: '04 мая 2026', home: 'Arsenal', away: 'Brighton', homeFlag: '🔴', awayFlag: '🔵', score: '2 — 1', result: 'win', isHome: true, venue: 'Emirates' },
  { comp: 'Premier League', date: '27 апр 2026', home: 'Crystal Palace', away: 'Arsenal', homeFlag: '🔵', awayFlag: '🔴', score: '1 — 1', result: 'draw', isHome: false, venue: 'Selhurst Park' },
  { comp: 'Champions League', date: '23 апр 2026', home: 'PSG', away: 'Arsenal', homeFlag: '🔵', awayFlag: '🔴', score: '0 — 1', result: 'win', isHome: false, venue: 'Parc des Princes' },
];

const matchList = document.getElementById('matchList');
function renderMatches(tab) {
  matchList.innerHTML = '';
  const data = tab === 'upcoming' ? upcoming : results;
  data.forEach((m, i) => {
    const row = document.createElement('div');
    row.className = 'match reveal';
    row.style.transitionDelay = `${i * 40}ms`;
    const middle = m.score
      ? `<div class="match-score ${m.result}">${m.score}</div>`
      : `<div class="match-vs">VS</div>`;
    row.innerHTML = `
      <div>
        <div class="match-comp">${m.comp}</div>
        <div class="match-date">${m.date}</div>
      </div>
      <div class="match-team home">
        <span>${m.home}</span>
        <div class="team-badge ${m.home === 'Arsenal' ? 'arsenal' : ''}">${m.homeFlag}</div>
      </div>
      ${middle}
      <div class="match-team away">
        <div class="team-badge ${m.away === 'Arsenal' ? 'arsenal' : ''}">${m.awayFlag}</div>
        <span>${m.away}</span>
      </div>
      <div class="match-venue">${m.venue}</div>
    `;
    matchList.appendChild(row);
  });
  requestAnimationFrame(() => {
    document.querySelectorAll('.match.reveal').forEach(el => el.classList.add('visible'));
  });
}
renderMatches('upcoming');

document.querySelectorAll('.match-tab').forEach(t => {
  t.addEventListener('click', () => {
    document.querySelectorAll('.match-tab').forEach(b => b.classList.remove('active'));
    t.classList.add('active');
    renderMatches(t.dataset.tab);
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
}, { threshold: 0.1 });

document.querySelectorAll('.section, .trophy, .stat-card, .t-item, .invincibles').forEach(el => {
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
