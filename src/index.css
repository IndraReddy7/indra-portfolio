*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

html { scroll-behavior: smooth; }

:root {
  --bg:     #000000;
  --bg2:    #0a0a0a;
  --border: #1a1a1a;
  --border2:#252525;
  --cyan:   #00d4f5;
  --white:  #ffffff;
  --muted:  #555555;
  --muted2: #888888;
  --text:   #cccccc;
  --mono:   'Space Mono', monospace;
  --sans:   'Space Grotesk', sans-serif;
}

body {
  background: var(--bg);
  color: var(--text);
  font-family: var(--mono);
  font-size: 14px;
  line-height: 1.6;
  overflow-x: hidden;
}

/* ── GLOW ORBS ── */
.glow-container {
  position: fixed; inset: 0; z-index: 0;
  pointer-events: none; overflow: hidden;
}
.glow-orb {
  position: absolute; border-radius: 50%;
  filter: blur(120px); opacity: 0.18; will-change: transform;
}
.glow-orb.orange-1 {
  width:600px; height:600px;
  background: radial-gradient(circle,#ff6b2b 0%,#ff8c42 40%,transparent 70%);
  top:-10%; left:-5%; animation: drift-1 18s ease-in-out infinite;
}
.glow-orb.blue-1 {
  width:700px; height:700px;
  background: radial-gradient(circle,#0066ff 0%,#0088ff 40%,transparent 70%);
  top:10%; right:-10%; animation: drift-2 22s ease-in-out infinite;
}
.glow-orb.orange-2 {
  width:500px; height:500px;
  background: radial-gradient(circle,#ff8c42 0%,#ff6b2b 40%,transparent 70%);
  bottom:30%; right:5%; animation: drift-3 20s ease-in-out infinite;
}
.glow-orb.blue-2 {
  width:550px; height:550px;
  background: radial-gradient(circle,#0055dd 0%,#0077ff 40%,transparent 70%);
  bottom:-5%; left:10%; animation: drift-4 24s ease-in-out infinite;
}
.glow-orb.orange-3 {
  width:400px; height:400px;
  background: radial-gradient(circle,#ff9a56 0%,#e65c00 40%,transparent 70%);
  top:50%; left:40%; animation: drift-5 16s ease-in-out infinite; opacity:0.07;
}

@keyframes drift-1 {
  0%,100% { transform: translate(0,0) scale(1); }
  25%     { transform: translate(80px,60px) scale(1.1); }
  50%     { transform: translate(40px,120px) scale(0.95); }
  75%     { transform: translate(-30px,50px) scale(1.05); }
}
@keyframes drift-2 {
  0%,100% { transform: translate(0,0) scale(1); }
  25%     { transform: translate(-70px,80px) scale(1.08); }
  50%     { transform: translate(-100px,30px) scale(0.92); }
  75%     { transform: translate(-40px,-50px) scale(1.05); }
}
@keyframes drift-3 {
  0%,100% { transform: translate(0,0) scale(1); }
  33%     { transform: translate(-60px,-80px) scale(1.12); }
  66%     { transform: translate(40px,-40px) scale(0.9); }
}
@keyframes drift-4 {
  0%,100% { transform: translate(0,0) scale(1); }
  25%     { transform: translate(90px,-60px) scale(1.06); }
  50%     { transform: translate(50px,-100px) scale(0.95); }
  75%     { transform: translate(-20px,-40px) scale(1.1); }
}
@keyframes drift-5 {
  0%,100% { transform: translate(0,0) scale(1); }
  50%     { transform: translate(-60px,70px) scale(1.15); }
}

/* ── NAV ── */
nav {
  position: fixed; top:0; left:0; right:0; z-index:200;
  display:flex; align-items:center; justify-content:space-between;
  padding:0 56px; height:60px;
  background: var(--bg); border-bottom:1px solid var(--border);
}
.nav-logo {
  font-family: var(--sans); font-size:17px; font-weight:700;
  color: var(--white); letter-spacing:-0.01em;
}
.nav-logo span { color: var(--cyan); }
.nav-center {
  position:absolute; left:50%; transform:translateX(-50%);
  display:flex; gap:44px; list-style:none;
}
.nav-center a {
  font-family:var(--mono); font-size:11px; letter-spacing:0.12em;
  text-transform:uppercase; color:var(--muted2); text-decoration:none;
  transition:color 0.2s;
}
.nav-center a:hover, .nav-center a.active { color: var(--white); }
.nav-hire {
  font-family:var(--mono); font-size:11px; letter-spacing:0.12em;
  text-transform:uppercase; color:var(--white);
  padding:8px 18px; border:1px solid var(--white);
  text-decoration:none; transition:all 0.2s;
}
.nav-hire:hover { background:var(--white); color:var(--bg); }

/* ── HERO ── */
#hero {
  min-height:100vh; display:flex; flex-direction:column;
  justify-content:center; padding:0 56px; padding-top:60px;
  max-width:1200px; margin:0 auto; position:relative; z-index:1;
}
.hero-name {
  font-family:var(--sans); font-weight:800;
  font-size:clamp(64px,9vw,120px); line-height:0.88;
  letter-spacing:-0.04em; margin-bottom:20px; color:var(--white);
}
.hero-name .outline {
  color:transparent; -webkit-text-stroke:2px var(--cyan);
}
.hero-sub {
  font-family:var(--mono); font-size:clamp(12px,1.4vw,14px);
  color:var(--muted2); letter-spacing:0.04em; margin-bottom:32px;
}
.hero-sub .hl { color:var(--cyan); font-weight:700; }
.hero-bio {
  font-family:var(--mono); font-size:13px; color:var(--muted2);
  line-height:1.85; max-width:440px; margin-bottom:44px;
}
.hero-btns { display:flex; gap:14px; margin-bottom:72px; }
.btn-cyan {
  font-family:var(--mono); font-size:11px; letter-spacing:0.14em;
  text-transform:uppercase; padding:14px 28px;
  background:var(--cyan); color:#000; font-weight:700;
  text-decoration:none; border:none; cursor:pointer; transition:background 0.2s;
}
.btn-cyan:hover { background:#00b8d9; }
.btn-ghost {
  font-family:var(--mono); font-size:11px; letter-spacing:0.14em;
  text-transform:uppercase; padding:14px 28px;
  background:transparent; color:var(--white);
  border:1px solid var(--border2); text-decoration:none; transition:border-color 0.2s;
}
.btn-ghost:hover { border-color:var(--muted2); }
.hero-divider { width:100%; height:1px; background:var(--border); margin-bottom:40px; }
.hero-stats { display:flex; gap:56px; }
.hstat-val {
  font-family:var(--sans); font-size:36px; font-weight:800;
  color:var(--white); letter-spacing:-0.03em; display:block;
}
.hstat-val sup { font-size:20px; color:var(--cyan); font-weight:700; }
.hstat-label {
  font-family:var(--mono); font-size:10px; letter-spacing:0.16em;
  text-transform:uppercase; color:var(--muted); margin-top:4px; display:block;
}

/* ── HERO ENTRANCE ── */
.hero-anim {
  opacity:0; transform:translateY(30px);
  transition:opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1);
}
.hero-anim.show { opacity:1; transform:none; }

/* ── SECTION ── */
.section-wrap {
  max-width:1200px; margin:0 auto;
  padding:96px 56px; border-top:1px solid var(--border);
}
.sec-eyebrow {
  font-family:var(--mono); font-size:10px; letter-spacing:0.22em;
  text-transform:uppercase; color:var(--cyan); margin-bottom:12px;
}
.sec-title {
  font-family:var(--sans); font-size:clamp(30px,4vw,48px); font-weight:800;
  color:var(--white); letter-spacing:-0.03em; line-height:1; margin-bottom:56px;
}

/* ── ABOUT ── */
.about-grid {
  display:grid; grid-template-columns:1fr 1fr; gap:60px; align-items:start;
}
.about-text p {
  font-family:var(--mono); font-size:13px; color:var(--muted2);
  line-height:1.9; margin-bottom:20px;
}
.about-table { display:flex; flex-direction:column; gap:1px; background:var(--border); }
.about-row {
  background:var(--bg); padding:16px 20px;
  display:flex; justify-content:space-between; align-items:center;
}
.about-row-label {
  font-family:var(--mono); font-size:10px; letter-spacing:0.14em;
  text-transform:uppercase; color:var(--muted);
}
.about-row-value { font-family:var(--mono); font-size:12px; color:var(--white); }
.about-row-value.cyan { color:var(--cyan); }
.about-row-value a { color:var(--cyan); text-decoration:none; }

/* ── SKILLS ── */
.skills-grid {
  display:grid; grid-template-columns:repeat(4,1fr);
  gap:1px; background:var(--border);
}
.skill-cell {
  background:var(--bg); padding:32px 28px; transition:background 0.2s;
}
.skill-cell:hover { background:var(--bg2); }
.skill-cell-label {
  font-family:var(--mono); font-size:10px; letter-spacing:0.18em;
  text-transform:uppercase; color:var(--cyan); margin-bottom:20px;
  display:flex; align-items:center; gap:8px;
}
.skill-cell-label::before {
  content:''; width:20px; height:1px;
  background:var(--cyan); flex-shrink:0;
}
.skill-list { list-style:none; display:flex; flex-direction:column; gap:10px; }
.skill-list li {
  font-family:var(--mono); font-size:12px; color:var(--muted2);
  display:flex; align-items:center; gap:10px; transition:color 0.2s;
}
.skill-cell:hover .skill-list li { color:var(--text); }
.skill-list li::before {
  content:'//'; color:var(--border2); font-size:10px; flex-shrink:0;
}

/* ── EXPERIENCE ── */
.exp-list { display:flex; flex-direction:column; gap:1px; background:var(--border); }
.exp-row {
  background:var(--bg); padding:36px;
  display:grid; grid-template-columns:220px 1fr; gap:40px; transition:background 0.2s;
}
.exp-row:hover { background:var(--bg2); }
.exp-period {
  font-family:var(--mono); font-size:10px; letter-spacing:0.12em;
  color:var(--cyan); text-transform:uppercase; margin-bottom:8px;
}
.exp-company {
  font-family:var(--sans); font-size:13px; font-weight:600;
  color:var(--white); margin-bottom:6px;
}
.exp-location { font-family:var(--mono); font-size:11px; color:var(--muted); }
.exp-role {
  font-family:var(--sans); font-size:20px; font-weight:700;
  color:var(--white); margin-bottom:14px;
}
.exp-desc {
  font-family:var(--mono); font-size:12px; color:var(--muted2);
  line-height:1.85; max-width:640px;
}

/* ── PROJECTS ── */
.projects-grid {
  display:grid; grid-template-columns:repeat(2,1fr);
  gap:1px; background:var(--border);
}
.proj-card {
  background:var(--bg); padding:40px 36px;
  position:relative; overflow:hidden; transition:background 0.25s;
}
.proj-card:hover { background:var(--bg2); }
.proj-index {
  font-family:var(--sans); font-size:80px; font-weight:800;
  color:var(--border2); position:absolute; right:28px; top:20px;
  line-height:1; pointer-events:none; letter-spacing:-0.04em; transition:color 0.25s;
}
.proj-card:hover .proj-index { color:#1e1e1e; }
.proj-tags { display:flex; flex-wrap:wrap; gap:6px; margin-bottom:18px; }
.ptag {
  font-family:var(--mono); font-size:9px; letter-spacing:0.14em;
  text-transform:uppercase; padding:3px 9px; border:1px solid;
}
.ptag-cyan   { color:var(--cyan);  border-color:rgba(0,212,245,0.3);   background:rgba(0,212,245,0.05); }
.ptag-amber  { color:#f59e0b;      border-color:rgba(245,158,11,0.3);  background:rgba(245,158,11,0.05); }
.ptag-green  { color:#34d399;      border-color:rgba(52,211,153,0.3);  background:rgba(52,211,153,0.05); }
.ptag-violet { color:#a78bfa;      border-color:rgba(167,139,250,0.3); background:rgba(167,139,250,0.05); }
.ptag-blue   { color:#60a5fa;      border-color:rgba(96,165,250,0.3);  background:rgba(96,165,250,0.05); }
.proj-name {
  font-family:var(--sans); font-size:20px; font-weight:700;
  color:var(--white); line-height:1.25; margin-bottom:12px;
}
.proj-desc {
  font-family:var(--mono); font-size:12px; color:var(--muted2);
  line-height:1.8; margin-bottom:24px;
}
.proj-stack {
  padding-top:20px; border-top:1px solid var(--border);
  display:flex; flex-wrap:wrap; gap:16px;
}
.proj-stack span {
  font-family:var(--mono); font-size:10px; letter-spacing:0.1em; color:var(--muted);
}
.proj-stack span::before { content:'— '; color:var(--border2); }

/* WIP card */
.proj-card.proj-wip { cursor:default; }
.proj-card.proj-wip .proj-content {
  filter:blur(6px); opacity:0.35; pointer-events:none; user-select:none;
  transition:filter 0.3s, opacity 0.3s;
}
.proj-card.proj-wip:hover { background:var(--bg); }
.proj-wip-overlay {
  position:absolute; inset:0; display:flex; flex-direction:column;
  align-items:center; justify-content:center; z-index:10;
  background:rgba(11,11,11,0.4);
}
.proj-wip-badge {
  display:flex; align-items:center; gap:10px; font-family:var(--mono);
  font-size:11px; letter-spacing:0.16em; text-transform:uppercase;
  color:#f59e0b; padding:10px 22px;
  border:1px solid rgba(245,158,11,0.4); background:rgba(245,158,11,0.08);
  backdrop-filter:blur(4px);
}
.proj-wip-badge::before { content:'⚠'; font-size:14px; }
.proj-wip-sub {
  font-family:var(--mono); font-size:10px; letter-spacing:0.1em;
  color:var(--muted); margin-top:10px;
}
.proj-wip-stripe {
  position:absolute; bottom:0; left:0; right:0; height:3px;
  background:repeating-linear-gradient(90deg,#f59e0b 0px,#f59e0b 8px,transparent 8px,transparent 16px);
  opacity:0.5;
}

/* ── CERTIFICATIONS ── */
.certs-grid {
  display:grid; grid-template-columns:repeat(3,1fr);
  gap:1px; background:var(--border);
}
.cert-cell {
  background:var(--bg); padding:32px 28px; transition:background 0.2s;
  position:relative;
}
.cert-cell:hover { background:var(--bg2); }
.cert-cell::after {
  content:''; position:absolute; bottom:0; left:28px; right:28px;
  height:1px; background:transparent; transition:background 0.2s;
}
.cert-cell:hover::after { background:var(--cyan); }
.cert-provider {
  font-family:var(--mono); font-size:9px; letter-spacing:0.2em;
  text-transform:uppercase; color:var(--muted); margin-bottom:10px;
}
.cert-name {
  font-family:var(--sans); font-size:15px; font-weight:700;
  color:var(--white); line-height:1.3; margin-bottom:12px;
}
.cert-date { font-family:var(--mono); font-size:10px; color:var(--cyan); letter-spacing:0.06em; }
.cert-status {
  display:inline-block; margin-top:10px; font-family:var(--mono);
  font-size:9px; letter-spacing:0.14em; text-transform:uppercase;
  padding:3px 9px; border:1px solid rgba(52,211,153,0.3);
  color:#34d399; background:rgba(52,211,153,0.05);
}
.cert-cell.wip {
  background:var(--bg2); border-left:2px solid var(--cyan); overflow:hidden;
}
.cert-cell.wip::before {
  content:''; position:absolute; bottom:0; left:0; height:3px;
  background:linear-gradient(90deg,var(--cyan),#0077ff,transparent);
  animation:wip-progress 2.5s ease-in-out infinite;
}
@keyframes wip-progress {
  0%   { width:0%;   opacity:0.4; }
  50%  { width:65%;  opacity:1; }
  100% { width:0%;   opacity:0.4; }
}
.cert-cell.wip:hover { background:#161616; box-shadow:0 0 20px rgba(0,212,245,0.08); }
.cert-cell.wip::after { display:none; }
.wip-label {
  font-family:var(--mono); font-size:8px; letter-spacing:0.2em;
  text-transform:uppercase; color:var(--cyan); opacity:0.5;
  position:absolute; top:12px; right:16px;
}
.wip-indicator {
  display:inline-flex; align-items:center; gap:6px; margin-top:10px;
  font-family:var(--mono); font-size:9px; letter-spacing:0.14em;
  text-transform:uppercase; padding:4px 10px;
  border:1px solid rgba(0,212,245,0.25); color:var(--cyan);
  background:rgba(0,212,245,0.06);
}
.wip-indicator::before {
  content:''; width:6px; height:6px; border-radius:50%;
  background:var(--cyan); animation:wip-pulse 1.8s ease-in-out infinite; flex-shrink:0;
}
@keyframes wip-pulse {
  0%,100% { opacity:1; box-shadow:0 0 4px var(--cyan); }
  50%     { opacity:0.3; box-shadow:none; }
}

/* ── CONTACT ── */
.contact-wrap { text-align:center; padding-bottom:120px; }
.contact-big {
  font-family:var(--sans); font-size:clamp(40px,6vw,80px); font-weight:800;
  color:var(--white); letter-spacing:-0.04em; line-height:1; margin-bottom:24px;
}
.contact-big .outline { color:transparent; -webkit-text-stroke:2px var(--cyan); }
.contact-sub {
  font-family:var(--mono); font-size:13px; color:var(--muted2);
  line-height:1.8; max-width:480px; margin:0 auto 48px;
}
.contact-links {
  display:flex; justify-content:center; gap:12px;
  flex-wrap:wrap; margin-bottom:64px;
}
.clink {
  display:inline-flex; align-items:center; gap:10px;
  font-family:var(--mono); font-size:11px; letter-spacing:0.1em;
  color:var(--muted2); text-decoration:none; padding:12px 22px;
  border:1px solid var(--border2); transition:all 0.2s;
}
.clink:hover { border-color:var(--cyan); color:var(--cyan); }

/* ── FOOTER ── */
footer {
  border-top:1px solid var(--border); padding:24px 56px;
  display:flex; justify-content:space-between; align-items:center;
  max-width:1200px; margin:0 auto;
}
.footer-left { font-family:var(--mono); font-size:11px; color:var(--muted); letter-spacing:0.06em; }
.footer-right { font-family:var(--mono); font-size:11px; color:var(--muted); letter-spacing:0.06em; }
.footer-right span { color:var(--cyan); }

/* ── SCROLL REVEAL — FALL IN ── */
.reveal {
  opacity:0;
  transition:opacity 0.5s ease;
}
.reveal.in { opacity:1; }

/* Cards fall from above into position */
.reveal .skill-cell,
.reveal .proj-card,
.reveal .cert-cell,
.reveal .exp-row {
  opacity:0;
  transform: translateY(-60px) scale(0.96);
  transition:
    opacity  0.55s cubic-bezier(0.22,1,0.36,1),
    transform 0.55s cubic-bezier(0.22,1,0.36,1);
}
.reveal.in .skill-cell,
.reveal.in .proj-card,
.reveal.in .cert-cell,
.reveal.in .exp-row {
  opacity:1;
  transform: translateY(0) scale(1);
}

/* Section headings also fall in */
.reveal .sec-title,
.reveal .sec-eyebrow {
  opacity:0;
  transform: translateY(-30px);
  transition:
    opacity  0.5s cubic-bezier(0.22,1,0.36,1),
    transform 0.5s cubic-bezier(0.22,1,0.36,1);
}
.reveal.in .sec-title,
.reveal.in .sec-eyebrow {
  opacity:1;
  transform: translateY(0);
}


/* ── HAMBURGER MENU ── */
.nav-burger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 36px; height: 36px;
  background: transparent;
  border: none; cursor: pointer; padding: 6px;
}
.burger-line {
  display: block;
  width: 20px; height: 1.5px;
  background: var(--white);
  transition: transform 0.25s ease, opacity 0.25s ease;
  transform-origin: center;
}
.burger-line.open:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
.burger-line.open:nth-child(2) { opacity: 0; transform: scaleX(0); }
.burger-line.open:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }

/* Mobile drawer */
.mobile-menu {
  display: none;
  position: fixed;
  top: 60px; left: 0; right: 0;
  background: rgba(0,0,0,0.97);
  border-bottom: 1px solid var(--border);
  z-index: 190;
  transform: translateY(-8px);
  opacity: 0;
  transition: transform 0.25s ease, opacity 0.25s ease;
  pointer-events: none;
}
.mobile-menu--open {
  transform: translateY(0);
  opacity: 1;
  pointer-events: all;
}
.mobile-menu ul {
  list-style: none;
  padding: 16px 0;
}
.mobile-menu ul li a {
  display: block;
  padding: 14px 24px;
  font-family: var(--mono);
  font-size: 12px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--muted2);
  text-decoration: none;
  border-bottom: 1px solid var(--border);
  transition: color 0.2s, background 0.2s;
}
.mobile-menu ul li a:hover,
.mobile-menu ul li a.active {
  color: var(--cyan);
  background: rgba(0,212,245,0.04);
}
.mobile-backdrop {
  position: fixed; inset: 0; z-index: 180;
  background: transparent;
}

@media (max-width: 900px) {
  .nav-burger { display: flex; }
  .mobile-menu { display: block; }
}
@media (max-width: 480px) {
  .nav-burger { display: flex; }
  .mobile-menu { top: 54px; }
}

/* ── RESPONSIVE ── */

/* ── TABLET (≤900px) ── */
@media (max-width: 900px) {
  /* Nav */
  nav { padding:0 24px; }
  .nav-center { display:none; }

  /* Hero */
  #hero { padding:0 24px; padding-top:80px; min-height:auto; padding-bottom:60px; }
  .hero-name { font-size:clamp(48px,11vw,80px); line-height:0.9; margin-bottom:16px; }
  .hero-bio { max-width:100%; font-size:12px; margin-bottom:32px; }
  .hero-btns { flex-wrap:wrap; gap:12px; margin-bottom:48px; }
  .hero-stats { gap:24px; flex-wrap:wrap; }
  .hstat-val { font-size:28px; }

  /* Sections */
  .section-wrap { padding:64px 24px; }
  .sec-title { margin-bottom:36px; }

  /* Grids */
  .about-grid { grid-template-columns:1fr; gap:32px; }
  .skills-grid { grid-template-columns:1fr 1fr; }
  .projects-grid { grid-template-columns:1fr; }
  .certs-grid { grid-template-columns:1fr 1fr; }
  .exp-row { grid-template-columns:1fr; gap:8px; padding:24px; }

  /* About table rows — prevent overflow */
  .about-row { flex-direction:column; align-items:flex-start; gap:4px; }
  .about-row-value { text-align:left; }

  /* Project cards */
  .proj-card { padding:28px 24px; }
  .proj-index { font-size:56px; right:16px; top:12px; }

  /* Contact */
  .contact-links { flex-direction:column; align-items:center; }
  .clink { width:100%; max-width:360px; justify-content:center; }

  /* Footer */
  footer { padding:20px 24px; flex-direction:column; gap:8px; text-align:center; }

  /* Reduce glow orb size for performance */
  .glow-orb.orange-1 { width:300px; height:300px; }
  .glow-orb.blue-1   { width:350px; height:350px; }
  .glow-orb.orange-2 { width:250px; height:250px; }
  .glow-orb.blue-2   { width:280px; height:280px; }
  .glow-orb.orange-3 { display:none; }
}

/* ── MOBILE (≤480px) ── */
@media (max-width: 480px) {
  /* Nav */
  nav { padding:0 16px; height:54px; }
  .nav-hire { padding:6px 12px; font-size:10px; }

  /* Hero */
  #hero { padding:0 16px; padding-top:70px; padding-bottom:48px; }
  .hero-name { font-size:clamp(40px,13vw,64px); line-height:0.88; }
  .hero-sub { font-size:11px; letter-spacing:0.02em; }
  .hero-bio { font-size:11px; line-height:1.8; }
  .btn-cyan, .btn-ghost {
    padding:12px 20px; font-size:10px; width:100%; text-align:center;
    display:flex; align-items:center; justify-content:center;
  }
  .hero-btns { flex-direction:column; gap:10px; margin-bottom:40px; }
  .hero-stats { gap:16px; }
  .hstat-val { font-size:24px; }
  .hstat-label { font-size:9px; }
  .hero-divider { margin-bottom:28px; }

  /* Sections */
  .section-wrap { padding:48px 16px; }
  .sec-title { font-size:clamp(24px,7vw,36px); margin-bottom:28px; }

  /* Skills — single column on small phones */
  .skills-grid { grid-template-columns:1fr; }
  .skill-cell { padding:24px 20px; }

  /* Certs — single column */
  .certs-grid { grid-template-columns:1fr; }
  .cert-cell { padding:24px 20px; }

  /* Projects */
  .proj-card { padding:24px 20px; }
  .proj-index { font-size:44px; right:12px; top:10px; }
  .proj-name { font-size:17px; }
  .proj-desc { font-size:11px; }

  /* Experience */
  .exp-row { padding:20px 16px; }
  .exp-role { font-size:17px; }
  .exp-desc { font-size:11px; }

  /* About */
  .about-row { padding:12px 16px; }
  .about-text p { font-size:12px; }

  /* Contact */
  .contact-wrap { padding-bottom:60px; }
  .clink { font-size:10px; padding:10px 16px; }

  /* Footer */
  footer { padding:16px; }
  .footer-left, .footer-right { font-size:10px; }
}
