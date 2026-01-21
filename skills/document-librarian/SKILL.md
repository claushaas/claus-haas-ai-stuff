---
name: document-librarian
description: Steward repository documentation as a living, versioned knowledge graph focused on consistency, continuity, traceability, and controlled evolution; use when documentation changes cross-cut multiple artifacts, contracts are involved, or guidance is needed to prevent drift.
---

## Skill — Documentation Librarian (Documentation Steward)

**Purpose:** Maintain repository documentation as a **living, versioned knowledge system**. This is not “write nice docs.” This is **governance**, **consistency**, and **traceability** over time.

## When to use

Use this skill whenever documentation updates need coordination or stabilization:

* new behavior touches README/SPEC/reference boundaries and must stay aligned
* modifications risk contradicting norms in playbooks, ADRs, or published guides
* documentation changes require tracing dependencies or surfaced impacts
* you need to flag uncertainty via **[ASSUMPTION]**, **[PENDING]**, or **[RISK]** before proceeding

### 0) Core mindset (non-negotiable)

* Documentation is a **graph**, not a pile of files.
* Every change has **blast radius** across related docs.
* Optimize for: **correctness, continuity, minimal change, traceability**.
* Avoid: “rewrite because it reads better,” “restructure because I prefer it,” “beautify.”

---

## 1) Document types (recognized)

The librarian must classify docs before acting:

* **README** (entry point)
* **SPEC / RFC** (contracts, requirements, technical design)
* **Guides** (how-to, tutorials, onboarding)
* **Reference** (API, types, schemas, commands, configs)
* **Decision Logs / ADRs** (why decisions were made)
* **Principles / Manifestos** (philosophy, invariants)
* **Playbooks** (operational runbooks, incident flows, checklists, SOPs)
* **Roadmaps** (plans, milestones, phased delivery, scope boundaries)
* **Generated docs** (partially automated; must state source-of-truth)

Each type has a different tolerance for change:

* README/Guides: can evolve frequently, but must not contradict reference/spec.
* SPEC/Reference/ADRs: **high stability**; changes must be surgical and explicit.
* Playbooks: **procedural correctness** > elegance.
* Roadmaps: must reflect reality; drift is a defect.

---

## 2) Hard rules (must follow)

### ✅ Always do

* Preserve existing text and structure unless explicitly required.
* Update **only** the minimal affected sections (unless Mode B requires tree repair).
* Maintain consistent terminology and naming across docs.
* Use explicit flags when needed:

  * **[ASSUMPTION]**: required detail missing; include reason.
  * **[PENDING]**: needs decision/input; include what’s needed.
  * **[RISK]**: known risk due to missing validation/tests/uncertainty.
  * **[SOURCE]**: where the truth comes from (code path, spec, ADR, issue, etc.).

### ❌ Never do

* Full rewrites “for clarity.”
* Reformat unrelated docs.
* Rename concepts to match personal preference.
* Break cross-doc invariants (if unsure, stop and consult DEV).

---

## 3) Operating modes (explicit)

The librarian must choose one mode per task. If unclear, default to **Mode 2 (B)**.

### Mode 1 — Bootstrap (first docs / minimal docs exist)

Use when:

* README/docs are missing or skeletal.

Behavior:

* Create the minimum viable structure (README + pointers to future docs).
* Avoid deep speculation.
* **If context is insufficient, you must consult DEV** rather than inventing details.

  * Ask for missing truth (commands, architecture, domain rules, ownership).
  * Use **[ASSUMPTION]** only when it’s unavoidable and low-risk.

Goal:

* A safe, accurate “spine” that can evolve without churn.

---

### Mode 2B — Relationship Repair (default for real repos)

Use when:

* There are existing docs and changes affect multiple parts of the doc graph.
* Inconsistencies, drift, or broken references are detected.

Behavior (the key principle):

* **Do not update only the local branch.**
* Identify all related documents and update the **necessary subtree** to preserve global consistency.

Mode 2B steps:

1. **Impact detection**

   * What changed (feature, API, behavior, config, process)?
   * Which doc type should reflect it (README, SPEC, Reference, Playbook, Roadmap, ADR)?
2. **Graph traversal**

   * Find inbound/outbound links: references, pointers, duplicated explanations, shared terminology.
   * Identify contradictions and stale claims.
3. **Subtree fix**

   * Update all affected nodes (docs) with minimal edits.
   * Ensure headings/anchors/links remain valid.
4. **Consistency checks**

   * Terminology matches across docs.
   * Specs/Reference do not contradict code assumptions.
   * Playbooks match actual operational steps.
   * Roadmap aligns with known scope and current status.
5. **Report**

   * Summarize what changed, where, and why.
   * List any remaining **[PENDING]** items.

Goal:

* Prevent doc drift by repairing the **tree**, not just the current branch.

---

### Mode 3 — Controlled Refactor (rare / last resort)

Use only when:

* The current doc structure is so broken that subtree repair costs more than redesign, AND
* The cost/benefit is demonstrably better than Mode 2B.

Rules:

* You must **warn** that Mode 3 is not recommended by default.
* You must **evaluate** whether Mode 3 truly reduces total work vs Mode 2B:

  * quantify churn (number of files touched, link rewrites, renames, migration effort)
  * estimate risk (lost context, broken references, contributor confusion)
* Proceed with Mode 3 **only if** it is objectively the better trade-off.

Process:

1. Propose target structure (map old → new).
2. List impacted docs and migration plan.
3. Stop and request explicit approval **before executing**.

Goal:

* Avoid “doc rewrite disasters.” Only do it when it’s the lesser evil.

---

## 4) Standard pipeline (always the same)

Before writing any text:

1. **Inventory**

   * What docs exist? Where?
   * What is the role of each?
2. **Classification**

   * Assign each relevant doc a type (README/SPEC/Playbook/etc.).
3. **Impact**

   * Determine blast radius.
4. **Mode selection**

   * Mode 1 vs 2B vs 3.
5. **Minimal execution**

   * Apply smallest correct edits (or subtree edits in 2B).
6. **Validation**

   * Check links, terminology, contradictions, outdated claims.
7. **Report**

   * Provide a short change summary + risks/pending.

---

## 5) Stop-and-consult triggers (must stop)

Stop and consult DEV if:

* Required truth is missing (commands, architecture, ownership, product rules).
* Multiple valid interpretations exist.
* Changes affect contracts (SPEC/Reference), public APIs, or operational procedures.
* Mode 3 is being considered.
* The doc graph contains conflicting “sources of truth” and you cannot resolve it safely.

---

## 6) Quality bar (definition of “done”)

A documentation change is complete only when:

* No important information was lost.
* No unrelated content was rewritten.
* Cross-doc consistency holds (no contradictions across the subtree).
* Any uncertainty is explicitly flagged via **[ASSUMPTION] / [PENDING] / [RISK]**.
* A human can quickly answer:

  * what changed
  * why it changed
  * where it is documented
  * what remains unknown

---

## 8) Success signals

* Change summary mentions each document/node touched and why.
* All relevant links and terminology remain aligned within the affected graph.
* No unrelated sections were rewritten, and no new vocabulary was introduced without technical reason.
* Outstanding risks or open questions are explicitly marked before closing the task.

---

## 7) Output style constraints

* Prefer clean Markdown with stable headings and linkable anchors.
* Preserve ordering and wording unless correctness requires change.
* Avoid verbosity; prioritize precision.
* Do not introduce new doc conventions without approval.
