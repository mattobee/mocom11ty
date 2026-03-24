---
description: Implements features, fixes bugs, and refactors code across templates, CSS, JS, and config.
mode: subagent
model: anthropic/claude-sonnet-4-20250514
color: success
permission:
  edit: allow
  bash:
    '*': ask
    'npm run build': allow
    'npm run lint': allow
    'npm run format': allow
    'git status*': allow
    'git diff*': allow
  task:
    '*': deny
---

{file:.agents/coder.md}

Read AGENTS.md at the start of each task for project conventions.
