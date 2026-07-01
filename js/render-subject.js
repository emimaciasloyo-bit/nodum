// ═══════════════════════════════════════════════════════
// SUBJECT DETAIL overlay — modules, lessons, exams, certificate
// ═══════════════════════════════════════════════════════

// Computes unlock state for every module/lesson/exam in a subject.
function computeUnlockState(subjectId){
  const content = getSubjectContent(subjectId);
  const st = S.subjects[subjectId];
  const modules = (content && content.modules) || [];
  let prevModuleComplete = true; // first module always unlocked
  return modules.map(mod => {
    const moduleUnlocked = prevModuleComplete;
    let prevLessonDone = true; // first lesson in an unlocked module is always unlocked
    const lessons = mod.lessons.map(l => {
      const done = !!(st && st.lessonsDone[l.id]);
      const unlocked = moduleUnlocked && prevLessonDone;
      prevLessonDone = done;
      return { lesson: l, done, unlocked };
    });
    const allLessonsDone = lessons.every(x => x.done);
    let examUnlocked = false, examDone = false, examResult = null;
    if(mod.exam){
      examUnlocked = moduleUnlocked && allLessonsDone;
      examResult = st && st.examsDone[mod.exam.id];
      examDone = !!(examResult && examResult.passed);
    }
    const moduleComplete = allLessonsDone && (!mod.exam || examDone);
    prevModuleComplete = moduleComplete;
    return { module: mod, unlocked: moduleUnlocked, lessons, exam: mod.exam, examUnlocked, examDone, examResult, complete: moduleComplete };
  });
}

function openSubject(subjectId){
  const meta = getSubjectMeta(subjectId);
  if(!meta || meta.status !== 'available') return;
  const existing = document.getElementById('subject-overlay');
  if(existing) existing.remove();
  const overlay = document.createElement('div');
  overlay.id = 'subject-overlay';
  overlay.className = 'overlay';
  overlay.dataset.subjectId = subjectId;
  document.body.appendChild(overlay);
  renderSubjectOverlay(subjectId);
  window.scrollTo(0,0);
}

function closeSubjectOverlay(){
  const el = document.getElementById('subject-overlay');
  if(el) el.remove();
}

function toggleModule(idx){
  const body = document.getElementById('module-body-'+idx);
  const chev = document.getElementById('module-chev-'+idx);
  if(!body) return;
  const open = body.classList.toggle('open');
  chev.classList.toggle('open', open);
}

function renderSubjectOverlay(subjectId){
  const overlay = document.getElementById('subject-overlay');
  if(!overlay) return;
  const meta = getSubjectMeta(subjectId);
  const content = getSubjectContent(subjectId);
  const prog = subjectProgress(subjectId);
  const states = computeUnlockState(subjectId);

  let firstOpenIdx = states.findIndex(s => s.unlocked && !s.complete);
  if(firstOpenIdx === -1) firstOpenIdx = 0;

  const modulesHTML = states.map((s, idx) => {
    const numClass = s.complete ? 'm-done' : s.unlocked ? 'm-active' : '';
    const numContent = s.complete ? '✓' : (idx+1);
    const lessonRows = s.lessons.map((x, li) => {
      const cls = x.done ? 'cless-done' : x.unlocked ? 'cless-active' : 'cless-locked';
      const num = x.done ? '✓' : x.unlocked ? (li+1) : '🔒';
      const click = x.unlocked ? `onclick="openLesson('${subjectId}','${s.module.id}','${x.lesson.id}')"` : '';
      return `<div class="cless-item" ${click}>
        <div class="cless-num ${cls}">${num}</div>
        <div class="cless-title" style="color:${x.unlocked?'var(--cream)':'var(--faint)'}">${x.lesson.title}</div>
        <div class="cless-time">${x.lesson.time}</div>
      </div>`;
    }).join('');
    let examRow = '';
    if(s.exam){
      const examCls = s.examDone ? 'exam-passed' : '';
      const numCls = s.examDone ? 'cless-done' : s.examUnlocked ? '' : 'cless-locked';
      const num = s.examDone ? '✓' : s.examUnlocked ? '📝' : '🔒';
      const click = s.examUnlocked ? `onclick="openExam('${subjectId}','${s.module.id}')"` : '';
      const label = s.examResult && !s.examResult.passed ? `${s.exam.title} (retake — best ${Math.round(s.examResult.score*100)}%)` : s.exam.title;
      examRow = `<div class="cless-item exam-row ${examCls}" ${click}>
        <div class="cless-num ${numCls}">${num}</div>
        <div class="cless-title" style="color:${s.examUnlocked?'var(--cream)':'var(--faint)'}">${label}</div>
        <div class="cless-time">Exam</div>
      </div>`;
    }
    return `<div class="module-card">
      <div class="module-header" onclick="toggleModule(${idx})">
        <div class="module-num ${numClass}">${numContent}</div>
        <div style="flex:1">
          <div class="module-title">${s.module.title}</div>
          <div class="module-meta">${s.module.lessons.length} lessons${s.exam?' + exam':''}</div>
        </div>
        <div class="module-chev ${idx===firstOpenIdx?'open':''}" id="module-chev-${idx}">›</div>
      </div>
      <div class="module-body ${idx===firstOpenIdx?'open':''}" id="module-body-${idx}">${lessonRows}${examRow}</div>
    </div>`;
  }).join('');

  const certHTML = prog.certified ? `<div class="cert-card">
    <div style="font-size:36px;margin-bottom:8px">🏆</div>
    <div class="cert-title">Certificate Earned!</div>
    <div style="font-family:'Fraunces',serif;font-size:16px;color:var(--cream);margin-bottom:4px">${meta.title}</div>
    <div class="cert-sub">You completed every module in ${meta.title}. +${XP_CERT_BONUS} bonus XP earned.</div>
  </div>` : '';

  const noContent = !content.modules.length ? `<div class="empty" style="padding:20px 13px">This subject's curriculum isn't published yet.</div>` : '';

  overlay.innerHTML = `
    <div style="display:flex;align-items:center;gap:10px">
      <button class="overlay-back" onclick="closeSubjectOverlay()">← Back</button>
      <div class="overlay-crumb">${meta.title}</div>
    </div>
    <div class="subject-header">
      <div class="subject-hero-ico" style="background:${meta.bg};color:${meta.color}">${meta.icon}</div>
      <div class="subject-hero-title">${meta.title}</div>
      <div class="subject-hero-tag">${meta.tagline}</div>
      <div class="subject-overall-prog"><div class="subject-overall-fill" style="width:${prog.pct}%"></div></div>
      <div class="subject-overall-lbl">${prog.lessonsDone}/${prog.lessonsTotal} lessons${prog.examsTotal?` · ${prog.examsDone}/${prog.examsTotal} exams passed`:''} · ${prog.pct}% complete</div>
    </div>
    <div style="padding:14px 13px 0">${modulesHTML}${noContent}</div>
    ${certHTML}
  `;
}
