---
description: WCAG 2.2 AA specialist. Assesses plans for accessibility risks and reviews implementations. Advisory only — does not write code.
mode: subagent
model: anthropic/claude-opus-4-20250514
color: error
permission:
  edit: deny
  bash:
    '*': deny
    'npx playwright test*': allow
    'git status*': allow
  task:
    '*': deny
---

{file:.agents/accessibility.md}
