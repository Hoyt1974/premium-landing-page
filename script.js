// // CONFIG
// const ENABLE_HERO_VIDEO = false;        // set true if you add hero.mp4/webm to assets
// const YOUTUBE_ID = "VIDEO_ID";          // replace to test YouTube embed
// const FORM_ENDPOINT = "";               // paste your Formspree endpoint when you have it
// const SHOW_EXTRA_BY_DEFAULT = false;    // set true to show 12 images from load

// // Year
// document.getElementById('y').textContent = new Date().getFullYear();

// // Smooth scroll for in-page links
// document.querySelectorAll('a[href^="#"]').forEach(a=>{
//   a.addEventListener('click', e=>{
//     const id = a.getAttribute('href');
//     const el = document.querySelector(id);
//     if (el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth',block:'start'}); }
//   });
// });

// // Hero media setup
// const heroVideo = document.querySelector('.hero-video');
// const heroImg   = document.querySelector('.hero-img');
// if (ENABLE_HERO_VIDEO && heroVideo){
//   const sources = [
//     { src: 'assets/hero.webm', type: 'video/webm' },
//     { src: 'assets/hero.mp4',  type: 'video/mp4'  }
//   ];
//   sources.forEach(s => {
//     const tag = document.createElement('source');
//     tag.src = s.src; tag.type = s.type;
//     heroVideo.appendChild(tag);
//   });
//   heroVideo.style.display = 'block';
//   if (heroImg) heroImg.style.opacity = '.001';
// }

// // Gallery toggle (8 → 12)
// const extra = document.querySelectorAll('.extra');
// const btn = document.getElementById('toggleMore');
// const setExtras = (show) => {
//   extra.forEach(e => e.style.display = show ? 'block' : 'none');
//   if (btn) btn.textContent = show ? 'Show Less' : 'Show 4 More';
// };
// setExtras(SHOW_EXTRA_BY_DEFAULT);
// if (btn){
//   let open = SHOW_EXTRA_BY_DEFAULT;
//   btn.addEventListener('click', ()=>{ open=!open; setExtras(open); });
// }

// // Contact form (Formspree-ready)
// const form = document.getElementById('contact-form');
// const note = document.getElementById('contact-note');
// if (form){
//   form.addEventListener('submit', async (e)=>{
//     e.preventDefault();
//     const data = new FormData(form);
//     if (!FORM_ENDPOINT){
//       note.textContent = "Message sent! (demo mode — add your Formspree endpoint to enable email delivery)";
//       form.reset(); return;
//     }
//     try{
//       const res = await fetch(FORM_ENDPOINT, { method:'POST', body:data, headers:{Accept:'application/json'} });
//       note.textContent = res.ok ? "Thanks! Your message was sent." : "Something went wrong. Please email us directly.";
//       if (res.ok) form.reset();
//     }catch{
//       note.textContent = "Network error. Please try again.";
//     }
//   });
// }

// // YouTube embed section ID swap
// const iframe = document.querySelector('#video iframe');
// if (iframe && YOUTUBE_ID && YOUTUBE_ID !== "VIDEO_ID"){
//   iframe.src = `https://www.youtube.com/embed/${YOUTUBE_ID}?rel=0`;
// }
// Smooth scroll for in-page links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const id=a.getAttribute('href');
    if(!id || id==='#') return;
    const el=document.querySelector(id);
    if(!el) return;
    e.preventDefault();
    el.scrollIntoView({behavior:'smooth', block:'start'});
  });
});

// Demo-only contact handler (remove in production)
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Message sent! (demo only — connect Formspree to enable email)');
    form.reset();
  });
}
