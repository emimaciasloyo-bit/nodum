// Fills in a content-less stub for every subject in SUBJECT_META that
// doesn't have its own authored js/data/<id>.js file. Keeps the catalog
// complete even before a subject's curriculum is written.
(function(){
  window.SUBJECTS = window.SUBJECTS || [];
  const authoredIds = window.SUBJECTS.map(s => s.id);
  (window.SUBJECT_META || []).forEach(meta => {
    if(!authoredIds.includes(meta.id)){
      window.SUBJECTS.push({ id: meta.id, modules: [] });
    }
  });
})();
