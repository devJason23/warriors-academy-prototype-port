'use client'

import { useState } from 'react'
import Btn from '../../components/ui/Btn'
import Eyebrow from '../../components/ui/Eyebrow'

// Submissions post to the Warriors cheer backend (Google Sheet + coach email).
// CORS is enabled on that endpoint for this site.
const CHEER_API = 'https://warriors-cheer-tryout.vercel.app/api/submissions'

export default function CheerTryoutPage() {
  const [form, setForm] = useState({
    cheerleaderName: '', age: '', grade: '', parentName: '', parentEmail: '',
    parentPhone: '', city: '', experience: '', schoolType: '', howHeard: '', questions: '',
  })
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState('')

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')
    setErrorMsg('')
    try {
      const res = await fetch(CHEER_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, age: form.age ? Number(form.age) : undefined }),
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
      <section className="section on-paper" id="cheer-tryout">
        <div className="wrap">
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            <Eyebrow style={{ color: 'var(--accent)' }}>Warriors Cheer · Tryout &amp; Evaluation Interest</Eyebrow>
            <h2 className="h-section" style={{ marginTop: 16, marginBottom: 16, color: 'var(--ink)' }}>
              Join the squad.<br />Same standard, same fire.
            </h2>
            <p className="lead" style={{ color: 'rgba(11,11,13,0.72)', marginBottom: 48 }}>
              Share a few details and Head Coach Elizabeth Avery will reach out within 24 hours to get your athlete started. Warriors Cheer is ages 5–18 — beginners welcome.
            </p>

            <div style={{ background: 'var(--ink)', padding: 48, borderRadius: 8 }}>
              {status === 'success' ? (
                <div style={{ textAlign: 'center', padding: '28px 0' }}>
                  <div className="mono" style={{ color: 'var(--accent)', marginBottom: 12, letterSpacing: '0.14em' }}>· REQUEST RECEIVED</div>
                  <h3 className="h-sub" style={{ marginBottom: 12 }}>Thank you!</h3>
                  <p className="lead" style={{ maxWidth: '52ch', margin: '0 auto' }}>
                    Head Coach Elizabeth Avery will reach out within 24 hours to get your athlete started. Go Warriors!
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit}>
                  <div className="form-row">
                    <div className="form-field">
                      <label>Cheerleader&apos;s Full Name</label>
                      <input placeholder="Full name" value={form.cheerleaderName} onChange={update('cheerleaderName')} required />
                    </div>
                    <div className="form-field">
                      <label>Age (5–18)</label>
                      <input type="number" min="5" max="18" placeholder="e.g. 12" value={form.age} onChange={update('age')} required />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-field">
                      <label>Parent / Guardian Name</label>
                      <input placeholder="Full name" value={form.parentName} onChange={update('parentName')} required />
                    </div>
                    <div className="form-field">
                      <label>Grade (2026–27)</label>
                      <input placeholder="e.g. 7th" value={form.grade} onChange={update('grade')} />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-field">
                      <label>Parent Email</label>
                      <input type="email" placeholder="you@example.com" value={form.parentEmail} onChange={update('parentEmail')} required />
                    </div>
                    <div className="form-field">
                      <label>Parent Phone</label>
                      <input type="tel" placeholder="(417) 555-0000" value={form.parentPhone} onChange={update('parentPhone')} required />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-field">
                      <label>City / Town</label>
                      <input placeholder="Springfield" value={form.city} onChange={update('city')} />
                    </div>
                    <div className="form-field">
                      <label>School Type</label>
                      <select value={form.schoolType} onChange={update('schoolType')}>
                        <option value="">Select…</option>
                        <option>Homeschool</option>
                        <option>Private</option>
                        <option>Public</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-field" style={{ marginBottom: 16 }}>
                    <label>How did you hear about us?</label>
                    <select value={form.howHeard} onChange={update('howHeard')}>
                      <option value="">Select…</option>
                      <option>Flyer</option>
                      <option>Instagram</option>
                      <option>Friend / family</option>
                      <option>Current Warriors family</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="form-field" style={{ marginBottom: 16 }}>
                    <label>Cheer / tumbling / dance / gymnastics experience</label>
                    <textarea rows={3} placeholder="Any background is welcome — beginners too." value={form.experience} onChange={update('experience')} />
                  </div>
                  <div className="form-field" style={{ marginBottom: 24 }}>
                    <label>Questions or anything else?</label>
                    <textarea rows={3} placeholder="Specific questions, sibling athletes, scheduling..." value={form.questions} onChange={update('questions')} />
                  </div>
                  <Btn kind="primary" type="submit" disabled={status === 'submitting'}>
                    {status === 'submitting' ? 'Sending…' : 'Join the Squad'}
                  </Btn>
                  {status === 'error' && (
                    <div style={{ marginTop: 16, color: '#ff8a8a', fontSize: 14 }}>{errorMsg}</div>
                  )}
                  <div style={{ marginTop: 16, fontFamily: 'var(--f-mono)', fontSize: 11, letterSpacing: '0.14em', color: 'var(--muted)', textTransform: 'uppercase' }}>
                    Coach Elizabeth Avery will reach out within 24 hours.
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
