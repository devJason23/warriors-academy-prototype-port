export const metadata = {
  title: 'Privacy Policy — Missouri Warriors',
  description:
    'How Missouri Warriors collects and uses the information you submit through our tryout and evaluation forms. We never sell or share your information.',
  robots: { index: true, follow: true },
}

const UPDATED = 'August 11, 2026'

const SECTIONS = [
  {
    h: 'Who we are',
    p: [
      'Missouri Warriors ("we," "us," or "our") is a faith-based homeschool basketball and cheer program serving families in the Springfield / Republic, Missouri area. This Privacy Policy explains what information we collect when you contact us — including through forms on this website and lead forms served through Facebook and Instagram — and how we use it.',
    ],
  },
  {
    h: 'Information we collect',
    p: [
      'When you register for a tryout, request an evaluation, or otherwise reach out to us, we may collect:',
    ],
    list: [
      'Your name (parent or guardian)',
      'Your email address and phone number',
      'Your athlete’s program or division (for example, a basketball age group or cheer)',
      'Your current schooling type (homeschool, public, or private), if you choose to provide it',
      'Any additional details you choose to share with us',
    ],
  },
  {
    h: 'How we use your information',
    p: [
      'We use the information you provide for one purpose: so a Missouri Warriors coach or director can contact you about tryouts, evaluations, and our programs. We may reach out by phone, text, or email to confirm your spot, answer questions, and share event details.',
    ],
  },
  {
    h: 'We do not sell or share your information',
    p: [
      'We do not sell, rent, or trade your personal information to anyone. We do not share it with third parties for their own marketing. Your information stays with the Missouri Warriors coaching staff and the tools we use to run the program.',
    ],
  },
  {
    h: 'Facebook & Instagram lead forms',
    p: [
      'If you submit a form through one of our Facebook or Instagram ads, Meta collects your response on our behalf and makes it available to us. Meta’s own handling of your data is governed by the Meta Privacy Policy. Once we receive your response, this Privacy Policy governs how we use it.',
    ],
  },
  {
    h: 'How your information is stored',
    p: [
      'Form submissions are stored in secure, access-controlled tools (such as our submission spreadsheet and email) used only by Missouri Warriors staff. We keep your information only as long as needed to follow up with you and administer our programs.',
    ],
  },
  {
    h: 'Children’s information',
    p: [
      'Our forms are completed by parents and guardians, not by children. Any information about an athlete (such as their division) is provided by the adult submitting the form.',
    ],
  },
  {
    h: 'Your choices',
    p: [
      'You can ask us to update or delete your information, or to stop contacting you, at any time. Just email us at the address below and we’ll take care of it.',
    ],
  },
  {
    h: 'Contact us',
    p: [
      'Questions about this policy or your information? Email Coach Jason at coachjason@mo-warriors.com.',
    ],
  },
]

export default function PrivacyPage() {
  return (
    <div style={{ background: 'var(--ink)', color: 'var(--paper)', minHeight: '100vh', padding: '64px 0 96px' }}>
      <style>{`
        .nav, .announce-bar, .footer { display: none !important; }
        .pp-wrap { max-width: 760px; margin: 0 auto; padding: 0 24px; }
        .pp-h { font-family: var(--f-display); font-size: clamp(40px, 7vw, 68px); line-height: 0.95; text-transform: uppercase; letter-spacing: 0.01em; }
        .pp-section { margin-top: 40px; }
        .pp-section h2 { font-family: var(--f-display); font-size: 22px; text-transform: uppercase; letter-spacing: 0.02em; margin-bottom: 12px; color: var(--paper); }
        .pp-section p { font-size: 16px; line-height: 1.7; color: rgba(245,242,236,0.82); margin-bottom: 10px; }
        .pp-section ul { margin: 8px 0 0 0; padding-left: 20px; }
        .pp-section li { font-size: 16px; line-height: 1.7; color: rgba(245,242,236,0.82); margin-bottom: 4px; }
      `}</style>
      <div className="pp-wrap">
        <img src="/waw-logo.png" alt="Missouri Warriors" style={{ height: 40, width: 'auto', marginBottom: 28 }} />
        <div className="mono" style={{ fontSize: 12, letterSpacing: '0.14em', color: 'var(--brass-hi)', textTransform: 'uppercase', marginBottom: 14 }}>
          Missouri Warriors
        </div>
        <h1 className="pp-h">Privacy Policy</h1>
        <div className="mono" style={{ fontSize: 12, color: 'var(--muted)', marginTop: 16, letterSpacing: '0.08em' }}>
          Last updated: {UPDATED}
        </div>

        {SECTIONS.map((s) => (
          <div key={s.h} className="pp-section">
            <h2>{s.h}</h2>
            {s.p.map((para, i) => <p key={i}>{para}</p>)}
            {s.list && (
              <ul>
                {s.list.map((li, i) => <li key={i}>{li}</li>)}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
