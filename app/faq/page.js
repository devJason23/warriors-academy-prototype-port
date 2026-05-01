'use client'

import { useMemo, useState } from 'react'
import Btn from '../../components/ui/Btn'
import Eyebrow from '../../components/ui/Eyebrow'

const FAQ_DATA = [
  {
    category: 'The Basics',
    items: [
      {
        q: 'Is this a real school? Will my child get a diploma?',
        a: 'Warriors Academy is a Christ-centered homeschool enrichment academy — not a school in the legal sense. Under Missouri law, the family is the educator of record, so the diploma is issued by the parent (or through an accredited homeschool umbrella of your choice — HSLDA, NARHS, and similar options are widely used by our families). That diploma is fully valid for college, military, trade school, and employment. We use "academy" and "co-op," never "school" alone, because the distinction matters legally and honestly.',
      },
      {
        q: 'Is this really homeschooling if my child attends your academy 4 days a week?',
        a: 'Yes. Missouri law (RSMo 167.031) requires parents to lead at least 51% of instruction — specifically the core academics (math, English, reading, science, social studies). Those still happen at home, set to your rhythm. Warriors handles enrichment on top of that: athletic training, entrepreneurship, mentorship, and film. We supplement; we never replace the family as the primary educator.',
      },
      {
        q: 'Can my child play sports at their public school?',
        a: 'Yes. Missouri SB 63 — the "Tebow Law" — was signed by Governor Kehoe on July 9, 2025 and took effect August 28, 2025. Homeschool students can now participate in public-school activities including sports, music, and clubs. Many Warriors athletes play both: Warriors during the week, public-school sports in season.',
      },
      {
        q: 'What ages do you accept?',
        a: 'All age groups, boys and girls, are currently in evaluations. Roster spots are contingent on tryouts — we don’t pre-promise, we evaluate. Boys teams run 10U–18U; girls evaluations are open across all age groups and the roster is forming.',
      },
      {
        q: 'How does the 4-day schedule work?',
        a: 'Monday through Thursday, 9 AM to 3 PM, your athlete is at the academy. Fridays are off — for family, tournament travel, extra skill work, or rest. Home by 3:30 every weeknight. The day rotates through prayer and mobility, athletic training, Dr. Dish + Shoot 360 reps, family-style lunch, entrepreneur unschool, flex/study hall, and film study + reflection.',
      },
    ],
  },
  {
    category: 'Legitimacy & Outcomes',
    items: [
      {
        q: 'Do colleges accept homeschooled athletes?',
        a: 'Routinely. Homeschool college-acceptance rates actually exceed public-school rates — 87% vs 68% nationally — and average SATs run about 1190 vs 1060. The NCAA, NAIA, and every major college have clear homeschool pathways. Recruiting coaches care about film, measurables, and character, not which building you did algebra in. Tim Tebow, Blake Griffin, Venus and Serena Williams, Simone Biles, and Justin Jefferson all came through non-traditional paths.',
      },
      {
        q: 'Does this model actually work? Who else is doing it?',
        a: 'The model is proven. IMG Academy runs 100% college acceptance across 71 countries. Acton Academy has 300+ campuses in 31 states with students 3–5 grade levels above average. Alpha School ranks top 1–2% nationally with 2 hours of AI-driven academics a day. Combine Academy has produced 500+ college scholarships on 70 acres. What’s new about Warriors is the specific combination: Christ-centered, 4-day, homeschool-native, elite training + real business + discipleship — all in Springfield, the homeschool basketball capital.',
      },
      {
        q: 'How do homeschoolers do compared to public school students academically?',
        a: 'Homeschoolers outperform public-schooled peers across nearly every measurable outcome. College acceptance: 87% vs 68%. Average SAT: 1190 vs 1060. Standardized test scores: 65th–80th percentile vs 50th. Meanwhile, 45% of U.S. high school seniors score below basic in math. The homeschool boom — 3.7M kids and growing — isn’t a fringe movement; it’s the fastest-growing education model in America.',
      },
      {
        q: 'What about socialization?',
        a: 'Honest answer: traditional school is a strange place to "learn" socialization — 30 kids the same age, stuck in a room, told not to talk. Warriors puts your athlete in daily contact with a multi-age team, adult coaches who mentor rather than manage, parents who know each other, and a structured mentorship economy (Big Brother) where older kids teach younger ones. Kids don’t come out of this isolated. They come out more socially comfortable with adults, their peers, and the people they’re responsible for.',
      },
    ],
  },
  {
    category: 'Parents & Compliance',
    items: [
      {
        q: 'Do I need to be a certified teacher to homeschool my child?',
        a: 'No. Missouri has no teacher-certification requirement for homeschool parents. You don’t need a degree, a license, or prior experience. You need to log 1,000 hours of instruction per year (600 hours in core subjects, with 400 at the home location), keep samples of work, and maintain a portfolio. Warriors helps you with the structure; parent communities like HSLDA help with the rest.',
      },
      {
        q: 'I’m not a teacher — how can I homeschool effectively?',
        a: 'You don’t have to be. Warriors partners with Numerade — a 10-year-old AI video tutor company — to give every Warriors family a partner discount on its full library of expert-led video tutorials, available for any K–12 subject (algebra, chemistry, calculus, physics, biology, statistics, and more). When your athlete hits a tough concept at 9 PM on a Tuesday, an expert tutor walks them through it on video — instantly. Combined with the 1–2 hours/day of focused academics most homeschool parents put in, the academic side becomes the easiest part of the week — not the scariest.',
      },
      {
        q: 'What is the parent’s role versus the academy’s role?',
        a: 'Parents lead core academics at home — math, English, reading, science, social studies — using any curriculum you choose (Saxon, Beast Academy, Khan, Teaching Textbooks, a co-op, whatever fits). That’s the 51% Missouri requires and we think it’s the right division. Warriors handles enrichment: elite training, entrepreneur unschool, film, character, mentorship, and the social scaffolding of a team. Neither side is overloaded; both sides go deep.',
      },
      {
        q: 'How is the program structured and what about discipline?',
        a: 'Every day opens in prayer and Scripture and closes in film + reflection. Every block has a coach. Every Warrior gets mentored, not just trained. Discipline is handled through clear expectations (punctuality, effort, language, respect for teammates and coaches) and direct conversations — never shame, never public humiliation. Parents are the first line; we escalate to a sit-down with the athlete and family when needed. The bar is the bar, and it lifts everyone up.',
      },
    ],
  },
  {
    category: 'Training & Technology',
    items: [
      {
        q: 'What is the ATG training program?',
        a: 'ATG — Athletic Truth Group — is a joint-first strength and mobility methodology. Knees past toes, zero knee pressure, backwards sled drags, patrick step-ups, full range of motion. Warriors is the only ATG-certified hub within about 200 miles. Most youth basketball injuries are knees and ankles; ATG specifically strengthens the weaknesses that break kids before they do.',
      },
      {
        q: 'What is the difference between Dr. Dish and Shoot 360?',
        a: 'Dr. Dish is a shooting machine that rebounds and feeds every shot — athletes stack up to 1,000 tracked shots per hour and the system logs every zone. Last half-season our program logged 36,862 tracked shots. Shoot 360 is a motion-tracked station used twice a week for form analysis — release time, arc, rotation, elbow alignment, follow-through. Dr. Dish is for volume and efficiency data. Shoot 360 is for mechanical precision. You need both.',
      },
      {
        q: 'What is Shoot 360 and how do your athletes use it?',
        a: 'Two sessions a week. Sensors capture every detail of a shot — release time, arc angle, rotation, elbow alignment, follow-through — and athletes review video on the spot. What a coach can’t catch every rep, the system catches every possession. Small form corrections compound into significant shooting-percentage gains over a single season. It’s the most efficient form-coaching tool in youth basketball.',
      },
      {
        q: 'How does film study work in your program?',
        a: 'Film is daily, not weekly. Every afternoon ends with 15–30 minutes of film from that morning’s training or the last tournament. Coaches teach athletes how to watch film — what to look for, how to grade themselves honestly, how to spot patterns. Journal one thing learned, close in prayer, go home. By 14u most Warriors can break down their own tape better than a lot of college freshmen.',
      },
      {
        q: 'Why golf? What does that have to do with basketball?',
        a: 'Everything. Caitlin Clark credits golf with sharpening her mental toughness — when she has a bad shot on the course, it’s all on her, with no teammates to lean on. Steph Curry famously hit the golf course after a tough playoff loss instead of the gym, then dropped 45 points the next game. Research from Frontiers in Psychology shows individual sports build self-efficacy and autonomous emotional regulation, and the APA found mental resilience can boost performance by 23%. Golf demands 4-plus hours of sustained concentration — training the same full-game awareness needed in the fourth quarter. That’s why every Warriors athlete completes a mandatory golf season.',
      },
    ],
  },
  {
    category: 'Entrepreneurship',
    items: [
      {
        q: 'What does the entrepreneur program involve?',
        a: 'Real business builds, not simulations. Warriors athletes learn AI tools, marketing, finance, video, code, and sales — then run actual client work for Springfield-area businesses. They get paid. A motivated Warrior can earn back tuition. We call it Entrepreneur Unschool: no worksheets, no fake Shark Tank pitches, just real work with real clients and real money.',
      },
      {
        q: 'What if my child does not have a business idea yet?',
        a: 'Most don’t on day one — that’s the point. Entrepreneur Unschool starts with skills (editing, writing, prompting, design, outreach) and projects assigned by coaches, often tied to real local clients. Ideas come from doing the work, not from sitting around waiting for inspiration. By the end of year one, most Warriors have identified the services they love and can charge for.',
      },
      {
        q: 'Is this program only for basketball players?',
        a: 'Basketball is our primary sport, but it’s not the only one. We also offer a competitive Cheer and Stunt program, and every Warrior — regardless of sport — completes a mandatory golf season to build mental toughness and composure. The entrepreneurship curriculum, the 4-day academy structure, and the Christ-centered culture benefit any student. And under Missouri’s Tebow Law, our athletes can play any sport their local public school offers that Warriors doesn’t.',
      },
    ],
  },
  {
    category: 'Community & Faith',
    items: [
      {
        q: 'Is Warriors Academy a Christian program?',
        a: 'Yes, structurally — not decoratively. Every day opens in prayer and Scripture. Coaches disciple, not just train. Lunch is family-style at one table with coaches. The Mirror in Warrior Life rotates an evening devotional. The Big Brother Mentor Program ties older Warriors to younger ones in explicit discipleship. Faith isn’t a bolt-on; it’s the scaffold. We welcome families from any background who respect what we’re building.',
      },
      {
        q: 'What is HoopSmith?',
        a: 'HoopSmith is a basketball content and training partnership that supports Warriors athletes with additional skill-development resources, tournament exposure, and a broader coaching network. Partnerships like HoopSmith are how we extend what’s possible beyond the walls of the academy — giving Warriors access to a national basketball ecosystem while staying rooted in Springfield. [PLACEHOLDER — this question may need updating once the HoopSmith → HoopsIQ transition is finalized.]',
      },
      {
        q: 'What is the Big Brother Mentor Program?',
        a: 'Badges include Clutch Shooter, Lockdown Defender, Glass Dominator, and Court Visionary — and the list will grow as the program does. Each badge has a written test and an on-court test. When a Warrior passes both, they’re certified — and from that point on, they can be booked as a Big Brother to teach younger Warriors the skill they’ve earned. It’s where the oldest kids become the best leaders and the youngest kids get real mentorship from athletes they already look up to.',
      },
    ],
  },
  {
    category: 'Tuition',
    items: [
      {
        q: 'How much does the program cost?',
        a: 'Full detail is on the Tuition page, but here’s the short version: tuition covers our full national travel schedule, all tournament fees, travel to events in St. Louis, Columbia, Wichita, and Indiana, up to 4 hours of daily training, ATG coaching, Dr. Dish, Warrior Life, uniforms, and team gear. Shoot 360 is a recommended off-facility add-on. Stack up the à la carte price and most families find we’re priced below what they’d pay for less. Need-based scholarships are available and payment plans are welcome — no family with the right fit gets turned away for finances.',
      },
    ],
  },
]

export default function FAQPage() {
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')
  const [openItems, setOpenItems] = useState({})

  const toggleItem = (key) => setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }))

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return FAQ_DATA.filter((g) => activeCategory === 'all' || g.category === activeCategory)
      .map((g) => ({
        ...g,
        items: g.items.filter((it) => !q || it.q.toLowerCase().includes(q) || it.a.toLowerCase().includes(q)),
      }))
      .filter((g) => g.items.length > 0)
  }, [query, activeCategory])

  const totalCount = FAQ_DATA.reduce((sum, g) => sum + g.items.length, 0)
  const filteredCount = filtered.reduce((sum, g) => sum + g.items.length, 0)

  return (
    <div className="page-enter">
      {/* HERO */}
      <section style={{ padding: '140px 0 56px', background: 'var(--ink)', borderBottom: '1px solid var(--ink-3)' }}>
        <div className="wrap">
          <Eyebrow>Frequently Asked · {totalCount} Questions</Eyebrow>
          <h1 className="h-hero" style={{ marginTop: 24, marginBottom: 28, maxWidth: '22ch' }}>
            Every question<br />
            families ask<br />
            <span style={{ fontFamily: 'var(--f-serif)', fontStyle: 'italic', textTransform: 'none', color: 'var(--brass)' }}>before they say yes.</span>
          </h1>
          <p className="lead" style={{ maxWidth: '62ch', color: 'rgba(245,242,236,0.78)' }}>
            If your question isn&apos;t here, grab 15 minutes with Coach Don or come spend a day with us at Experience Day. The best questions always come up over family-style lunch anyway.
          </p>
        </div>
      </section>

      {/* SEARCH + FILTER BAR */}
      <section style={{ padding: '32px 0', background: 'var(--ink-2)', borderBottom: '1px solid var(--ink-3)', position: 'sticky', top: 0, zIndex: 20 }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(280px, 400px) 1fr', gap: 32, alignItems: 'center' }}>
            <div style={{ position: 'relative' }}>
              <span
                style={{
                  position: 'absolute',
                  left: 14,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: 'var(--muted)',
                  fontFamily: 'var(--f-mono)',
                  fontSize: 11,
                  letterSpacing: '0.14em',
                }}
              >
                SEARCH
              </span>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="type a question or keyword…"
                style={{
                  width: '100%',
                  padding: '14px 16px 14px 96px',
                  background: 'var(--ink)',
                  border: '1px solid var(--ink-4)',
                  color: 'var(--paper)',
                  fontFamily: 'var(--f-sans)',
                  fontSize: 15,
                  outline: 'none',
                  borderRadius: 2,
                }}
                onFocus={(e) => (e.target.style.borderColor = 'var(--brass)')}
                onBlur={(e) => (e.target.style.borderColor = 'var(--ink-4)')}
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  style={{
                    position: 'absolute',
                    right: 12,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    color: 'var(--muted)',
                    cursor: 'pointer',
                    fontFamily: 'var(--f-mono)',
                    fontSize: 11,
                    letterSpacing: '0.14em',
                  }}
                >
                  CLEAR ×
                </button>
              )}
            </div>

            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'flex-end' }}>
              {['all', ...FAQ_DATA.map((g) => g.category)].map((cat) => {
                const isActive = activeCategory === cat
                const label = cat === 'all' ? `All ${totalCount}` : cat
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    style={{
                      padding: '8px 14px',
                      background: isActive ? 'var(--brass)' : 'transparent',
                      color: isActive ? 'var(--ink)' : 'var(--paper)',
                      border: `1px solid ${isActive ? 'var(--brass)' : 'var(--ink-4)'}`,
                      fontFamily: 'var(--f-mono)',
                      fontSize: 10,
                      letterSpacing: '0.16em',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                      borderRadius: 2,
                      transition: 'all 0.15s ease',
                    }}
                  >
                    {label}
                  </button>
                )
              })}
            </div>
          </div>

          {query && (
            <div className="mono" style={{ marginTop: 16, color: 'var(--muted)' }}>
              · {filteredCount} result{filteredCount === 1 ? '' : 's'} for &ldquo;{query}&rdquo;
            </div>
          )}
        </div>
      </section>

      {/* FAQ LIST */}
      <section style={{ padding: '80px 0 100px', background: 'var(--ink)' }}>
        <div className="wrap">
          {filtered.length === 0 ? (
            <div style={{ padding: '80px 40px', textAlign: 'center', border: '1px dashed var(--ink-4)' }}>
              <div style={{ fontFamily: 'var(--f-display)', fontSize: 40, color: 'var(--paper)', marginBottom: 12 }}>
                No matches.
              </div>
              <p style={{ color: 'var(--muted)', marginBottom: 24 }}>Try a different keyword, or ask Coach Don directly.</p>
              <Btn
                kind="brass"
                onClick={() => {
                  setQuery('')
                  setActiveCategory('all')
                }}
              >
                Clear filters
              </Btn>
            </div>
          ) : (
            filtered.map((group, gi) => (
              <div key={group.category} style={{ marginBottom: gi < filtered.length - 1 ? 72 : 0 }}>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '240px 1fr',
                    gap: 48,
                    paddingBottom: 24,
                    marginBottom: 24,
                    borderBottom: '1px solid var(--ink-4)',
                    alignItems: 'baseline',
                  }}
                >
                  <div>
                    <div className="mono" style={{ color: 'var(--brass)', marginBottom: 8 }}>
                      {String(gi + 1).padStart(2, '0')} · CATEGORY
                    </div>
                    <div
                      style={{
                        fontFamily: 'var(--f-display)',
                        fontSize: 32,
                        lineHeight: 1,
                        color: 'var(--paper)',
                        textTransform: 'uppercase',
                      }}
                    >
                      {group.category}
                    </div>
                  </div>
                  <div className="mono" style={{ color: 'var(--muted)', fontSize: 11 }}>
                    {group.items.length} question{group.items.length === 1 ? '' : 's'}
                  </div>
                </div>

                <div>
                  {group.items.map((item, ii) => {
                    const key = `${group.category}-${ii}`
                    const isOpen = !!openItems[key]
                    return (
                      <div key={key} style={{ borderBottom: '1px solid var(--ink-4)' }}>
                        <button
                          onClick={() => toggleItem(key)}
                          style={{
                            width: '100%',
                            padding: '28px 0',
                            background: 'none',
                            border: 'none',
                            color: 'var(--paper)',
                            cursor: 'pointer',
                            textAlign: 'left',
                            display: 'grid',
                            gridTemplateColumns: '60px 1fr 40px',
                            gap: 24,
                            alignItems: 'center',
                          }}
                        >
                          <div className="mono" style={{ color: 'var(--brass)', fontSize: 11 }}>
                            Q{String(ii + 1).padStart(2, '0')}
                          </div>
                          <div
                            style={{
                              fontFamily: 'var(--f-display)',
                              fontSize: 22,
                              lineHeight: 1.2,
                              textTransform: 'uppercase',
                              letterSpacing: '0.01em',
                            }}
                          >
                            {item.q}
                          </div>
                          <div
                            style={{
                              fontFamily: 'var(--f-display)',
                              fontSize: 28,
                              color: 'var(--brass)',
                              textAlign: 'right',
                              transform: isOpen ? 'rotate(45deg)' : 'none',
                              transition: 'transform 0.2s ease',
                              lineHeight: 1,
                            }}
                          >
                            +
                          </div>
                        </button>
                        {isOpen && (
                          <div
                            style={{
                              display: 'grid',
                              gridTemplateColumns: '60px 1fr 40px',
                              gap: 24,
                              padding: '0 0 32px',
                            }}
                          >
                            <div />
                            <p
                              style={{
                                fontSize: 16,
                                lineHeight: 1.7,
                                color: 'rgba(245,242,236,0.78)',
                                maxWidth: '70ch',
                                margin: 0,
                              }}
                            >
                              {item.a}
                            </p>
                            <div />
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* STILL HAVE QUESTIONS CTA */}
      <section className="cta-strip">
        <div className="wrap-narrow">
          <h2 className="h-section">Still have<br />questions?</h2>
          <p className="lead" style={{ margin: '24px auto 32px' }}>
            The best ones always come up over lunch anyway. Come spend a day with us — or grab 15 minutes with Coach Don.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Btn kind="brass" href="/experience">Register for Experience Day</Btn>
            <Btn kind="ghost" href="/tuition">See tuition</Btn>
          </div>
        </div>
      </section>
    </div>
  )
}
