---
name: observability-troubleshooting
description: Add or improve observability (logs, metrics, traces, alerts) and troubleshoot production or performance issues. Use when diagnosing incidents, defining SLOs, or instrumenting critical paths.
---

## Name
observability-troubleshooting

## When to use
- Production incident or hard-to-reproduce bug.
- Need to add logging/metrics/tracing.
- Define SLOs, dashboards, and alerting.
- Build runbooks for on-call troubleshooting.

## Inputs required
- Incident symptoms and impact window.
- Critical user flows and latency/availability targets.
- Current telemetry stack (if any).
- Data retention and privacy constraints.
- If any context is missing, stop and ask the DEV.
Questions for the DEV:
- What is the top user impact and timeframe?
- Do we have logs/metrics/traces today? Where?
- What SLOs or targets matter most?
- Any constraints on data retention or PII?

## Repo Signals
Fill this block before any plan. If something is Unknown, ask the DEV.
- Stack: Node.js (`package.json`, type: module). Frameworks: Unknown.
- Conventions: Unknown (no lint/format configs detected).
- Tests: `test` script placeholder, no framework detected.
- CI/CD: Unknown (no `.github/workflows` detected).
- Architecture: Unknown (no `src/` or `packages/`; only `/exemplos`).

## Process
1. Do a Repo Scan and confirm Repo Signals. Ask: "Can I proceed with these signals?"
2. Clarify the target outcome and SLOs. Ask: "Are these SLOs the right target?"
3. Map critical paths and missing telemetry. Ask: "Do these paths cover the main risk?"
4. Propose at least 2 instrumentation options with trade-offs. Ask: "Which option should I detail?"
5. Define dashboards, alerts, and runbooks. Ask: "Can I draft these artifacts?"
6. Before code changes, confirm privacy and sampling. Ask: "Can I add this telemetry?"

## Options & trade-offs
Option A: Minimal signals (structured logs + key metrics).
- Pros: fast, low overhead, easy to adopt.
- Cons: limited root-cause depth.

Option B: Full observability (metrics + tracing + SLOs).
- Pros: strong diagnosis and long-term visibility.
- Cons: more setup, higher cost and complexity.

## Recommendation
Recommend Option A as a starting point.
Rationale:
- Repo shows no testing/CI signals, so low-risk changes are safer.
- Minimal signals create a baseline quickly.
- Easier to validate value before adding tracing.
- Keeps telemetry cost and cardinality under control.

## Output format
- Repo Signals (short block)
- Target outcomes and SLOs
- Observability gaps and risks
- Options with pros/cons
- Recommendation and rationale
- Proposed dashboards/alerts/runbooks
- Open questions for the DEV

## Safety checks
- Do not log secrets or PII.
- Avoid high-cardinality labels.
- Ensure sampling does not hide critical errors.
- Guard against performance regression from logging.

## Dev confirmation gates
- Confirm SLO targets and critical paths.
- Approve telemetry data retention and privacy rules.
- Approve new deps or agents (APM).
- Approve dashboard/alert definitions before rollout.
