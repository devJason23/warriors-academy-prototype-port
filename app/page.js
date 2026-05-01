import Btn from '../components/ui/Btn'
import Eyebrow from '../components/ui/Eyebrow'
import LiteYouTube from '../components/ui/LiteYouTube'

function PriceLine({ tier, price, featured }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        padding: '20px 24px',
        background: featured ? 'var(--ink)' : 'transparent',
        color: featured ? 'var(--paper)' : 'var(--ink)',
        border: featured ? '1px solid var(--brass)' : '1px solid rgba(11,11,13,0.12)',
        borderRadius: 4,
      }}
    >
      <div>
        <div className="mono" style={{ color: featured ? 'var(--brass)' : 'rgba(11,11,13,0.5)' }}>{tier}</div>
      </div>
      <div style={{ fontFamily: 'var(--f-display)', fontSize: 32, lineHeight: 1 }}>{price}</div>
    </div>
  )
}

function CtaPath({ num, stage, title, desc, label, href, featured, disabled }) {
  const inner = (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <span className="mono" style={{ color: 'var(--brass)' }}>{num}</span>
        <span className="mono" style={{ color: 'var(--muted)' }}>{stage}</span>
      </div>
      <div style={{ fontFamily: 'var(--f-display)', fontSize: 36, lineHeight: 1, textTransform: 'uppercase', marginTop: 8 }}>{title}</div>
      <p className="body" style={{ fontSize: 14 }}>{desc}</p>
      <div
        style={{
          marginTop: 'auto',
          paddingTop: 16,
          fontFamily: 'var(--f-mono)',
          fontSize: 11,
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          color: featured ? 'var(--paper)' : 'var(--muted)',
        }}
      >
        {label} <span style={{ color: featured ? 'var(--brass)' : 'inherit' }}>→</span>
      </div>
    </>
  )
  const style = {
    padding: 40,
    background: featured
      ? 'linear-gradient(180deg, rgba(142,31,43,0.15), transparent 80%) var(--ink-2)'
      : 'var(--ink-2)',
    border: featured ? '1px solid var(--accent)' : '1px solid var(--ink-4)',
    borderRadius: 8,
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.6 : 1,
    transition: 'all .18s',
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    textDecoration: 'none',
    color: 'inherit',
  }
  if (disabled || !href) return <div style={style}>{inner}</div>
  return (
    <a href={href} style={style}>
      {inner}
    </a>
  )
}

const dayTeaseBlocks = [
  { time: '9:00 AM', label: 'Prayer · Devotion · Warmup' },
  { time: '9:30 AM', label: 'Athletic Training (basketball + ATG)' },
  { time: '1:00 PM', label: 'Entrepreneur Unschool' },
  { time: '2:30 PM', label: 'Film + Big Brother Mentorship' },
]

const collapsedPillars = [
  { num: '01', name: 'Elite Athletic Training', body: 'ATG. Dr. Dish. Shoot 360. Plus the only mandatory golf season in basketball training.', link: '/training' },
  { num: '02', name: 'Real Businesses, Real Money', body: 'Athletes build, market, and run real businesses — not simulations.', link: '/training' },
  { num: '03', name: 'Christ at the Center', body: 'Every day opens in prayer. Discipleship is the spine, not a side dish.', link: '/day' },
  { num: '04', name: 'Warrior Life · Mission Control', body: 'Daily app for training, devotion, business, and accountability. Launching this season.', link: '/warrior-life-app' },
]

export default function HomePage() {
  return (
    <div className="page-enter">

      {/* 1 · HERO */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="hero-dot"></span>
            <span className="mono" style={{ color: 'var(--paper)' }}>Warriors Academy</span>
            <span className="mono" style={{ color: 'var(--muted)' }}>Springfield, MO · Est. 2024</span>
          </div>
          <h1 className="h-hero hero-title">
            Train Like<br />
            a Warrior.<br />
            Build Like <span className="accent">a Founder.</span><br />
            Live Like a Champion.
          </h1>
          <p className="hero-scripture">&ldquo;I can do all things through Christ who strengthens me.&rdquo; — Philippians 4:13</p>
          <p className="hero-sub">
            A Christ-centered 4-day homeschool athletic academy for serious student-athletes ages 10–18. Elite training. Real businesses. Family evenings back. The first tech-forward Christian basketball academy.
          </p>
          <div className="hero-actions">
            <Btn kind="primary" href="/experience">Spend a Day With Us</Btn>
            <Btn kind="ghost" href="/case">Why Not Traditional School</Btn>
          </div>
          <div className="hero-trust">
            <div><strong>#2 Nationally</strong><br />HCHB 12U · 2025</div>
            <div><strong>36,862 Shots</strong><br />Dr. Dish · Half Season</div>
            <div><strong>Only ATG Hub</strong><br />Within 200 Miles</div>
            <div><strong>4 Days a Week</strong><br />Fridays Off for Family</div>
          </div>
        </div>
      </section>

      {/* 2 · CHAMPIONS BAND */}
      <section className="champions">
        <div className="champions-wrap">
          <div className="champions-photo">
            <img src="/nationals-team.webp" alt="Warriors 12U team — 2025 Gold Ball Tournament Champions · #2 in the Nation · 12u" />
          </div>
          <div className="champions-copy">
            <div className="mono" style={{ color: 'var(--brass)', letterSpacing: '0.2em' }}>2025 · HCHB Nationals · Springfield, MO</div>
            <h2 className="h-section" style={{ marginTop: 20, marginBottom: 20 }}>
              Gold Ball Tournament Champions ·<br />
              <span style={{ fontFamily: 'var(--f-serif)', fontStyle: 'italic', textTransform: 'none', color: 'var(--brass)', letterSpacing: '-0.02em' }}>Currently Ranked #2 in the Nation (12u)</span>
            </h2>
            <p className="lead" style={{ color: 'rgba(245,242,236,0.82)', maxWidth: '52ch' }}>
              Warriors 12u won the National Gold Ball Tournament in 2025 and finished as the #2-ranked 12u team in the country. The Undisputed National Championship (the unbeaten bracket within the national tournament) went to a different team — we lost that final game. We&apos;re proud of the trophy. We&apos;re hungrier for the one we didn&apos;t win.
            </p>
            <div className="champions-meta">
              <div>
                <div className="mono" style={{ color: 'var(--muted)' }}>Division</div>
                <div className="champions-stat">12U</div>
              </div>
              <div>
                <div className="mono" style={{ color: 'var(--muted)' }}>Teams in Division</div>
                <div className="champions-stat">44</div>
              </div>
              <div>
                <div className="mono" style={{ color: 'var(--muted)' }}>Final Rank</div>
                <div className="champions-stat" style={{ color: 'var(--brass)' }}>#2</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 · RECEIPTS STRIP */}
      <section className="receipts">
        <div className="wrap">
          <div className="receipts-row">
            <div className="receipt">
              <span className="receipt-stat">#2<span className="unit">nationally</span></span>
              <span className="receipt-label">HCHB 12U Championship · 2025</span>
            </div>
            <div className="receipt">
              <span className="receipt-stat">50+<span className="unit">games</span></span>
              <span className="receipt-label">School Ball · St. Louis, Wichita, Indiana</span>
            </div>
            <div className="receipt">
              <span className="receipt-stat">4<span className="unit">hrs/day</span></span>
              <span className="receipt-label">Elite Training, Inside the School Day</span>
            </div>
            <div className="receipt">
              <span className="receipt-stat">100%<span className="unit">faith-first</span></span>
              <span className="receipt-label">Daily Devotion · Christ-Centered Mentorship</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4 · WARRIORS DAY — TEASE (replaces full schedule, deep-link to /day) */}
      <section className="section">
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 72, alignItems: 'center' }}>
            <div>
              <Eyebrow>A Day at Warriors</Eyebrow>
              <h2 className="h-section" style={{ marginTop: 16, marginBottom: 24 }}>
                What four days a week<br />
                <span style={{ fontFamily: 'var(--f-serif)', fontStyle: 'italic', textTransform: 'none', color: 'var(--accent)' }}>actually looks like.</span>
              </h2>
              <p className="lead" style={{ marginBottom: 28 }}>
                Prayer at 9. Two hours of elite training plus dedicated ATG. Family lunch with the coaches. An afternoon building real businesses. Film study and Big Brother mentorship before pickup.
              </p>
              <Btn kind="primary" href="/day">See a Full Day at Warriors</Btn>
            </div>
            <div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
                {dayTeaseBlocks.map((b, i) => (
                  <div
                    key={i}
                    style={{
                      padding: '24px 20px',
                      background: 'var(--ink-2)',
                      border: '1px solid var(--ink-4)',
                      borderRadius: 'var(--radius)',
                    }}
                  >
                    <div className="mono" style={{ color: 'var(--accent)', fontSize: 11, letterSpacing: '0.18em', marginBottom: 10 }}>{b.time}</div>
                    <div style={{ fontFamily: 'var(--f-display)', fontSize: 22, color: 'var(--paper)', letterSpacing: '-0.005em' }}>{b.label}</div>
                  </div>
                ))}
              </div>
              <p className="mono" style={{ marginTop: 16, color: 'var(--muted)', fontStyle: 'italic' }}>
                Example day — each team&apos;s rotation varies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5 · THE CASE TEASER */}
      <section className="section on-paper">
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, marginBottom: 48, alignItems: 'end' }}>
            <div>
              <Eyebrow style={{ color: 'var(--accent)' }}>The Case Against Traditional School</Eyebrow>
              <h2 className="h-section" style={{ marginTop: 16 }}>The system wasn&apos;t<br />built for your kid.</h2>
            </div>
            <p className="lead" style={{ color: 'rgba(11,11,13,0.72)' }}>
              The modern school model was copied from 1800s Prussia and standardized in 1892 to produce factory workers. It wasn&apos;t designed for athletes. It wasn&apos;t designed for entrepreneurs. It definitely wasn&apos;t designed for your family.
            </p>
          </div>

          <div className="compare">
            <div className="compare-col bad">
              <div className="compare-eyebrow">The Traditional Model</div>
              <h3 className="h-sub compare-title" style={{ color: 'var(--paper)' }}>7 hours of<br />seat time.</h3>
              <div className="compare-item"><span className="compare-glyph">—</span><span>7–8 hours of classroom seat time daily</span></div>
              <div className="compare-item"><span className="compare-glyph">—</span><span>Exhausted by the time practice starts</span></div>
              <div className="compare-item"><span className="compare-glyph">—</span><span>Homework kills family evenings</span></div>
              <div className="compare-item"><span className="compare-glyph">—</span><span>Zero entrepreneurship, zero technology mastery</span></div>
              <div className="compare-item"><span className="compare-glyph">—</span><span>Designed for factory workers, not athletes</span></div>
            </div>
            <div className="compare-col good">
              <div className="compare-eyebrow">The Warriors Way</div>
              <h3 className="h-sub compare-title" style={{ color: 'var(--paper)' }}>4 days. Built<br />for your kid.</h3>
              <div className="compare-item"><span className="compare-glyph">✓</span><span>4-day focused schedule with parent-led academics</span></div>
              <div className="compare-item"><span className="compare-glyph">✓</span><span>Up to 4 hours of elite training in the school day</span></div>
              <div className="compare-item"><span className="compare-glyph">✓</span><span>Fridays and evenings are family time again</span></div>
              <div className="compare-item"><span className="compare-glyph">✓</span><span>Every student runs a real business — and can earn</span></div>
              <div className="compare-item"><span className="compare-glyph">✓</span><span>Christ-centered mentorship and discipleship every day</span></div>
            </div>
          </div>

          <div style={{ marginTop: 48, textAlign: 'center' }}>
            <Btn kind="ghost" href="/case">Read the full case →</Btn>
          </div>
        </div>
      </section>

      {/* 6 · ALTERNATIVE SCHOOLS + ATHLETES WHO ALREADY LEFT — Round 4 §7 */}
      <section className="section" style={{ background: 'var(--ink)' }}>
        <div className="wrap">
          <Eyebrow>The Model Already Works</Eyebrow>
          <h2 className="h-section" style={{ marginTop: 16, marginBottom: 24, color: 'var(--paper)' }}>
            We didn&apos;t invent this.<br />
            <span style={{ fontFamily: 'var(--f-serif)', fontStyle: 'italic', textTransform: 'none', color: 'var(--brass)' }}>Alternative schools across the country</span><br />
            are doing it now.
          </h2>
          <p className="lead" style={{ maxWidth: '70ch', fontStyle: 'italic', marginBottom: 56 }}>
            Warriors didn&apos;t invent the alternative-school model. Six of the most respected athletic and academic academies in the country are already doing versions of this — and the most elite athletes in the world all left the traditional classroom. You&apos;re not the first. You&apos;re just looking at it now.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 64, alignItems: 'start' }}>
            {/* LEFT — 6 alternative schools, 3×2 grid */}
            <div>
              <div className="mono" style={{ color: 'var(--brass)', marginBottom: 20, letterSpacing: '0.18em' }}>Six Alternative Schools</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
                {[
                  { name: 'IMG Academy', loc: 'Bradenton, FL', line: 'The gold standard. Pro pipeline. $90K+ tuition.' },
                  { name: 'Combine Academy', loc: 'Charlotte, NC', line: 'Hybrid academic-athletic model for elite basketball.' },
                  { name: 'Iowa United Prep', loc: 'Iowa', line: 'Christian-rooted basketball academy.' },
                  { name: 'Acton Academy', loc: '300+ campuses', line: 'Self-directed mastery learning network.' },
                  { name: 'Alpha School', loc: 'Austin, TX', line: 'Top 1–2% nationally · 2-hour academic days.' },
                  { name: 'Colossal Academy', loc: 'Miami, FL', line: 'Forbes-featured · 3 hrs core academics + project-based.' },
                ].map((s, i) => (
                  <div
                    key={i}
                    style={{
                      padding: 24,
                      background: 'rgba(245,242,236,0.04)',
                      border: '1px solid var(--ink-4)',
                      borderRadius: 4,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 8,
                    }}
                  >
                    <div style={{ fontFamily: 'var(--f-display)', fontSize: 22, color: 'var(--paper)', lineHeight: 1.05 }}>{s.name}</div>
                    <div className="mono" style={{ color: 'var(--accent)', fontSize: 11, letterSpacing: '0.16em' }}>{s.loc}</div>
                    <p style={{ fontSize: 14, color: 'rgba(245,242,236,0.7)', lineHeight: 1.5, margin: 0 }}>{s.line}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — 5 athletes vertical stack */}
            <div>
              <div className="mono" style={{ color: 'var(--brass)', marginBottom: 20, letterSpacing: '0.18em' }}>Athletes Who Left the Classroom</div>
              <div style={{ display: 'grid', gap: 12 }}>
                {[
                  { name: 'Tim Tebow', headline: 'Football · Heisman Trophy' },
                  { name: 'Simone Biles', headline: 'Gymnastics · 11-time Olympic medalist' },
                  { name: 'Venus & Serena Williams', headline: 'Tennis · 30 Grand Slam singles between them' },
                  { name: 'Blake Griffin', headline: 'Basketball · NBA #1 overall pick · 6× All-Star' },
                  { name: 'Shaun White', headline: 'Snowboarding · 3× Olympic gold' },
                ].map((a, i) => (
                  <div
                    key={i}
                    style={{
                      padding: '18px 20px',
                      background: 'rgba(245,242,236,0.04)',
                      border: '1px solid var(--ink-4)',
                      borderRadius: 4,
                    }}
                  >
                    <div style={{ fontFamily: 'var(--f-display)', fontSize: 18, color: 'var(--paper)', lineHeight: 1.05, marginBottom: 4 }}>{a.name}</div>
                    <div style={{ fontSize: 13, color: 'rgba(245,242,236,0.7)', lineHeight: 1.4, marginBottom: 8 }}>{a.headline}</div>
                    <div className="mono" style={{ color: 'var(--accent)', fontSize: 10, letterSpacing: '0.16em' }}>Homeschooled</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div style={{ marginTop: 56, textAlign: 'center' }}>
            <Btn kind="ghost" href="/case">See the full case →</Btn>
            <p style={{ marginTop: 32, fontSize: 14, lineHeight: 1.6, color: 'rgba(245,242,236,0.6)', fontStyle: 'italic', maxWidth: '60ch', marginInline: 'auto' }}>
              Worried about teaching algebra at 9 PM? Warriors families partner with Numerade for AI video tutoring and live tutor help — so parents don&apos;t have to be experts in every subject.
            </p>
          </div>
        </div>
      </section>

      {/* 7 · FOUR PILLARS — COLLAPSED */}
      <section className="section on-paper">
        <div className="wrap">
          <Eyebrow style={{ color: 'var(--accent)' }}>Tech-Forward · Christ-Centered</Eyebrow>
          <h2 className="h-section" style={{ marginTop: 16, marginBottom: 48, color: 'var(--ink)' }}>
            Four pillars.<br />
            <span style={{ fontFamily: 'var(--f-serif)', fontStyle: 'italic' }}>One Warrior.</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32 }}>
            {collapsedPillars.map((p, i) => (
              <div key={i} style={{ borderTop: '2px solid var(--ink)', paddingTop: 24 }}>
                <div className="mono" style={{ color: 'rgba(11,11,13,0.55)', fontSize: 11, letterSpacing: '0.18em', marginBottom: 12 }}>PILLAR · {p.num}</div>
                <h3 style={{ fontFamily: 'var(--f-display)', fontSize: 26, color: 'var(--ink)', margin: '0 0 12px', letterSpacing: '-0.005em' }}>{p.name}</h3>
                <p style={{ color: 'rgba(11,11,13,0.7)', fontSize: 15, lineHeight: 1.55, margin: '0 0 16px' }}>{p.body}</p>
                <a
                  href={p.link}
                  style={{
                    color: 'var(--accent)',
                    fontFamily: 'var(--f-mono)',
                    fontSize: 11,
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                  }}
                >
                  Go Deeper →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8 · NCHBC / SPRINGFIELD ADVANTAGE */}
      <section className="section" style={{ background: 'var(--ink-2)', borderTop: '1px solid var(--ink-4)', borderBottom: '1px solid var(--ink-4)' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 64, alignItems: 'center', marginBottom: 64 }}>
            <div>
              <Eyebrow>The Springfield Advantage</Eyebrow>
              <h2 className="h-section" style={{ marginTop: 16, marginBottom: 24 }}>
                Your backyard<br />is the <span style={{ fontFamily: 'var(--f-serif)', fontStyle: 'italic', textTransform: 'none', color: 'var(--brass)' }}>national capital</span> of homeschool basketball.
              </h2>
              <p className="lead" style={{ maxWidth: '54ch' }}>
                Every March, the <strong style={{ color: 'var(--paper)' }}>National Christian HomeSchool Basketball Championships</strong> turns Springfield into the largest annual visitor event in the city. 416 teams. 19 states. Hawaii to Maine. Over 1,000 games across 20+ venues, all decided right here.
              </p>
              <p className="lead" style={{ maxWidth: '54ch', marginTop: 20 }}>
                Most teams average around 400 miles to come compete for the national title. Warriors drive ten minutes. Home court. Home crowd. Home advantage.
              </p>
            </div>
            <div>
              <figure
                style={{
                  margin: 0,
                  position: 'relative',
                  aspectRatio: '4/5',
                  minHeight: 480,
                  borderRadius: 2,
                  overflow: 'hidden',
                  border: '1px solid var(--ink-4)',
                }}
              >
                <img
                  src="/nationals-coaches.webp"
                  alt="Warriors coaching staff with the NCHBC Gold Ball trophy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 35%', display: 'block' }}
                />
                <figcaption
                  style={{
                    position: 'absolute',
                    left: 16,
                    right: 16,
                    bottom: 16,
                    padding: '10px 14px',
                    background: 'rgba(11,11,13,0.78)',
                    border: '1px solid rgba(200,165,100,0.3)',
                    fontFamily: 'var(--f-mono)',
                    fontSize: 10,
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    color: 'var(--brass)',
                    backdropFilter: 'blur(6px)',
                  }}
                >
                  Coaching Staff · NCHBC Nationals · Springfield
                </figcaption>
              </figure>
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 1,
              background: 'var(--ink-4)',
              border: '1px solid var(--ink-4)',
              borderRadius: 4,
              overflow: 'hidden',
            }}
          >
            {[
              ['416', 'Teams · NCHBC 2026', 'From 19 states · including Hawaii'],
              ['3,500', 'Athletes & Coaches', 'Converging on Springfield every March'],
              ['10,000', 'Fans in Attendance', 'Largest annual event in the city'],
              ['$30M+', 'Economic Impact by 2030', '$5.5–6M in direct spending each year'],
            ].map(([n, l, s], i) => (
              <div key={i} style={{ background: 'var(--ink)', padding: '32px 28px' }}>
                <div style={{ fontFamily: 'var(--f-display)', fontSize: 56, lineHeight: 1, color: 'var(--paper)' }}>{n}</div>
                <div className="mono" style={{ color: 'var(--brass)', marginTop: 12 }}>{l}</div>
                <div style={{ fontSize: 13, color: 'rgba(245,242,236,0.6)', marginTop: 8, lineHeight: 1.5 }}>{s}</div>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: 48,
              padding: '32px 40px',
              background: 'linear-gradient(135deg, rgba(142,31,43,0.2), transparent 70%)',
              borderLeft: '3px solid var(--accent)',
              borderRadius: '0 8px 8px 0',
            }}
          >
            <div className="mono" style={{ color: 'var(--accent-hi)', marginBottom: 12 }}>Why this matters for your athlete</div>
            <p className="lead" style={{ maxWidth: '68ch' }}>
              When you join Warriors Academy, you aren&apos;t joining a local co-op. You&apos;re stepping into the most competitive homeschool basketball ecosystem in America — and you&apos;re already home. Sleep in your own bed the night before you play in nationals.
            </p>
          </div>
        </div>
      </section>

      {/* 9 · GAMES + HOOSIERS + Four Road Trips */}
      <section className="section on-paper">
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 64, alignItems: 'center' }}>
            <div>
              <Eyebrow style={{ color: 'var(--accent)' }}>School Ball · Four Overnight Trips</Eyebrow>
              <h2 className="h-section" style={{ marginTop: 16, marginBottom: 24, color: 'var(--ink)' }}>
                We play on the floor<br />where <span style={{ fontFamily: 'var(--f-serif)', fontStyle: 'italic', textTransform: 'none', color: 'var(--accent)' }}>Hickory</span> won.
              </h2>
              <p className="lead" style={{ color: 'rgba(11,11,13,0.72)', fontStyle: 'italic', marginBottom: 20 }}>
                Most games are within day-driving distance. Four times a year — and only four — we go overnight.
              </p>
              <p className="body" style={{ color: 'rgba(11,11,13,0.7)', fontSize: 16, lineHeight: 1.7 }}>
                One of those four trips is inside the <strong>original Hoosier Gym</strong> in Knightstown, Indiana. The actual hardwood where the movie was filmed. The actual baskets Jimmy Chitwood shot on. Our kids don&apos;t just watch the movie in film study. They lace up and play on it.
              </p>
              <div
                style={{
                  marginTop: 32,
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 24,
                  paddingTop: 32,
                  borderTop: '1px solid rgba(11,11,13,0.12)',
                }}
              >
                <div>
                  <div style={{ fontFamily: 'var(--f-display)', fontSize: 44, color: 'var(--ink)', lineHeight: 1 }}>4</div>
                  <div className="mono" style={{ color: 'rgba(11,11,13,0.55)', marginTop: 8 }}>Overnight trips · per season</div>
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--f-display)', fontSize: 44, color: 'var(--ink)', lineHeight: 1 }}>4 States</div>
                  <div className="mono" style={{ color: 'rgba(11,11,13,0.55)', marginTop: 8 }}>MO · AR · KS · IN</div>
                </div>
              </div>
            </div>
            <div>
              <figure
                style={{
                  margin: 0,
                  position: 'relative',
                  aspectRatio: '4/3',
                  minHeight: 420,
                  borderRadius: 2,
                  overflow: 'hidden',
                  border: '1px solid rgba(11,11,13,0.15)',
                  background: '#0A0A0C',
                }}
              >
                <img
                  src="/hoosier-gym.jpg"
                  alt="Hoosier Gym — Knightstown, Indiana · the original floor from the movie Hoosiers"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: '50% 45%',
                    filter: 'grayscale(100%) contrast(1.08) brightness(0.88)',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, transparent 55%, rgba(11,11,13,0.55) 100%)',
                    pointerEvents: 'none',
                  }}
                ></div>
                <figcaption
                  style={{
                    position: 'absolute',
                    left: 16,
                    bottom: 16,
                    padding: '8px 12px',
                    background: 'rgba(11,11,13,0.8)',
                    border: '1px solid rgba(200,165,100,0.3)',
                    fontFamily: 'var(--f-mono)',
                    fontSize: 10,
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    color: 'var(--brass)',
                    backdropFilter: 'blur(6px)',
                  }}
                >
                  Hoosier Gym · Knightstown, IN · The Original Floor
                </figcaption>
              </figure>
            </div>
          </div>

          {/* FOUR ROAD TRIPS */}
          <div style={{ marginTop: 88 }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'baseline',
                justifyContent: 'space-between',
                marginBottom: 28,
                paddingBottom: 20,
                borderBottom: '1px solid rgba(11,11,13,0.14)',
              }}
            >
              <div>
                <Eyebrow style={{ color: 'var(--accent)' }}>The Four Road Trips</Eyebrow>
                <h3
                  style={{
                    fontFamily: 'var(--f-display)',
                    fontSize: 30,
                    color: 'var(--ink)',
                    margin: '10px 0 0',
                    letterSpacing: '-0.005em',
                  }}
                >
                  Four road trips. <span style={{ fontFamily: 'var(--f-serif)', fontStyle: 'italic' }}>The rest is home.</span>
                </h3>
              </div>
              <div className="mono" style={{ color: 'rgba(11,11,13,0.5)', fontSize: 11, letterSpacing: '0.14em' }}>THE FULL SEASON · START TO FINISH</div>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(5, 1fr)',
                gap: 0,
                border: '1px solid rgba(11,11,13,0.16)',
              }}
            >
              {[
                { phase: 'KICKOFF', city: 'St. Louis, MO', detail: 'Season opener · the first road miles of the year.', state: 'MO', trip: true },
                { phase: 'STATE', city: 'Columbia, MO', detail: 'State tournament · the first banner on the board.', state: 'MO', trip: true },
                { phase: 'REGIONALS', city: 'Wichita, KS', detail: 'Regional bracket · the road to Nationals begins here.', state: 'KS', trip: true },
                { phase: 'HOOSIER GAME', city: 'Knightstown, IN', detail: 'One game on the original Hoosier Gym floor.', state: 'IN', trip: true },
                { phase: 'NATIONALS', city: 'Springfield, MO', detail: 'The one that matters most — and we drive ten minutes to it.', state: 'HOME', trip: false },
              ].map((stop, i, arr) => (
                <div
                  key={i}
                  style={{
                    padding: '28px 22px 26px',
                    borderRight: i < arr.length - 1 ? '1px solid rgba(11,11,13,0.1)' : 'none',
                    background: stop.trip ? 'transparent' : 'rgba(200,165,100,0.08)',
                    position: 'relative',
                  }}
                >
                  <div
                    className="mono"
                    style={{
                      color: stop.trip ? 'var(--accent)' : '#8C6F3D',
                      fontSize: 10,
                      letterSpacing: '0.16em',
                      marginBottom: 14,
                    }}
                  >
                    STOP {i + 1}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--f-display)',
                      fontSize: 15,
                      letterSpacing: '0.02em',
                      color: 'var(--ink)',
                      marginBottom: 4,
                      textTransform: 'uppercase',
                    }}
                  >
                    {stop.phase}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--f-serif)',
                      fontStyle: 'italic',
                      fontSize: 17,
                      color: stop.trip ? 'rgba(11,11,13,0.82)' : '#8C6F3D',
                      marginBottom: 12,
                    }}
                  >
                    {stop.city}
                  </div>
                  <p className="body" style={{ fontSize: 13, lineHeight: 1.55, color: 'rgba(11,11,13,0.65)', margin: 0 }}>
                    {stop.detail}
                  </p>
                  <div
                    className="mono"
                    style={{
                      position: 'absolute',
                      top: 18,
                      right: 18,
                      fontSize: 9,
                      letterSpacing: '0.18em',
                      padding: '3px 7px',
                      border: stop.trip ? '1px solid rgba(11,11,13,0.2)' : '1px solid rgba(140,111,61,0.5)',
                      color: stop.trip ? 'rgba(11,11,13,0.55)' : '#8C6F3D',
                      background: stop.trip ? 'transparent' : 'rgba(200,165,100,0.15)',
                    }}
                  >
                    {stop.state}
                  </div>
                </div>
              ))}
            </div>
            <p
              className="mono"
              style={{
                color: 'rgba(11,11,13,0.5)',
                fontSize: 10,
                letterSpacing: '0.14em',
                marginTop: 14,
                textAlign: 'right',
              }}
            >
              FIVE DESTINATIONS · FOUR ROAD TRIPS · ONE HOME FLOOR
            </p>
          </div>
        </div>
      </section>

      {/* 10 · TESTIMONIAL VIDEO */}
      <section className="section" style={{ background: 'var(--ink)' }}>
        <div className="wrap">
          <div style={{ maxWidth: 720, marginBottom: 48 }}>
            <Eyebrow>A Parent&apos;s Voice</Eyebrow>
            <h2 className="h-section" style={{ marginTop: 16, color: 'var(--paper)' }}>
              Listen to a<br />
              <span style={{ fontFamily: 'var(--f-serif)', fontStyle: 'italic', textTransform: 'none', color: 'var(--brass)' }}>Warriors parent.</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 48, alignItems: 'center' }}>
            <LiteYouTube id="LTlJLOo9itU" title="A Warriors parent shares their story" />
            <div>
              <div className="mono" style={{ color: 'var(--brass)', marginBottom: 16 }}>TESTIMONIAL · PARENT OF JUDE</div>
              <p style={{ fontFamily: 'var(--f-serif)', fontStyle: 'italic', fontSize: 22, lineHeight: 1.45, color: 'var(--paper)', marginBottom: 24 }}>
                &ldquo;Hear directly from a Warriors family — why they made the switch, what changed, and what their kid is like at home now.&rdquo;
              </p>
              <div className="mono" style={{ color: 'var(--muted)', fontSize: 11 }}>
                · 2 minute watch<br />
                · Plays in place · no page reload
              </div>
              <div style={{ marginTop: 24 }}>
                <Btn kind="ghost" href="/warriors">Meet the coaches and players</Btn>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11 · TUITION + SCARCITY + FINAL CTA — closing arc */}
      <section className="section on-paper">
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
            <div>
              <Eyebrow style={{ color: 'var(--accent)' }}>Tuition</Eyebrow>
              <h2 className="h-section" style={{ marginTop: 16, marginBottom: 24, color: 'var(--ink)' }}>
                Starts at<br />$4,000 <span style={{ fontFamily: 'var(--f-serif)', fontStyle: 'italic', textTransform: 'none', fontSize: '0.6em' }}>/ year.</span>
              </h2>
              <p className="lead" style={{ color: 'rgba(11,11,13,0.72)' }}>
                Includes all training, tournament fees, uniforms, and a full national travel-ball schedule. Multi-player discounts. Scholarships available. Most importantly: students on our entrepreneur tracks can earn revenue that offsets their tuition — and then some.
              </p>
              <div style={{ marginTop: 32, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <Btn kind="primary" href="/tuition">See full tuition breakdown</Btn>
              </div>
            </div>
            <div style={{ display: 'grid', gap: 12 }}>
              <PriceLine tier="Returning Student" price="$4,000" />
              <PriceLine tier="Multi-Player (2+)" price="$4,400 / ea" featured />
              <PriceLine tier="New Student" price="$4,800" />
              <div
                style={{
                  marginTop: 8,
                  fontFamily: 'var(--f-mono)',
                  fontSize: 11,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'rgba(11,11,13,0.5)',
                }}
              >
                Scholarships available · Payment plans welcome
              </div>
            </div>
          </div>

          <hr style={{ border: 'none', borderTop: '1px solid rgba(11,11,13,0.12)', margin: '88px 0' }} />

          {/* SCARCITY / TRYOUTS — inverted to ink for contrast within closing arc */}
          <div style={{ background: 'var(--ink-2)', padding: '64px 48px', borderRadius: 8, color: 'var(--paper)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: 64, alignItems: 'center' }}>
              <div>
                <Eyebrow>Open Spots · Tryouts Now</Eyebrow>
                <h2 className="h-section" style={{ marginTop: 16, marginBottom: 24 }}>
                  You can&apos;t buy<br />your way <span style={{ fontFamily: 'var(--f-serif)', fontStyle: 'italic', textTransform: 'none', color: 'var(--brass)' }}>in.</span>
                </h2>
                <p className="lead">
                  Tryouts are mandatory. Every age group. Every season. Spots on the team are contingent on tryouts — including for returning players.
                </p>
                <div style={{ marginTop: 28, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                  <Btn kind="primary" href="/experience">Schedule Tryout</Btn>
                  <Btn kind="ghost" href="/experience">Spend a Day With Us</Btn>
                </div>
              </div>
              <div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 8, marginBottom: 32 }}>
                  {[
                    ['10u', 'Boys', '3–4'],
                    ['12u', 'Boys', '2–3'],
                    ['14u', 'Boys', '1–2'],
                    ['16u', 'Boys', '1–2'],
                    ['18u', 'Boys', '1–2'],
                  ].map(([age, sex, open], i) => (
                    <div
                      key={i}
                      style={{
                        padding: 20,
                        background: 'var(--ink)',
                        border: '1px solid var(--ink-4)',
                        borderRadius: 4,
                        textAlign: 'center',
                      }}
                    >
                      <div style={{ fontFamily: 'var(--f-display)', fontSize: 36, color: 'var(--paper)', lineHeight: 1 }}>{age}</div>
                      <div className="mono" style={{ color: 'var(--muted)', marginTop: 6, fontSize: 10 }}>{sex}</div>
                      <div
                        style={{
                          marginTop: 12,
                          paddingTop: 12,
                          borderTop: '1px solid var(--ink-4)',
                          fontFamily: 'var(--f-mono)',
                          fontSize: 11,
                          letterSpacing: '0.14em',
                          color: 'var(--brass)',
                          textTransform: 'uppercase',
                        }}
                      >
                        {open} Open
                      </div>
                    </div>
                  ))}
                </div>
                <div
                  style={{
                    padding: 24,
                    background: 'linear-gradient(135deg, rgba(176,138,62,0.12), transparent 80%)',
                    borderLeft: '3px solid var(--brass)',
                    borderRadius: '0 4px 4px 0',
                  }}
                >
                  <div className="mono" style={{ color: 'var(--brass)', marginBottom: 8 }}>Girls Teams (all ages)</div>
                  <div style={{ fontSize: 14, color: 'rgba(245,242,236,0.78)', lineHeight: 1.6 }}>
                    Forming now.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr style={{ border: 'none', borderTop: '1px solid rgba(11,11,13,0.12)', margin: '88px 0' }} />

          {/* FINAL CTA — three paths */}
          <div style={{ textAlign: 'center', marginBottom: 64, maxWidth: 720, margin: '0 auto 64px' }}>
            <Eyebrow style={{ color: 'var(--accent)' }}>Three Ways In</Eyebrow>
            <h2 className="h-section" style={{ marginTop: 16, color: 'var(--ink)' }}>Pick your next step.</h2>
            <p className="lead" style={{ margin: '24px auto 0', color: 'rgba(11,11,13,0.72)' }}>
              Most families don&apos;t apply on the first visit. That&apos;s by design. Here&apos;s how we meet you where you are.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            <CtaPath
              num="01"
              stage="Curious"
              title="Spend a Day With Us"
              desc="4 summer dates. Training, team building, family lunch, coach Q&A. The fastest way to understand Warriors is to live a day of it."
              label="Warriors Experience Day"
              href="/experience"
              featured
            />
            <CtaPath
              num="02"
              stage="Considering"
              title="Book a 15-min Call"
              desc="Talk to Coach Don. No pitch. Just answers to the specific questions your family has. Scheduled at your convenience."
              label="Book a Call"
              href="#"
            />
            <CtaPath
              num="03"
              stage="Ready"
              title="Start Your Application"
              desc="2–3 spots available per team across 10U–18U boys. All new athletes must complete tryouts and a 1v1 evaluation with our coaching staff."
              label="Apply · Coming Soon"
              disabled
            />
          </div>
        </div>
      </section>
    </div>
  )
}
