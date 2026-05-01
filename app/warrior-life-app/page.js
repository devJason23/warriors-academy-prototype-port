import Btn from '../../components/ui/Btn'
import Eyebrow from '../../components/ui/Eyebrow'

export const metadata = {
  title: 'Warrior Life App — Mission Control · Warriors Academy',
}

const features = [
  { num: '01', name: 'Daily Command Center', body: 'Faith, sleep, nutrition, readiness, reflection — checked off in under 10 minutes a day. Streaks + XP keep it sticky.' },
  { num: '02', name: 'AI Nutrition & Readiness', body: 'Snap a photo of a meal. AI auto-estimates macros, hydration, and readiness impact. No more weekly paperwork — the app does it for you.' },
  { num: '03', name: 'Dr. Dish Booking', body: "Reserve your weekly machine time. Hit your shot count. Coaches see who's putting in work." },
  { num: '04', name: 'The Mirror', body: null /* Mirror body is JSX — see render below */ },
  { num: '05', name: 'Gamified Team Accountability', body: 'Team Boss Battles, XP, streaks, and healthy rivalries. Kids show up for each other, not just themselves.' },
  { num: '06', name: 'Coach Dashboard', body: 'Real-time readiness scores. Flag burnout before it becomes an injury. Pro-level player management — for 10u and up.' },
]

function MirrorBody() {
  return (
    <p style={{ color: 'rgba(11,11,13,0.7)', fontSize: 15, lineHeight: 1.55, margin: 0 }}>
      End-of-day reflection.{' '}
      <em>What could you have done better today? Who did you help? Where did you fall short?</em>{' '}
      A daily examen, in your pocket.{' '}
      <em>(Morning devotion is a separate, in-person practice — see the Day schedule.)</em>
    </p>
  )
}

export default function WarriorLifeAppPage() {
  return (
    <div className="page-enter">

      {/* HERO */}
      <section style={{ padding: '140px 0 100px', background: 'var(--ink)', borderBottom: '1px solid var(--ink-3)' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 64, alignItems: 'center' }}>
            <div>
              <Eyebrow>Mission Control</Eyebrow>
              <h1 className="h-hero" style={{ marginTop: 24, marginBottom: 28, maxWidth: '20ch' }}>
                Warrior Life.<br />
                <span style={{ fontFamily: 'var(--f-serif)', fontStyle: 'italic', textTransform: 'none', color: 'var(--brass)' }}>Mission Control for the next generation.</span>
              </h1>
              <p className="lead" style={{ maxWidth: '60ch', color: 'rgba(245,242,236,0.82)', fontStyle: 'italic' }}>
                Daily training, devotion, business, and accountability — in one place. Built by coaches, used by Warriors. Tech that disciples.
              </p>
              <div style={{ marginTop: 40 }}>
                <Btn kind="ghost" href="/experience">Launching this season</Btn>
              </div>
            </div>
            <div>
              <figure
                style={{
                  margin: 0,
                  position: 'relative',
                  aspectRatio: '4/5',
                  minHeight: 480,
                  background: 'radial-gradient(700px 500px at 50% 40%, rgba(200,165,100,0.12), transparent 65%), #060707',
                  border: '1px solid var(--ink-4)',
                  borderRadius: 4,
                  overflow: 'hidden',
                }}
              >
                <img
                  src="/warrior-life-mission-control.png"
                  alt="Warrior Life Mission Control — daily quests, devotional, sleep, nutrition, hydration, today's mission"
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'contain', objectPosition: '50% 50%' }}
                />
                <figcaption
                  style={{
                    position: 'absolute',
                    left: 16,
                    bottom: 16,
                    padding: '8px 12px',
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
                  Warrior Life · Your Quest. Your Legacy.
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE GRID — 6 cards 3-up × 2 rows on-paper */}
      <section className="section on-paper">
        <div className="wrap">
          <div style={{ maxWidth: 720, marginBottom: 56 }}>
            <Eyebrow style={{ color: 'var(--accent)' }}>What's Inside</Eyebrow>
            <h2 className="h-section" style={{ marginTop: 16, marginBottom: 20, color: 'var(--ink)' }}>
              Six systems.<br />
              <span style={{ fontFamily: 'var(--f-serif)', fontStyle: 'italic', textTransform: 'none', color: 'var(--accent)' }}>One daily check-in.</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
            {features.map((f, i) => (
              <div key={i} style={{ borderTop: '2px solid var(--ink)', paddingTop: 24 }}>
                <div className="mono" style={{ color: 'var(--accent)', fontSize: 11, letterSpacing: '0.18em', marginBottom: 12 }}>{f.num}</div>
                <h3 style={{ fontFamily: 'var(--f-display)', fontSize: 26, color: 'var(--ink)', margin: '0 0 12px', letterSpacing: '-0.005em' }}>{f.name}</h3>
                {f.name === 'The Mirror' ? (
                  <MirrorBody />
                ) : (
                  <p style={{ color: 'rgba(11,11,13,0.7)', fontSize: 15, lineHeight: 1.55, margin: 0 }}>{f.body}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA STRIP (closing) */}
      <section className="cta-strip">
        <div className="wrap-narrow">
          <h2 className="h-section">Launches this season.</h2>
          <p className="lead" style={{ margin: '24px auto 32px', fontStyle: 'italic' }}>
            Built by coaches. Used daily. Every Warrior parent and athlete will have it from day one of the upcoming season.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Btn kind="brass" href="/experience">Schedule a Tryout</Btn>
            <Btn kind="ghost" href="/experience">Spend a Day With Us</Btn>
            <Btn kind="ghost">Download App</Btn>
          </div>
        </div>
      </section>
    </div>
  )
}
