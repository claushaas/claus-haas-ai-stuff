---
name: refactor-modularization
description: Refatoracao e modularizacao segura para reduzir acoplamento, duplicacao e complexidade. Use quando houver codigo grande, dependencias cruzadas ou necessidade de extrair modulos.
---

## Name
refactor-modularization

## When to use
- Arquivos grandes com muitas responsabilidades.
- Duplicacao de logica em varios modulos.
- Dependencias ciclicas ou acoplamento alto.
- Necessidade de separar camadas (API, dominio, infra).

## Inputs required
- Objetivo principal da refatoracao.
- Lista de comportamentos que nao podem mudar.
- Nivel de risco aceitavel e janela de entrega.
- Estado atual dos testes e tempo para cria-los.
- Se algo estiver faltando, parar e perguntar ao DEV.
Perguntas ao DEV:
- Qual area e prioridade?
- Quais comportamentos sao criticos?
- Posso criar testes de caracterizacao?
- Qual o limite de escopo por iteracao?

## Repo Signals
Preencher este bloco antes de qualquer plano. Se algo estiver Unknown, perguntar ao DEV.
- Stack: Node.js (package.json, type: module). Frameworks: Unknown.
- Convencoes: Unknown (nenhum lint/format detectado).
- Tests: script `test` placeholder, sem framework detectado.
- CI/CD: Unknown (sem `.github/workflows` detectado).
- Arquitetura: Unknown (sem `src/`/`packages/`; somente `/exemplos`).

## Process
1. Fazer Repo Scan e validar Repo Signals com o DEV. Perguntar: "Posso seguir assumindo estes sinais?"
2. Mapear hotspots (arquivos grandes, duplicacao, dependencias). Perguntar: "Quais hotspots priorizar?"
3. Definir invariantes e entradas/saidas. Perguntar: "Estas invariantes estao corretas?"
4. Propor opcoes de refatoracao com trade-offs. Perguntar: "Qual opcao devo seguir?"
5. Criar plano incremental com etapas pequenas e checkpoints. Perguntar: "Posso detalhar o plano e riscos?"
6. Antes de alterar codigo, confirmar escopo e rollback. Perguntar: "Posso iniciar as mudancas?"

## Options & trade-offs
Option A: Refatorar in-place, extraindo funcoes e modulos aos poucos.
- Pros: menor risco, diff pequeno, facil reverter.
- Cons: progresso mais lento, pode manter acoplamento temporario.

Option B: Extrair novo modulo com facade e migrar chamadas.
- Pros: clareza de limites, facilita testes.
- Cons: exige mapeamento completo, maior alteracao.

## Recommendation
Recomendo Option A no estado atual do repo.
Racional:
- Nao ha sinais de testes ou CI, o que torna mudancas amplas arriscadas.
- Estrutura atual parece pequena; ganhos podem vir de passos curtos.
- Facilita validar comportamento com testes de caracterizacao.
- Menor custo de rollback.

## Output format
- Repo Signals (bloco curto)
- Hotspots e invariantes
- Opcoes com trade-offs
- Recomendacao com racional
- Plano em etapas pequenas (com checkpoints)
- Plano de testes e verificacao
- Perguntas abertas para o DEV

## Safety checks
- Nao mudar comportamento sem teste cobrindo.
- Evitar renames massivos e mudancas cosmeticas.
- Manter APIs publicas ou versionar mudancas.
- Verificar dependencias ciclicas apos cada etapa.

## Dev confirmation gates
- Confirmar hotspots e invariantes.
- Escolher opcao de refatoracao.
- Aprovar criacao de novos modulos/pastas.
- Aprovar remocoes ou deprecacoes.
- Aprovar inicio das mudancas.
