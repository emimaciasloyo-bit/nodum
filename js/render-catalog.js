// ═══════════════════════════════════════════════════════
// HOME + CATALOG rendering
// ═══════════════════════════════════════════════════════
let catalogFilter = 'all';

function subjectBadge(meta, prog){
  if(meta.status !== 'available') return `<span class="subj-badge badge-soon">COMING SOON</span>`;
  if(prog.certified) return `<span class="subj-badge badge-done">✓ CERTIFIED</span>`;
  if(prog.started) return `<span class="subj-badge badge-progress">IN PROGRESS</span>`;
  return '';
}

function subjectCardHTML(meta){
  const prog = subjectProgress(meta.id);
  const locked = meta.status !== 'available';
  const color = meta.color || 'var(--muted)';
  const bg = meta.bg || 'var(--bg3)';
  const clickAttr = locked ? '' : `onclick="openSubject('${meta.id}')"`;
  return `<div class="subject-card ${locked?'locked':''}" ${clickAttr}>
    <div class="subj-ico" style="background:${bg};color:${color}">${meta.icon}</div>
    <div class="subj-title">${meta.title}</div>
    <span class="subj-tag">${meta.tagline}</span>
    ${!locked ? `<div class="subj-prog"><div class="subj-prog-fill" style="width:${prog.pct}%"></div></div>` : ''}
    ${subjectBadge(meta, prog)}
  </div>`;
}

function renderHome(){
  document.getElementById('greet-time').textContent = (()=>{
    const h = new Date().getHours();
    return h<12?'morning':h<17?'afternoon':'evening';
  })();
  document.getElementById('hero-date').textContent = new Date().toLocaleDateString('en-US',{weekday:'long',year:'numeric',month:'long',day:'numeric'});

  const stats = totalStats();
  document.getElementById('stat-xp').textContent = stats.xp;
  document.getElementById('stat-streak').textContent = S.streak.count;
  document.getElementById('stat-certs').textContent = stats.certsCount;
  document.getElementById('topbar-xp').textContent = `⚡ ${stats.xp} XP`;

  renderStreakCard();
  renderContinueCard();

  const available = SUBJECT_META.filter(m => m.status === 'available');
  const inProgress = available.filter(m => subjectProgress(m.id).started && !subjectProgress(m.id).certified);
  const rest = available.filter(m => !inProgress.includes(m));
  const picks = inProgress.concat(rest).slice(0, 6);
  document.getElementById('home-subject-grid').innerHTML = picks.map(subjectCardHTML).join('');
}

function renderStreakCard(){
  document.getElementById('streak-num').textContent = S.streak.count;
  const fire = S.streak.count >= 30 ? '🔥🔥🔥' : S.streak.count >= 14 ? '🔥🔥' : '🔥';
  document.getElementById('streak-fire').textContent = fire;
  const dots = document.getElementById('streak-dots');
  dots.innerHTML = '';
  for(let i=6;i>=0;i--){
    const d = document.createElement('div');
    if(i===0) d.className = 'sdot today';
    else if(i < S.streak.count) d.className = 'sdot done';
    else d.className = 'sdot';
    dots.appendChild(d);
  }
}

function renderContinueCard(){
  const wrap = document.getElementById('continue-wrap');
  const candidates = SUBJECT_META.filter(m => m.status==='available').map(m=>({m, p:subjectProgress(m.id)}))
    .filter(x => x.p.started && !x.p.certified);
  if(!candidates.length){ wrap.innerHTML=''; return; }
  const {m, p} = candidates[0];
  wrap.innerHTML = `<div class="continue-card" onclick="openSubject('${m.id}')">
    <div class="continue-ico" style="background:${m.bg};color:${m.color}">${m.icon}</div>
    <div style="flex:1">
      <div class="continue-title">Continue: ${m.title}</div>
      <div class="continue-sub">${p.lessonsDone}/${p.lessonsTotal} lessons · ${p.pct}% complete</div>
      <div class="continue-prog"><div class="continue-prog-fill" style="width:${p.pct}%"></div></div>
    </div>
  </div>`;
}

function renderCatalogChips(){
  const el = document.getElementById('catalog-chips');
  const chips = [{id:'all', label:'All'}].concat(CATEGORIES);
  el.innerHTML = chips.map(c => `<div class="chip ${catalogFilter===c.id?'active':''}" onclick="setCatalogFilter('${c.id}')">${c.label}</div>`).join('');
}

function setCatalogFilter(id){
  catalogFilter = id;
  renderCatalogChips();
  renderCatalog();
}

function renderCatalog(){
  renderCatalogChips();
  const search = (document.getElementById('catalog-search').value || '').toLowerCase().trim();
  let list = SUBJECT_META.slice();
  if(catalogFilter !== 'all') list = list.filter(m => m.category === catalogFilter);
  if(search) list = list.filter(m => m.title.toLowerCase().includes(search) || m.tagline.toLowerCase().includes(search));

  if(!list.length){
    document.getElementById('catalog-list').innerHTML = `<div class="empty">No subjects match your search.</div>`;
    return;
  }

  if(catalogFilter !== 'all' || search){
    document.getElementById('catalog-list').innerHTML = `<div class="subject-grid">${list.map(subjectCardHTML).join('')}</div>`;
    return;
  }

  // grouped by category
  const html = CATEGORIES.map(cat => {
    const items = list.filter(m => m.category === cat.id);
    if(!items.length) return '';
    return `<div class="cat-section">
      <div class="clbl" style="padding:0 2px">${cat.label}</div>
      <div class="subject-grid" style="margin-bottom:16px">${items.map(subjectCardHTML).join('')}</div>
    </div>`;
  }).join('');
  document.getElementById('catalog-list').innerHTML = html;
}
