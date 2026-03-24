# Agent Team

Agent team for mattobee.com — an Eleventy personal site with Sanity CMS, deployed on Netlify. The site owner is a Staff Accessibility Designer; WCAG conformance is a first-class requirement.

## Roster

| Role          | Model tier | Agent file                                           | Rationale                                                                    |
| ------------- | ---------- | ---------------------------------------------------- | ---------------------------------------------------------------------------- |
| Lead          | Frontier   | [.agents/lead.md](.agents/lead.md)                   | Decomposes tasks, delegates, coordinates handoffs, reviews results           |
| Coder         | Mid-tier   | [.agents/coder.md](.agents/coder.md)                 | Implements features and fixes across templates, CSS, JS, and Eleventy config |
| Tester        | Mid-tier   | [.agents/tester.md](.agents/tester.md)               | Writes Playwright + axe-core tests independently from the coder              |
| Accessibility | Mid-tier   | [.agents/accessibility.md](.agents/accessibility.md) | Dual-touchpoint specialist — advises on plans and reviews implementations    |

## Orchestration

```
User
 └─► Lead (frontier)
      ├─► Coder (mid-tier)     — implements changes
      ├─► Tester (mid-tier)    — writes tests independently
      └─► Accessibility (mid-tier) — advises on plans, reviews changes
```

The Lead decomposes work and delegates to agents sequentially. Workflow:

1. **Context gathering** — Lead explores the codebase and clarifies requirements.
2. **Planning** — Lead creates a plan. For UI-facing changes, the Accessibility specialist is consulted before implementation.
3. **Implementation** — Coder implements the plan.
4. **Testing** — Tester writes or updates Playwright tests from the spec (not from the code).
5. **Accessibility review** — For UI-facing changes, the Accessibility specialist reviews the implementation.
6. **Quality gates** — Deterministic checks: `npm run build`, `npx playwright test`, ESLint. These must pass before work is considered complete.

## Quality gates

All changes must pass these deterministic checks before completion:

- `npm run build` (includes ESLint + Prettier + Eleventy build)
- `npx playwright test` (Playwright + axe-core)

Do not rely on LLM self-evaluation as the primary quality gate.

## Escalation map

| From          | To   | Trigger                                                    |
| ------------- | ---- | ---------------------------------------------------------- |
| Coder         | Lead | Build fails after two attempts, or change spans 3+ modules |
| Tester        | Lead | Cannot determine expected behaviour from the spec          |
| Accessibility | Lead | Finds a structural issue requiring architectural changes   |

## Cost projection

Target call distribution (by volume):

| Tier     | Agent(s)                     | Share |
| -------- | ---------------------------- | ----- |
| Frontier | Lead                         | ~10%  |
| Mid-tier | Coder, Tester, Accessibility | ~90%  |

This is a small codebase with sequential orchestration, so fast-tier agents are not needed — the mid-tier agents handle exploration and implementation together without context window pressure.

## Assumptions

- Solo developer workflow (sequential, not parallel agents).
- Anthropic models are the primary provider. Substitute equivalent tiers for other providers (see model guide in `.agents/skills/designing-agent-teams/references/model-guide.md`).
- The Netlify MCP server is available for deployment operations.
