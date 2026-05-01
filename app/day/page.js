import { Fragment } from 'react'
import Btn from '../../components/ui/Btn'
import Eyebrow from '../../components/ui/Eyebrow'

export const metadata = {
  title: 'A Day at Warriors — Warriors Academy',
}

const schedule = [
  { time: '9:00', range: '9:00 – 9:30 AM', label: 'Prayer · Devotion ·\nWarmup', body: 'Scripture first. Every day opens in prayer. ATG mobility-first warmup readies joints, not just muscles.', tag: 'FAITH · BODY' },
  { time: '9:30', range: '9:30 – 11:30 AM', label: 'Athletic Training\nBlock', body: 'Basketball-specific development. Dr. Dish reps. Skill work. Small groups, position-specific, coached every possession.', tag: 'TRAINING' },
  { time: '11:30', range: '11:30 AM – 12:15 PM', label: 'ATG Specialized Training\n+ Recovery', body: '30 minutes of ATG specialized strength and mobility, then 15 minutes of recovery — stretch and cold tub.', tag: 'ATG · RECOVERY' },
  { time: '12:15', range: '12:15 – 1:00 PM', label: 'Family-Style Lunch\nwith the Coaches', body: 'Coaches and athletes eat together at one long table. No phones. This is culture hour — where brotherhood is built in conversation, not drills.', tag: 'CULTURE' },
  { time: '1:00', range: '1:00 – 2:30 PM', label: 'Entrepreneur Unschool ·\nBusiness Building', body: 'Real business builds. AI, marketing, finance, video, code. Students run real client work for local Springfield businesses — and get paid for it.', tag: 'BUILD · EARN' },
  { time: '2:30', range: '2:30 – 3:00 PM', label: 'Film Study + Big Brother\nMentorship', body: 'Watch film from the morning. Older Warriors mentor younger ones in Big Brother sessions. Close in prayer. Home to family by 3 PM.', tag: 'REFLECT · MENTOR' },
]

const parentColumn = {
  label: 'At Home · Parent-Led',
  subtitle: 'Missouri law requires parents lead 51% of instruction.',
  items: [
    { t: 'Math', d: 'Curriculum of your choice — Saxon, Beast Academy, Khan, Teaching Textbooks. Your call.' },
    { t: 'English · Reading', d: 'Core literacy and composition. Warriors supports but does not replace.' },
    { t: 'Science', d: 'Lab work, reading, hands-on. Some families do co-op; many go textbook + field trips.' },
    { t: 'Social Studies', d: 'History, civics, geography. The canonical 51% that keeps you compliant.' },
    { t: 'Faith at Home', d: 'Daily Bible. We complement — we never replace the family altar.' },
  ],
}

const warriorsColumn = {
  label: 'At the Academy · Warriors-Led',
  subtitle: 'Four days a week, 9–3. The enrichment public school ignores.',
  items: [
    { t: 'Elite Athletic Training', d: '4 hours/day of basketball-specific development inside the academic day. ATG-certified, injury-first, strength-and-speed-integrated.' },
    { t: 'Entrepreneur Unschool', d: 'Real businesses, real clients, real money. AI, code, video, marketing, finance. A student can earn back tuition.' },
    { t: 'Christ-Centered Character', d: 'Daily devotion. Mentorship. The Big Brother Badge Economy where older Warriors teach younger ones.' },
    { t: 'Warrior Life App', d: 'Mission Control for sleep, nutrition, readiness, reflection. Gamified. Parent dashboard included.' },
    { t: 'Family Culture', d: 'Coaches eat lunch with athletes. Families know each other. Community is the scaffold around every kid.' },
  ],
}

const laws = [
  {
    code: 'RSMo 167.031',
    title: 'Missouri Homeschool Law',
    body: 'Parents are legally responsible for 1,000 hours of instruction per year, with a minimum of 51% led by the parent in core subjects. Warriors Academy operates as an enrichment co-op, not a school — which is exactly what the law permits and why we say "academy," never "school" alone.',
    stat: '51%',
    statLabel: 'minimum parent-led',
  },
  {
    code: 'MO SB 63 · "Tebow Law"',
    title: 'Signed July 9, 2025 · Effective August 28, 2025',
    body: 'Missouri now allows homeschool students to participate in public-school activities, including sports, music, and clubs. Warriors athletes can still play in Missouri State High School Activities Association events — and many do.',
    stat: 'Aug 28',
    statLabel: '2025 effective',
  },
]

export default function ModelPage() {
  return (
    <div className="page-enter">
      {/* HERO */}
      <section style={{ padding: '140px 0 80px', background: 'var(--ink)', borderBottom: '1px solid var(--ink-3)' }}>
        <div className="wrap">
          <Eyebrow>Our Model · The 4-Day Week</Eyebrow>
          <h1 className="h-hero" style={{ marginTop: 24, marginBottom: 28, maxWidth: '22ch' }}>
            Four days at the academy.<br />
            <span style={{ fontFamily: 'var(--f-serif)', fontStyle: 'italic', textTransform: 'none', color: 'var(--brass)' }}>One day</span> for family.<br />
            A lifetime of <span style={{ fontFamily: 'var(--f-serif)', fontStyle: 'italic', textTransform: 'none', color: 'var(--brass)' }}>compounding.</span>
          </h1>
          <p className="lead" style={{ maxWidth: '62ch', color: 'rgba(245,242,236,0.78)' }}>
            We don&apos;t replace school. We rebuild it. Parents lead core academics at home — as Missouri law requires and as we believe works best. Warriors handles the enrichment the factory model ignores: elite training, real business, discipleship, and deep mentorship. Fridays are yours.
          </p>

          {/* Top-line stat strip */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, marginTop: 64, borderTop: '1px solid var(--ink-4)' }}>
            {[
              ['Mon–Thu', '9 AM – 3 PM at the academy'],
              ['Fridays', 'Off · family, travel, tournaments'],
              ['4 hrs', 'Elite training per day'],
              ['51%', 'Parent-led · by MO law'],
            ].map(([n, l], i) => (
              <div key={i} style={{ padding: '32px 24px 0', borderRight: i < 3 ? '1px solid var(--ink-4)' : 'none' }}>
                <div style={{ fontFamily: 'var(--f-display)', fontSize: 48, lineHeight: 1, color: 'var(--brass)', marginBottom: 10 }}>{n}</div>
                <div className="mono" style={{ color: 'var(--muted)', lineHeight: 1.5 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WEEKLY RHYTHM */}
      <section className="section" style={{ paddingTop: 100, paddingBottom: 100 }}>
        <div className="wrap">
          <div style={{ maxWidth: 680, marginBottom: 56 }}>
            <Eyebrow>The Weekly Rhythm</Eyebrow>
            <h2 className="h-section" style={{ marginTop: 16, marginBottom: 20 }}>
              A week that gives you<br />
              <span style={{ fontFamily: 'var(--f-serif)', fontStyle: 'italic', textTransform: 'none', color: 'var(--brass)' }}>your evenings back.</span>
            </h2>
            <p className="lead">
              Every serious training program we&apos;ve ever seen burns families out — practice runs until 9 PM, weekends are tournaments, parents eat dinner in parking lots. We refuse. Kids are home by 3. Fridays are open. You still get to be a family.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 2, background: 'var(--ink-3)', border: '1px solid var(--ink-3)' }}>
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day, i) => {
              const isFri = i === 4
              return (
                <div
                  key={day}
                  style={{
                    background: isFri ? 'var(--ink-2)' : 'var(--ink)',
                    padding: '36px 20px',
                    minHeight: 280,
                    display: 'flex',
                    flexDirection: 'column',
                    borderTop: isFri ? '3px solid var(--brass)' : '3px solid var(--accent)',
                  }}
                >
                  <div className="mono" style={{ color: isFri ? 'var(--brass)' : 'var(--accent)', marginBottom: 6 }}>{day.toUpperCase()}</div>
                  <div style={{ fontFamily: 'var(--f-display)', fontSize: 28, lineHeight: 1, color: 'var(--paper)', marginBottom: 18 }}>
                    {isFri ? 'Family' : 'Academy'}
                  </div>
                  <div style={{ flex: 1, color: 'rgba(245,242,236,0.7)', fontSize: 14, lineHeight: 1.55 }}>
                    {isFri
                      ? 'No on-site training. Use it for rest, travel to tournaments, extra skill work, or simply being a family.'
                      : '9 AM – 3 PM on-site. Training, entrepreneur unschool, family lunch, study hall, film, prayer.'}
                  </div>
                  <div style={{ marginTop: 20, paddingTop: 16, borderTop: '1px solid var(--ink-4)', display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                    {isFri ? (
                      <span className="mono" style={{ fontSize: 10, color: 'var(--muted)' }}>· Open day</span>
                    ) : (
                      <>
                        <span className="mono" style={{ fontSize: 10, color: 'var(--muted)' }}>· Train</span>
                        <span className="mono" style={{ fontSize: 10, color: 'var(--muted)' }}>· Build</span>
                        <span className="mono" style={{ fontSize: 10, color: 'var(--muted)' }}>· Mentor</span>
                      </>
                    )}
                  </div>
                </div>
              )
            })}
          </div>

          <p className="mono" style={{ marginTop: 24, color: 'var(--muted)' }}>
            · Home for dinner every weeknight by 3:30 PM. · Core academics at home, set to YOUR rhythm.
          </p>
        </div>
      </section>

      {/* A DAY AT WARRIORS - Hour by Hour */}
      <section style={{ padding: '100px 0', background: 'var(--ink-2)' }}>
        <div className="wrap">
          <div style={{ maxWidth: 680, marginBottom: 56 }}>
            <Eyebrow>A Day at the Academy</Eyebrow>
            <h2 className="h-section" style={{ marginTop: 16, marginBottom: 20 }}>
              Hour by hour.<br />
              <span style={{ fontFamily: 'var(--f-serif)', fontStyle: 'italic', textTransform: 'none', color: 'var(--brass)' }}>Intention by intention.</span>
            </h2>
            <p className="lead">
              Every block has a purpose. Every transition is coached. Every Warrior goes home tired, taught, and known.
            </p>
          </div>

          <div style={{ padding: '20px 24px', background: 'rgba(4,149,75,0.08)', borderLeft: '3px solid var(--accent)', marginBottom: 32 }}>
            <div className="mono" style={{ color: 'var(--accent)', marginBottom: 8 }}>This is an example day.</div>
            <p style={{ fontSize: 14, lineHeight: 1.6, color: 'rgba(245,242,236,0.78)', margin: 0, maxWidth: '70ch' }}>
              Each Warriors team&apos;s exact rotation varies — while one team is on the court, another may be in film, another in business work. The blocks below are representative, not a fixed minute-by-minute timetable.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '140px 1fr', gap: 0, borderTop: '1px solid var(--ink-4)' }}>
            {schedule.map((s, i) => (
              <Fragment key={i}>
                <div
                  style={{
                    padding: '36px 0 36px 4px',
                    borderBottom: i < schedule.length - 1 ? '1px solid var(--ink-4)' : 'none',
                    borderRight: '1px solid var(--ink-4)',
                  }}
                >
                  <div style={{ fontFamily: 'var(--f-display)', fontSize: 40, lineHeight: 1, color: 'var(--brass)' }}>{s.time}</div>
                  <div className="mono" style={{ fontSize: 9, color: 'var(--muted)', marginTop: 6, letterSpacing: '0.14em' }}>AM/PM</div>
                </div>
                <div
                  style={{
                    padding: '36px 0 36px 40px',
                    borderBottom: i < schedule.length - 1 ? '1px solid var(--ink-4)' : 'none',
                    display: 'grid',
                    gridTemplateColumns: '1fr auto',
                    gap: 32,
                    alignItems: 'start',
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontFamily: 'var(--f-display)',
                        fontSize: 28,
                        lineHeight: 1.05,
                        color: 'var(--paper)',
                        marginBottom: 12,
                        whiteSpace: 'pre-line',
                      }}
                    >
                      {s.label}
                    </div>
                    <p style={{ fontSize: 16, lineHeight: 1.6, color: 'rgba(245,242,236,0.7)', maxWidth: '66ch' }}>{s.body}</p>
                  </div>
                  <div
                    className="mono"
                    style={{
                      fontSize: 10,
                      color: 'var(--brass)',
                      letterSpacing: '0.18em',
                      padding: '6px 10px',
                      border: '1px solid var(--ink-4)',
                      borderRadius: 2,
                      whiteSpace: 'nowrap',
                      marginTop: 6,
                    }}
                  >
                    {s.tag}
                  </div>
                </div>
              </Fragment>
            ))}
          </div>

          <div style={{ marginTop: 64, padding: 28, background: 'var(--ink)', borderLeft: '3px solid var(--brass)' }}>
            <div className="mono" style={{ color: 'var(--brass)', marginBottom: 10 }}>A NOTE ON ACADEMICS</div>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: 'rgba(245,242,236,0.82)', maxWidth: '70ch' }}>
              Core academics (math, English, reading, science, social studies) are parent-led at home — that&apos;s the model. Homeschool parents spend on average 1–2 hours per day on core academics. For any subject parents want backup on, Warriors families get partner-discount access to Numerade&apos;s AI video tutor library.
            </p>
          </div>
        </div>
      </section>

      {/* WHO TEACHES WHAT */}
      <section className="section on-paper" style={{ paddingTop: 100, paddingBottom: 100 }}>
        <div className="wrap">
          <div style={{ maxWidth: 680, marginBottom: 56 }}>
            <Eyebrow style={{ color: 'var(--accent)' }}>Who Teaches What</Eyebrow>
            <h2 className="h-section" style={{ marginTop: 16, marginBottom: 20, color: 'var(--ink)' }}>
              The split that makes<br />
              <span style={{ fontFamily: 'var(--f-serif)', fontStyle: 'italic', textTransform: 'none', color: 'var(--accent)' }}>both sides stronger.</span>
            </h2>
            <p className="lead" style={{ color: 'rgba(11,11,13,0.74)' }}>
              Parents keep what only parents should teach. Warriors handles what parents can&apos;t efficiently do at home — ATG-certified strength coaches, real client businesses, a full gym, and a community of disciplers. Neither side is overloaded. Both sides are deep.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, border: '1px solid rgba(11,11,13,0.12)' }}>
            {[parentColumn, warriorsColumn].map((col, ci) => (
              <div
                key={ci}
                style={{
                  padding: '40px 40px 48px',
                  background: ci === 1 ? 'var(--ink)' : 'transparent',
                  color: ci === 1 ? 'var(--paper)' : 'var(--ink)',
                  borderLeft: ci === 1 ? '1px solid rgba(11,11,13,0.12)' : 'none',
                }}
              >
                <div className="mono" style={{ color: ci === 1 ? 'var(--brass)' : 'var(--accent)', marginBottom: 10 }}>
                  {ci === 0 ? 'PARENTS' : 'WARRIORS'}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--f-display)',
                    fontSize: 32,
                    lineHeight: 1.05,
                    marginBottom: 10,
                    color: ci === 1 ? 'var(--paper)' : 'var(--ink)',
                  }}
                >
                  {col.label}
                </div>
                <p style={{ fontSize: 14, lineHeight: 1.55, marginBottom: 32, color: ci === 1 ? 'rgba(245,242,236,0.7)' : 'rgba(11,11,13,0.6)', maxWidth: '44ch' }}>
                  {col.subtitle}
                </p>
                <div>
                  {col.items.map((it, i) => (
                    <div
                      key={i}
                      style={{
                        padding: '20px 0',
                        borderTop: `1px solid ${ci === 1 ? 'var(--ink-4)' : 'rgba(11,11,13,0.1)'}`,
                      }}
                    >
                      <div style={{ fontFamily: 'var(--f-display)', fontSize: 18, textTransform: 'uppercase', letterSpacing: '0.02em', marginBottom: 8, color: ci === 1 ? 'var(--paper)' : 'var(--ink)' }}>{it.t}</div>
                      <p style={{ fontSize: 14, lineHeight: 1.55, color: ci === 1 ? 'rgba(245,242,236,0.7)' : 'rgba(11,11,13,0.65)' }}>{it.d}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSOURI LAW */}
      <section style={{ padding: '100px 0', background: 'var(--ink)' }}>
        <div className="wrap">
          <div style={{ maxWidth: 680, marginBottom: 56 }}>
            <Eyebrow>The Law · Plain English</Eyebrow>
            <h2 className="h-section" style={{ marginTop: 16, marginBottom: 20 }}>
              Missouri got this right.<br />
              <span style={{ fontFamily: 'var(--f-serif)', fontStyle: 'italic', textTransform: 'none', color: 'var(--brass)' }}>So we follow it closely.</span>
            </h2>
            <p className="lead">
              Two Missouri statutes shape how Warriors Academy operates. Both are good news for families who want to build something better than the factory model.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
            {laws.map((law, i) => (
              <div
                key={i}
                style={{
                  padding: 40,
                  background: 'var(--ink-2)',
                  border: '1px solid var(--ink-4)',
                  borderTop: '3px solid var(--brass)',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div className="mono" style={{ color: 'var(--brass)', marginBottom: 10 }}>{law.code}</div>
                <div style={{ fontFamily: 'var(--f-display)', fontSize: 28, lineHeight: 1.1, color: 'var(--paper)', marginBottom: 20 }}>{law.title}</div>
                <p style={{ fontSize: 15, lineHeight: 1.65, color: 'rgba(245,242,236,0.75)', flex: 1, marginBottom: 28 }}>{law.body}</p>
                <div style={{ paddingTop: 24, borderTop: '1px solid var(--ink-4)', display: 'flex', alignItems: 'baseline', gap: 16 }}>
                  <div style={{ fontFamily: 'var(--f-display)', fontSize: 44, lineHeight: 1, color: 'var(--brass)' }}>{law.stat}</div>
                  <div className="mono" style={{ color: 'var(--muted)', letterSpacing: '0.14em' }}>{law.statLabel}</div>
                </div>
              </div>
            ))}
          </div>

          <p className="mono" style={{ marginTop: 40, color: 'var(--muted)', maxWidth: '70ch' }}>
            · This is not legal advice. Every family&apos;s situation is different. We&apos;ll walk you through it in person at Experience Day.
          </p>
        </div>
      </section>

      {/* WHY 4 DAYS */}
      <section className="section on-paper" style={{ paddingTop: 100, paddingBottom: 100 }}>
        <div className="wrap">
          <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center', marginBottom: 72 }}>
            <Eyebrow style={{ color: 'var(--accent)' }}>Why Four Days</Eyebrow>
            <h2 className="h-section" style={{ marginTop: 16, marginBottom: 20, color: 'var(--ink)' }}>
              Because a fifth day of drills<br />isn&apos;t <span style={{ fontFamily: 'var(--f-serif)', fontStyle: 'italic', textTransform: 'none', color: 'var(--accent)' }}>what the great ones</span><br />had in common.
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 40 }}>
            {[
              ['Recovery is a skill', 'Elite performers rest on purpose. A Friday off is not a day wasted — it’s a day that makes the other four compound. Sleep, play, walk, travel, read.'],
              ['Family is the scaffold', 'Kids who burn out aren’t missing minutes of training. They’re missing family dinners, weekend mornings, and the feeling of belonging to something older than their sport.'],
              ['Depth over volume', 'Four focused days produce more adaptation than six distracted ones. We’d rather do fewer things obsessively well than more things adequately.'],
            ].map(([t, d], i) => (
              <div key={i} style={{ borderTop: '2px solid var(--ink)', paddingTop: 28 }}>
                <div style={{ fontFamily: 'var(--f-display)', fontSize: 24, textTransform: 'uppercase', color: 'var(--ink)', marginBottom: 16, lineHeight: 1.1 }}>{t}</div>
                <p className="body" style={{ fontSize: 15, lineHeight: 1.65, color: 'rgba(11,11,13,0.68)' }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-strip">
        <div className="wrap-narrow">
          <h2 className="h-section">See a day<br />before you decide.</h2>
          <p className="lead" style={{ margin: '24px auto 32px' }}>
            Reading about the 4-day week is one thing. Living a day of it is another. Come spend one with us.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Btn kind="brass" href="/experience">Register for Experience Day</Btn>
            <Btn kind="ghost" href="/tuition">See tuition</Btn>
          </div>
        </div>
      </section>
    </div>
  )
}
