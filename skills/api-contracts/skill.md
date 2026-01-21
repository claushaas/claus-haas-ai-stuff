---
name: api-contracts
description: Definir contratos de API e limites tipados entre camadas. Use ao criar ou modificar endpoints, schemas ou integracoes.
---

## Name

api-contracts

## When to use

- Criacao ou mudanca de endpoints.
- Compartilhamento de schemas entre frontend/backend.
- Necessidade de validacao de inputs/outputs.

## Inputs required

- Consumers da API (frontend, parceiros, servicos).
- Requisitos de versionamento e compatibilidade.
- Formato de erro e padroes existentes.
- Se algo estiver faltando, parar e perguntar ao DEV.
Perguntas ao DEV:
- Quem consome esta API e com qual frequencia?
- Precisa de versionamento formal?
- Ha padrao de erro atual?

## Repo Signals

Preencher este bloco antes de qualquer plano. Se algo estiver Unknown, perguntar ao DEV.

- Stack: Node.js (package.json, type: module). Frameworks: Unknown.
- Convencoes: Unknown (nenhum lint/format detectado).
- Tests: script `test` placeholder, sem framework detectado.
- CI/CD: Unknown (sem `.github/workflows` detectado).
- Arquitetura: Unknown (sem `src/`/`packages/`; somente `/exemplos`).

## Process

1. Fazer Repo Scan e validar Repo Signals com o DEV. Perguntar: "Posso seguir assumindo estes sinais?"
2. Mapear superficies de API e contratos atuais. Perguntar: "Este mapa esta correto?"
3. Propor formato de contrato (schema, erros, versionamento). Perguntar: "Qual opcao devo seguir?"
4. Definir limites tipados e validacao. Perguntar: "Posso detalhar os schemas?"
5. Antes de aplicar mudancas na API, pedir OK. Perguntar: "Posso preparar as alteracoes?"

## Options & trade-offs

Option A: Contrato leve com schemas locais (Zod/JSON Schema) e validacao runtime.

- Pros: rapido, bom para evolucao incremental.
- Cons: menos padronizado para externos.

Option B: OpenAPI + codegen + versionamento formal.

- Pros: contrato formal e interoperavel.
- Cons: mais setup e manutencao.

## Recommendation

Recomendo Option A para o repo atual.
Racional:

- Nao ha sinais de infraestrutura de docs/CI para suportar codegen.
- Contrato leve permite evoluir rapido e introduzir validacao.
- Pode escalar para OpenAPI quando houver mais consumidores.

## Output format

- Repo Signals (bloco curto)
- Contrato proposto (request/response/erros)
- Politica de compatibilidade e versionamento
- Plano de rollout e validacao
- Perguntas para o DEV

## Safety checks

- Evitar breaking changes sem versionamento.
- Validar inputs e outputs em fronteiras.
- Nao expor dados sensiveis em erros.

## Dev confirmation gates

- Confirmar consumidores e compatibilidade.
- Aprovar formato de contrato e versionamento.
- Aprovar enforcement de validacao.
