---
name: reliability-resilience
description: Improve reliability via timeouts, retries, circuit breakers, degradation, and fault isolation. Use when failures, timeouts, or dependency flakiness impact users.
---

## Name

reliability-resilience

## When to use

- External dependencies are flaky or slow.
- Timeouts or cascading failures appear.
- Need graceful degradation or fallback paths.
- Establish reliability targets and guardrails.

## Inputs required

- Critical paths and failure symptoms.
- Dependency map (external services, queues, caches).
- Current timeout/retry settings.
- Risk tolerance and SLO targets.
- If any context is missing, stop and ask the DEV.
Questions for the DEV:
- Which flows are most critical to uptime?
- What dependencies fail or slow down most?
- What is the acceptable error rate or latency?
- Can we degrade features under load?

## Repo Signals

Fill this block before any plan. If something is Unknown, ask the DEV.

- Stack: Node.js (`package.json`, type: module). Frameworks: Unknown.
- Conventions: Unknown (no lint/format configs detected).
- Tests: `test` script placeholder, no framework detected.
- CI/CD: Unknown (no `.github/workflows` detected).
- Architecture: Unknown (no `src/` or `packages/`; only `/exemplos`).

## Process

1. Do a Repo Scan and confirm Repo Signals. Ask: "Can I proceed with these signals?"
2. Map critical paths and dependencies. Ask: "Does this map reflect reality?"
3. Identify failure modes and blast radius. Ask: "Are these the main risks?"
4. Propose at least 2 resilience approaches with trade-offs. Ask: "Which option should I detail?"
5. Draft safeguards (timeouts, retries, fallbacks). Ask: "Can I outline these changes?"
6. Before implementing, confirm impact on UX and cost. Ask: "Can I proceed with these safeguards?"

## Options & trade-offs

Option A: Minimal safeguards (timeouts, bounded retries, basic fallbacks).

- Pros: fast, low complexity.
- Cons: limited protection under high load.

Option B: Full resilience (circuit breakers, bulkheads, queueing).

- Pros: strong isolation and stability.
- Cons: more complexity and operational overhead.

## Recommendation

Recommend Option A to start.
Rationale:

- Repo signals show limited testing/CI, so simpler changes are safer.
- Basic guardrails address the most common failure modes.
- Easier to measure impact and iterate.
- Provides foundation for later advanced patterns.

## Output format

- Repo Signals (short block)
- Critical paths and dependencies
- Failure modes and blast radius
- Options with pros/cons
- Recommendation and rationale
- Safeguard plan and validation steps
- Open questions for the DEV

## Safety checks

- Avoid infinite retries or unbounded backoff.
- Ensure fallbacks do not leak sensitive data.
- Protect against thundering herd during recovery.
- Validate timeouts do not break core flows.

## Dev confirmation gates

- Confirm critical paths and dependencies.
- Approve degradation or fallback behavior.
- Approve new infrastructure or middleware.
- Approve changes that affect user experience.
