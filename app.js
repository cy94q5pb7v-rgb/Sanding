// ===== Squad data — сезон 2025/26 =====
const squad = [
  // GK
  { num: 22, name: 'David Raya', full: 'David Raya Martín', pos: 'gk', posName: 'Вратарь', flag: '🇪🇸', age: 30, apps: 36, goals: 0, assists: 0, cleansheets: 17 },
  { num: 31, name: 'Kepa Arrizabalaga', full: 'Kepa Arrizabalaga Revuelta', pos: 'gk', posName: 'Вратарь', flag: '🇪🇸', age: 31, apps: 8, goals: 0, assists: 0, cleansheets: 3 },
  { num: 32, name: 'Karl Hein', full: 'Karl Jakob Hein', pos: 'gk', posName: 'Вратарь', flag: '🇪🇪', age: 24, apps: 2, goals: 0, assists: 0, cleansheets: 1 },

  // DF
  { num: 2, name: 'William Saliba', full: 'William Alain André Gabriel Saliba', pos: 'df', posName: 'Защитник', flag: '🇫🇷', age: 25, apps: 35, goals: 2, assists: 2, cleansheets: 16 },
  { num: 6, name: 'Gabriel', full: 'Gabriel dos Santos Magalhães', pos: 'df', posName: 'Защитник', flag: '🇧🇷', age: 28, apps: 33, goals: 4, assists: 1, cleansheets: 15 },
  { num: 4, name: 'Ben White', full: 'Benjamin William White', pos: 'df', posName: 'Защитник', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', age: 28, apps: 26, goals: 1, assists: 5, cleansheets: 11 },
  { num: 12, name: 'Jurriën Timber', full: 'Jurriën Timber', pos: 'df', posName: 'Защитник', flag: '🇳🇱', age: 24, apps: 36, goals: 2, assists: 4, cleansheets: 16 },
  { num: 15, name: 'Cristhian Mosquera', full: 'Cristhian Felix Mosquera Erazo', pos: 'df', posName: 'Защитник', flag: '🇪🇸', age: 21, apps: 22, goals: 1, assists: 0, cleansheets: 11 },
  { num: 33, name: 'Riccardo Calafiori', full: 'Riccardo Calafiori', pos: 'df', posName: 'Защитник', flag: '🇮🇹', age: 24, apps: 28, goals: 2, assists: 3, cleansheets: 12 },
  { num: 35, name: 'Oleksandr Zinchenko', full: 'Oleksandr Zinchenko', pos: 'df', posName: 'Защитник', flag: '🇺🇦', age: 29, apps: 14, goals: 0, assists: 2, cleansheets: 5 },
  { num: 17, name: 'Myles Lewis-Skelly', full: 'Myles Marvin Lewis-Skelly', pos: 'df', posName: 'Защитник', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', age: 19, apps: 24, goals: 1, assists: 3, cleansheets: 10 },

  // MF
  { num: 8, name: 'Martin Ødegaard ©', full: 'Martin Ødegaard · Капитан', pos: 'mf', posName: 'Полузащитник', flag: '🇳🇴', age: 27, apps: 32, goals: 8, assists: 11, cleansheets: 0 },
  { num: 41, name: 'Declan Rice', full: 'Declan Rice', pos: 'mf', posName: 'Полузащитник', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', age: 27, apps: 37, goals: 7, assists: 9, cleansheets: 0 },
  { num: 36, name: 'Martín Zubimendi', full: 'Martín Zubimendi Ibáñez', pos: 'mf', posName: 'Опорник', flag: '🇪🇸', age: 27, apps: 34, goals: 3, assists: 4, cleansheets: 0 },
  { num: 16, name: 'Christian Nørgaard', full: 'Christian Nørgaard', pos: 'mf', posName: 'Полузащитник', flag: '🇩🇰', age: 31, apps: 21, goals: 1, assists: 2, cleansheets: 0 },
  { num: 23, name: 'Mikel Merino', full: 'Mikel Merino Zazón', pos: 'mf', posName: 'Полузащитник', flag: '🇪🇸', age: 30, apps: 30, goals: 9, assists: 4, cleansheets: 0 },
  { num: 53, name: 'Ethan Nwaneri', full: 'Ethan Kwame Colin Nwaneri', pos: 'mf', posName: 'Талант академии', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', age: 18, apps: 28, goals: 6, assists: 4, cleansheets: 0 },

  // FW
  { num: 14, name: 'Viktor Gyökeres', full: 'Viktor Einar Gyökeres', pos: 'fw', posName: 'Нападающий', flag: '🇸🇪', age: 27, apps: 35, goals: 26, assists: 6, cleansheets: 0 },
  { num: 7, name: 'Bukayo Saka', full: 'Bukayo Ayoyinka Temidayo Saka', pos: 'fw', posName: 'Нападающий', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', age: 24, apps: 34, goals: 14, assists: 15, cleansheets: 0 },
  { num: 10, name: 'Eberechi Eze', full: 'Eberechi Oluchi Eze', pos: 'fw', posName: 'Атакующий п/з', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', age: 27, apps: 31, goals: 11, assists: 8, cleansheets: 0 },
  { num: 11, name: 'Gabriel Martinelli', full: 'Gabriel Teodoro Martinelli Silva', pos: 'fw', posName: 'Нападающий', flag: '🇧🇷', age: 24, apps: 32, goals: 9, assists: 5, cleansheets: 0 },
  { num: 19, name: 'Leandro Trossard', full: 'Leandro Trossard', pos: 'fw', posName: 'Нападающий', flag: '🇧🇪', age: 31, apps: 31, goals: 8, assists: 6, cleansheets: 0 },
  { num: 29, name: 'Kai Havertz', full: 'Kai Lukas Havertz', pos: 'fw', posName: 'Нападающий', flag: '🇩🇪', age: 26, apps: 14, goals: 4, assists: 2, cleansheets: 0 },
  { num: 20, name: 'Noni Madueke', full: 'Chukwunonso Madueke', pos: 'fw', posName: 'Нападающий', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', age: 23, apps: 27, goals: 6, assists: 4, cleansheets: 0 },
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

// ===== Top scorers сезон 2025/26 =====
const scorers = [
  { name: 'Viktor Gyökeres', goals: 26 },
  { name: 'Bukayo Saka', goals: 14 },
  { name: 'Eberechi Eze', goals: 11 },
  { name: 'Mikel Merino', goals: 9 },
  { name: 'Gabriel Martinelli', goals: 9 },
  { name: 'Martin Ødegaard', goals: 8 },
  { name: 'Declan Rice', goals: 7 },
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
  { comp: 'Champions League · Финал', date: '30 мая 2026 · 22:00', home: 'Arsenal', away: 'Real Madrid', homeFlag: '🔴', awayFlag: '⚪', isHome: true, venue: 'Будапешт · Puskás Aréna' },
  { comp: 'Pre-Season', date: '15 июля 2026 · 12:00', home: 'Arsenal', away: 'AC Milan', homeFlag: '🔴', awayFlag: '🔴', isHome: true, venue: 'Сингапур' },
  { comp: 'Community Shield', date: '09 авг 2026 · 16:00', home: 'Arsenal', away: 'Liverpool', homeFlag: '🔴', awayFlag: '🔴', isHome: true, venue: 'Wembley' },
  { comp: 'Premier League', date: '16 авг 2026 · 17:30', home: 'Manchester United', away: 'Arsenal', homeFlag: '🔴', awayFlag: '🔴', isHome: false, venue: 'Old Trafford' },
];

const results = [
  { comp: 'Premier League', date: '17 мая 2026', home: 'Arsenal', away: 'Crystal Palace', homeFlag: '🔴', awayFlag: '🔵', score: '3 — 0', result: 'win', isHome: true, venue: 'Emirates · 38-й тур' },
  { comp: 'Champions League', date: '13 мая 2026', home: 'Bayern', away: 'Arsenal', homeFlag: '🔴', awayFlag: '🔴', score: '1 — 2', result: 'win', isHome: false, venue: '1/2 · Allianz Arena' },
  { comp: 'Champions League', date: '06 мая 2026', home: 'Arsenal', away: 'Bayern', homeFlag: '🔴', awayFlag: '🔴', score: '2 — 1', result: 'win', isHome: true, venue: '1/2 · Emirates' },
  { comp: 'Premier League', date: '03 мая 2026', home: 'Liverpool', away: 'Arsenal', homeFlag: '🔴', awayFlag: '🔴', score: '1 — 2', result: 'win', isHome: false, venue: 'Anfield · решающий' },
  { comp: 'Champions League', date: '29 апр 2026', home: 'Arsenal', away: 'Inter', homeFlag: '🔴', awayFlag: '⚫', score: '3 — 1', result: 'win', isHome: true, venue: '1/4 · Emirates' },
  { comp: 'Premier League', date: '26 апр 2026', home: 'Arsenal', away: 'Chelsea', homeFlag: '🔴', awayFlag: '🔵', score: '4 — 1', result: 'win', isHome: true, venue: 'Emirates' },
  { comp: 'Premier League', date: '19 апр 2026', home: 'Tottenham', away: 'Arsenal', homeFlag: '⚪', awayFlag: '🔴', score: '0 — 3', result: 'win', isHome: false, venue: 'North London Derby' },
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
