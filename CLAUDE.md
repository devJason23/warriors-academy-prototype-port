# Warriors Academy Claude Code Instructions

## Project source of truth

This repo is the current implementation workspace for the Warriors Academy prototype port.

Canonical local path:
C:\Users\mdmja\Projects\warriors-academy-prototype-port

Expected branch:
build/claude-design-port-2026-04-29

Before editing, confirm:
- You are in the canonical project folder above.
- You are not working from a stale `.claude/worktrees/...` checkout unless Jason or Hermes explicitly requested that worktree.
- Your branch is current with origin/build/claude-design-port-2026-04-29 or origin/main.

Known stale worktree to avoid unless intentionally recovered:
C:\Users\mdmja\Projects\warriors-academy-prototype-port\.claude\worktrees\inspiring-kare-b09990

## Role split

Claude Design is the visual/design authority for new page designs.
Claude Code is the implementation authority for applying those designs in code, committing, and pushing when requested.
Codex is not the default builder for Warriors Academy unless Jason explicitly asks.

## Implementation rules

- Preserve strict fidelity to Claude Design outputs when implementing design handoffs.
- Do not creatively reinterpret layouts, copy, hierarchy, imagery, or section order unless asked.
- Do not rewrite unrelated sections while implementing a specific page/update.
- Preserve existing fixes and direct content changes, even if an older Claude Design packet does not include them.
- Keep the site performant and responsive.
- Run the available build/test command before reporting completion.

## Do-not-revert checklist

Before committing, verify these prior fixes remain intact where applicable:

- Hoosiers travel mileage sentence remains removed.
- Warriors story video thumbnail remains fixed.
- Warriors badges image remains correct.
- Numerade logo remains present.
- Athlete photos remain present on the case page.

## Commit/push behavior

When Jason asks for updates to be committed and pushed:

1. Inspect `git status --short --branch`.
2. Inspect `git diff --stat` and relevant diffs.
3. Run the project build/test command.
4. Commit with a clear conventional message.
5. Push to the current tracked branch.
6. Report the commit hash and pushed branch.

If there are uncommitted changes in a stale worktree, do not merge them wholesale. Reapply only the reviewed intended diff onto the current branch.
