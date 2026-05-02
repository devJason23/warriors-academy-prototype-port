import Btn from '../../components/ui/Btn'
import Eyebrow from '../../components/ui/Eyebrow'

function ProofCard({ name, stat, desc, featured }) {
  return (
    <div
      className="proof-card"
      style={
        featured
          ? {
              background: 'linear-gradient(180deg, rgba(142,31,43,0.12), transparent 50%) var(--ink-2)',
              borderTop: '2px solid var(--accent)',
            }
          : {}
      }
    >
      <div className="proof-name">{name}</div>
      <div className="proof-stat">{stat}</div>
      <div className="proof-desc">{desc}</div>
    </div>
  )
}

export default function CasePage() {
  return (
    <div className="page-enter on-paper" style={{ background: 'var(--paper)' }}>

      {/* HERO */}
      <section style={{ padding: '140px 0 80px' }}>
        <div className="wrap-narrow">
          <Eyebrow style={{ color: 'var(--accent)' }}>The Case Against Traditional School</Eyebrow>
          <h1 className="h-hero" style={{ marginTop: 24, marginBottom: 32, color: 'var(--ink)', maxWidth: '18ch' }}>
            The system wasn&apos;t<br />built for <span style={{ fontFamily: 'var(--f-serif)', fontStyle: 'italic', textTransform: 'none', color: 'var(--accent)' }}>your kid.</span>
          </h1>
          <p className="lead" style={{ color: 'rgba(11,11,13,0.72)', fontSize: 22 }}>
            This isn&apos;t a complaint about teachers. Teachers are heroes stuck inside a machine that wasn&apos;t designed for what your family is trying to build. Here&apos;s what the machine actually is, why it&apos;s failing your athlete, and what to do about it.
          </p>
          <div style={{ marginTop: 48, fontFamily: 'var(--f-mono)', fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(11,11,13,0.5)' }}>
            A five-chapter read · ~8 minutes
          </div>
        </div>
      </section>

      {/* PROOF: Not an experiment — lifted verbatim from home.jsx 199–243 */}
      <section className="section" style={{ background: 'var(--ink)', color: 'var(--paper)' }}>
        <div className="wrap">
          <div style={{ maxWidth: 720, marginBottom: 48 }}>
            <Eyebrow>This Model Already Works</Eyebrow>
            <h2 className="h-section" style={{ marginTop: 16, marginBottom: 20, color: 'var(--paper)' }}>
              We didn&apos;t invent this.<br />We&apos;re just the<br />
              <span style={{ fontFamily: 'var(--f-serif)', fontStyle: 'italic', textTransform: 'none', color: 'var(--brass)' }}>first ones</span> doing it here.
            </h2>
            <p className="lead" style={{ color: 'rgba(245,242,236,0.82)' }}>
              Schools across the country are proving that when you replace the factory model with focused academics, real-world business, and elite training — kids don&apos;t just keep up. They dominate.
            </p>
          </div>

          {/* IMG Academy Anchor */}
          <figure
            style={{
              margin: '0 0 56px 0',
              position: 'relative',
              aspectRatio: '16/9',
              maxHeight: 560,
              overflow: 'hidden',
              borderRadius: 2,
              border: '1px solid var(--ink-4)',
              background: '#0A0A0C',
            }}
          >
            <img
              src="/img-fieldhouse.jpg"
              alt="IMG Academy Fieldhouse — Bradenton, Florida"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 55%' }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(90deg, rgba(11,11,13,0.88) 0%, rgba(11,11,13,0.6) 35%, rgba(11,11,13,0) 65%)',
                pointerEvents: 'none',
              }}
            ></div>
            <figcaption
              style={{
                position: 'absolute',
                left: 40,
                top: '50%',
                transform: 'translateY(-50%)',
                maxWidth: 440,
                color: 'var(--paper)',
              }}
            >
              <div className="mono" style={{ color: 'var(--brass)', letterSpacing: '0.2em', marginBottom: 14 }}>The Gold Standard · Bradenton, FL</div>
              <div
                style={{
                  fontFamily: 'var(--f-display)',
                  fontSize: 44,
                  lineHeight: 1.05,
                  textTransform: 'uppercase',
                  color: 'var(--paper)',
                  marginBottom: 18,
                }}
              >
                IMG Academy<br />
                <span
                  style={{
                    fontFamily: 'var(--f-serif)',
                    fontStyle: 'italic',
                    textTransform: 'none',
                    color: 'var(--brass)',
                    fontSize: 40,
                    letterSpacing: '-0.02em',
                  }}
                >Fieldhouse.</span>
              </div>
              <p style={{ fontSize: 16, lineHeight: 1.55, color: 'rgba(245,242,236,0.82)', marginBottom: 16 }}>
                311 D1+ commits from 71 countries. 100% college acceptance. The gold standard for what happens when you train like it matters — and never let academics suffer.
              </p>
              <div
                style={{
                  display: 'flex',
                  gap: 28,
                  paddingTop: 16,
                  borderTop: '1px solid rgba(245,242,236,0.2)',
                  fontFamily: 'var(--f-mono)',
                  fontSize: 11,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'rgba(245,242,236,0.7)',
                }}
              >
                <div><strong style={{ color: 'var(--paper)', fontWeight: 500, display: 'block', fontSize: 15, letterSpacing: '0.08em', marginBottom: 3 }}>600 acres</strong>Bradenton, FL</div>
                <div><strong style={{ color: 'var(--paper)', fontWeight: 500, display: 'block', fontSize: 15, letterSpacing: '0.08em', marginBottom: 3 }}>8 sports</strong>K-12 + Post-Grad</div>
              </div>
            </figcaption>
            <div
              style={{
                position: 'absolute',
                right: 20,
                bottom: 16,
                fontFamily: 'var(--f-mono)',
                fontSize: 9,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'rgba(245,242,236,0.4)',
              }}
            >
              Photo · Fawley Bryant Architecture
            </div>
          </figure>

          <div className="proof-grid">
            <ProofCard name="Acton Academy" stat="300+ campuses · 31 states" desc="Student-led micro-schools. Kids consistently 3–5 grade levels above national average." />
            <ProofCard name="Alpha School" stat="Top 1–2% nationally" desc="AI-powered academics in 2 hours/day. Rest of the day = projects, sport, real-world learning." />
            <ProofCard name="Combine Academy" stat="500+ college scholarships" desc="NBA vet Trevor Booker's 70-acre campus. 2025: added a School of Business & Entrepreneurship." />
            <ProofCard name="IMG Academy" stat="100% college acceptance" desc="The gold standard. 311 D1+ commits from 71 countries. Training-first, academics never suffered." />
            <ProofCard name="Colossal Academy" stat="Featured in Forbes" desc="Students run real companies with mentorship from Shark Tank investors." />
            <ProofCard name="Iowa BIG" stat="97% feel prepared" desc="Public half-day program. 500+ educators have visited to study why it works." />
            <ProofCard name="Elizabeth City" stat="Real Airbnb business" desc="26 middle schoolers operate an actual Airbnb. AI for academics, business for the rest." />
            <ProofCard name="Warriors Academy" stat="Springfield, MO · Est. 2024" desc="Faith-centered. Sport-forward. Entrepreneur-fueled. The first of its kind — anywhere." featured />
          </div>
        </div>
      </section>

      <hr className="rule" />

      {/* CHAPTER 1 */}
      <section className="chapter">
        <div className="wrap-narrow">
          <div className="chapter-num">01</div>
          <Eyebrow style={{ color: 'var(--accent)' }}>The Blueprint</Eyebrow>
          <h2 className="h-section" style={{ color: 'var(--ink)', marginTop: 16, marginBottom: 24 }}>
            What the modern<br />school was actually <span style={{ fontFamily: 'var(--f-serif)', fontStyle: 'italic', textTransform: 'none', color: 'var(--accent)' }}>built for.</span>
          </h2>
          <p className="body" style={{ fontSize: 18, color: 'rgba(11,11,13,0.8)' }}>
            Before compulsory schooling, American literacy rates in the Northeast were estimated above 90%. Kids learned to read at home, from the Bible, from apprenticeships, from each other. Then the model changed.
          </p>
          <p className="body" style={{ fontSize: 18, color: 'rgba(11,11,13,0.8)', marginTop: 20 }}>
            In 1806, Prussia was defeated by Napoleon and decided the answer was a new kind of school — one designed to produce obedient soldiers, obedient workers, and obedient bureaucrats. Age-graded classrooms. Bells between subjects. Central authority over curriculum. In 1852, Massachusetts became the first U.S. state to adopt it. By 1918, every state had followed.
          </p>
          <div className="pullquote">
            <span className="mark">&ldquo;</span>In our dream... we have limitless resources, and the people yield themselves with perfect docility to our molding hand.<span className="mark">&rdquo;</span>
            <div style={{ fontFamily: 'var(--f-mono)', fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--accent)', fontStyle: 'normal', marginTop: 24 }}>
              — Rockefeller General Education Board · Occasional Letter No. 1 · 1906
            </div>
          </div>
          <p className="body" style={{ fontSize: 18, color: 'rgba(11,11,13,0.8)' }}>
            In 1892, the Committee of Ten standardized the American curriculum — 50 minutes per subject, ring the bell, switch. It wasn&apos;t designed around how kids actually learn. It was designed around how a factory actually runs.
          </p>
        </div>
      </section>

      {/* CHAPTER 2 */}
      <section className="chapter">
        <div className="wrap-narrow">
          <div className="chapter-num">02</div>
          <Eyebrow style={{ color: 'var(--accent)' }}>The Six Lessons</Eyebrow>
          <h2 className="h-section" style={{ color: 'var(--ink)', marginTop: 16, marginBottom: 24 }}>
            What school<br />actually <span style={{ fontFamily: 'var(--f-serif)', fontStyle: 'italic', textTransform: 'none', color: 'var(--accent)' }}>teaches.</span>
          </h2>
          <p className="body" style={{ fontSize: 18, color: 'rgba(11,11,13,0.8)', marginBottom: 32 }}>
            John Taylor Gatto was New York State Teacher of the Year three times. In his resignation letter, he laid out the six actual lessons public schools teach — not subjects, but structural lessons baked into the model itself.
          </p>
          <div style={{ display: 'grid', gap: 0 }}>
            {[
              ['Confusion', 'Subjects switch every 50 minutes with no connection between them. Kids learn that meaning is someone else’s problem.'],
              ['Class Position', 'Your grade, track, and tier define your worth. Stay in your lane.'],
              ['Indifference', 'The bell rings. Drop what you care about. Feel nothing too deeply.'],
              ['Emotional Dependency', 'Ask permission to speak, to move, to use the bathroom. Approval comes from above.'],
              ['Intellectual Dependency', 'Wait to be told what to think. Don’t decide what matters.'],
              ['Provisional Self-Esteem', 'Your worth is a number, handed to you by someone with a clipboard.'],
            ].map(([t, d], i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: 32, padding: '24px 0', borderTop: '1px solid rgba(11,11,13,0.1)', alignItems: 'baseline' }}>
                <div style={{ fontFamily: 'var(--f-display)', fontSize: 48, color: 'var(--accent)', lineHeight: 1 }}>0{i + 1}</div>
                <div>
                  <div style={{ fontFamily: 'var(--f-display)', fontSize: 24, textTransform: 'uppercase', color: 'var(--ink)', marginBottom: 6 }}>{t}</div>
                  <div className="body" style={{ fontSize: 16, color: 'rgba(11,11,13,0.7)' }}>{d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHAPTER 3 */}
      <section className="chapter">
        <div className="wrap-narrow">
          <div className="chapter-num">03</div>
          <Eyebrow style={{ color: 'var(--accent)' }}>The Damage · Now</Eyebrow>
          <h2 className="h-section" style={{ color: 'var(--ink)', marginTop: 16, marginBottom: 24 }}>
            What it&apos;s doing<br />to your kid <span style={{ fontFamily: 'var(--f-serif)', fontStyle: 'italic', textTransform: 'none', color: 'var(--accent)' }}>right now.</span>
          </h2>
          <p className="body" style={{ fontSize: 18, color: 'rgba(11,11,13,0.8)' }}>
            The model was shaky when it was built. After 150 years of drift, it&apos;s broken.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, margin: '48px 0' }}>
            {[
              ['45%', 'of high school seniors test below basic in math'],
              ['1T', 'dollars per year spent on K-12 education'],
              ['7–8 hrs', 'daily classroom seat time — then practice, then homework'],
              ['3.7M', 'U.S. kids now homeschooled — fastest-growing model'],
            ].map(([n, l], i) => (
              <div key={i} style={{ padding: '32px 24px', background: 'rgba(11,11,13,0.04)', borderLeft: '3px solid var(--accent)', borderRadius: '0 4px 4px 0' }}>
                <div style={{ fontFamily: 'var(--f-display)', fontSize: 56, color: 'var(--ink)', lineHeight: 1 }}>{n}</div>
                <div className="mono" style={{ color: 'rgba(11,11,13,0.6)', marginTop: 8 }}>{l}</div>
              </div>
            ))}
          </div>
          <p className="body" style={{ fontSize: 18, color: 'rgba(11,11,13,0.8)' }}>
            For serious student-athletes, the math gets worse. Seven hours of seat time. Three hours of practice. Two hours of homework. Dinner at 9pm, if at all. There&apos;s no version of that schedule where athletes perform at their best, sleep enough to recover, or have a real family life.
          </p>
        </div>
      </section>

      {/* CHAPTER 4 */}
      <section className="chapter">
        <div className="wrap-narrow">
          <div className="chapter-num">04</div>
          <Eyebrow style={{ color: 'var(--accent)' }}>The Myth</Eyebrow>
          <h2 className="h-section" style={{ color: 'var(--ink)', marginTop: 16, marginBottom: 24 }}>
            &ldquo;But what about<br /><span style={{ fontFamily: 'var(--f-serif)', fontStyle: 'italic', textTransform: 'none', color: 'var(--accent)' }}>socialization?</span>&rdquo;
          </h2>
          <p className="body" style={{ fontSize: 18, color: 'rgba(11,11,13,0.8)' }}>
            This is the #1 question, so let&apos;s handle it directly. The assumption is that 30 kids the exact same age, in a building for 7 hours, is the ideal environment for social development.
          </p>
          <p className="body" style={{ fontSize: 18, color: 'rgba(11,11,13,0.8)', marginTop: 20 }}>
            In the real world — the one your kid will actually live in — you&apos;re never in a room with 29 other people your exact age. You work with people older than you, younger than you, different from you. You lead. You serve. You collaborate.
          </p>
          <div className="pullquote">
            <span className="mark">&ldquo;</span>87% of peer-reviewed studies show homeschooled students demonstrate superior social and emotional development.<span className="mark">&rdquo;</span>
            <div style={{ fontFamily: 'var(--f-mono)', fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--accent)', fontStyle: 'normal', marginTop: 24 }}>
              — National Home Education Research Institute
            </div>
          </div>
          <p className="body" style={{ fontSize: 18, color: 'rgba(11,11,13,0.8)' }}>
            Warriors Academy is 50+ athletes ages 10 to 18, training together, competing together, eating together, praying together. Older Warriors mentor younger ones through the Badge Economy. Every day your athlete interacts with people above and below them, just like adult life actually works.
          </p>
        </div>
      </section>

      {/* CHAPTER 5 */}
      <section className="chapter">
        <div className="wrap-narrow">
          <div className="chapter-num">05</div>
          <Eyebrow style={{ color: 'var(--accent)' }}>&ldquo;I Can&apos;t Homeschool&rdquo;</Eyebrow>
          <h2 className="h-section" style={{ color: 'var(--ink)', marginTop: 16, marginBottom: 24 }}>
            Actually,<br /><span style={{ fontFamily: 'var(--f-serif)', fontStyle: 'italic', textTransform: 'none', color: 'var(--accent)' }}>you already can.</span>
          </h2>
          <p className="body" style={{ fontSize: 18, color: 'rgba(11,11,13,0.8)' }}>
            Missouri homeschool law requires parents to be responsible for 51% of their child&apos;s education. That&apos;s the number most parents hear and stop. Here&apos;s what it actually means at Warriors:
          </p>
          <div style={{ margin: '48px 0', display: 'grid', gap: 16 }}>
            {[
              ['Parents handle at home', 'Math · English · Reading · Science · Social Studies — the core academics. Homeschool parents spend on average 1–2 hours per day on core academics. AI tutors and hybrid curricula have made this dramatically easier than it was even 5 years ago.'],
              ['Warriors handles for you', 'Enrichment public school completely ignores: entrepreneurship, marketing, sales, AI, coding, finance, media, video — plus 4 hours of elite athletic training. 4 days a week, 9 to 3.'],
              ['Missouri Tebow Law (SB 63)', 'As of August 28, 2025, your homeschool athlete can still play any sport at your local public school that Warriors doesn’t offer. Multi-sport athletes: this is the best of both worlds.'],
            ].map(([t, d], i) => (
              <div key={i} style={{ padding: 32, background: 'rgba(11,11,13,0.04)', borderRadius: 4 }}>
                <div className="mono" style={{ color: 'var(--accent)', marginBottom: 8 }}>{t}</div>
                <div className="body" style={{ fontSize: 16, color: 'rgba(11,11,13,0.8)' }}>{d}</div>
              </div>
            ))}
          </div>

          <div id="numerade" style={{ padding: 32, border: '1px solid var(--accent)', borderRadius: 4, background: 'rgba(4,149,75,0.06)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr', gap: 32, alignItems: 'center' }}>
              <img
                src="/numerade-logo.svg"
                alt="Numerade"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
              <div>
                <div className="mono" style={{ color: 'var(--accent)', marginBottom: 8 }}>The Numerade Backstop</div>
                <p className="body" style={{ fontSize: 16, color: 'rgba(11,11,13,0.8)', margin: 0 }}>
                  Parents teach core subjects — that&apos;s the model. For anything they don&apos;t feel solid on, Warriors families get partner-discount access to Numerade&apos;s full AI video tutor library. Algebra, chemistry, calculus, physics — covered.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="chapter" style={{ borderBottom: '1px solid rgba(11,11,13,0.1)' }}>
        <div className="wrap-narrow">
          <Eyebrow style={{ color: 'var(--accent)' }}>The Results</Eyebrow>
          <h2 className="h-section" style={{ color: 'var(--ink)', marginTop: 16, marginBottom: 32 }}>
            And the kids who<br />already <span style={{ fontFamily: 'var(--f-serif)', fontStyle: 'italic', textTransform: 'none', color: 'var(--accent)' }}>left.</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 24, marginBottom: 48 }}>
            {[
              ['65–80th', 'Homeschool percentile on standardized tests vs 50th for public'],
              ['1190', 'Average SAT for homeschoolers vs 1060 public'],
              ['87%', 'College acceptance vs 68% public school'],
            ].map(([n, l], i) => (
              <div key={i}>
                <div style={{ fontFamily: 'var(--f-display)', fontSize: 72, color: 'var(--ink)', lineHeight: 1 }}>{n}</div>
                <div className="mono" style={{ color: 'rgba(11,11,13,0.6)', marginTop: 12 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHAPTER 07 — The Athletes Who Already Left */}
      <section className="chapter">
        <div className="wrap">
          <div className="chapter-num">07</div>
          <Eyebrow style={{ color: 'var(--accent)' }}>The Athletes Who Already Left</Eyebrow>
          <h2 className="h-section" style={{ color: 'var(--ink)', marginTop: 16, marginBottom: 32 }}>
            The best in the world<br />
            <span style={{ fontFamily: 'var(--f-serif)', fontStyle: 'italic', textTransform: 'none', color: 'var(--accent)' }}>didn&apos;t sit in a classroom.</span>
          </h2>
          <p className="body" style={{ fontSize: 18, color: 'rgba(11,11,13,0.8)', fontStyle: 'italic', marginBottom: 48 }}>
            Every elite athlete on this list left the traditional classroom — most of them homeschooled, all of them training during school hours. The system you&apos;re being told is &ldquo;normal&rdquo; was rejected by the people at the very top of their sports.
          </p>

          <div className="athletes-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 24, marginBottom: 48 }}>
            {[
              { name: 'Tim Tebow', last: 'Tebow', image: '/athlete-tim-tebow.jpg', body: 'Football · Heisman Trophy. The Missouri "Tebow Law" cited above is named for him.' },
              { name: 'Simone Biles', last: 'Biles', image: '/athlete-simone-biles.jpg', body: 'Gymnastics · 11-time Olympic medalist — all-time leader in Olympic gymnastics medals.' },
              { name: 'Venus & Serena Williams', last: 'Williams', image: '/athlete-williams-sisters.jpg', body: 'Tennis · 30 Grand Slam singles titles between them. Trained at home and on the court — never in a school day.' },
              { name: 'Blake Griffin', last: 'Griffin', image: '/athlete-blake-griffin.jpg', body: 'Basketball · NBA #1 overall pick, 6× All-Star, Rookie of the Year. Homeschooled K–8.' },
              { name: 'Shaun White', last: 'White', image: '/athlete-shaun-white.jpg', body: 'Snowboarding / Skateboarding · 3× Olympic gold. Homeschooled to train.' },
            ].map((a, i) => (
              <div
                key={i}
                style={{
                  background: 'rgba(11,11,13,0.04)',
                  padding: '32px 24px',
                  borderRadius: 4,
                  borderLeft: '3px solid var(--accent)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 14,
                }}
              >
                <img
                  src={a.image}
                  alt={a.name}
                  style={{
                    aspectRatio: '1/1',
                    width: '100%',
                    objectFit: 'cover',
                    borderRadius: 4,
                    display: 'block',
                  }}
                />
                <div
                  style={{
                    fontFamily: 'var(--f-display)',
                    fontSize: 24,
                    color: 'var(--ink)',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    lineHeight: 1.05,
                  }}
                >
                  {a.name}
                </div>
                <p style={{ fontSize: 14, color: 'rgba(11,11,13,0.7)', margin: 0, lineHeight: 1.5 }}>
                  {a.body}
                </p>
                <div
                  className="mono"
                  style={{
                    fontSize: 11,
                    letterSpacing: '0.16em',
                    color: 'var(--accent)',
                    marginTop: 'auto',
                  }}
                >
                  Homeschooled
                </div>
              </div>
            ))}
          </div>

          <p className="body" style={{ fontSize: 18, color: 'rgba(11,11,13,0.8)', fontStyle: 'italic' }}>
            The pattern isn&apos;t a coincidence. It&apos;s the only model that gives a serious athlete enough hours in the day to actually become elite — academically, athletically, and as a person. We didn&apos;t invent this. We just built it for the next generation of Warriors.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: 'var(--ink)' }}>
        <div className="wrap-narrow" style={{ textAlign: 'center' }}>
          <h2 className="h-section" style={{ color: 'var(--paper)', marginBottom: 24 }}>
            So what do<br />you do with this?
          </h2>
          <p className="lead" style={{ margin: '0 auto 40px' }}>
            You don&apos;t need to apply today. You don&apos;t need to commit to anything. You just need to come spend a day with us and see it for yourself.
          </p>
          <Btn kind="primary" href="/experience">Register for Experience Day</Btn>
        </div>
      </section>
    </div>
  )
}
