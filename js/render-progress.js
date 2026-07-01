// ═══════════════════════════════════════════════════════
// PROGRESS / CERTIFICATES + SETTINGS rendering
// ═══════════════════════════════════════════════════════

function renderProgress(){
  const stats = totalStats();
  document.getElementById('prog-xp').textContent = stats.xp;
  document.getElementById('prog-lessons').textContent = stats.lessonsDoneCount;
  document.getElementById('prog-certs').textContent = stats.certsCount;

  const touched = Object.keys(S.subjects).filter(id => {
    const p = subjectProgress(id);
    return p.started;
  });

  const listEl = document.getElementById('progress-list');
  if(!touched.length){
    listEl.innerHTML = `<div class="empty">You haven't started a subject yet. Head to the Catalog to begin.</div>`;
  }else{
    listEl.innerHTML = touched.map(id => {
      const meta = getSubjectMeta(id);
      const p = subjectProgress(id);
      if(!meta) return '';
      return `<div class="progress-row" onclick="nav('catalog',1);setTimeout(()=>openSubject('${id}'),0)" style="cursor:pointer">
        <div class="progress-ico" style="background:${meta.bg};color:${meta.color}">${meta.icon}</div>
        <div class="progress-main">
          <div class="progress-title">${meta.title}</div>
          <div class="progress-bar-wrap"><div class="progress-bar-fill" style="width:${p.pct}%"></div></div>
        </div>
        <div class="progress-pct">${p.pct}%</div>
      </div>`;
    }).join('');
  }

  const certs = touched.filter(id => subjectProgress(id).certified);
  const certEl = document.getElementById('cert-list');
  if(!certs.length){
    certEl.innerHTML = `<div class="empty" style="padding:0 2px">No certificates yet — complete a subject's every module to earn one.</div>`;
  }else{
    certEl.innerHTML = certs.map(id => {
      const meta = getSubjectMeta(id);
      return `<div class="cert-card" style="margin:0 0 11px">
        <div style="font-size:32px;margin-bottom:6px">🏆</div>
        <div class="cert-title" style="font-size:17px">${meta.title}</div>
        <div class="cert-sub">Certified · ${new Date(S.subjects[id].certifiedAt).toLocaleDateString()}</div>
      </div>`;
    }).join('');
  }
}

function renderSettings(){
  const touched = Object.keys(S.subjects).filter(id => subjectProgress(id).started);
  const el = document.getElementById('reset-subject-list');
  if(!touched.length){
    el.innerHTML = `<div class="empty">No subjects with progress yet.</div>`;
    return;
  }
  el.innerHTML = touched.map(id => {
    const meta = getSubjectMeta(id);
    if(!meta) return '';
    return `<div class="set-row">
      <div><div class="set-lbl">${meta.icon} ${meta.title}</div><div class="set-sub">Clears lessons, exams, and certificate for this subject</div></div>
      <button class="btn-ghost bsm" onclick="resetOneSubject('${id}')">Reset</button>
    </div>`;
  }).join('');
}

function resetOneSubject(id){
  const meta = getSubjectMeta(id);
  if(!confirm(`Reset all progress for ${meta ? meta.title : id}?`)) return;
  resetSubject(id);
  renderSettings();
  renderHome();
}
