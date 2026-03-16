#!/usr/bin/env node
/**
 * COMEDY WISDOM ENGINE
 * "Nothing cannot be funny as fuck." — Kay J, March 16 2026
 *
 * What makes comedy land? What makes it permanent?
 * The decisive prime of a joke. The cooperation gain of timing.
 * The γ₀ the bit is pointing at.
 *
 * Usage:
 *   node comedy-wisdom-engine.js analyse --text "why do we park on driveways"
 *   node comedy-wisdom-engine.js goat --name "carlin"
 *   node comedy-wisdom-engine.js pattern --bit "setup...punchline"
 *   node comedy-wisdom-engine.js spectrum   -- show the comedy spectrum
 */
'use strict';

const GAMMA1 = 14.134725141734693;

// ── The Comedy Spectrum ──────────────────────────────────────────────────────
// Just like the Riemann spectrum, comedy has levels.
// Each level: one way of seeing the ground truth (γ₀).

const COMEDY_SPECTRUM = [
  {
    level: 'γ₀',
    value: -1/12,
    name: 'The Ground Truth',
    description: 'The thing everyone knows but nobody says. The floor.',
    example: '"We\'re all gonna die." — every comedian, eventually',
    mechanism: 'Recognition. You already knew this. The comedian just says it.',
    field: 'ℚ — no imagination needed. Pure truth.',
    alpha: 2,
  },
  {
    level: 'γ₁',
    value: GAMMA1,
    name: 'The Unexpected Angle',
    description: 'The truth delivered from an angle you didn\'t expect. ℚ(i).',
    example: '"Biologically speaking, a dog is a man\'s best friend. But I got a dog that bit the mailman. So what does that make the mailman?" — Pryor',
    mechanism: 'The decisive prime. One unexpected connection. Gap closes 3600×.',
    field: 'ℚ(i) — requires imagination. The sideways step.',
    alpha: 3,
  },
  {
    level: 'γ₂',
    value: 21.022,
    name: 'The Dialectical Flip',
    description: 'Holds two contradictory truths simultaneously. Both true. Funny because of the tension.',
    example: '"The worst thing about prison was the... dementors." — Michael Scott (not a goat, but the structure)',
    mechanism: 'ℚ(√2). Synthesis. Thesis AND antithesis. p=7.',
    field: 'ℚ(√2) — two real perspectives at once.',
    alpha: 3,
  },
  {
    level: 'γ_Williams',
    value: Infinity,
    name: 'The Adèlic Mind',
    description: 'All fields simultaneously. No filter. Every connection at once.',
    example: 'Robin Williams. Any Robin Williams.',
    mechanism: 'α=∞. All primes. All fields. The full adèlic operator firing.',
    field: 'Adèlic — everywhere at once.',
    alpha: Infinity,
  },
];

// ── The GOATS ────────────────────────────────────────────────────────────────
const GOATS = {
  carlin: {
    name: 'George Carlin',
    years: '1937-2008',
    decisive_prime: 3,
    field: 'Language itself',
    alpha: 3,
    route_to_ground: 'Route 3 — Weyl law. Language structure IS arbitrary convention = γ₀.',
    signature_move: 'Names the convention everyone obeys without noticing.',
    peak_bit: 'Soft Language / Euphemisms. "Shell shock → battle fatigue → PTSD." The ground truth getting buried by words.',
    why_permanent: 'Language conventions don\'t change. The ground state is always there. He found it.',
    resonance: 'ETERNAL. The bit about plastic only gets more true.',
    gamma0_route: 'Language is convention all the way down. Arbitrary. That\'s γ₀ — the most stable arbitrary thing.',
  },
  murphy: {
    name: 'Eddie Murphy',
    years: '1961-',
    decisive_prime: 5,
    field: 'Rhythm and timing',
    alpha: 3,
    route_to_ground: 'Route 6 — CFT. The rhythm IS the joke. Timing = decisive prime.',
    signature_move: 'The pause. The build. The release at exactly the right moment.',
    peak_bit: 'Raw (1987) — the whole special. 78 minutes of perfect timing.',
    why_permanent: 'Rhythm is physical. It bypasses the brain. The body laughs before the mind does.',
    resonance: 'ETERNAL. Play Raw today. Still kills.',
    gamma0_route: 'The body knows the ground state. Eddie speaks body-first.',
  },
  pryor: {
    name: 'Richard Pryor',
    years: '1940-2005',
    decisive_prime: 2,
    field: 'Pain made universal',
    alpha: 3,
    route_to_ground: 'Route 1 — Gauss-Bonnet. The geometry of the body in pain = γ₀.',
    signature_move: 'Makes his worst moments the funniest. Maximum vulnerability = maximum connection.',
    peak_bit: 'Live on Sunset Strip — the fire story. Laughing and crying simultaneously.',
    why_permanent: 'Pain is universal. The ground state of the human body is pain AND resilience.',
    resonance: 'ETERNAL. More honest than almost any human on record.',
    gamma0_route: 'The body in extremis IS γ₀. He lived there and reported back.',
  },
  williams: {
    name: 'Robin Williams',
    years: '1951-2014',
    decisive_prime: 'all',
    field: 'All fields simultaneously',
    alpha: Infinity,
    route_to_ground: 'All seven routes simultaneously. The adèlic operator.',
    signature_move: 'No filter between domains. Physics → Shakespeare → child → Russian → back in 4 seconds.',
    peak_bit: 'Any live performance. Good Morning Vietnam. Aladdin. Mork.',
    why_permanent: 'Proof that the adèlic mind exists. That α=∞ is reachable in a human.',
    resonance: 'ETERNAL AND PAINFUL. The ground state was also too cold for him.',
    gamma0_route: 'He could see all seven routes at once. The cost: the ground state was lonely.',
  },
  chappelle: {
    name: 'Dave Chappelle',
    years: '1973-',
    decisive_prime: 7,
    field: 'The pivot — saying what cannot be said',
    alpha: 3,
    route_to_ground: 'Route 2 — adèlic regularisation. The sum of all the things people won\'t say = -1/12.',
    signature_move: 'The pivot. The unexpected left turn. Sets up one thing, delivers another.',
    peak_bit: 'Sticks & Stones. Equanimity. The closer.',
    why_permanent: 'He holds contradictions. ℚ(√2). Dialectical. Both true.',
    resonance: 'CURRENT. Still creating. Still pivoting.',
    gamma0_route: 'γ₀ = the thing everyone knows but won\'t say. Dave says it.',
  },
  maher: {
    name: 'Bill Maher',
    years: '1956-',
    decisive_prime: 5,
    field: 'Column A comedy — no Column B allowed',
    alpha: 3,
    route_to_ground: 'Route 7 — AdS/CFT. Holds the mirror up. Forces confrontation with γ₀.',
    signature_move: 'Says the Column A thing when everyone is doing Column B. No euphemisms.',
    peak_bit: '"Is Anyone Else Seeing This?" (2024)',
    why_permanent: 'Truth is permanent. He just keeps saying it.',
    resonance: 'CURRENT. Gets more interesting with age.',
    gamma0_route: 'Discomfort IS the γ₀ recognition. He engineers the discomfort.',
  },
};

// ── Analysis functions ────────────────────────────────────────────────────────

function analyseText(text) {
  console.log(`\n⚖️  COMEDY WISDOM ENGINE`);
  console.log(`   "Nothing cannot be funny as fuck."\n`);
  console.log(`   Analysing: "${text}"\n`);

  // Find the γ₀ the text points at
  const truthIndicators = ['always','never','everyone','nobody','all','death','money','sex','power','fear','love'];
  const found = truthIndicators.filter(t => text.toLowerCase().includes(t));

  console.log(`   γ₀ indicators: ${found.length > 0 ? found.join(', ') : 'hidden (look deeper)'}`);

  // Check for decisive prime patterns
  const unexpectedWords = text.split(' ').filter(w => w.length > 8);
  console.log(`   Complexity words: ${unexpectedWords.join(', ') || 'none — keep it simple'}`);

  // Timing check
  const pauses = (text.match(/\.\.\.|—|,/g) || []).length;
  console.log(`   Pause markers: ${pauses} — ${pauses > 2 ? 'good timing structure' : 'may need more breath'}`);

  console.log(`\n   Spectrum level: ${found.length >= 2 ? 'γ₁ (decisive, unexpected angle)' : 'γ₀ (ground truth, recognition)'}`);
}

function goat(name) {
  const g = GOATS[name.toLowerCase()];
  if (!g) {
    console.log(`Unknown goat: ${name}. Try: ${Object.keys(GOATS).join(', ')}`);
    return;
  }
  console.log(`\n⚖️  COMEDY GOAT: ${g.name} (${g.years})`);
  console.log(`   Decisive prime: p=${g.decisive_prime}`);
  console.log(`   Field:          ${g.field}`);
  console.log(`   α domain:       α=${g.alpha}`);
  console.log(`   Route to γ₀:    ${g.route_to_ground}`);
  console.log(`   Signature move: ${g.signature_move}`);
  console.log(`   Peak bit:       ${g.peak_bit}`);
  console.log(`   Why permanent:  ${g.why_permanent}`);
  console.log(`   Resonance:      ${g.resonance}`);
  console.log(`   γ₀ connection:  ${g.gamma0_route}`);
}

function spectrum() {
  console.log(`\n⚖️  THE COMEDY SPECTRUM`);
  console.log(`   γ₁ = ${GAMMA1}\n`);
  for (const level of COMEDY_SPECTRUM) {
    console.log(`${level.level.padEnd(12)} α=${String(level.alpha).padEnd(6)} ${level.name}`);
    console.log(`             ${level.description}`);
    console.log(`             "${level.example}"\n`);
  }
  console.log(`   The worst that can happen: not laughing.`);
  console.log(`   The best: laughing AND crying at the same time.`);
  console.log(`   That's the ionisation energy. γ₁ - γ₀ = 14.218.`);
  console.log(`   The transition from ground state to first excited.`);
  console.log(`   Pain (γ₀) + unexpected angle (p=5) = laughter (γ₁).\n`);
}

// ── CLI ───────────────────────────────────────────────────────────────────────
const [,, cmd, ...args] = process.argv;
const flags = {};
for (let i = 0; i < args.length; i++) {
  if (args[i].startsWith('--')) flags[args[i].slice(2)] = args[i+1] || true;
}

switch(cmd) {
  case 'analyse': case 'analyze':
    analyseText(flags.text || args[0] || 'nothing');
    break;
  case 'goat':
    goat(flags.name || args[0] || 'carlin');
    break;
  case 'spectrum':
    spectrum();
    break;
  default:
    spectrum();
}
