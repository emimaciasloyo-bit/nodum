// ═══════════════════════════════════════════════════════
// STATE — localStorage-backed progress, XP, streaks
// ═══════════════════════════════════════════════════════
const STORAGE_KEY = 'nodum_state_v1';
const XP_PER_LESSON = 150;
const XP_PER_EXAM = 300;
const XP_CERT_BONUS = 1000;

function defaultState(){
  return {
    version: 1,
    xp: 0,
    streak: { count: 0, lastVisit: null, history: [] },
    subjects: {},
    settings: { onboarded: false }
  };
}

function loadState(){
  let s;
  try{ s = JSON.parse(localStorage.getItem(STORAGE_KEY)); }catch(e){ s = null; }
  if(!s || typeof s !== 'object') return defaultState();
  const d = defaultState();
  return {
    version: s.version || 1,
    xp: typeof s.xp === 'number' ? s.xp : 0,
    streak: Object.assign(d.streak, s.streak || {}),
    subjects: s.subjects || {},
    settings: Object.assign(d.settings, s.settings || {})
  };
}

let S = loadState();

function saveState(){
  localStorage.setItem(STORAGE_KEY, JSON.stringify(S));
}

function getSubjectContent(id){
  return (window.SUBJECTS || []).find(s => s.id === id);
}
function getSubjectMeta(id){
  return (window.SUBJECT_META || []).find(s => s.id === id);
}

function ensureSubjectState(id){
  if(!S.subjects[id]){
    S.subjects[id] = { lessonsDone: {}, examsDone: {}, certified: false, certifiedAt: null };
  }
  return S.subjects[id];
}

function addXP(n){
  S.xp += n;
  saveState();
}

function isLessonDone(subjectId, lessonId){
  const st = S.subjects[subjectId];
  return !!(st && st.lessonsDone[lessonId]);
}

function markLessonDone(subjectId, lessonId){
  const st = ensureSubjectState(subjectId);
  if(st.lessonsDone[lessonId]) return false;
  st.lessonsDone[lessonId] = true;
  addXP(XP_PER_LESSON);
  checkAndCertify(subjectId);
  saveState();
  return true;
}

function getExamResult(subjectId, examId){
  const st = S.subjects[subjectId];
  return st ? st.examsDone[examId] : undefined;
}

function recordExamResult(subjectId, examId, passed, score){
  const st = ensureSubjectState(subjectId);
  const prev = st.examsDone[examId];
  st.examsDone[examId] = {
    passed: passed,
    score: score,
    attempts: (prev ? prev.attempts : 0) + 1
  };
  if(passed && !(prev && prev.passed)){
    addXP(XP_PER_EXAM);
  }
  checkAndCertify(subjectId);
  saveState();
}

// Computes lesson/module/exam totals for a subject from its content + saved state
function subjectProgress(subjectId){
  const content = getSubjectContent(subjectId);
  const st = S.subjects[subjectId];
  if(!content || !content.modules || !content.modules.length){
    return { lessonsTotal:0, lessonsDone:0, examsTotal:0, examsDone:0, pct:0, certified:false, started:false };
  }
  let lessonsTotal=0, lessonsDone=0, examsTotal=0, examsDone=0;
  content.modules.forEach(m=>{
    lessonsTotal += m.lessons.length;
    m.lessons.forEach(l=>{ if(st && st.lessonsDone[l.id]) lessonsDone++; });
    if(m.exam){
      examsTotal++;
      const r = st && st.examsDone[m.exam.id];
      if(r && r.passed) examsDone++;
    }
  });
  const totalUnits = lessonsTotal + examsTotal;
  const doneUnits = lessonsDone + examsDone;
  const pct = totalUnits ? Math.round((doneUnits/totalUnits)*100) : 0;
  return {
    lessonsTotal, lessonsDone, examsTotal, examsDone, pct,
    certified: !!(st && st.certified),
    started: doneUnits > 0
  };
}

function checkAndCertify(subjectId){
  const content = getSubjectContent(subjectId);
  const st = S.subjects[subjectId];
  if(!content || !content.modules || !content.modules.length || !st) return;
  const p = subjectProgress(subjectId);
  const allDone = p.lessonsTotal > 0 && p.lessonsDone === p.lessonsTotal && p.examsDone === p.examsTotal;
  if(allDone && !st.certified){
    st.certified = true;
    st.certifiedAt = new Date().toISOString();
    addXP(XP_CERT_BONUS);
  }
}

function totalStats(){
  let lessonsDoneCount = 0, certsCount = 0;
  Object.keys(S.subjects).forEach(id=>{
    const st = S.subjects[id];
    lessonsDoneCount += Object.keys(st.lessonsDone||{}).length;
    if(st.certified) certsCount++;
  });
  return { xp: S.xp, lessonsDoneCount, certsCount };
}

// ── STREAK ──────────────────────────────────────────────
function touchStreak(){
  const today = new Date().toDateString();
  const last = S.streak.lastVisit;
  if(last === today) return; // already counted today
  const yesterday = new Date(Date.now() - 86400000).toDateString();
  if(last === yesterday){
    S.streak.count += 1;
  }else{
    S.streak.count = 1;
  }
  S.streak.lastVisit = today;
  S.streak.history.push(today);
  if(S.streak.history.length > 60) S.streak.history = S.streak.history.slice(-60);
  saveState();
}

function resetSubject(id){
  delete S.subjects[id];
  saveState();
}

function resetAllProgress(){
  if(!confirm('Reset ALL progress, XP, and streaks? This cannot be undone.')) return;
  S = defaultState();
  saveState();
  location.reload();
}
