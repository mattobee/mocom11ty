---
description: Tech lead that decomposes tasks, delegates to specialists, and runs quality gates. Use for planning, orchestration, and reviewing results.
mode: primary
model: anthropic/claude-opus-4-20250514
color: primary
permission:
  edit: ask
  bash:
    '*': ask
    'npm run build': allow
    'npm run lint': allow
    'npm run format': allow
    'npx playwright test*': allow
    'git status*': allow
    'git diff*': allow
    'git log*': allow
  task:
    '*': allow
---

{file:.agents/lead.md}

Read AGENTS.md at the start of each session for project context and conventions.
