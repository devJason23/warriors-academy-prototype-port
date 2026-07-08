import Btn from '../../components/ui/Btn'
import Eyebrow from '../../components/ui/Eyebrow'

export const metadata = {
  title: 'Tryouts — Missouri Warriors Basketball & Cheer · Springfield, MO',
  description:
    'Missouri Warriors Basketball & Cheer — Parent Information Meeting & Tryouts, Friday, July 10 at Betsy & Bobby Allison Sportstown, Springfield, MO.',
}

const schedule = [
  ['9:00 – 10:00 AM', 'Parent Information Meeting'],
  ['10:00 AM – 12:00 PM', 'Cheer Tryouts (ages 5–18) · Boys Basketball Tryouts (ages 10–18)'],
  ['12:00 – 2:00 PM', 'Girls Basketball Tryouts (ages 10–18)'],
]

export default function TryoutsPage() {
  return (
    <div className="page-enter">
      <section style={{ padding: '120px 0 40px', background: 'var(--ink)' }}>
        <div className="wrap">
          <Eyebrow>Join the Warriors</Eyebrow>
          <h1 className="h-hero" style={{ marginTop: 20, marginBottom: 20, maxWidth: '18ch' }}>
            Tryouts &amp; Parent Info Meeting
          </h1>
          <p className="lead" style={{ maxWidth: '62ch', color: 'rgba(245,242,236,0.8)' }}>
            Basketball &amp; Cheer · <strong style={{ color: 'var(--paper)' }}>Friday, July 10</strong> · Betsy &amp; Bobby Allison Sportstown, Springfield, MO. Come learn, meet the coaches, and be part of something bigger. Faith. Family. Competition. Character.
          </p>

          <div style={{ marginTop: 44, border: '1px solid var(--ink-4)', maxWidth: 780 }}>
            {schedule.map(([time, what], i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '190px 1fr', gap: 20, padding: '22px 24px', borderTop: i ? '1px solid var(--ink-4)' : 'none', alignItems: 'baseline' }}>
                <div className="mono" style={{ color: 'var(--brass)' }}>{time}</div>
                <div style={{ color: 'var(--paper)', fontSize: 15, lineHeight: 1.5 }}>{what}</div>
              </div>
            ))}
          </div>

          <p className="mono" style={{ marginTop: 20, color: 'var(--muted)' }}>· Cheer ages 5–18 · Basketball boys &amp; girls ages 10–18</p>

          <div style={{ marginTop: 32, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Btn kind="brass" href="/experience">Have a question? Reach a coach →</Btn>
          </div>
        </div>
      </section>

      <section style={{ padding: '16px 0 110px', background: 'var(--ink)' }}>
        <div className="wrap">
          <img
            src="/warriors-tryouts.jpg"
            alt="Missouri Warriors Basketball & Cheer — Parent Information Meeting & Tryouts, Friday July 10"
            style={{ width: '100%', maxWidth: 780, height: 'auto', display: 'block', margin: '0 auto', border: '1px solid var(--ink-4)' }}
          />
        </div>
      </section>
    </div>
  )
}
