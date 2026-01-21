---
name: docs-adr
description: Atualizacao de documentacao e ADRs para decisoes arquiteturais. Use quando houver mudanca de design, novas features ou necessidade de registrar decisoes.
---

## Name

docs-adr

## When to use

- Decisao arquitetural relevante.
- Mudanca de fluxo, API ou infraestrutura.
- Necessidade de atualizar README ou guias.

## Inputs required

- Publico alvo da documentacao.
- Escopo da mudanca e impactos.
- Local atual de docs (se existir).
- Se algo estiver faltando, parar e perguntar ao DEV.
Perguntas ao DEV:
- Quem e o publico principal (devs internos, usuarios)?
- Quais docs precisam ser atualizados?
- Quer ADR formal ou nota curta?

## Repo Signals

Preencher este bloco antes de qualquer plano. Se algo estiver Unknown, perguntar ao DEV.

- Stack: Node.js (package.json, type: module). Frameworks: Unknown.
- Convencoes: Unknown (nenhum lint/format detectado).
- Tests: script `test` placeholder, sem framework detectado.
- CI/CD: Unknown (sem `.github/workflows` detectado).
- Arquitetura: Unknown (sem `src/`/`packages/`; somente `/exemplos`).

## Process

1. Fazer Repo Scan e validar Repo Signals com o DEV. Perguntar: "Posso seguir assumindo estes sinais?"
2. Identificar docs existentes e lacunas. Perguntar: "Estas lacunas estao corretas?"
3. Propor escopo de docs/ADR. Perguntar: "Qual escopo devo seguir?"
4. Redigir estrutura e checklist de atualizacao. Perguntar: "Posso produzir o rascunho?"
5. Antes de publicar/alterar docs, pedir OK. Perguntar: "Posso aplicar as mudancas?"

## Options & trade-offs

Option A: Docs minimas + ADR curto.

- Pros: rapido, baixo custo.
- Cons: menos detalhe.

Option B: Docs completas + codemap/guia.

- Pros: onboarding melhor e menos duvidas.
- Cons: alto custo de manutencao.

## Recommendation

Recomendo Option A no estado atual do repo.
Racional:

- Estrutura do repo e simples e sem sinais de docs existentes.
- Melhor registrar decisoes e criar base minima primeiro.
- Facil de manter e evoluir conforme o projeto cresce.

## Output format

- Repo Signals (bloco curto)
- Lista de docs alvo e objetivo
- ADR (titulo, contexto, decisao, consequencias)
- Checklist de atualizacao
- Perguntas para o DEV

## Safety checks

- Evitar docs que nao reflitam o codigo real.
- Sinalizar impacto de mudancas em usuarios.
- Manter consistencia com terminologia do repo.

## Dev confirmation gates

- Confirmar publico alvo e escopo.
- Aprovar conteudo do ADR.
- Aprovar publicacao/merge de docs.
