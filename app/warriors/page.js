import Btn from '../../components/ui/Btn'
import Eyebrow from '../../components/ui/Eyebrow'
import LiteYouTube from '../../components/ui/LiteYouTube'

export const metadata = {
  title: 'The Warriors — Warriors Academy',
}

function Coach({ name, role, bio, verse, img, imgPos }) {
  return (
    <div className="person-card">
      <div className="person-photo" style={{ background: 'var(--ink-2)', overflow: 'hidden' }}>
        <img
          src={img}
          alt={name}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: imgPos || '50% 30%',
            filter: 'saturate(0.92)',
          }}
        />
      </div>
      <div>
        <div className="person-name">{name}</div>
        <div className="person-role">{role}</div>
        <p className="person-bio">{bio}</p>
        <div className="person-verse">{verse}</div>
      </div>
    </div>
  )
}

const badgeBullets = [
  'Clutch Shooter — written + on-court test of pure shooting under pressure.',
  'Lockdown Defender — closeouts, stance, communication, and 1-on-1 containment.',
  'Glass Dominator — boxing out, pursuit angles, and the unglamorous work that wins games.',
  'Court Visionary — read defenses, run sets, and quarterback the offense from any position.',
  'Servant leadership, not seniority — every Warrior earns their place by what they give the room.',
]

export default function WarriorsPage() {
  return (
    <div className="page-enter">

      {/* 1 · HERO — Round 4 §8.2: eyebrow "Why Warriors Exists" + lifted /about H2 + lifted lead */}
      <section style={{ padding: '140px 0 80px', background: 'var(--ink)', borderBottom: '1px solid var(--ink-3)' }}>
        <div className="wrap">
          <Eyebrow>Why Warriors Exists</Eyebrow>
          <h1 className="h-hero" style={{ marginTop: 24, marginBottom: 32, maxWidth: '20ch' }}>
            Why Warriors<br />
            <span style={{ fontFamily: 'var(--f-serif)', fontStyle: 'italic', textTransform: 'none', color: 'var(--brass)' }}>exists.</span>
          </h1>
          <p className="lead" style={{ maxWidth: '64ch', color: 'rgba(245,242,236,0.78)' }}>
            We didn&apos;t set out to build a school. We set out to build the place we wished existed for our own kids — where elite training, real entrepreneurship, and Christ-centered mentorship aren&apos;t three different programs you have to chase across a city.
          </p>
        </div>
      </section>

      {/* 2 · OUR STORY VIDEO — lifted verbatim from /about */}
      <section style={{ padding: '120px 0', background: 'var(--ink-2)', borderTop: '1px solid var(--ink-4)', borderBottom: '1px solid var(--ink-4)' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.8fr', gap: 72, alignItems: 'center' }}>
            <div>
              <Eyebrow>Our Story · In Their Words</Eyebrow>
              <h2 className="h-section" style={{ marginTop: 16, marginBottom: 24 }}>
                Hear from our<br />
                <span style={{ fontFamily: 'var(--f-serif)', fontStyle: 'italic', textTransform: 'none', color: 'var(--brass)' }}>AD, coaches,</span><br />
                parents, and players.
              </h2>
              <p className="lead" style={{ color: 'rgba(245,242,236,0.78)', marginBottom: 24 }}>
                Three minutes. The people closest to Warriors Academy telling you why we built this — and what it&apos;s become for the families inside it.
              </p>
              <div className="mono" style={{ color: 'var(--muted)', fontSize: 11 }}>
                · Fundraising campaign<br />
                · Plays in place · no page reload
              </div>
            </div>
            <LiteYouTube
              id="ZKgw9OSY5gg"
              title="The Warriors Academy story — from the people inside it"
              poster="https://i.ytimg.com/vi/ZKgw9OSY5gg/sddefault.jpg"
            />
          </div>
        </div>
      </section>

      {/* 3 · FOUNDER NOTE — lifted from /about. TODO(copy) preserved. */}
      <section className="section">
        <div className="wrap-narrow">
          <Eyebrow>A Note from Coach Don</Eyebrow>
          <h2 className="h-section" style={{ marginTop: 16, marginBottom: 32 }}>
            Why I started<br />
            <span style={{ fontFamily: 'var(--f-serif)', fontStyle: 'italic', textTransform: 'none', color: 'var(--brass)' }}>Warriors.</span>
          </h2>
          {/* TODO(copy): founder note from Coach Don — 1–2 paragraphs */}
          <p className="lead" style={{ color: 'rgba(245,242,236,0.62)', fontStyle: 'italic' }}>
            [Founder note from Coach Don coming soon.]
          </p>
        </div>
      </section>

      {/* 4 · COACHES STRIP */}
      <section className="section">
        <div className="wrap">
          <div style={{ marginBottom: 48, maxWidth: 720 }}>
            <Eyebrow>The People</Eyebrow>
            <h2 className="h-section" style={{ marginTop: 16 }}>Coaches who know<br />your kid&apos;s name.</h2>
          </div>

          <div className="people-grid">
            <Coach
              name="Don Hamilton"
              role="Athletic Director · 18u Head Coach · Architect of the Badge Economy"
              bio="Don leads the athletic vision and operations of Warriors Academy, coaches our 18u team, and built the Badge Economy that turns character into earned tuition reduction. Outside Warriors he serves as Lead Musical Pastor at James River Church in Ozark."
              verse="“Whatever you do, work at it with all your heart...” — Col. 3:23"
              img="/coach-don.jpg"
              imgPos="50% 25%"
            />
            <Coach
              name="Jason Hill"
              role="12u Head Coach · Lead Entrepreneur · Multiple Business Owner"
              bio="Jason is a two-time National Champion as a coach. He coaches our 12u team — currently ranked #2 in the country — and leads the Entrepreneur Unschool. He runs multiple businesses and teaches our athletes how to do the same."
              verse="“As iron sharpens iron...” — Prov. 27:17"
              img="/coach-jason-tiffany.jpg"
              imgPos="30% 50%"
            />
            <Coach
              name="Dee Hamilton"
              role="Head of Coaching Staff · 10u Head Coach · 16u Head Coach"
              bio="Dee oversees the entire Warriors coaching staff and coaches both our 10u and 16u teams. He's also building out a transportation business — bringing the entrepreneur ethos to his own life, not just teaching it."
              verse="“Train up a child in the way he should go...” — Prov. 22:6"
              img="/coach-dee-jodian.jpg"
              imgPos="35% 30%"
            />
            {/* TODO(coaches): Tiffany Hill and Jodian Hamilton — Round 2 Final §6 lists them but says "keep existing title — confirm with user if unclear". They were not previously cards in the prototype, so titles/bios remain to be supplied by Jason. */}
          </div>
        </div>
      </section>

      {/* 5 · IRON SHARPENS IRON breather */}
      <section className="scripture-block">
        <div className="wrap-narrow">
          <div className="scripture-mark">&ldquo;</div>
          <p className="scripture-text">As iron sharpens iron, so one person sharpens another.</p>
          <p className="scripture-cite">Proverbs 27:17</p>
        </div>
      </section>

      {/* 6 · THE BADGE ECONOMY */}
      <section className="section on-paper">
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
            <div>
              <Eyebrow style={{ color: 'var(--accent)' }}>The Badge Economy</Eyebrow>
              <h2 className="h-section" style={{ marginTop: 16, marginBottom: 24, color: 'var(--ink)' }}>
                Earn the Badge.<br />
                <span style={{ fontFamily: 'var(--f-serif)', fontStyle: 'italic', textTransform: 'none', color: 'var(--accent)' }}>Earn the Reduction.</span>
              </h2>
              <p className="lead" style={{ color: 'rgba(11,11,13,0.72)', marginBottom: 12 }}>
                Badges include passing written and on-court tests, then teaching the skill to a younger Warrior. Mastery comes from teaching. Leadership comes from serving.
              </p>
              <p className="mono" style={{ color: 'var(--accent)', fontStyle: 'italic', marginBottom: 24 }}>
                This list will grow as the program does.
              </p>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                {badgeBullets.map((b, i) => (
                  <li
                    key={i}
                    style={{
                      padding: '14px 0',
                      borderTop: i === 0 ? '1px solid rgba(11,11,13,0.14)' : 'none',
                      borderBottom: '1px solid rgba(11,11,13,0.14)',
                      display: 'grid',
                      gridTemplateColumns: '20px 1fr',
                      gap: 14,
                      alignItems: 'start',
                      fontSize: 14,
                      lineHeight: 1.55,
                      color: 'rgba(11,11,13,0.78)',
                    }}
                  >
                    <span style={{ color: 'var(--accent)', fontFamily: 'var(--f-mono)' }}>—</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: 28, padding: 24, background: 'rgba(4,149,75,0.06)', border: '1px solid rgba(4,149,75,0.2)', borderRadius: 4 }}>
                <div className="mono" style={{ color: 'var(--accent)', marginBottom: 8 }}>How a badge is earned.</div>
                <p className="body" style={{ fontSize: 14, lineHeight: 1.6, color: 'rgba(11,11,13,0.78)', margin: 0 }}>
                  Each badge has a written test and an on-court test. When a Warrior passes both, they&apos;re certified — and from that point on, they can be booked as a Big Brother to teach younger Warriors the skill they&apos;ve earned.
                </p>
              </div>
            </div>
            <div>
              <figure
                style={{
                  margin: 0,
                  position: 'relative',
                  aspectRatio: '1/1',
                  background: '#060707',
                  border: '1px solid rgba(11,11,13,0.16)',
                  overflow: 'hidden',
                }}
              >
                <img
                  src="/warriors-badges.png"
                  alt="Warriors badges — Clutch Shooter, Lockdown Defender, Glass Dominator, Court Visionary"
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'contain' }}
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
                  Warriors Badges · Earned On + Off the Court
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* 7 · MISSION / VISION PULL-QUOTE — lifted from /about (PROJECT_BRAIN §1 one-sentence pitch) */}
      <section className="scripture-block">
        <div className="wrap-narrow">
          <div className="scripture-mark">&ldquo;</div>
          <p className="scripture-text">
            A 4-day homeschool academy where student-athletes train like pros, build real businesses, and are mentored in Christ — so families get their kid (and their evenings) back.
          </p>
          <p className="scripture-cite">Warriors Academy · Mission</p>
        </div>
      </section>

      {/* 8 · CTA */}
      <section className="cta-strip">
        <div className="wrap-narrow">
          <h2 className="h-section">Meet them<br />in person.</h2>
          <p className="lead" style={{ margin: '24px auto 32px' }}>
            Photos and bios only get you so far. Spend a day in the gym with the Warriors and decide for yourself.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Btn kind="brass" href="/experience">Schedule a Tryout</Btn>
            <Btn kind="ghost" href="/experience">Spend a Day With Us</Btn>
          </div>
        </div>
      </section>
    </div>
  )
}
