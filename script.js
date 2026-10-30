/* ===== EDIT FOR EACH CLIENT ===== */
const CONFIG = {
  whatsapp: '917387542533',
  phone: '+917387542533',
  address: 'PC Corner, Station Road, Below HDFC Bank,\nKrishna Naka, Karad, Maharashtra 415110',
  hours: 'Monday to Sunday, 10:30 AM to 7:30 PM. Open 7 days, appointments preferred.',
  instagram: 'https://www.instagram.com/unique_beauty_studio_by_chanda/',
  mapUrl: 'https://www.google.com/maps/place/Unique+Beauty+Studio+%7C+Beauty+Parlour+%26+Make-up+Artist/@17.2905345,74.1859719,263m/data=!3m1!1e3!4m7!3m6!1s0x3bc1834888950d1d:0x9b63b8ed6498c92!4b1!8m2!3d17.290522!4d74.1866026!16s%2Fg%2F11whq1yhh1?entry=ttu&g_ep=EgoyMDI2MTAyNy4wIKXMDSoASAFQAw%3D%3D',
  reviewsUrl: 'https://www.google.com/maps/place/Unique+Beauty+Studio+%7C+Beauty+Parlour+%26+Make-up+Artist/@17.2905345,74.1859719,263m/data=!3m1!1e3!4m7!3m6!1s0x3bc1834888950d1d:0x9b63b8ed6498c92!4b1!8m2!3d17.290522!4d74.1866026!16s%2Fg%2F11whq1yhh1?entry=ttu&g_ep=EgoyMDI2MTAyNy4wIKXMDSoASAFQAw%3D%3D'
};
/* Paste REAL Google reviews, word for word: {name:'Full Name', time:'6 months ago', url:'profile link (optional)', stars:5, text:'...'} */
const REVIEWS = [
  {
    name: 'priti sonawane',
    time: '6 months ago',
    stars: 5,
    text: 'It was nice experience. I love the makeup and the way she treats the person. 🙏 …'
  },
  {
    name: 'Rutuja Pawar',
    time: '10 months ago',
    stars: 5,
    text: 'The makeup artist did a very good job. She has a helpful nature, is professional and clearly experienced and we were very very happy with the result.'
  },
  {
    name: 'shobha jagdale',
    time: 'a year ago',
    stars: 5,
    text: "Thank you so much Chandarani for making all of us look so beautiful. Your style is so classic and elegant and I couldn't be happier with how we all looked on the day."
  },
  {
    name: 'Sanika Ghadage',
    time: '2 months ago',
    stars: 5,
    text: 'Good and elegent work & most imp hygiene is good plz visit'
  },
  {
    name: 'vandana Pedhekar',
    time: '9 months ago',
    stars: 5,
    text: 'Professional & experienced artist in the city. Had Great time working with her. Best at makeup as well hairstyling.'
  },
  {
    name: 'Prajakta Kale',
    time: '4 months ago',
    stars: 5,
    text: 'Excellent service, must visit for relaxation.  Nice & courteous owner,  keep up the good work.....¡'
  },
  {
    name: 'Kalyani Ghadage',
    time: '4 months ago',
    stars: 5,
    text: 'Its an excellent Parlour have gone through. Treatment over there is a pleasure. All prouducts are excellent. All staff is good. Special thanks to Chanda mam.'
  }
];
const REVIEW_PAUSE_MS = 4500; // how long each review stays still
/* Services as given by the owner. Confirm before publishing. */
const GLOW = [['HydraFacial', 'Machine-assisted facial for clean, fresh-looking skin.'], ['Deep cleanup', 'A thorough cleanup to prepare your skin.'], ['D-Tan', 'Helps with tan removal before events.']];
const MAKEUP = [['Bridal makeup', 'Your wedding-day look.'], ['Engagement makeup', 'Makeup for your engagement ceremony.'], ['HD makeup', 'A polished finish for photos and videos.'], ['Party makeup', 'Makeup for parties and family functions.']];
const DAILY = ['Hair spa', 'Hair styling', 'Hair treatments', 'Threading', 'Waxing', 'Cleanups'];
/* Bridal portfolio: Change images and labels here easily. Accepts image paths, objects {src, label}, or labels. */
const MOSAIC = [
  { src: 'assets/bridal-1.webp', label: 'Bridal look' },
  { src: 'assets/bridal-2.webp', label: 'Bridal look' },
  { src: 'assets/bridal-3.webp', label: 'Bridal look' },
  { src: 'assets/bridal-4.webp', label: 'Bridal look' },
  { src: 'assets/bridal-5.webp', label: 'Bridal look' }
];
/* ================================= */

const $ = (s, r = document) => r.querySelector(s);
const waUrl = (text) => `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(text)}`;
document.querySelectorAll('[data-wa]').forEach(a => { a.href = waUrl(a.dataset.wa); });
document.querySelectorAll('[data-ig]').forEach(a => { a.href = CONFIG.instagram; });

$('#mosaic').innerHTML = MOSAIC.map((item, i) => {
  const isObj = typeof item === 'object' && item !== null;
  const src = (isObj && item.src) ? item.src : (typeof item === 'string' && (item.includes('/') || item.includes('.')) ? item : `assets/bridal-${i + 1}.webp`);
  const label = (isObj && item.label) ? item.label : (typeof item === 'string' && !item.includes('/') ? item : 'Bridal look');
  const alt = (isObj && item.alt) || `${label} by Unique Beauty Studio`;
  return `<figure class="tile"><img src="${src}" alt="${alt}" ${i ? 'loading="lazy"' : 'fetchpriority="high"'} onerror="this.closest('.tile')?.remove()"><figcaption>${label}</figcaption></figure>`;
}).join('');
const card = ([t, d], msg) => `<article class="card"><h3>${t}</h3><p>${d}</p><a class="link" target="_blank" rel="noopener" href="${waUrl(msg(t))}">Ask on WhatsApp</a></article>`;
$('#glowcards').innerHTML = GLOW.map(g => card(g, t => `Hi, I'd like to know about ${t} before my event.`)).join('');
$('#mkcards').innerHTML = MAKEUP.map(m => card(m, t => `Hi, I'd like to enquire about ${t}. My date is: `)).join('');
$('#daily').innerHTML = DAILY.map(s => `<li><a target="_blank" rel="noopener" href="${waUrl(`Hi, I'd like to know the price for ${s}.`)}">${s}<span>Ask price</span></a></li>`).join('');

$('#addr').textContent = [CONFIG.address, CONFIG.hours && `Hours: ${CONFIG.hours}`].filter(Boolean).join('\n');
if (CONFIG.phone) { const c = $('#call'); c.href = `tel:${CONFIG.phone}`; c.hidden = false; }
if (CONFIG.mapUrl) { const m = $('#map'); m.href = CONFIG.mapUrl; m.hidden = false; }

const d = $('#d'); const today = new Date();
d.min = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
$('#form').addEventListener('submit', (e) => {
  e.preventDefault();
  const v = { n: $('#n').value.trim(), p: $('#p').value.trim(), s: $('#s').value, d: d.value, t: $('#t').value.trim() };
  const err = {};
  if (v.n.length < 2) err.n = 'Please enter your name.';
  if (!/^[6-9]\d{9}$/.test(v.p.replace(/\D/g, '').slice(-10))) err.p = 'Enter a valid 10-digit mobile number.';
  if (!v.s) err.s = 'Please choose a service or occasion.';
  if (!v.d) err.d = 'Please choose a date.'; else if (v.d < d.min) err.d = 'Please choose today or a later date.';
  ['n', 'p', 's', 'd'].forEach(k => { $(`[data-e=${k}]`).textContent = err[k] || ''; $('#' + k).setAttribute('aria-invalid', !!err[k]); });
  const first = Object.keys(err)[0];
  if (first) { $('#' + first).focus(); return; }
  const date = new Date(v.d + 'T00:00').toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  const url = waUrl(`Hi, I'd like to request an appointment.\n\nName: ${v.n}\nPhone: ${v.p}\nService: ${v.s}\nDate: ${date}${v.t ? `\nNotes: ${v.t}` : ''}`);
  window.open(url, '_blank', 'noopener,noreferrer'); // inside the tap, so phones do not block it
  $('#okl').href = url; $('#ok').hidden = false;
});

const esc = (s) => String(s).replace(/[&<>"]/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[ch]));
const track = $('#rev');
track.innerHTML = REVIEWS.map((r, i) => {
  const s = Math.min(5, Math.max(0, Math.round(+r.stars || 0)));
  const name = r.url ? `<a href="${esc(r.url)}" target="_blank" rel="noopener noreferrer">${esc(r.name)}</a>` : esc(r.name);
  const time = r.time ? ` &bull; <span>${esc(r.time)}</span>` : '';
  return `<article class="rev card" role="group" aria-roledescription="slide" aria-label="Review ${i + 1} of ${REVIEWS.length}">
    <header>
      <span class="av" aria-hidden="true">${esc(r.name.trim().charAt(0).toUpperCase())}</span>
      <div>
        <b>${name}</b>
        <small class="rev-source">Google review${time}</small>
      </div>
      <svg class="google-icon" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.65v3h3.86c2.26-2.09 3.68-5.17 3.68-9.09z"/><path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.29v3.09C3.26 21.3 7.37 24 12 24z"/><path fill="#FBBC05" d="M5.27 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62H1.29C.47 8.24 0 10.06 0 12s.47 3.76 1.29 5.38l3.98-3.09z"/><path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.37 0 3.26 2.7 1.29 6.62l3.98 3.09c.95-2.85 3.6-4.96 6.73-4.96z"/></svg>
    </header>
    ${s ? `<div class="stars" role="img" aria-label="${s} out of 5 stars">${'<span class="star">★</span>'.repeat(s)}${'<span class="star star--empty">☆</span>'.repeat(5 - s)}</div>` : ''}
    <p>${esc(r.text)}</p>
  </article>`;
}).join('');
$('#revsub').textContent = REVIEWS.length ? 'Real reviews from our Google listing.' : 'See what our customers say about us on Google.';
if (CONFIG.reviewsUrl) { const l = $('#revlink'); l.href = CONFIG.reviewsUrl; l.hidden = false; }

/* Auto-scrolling reviews: each stays still for REVIEW_PAUSE_MS. Pauses on hover, touch, focus, when off-screen, and via the Pause button. */
(function () {
  const cards = [...track.children]; const ctrl = $('.rv__ctrl');
  if (cards.length < 2) { ctrl.hidden = true; return; }
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const MOVE_MS = 500; let idx = 0, timer = null, userPaused = reduce, hold = false, visible = false;
  const playBtn = $('#rvplay');
  const go = (i, smooth = true) => {
    idx = (i + cards.length) % cards.length;
    track.scrollTo({ left: cards[idx].offsetLeft - cards[0].offsetLeft, behavior: smooth && !reduce ? 'smooth' : 'auto' });
  };
  const stop = () => { clearTimeout(timer); timer = null; };
  const arm = () => { stop(); if (!userPaused && !hold && visible) timer = setTimeout(() => { go(idx + 1); arm(); }, REVIEW_PAUSE_MS + MOVE_MS); };
  const label = () => { playBtn.textContent = userPaused ? 'Play' : 'Pause'; playBtn.setAttribute('aria-label', userPaused ? 'Start automatic scrolling' : 'Pause automatic scrolling'); };
  label();
  playBtn.addEventListener('click', () => { userPaused = !userPaused; label(); arm(); });
  $('#rvprev').addEventListener('click', () => { go(idx - 1); arm(); });
  $('#rvnext').addEventListener('click', () => { go(idx + 1); arm(); });
  let sc; track.addEventListener('scroll', () => { clearTimeout(sc); sc = setTimeout(() => {
    const step = cards[1].offsetLeft - cards[0].offsetLeft; idx = Math.max(0, Math.min(cards.length - 1, Math.round(track.scrollLeft / step))); }, 120); }, { passive: true });
  const holdOn = () => { hold = true; stop(); }, holdOff = () => { hold = false; arm(); };
  track.addEventListener('pointerenter', (e) => { if (e.pointerType === 'mouse') holdOn(); });
  track.addEventListener('pointerleave', (e) => { if (e.pointerType === 'mouse') holdOff(); });
  track.addEventListener('focusin', holdOn); track.addEventListener('focusout', holdOff);
  let tt; track.addEventListener('touchstart', () => { holdOn(); clearTimeout(tt); }, { passive: true });
  track.addEventListener('touchend', () => { tt = setTimeout(holdOff, 4000); }, { passive: true });
  new IntersectionObserver((en) => { visible = en[0].isIntersecting; arm(); }, { threshold: 0.4 }).observe(track);
})();
if (!REVIEWS.length) $('#rvwrap').hidden = true;
