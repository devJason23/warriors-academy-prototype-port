import Btn from '../../components/ui/Btn'
import Eyebrow from '../../components/ui/Eyebrow'

export const metadata = {
  title: 'Final Tryouts — Missouri Warriors Basketball & Cheer · Republic, MO',
  description:
    'Missouri Warriors Basketball & Cheer — Final Tryouts & Parent Meeting, Friday, August 14 at 931 N. Walnut Ave., Republic, MO. Free to attend.',
}

const schedule = [
  ['9:00 – 11:00 AM', 'Boys Basketball · 10U / 12U / 14U'],
  ['11:30 AM – 1:30 PM', 'All Girls Basketball · All Ages'],
  ['2:00 – 4:00 PM', 'Boys Basketball · 16U / 18U · and Cheer · All Ages'],
  ['4:30 PM', 'Parent Meeting — meet the coaches, hear the vision'],
]

export default function TryoutsPage() {
  return (
    <div className="page-enter">
      <section style={{ padding: '120px 0 40px', background: 'var(--ink)' }}>
        <div className="wrap">
          <Eyebrow>Join the Warriors</Eyebrow>
          <h1 className="h-hero" style={{ marginTop: 20, marginBottom: 20, maxWidth: '18ch' }}>
            Final Tryouts &amp; Parent Meeting
          </h1>
          <p className="lead" style={{ maxWidth: '62ch', color: 'rgba(245,242,236,0.8)' }}>
            Basketball &amp; Cheer · <strong style={{ color: 'var(--paper)' }}>Friday, August 14</strong> · 931 N. Walnut Ave., Republic, MO 65738. Free to attend — come learn, meet the coaches, and be part of something bigger. Faith. Family. Competition. Character.
          </p>

          <div style={{ marginTop: 44, border: '1px solid var(--ink-4)', maxWidth: 780 }}>
            {schedule.map(([time, what], i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '190px 1fr', gap: 20, padding: '22px 24px', borderTop: i ? '1px solid var(--ink-4)' : 'none', alignItems: 'baseline' }}>
                <div className="mono" style={{ color: 'var(--brass)' }}>{time}</div>
                <div style={{ color: 'var(--paper)', fontSize: 15, lineHeight: 1.5 }}>{what}</div>
              </div>
            ))}
          </div>

          <p className="mono" style={{ marginTop: 20, color: 'var(--muted)' }}>· Free to attend · Pre-registration holds your athlete&apos;s spot</p>

          <div style={{ marginTop: 32, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Btn kind="brass" href="/tryout">Pre-register for August 14 →</Btn>
            <Btn kind="ghost" href="/experience">Can&apos;t make it? Book an evaluation →</Btn>
          </div>
        </div>
      </section>
    </div>
  )
}
