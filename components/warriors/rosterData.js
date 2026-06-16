// ============================================================
// THE WARRIORS — roster + profile data
// PLACEHOLDER seed data ported verbatim from the prototype
// (warriors.jsx). Jason replaces coaches / rosters / stats later.
// ============================================================

export const BADGES = [
  { name: 'Clutch Shooter',    glyph: '✦', desc: 'Written test on shot selection · on-court test for live-game shotmaking under pressure.' },
  { name: 'Lockdown Defender', glyph: '◆', desc: 'Closeouts, hip flips, switch IQ. Stops the best perimeter scorer on the scout.' },
  { name: 'Glass Dominator',   glyph: '⬢', desc: 'Boxing out, second-jump efficiency, contested rebounding in traffic.' },
  { name: 'Court Visionary',   glyph: '◈', desc: 'Pick-and-roll reads, second-side decisions, transition pace control.' },
]

// 3 fully-fleshed sample profiles + 5 roster placeholders
export const PLAYERS = {
  'eli-m': {
    id: 'eli-m',
    name: 'Eli M.',
    jersey: '14',
    classOf: 'Class of 2027',
    grade: '11th',
    age: 16,
    ageGroup: '17u',
    position: 'Wing',
    height: '6’4”',
    weight: '185 lb',
    wingspan: '6’8”',
    handed: 'Right',
    archetype: 'Two-way perimeter scorer',
    nickname: '"Two-Way"',
    hometown: 'Springfield, MO',
    photos: [
      { label: 'PORTRAIT',      sub: '// COACH-FACING HEADSHOT',  aspect: '3/4' },
      { label: 'GAME ACTION',   sub: '// PULL-UP MIDRANGE · HCHB', aspect: '4/5' },
      { label: 'CHARACTER',     sub: '// DEVOTION CIRCLE',         aspect: '1/1' },
    ],
    stats: {
      season: '2025–26',
      ppg: '21.1', rpg: '7.2', apg: '3.8', spg: '1.6', bpg: '0.9',
      fg: '52.4%', three: '38.1%', ft: '83.7%',
      gp: '38',
    },
    careerHighs: [
      ['41', 'PTS',  'vs Springfield Catholic · Jan 14, 2026'],
      ['12', 'REB',  'vs Iowa BIG · Mar 02, 2026'],
      ['8',  'AST',  'vs KS Premier · Feb 09, 2026'],
      ['6',  '3PM',  'vs Indiana Heat · Knightstown closer'],
    ],
    badges: ['Clutch Shooter', 'Lockdown Defender', 'Glass Dominator'],
    badgesInProgress: ['Court Visionary'],
    awards: [
      { y: '2026', t: 'NCHBC All-Tournament · Springfield' },
      { y: '2026', t: '3A All-State Honorable Mention' },
      { y: '2025', t: 'HCHB Final Four · 17u' },
    ],
    academics: {
      gpa: '4.10', gpaScale: 'weighted (4.0)',
      act: '28', sat: '—',
      iready: '92nd %ile',
      interests: 'Mechanical Engineering · Faith & Leadership',
      references: ['Coach Don Hamilton', 'Pastor R. Calloway', 'Mr. T. Reeves (Math)'],
    },
    socials: { hudl: 'hudl.com/eli-m', x: '@eli_m14', ig: '@eli.m.hoops' },
    highlight: { id: 'dQw4w9WgXcQ', title: 'Eli M. · Senior Season Mix · 2025–26' },
    coachQuote: {
      text: 'If we win the game, Eli probably guarded their best player. He doesn’t get sped up. He doesn’t need 25 shots. He just keeps making the right read.',
      attr: 'Coach Jason Hill · Director of Player Development',
    },
    testimony: 'Faith isn’t a halftime speech for me. It’s the reason I can lose a possession and still play the next one free.',
    contact: {
      name: 'Coach Don Hamilton',
      role: 'Athletic Director · Inquiries on Eli',
      email: 'recruiting@warriorsacademy.com',
      phone: '417 · — · ——',
    },
  },

  'jude-h': {
    id: 'jude-h',
    name: 'Jude H.',
    jersey: '03',
    classOf: 'Class of 2030',
    grade: '8th',
    age: 13,
    ageGroup: '14u',
    position: 'Shooting Guard',
    height: '6’1”',
    weight: '155 lb',
    wingspan: '6’3”',
    handed: 'Right',
    archetype: 'Movement shooter',
    nickname: '"The Knockdown"',
    hometown: 'Nixa, MO',
    photos: [
      { label: 'PORTRAIT',   sub: '// SHOP TEAM-GEAR FIT',     aspect: '3/4' },
      { label: 'JUMPER',     sub: '// RELEASE · DR. DISH BAY', aspect: '4/5' },
      { label: 'FAMILY',     sub: '// HCHB POST-GAME',         aspect: '1/1' },
    ],
    stats: {
      season: '2025–26',
      ppg: '18.4', rpg: '5.1', apg: '3.2', spg: '1.4', bpg: '0.3',
      fg: '49.1%', three: '41.0%', ft: '88.2%',
      gp: '42',
    },
    careerHighs: [
      ['34', 'PTS',  'vs Indiana Premier · Knightstown'],
      ['7',  '3PM',  'vs Wichita Storm · Mar 2026'],
      ['6',  'AST',  'vs Iowa Heat · Feb 2026'],
      ['9',  'REB',  'vs STL Eagles · Oct 2025'],
    ],
    badges: ['Clutch Shooter', 'Court Visionary'],
    badgesInProgress: ['Lockdown Defender'],
    awards: [
      { y: '2026', t: 'HCHB All-Tournament · 14u' },
      { y: '2025', t: 'NCHBC Springfield Selected' },
      { y: '2025', t: 'Warriors Most Improved · Year 1' },
    ],
    academics: {
      gpa: '3.85', gpaScale: 'unweighted (4.0)',
      act: '—', sat: '—',
      iready: '90th %ile',
      interests: 'Coding · Sports Broadcasting',
      references: ['Coach Jason Hill', 'Coach Dee Hamilton'],
    },
    socials: { hudl: 'hudl.com/jude-h', x: '—', ig: '@jude.knockdown' },
    highlight: { id: 'dQw4w9WgXcQ', title: 'Jude H. · 14u Mid-Season Mix · 2025–26' },
    coachQuote: {
      text: 'He shoots it the same way at 6:45 in the morning on Dr. Dish as he does in the fourth quarter at NCHBC. That’s the whole point of Warriors.',
      attr: 'Coach Don Hamilton · Athletic Director',
    },
    testimony: 'My dad told me a shot doesn’t care if you’re tired. Practice gives you the right to not care either.',
    contact: {
      name: 'Coach Jason Hill',
      role: 'Director of Player Development · Inquiries on Jude',
      email: 'recruiting@warriorsacademy.com',
      phone: '417 · — · ——',
    },
  },

  'cal-r': {
    id: 'cal-r',
    name: 'Cal R.',
    jersey: '11',
    classOf: 'Class of 2032',
    grade: '6th',
    age: 11,
    ageGroup: '12u',
    position: 'Point Guard',
    height: '5’4”',
    weight: '110 lb',
    wingspan: '5’6”',
    handed: 'Left',
    archetype: 'Floor general',
    nickname: '"The General"',
    hometown: 'Republic, MO',
    photos: [
      { label: 'PORTRAIT',   sub: '// TEAM PHOTO DAY',         aspect: '3/4' },
      { label: 'HANDLE',     sub: '// LEFT-HAND PUSH · NCHBC', aspect: '4/5' },
      { label: 'CHARACTER',  sub: '// WITH LITTLE BROTHER',    aspect: '1/1' },
    ],
    stats: {
      season: '2025–26',
      ppg: '14.2', rpg: '3.6', apg: '7.1', spg: '2.1', bpg: '0.1',
      fg: '48.3%', three: '34.7%', ft: '79.0%',
      gp: '36',
    },
    careerHighs: [
      ['16', 'AST',  'vs Iowa Heat · Mar 2026'],
      ['22', 'PTS',  'vs Springfield Storm'],
      ['6',  'STL',  'vs KS Premier'],
      ['4',  '3PM',  'vs STL Eagles'],
    ],
    badges: ['Court Visionary'],
    badgesInProgress: ['Clutch Shooter', 'Lockdown Defender'],
    awards: [
      { y: '2025', t: '#2 Nationally · HCHB 12U Championship (team)' },
      { y: '2025', t: 'NCHBC Springfield · 12u All-Tournament' },
    ],
    academics: {
      gpa: '3.90', gpaScale: 'unweighted (4.0)',
      act: '—', sat: '—',
      iready: '88th %ile',
      interests: 'Book club captain · early entrepreneur track',
      references: ['Coach Dee Hamilton'],
    },
    socials: { hudl: '—', x: '—', ig: '—' },
    highlight: { id: 'dQw4w9WgXcQ', title: 'Cal R. · 12u Highlights · NCHBC 2025–26' },
    coachQuote: {
      text: 'Cal sees the play one beat ahead. Coachable. He’ll already be unselfish before he knows what unselfish is.',
      attr: 'Coach Dee Hamilton · Youth Spiritual Leader',
    },
    testimony: 'I want my teammates to score before I do. That’s the job.',
    contact: {
      name: 'Coach Dee Hamilton',
      role: '12u Head Coach · Inquiries on Cal',
      email: 'recruiting@warriorsacademy.com',
      phone: '417 · — · ——',
    },
  },
}

// ============================================================
// TEAMS — roster grouped by age group (boys); girls forming
// ============================================================

export const TEAMS = [
  {
    id: 'team-12u', short: '12U', label: 'Boys 12U', flagship: true,
    tag: '#2 Nationally', season: 'HCHB 12U Champions · 2025', coach: 'Coach Dee Hamilton',
    blurb: 'The flagship. Gold Ball champions and the #2-ranked 12U team in the country — in year one.',
    players: ['cal-r'], openSpots: 2,
  },
  {
    id: 'team-10u', short: '10U', label: 'Boys 10U',
    tag: 'Forming · first season', season: '2025–26', coach: 'Coach Jason Hill',
    blurb: 'Our youngest Warriors. Fundamentals, footwork, and the Badge Economy from day one.',
    players: [], openSpots: 4,
  },
  {
    id: 'team-14u', short: '14U', label: 'Boys 14U',
    tag: 'HCHB All-Tournament', season: '2025–26', coach: 'Coach Jason Hill',
    blurb: 'The development engine — where shooters get built and recruiting profiles start to matter.',
    players: ['jude-h'], openSpots: 3,
  },
  {
    id: 'team-16u', short: '16U', label: 'Boys 16U',
    tag: 'Roster forming', season: '2025–26', coach: 'Coach Don Hamilton',
    blurb: 'College eyes start here. Every 16U Warrior carries a recruiting-ready profile.',
    players: [], openSpots: 4,
  },
  {
    id: 'team-18u', short: '18U', label: 'Boys 18U',
    tag: 'Recruiting class', season: '2025–26', coach: 'Coach Don Hamilton',
    blurb: 'Our oldest Warriors — the recruiting front line, with profiles built for college coaches.',
    players: ['eli-m'], openSpots: 3,
  },
]
