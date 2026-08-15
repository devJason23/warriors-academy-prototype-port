#!/usr/bin/env bash
# Refuse to deploy from a dirty or stale working tree.
#
# WHY THIS EXISTS: `vercel --prod` ships whatever is on DISK, committed or not.
# In Aug 2026 that silently put three changes into production that were never
# committed — the Meta Pixel ID, the required School Type field, and the whole
# parent confirmation email. Git and production drifted for days and a deploy
# from git would have reverted all three.
set -euo pipefail

if [ -n "$(git status --porcelain)" ]; then
  echo "✗ BLOCKED: uncommitted changes in the working tree."
  echo "  Vercel deploys your DISK, not git. Commit first or they become invisible."
  echo
  git status --short
  exit 1
fi

if git rev-parse --abbrev-ref --symbolic-full-name '@{u}' >/dev/null 2>&1; then
  git fetch --quiet || true
  behind=$(git rev-list --count 'HEAD..@{u}' 2>/dev/null || echo 0)
  if [ "$behind" -gt 0 ]; then
    echo "✗ BLOCKED: local branch is $behind commit(s) behind its remote."
    echo "  Run: git pull --ff-only"
    exit 1
  fi
fi

echo "✓ Working tree clean and in sync — safe to deploy ($(git rev-parse --short HEAD))"
