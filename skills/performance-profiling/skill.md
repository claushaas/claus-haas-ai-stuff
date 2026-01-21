---
name: performance-profiling
description: Analise de performance e profiling com foco em gargalos, latencia e uso de recursos. Use quando houver lentidao, alto consumo ou metas de performance.
---

## Name
performance-profiling

## When to use
- Lentidao percebida por usuarios.
- Metas de latencia/throughput nao atendidas.
- Processos com alto consumo de CPU/memoria.
- Antes de otimizar por intuicao.

## Inputs required
- Metricas alvo (latencia, throughput, memoria).
- Ambiente de reproducao e dados de entrada.
- Perfil de carga esperado.
- Se algo estiver faltando, parar e perguntar ao DEV.
Perguntas ao DEV:
- Qual e a meta de performance e onde falha?
- Em qual ambiente devo medir?
- Ha logs ou traces existentes?
- Posso instrumentar o codigo temporariamente?

## Repo Signals
Preencher este bloco antes de qualquer plano. Se algo estiver Unknown, perguntar ao DEV.
- Stack: Node.js (package.json, type: module). Frameworks: Unknown.
- Convencoes: Unknown (nenhum lint/format detectado).
- Tests: script `test` placeholder, sem framework detectado.
- CI/CD: Unknown (sem `.github/workflows` detectado).
- Arquitetura: Unknown (sem `src/`/`packages/`; somente `/exemplos`).

## Process
1. Fazer Repo Scan e validar Repo Signals com o DEV. Perguntar: "Posso seguir assumindo estes sinais?"
2. Definir metricas e baseline. Perguntar: "Concorda com as metricas?"
3. Reproduzir e coletar dados (profile/trace). Perguntar: "Posso coletar essas metricas?"
4. Identificar top gargalos e propor opcoes. Perguntar: "Qual opcao devo detalhar?"
5. Antes de otimizar, confirmar trade-offs. Perguntar: "Posso aplicar a otimizacao escolhida?"

## Options & trade-offs
Option A: Quick wins (melhorias locais e baixo risco).
- Pros: rapido, pouco impacto.
- Cons: ganhos limitados.

Option B: Otimizacao estruturada (profiling profundo e refatoracao).
- Pros: ganhos maiores e duradouros.
- Cons: mais tempo e risco.

## Recommendation
Recomendo Option A enquanto nao houver baseline e testes de regressao.
Racional:
- Sinais indicam falta de testes/CI, o que aumenta risco de regressao.
- Quick wins permitem validar impacto sem grandes mudancas.
- Cria base de metricas para decidir proxima etapa.

## Output format
- Repo Signals (bloco curto)
- Metricas alvo e baseline
- Gargalos principais e evidencia
- Opcoes com impacto estimado
- Recomendacao e plano de verificacao

## Safety checks
- Evitar otimizar sem medir.
- Garantir que nao ha regressao funcional.
- Documentar impacto e como reverter.

## Dev confirmation gates
- Confirmar metas de performance.
- Aprovar instrumentacao e coleta de dados.
- Escolher opcao de otimizacao.
- Aprovar mudancas que afetem comportamento/UX.
