---
name: build-ci-triage
description: Triage de falhas de build e CI com foco em corrigir erros rapidamente com diffs minimos. Use quando build falhar localmente ou no CI.
---

## Name

build-ci-triage

## When to use

- `npm run build` ou job de CI falha.
- Erros de tipo, lint ou bundling.
- Falhas de dependencias ou configuracao.

## Inputs required

- Logs completos do erro e comando usado.
- Ambiente (local vs CI) e versoes.
- Ultimas mudancas relevantes.
- Se algo estiver faltando, parar e perguntar ao DEV.
Perguntas ao DEV:
- Pode compartilhar o log completo?
- O erro ocorre local e no CI?
- Houve mudancas recentes de dependencias?

## Repo Signals

Preencher este bloco antes de qualquer plano. Se algo estiver Unknown, perguntar ao DEV.

- Stack: Node.js (package.json, type: module). Frameworks: Unknown.
- Convencoes: Unknown (nenhum lint/format detectado).
- Tests: script `test` placeholder, sem framework detectado.
- CI/CD: Unknown (sem `.github/workflows` detectado).
- Arquitetura: Unknown (sem `src/`/`packages/`; somente `/exemplos`).

## Process

1. Fazer Repo Scan e validar Repo Signals com o DEV. Perguntar: "Posso seguir assumindo estes sinais?"
2. Reproduzir erro e isolar causa. Perguntar: "Posso assumir este passo de reproducao?"
3. Propor correcoes minimas (diff pequeno). Perguntar: "Posso aplicar esta correcao?"
4. Se precisar alterar config/CI, pedir OK. Perguntar: "Posso ajustar configuracoes?"
5. Validar com o mesmo comando do erro. Perguntar: "Posso executar a validacao?"

## Options & trade-offs

Option A: Fix minimo (corrigir erro especifico).

- Pros: rapido, baixo risco.
- Cons: nao resolve dividas estruturais.

Option B: Ajuste de tooling/config (modernizar build/CI).

- Pros: melhora estabilidade no longo prazo.
- Cons: maior risco e escopo.

## Recommendation

Recomendo Option A no repo atual.
Racional:

- Sem CI definido, mudancas amplas podem gerar incerteza.
- Fix minimo restabelece o fluxo rapidamente.
- Melhor estabilizar antes de modernizar.

## Output format

- Repo Signals (bloco curto)
- Resumo do erro e causa raiz
- Fix proposto (diff pequeno)
- Passos de validacao
- Riscos e follow-ups sugeridos

## Safety checks

- Evitar refactors nao relacionados.
- Verificar se a correcao nao mascara o problema.
- Garantir reprodutibilidade do build.

## Dev confirmation gates

- Confirmar reproducao e logs.
- Aprovar mudancas em configs/CI.
- Aprovar alteracoes de dependencias.
