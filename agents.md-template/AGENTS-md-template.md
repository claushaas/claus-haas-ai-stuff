# AGENTS.md — Claus Standard

> **Primary principle**
> This file exists to allow an AI coding agent to work in this repository **without additional clarification**, executing real commands and respecting explicit constraints.

---

## 1. Ground rules (non-negotiable)

* Use **TypeScript in strict mode**, when applicable
* Prefer **simple, explicit, readable code** over clever abstractions
* Avoid implicit side effects
* Do not introduce new dependencies without clear justification
* Do not break public APIs without explicit alignment

If something is unclear, **stop and ask before proceeding**.

---

## 2. Environment and setup

* Install dependencies:

  ```bash
  <package-manager> install
  ```

* Start development environment:

  ```bash
  <package-manager> dev
  ```

If the project does not define these commands, **do not invent them**.

---

## 3. Code style

* Small, cohesive functions and components
* Explicit names > short names
* Prefer pure functions when possible
* Organize code by **feature**, not by type
* File and folder names in **English**
* Content (strings, docs, comments) must follow the language defined by the project

---

## 4. Typing and contracts

* Types are **contracts**, not suggestions
* Avoid `any`
* Prefer `unknown` with explicit narrowing
* Do not weaken types just to “make things pass”

If an existing type is incorrect:

* fix the type
* update its usages
* add tests when applicable

---

## 5. Testing and validation

* Always run:

  ```bash
  <package-manager> test
  ```

  before completing a task

* If no tests exist:

  * do not create a full test suite without confirmation
  * explicitly document introduced risks

* Meaningful new code **must include tests**, unless explicitly exempted

---

## 6. Linting, formatting, and quality

* Run:

  ```bash
  <package-manager> lint
  ```

  if available

* Do not modify lint rules without approval

* Do not reformat unrelated files without a technical reason

---

## 7. Commits and pull requests

* Small, focused commits
* Descriptive commit messages (no emojis)
* Do not mix refactors, features, and fixes in the same commit

---

## 8. Agent scope and self-control

* Do not implement improvements outside the requested scope
* Do not restructure folders without functional justification
* Do not rename things based on preference alone

If relevant technical debt is identified:

* describe it clearly
* propose a solution
* **do not implement without approval**

---

## 9. Security and data handling

* Never expose secrets
* Do not log sensitive data
* Do not copy external code without verifying its license

---

## 10. When to stop and ask

The agent **must stop and request confirmation** when:

* changes are architectural
* multiple valid approaches exist
* required commands are undefined
* naming decisions affect public APIs

---

## 11. Language rules

* Chat responses must be in Portuguese.
* All files written in the repository must be in English.

---

## Final note

> This repository values **clarity, predictability, and incremental evolution**.
> Speed without control becomes future bugs.
