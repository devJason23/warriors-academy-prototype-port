'use client'

import { useState } from 'react'
import Btn from '../../components/ui/Btn'
import Eyebrow from '../../components/ui/Eyebrow'

// Submissions post to the Warriors basketball eval backend (Google Sheet +
// coach emails). CORS is enabled on that endpoint for this site.
const EVAL_API = 'https://warriors-basketball-eval.vercel.app/api/submissions'

function ScheduleRow({ time, title, desc, tag }) {
  return (
    <div className="schedule-row">
      <div className="schedule-time">{time}</div>
      <div>
        <div className="schedule-title">{title}</div>
        <div className="schedule-desc">{desc}</div>
      </div>
      <div className="schedule-tag">{tag}</div>
    </div>
  )
}

export default function ExperiencePage() {
  const [selected, setSelected] = useState(0)
  const dates = [
    { m: 'June', d: '30', day: 'Tuesday', activity: 'Warriors Day · Training + Family Lunch' },
    { m: 'July', d: '14', day: 'Tuesday', activity: 'Warriors Day · Training + Coach Q&A' },
  ]

  // Experience Day ("Spend a day living the Warrior life") is temporarily hidden.
  // Flip this to true to restore the hero, dates, and schedule sections.
  const SHOW_EXPERIENCE_DAY = false

  const [form, setForm] = useState({
    parentName: '', parentEmail: '', parentPhone: '', athleteNameAge: '',
    competitiveExperience: '', educationSetup: '', additionalInfo: '',
  })
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState('')

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')
    setErrorMsg('')
    try {
      const res = await fetch(EVAL_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.message || "We couldn't send your request. Please try again in a moment.")
      }
      setStatus('success')
    } catch (err) {
      setStatus('error')
      setErrorMsg(err.message || "We couldn't send your request. Please try again in a moment.")
    }
  }

  return (
    <div className="page-enter">
      {SHOW_EXPERIENCE_DAY && (
      <>
      <section style={{ padding: '120px 0 80px', background: 'var(--ink)' }}>
        <div className="wrap">
          <Eyebrow>Warriors Experience Day · 2026</Eyebrow>
          <h1 className="h-hero" style={{ marginTop: 24, marginBottom: 32, maxWidth: '18ch' }}>
            Spend a day<br />living the <span style={{ fontFamily: 'var(--f-serif)', fontStyle: 'italic', textTransform: 'none', color: 'var(--brass)' }}>Warrior life.</span>
          </h1>
          <p className="lead" style={{ maxWidth: '64ch' }}>
            Two dates this summer. Training, team building, family lunch, coach Q&A. Bring your athlete — parents stay all day. The fastest way to understand the full-day Warriors option is to live a day of it. The first step for most families is still the 1-hour evaluation.
          </p>
          <div style={{ marginTop: 40, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Btn kind="primary" href="#evaluation">Book an Evaluation</Btn>
            <Btn kind="ghost" href="#register">Register for a Day</Btn>
          </div>
          <p className="mono" style={{ marginTop: 20, fontSize: 12, color: 'var(--muted)' }}>
            Here for cheer? <a href="/cheer-tryout/" style={{ color: 'var(--brass)', textDecoration: 'underline' }}>Cheer tryouts are over here →</a>
          </p>
        </div>
      </section>

      {/* DATES */}
      <section className="section-tight" style={{ borderTop: '1px solid var(--ink-4)', borderBottom: '1px solid var(--ink-4)' }}>
        <div className="wrap">
          <div className="mono" style={{ color: 'var(--muted)', marginBottom: 24 }}>Pick your day — 9:00 AM to 2:30 PM · Springfield, MO</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
            {dates.map((d, i) => (
              <div
                key={i}
                className={`date-card ${selected === i ? 'selected' : ''}`}
                onClick={() => setSelected(i)}
              >
                <div className="date-month">{d.m}</div>
                <div className="date-day">{d.d}</div>
                <div className="date-year">2026 · {d.day}</div>
                <div className="date-activity">{d.activity}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCHEDULE */}
      <section className="section" id="schedule">
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 64, alignItems: 'start' }}>
            <div>
              <Eyebrow>A Day in the Life</Eyebrow>
              <h2 className="h-section" style={{ marginTop: 16, marginBottom: 24 }}>9 to 2:30.<br />Every minute on purpose.</h2>
              <p className="lead">We don&apos;t run a sales tour. Your athlete trains with our coaches. You sit with our parents. Everyone eats lunch together. By 2:30 you&apos;ll know.</p>
              <div style={{ marginTop: 32, padding: 24, background: 'var(--ink-2)', borderLeft: '3px solid var(--brass)', borderRadius: '0 4px 4px 0' }}>
                <div className="mono" style={{ color: 'var(--brass)', marginBottom: 8 }}>What to bring</div>
                <ul style={{ margin: 0, paddingLeft: 20, fontSize: 14, color: 'rgba(245,242,236,0.78)', lineHeight: 1.7 }}>
                  <li>Basketball shoes + athletic wear</li>
                  <li>Water bottle</li>
                  <li>Questions. Lots of them.</li>
                </ul>
              </div>
            </div>
            <div>
              <ScheduleRow time="9:00 AM" title="Arrival · Prayer · Dynamic Warmup" desc="Meet the coaches. Open in prayer. ATG mobility warmup — the same way every Warrior starts the day." tag="30 min" />
              <ScheduleRow time="9:30 AM" title="Elite Training Block" desc="Basketball-specific development with Coach Jason. Skill work, small-sided competition, and individual shooting on Dr. Dish." tag="75 min" />
              <ScheduleRow time="10:45 AM" title="Business Build Sprint" desc="Athletes ideate a mini-business, build a 60-second pitch using AI tools, and present. Real skills in 30 minutes." tag="30 min" />
              <ScheduleRow time="11:15 AM" title="Team-Building Activity" desc="Rotating by date — paintball, golf short-game clinic, archery, or escape room. This is the part kids text their friends about." tag="60 min" />
              <ScheduleRow time="12:15 PM" title="Family Lunch With Coaches" desc="Team meal. Parents sit with Don, Jason, and Dee. Kids sit with current Warriors. Real conversation, no presentation." tag="45 min" />
              <ScheduleRow time="1:00 PM" title="Film Study + Big Brother Session" desc="Current Warriors walk visiting athletes through a film study. Visiting athletes book 15-minute micro-sessions with certified Big Brothers." tag="45 min" />
              <ScheduleRow time="1:45 PM" title="Parent Q&A · Next Steps" desc="Open conversation with Don Hamilton (AD), Jason Hill (Head Coach), and Dee Hamilton (Spiritual Leader). Ask anything." tag="45 min" />
            </div>
          </div>
        </div>
      </section>

      <hr className="rule" />
      </>
      )}

      {/* EVALUATION */}
      <section className="section on-paper" id="evaluation">
        <div className="wrap">
          <div style={{ maxWidth: 860, margin: '0 auto', textAlign: 'center' }}>
            <Eyebrow style={{ color: 'var(--accent)' }}>First Step · 1-Hour Evaluation</Eyebrow>
            <h2 className="h-section" style={{ marginTop: 16, marginBottom: 16, color: 'var(--ink)' }}>Book an evaluation first.</h2>
            <p className="lead" style={{ color: 'rgba(11,11,13,0.72)', marginBottom: 32 }}>
              Coaches test vertical leap, 40-yard dash, Dr. Dish shooting, basketball skill, competitiveness, and coachability. Every athlete gets an evaluation, a walk-through of where they are, and a chance to see where they land on the Warriors tryout leaderboard. Evaluation athletes may also get a chance to compete against top Warriors when it fits the session.
            </p>
            <Btn kind="primary" href="#register">Book Evaluation / Register Interest</Btn>
          </div>
        </div>
      </section>

      {/* REGISTER FORM */}
      <section className="section on-paper" id="register">
        <div className="wrap">
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            <Eyebrow style={{ color: 'var(--accent)' }}>Register · Free</Eyebrow>
            <h2 className="h-section" style={{ marginTop: 16, marginBottom: 16, color: 'var(--ink)' }}>
              Request an evaluation.<br />No pressure, no pitch.
            </h2>
            <p className="lead" style={{ color: 'rgba(11,11,13,0.72)', marginBottom: 48 }}>
              Share a few details about your athlete and a Warriors coach — or AD Don Hamilton — will reach out within 24 hours to schedule your 1-hour evaluation. Want to spend a full day with the Warriors too? We&apos;ll talk that through during or after the evaluation.
            </p>

            <div style={{ background: 'var(--ink)', padding: 48, borderRadius: 8 }}>
              {status === 'success' ? (
                <div style={{ textAlign: 'center', padding: '28px 0' }}>
                  <div className="mono" style={{ color: 'var(--accent)', marginBottom: 12, letterSpacing: '0.14em' }}>· REQUEST RECEIVED</div>
                  <h3 className="h-sub" style={{ marginBottom: 12 }}>Thank you!</h3>
                  <p className="lead" style={{ maxWidth: '52ch', margin: '0 auto' }}>
                    A Warriors coach or AD Don Hamilton will reach out within 24 hours to schedule your evaluation. Go Warriors!
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit}>
                  <div className="form-row">
                    <div className="form-field">
                      <label>Parent / Guardian Name</label>
                      <input placeholder="Full name" value={form.parentName} onChange={update('parentName')} required />
                    </div>
                    <div className="form-field">
                      <label>Email</label>
                      <input type="email" placeholder="you@example.com" value={form.parentEmail} onChange={update('parentEmail')} required />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-field">
                      <label>Phone</label>
                      <input type="tel" placeholder="(417) 555-0000" value={form.parentPhone} onChange={update('parentPhone')} required />
                    </div>
                    <div className="form-field">
                      <label>Athlete&apos;s Name + Age</label>
                      <input placeholder="e.g. Micah · 13" value={form.athleteNameAge} onChange={update('athleteNameAge')} required />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-field">
                      <label>Has your child played competitive basketball before?</label>
                      <input placeholder="Yes / No — leagues, years, level" value={form.competitiveExperience} onChange={update('competitiveExperience')} />
                    </div>
                    <div className="form-field">
                      <label>Current Education Setup</label>
                      <input placeholder="Public / Private / Homeschool" value={form.educationSetup} onChange={update('educationSetup')} />
                    </div>
                  </div>
                  <div className="form-field" style={{ marginBottom: 24 }}>
                    <label>Anything else we should know?</label>
                    <textarea rows={3} placeholder="Athletic background, sibling athletes, specific questions..." value={form.additionalInfo} onChange={update('additionalInfo')} />
                  </div>
                  <Btn kind="primary" type="submit" disabled={status === 'submitting'}>
                    {status === 'submitting' ? 'Sending…' : 'Request My Evaluation'}
                  </Btn>
                  {status === 'error' && (
                    <div style={{ marginTop: 16, color: '#ff8a8a', fontSize: 14 }}>{errorMsg}</div>
                  )}
                  <div style={{ marginTop: 16, fontFamily: 'var(--f-mono)', fontSize: 11, letterSpacing: '0.14em', color: 'var(--muted)', textTransform: 'uppercase' }}>
                    A Warriors coach or AD Don will reach out within 24 hours to schedule your evaluation.
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
