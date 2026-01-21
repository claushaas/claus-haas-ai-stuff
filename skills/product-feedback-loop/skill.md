---
name: product-feedback-loop
description: Define product analytics, event taxonomy, and feedback loops for UX and experiments. Use when instrumenting product metrics, funnels, or A/B tests.
---

## Name
product-feedback-loop

## When to use
- Need to define product metrics or KPIs.
- Instrument user flows or funnels.
- Plan experiments or feature rollouts.
- Improve UX based on real usage data.

## Inputs required
- Product goals and success metrics.
- Key user journeys and conversion steps.
- Current analytics stack (if any).
- Privacy and consent requirements.
- If any context is missing, stop and ask the DEV.
Questions for the DEV:
- What is the primary product goal right now?
- Which user journey is most important?
- Do we have an analytics provider already?
- What privacy or consent rules apply?

## Repo Signals
Fill this block before any plan. If something is Unknown, ask the DEV.
- Stack: Node.js (`package.json`, type: module). Frameworks: Unknown.
- Conventions: Unknown (no lint/format configs detected).
- Tests: `test` script placeholder, no framework detected.
- CI/CD: Unknown (no `.github/workflows` detected).
- Architecture: Unknown (no `src/` or `packages/`; only `/exemplos`).

## Process
1. Do a Repo Scan and confirm Repo Signals. Ask: "Can I proceed with these signals?"
2. Define goals, KPIs, and guardrail metrics. Ask: "Are these the right metrics?"
3. Map the user journey and events needed. Ask: "Does this event map look right?"
4. Propose at least 2 instrumentation options with trade-offs. Ask: "Which option should I detail?"
5. Define experiment plan and reporting. Ask: "Can I draft the experiment plan?"
6. Before adding tracking, confirm privacy and consent. Ask: "Can I add this instrumentation?"

## Options & trade-offs
Option A: Minimal tracking (core events + KPI dashboard).
- Pros: fast, low cost, fewer privacy risks.
- Cons: limited insight into edge cases.

Option B: Full funnel + experimentation stack.
- Pros: deep insight and controlled rollouts.
- Cons: more complexity and ongoing maintenance.

## Recommendation
Recommend Option A as a baseline.
Rationale:
- Repo signals show no established testing/CI; keep changes light.
- Core events deliver fast insight without heavy setup.
- Easier to validate data quality before expanding.
- Lower privacy risk and lower operational cost.

## Output format
- Repo Signals (short block)
- Goals, KPIs, and guardrail metrics
- Event taxonomy and funnel map
- Options with pros/cons
- Recommendation and rationale
- Experiment plan and reporting cadence
- Open questions for the DEV

## Safety checks
- Avoid collecting PII without consent.
- Keep event names stable and versioned.
- Prevent double-counting and noisy events.
- Validate sampling and data accuracy.

## Dev confirmation gates
- Confirm KPIs and target journeys.
- Approve event taxonomy and naming.
- Approve analytics vendor and SDKs.
- Approve privacy/consent handling.
