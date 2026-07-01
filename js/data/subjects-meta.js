// Catalog metadata for every subject — available ones have full content files
// under js/data/<id>.js; everything else is auto-stubbed as "coming soon"
// by js/data/placeholders.js.
const SUBJECT_META = [
  // ── LAUNCH SUBJECTS (fully authored) ──────────────────
  { id:'law', title:'Law', icon:'⚖️', tagline:'Think like a lawyer — contracts, torts, and the Constitution.',
    category:'law-government', status:'available',
    color:'var(--gold)', bg:'rgba(201,150,58,.1)', border:'rgba(201,150,58,.25)' },
  { id:'sales', title:'Sales', icon:'🤝', tagline:'Persuasion, negotiation, and closing deals that stick.',
    category:'business', status:'available',
    color:'var(--green)', bg:'rgba(77,184,122,.1)', border:'rgba(77,184,122,.25)' },
  { id:'aerospace-engineering', title:'Aerospace Engineering', icon:'🚀', tagline:'How rockets and aircraft actually fly.',
    category:'engineering', status:'available',
    color:'var(--blue)', bg:'rgba(91,141,217,.1)', border:'rgba(91,141,217,.25)' },
  { id:'petroleum-engineering', title:'Petroleum Engineering', icon:'🛢️', tagline:'Drilling, reservoirs, and the energy industry.',
    category:'engineering', status:'available',
    color:'var(--orange)', bg:'rgba(232,137,75,.1)', border:'rgba(232,137,75,.25)' },

  // ── COMING SOON ────────────────────────────────────────
  { id:'marketing', title:'Marketing', icon:'📣', tagline:'Brands, campaigns, and getting attention.', category:'business', status:'coming-soon' },
  { id:'entrepreneurship', title:'Entrepreneurship', icon:'💡', tagline:'Building a business from zero.', category:'business', status:'coming-soon' },
  { id:'accounting', title:'Accounting', icon:'🧾', tagline:'Balance sheets, ledgers, and financial statements.', category:'business', status:'coming-soon' },
  { id:'economics', title:'Economics', icon:'📊', tagline:'Supply, demand, and how markets behave.', category:'business', status:'coming-soon' },

  { id:'political-science', title:'Political Science', icon:'🏛️', tagline:'Power, government, and how policy gets made.', category:'law-government', status:'coming-soon' },
  { id:'public-policy', title:'Public Policy', icon:'📜', tagline:'How laws turn into real-world outcomes.', category:'law-government', status:'coming-soon' },

  { id:'mechanical-engineering', title:'Mechanical Engineering', icon:'⚙️', tagline:'Machines, motion, and mechanical design.', category:'engineering', status:'coming-soon' },
  { id:'civil-engineering', title:'Civil Engineering', icon:'🏗️', tagline:'Bridges, buildings, and infrastructure.', category:'engineering', status:'coming-soon' },
  { id:'electrical-engineering', title:'Electrical Engineering', icon:'🔌', tagline:'Circuits, power, and signals.', category:'engineering', status:'coming-soon' },

  { id:'computer-science', title:'Computer Science', icon:'💻', tagline:'Algorithms, data structures, and how software works.', category:'tech', status:'coming-soon' },
  { id:'data-science', title:'Data Science & AI', icon:'🤖', tagline:'Making sense of data with statistics and machine learning.', category:'tech', status:'coming-soon' },

  { id:'physics', title:'Physics', icon:'🔭', tagline:'The rules that govern matter and energy.', category:'science', status:'coming-soon' },
  { id:'chemistry', title:'Chemistry', icon:'🧪', tagline:'Atoms, molecules, and reactions.', category:'science', status:'coming-soon' },
  { id:'biology', title:'Biology', icon:'🧬', tagline:'Cells, genetics, and living systems.', category:'science', status:'coming-soon' },
  { id:'environmental-science', title:'Environmental Science', icon:'🌎', tagline:'Ecosystems, climate, and sustainability.', category:'science', status:'coming-soon' },

  { id:'nursing', title:'Nursing Fundamentals', icon:'🩺', tagline:'Patient care, anatomy basics, and clinical skills.', category:'health', status:'coming-soon' },
  { id:'public-health', title:'Public Health', icon:'🏥', tagline:'Disease prevention and population health.', category:'health', status:'coming-soon' },

  { id:'psychology', title:'Psychology', icon:'🧠', tagline:'Why people think and act the way they do.', category:'humanities', status:'coming-soon' },
  { id:'philosophy', title:'Philosophy', icon:'📖', tagline:'Big questions about knowledge, ethics, and existence.', category:'humanities', status:'coming-soon' },
  { id:'history', title:'History', icon:'🗿', tagline:'How the world got to be the way it is.', category:'humanities', status:'coming-soon' },

  { id:'architecture', title:'Architecture', icon:'🏛️', tagline:'Designing the buildings we live and work in.', category:'creative', status:'coming-soon' },
  { id:'graphic-design', title:'Graphic Design', icon:'🎨', tagline:'Visual communication that actually works.', category:'creative', status:'coming-soon' }
];
window.SUBJECT_META = SUBJECT_META;
