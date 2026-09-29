/* ====================================================================
   APP.JS — Renders everything from data.js into the page
   You shouldn't need to edit this file. Edit js/data.js instead.
   ==================================================================== */

// ── Helpers ──────────────────────────────────────────────────────────
function initials(name) {
  return name.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase();
}

function posLabel(pos) {
  return { G: 'Guard', F: 'Forward', C: 'Center' }[pos] || pos;
}

function socialIcon(name) {
  const icons = {
    instagram: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>`,
    twitter:   `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
    tiktok:    `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V9.1a8.16 8.16 0 0 0 4.78 1.52V7.19a4.85 4.85 0 0 1-1.01-.5z"/></svg>`,
    youtube:   `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/></svg>`,
  };
  return icons[name] || '';
}

// ── Social icons (header + footer) ───────────────────────────────────
function renderSocials(container) {
  if (!container) return;
  const links = Object.entries(SOCIAL).filter(([, url]) => url);
  container.innerHTML = links.map(([k, url]) =>
    `<a href="${url}" target="_blank" rel="noopener" aria-label="${k}" title="${k}">${socialIcon(k)}</a>`
  ).join('');
}

// ── Mobile nav toggle ─────────────────────────────────────────────────
function initNav() {
  const toggle = document.querySelector('.nav-toggle');
  const nav    = document.querySelector('.main-nav');
  if (!toggle || !nav) return;
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });

  // Active link
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(a => {
    if (a.getAttribute('href') === path) a.classList.add('active');
  });
}

// ── Hero team info ────────────────────────────────────────────────────
function renderHero() {
  const el = document.getElementById('hero-tagline');
  if (el) el.textContent = TEAM_INFO.tagline;
  const season = document.getElementById('hero-season');
  if (season) season.textContent = TEAM_INFO.season + ' Season';
}

// ── NEWS SECTION ──────────────────────────────────────────────────────
let activeFilter = 'All';

function buildNewsCard(post, idx) {
  const thumb = post.image
    ? `<img src="${post.image}" alt="${post.title}" loading="lazy">`
    : `<svg viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.5)" stroke-width="1.5" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v8M8 12l4-4 4 4"/></svg>`;

  return `
  <article class="card news-card" role="article">
    <div class="card-media">${thumb}</div>
    <div class="card-body">
      <span class="tag">${post.tag}</span>
      <h3>${post.title}</h3>
      <p class="meta">${post.date}</p>
      <p class="excerpt">${post.excerpt}</p>
      <button class="text-link" onclick="openNews(${idx})" aria-label="Read full story: ${post.title}">Read more →</button>
    </div>
  </article>`;
}

function renderNews(filter) {
  const grid = document.getElementById('news-grid');
  if (!grid) return;
  activeFilter = filter || activeFilter;

  const filtered = NEWS.filter(p => activeFilter === 'All' || p.tag === activeFilter);
  if (filtered.length === 0) {
    grid.innerHTML = `<div class="empty-state"><p>No posts yet. Add some in js/data.js under the NEWS array!</p></div>`;
  } else {
    const indices = NEWS.reduce((acc, p, i) =>
      (activeFilter === 'All' || p.tag === activeFilter) ? [...acc, i] : acc, []);
    grid.innerHTML = indices.map(i => buildNewsCard(NEWS[i], i)).join('');
  }

  // Update filter buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === activeFilter);
  });
}

function renderNewsFilters() {
  const bar = document.getElementById('news-filters');
  if (!bar) return;
  const tags = ['All', ...new Set(NEWS.map(p => p.tag))];
  bar.innerHTML = tags.map(t =>
    `<button class="filter-btn${t === 'All' ? ' active' : ''}" data-filter="${t}" onclick="renderNews('${t}')">${t}</button>`
  ).join('');
}

// News modal
let newsModal = null;
function openNews(idx) {
  const post = NEWS[idx];
  if (!post) return;
  if (!newsModal) newsModal = document.getElementById('news-modal');
  const body = post.body.split('\n\n').map(p => `<p>${p}</p>`).join('');
  newsModal.querySelector('.modal-card').innerHTML = `
    <button class="modal-close" onclick="closeNewsModal()" aria-label="Close">×</button>
    <span class="tag">${post.tag}</span>
    <h2 style="text-align:left;font-size:1.35rem;margin-top:10px;">${post.title}</h2>
    <p class="meta">${post.date}</p>
    <div class="full-body" style="padding-top:0;border-top:0;">${body}</div>
  `;
  newsModal.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeNewsModal() {
  newsModal.classList.remove('open');
  document.body.style.overflow = '';
}


// ── SCHEDULE SECTION ──────────────────────────────────────────────────
let scheduleFilter = 'All';

function parseGameDate(str) {
  const [y, m, d] = str.split('-').map(Number);
  return new Date(y, m - 1, d);
}

function isUpcoming(game) {
  const today = new Date(); today.setHours(0, 0, 0, 0);
  return parseGameDate(game.date) >= today;
}

function sortedSchedule() {
  return [...SCHEDULE].sort((a, b) => parseGameDate(a.date) - parseGameDate(b.date));
}

// Logo with graceful fallback: real image if it loads, initials badge if not
function teamLogo(logoPath, name, isUs) {
  const cls = isUs ? 'team-logo is-us' : 'team-logo';
  const fallback = `<span class="logo-fallback">${isUs ? 'BSU' : initials(name)}</span>`;
  const path = logoPath || (isUs ? TEAM_INFO.logo : '');
  const img = path
    ? `<img src="${path}" alt="${name} logo" loading="lazy"
         onload="this.previousElementSibling.style.display='none'"
         onerror="this.remove()">`
    : '';
  return `<span class="${cls}">${fallback}${img}</span>`;
}

function buildGameCard(g, isNext) {
  const dt = parseGameDate(g.date);
  const month = dt.toLocaleDateString('en-US', { month: 'short' });
  const weekday = dt.toLocaleDateString('en-US', { weekday: 'long' });
  const upcoming = isUpcoming(g);
  const joiner = g.homeAway === 'Away' ? '@' : 'vs';
  const mapQuery = encodeURIComponent([g.venue, g.address].filter(Boolean).join(', '));
  const mapLink = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;

  let status = '';
  if (g.result) {
    const won = g.result.us > g.result.them;
    status = `<div class="game-result ${won ? 'win' : 'loss'}">
        <span class="wl">${won ? 'W' : 'L'}</span>
        <span class="score">${g.result.us}–${g.result.them}</span>
      </div>`;
  } else if (!upcoming) {
    status = `<div class="game-result final"><span class="score">Final</span></div>`;
  } else {
    status = `<div class="game-result time"><span class="score">${g.time || 'TBD'}</span></div>`;
  }

  const badges = [
    isNext ? `<span class="game-badge next">Next Game</span>` : '',
    `<span class="game-badge ${g.homeAway.toLowerCase()}">${g.homeAway}</span>`,
    g.event ? `<span class="game-badge event">${g.event}</span>` : '',
  ].join('');

  return `
  <article class="game-card${upcoming ? '' : ' is-past'}${isNext ? ' is-next' : ''}">
    <div class="game-date">
      <span class="gd-month">${month}</span>
      <span class="gd-day">${dt.getDate()}</span>
      <span class="gd-year">${dt.getFullYear()}</span>
    </div>
    <div class="game-main">
      <div class="game-badges">${badges}</div>
      <div class="game-matchup">
        <div class="game-team">
          ${teamLogo('', TEAM_INFO.shortName, true)}
          <span class="team-name">Ball State</span>
        </div>
        <span class="game-vs">${joiner}</span>
        <div class="game-team">
          ${teamLogo(g.logo, g.opponent, false)}
          <span class="team-name">${g.opponent}</span>
        </div>
      </div>
      <div class="game-details">
        <span>🗓 ${weekday}${g.time ? ' · ' + g.time : ''}</span>
        <span>📍 ${g.venue}${g.address ? ' — ' + g.address : ''}
          · <a class="map-link" href="${mapLink}" target="_blank" rel="noopener">Directions</a></span>
        ${g.note ? `<span>ℹ️ ${g.note}</span>` : ''}
      </div>
    </div>
    ${status}
  </article>`;
}

function renderSchedule(filter) {
  const list = document.getElementById('schedule-list');
  if (!list) return;
  scheduleFilter = filter || scheduleFilter;

  const all = sortedSchedule();
  const nextGame = all.find(isUpcoming);
  const shown = all.filter(g => {
    if (scheduleFilter === 'Upcoming') return isUpcoming(g);
    if (scheduleFilter === 'Past')     return !isUpcoming(g);
    if (scheduleFilter === 'Home')     return g.homeAway === 'Home';
    if (scheduleFilter === 'Away')     return g.homeAway === 'Away';
    return true;
  });

  list.innerHTML = shown.length
    ? shown.map(g => buildGameCard(g, g === nextGame)).join('')
    : `<div class="empty-state"><p>No games to show here yet.</p></div>`;

  document.querySelectorAll('#schedule-filters .filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === scheduleFilter);
  });

  // Record summary
  const rec = document.getElementById('schedule-record');
  if (rec) {
    const played = all.filter(g => g.result);
    const w = played.filter(g => g.result.us > g.result.them).length;
    rec.textContent = played.length ? `Season record: ${w}–${played.length - w}` : '';
  }
}

function renderScheduleFilters() {
  const bar = document.getElementById('schedule-filters');
  if (!bar) return;
  bar.innerHTML = ['Upcoming', 'All', 'Past', 'Home', 'Away'].map(t =>
    `<button class="filter-btn" data-filter="${t}" onclick="renderSchedule('${t}')">${t}</button>`
  ).join('');
}

// HOME: next 3 games teaser
function renderHomeSchedule() {
  const list = document.getElementById('home-schedule-list');
  if (!list) return;
  const upcoming = sortedSchedule().filter(isUpcoming).slice(0, 3);
  list.innerHTML = upcoming.length
    ? upcoming.map((g, i) => buildGameCard(g, i === 0)).join('')
    : `<div class="empty-state"><p>No upcoming games scheduled yet — check back soon!</p></div>`;
}

// ── ROSTER SECTION ────────────────────────────────────────────────────
function buildPlayerCard(p, idx) {
  const hasPhoto = !!p.photo;
  const media = hasPhoto
    ? `<img src="${p.photo}" alt="${p.name}" loading="lazy">`
    : `<span class="num">#${p.number}</span>`;
  const photoClass = hasPhoto ? ' has-photo' : '';

  return `
  <button class="card player-card" onclick="openPlayer(${idx})" aria-label="View profile for ${p.name}">
    <div class="player-plate${photoClass}">
      ${media}
      <span class="role-flag">${posLabel(p.position)}</span>
      ${hasPhoto ? `<span class="num">#${p.number}</span>` : ''}
    </div>
    <div class="card-body">
      <h3>${p.name}</h3>
      <p class="player-line"># <strong>${p.number}</strong> &nbsp;·&nbsp; <strong>${p.position}</strong> &nbsp;·&nbsp; ${p.year}</p>
      <p class="player-line">${p.height} &nbsp;·&nbsp; ${p.weight}</p>
      <p class="player-line">${p.hometown}</p>
    </div>
  </button>`;
}

function renderRoster() {
  const grid = document.getElementById('roster-grid');
  if (!grid) return;
  if (PLAYERS.length === 0) {
    grid.innerHTML = `<div class="empty-state"><p>No players yet. Add them in js/data.js under PLAYERS!</p></div>`;
  } else {
    grid.innerHTML = PLAYERS.map((p, i) => buildPlayerCard(p, i)).join('');
  }
}

// Player modal
let playerModal = null;
function openPlayer(idx) {
  const p = PLAYERS[idx];
  if (!p) return;
  if (!playerModal) playerModal = document.getElementById('player-modal');

  const photoEl = p.photo
    ? `<img src="${p.photo}" alt="${p.name}">`
    : `<span>${initials(p.name)}</span>`;

  const statsRows = Object.entries(p.stats || {}).map(([k, v]) =>
    `<div class="stat-row"><span class="label">${k}</span><span class="value">${v}</span></div>`
  ).join('');
  const statsBlock = statsRows
    ? `<div class="stat-table"><h4 style="font-family:var(--font-data);font-size:.76rem;text-transform:uppercase;letter-spacing:.5px;color:var(--slate);margin-bottom:4px;">Season Stats</h4>${statsRows}</div>`
    : '';

  playerModal.querySelector('.modal-card').innerHTML = `
    <button class="modal-close" onclick="closePlayerModal()" aria-label="Close">×</button>
    <div class="modal-plate">${photoEl}</div>
    <h2><span class="jnum">#${p.number}</span> ${p.name}</h2>
    <span class="role-flag tag tag-dark">${posLabel(p.position)}</span>
    <div class="modal-vitals">
      <p class="meta" style="margin-top:10px">${p.year} &nbsp;·&nbsp; ${p.height} &nbsp;·&nbsp; ${p.weight}</p>
      <p class="meta">📍 ${p.hometown}</p>
      ${p.major ? `<p class="meta">📚 ${p.major}</p>` : ''}
    </div>
    ${p.bio ? `<p class="modal-bio">${p.bio}</p>` : ''}
    ${statsBlock}
  `;
  playerModal.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closePlayerModal() {
  playerModal.classList.remove('open');
  document.body.style.overflow = '';
}

// Dismiss modals on backdrop click or Escape
document.addEventListener('click', e => {
  if (newsModal   && e.target === newsModal)   closeNewsModal();
  if (playerModal && e.target === playerModal) closePlayerModal();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    if (newsModal   && newsModal.classList.contains('open'))   closeNewsModal();
    if (playerModal && playerModal.classList.contains('open')) closePlayerModal();
  }
});

// ── COACHES SECTION ───────────────────────────────────────────────────
function renderCoaches() {
  const grid = document.getElementById('coaches-grid');
  if (!grid) return;
  if (COACHES.length === 0) {
    grid.innerHTML = `<div class="empty-state"><p>Add coaches in js/data.js under COACHES.</p></div>`;
    return;
  }
  grid.innerHTML = COACHES.map(c => {
    const photo = c.photo
      ? `<img src="${c.photo}" alt="${c.name}" loading="lazy">`
      : `<span>${initials(c.name)}</span>`;
    const emailLink = c.email ? `<a class="footer-email" href="mailto:${c.email}">${c.email}</a>` : '';
    return `
    <div class="card" style="display:flex;gap:20px;align-items:flex-start;padding:22px;">
      <div class="modal-plate" style="width:70px;height:70px;flex:none;border-radius:50%;font-size:1.2rem;">${photo}</div>
      <div>
        <h3 style="font-family:var(--font-display);font-size:1.05rem;">${c.name}</h3>
        <span class="tag tag-dark" style="margin:6px 0 8px;display:inline-flex;">${c.title}</span>
        ${c.bio ? `<p style="font-size:.88rem;margin:0 0 6px;">${c.bio}</p>` : ''}
        ${emailLink}
      </div>
    </div>`;
  }).join('');
}

// ── ABOUT page ────────────────────────────────────────────────────────
function renderAbout() {
  const fill = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  fill('about-practice-days',     TEAM_INFO.practiceDays);
  fill('about-practice-location', TEAM_INFO.practiceLocation);
  fill('about-dues',              TEAM_INFO.clubDuesInfo);
  fill('about-contact',           TEAM_INFO.contactEmail);
  const joinLink = document.getElementById('about-join-link');
  if (joinLink && TEAM_INFO.joinFormLink !== '#') joinLink.href = TEAM_INFO.joinFormLink;
}

// ── HOME: latest news preview ────────────────────────────────────────
function renderHomeNews() {
  const grid = document.getElementById('home-news-grid');
  if (!grid) return;
  const latest = NEWS.slice(0, 3).map((p, i) => buildNewsCard(p, i)).join('');
  grid.innerHTML = latest || `<div class="empty-state"><p>No posts yet — add some in js/data.js!</p></div>`;
}

// ── HOME: roster preview ─────────────────────────────────────────────
function renderHomeRoster() {
  const grid = document.getElementById('home-roster-grid');
  if (!grid) return;
  grid.innerHTML = PLAYERS.slice(0, 3).map((p, i) => buildPlayerCard(p, i)).join('');
}

// ── Footer content ────────────────────────────────────────────────────
function renderFooter() {
  const name = document.querySelectorAll('.footer-team-name');
  name.forEach(el => { el.textContent = TEAM_INFO.name; });
  const email = document.getElementById('footer-email');
  if (email) { email.href = 'mailto:' + TEAM_INFO.contactEmail; email.textContent = TEAM_INFO.contactEmail; }
  const tagline = document.getElementById('footer-tagline');
  if (tagline) tagline.textContent = TEAM_INFO.tagline;
}

// ── Init ──────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  renderHero();
  renderFooter();
  renderSocials(document.getElementById('header-socials'));
  renderSocials(document.getElementById('footer-socials'));

  // Page-specific
  renderHomeNews();
  renderHomeRoster();
  renderHomeSchedule();
  renderScheduleFilters();
  renderSchedule('Upcoming');
  renderNewsFilters();
  renderNews('All');
  renderRoster();
  renderCoaches();
  renderAbout();
});
