---
name: dependency-upgrades
description: Gestao de dependencias e upgrades com foco em risco, compatibilidade e verificacao. Use ao atualizar pacotes, corrigir CVEs ou reduzir divida tecnica.
---

## Name
dependency-upgrades

## When to use
- Atualizar dependencias por CVE.
- Resolver conflitos de versao.
- Modernizar stack ou tooling.

## Inputs required
- Lista de pacotes alvo e motivo do upgrade.
- Tolerancia a breaking changes.
- Disponibilidade de testes e ambiente de staging.
- Se algo estiver faltando, parar e perguntar ao DEV.
Perguntas ao DEV:
- Quais pacotes sao prioridade?
- Aceita upgrades major agora?
- Ha janela de release ou freeze?

## Repo Signals
Preencher este bloco antes de qualquer plano. Se algo estiver Unknown, perguntar ao DEV.
- Stack: Node.js (package.json, type: module). Frameworks: Unknown.
- Convencoes: Unknown (nenhum lint/format detectado).
- Tests: script `test` placeholder, sem framework detectado.
- CI/CD: Unknown (sem `.github/workflows` detectado).
- Arquitetura: Unknown (sem `src/`/`packages/`; somente `/exemplos`).

## Process
1. Fazer Repo Scan e validar Repo Signals com o DEV. Perguntar: "Posso seguir assumindo estes sinais?"
2. Classificar dependencias por risco (major vs patch). Perguntar: "Estas prioridades estao corretas?"
3. Propor plano de upgrade em etapas. Perguntar: "Qual plano devo seguir?"
4. Antes de alterar versoes, pedir OK. Perguntar: "Posso atualizar os pacotes?"
5. Validar com build/test. Perguntar: "Posso executar as validacoes?"

## Options & trade-offs
Option A: Upgrades patch/minor com baixo risco.
- Pros: estabilidade, menos regressao.
- Cons: pode manter divida tecnica.

Option B: Upgrades major com migracao.
- Pros: acesso a novas features e fixes.
- Cons: maior risco e tempo.

## Recommendation
Recomendo Option A ate existirem testes/CI confiaveis.
Racional:
- Sinais mostram ausencia de testes, o que aumenta risco de regressao.
- Upgrades pequenos permitem validar impacto.
- Reduz probabilidade de breaking changes inesperadas.

## Output format
- Repo Signals (bloco curto)
- Matriz de upgrades (pacote, alvo, risco)
- Plano em etapas e comandos
- Checagens e rollback

## Safety checks
- Verificar changelog e breaking changes.
- Atualizar lockfile de forma controlada.
- Evitar upgrade de varias majors ao mesmo tempo.

## Dev confirmation gates
- Confirmar pacotes e versoes alvo.
- Aprovar upgrades major.
- Aprovar remocao/substituicao de dependencias.
