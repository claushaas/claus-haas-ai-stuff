---
name: architecture-blueprint
description: Planejar arquitetura e design de sistema para novas features, refactors grandes e decisoes de longo prazo; use quando houver impacto em componentes, dados, integracoes ou escalabilidade.
---

## Name

architecture-blueprint

## When to use

- Nova feature com multiplos componentes ou fluxos de dados.
- Mudanca estrutural que afeta responsabilidades entre modulos.
- Decisoes de longo prazo (banco, cache, mensageria, deploy).

## Inputs required

- Objetivo da feature e metricas de sucesso.
- Requisitos nao funcionais (latencia, escala, confiabilidade, seguranca).
- Integracoes e dependencias externas.
- Restricoes (prazo, budget, compliance) e tolerancia a risco.
- Se algo estiver faltando, parar e perguntar ao DEV.
Perguntas ao DEV:
- Qual e o resultado esperado e quais metricas importam?
- Qual e a escala alvo e limites de latencia?
- Ha restricoes de stack ou plataforma?
- Qual e o nivel de risco aceitavel?

## Repo Signals

Preencher este bloco antes de qualquer plano. Se algo estiver Unknown, perguntar ao DEV.

- Stack: Node.js (package.json, type: module). Frameworks: Unknown.
- Convencoes: Unknown (nenhum lint/format detectado).
- Tests: script `test` placeholder, sem framework detectado.
- CI/CD: Unknown (sem `.github/workflows` detectado).
- Arquitetura: Unknown (sem `src/`/`packages/`; somente `/exemplos`).

## Process

1. Fazer Repo Scan e validar Repo Signals com o DEV. Perguntar: "Posso seguir assumindo estes sinais?"
2. Clarificar escopo e limites (in/out). Perguntar: "Este escopo esta correto?"
3. Identificar pontos criticos (dados, integracoes, falhas). Perguntar: "Ha outros pontos criticos?"
4. Propor pelo menos 2 opcoes de arquitetura com trade-offs. Perguntar: "Qual opcao devo seguir?"
5. Redigir proposta com componentes, fluxos e contratos. Perguntar: "Posso detalhar o plano e impactos?"
6. Antes de sugerir mudancas no repo, confirmar riscos e passos. Perguntar: "Posso preparar o plano de mudanca?"

## Options & trade-offs

Option A: Evolucao incremental (refinar o que existe).

- Pros: menor risco, menor custo, mais facil validar.
- Cons: pode manter divida tecnica, limites de escala.

Option B: Reestruturacao modular (novos limites e camadas).

- Pros: melhora isolamento, facilita evolucao.
- Cons: maior risco, mais trabalho, exige testes.

## Recommendation

Recomendo Option A no repo atual ate termos testes e CI definidos.
Racional:

- Sinais indicam ausencia de testes/CI, elevando risco de mudancas grandes.
- Estrutura do repo parece embrionaria, logo passos curtos sao mais seguros.
- Contratos claros podem ser definidos sem reestruturar tudo.
- Reduz custo de rollback se requisitos mudarem.

## Output format

- Repo Signals (bloco curto)
- Requisitos e suposicoes
- Opcoes com pros/cons e riscos
- Recomendacao com racional
- Esboco de componentes e fluxos
- Plano de mudanca em etapas pequenas
- Perguntas abertas para o DEV

## Safety checks

- Identificar impactos em compatibilidade e dados.
- Evitar breaking changes sem versionamento.
- Definir rollback e criterios de sucesso.
- Sinalizar risco de performance e seguranca.

## Dev confirmation gates

- Confirmar Repo Signals e escopo.
- Escolher uma das opcoes propostas.
- Aprovar qualquer quebra de compatibilidade.
- Aprovar migracoes de dados ou mudanca de storage.
- Aprovar plano final antes de alterar codigo.
