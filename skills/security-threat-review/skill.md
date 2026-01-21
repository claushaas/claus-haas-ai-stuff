---
name: security-threat-review
description: Revisao de seguranca e threat modeling pragmatico para endpoints, auth, dados sensiveis e integracoes. Use quando houver entrada de usuario, autenticacao, dados sensiveis ou pagamentos.
---

## Name

security-threat-review

## When to use

- Novos endpoints, auth ou controle de acesso.
- Manuseio de dados sensiveis (PII, tokens).
- Integracoes externas ou webhooks.
- Antes de releases importantes.

## Inputs required

- Lista de ativos sensiveis e fluxos criticos.
- Modelo de autenticacao/autorizacao atual.
- Ambientes e politicas (compliance, logs, retention).
- Se algo estiver faltando, parar e perguntar ao DEV.
Perguntas ao DEV:
- Quais dados sao mais sensiveis?
- Qual e o modelo de acesso (roles, tenants)?
- Ha requisitos de compliance?
- Qual e o risco aceitavel?

## Repo Signals

Preencher este bloco antes de qualquer plano. Se algo estiver Unknown, perguntar ao DEV.

- Stack: Node.js (package.json, type: module). Frameworks: Unknown.
- Convencoes: Unknown (nenhum lint/format detectado).
- Tests: script `test` placeholder, sem framework detectado.
- CI/CD: Unknown (sem `.github/workflows` detectado).
- Arquitetura: Unknown (sem `src/`/`packages/`; somente `/exemplos`).

## Process

1. Fazer Repo Scan e validar Repo Signals com o DEV. Perguntar: "Posso seguir assumindo estes sinais?"
2. Mapear ativos, atores e fronteiras de confianca. Perguntar: "Este mapa esta correto?"
3. Identificar superficies de ataque (inputs, APIs, arquivos). Perguntar: "Ha outras entradas?"
4. Propor mitigacoes para top riscos. Perguntar: "Quais mitigacoes posso detalhar?"
5. Se houver mudanca de auth/fluxo, pedir OK antes. Perguntar: "Posso seguir com alteracoes de seguranca?"

## Options & trade-offs

Option A: Threat review rapido + checklist OWASP Top 10.

- Pros: rapido, encontra riscos comuns.
- Cons: pode perder ameacas especificas.

Option B: Threat model completo (STRIDE/abuse cases) + testes de seguranca.

- Pros: cobertura profunda e sistematica.
- Cons: mais tempo e custo.

## Recommendation

Recomendo Option A no repo atual, com foco em riscos de entrada de dados.
Racional:

- Sinais mostram falta de testes/CI, logo estrategia leve reduz risco de bloqueio.
- Repo parece inicial; melhor criar base de seguranca primeiro.
- OWASP Top 10 cobre riscos mais provaveis neste estagio.

## Output format

- Repo Signals (bloco curto)
- Mapa de ativos e fronteiras
- Lista de riscos por severidade (impacto + mitigacao)
- Recomendacao e passos prioritarios
- Perguntas abertas e decisao de risco do DEV

## Safety checks

- Nunca expor segredos em logs ou exemplos.
- Evitar mudancas de auth sem plano de rollout.
- Validar inputs em todas as fronteiras.

## Dev confirmation gates

- Confirmar ativos sensiveis e fronteiras.
- Aprovar mitigacoes com impacto em UX/permissao.
- Aprovar aceitacao de risco quando nao houver fix imediato.
