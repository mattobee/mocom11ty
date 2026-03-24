---
description: Writes and runs Playwright tests independently from implementation. Focuses on E2E and accessibility testing.
mode: subagent
model: anthropic/claude-sonnet-4-20250514
color: warning
permission:
  edit: allow
  bash:
    '*': deny
    'npx playwright test*': allow
    'npx playwright install*': allow
    'git status*': allow
  task:
    '*': deny
---

{file:.agents/tester.md}
