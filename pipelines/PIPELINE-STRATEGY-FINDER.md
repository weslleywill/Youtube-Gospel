# PIPELINE: Strategy Finder

> **Objetivo**: encontrar estratégia de monetização vencedora (ROI+ stress-tested) via busca iterativa. Reprodutível.

## Quando invocar

- "Encontre estratégia vencedora"
- "Rode até achar"
- "Não aceite não tem como"
- "Combine tudo pra vender"
- Mensalmente (re-avaliação recorrente do que tá rodando)

## Quem orquestra

**Skill**: `strategy-finder` (em `.claude/skills/`)
**Agent**: `strategist-autonomous` (em `.claude/agents/`)

## Passos (S0–S7)

### S0 — Detectar gatilho
Usuário pediu "estratégia vencedora" ou "roda até achar" → invocar `strategy-finder`.

### S1 — Coletar contexto
Ler:
- `SOBRE-MIM.md`, `TOM-DE-MARCA.md`, `FRAMEWORKS.md`
- `_MEGA-UPDATE-2026-04-17/BLUEPRINT-MONETIZACAO.md`
- `analise/2026-04-13-diagnostico-instagram.md` (02, read-only)
- `pgsa/iteracoes/HISTORICO.md` (se existir)

Output: dossier de inputs consolidado.

### S2 — Validar constraints
Confirmar com usuário (ou assumir defaults):
- Budget máximo/mês (default: R$400)
- Tempo/semana (default: 5h)
- Primeira venda máx (default: 30 dias)
- Aceita relaxar? (default: não, mas avisa se bloquear)

### S3 — Invocar agent iteration loop
Delegar pro `strategist-autonomous` com brief estruturado (ver SKILL.md).

Agent roda até 10 iterações. Cada iteração:
- Gera 20-30 hipóteses
- Simula matemática
- Filtra por gates
- Stress-testa top 3
- Declara vencedora ou itera

### S4 — Verificar convergência
- **Se convergiu** (vencedora passa stress test) → S5
- **Se não convergiu em 10 iter** → S7 (desbloqueio)

### S5 — Validar vencedora
- `brand-voice:enforce-voice` → checar comunicação da vencedora
- `experiment-design` → plano de validação 7-14 dias
- `assumption-mapper` → riscos + mitigação
- `growth-loops` → vencedora tem loop? (sustentável)

### S6 — Persistir
Salvar:
- `pgsa/ESTRATEGIA-VENCEDORA.md` — sempre a mais recente
- `pgsa/iteracoes/iter-[N]-[YYYY-MM-DD].md` — snapshot da run
- `pgsa/iteracoes/HISTORICO.md` — log atualizado
- `memory/project_strategy-winner.md` — pointer na memória

### S7 — Desbloqueio (se não convergiu)
Apresentar 3-4 opções de relaxamento de constraints, usuário escolhe. Re-rodar S3 com novos parâmetros.

## Skills usadas ao longo do pipeline

| Passo | Skill |
|---|---|
| S1 | Read tools |
| S3 | Agent strategist-autonomous invoca: `value-vs-effort`, `hundred-million-offers`, `monetization-strategy`, `marketing-ideas`, `growth-loops` |
| S5 | `brand-voice:enforce-voice`, `experiment-design`, `assumption-mapper`, `validating-ideas` |
| S6 | Write tools |

## MCPs usados (se disponíveis)

- `pipeboard-meta-ads` — dados reais de CPM Meta BR se conectado
- `tiktok-trends` — sinais de conteúdo viralizando
- `Apify` — scrape Meta Ads Library / competidores
- `WebSearch` — benchmarks externos fresh

## Output esperado

```
🎯 ESTRATÉGIA VENCEDORA (iter N/10): [nome]
ROI mês 2: [%]
Stress test: [sim/não]
Arquivo: pgsa/ESTRATEGIA-VENCEDORA.md
```

## Gatilhos de re-avaliação automática

Pipeline **se auto-agenda** quando:
- 30+ dias desde última run
- Constraint mudou
- Vencedora falhou em teste real
- Novo canal/ferramenta instalado

Re-agendar via `schedule` skill ou lembrar no próximo `/standup`.

## Reprodutibilidade

- Inputs registrados
- Hipóteses salvas
- Cálculos reproduzíveis
- Qualquer terceiro pode conferir a prova

## Custo estimado por run

- Tokens: ~80-150k (1 agent + skills leves + web search)
- Tempo humano Weslley: 2-5 min (só aprovar constraints + ler resultado)
- Wall clock: 3-5 min de execução
