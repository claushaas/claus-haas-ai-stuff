---
name: product-feedback-loop
description: Product analytics and feedback loop guidance for KPIs, funnels, and experimentation. Use when defining metrics instrumentation, experiments, or indicators of product success.
---

## Name

product-feedback-loop

## When to use

- Use when setting success metrics for a new feature or campaign.
- Use when defining instrumentation for critical user journeys or funnels.
- Use when planning experiments, rollouts, or UX improvements.

## Inputs required

- Collect the product goals, KPIs, and desired outcomes.
- Collect the primary user journeys, conversion steps, and risk areas.
- Collect existing analytics stack, tools, and privacy constraints.
- If context is missing, stop and ask the DEV for details.

Questions for the DEV:

- What is the key objective this initiative must move?
- Which journeys or conversions deserve monitoring first?
- Do we already have an analytics provider and data schema?
- Are there privacy/consent rules that must guide instrumentation?

## Repo Signals

Fill this block after a quick Repo Scan. If anything is Unknown, keep it as Unknown and ask the DEV.

- Stack: Unknown – identify languages, runtimes, and frameworks in use.
- Conventions: Unknown – look for lint/format scripts, folder norms, or commit patterns.
- Tests: Unknown – locate commands for unit, integration, or e2e tests.
- CI/CD: Unknown – find pipelines, release jobs, or deployment scripts.
- Architecture patterns: Unknown – note layering, shared services, and observability choices.

## Process

1. Run a Repo Scan to capture Repo Signals and validate assumptions. Ask: "Can I proceed with these signals?"
2. Clarify goals, KPIs, guardrails, and business context. Ask: "Is this goal/constraint summary accurate?"
3. Map user journeys, events, and touchpoints that matter. Ask: "Do these paths cover your risks?"
4. Identify instrumentation gaps, experimentation needs, and privacy constraints. Ask: "Can I call out these gaps?"
5. Propose options for tracking and reporting (coverage, tooling, deployment). Ask: "Which option aligns with your risk tolerance?"
6. Define rollout, monitoring, and validation steps for the chosen instrumentation. Ask: "Can I proceed with this rollout?"

## Options & trade-offs

- Generate at least two, preferably three, options driven by the Repo Signals, constraints, and discoveries from the previous steps.
- Ensure the options differ in scope (basic tracking vs full experimentation vs gradual rollout), risk, cost, and supporting tooling.
- For each option include:
  - Summary of the approach and instrumentation scope.
  - Pros (benefits, coverage, insights unlocked).
  - Cons (privacy overhead, maintenance, team effort).
  - Preconditions (tests, tagging, feature flags, data access, consent).
- If a third option is not feasible, explain why and proceed with two.

Ask: "Do you want me to present 2 or 3 options based on this context?"

## Recommendation

- Choose the option with the best cost/benefit given benchmarks (data sensitivity, validation effort, timeline) or comparable past efforts.
- If benchmarks are missing, state assumptions and note what data would validate them (e.g., prior feature rollout metrics).
- Compare trade-offs against timeline, privacy, test maturity, and operational capacity.
- Provide a short rationale (3–6 bullets) that explains why the recommendation fits best.
- State the recommended option explicitly (Option 1/2/3) and list its key risks plus mitigations.

Ask: "Should I proceed with the recommended option?"

## Output format

- Repo Signals summary (stack, conventions, tests, CI, architecture).
- Goal/KPI matrix and event taxonomy.
- Options with pros/cons, preconditions, and notes.
- Recommendation with rationale, risks, and mitigations.
- Deployment, monitoring, and validation plan.
- Open questions for the DEV.

## Safety checks

- Avoid collecting PII or sensitive attributes without consent.
- Keep event names stable and prevent duplicates that distort metrics.
- Validate sampling strategy and data freshness.
- Monitor instrumentation for regressions or spikes before trusting metrics.

## Dev confirmation gates

- Confirm goals, KPIs, and journey coverage.
- Approve event taxonomy, naming, and tooling.
- Approve any privacy or consent safeguards before publishing.
- Approve monitoring/alerting and validation steps for the instrumentation.
