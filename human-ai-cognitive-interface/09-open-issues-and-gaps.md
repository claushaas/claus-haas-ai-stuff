# Conflitos, Lacunas e Perguntas em Aberto (sem resolução)

Este documento registra divergências e lacunas **já existentes** na Fonte de Verdade (`info/`), sem tentar resolvê-las.

## 1) Papéis iniciais: lista de 8 vs lista reduzida em artefato
Fontes relevantes:
- `info/lista-canonica-de-papeis-iniciais.md` (8 papéis)
- `info/canonical-prompt-generator.json` (`stage1_initialRole.options`, 6 opções)
- `info/canonical-match.ts` (`InitialRoleId` inclui extensões `role.research` e `role.execute`)

Pergunta mínima em aberto:
- Qual é o conjunto canônico final de papéis expostos ao usuário (e qual é o conjunto interno/estendido)?

## 2) Régua “Decisão”: escala 1–5 vs cap constitucional ≤ 3
Fontes relevantes:
- `info/reguas-cognitivas-canonicas.md` (Decisão com 5 níveis até “apoio decisório forte”)
- `info/canonical-prompt-generator.json` (`ruler.decision.scale` marca 4/5 como “não usar”/“proibido” e define `constitutionalCap: 3`)
- `info/canonical-match.ts` (`decisionMaxAllowed: 3` + bloqueio para decision >= 4)

Pergunta mínima em aberto:
- A régua “Decisão” é (a) 1–5 com 4/5 permitidos, ou (b) 1–5 com 4/5 proibidos por design, ou (c) 1–3 na prática?

## 3) Vetores de níveis canônicos: divergência (especialmente N7 e N8)
Fontes relevantes:
- `info/sistema-canonico-de-match-de-nivel-cognitivo.md` (tabela de vetores)
- `info/canonical-prompt-generator.json` (`matching.canonicalLevels.levels[].vector`)
- `info/canonical-match.ts` (`getDefaultCanonicalLevels`)

Observação registrada:
- N7 e N8 aparecem com vetores diferentes entre texto e artefatos (config/código).

Pergunta mínima em aberto:
- Qual tabela é a canônica (texto, JSON, ou código) — e como reconciliar semântica e implementação?

## 4) Bloqueios semânticos: listas não idênticas entre texto e artefatos
Fontes relevantes:
- `info/sistema-canonico-de-match-de-nivel-cognitivo.md` (lista “não-exaustiva” de bloqueios)
- `info/canonical-prompt-generator.json` (`matching.hardBlocks.rules`)
- `info/canonical-match.ts` (`getDefaultHardBlocks`)

Pergunta mínima em aberto:
- A lista de bloqueios canônica é a do texto, a do JSON, a do código, ou uma união com prioridades definidas?

## 5) “role” em critérios de derivação menciona valores não presentes em outras fontes
Fonte relevante:
- `info/criteria-derivation-algorithm.md` (Regra R2 menciona `role` ∈ {dev, code, arquitetura, implementação})

Pergunta mínima em aberto:
- Esses valores de `role` existem como papéis válidos no sistema (internos ou futuros), ou são placeholders conceituais?

## 6) Referências internas no documento de eixos/regras
Fonte relevante:
- `info/eixos-ortogonais-e-reguas-cognitivas.md` contém marcações do tipo `:contentReference[...]`.

Pergunta mínima em aberto:
- Essas marcações devem permanecer como parte do texto canônico, ou são resíduos de exportação que precisam de limpeza/normalização?

