---
description: Writes Playwright + axe-core tests independently from the coder
mode: subagent
prompt: '{file:../../.agents/tester.md}'
permission:
  edit: allow
  bash:
    '*': allow
    'npx playwright*': allow
---
