# Eixos Ortogonais e Réguas Cognitivas

## 1) Tese central
Formulação registrada:
> O comportamento de uma IA diante de um pedido pode ser descrito como a posição ocupada em um conjunto de **eixos ortogonais** de controle cognitivo. Perfis/níveis são pontos pré-configurados nesse espaço.

## 2) Os 9 eixos ortogonais fundamentais (modelo completo)
O material descreve um conjunto “mínimo e suficiente” de eixos para caracterizar comportamento de uma IA generalista:

1. **Inferência** — a IA pode deduzir além do explícito?
2. **Decisão** — a IA pode escolher/priorizar/concluir?
3. **Escopo** — qual o alcance do impacto da atuação?
4. **Fonte (contexto/verdade)** — de onde a IA pode tirar informação válida?
5. **Meta (meta-cognição)** — atua apenas no conteúdo ou também no processo?
6. **Regime de Execução** — agir vs. preparar (compilação vs execução)
7. **Tolerância a Ambiguidade** — parar e perguntar vs. assumir
8. **Estilo de saída / formalidade** — forma de apresentação
9. **Responsabilidade por erros** — gestão de risco e salvaguardas

Resumo tabular registrado (visão de engenharia):

| Eixo | Controla | Extremo baixo | Extremo alto |
|---|---|---|---|
| Inferência | Dedução implícita | Nenhuma | Máxima |
| Decisão | Autoridade de escolha | Zero | Parcial/Alta |
| Escopo | Alcance da ação | Local | Sistêmico |
| Fonte | Verdade permitida | Fechada | Aberta |
| Meta | Atuar no processo | 0 | Máxima |
| Execução | Agir vs preparar | Não executar | Executar |
| Ambiguidade | Reação ao vago | Parar | Assumir |
| Estilo | Forma da saída | Formal | Expressiva |
| Responsabilidade | Gestão de risco | Usuário | IA |

## 3) Por que nem todos os eixos viram “réguas” na UX
O material estabelece uma distinção:
> Nem todo eixo deve ser exposto; alguns são melhor derivados, e outros são constitucionais/políticas.

Classificação registrada:

- **Eixos de intenção consciente (exponíveis)**: o usuário entende e consegue controlar sem alto erro.
- **Eixos derivados (inferidos)**: consequências de papel + réguas + nível; expor cria redundância e contradições.
- **Eixos constitucionais (fixos/políticas)**: segurança/governança; não devem ser configuráveis diretamente.

## 4) As 5 réguas cognitivas canônicas (projeções expostas)
O conjunto canônico de réguas expostas (Etapa 2) é descrito como:
- **Inferência**
- **Decisão**
- **Escopo**
- **Fonte**
- **Função Meta**

Um texto de especificação descreve cada régua como:
- pergunta na UX;
- 5 níveis (1–5);
- tradução para a IA (sinal comportamental).

Observação de rastreabilidade:
- A versão textual completa dessas réguas está em `info/reguas-cognitivas-canonicas.md`.
- A versão parametrizada para UI (labels/hints/aiMeaning) está em `info/canonical-prompt-generator.json` (seção `stage2_cognitiveRulers`).

## 5) Nota sobre limites constitucionais
Existe, em artefatos de configuração/implementação, a noção de **cap constitucional** para decisão (ex.: máximo permitido).

Esse ponto e suas possíveis divergências com outras descrições estão listados em `09-open-issues-and-gaps.md`.

