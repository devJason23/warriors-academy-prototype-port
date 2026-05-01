import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <div className="nav-logo" style={{ marginBottom: 16 }}>
              <img src="/waw-logo.png" alt="We Are Warriors" className="nav-logo-img nav-logo-img--footer" />
            </div>
            <p className="body" style={{ maxWidth: '36ch', fontSize: 14 }}>
              A Christ-centered 4-day homeschool athletic academy in Springfield, Missouri. Train like a warrior. Build like a founder. Live like a champion.
            </p>
            <p className="mono" style={{ marginTop: 24, color: 'var(--muted)' }}>Springfield, MO &nbsp;·&nbsp; Est. 2024</p>
          </div>
          <div>
            <h4>Program</h4>
            <Link href="/day">A Day at Warriors</Link>
            <Link href="/training">Training & Tech</Link>
            <Link href="/warrior-life-app">Warrior Life App</Link>
            <Link href="/warriors">The Warriors</Link>
            <Link href="/tuition">Tuition</Link>
          </div>
          <div>
            <h4>Learn</h4>
            <Link href="/case">The Case Against Traditional School</Link>
            <Link href="/faq">FAQ</Link>
            <a href="#">Warrior Life App</a>
            <a href="#">Big Brother Program</a>
          </div>
          <div>
            <h4>Visit & Apply</h4>
            <Link href="/experience">Experience Day</Link>
            <a href="#">Book a Call</a>
            <a href="https://wearewarriorsapparel.com">Team Shop ↗</a>
            <a href="mailto:missouriwarriorsbasketball@gmail.com">Contact</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Warriors Academy</span>
          <span>Springfield, MO &nbsp;·&nbsp; missouriwarriorsbasketball@gmail.com</span>
        </div>
      </div>
    </footer>
  )
}
