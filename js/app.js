// ═══════════════════════════════════════════════════════
// APP BOOT — nav wiring, initial render
// ═══════════════════════════════════════════════════════
const PAGES = ['home','catalog','progress','settings'];

function nav(name, idx){
  PAGES.forEach(p => document.getElementById('pg-'+p).classList.remove('active'));
  document.querySelectorAll('.nb').forEach(b => b.classList.remove('active'));
  document.getElementById('pg-'+name).classList.add('active');
  document.querySelectorAll('.nb')[idx].classList.add('active');
  window.scrollTo(0,0);

  if(name === 'home') renderHome();
  if(name === 'catalog') renderCatalog();
  if(name === 'progress') renderProgress();
  if(name === 'settings') renderSettings();
}

touchStreak();
renderHome();
renderCatalog();
