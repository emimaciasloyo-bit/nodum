window.SUBJECTS = window.SUBJECTS || [];
window.SUBJECTS.push({
  id: 'law',
  modules: [
    // ══════════════════════════════════════════════════
    // MODULE 1 — Foundations of the Legal System
    // ══════════════════════════════════════════════════
    {
      id: 'law_m1',
      title: 'Foundations of the Legal System',
      summary: 'What law is, where it comes from, and how courts are organized.',
      lessons: [
        {
          id: 'law_m1_l1', title: 'What Is Law, Really?', time: '6 min',
          body: `<p>Law is society's set of enforceable rules for resolving disputes and keeping people from harming each other. It's different from morality — something can be legal but widely seen as unethical, and something can be illegal even if many people think it shouldn't be. What makes law distinct is that it's backed by the power of the state: courts can order you to pay money, go to prison, or stop doing something, and that order can be enforced with police power if necessary.</p>
          <p>Legal systems exist to do a few core jobs: resolve disputes peacefully instead of through violence or revenge, protect individual rights, provide predictability so people and businesses can plan their lives, and set boundaries on what government itself is allowed to do. That last function is easy to overlook, but it's central — in a system built on the "rule of law," even the people running the government are bound by the same legal rules as everyone else.</p>
          <p>Every legal system also has to balance two competing goals: consistency (treating similar cases the same way, so the law feels fair and predictable) and flexibility (adapting to new situations, technology, and social change). Almost every debate you'll see about "judicial activism" or "strict construction" is really a debate about where to draw that line.</p>
          <p>As you go through this course, you'll notice law isn't one single thing — it's really an interconnected set of systems: constitutional law limits government, criminal law defines and punishes offenses against society, contract law governs voluntary agreements, and tort law compensates people harmed by others' conduct. Understanding how these systems relate to each other is the real foundation of thinking like a lawyer.</p>`,
          keyTerms: [
            { term:'Rule of Law', def:'The principle that everyone, including government officials, is subject to and accountable under the law.' },
            { term:'Jurisdiction', def:"A court's legal authority to hear and decide a case." },
            { term:'Precedent', def:'A previous court decision that guides how similar future cases should be decided.' }
          ],
          quiz: { q:'What best distinguishes "law" from a purely moral or social rule?', opts:['Law is always fair','Law is enforceable by the power of the state','Law never changes','Law only applies to individuals, not government'], ans:1,
            ex:'Law is defined by its enforceability — courts and government can compel compliance, which is what separates it from moral norms or customs.' }
        },
        {
          id: 'law_m1_l2', title: 'Common Law vs. Civil Law Systems', time: '6 min',
          body: `<p>Around the world, most legal systems fall into one of two major traditions. The <strong>common law</strong> tradition — used in the U.S., U.K., Canada, and Australia — relies heavily on judicial decisions. When a court decides a case, that decision becomes precedent: future courts facing similar facts are expected to follow it under a doctrine called <em>stare decisis</em> ("to stand by things decided"). Law develops case by case, building up over centuries like layers of sediment.</p>
          <p>The <strong>civil law</strong> tradition — used across most of Europe, Latin America, and Asia — instead centers on comprehensive written codes. Judges in civil law countries primarily apply the code to the facts in front of them; prior court decisions are persuasive but not strictly binding the way precedent is in common law countries. France's Napoleonic Code and Germany's Bürgerliches Gesetzbuch are classic examples of this codified approach.</p>
          <p>In practice, the line has blurred. The U.S., a common law country, still relies on huge statutory codes passed by Congress and state legislatures. And many civil law countries pay close attention to how courts have interpreted their codes in prior cases, even if it's not technically binding. Still, the underlying philosophy differs: common law trusts judges to develop the law incrementally through reasoning by analogy to past cases; civil law trusts legislators to anticipate situations in advance and write comprehensive rules.</p>
          <p>Why does this matter to you? Because it shapes how legal arguments actually get made. In a common law course — and in most U.S. law practice — you'll spend enormous energy comparing your case's facts to the facts of prior decided cases, arguing that yours is "just like" a case that came out in your favor, or "different from" one that didn't.</p>`,
          keyTerms: [
            { term:'Stare Decisis', def:"Latin for 'to stand by things decided' — the principle that courts should follow precedent." },
            { term:'Common Law', def:'A legal system built primarily from accumulated judicial decisions rather than a single comprehensive code.' },
            { term:'Civil Law (system)', def:'A legal system based on comprehensive written codes, common outside English-speaking countries.' }
          ],
          quiz: { q:'In a common law system like the U.S., what role does a prior court decision (precedent) play?', opts:['It is purely advisory and can be ignored','It is generally binding on future similar cases','It only applies to the same two parties','It applies only in criminal cases'], ans:1,
            ex:'Under stare decisis, courts are expected to follow precedent set by prior decisions—especially from higher courts in the same jurisdiction.' }
        },
        {
          id: 'law_m1_l3', title: 'How Courts Are Structured', time: '6 min',
          body: `<p>The U.S. actually runs 51+ separate court systems at once: one federal system and one for each state (plus D.C. and territories). Each has its own trial courts, appeals courts, and a supreme court at the top. Which system handles your case depends on jurisdiction — federal courts generally hear cases involving federal law, disputes between states, or lawsuits between citizens of different states above a certain dollar amount; state courts handle everything else, which is actually the overwhelming majority of legal disputes in America, from divorces to most crimes to most contract disputes.</p>
          <p>Within each system, there are typically three levels. <strong>Trial courts</strong> are where cases begin: evidence gets presented, witnesses testify, and a judge or jury determines the facts and applies the law. <strong>Appellate (appeals) courts</strong> don't re-try the case or hear new evidence — they review whether the trial court made legal errors, reading briefs and hearing oral arguments from lawyers. <strong>Supreme courts</strong> (the U.S. Supreme Court federally, and each state's highest court) sit at the very top, and usually have discretion over which cases they even take.</p>
          <p>Getting a case in front of the U.S. Supreme Court is rare — it receives roughly 7,000-8,000 petitions a year and typically hears fewer than 100. It grants a petition ("writ of certiorari") mainly when lower federal appeals courts disagree with each other on a legal question, or when an issue has enormous national importance.</p>
          <p>One more distinction matters: courts of <strong>general jurisdiction</strong> can hear almost any type of case, while courts of <strong>limited jurisdiction</strong> — like small claims court, family court, or bankruptcy court — are restricted to specific subject matter. Understanding which court has authority over your dispute is often the very first legal question a lawyer has to answer.</p>`,
          keyTerms: [
            { term:'Trial Court', def:'The court where a case is first heard, evidence is presented, and facts are determined.' },
            { term:'Appellate Court', def:'A court that reviews trial court decisions for legal errors, without retrying the facts.' },
            { term:'Writ of Certiorari', def:'A formal request asking a higher court, especially the Supreme Court, to review a lower court decision.' }
          ],
          quiz: { q:'What is the primary role of an appellate court?', opts:['To hear new evidence and re-try the case','To review the trial court for legal errors','To decide only criminal cases','To create new statutes'], ans:1,
            ex:'Appellate courts review the trial record for legal mistakes—they do not re-hear witnesses or accept new evidence.' }
        },
        {
          id: 'law_m1_l4', title: 'Where Law Comes From', time: '5 min',
          body: `<p>When lawyers talk about "the law," they usually mean one of four sources, layered like a pyramid. At the top sits the <strong>constitution</strong> — the foundational document that creates the government, distributes power between its branches, and limits what government can do to individuals. Any law that conflicts with the constitution can be struck down by courts.</p>
          <p>Below that are <strong>statutes</strong> — laws passed by a legislature (Congress at the federal level, state legislatures at the state level). Statutes are how democratically elected bodies make policy: tax rates, criminal penalties, environmental rules, and so on.</p>
          <p>Then come <strong>regulations</strong> — detailed rules written by administrative agencies (like the EPA, FDA, or SEC) that Congress has authorized to fill in the technical details statutes don't spell out. A statute might say "protect air quality"; an agency regulation specifies exactly how many parts per million of a pollutant are allowed.</p>
          <p>Finally there's <strong>case law</strong> (also called common law or judge-made law) — the accumulated body of court decisions interpreting the constitution, statutes, and regulations, and filling gaps where none of them speak directly to a situation. In areas like contract and tort law, case law has historically done most of the heavy lifting, since many of these rules developed centuries before comprehensive statutes existed.</p>
          <p>When these sources conflict, there's a clear hierarchy: constitutional provisions beat statutes, statutes beat regulations, and federal law generally beats conflicting state law under the Constitution's Supremacy Clause. Learning to identify which source of law actually governs a given question — and how they interact — is one of the very first skills taught in law school.</p>`,
          keyTerms: [
            { term:'Statute', def:'A law formally enacted by a legislature.' },
            { term:'Regulation', def:'A detailed rule created by a government agency under authority granted by a statute.' },
            { term:'Supremacy Clause', def:'The constitutional provision establishing that federal law generally overrides conflicting state law.' }
          ],
          quiz: { q:'If a federal statute and a state law directly conflict, which one generally controls?', opts:['Whichever was passed first','The state law, because states have primary authority','The federal law, under the Supremacy Clause','Neither — courts must ignore both'], ans:2,
            ex:"The Constitution's Supremacy Clause makes valid federal law supreme over conflicting state law." }
        },
        {
          id: 'law_m1_l5', title: 'How a Case Moves Through the Courts', time: '6 min',
          body: `<p>A civil lawsuit follows a fairly predictable path. It begins when the <strong>plaintiff</strong> files a <strong>complaint</strong> — a document laying out the facts and legal claims against the <strong>defendant</strong>. The defendant then files an <strong>answer</strong>, responding to each allegation and often raising defenses.</p>
          <p>Next comes <strong>discovery</strong>, often the longest phase of a lawsuit. Both sides exchange documents, answer written questions (interrogatories), and take sworn out-of-court testimony (depositions). Discovery exists so neither side is ambushed at trial — in the American system, surprises are supposed to happen during preparation, not in the courtroom.</p>
          <p>Along the way, either side can file <strong>motions</strong> asking the judge to rule on something before trial. A common one is a <strong>motion for summary judgment</strong>, which argues that even taking all the facts in the light most favorable to the other side, there's no real dispute left to try — the judge can just decide the legal question and skip a trial entirely. Most cases that survive this stage settle before ever reaching a jury; only a small percentage of filed lawsuits actually go to trial.</p>
          <p>If the case does go to <strong>trial</strong>, each side presents evidence and witnesses, and either a judge (a "bench trial") or a jury decides the facts and applies the law as instructed by the judge. Afterward, the losing side can <strong>appeal</strong> — but only on the grounds that the trial court made a legal error, not simply because they disagree with who won. This entire structure exists to balance thoroughness against efficiency: enough process to be fair, without requiring every dispute to go through a full trial.</p>`,
          keyTerms: [
            { term:'Complaint', def:'The document that starts a lawsuit, stating the plaintiff\'s claims against the defendant.' },
            { term:'Discovery', def:'The pre-trial phase where both sides exchange evidence and information.' },
            { term:'Summary Judgment', def:'A ruling deciding a case (or part of it) without trial because there is no genuine factual dispute.' }
          ],
          quiz: { q:'What is the main purpose of the discovery phase in a lawsuit?', opts:['To let the jury see the evidence for the first time','To allow both sides to exchange evidence and avoid trial surprises','To announce the final verdict','To appeal the trial court\'s ruling'], ans:1,
            ex:'Discovery lets both sides gather and exchange information before trial, so neither side is ambushed by surprise evidence in the courtroom.' }
        }
      ],
      exam: {
        id: 'law_m1_exam', title: 'Module 1 Exam: Foundations of the Legal System', passScore: 0.7,
        questions: [
          { q:'What makes a rule "law" rather than just a moral guideline?', opts:['It is written down somewhere','It is enforceable by government power','Everyone agrees with it','It has existed for a long time'], ans:1, ex:'Enforceability by the state is what separates legal rules from purely moral or social ones.' },
          { q:'Under stare decisis, what is a common law court generally expected to do?', opts:['Ignore all past decisions','Follow relevant precedent from prior similar cases','Only follow statutes, never case law','Decide each case with no regard for others'], ans:1, ex:'Stare decisis obligates courts to follow binding precedent from earlier similar cases.' },
          { q:'Which legal tradition relies primarily on comprehensive written codes rather than case-by-case judicial precedent?', opts:['Common law','Civil law','Tribal law','Religious law'], ans:1, ex:'Civil law systems, used across much of Europe and Latin America, are built around comprehensive codes.' },
          { q:'What do trial courts primarily do that appellate courts do not?', opts:['Interpret the constitution','Determine facts by hearing evidence and witnesses','Issue written opinions','Have judges'], ans:1, ex:'Trial courts hear evidence and determine facts; appellate courts review for legal error without retrying facts.' },
          { q:'Roughly how many cases does the U.S. Supreme Court hear out of the thousands of petitions it receives each year?', opts:['Nearly all of them','About half','Fewer than 100','Exactly 1,000'], ans:2, ex:'The Supreme Court exercises discretion and hears fewer than 100 of the several thousand petitions filed annually.' },
          { q:'In the hierarchy of legal authority, which of these generally sits at the very top?', opts:['Agency regulations','Statutes','The constitution','Local ordinances'], ans:2, ex:'The constitution is the supreme foundational law; statutes and regulations must conform to it.' },
          { q:'What is the main purpose of a motion for summary judgment?', opts:['To request a jury trial','To ask the judge to decide the case without trial because there is no real factual dispute','To appeal a final verdict','To begin the discovery process'], ans:1, ex:'Summary judgment lets a judge resolve a case on the law alone when the material facts are not genuinely disputed.' },
          { q:'What can a losing party generally appeal on?', opts:['Simple disagreement with the outcome','An alleged legal error made during the case','Any reason at all','Only sentencing in criminal cases'], ans:1, ex:'Appeals must be grounded in an alleged legal error, not mere dissatisfaction with who won.' }
        ]
      }
    },

    // ══════════════════════════════════════════════════
    // MODULE 2 — Constitutional Law
    // ══════════════════════════════════════════════════
    {
      id: 'law_m2',
      title: 'Constitutional Law',
      summary: 'How the Constitution structures government and protects individual rights.',
      lessons: [
        {
          id: 'law_m2_l1', title: 'The Structure of the U.S. Constitution', time: '6 min',
          body: `<p>The U.S. Constitution is a remarkably short document — about 4,500 words in its original text — but it does an enormous amount of structural work. The first three articles create the three branches of the federal government: Article I creates Congress (the legislative branch) and lists its powers; Article II creates the presidency (the executive branch); Article III creates the federal judiciary, including the Supreme Court.</p>
          <p>Articles IV through VII cover the relationship between states, the amendment process, and the Constitution's status as "supreme law of the land." Then come the amendments — 27 in total. The first ten, ratified together in 1791, are the <strong>Bill of Rights</strong>, protecting individual liberties like speech, religion, and due process. Later amendments abolished slavery (13th), guaranteed equal protection and due process against the states (14th), extended voting rights across race (15th) and sex (19th), and made other structural changes.</p>
          <p>A crucial design choice runs through the whole document: the framers deliberately built in friction. Passing a federal law requires both chambers of Congress to agree and the President to sign it (or a legislative override of a veto). This wasn't an accident — the framers, having just escaped a monarchy, were more worried about concentrated power than about government being slow.</p>
          <p>It's also worth remembering the Constitution is a "living" document only in the sense that it can be amended (through a deliberately difficult process) and that courts continuously interpret its open-ended language — phrases like "due process," "equal protection," and "unreasonable searches" don't define themselves. Much of constitutional law is really the ongoing project of applying 18th- and 19th-century text to 21st-century facts.</p>`,
          keyTerms: [
            { term:'Bill of Rights', def:'The first ten amendments to the Constitution, protecting fundamental individual liberties.' },
            { term:'Article I, II, III', def:'The three articles creating Congress, the Presidency, and the federal courts, respectively.' },
            { term:'Amendment', def:'A formal change or addition to the Constitution, requiring supermajority approval.' }
          ],
          quiz: { q:'Which part of the Constitution created the federal judiciary, including the Supreme Court?', opts:['Article I','Article II','Article III','The Bill of Rights'], ans:2,
            ex:'Article III of the Constitution establishes the federal judicial branch and the Supreme Court.' }
        },
        {
          id: 'law_m2_l2', title: 'Separation of Powers & Checks and Balances', time: '6 min',
          body: `<p>The Constitution splits federal power across three branches: Congress makes laws, the President enforces them, and the courts interpret them. This is <strong>separation of powers</strong>. But the framers went a step further, giving each branch tools to limit the others — a system called <strong>checks and balances</strong>.</p>
          <p>Congress can pass laws, but the President can veto them (Congress can then override with a two-thirds vote in both chambers). The President appoints federal judges and top officials, but the Senate must confirm them. Congress controls federal spending — the "power of the purse" — which constrains what the executive branch can actually do, no matter what a law authorizes. And courts can strike down laws or executive actions that violate the Constitution, a power established in <em>Marbury v. Madison</em> (covered in the next lesson).</p>
          <p>This design reflects a specific worry: that any single branch, left unchecked, would accumulate too much power. James Madison wrote in Federalist No. 51 that "ambition must be made to counteract ambition" — the system assumes officials will be self-interested and tries to channel that self-interest so branches police each other rather than needing citizens to trust anyone's good intentions.</p>
          <p>In practice, this creates constant tension, especially between Congress and the President over issues like war powers, executive orders, and emergency authority. When the President acts and Congress hasn't spoken, or has explicitly authorized the action, courts tend to give the executive branch more latitude. When the President acts against Congress's expressed will, courts are far more skeptical — a framework largely drawn from Justice Jackson's influential concurrence in the 1952 <em>Youngstown Sheet & Tube</em> steel seizure case.</p>`,
          keyTerms: [
            { term:'Separation of Powers', def:'Dividing government authority among legislative, executive, and judicial branches.' },
            { term:'Checks and Balances', def:'Mechanisms allowing each branch to limit the powers of the others.' },
            { term:'Veto', def:"The President's power to reject a bill passed by Congress, subject to a congressional override." }
          ],
          quiz: { q:'What is the main purpose of "checks and balances" in the U.S. constitutional system?', opts:['To speed up lawmaking','To let one branch dominate the others','To let each branch limit the power of the others','To eliminate the judiciary'], ans:2,
            ex:'Checks and balances give each branch tools to restrain the others, preventing any single branch from accumulating unchecked power.' }
        },
        {
          id: 'law_m2_l3', title: 'Federalism — State vs. Federal Power', time: '6 min',
          body: `<p><strong>Federalism</strong> is the division of power between the national government and the states. Unlike a purely unitary system (where a central government holds all real power) or a loose confederation (where states hold almost all power), the U.S. splits sovereignty: both the federal government and state governments can pass laws, tax, and regulate — sometimes over the very same subject matter.</p>
          <p>The federal government only has the powers the Constitution actually gives it — called <strong>enumerated powers</strong> — like regulating interstate commerce, coining money, and declaring war. The <strong>Tenth Amendment</strong> reserves everything else to the states or the people. In practice, though, the federal government's power has grown enormously over the past century, largely through a broad reading of the <strong>Commerce Clause</strong>, which lets Congress regulate activity that substantially affects interstate commerce — which turns out to cover an enormous range of economic activity.</p>
          <p>States retain broad "police power" — the general authority to regulate for public health, safety, welfare, and morals. This is why most criminal law, family law, contract law, and property law in America is actually state law, not federal law, even though federal criminal and commercial statutes exist too.</p>
          <p>Federalism creates real friction points: can a state legalize something (like marijuana) that federal law still bans? Can the federal government require states to enforce federal programs? These questions get resolved through doctrines like preemption (federal law overriding conflicting state law) and anti-commandeering (the federal government generally can't force state governments to enact or enforce federal regulatory programs). Understanding federalism explains why the same conduct can be legal in one state and a crime in the next, and why some fights over policy happen state-by-state instead of just once in Washington.</p>`,
          keyTerms: [
            { term:'Federalism', def:'A system dividing governmental power between a national government and constituent states.' },
            { term:'Enumerated Powers', def:'Specific powers the Constitution explicitly grants to the federal government.' },
            { term:'Commerce Clause', def:"The constitutional provision letting Congress regulate interstate commerce, broadly interpreted today." }
          ],
          quiz: { q:'What does the Tenth Amendment do?', opts:['Grants Congress unlimited power','Reserves powers not given to the federal government to the states or people','Abolishes state governments','Creates the Supreme Court'], ans:1,
            ex:'The Tenth Amendment reserves all powers not delegated to the federal government to the states or the people.' }
        },
        {
          id: 'law_m2_l4', title: 'The Bill of Rights: An Overview', time: '6 min',
          body: `<p>The Bill of Rights protects individuals from government overreach. The <strong>First Amendment</strong> protects speech, press, religion, assembly, and petition — the government generally can't punish you for what you say or believe, with narrow exceptions like true threats or incitement to imminent violence. The <strong>Second Amendment</strong> protects an individual right to keep and bear arms, subject to regulation the courts are still actively defining.</p>
          <p>The <strong>Fourth Amendment</strong> protects against unreasonable searches and seizures, generally requiring police to get a warrant based on probable cause before searching your home or property (with numerous exceptions). The <strong>Fifth Amendment</strong> guarantees due process, protects against self-incrimination (the right to "plead the fifth"), and bars double jeopardy — being tried twice for the same crime. The <strong>Sixth Amendment</strong> guarantees criminal defendants a speedy public trial, an impartial jury, and the right to an attorney. The <strong>Eighth Amendment</strong> bans excessive bail, excessive fines, and cruel and unusual punishment.</p>
          <p>Originally, the Bill of Rights only restrained the federal government — it said nothing about what state governments could do to their own citizens. That changed gradually after the Civil War through a process called <strong>incorporation</strong>: courts have interpreted the Fourteenth Amendment's Due Process Clause as applying most of the Bill of Rights' protections against the states too. This is why a state police officer, not just an FBI agent, has to respect your Fourth Amendment rights today.</p>
          <p>None of these rights are absolute. Free speech doesn't protect defamation or true threats. The right to bear arms doesn't guarantee a right to any weapon in any place. Courts are constantly drawing lines about how far each right extends and what government interests can justify limiting it — this line-drawing is most of what constitutional litigation over individual rights actually is.</p>`,
          keyTerms: [
            { term:'Due Process', def:'The constitutional guarantee of fair legal procedures before government deprives someone of life, liberty, or property.' },
            { term:'Incorporation', def:'The doctrine applying most Bill of Rights protections against state (not just federal) governments via the 14th Amendment.' },
            { term:'Double Jeopardy', def:'The Fifth Amendment protection against being tried twice for the same crime.' }
          ],
          quiz: { q:'What did the doctrine of "incorporation" accomplish?', opts:['It abolished the Bill of Rights','It applied most Bill of Rights protections against state governments','It gave Congress more power','It eliminated the need for juries'], ans:1,
            ex:'Incorporation, via the 14th Amendment, extended most Bill of Rights protections to apply against state governments, not just the federal government.' }
        },
        {
          id: 'law_m2_l5', title: 'Judicial Review and Marbury v. Madison', time: '6 min',
          body: `<p><strong>Judicial review</strong> is the power of courts to declare a law or government action unconstitutional and therefore void. It's one of the most important powers in American government — and notably, it's not spelled out explicitly anywhere in the Constitution's text. Courts established it themselves.</p>
          <p>The landmark case is <em>Marbury v. Madison</em> (1803). In the chaotic final days of John Adams's presidency, he appointed a batch of judges whose commissions weren't delivered before Thomas Jefferson took office. Jefferson's administration refused to deliver them. William Marbury, one of the appointees, sued directly in the Supreme Court, relying on a federal statute that seemed to give the Court authority to hear such cases directly.</p>
          <p>Chief Justice John Marshall wrote a masterful opinion. He agreed Marbury had a right to his commission — but held that the statute Marbury relied on was unconstitutional, because it expanded the Supreme Court's power beyond what Article III allowed. In doing so, Marshall established a monumental principle almost as an aside: courts have the authority — and the duty — to strike down laws that conflict with the Constitution. "It is emphatically the province and duty of the judicial department to say what the law is," he wrote.</p>
          <p>This was a shrewd move politically as well as legally: Marshall gave Jefferson's administration the immediate outcome it wanted (no order compelling delivery of the commission) while permanently expanding the judiciary's institutional power. Today, judicial review means the Supreme Court and lower federal courts can — and regularly do — strike down federal statutes, state laws, and executive actions that violate the Constitution, making the judiciary a genuine check on the other two branches, not just an interpreter of ordinary statutes.</p>`,
          keyTerms: [
            { term:'Judicial Review', def:'The power of courts to declare laws or government actions unconstitutional.' },
            { term:'Marbury v. Madison', def:'The 1803 Supreme Court case that established the principle of judicial review.' },
            { term:'Chief Justice John Marshall', def:"The Supreme Court's fourth Chief Justice, whose opinion in Marbury established judicial review." }
          ],
          quiz: { q:'What key principle did Marbury v. Madison establish?', opts:['The right to a jury trial','Judicial review — courts can strike down unconstitutional laws','Presidential immunity','The right to bear arms'], ans:1,
            ex:'Marbury v. Madison established that federal courts have the power to declare laws unconstitutional and void.' }
        }
      ],
      exam: {
        id: 'law_m2_exam', title: 'Module 2 Exam: Constitutional Law', passScore: 0.7,
        questions: [
          { q:'Which article of the Constitution creates Congress?', opts:['Article I','Article II','Article III','Article IV'], ans:0, ex:'Article I establishes the legislative branch, Congress.' },
          { q:'What is the purpose of checks and balances?', opts:['To let the President act alone','To allow each branch to limit the others\' power','To eliminate the courts','To combine all three branches'], ans:1, ex:'Checks and balances let each branch restrain the others, preventing concentrated power.' },
          { q:'What does federalism divide?', opts:['Power between political parties','Power between national and state governments','Power between courts and juries','Power between voters and non-voters'], ans:1, ex:'Federalism splits governmental authority between the national government and the states.' },
          { q:'What does the Commerce Clause allow Congress to do?', opts:['Regulate religion','Regulate activity substantially affecting interstate commerce','Appoint judges','Declare martial law'], ans:1, ex:'The Commerce Clause has been broadly interpreted to let Congress regulate a wide range of economically significant activity.' },
          { q:'The right to remain silent and avoid self-incrimination comes from which amendment?', opts:['First','Fourth','Fifth','Eighth'], ans:2, ex:'The Fifth Amendment protects against compelled self-incrimination.' },
          { q:'What did the incorporation doctrine do?', opts:['Abolish the Bill of Rights','Apply most Bill of Rights protections to the states','Give states more power than the federal government','Create the Supreme Court'], ans:1, ex:'Incorporation applied most Bill of Rights guarantees against state governments via the 14th Amendment.' },
          { q:'What landmark case established judicial review?', opts:['Roe v. Wade','Marbury v. Madison','Brown v. Board of Education','Miranda v. Arizona'], ans:1, ex:'Marbury v. Madison (1803) established that courts can strike down unconstitutional laws.' },
          { q:'Which amendment protects against unreasonable searches and seizures?', opts:['Second','Fourth','Sixth','Eighth'], ans:1, ex:'The Fourth Amendment protects against unreasonable government searches and seizures.' }
        ]
      }
    },

    // ══════════════════════════════════════════════════
    // MODULE 3 — Contracts
    // ══════════════════════════════════════════════════
    {
      id: 'law_m3',
      title: 'Contracts',
      summary: 'What makes an agreement legally binding, and what happens when it breaks down.',
      lessons: [
        {
          id: 'law_m3_l1', title: 'What Makes a Contract Valid', time: '6 min',
          body: `<p>A contract is simply a legally enforceable promise. Not every promise is a contract, though — courts require three core ingredients before they'll enforce one. First, an <strong>offer</strong>: one party proposes specific terms with the intent to be bound if accepted ("I'll sell you my car for $4,000"). Vague statements, invitations to negotiate, or advertisements are usually not offers — they're invitations for the other side to make an offer.</p>
          <p>Second, <strong>acceptance</strong>: the other party agrees to those exact terms. This is where the "mirror image rule" comes in for traditional contract law — an acceptance that changes the terms is actually a counteroffer, not an acceptance, and it's the original offeror's turn to accept or reject it. (Commercial sales of goods relax this rule somewhat under the Uniform Commercial Code.)</p>
          <p>Third, and most distinctly legal, is <strong>consideration</strong> — something of value exchanged by each side. Consideration is what separates an enforceable contract from a gratuitous promise. If your neighbor says "I'll give you my old lawnmower next week" and then changes their mind, you generally can't sue — there was no consideration flowing from you. But if you agreed to pay $50 for it, that mutual exchange of value makes it enforceable.</p>
          <p>Beyond these three elements, courts also look for <strong>mutual assent</strong> — a "meeting of the minds" showing both parties understood and agreed to the same essential terms. Contracts don't have to be written to be valid (many oral contracts are perfectly enforceable), though a rule called the <strong>Statute of Frauds</strong> requires certain categories — like contracts for the sale of land, or agreements that can't be completed within one year — to be in writing to be enforceable at all.</p>`,
          keyTerms: [
            { term:'Offer', def:'A clear proposal of terms made with the intent to be bound upon acceptance.' },
            { term:'Consideration', def:'Something of value exchanged by each party, required to make a promise legally enforceable.' },
            { term:'Statute of Frauds', def:'A rule requiring certain types of contracts to be in writing to be enforceable.' }
          ],
          quiz: { q:'What is "consideration" in contract law?', opts:['A polite way of negotiating','Something of value exchanged by each party to the agreement','A judge\'s opinion about fairness','The final signature on a document'], ans:1,
            ex:'Consideration is the bargained-for exchange of value between parties — it is what makes a promise legally binding rather than a gift.' }
        },
        {
          id: 'law_m3_l2', title: 'Capacity and Legality', time: '5 min',
          body: `<p>Even with an offer, acceptance, and consideration, a contract can still fail if it lacks <strong>capacity</strong> or <strong>legality</strong>. Capacity refers to a party's legal ability to enter a binding agreement. Minors (generally under 18) can enter contracts, but they typically have the right to <strong>disaffirm</strong> — cancel — most contracts before or shortly after turning 18, protecting young people from being locked into bad deals they weren't mature enough to fully evaluate. Similar protections apply to people who lack the mental capacity to understand what they're agreeing to, and to people who are severely intoxicated at the time of agreement.</p>
          <p>Legality is the other requirement: courts won't enforce a contract to do something illegal. An agreement to sell illegal drugs, fix prices in violation of antitrust law, or pay someone to commit a crime is void from the start — no matter how clearly both sides agreed to it, a court will simply refuse to get involved. This reflects a broader principle: courts exist to enforce the law, not to help people profit from breaking it.</p>
          <p>Public policy exceptions go further than outright illegality. Some contract terms are technically legal but so contrary to public policy that courts refuse to enforce them anyway — for example, many states won't enforce non-compete clauses that are unreasonably broad in time or geography, because they consider such restrictions harmful to workers and to competition even when both parties "agreed" to them.</p>
          <p>These doctrines all point toward a bigger idea in contract law: freedom of contract is a strong default, but it's not absolute. Courts step in to protect people who couldn't meaningfully consent (minors, the incapacitated) and to refuse enforcement of agreements that harm society at large, even between two fully capable, consenting adults.</p>`,
          keyTerms: [
            { term:'Capacity', def:'The legal ability of a party to understand and be bound by a contract.' },
            { term:'Disaffirm', def:'A minor\'s right to cancel most contracts before or shortly after reaching adulthood.' },
            { term:'Void Contract', def:'An agreement that is unenforceable from the start, often due to illegality.' }
          ],
          quiz: { q:'Why can a minor typically disaffirm (cancel) most contracts they enter into?', opts:['Because all contracts with minors are automatically illegal','To protect minors who may lack the maturity to evaluate agreements fully','Because minors cannot legally sign documents','Because their parents must approve every contract'], ans:1,
            ex:'The law lets minors disaffirm most contracts to protect them from being bound by agreements they may not have been mature enough to fully evaluate.' }
        },
        {
          id: 'law_m3_l3', title: 'Breach of Contract and Remedies', time: '6 min',
          body: `<p>A <strong>breach</strong> occurs when a party fails to perform what the contract required, without a legally valid excuse. Not all breaches are equal: a <strong>material breach</strong> goes to the heart of the deal and excuses the other side from performing further and lets them sue for damages, while a <strong>minor breach</strong> (sometimes called partial breach) still requires the non-breaching party to perform, though they can seek compensation for the shortfall.</p>
          <p>When a court finds a breach, the default remedy in contract law is <strong>expectation damages</strong> — money that puts the injured party in the position they'd have been in had the contract been fully performed. This is different from tort law, which often aims to restore someone to their position before the harm occurred. Contract damages instead look forward to the deal that was promised.</p>
          <p>Other remedies exist for specific situations. <strong>Consequential damages</strong> cover foreseeable losses beyond the contract price itself — for example, lost profits from a factory shutdown caused by a supplier's late delivery, if that risk was reasonably foreseeable when the contract was made. <strong>Specific performance</strong> — a court order requiring the breaching party to actually do what they promised — is reserved for situations where money damages genuinely can't fix the harm, most commonly in contracts for the sale of unique real estate, since no two parcels of land are truly identical.</p>
          <p>Injured parties also have a <strong>duty to mitigate</strong> damages — they can't just let losses pile up and then sue for the maximum possible amount. A landlord whose tenant breaks a lease, for example, generally must make reasonable efforts to re-rent the unit rather than letting it sit empty and suing the former tenant for the full remaining rent.</p>`,
          keyTerms: [
            { term:'Material Breach', def:'A serious failure to perform that undermines the core of the contract.' },
            { term:'Expectation Damages', def:'Money damages meant to put the injured party in the position they\'d be in if the contract had been performed.' },
            { term:'Specific Performance', def:'A court order requiring a party to actually perform the contract, used when money damages are inadequate.' }
          ],
          quiz: { q:'What is the default goal of contract damages?', opts:['To punish the breaching party','To put the injured party in the position they would have been in if the contract had been performed','To cancel the contract entirely','To award a fixed penalty regardless of loss'], ans:1,
            ex:'Contract law aims to give the injured party the "benefit of the bargain" through expectation damages, not to punish the breaching party.' }
        },
        {
          id: 'law_m3_l4', title: 'Contract Defenses', time: '6 min',
          body: `<p>Even when a contract looks valid on its face, a party may have a defense that makes it unenforceable. <strong>Fraud</strong> is one of the most common: if one party lied about a material fact to induce the other into the agreement, the deceived party can typically void the contract. <strong>Duress</strong> covers situations where someone was forced into an agreement through an improper threat — not just hard bargaining, but genuine coercion, like threatening physical harm or a wrongful lawsuit unless they sign.</p>
          <p><strong>Undue influence</strong> applies where one party used a position of trust or authority to unfairly pressure someone into an agreement they wouldn't otherwise have made — common in cases involving elderly or vulnerable people and caregivers or family members. <strong>Mistake</strong> can also void a contract, particularly a "mutual mistake" where both sides were wrong about the same fundamental fact — like both parties believing a painting being sold was an authentic original when it was actually a well-known forgery.</p>
          <p>Perhaps the most modern and heavily litigated defense is <strong>unconscionability</strong> — a contract (or a specific clause in it) so one-sided and unfair that enforcing it would shock the conscience of the court. Courts look at both "procedural" unconscionability (was there real bargaining power, or did one side have no meaningful choice — think of a take-it-or-leave-it form contract) and "substantive" unconscionability (are the actual terms grossly unfair). This defense has become especially important in consumer contracts, employment agreements, and arbitration clauses buried in fine print.</p>
          <p>These defenses share a common thread: contract law generally respects whatever deal parties freely negotiated, but it refuses to enforce agreements where consent was fundamentally compromised — by lies, coercion, exploited trust, shared error, or wildly lopsided bargaining power.</p>`,
          keyTerms: [
            { term:'Duress', def:'Being forced into an agreement through an improper threat or coercion.' },
            { term:'Unconscionability', def:'A defense that a contract or term is so one-sided and unfair that a court will refuse to enforce it.' },
            { term:'Mutual Mistake', def:'A shared factual error by both parties that can void a contract.' }
          ],
          quiz: { q:'Which contract defense focuses on a contract or clause being so one-sided it "shocks the conscience"?', opts:['Duress','Fraud','Unconscionability','Mutual mistake'], ans:2,
            ex:'Unconscionability targets contracts or terms that are grossly unfair, often combined with unequal bargaining power.' }
        },
        {
          id: 'law_m3_l5', title: 'Reading and Drafting a Real Contract', time: '6 min',
          body: `<p>Real-world contracts follow a fairly consistent anatomy, whether it's a freelance agreement or a corporate merger deal. They typically open with <strong>recitals</strong> — background "whereas" clauses explaining who the parties are and why they're entering the agreement — followed by the operative sections: definitions, the core obligations of each party, payment terms, and the duration of the agreement.</p>
          <p>Then come the clauses that don't describe the deal itself but instead manage risk. A <strong>representations and warranties</strong> section has each party affirm certain facts are true (e.g., "Seller represents that it owns the equipment free and clear of any liens"). An <strong>indemnification</strong> clause allocates who pays if a third party sues over something related to the contract. A <strong>limitation of liability</strong> clause caps how much one party can be forced to pay the other if something goes wrong — often limiting damages to the amount paid under the contract and excluding indirect or consequential losses.</p>
          <p>Boilerplate provisions near the end matter more than their placement suggests. A <strong>governing law</strong> clause picks which state's (or country's) law applies to any dispute. A <strong>dispute resolution</strong> clause might require arbitration instead of a court lawsuit — arbitration is generally faster and more private, but it also usually waives the right to a jury trial and to most appeals. A <strong>severability</strong> clause ensures that if one provision is later found unenforceable, the rest of the contract still stands.</p>
          <p>When actually reading a contract, the highest-value habit is to ask, for every clause: "what happens if this goes wrong, and who bears that cost?" Most contract disputes trace back to a scenario the drafters either didn't anticipate or deliberately allocated to one side — reading carefully before signing is far cheaper than litigating after the fact.</p>`,
          keyTerms: [
            { term:'Representations and Warranties', def:'Contractual statements by a party affirming certain facts are true.' },
            { term:'Indemnification', def:'A clause allocating responsibility for losses caused by third-party claims related to the contract.' },
            { term:'Arbitration Clause', def:'A provision requiring disputes to be resolved by a private arbitrator instead of in court.' }
          ],
          quiz: { q:'What does a limitation of liability clause typically do?', opts:['Guarantees unlimited damages for any breach','Caps how much one party can be required to pay if something goes wrong','Requires arbitration for all disputes','Sets the price of the contract'], ans:1,
            ex:'A limitation of liability clause caps a party\'s financial exposure, often excluding indirect or consequential damages.' }
        }
      ],
      exam: {
        id: 'law_m3_exam', title: 'Module 3 Exam: Contracts', passScore: 0.7,
        questions: [
          { q:'Which three elements are generally required for a valid contract?', opts:['Offer, acceptance, consideration','Signature, witness, notary','Money, goods, a lawyer','Offer, payment, delivery'], ans:0, ex:'Offer, acceptance, and consideration are the core building blocks of an enforceable contract.' },
          { q:'What does the Statute of Frauds require?', opts:['All contracts must be notarized','Certain categories of contracts must be in writing to be enforceable','Fraud must be proven in every contract case','Contracts must be reviewed by a judge before signing'], ans:1, ex:'The Statute of Frauds requires specific categories of contracts, like land sales, to be in writing.' },
          { q:'Why can minors typically disaffirm contracts?', opts:['Because contracts with minors are automatically void','To protect them given their limited legal maturity','Because it is illegal to contract with anyone under 21','Because parents must co-sign everything'], ans:1, ex:'Disaffirmance protects minors who may lack full maturity to evaluate contractual obligations.' },
          { q:'What is the default remedy for breach of contract?', opts:['Criminal prosecution','Expectation damages putting the injured party in the position promised','Automatic contract cancellation with no damages','Public apology'], ans:1, ex:'Expectation damages aim to give the injured party the benefit of the bargain they were promised.' },
          { q:'When is specific performance most commonly ordered?', opts:['In routine consumer purchases','When money damages cannot adequately address the harm, e.g. unique real estate','In every breach of contract case','Only in criminal cases'], ans:1, ex:'Specific performance is reserved for situations, like unique real estate, where money cannot substitute for the actual promised performance.' },
          { q:'What does the "duty to mitigate" require of an injured party?', opts:['To ignore the breach entirely','To take reasonable steps to limit their own damages','To sue immediately within 24 hours','To forgive the breaching party'], ans:1, ex:'Mitigation requires the injured party to take reasonable steps to reduce the harm rather than letting losses accumulate.' },
          { q:'Which defense involves being coerced into an agreement through improper threats?', opts:['Unconscionability','Duress','Mutual mistake','Consideration'], ans:1, ex:'Duress involves being forced into a contract via improper threats or coercion.' },
          { q:'What does an indemnification clause typically address?', opts:['Who pays if a third party brings a claim related to the contract','The price of goods sold','Which court has jurisdiction','How long the contract lasts'], ans:0, ex:'Indemnification clauses allocate responsibility for third-party claims arising from the contractual relationship.' }
        ]
      }
    },

    // ══════════════════════════════════════════════════
    // MODULE 4 — Torts
    // ══════════════════════════════════════════════════
    {
      id: 'law_m4',
      title: 'Torts',
      summary: 'Civil wrongs, negligence, and how the law compensates people who are harmed.',
      lessons: [
        {
          id: 'law_m4_l1', title: 'What Is a Tort?', time: '5 min',
          body: `<p>A <strong>tort</strong> is a civil wrong that causes harm to another person, giving the injured party the right to sue for compensation. Tort law is distinct from both criminal law and contract law, even though the same conduct can sometimes trigger all three. If someone punches you, the state might criminally prosecute them for assault (a wrong against society), while you separately could sue them civilly for the tort of battery (a wrong against you personally) to recover your medical bills and pain and suffering.</p>
          <p>Tort law is also different from contract law in an important way: contract obligations arise because parties agreed to them, while tort obligations are imposed by law regardless of any agreement. You don't need a contract with a stranger to sue them for carelessly running you over with their car — the duty not to injure others through unreasonable conduct exists independent of any deal between you.</p>
          <p>Tort law generally falls into three broad categories. <strong>Intentional torts</strong> require that the defendant meant to do the act that caused harm (like battery or defamation). <strong>Negligence</strong> — by far the most common category — involves careless conduct that falls below a reasonable standard of care, without any intent to cause harm. <strong>Strict liability</strong> torts hold a defendant responsible regardless of fault or intent, usually because the activity itself (like keeping a dangerous wild animal, or manufacturing a defective product) is considered inherently risky enough to justify liability without needing to prove carelessness.</p>
          <p>The underlying purpose of tort law is twofold: compensating victims for their losses, and deterring risky or harmful conduct by making people and companies internalize the costs of the harm they cause. Understanding which category a case falls into is usually the first step in figuring out what a plaintiff actually has to prove.</p>`,
          keyTerms: [
            { term:'Tort', def:'A civil wrong causing harm, for which the injured party can seek compensation.' },
            { term:'Intentional Tort', def:'A tort where the defendant intended the act that caused harm, like battery or defamation.' },
            { term:'Strict Liability', def:'Liability imposed regardless of fault or intent, typically for inherently dangerous activities or products.' }
          ],
          quiz: { q:'How does a tort obligation differ from a contract obligation?', opts:['Tort obligations require a signed agreement','Tort obligations are imposed by law regardless of any agreement between parties','Tort obligations only apply to businesses','There is no real difference'], ans:1,
            ex:'Unlike contract duties, which arise from agreement, tort duties (like not injuring others carelessly) exist independent of any contract between the parties.' }
        },
        {
          id: 'law_m4_l2', title: 'Negligence: Duty, Breach, Causation, Damages', time: '6 min',
          body: `<p>Negligence is the workhorse of tort law, covering everything from car accidents to slip-and-falls to medical malpractice. To win a negligence claim, a plaintiff must prove four elements. First, <strong>duty</strong>: the defendant owed the plaintiff a legal obligation to act with reasonable care. Drivers owe a duty to other drivers and pedestrians; store owners owe a duty to customers to keep their premises reasonably safe; doctors owe patients a duty to meet the accepted standard of care in their field.</p>
          <p>Second, <strong>breach</strong>: the defendant failed to meet that standard of care. Courts typically ask what a "reasonable person" would have done in the same situation — texting while driving, leaving a wet floor unmarked, or a surgeon operating on the wrong body part are classic breaches because they fall well below what a reasonably careful person or professional would do.</p>
          <p>Third, <strong>causation</strong>, which itself splits into two parts. "Cause in fact" (or "but-for" causation) asks whether the harm would have happened but for the defendant's conduct. "Proximate cause" asks whether the harm was a reasonably foreseeable result of the breach — the law generally doesn't hold people liable for wildly unforeseeable chains of consequences, even if their conduct was technically a but-for cause somewhere down the line.</p>
          <p>Fourth, <strong>damages</strong>: the plaintiff must actually have suffered a legally recognized harm — medical bills, lost wages, property damage, or pain and suffering. Without provable damages, there's no negligence claim, even if the defendant was genuinely careless — the law doesn't compensate for close calls, only actual harm. All four elements — duty, breach, causation, and damages — must be proven; missing any one of them defeats the claim entirely.</p>`,
          keyTerms: [
            { term:'Duty of Care', def:'A legal obligation to act with reasonable care toward others.' },
            { term:'Proximate Cause', def:"Whether the harm was a reasonably foreseeable result of the defendant's conduct." },
            { term:'Reasonable Person Standard', def:'The objective benchmark of ordinary prudence used to judge whether conduct was negligent.' }
          ],
          quiz: { q:'What are the four elements a plaintiff must prove to win a negligence claim?', opts:['Motive, means, opportunity, intent','Duty, breach, causation, damages','Offer, acceptance, consideration, capacity','Malice, harm, recovery, appeal'], ans:1,
            ex:'Negligence requires proof of duty, breach of that duty, causation (both factual and proximate), and actual damages.' }
        },
        {
          id: 'law_m4_l3', title: 'Intentional Torts', time: '6 min',
          body: `<p>Intentional torts require that the defendant intended the act that caused harm — not necessarily intended to cause harm itself, just intended the underlying conduct. <strong>Battery</strong> is intentional harmful or offensive physical contact; <strong>assault</strong> is intentionally causing someone to reasonably fear imminent harmful contact, even without actual touching (pointing an unloaded gun at someone convincingly can be assault, even though it can't be battery if it's never fired and never touches them).</p>
          <p><strong>False imprisonment</strong> occurs when someone intentionally confines another person against their will without legal justification, without needing physical restraint — locking someone in a room, or a store falsely detaining a suspected shoplifter without reasonable grounds, can both qualify. <strong>Intentional infliction of emotional distress (IIED)</strong> requires extreme and outrageous conduct — going "beyond all possible bounds of decency" — intended to cause, or recklessly disregarding the risk of causing, severe emotional distress; this is a deliberately high bar, since courts don't want to turn every insult or rude comment into a lawsuit.</p>
          <p><strong>Defamation</strong> covers false statements of fact that damage someone's reputation — <em>libel</em> for written statements, <em>slander</em> for spoken ones. Truth is generally a complete defense, and pure opinions ("I think their business practices are shady") are typically protected differently than factual assertions ("They stole from their business partner" when that's false). Public figures face a higher bar, generally needing to prove the defendant acted with "actual malice" — knowing the statement was false or recklessly disregarding whether it was true.</p>
          <p>Unlike negligence, most intentional torts don't require proving specific monetary damages to recover something — certain intentional torts allow "nominal" or even punitive damages specifically because the law wants to punish and deter intentional wrongdoing, not merely compensate for measurable loss.</p>`,
          keyTerms: [
            { term:'Battery', def:'Intentional harmful or offensive physical contact with another person.' },
            { term:'Assault (tort)', def:'Intentionally causing another person reasonable fear of imminent harmful contact.' },
            { term:'Defamation', def:'A false statement of fact that damages a person\'s reputation, split into libel (written) and slander (spoken).' }
          ],
          quiz: { q:'What distinguishes assault from battery as intentional torts?', opts:['Assault requires actual physical contact; battery does not','Battery requires actual harmful or offensive contact; assault only requires reasonable fear of imminent contact','They are exactly the same tort','Assault only applies to public figures'], ans:1,
            ex:'Battery requires actual contact; assault only requires that the victim reasonably feared imminent harmful contact, even without touching.' }
        },
        {
          id: 'law_m4_l4', title: 'Strict Liability and Product Liability', time: '5 min',
          body: `<p>Some activities are risky enough that the law imposes liability without requiring proof of negligence or intent — this is <strong>strict liability</strong>. Classic examples include keeping wild or dangerous animals, engaging in abnormally dangerous activities (like blasting with explosives or storing hazardous chemicals), and — most commonly encountered today — selling defective products.</p>
          <p>Under modern <strong>product liability</strong> law, a manufacturer or seller can be strictly liable for injuries caused by a defective product, without the injured person needing to prove the manufacturer was careless. Courts generally recognize three types of defects. A <strong>manufacturing defect</strong> occurs when a specific unit deviates from its intended design — one bad batch of a medication, or one car that left the factory missing a bolt. A <strong>design defect</strong> means the entire product line is unreasonably dangerous even when made exactly as intended — courts often ask whether a safer, economically feasible alternative design existed. A <strong>failure to warn</strong> (or marketing defect) occurs when a product is sold without adequate instructions or warnings about risks that aren't obvious to an ordinary user.</p>
          <p>The policy rationale is straightforward: manufacturers are best positioned to test products, discover defects, and spread the cost of injuries across all customers through pricing and insurance, rather than leaving an individual injured consumer to absorb that cost alone or try to prove exactly what went wrong inside a factory they have no access to.</p>
          <p>Strict liability isn't unlimited, though — a plaintiff still must show the product was actually defective and that the defect caused their injury while the product was being used in a reasonably foreseeable way. Using a product in a bizarre, clearly unintended manner, or after significantly modifying it, can defeat a strict liability claim even if the product had some flaw.</p>`,
          keyTerms: [
            { term:'Strict Liability', def:'Liability imposed without requiring proof of negligence or intent, for inherently dangerous activities or defective products.' },
            { term:'Design Defect', def:'A flaw in an entire product line making it unreasonably dangerous even when manufactured as intended.' },
            { term:'Failure to Warn', def:'A defect involving inadequate instructions or warnings about a product\'s non-obvious risks.' }
          ],
          quiz: { q:'Why do courts impose strict liability on manufacturers for defective products?', opts:['Because manufacturers always act with malice','Because manufacturers are best positioned to catch defects and spread injury costs through pricing/insurance','Because negligence law does not exist','Because it only applies to food products'], ans:1,
            ex:'Strict product liability reflects a policy judgment that manufacturers can better detect defects and absorb/spread the cost of resulting injuries.' }
        },
        {
          id: 'law_m4_l5', title: 'Defenses to Tort Claims', time: '6 min',
          body: `<p>Even a strong tort claim can be reduced or defeated by a valid defense. <strong>Contributory negligence</strong>, used in only a handful of states today, completely bars recovery if the plaintiff was even slightly at fault for their own injury — a harsh, mostly abandoned rule. Most states instead use <strong>comparative negligence</strong>, which reduces the plaintiff's recovery in proportion to their own share of fault. Under "pure" comparative negligence, a plaintiff who is 90% at fault can still recover the remaining 10% of damages; under "modified" comparative negligence, a plaintiff loses the right to recover anything once their fault reaches 50% or 51%, depending on the state.</p>
          <p><strong>Assumption of risk</strong> applies when a plaintiff knowingly and voluntarily accepted a known danger — a skier who signs a waiver acknowledging the inherent risks of the sport generally can't later sue over injuries from those same inherent risks (though this defense typically doesn't cover injuries caused by a defendant's own reckless or grossly negligent conduct beyond the sport's ordinary risks).</p>
          <p><strong>Self-defense</strong> and <strong>defense of others</strong> justify what would otherwise be an intentional tort like battery, as long as the force used was reasonable and proportional to the threat faced. Using deadly force to respond to a minor shove, for instance, would exceed what the defense allows.</p>
          <p>Statutes of limitations also function as a powerful defense — every state sets a deadline (often one to a few years, depending on the type of tort) within which a plaintiff must file suit, after which the claim is barred entirely, regardless of its merits. These defenses collectively reflect a recurring theme in tort law: liability is rarely all-or-nothing — courts and legislatures build in mechanisms to apportion fault fairly and to eventually bring disputes to a close.</p>`,
          keyTerms: [
            { term:'Comparative Negligence', def:'A system reducing a plaintiff\'s recovery in proportion to their own share of fault.' },
            { term:'Assumption of Risk', def:'A defense that the plaintiff knowingly and voluntarily accepted a known danger.' },
            { term:'Statute of Limitations', def:'A deadline within which a lawsuit must be filed or the claim is permanently barred.' }
          ],
          quiz: { q:'Under a "pure" comparative negligence system, what happens if a plaintiff is found 90% at fault?', opts:['They recover nothing','They can still recover the remaining 10% of their damages','They must pay the defendant instead','The case is automatically dismissed'], ans:1,
            ex:'Pure comparative negligence allows a plaintiff to recover their non-fault share of damages, even if their own fault is very high.' }
        }
      ],
      exam: {
        id: 'law_m4_exam', title: 'Module 4 Exam: Torts', passScore: 0.7,
        questions: [
          { q:'What is a tort?', opts:['A type of contract','A civil wrong causing harm that gives rise to a right to sue','A criminal charge only','A government regulation'], ans:1, ex:'A tort is a civil wrong causing harm, distinct from criminal law and contract law.' },
          { q:'Which of these is NOT one of the four elements of negligence?', opts:['Duty','Breach','Consideration','Damages'], ans:2, ex:'Consideration is a contract law concept; negligence requires duty, breach, causation, and damages.' },
          { q:'What does "proximate cause" ask?', opts:['Whether the defendant had a contract with the plaintiff','Whether the harm was a reasonably foreseeable result of the conduct','Whether the plaintiff suffered financial loss','Whether the defendant intended to cause harm'], ans:1, ex:'Proximate cause limits liability to reasonably foreseeable consequences of the defendant\'s conduct.' },
          { q:'What distinguishes battery from assault?', opts:['Battery requires actual harmful/offensive contact; assault only requires reasonable fear of imminent contact', 'Assault requires a weapon', 'Battery only applies to public figures', 'They are legally identical'], ans:0, ex:'Battery involves actual contact; assault involves causing reasonable fear of imminent contact.' },
          { q:'What is required to prove intentional infliction of emotional distress (IIED)?', opts:['Any rude comment', 'Extreme and outrageous conduct intended or reckless as to causing severe distress', 'Only physical contact', 'A written contract'], ans:1, ex:'IIED requires conduct that is extreme and outrageous, going far beyond ordinary insults or rudeness.' },
          { q:'Why is strict liability imposed on manufacturers of defective products?', opts:['Because negligence is impossible to prove in any case', 'Because manufacturers are best positioned to catch defects and spread injury costs', 'Because all products are inherently illegal', 'Because it only applies to food'], ans:1, ex:'Strict product liability reflects a policy choice: manufacturers can detect and prevent defects, and spread costs through pricing/insurance.' },
          { q:'Under comparative negligence, what happens to a plaintiff\'s recovery if they share some fault?', opts:['They automatically recover nothing', 'Their recovery is reduced in proportion to their share of fault', 'Their recovery doubles', 'It has no effect'], ans:1, ex:'Comparative negligence reduces recovery in proportion to the plaintiff\'s own percentage of fault.' },
          { q:'What does a statute of limitations do?', opts:['Sets a deadline to file a lawsuit, after which the claim is barred', 'Sets the maximum damages available', 'Requires arbitration for all torts', 'Only applies to criminal cases'], ans:0, ex:'A statute of limitations imposes a filing deadline; missing it permanently bars the claim regardless of merit.' }
        ]
      }
    },

    // ══════════════════════════════════════════════════
    // MODULE 5 — Criminal Law
    // ══════════════════════════════════════════════════
    {
      id: 'law_m5',
      title: 'Criminal Law',
      summary: 'What makes conduct a crime, common defenses, and how a criminal case unfolds.',
      lessons: [
        {
          id: 'law_m5_l1', title: 'Elements of a Crime: Actus Reus and Mens Rea', time: '6 min',
          body: `<p>Criminal law differs from civil law (torts and contracts) in a fundamental way: it's a case brought by "the people" or "the state" against a defendant, seeking punishment (fines, probation, imprisonment) rather than compensation to a private party. To convict someone, the prosecution must prove every element of the crime <strong>beyond a reasonable doubt</strong> — a far higher standard than the "preponderance of the evidence" (more likely than not) standard used in civil cases.</p>
          <p>Almost every crime requires two components. <strong>Actus reus</strong> ("guilty act") is the physical conduct itself — the act, or sometimes an omission where there was a legal duty to act (like a parent failing to feed a child). Merely thinking about committing a crime isn't punishable; there has to be an actual voluntary act, or in rare cases, a legally required failure to act.</p>
          <p><strong>Mens rea</strong> ("guilty mind") is the required mental state, and it varies crime by crime. Common levels, from most to least culpable, include: <em>purposely</em> (it was your conscious objective), <em>knowingly</em> (you were practically certain your conduct would cause the result), <em>recklessly</em> (you consciously disregarded a substantial and unjustifiable risk), and <em>negligently</em> (you should have been aware of a risk a reasonable person would have recognized, even if you weren't actually aware of it).</p>
          <p>Some crimes are <strong>strict liability</strong> offenses, requiring no proof of mental state at all — many traffic violations and certain regulatory offenses work this way, precisely because the legislature wants to encourage extreme caution regardless of intent. But for serious crimes, both actus reus and mens rea generally must be proven, and they must concur — the guilty act and guilty mind generally need to exist at the same time for a conviction.</p>`,
          keyTerms: [
            { term:'Actus Reus', def:'The physical, voluntary act (or legally required omission) that constitutes a crime.' },
            { term:'Mens Rea', def:'The required guilty mental state accompanying a criminal act.' },
            { term:'Beyond a Reasonable Doubt', def:'The high standard of proof required to convict someone of a crime.' }
          ],
          quiz: { q:'What does "mens rea" refer to in criminal law?', opts:['The physical act committed','The required guilty mental state','The victim\'s injuries','The sentence imposed'], ans:1,
            ex:'Mens rea is the mental state — like intent, knowledge, or recklessness — required to establish criminal liability.' }
        },
        {
          id: 'law_m5_l2', title: 'Categories of Crime', time: '5 min',
          body: `<p>Crimes are generally classified by severity. <strong>Felonies</strong> are the most serious offenses — murder, robbery, rape, major drug trafficking — typically punishable by more than a year in prison and carrying long-term consequences like loss of voting rights or firearm ownership in many states. <strong>Misdemeanors</strong> are less serious offenses — many assaults, petty theft, DUIs — generally punishable by less than a year, often served in local jail rather than state prison. <strong>Infractions</strong> (or violations) are the least serious — traffic tickets, jaywalking — usually punished only by a fine, with no jail time and often no jury trial right attached.</p>
          <p>Beyond severity, crimes are also categorized by their target. Crimes against persons (murder, assault, kidnapping) directly harm an individual's body or safety. Crimes against property (theft, burglary, arson, vandalism) target possessions rather than physical safety, though they can obviously overlap when property crimes turn violent. Crimes against the public order or morality (disorderly conduct, certain drug offenses) are defined more by harm to society's general functioning than to any specific identifiable victim.</p>
          <p>An important separate category is <strong>inchoate crimes</strong> — offenses that involve working toward a crime that may never be completed. <strong>Attempt</strong> requires a substantial step toward committing a crime with the intent to complete it, even if it fails or is interrupted. <strong>Conspiracy</strong> is an agreement between two or more people to commit a crime, often requiring at least one overt act in furtherance of the plan. <strong>Solicitation</strong> is asking, encouraging, or commanding another person to commit a crime. These exist because the law wants to intervene before harm actually occurs, not only after.</p>`,
          keyTerms: [
            { term:'Felony', def:'A serious crime typically punishable by more than one year of imprisonment.' },
            { term:'Misdemeanor', def:'A less serious crime, typically punishable by less than one year, often in local jail.' },
            { term:'Inchoate Crime', def:'An offense involving incomplete progress toward a crime, like attempt or conspiracy.' }
          ],
          quiz: { q:'What is required to prove a criminal "conspiracy" in most jurisdictions?', opts:['Only a private thought about committing a crime','An agreement between two or more people to commit a crime, usually plus an overt act','A completed crime with a victim','A signed written contract'], ans:1,
            ex:'Conspiracy generally requires an agreement to commit a crime, often coupled with at least one overt act toward carrying it out.' }
        },
        {
          id: 'law_m5_l3', title: 'Criminal Defenses', time: '6 min',
          body: `<p>Defendants can raise several categories of defenses even when the prosecution can technically prove the underlying act. <strong>Self-defense</strong> justifies using reasonable force — including, in serious situations, deadly force — to protect oneself from an imminent threat of harm; the force used generally must be proportional to the threat, and most jurisdictions require the threat to be genuinely imminent, not merely feared at some point in the future.</p>
          <p>The <strong>insanity defense</strong>, though rarely used and even more rarely successful, argues the defendant lacked the mental capacity to understand the nature of their act or to know it was wrong, due to a severe mental illness at the time of the crime. Standards vary by jurisdiction — some use the M'Naghten test (couldn't understand the nature or wrongfulness of the act), others a broader "irresistible impulse" or model penal code standard. This is a legal determination distinct from a medical diagnosis, and it's different from being found incompetent to stand trial (unable to understand the proceedings or assist in one's own defense right now).</p>
          <p><strong>Duress</strong> as a criminal defense argues the defendant committed the crime only because they were threatened with imminent serious harm if they refused — though duress typically cannot excuse murder in most jurisdictions, on the theory the law shouldn't permit trading an innocent life to save one's own.</p>
          <p><strong>Entrapment</strong> applies when law enforcement induces someone to commit a crime they weren't otherwise predisposed to commit — merely providing an opportunity to commit a crime (like an undercover sting) isn't entrapment, but actively persuading a reluctant person who shows no independent inclination to break the law can be. Each of these defenses reflects a judgment that punishing the defendant, despite the technically criminal act, would be unjust given the surrounding circumstances.</p>`,
          keyTerms: [
            { term:'Self-Defense', def:'A justification for using reasonable, proportional force to protect oneself from imminent harm.' },
            { term:'Insanity Defense', def:'A defense arguing severe mental illness prevented the defendant from understanding their act or its wrongfulness.' },
            { term:'Entrapment', def:'A defense that law enforcement induced someone to commit a crime they were not otherwise predisposed to commit.' }
          ],
          quiz: { q:'What does the entrapment defense require, beyond law enforcement simply providing an opportunity to commit a crime?', opts:['Nothing more is required','That officers actively induced someone not otherwise predisposed to commit the crime','That the defendant is a minor','That no undercover officers were involved'], ans:1,
            ex:'Entrapment requires more than opportunity — it requires law enforcement to have induced a person not otherwise predisposed to commit the offense.' }
        },
        {
          id: 'law_m5_l4', title: 'Constitutional Protections in Criminal Cases', time: '6 min',
          body: `<p>Criminal defendants have significant constitutional protections designed to balance the government's power against individual liberty. The <strong>Fourth Amendment</strong> generally requires police to have a warrant, based on probable cause, before searching a home or seizing property — though numerous exceptions exist, including searches incident to a lawful arrest, exigent circumstances (like evidence about to be destroyed), and consent. Evidence obtained through an illegal search is typically inadmissible under the <strong>exclusionary rule</strong>, intended to deter police misconduct by removing its benefit.</p>
          <p>The <strong>Fifth Amendment</strong> protects against compelled self-incrimination — this is the basis for <em>Miranda</em> warnings ("you have the right to remain silent...") that police must give before a custodial interrogation, so suspects know they aren't required to talk. It also bars double jeopardy, meaning someone acquitted (or convicted) of a crime generally can't be tried again for the same offense by the same sovereign.</p>
          <p>The <strong>Sixth Amendment</strong> guarantees the right to a speedy and public trial, an impartial jury, the right to confront witnesses against you, and — critically — the right to legal counsel, including a court-appointed attorney if the defendant can't afford one, established in the landmark case <em>Gideon v. Wainwright</em> (1963). The <strong>Eighth Amendment</strong> prohibits excessive bail and fines, and cruel and unusual punishment.</p>
          <p>These protections exist because the government's power to prosecute and imprison is enormous, and history has repeatedly shown that unchecked prosecutorial power leads to abuse. The rules aren't loopholes for the guilty — they're structural limits designed to protect everyone, including the innocent, from wrongful conviction and government overreach.</p>`,
          keyTerms: [
            { term:'Miranda Warning', def:'The required notice of rights, including the right to remain silent, given before custodial police interrogation.' },
            { term:'Exclusionary Rule', def:'The rule barring evidence obtained through an illegal search or seizure from being used at trial.' },
            { term:'Gideon v. Wainwright', def:'The 1963 Supreme Court case establishing the right to court-appointed counsel for defendants who cannot afford one.' }
          ],
          quiz: { q:'What did Gideon v. Wainwright establish?', opts:['The right to a jury trial','The right to court-appointed counsel for defendants who cannot afford an attorney','The exclusionary rule','The Miranda warning requirement'], ans:1,
            ex:'Gideon v. Wainwright (1963) established that criminal defendants have a right to court-appointed counsel if they cannot afford their own.' }
        },
        {
          id: 'law_m5_l5', title: 'How a Criminal Case Proceeds', time: '6 min',
          body: `<p>A criminal case typically starts with an <strong>arrest</strong> based on probable cause, followed promptly by an <strong>arraignment</strong>, where the defendant is formally informed of the charges and enters a plea (guilty, not guilty, or occasionally no contest). For serious felonies, many jurisdictions require a <strong>preliminary hearing</strong> or <strong>grand jury indictment</strong> before trial, where a judge or grand jury determines there's enough evidence (probable cause) to proceed to trial at all.</p>
          <p>The overwhelming majority of criminal cases in America — often well over 90% — end in a <strong>plea bargain</strong> rather than a trial: the defendant agrees to plead guilty, often to a reduced charge or with a sentencing recommendation, in exchange for avoiding the risk and expense of trial. This isn't a footnote to the system — it's effectively how the system actually operates day to day, driven by heavy caseloads and the significant sentencing discount typically offered for pleading guilty rather than going to trial.</p>
          <p>If a case does go to <strong>trial</strong>, the prosecution must prove every element of the charged crime beyond a reasonable doubt to a unanimous jury (in most jurisdictions, for serious charges), or to a judge in a bench trial. The defendant has no obligation to testify or present any evidence at all — the burden of proof rests entirely on the prosecution throughout.</p>
          <p>If convicted, the case moves to <strong>sentencing</strong>, which considers the crime's severity, the defendant's criminal history, and various statutory and constitutional limits (like the Eighth Amendment's ban on cruel and unusual punishment). A convicted defendant can then appeal, arguing legal errors occurred during trial — though, as with civil appeals, simply disagreeing with the jury's verdict isn't grounds for reversal; there must be an identifiable legal mistake.</p>`,
          keyTerms: [
            { term:'Arraignment', def:'The court proceeding where a defendant is formally charged and enters a plea.' },
            { term:'Plea Bargain', def:'An agreement where a defendant pleads guilty, often to a lesser charge, in exchange for a sentencing benefit.' },
            { term:'Grand Jury', def:'A group that reviews evidence to determine whether there is probable cause to formally charge someone with a serious crime.' }
          ],
          quiz: { q:'What happens in the vast majority of American criminal cases?', opts:['They go to a full jury trial','They are resolved through a plea bargain','They are dismissed automatically','The defendant is acquitted'], ans:1,
            ex:'The large majority of criminal cases end in plea bargains rather than trials, driven by caseloads and sentencing incentives.' }
        }
      ],
      exam: {
        id: 'law_m5_exam', title: 'Module 5 Exam: Criminal Law', passScore: 0.7,
        questions: [
          { q:'What is required to convict someone of a crime in the U.S.?', opts:['A preponderance of the evidence','Proof beyond a reasonable doubt','A simple majority vote of the jury','The defendant\'s confession only'], ans:1, ex:'Criminal convictions require proof beyond a reasonable doubt, a much higher standard than civil cases.' },
          { q:'What does "actus reus" mean?', opts:['The guilty mental state','The physical, voluntary criminal act','The victim\'s testimony','The sentence imposed'], ans:1, ex:'Actus reus refers to the voluntary physical act (or required omission) constituting a crime.' },
          { q:'Which category of crime is typically punishable by more than one year of imprisonment?', opts:['Infraction','Misdemeanor','Felony','Civil violation'], ans:2, ex:'Felonies are the most serious crimes, generally carrying sentences of more than one year.' },
          { q:'What must be shown to succeed with an entrapment defense?', opts:['That police provided any opportunity to commit a crime','That law enforcement induced someone not otherwise predisposed to commit the crime','That the defendant is innocent of all charges','That no undercover officer was used'], ans:1, ex:'Entrapment requires law enforcement to have induced a person not otherwise predisposed to commit the crime.' },
          { q:'What is the exclusionary rule?', opts:['A rule requiring jury unanimity','A rule barring evidence obtained through illegal searches from being used at trial','A sentencing guideline','A rule about jury selection'], ans:1, ex:'The exclusionary rule bars evidence obtained via illegal search or seizure from being admitted at trial.' },
          { q:'What right did Gideon v. Wainwright establish?', opts:['The right to remain silent','The right to a speedy trial','The right to court-appointed counsel if a defendant cannot afford an attorney','The right to bail'], ans:2, ex:'Gideon v. Wainwright established the right to appointed counsel for defendants unable to afford their own.' },
          { q:'What happens in a plea bargain?', opts:['The case is dismissed with no consequences','The defendant pleads guilty, often to a reduced charge, in exchange for a sentencing benefit','The jury is dismissed','The defendant is automatically acquitted'], ans:1, ex:'A plea bargain resolves a case through a guilty plea, typically to lesser charges or with sentencing concessions.' },
          { q:'Who bears the burden of proof at a criminal trial?', opts:['The defendant', 'The prosecution, throughout the entire trial', 'The jury', 'Neither side'], ans:1, ex:'The prosecution bears the burden of proving every element of the crime beyond a reasonable doubt; the defendant need not prove anything.' }
        ]
      }
    },

    // ══════════════════════════════════════════════════
    // MODULE 6 — Property, Business Law & Legal Careers
    // ══════════════════════════════════════════════════
    {
      id: 'law_m6',
      title: 'Property, Business Law & Legal Careers',
      summary: 'Ownership, business structures, and how to actually build a career in law.',
      lessons: [
        {
          id: 'law_m6_l1', title: 'Real Property Basics', time: '6 min',
          body: `<p><strong>Real property</strong> refers to land and anything permanently attached to it, like buildings. Ownership of real property is usually described as a bundle of separate rights — the right to possess, use, exclude others, and transfer the property — and different legal arrangements can split that bundle among multiple people.</p>
          <p>A <strong>fee simple absolute</strong> is the most complete form of ownership: the owner holds the property indefinitely with the fewest restrictions, and can sell, give away, or leave it to heirs freely. Lesser interests include a <strong>life estate</strong> (the right to use property only for someone's lifetime, after which it passes to another named person) and a <strong>leasehold</strong> (a tenant's temporary right to possess and use property under a lease, while the landlord retains ultimate ownership).</p>
          <p>Property can also be co-owned in different ways. <strong>Joint tenancy</strong> includes a "right of survivorship" — when one joint owner dies, their share automatically passes to the surviving owners, bypassing a will entirely. <strong>Tenancy in common</strong> has no survivorship right — each owner's share passes according to their own will or state inheritance law when they die, and owners can hold unequal percentages.</p>
          <p>An <strong>easement</strong> gives someone a limited right to use another person's land for a specific purpose — like a utility company's right to run power lines across your property, or a neighbor's right to use a shared driveway — without transferring ownership itself. Understanding these distinctions matters enormously in practice: most real estate disputes and estate planning questions ultimately come down to exactly which of these interests someone actually holds.</p>`,
          keyTerms: [
            { term:'Fee Simple Absolute', def:'The most complete, unrestricted form of real property ownership.' },
            { term:'Easement', def:'A limited right to use another person\'s land for a specific purpose, without owning it.' },
            { term:'Joint Tenancy', def:'Co-ownership with a right of survivorship, where a deceased owner\'s share passes automatically to survivors.' }
          ],
          quiz: { q:'What distinguishes joint tenancy from tenancy in common?', opts:['Joint tenancy allows unequal ownership shares; tenancy in common does not','Joint tenancy includes a right of survivorship; tenancy in common does not','They are legally identical','Tenancy in common only applies to businesses'], ans:1,
            ex:'Joint tenancy\'s defining feature is the right of survivorship — a deceased owner\'s share passes automatically to the surviving joint owners.' }
        },
        {
          id: 'law_m6_l2', title: 'Personal Property and Intellectual Property', time: '6 min',
          body: `<p>Unlike real property, <strong>personal property</strong> covers anything movable — cars, furniture, cash, stocks. It splits into <strong>tangible</strong> personal property (physical objects you can touch) and <strong>intangible</strong> personal property (rights without physical form, like a bank account balance, a stock certificate, or intellectual property).</p>
          <p><strong>Intellectual property (IP)</strong> protects creations of the mind, and splits into four main categories. <strong>Copyright</strong> protects original creative works — books, music, software code, films — automatically upon creation, generally lasting for the author's life plus 70 years. It protects the specific expression of an idea, not the underlying idea itself; you can't copyright "a story about a boy wizard," only the actual specific text and characters you wrote.</p>
          <p><strong>Trademarks</strong> protect brand identifiers — names, logos, slogans — that distinguish one company's goods or services from another's, and can last indefinitely as long as they're actively used and defended (which is why companies aggressively police unauthorized use of their marks — failing to do so can weaken or destroy the trademark's protection). <strong>Patents</strong> protect new, useful, and non-obvious inventions, granting the inventor an exclusive right to make, use, or sell the invention for a limited period — typically 20 years from filing — in exchange for publicly disclosing exactly how the invention works.</p>
          <p><strong>Trade secrets</strong> protect confidential business information — like a formula, process, or customer list — that provides a competitive advantage precisely because it's kept secret; unlike patents, trade secret protection can theoretically last forever, but only as long as reasonable efforts are made to keep the information confidential, and it offers no protection if a competitor independently discovers the same information legitimately.</p>`,
          keyTerms: [
            { term:'Copyright', def:'Legal protection for original creative expression, arising automatically upon creation.' },
            { term:'Patent', def:'Exclusive rights granted to an inventor for a new, useful, non-obvious invention, typically for 20 years.' },
            { term:'Trade Secret', def:'Confidential business information protected as long as reasonable secrecy is maintained.' }
          ],
          quiz: { q:'What does copyright protect?', opts:['Any idea, even if not written down','The specific creative expression of an idea, not the underlying idea itself','Only inventions','Brand names and logos'], ans:1,
            ex:'Copyright protects specific creative expression — the actual text, music, or code — not the general idea behind it.' }
        },
        {
          id: 'law_m6_l3', title: 'Business Entities', time: '6 min',
          body: `<p>Choosing a business structure is one of the first major legal decisions an entrepreneur makes, and it primarily comes down to trading off liability protection, taxation, and administrative complexity. A <strong>sole proprietorship</strong> is the default for a single-owner business with no formal filing: it's simple and cheap to run, but the owner has unlimited personal liability — if the business is sued or can't pay its debts, the owner's personal assets, like their house or savings, are on the line.</p>
          <p>A <strong>general partnership</strong> works similarly for multiple owners: easy to form, but each partner typically has unlimited personal liability, and importantly, each partner can usually bind the entire partnership to contracts and debts, even without the other partners' direct approval, which requires real trust between partners.</p>
          <p>A <strong>limited liability company (LLC)</strong> has become the most popular choice for small and medium businesses because it offers the liability protection of a corporation — owners ("members") generally aren't personally liable for business debts beyond their investment — combined with flexible, pass-through taxation, where the business's profits are only taxed once, on the owners' personal tax returns, rather than at both the corporate and personal level.</p>
          <p>A <strong>corporation</strong> is a separate legal entity from its owners (shareholders), offering strong liability protection and an established structure for raising outside investment. A standard "C corporation" faces potential <strong>double taxation</strong> — the corporation pays tax on its profits, and shareholders pay tax again on dividends received — while an "S corporation" election allows pass-through taxation similar to an LLC, subject to restrictions on the number and type of shareholders allowed. The right choice depends heavily on the number of owners, growth and investment plans, and tax situation — there's no single best structure for every business.</p>`,
          keyTerms: [
            { term:'Limited Liability Company (LLC)', def:'A business entity combining liability protection with flexible pass-through taxation.' },
            { term:'Sole Proprietorship', def:'A single-owner business with no formal entity filing and unlimited personal liability.' },
            { term:'Double Taxation', def:'When corporate profits are taxed once at the corporate level and again when distributed to shareholders as dividends.' }
          ],
          quiz: { q:'What is a key advantage of forming an LLC over a sole proprietorship?', opts:['LLCs cannot be sued at all','LLCs generally shield owners\' personal assets from business liabilities','LLCs pay no taxes whatsoever','LLCs require a board of directors'], ans:1,
            ex:'An LLC generally protects owners\' personal assets from business debts and lawsuits, unlike a sole proprietorship.' }
        },
        {
          id: 'law_m6_l4', title: 'Employment Law Basics', time: '6 min',
          body: `<p>Most U.S. employment relationships operate under a default rule called <strong>at-will employment</strong>: absent a contract saying otherwise, either the employer or employee can end the relationship at any time, for any reason (or no reason at all) — with one enormous exception: employers cannot fire someone for an <strong>illegal reason</strong>, such as unlawful discrimination or retaliation for reporting misconduct.</p>
          <p>Federal anti-discrimination law, primarily <strong>Title VII of the Civil Rights Act</strong>, prohibits employment discrimination based on race, color, religion, sex, and national origin. Other federal statutes extend protection to age (for workers 40+, under the ADEA), disability (under the ADA, which also requires reasonable accommodations), and pregnancy. Many states and cities add further protected categories, like sexual orientation and gender identity, marital status, or political affiliation.</p>
          <p>Wage and hour law, mainly the <strong>Fair Labor Standards Act (FLSA)</strong>, sets the federal minimum wage and requires overtime pay (generally 1.5x the regular rate) for non-exempt employees who work more than 40 hours in a week. Whether an employee is "exempt" from overtime depends on their job duties and salary level, not just their job title — a common area of costly employer mistakes.</p>
          <p>Employers also must comply with workplace safety rules under <strong>OSHA</strong>, provide certain unpaid leave for medical and family reasons under the <strong>Family and Medical Leave Act (FMLA)</strong> for eligible employees at larger employers, and follow specific procedures around final paychecks, workers' compensation for on-the-job injuries, and unemployment insurance when employment ends. Employment law is one of the most heavily regulated areas of business precisely because of the inherent power imbalance between employers and individual workers.</p>`,
          keyTerms: [
            { term:'At-Will Employment', def:'The default rule that employment can be ended by either party at any time, for any legal reason.' },
            { term:'Title VII', def:'The federal law prohibiting employment discrimination based on race, color, religion, sex, and national origin.' },
            { term:'Fair Labor Standards Act (FLSA)', def:'The federal law setting minimum wage and overtime pay requirements.' }
          ],
          quiz: { q:'Under "at-will employment," what is the one major limitation on an employer\'s ability to fire someone?', opts:['Employers can never terminate anyone','Employers cannot fire someone for an illegal reason like unlawful discrimination','Termination requires a court order','Employees must be given six months notice'], ans:1,
            ex:'At-will employment allows termination for almost any reason, except illegal reasons such as discrimination or unlawful retaliation.' }
        },
        {
          id: 'law_m6_l5', title: 'Legal Ethics and Paths Into a Legal Career', time: '6 min',
          body: `<p>Lawyers operate under strict professional responsibility rules, most based on the American Bar Association's Model Rules of Professional Conduct as adopted (with variations) by each state. The two most fundamental duties are <strong>competence</strong> (providing knowledgeable, thorough, and prepared representation) and <strong>confidentiality</strong> (protecting client information, with narrow exceptions like preventing serious imminent harm).</p>
          <p>A closely related but distinct concept is <strong>attorney-client privilege</strong> — a rule of evidence that protects confidential communications between a lawyer and client from being disclosed in court, even if subpoenaed, so clients can be fully honest with their lawyers without fear their words will be used against them. Lawyers must also avoid <strong>conflicts of interest</strong>, generally requiring them to decline or withdraw from representing a client whose interests conflict with another current or former client's interests, without informed consent from everyone affected.</p>
          <p>Becoming a lawyer in the U.S. typically requires a bachelor's degree, then three years of law school (a J.D.), then passing a state bar examination and a character and fitness review. Some states now allow alternative paths, like apprenticeship-based "reading the law" instead of law school, though this remains rare.</p>
          <p>Beyond traditional courtroom litigation, legal careers span an enormous range: transactional attorneys who draft and negotiate contracts and deals without ever seeing a courtroom; in-house counsel working directly for a single company; government lawyers (prosecutors, public defenders, regulatory agency attorneys); judges; legal academics; and non-lawyer roles like paralegals and compliance professionals that don't require a law degree at all. Many of the analytical skills covered in this course — spotting issues, applying rules to facts, and constructing arguments — transfer directly to careers well outside a courtroom, from business strategy to policy work to journalism.</p>`,
          keyTerms: [
            { term:'Attorney-Client Privilege', def:'The rule protecting confidential lawyer-client communications from forced disclosure in legal proceedings.' },
            { term:'Conflict of Interest', def:'A situation where a lawyer\'s duties to one client conflict with duties owed to another client.' },
            { term:'J.D. (Juris Doctor)', def:'The professional law degree required, along with passing a bar exam, to practice law in the U.S.' }
          ],
          quiz: { q:'What does attorney-client privilege protect?', opts:['A lawyer\'s personal opinions in public','Confidential communications between a lawyer and client from forced disclosure in court','A client\'s criminal record','A lawyer\'s billing records'], ans:1,
            ex:'Attorney-client privilege shields confidential communications between lawyer and client so clients can be fully candid with their attorney.' }
        }
      ],
      exam: {
        id: 'law_m6_exam', title: 'Module 6 Exam: Property, Business Law & Legal Careers', passScore: 0.7,
        questions: [
          { q:'What is a "fee simple absolute"?', opts:['A temporary lease','The most complete, unrestricted form of real property ownership','A right to use land without owning it','A type of business entity'], ans:1, ex:'Fee simple absolute is the fullest, most unrestricted ownership interest in real property.' },
          { q:'What does an easement grant?', opts:['Full ownership of land','A limited right to use another\'s land for a specific purpose','A right to sue a landowner','A type of intellectual property'], ans:1, ex:'An easement gives a limited right to use someone else\'s land for a specific purpose, without transferring ownership.' },
          { q:'What does copyright protect?', opts:['General ideas and concepts','The specific creative expression of an idea','Brand logos','Business processes kept secret'], ans:1, ex:'Copyright protects the specific expression of creative work, not the underlying idea itself.' },
          { q:'How long do patents typically last from filing?', opts:['5 years','20 years','Forever','100 years'], ans:1, ex:'Utility patents generally last about 20 years from the filing date.' },
          { q:'What is a key benefit of forming an LLC?', opts:['Unlimited personal liability for owners','Liability protection combined with pass-through taxation','Automatic tax-exempt status','Mandatory public stock offering'], ans:1, ex:'LLCs combine liability protection for owners with flexible pass-through taxation.' },
          { q:'Under at-will employment, when can an employer generally NOT terminate an employee?', opts:['When the reason is simply unpopular','When the reason is illegal, such as unlawful discrimination','When the employee has worked there over a year','Never — at-will employees can always be fired freely'], ans:1, ex:'At-will employment allows termination for almost any reason except illegal ones like discrimination or unlawful retaliation.' },
          { q:'What does attorney-client privilege protect?', opts:['A lawyer\'s billing invoices','Confidential lawyer-client communications from forced disclosure','Public court filings','A client\'s criminal history'], ans:1, ex:'Attorney-client privilege protects confidential communications between lawyer and client from being disclosed in legal proceedings.' },
          { q:'What is typically required to become a licensed lawyer in the U.S.?', opts:['Only a bachelor\'s degree','A J.D. from law school and passing a state bar exam','A high school diploma only','A federal government appointment'], ans:1, ex:'Becoming a lawyer typically requires a J.D. (three years of law school) and passing a state bar examination.' }
        ]
      }
    }
  ]
});
