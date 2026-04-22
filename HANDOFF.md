# Warriors Academy — Project Handoff Document

**Last updated:** April 21, 2026
**Owner:** Jason (mdm.jason@gmail.com, GitHub: devJason23)
**Status:** Live in production, active content development

---

## 1. What We Are Building

**Warriors Academy** is a Christ-centered 4-day homeschool co-op in Springfield, Missouri, built around elite basketball development, entrepreneurship, and faith-based character formation for student-athletes ages **10u through 18u**.

### The Model (what makes it different)
- **4 days a week** on-site (Monday–Thursday). Fridays are open for family, travel, tournaments, or additional training.
- **Each academy day includes:**
  - 2–3 hours of enrichment instruction (entrepreneurship, business, marketing, finance, AI, coding)
  - Dedicated business-build time (students run real businesses)
  - A **dedicated study hall hour** — this is flex time. Students who need to work on core academics use it; students who are caught up at home use it for extra court work, deeper business work, or the fundraiser enterprise.
  - Focused athletic training and basketball-specific development blocks
- **Parents remain responsible for core academics** (math, English, reading, science, social studies) at home under Missouri homeschool law (51% parent-led requirement).
- **Missouri Senate Bill 63 (Tebow Law)** — signed July 9, 2025 by Gov. Kehoe, effective Aug 28, 2025. Allows homeschool students to play sports at their local public school, so Warriors athletes can play any sport the academy doesn't offer.

### Pillars the site sells
1. **Elite athletic training** — up to 4 hours/day, Dr. Dish shooting machine (1,000 shots/hour; players shot **36,862 shots on it in half a season**), ATG (Athletic Truth Group) knees-over-toes certified training
2. **Real entrepreneurship** — students run actual businesses with Shark-Tank-style pitch deck flow
3. **Big Brother Mentor Program** — older athletes mentor younger ones via a **Badge Economy**: Knockdown Shooter, Lockdown Defender, Rebounding, Court IQ. Younger athletes book sessions with certified Big Brothers.
4. **Warrior Life: Mission Control** — proprietary student-athlete app (LAUNCHING THIS SEASON — MVP, ~5 months to season start). 5 pillars: Daily Command Center, AI Nutrition & Readiness, "The Mirror" Character Development, Gamified Team Accountability, Pro-Level Coach Dashboard.
5. **Christ-centered character formation** — Proverbs 27:17 "Iron sharpens iron" is a core theme.
6. **Proven hybrid model** — not an experiment. Proof section cites Acton Academy (300+ campuses), Alpha School (top 1–2% nationally), Colossal Academy (Forbes-featured), IMG, Combine Academy, Iowa BIG, Elizabeth City Airbnb School.

### Key stats featured on the site
- 36,862 shots on Dr. Dish in half a season (1,000 shots/hour capacity)
- Homeschoolers: 87% college acceptance rate vs. 68% public school
- 3.7M U.S. homeschooled kids (current)
- Missouri SB 63 (Tebow Law) — effective Aug 28, 2025
- FAQ page has **24 questions answered**

---

## 2. Where Everything Lives

### Source code
- **GitHub repo:** https://github.com/devJason23/warriors-academy
- **Git identity configured:** devJason23 / mdm.jason@gmail.com
- **For git push:** always use `api_credentials=["github"]`
- **Default branch:** `main` (Vercel auto-deploys on push)

### Deployment
- **Live URL:** https://warriors-academy.vercel.app/
- **Host:** Vercel (connected to GitHub main branch, auto-deploy)
- **Framework:** Next.js 14 (App Router, static export)
- **Deploy time:** typically 30–60 seconds after push

### Local workspace
- **Project root:** `/home/user/workspace/warriors-academy`
- **Run build check:** `cd /home/user/workspace/warriors-academy && npx next build`

### File structure (all content lives here)
```
app/
├── layout.js                # Nav bar + footer (sitewide)
├── page.js                  # HOME PAGE (761 lines — most content lives here)
├── globals.css              # Tailwind + custom styles
├── faq/page.js              # FAQ page — 24 questions
├── why-homeschool/page.js   # Why Homeschool deep-dive (11 chapters)
├── entrepreneur/page.js     # Digital Marketing / Entrepreneur track
└── player/page.js           # Player profile template (needs real data)
public/
└── warriors-fight-song.mp3  # Custom team fight song audio
HANDOFF.md                   # THIS FILE
```

### Research files (workspace-level reference, not deployed)
- `/home/user/workspace/warriors_academy_notebook_content.md` — Extract of the official NotebookLM source of truth
- `/home/user/workspace/hybrid_school_research.md` — 17 hybrid/homeschool peer schools researched

### External sources of truth
- **NotebookLM (official content source):** https://notebooklm.google.com/notebook/13e438d1-22d2-472c-bc59-b8322b0b7800
- **Connected MCP servers in Perplexity:** github, vercel, firecrawl (pipedream), onedrive

---

## 3. Current Site Sections (Home Page `/app/page.js`)

In order of appearance:
1. **Hero** — "Train Like a Warrior. Learn Like a Champion." 4-day co-op tagline.
2. **Proof: This Model Already Works** — 7-school grid: Acton, Alpha School, Combine Academy, IMG, Colossal, Iowa BIG, Elizabeth City Airbnb School. Closes with Springfield banner.
3. **Elite Training Features** — up to 4 hrs/day training, film study, strength/agility
4. **Dr. Dish Shooting Machine** — includes **36,862 shots green gradient proof stat**
5. **ATG (Athletic Truth Group)** — knees-over-toes system, only certified hub within 200 miles
6. **Big Brother Mentor Program** — Badge Economy (Knockdown Shooter, Lockdown Defender, Rebounding, Court IQ) with booking system
7. **Mastery Through Teaching** — 4-card grid (Teach It to Master It / Both Players Level Up / Servant Leadership / Life After Basketball) + large "Iron Sharpens Iron" Proverbs 27:17 gradient banner
8. **Warrior Life: Mission Control** — 5 pillars app section, "LAUNCHING THIS SEASON" banner
9. **Entrepreneurship Track** — real businesses, pitch decks
10. **Digital Marketing Track** — entry point for students without a business idea
11. **Warriors Fight Song** — embedded audio player (`/warriors-fight-song.mp3`)
12. **Real Stats: Homeschoolers Dominate** — 87% vs 68%, 3–5 grade levels above
13. **FAQ Preview** — 5 questions on the home page, links to full 24-question FAQ
14. **Final CTA**

---

## 4. Other Pages

### `/faq` — 24 Questions
Critical FAQ answers on this page (as of last edit):
- Q1: Is this a real school? Will my child get a diploma?
- Q2: **NEW** — Is this really homeschooling if my child attends your academy 4 days a week?
- Q27 (How does the 4-day schedule work?) and the structure/discipline answer both now **include the study hall hour correctly** as a flex time built into each academy day.

### `/why-homeschool` — 11-Chapter Deep Dive
Sections:
1. Pre-compulsory education literacy levels
2. The Prussian Blueprint (1800s origin of compulsory schooling)
3. Rockefeller / Carnegie + **1906 General Education Board Occasional Letter No. 1** quote
4. Committee of Ten (1892) — standardization
5. **John Taylor Gatto's 6 lessons** schools actually teach
6. Current state — literacy/math stats
7. Why traditional schooling crushes athletes
8. Homeschool advantage stats
9. The Socialization Myth
10. Homeschool boom — 3.7M kids
11. **Elite homeschooled athletes grid** — Tim Tebow, **Simone Biles (11-time Olympic medalist, all-time leader)**, Blake Griffin, Venus & Serena Williams, Allonzo Trier, Justin Jefferson, Lamar Jackson, Taylor Swift, etc.

### `/entrepreneur`
Digital Marketing Track details, school-managed business accounts, AI-assisted content creation with teacher/coach approval before publish (students never directly manage social media — Christ-centered safeguard).

### `/player`
Player profile template. **Still needs real player data from user.**

---

## 5. Key Content Rules (CRITICAL — DON'T BREAK)

1. **Dr. Dish = 1,000 shots/hour** (NOT 1,500). User corrected this explicitly.
2. **36,862 shots = HALF a season stat.** Real number.
3. **Simone Biles = 11-time Olympic medalist, all-time leader in Olympic gymnastics medals.** (NOT 7.) This got broken once — don't break it again.
4. **Study hall hour IS part of the academy day.** It's flex time — students who need it use it for core academics; students who don't use it for court work, business, or fundraiser work. Core academics still happen at home with parents under MO 51% homeschool law.
5. **Badge Economy badges are exactly:** Knockdown Shooter, Lockdown Defender, Rebounding, Court IQ.
6. **Warrior Life framing:** "LAUNCHING THIS SEASON — INCLUDED WITH EVERY WARRIORS ACADEMY MEMBERSHIP." It's MVP, ~5 months from season.
7. **Ages served:** 10u through 18u.
8. **NotebookLM is the source of truth** for any content questions.

---

## 6. User's Working Style (IMPORTANT)

- **"Don't change anything unless I specifically tell you to."** User wants discussion before edits to major sections. Violating this is a serious breach of trust.
- User approves changes chat-by-chat before execution.
- User hand-verifies stats and catches errors (like the Biles medal count revert).
- User provides source-of-truth material (NotebookLM, real game stats) — don't invent numbers.
- Prefer clarifying questions over assumptions when in doubt.

---

## 7. Pending / Open Items

| Item | Status | Notes |
|---|---|---|
| Real player data for `/player` page | Pending from user | Profile template is ready, just needs real athlete info, photos, stats |
| HoopsIQ partnership section | **Hold** | User switching from HoopSmith → HoopsIQ. Nav still shows HoopSmith at hoopsmith.vercel.app — user said leave as-is until partnership details are locked in |
| Fight song MP3 | **DONE** | Uploaded `Warriors-WAW-Glory-Run-12u.mp3` → `/public/warriors-fight-song.mp3` |

---

## 8. Session History (Recent Work)

1. **Apr 15** — Initial build, 22-question FAQ, Big Brother section, Dr. Dish, ATG, proof section
2. **Apr 21 (early)** — Expanded FAQ to 24 questions, Warrior Life Mission Control section, Mastery Through Teaching 4-card redesign with Iron Sharpens Iron banner, Why Homeschool 11-chapter deep dive rebuild, 36,862 shots stat added to Dr. Dish section
3. **Apr 21 (late)** — Restored study hall hour language in FAQ (correction: the hour IS in the academy day as flex time), uploaded fight song MP3, fixed Simone Biles back to 11-time Olympic medalist (all-time leader), removed "Song coming soon" placeholder

---

## 9. How to Pick This Up in a New Chat

**Paste this into the new chat:**

> I'm picking up the Warriors Academy website project. The repo is https://github.com/devJason23/warriors-academy, live at https://warriors-academy.vercel.app. The project root is `/home/user/workspace/warriors-academy`. Read `/home/user/workspace/warriors-academy/HANDOFF.md` for full context before doing anything. My rule: don't change anything unless I specifically tell you to — discuss first, then execute on approval.

The HANDOFF.md file is in the repo root and will also be pushed to GitHub so it's accessible anywhere.

---

## 10. Commands Cheat Sheet

```bash
# Verify build before pushing
cd /home/user/workspace/warriors-academy && npx next build

# Standard commit + push (always include api_credentials=["github"])
cd /home/user/workspace/warriors-academy && git add <files> && git commit -m "..." && git push origin main

# Check what's live vs local
git log --oneline -5
git status --short
```
