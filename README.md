# Claus AI Stuff

Personal workspace to centralize AI-related assets I use daily: AGENTS.md templates, skills, and prompts.

## What this is

A curated home for:

- AGENTS.md templates for consistent agent instructions.
- Skill definitions used across tools and workflows.
- Prompts and helper scripts that support day-to-day AI work.

## What this is not

- Not a production-ready library or framework.
- Not a single runnable application.
- Not an authoritative spec for any external system.

## Status

Active, evolving alongside daily workflows.

## Quick start

- Install dependencies (optional, for repo tooling):

```bash
npm install
```

- Copy skills to a destination (overwrites existing skills with the same name):

```bash
npm run skills:sync -- --dest <path> <skill-name> [skill-name ...]
```

Example:

```bash
npm run skills:sync -- --dest ~/.codex/skills documentation-librarian
```

## Key concepts

- AGENTS.md templates keep agent behavior consistent.
- Skills are stored in `skills/` and copied by name using the CLI.
- Prompts are stored in `prompts/` as reusable snippets.
- The skills CLI always replaces existing destinations for the same skill name.

## Documentation map

- Templates: [`agents.md-template/`](agents.md-template/)
- Skills catalog: [`skills/`](skills/)
- Prompts: [`prompts/`](prompts/)
- Skills sync CLI: [`bin/`](bin/)

Repository contents (current)

| Item | Folder |
| --- | --- |
| `AGENTS.md` | [`./`](./) |
| `agents.md-template/AGENTS-md-template.md` | [`agents.md-template/`](agents.md-template/) |
| `bin/skills-sync.js` | [`bin/`](bin/) |
| `package.json` | [`./`](./) |
| `prompts/agent-md-update-or-create.md` | [`prompts/`](prompts/) |
| `skills/architecture-blueprint/SKILL.md` | [`skills/architecture-blueprint/`](skills/architecture-blueprint/) |
| `skills/api-contracts/SKILL.md` | [`skills/api-contracts/`](skills/api-contracts/) |
| `skills/build-ci-triage/SKILL.md` | [`skills/build-ci-triage/`](skills/build-ci-triage/) |
| `skills/data-migrations/SKILL.md` | [`skills/data-migrations/`](skills/data-migrations/) |
| `skills/dependency-upgrades/SKILL.md` | [`skills/dependency-upgrades/`](skills/dependency-upgrades/) |
| `skills/docs-adr/SKILL.md` | [`skills/docs-adr/`](skills/docs-adr/) |
| `skills/documentation-librarian/SKILL.md` | [`skills/documentation-librarian/`](skills/documentation-librarian/) |
| `skills/documentation-librarian/README.md` | [`skills/documentation-librarian/`](skills/documentation-librarian/) |
| `skills/documentation-librarian/references/ADR.standard.md` | [`skills/documentation-librarian/references/`](skills/documentation-librarian/references/) |
| `skills/documentation-librarian/references/DOCS-ARCHITECTURE.standard.md` | [`skills/documentation-librarian/references/`](skills/documentation-librarian/references/) |
| `skills/documentation-librarian/references/DOCS-GRAPH.format.md` | [`skills/documentation-librarian/references/`](skills/documentation-librarian/references/) |
| `skills/documentation-librarian/references/DOCS-HOME.standard.md` | [`skills/documentation-librarian/references/`](skills/documentation-librarian/references/) |
| `skills/documentation-librarian/references/DOCS-TAXONOMY.decision-table.md` | [`skills/documentation-librarian/references/`](skills/documentation-librarian/references/) |
| `skills/documentation-librarian/references/GENERATED-DOCS.standard.md` | [`skills/documentation-librarian/references/`](skills/documentation-librarian/references/) |
| `skills/documentation-librarian/references/GUIDE.standard.md` | [`skills/documentation-librarian/references/`](skills/documentation-librarian/references/) |
| `skills/documentation-librarian/references/MANIFESTO.standard.md` | [`skills/documentation-librarian/references/`](skills/documentation-librarian/references/) |
| `skills/documentation-librarian/references/PLAYBOOK.standard.md` | [`skills/documentation-librarian/references/`](skills/documentation-librarian/references/) |
| `skills/documentation-librarian/references/PRINCIPLES.standard.md` | [`skills/documentation-librarian/references/`](skills/documentation-librarian/references/) |
| `skills/documentation-librarian/references/README.md` | [`skills/documentation-librarian/references/`](skills/documentation-librarian/references/) |
| `skills/documentation-librarian/references/README.standard.md` | [`skills/documentation-librarian/references/`](skills/documentation-librarian/references/) |
| `skills/documentation-librarian/references/REFERENCE.standard.md` | [`skills/documentation-librarian/references/`](skills/documentation-librarian/references/) |
| `skills/documentation-librarian/references/ROADMAP.standard.md` | [`skills/documentation-librarian/references/`](skills/documentation-librarian/references/) |
| `skills/documentation-librarian/references/SPEC.standard.md` | [`skills/documentation-librarian/references/`](skills/documentation-librarian/references/) |
| `skills/documentation-librarian/references/graph.md` | [`skills/documentation-librarian/references/`](skills/documentation-librarian/references/) |
| `skills/observability-troubleshooting/SKILL.md` | [`skills/observability-troubleshooting/`](skills/observability-troubleshooting/) |
| `skills/performance-profiling/SKILL.md` | [`skills/performance-profiling/`](skills/performance-profiling/) |
| `skills/product-feedback-loop/SKILL.md` | [`skills/product-feedback-loop/`](skills/product-feedback-loop/) |
| `skills/readability-review/SKILL.md` | [`skills/readability-review/`](skills/readability-review/) |
| `skills/refactor-modularization/SKILL.md` | [`skills/refactor-modularization/`](skills/refactor-modularization/) |
| `skills/release-management/SKILL.md` | [`skills/release-management/`](skills/release-management/) |
| `skills/reliability-resilience/SKILL.md` | [`skills/reliability-resilience/`](skills/reliability-resilience/) |
| `skills/security-threat-review/SKILL.md` | [`skills/security-threat-review/`](skills/security-threat-review/) |
| `skills/test-strategy/SKILL.md` | [`skills/test-strategy/`](skills/test-strategy/) |

## Contributing

Open an issue or pull request with focused changes that keep the repository scope intact.

## License

MIT.

## Support / Contact

Use GitHub issues for questions or suggestions.
