import Btn from '../../components/ui/Btn'
import Eyebrow from '../../components/ui/Eyebrow'

const stack = [
  {
    tag: 'Pillar 01 · Athletic Truth Group',
    num: '01',
    // §12: Two-line H2 with Fraunces italic accent on line 2.
    name: (
      <>
        Train the joints first.<br />
        <span style={{ fontFamily: 'var(--f-serif)', fontStyle: 'italic', textTransform: 'none', color: 'var(--brass)' }}>Become unbreakable.</span>
      </>
    ),
    short: 'Knees-over-toes training is rewriting how athletes prepare. Thousands of five-star reviews. NBA, MLB, and UFC athletes have adopted it. Your kid starts here.',
    long: '',
    stats: [],
    note: '',
  },
  {
    tag: 'REPS · DATA',
    num: '02',
    name: 'Dr. Dish Shooting Machine',
    short: 'A thousand shots per hour. Tracked. Data-logged. Coach-reviewed.',
    long: 'The Dr. Dish is a shooting machine that rebounds every shot automatically and feeds the next one. Our athletes stack 1,000 tracked shots per hour — more purposeful reps than most college programs get. Last half-season alone: 36,862 tracked shots across our program. That’s the kind of compounding that turns "talented" into "dangerous."',
    stats: [
      ['1,000', 'shots per hour'],
      ['36,862', 'tracked · half a season'],
      ['Every shot', 'logged by zone'],
    ],
    note: 'We don’t count shots at practice. We measure them. Every Warrior has a personal shooting chart — high-volume zones, efficiency, trends across the season. Coaches prescribe the next workout based on the data, not the vibe.',
  },
  {
    tag: 'FORM · FEEDBACK',
    num: '03',
    name: 'Shoot 360 · Form Studio',
    short: 'Motion-tracked form analysis. Release time. Arc. Rotation.',
    long: 'Two sessions a week on Shoot 360 — a full-court, sensor-equipped station that captures every detail of a shot: release time, arc angle, ball rotation, elbow alignment, follow-through. What a coach can’t catch with their eyes, the system catches every possession. Athletes adjust with video playback on the spot. Small form corrections compound into entire percentage points of shooting gain in a single season.',
    stats: [
      ['2x / week', 'form sessions'],
      ['8–12%', 'shooting % gain · season'],
      ['Real time', 'video + stats playback'],
    ],
    note: 'Form is the most fixable thing in basketball — and the most under-coached. You can’t out-work bad mechanics. Shoot 360 lets us catch small drifts (elbow flare, low arc, late release) before they calcify into a career-limiting habit.',
  },
  {
    tag: 'LIFE · OPS',
    num: '04',
    name: 'Warrior Life · Mission Control',
    short: 'Our proprietary student-athlete app. 5–10 minutes a day. Six systems.',
    long: 'Warrior Life is the app every Warrior logs into nightly. Faith, sleep, nutrition, readiness, and reflection — all in one place. AI estimates the meal from a photo. Parents get a dashboard. Coaches see readiness scores before practice and can flag burnout early. Launching this upcoming season — included with every Warriors membership.',
    stats: [
      ['5–10 min', 'per athlete · per day'],
      ['6 systems', 'Daily check-in · faith · readiness · coach view'],
      ['Included', 'with every membership'],
    ],
    note: 'Most sports apps track stats. Warrior Life tracks the things that actually make stats move: did you sleep, did you eat, did you reflect, did you pray. When those are consistent, the scoreboard takes care of itself.',
  },
  {
    tag: 'MIND · TRANSFER',
    num: '05',
    name: 'The Mental Game · Mandatory Golf Season',
    short: 'The only training stack in the country that makes golf a required part of basketball development.',
    long: 'Every Warriors athlete completes a mandatory golf season — not as a hobby, as a training modality. Four+ hours per round of sustained focus, zero teammates to blame, constant emotional reset. Peer-reviewed sport psychology shows present-moment focus can lift performance consistency by ~20%, and neuroimaging has documented enhanced brain plasticity in the temporal regions of experienced golfers. Jack Nicklaus called golf "90% mental." Steph Curry plays during NBA playoffs; the NYT called it his go-to move for mentally recharging between games. Caitlin Clark credits golf with her fourth-quarter composure: "when I have a bad shot on the course, it’s all on me." We stole the playbook.',
    stats: [
      ['~20%', 'performance consistency lift · present-moment focus'],
      ['4+ hrs', 'of sustained focus · per round'],
      ['1 of 5', 'mental skills that transfer 1:1 to the fourth quarter'],
    ],
    note: 'The First Tee’s longitudinal study of youth golfers found measurable gains in self-control, perseverance, and emotional regulation that carried into academics and team sports. Jordan Spieth calls patience his most-used skill. Jason Day credits daily mindfulness for his comebacks. This is the part of the stack no other basketball academy in the country is running — and we think it’s the reason our kids close games instead of crumble in them.',
  },
]

const warriorLifeSystems = [
  { t: 'Daily Command Center', d: 'Faith, sleep, nutrition, readiness, reflection — checked off in under 10 minutes a day. Streaks + XP keep it sticky.' },
  { t: 'AI Nutrition & Readiness', d: 'Snap a photo of a meal. AI auto-estimates macros, hydration, and readiness impact. No more weekly paperwork — the app does it for you.' },
  { t: 'Dr. Dish Booking', d: "Reserve your weekly machine time. Hit your shot count. Coaches see who's putting in work." },
  { t: 'The Mirror', d: 'End-of-day reflection. What could you have done better today? Who did you help? Where did you fall short? A daily examen, in your pocket. (Morning devotion is a separate, in-person practice — see the Day schedule.)' },
  { t: 'Gamified Team Accountability', d: 'Team Boss Battles, XP, streaks, and healthy rivalries. Kids show up for each other, not just themselves.' },
  { t: 'Coach Dashboard', d: 'Real-time readiness scores. Flag burnout before it becomes an injury. Pro-level player management — for 10u and up.' },
]

const dayBlocks = [
  { range: '9:00 – 9:30', label: 'Prayer + ATG Mobility Warmup', minutes: 30 },
  { range: '9:30 – 11:30', label: 'Athletic Training Block', minutes: 120, heavy: true },
  { range: '2:00 – 2:30', label: 'Study Hall Flex · extra court', minutes: 30 },
  { range: '2:30 – 3:00', label: 'Film Study + Reflection', minutes: 30 },
]

const totalMin = dayBlocks.reduce((a, b) => a + b.minutes, 0)

export default function TrainingPage() {
  return (
    <div className="page-enter">
      {/* HERO */}
      <section style={{ padding: '140px 0 80px', background: 'var(--ink)', borderBottom: '1px solid var(--ink-3)' }}>
        <div className="wrap">
          <Eyebrow>Training &amp; Tech · The Stack</Eyebrow>
          <h1 className="h-hero" style={{ marginTop: 24, marginBottom: 28, maxWidth: '22ch' }}>
            Four hours a day<br />
            of training that<br />
            <span style={{ fontFamily: 'var(--f-serif)', fontStyle: 'italic', textTransform: 'none', color: 'var(--brass)' }}>most programs</span><br />
            can&apos;t match.
          </h1>
          <p className="lead" style={{ maxWidth: '62ch', color: 'rgba(245,242,236,0.78)' }}>
            The training tech most academies don&apos;t have. Inside the academy day. No rushing home from school to make 6 PM practice. No coaches running drills they read about on YouTube. Just ATG-certified strength, Dr. Dish-tracked reps, Shoot 360 form analysis, and the Warrior Life app tying it all together — so every Warrior trains like a pro and recovers like one too.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, marginTop: 64, borderTop: '1px solid var(--ink-4)' }}>
            {[
              ['4 hrs', 'elite training · per day'],
              ['1,000', 'tracked shots · per hour'],
              ['36,862', 'shots · half a season'],
              ['200 mi', 'to the next ATG hub'],
            ].map(([n, l], i) => (
              <div key={i} style={{ padding: '32px 24px 0', borderRight: i < 3 ? '1px solid var(--ink-4)' : 'none' }}>
                <div style={{ fontFamily: 'var(--f-display)', fontSize: 48, lineHeight: 1, color: 'var(--brass)', marginBottom: 10 }}>{n}</div>
                <div className="mono" style={{ color: 'var(--muted)', lineHeight: 1.5 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DAILY TRAINING BREAKDOWN */}
      <section className="section" style={{ paddingTop: 100, paddingBottom: 100 }}>
        <div className="wrap">
          <div style={{ maxWidth: 680, marginBottom: 56 }}>
            <Eyebrow>The Daily Training Block</Eyebrow>
            <h2 className="h-section" style={{ marginTop: 16, marginBottom: 20 }}>
              Look at how much<br />
              <span style={{ fontFamily: 'var(--f-serif)', fontStyle: 'italic', textTransform: 'none', color: 'var(--brass)' }}>time we get</span><br />
              with your athlete.
            </h2>
            <p className="lead">
              Most club programs get 90 minutes, twice a week. Between the commute, the warmup, and the scrimmage, real coached development is maybe 40 minutes per session. We coach 4 hours a day, 4 days a week — inside the academy day, before the body is fried.
            </p>
          </div>

          <div style={{ border: '1px solid var(--ink-4)', padding: 32, background: 'var(--ink-2)' }}>
            <div className="mono" style={{ color: 'var(--muted)', marginBottom: 20 }}>TIME · IN THE TRAINING STACK · PER DAY</div>
            <div style={{ display: 'flex', height: 72, borderRadius: 2, overflow: 'hidden', border: '1px solid var(--ink-4)' }}>
              {dayBlocks.map((b, i) => {
                const pct = (b.minutes / totalMin) * 100
                return (
                  <div
                    key={i}
                    style={{
                      width: pct + '%',
                      background: b.heavy ? 'var(--accent)' : 'var(--ink-4)',
                      borderRight: i < dayBlocks.length - 1 ? '1px solid var(--ink)' : 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: b.heavy ? 'var(--paper)' : 'var(--muted)',
                      fontFamily: 'var(--f-mono)',
                      fontSize: 11,
                      letterSpacing: '0.14em',
                    }}
                  >
                    {b.minutes}m
                  </div>
                )
              })}
            </div>
            <div style={{ marginTop: 24, display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 16 }}>
              {dayBlocks.map((b, i) => (
                <div key={i}>
                  <div className="mono" style={{ color: b.heavy ? 'var(--accent)' : 'var(--muted)', marginBottom: 6 }}>{b.range}</div>
                  <div style={{ fontFamily: 'var(--f-display)', fontSize: 15, lineHeight: 1.15, textTransform: 'uppercase', color: 'var(--paper)' }}>{b.label}</div>
                </div>
              ))}
            </div>
          </div>

          <p className="mono" style={{ marginTop: 24, color: 'var(--muted)' }}>
            · Numbers in minutes. Green blocks = direct training. Neutral = transitional / flex / study.
          </p>
        </div>
      </section>

      {/* FIVE-PIECE STACK */}
      <section style={{ padding: '120px 0', background: 'var(--ink-2)' }}>
        <div className="wrap">
          <div style={{ maxWidth: 680, marginBottom: 72 }}>
            <Eyebrow>The Five-Piece Stack</Eyebrow>
            <h2 className="h-section" style={{ marginTop: 16, marginBottom: 20 }}>
              Each piece is<br />
              <span style={{ fontFamily: 'var(--f-serif)', fontStyle: 'italic', textTransform: 'none', color: 'var(--brass)' }}>rare alone.</span><br />
              Together, they compound.
            </h2>
            <p className="lead">
              Most gyms have one of these. Warriors has all five — and they talk to each other. ATG tells Dr. Dish what the body can handle. Shoot 360 tells the coach which form cue to emphasize. Warrior Life tells the coach whether the athlete slept enough to load that workload in the first place. And the golf season trains the mental skills that decide every one of the other four under pressure.
            </p>
          </div>

          <div style={{ display: 'grid', gap: 32 }}>
            {stack.map((item, i) => {
              const isATG = i === 0
              const isMentalGame = i === 4
              return (
                <article
                  key={i}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '200px 1fr',
                    gap: 48,
                    padding: '48px 48px 48px 40px',
                    background: 'var(--ink)',
                    borderLeft: '3px solid var(--brass)',
                  }}
                >
                  <div>
                    <div className="mono" style={{ color: 'var(--brass)', marginBottom: 12 }}>{item.tag}</div>
                    <div style={{ fontFamily: 'var(--f-display)', fontSize: 72, lineHeight: 1, color: 'var(--brass)', opacity: 0.5, marginBottom: 8 }}>{item.num}</div>
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--f-display)', fontSize: 36, lineHeight: 1.05, color: 'var(--paper)', marginBottom: 14 }}>{item.name}</div>

                    {isATG ? (
                      <>
                        {/* ATG FLAGSHIP — Round 4 §12 punch + §3 body */}
                        <p className="lead" style={{ color: 'rgba(245,242,236,0.82)', marginBottom: 32, maxWidth: '64ch' }}>
                          {item.short}
                        </p>

                        <img
                          src="/atg-knee-zero.png"
                          alt="Athletic Truth Group — knees over toes squat training methodology"
                          style={{ width: '100%', borderRadius: 4, margin: '48px 0' }}
                        />

                        <p className="lead" style={{ color: 'rgba(245,242,236,0.82)', fontStyle: 'italic', marginBottom: 32, maxWidth: '64ch' }}>
                          We are one of the few certified ATG hubs in the Midwest — and the only one inside a Christian basketball academy. Knees-over-toes training isn&apos;t a trend. It&apos;s the foundation we build every Warrior on, before they ever play a competitive minute.
                        </p>

                        <div style={{ display: 'grid', gap: 20, marginBottom: 40, maxWidth: '70ch' }}>
                          <p style={{ fontSize: 15, lineHeight: 1.7, color: 'rgba(245,242,236,0.78)', margin: 0 }}>
                            Ben Patrick, the founder of Athletic Truth Group, was nicknamed &ldquo;The Old Man&rdquo; in high school because his knees were so wrecked they required extensive warm-up time before basketball. He had three knee surgeries by 18 and a sub-20-inch vertical jump — and was told to quit the sport.
                          </p>
                          <p style={{ fontSize: 15, lineHeight: 1.7, color: 'rgba(245,242,236,0.78)', margin: 0 }}>
                            Refusing to accept that diagnosis, Ben rebuilt himself using forgotten old-school training methods — backward sled drags, deep split squats, knees-extending-past-toes work that traditional weight-training rejected. Today his vertical is documented at 42 inches. He is the only known case of an adult going from sub-20 to over-40 inch vertical jump.
                          </p>
                          <p style={{ fontSize: 15, lineHeight: 1.7, color: 'rgba(245,242,236,0.78)', margin: 0 }}>
                            ATG is also a family business. Ben&apos;s mother <strong style={{ color: 'var(--paper)' }}>Celia (&ldquo;Mama Knees Over Toes&rdquo;)</strong> runs customer service seven days a week and helped develop the system itself — designed to be scalable enough that anyone, at any age, can do it. Over 15 years, ATG has coached athletes in 50+ countries. We&apos;re proud to support a family-run operation changing thousands of lives in a dramatic way.
                          </p>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, borderTop: '1px solid var(--ink-4)', borderBottom: '1px solid var(--ink-4)', marginBottom: 40 }}>
                          {[
                            ['50+', 'Countries with ATG-coached athletes'],
                            ['42"', 'Documented vertical — sub-20 to over-40'],
                            ['15 yrs', 'Of injury-first training research'],
                          ].map(([n, l], si) => (
                            <div key={si} style={{ padding: '24px 20px', borderRight: si < 2 ? '1px solid var(--ink-4)' : 'none' }}>
                              <div style={{ fontFamily: 'var(--f-display)', fontSize: 36, color: 'var(--paper)', lineHeight: 1, marginBottom: 8 }}>{n}</div>
                              <div className="mono" style={{ color: 'var(--muted)', fontSize: 10, lineHeight: 1.5 }}>{l}</div>
                            </div>
                          ))}
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 16, marginBottom: 40 }}>
                          {[
                            ['Previous aches and pains that I had just accepted as part of getting older vanished over the course of a few weeks.', 'ATG user · TikTok'],
                            ['Using the ATG Online Knee Ability Zero Training Program I healed my super painful knee in one month.', 'ATG user · YouTube'],
                            ['After four months of doing this program I feel stronger than I ever have before ever.', 'ATG user · YouTube'],
                            ['I haven’t had one of those back pains since starting.', 'ATG user · YouTube'],
                            ['Two years later, the pain and tightness in my lower back have disappeared.', 'ATG user · YouTube'],
                          ].map(([quote, caption], qi) => (
                            <div
                              key={qi}
                              style={{
                                padding: '20px 18px',
                                background: 'var(--ink-2)',
                                border: '1px solid var(--ink-4)',
                                borderTop: '2px solid var(--accent)',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 12,
                              }}
                            >
                              <p style={{ fontFamily: 'var(--f-serif)', fontStyle: 'italic', fontSize: 14, lineHeight: 1.5, color: 'var(--paper)', margin: 0 }}>
                                &ldquo;{quote}&rdquo;
                              </p>
                              <div className="mono" style={{ color: 'var(--brass)', fontSize: 10, letterSpacing: '0.14em', marginTop: 'auto' }}>{caption}</div>
                            </div>
                          ))}
                        </div>

                        <p style={{ fontSize: 16, lineHeight: 1.7, color: 'rgba(245,242,236,0.82)', fontStyle: 'italic', maxWidth: '70ch', margin: 0 }}>
                          Every Warrior is screened, scored, and trained on the ATG progressions. We don&apos;t wait until your kid is hurt to teach them how to move. We start there.
                        </p>
                      </>
                    ) : isMentalGame ? (
                      <>
                        {/* GOLF BLOCK — lifted from home.jsx 321–412, retoned for dark training page */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'start', marginBottom: 56 }}>
                          <div>
                            <p style={{ fontSize: 17, lineHeight: 1.5, color: 'var(--brass)', marginBottom: 20, fontFamily: 'var(--f-serif)', fontStyle: 'italic', maxWidth: '58ch' }}>
                              The only training stack in the country that makes golf a required part of basketball development.
                            </p>
                            <p className="lead" style={{ color: 'rgba(245,242,236,0.82)', marginBottom: 20 }}>
                              Caitlin Clark credits golf with sharpening her mental toughness — &ldquo;when I have a bad shot on the course, it&apos;s all on me.&rdquo; Steph Curry hits the course <em>during</em> NBA playoffs; the New York Times called it his go-to move for recharging mentally between games.
                            </p>
                            <p style={{ fontSize: 15, lineHeight: 1.7, color: 'rgba(245,242,236,0.78)' }}>
                              That&apos;s why every Warriors athlete completes a mandatory golf season. Same mental muscles. Same emotional circuit breakers. Plus a game they&apos;ll play with friends, family, and future business partners for life.
                            </p>
                          </div>
                          <div style={{ display: 'grid', gap: 0, border: '1px solid var(--ink-4)' }}>
                            {[
                              ['Mental Toughness', 'Four+ hours of sustained focus. Every shot is a reset — no teammate to blame, no play to hide behind. The same emotional circuit breakers that win fourth quarters.'],
                              ['ATG Golf Performance', 'Kneesovertoesguy-informed hip and spinal robustness. More clubhead speed, less strain. Better bodies, better swings — and better basketball bodies too.'],
                              ['A Lifetime Sport', 'Golf is the sport of business, family, and forever. Our athletes leave Warriors able to hold their own on any course, at any age, with anyone.'],
                            ].map(([t, d], idx, arr) => (
                              <div
                                key={idx}
                                style={{
                                  padding: '24px 28px',
                                  borderBottom: idx < arr.length - 1 ? '1px solid var(--ink-4)' : 'none',
                                }}
                              >
                                <div className="mono" style={{ color: 'var(--accent)', marginBottom: 8 }}>0{idx + 1}</div>
                                <div style={{ fontFamily: 'var(--f-display)', fontSize: 18, textTransform: 'uppercase', letterSpacing: '0.01em', color: 'var(--paper)', marginBottom: 8 }}>{t}</div>
                                <p style={{ fontSize: 13, lineHeight: 1.6, color: 'rgba(245,242,236,0.7)', margin: 0 }}>{d}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* NICKLAUS PULL QUOTE */}
                        <div
                          style={{
                            borderTop: '1px solid var(--ink-4)',
                            borderBottom: '1px solid var(--ink-4)',
                            padding: '48px 0',
                            marginBottom: 56,
                            textAlign: 'center',
                          }}
                        >
                          <div className="mono" style={{ color: 'var(--accent)', marginBottom: 16, fontSize: 11, letterSpacing: '0.18em' }}>JACK NICKLAUS · 18-TIME MAJOR CHAMPION</div>
                          <blockquote
                            style={{
                              margin: 0,
                              fontFamily: 'var(--f-serif)',
                              fontStyle: 'italic',
                              fontSize: 40,
                              lineHeight: 1.2,
                              color: 'var(--paper)',
                              maxWidth: '24ch',
                              marginInline: 'auto',
                              letterSpacing: '-0.01em',
                            }}
                          >
                            &ldquo;Golf is 90% mental.<br />The other 10%<br />is mental too.&rdquo;
                          </blockquote>
                        </div>

                        {/* TRANSFER MATRIX */}
                        <div>
                          <div style={{ marginBottom: 28 }}>
                            <div className="mono" style={{ color: 'var(--accent)', letterSpacing: '0.2em', fontSize: 11 }}>The Transfer Matrix</div>
                            <h4
                              style={{
                                fontFamily: 'var(--f-display)',
                                fontSize: 32,
                                lineHeight: 1.05,
                                color: 'var(--paper)',
                                margin: '12px 0 0',
                                letterSpacing: '-0.01em',
                              }}
                            >
                              Why a basketball coach<br />runs a <span style={{ fontFamily: 'var(--f-serif)', fontStyle: 'italic', color: 'var(--accent)' }}>golf season</span>.
                            </h4>
                          </div>

                          <div style={{ border: '1px solid var(--ink-4)' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr 1.2fr', gap: 0, background: 'var(--ink-2)', color: 'var(--paper)' }}>
                              {['Mental Skill', 'On the Course', 'In the Fourth Quarter'].map((h, hi) => (
                                <div
                                  key={hi}
                                  className="mono"
                                  style={{
                                    padding: '16px 20px',
                                    fontSize: 11,
                                    letterSpacing: '0.16em',
                                    borderRight: hi < 2 ? '1px solid var(--ink-4)' : 'none',
                                  }}
                                >
                                  {h}
                                </div>
                              ))}
                            </div>
                            {[
                              ['Present-Moment Focus', 'Release the last shot before you stand over the next.', 'Release the missed layup before the next possession.'],
                              ['Emotional Regulation', 'Stay level after a triple bogey or a miraculous birdie.', 'Stay level after a turnover or a three-possession run.'],
                              ['Patience & Process', 'Play the shot in front of you. The round is 18 holes long.', 'Trust the offense. The game is 32 minutes long.'],
                              ['Self-Accountability', 'No teammate to blame. The ball went where you sent it.', 'Own your box-out. Own your rotation. Own your mistake.'],
                              ['Visualization', 'See the ball’s full flight before you swing.', 'See the pass, the cut, the shot before the play unfolds.'],
                            ].map(([skill, golf, hoops], ri, arr) => (
                              <div
                                key={ri}
                                style={{
                                  display: 'grid',
                                  gridTemplateColumns: '1fr 1.2fr 1.2fr',
                                  gap: 0,
                                  borderBottom: ri < arr.length - 1 ? '1px solid var(--ink-4)' : 'none',
                                }}
                              >
                                <div
                                  style={{
                                    padding: '20px',
                                    fontFamily: 'var(--f-display)',
                                    fontSize: 16,
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.01em',
                                    color: 'var(--paper)',
                                    borderRight: '1px solid var(--ink-4)',
                                    display: 'flex',
                                    alignItems: 'center',
                                  }}
                                >
                                  <span style={{ color: 'var(--accent)', fontFamily: 'var(--f-mono)', fontSize: 11, marginRight: 12, letterSpacing: '0.1em' }}>0{ri + 1}</span>
                                  {skill}
                                </div>
                                <div style={{ padding: '20px', fontSize: 13, lineHeight: 1.6, color: 'rgba(245,242,236,0.78)', borderRight: '1px solid var(--ink-4)' }}>
                                  {golf}
                                </div>
                                <div style={{ padding: '20px', fontSize: 13, lineHeight: 1.6, color: 'rgba(245,242,236,0.78)' }}>
                                  {hoops}
                                </div>
                              </div>
                            ))}
                          </div>
                          <p
                            className="mono"
                            style={{
                              color: 'var(--muted)',
                              fontSize: 10,
                              letterSpacing: '0.14em',
                              marginTop: 14,
                              textAlign: 'right',
                            }}
                          >
                            SOURCES · APA · FRONTIERS IN PSYCHOLOGY · FIRST TEE LONGITUDINAL STUDY
                          </p>
                        </div>
                      </>
                    ) : (
                      <>
                        <p style={{ fontSize: 18, lineHeight: 1.5, color: 'var(--brass)', marginBottom: 20, fontFamily: 'var(--f-serif)', fontStyle: 'italic', maxWidth: '58ch' }}>
                          {item.short}
                        </p>
                        <p style={{ fontSize: 15, lineHeight: 1.7, color: 'rgba(245,242,236,0.78)', marginBottom: 28, maxWidth: '68ch' }}>{item.long}</p>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, borderTop: '1px solid var(--ink-4)', marginBottom: 28 }}>
                          {item.stats.map(([n, l], si) => (
                            <div key={si} style={{ padding: '20px 20px 0 0', borderRight: si < 2 ? '1px solid var(--ink-4)' : 'none', paddingLeft: si > 0 ? 20 : 0 }}>
                              <div style={{ fontFamily: 'var(--f-display)', fontSize: 28, color: 'var(--paper)', lineHeight: 1, marginBottom: 6 }}>{n}</div>
                              <div className="mono" style={{ color: 'var(--muted)', fontSize: 10, lineHeight: 1.5 }}>{l}</div>
                            </div>
                          ))}
                        </div>

                        <div style={{ padding: '18px 20px', background: 'var(--ink-2)', borderLeft: '2px solid var(--accent)', fontSize: 14, lineHeight: 1.65, color: 'rgba(245,242,236,0.72)', maxWidth: '64ch' }}>
                          <span className="mono" style={{ color: 'var(--accent)', marginRight: 10, fontSize: 10 }}>WHY IT MATTERS ·</span>
                          {item.note}
                        </div>
                      </>
                    )}
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* REAL BUSINESS · REAL MONEY — image. Round 3 §4.2 specifies "Pillar 02 (Entrepreneur Unschool)" on /training, but /training has no Entrepreneur Unschool pillar (Pillar 02 in the stack is Dr. Dish). Image hosted here as a dedicated frame to honor the §4 mandate without thematic mismatch. */}
      <section className="section" style={{ background: 'var(--ink)' }}>
        <div className="wrap">
          <div style={{ maxWidth: 680, marginBottom: 32 }}>
            <Eyebrow>Entrepreneur Unschool</Eyebrow>
            <h2 className="h-section" style={{ marginTop: 16 }}>
              Real businesses.<br />
              <span style={{ fontFamily: 'var(--f-serif)', fontStyle: 'italic', textTransform: 'none', color: 'var(--brass)' }}>Real money.</span>
            </h2>
          </div>
          <img
            src="/real-business-real-money.png"
            alt="Real businesses, real clients, real money — Warriors Entrepreneur Unschool"
            style={{ width: '100%', borderRadius: 4, margin: '48px 0' }}
          />
        </div>
      </section>

      {/* MASTERY THROUGH TEACHING — Round 3 §3.4. Body copy not present in any prototype JSX; titles supplied by handoff. TODO(copy): mastery-through-teaching cards — body text awaiting Jason. */}
      <section className="section on-paper">
        <div className="wrap">
          <div style={{ maxWidth: 720, marginBottom: 48 }}>
            <Eyebrow style={{ color: 'var(--accent)' }}>Mastery Through Teaching</Eyebrow>
            <h2 className="h-section" style={{ marginTop: 16, marginBottom: 20, color: 'var(--ink)' }}>
              Teaching is the<br />
              <span style={{ fontFamily: 'var(--f-serif)', fontStyle: 'italic', textTransform: 'none', color: 'var(--accent)' }}>deepest form of mastery.</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
            {[
              { num: '01', name: 'Teach It to Master It' },
              { num: '02', name: 'Both Players Level Up' },
              { num: '03', name: 'Servant Leadership' },
              { num: '04', name: 'Life After Basketball' },
            ].map((c, i) => (
              <div
                key={i}
                style={{
                  padding: '32px 24px',
                  background: 'rgba(11,11,13,0.04)',
                  borderRadius: 4,
                  borderTop: '2px solid var(--ink)',
                }}
              >
                <div className="mono" style={{ color: 'var(--accent)', fontSize: 11, letterSpacing: '0.18em', marginBottom: 12 }}>{c.num}</div>
                <h3 style={{ fontFamily: 'var(--f-display)', fontSize: 22, color: 'var(--ink)', margin: '0 0 12px', lineHeight: 1.1, letterSpacing: '-0.005em' }}>{c.name}</h3>
                {/* TODO(copy): mastery-through-teaching cards — body for "{c.name}" awaiting source copy from Jason. */}
                <p className="body" style={{ fontSize: 14, color: 'rgba(11,11,13,0.55)', fontStyle: 'italic', margin: 0 }}>
                  [Card body awaiting source copy.]
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WARRIOR LIFE DEEP DIVE */}
      <section className="section on-paper" style={{ paddingTop: 100, paddingBottom: 100 }}>
        <div className="wrap">
          <div style={{ maxWidth: 680, marginBottom: 56 }}>
            <Eyebrow style={{ color: 'var(--accent)' }}>Inside Warrior Life</Eyebrow>
            <h2 className="h-section" style={{ marginTop: 16, marginBottom: 20, color: 'var(--ink)' }}>
              Six systems.<br />
              <span style={{ fontFamily: 'var(--f-serif)', fontStyle: 'italic', textTransform: 'none', color: 'var(--accent)' }}>Ten minutes a day.</span>
            </h2>
            <p className="lead" style={{ color: 'rgba(11,11,13,0.74)' }}>
              We built Warrior Life because nothing on the market combines faith, readiness, and coach visibility in one place. Launching this upcoming season — included with every Warriors membership.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, border: '1px solid rgba(11,11,13,0.14)' }}>
            {warriorLifeSystems.map((s, i) => (
              <div
                key={i}
                style={{
                  padding: '32px 24px',
                  borderRight: (i % 3) < 2 ? '1px solid rgba(11,11,13,0.12)' : 'none',
                  borderTop: i >= 3 ? '1px solid rgba(11,11,13,0.12)' : 'none',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div style={{ fontFamily: 'var(--f-display)', fontSize: 48, lineHeight: 1, color: 'var(--accent)', marginBottom: 16 }}>{String(i + 1).padStart(2, '0')}</div>
                <div style={{ fontFamily: 'var(--f-display)', fontSize: 18, textTransform: 'uppercase', lineHeight: 1.1, color: 'var(--ink)', marginBottom: 14 }}>{s.t}</div>
                <p className="body" style={{ fontSize: 13, lineHeight: 1.6, color: 'rgba(11,11,13,0.68)', flex: 1 }}>{s.d}</p>
              </div>
            ))}
          </div>

          <p className="mono" style={{ marginTop: 32, color: 'rgba(11,11,13,0.5)', maxWidth: '70ch' }}>
            · Launching this upcoming season · Included with every Warriors membership.
          </p>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section style={{ padding: '100px 0', background: 'var(--ink)' }}>
        <div className="wrap">
          <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center', marginBottom: 64 }}>
            <Eyebrow>The Philosophy</Eyebrow>
            <h2 className="h-section" style={{ marginTop: 16, marginBottom: 20 }}>
              We don&apos;t train harder.<br />
              We train <span style={{ fontFamily: 'var(--f-serif)', fontStyle: 'italic', textTransform: 'none', color: 'var(--brass)' }}>smarter,</span>
              <br />with more <span style={{ fontFamily: 'var(--f-serif)', fontStyle: 'italic', textTransform: 'none', color: 'var(--brass)' }}>feedback loops.</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 40 }}>
            {[
              ['Joint before muscle', 'If the knees, ankles, and hips can’t hold up, muscle won’t either. We build the scaffold before we load it.'],
              ['Measure what you want to move', 'Feelings are not feedback. Dr. Dish counts every shot. Shoot 360 measures every arc. Warrior Life tracks every night of sleep.'],
              ['Recovery is a lever, not a luxury', 'Four hours of focused training beats six of tired training. Fridays are off. Wrap is at 3 PM. We stop before kids are cooked.'],
            ].map(([t, d], i) => (
              <div key={i} style={{ borderTop: '2px solid var(--brass)', paddingTop: 28 }}>
                <div style={{ fontFamily: 'var(--f-display)', fontSize: 22, textTransform: 'uppercase', color: 'var(--paper)', marginBottom: 16, lineHeight: 1.1 }}>{t}</div>
                <p style={{ fontSize: 15, lineHeight: 1.65, color: 'rgba(245,242,236,0.72)' }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-strip">
        <div className="wrap-narrow">
          <h2 className="h-section">Come see it run.</h2>
          <p className="lead" style={{ margin: '24px auto 32px' }}>
            Specs and screenshots only go so far. Stand under the Dr. Dish. Watch an ATG warmup. Spend a day inside the stack.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Btn kind="brass" href="/experience">Register for Experience Day</Btn>
            <Btn kind="ghost" href="/day">See the 4-day model</Btn>
          </div>
        </div>
      </section>
    </div>
  )
}
