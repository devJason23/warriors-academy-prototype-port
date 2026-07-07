import Btn from '../../components/ui/Btn'
import Eyebrow from '../../components/ui/Eyebrow'

function FlywheelCard({ num, title, desc }) {
  return (
    <div style={{ padding: 32, background: 'rgba(11,11,13,0.04)', borderRadius: 8 }}>
      <div style={{ fontFamily: 'var(--f-display)', fontSize: 48, color: 'var(--accent)', lineHeight: 1, marginBottom: 16 }}>{num}</div>
      <div style={{ fontFamily: 'var(--f-display)', fontSize: 24, textTransform: 'uppercase', color: 'var(--ink)', marginBottom: 12 }}>{title}</div>
      <p className="body" style={{ fontSize: 14, color: 'rgba(11,11,13,0.7)' }}>{desc}</p>
    </div>
  )
}

export default function TuitionPage() {
  return (
    <div className="page-enter">

      {/* HERO */}
      <section style={{ padding: '140px 0 80px' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 64, alignItems: 'center' }}>
            <div>
              <Eyebrow>Tuition · How It Works</Eyebrow>
              <h1 className="h-hero" style={{ marginTop: 24, marginBottom: 32, maxWidth: '16ch' }}>
                Invest once.<br />Your athlete can <span style={{ fontFamily: 'var(--f-serif)', fontStyle: 'italic', textTransform: 'none', color: 'var(--brass)' }}>earn it back.</span>
              </h1>
              <p className="lead" style={{ maxWidth: '52ch' }}>
                Warriors tuition includes training, uniforms, tournament fees, coaching, and the Warriors development environment. Nothing a-la-carte. And our entrepreneur tracks give athletes real paths to earn revenue — for themselves and the program.
              </p>
            </div>
            <div>
              <div className="placeholder" style={{ aspectRatio: '1/1', minHeight: 420 }}>
                <div style={{ position: 'absolute', top: 16, left: 16 }}>
                  <span className="placeholder-label">PHOTO · Warrior in uniform, ball on hip, championship ring / trophy framed background</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICE CARDS */}
      <section className="section">
        <div className="wrap">
          <div className="price-grid">
            <div className="price-card">
              <div className="price-eyebrow">Base Tuition</div>
              <div className="price-num">$3,850<span className="per">per athlete · per year</span></div>
              <p className="body" style={{ fontSize: 14 }}>Full Warriors tuition. Includes everything below.</p>
            </div>
            <div className="price-card featured">
              <span className="tag">Discounted Rate</span>
              <div className="price-eyebrow" style={{ color: 'var(--brass)' }}>Pay in Full</div>
              <div className="price-num">$2,888<span className="per">per athlete · per year</span></div>
              <p className="body" style={{ fontSize: 14 }}>Families who prefer to pay in full receive a discounted rate. One payment up front, nothing else due.</p>
            </div>
            <div className="price-card">
              <div className="price-eyebrow">$850 to Start</div>
              <div className="price-num">Balance<span className="per">spread over the year</span></div>
              <p className="body" style={{ fontSize: 14 }}>$850 starts your athlete. The remaining balance is paid across the year on a schedule that works for your family.</p>
            </div>
          </div>

          <div style={{ marginTop: 64, padding: 40, background: 'var(--ink-2)', border: '1px solid var(--ink-4)', borderRadius: 8 }}>
            <div style={{ fontFamily: 'var(--f-mono)', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--brass)', marginBottom: 16 }}>What&apos;s Included — Every Athlete</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
              {[
                'Full uniform & team gear',
                'Team schedule · school ball season',
                'All tournament entry fees',
                'Up to 4 hours daily elite training',
                'ATG-certified strength & mobility',
                'Dr. Dish shooting access',
                'Big Brother mentor sessions',
                'Entrepreneur Unschool curriculum',
                'Warrior Life app membership',
                'Daily devotion & discipleship',
              ].map((item, idx) => (
                <div key={idx} style={{ fontSize: 14, color: 'rgba(245,242,236,0.78)', display: 'flex', gap: 12, alignItems: 'start' }}>
                  <span style={{ color: 'var(--brass)' }}>—</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 24, paddingTop: 24, borderTop: '1px solid var(--ink-4)', fontFamily: 'var(--f-mono)', fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--muted)' }}>
              Recommended add-on (optional, off-facility): Shoot 360 membership.
            </div>
          </div>

          <div style={{ marginTop: 32, padding: 40, background: 'var(--ink-2)', borderLeft: '3px solid var(--accent)', borderRadius: '0 8px 8px 0' }}>
            <div style={{ fontFamily: 'var(--f-mono)', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 16 }}>The Full-Day Option</div>
            <p className="body" style={{ fontSize: 16, color: 'rgba(245,242,236,0.82)', maxWidth: '70ch', margin: 0, lineHeight: 1.7 }}>
              Not every Warrior has to attend the full day. Some families already have education covered at home and only need the team, practices, training, and the evaluation path — and that&apos;s a fit. For families who want the full environment — training, mentorship, business, film, and structure — Warriors is here all day. The full-day experience is not required just to play basketball. Practices are expected, with reasonable exceptions. Additional enrichment pieces are available for families who want them.
            </p>
          </div>
        </div>
      </section>

      {/* THE EARN-BACK */}
      <section className="section on-paper">
        <div className="wrap">
          <div style={{ maxWidth: 860 }}>
            <Eyebrow style={{ color: 'var(--accent)' }}>The Earn-Back</Eyebrow>
            <h2 className="h-section" style={{ color: 'var(--ink)', marginTop: 16, marginBottom: 24 }}>
              This is what makes<br />Warriors <span style={{ fontFamily: 'var(--f-serif)', fontStyle: 'italic', textTransform: 'none', color: 'var(--accent)' }}>different.</span>
            </h2>
            <p className="lead" style={{ color: 'rgba(11,11,13,0.72)', marginBottom: 48 }}>
              Warriors doesn&apos;t just talk about entrepreneurship. Athletes on the entrepreneur track help with real marketing and lead-generation projects under adult oversight.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginBottom: 64 }}>
            <FlywheelCard num="01" title="Athletes Build the Work" desc="Athletes on the entrepreneur track run real marketing and lead-generation projects for local businesses — program-managed accounts, adult-approved output." />
            <FlywheelCard num="02" title="Local Businesses Win" desc="Springfield businesses get professional marketing at a discounted price, delivered by motivated, mentored athletes using modern AI tools." />
            <FlywheelCard num="03" title="Revenue Flows Back" desc="Revenue offsets program costs, funds scholarships, and pays athletes directly. The harder the athlete works, the more they earn — real-world economics, real paychecks." />
          </div>

          <div style={{ padding: 40, border: '2px solid var(--accent)', borderRadius: 8, background: 'rgba(4,149,75,0.06)' }}>
            <div style={{ fontFamily: 'var(--f-mono)', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 16 }}>The Goal</div>
            <div style={{ fontFamily: 'var(--f-display)', fontSize: 42, lineHeight: 1.1, textTransform: 'uppercase', color: 'var(--ink)' }}>
              Every athlete on the entrepreneur track can earn back their tuition — and put thousands more in their pocket.
            </div>
            <p className="body" style={{ fontSize: 16, marginTop: 20, color: 'rgba(11,11,13,0.7)', maxWidth: '60ch' }}>
              This isn&apos;t a guarantee — it&apos;s a ceiling we&apos;re actively building toward. Participation is earned through effort and adult approval. But the model is live, the clients are real, and the first cohort is already in motion.
            </p>
          </div>
        </div>
      </section>

      {/* SCHOLARSHIPS */}
      <section className="section">
        <div className="wrap-narrow">
          <div style={{ padding: 48, background: 'var(--ink-2)', borderLeft: '3px solid var(--brass)', borderRadius: '0 8px 8px 0' }}>
            <Eyebrow style={{ color: 'var(--brass)' }}>Scholarships</Eyebrow>
            <h3 className="h-sub" style={{ marginTop: 16, marginBottom: 16 }}>No family with the right fit<br />gets turned away for finances.</h3>
            <p className="body" style={{ fontSize: 16 }}>
              We offer need-based scholarships to families who align with the Warriors mission. Payment plans are available. If Warriors is the right place for your athlete, let&apos;s talk — we&apos;ll find a way.
            </p>
            <div style={{ marginTop: 24 }}>
              <Btn kind="brass" href="https://warriors-basketball-eval.vercel.app">Book an Evaluation</Btn>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-strip">
        <div className="wrap-narrow">
          <h2 className="h-section">See it before<br />you commit.</h2>
          <p className="lead" style={{ margin: '24px auto 32px' }}>
            Tuition pages raise questions that are easier to answer after coaches evaluate your athlete. Start there, then decide whether to spend a full day with us.
          </p>
          <Btn kind="brass" href="https://warriors-basketball-eval.vercel.app">Book an Evaluation</Btn>
        </div>
      </section>
    </div>
  )
}
