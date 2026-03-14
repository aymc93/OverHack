/* ═══════════════════════════════════════════════
   GAMEHUB — script.js
   ═══════════════════════════════════════════════ */

/* ══════════════════════════════════════════════════════════
   ██  JEU DU SOIR — MODIFIER ICI CHAQUE SOIR  ██
   ══════════════════════════════════════════════════════════
   Remplace title et download par le jeu du soir.
   Pour désactiver le bouton ce soir-là : download: ""
*/
const JEU_DU_SOIR = {
  title:    "Mario Kart Wii",   // ← Nom du jeu ce soir
  download: "#",                // ← Lien de téléchargement
};
/* ════════════════════════════════════════════════════════ */


/* ══════════════════════════════════════════════════════════
   ██  JEUX — MODIFIER ICI POUR AJOUTER / SUPPRIMER  ██
   ══════════════════════════════════════════════════════════

   Champs :
     title    : Nom affiché sur la tuile au hover
     img      : Chemin ou URL de l'image  (ex: "images/mkwii.jpg")
     fallback : Emoji de secours si l'image ne charge pas
     color    : Couleur de fond si pas d'image  (ex: "#1a0035")
     download : Lien de téléchargement  (ex: "https://…/jeu.zip")

   Pour ajouter une PAGE supplémentaire : ajoute juste
   des jeux, ils seront répartis automatiquement (12 par page).
*/
const GAMES = [

  /* ── PAGE 1 ─────────────────────────────────────────── */
  {
    title:    "Pummel Party",
    img:      "images/pummelparty.png",
    fallback: "",
    color:    "#1a0035",
    download: "https://mega.nz/folder/YydAmLjC#BB46xByI6KnLzaXqFXYfiQ",
  },
  {
    title:    "Lethal Company",
    img:      "images/lethalcompany.png",
    fallback: "",
    color:    "#1e0808",
    download: "https://mega.nz/folder/47l3XCBQ#hxjPxWZohD3J_fIWP6Jrkg",
  },
  {
    title:    "YapYap",
    img:      "images/yapyap.png",
    fallback: "",
    color:    "#c02000",
    download: "https://mega.nz/folder/BJh3TQoY#eDHEEx1LNJ4-nmVnJw7sWw",
  },
  {
    title:    "Palword",
    img:      "images/palword.png",
    fallback: "",
    color:    "#003c6e",
    download: "https://gofile.io/d/wa9RdD",
  },
  {
    title:    "Super Battle Golf",
    img:      "images/superbattlegolf.jpg",
    fallback: "",
    color:    "#00426e",
    download: "https://mega.nz/folder/RQxBGTBC#rY7HT9U8JAvgrvSiS5wOCQ",
  },
  {
    title:    "Hytale",
    img:      "images/hytale.png",
    fallback: "",
    color:    "#6e0058",
    download: "https://mega.nz/folder/1SdGSLRK#s77hZlI8ILoE6E6--kuUaA",
  },
  {
    title:    "CloverPit",
    img:      "images/cloverpit.png",
    fallback: "",
    color:    "#05053a",
    download: "https://mega.nz/folder/ZcBBlSbS#J-ZMhAuaaa1YMSQ0cbqC4A",
  },
  /*
  {
    title:    "Super Mario Galaxy 2",
    img:      "images/smg2.jpg",
    fallback: "🪐",
    color:    "#08082a",
    download: "#",
  },
  {
    title:    "Zelda: Twilight Princess",
    img:      "images/tp.jpg",
    fallback: "🗡️",
    color:    "#0a1a0a",
    download: "#",
  },
  {
    title:    "Zelda: Skyward Sword",
    img:      "images/ss.jpg",
    fallback: "⚡",
    color:    "#0a1505",
    download: "#",
  },
  {
    title:    "Xenoblade Chronicles",
    img:      "images/xenoblade.jpg",
    fallback: "⚔️",
    color:    "#0a0018",
    download: "#",
  },
  {
    title:    "Metroid Prime 3",
    img:      "images/mp3.jpg",
    fallback: "🪖",
    color:    "#0d0d05",
    download: "#",
  },
  */

  /* ── PAGE 2 ─────────────────────────────────────────── */
  /*
  {
    title:    "Mario Kart CTGP Revolution",
    img:      "images/ctgp.jpg",
    fallback: "🌈",
    color:    "#1a0030",
    download: "#",
  },
  {
    title:    "Donkey Kong Country Returns",
    img:      "images/dkcr.jpg",
    fallback: "🦍",
    color:    "#1a0900",
    download: "#",
  },
  {
    title:    "Kirby's Epic Yarn",
    img:      "images/epicyarn.jpg",
    fallback: "🧶",
    color:    "#3d0038",
    download: "#",
  },
  {
    title:    "Kirby: Return to Dream Land",
    img:      "images/kirbyrtdl.jpg",
    fallback: "⭐",
    color:    "#2d0028",
    download: "#",
  },
  {
    title:    "Mario Party 8",
    img:      "images/mp8.jpg",
    fallback: "🎲",
    color:    "#1a1020",
    download: "#",
  },
  {
    title:    "Mario Party 9",
    img:      "images/mp9.jpg",
    fallback: "🎯",
    color:    "#1a0a20",
    download: "#",
  },
  {
    title:    "Sonic Colors",
    img:      "images/soniccolors.jpg",
    fallback: "💨",
    color:    "#001a30",
    download: "#",
  },
  {
    title:    "Sonic Unleashed",
    img:      "images/sonicunleashed.jpg",
    fallback: "🌙",
    color:    "#000a1a",
    download: "#",
  },
  {
    title:    "Rayman Origins",
    img:      "images/rayman.jpg",
    fallback: "🌿",
    color:    "#001508",
    download: "#",
  },
  {
    title:    "Pikmin 2",
    img:      "images/pikmin2.jpg",
    fallback: "🌼",
    color:    "#0a1800",
    download: "#",
  },
  {
    title:    "The Last Story",
    img:      "images/laststory.jpg",
    fallback: "📖",
    color:    "#00101a",
    download: "#",
  },
  {
    title:    "Pandora's Tower",
    img:      "images/pandora.jpg",
    fallback: "🗼",
    color:    "#1a0a00",
    download: "#",
  },
  */

];
/* ══════════════════════════════════════════════════════════
   FIN CONFIGURATION
══════════════════════════════════════════════════════════ */


/* ─── INIT ──────────────────────────────────────────────── */
const PER_PAGE = 12;
let currentPage = 0;

/* Date */
const DAYS = ['Dim','Lun','Mar','Mer','Jeu','Ven','Sam'];
const now  = new Date();
document.getElementById('barDate').textContent =
  `${DAYS[now.getDay()]} ${String(now.getDate()).padStart(2,'0')}/${String(now.getMonth()+1).padStart(2,'0')}`;

/* Jeu du soir */
(function initJDS() {
  const btn = document.getElementById('jdsSoir');
  const lbl = document.getElementById('jdsLabel');
  if (JEU_DU_SOIR.download && JEU_DU_SOIR.download !== '') {
    btn.href = JEU_DU_SOIR.download;
    lbl.textContent = JEU_DU_SOIR.title;
    if (JEU_DU_SOIR.download !== '#') btn.setAttribute('download', '');
  } else {
    btn.style.background    = 'linear-gradient(135deg,#333,#222)';
    btn.style.color         = '#888';
    btn.style.boxShadow     = 'none';
    btn.style.cursor        = 'default';
    btn.style.pointerEvents = 'none';
    btn.querySelector('.jds-pulse').style.display = 'none';
    lbl.textContent = 'Pas ce soir';
  }
})();

/* ─── BUILD TILES ──────────────────────────────────────── */
function makeCover(game) {
  if (game.img) {
    return `
      <div class="tile-cover">
        <img
          src="${game.img}"
          alt="${game.title}"
          loading="lazy"
          onerror="this.parentElement.innerHTML='<div class=\\'tile-fallback\\'
            style=\\'background:${game.color||'#111'};\\'>${game.fallback||'🎮'}</div>'"
        />
      </div>`;
  }
  return `
    <div class="tile-cover">
      <div class="tile-fallback" style="background:${game.color||'#111'};">
        ${game.fallback || '🎮'}
      </div>
    </div>`;
}

const track      = document.getElementById('pagesTrack');
const dotsEl     = document.getElementById('pageDots');
const totalPages = Math.ceil(GAMES.length / PER_PAGE);

for (let p = 0; p < totalPages; p++) {
  const page  = document.createElement('div');
  page.className = 'page';
  const slice = GAMES.slice(p * PER_PAGE, (p + 1) * PER_PAGE);

  slice.forEach((g, i) => {
    const a = document.createElement('a');
    a.className = 'tile';
    a.href      = g.download || '#';
    a.style.animationDelay = (i * 40) + 'ms';
    if (g.download && g.download !== '#') a.setAttribute('download', '');
    a.innerHTML = `${makeCover(g)}<div class="tile-name">${g.title}</div>`;
    page.appendChild(a);
  });

  // Fill empty slots on last page
  const remainder = slice.length % PER_PAGE;
  if (p === totalPages - 1 && remainder !== 0) {
    for (let e = 0; e < PER_PAGE - remainder; e++) {
      const empty = document.createElement('div');
      empty.className = 'tile tile-empty';
      page.appendChild(empty);
    }
  }

  track.appendChild(page);

  // Dot
  const dot = document.createElement('div');
  dot.className = 'dot' + (p === 0 ? ' active' : '');
  dot.addEventListener('click', () => goTo(p));
  dotsEl.appendChild(dot);
}

/* ─── NAVIGATION ───────────────────────────────────────── */
const navL = document.getElementById('navLeft');
const navR = document.getElementById('navRight');
navR.disabled = totalPages <= 1;

function goTo(p) {
  currentPage = p;
  track.style.transform = `translateX(-${p * 100}%)`;
  document.querySelectorAll('.dot').forEach((d, i) =>
    d.classList.toggle('active', i === p)
  );
  navL.disabled = p === 0;
  navR.disabled = p === totalPages - 1;

  // Re-trigger tile animations
  const tiles = track.querySelectorAll('.page')[p]
    .querySelectorAll('.tile:not(.tile-empty)');
  tiles.forEach((t, i) => {
    t.style.animation = 'none';
    void t.offsetWidth;
    t.style.animation = '';
    t.style.animationDelay = (i * 40) + 'ms';
  });
}

navL.addEventListener('click', () => { if (currentPage > 0) goTo(currentPage - 1); });
navR.addEventListener('click', () => { if (currentPage < totalPages - 1) goTo(currentPage + 1); });

document.addEventListener('keydown', e => {
  if (e.key === 'ArrowLeft'  && currentPage > 0)            goTo(currentPage - 1);
  if (e.key === 'ArrowRight' && currentPage < totalPages-1) goTo(currentPage + 1);
  if (e.key === 'Escape') closeSearch();
});

document.getElementById('wiiBtn').addEventListener('click', () => goTo(0));

/* ─── BUBBLES ──────────────────────────────────────────── */
(function spawnBubbles() {
  const wrap = document.getElementById('bubbles');
  const colors = [
    'rgba(125,57,235,.35)',
    'rgba(198,255,51,.2)',
    'rgba(125,57,235,.15)',
    'rgba(255,255,255,.08)',
  ];
  const sizes     = [10, 16, 24, 32, 42, 58];
  const durations = [10, 14, 18, 22, 26];
  const delays    = [0, 2, 4, 6, 8, 10, 12, 14, 16];

  for (let i = 0; i < 26; i++) {
    const b = document.createElement('div');
    b.className = 'bubble';
    const s = sizes[i % sizes.length];
    const c = colors[i % colors.length];
    b.style.cssText = `
      width:${s}px; height:${s}px;
      left:${Math.random() * 100}%;
      bottom:-${s}px;
      background:${c};
      animation-duration:${durations[i % durations.length]}s;
      animation-delay:${delays[i % delays.length]}s;
    `;
    wrap.appendChild(b);
  }
})();

/* ─── SEARCH ───────────────────────────────────────────── */
const overlay   = document.getElementById('searchOverlay');
const searchInp = document.getElementById('searchInput');
const searchRes = document.getElementById('searchResults');

function openSearch() {
  overlay.classList.add('open');
  setTimeout(() => searchInp.focus(), 100);
}
function closeSearch() {
  overlay.classList.remove('open');
  searchInp.value = '';
  renderResults('');
}

document.getElementById('searchBtn').addEventListener('click', openSearch);
document.getElementById('closeSearch').addEventListener('click', closeSearch);
overlay.addEventListener('click', e => { if (e.target === overlay) closeSearch(); });
searchInp.addEventListener('input', () =>
  renderResults(searchInp.value.trim().toLowerCase())
);

function renderResults(q) {
  searchRes.innerHTML = '';
  if (!q) return;
  const hits = GAMES.filter(g => g.title.toLowerCase().includes(q));
  if (!hits.length) {
    searchRes.innerHTML = '<div class="search-empty">Aucun résultat 👾</div>';
    return;
  }
  hits.forEach((g, i) => {
    const a = document.createElement('a');
    a.className = 's-tile';
    a.href = g.download || '#';
    a.style.animationDelay = (i * 30) + 'ms';
    if (g.download && g.download !== '#') a.setAttribute('download', '');
    a.innerHTML = `${makeCover(g)}<div class="tile-name">${g.title}</div>`;
    searchRes.appendChild(a);
  });
}

/* ─── THEME ────────────────────────────────────────────── */
const html    = document.documentElement;
const iconSun  = document.getElementById('iconSun');
const iconMoon = document.getElementById('iconMoon');

function applyTheme(t) {
  html.setAttribute('data-theme', t);
  localStorage.setItem('wii-theme', t);
  iconSun.style.display  = t === 'dark'  ? 'block' : 'none';
  iconMoon.style.display = t === 'light' ? 'block' : 'none';
}

document.getElementById('themeBtn').addEventListener('click', () => {
  applyTheme(html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
});

applyTheme(localStorage.getItem('wii-theme') || 'dark');
