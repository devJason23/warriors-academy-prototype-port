'use client'

import { useState } from 'react'
import Btn from '../../components/ui/Btn'
import Eyebrow from '../../components/ui/Eyebrow'

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
    { m: 'June', d: '16', activity: 'Paintball · Team-Building Battle' },
    { m: 'June', d: '23', activity: 'Golf Short-Game Clinic' },
    { m: 'July', d: '14', activity: 'Archery · Escape Room Challenge' },
    { m: 'July', d: '21', activity: 'Paintball · Championship Day' },
  ]

  return (
    <div className="page-enter">
      <section style={{ padding: '120px 0 80px', background: 'var(--ink)' }}>
        <div className="wrap">
          <Eyebrow>Warriors Experience Day · 2026</Eyebrow>
          <h1 className="h-hero" style={{ marginTop: 24, marginBottom: 32, maxWidth: '18ch' }}>
            Spend a day<br />living the <span style={{ fontFamily: 'var(--f-serif)', fontStyle: 'italic', textTransform: 'none', color: 'var(--brass)' }}>Warrior life.</span>
          </h1>
          <p className="lead" style={{ maxWidth: '64ch' }}>
            Four dates this summer. Training, team building, family lunch, coach Q&A. Bring your athlete — parents stay all day. The fastest way to understand Warriors Academy is to live a day of it.
          </p>
          <div style={{ marginTop: 40, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Btn kind="primary" href="#register">Register Your Athlete</Btn>
            <Btn kind="ghost" href="#schedule">See the day</Btn>
          </div>
        </div>
      </section>

      {/* DATES */}
      <section className="section-tight" style={{ borderTop: '1px solid var(--ink-4)', borderBottom: '1px solid var(--ink-4)' }}>
        <div className="wrap">
          <div className="mono" style={{ color: 'var(--muted)', marginBottom: 24 }}>Pick your date — 9:00 AM to 2:30 PM · Springfield, MO</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
            {dates.map((d, i) => (
              <div
                key={i}
                className={`date-card ${selected === i ? 'selected' : ''}`}
                onClick={() => setSelected(i)}
              >
                <div className="date-month">{d.m}</div>
                <div className="date-day">{d.d}</div>
                <div className="date-year">2026 · Monday</div>
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
                  <li>Golf clubs if you have them (loaners available)</li>
                  <li>Questions. Lots of them.</li>
                </ul>
              </div>
            </div>
            <div>
              <ScheduleRow time="9:00 AM" title="Arrival · Prayer · Dynamic Warmup" desc="Meet the coaches. Open in prayer. ATG mobility warmup — the same way every Warrior starts the day." tag="30 min" />
              <ScheduleRow time="9:30 AM" title="Elite Training Block" desc="Basketball-specific development with Coach Jason. Skill work, small-sided competition, and individual shooting on Dr. Dish." tag="75 min" />
              <ScheduleRow time="10:45 AM" title="Business Build Sprint" desc="Students ideate a mini-business, build a 60-second pitch using AI tools, and present. Real skills in 30 minutes." tag="30 min" />
              <ScheduleRow time="11:15 AM" title="Team-Building Activity" desc="Rotating by date — paintball, golf short-game clinic, archery, or escape room. This is the part kids text their friends about." tag="60 min" />
              <ScheduleRow time="12:15 PM" title="Family Lunch With Coaches" desc="Team meal. Parents sit with Don, Jason, and Dee. Kids sit with current Warriors. Real conversation, no presentation." tag="45 min" />
              <ScheduleRow time="1:00 PM" title="Film Study + Big Brother Session" desc="Current Warriors walk visiting athletes through a film study. Visiting athletes book 15-minute micro-sessions with certified Big Brothers." tag="45 min" />
              <ScheduleRow time="1:45 PM" title="Parent Q&A · Next Steps" desc="Open conversation with Don Hamilton (AD), Jason Hill (Head Coach), and Dee Hamilton (Spiritual Leader). Ask anything." tag="45 min" />
            </div>
          </div>
        </div>
      </section>

      <hr className="rule" />

      {/* REGISTER FORM */}
      <section className="section on-paper" id="register">
        <div className="wrap">
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            <Eyebrow style={{ color: 'var(--accent)' }}>Register · Free</Eyebrow>
            <h2 className="h-section" style={{ marginTop: 16, marginBottom: 16, color: 'var(--ink)' }}>
              One form. One day.<br />No pressure, no pitch.
            </h2>
            <p className="lead" style={{ color: 'rgba(11,11,13,0.72)', marginBottom: 48 }}>
              Spots are limited to 12 athletes per date so everyone gets real coaching time. We&apos;ll confirm your spot within 24 hours.
            </p>

            <div style={{ background: 'var(--ink)', padding: 48, borderRadius: 8 }}>
              <div className="form-row">
                <div className="form-field">
                  <label>Parent / Guardian Name</label>
                  <input placeholder="Full name" />
                </div>
                <div className="form-field">
                  <label>Email</label>
                  <input placeholder="you@example.com" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-field">
                  <label>Phone</label>
                  <input placeholder="(417) 555-0000" />
                </div>
                <div className="form-field">
                  <label>Athlete&apos;s Name + Age</label>
                  <input placeholder="e.g. Micah · 13" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-field">
                  <label>Preferred Date</label>
                  <select defaultValue={selected}>
                    {dates.map((d, i) => (
                      <option key={i} value={i}>
                        {d.m} {d.d} · {d.activity}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-field">
                  <label>Current School</label>
                  <input placeholder="Public / Private / Homeschool" />
                </div>
              </div>
              <div className="form-field" style={{ marginBottom: 24 }}>
                <label>Anything else we should know?</label>
                <textarea rows={3} placeholder="Athletic background, sibling athletes, specific questions..." />
              </div>
              <Btn kind="primary">Lock In Your Spot</Btn>
              <div style={{ marginTop: 16, fontFamily: 'var(--f-mono)', fontSize: 11, letterSpacing: '0.14em', color: 'var(--muted)', textTransform: 'uppercase' }}>
                Confirmation within 24 hours. Max 12 athletes per day.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SMALL PRINT */}
      <section className="section-tight">
        <div className="wrap-narrow" style={{ textAlign: 'center' }}>
          <p className="body" style={{ fontSize: 14, color: 'var(--muted)' }}>
            Can&apos;t make any of these dates?{' '}
            <a href="#" style={{ color: 'var(--brass)', cursor: 'pointer' }}>Book a 15-minute call with Coach Don →</a>
          </p>
        </div>
      </section>
    </div>
  )
}
