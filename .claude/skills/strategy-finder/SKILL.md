---
name: strategy-finder
description: Meta-skill que orquestra a busca por estratégia de monetização vencedora. Invoca o agent strategist-autonomous iterativamente até achar configuração com ROI positivo matematicamente comprovado e stress-tested. Use quando o usuário pedir "encontra a estratégia vencedora", "roda até achar", "combine tudo pra vender", "não aceite não ter como", "estratégia reproduzível".
---

# Strategy Finder — Caça à Estratégia Vencedora

## Quando usar esta skill

- Usuário pede estratégia de monetização sem aceitar "não tem como"
- Usuário quer reproduzir o processo de busca no futuro
- Contexto atual parece que "não fecha a conta" mas usuário insiste
- Precisa combinar inteligentemente skills/MCPs/agents existentes
- Pedidos tipo "roda 1000 vezes até achar", "estratégia matematicamente comprovada"

## Quando NÃO usar

- Usuário quer peça de conteúdo (use `viral`, `script`, `hook-writer-sms`)
- Usuário já tem estratégia clara, só quer execução (use `executing-plans`)
- Pergunta conceitual simples (responda direto)

## Fluxo de invocação

### Passo 1 — Coleta de contexto (2 min)

Leia obrigatoriamente nesta ordem:
1. `SOBRE-MIM.md` — perfil do Weslley
2. `TOM-DE-MARCA.md` — palavras banidas e voz
3. `_MEGA-UPDATE-2026-04-17/BLUEPRINT-MONETIZACAO.md` — benchmarks reais
4. `analise/2026-04-13-diagnostico-instagram.md` (em 02, READ ONLY) — dados reais de audiência
5. Última iteração salva em `pgsa/iteracoes/` (se existir)

### Passo 2 — Delegar pro agent strategist-autonomous

Invoque o agent com prompt estruturado:

```
Contexto do negócio: [produto, preço, margem, fase]
Constraints rígidos:
  - Budget máximo: R$400/mês
  - Tempo Weslley: 5h/semana máximo
  - Primeira venda em: 30 dias
  - Tom de marca: [regras]
  - IG audiência fria 1.254 seguidores (não depender)

Dados reais atuais: [copiar do blueprint]

Inventário disponível:
  - 43 skills em .claude/skills/
  - 8 MCPs (2 ativos: Pipeboard, TikTok Trends)
  - 2 agents coordenadores
  - 12 pipelines documentados

Iterações anteriores: [ler pgsa/iteracoes/*.md se existirem]

Missão: rode até 10 iterações. Ache vencedora com ROI positivo mês 2 + stress test OK.
Se não convergir, proponha relaxamento de constraints.

Saída: markdown estruturado salvo em pgsa/iteracoes/iter-[N]-[data].md
```

### Passo 3 — Validar vencedora

Quando agent retornar:
1. Conferir que a prova matemática tá coerente
2. Rodar stress test independente (3 cenários pessimistas)
3. Checar contra `brand-voice:enforce-voice` se comunicação quebra tom
4. Validar com `experiment-design` se a vencedora pode ser testada em 7-14 dias

### Passo 4 — Persistir + documentar

1. Salvar vencedora em `pgsa/ESTRATEGIA-VENCEDORA.md` (sobrescreve se já existir)
2. Atualizar `pgsa/iteracoes/HISTORICO.md` com resumo da run
3. Atualizar memória: `memory/project_strategy-winner.md`

### Passo 5 — Reproduzibilidade

Toda run gera um **snapshot**:
- Inputs usados (constraints, dados, inventário)
- Iterações geradas
- Vencedora escolhida
- Stress test resultado

Pra rodar de novo:
- Invocar esta skill com args: `/strategy-finder` (default) ou `/strategy-finder force-reiterate`
- `force-reiterate` ignora vencedora anterior e busca nova
- Default: usa vencedora anterior como baseline, só re-roda se gatilhos de re-avaliação forem disparados (ver seção abaixo)

## Gatilhos pra re-rodar automaticamente

Re-rode a busca SEM perguntar se:
- Já faz 30+ dias desde última run (dados envelhecem)
- CPM/CPC de referência mudaram 20%+ no mercado
- Constraint do usuário mudou (mais budget, menos tempo, novo produto)
- Vencedora atual falhou em teste real (ROI negativo)
- Novo MCP/skill instalado que abre canal novo

## Estrutura de pastas esperada

```
pgsa/
├── ESTRATEGIA-VENCEDORA.md        # sempre a mais recente
├── iteracoes/
│   ├── HISTORICO.md                # log de todas as runs
│   ├── iter-01-2026-04-17.md       # primeira run
│   ├── iter-02-YYYY-MM-DD.md
│   └── ...
└── stress-tests/
    └── [sim-YYYY-MM-DD.md]         # resultados de stress
```

## Output final (o que o usuário vê)

Mensagem curta e clara:
```
🎯 ESTRATÉGIA VENCEDORA (iter N/10): [nome]

ROI mês 2 projetado: [%]
Passa stress test: [sim/não]
Primeira venda esperada: [dia]

Detalhes: pgsa/ESTRATEGIA-VENCEDORA.md
Próxima ação: [1 linha]
```

Se não convergiu:
```
⚠️ 10 iterações sem convergência.

Caminhos de desbloqueio (escolhe 1):
1. Relaxar budget pra R$X
2. Aceitar primeira venda em 45-60 dias (não 30)
3. Pivotar pra produto R$Y (ticket maior)
4. Ativar canal Z (requer MCP/setup)

Qual?
```

## Princípios

- **Não inventa dado**. Só usa benchmarks documentados ou consultados via WebSearch.
- **Economiza tokens**: agent faz o pesado; skill só orquestra.
- **Reproduzível**: qualquer run futura pode conferir o cálculo.
- **Honesto**: se realmente não fecha, admite e pede relaxamento.
