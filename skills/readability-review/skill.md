---
name: readability-review
description: Revisao de codigo focada em legibilidade, manutencao e clareza. Use apos alteracoes de codigo, antes de merge ou ao revisar PRs.
---

## Name
readability-review

## When to use
- Revisar PRs por legibilidade e manutencao.
- Codigo com diffs grandes ou areas criticas.
- Antes de publicar APIs ou funcionalidades novas.
- Quando houver duvida sobre consistencia de estilo.

## Inputs required
- Diff/PR alvo e contexto funcional.
- Padroes internos (se existirem) ou guias de estilo.
- Areas de risco (seguranca, dados, performance).
- Se algo estiver faltando, parar e perguntar ao DEV.
Perguntas ao DEV:
- Qual e o objetivo principal da mudanca?
- Ha padroes locais que devo seguir?
- Quer foco em algo especifico (legibilidade vs performance)?

## Repo Signals
Preencher este bloco antes de qualquer plano. Se algo estiver Unknown, perguntar ao DEV.
- Stack: Node.js (package.json, type: module). Frameworks: Unknown.
- Convencoes: Unknown (nenhum lint/format detectado).
- Tests: script `test` placeholder, sem framework detectado.
- CI/CD: Unknown (sem `.github/workflows` detectado).
- Arquitetura: Unknown (sem `src/`/`packages/`; somente `/exemplos`).

## Process
1. Fazer Repo Scan e identificar convencoes reais. Perguntar: "Posso seguir estas convencoes?"
2. Ler diff e mapear risco por arquivo. Perguntar: "Ha arquivos que exigem prioridade?"
3. Revisar por legibilidade e manutencao (nomes, tamanho, acoplamento). Perguntar: "Posso sugerir ajustes pontuais?"
4. Classificar achados por severidade e impacto. Perguntar: "Quer que eu proponha refactors maiores?"
5. Se houver sugestao que altera design, pedir OK antes. Perguntar: "Posso abrir proposta de refactor?"

## Options & trade-offs
Option A: Revisao enxuta (top 5 problemas e fixes curtos).
- Pros: rapido, baixo custo, facil aplicar.
- Cons: pode deixar melhorias estruturais para depois.

Option B: Revisao profunda (inclui refactors e alinhamento de padroes).
- Pros: melhora manutencao no longo prazo.
- Cons: maior tempo, risco de escopo crescer.

## Recommendation
Recomendo Option A no repo atual.
Racional:
- Sem padroes formais e testes, revisoes profundas podem gerar risco.
- Revisao enxuta foca em problemas criticos e reduz churn.
- Mantem o fluxo de entrega enquanto se definem convencoes.

## Output format
- Repo Signals (bloco curto)
- Achados por severidade (arquivo, linha, impacto, fix)
- Sugeridos (nao bloqueantes)
- Perguntas e pontos de confirmacao
- Resumo curto do risco geral

## Safety checks
- Evitar sugerir refactors sem testes cobrindo.
- Nao impor estilo sem consenso do DEV.
- Checar efeitos colaterais em areas criticas.

## Dev confirmation gates
- Confirmar foco da revisao.
- Aprovar sugestoes que mudem estrutura ou API.
- Aprovar alteracoes de estilo em larga escala.
