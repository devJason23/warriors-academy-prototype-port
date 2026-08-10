'use client'

import { useEffect, useMemo, useState } from 'react'
import DATA from '../../components/schedule/schedule-data.json'

/* ============================ tokens ============================ */
const C = {
  bg: '#0B0C0C', s1: '#111313', s2: '#141516',
  hair: '#1E2021', hair2: '#242727', hair3: '#202222', cardBorder: '#1C1E1E',
  text: '#F4F3F1', muted: '#7C7C84', muted2: '#9A988F', faint: '#56534C', faint2: '#4A4844',
  green: '#05B057', green2: '#04954B', greenDeep: '#046131', greenHi: '#33C97D',
  gold: '#C9A24A', goldHi: '#E4C36A',
  amberBg: '#1A1410', amberBorder: '#4A3A1E', amber: '#E4C36A',
}
const SANS = "'Archivo', system-ui, sans-serif"
const MONO = "'Space Mono', ui-monospace, monospace"
const AGE_HUE = { '10U': 190, '12U': 250, '14U': 300, '16U': 32, '18U': 355 }
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const MON3 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
const WD3 = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
const CAL_MONTHS = [ // Oct 2026 → Mar 2027
  [2026, 10], [2026, 11], [2026, 12], [2027, 1], [2027, 2], [2027, 3],
]

function teamById(id) { return DATA.teams.find((t) => t.id === id) }
function teamColor(t) {
  if (!t) return C.faint2
  if (t.comingSoon) return '#3E3C38'
  return `oklch(0.74 0.13 ${AGE_HUE[t.age]})`
}

/* ============================ date helpers ============================ */
// ISO "YYYY-MM-DD" treated as a literal calendar day (no TZ shift)
function parts(iso) { const [y, m, d] = iso.split('-').map(Number); return { y, m, d } }
function dObj(iso) { const p = parts(iso); return new Date(p.y, p.m - 1, p.d) }
function monShort(iso) { return MON3[parts(iso).m - 1] }
function dayNum(iso) { return parts(iso).d }
function wd(iso) { return WD3[dObj(iso).getDay()] }
function fmtMonD(iso) { const p = parts(iso); return `${MON3[p.m - 1]} ${p.d}` }
function fmtLong(iso) { const p = parts(iso); return `${MONTHS[p.m - 1]} ${p.d}, ${p.y}` }
function daysBetween(fromISO, toISO) {
  return Math.round((dObj(toISO).getTime() - dObj(fromISO).getTime()) / 86400000)
}
function eventRange(startISO, endISO) {
  const a = parts(startISO), b = parts(endISO)
  if (startISO === endISO) return fmtLong(startISO)
  if (a.m === b.m) return `${MONTHS[a.m - 1]} ${a.d}–${b.d}`
  return `${MONTHS[a.m - 1]} ${a.d} – ${MONTHS[b.m - 1]} ${b.d}`
}
function todayISO() {
  const n = new Date()
  return `${n.getFullYear()}-${String(n.getMonth() + 1).padStart(2, '0')}-${String(n.getDate()).padStart(2, '0')}`
}

/* ============================ links ============================ */
function calLink(entry) {
  const base = 'https://calendar.google.com/calendar/render?action=TEMPLATE'
  let text, dates, loc
  if (entry.kind === 'game') {
    const g = entry.game
    text = `Warriors ${g.team}${g.opponent ? ' vs ' + g.opponent : ''}`
    loc = g.location || ''
    const ymd = g.date.replace(/-/g, '')
    if (g.time && !g.timeTBD) {
      const m = g.time.match(/(\d+):(\d+)\s*(AM|PM)/i)
      if (m) {
        let h = parseInt(m[1], 10) % 12
        if (/pm/i.test(m[3])) h += 12
        const mm = m[2]
        const endH = Math.min(h + 2, 23)
        dates = `${ymd}T${String(h).padStart(2, '0')}${mm}00/${ymd}T${String(endH).padStart(2, '0')}${mm}00`
      }
    }
    if (!dates) {
      const next = new Date(dObj(g.date).getTime() + 86400000)
      const nx = `${next.getFullYear()}${String(next.getMonth() + 1).padStart(2, '0')}${String(next.getDate()).padStart(2, '0')}`
      dates = `${ymd}/${nx}`
    }
  } else {
    const e = entry.event
    text = `Warriors ${entry.teamFilter ? entry.teamFilter + ' ' : ''}${e.name}`
    loc = e.location || ''
    const s = e.startDate.replace(/-/g, '')
    const nextEnd = new Date(dObj(e.endDate).getTime() + 86400000)
    const ne = `${nextEnd.getFullYear()}${String(nextEnd.getMonth() + 1).padStart(2, '0')}${String(nextEnd.getDate()).padStart(2, '0')}`
    dates = `${s}/${ne}`
  }
  return `${base}&text=${encodeURIComponent(text)}&dates=${dates}&location=${encodeURIComponent(loc)}&ctz=America/Chicago`
}
function dirLink(loc) { return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc)}` }
function realVenue(loc) { return loc && !/tbd/i.test(loc) }

/* ============================ small UI ============================ */
function Pill({ kind }) {
  const map = {
    home: { bg: '#04954B', color: '#03150C', border: 'none', label: 'HOME' },
    away: { bg: 'transparent', color: '#B3B1B0', border: `1px solid #45474A`, label: 'AWAY' },
    tbd: { bg: 'transparent', color: '#B3B1B0', border: `1px dashed #45474A`, label: 'TBD' },
    tournament: { bg: 'transparent', color: '#E4C36A', border: `1px solid ${C.gold}`, label: 'TOURNAMENT' },
    state: { bg: C.gold, color: '#1A1206', border: 'none', label: 'STATE' },
    regionals: { bg: C.gold, color: '#1A1206', border: 'none', label: 'REGIONALS' },
    nationals: { bg: C.gold, color: '#1A1206', border: 'none', label: 'NATIONALS' },
  }
  const s = map[kind] || map.tbd
  return (
    <span style={{ fontFamily: MONO, fontSize: 9.5, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.1em', padding: '3px 7px', borderRadius: 5, background: s.bg, color: s.color, border: s.border, whiteSpace: 'nowrap' }}>{s.label}</span>
  )
}
function Badge({ id }) {
  const col = teamColor(teamById(id))
  return <span style={{ fontFamily: MONO, fontSize: 10, fontWeight: 700, color: col, border: `1px solid ${col}`, background: 'transparent', padding: '2px 6px', borderRadius: 5, whiteSpace: 'nowrap' }}>{id}</span>
}

/* pill kind for an event */
function eventPillKind(e) {
  if (e.kind === 'postseason') {
    if (/state/i.test(e.name)) return 'state'
    if (/regional/i.test(e.name)) return 'regionals'
    if (/national/i.test(e.name)) return 'nationals'
    return 'state'
  }
  return 'tournament'
}

/* ============================ page ============================ */
// `embed` mode: used by the /tryout landing page — hides the coach-view
// button and the site footer line (closed ad funnel: no "Academy" text there).
export function ScheduleExplorer({ embed = false }) {
  const [view, setView] = useState('schedule') // schedule | calendar
  const [filter, setFilter] = useState('ALL')   // 'ALL' or team id
  const [coach, setCoach] = useState(false)
  const [selDay, setSelDay] = useState(null)     // ISO
  const [today, setToday] = useState(null)
  const [data, setData] = useState(DATA)         // live sheet data, falls back to committed snapshot

  useEffect(() => {
    setToday(todayISO())
    const l = document.createElement('link')
    l.rel = 'stylesheet'
    l.href = 'https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800;900&family=Space+Mono:wght@400;700&display=swap'
    document.head.appendChild(l)
    // live sync from the Google Sheet; keep the committed snapshot on any failure
    fetch('https://warriors-schedule-api.vercel.app/api/schedule')
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error('bad status'))))
      .then((d) => { if (d && Array.isArray(d.games)) setData(d) })
      .catch(() => {})
  }, [])

  const teams = DATA.teams

  // unified entries for the schedule list
  const entries = useMemo(() => {
    const list = []
    for (const g of data.games) {
      if (filter !== 'ALL' && g.team !== filter) continue
      list.push({ kind: 'game', sort: g.date + (g.time || 'zz'), date: g.date, game: g })
    }
    for (const e of data.events) {
      const inc = e.teams.filter((et) => filter === 'ALL' || et.team === filter)
      if (!inc.length) continue
      const dates = filter === 'ALL' ? e.teams.flatMap((et) => et.dates) : inc.flatMap((et) => et.dates)
      const start = dates.reduce((a, b) => (a < b ? a : b))
      const end = dates.reduce((a, b) => (a > b ? a : b))
      list.push({ kind: 'event', sort: start, date: start, start, end, event: e, teamFilter: filter === 'ALL' ? null : filter, teamsShown: filter === 'ALL' ? e.teams.map((t) => t.team) : [filter], nGames: dates.length })
    }
    list.sort((a, b) => (a.sort < b.sort ? -1 : 1))
    return list
  }, [filter, data])

  // summary strip
  const summary = useMemo(() => {
    if (filter === 'ALL') {
      const totalGames = data.games.length + data.events.reduce((s, e) => s + e.teams.reduce((x, t) => x + t.dates.length, 0), 0)
      const allDates = [...data.games.map((g) => g.date), ...data.events.flatMap((e) => e.teams.flatMap((t) => t.dates))]
      const earliest = allDates.reduce((a, b) => (a < b ? a : b))
      return [[totalGames, 'Games Scheduled'], [data.events.length, 'Tournaments & Events'], [fmtMonD(earliest), 'Season Tip-Off']]
    }
    const g = data.games.filter((x) => x.team === filter).length
    const evs = data.events.filter((e) => e.teams.some((t) => t.team === filter))
    const eg = evs.reduce((s, e) => s + e.teams.find((t) => t.team === filter).dates.length, 0)
    const dates = [...data.games.filter((x) => x.team === filter).map((x) => x.date), ...evs.flatMap((e) => e.teams.find((t) => t.team === filter).dates)]
    const first = dates.length ? dates.reduce((a, b) => (a < b ? a : b)) : null
    return [[g + eg, 'Games'], [evs.length, 'Tournaments'], [first ? fmtMonD(first) : '—', 'First Game']]
  }, [filter, data])

  // up next
  const upNext = useMemo(() => {
    if (!today) return null
    const up = entries.filter((e) => (e.kind === 'game' ? e.date : e.end) >= today)
    return up.length ? up[0] : null
  }, [entries, today])

  // group schedule by month
  const groups = useMemo(() => {
    const m = new Map()
    for (const e of entries) {
      const p = parts(e.date)
      const key = `${p.y}-${String(p.m).padStart(2, '0')}`
      if (!m.has(key)) m.set(key, [])
      m.get(key).push(e)
    }
    return [...m.entries()].map(([k, list]) => {
      const [y, mo] = k.split('-').map(Number)
      return { key: k, label: `${MONTHS[mo - 1]} ${y}`, list }
    })
  }, [entries])

  const activeTeamLabel = filter === 'ALL' ? null : (teamById(filter)?.label || filter)

  return (
    <div style={{ background: C.bg, color: C.text, fontFamily: SANS, minHeight: '70vh', backgroundImage: 'radial-gradient(120% 60% at 50% -10%, #101514 0%, #0B0C0C 60%)' }}>
      <div style={{ maxWidth: 760, margin: '0 auto', padding: '28px 16px 80px' }}>

        {/* 3.1 HEADER */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, marginBottom: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ fontFamily: MONO, fontSize: 10.5, textTransform: 'uppercase', letterSpacing: '.15em', color: C.muted, lineHeight: 1.55 }}>
              MASTER<br />SCHEDULE · {DATA.season}
            </div>
          </div>
          {!embed && (
            <button onClick={() => setCoach((v) => !v)} style={{ fontFamily: MONO, fontSize: 11, textTransform: 'uppercase', letterSpacing: '.1em', padding: '8px 12px', borderRadius: 8, border: `1px solid ${coach ? C.amberBorder : '#202222'}`, background: coach ? C.amberBg : C.s1, color: coach ? C.amber : C.muted, cursor: 'pointer' }}>
              {coach ? '✕ Coach view' : '🔒 Coach view'}
            </button>
          )}
        </div>

        {/* 3.2 SUMMARY STRIP */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 1, background: C.hair, borderRadius: 14, overflow: 'hidden', marginBottom: 16 }}>
          {summary.map(([n, l], i) => (
            <div key={i} style={{ background: '#111313', padding: '16px 12px', textAlign: 'center' }}>
              <div style={{ fontWeight: 800, fontSize: 'clamp(18px,5.4vw,23px)', lineHeight: 1 }}>{n}</div>
              <div style={{ fontFamily: MONO, fontSize: 9.5, textTransform: 'uppercase', letterSpacing: '.1em', color: C.muted, marginTop: 6 }}>{l}</div>
            </div>
          ))}
        </div>

        {/* 3.2b LEAGUE PLAY NOTE — 10U–14U also play Fieldhouse league (not yet on this schedule) */}
        {(filter === 'ALL' || ['10U', '12U', '14U'].includes(teamById(filter)?.age)) && (
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, background: '#0F1613', border: `1px solid #1F3A2C`, borderRadius: 10, padding: '11px 14px', marginBottom: 16 }}>
            <span style={{ fontFamily: MONO, fontSize: 11, color: C.greenHi, flex: 'none', paddingTop: 1 }}>＋</span>
            <div style={{ fontSize: 13, lineHeight: 1.55, color: C.muted2 }}>
              <span style={{ color: C.text, fontWeight: 700 }}>League play:</span> our younger teams
              (through 14U) also compete in league play at the Fieldhouse in Springfield —
              <span style={{ color: C.greenHi, fontWeight: 700 }}> 16+ additional games</span> not
              yet on this schedule. Dates will be added as the league releases them.
            </div>
          </div>
        )}

        {/* 3.3 COACH BANNER */}
        {coach && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, background: C.amberBg, border: `1px solid ${C.amberBorder}`, color: C.amber, borderRadius: 10, padding: '10px 14px', fontSize: 13, marginBottom: 16 }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: C.amber, boxShadow: '0 0 0 0 rgba(228,195,106,.6)', animation: 'schPulse 2s infinite' }} />
            Coach view — internal planning notes are visible. Not shown to families.
          </div>
        )}

        {/* 3.4 UP NEXT */}
        {upNext && (
          <UpNext entry={upNext} today={today} filter={filter} />
        )}

        {/* 3.5 VIEW TOGGLE + TEAM CHIPS */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, margin: '20px 0 12px' }}>
          {['schedule', 'calendar'].map((v) => (
            <button key={v} onClick={() => setView(v)} style={{ fontFamily: MONO, fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.08em', padding: '11px 0', borderRadius: 9, cursor: 'pointer', background: view === v ? C.green : '#111313', color: view === v ? '#03150C' : '#8A8A86', border: view === v ? 'none' : '1px solid #202222' }}>{v}</button>
          ))}
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}>
          <Chip active={filter === 'ALL'} onClick={() => { setFilter('ALL'); setSelDay(null) }} label="All Teams" />
          {teams.map((t) => (
            <Chip key={t.id} disabled={t.comingSoon} active={filter === t.id} dot={teamColor(t)} onClick={() => { if (!t.comingSoon) { setFilter(t.id); setSelDay(null) } }} label={t.comingSoon ? `${t.label} · Soon` : t.label} />
          ))}
        </div>

        {/* 3.7 / 3.8 CONTENT */}
        {view === 'schedule'
          ? <ScheduleView data={data} groups={groups} filter={filter} coach={coach} activeTeamLabel={activeTeamLabel} />
          : <CalendarView data={data} filter={filter} coach={coach} selDay={selDay} setSelDay={setSelDay} />}

        {/* 3.10 FOOTER */}
        {!embed ? (
          <div style={{ fontFamily: MONO, fontSize: 10.5, color: C.muted, textAlign: 'center', marginTop: 48, lineHeight: 1.7, letterSpacing: '.08em' }}>
            WARRIORS ACADEMY · SPRINGFIELD, MO<br />
            <span style={{ color: C.faint }}>Home games at {DATA.home} · Schedule subject to change</span>
          </div>
        ) : (
          <div style={{ fontFamily: MONO, fontSize: 10.5, color: C.faint, textAlign: 'center', marginTop: 32, letterSpacing: '.08em' }}>
            Home games at {DATA.home} · Schedule subject to change
          </div>
        )}
      </div>
      <style>{`@keyframes schPulse{0%{box-shadow:0 0 0 0 rgba(228,195,106,.5)}70%{box-shadow:0 0 0 7px rgba(228,195,106,0)}100%{box-shadow:0 0 0 0 rgba(228,195,106,0)}}`}</style>
    </div>
  )
}

export default function SchedulePage() {
  return <ScheduleExplorer />
}

/* ============================ chip ============================ */
function Chip({ active, disabled, dot, onClick, label }) {
  return (
    <button onClick={onClick} disabled={disabled} style={{
      display: 'flex', alignItems: 'center', gap: 7, fontFamily: MONO, fontSize: 11.5, padding: '8px 12px', borderRadius: 8, minHeight: 40,
      cursor: disabled ? 'default' : 'pointer',
      background: active ? '#F4F3F1' : '#131515',
      color: disabled ? C.faint : active ? '#0B0C0C' : C.text,
      border: active ? 'none' : '1px solid #222424', opacity: disabled ? 0.55 : 1,
    }}>
      {dot && <span style={{ width: 8, height: 8, borderRadius: '50%', background: dot, flex: 'none' }} />}
      {label}
    </button>
  )
}

/* ============================ up next ============================ */
function UpNext({ entry, today, filter }) {
  const isGame = entry.kind === 'game'
  const targetDate = isGame ? entry.date : entry.start
  const days = daysBetween(today, targetDate)
  const countLabel = days <= 0 ? (days === 0 ? '' : '') : ''
  const bigNum = days <= 0 ? 'Today' : days
  const sub = days <= 0 ? 'game day' : days === 1 ? 'day away' : 'days away'

  let title, pillKind, badges, timeStr, venue
  if (isGame) {
    const g = entry.game
    title = g.opponent ? `vs ${g.opponent}` : 'TBD Opponent'
    pillKind = g.homeAway === 'home' ? 'home' : g.homeAway === 'away' ? 'away' : 'tbd'
    badges = [g.team]
    timeStr = g.time ? (g.timeTBD ? `${g.time} (TBD)` : g.time) : 'Time TBD'
    venue = g.location || 'TBD'
  } else {
    const e = entry.event
    title = e.name
    pillKind = eventPillKind(e)
    badges = entry.teamsShown
    timeStr = eventRange(entry.start, entry.end)
    venue = e.location || 'TBD'
  }

  return (
    <div style={{ position: 'relative', background: 'linear-gradient(155deg,#12201A,#0F1413)', border: '1px solid #1F3A2C', borderRadius: 18, padding: 18, overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: -40, right: -40, width: 160, height: 160, background: 'radial-gradient(circle, rgba(5,176,87,.18), transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', position: 'relative' }}>
        <div style={{ fontFamily: MONO, fontSize: 11, color: C.greenHi, letterSpacing: '.08em' }}>▸ Up Next{filter !== 'ALL' ? ` · ${filter}` : ''}</div>
        <div style={{ textAlign: 'right', lineHeight: 1 }}>
          <div style={{ fontWeight: 800, fontSize: 'clamp(22px,7vw,30px)' }}>{bigNum}</div>
          <div style={{ fontFamily: MONO, fontSize: 9.5, color: C.muted, textTransform: 'uppercase', letterSpacing: '.1em', marginTop: 4 }}>{sub}</div>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', marginTop: 10 }}>
        <Pill kind={pillKind} />
        <span style={{ fontWeight: 800, fontSize: 'clamp(21px,6.2vw,27px)', lineHeight: 1.1 }}>{title}</span>
      </div>
      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 10 }}>{badges.map((b) => <Badge key={b} id={b} />)}</div>
      <div style={{ height: 1, background: '#1F3A2C', margin: '14px 0' }} />
      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', fontFamily: MONO, fontSize: 12, color: C.muted2 }}>
        <span>📅 {fmtLong(targetDate)}</span>
        <span>🕘 {timeStr}</span>
        <span>📍 {venue}</span>
      </div>
      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 14 }}>
        <a href={calLink(entry)} target="_blank" rel="noopener" style={{ fontFamily: MONO, fontSize: 12, fontWeight: 700, background: C.green, color: '#03150C', padding: '8px 14px', borderRadius: 8 }}>＋ Add to Calendar</a>
        {realVenue(venue) && pillKind !== 'home' && (
          <a href={dirLink(venue)} target="_blank" rel="noopener" style={{ fontFamily: MONO, fontSize: 12, fontWeight: 700, border: '1px solid #2A2C2C', color: C.text, padding: '8px 14px', borderRadius: 8 }}>◎ Directions</a>
        )}
      </div>
    </div>
  )
}

/* ============================ schedule view ============================ */
function ScheduleView({ data, groups, filter, coach, activeTeamLabel }) {
  if (!groups.length) {
    return <div style={{ textAlign: 'center', padding: '60px 0', color: C.muted }}>No games scheduled for this team yet.<br /><span style={{ color: C.green }}>Coming soon.</span></div>
  }
  // coach notes on All Teams only
  const notesByMonth = {}
  if (coach && filter === 'ALL') {
    for (const n of data.coachNotes) {
      const p = parts(n.date); const key = `${p.y}-${String(p.m).padStart(2, '0')}`
      ;(notesByMonth[key] ||= []).push(n)
    }
  }
  return (
    <div>
      {groups.map((g) => {
        const notes = notesByMonth[g.key] || []
        const total = g.list.length + notes.length
        return (
          <div key={g.key} style={{ marginBottom: 28 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
              <div style={{ fontFamily: MONO, fontSize: 11, textTransform: 'uppercase', letterSpacing: '.14em', color: C.muted2 }}>{g.label}</div>
              <div style={{ flex: 1, height: 1, background: C.hair }} />
              <div style={{ fontFamily: MONO, fontSize: 10, color: C.faint }}>{total} event{total !== 1 ? 's' : ''}</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {g.list.map((e, i) => <EntryCard key={i} entry={e} filter={filter} />)}
              {notes.map((n, i) => (
                <div key={'n' + i} style={{ display: 'flex', gap: 12, border: `1px dashed ${C.amberBorder}`, borderRadius: 10, padding: '12px 14px', color: C.amber, fontSize: 13 }}>
                  <span style={{ fontFamily: MONO, fontSize: 10, opacity: 0.8 }}>{fmtMonD(n.date)}</span>
                  <span><em style={{ opacity: 0.7 }}>Coach note</em> — {n.text}</span>
                </div>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}

function EntryCard({ entry, filter }) {
  const isGame = entry.kind === 'game'
  let accent, tint, pillKind, badges, title, meta, dateISO, venue, showDir
  if (isGame) {
    const g = entry.game
    accent = teamColor(teamById(g.team)); tint = 'transparent'
    pillKind = g.homeAway === 'home' ? 'home' : g.homeAway === 'away' ? 'away' : 'tbd'
    badges = [g.team]
    title = g.opponent ? `vs ${g.opponent}` : 'TBD Opponent'
    venue = g.location || 'TBD'
    meta = `${g.time ? (g.timeTBD ? g.time + ' (TBD)' : g.time) : 'Time TBD'} · ${venue}`
    dateISO = g.date
    showDir = pillKind !== 'home' && realVenue(venue)
  } else {
    const e = entry.event
    accent = e.kind === 'postseason' ? C.goldHi : C.gold
    tint = e.kind === 'postseason' ? '#161206' : '#131210'
    pillKind = eventPillKind(e)
    badges = entry.teamsShown
    title = e.name
    venue = e.location || 'TBD'
    meta = `${eventRange(entry.start, entry.end)} · ${entry.nGames} game${entry.nGames !== 1 ? 's' : ''} · ${venue}`
    dateISO = entry.start
    showDir = realVenue(venue)
  }
  return (
    <div style={{ display: 'flex', gap: 12, background: tint, border: `1px solid ${C.cardBorder}`, borderLeft: `4px solid ${accent}`, borderRadius: 10, padding: '12px 14px', minWidth: 0 }}>
      <div style={{ width: 50, textAlign: 'center', flex: 'none' }}>
        <div style={{ fontFamily: MONO, fontSize: 10, color: C.muted }}>{monShort(dateISO)}</div>
        <div style={{ fontWeight: 800, fontSize: 25, lineHeight: 1.05 }}>{dayNum(dateISO)}</div>
        <div style={{ fontFamily: MONO, fontSize: 10, color: C.faint }}>{wd(dateISO)}</div>
      </div>
      <div style={{ minWidth: 0, flex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8, marginBottom: 6 }}>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>{badges.map((b) => <Badge key={b} id={b} />)}</div>
          <Pill kind={pillKind} />
        </div>
        <div style={{ fontWeight: 700, fontSize: 16.5, lineHeight: 1.25, overflowWrap: 'anywhere' }}>{title}</div>
        <div style={{ fontFamily: MONO, fontSize: 11.5, color: C.muted, marginTop: 4, overflowWrap: 'anywhere' }}>{meta}</div>
        {(isGame && entry.game.tentative) && <div style={{ display: 'inline-block', marginTop: 8, fontFamily: MONO, fontSize: 10, color: C.amber, border: `1px dashed ${C.amberBorder}`, borderRadius: 5, padding: '2px 6px' }}>Tentative · TBD</div>}
        <div style={{ display: 'flex', gap: 10, marginTop: 10, flexWrap: 'wrap' }}>
          <a href={calLink(entry)} target="_blank" rel="noopener" style={{ fontFamily: MONO, fontSize: 11, color: C.greenHi }}>＋ Calendar</a>
          {showDir && <a href={dirLink(venue)} target="_blank" rel="noopener" style={{ fontFamily: MONO, fontSize: 11, color: C.muted2 }}>◎ Directions</a>}
        </div>
      </div>
    </div>
  )
}

/* ============================ calendar view ============================ */
function CalendarView({ data, filter, coach, selDay, setSelDay }) {
  // map ISO day -> list of {type, color, entry}
  const dayMap = useMemo(() => {
    const m = {}
    const add = (iso, obj) => { (m[iso] ||= []).push(obj) }
    for (const g of data.games) {
      if (filter !== 'ALL' && g.team !== filter) continue
      add(g.date, { type: 'game', color: teamColor(teamById(g.team)), game: g })
    }
    for (const e of data.events) {
      const inc = e.teams.filter((et) => filter === 'ALL' || et.team === filter)
      if (!inc.length) continue
      const col = e.kind === 'postseason' ? C.goldHi : C.gold
      const dates = new Set(inc.flatMap((et) => et.dates))
      for (const iso of dates) add(iso, { type: e.kind === 'postseason' ? 'post' : 'tourn', color: col, event: e })
    }
    if (coach && filter === 'ALL') for (const n of data.coachNotes) add(n.date, { type: 'note', color: C.amber, note: n })
    return m
  }, [filter, coach, data])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      {CAL_MONTHS.map(([y, mo]) => (
        <CalMonth key={`${y}-${mo}`} y={y} mo={mo} dayMap={dayMap} selDay={selDay} setSelDay={setSelDay} filter={filter} />
      ))}
      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center', fontFamily: MONO, fontSize: 10.5, color: C.muted, marginTop: 4 }}>
        <span><span style={{ display: 'inline-block', width: 8, height: 8, borderRadius: '50%', background: C.green, marginRight: 6 }} />Game</span>
        <span><span style={{ display: 'inline-block', width: 8, height: 8, borderRadius: '50%', background: C.gold, marginRight: 6 }} />Tournament</span>
        <span><span style={{ display: 'inline-block', width: 8, height: 8, borderRadius: '50%', background: C.goldHi, marginRight: 6 }} />State / Regionals / Nationals</span>
      </div>
    </div>
  )
}

function CalMonth({ y, mo, dayMap, selDay, setSelDay, filter }) {
  const first = new Date(y, mo - 1, 1).getDay()
  const days = new Date(y, mo, 0).getDate()
  const cells = []
  for (let i = 0; i < first; i++) cells.push(null)
  for (let d = 1; d <= days; d++) cells.push(d)
  const iso = (d) => `${y}-${String(mo).padStart(2, '0')}-${String(d).padStart(2, '0')}`
  const detail = selDay && parts(selDay).y === y && parts(selDay).m === mo ? dayMap[selDay] : null
  return (
    <div style={{ background: C.s1, border: `1px solid ${C.cardBorder}`, borderRadius: 14, padding: 14 }}>
      <div style={{ fontFamily: MONO, fontSize: 11, textTransform: 'uppercase', letterSpacing: '.14em', color: C.muted2, marginBottom: 10 }}>{MONTHS[mo - 1]} {y}</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', gap: 4 }}>
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((w, i) => <div key={i} style={{ textAlign: 'center', fontFamily: MONO, fontSize: 9.5, color: C.faint }}>{w}</div>)}
        {cells.map((d, i) => {
          if (!d) return <div key={i} />
          const day = iso(d)
          const items = dayMap[day]
          const isSel = selDay === day
          return (
            <button key={i} disabled={!items} onClick={() => setSelDay(isSel ? null : day)} style={{
              aspectRatio: '1', borderRadius: 7, position: 'relative', cursor: items ? 'pointer' : 'default',
              background: isSel ? '#F4F3F1' : items ? '#161818' : 'transparent',
              color: isSel ? '#0B0C0C' : items ? C.text : C.faint, border: 'none',
              fontFamily: MONO, fontSize: 12, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', paddingTop: 4,
            }}>
              {d}
              {items && !isSel && (
                <span style={{ position: 'absolute', bottom: 4, display: 'flex', gap: 2 }}>
                  {items.slice(0, 4).map((it, j) => <span key={j} style={{ width: 4, height: 4, borderRadius: '50%', background: it.color }} />)}
                </span>
              )}
            </button>
          )
        })}
      </div>
      {detail && detail.length > 0 && (
        <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 8 }}>
          {detail.map((it, i) => <DayDetailRow key={i} it={it} filter={filter} />)}
        </div>
      )}
    </div>
  )
}

function DayDetailRow({ it, filter }) {
  if (it.type === 'note') {
    return <div style={{ border: `1px dashed ${C.amberBorder}`, borderRadius: 8, padding: '8px 12px', color: C.amber, fontSize: 12.5 }}><em style={{ opacity: 0.7 }}>Coach note</em> — {it.note.text}</div>
  }
  if (it.type === 'game') {
    const g = it.game
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: C.s2, border: `1px solid ${C.cardBorder}`, borderRadius: 8, padding: '8px 12px', flexWrap: 'wrap' }}>
        <Badge id={g.team} /><Pill kind={g.homeAway === 'home' ? 'home' : g.homeAway === 'away' ? 'away' : 'tbd'} />
        <span style={{ fontWeight: 700, fontSize: 14 }}>{g.opponent ? `vs ${g.opponent}` : 'TBD'}</span>
        <span style={{ fontFamily: MONO, fontSize: 11, color: C.muted, width: '100%' }}>{g.time ? (g.timeTBD ? g.time + ' (TBD)' : g.time) : 'Time TBD'} · {g.location || 'TBD'}</span>
      </div>
    )
  }
  const e = it.event
  const shown = filter === 'ALL' ? e.teams.map((t) => t.team) : [filter]
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: C.s2, border: `1px solid ${C.cardBorder}`, borderRadius: 8, padding: '8px 12px', flexWrap: 'wrap' }}>
      {shown.map((b) => <Badge key={b} id={b} />)}<Pill kind={eventPillKind(e)} />
      <span style={{ fontWeight: 700, fontSize: 14 }}>{e.name}</span>
      <span style={{ fontFamily: MONO, fontSize: 11, color: C.muted, width: '100%' }}>{e.location || 'TBD'}</span>
    </div>
  )
}
