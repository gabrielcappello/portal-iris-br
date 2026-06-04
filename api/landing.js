export const config = { runtime: 'edge' };

const HTML = {
  pt: `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Iris — Atendimento Automático Inteligente</title>
<link href="https://fonts.googleapis.com/css2?family=Cabinet+Grotesk:wght@300;400;500;700;800;900&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500&display=swap" rel="stylesheet">
<style>
:root {
  --bg:       #060A0F;
  --s1:       #0E1520;
  --s2:       #141E2E;
  --s3:       #1A2840;
  --border:   #1A2840;
  --border2:  #243550;
  --blue:     #0EA5E9;
  --blue2:    #38BDF8;
  --green:    #10B981;
  --green2:   #34D399;
  --text:     #F0F4F8;
  --text2:    #94A3B8;
  --text3:    #3D5068;
  --r:        12px;
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }

body {
  font-family: 'DM Sans', sans-serif;
  background: var(--bg);
  color: var(--text);
  overflow-x: hidden;
  line-height: 1.6;
}

h1,h2,h3,h4,.logo,.step-num,.result-num,.price-value,.feature-num {
  font-family: 'Cabinet Grotesk', sans-serif;
}

/* ── MESH BACKGROUND ── */
.mesh {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  background:
    radial-gradient(ellipse 70% 50% at 15% 0%,   rgba(14,165,233,.10) 0%, transparent 60%),
    radial-gradient(ellipse 50% 40% at 85% 20%,  rgba(16,185,129,.06) 0%, transparent 55%),
    radial-gradient(ellipse 40% 30% at 50% 100%, rgba(14,165,233,.05) 0%, transparent 60%);
}

/* subtle grid */
.mesh::after {
  content:'';
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(14,165,233,.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(14,165,233,.03) 1px, transparent 1px);
  background-size: 72px 72px;
  mask-image: radial-gradient(ellipse 80% 70% at 50% 30%, black, transparent 80%);
}

/* ── NAV ── */
nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  padding: 0 48px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(6,10,15,.75);
  backdrop-filter: blur(24px);
  border-bottom: 1px solid rgba(26,40,64,.6);
}

.logo {
  display: flex;
  flex-direction: column;
  line-height: 1;
}

.logo-main {
  font-size: 20px;
  font-weight: 900;
  letter-spacing: -0.5px;
  color: #fff;
}

.logo-sub {
  font-size: 9px;
  font-weight: 400;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: var(--text3);
  font-family: 'DM Sans', sans-serif;
  margin-top: 1px;
}

.nav-links {
  display: flex;
  gap: 32px;
  list-style: none;
}

.nav-links a {
  color: var(--text2);
  text-decoration: none;
  font-size: 14px;
  font-weight: 400;
  transition: color .2s;
}

.nav-links a:hover { color: var(--text); }

.nav-cta {
  background: var(--blue);
  color: #fff;
  border: none;
  padding: 9px 22px;
  border-radius: 8px;
  font-family: 'DM Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all .2s;
  text-decoration: none;
}

.nav-cta:hover {
  background: var(--blue2);
  transform: translateY(-1px);
  box-shadow: 0 8px 24px rgba(14,165,233,.25);
}

/* ── HERO ── */
.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 120px 24px 80px;
  position: relative;
}

.hero > * { position: relative; z-index: 1; }

.pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(14,165,233,.08);
  border: 1px solid rgba(14,165,233,.2);
  border-radius: 100px;
  padding: 5px 16px;
  font-size: 12px;
  font-weight: 500;
  color: var(--blue2);
  letter-spacing: .6px;
  text-transform: uppercase;
  margin-bottom: 32px;
  animation: up .7s ease both;
}

.pill-dot {
  width: 5px; height: 5px;
  border-radius: 50%;
  background: var(--green);
  animation: blink 2.4s ease infinite;
}

@keyframes blink {
  0%,100% { opacity:1; }
  50%      { opacity:.3; }
}

.hero h1 {
  font-size: clamp(44px, 7.5vw, 96px);
  font-weight: 900;
  line-height: .97;
  letter-spacing: -3px;
  color: #fff;
  max-width: 860px;
  margin-bottom: 28px;
  animation: up .7s .08s ease both;
}

.hero h1 .accent {
  background: linear-gradient(110deg, var(--blue) 0%, var(--blue2) 40%, var(--green2) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero p {
  font-size: clamp(16px, 2vw, 19px);
  color: var(--text2);
  max-width: 520px;
  font-weight: 300;
  line-height: 1.75;
  margin-bottom: 44px;
  animation: up .7s .16s ease both;
}

.hero-btns {
  display: flex;
  gap: 14px;
  justify-content: center;
  flex-wrap: wrap;
  animation: up .7s .24s ease both;
}

.btn-p {
  background: var(--blue);
  color: #fff;
  border: none;
  padding: 15px 34px;
  border-radius: 10px;
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: all .25s;
  text-decoration: none;
  display: inline-block;
}

.btn-p:hover {
  background: var(--blue2);
  transform: translateY(-2px);
  box-shadow: 0 16px 36px rgba(14,165,233,.28);
}

.btn-s {
  background: transparent;
  color: var(--text2);
  border: 1px solid var(--border2);
  padding: 15px 34px;
  border-radius: 10px;
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 400;
  cursor: pointer;
  transition: all .25s;
  text-decoration: none;
  display: inline-block;
}

.btn-s:hover {
  border-color: var(--blue);
  color: var(--text);
  transform: translateY(-2px);
}

/* ── CHAT MOCKUP ── */
.mockup-wrap {
  margin-top: 64px;
  width: 100%;
  max-width: 440px;
  animation: up .7s .32s ease both;
  position: relative;
  z-index: 1;
}

.mockup {
  background: var(--s1);
  border: 1px solid var(--border);
  border-radius: 20px;
  overflow: hidden;
  box-shadow:
    0 0 0 1px rgba(14,165,233,.06),
    0 32px 80px rgba(0,0,0,.7),
    0 0 60px rgba(14,165,233,.04);
}

.mockup-bar {
  background: var(--s2);
  padding: 14px 18px;
  display: flex;
  align-items: center;
  gap: 11px;
  border-bottom: 1px solid var(--border);
}

.m-avatar {
  width: 34px; height: 34px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--blue), var(--green));
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 13px;
  color: #fff;
  font-family: 'Cabinet Grotesk', sans-serif;
  flex-shrink: 0;
}

.m-info h4 {
  font-size: 13px;
  font-weight: 600;
  color: var(--text);
  font-family: 'Cabinet Grotesk', sans-serif;
}

.m-info p {
  font-size: 11px;
  color: var(--green);
  margin: 0;
}

.mockup-body {
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.msg {
  max-width: 82%;
  padding: 9px 13px;
  border-radius: 12px;
  font-size: 13px;
  line-height: 1.5;
  color: var(--text);
}

.msg-in  { background: var(--s2); border-bottom-left-radius: 3px; align-self: flex-start; }
.msg-out { background: var(--blue); color: #fff; border-bottom-right-radius: 3px; align-self: flex-end; }

.msg-time { font-size: 10px; color: var(--text3); }
.msg-time.r { align-self: flex-end; }

.typing {
  display: flex; gap: 4px;
  padding: 9px 13px;
  background: var(--s2);
  border-radius: 12px;
  border-bottom-left-radius: 3px;
  width: fit-content;
}

.typing span {
  width: 5px; height: 5px;
  border-radius: 50%;
  background: var(--text3);
  animation: dot 1.4s ease infinite;
}
.typing span:nth-child(2) { animation-delay: .2s; }
.typing span:nth-child(3) { animation-delay: .4s; }

@keyframes dot {
  0%,100% { opacity:.3; transform: translateY(0); }
  50%      { opacity:1;  transform: translateY(-3px); }
}

@keyframes up {
  from { opacity:0; transform: translateY(22px); }
  to   { opacity:1; transform: none; }
}

/* ── DIVIDER ── */
.divider {
  border: none;
  border-top: 1px solid var(--border);
  margin: 0;
}

/* ── INTEGRATIONS BAR ── */
.int-bar {
  padding: 36px 24px;
  text-align: center;
  position: relative; z-index: 1;
}

.int-label {
  font-size: 11px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--text3);
  margin-bottom: 24px;
  font-weight: 500;
}

.int-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
}

.int-item {
  font-family: 'Cabinet Grotesk', sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: var(--text3);
  letter-spacing: -.2px;
  transition: color .2s;
}

.int-item:hover { color: var(--text2); }

/* ── SECTION ── */
.sec {
  padding: 96px 24px;
  position: relative; z-index: 1;
}

.sec-inner { max-width: 1160px; margin: 0 auto; }

.sec-tag {
  font-size: 11px;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: var(--blue);
  font-weight: 500;
  margin-bottom: 14px;
  display: block;
}

.sec-title {
  font-size: clamp(30px, 4vw, 52px);
  font-weight: 900;
  letter-spacing: -1.5px;
  line-height: 1.05;
  color: #fff;
  margin-bottom: 18px;
}

.sec-sub {
  font-size: 17px;
  color: var(--text2);
  font-weight: 300;
  max-width: 520px;
  line-height: 1.75;
}

/* ── PROBLEM ── */
.prob-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 16px;
  margin-top: 52px;
}

.prob-card {
  background: var(--s1);
  border: 1px solid var(--border);
  border-radius: var(--r);
  padding: 28px;
  transition: border-color .2s, transform .2s;
}

.prob-card:hover {
  border-color: var(--border2);
  transform: translateY(-3px);
}

.prob-icon {
  font-size: 26px;
  margin-bottom: 14px;
  display: block;
}

.prob-card h3 {
  font-size: 16px;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 8px;
  letter-spacing: -.2px;
}

.prob-card p {
  font-size: 14px;
  color: var(--text2);
  line-height: 1.65;
}

/* ── FEATURES ── */
.feat-top {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 72px;
  align-items: start;
  margin-bottom: 56px;
}

.feat-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1px;
  background: var(--border);
  border-radius: var(--r);
  overflow: hidden;
  border: 1px solid var(--border);
}

.feat-item {
  background: var(--s1);
  padding: 30px;
  transition: background .2s;
}

.feat-item:hover { background: var(--s2); }

.feat-num {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: var(--green);
  margin-bottom: 14px;
  display: block;
}

.feat-item h3 {
  font-size: 17px;
  font-weight: 800;
  color: #fff;
  margin-bottom: 8px;
  letter-spacing: -.3px;
}

.feat-item p {
  font-size: 13px;
  color: var(--text2);
  line-height: 1.65;
}

/* ── HOW ── */
.how-sec { background: rgba(14,165,233,.02); }

.steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 0;
  margin-top: 60px;
  position: relative;
}

.steps::before {
  content: '';
  position: absolute;
  top: 27px;
  left: 12%;
  right: 12%;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--border2) 20%, var(--border2) 80%, transparent);
}

.step {
  text-align: center;
  padding: 0 20px;
}

.step-num {
  width: 54px; height: 54px;
  border-radius: 50%;
  background: var(--s2);
  border: 1px solid var(--border2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 17px;
  font-weight: 900;
  color: var(--blue2);
  margin: 0 auto 22px;
  position: relative; z-index: 1;
}

.step h3 {
  font-size: 15px;
  font-weight: 800;
  color: var(--text);
  margin-bottom: 8px;
  letter-spacing: -.2px;
}

.step p {
  font-size: 13px;
  color: var(--text2);
  line-height: 1.6;
}

/* ── RESULTS ── */
.results-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  margin-top: 60px;
}

.res-card {
  background: var(--s1);
  border: 1px solid var(--border);
  border-radius: var(--r);
  padding: 40px 28px;
  text-align: center;
  overflow: visible;
}

.result-num {
  font-size: 48px;
  font-weight: 900;
  letter-spacing: -1px;
  background: linear-gradient(120deg, var(--blue2), var(--green2));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: inline-block;
  line-height: 1.2;
  padding: 4px 2px;
  margin-bottom: 10px;
}

.res-label {
  font-size: 13px;
  color: var(--text2);
  line-height: 1.45;
}

/* ── TESTIMONIALS ── */
.test-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
  margin-top: 52px;
}

.test-card {
  background: var(--s1);
  border: 1px solid var(--border);
  border-radius: var(--r);
  padding: 28px;
  transition: border-color .2s;
}

.test-card:hover { border-color: var(--border2); }

.stars { color: #F59E0B; font-size: 13px; letter-spacing: 2px; margin-bottom: 14px; }

.test-text {
  font-size: 14px;
  color: var(--text);
  line-height: 1.7;
  font-style: italic;
  margin-bottom: 22px;
}

.test-author { display: flex; align-items: center; gap: 11px; }

.t-avatar {
  width: 38px; height: 38px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--blue), var(--green));
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Cabinet Grotesk', sans-serif;
  font-size: 13px;
  font-weight: 800;
  color: #fff;
  flex-shrink: 0;
}

.t-info strong {
  font-size: 13px;
  color: var(--text);
  display: block;
  font-weight: 700;
  font-family: 'Cabinet Grotesk', sans-serif;
}

.t-info span { font-size: 12px; color: var(--text3); }

/* ── TECH FOOTER NOTE ── */
.tech-note {
  border-top: 1px solid var(--border);
  padding: 28px 24px;
  text-align: center;
  position: relative; z-index: 1;
}

.tech-note p {
  font-size: 11px;
  color: var(--text3);
  letter-spacing: .3px;
  line-height: 1.6;
}

.tech-note span {
  color: var(--text3);
  opacity: .7;
}

/* ── CTA FINAL ── */
.cta-sec {
  padding: 120px 24px;
  text-align: center;
  position: relative; z-index: 1;
  overflow: hidden;
}

.cta-glow {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  width: 600px; height: 300px;
  background: radial-gradient(ellipse, rgba(14,165,233,.1) 0%, transparent 70%);
  pointer-events: none;
}

.cta-sec h2 {
  font-size: clamp(34px, 5vw, 62px);
  font-weight: 900;
  letter-spacing: -2px;
  line-height: 1.04;
  color: #fff;
  margin-bottom: 18px;
  position: relative;
}

.cta-sec p {
  font-size: 17px;
  color: var(--text2);
  margin-bottom: 40px;
  font-weight: 300;
  max-width: 480px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
}

/* ── FOOTER ── */
footer {
  border-top: 1px solid var(--border);
  padding: 32px 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
  position: relative; z-index: 1;
}

.foot-logo {
  font-family: 'Cabinet Grotesk', sans-serif;
  font-size: 17px;
  font-weight: 900;
  color: var(--text2);
}

.foot-links {
  display: flex; gap: 24px; list-style: none;
}

.foot-links a {
  font-size: 12px;
  color: var(--text3);
  text-decoration: none;
  transition: color .2s;
}

.foot-links a:hover { color: var(--text2); }

.foot-copy { font-size: 12px; color: var(--text3); }

/* ── REVEAL ── */
.rev {
  opacity: 0;
  transform: translateY(26px);
  transition: opacity .65s ease, transform .65s ease;
}

.rev.on { opacity: 1; transform: none; }

/* ── RESPONSIVE ── */
@media (max-width: 768px) {
  nav { padding: 0 20px; }
  .nav-links { display: none; }
  .feat-top { grid-template-columns: 1fr; gap: 20px; }
  .steps::before { display: none; }
  footer { padding: 28px 20px; flex-direction: column; align-items: flex-start; }
  .hero h1 { letter-spacing: -2px; }
}

/* ── IRIS TAGS ── */
.iris-tags {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 14px;
  margin: 36px 0 52px;
}

.iris-tag {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  background: rgba(14,165,233,.05);
  border: 1px solid rgba(14,165,233,.15);
  border-radius: var(--r);
  padding: 18px 20px;
}

.iris-tag-icon { font-size: 22px; flex-shrink: 0; margin-top: 2px; }

.iris-tag strong {
  display: block;
  font-family: 'Cabinet Grotesk', sans-serif;
  font-size: 15px;
  font-weight: 800;
  color: var(--text);
  margin-bottom: 4px;
  letter-spacing: -.2px;
}

.iris-tag span {
  font-size: 13px;
  color: var(--text2);
  line-height: 1.55;
}

/* ── WHATSAPP PHONE MOCKUP ── */
.wp-phone {
  width: 100%;
  max-width: 340px;
  margin: 0 auto;
  background: #111B21;
  border-radius: 32px;
  overflow: hidden;
  border: 6px solid #1A2535;
  box-shadow:
    0 0 0 1px rgba(14,165,233,.08),
    0 32px 80px rgba(0,0,0,.75);
}

.wp-status {
  background: #075E54;
  padding: 6px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 11px;
  font-weight: 600;
  color: white;
  font-family: 'DM Sans', sans-serif;
}

.wp-header {
  background: #075E54;
  padding: 8px 12px 12px;
  display: flex;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid rgba(255,255,255,.08);
}

.wp-back { color: white; font-size: 18px; opacity: .9; }

.wp-avatar {
  width: 36px; height: 36px;
  border-radius: 50%;
  background: linear-gradient(135deg, #25D366, #128C7E);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Cabinet Grotesk', sans-serif;
  font-weight: 900;
  font-size: 15px;
  color: white;
  flex-shrink: 0;
}

.wp-hinfo { flex: 1; }
.wp-hinfo strong { display: block; font-size: 13px; font-weight: 700; color: white; font-family: 'Cabinet Grotesk', sans-serif; }
.wp-hinfo span   { font-size: 11px; color: rgba(255,255,255,.75); }

.wp-icons { display: flex; gap: 12px; }

.wp-body {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Ccircle cx='30' cy='30' r='1' fill='rgba(255,255,255,.015)'/%3E%3C/svg%3E");
  background-color: #0D1418;
  padding: 12px 10px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-height: 280px;
}

.wp-date {
  text-align: center;
  font-size: 10px;
  font-weight: 600;
  color: rgba(255,255,255,.35);
  letter-spacing: 1px;
  margin: 4px 0 8px;
}

.wp-bubble {
  max-width: 82%;
  border-radius: 10px;
  padding: 7px 10px 4px;
  font-size: 13px;
  line-height: 1.5;
}

.wp-bubble p { color: #E9EDF0; margin: 0; }
.wp-bubble strong { color: #fff; }

.wp-in  { background: #1F2C34; border-top-left-radius: 2px; align-self: flex-start; }
.wp-out { background: #005C4B; border-top-right-radius: 2px; align-self: flex-end; }

.wp-meta {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 4px;
  margin-top: 3px;
}

.wp-meta span { font-size: 10px; color: rgba(255,255,255,.45); }
.wp-check { color: #53BDEB !important; font-size: 11px !important; }

/* audio bubble */
.wp-audio {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 2px 0 4px;
}

.wp-audio-play {
  width: 28px; height: 28px;
  border-radius: 50%;
  background: #25D366;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  color: white;
  flex-shrink: 0;
}

.wp-audio-wave {
  display: flex;
  align-items: center;
  gap: 2px;
  flex: 1;
}

.wp-audio-wave span {
  display: block;
  width: 3px;
  border-radius: 2px;
  background: rgba(255,255,255,.5);
  animation: wave 1.2s ease infinite;
}

.wp-audio-wave span:nth-child(1)  { height: 8px; }
.wp-audio-wave span:nth-child(2)  { height: 14px; animation-delay: .1s; }
.wp-audio-wave span:nth-child(3)  { height: 20px; animation-delay: .2s; }
.wp-audio-wave span:nth-child(4)  { height: 12px; animation-delay: .3s; }
.wp-audio-wave span:nth-child(5)  { height: 18px; animation-delay: .4s; }
.wp-audio-wave span:nth-child(6)  { height: 10px; animation-delay: .5s; }
.wp-audio-wave span:nth-child(7)  { height: 16px; animation-delay: .6s; }
.wp-audio-wave span:nth-child(8)  { height: 8px;  animation-delay: .7s; }
.wp-audio-wave span:nth-child(9)  { height: 14px; animation-delay: .8s; }
.wp-audio-wave span:nth-child(10) { height: 10px; animation-delay: .9s; }

@keyframes wave {
  0%,100% { opacity:.4; transform: scaleY(1); }
  50%      { opacity:1;  transform: scaleY(1.4); }
}

.wp-audio-dur { font-size: 11px; color: rgba(255,255,255,.5); }

.wp-inputbar {
  background: #1F2C34;
  padding: 8px 10px;
  display: flex;
  align-items: center;
  gap: 8px;
  border-top: 1px solid rgba(255,255,255,.05);
}

.wp-inputfield {
  flex: 1;
  background: #2A3942;
  border-radius: 20px;
  padding: 8px 14px;
  font-size: 13px;
  color: rgba(255,255,255,.35);
  font-family: 'DM Sans', sans-serif;
}

.wp-mic {
  font-size: 18px;
  opacity: .7;
}

</style>
</head>
<body>

<div class="mesh"></div>

<!-- NAV -->
<nav>
  <div class="logo">
    <span class="logo-main">IRIS</span>
    <span class="logo-sub">by Cappia</span>
  </div>
  <ul class="nav-links">
    <li><a href="#funcionalidades">Funcionalidades</a></li>
    <li><a href="#como-funciona">Como funciona</a></li>
    <li><a href="#resultados">Resultados</a></li>
    <li><a href="#contato">Contato</a></li>
  </ul>
  <a href="#contato" class="nav-cta">Quero conhecer</a>
</nav>

<!-- HERO -->
<section class="hero">
  <div class="pill">
    <div class="pill-dot"></div>
    Atendimento automático inteligente
  </div>

  <h1>Sua clínica atende<br>enquanto você <span class="accent">descansa.</span></h1>

  <p>Iris responde, agenda e confirma consultas pelo WhatsApp — sozinha, a qualquer hora, sem erros e sem deixar paciente sem resposta.</p>

  <div class="hero-btns">
    <a href="#contato" class="btn-p">Quero ver funcionando</a>
    <a href="#como-funciona" class="btn-s">Como funciona →</a>
  </div>

  <div class="mockup-wrap">
    <!-- Phone frame -->
    <div class="wp-phone">
      <!-- Status bar -->
      <div class="wp-status">
        <span>22:17</span>
        <span style="display:flex;gap:4px;align-items:center">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="white" opacity=".9"><path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/></svg>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="white" opacity=".9"><path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z"/></svg>
        </span>
      </div>
      <!-- WA Header -->
      <div class="wp-header">
        <div class="wp-back">&#8592;</div>
        <div class="wp-avatar">I</div>
        <div class="wp-hinfo">
          <strong>Iris · Clínica Dental</strong>
          <span>online agora</span>
        </div>
        <div class="wp-icons">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white" opacity=".85"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white" opacity=".85"><circle cx="12" cy="5" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="12" cy="19" r="2"/></svg>
        </div>
      </div>
      <!-- Chat body -->
      <div class="wp-body">
        <!-- date -->
        <div class="wp-date">HOJE</div>

        <!-- audio msg from user -->
        <div class="wp-bubble wp-out">
          <div class="wp-audio">
            <div class="wp-audio-play">▶</div>
            <div class="wp-audio-wave">
              <span></span><span></span><span></span><span></span><span></span>
              <span></span><span></span><span></span><span></span><span></span>
            </div>
            <span class="wp-audio-dur">0:04</span>
          </div>
          <div class="wp-meta"><span>22:17</span><span class="wp-check">✓✓</span></div>
        </div>

        <!-- iris response -->
        <div class="wp-bubble wp-in">
          <p>Olá! 😊 Ouvi seu áudio. Com prazer! Temos horário com a Dra. Ana <strong>amanhã às 9h ou 11h</strong>, e com o Dr. Carlos <strong>na sexta às 14h</strong>. Qual prefere?</p>
          <div class="wp-meta"><span>22:17</span></div>
        </div>

        <!-- user reply -->
        <div class="wp-bubble wp-out">
          <p>Dra. Ana às 11h por favor</p>
          <div class="wp-meta"><span>22:18</span><span class="wp-check">✓✓</span></div>
        </div>

        <!-- iris confirm -->
        <div class="wp-bubble wp-in">
          <p>✅ Consulta confirmada!<br><strong>Dra. Ana · Amanhã · 11h00</strong><br>Você receberá um lembrete antes. Até lá! 😊</p>
          <div class="wp-meta"><span>22:18</span></div>
        </div>
      </div>
      <!-- WA input bar -->
      <div class="wp-inputbar">
        <div class="wp-inputfield">Mensagem</div>
        <div class="wp-mic">🎙️</div>
      </div>
    </div>
  </div>
</section>

<hr class="divider">

<!-- INTEGRATIONS -->
<div class="int-bar">
  <p class="int-label">Funciona com as ferramentas que você já usa</p>
  <div class="int-row">
    <span class="int-item">WhatsApp</span>
    <span class="int-item">Google Calendar</span>
    <span class="int-item">Google Sheets</span>
    <span class="int-item">Inteligência Artificial</span>
  </div>
</div>

<hr class="divider">

<!-- PROBLEMS -->
<section class="sec">
  <div class="sec-inner">
    <span class="sec-tag rev">O problema</span>
    <h2 class="sec-title rev">Sua clínica perde dinheiro<br>todo dia sem perceber.</h2>
    <p class="sec-sub rev">Cada mensagem sem resposta é um paciente que vai para o concorrente. Cada falta sem aviso é um horário desperdiçado.</p>

    <div class="prob-grid">
      <div class="prob-card rev">
        <span class="prob-icon">📱</span>
        <h3>Mensagens sem resposta</h3>
        <p>Paciente manda mensagem às 21h querendo marcar. Ninguém responde. No dia seguinte ele já está em outra clínica.</p>
      </div>
      <div class="prob-card rev">
        <span class="prob-icon">🕐</span>
        <h3>Fora do horário comercial</h3>
        <p>A maioria das pessoas decide marcar consulta fora do expediente. Sua clínica fica muda exatamente quando elas procuram.</p>
      </div>
      <div class="prob-card rev">
        <span class="prob-icon">📅</span>
        <h3>Faltas sem aviso prévio</h3>
        <p>Sem lembrete automático, o paciente esquece. Você perde o horário, perde o faturamento e ainda fica esperando.</p>
      </div>
      <div class="prob-card rev">
        <span class="prob-icon">📋</span>
        <h3>Agenda sem controle</h3>
        <p>Reagendamentos feitos no WhatsApp, informações perdidas em conversas, conflitos de horário. Caos difícil de resolver.</p>
      </div>
    </div>
  </div>
</section>

<!-- FEATURES -->
<section class="sec" id="funcionalidades" style="padding-top:0">
  <div class="sec-inner">
    <div class="feat-top">
      <div>
        <span class="sec-tag rev">O que Iris faz</span>
        <h2 class="sec-title rev">Não é um menu<br>de opções. É uma<br>atendente de verdade.</h2>
      </div>
      <div>
        <p class="sec-sub rev" style="margin-top:18px">Iris entende o que o paciente escreve, verifica a agenda em tempo real e confirma a consulta — tudo em linguagem natural, como uma conversa de verdade.</p>
      </div>
    </div>

    <div class="iris-tags rev" style="margin-bottom:40px">
      <div class="iris-tag">
        <span class="iris-tag-icon">🎙️</span>
        <div>
          <strong>Entende áudios</strong>
          <span>O paciente pode mandar áudio. Iris transcreve e responde normalmente.</span>
        </div>
      </div>
      <div class="iris-tag">
        <span class="iris-tag-icon">🤝</span>
        <div>
          <strong>Responde como humano</strong>
          <span>Sem menus, sem botões para apertar. Uma conversa natural do começo ao fim.</span>
        </div>
      </div>
      <div class="iris-tag">
        <span class="iris-tag-icon">🧠</span>
        <div>
          <strong>Aprende o contexto</strong>
          <span>Lembra quem é o paciente, seu histórico e suas preferências.</span>
        </div>
      </div>
    </div>

    <div class="feat-grid">
      <div class="feat-item rev">
        <span class="feat-num">01</span>
        <h3>Agendamento automático</h3>
        <p>Verifica disponibilidade e confirma a consulta no calendário em tempo real, sem intervenção humana.</p>
      </div>
      <div class="feat-item rev">
        <span class="feat-num">02</span>
        <h3>Reagendamento fluido</h3>
        <p>Cancela o horário antigo, libera a vaga e cria o novo evento em uma única conversa.</p>
      </div>
      <div class="feat-item rev">
        <span class="feat-num">03</span>
        <h3>Lembretes automáticos</h3>
        <p>Avisa o paciente antes da consulta e reduz faltas sem você precisar fazer nada.</p>
      </div>
      <div class="feat-item rev">
        <span class="feat-num">04</span>
        <h3>Memória do paciente</h3>
        <p>Reconhece quem já é paciente, lembra do histórico e personaliza o atendimento.</p>
      </div>
      <div class="feat-item rev">
        <span class="feat-num">05</span>
        <h3>Múltiplos dentistas</h3>
        <p>Gerencia agendas separadas para cada profissional, com horários e procedimentos próprios. Horários configuráveis por dentista — padrão automático ou personalizado conforme a necessidade de cada um. Tudo simples de ajustar.</p>
      </div>
      <div class="feat-item rev">
        <span class="feat-num">06</span>
        <h3>Disponível 24 horas</h3>
        <p>Atende às 2h da manhã com a mesma qualidade do horário comercial. Nenhum paciente sem resposta.</p>
      </div>
      <div class="feat-item rev">
        <span class="feat-num">07</span>
        <h3>Painel exclusivo da clínica</h3>
        <p>Cada clínica tem seu próprio acesso com login e senha. Dentro do painel é possível configurar nome, endereço, horários e dados de cada dentista — além de consultar a ficha completa dos pacientes e o histórico de todos os agendamentos, tudo em um só lugar.</p>
      </div>
    </div>
  </div>
</section>

<!-- HOW IT WORKS -->
<section class="sec how-sec" id="como-funciona">
  <div class="sec-inner">
    <span class="sec-tag rev" style="text-align:center;display:block">Como funciona</span>
    <h2 class="sec-title rev" style="text-align:center">Simples para o paciente.<br>Poderoso por dentro.</h2>

    <div class="steps">
      <div class="step rev">
        <div class="step-num">01</div>
        <h3>Paciente escreve</h3>
        <p>Texto, áudio, emoji — Iris entende qualquer formato, no WhatsApp que a clínica já usa.</p>
      </div>
      <div class="step rev">
        <div class="step-num">02</div>
        <h3>Iris entende</h3>
        <p>Analisa a mensagem e consulta a disponibilidade real na agenda.</p>
      </div>
      <div class="step rev">
        <div class="step-num">03</div>
        <h3>Confirma e registra</h3>
        <p>Cria o evento no calendário e salva os dados automaticamente.</p>
      </div>
      <div class="step rev">
        <div class="step-num">04</div>
        <h3>Lembra e acompanha</h3>
        <p>Envia lembrete antes da consulta e atualiza automaticamente cancelamentos e reagendamentos.</p>
      </div>
    </div>
  </div>
</section>

<!-- RESULTS -->
<section class="sec" id="resultados">
  <div class="sec-inner">
    <span class="sec-tag rev" style="text-align:center;display:block">Impacto</span>
    <h2 class="sec-title rev" style="text-align:center">O que muda na prática</h2>

    <div class="results-grid">
      <div class="res-card rev">
        <span class="result-num">24h</span>
        <div class="res-label">Atendimento sem interrupção, todos os dias</div>
      </div>
      <div class="res-card rev">
        <span class="result-num">−70%</span>
        <div class="res-label">Menos faltas com lembretes automáticos</div>
      </div>
      <div class="res-card rev">
        <span class="result-num">5s</span>
        <div class="res-label">Tempo médio de resposta ao paciente</div>
      </div>
      <div class="res-card rev">
        <span class="result-num">100%</span>
        <div class="res-label">Agendamentos registrados automaticamente</div>
      </div>
    </div>
  </div>
</section>

<!-- TESTIMONIALS -->
<section class="sec">
  <div class="sec-inner">
    <span class="sec-tag rev">Depoimentos</span>
    <h2 class="sec-title rev">Clínicas que já<br>modernizaram o atendimento.</h2>

    <div class="test-grid">
      <div class="test-card rev">
        <div class="stars">★★★★★</div>
        <p class="test-text">"Parece uma secretária humana, só que ela nunca erra e está sempre disponível. Meus pacientes adoram a agilidade."</p>
        <div class="test-author">
          <div class="t-avatar">CA</div>
          <div class="t-info">
            <strong>Dr. Carlos Almeida</strong>
            <span>Clínica Almeida Odontologia, SP</span>
          </div>
        </div>
      </div>
      <div class="test-card rev">
        <div class="stars">★★★★★</div>
        <p class="test-text">"As faltas caíram muito desde que ativamos os lembretes. O retorno já cobriu o investimento no primeiro mês."</p>
        <div class="test-author">
          <div class="t-avatar">MF</div>
          <div class="t-info">
            <strong>Dra. Marina Ferreira</strong>
            <span>Studio Dental, RJ</span>
          </div>
        </div>
      </div>
      <div class="test-card rev">
        <div class="stars">★★★★★</div>
        <p class="test-text">"Meus pacientes ficam impressionados com a qualidade do atendimento. E eu nem preciso estar na clínica para isso funcionar."</p>
        <div class="test-author">
          <div class="t-avatar">RP</div>
          <div class="t-info">
            <strong>Dr. Rafael Pinto</strong>
            <span>Pinto & Associados, BH</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- CTA FINAL -->
<section class="cta-sec" id="contato">
  <div class="cta-glow"></div>
  <h2>Sua concorrência já<br>está olhando para isso.</h2>
  <p>Cada dia sem Iris é um agendamento perdido e um paciente que não volta.</p>
  <a href="#contato" class="btn-p" style="font-size:16px;padding:17px 44px">Quero ver Iris funcionando</a>
</section>

<!-- TECH NOTE -->
<div class="tech-note">
  <p>
    <span>Tecnologias utilizadas:</span>
    WhatsApp Business API · Google Calendar · Google Sheets · Inteligência Artificial avançada · Automação de fluxos
  </p>
</div>

<!-- FOOTER -->
<footer>
  <div class="foot-logo">IRIS <span style="color:var(--text3);font-weight:400;font-size:13px">by Cappia</span></div>
  <ul class="foot-links">
    <li><a href="#">Privacidade</a></li>
    <li><a href="#">Termos</a></li>
    <li><a href="#">Contato</a></li>
  </ul>
  <span class="foot-copy">© 2025 Cappia. Todos os direitos reservados.</span>
</footer>

<script>
const obs = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('on'), i * 55);
      obs.unobserve(e.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.rev').forEach(el => obs.observe(el));
</script>
</body>
</html>
`,
  es: `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Iris — Atención Automática Inteligente</title>
<link href="https://fonts.googleapis.com/css2?family=Cabinet+Grotesk:wght@300;400;500;700;800;900&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500&display=swap" rel="stylesheet">
<style>
:root {
  --bg:       #060A0F;
  --s1:       #0E1520;
  --s2:       #141E2E;
  --s3:       #1A2840;
  --border:   #1A2840;
  --border2:  #243550;
  --blue:     #0EA5E9;
  --blue2:    #38BDF8;
  --green:    #10B981;
  --green2:   #34D399;
  --text:     #F0F4F8;
  --text2:    #94A3B8;
  --text3:    #3D5068;
  --r:        12px;
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }

body {
  font-family: 'DM Sans', sans-serif;
  background: var(--bg);
  color: var(--text);
  overflow-x: hidden;
  line-height: 1.6;
}

h1,h2,h3,h4,.logo,.step-num,.result-num,.price-value,.feature-num {
  font-family: 'Cabinet Grotesk', sans-serif;
}

/* ── MESH BACKGROUND ── */
.mesh {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  background:
    radial-gradient(ellipse 70% 50% at 15% 0%,   rgba(14,165,233,.10) 0%, transparent 60%),
    radial-gradient(ellipse 50% 40% at 85% 20%,  rgba(16,185,129,.06) 0%, transparent 55%),
    radial-gradient(ellipse 40% 30% at 50% 100%, rgba(14,165,233,.05) 0%, transparent 60%);
}

/* subtle grid */
.mesh::after {
  content:'';
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(14,165,233,.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(14,165,233,.03) 1px, transparent 1px);
  background-size: 72px 72px;
  mask-image: radial-gradient(ellipse 80% 70% at 50% 30%, black, transparent 80%);
}

/* ── NAV ── */
nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  padding: 0 48px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(6,10,15,.75);
  backdrop-filter: blur(24px);
  border-bottom: 1px solid rgba(26,40,64,.6);
}

.logo {
  display: flex;
  flex-direction: column;
  line-height: 1;
}

.logo-main {
  font-size: 20px;
  font-weight: 900;
  letter-spacing: -0.5px;
  color: #fff;
}

.logo-sub {
  font-size: 9px;
  font-weight: 400;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: var(--text3);
  font-family: 'DM Sans', sans-serif;
  margin-top: 1px;
}

.nav-links {
  display: flex;
  gap: 32px;
  list-style: none;
}

.nav-links a {
  color: var(--text2);
  text-decoration: none;
  font-size: 14px;
  font-weight: 400;
  transition: color .2s;
}

.nav-links a:hover { color: var(--text); }

.nav-cta {
  background: var(--blue);
  color: #fff;
  border: none;
  padding: 9px 22px;
  border-radius: 8px;
  font-family: 'DM Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all .2s;
  text-decoration: none;
}

.nav-cta:hover {
  background: var(--blue2);
  transform: translateY(-1px);
  box-shadow: 0 8px 24px rgba(14,165,233,.25);
}

/* ── HERO ── */
.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 120px 24px 80px;
  position: relative;
}

.hero > * { position: relative; z-index: 1; }

.pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(14,165,233,.08);
  border: 1px solid rgba(14,165,233,.2);
  border-radius: 100px;
  padding: 5px 16px;
  font-size: 12px;
  font-weight: 500;
  color: var(--blue2);
  letter-spacing: .6px;
  text-transform: uppercase;
  margin-bottom: 32px;
  animation: up .7s ease both;
}

.pill-dot {
  width: 5px; height: 5px;
  border-radius: 50%;
  background: var(--green);
  animation: blink 2.4s ease infinite;
}

@keyframes blink {
  0%,100% { opacity:1; }
  50%      { opacity:.3; }
}

.hero h1 {
  font-size: clamp(44px, 7.5vw, 96px);
  font-weight: 900;
  line-height: .97;
  letter-spacing: -3px;
  color: #fff;
  max-width: 860px;
  margin-bottom: 28px;
  animation: up .7s .08s ease both;
}

.hero h1 .accent {
  background: linear-gradient(110deg, var(--blue) 0%, var(--blue2) 40%, var(--green2) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero p {
  font-size: clamp(16px, 2vw, 19px);
  color: var(--text2);
  max-width: 520px;
  font-weight: 300;
  line-height: 1.75;
  margin-bottom: 44px;
  animation: up .7s .16s ease both;
}

.hero-btns {
  display: flex;
  gap: 14px;
  justify-content: center;
  flex-wrap: wrap;
  animation: up .7s .24s ease both;
}

.btn-p {
  background: var(--blue);
  color: #fff;
  border: none;
  padding: 15px 34px;
  border-radius: 10px;
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: all .25s;
  text-decoration: none;
  display: inline-block;
}

.btn-p:hover {
  background: var(--blue2);
  transform: translateY(-2px);
  box-shadow: 0 16px 36px rgba(14,165,233,.28);
}

.btn-s {
  background: transparent;
  color: var(--text2);
  border: 1px solid var(--border2);
  padding: 15px 34px;
  border-radius: 10px;
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 400;
  cursor: pointer;
  transition: all .25s;
  text-decoration: none;
  display: inline-block;
}

.btn-s:hover {
  border-color: var(--blue);
  color: var(--text);
  transform: translateY(-2px);
}

/* ── CHAT MOCKUP ── */
.mockup-wrap {
  margin-top: 64px;
  width: 100%;
  max-width: 440px;
  animation: up .7s .32s ease both;
  position: relative;
  z-index: 1;
}

.mockup {
  background: var(--s1);
  border: 1px solid var(--border);
  border-radius: 20px;
  overflow: hidden;
  box-shadow:
    0 0 0 1px rgba(14,165,233,.06),
    0 32px 80px rgba(0,0,0,.7),
    0 0 60px rgba(14,165,233,.04);
}

.mockup-bar {
  background: var(--s2);
  padding: 14px 18px;
  display: flex;
  align-items: center;
  gap: 11px;
  border-bottom: 1px solid var(--border);
}

.m-avatar {
  width: 34px; height: 34px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--blue), var(--green));
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 13px;
  color: #fff;
  font-family: 'Cabinet Grotesk', sans-serif;
  flex-shrink: 0;
}

.m-info h4 {
  font-size: 13px;
  font-weight: 600;
  color: var(--text);
  font-family: 'Cabinet Grotesk', sans-serif;
}

.m-info p {
  font-size: 11px;
  color: var(--green);
  margin: 0;
}

.mockup-body {
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.msg {
  max-width: 82%;
  padding: 9px 13px;
  border-radius: 12px;
  font-size: 13px;
  line-height: 1.5;
  color: var(--text);
}

.msg-in  { background: var(--s2); border-bottom-left-radius: 3px; align-self: flex-start; }
.msg-out { background: var(--blue); color: #fff; border-bottom-right-radius: 3px; align-self: flex-end; }

.msg-time { font-size: 10px; color: var(--text3); }
.msg-time.r { align-self: flex-end; }

.typing {
  display: flex; gap: 4px;
  padding: 9px 13px;
  background: var(--s2);
  border-radius: 12px;
  border-bottom-left-radius: 3px;
  width: fit-content;
}

.typing span {
  width: 5px; height: 5px;
  border-radius: 50%;
  background: var(--text3);
  animation: dot 1.4s ease infinite;
}
.typing span:nth-child(2) { animation-delay: .2s; }
.typing span:nth-child(3) { animation-delay: .4s; }

@keyframes dot {
  0%,100% { opacity:.3; transform: translateY(0); }
  50%      { opacity:1;  transform: translateY(-3px); }
}

@keyframes up {
  from { opacity:0; transform: translateY(22px); }
  to   { opacity:1; transform: none; }
}

/* ── DIVIDER ── */
.divider {
  border: none;
  border-top: 1px solid var(--border);
  margin: 0;
}

/* ── INTEGRATIONS BAR ── */
.int-bar {
  padding: 36px 24px;
  text-align: center;
  position: relative; z-index: 1;
}

.int-label {
  font-size: 11px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--text3);
  margin-bottom: 24px;
  font-weight: 500;
}

.int-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
}

.int-item {
  font-family: 'Cabinet Grotesk', sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: var(--text3);
  letter-spacing: -.2px;
  transition: color .2s;
}

.int-item:hover { color: var(--text2); }

/* ── SECTION ── */
.sec {
  padding: 96px 24px;
  position: relative; z-index: 1;
}

.sec-inner { max-width: 1160px; margin: 0 auto; }

.sec-tag {
  font-size: 11px;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: var(--blue);
  font-weight: 500;
  margin-bottom: 14px;
  display: block;
}

.sec-title {
  font-size: clamp(30px, 4vw, 52px);
  font-weight: 900;
  letter-spacing: -1.5px;
  line-height: 1.05;
  color: #fff;
  margin-bottom: 18px;
}

.sec-sub {
  font-size: 17px;
  color: var(--text2);
  font-weight: 300;
  max-width: 520px;
  line-height: 1.75;
}

/* ── PROBLEM ── */
.prob-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 16px;
  margin-top: 52px;
}

.prob-card {
  background: var(--s1);
  border: 1px solid var(--border);
  border-radius: var(--r);
  padding: 28px;
  transition: border-color .2s, transform .2s;
}

.prob-card:hover {
  border-color: var(--border2);
  transform: translateY(-3px);
}

.prob-icon {
  font-size: 26px;
  margin-bottom: 14px;
  display: block;
}

.prob-card h3 {
  font-size: 16px;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 8px;
  letter-spacing: -.2px;
}

.prob-card p {
  font-size: 14px;
  color: var(--text2);
  line-height: 1.65;
}

/* ── FEATURES ── */
.feat-top {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 72px;
  align-items: start;
  margin-bottom: 56px;
}

.feat-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1px;
  background: var(--border);
  border-radius: var(--r);
  overflow: hidden;
  border: 1px solid var(--border);
}

.feat-item {
  background: var(--s1);
  padding: 30px;
  transition: background .2s;
}

.feat-item:hover { background: var(--s2); }

.feat-num {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: var(--green);
  margin-bottom: 14px;
  display: block;
}

.feat-item h3 {
  font-size: 17px;
  font-weight: 800;
  color: #fff;
  margin-bottom: 8px;
  letter-spacing: -.3px;
}

.feat-item p {
  font-size: 13px;
  color: var(--text2);
  line-height: 1.65;
}

/* ── HOW ── */
.how-sec { background: rgba(14,165,233,.02); }

.steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 0;
  margin-top: 60px;
  position: relative;
}

.steps::before {
  content: '';
  position: absolute;
  top: 27px;
  left: 12%;
  right: 12%;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--border2) 20%, var(--border2) 80%, transparent);
}

.step {
  text-align: center;
  padding: 0 20px;
}

.step-num {
  width: 54px; height: 54px;
  border-radius: 50%;
  background: var(--s2);
  border: 1px solid var(--border2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 17px;
  font-weight: 900;
  color: var(--blue2);
  margin: 0 auto 22px;
  position: relative; z-index: 1;
}

.step h3 {
  font-size: 15px;
  font-weight: 800;
  color: var(--text);
  margin-bottom: 8px;
  letter-spacing: -.2px;
}

.step p {
  font-size: 13px;
  color: var(--text2);
  line-height: 1.6;
}

/* ── RESULTS ── */
.results-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  margin-top: 60px;
}

.res-card {
  background: var(--s1);
  border: 1px solid var(--border);
  border-radius: var(--r);
  padding: 40px 28px;
  text-align: center;
  overflow: visible;
}

.result-num {
  font-size: 48px;
  font-weight: 900;
  letter-spacing: -1px;
  background: linear-gradient(120deg, var(--blue2), var(--green2));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: inline-block;
  line-height: 1.2;
  padding: 4px 2px;
  margin-bottom: 10px;
}

.res-label {
  font-size: 13px;
  color: var(--text2);
  line-height: 1.45;
}

/* ── TESTIMONIALS ── */
.test-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
  margin-top: 52px;
}

.test-card {
  background: var(--s1);
  border: 1px solid var(--border);
  border-radius: var(--r);
  padding: 28px;
  transition: border-color .2s;
}

.test-card:hover { border-color: var(--border2); }

.stars { color: #F59E0B; font-size: 13px; letter-spacing: 2px; margin-bottom: 14px; }

.test-text {
  font-size: 14px;
  color: var(--text);
  line-height: 1.7;
  font-style: italic;
  margin-bottom: 22px;
}

.test-author { display: flex; align-items: center; gap: 11px; }

.t-avatar {
  width: 38px; height: 38px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--blue), var(--green));
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Cabinet Grotesk', sans-serif;
  font-size: 13px;
  font-weight: 800;
  color: #fff;
  flex-shrink: 0;
}

.t-info strong {
  font-size: 13px;
  color: var(--text);
  display: block;
  font-weight: 700;
  font-family: 'Cabinet Grotesk', sans-serif;
}

.t-info span { font-size: 12px; color: var(--text3); }

/* ── TECH FOOTER NOTE ── */
.tech-note {
  border-top: 1px solid var(--border);
  padding: 28px 24px;
  text-align: center;
  position: relative; z-index: 1;
}

.tech-note p {
  font-size: 11px;
  color: var(--text3);
  letter-spacing: .3px;
  line-height: 1.6;
}

.tech-note span {
  color: var(--text3);
  opacity: .7;
}

/* ── CTA FINAL ── */
.cta-sec {
  padding: 120px 24px;
  text-align: center;
  position: relative; z-index: 1;
  overflow: hidden;
}

.cta-glow {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  width: 600px; height: 300px;
  background: radial-gradient(ellipse, rgba(14,165,233,.1) 0%, transparent 70%);
  pointer-events: none;
}

.cta-sec h2 {
  font-size: clamp(34px, 5vw, 62px);
  font-weight: 900;
  letter-spacing: -2px;
  line-height: 1.04;
  color: #fff;
  margin-bottom: 18px;
  position: relative;
}

.cta-sec p {
  font-size: 17px;
  color: var(--text2);
  margin-bottom: 40px;
  font-weight: 300;
  max-width: 480px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
}

/* ── FOOTER ── */
footer {
  border-top: 1px solid var(--border);
  padding: 32px 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
  position: relative; z-index: 1;
}

.foot-logo {
  font-family: 'Cabinet Grotesk', sans-serif;
  font-size: 17px;
  font-weight: 900;
  color: var(--text2);
}

.foot-links {
  display: flex; gap: 24px; list-style: none;
}

.foot-links a {
  font-size: 12px;
  color: var(--text3);
  text-decoration: none;
  transition: color .2s;
}

.foot-links a:hover { color: var(--text2); }

.foot-copy { font-size: 12px; color: var(--text3); }

/* ── REVEAL ── */
.rev {
  opacity: 0;
  transform: translateY(26px);
  transition: opacity .65s ease, transform .65s ease;
}

.rev.on { opacity: 1; transform: none; }

/* ── RESPONSIVE ── */
@media (max-width: 768px) {
  nav { padding: 0 20px; }
  .nav-links { display: none; }
  .feat-top { grid-template-columns: 1fr; gap: 20px; }
  .steps::before { display: none; }
  footer { padding: 28px 20px; flex-direction: column; align-items: flex-start; }
  .hero h1 { letter-spacing: -2px; }
}

/* ── IRIS TAGS ── */
.iris-tags {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 14px;
  margin: 36px 0 52px;
}

.iris-tag {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  background: rgba(14,165,233,.05);
  border: 1px solid rgba(14,165,233,.15);
  border-radius: var(--r);
  padding: 18px 20px;
}

.iris-tag-icon { font-size: 22px; flex-shrink: 0; margin-top: 2px; }

.iris-tag strong {
  display: block;
  font-family: 'Cabinet Grotesk', sans-serif;
  font-size: 15px;
  font-weight: 800;
  color: var(--text);
  margin-bottom: 4px;
  letter-spacing: -.2px;
}

.iris-tag span {
  font-size: 13px;
  color: var(--text2);
  line-height: 1.55;
}

/* ── WHATSAPP PHONE MOCKUP ── */
.wp-phone {
  width: 100%;
  max-width: 340px;
  margin: 0 auto;
  background: #111B21;
  border-radius: 32px;
  overflow: hidden;
  border: 6px solid #1A2535;
  box-shadow:
    0 0 0 1px rgba(14,165,233,.08),
    0 32px 80px rgba(0,0,0,.75);
}

.wp-status {
  background: #075E54;
  padding: 6px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 11px;
  font-weight: 600;
  color: white;
  font-family: 'DM Sans', sans-serif;
}

.wp-header {
  background: #075E54;
  padding: 8px 12px 12px;
  display: flex;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid rgba(255,255,255,.08);
}

.wp-back { color: white; font-size: 18px; opacity: .9; }

.wp-avatar {
  width: 36px; height: 36px;
  border-radius: 50%;
  background: linear-gradient(135deg, #25D366, #128C7E);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Cabinet Grotesk', sans-serif;
  font-weight: 900;
  font-size: 15px;
  color: white;
  flex-shrink: 0;
}

.wp-hinfo { flex: 1; }
.wp-hinfo strong { display: block; font-size: 13px; font-weight: 700; color: white; font-family: 'Cabinet Grotesk', sans-serif; }
.wp-hinfo span   { font-size: 11px; color: rgba(255,255,255,.75); }

.wp-icons { display: flex; gap: 12px; }

.wp-body {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Ccircle cx='30' cy='30' r='1' fill='rgba(255,255,255,.015)'/%3E%3C/svg%3E");
  background-color: #0D1418;
  padding: 12px 10px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-height: 280px;
}

.wp-date {
  text-align: center;
  font-size: 10px;
  font-weight: 600;
  color: rgba(255,255,255,.35);
  letter-spacing: 1px;
  margin: 4px 0 8px;
}

.wp-bubble {
  max-width: 82%;
  border-radius: 10px;
  padding: 7px 10px 4px;
  font-size: 13px;
  line-height: 1.5;
}

.wp-bubble p { color: #E9EDF0; margin: 0; }
.wp-bubble strong { color: #fff; }

.wp-in  { background: #1F2C34; border-top-left-radius: 2px; align-self: flex-start; }
.wp-out { background: #005C4B; border-top-right-radius: 2px; align-self: flex-end; }

.wp-meta {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 4px;
  margin-top: 3px;
}

.wp-meta span { font-size: 10px; color: rgba(255,255,255,.45); }
.wp-check { color: #53BDEB !important; font-size: 11px !important; }

/* audio bubble */
.wp-audio {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 2px 0 4px;
}

.wp-audio-play {
  width: 28px; height: 28px;
  border-radius: 50%;
  background: #25D366;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  color: white;
  flex-shrink: 0;
}

.wp-audio-wave {
  display: flex;
  align-items: center;
  gap: 2px;
  flex: 1;
}

.wp-audio-wave span {
  display: block;
  width: 3px;
  border-radius: 2px;
  background: rgba(255,255,255,.5);
  animation: wave 1.2s ease infinite;
}

.wp-audio-wave span:nth-child(1)  { height: 8px; }
.wp-audio-wave span:nth-child(2)  { height: 14px; animation-delay: .1s; }
.wp-audio-wave span:nth-child(3)  { height: 20px; animation-delay: .2s; }
.wp-audio-wave span:nth-child(4)  { height: 12px; animation-delay: .3s; }
.wp-audio-wave span:nth-child(5)  { height: 18px; animation-delay: .4s; }
.wp-audio-wave span:nth-child(6)  { height: 10px; animation-delay: .5s; }
.wp-audio-wave span:nth-child(7)  { height: 16px; animation-delay: .6s; }
.wp-audio-wave span:nth-child(8)  { height: 8px;  animation-delay: .7s; }
.wp-audio-wave span:nth-child(9)  { height: 14px; animation-delay: .8s; }
.wp-audio-wave span:nth-child(10) { height: 10px; animation-delay: .9s; }

@keyframes wave {
  0%,100% { opacity:.4; transform: scaleY(1); }
  50%      { opacity:1;  transform: scaleY(1.4); }
}

.wp-audio-dur { font-size: 11px; color: rgba(255,255,255,.5); }

.wp-inputbar {
  background: #1F2C34;
  padding: 8px 10px;
  display: flex;
  align-items: center;
  gap: 8px;
  border-top: 1px solid rgba(255,255,255,.05);
}

.wp-inputfield {
  flex: 1;
  background: #2A3942;
  border-radius: 20px;
  padding: 8px 14px;
  font-size: 13px;
  color: rgba(255,255,255,.35);
  font-family: 'DM Sans', sans-serif;
}

.wp-mic {
  font-size: 18px;
  opacity: .7;
}

</style>
</head>
<body>

<div class="mesh"></div>

<!-- NAV -->
<nav>
  <div class="logo">
    <span class="logo-main">IRIS</span>
    <span class="logo-sub">by Cappia</span>
  </div>
  <ul class="nav-links">
    <li><a href="#funcionalidades">Funcionalidades</a></li>
    <li><a href="#como-funciona">Cómo funciona</a></li>
    <li><a href="#resultados">Resultados</a></li>
    <li><a href="#contacto">Contacto</a></li>
  </ul>
  <a href="#contacto" class="nav-cta">Quiero conocer</a>
</nav>

<!-- HERO -->
<section class="hero">
  <div class="pill">
    <div class="pill-dot"></div>
    Atención automática inteligente
  </div>

  <h1>Tu clínica atiende<br>mientras tú <span class="accent">descansas.</span></h1>

  <p>Iris responde, agenda y confirma citas por WhatsApp — sola, a cualquier hora, sin errores y sin dejar pacientes sin respuesta.</p>

  <div class="hero-btns">
    <a href="#contacto" class="btn-p">Quiero verlo funcionar</a>
    <a href="#como-funciona" class="btn-s">Cómo funciona →</a>
  </div>

  <div class="mockup-wrap">
    <!-- Phone frame -->
    <div class="wp-phone">
      <!-- Status bar -->
      <div class="wp-status">
        <span>22:17</span>
        <span style="display:flex;gap:4px;align-items:center">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="white" opacity=".9"><path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/></svg>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="white" opacity=".9"><path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z"/></svg>
        </span>
      </div>
      <!-- WA Header -->
      <div class="wp-header">
        <div class="wp-back">&#8592;</div>
        <div class="wp-avatar">I</div>
        <div class="wp-hinfo">
          <strong>Iris · Clínica Dental</strong>
          <span>en línea ahora</span>
        </div>
        <div class="wp-icons">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white" opacity=".85"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white" opacity=".85"><circle cx="12" cy="5" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="12" cy="19" r="2"/></svg>
        </div>
      </div>
      <!-- Chat body -->
      <div class="wp-body">
        <!-- date -->
        <div class="wp-date">HOY</div>

        <!-- audio msg from user -->
        <div class="wp-bubble wp-out">
          <div class="wp-audio">
            <div class="wp-audio-play">▶</div>
            <div class="wp-audio-wave">
              <span></span><span></span><span></span><span></span><span></span>
              <span></span><span></span><span></span><span></span><span></span>
            </div>
            <span class="wp-audio-dur">0:04</span>
          </div>
          <div class="wp-meta"><span>22:17</span><span class="wp-check">✓✓</span></div>
        </div>

        <!-- iris response -->
        <div class="wp-bubble wp-in">
          <p>¡Hola! 😊 Escuché tu audio. ¡Con gusto! Tenemos horario con la Dra. Ana <strong>mañana a las 9h o 11h</strong>, y con el Dr. Carlos <strong>el viernes a las 14h</strong>. ¿Cuál prefieres?</p>
          <div class="wp-meta"><span>22:17</span></div>
        </div>

        <!-- user reply -->
        <div class="wp-bubble wp-out">
          <p>Dra. Ana a las 11h por favor</p>
          <div class="wp-meta"><span>22:18</span><span class="wp-check">✓✓</span></div>
        </div>

        <!-- iris confirm -->
        <div class="wp-bubble wp-in">
          <p>✅ ¡Cita confirmada!<br><strong>Dra. Ana · Mañana · 11:00</strong><br>Recibirás un recordatorio antes. ¡Hasta pronto! 😊</p>
          <div class="wp-meta"><span>22:18</span></div>
        </div>
      </div>
      <!-- WA input bar -->
      <div class="wp-inputbar">
        <div class="wp-inputfield">Mensaje</div>
        <div class="wp-mic">🎙️</div>
      </div>
    </div>
  </div>
</section>

<hr class="divider">

<!-- INTEGRATIONS -->
<div class="int-bar">
  <p class="int-label">Funciona con las herramientas que ya usas</p>
  <div class="int-row">
    <span class="int-item">WhatsApp</span>
    <span class="int-item">Google Calendar</span>
    <span class="int-item">Google Sheets</span>
    <span class="int-item">Inteligencia Artificial</span>
  </div>
</div>

<hr class="divider">

<!-- PROBLEMS -->
<section class="sec">
  <div class="sec-inner">
    <span class="sec-tag rev">El problema</span>
    <h2 class="sec-title rev">Tu clínica pierde dinero<br>cada día sin darse cuenta.</h2>
    <p class="sec-sub rev">Cada mensaje sin respuesta es un paciente que va a la competencia. Cada ausencia sin aviso es un horario desperdiciado.</p>

    <div class="prob-grid">
      <div class="prob-card rev">
        <span class="prob-icon">📱</span>
        <h3>Mensajes sin respuesta</h3>
        <p>El paciente manda un mensaje a las 21h queriendo agendar. Nadie responde. Al día siguiente ya está en otra clínica.</p>
      </div>
      <div class="prob-card rev">
        <span class="prob-icon">🕐</span>
        <h3>Fuera del horario comercial</h3>
        <p>La mayoría decide agendar fuera del horario laboral. Tu clínica está en silencio justo cuando ellas buscan.</p>
      </div>
      <div class="prob-card rev">
        <span class="prob-icon">📅</span>
        <h3>Ausencias sin aviso previo</h3>
        <p>Sin recordatorio automático, el paciente olvida. Pierdes el horario, los ingresos y te quedas esperando.</p>
      </div>
      <div class="prob-card rev">
        <span class="prob-icon">📋</span>
        <h3>Agenda sin control</h3>
        <p>Reagendamientos por WhatsApp, información perdida en conversaciones, conflictos de horario. Un caos difícil de resolver.</p>
      </div>
    </div>
  </div>
</section>

<!-- FEATURES -->
<section class="sec" id="funcionalidades" style="padding-top:0">
  <div class="sec-inner">
    <div class="feat-top">
      <div>
        <span class="sec-tag rev">Lo que hace Iris</span>
        <h2 class="sec-title rev">No es un menú<br>de opciones. Es una<br>recepcionista de verdad.</h2>
      </div>
      <div>
        <p class="sec-sub rev" style="margin-top:18px">Iris entiende lo que el paciente escribe, verifica la agenda en tiempo real y confirma la cita — todo en lenguaje natural, como una conversación de verdad.</p>
      </div>
    </div>

    <div class="iris-tags rev" style="margin-bottom:40px">
      <div class="iris-tag">
        <span class="iris-tag-icon">🎙️</span>
        <div>
          <strong>Entiende audios</strong>
          <span>El paciente puede enviar un audio. Iris transcribe y responde normalmente.</span>
        </div>
      </div>
      <div class="iris-tag">
        <span class="iris-tag-icon">🤝</span>
        <div>
          <strong>Responde como humano</strong>
          <span>Sin menús, sin botones. Una conversación natural de principio a fin.</span>
        </div>
      </div>
      <div class="iris-tag">
        <span class="iris-tag-icon">🧠</span>
        <div>
          <strong>Aprende el contexto</strong>
          <span>Recuerda quién es el paciente, su historial y preferencias.</span>
        </div>
      </div>
    </div>

    <div class="feat-grid">
      <div class="feat-item rev">
        <span class="feat-num">01</span>
        <h3>Programación automática</h3>
        <p>Verifica disponibilidad y confirma la cita en el calendario en tiempo real, sin intervención humana.</p>
      </div>
      <div class="feat-item rev">
        <span class="feat-num">02</span>
        <h3>Reagendamiento fluido</h3>
        <p>Cancela el horario anterior, libera el espacio y crea el nuevo evento en una sola conversación.</p>
      </div>
      <div class="feat-item rev">
        <span class="feat-num">03</span>
        <h3>Recordatorios automáticos</h3>
        <p>Avisa al paciente antes de la cita y reduce ausencias sin que hagas nada.</p>
      </div>
      <div class="feat-item rev">
        <span class="feat-num">04</span>
        <h3>Memoria del paciente</h3>
        <p>Reconoce quién ya es paciente, recuerda el historial y personaliza la atención.</p>
      </div>
      <div class="feat-item rev">
        <span class="feat-num">05</span>
        <h3>Múltiples dentistas</h3>
        <p>Gestiona agendas separadas para cada profesional, con horarios y procedimientos propios. Horarios configurables por dentista. Todo simple de ajustar.</p>
      </div>
      <div class="feat-item rev">
        <span class="feat-num">06</span>
        <h3>Disponible 24 horas</h3>
        <p>Atiende a las 2 de la madrugada con la misma calidad. Ningún paciente sin respuesta.</p>
      </div>
      <div class="feat-item rev">
        <span class="feat-num">07</span>
        <h3>Panel exclusivo de la clínica</h3>
        <p>Cada clínica tiene su propio acceso. Dentro del panel podés configurar nombre, dirección, horarios y datos de cada dentista — además de consultar fichas de pacientes y el historial de citas, todo en un solo lugar.</p>
      </div>
    </div>
  </div>
</section>

<!-- HOW IT WORKS -->
<section class="sec how-sec" id="como-funciona">
  <div class="sec-inner">
    <span class="sec-tag rev" style="text-align:center;display:block">Cómo funciona</span>
    <h2 class="sec-title rev" style="text-align:center">Simple para el paciente.<br>Poderoso por dentro.</h2>

    <div class="steps">
      <div class="step rev">
        <div class="step-num">01</div>
        <h3>El paciente escribe</h3>
        <p>Texto, audio, emoji — Iris entiende cualquier formato, en el WhatsApp que la clínica ya usa.</p>
      </div>
      <div class="step rev">
        <div class="step-num">02</div>
        <h3>Iris entiende</h3>
        <p>Analiza el mensaje y consulta la disponibilidad real en la agenda.</p>
      </div>
      <div class="step rev">
        <div class="step-num">03</div>
        <h3>Confirma y registra</h3>
        <p>Crea el evento en el calendario y guarda los datos automáticamente.</p>
      </div>
      <div class="step rev">
        <div class="step-num">04</div>
        <h3>Recuerda y da seguimiento</h3>
        <p>Envía recordatorio antes de la cita y actualiza automáticamente cancelaciones y reagendamientos.</p>
      </div>
    </div>
  </div>
</section>

<!-- RESULTS -->
<section class="sec" id="resultados">
  <div class="sec-inner">
    <span class="sec-tag rev" style="text-align:center;display:block">Impacto</span>
    <h2 class="sec-title rev" style="text-align:center">Lo que cambia en la práctica</h2>

    <div class="results-grid">
      <div class="res-card rev">
        <span class="result-num">24h</span>
        <div class="res-label">Atención sin interrupción, todos los días</div>
      </div>
      <div class="res-card rev">
        <span class="result-num">−70%</span>
        <div class="res-label">Menos ausencias con recordatorios automáticos</div>
      </div>
      <div class="res-card rev">
        <span class="result-num">5s</span>
        <div class="res-label">Tiempo promedio de respuesta al paciente</div>
      </div>
      <div class="res-card rev">
        <span class="result-num">100%</span>
        <div class="res-label">Citas registradas automáticamente</div>
      </div>
    </div>
  </div>
</section>

<!-- TESTIMONIALS -->
<section class="sec">
  <div class="sec-inner">
    <span class="sec-tag rev">Testimonios</span>
    <h2 class="sec-title rev">Clínicas que ya<br>modernizaron su atención.</h2>

    <div class="test-grid">
      <div class="test-card rev">
        <div class="stars">★★★★★</div>
        <p class="test-text">"Parece una recepcionista humana, solo que nunca se equivoca y siempre está disponible. Mis pacientes adoran la agilidad."</p>
        <div class="test-author">
          <div class="t-avatar">CA</div>
          <div class="t-info">
            <strong>Dr. Carlos Almeida</strong>
            <span>Clínica Almeida Odontología</span>
          </div>
        </div>
      </div>
      <div class="test-card rev">
        <div class="stars">★★★★★</div>
        <p class="test-text">"Las ausencias bajaron mucho desde que activamos los recordatorios. El retorno cubrió la inversión en el primer mes."</p>
        <div class="test-author">
          <div class="t-avatar">MF</div>
          <div class="t-info">
            <strong>Dra. Marina Ferreira</strong>
            <span>Studio Dental</span>
          </div>
        </div>
      </div>
      <div class="test-card rev">
        <div class="stars">★★★★★</div>
        <p class="test-text">"Mis pacientes quedan impresionados con la calidad. Y ni siquiera necesito estar en la clínica para que funcione."</p>
        <div class="test-author">
          <div class="t-avatar">RP</div>
          <div class="t-info">
            <strong>Dr. Rafael Pinto</strong>
            <span>Pinto & Asociados</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- CTA FINAL -->
<section class="cta-sec" id="contacto">
  <div class="cta-glow"></div>
  <h2>Tu competencia ya<br>está mirando esto.</h2>
  <p>Cada día sin Iris es una cita perdida y un paciente que no vuelve.</p>
  <a href="#contacto" class="btn-p" style="font-size:16px;padding:17px 44px">Quiero ver Iris funcionando</a>
</section>

<!-- TECH NOTE -->
<div class="tech-note">
  <p>
    <span>Tecnologías utilizadas:</span>
    WhatsApp Business API · Google Calendar · Google Sheets · Inteligencia Artificial avançada · Automação de fluxos
  </p>
</div>

<!-- FOOTER -->
<footer>
  <div class="foot-logo">IRIS <span style="color:var(--text3);font-weight:400;font-size:13px">by Cappia</span></div>
  <ul class="foot-links">
    <li><a href="#">Privacidad</a></li>
    <li><a href="#">Términos</a></li>
    <li><a href="#">Contacto</a></li>
  </ul>
  <span class="foot-copy">© 2025 Cappia. Todos los derechos reservados.</span>
</footer>

<script>
const obs = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('on'), i * 55);
      obs.unobserve(e.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.rev').forEach(el => obs.observe(el));
</script>
</body>
</html>
`,
  en: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Iris — Intelligent Automated Scheduling</title>
<link href="https://fonts.googleapis.com/css2?family=Cabinet+Grotesk:wght@300;400;500;700;800;900&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500&display=swap" rel="stylesheet">
<style>
:root {
  --bg:       #060A0F;
  --s1:       #0E1520;
  --s2:       #141E2E;
  --s3:       #1A2840;
  --border:   #1A2840;
  --border2:  #243550;
  --blue:     #0EA5E9;
  --blue2:    #38BDF8;
  --green:    #10B981;
  --green2:   #34D399;
  --text:     #F0F4F8;
  --text2:    #94A3B8;
  --text3:    #3D5068;
  --r:        12px;
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }

body {
  font-family: 'DM Sans', sans-serif;
  background: var(--bg);
  color: var(--text);
  overflow-x: hidden;
  line-height: 1.6;
}

h1,h2,h3,h4,.logo,.step-num,.result-num,.price-value,.feature-num {
  font-family: 'Cabinet Grotesk', sans-serif;
}

/* ── MESH BACKGROUND ── */
.mesh {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  background:
    radial-gradient(ellipse 70% 50% at 15% 0%,   rgba(14,165,233,.10) 0%, transparent 60%),
    radial-gradient(ellipse 50% 40% at 85% 20%,  rgba(16,185,129,.06) 0%, transparent 55%),
    radial-gradient(ellipse 40% 30% at 50% 100%, rgba(14,165,233,.05) 0%, transparent 60%);
}

/* subtle grid */
.mesh::after {
  content:'';
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(14,165,233,.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(14,165,233,.03) 1px, transparent 1px);
  background-size: 72px 72px;
  mask-image: radial-gradient(ellipse 80% 70% at 50% 30%, black, transparent 80%);
}

/* ── NAV ── */
nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  padding: 0 48px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(6,10,15,.75);
  backdrop-filter: blur(24px);
  border-bottom: 1px solid rgba(26,40,64,.6);
}

.logo {
  display: flex;
  flex-direction: column;
  line-height: 1;
}

.logo-main {
  font-size: 20px;
  font-weight: 900;
  letter-spacing: -0.5px;
  color: #fff;
}

.logo-sub {
  font-size: 9px;
  font-weight: 400;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: var(--text3);
  font-family: 'DM Sans', sans-serif;
  margin-top: 1px;
}

.nav-links {
  display: flex;
  gap: 32px;
  list-style: none;
}

.nav-links a {
  color: var(--text2);
  text-decoration: none;
  font-size: 14px;
  font-weight: 400;
  transition: color .2s;
}

.nav-links a:hover { color: var(--text); }

.nav-cta {
  background: var(--blue);
  color: #fff;
  border: none;
  padding: 9px 22px;
  border-radius: 8px;
  font-family: 'DM Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all .2s;
  text-decoration: none;
}

.nav-cta:hover {
  background: var(--blue2);
  transform: translateY(-1px);
  box-shadow: 0 8px 24px rgba(14,165,233,.25);
}

/* ── HERO ── */
.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 120px 24px 80px;
  position: relative;
}

.hero > * { position: relative; z-index: 1; }

.pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(14,165,233,.08);
  border: 1px solid rgba(14,165,233,.2);
  border-radius: 100px;
  padding: 5px 16px;
  font-size: 12px;
  font-weight: 500;
  color: var(--blue2);
  letter-spacing: .6px;
  text-transform: uppercase;
  margin-bottom: 32px;
  animation: up .7s ease both;
}

.pill-dot {
  width: 5px; height: 5px;
  border-radius: 50%;
  background: var(--green);
  animation: blink 2.4s ease infinite;
}

@keyframes blink {
  0%,100% { opacity:1; }
  50%      { opacity:.3; }
}

.hero h1 {
  font-size: clamp(44px, 7.5vw, 96px);
  font-weight: 900;
  line-height: .97;
  letter-spacing: -3px;
  color: #fff;
  max-width: 860px;
  margin-bottom: 28px;
  animation: up .7s .08s ease both;
}

.hero h1 .accent {
  background: linear-gradient(110deg, var(--blue) 0%, var(--blue2) 40%, var(--green2) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero p {
  font-size: clamp(16px, 2vw, 19px);
  color: var(--text2);
  max-width: 520px;
  font-weight: 300;
  line-height: 1.75;
  margin-bottom: 44px;
  animation: up .7s .16s ease both;
}

.hero-btns {
  display: flex;
  gap: 14px;
  justify-content: center;
  flex-wrap: wrap;
  animation: up .7s .24s ease both;
}

.btn-p {
  background: var(--blue);
  color: #fff;
  border: none;
  padding: 15px 34px;
  border-radius: 10px;
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: all .25s;
  text-decoration: none;
  display: inline-block;
}

.btn-p:hover {
  background: var(--blue2);
  transform: translateY(-2px);
  box-shadow: 0 16px 36px rgba(14,165,233,.28);
}

.btn-s {
  background: transparent;
  color: var(--text2);
  border: 1px solid var(--border2);
  padding: 15px 34px;
  border-radius: 10px;
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  font-weight: 400;
  cursor: pointer;
  transition: all .25s;
  text-decoration: none;
  display: inline-block;
}

.btn-s:hover {
  border-color: var(--blue);
  color: var(--text);
  transform: translateY(-2px);
}

/* ── CHAT MOCKUP ── */
.mockup-wrap {
  margin-top: 64px;
  width: 100%;
  max-width: 440px;
  animation: up .7s .32s ease both;
  position: relative;
  z-index: 1;
}

.mockup {
  background: var(--s1);
  border: 1px solid var(--border);
  border-radius: 20px;
  overflow: hidden;
  box-shadow:
    0 0 0 1px rgba(14,165,233,.06),
    0 32px 80px rgba(0,0,0,.7),
    0 0 60px rgba(14,165,233,.04);
}

.mockup-bar {
  background: var(--s2);
  padding: 14px 18px;
  display: flex;
  align-items: center;
  gap: 11px;
  border-bottom: 1px solid var(--border);
}

.m-avatar {
  width: 34px; height: 34px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--blue), var(--green));
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 13px;
  color: #fff;
  font-family: 'Cabinet Grotesk', sans-serif;
  flex-shrink: 0;
}

.m-info h4 {
  font-size: 13px;
  font-weight: 600;
  color: var(--text);
  font-family: 'Cabinet Grotesk', sans-serif;
}

.m-info p {
  font-size: 11px;
  color: var(--green);
  margin: 0;
}

.mockup-body {
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.msg {
  max-width: 82%;
  padding: 9px 13px;
  border-radius: 12px;
  font-size: 13px;
  line-height: 1.5;
  color: var(--text);
}

.msg-in  { background: var(--s2); border-bottom-left-radius: 3px; align-self: flex-start; }
.msg-out { background: var(--blue); color: #fff; border-bottom-right-radius: 3px; align-self: flex-end; }

.msg-time { font-size: 10px; color: var(--text3); }
.msg-time.r { align-self: flex-end; }

.typing {
  display: flex; gap: 4px;
  padding: 9px 13px;
  background: var(--s2);
  border-radius: 12px;
  border-bottom-left-radius: 3px;
  width: fit-content;
}

.typing span {
  width: 5px; height: 5px;
  border-radius: 50%;
  background: var(--text3);
  animation: dot 1.4s ease infinite;
}
.typing span:nth-child(2) { animation-delay: .2s; }
.typing span:nth-child(3) { animation-delay: .4s; }

@keyframes dot {
  0%,100% { opacity:.3; transform: translateY(0); }
  50%      { opacity:1;  transform: translateY(-3px); }
}

@keyframes up {
  from { opacity:0; transform: translateY(22px); }
  to   { opacity:1; transform: none; }
}

/* ── DIVIDER ── */
.divider {
  border: none;
  border-top: 1px solid var(--border);
  margin: 0;
}

/* ── INTEGRATIONS BAR ── */
.int-bar {
  padding: 36px 24px;
  text-align: center;
  position: relative; z-index: 1;
}

.int-label {
  font-size: 11px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--text3);
  margin-bottom: 24px;
  font-weight: 500;
}

.int-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
}

.int-item {
  font-family: 'Cabinet Grotesk', sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: var(--text3);
  letter-spacing: -.2px;
  transition: color .2s;
}

.int-item:hover { color: var(--text2); }

/* ── SECTION ── */
.sec {
  padding: 96px 24px;
  position: relative; z-index: 1;
}

.sec-inner { max-width: 1160px; margin: 0 auto; }

.sec-tag {
  font-size: 11px;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: var(--blue);
  font-weight: 500;
  margin-bottom: 14px;
  display: block;
}

.sec-title {
  font-size: clamp(30px, 4vw, 52px);
  font-weight: 900;
  letter-spacing: -1.5px;
  line-height: 1.05;
  color: #fff;
  margin-bottom: 18px;
}

.sec-sub {
  font-size: 17px;
  color: var(--text2);
  font-weight: 300;
  max-width: 520px;
  line-height: 1.75;
}

/* ── PROBLEM ── */
.prob-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 16px;
  margin-top: 52px;
}

.prob-card {
  background: var(--s1);
  border: 1px solid var(--border);
  border-radius: var(--r);
  padding: 28px;
  transition: border-color .2s, transform .2s;
}

.prob-card:hover {
  border-color: var(--border2);
  transform: translateY(-3px);
}

.prob-icon {
  font-size: 26px;
  margin-bottom: 14px;
  display: block;
}

.prob-card h3 {
  font-size: 16px;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 8px;
  letter-spacing: -.2px;
}

.prob-card p {
  font-size: 14px;
  color: var(--text2);
  line-height: 1.65;
}

/* ── FEATURES ── */
.feat-top {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 72px;
  align-items: start;
  margin-bottom: 56px;
}

.feat-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1px;
  background: var(--border);
  border-radius: var(--r);
  overflow: hidden;
  border: 1px solid var(--border);
}

.feat-item {
  background: var(--s1);
  padding: 30px;
  transition: background .2s;
}

.feat-item:hover { background: var(--s2); }

.feat-num {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: var(--green);
  margin-bottom: 14px;
  display: block;
}

.feat-item h3 {
  font-size: 17px;
  font-weight: 800;
  color: #fff;
  margin-bottom: 8px;
  letter-spacing: -.3px;
}

.feat-item p {
  font-size: 13px;
  color: var(--text2);
  line-height: 1.65;
}

/* ── HOW ── */
.how-sec { background: rgba(14,165,233,.02); }

.steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 0;
  margin-top: 60px;
  position: relative;
}

.steps::before {
  content: '';
  position: absolute;
  top: 27px;
  left: 12%;
  right: 12%;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--border2) 20%, var(--border2) 80%, transparent);
}

.step {
  text-align: center;
  padding: 0 20px;
}

.step-num {
  width: 54px; height: 54px;
  border-radius: 50%;
  background: var(--s2);
  border: 1px solid var(--border2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 17px;
  font-weight: 900;
  color: var(--blue2);
  margin: 0 auto 22px;
  position: relative; z-index: 1;
}

.step h3 {
  font-size: 15px;
  font-weight: 800;
  color: var(--text);
  margin-bottom: 8px;
  letter-spacing: -.2px;
}

.step p {
  font-size: 13px;
  color: var(--text2);
  line-height: 1.6;
}

/* ── RESULTS ── */
.results-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  margin-top: 60px;
}

.res-card {
  background: var(--s1);
  border: 1px solid var(--border);
  border-radius: var(--r);
  padding: 40px 28px;
  text-align: center;
  overflow: visible;
}

.result-num {
  font-size: 48px;
  font-weight: 900;
  letter-spacing: -1px;
  background: linear-gradient(120deg, var(--blue2), var(--green2));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: inline-block;
  line-height: 1.2;
  padding: 4px 2px;
  margin-bottom: 10px;
}

.res-label {
  font-size: 13px;
  color: var(--text2);
  line-height: 1.45;
}

/* ── TESTIMONIALS ── */
.test-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
  margin-top: 52px;
}

.test-card {
  background: var(--s1);
  border: 1px solid var(--border);
  border-radius: var(--r);
  padding: 28px;
  transition: border-color .2s;
}

.test-card:hover { border-color: var(--border2); }

.stars { color: #F59E0B; font-size: 13px; letter-spacing: 2px; margin-bottom: 14px; }

.test-text {
  font-size: 14px;
  color: var(--text);
  line-height: 1.7;
  font-style: italic;
  margin-bottom: 22px;
}

.test-author { display: flex; align-items: center; gap: 11px; }

.t-avatar {
  width: 38px; height: 38px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--blue), var(--green));
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Cabinet Grotesk', sans-serif;
  font-size: 13px;
  font-weight: 800;
  color: #fff;
  flex-shrink: 0;
}

.t-info strong {
  font-size: 13px;
  color: var(--text);
  display: block;
  font-weight: 700;
  font-family: 'Cabinet Grotesk', sans-serif;
}

.t-info span { font-size: 12px; color: var(--text3); }

/* ── TECH FOOTER NOTE ── */
.tech-note {
  border-top: 1px solid var(--border);
  padding: 28px 24px;
  text-align: center;
  position: relative; z-index: 1;
}

.tech-note p {
  font-size: 11px;
  color: var(--text3);
  letter-spacing: .3px;
  line-height: 1.6;
}

.tech-note span {
  color: var(--text3);
  opacity: .7;
}

/* ── CTA FINAL ── */
.cta-sec {
  padding: 120px 24px;
  text-align: center;
  position: relative; z-index: 1;
  overflow: hidden;
}

.cta-glow {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  width: 600px; height: 300px;
  background: radial-gradient(ellipse, rgba(14,165,233,.1) 0%, transparent 70%);
  pointer-events: none;
}

.cta-sec h2 {
  font-size: clamp(34px, 5vw, 62px);
  font-weight: 900;
  letter-spacing: -2px;
  line-height: 1.04;
  color: #fff;
  margin-bottom: 18px;
  position: relative;
}

.cta-sec p {
  font-size: 17px;
  color: var(--text2);
  margin-bottom: 40px;
  font-weight: 300;
  max-width: 480px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
}

/* ── FOOTER ── */
footer {
  border-top: 1px solid var(--border);
  padding: 32px 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
  position: relative; z-index: 1;
}

.foot-logo {
  font-family: 'Cabinet Grotesk', sans-serif;
  font-size: 17px;
  font-weight: 900;
  color: var(--text2);
}

.foot-links {
  display: flex; gap: 24px; list-style: none;
}

.foot-links a {
  font-size: 12px;
  color: var(--text3);
  text-decoration: none;
  transition: color .2s;
}

.foot-links a:hover { color: var(--text2); }

.foot-copy { font-size: 12px; color: var(--text3); }

/* ── REVEAL ── */
.rev {
  opacity: 0;
  transform: translateY(26px);
  transition: opacity .65s ease, transform .65s ease;
}

.rev.on { opacity: 1; transform: none; }

/* ── RESPONSIVE ── */
@media (max-width: 768px) {
  nav { padding: 0 20px; }
  .nav-links { display: none; }
  .feat-top { grid-template-columns: 1fr; gap: 20px; }
  .steps::before { display: none; }
  footer { padding: 28px 20px; flex-direction: column; align-items: flex-start; }
  .hero h1 { letter-spacing: -2px; }
}

/* ── IRIS TAGS ── */
.iris-tags {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 14px;
  margin: 36px 0 52px;
}

.iris-tag {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  background: rgba(14,165,233,.05);
  border: 1px solid rgba(14,165,233,.15);
  border-radius: var(--r);
  padding: 18px 20px;
}

.iris-tag-icon { font-size: 22px; flex-shrink: 0; margin-top: 2px; }

.iris-tag strong {
  display: block;
  font-family: 'Cabinet Grotesk', sans-serif;
  font-size: 15px;
  font-weight: 800;
  color: var(--text);
  margin-bottom: 4px;
  letter-spacing: -.2px;
}

.iris-tag span {
  font-size: 13px;
  color: var(--text2);
  line-height: 1.55;
}

/* ── WHATSAPP PHONE MOCKUP ── */
.wp-phone {
  width: 100%;
  max-width: 340px;
  margin: 0 auto;
  background: #111B21;
  border-radius: 32px;
  overflow: hidden;
  border: 6px solid #1A2535;
  box-shadow:
    0 0 0 1px rgba(14,165,233,.08),
    0 32px 80px rgba(0,0,0,.75);
}

.wp-status {
  background: #075E54;
  padding: 6px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 11px;
  font-weight: 600;
  color: white;
  font-family: 'DM Sans', sans-serif;
}

.wp-header {
  background: #075E54;
  padding: 8px 12px 12px;
  display: flex;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid rgba(255,255,255,.08);
}

.wp-back { color: white; font-size: 18px; opacity: .9; }

.wp-avatar {
  width: 36px; height: 36px;
  border-radius: 50%;
  background: linear-gradient(135deg, #25D366, #128C7E);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Cabinet Grotesk', sans-serif;
  font-weight: 900;
  font-size: 15px;
  color: white;
  flex-shrink: 0;
}

.wp-hinfo { flex: 1; }
.wp-hinfo strong { display: block; font-size: 13px; font-weight: 700; color: white; font-family: 'Cabinet Grotesk', sans-serif; }
.wp-hinfo span   { font-size: 11px; color: rgba(255,255,255,.75); }

.wp-icons { display: flex; gap: 12px; }

.wp-body {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Ccircle cx='30' cy='30' r='1' fill='rgba(255,255,255,.015)'/%3E%3C/svg%3E");
  background-color: #0D1418;
  padding: 12px 10px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-height: 280px;
}

.wp-date {
  text-align: center;
  font-size: 10px;
  font-weight: 600;
  color: rgba(255,255,255,.35);
  letter-spacing: 1px;
  margin: 4px 0 8px;
}

.wp-bubble {
  max-width: 82%;
  border-radius: 10px;
  padding: 7px 10px 4px;
  font-size: 13px;
  line-height: 1.5;
}

.wp-bubble p { color: #E9EDF0; margin: 0; }
.wp-bubble strong { color: #fff; }

.wp-in  { background: #1F2C34; border-top-left-radius: 2px; align-self: flex-start; }
.wp-out { background: #005C4B; border-top-right-radius: 2px; align-self: flex-end; }

.wp-meta {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 4px;
  margin-top: 3px;
}

.wp-meta span { font-size: 10px; color: rgba(255,255,255,.45); }
.wp-check { color: #53BDEB !important; font-size: 11px !important; }

/* audio bubble */
.wp-audio {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 2px 0 4px;
}

.wp-audio-play {
  width: 28px; height: 28px;
  border-radius: 50%;
  background: #25D366;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  color: white;
  flex-shrink: 0;
}

.wp-audio-wave {
  display: flex;
  align-items: center;
  gap: 2px;
  flex: 1;
}

.wp-audio-wave span {
  display: block;
  width: 3px;
  border-radius: 2px;
  background: rgba(255,255,255,.5);
  animation: wave 1.2s ease infinite;
}

.wp-audio-wave span:nth-child(1)  { height: 8px; }
.wp-audio-wave span:nth-child(2)  { height: 14px; animation-delay: .1s; }
.wp-audio-wave span:nth-child(3)  { height: 20px; animation-delay: .2s; }
.wp-audio-wave span:nth-child(4)  { height: 12px; animation-delay: .3s; }
.wp-audio-wave span:nth-child(5)  { height: 18px; animation-delay: .4s; }
.wp-audio-wave span:nth-child(6)  { height: 10px; animation-delay: .5s; }
.wp-audio-wave span:nth-child(7)  { height: 16px; animation-delay: .6s; }
.wp-audio-wave span:nth-child(8)  { height: 8px;  animation-delay: .7s; }
.wp-audio-wave span:nth-child(9)  { height: 14px; animation-delay: .8s; }
.wp-audio-wave span:nth-child(10) { height: 10px; animation-delay: .9s; }

@keyframes wave {
  0%,100% { opacity:.4; transform: scaleY(1); }
  50%      { opacity:1;  transform: scaleY(1.4); }
}

.wp-audio-dur { font-size: 11px; color: rgba(255,255,255,.5); }

.wp-inputbar {
  background: #1F2C34;
  padding: 8px 10px;
  display: flex;
  align-items: center;
  gap: 8px;
  border-top: 1px solid rgba(255,255,255,.05);
}

.wp-inputfield {
  flex: 1;
  background: #2A3942;
  border-radius: 20px;
  padding: 8px 14px;
  font-size: 13px;
  color: rgba(255,255,255,.35);
  font-family: 'DM Sans', sans-serif;
}

.wp-mic {
  font-size: 18px;
  opacity: .7;
}

</style>
</head>
<body>

<div class="mesh"></div>

<!-- NAV -->
<nav>
  <div class="logo">
    <span class="logo-main">IRIS</span>
    <span class="logo-sub">by Cappia</span>
  </div>
  <ul class="nav-links">
    <li><a href="#funcionalidades">Features</a></li>
    <li><a href="#como-funciona">How it works</a></li>
    <li><a href="#resultados">Results</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
  <a href="#contact" class="nav-cta">Get started</a>
</nav>

<!-- HERO -->
<section class="hero">
  <div class="pill">
    <div class="pill-dot"></div>
    Intelligent automated scheduling
  </div>

  <h1>Your clinic handles appointments<br>while you <span class="accent">rest.</span></h1>

  <p>Iris responds, schedules and confirms appointments via WhatsApp — on its own, any time, without errors and without leaving patients unanswered.</p>

  <div class="hero-btns">
    <a href="#contact" class="btn-p">See it in action</a>
    <a href="#como-funciona" class="btn-s">How it works →</a>
  </div>

  <div class="mockup-wrap">
    <!-- Phone frame -->
    <div class="wp-phone">
      <!-- Status bar -->
      <div class="wp-status">
        <span>22:17</span>
        <span style="display:flex;gap:4px;align-items:center">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="white" opacity=".9"><path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/></svg>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="white" opacity=".9"><path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z"/></svg>
        </span>
      </div>
      <!-- WA Header -->
      <div class="wp-header">
        <div class="wp-back">&#8592;</div>
        <div class="wp-avatar">I</div>
        <div class="wp-hinfo">
          <strong>Iris · Dental Clinic</strong>
          <span>online now</span>
        </div>
        <div class="wp-icons">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white" opacity=".85"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white" opacity=".85"><circle cx="12" cy="5" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="12" cy="19" r="2"/></svg>
        </div>
      </div>
      <!-- Chat body -->
      <div class="wp-body">
        <!-- date -->
        <div class="wp-date">TODAY</div>

        <!-- audio msg from user -->
        <div class="wp-bubble wp-out">
          <div class="wp-audio">
            <div class="wp-audio-play">▶</div>
            <div class="wp-audio-wave">
              <span></span><span></span><span></span><span></span><span></span>
              <span></span><span></span><span></span><span></span><span></span>
            </div>
            <span class="wp-audio-dur">0:04</span>
          </div>
          <div class="wp-meta"><span>22:17</span><span class="wp-check">✓✓</span></div>
        </div>

        <!-- iris response -->
        <div class="wp-bubble wp-in">
          <p>Hi! 😊 I heard your voice message. We have availability with Dr. Ana <strong>tomorrow at 9am or 11am</strong>, and with Dr. Carlos <strong>on Friday at 2pm</strong>. Which would you prefer?</p>
          <div class="wp-meta"><span>22:17</span></div>
        </div>

        <!-- user reply -->
        <div class="wp-bubble wp-out">
          <p>Dr. Ana at 11am please</p>
          <div class="wp-meta"><span>22:18</span><span class="wp-check">✓✓</span></div>
        </div>

        <!-- iris confirm -->
        <div class="wp-bubble wp-in">
          <p>✅ Appointment confirmed!<br><strong>Dr. Ana · Tomorrow · 11:00am</strong><br>You'll receive a reminder. See you then! 😊</p>
          <div class="wp-meta"><span>22:18</span></div>
        </div>
      </div>
      <!-- WA input bar -->
      <div class="wp-inputbar">
        <div class="wp-inputfield">Message</div>
        <div class="wp-mic">🎙️</div>
      </div>
    </div>
  </div>
</section>

<hr class="divider">

<!-- INTEGRATIONS -->
<div class="int-bar">
  <p class="int-label">Works with tools you already use</p>
  <div class="int-row">
    <span class="int-item">WhatsApp</span>
    <span class="int-item">Google Calendar</span>
    <span class="int-item">Google Sheets</span>
    <span class="int-item">Artificial Intelligence</span>
  </div>
</div>

<hr class="divider">

<!-- PROBLEMS -->
<section class="sec">
  <div class="sec-inner">
    <span class="sec-tag rev">The problem</span>
    <h2 class="sec-title rev">Your clinic loses money<br>every day without noticing.</h2>
    <p class="sec-sub rev">Every unanswered message is a patient going to a competitor. Every no-show is a wasted appointment.</p>

    <div class="prob-grid">
      <div class="prob-card rev">
        <span class="prob-icon">📱</span>
        <h3>Unanswered messages</h3>
        <p>A patient messages at 9pm wanting to book. Nobody replies. The next day they're at another clinic.</p>
      </div>
      <div class="prob-card rev">
        <span class="prob-icon">🕐</span>
        <h3>Outside business hours</h3>
        <p>Most people book appointments outside business hours. Your clinic goes silent exactly when they're looking.</p>
      </div>
      <div class="prob-card rev">
        <span class="prob-icon">📅</span>
        <h3>No-shows without notice</h3>
        <p>Without automatic reminders, patients forget. You lose the slot, lose revenue, and are left waiting.</p>
      </div>
      <div class="prob-card rev">
        <span class="prob-icon">📋</span>
        <h3>Uncontrolled schedule</h3>
        <p>Reschedules on WhatsApp, information lost in chats, scheduling conflicts. Chaos that's hard to fix.</p>
      </div>
    </div>
  </div>
</section>

<!-- FEATURES -->
<section class="sec" id="funcionalidades" style="padding-top:0">
  <div class="sec-inner">
    <div class="feat-top">
      <div>
        <span class="sec-tag rev">What Iris does</span>
        <h2 class="sec-title rev">Not a menu<br>of options. A real<br>receptionist.</h2>
      </div>
      <div>
        <p class="sec-sub rev" style="margin-top:18px">Iris understands what the patient writes, checks the schedule in real time and confirms the appointment — all in natural language.</p>
      </div>
    </div>

    <div class="iris-tags rev" style="margin-bottom:40px">
      <div class="iris-tag">
        <span class="iris-tag-icon">🎙️</span>
        <div>
          <strong>Understands voice messages</strong>
          <span>Patients can send voice messages. Iris transcribes and responds normally.</span>
        </div>
      </div>
      <div class="iris-tag">
        <span class="iris-tag-icon">🤝</span>
        <div>
          <strong>Responds like a human</strong>
          <span>No menus, no buttons. A natural conversation from start to finish.</span>
        </div>
      </div>
      <div class="iris-tag">
        <span class="iris-tag-icon">🧠</span>
        <div>
          <strong>Learns context</strong>
          <span>Remembers who the patient is, their history and preferences.</span>
        </div>
      </div>
    </div>

    <div class="feat-grid">
      <div class="feat-item rev">
        <span class="feat-num">01</span>
        <h3>Automatic scheduling</h3>
        <p>Checks availability and confirms the appointment in real time, without human intervention.</p>
      </div>
      <div class="feat-item rev">
        <span class="feat-num">02</span>
        <h3>Seamless rescheduling</h3>
        <p>Cancels the old slot and creates the new event in a single conversation.</p>
      </div>
      <div class="feat-item rev">
        <span class="feat-num">03</span>
        <h3>Automatic reminders</h3>
        <p>Notifies patients before their appointment and reduces no-shows automatically.</p>
      </div>
      <div class="feat-item rev">
        <span class="feat-num">04</span>
        <h3>Patient memory</h3>
        <p>Recognizes returning patients and personalizes the experience.</p>
      </div>
      <div class="feat-item rev">
        <span class="feat-num">05</span>
        <h3>Multiple dentists</h3>
        <p>Manages separate schedules for each professional with their own hours and procedures. Everything simple to adjust.</p>
      </div>
      <div class="feat-item rev">
        <span class="feat-num">06</span>
        <h3>Available 24 hours</h3>
        <p>Handles requests at 2am with the same quality as business hours. No patient left unanswered.</p>
      </div>
      <div class="feat-item rev">
        <span class="feat-num">07</span>
        <h3>Exclusive clinic dashboard</h3>
        <p>Each clinic has its own login. Inside the dashboard you can configure dentist data and view patient records and full appointment history, all in one place.</p>
      </div>
    </div>
  </div>
</section>

<!-- HOW IT WORKS -->
<section class="sec how-sec" id="como-funciona">
  <div class="sec-inner">
    <span class="sec-tag rev" style="text-align:center;display:block">How it works</span>
    <h2 class="sec-title rev" style="text-align:center">Simple for the patient.<br>Powerful inside.</h2>

    <div class="steps">
      <div class="step rev">
        <div class="step-num">01</div>
        <h3>Patient writes</h3>
        <p>Text, audio, emoji — Iris understands any format, on the WhatsApp the clinic already uses.</p>
      </div>
      <div class="step rev">
        <div class="step-num">02</div>
        <h3>Iris understands</h3>
        <p>Analyzes the message and checks real availability in the schedule.</p>
      </div>
      <div class="step rev">
        <div class="step-num">03</div>
        <h3>Confirms and records</h3>
        <p>Creates the calendar event and saves data automatically.</p>
      </div>
      <div class="step rev">
        <div class="step-num">04</div>
        <h3>Reminds and follows up</h3>
        <p>Sends reminders and automatically updates cancellations and reschedules.</p>
      </div>
    </div>
  </div>
</section>

<!-- RESULTS -->
<section class="sec" id="resultados">
  <div class="sec-inner">
    <span class="sec-tag rev" style="text-align:center;display:block">Impact</span>
    <h2 class="sec-title rev" style="text-align:center">What changes in practice</h2>

    <div class="results-grid">
      <div class="res-card rev">
        <span class="result-num">24h</span>
        <div class="res-label">Uninterrupted service, every day</div>
      </div>
      <div class="res-card rev">
        <span class="result-num">−70%</span>
        <div class="res-label">Fewer no-shows with automatic reminders</div>
      </div>
      <div class="res-card rev">
        <span class="result-num">5s</span>
        <div class="res-label">Average response time to patient</div>
      </div>
      <div class="res-card rev">
        <span class="result-num">100%</span>
        <div class="res-label">Appointments recorded automatically</div>
      </div>
    </div>
  </div>
</section>

<!-- TESTIMONIALS -->
<section class="sec">
  <div class="sec-inner">
    <span class="sec-tag rev">Testimonials</span>
    <h2 class="sec-title rev">Clinics that have already<br>modernized their service.</h2>

    <div class="test-grid">
      <div class="test-card rev">
        <div class="stars">★★★★★</div>
        <p class="test-text">"It feels like a human receptionist, except it never makes mistakes and is always available. My patients love the speed."</p>
        <div class="test-author">
          <div class="t-avatar">CA</div>
          <div class="t-info">
            <strong>Dr. Carlos Almeida</strong>
            <span>Almeida Dental Clinic</span>
          </div>
        </div>
      </div>
      <div class="test-card rev">
        <div class="stars">★★★★★</div>
        <p class="test-text">"No-shows dropped significantly since we activated reminders. The return covered the investment in the first month."</p>
        <div class="test-author">
          <div class="t-avatar">MF</div>
          <div class="t-info">
            <strong>Dra. Marina Ferreira</strong>
            <span>Studio Dental</span>
          </div>
        </div>
      </div>
      <div class="test-card rev">
        <div class="stars">★★★★★</div>
        <p class="test-text">"My patients are impressed with the quality. And I don't even need to be at the clinic for it to work."</p>
        <div class="test-author">
          <div class="t-avatar">RP</div>
          <div class="t-info">
            <strong>Dr. Rafael Pinto</strong>
            <span>Pinto & Associates</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- CTA FINAL -->
<section class="cta-sec" id="contact">
  <div class="cta-glow"></div>
  <h2>Your competition is already<br>looking at this.</h2>
  <p>Every day without Iris is a lost booking and a patient who doesn't come back.</p>
  <a href="#contact" class="btn-p" style="font-size:16px;padding:17px 44px">See Iris in action</a>
</section>

<!-- TECH NOTE -->
<div class="tech-note">
  <p>
    <span>Technologies used:</span>
    WhatsApp Business API · Google Calendar · Google Sheets · Artificial Intelligence avançada · Automação de fluxos
  </p>
</div>

<!-- FOOTER -->
<footer>
  <div class="foot-logo">IRIS <span style="color:var(--text3);font-weight:400;font-size:13px">by Cappia</span></div>
  <ul class="foot-links">
    <li><a href="#">Privacy</a></li>
    <li><a href="#">Terms</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
  <span class="foot-copy">© 2025 Cappia. All rights reserved.</span>
</footer>

<script>
const obs = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('on'), i * 55);
      obs.unobserve(e.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.rev').forEach(el => obs.observe(el));
</script>
</body>
</html>
`,
};

export default function handler(req) {
  const lang = (req.headers.get('accept-language') || '').toLowerCase();
  const key = lang.startsWith('pt') ? 'pt' : lang.startsWith('es') ? 'es' : lang.includes('pt') ? 'pt' : lang.includes('es') ? 'es' : 'en';
  return new Response(HTML[key], {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'public, max-age=300, stale-while-revalidate=60',
      'Vary': 'Accept-Language',
    },
  });
}
