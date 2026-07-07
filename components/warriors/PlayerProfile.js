'use client'

import Link from 'next/link'
import Eyebrow from '../ui/Eyebrow'
import Btn from '../ui/Btn'
import LiteYouTube from '../ui/LiteYouTube'
import { PLAYERS, BADGES } from './rosterData'

// Mosaic photo treatment (production default — big left, two stacked right)
function PhotoTreatment({ photos }) {
  const lbl = (p) => (
    <>
      <div style={{ position: 'absolute', top: 16, left: 16 }}>
        <span className="placeholder-label">{p.label}</span>
      </div>
      <div style={{ position: 'absolute', bottom: 16, left: 16, right: 16 }}>
        <span className="mono" style={{ color: 'rgba(245,242,236,0.5)', fontSize: 10 }}>{p.sub}</span>
      </div>
    </>
  )

  // Real photo when a src is present; otherwise fall back to the placeholder.
  const cell = (ph, boxStyle) =>
    ph && ph.src ? (
      <div style={{ ...boxStyle, position: 'relative', overflow: 'hidden', background: 'var(--ink-2)' }}>
        <img src={ph.src} alt={ph.label} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: ph.fit || 'cover', objectPosition: ph.position || 'center top', transform: ph.scale ? `scale(${ph.scale})` : undefined, transformOrigin: ph.origin || 'center', display: 'block' }} />
      </div>
    ) : (
      <div className="placeholder" style={boxStyle}>{lbl(ph)}</div>
    )

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 12 }}>
      {cell(photos[0], { aspectRatio: '3/4' })}
      <div style={{ display: 'grid', gridTemplateRows: '1fr 1fr', gap: 12 }}>
        {cell(photos[1], { minHeight: 0 })}
        {cell(photos[2], { minHeight: 0 })}
      </div>
    </div>
  )
}

export default function PlayerProfile({ playerId }) {
  const p = PLAYERS[playerId] || PLAYERS['brolen-hill']

  // Other live players (for "see another Warrior")
  const otherPlayers = Object.values(PLAYERS).filter((x) => x.id !== p.id)
  const hasPhotos = (p.photos || []).some((ph) => ph.src)

  // New player with no data yet — show a Coming Soon page instead of the full profile.
  if (p.comingSoon) {
    return (
      <div className="page-enter">
        <div style={{ padding: '120px 0 0', background: 'var(--ink)' }}>
          <div className="wrap">
            <Link href="/warriors" style={{ display: 'inline-block', textDecoration: 'none', fontFamily: 'var(--f-mono)', fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--brass)' }}>← Back to Roster</Link>
          </div>
        </div>
        <section style={{ background: 'var(--ink)', minHeight: '68vh', display: 'grid', placeItems: 'center', padding: '64px 0 120px', textAlign: 'center' }}>
          <div className="wrap-narrow">
            {p.photos?.[0]?.src && (
              <div style={{ width: 200, aspectRatio: '3/4', margin: '0 auto 36px', overflow: 'hidden', border: '1px solid var(--ink-4)', background: 'var(--ink-2)' }}>
                <img src={p.photos[0].src} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block', filter: 'grayscale(0.4)' }} />
              </div>
            )}
            <div className="mono" style={{ color: 'var(--brass)', marginBottom: 16 }}>
              {[p.jersey && ('#' + p.jersey), p.ageGroup && p.ageGroup.toUpperCase()].filter(Boolean).join(' · ')}
            </div>
            <h1 className="h-hero" style={{ marginBottom: 28 }}>{p.name}</h1>
            <div className="mono" style={{ display: 'inline-block', padding: '10px 20px', border: '1px solid var(--brass)', color: 'var(--brass)', letterSpacing: '0.18em' }}>COMING SOON</div>
            <p className="lead" style={{ marginTop: 28, color: 'rgba(245,242,236,0.72)', maxWidth: '46ch', marginLeft: 'auto', marginRight: 'auto' }}>
              New to the program — full profile with stats, film, and story is on the way.
            </p>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="page-enter">

      {/* ===== BACK BAR ===== */}
      <div style={{ padding: '120px 0 0', background: 'var(--ink)' }}>
        <div className="wrap">
          <Link href="/warriors" style={{
            display: 'inline-block', textDecoration: 'none',
            fontFamily: 'var(--f-mono)', fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase',
            color: 'var(--brass)', padding: 0,
          }}>← Back to Roster</Link>
        </div>
      </div>

      {/* ===== PROFILE HERO ===== */}
      <section style={{ padding: '48px 0 60px', background: 'var(--ink)' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 48, alignItems: 'end', borderBottom: '1px solid var(--ink-4)', paddingBottom: 36, marginBottom: 36 }}>
            <div>
              <div className="mono" style={{ color: 'var(--brass)', marginBottom: 16 }}>
                {[`#${p.jersey}`, p.position.toUpperCase(), p.ageGroup && p.ageGroup.toUpperCase(), p.classOf && p.classOf.toUpperCase()].filter(Boolean).join(' · ')}
              </div>
              <h1 className="h-hero" style={{ lineHeight: 0.9 }}>{p.name}</h1>
              {(p.nickname || p.archetype) && (
                <div style={{ marginTop: 16, fontFamily: 'var(--f-serif)', fontStyle: 'italic', fontSize: 'clamp(20px, 2.2vw, 28px)', color: 'var(--brass)' }}>
                  {p.nickname}{p.nickname && p.archetype ? ' · ' : ''}{p.archetype}
                </div>
              )}
              {p.accolades && p.accolades.length > 0 && (
                <div style={{ marginTop: 20, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {p.accolades.map((a, i) => (
                    <span key={i} className="mono" style={{
                      padding: '8px 14px', background: '#F2B705',
                      color: 'var(--ink)', fontSize: 11, letterSpacing: '0.12em',
                      textTransform: 'uppercase', whiteSpace: 'nowrap', fontWeight: 800,
                      borderRadius: 2, boxShadow: '0 2px 14px rgba(242,183,5,0.35)',
                    }}>{a}</span>
                  ))}
                </div>
              )}
            </div>
            <div className="mono" style={{ color: 'var(--muted)', textAlign: 'right', fontSize: 11, lineHeight: 1.8 }}>
              {p.hometown && <div>HOMETOWN · {p.hometown.toUpperCase()}</div>}
              {p.grade && <div>GRADE · {p.grade.toUpperCase()}</div>}
              {p.age && <div>AGE · {p.age}</div>}
            </div>
          </div>

          {/* Vitals strip — VERTICAL column appears only when the player has a vertical */}
          {(() => {
            const vitals = [
              ['HEIGHT', p.height],
              ['WEIGHT', p.weight],
              ['WINGSPAN', p.wingspan],
              ...(p.vertical ? [['VERTICAL', p.vertical]] : []),
              ['DOMINANT HAND', p.handed],
              ['POSITION', p.position],
            ].filter(([, v]) => v && v !== '—')
            return (
              <div style={{ display: 'grid', gridTemplateColumns: `repeat(${vitals.length}, 1fr)`, gap: 0, borderTop: '1px solid var(--ink-4)', borderBottom: '1px solid var(--ink-4)' }}>
                {vitals.map(([l, v], i) => (
                  <div key={i} style={{ padding: '24px 24px', borderRight: i < vitals.length - 1 ? '1px solid var(--ink-4)' : 'none' }}>
                    <div className="mono" style={{ color: 'var(--muted)', marginBottom: 8, fontSize: 10 }}>{l}</div>
                    <div style={{ fontFamily: 'var(--f-display)', fontSize: 28, color: 'var(--paper)', lineHeight: 1 }}>{v}</div>
                  </div>
                ))}
              </div>
            )
          })()}
        </div>
      </section>

      {/* ===== PHOTOS ===== */}
      <section style={{ padding: '40px 0 80px', background: 'var(--ink)' }}>
        <div className="wrap">
          {!hasPhotos && (
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 24 }}>
              <div className="mono" style={{ color: 'var(--muted)' }}>· MOSAIC TREATMENT · 3 IMAGES</div>
              <div className="mono" style={{ color: 'var(--muted)', fontSize: 10 }}>// SWAP IN REAL PHOTOS · COACH-FACING / GAME / CHARACTER</div>
            </div>
          )}
          <PhotoTreatment photos={p.photos} />
        </div>
      </section>

      {/* ===== QUICK STATS RECEIPTS ===== */}
      <section style={{ padding: '0 0 100px', background: 'var(--ink)' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, border: '1px solid var(--ink-4)' }}>
            {[
              [p.stats.ppg, 'POINTS PER GAME'],
              [p.stats.rpg, 'REBOUNDS · GAME'],
              [p.stats.apg, 'ASSISTS · GAME'],
              [p.stats.three, '3-POINT %'],
            ].map(([n, l], i) => (
              <div key={i} style={{ padding: '40px 32px', borderRight: i < 3 ? '1px solid var(--ink-4)' : 'none', background: i === 0 ? 'var(--ink-2)' : 'transparent' }}>
                <div style={{ fontFamily: 'var(--f-display)', fontSize: 64, lineHeight: 1, color: i === 0 ? 'var(--brass)' : 'var(--paper)', marginBottom: 12 }}>{n}</div>
                <div className="mono" style={{ color: 'var(--muted)' }}>{l}</div>
              </div>
            ))}
          </div>
          <p className="mono" style={{ marginTop: 16, color: 'var(--muted)' }}>· {p.stats.season} SEASON · {p.stats.gp} GAMES PLAYED</p>
        </div>
      </section>

      {/* ===== RECRUITING CARD (2-col: academics + contact) ===== */}
      <section className="section on-paper" style={{ paddingTop: 100, paddingBottom: 100 }}>
        <div className="wrap">
          <div style={{ maxWidth: 680, marginBottom: 48 }}>
            <Eyebrow style={{ color: 'var(--accent)' }}>The Recruiting Page</Eyebrow>
            <h2 className="h-section" style={{ marginTop: 16, marginBottom: 16, color: 'var(--ink)' }}>
              Everything a coach<br />
              <span style={{ fontFamily: 'var(--f-serif)', fontStyle: 'italic', textTransform: 'none', color: 'var(--accent)' }}>needs to know,</span>
              <br />on one page.
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 0, border: '1px solid rgba(11,11,13,0.14)' }}>
            {/* Academics */}
            <div style={{ padding: 40, borderRight: '1px solid rgba(11,11,13,0.14)' }}>
              <div className="mono" style={{ color: 'var(--accent)', marginBottom: 16 }}>ACADEMICS &amp; INTERESTS</div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 32 }}>
                <div>
                  <div className="mono" style={{ color: 'rgba(11,11,13,0.55)', fontSize: 10, marginBottom: 6 }}>GPA</div>
                  <div style={{ fontFamily: 'var(--f-display)', fontSize: 42, lineHeight: 1, color: 'var(--ink)' }}>{p.academics.gpa}</div>
                  <div className="mono" style={{ color: 'rgba(11,11,13,0.5)', fontSize: 10, marginTop: 4 }}>· {p.academics.gpaScale}</div>
                </div>
                <div>
                  <div className="mono" style={{ color: 'rgba(11,11,13,0.55)', fontSize: 10, marginBottom: 6 }}>ACT / SAT</div>
                  <div style={{ fontFamily: 'var(--f-display)', fontSize: 42, lineHeight: 1, color: 'var(--ink)' }}>{p.academics.act}<span style={{ fontSize: 22, color: 'rgba(11,11,13,0.4)' }}> / {p.academics.sat}</span></div>
                  <div className="mono" style={{ color: 'rgba(11,11,13,0.5)', fontSize: 10, marginTop: 4 }}>· iReady {p.academics.iready}</div>
                </div>
              </div>

              <div style={{ marginBottom: 28 }}>
                <div className="mono" style={{ color: 'rgba(11,11,13,0.55)', fontSize: 10, marginBottom: 8 }}>ACADEMIC INTERESTS</div>
                <div style={{ fontSize: 16, lineHeight: 1.5, color: 'var(--ink)' }}>{p.academics.interests}</div>
              </div>

              {p.academics.otherInterests && p.academics.otherInterests.length > 0 && (
                <div>
                  <div className="mono" style={{ color: 'rgba(11,11,13,0.55)', fontSize: 10, marginBottom: 8 }}>OTHER INTERESTS</div>
                  <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                    {p.academics.otherInterests.map((r, i) => (
                      <li key={i} style={{ padding: '8px 0', borderTop: i === 0 ? '1px solid rgba(11,11,13,0.12)' : '1px solid rgba(11,11,13,0.08)', fontSize: 14, color: 'rgba(11,11,13,0.72)' }}>· {r}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Coach contact */}
            <div style={{ padding: 40, background: 'var(--ink)', color: 'var(--paper)' }}>
              <div className="mono" style={{ color: 'var(--accent-hi)', marginBottom: 16 }}>COACH CONTACT</div>
              <div style={{ fontFamily: 'var(--f-display)', fontSize: 32, lineHeight: 1.05, color: 'var(--paper)', marginBottom: 8 }}>{p.contact.name}</div>
              <div style={{ fontSize: 13, lineHeight: 1.5, color: 'rgba(245,242,236,0.7)', marginBottom: 32 }}>{p.contact.role}</div>

              <div style={{ marginBottom: 16 }}>
                <div className="mono" style={{ color: 'rgba(245,242,236,0.5)', fontSize: 10, marginBottom: 6 }}>EMAIL</div>
                <a href={`mailto:${p.contact.email}`} style={{ color: 'var(--paper)', fontSize: 16, textDecoration: 'underline', textUnderlineOffset: 4 }}>{p.contact.email}</a>
              </div>

              <div style={{ marginBottom: 32 }}>
                <div className="mono" style={{ color: 'rgba(245,242,236,0.5)', fontSize: 10, marginBottom: 6 }}>PHONE</div>
                <div style={{ fontFamily: 'var(--f-mono)', color: 'var(--paper)', fontSize: 16, letterSpacing: '0.05em' }}>{p.contact.phone}</div>
              </div>

              <div style={{ paddingTop: 24, borderTop: '1px solid rgba(245,242,236,0.14)' }}>
                <div className="mono" style={{ color: 'rgba(245,242,236,0.5)', fontSize: 10, marginBottom: 10 }}>FILM &amp; SOCIAL</div>
                <div style={{ display: 'grid', gap: 6, fontSize: 14 }}>
                  <div><span className="mono" style={{ color: 'var(--brass)', marginRight: 12, fontSize: 10 }}>HUDL</span>{p.socials.hudl}</div>
                  <div><span className="mono" style={{ color: 'var(--brass)', marginRight: 12, fontSize: 10 }}>IG · ·</span>{p.socials.ig}</div>
                  <div><span className="mono" style={{ color: 'var(--brass)', marginRight: 12, fontSize: 10 }}>X · · ·</span>{p.socials.x}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SEASON STATS (table + career highs) ===== */}
      <section style={{ padding: '100px 0', background: 'var(--ink)' }}>
        <div className="wrap">
          <div style={{ maxWidth: 680, marginBottom: 48 }}>
            <Eyebrow>{p.stats.season} Season Stats</Eyebrow>
            <h2 className="h-section" style={{ marginTop: 16, marginBottom: 12 }}>
              The receipts.
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gap: 0, border: '1px solid var(--ink-4)', marginBottom: 64 }}>
            {[
              ['GP', p.stats.gp],
              ['PPG', p.stats.ppg],
              ['RPG', p.stats.rpg],
              ['APG', p.stats.apg],
              ['SPG', p.stats.spg],
              ['BPG', p.stats.bpg],
              ['FG%', p.stats.fg],
              ['3P%', p.stats.three],
            ].map(([l, v], i) => (
              <div key={i} style={{ padding: '28px 18px', borderRight: i < 7 ? '1px solid var(--ink-4)' : 'none' }}>
                <div className="mono" style={{ color: 'var(--brass)', marginBottom: 8, fontSize: 10 }}>{l}</div>
                <div style={{ fontFamily: 'var(--f-display)', fontSize: 34, lineHeight: 1, color: 'var(--paper)' }}>{v}</div>
              </div>
            ))}
          </div>

          {/* Career highs */}
          <div style={{ maxWidth: 480, marginBottom: 24 }}>
            <Eyebrow>Career Highs</Eyebrow>
            <h3 className="h-sub" style={{ marginTop: 12, marginBottom: 0 }}>One-game bests.</h3>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: `repeat(${p.careerHighs.length}, 1fr)`, gap: 0, border: '1px solid var(--ink-4)' }}>
            {p.careerHighs.map(([n, l, ctx], i) => (
              <div key={i} style={{ padding: '32px 24px', borderRight: i < p.careerHighs.length - 1 ? '1px solid var(--ink-4)' : 'none' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 10 }}>
                  <div style={{ fontFamily: 'var(--f-display)', fontSize: 56, lineHeight: 1, color: 'var(--brass)' }}>{n}</div>
                  <div className="mono" style={{ color: 'var(--muted)' }}>{l}</div>
                </div>
                <div style={{ fontSize: 12, lineHeight: 1.55, color: 'rgba(245,242,236,0.6)' }}>· {ctx}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BADGES EARNED ===== */}
      <section className="section on-paper" style={{ paddingTop: 100, paddingBottom: 100 }}>
        <div className="wrap">
          <div style={{ maxWidth: 680, marginBottom: 48 }}>
            <Eyebrow style={{ color: 'var(--accent)' }}>Big Brother Badges</Eyebrow>
            <h2 className="h-section" style={{ marginTop: 16, marginBottom: 12, color: 'var(--ink)' }}>
              Earned. Tested.<br />
              <span style={{ fontFamily: 'var(--f-serif)', fontStyle: 'italic', textTransform: 'none', color: 'var(--accent)' }}>Now teaching.</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}>
            {BADGES.map((b, i) => {
              const earned = p.badges.includes(b.name)
              const inProg = p.badgesInProgress.includes(b.name)
              return (
                <div key={i} style={{
                  background: 'var(--ink)',
                  border: earned ? '1px solid var(--accent)' : '1px solid var(--ink-4)',
                  padding: 14,
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}>
                  <img src={b.img} alt={`${b.name} — ${b.desc}`} style={{ width: '100%', height: 'auto', display: 'block', filter: earned ? 'none' : 'grayscale(0.85)', opacity: earned ? 1 : 0.5 }} />
                  <div className="mono" style={{ marginTop: 12, fontSize: 10, color: earned ? 'var(--accent-hi)' : 'rgba(245,242,236,0.45)' }}>
                    {earned ? '· CERTIFIED' : inProg ? '· IN PROGRESS' : '· NOT YET'}
                  </div>
                </div>
              )
            })}
          </div>
          <p className="mono" style={{ marginTop: 24, color: 'rgba(11,11,13,0.5)' }}>· This list will grow as the program does.</p>
        </div>
      </section>

      {/* ===== AWARDS RAIL ===== */}
      <section style={{ padding: '90px 0', background: 'var(--ink-2)' }}>
        <div className="wrap">
          <div style={{ maxWidth: 540, marginBottom: 40 }}>
            <Eyebrow>Honors &amp; Awards</Eyebrow>
            <h2 className="h-sub" style={{ marginTop: 12, color: 'var(--paper)' }}>What the season&rsquo;s already said.</h2>
          </div>
          <div style={{ display: 'grid', gap: 0, borderTop: '1px solid var(--ink-4)' }}>
            {p.awards.map((a, i) => (
              <div key={i} style={{
                display: 'grid', gridTemplateColumns: '120px 1fr auto', gap: 32,
                padding: '22px 0', borderBottom: '1px solid var(--ink-4)',
                alignItems: 'baseline',
              }}>
                <div className="mono" style={{ color: 'var(--brass)' }}>{a.y}</div>
                <div style={{ fontFamily: 'var(--f-display)', fontSize: 22, textTransform: 'uppercase', lineHeight: 1.1, color: 'var(--paper)' }}>{a.t}</div>
                <div className="mono" style={{ color: 'var(--muted)', fontSize: 10 }}>· VERIFIED</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HIGHLIGHT VIDEO ===== */}
      {p.highlight && (p.highlight.src || p.highlight.id) && (
      <section style={{ padding: '100px 0', background: 'var(--ink)' }}>
        <div className="wrap">
          <div style={{ maxWidth: 680, marginBottom: 40 }}>
            <Eyebrow>Highlight Reel</Eyebrow>
            <h2 className="h-section" style={{ marginTop: 16, marginBottom: 16 }}>
              5 minutes of <span style={{ fontFamily: 'var(--f-serif)', fontStyle: 'italic', textTransform: 'none', color: 'var(--brass)' }}>tape.</span>
            </h2>
            <p className="lead">
              Cut by coach, not by Hudl algorithm. Best two-way possessions of the season, in context — possession start to whistle.
            </p>
          </div>
          {p.highlight.src ? (
            <video controls preload="metadata" style={{ width: '100%', display: 'block', background: '#000', aspectRatio: '16 / 9' }} src={p.highlight.src}>
              Your browser does not support the video tag.
            </video>
          ) : (
            <LiteYouTube id={p.highlight.id} title={p.highlight.title} />
          )}
          <p className="mono" style={{ marginTop: 16, color: 'var(--muted)' }}>· FULL GAME FILM AVAILABLE ON REQUEST · CONTACT THE COACH ABOVE</p>
        </div>
      </section>
      )}

      {/* ===== FAITH / CHARACTER ===== */}
      {p.testimony && (
        <section className="section on-paper" style={{ paddingTop: 100, paddingBottom: 100 }}>
          <div className="wrap-narrow" style={{ textAlign: 'center' }}>
            <Eyebrow style={{ color: 'var(--accent)' }}>In the Player&rsquo;s Words</Eyebrow>
            <p style={{
              fontFamily: 'var(--f-serif)', fontStyle: 'italic',
              fontSize: 'clamp(28px, 3.4vw, 44px)', lineHeight: 1.3,
              color: 'var(--ink)', maxWidth: '24ch', margin: '24px auto 24px',
            }}>
              &ldquo;{p.testimony}&rdquo;
            </p>
            <div className="mono" style={{ color: 'var(--accent)', marginTop: 16 }}>· {p.name.toUpperCase()}</div>
          </div>
        </section>
      )}

      {/* ===== COACH QUOTE ===== */}
      {p.coachQuote && p.coachQuote.text && (
        <section style={{ padding: '100px 0', background: 'var(--ink)' }}>
          <div className="wrap">
            <div className="quote" style={{ background: 'var(--ink-2)', borderLeft: '4px solid var(--brass)', padding: '56px 56px' }}>
              <div className="quote-text">&ldquo;{p.coachQuote.text}&rdquo;</div>
              <div className="quote-attr">— {p.coachQuote.attr}</div>
            </div>
          </div>
        </section>
      )}

      {/* ===== OTHER PLAYERS ===== */}
      <section style={{ padding: '80px 0 100px', background: 'var(--ink-2)' }}>
        <div className="wrap">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 32, flexWrap: 'wrap', gap: 16 }}>
            <h3 className="h-sub" style={{ color: 'var(--paper)' }}>See another Warrior</h3>
            <Link href="/warriors" style={{
              textDecoration: 'none',
              fontFamily: 'var(--f-mono)', fontSize: 11, letterSpacing: '0.16em',
              textTransform: 'uppercase', color: 'var(--brass)',
            }}>full roster →</Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
            {otherPlayers.map((o) => (
              <Link key={o.id} href={`/player/${o.id}`} style={{
                textAlign: 'left', cursor: 'pointer', textDecoration: 'none',
                background: 'var(--ink)', border: '1px solid var(--ink-4)',
                padding: 24, color: 'inherit', font: 'inherit',
                display: 'grid', gridTemplateColumns: '80px 1fr auto', gap: 20, alignItems: 'center',
                transition: 'border-color .15s ease',
              }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--brass)' }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--ink-4)' }}
              >
                <div className="placeholder" style={{ aspectRatio: '1/1', overflow: 'hidden' }}>
                  {o.photos?.[0]?.src && (
                    <img src={o.photos[0].src} alt={o.name} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }} />
                  )}
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, flexWrap: 'wrap', marginBottom: 6 }}>
                    <span style={{ fontFamily: 'var(--f-display)', fontSize: 24, color: 'var(--paper)', lineHeight: 1 }}>{o.name}</span>
                    <span className="mono" style={{ color: 'var(--brass)', fontSize: 12 }}>#{o.jersey}</span>
                  </div>
                  <div className="mono" style={{ color: 'var(--brass)' }}>{o.position} · {o.ageGroup}{o.classOf ? ` · ${o.classOf}` : ''}</div>
                </div>
                <span style={{ color: 'var(--brass)', fontSize: 20 }}>→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="cta-strip">
        <div className="wrap-narrow">
          <h2 className="h-section">Want to meet {p.name.split(' ')[0]}?</h2>
          <p className="lead" style={{ margin: '24px auto 32px' }}>
            Email or call the coach above. Or come see {p.name.split(' ')[0]} live — the Warriors play 40+ games a season, and most are within day-driving distance of Springfield.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Btn kind="brass" href={`mailto:${p.contact.email}`}>Contact {p.contact.name.split(' ')[0]} {p.contact.name.split(' ').slice(-1)[0]}</Btn>
            <Btn kind="ghost" href="/warriors">Back to Roster</Btn>
          </div>
        </div>
      </section>
    </div>
  )
}
