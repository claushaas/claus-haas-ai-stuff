# Sistema Canônico de Match de Níveis Cognitivos

## 1) Finalidade
O sistema transforma a combinação:
- papel inicial (orientação de intenção),
- réguas cognitivas (posições 1–5),
em um **match** com níveis canônicos de comportamento.

Princípio registrado:
- o usuário **não escolhe diretamente um nível**;
- o sistema calcula match, aplica bloqueios, e retorna:
  - nível final (quando inequívoco), ou
  - conjunto reduzido (2–3) + correções locais (quando ambíguo), ou
  - bloqueio com pergunta mínima (quando incompatível).

## 2) Representação vetorial (base)
Representação registrada:
- usuário: vetor `U = (i, d, e, f, m)` (Inferência, Decisão, Escopo, Fonte, Meta)
- nível canônico: vetor `N_k`

## 3) Distância e score (visão técnica)
O cálculo descrito/implementado usa:
- **distância Manhattan ponderada**: Σ (peso_eixo × |U_eixo − N_eixo|)
- score normalizado (0..100) por distância/máximo

Pesos canônicos aparecem em artefatos (`canonical-prompt-generator.json` / `canonical-match.ts`):
- inferência: 1.0
- decisão: 1.5
- escopo: 1.2
- fonte: 1.5
- meta: 1.3

## 4) Prior do papel inicial (viés suave)
Existe um prior opcional que:
- dá um “boost” de score para alguns níveis, condicionado ao papel inicial;
- contribui até um máximo configurado (ex.: 0.15).

Lista de boosts aparece em `info/canonical-prompt-generator.json` e `info/canonical-match.ts`.

## 5) Bloqueios semânticos (hard blocks)
Há a noção de bloqueios duros com precedência sobre score.

Existem listas de bloqueios em múltiplas fontes:
- texto de projeto: `info/sistema-canonico-de-match-de-nivel-cognitivo.md`
- configuração: `info/canonical-prompt-generator.json` (`matching.hardBlocks`)
- implementação: `info/canonical-match.ts` (`getDefaultHardBlocks`)

Conflitos/diferenças entre listas são registrados em `09-open-issues-and-gaps.md`.

## 6) Thresholds e resultados
Thresholds canônicos aparecem em artefatos de configuração:
- `autoSelectMin`: 90
- `candidatesMin`: 70
- `blockBelow`: 70
- `maxCandidates`: 3

Comportamentos registrados:
- match forte: auto-seleção quando um nível é claramente dominante;
- match ambíguo: retorna candidatos e sugere correções;
- match fraco: bloqueia e solicita revisão (sem execução).

## 7) Correções locais (fallback controlado, sem loop)
Existe um mecanismo registrado para evitar loops e múltiplas chamadas:
- correções são deltas discretos;
- no máximo 2 réguas alteradas;
- magnitude máxima ±1 por régua;
- usuário escolhe uma correção (ou nenhuma);
- aplica uma vez e segue (sem novo ciclo de escolha).

Configurações e implementação aparecem em:
- `info/canonical-prompt-generator.json` (`matching.corrections`)
- `info/canonical-match.ts` (`suggestCorrectionsSafe`, `generateLocalDeltas`, `applyDelta`)

## 8) Nota sobre vetores dos níveis canônicos
Há divergências registradas entre:
- a tabela de vetores em `info/sistema-canonico-de-match-de-nivel-cognitivo.md`;
- os vetores em `info/canonical-prompt-generator.json` e `info/canonical-match.ts`.

Essas divergências são tratadas como conflito sem resolução em `09-open-issues-and-gaps.md`.

