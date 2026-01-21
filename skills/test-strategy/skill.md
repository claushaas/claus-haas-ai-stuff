---
name: test-strategy
description: Definir estrategia de testes (unit, integration, e2e) baseada em risco e maturidade do repo. Use quando faltar cobertura ou ao planejar novas features.
---

## Name

test-strategy

## When to use

- Repositorio sem testes ou cobertura insuficiente.
- Nova feature critica ou refactor grande.
- Definir padroes de testes e ferramentas.

## Inputs required

- Fluxos criticos e areas de maior risco.
- Prazo e budget para testes.
- Ambiente de execucao (local/CI).
- Se algo estiver faltando, parar e perguntar ao DEV.
Perguntas ao DEV:
- Quais fluxos sao mais criticos?
- Qual o prazo para obter cobertura minima?
- Qual ferramenta prefere (se existir)?

## Repo Signals

Preencher este bloco antes de qualquer plano. Se algo estiver Unknown, perguntar ao DEV.

- Stack: Node.js (package.json, type: module). Frameworks: Unknown.
- Convencoes: Unknown (nenhum lint/format detectado).
- Tests: script `test` placeholder, sem framework detectado.
- CI/CD: Unknown (sem `.github/workflows` detectado).
- Arquitetura: Unknown (sem `src/`/`packages/`; somente `/exemplos`).

## Process

1. Fazer Repo Scan e validar Repo Signals com o DEV. Perguntar: "Posso seguir assumindo estes sinais?"
2. Mapear riscos e priorizar areas. Perguntar: "Esta prioridade faz sentido?"
3. Propor matriz de testes por camada. Perguntar: "Qual abordagem prefere?"
4. Definir cobertura minima e criterios de aceite. Perguntar: "Concorda com os criterios?"
5. Antes de adicionar tooling, pedir OK. Perguntar: "Posso adicionar ferramentas de teste?"

## Options & trade-offs

Option A: Base minima (smoke + unit para pontos criticos).

- Pros: rapido, baixo custo.
- Cons: cobertura limitada.

Option B: Piramide completa (unit + integration + e2e).

- Pros: alta confiabilidade.
- Cons: mais tempo e manutencao.

## Recommendation

Recomendo Option A como ponto de partida.
Racional:

- Sinais mostram ausencia de testes e CI, entao comecar pequeno reduz risco.
- Permite criar base de testes e evoluir para integration/e2e.
- Evita bloquear entregas enquanto estrutura testes.

## Output format

- Repo Signals (bloco curto)
- Matriz de testes (area x tipo)
- Backlog priorizado de testes
- Comandos e ferramentas sugeridos
- Criterios de aceite e coverage alvo

## Safety checks

- Evitar testes flakey; preferir determinismo.
- Isolar dependencias externas com mocks.
- Garantir que testes nao bloqueiem o fluxo de dev.

## Dev confirmation gates

- Confirmar fluxos criticos.
- Aprovar cobertura minima.
- Aprovar adicao de ferramentas/dep.
