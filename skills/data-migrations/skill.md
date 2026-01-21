---
name: data-migrations
description: Plan and execute schema/data migrations safely with compatibility, backfills, and rollback. Use when changing data models, schemas, or storage.
---

## Name
data-migrations

## When to use
- Adding or changing database schema.
- Backfilling data or changing data formats.
- Migrating storage or indexes.
- Coordinating data changes with application releases.

## Inputs required
- Target schema or data model change.
- Current data volumes and access patterns.
- Downtime tolerance and rollback requirements.
- Migration tooling available (if any).
- If any context is missing, stop and ask the DEV.
Questions for the DEV:
- What data store and migration tool are in use?
- Is downtime allowed? If yes, how much?
- What data is critical and must be preserved?
- Are there SLAs for data availability?

## Repo Signals
Fill this block before any plan. If something is Unknown, ask the DEV.
- Stack: Node.js (`package.json`, type: module). Frameworks: Unknown.
- Conventions: Unknown (no lint/format configs detected).
- Tests: `test` script placeholder, no framework detected.
- CI/CD: Unknown (no `.github/workflows` detected).
- Architecture: Unknown (no `src/` or `packages/`; only `/exemplos`).

## Process
1. Do a Repo Scan and confirm Repo Signals. Ask: "Can I proceed with these signals?"
2. Define the current and target schemas. Ask: "Is this schema delta correct?"
3. Identify compatibility needs and read/write paths. Ask: "Are these paths correct?"
4. Propose at least 2 migration strategies with trade-offs. Ask: "Which option should I detail?"
5. Draft migration steps, validation, and rollback. Ask: "Can I prepare the runbook?"
6. Before executing, confirm backup and sequencing. Ask: "Can I proceed with the migration plan?"

## Options & trade-offs
Option A: Expand/contract (backward compatible, multi-step).
- Pros: safer rollouts, easier rollback.
- Cons: more steps and time.

Option B: Direct cutover (single-step migration).
- Pros: faster execution.
- Cons: higher risk and rollback complexity.

## Recommendation
Recommend Option A by default.
Rationale:
- Repo signals show limited testing/CI, so safer rollouts matter.
- Multi-step migrations reduce downtime risk.
- Compatible changes support rollback and phased deploys.
- Easier to validate data integrity step by step.

## Output format
- Repo Signals (short block)
- Schema delta and impacted flows
- Options with pros/cons
- Recommendation and rationale
- Migration runbook (steps, validation, rollback)
- Open questions for the DEV

## Safety checks
- Require backups and restore test plan.
- Validate data integrity before and after.
- Avoid long-running locks in peak traffic.
- Ensure old and new code can coexist during rollout.

## Dev confirmation gates
- Confirm data store, schema delta, and volumes.
- Approve migration strategy and downtime window.
- Approve backup and rollback plan.
- Approve execution order with release plan.
