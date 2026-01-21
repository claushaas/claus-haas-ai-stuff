---
name: release-management
description: Manage releases, deployments, and rollback strategy with clear versioning and environment policy. Use when planning or executing a release, or setting deployment workflow.
---

## Name

release-management

## When to use

- Planning a new release or deployment workflow.
- Defining versioning, release notes, or rollout steps.
- Troubleshooting failed deploys or rollback needs.
- Setting environment promotion (dev/staging/prod).

## Inputs required

- Current deployment targets and environments.
- Desired release cadence and risk tolerance.
- Branching model and versioning policy (if any).
- Rollback constraints and data migration needs.
- If any context is missing, stop and ask the DEV.
Questions for the DEV:
- What environments exist today and who deploys?
- Do you want tags/semver or date-based versions?
- What is the acceptable rollback window?
- Are there migrations tied to releases?

## Repo Signals

Fill this block before any plan. If something is Unknown, ask the DEV.

- Stack: Node.js (`package.json`, type: module). Frameworks: Unknown.
- Conventions: Unknown (no lint/format configs detected).
- Tests: `test` script placeholder, no framework detected.
- CI/CD: Unknown (no `.github/workflows` detected).
- Architecture: Unknown (no `src/` or `packages/`; only `/exemplos`).

## Process

1. Do a Repo Scan and confirm Repo Signals. Ask: "Can I proceed with these signals?"
2. Identify release goals and risk constraints. Ask: "Are these goals and risks correct?"
3. Map environments, promotion flow, and approvals. Ask: "Is this promotion flow correct?"
4. Propose at least 2 release workflows with trade-offs. Ask: "Which option should I detail?"
5. Define rollback strategy and release checklist. Ask: "Can I draft the checklist?"
6. Before changing workflows, confirm ownership and access. Ask: "Can I apply these changes?"

## Options & trade-offs

Option A: Lightweight releases (manual steps + tags + checklist).

- Pros: simple, quick to adopt, low setup cost.
- Cons: relies on humans, less consistency.

Option B: Automated releases (CI/CD + gated promotion).

- Pros: consistent, safer at scale.
- Cons: more setup, needs reliable tests.

## Recommendation

Recommend Option A as a starting point.
Rationale:

- Repo shows no CI/tests, making full automation risky.
- A checklist plus tagging adds structure immediately.
- Easier to iterate toward automation later.
- Reduces release friction while keeping rollback clear.

## Output format

- Repo Signals (short block)
- Release goals and constraints
- Environment and promotion flow
- Options with pros/cons
- Recommendation and rationale
- Release checklist and rollback plan
- Open questions for the DEV

## Safety checks

- Ensure rollback does not break data integrity.
- Avoid deploying without versioned artifacts.
- Keep migrations compatible with rollback window.
- Document owners for on-call and release approvals.

## Dev confirmation gates

- Confirm release cadence and versioning policy.
- Approve environment promotion steps.
- Approve rollback strategy and checklist.
- Approve any changes to CI/CD or deployment tooling.
