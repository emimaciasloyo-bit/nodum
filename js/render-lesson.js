// ═══════════════════════════════════════════════════════
// LESSON VIEWER + MODULE EXAM overlays
// ═══════════════════════════════════════════════════════

function closeLessonOverlay(){
  const el = document.getElementById('lesson-overlay');
  const subjectId = el ? el.dataset.subjectId : null;
  if(el) el.remove();
  if(subjectId){ renderSubjectOverlay(subjectId); renderHome(); }
}

function openLesson(subjectId, moduleId, lessonId){
  const content = getSubjectContent(subjectId);
  const meta = getSubjectMeta(subjectId);
  const mod = content.modules.find(m => m.id === moduleId);
  const lesson = mod.lessons.find(l => l.id === lessonId);
  const existing = document.getElementById('lesson-overlay');
  if(existing) existing.remove();

  const overlay = document.createElement('div');
  overlay.id = 'lesson-overlay';
  overlay.className = 'overlay';
  overlay.dataset.subjectId = subjectId;
  document.body.appendChild(overlay);

  const done = isLessonDone(subjectId, lessonId);
  const termsHTML = (lesson.keyTerms && lesson.keyTerms.length) ? `<div class="terms-box">
    <div class="terms-label">Key Terms</div>
    ${lesson.keyTerms.map(t => `<div class="term-item"><div class="term-name">${t.term}</div><div class="term-def">${t.def}</div></div>`).join('')}
  </div>` : '';

  overlay.innerHTML = `
    <div style="display:flex;align-items:center;gap:10px">
      <button class="overlay-back" onclick="closeLessonOverlay()">← Back</button>
      <div class="overlay-crumb">${meta.title} · ${mod.title}</div>
    </div>
    <div class="lesson-title">${lesson.title}</div>
    <div class="lesson-meta">${lesson.time} read${done?' · ✅ Completed':''}</div>
    <div class="lesson-body">${lesson.body}</div>
    ${termsHTML}
    <div class="quiz-box">
      <div class="quiz-q">🧠 Quick Check: ${lesson.quiz.q}</div>
      <div class="quiz-opts" id="lesson-quiz-opts">
        ${lesson.quiz.opts.map((o,i) => `<button class="qopt" id="lq-opt-${i}" onclick="answerLessonQuiz('${subjectId}','${lessonId}',${i})">${o}</button>`).join('')}
      </div>
      <div class="qfb" id="lesson-qfb"></div>
    </div>
  `;
  window.scrollTo(0,0);
}

function answerLessonQuiz(subjectId, lessonId, chosen){
  const already = document.getElementById('lq-opt-0').disabled;
  if(already) return;
  const content = getSubjectContent(subjectId);
  const lesson = content.modules.flatMap(m => m.lessons).find(l => l.id === lessonId);
  const correct = lesson.quiz.ans;
  const explain = lesson.quiz.ex;

  document.querySelectorAll('#lesson-quiz-opts .qopt').forEach((btn, i) => {
    btn.disabled = true;
    if(i === correct) btn.classList.add('correct');
    else if(i === chosen) btn.classList.add('wrong');
  });
  const fb = document.getElementById('lesson-qfb');
  fb.textContent = (chosen === correct ? '✅ Correct! ' : '❌ Not quite. ') + explain;
  fb.className = 'qfb show ' + (chosen === correct ? 'ok' : 'bad');

  const wasDone = isLessonDone(subjectId, lessonId);
  markLessonDone(subjectId, lessonId);
  renderHome();
  if(!wasDone){
    const metaEl = document.querySelector('#lesson-overlay .lesson-meta');
    if(metaEl && !metaEl.textContent.includes('Completed')) metaEl.textContent += ' · ✅ Completed';
  }
}

// ── MODULE EXAM ──────────────────────────────────────────
let examSession = null;

function openExam(subjectId, moduleId){
  const content = getSubjectContent(subjectId);
  const mod = content.modules.find(m => m.id === moduleId);
  examSession = { subjectId, moduleId, exam: mod.exam, idx: 0, correctCount: 0, answered: false };
  const existing = document.getElementById('lesson-overlay');
  if(existing) existing.remove();
  const overlay = document.createElement('div');
  overlay.id = 'lesson-overlay';
  overlay.className = 'overlay';
  overlay.dataset.subjectId = subjectId;
  document.body.appendChild(overlay);
  renderExamQuestion();
  window.scrollTo(0,0);
}

function renderExamQuestion(){
  const overlay = document.getElementById('lesson-overlay');
  if(!overlay || !examSession) return;
  const meta = getSubjectMeta(examSession.subjectId);
  const { exam, idx } = examSession;
  const q = exam.questions[idx];
  const pct = Math.round((idx / exam.questions.length) * 100);

  overlay.innerHTML = `
    <div style="display:flex;align-items:center;gap:10px">
      <button class="overlay-back" onclick="closeExamOverlay()">← Back</button>
      <div class="overlay-crumb">${meta.title} · ${exam.title}</div>
    </div>
    <div class="lesson-title" style="font-size:18px">${exam.title}</div>
    <div class="exam-qcount">Question ${idx+1} of ${exam.questions.length}</div>
    <div class="exam-prog"><div class="exam-prog-fill" style="width:${pct}%"></div></div>
    <div class="quiz-box">
      <div class="quiz-q">${q.q}</div>
      <div class="quiz-opts" id="exam-quiz-opts">
        ${q.opts.map((o,i) => `<button class="qopt" id="eq-opt-${i}" onclick="answerExamQuestion(${i})">${o}</button>`).join('')}
      </div>
      <div class="qfb" id="exam-qfb"></div>
      <div id="exam-next-wrap"></div>
    </div>
  `;
  window.scrollTo(0,0);
}

function answerExamQuestion(chosen){
  if(!examSession || examSession.answered) return;
  examSession.answered = true;
  const { exam, idx } = examSession;
  const q = exam.questions[idx];
  const correct = chosen === q.ans;
  if(correct) examSession.correctCount++;

  document.querySelectorAll('#exam-quiz-opts .qopt').forEach((btn, i) => {
    btn.disabled = true;
    if(i === q.ans) btn.classList.add('correct');
    else if(i === chosen) btn.classList.add('wrong');
  });
  const fb = document.getElementById('exam-qfb');
  fb.textContent = (correct ? '✅ Correct! ' : '❌ Not quite. ') + q.ex;
  fb.className = 'qfb show ' + (correct ? 'ok' : 'bad');

  const isLast = idx === exam.questions.length - 1;
  document.getElementById('exam-next-wrap').innerHTML =
    `<button class="btn bfull lesson-continue" onclick="${isLast ? 'finishExam()' : 'nextExamQuestion()'}">${isLast ? 'See Results' : 'Next Question →'}</button>`;
}

function nextExamQuestion(){
  if(!examSession) return;
  examSession.idx++;
  examSession.answered = false;
  renderExamQuestion();
}

function finishExam(){
  if(!examSession) return;
  const overlay = document.getElementById('lesson-overlay');
  const meta = getSubjectMeta(examSession.subjectId);
  const { exam, correctCount, subjectId, moduleId } = examSession;
  const total = exam.questions.length;
  const score = correctCount / total;
  const passed = score >= exam.passScore;
  recordExamResult(subjectId, exam.id, passed, score);
  renderHome();

  overlay.innerHTML = `
    <div style="display:flex;align-items:center;gap:10px">
      <button class="overlay-back" onclick="closeExamOverlay()">← Back</button>
      <div class="overlay-crumb">${meta.title} · ${exam.title}</div>
    </div>
    <div class="exam-result ${passed?'':'fail'}">
      <div class="exam-score">${Math.round(score*100)}%</div>
      <div class="exam-verdict">${passed ? `🎉 Passed! You got ${correctCount}/${total} correct.` : `You got ${correctCount}/${total} correct — you need ${Math.round(exam.passScore*100)}% to pass.`}</div>
      ${passed ? `<div style="font-size:12px;color:var(--muted);margin-bottom:14px">+${XP_PER_EXAM} XP earned</div>` : ''}
      <button class="btn ${passed?'':'bfull'}" onclick="${passed ? 'closeExamOverlay()' : `retakeExam('${subjectId}','${moduleId}')`}">${passed ? 'Back to Module' : 'Retake Exam'}</button>
    </div>
  `;
}

function retakeExam(subjectId, moduleId){
  openExam(subjectId, moduleId);
}

function closeExamOverlay(){
  const el = document.getElementById('lesson-overlay');
  const subjectId = examSession ? examSession.subjectId : (el ? el.dataset.subjectId : null);
  examSession = null;
  if(el) el.remove();
  if(subjectId){ renderSubjectOverlay(subjectId); renderHome(); }
}
