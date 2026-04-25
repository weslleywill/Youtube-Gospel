---
name: wrap
description: "Fim de sessão — encadeia atualização STATE.md + log PLAN + SESSION_REPORT + commit sugerido. Substitui /conclude do cowork-session."
argument-hint: "[nota-opcional]"
allowed-tools:
  - Read
  - Edit
  - Write
  - Bash
  - Glob
  - Grep
---

# /wrap — Wrap-up GSD de fim de sessão

> Versão custom do Weslley. Encadeia o que o `/conclude` fazia + o que o `/gsd-session-report` faz + atualizações de STATE/PLAN que antes ficavam soltas.
>
> Uso: `/wrap` ou `/wrap uma nota curta do que mudou`

## Objetivo

Fechar a sessão sem deixar **nenhuma skill GSD solta**. Ao final:
- `.planning/STATE.md` master atualizado (próxima ação + últimos 3 eventos)
- `.planning/workstreams/<ws>/STATE.md` do workstream ativo atualizado
- `.planning/workstreams/<ws>/phases/<fase>/PLAN.md` com log do dia
- `.planning/reports/YYYY-MM-DD-session-report.md` gerado
- `session-logs/YYYY-MM-DD-session-log.md` gerado (compat com sistema antigo)
- Mensagem de commit sugerida pro usuário aprovar

## Execução (ordem)

### Passo 1 — Ler contexto atual

Ler em paralelo:
1. `.planning/STATE.md` (master) — pegar workstream ativo + fase atual
2. `.planning/workstreams/<ws>/STATE.md` (workstream) — pegar entregas pendentes
3. `.planning/workstreams/<ws>/phases/<fase>/PLAN.md` — pegar log do dia
4. `git log --oneline --since="24 hours ago" --no-merges` — commits
5. `git status --short` — arquivos modificados

### Passo 2 — Identificar o que foi feito NA SESSÃO

Não inventar. Basear em:
- Arquivos criados/modificados na sessão (git status + memória da conversa)
- Skills/MCPs invocados (lista explícita)
- Decisões de arquitetura tomadas
- Blockers resolvidos ou criados

Se não conseguir identificar pelo menos 1 entrega concreta, parar e perguntar ao usuário:
> "Não identifiquei entrega clara nesta sessão. Quer registrar mesmo assim com uma nota manual, ou pular o wrap?"

### Passo 3 — Atualizar `.planning/STATE.md` master

Editar:
- **Seção "Próxima ação"**: se mudou, substituir pela nova próxima ação (numerada 1., 2., 3.)
- **Seção "Últimos 3 eventos"**: inserir no topo uma linha nova `- **YYYY-MM-DD (turno)**: <resumo em 1-2 frases>`. Manter só os 3 mais recentes (remover o mais antigo).

Confirmar data do dia: `2026-04-23` (ou data atual via `date +%Y-%m-%d`).

### Passo 4 — Atualizar STATE.md do workstream ativo

Editar `.planning/workstreams/<ws>/STATE.md`:
- Adicionar entregas concluídas na seção "✅ Entregue até agora"
- Remover de "🔴 Pendente na fase atual" o que ficou pronto
- Se blocker novo apareceu, adicionar em "⚠️ Red flags hoje"

### Passo 5 — Log no PLAN.md da fase

Editar `.planning/workstreams/<ws>/phases/<fase>/PLAN.md` seção "Log de execução":
- Adicionar `### YYYY-MM-DD` se não existir
- Listar entregas com ✅ e pendências com ⏳

### Passo 6 — Gerar SESSION_REPORT

Criar `.planning/reports/YYYY-MM-DD-session-report.md` seguindo o template de `~/.claude/get-shit-done/workflows/session-report.md`:
- Session Summary (duração, progresso, commits, skills, agents)
- Work Performed (fases, entregas, decisões)
- Arquivos Changed (tabela)
- Blockers & Open Items
- Estimated Resource Usage
- Lições da sessão (o que foi aprendido / retrabalho / skills solta)

Se já existir report do dia, usar sufixo: `YYYY-MM-DD-session-report-2.md`, `-3.md`, etc.

### Passo 7 — Gerar session-log (compat sistema antigo)

Criar `session-logs/YYYY-MM-DD-session-log.md` (ou `-N.md` se já existir do dia). Formato enxuto — 5 blocos:
1. Sessão (data, duração, workstream/fase)
2. Entregas concretas
3. Decisões tomadas
4. Arquivos tocados
5. Próximos passos

### Passo 8 — Commit sugerido

NÃO commitar automaticamente. Mostrar ao usuário:

```
## 📦 Commit sugerido

git add .planning/ pgsa/roteiros/ .claude/ session-logs/
git commit -m "wrap YYYY-MM-DD: <1-linha do que mudou>"

Roda? (sim / ajusta mensagem / não)
```

### Passo 9 — Resumo final ao usuário

```
## ✅ /wrap executado

- STATE.md master: ✅ atualizado
- STATE workstream <ws>: ✅ atualizado
- PLAN.md fase <fase>: ✅ log dia atualizado
- SESSION_REPORT: `.planning/reports/YYYY-MM-DD-session-report.md`
- session-log: `session-logs/YYYY-MM-DD-session-log.md`

🔥 Próxima ação amanhã:
<cola aqui o primeiro item da nova "Próxima ação" do STATE.md>

🚦 Próximo gate:
<cola aqui o próximo gate do STATE.md>
```

## Argumentos opcionais

- `/wrap` — executa o fluxo completo lendo tudo do contexto
- `/wrap "voz gravada + thumb pronta"` — usa a string como título/resumo principal do report
- `/wrap --skip-commit` — gera tudo mas não mostra o bloco de commit sugerido
- `/wrap --quick` — só STATE + log + session-log (pula SESSION_REPORT longo)

## O que `/wrap` substitui

Este comando substitui invocar manualmente:
1. `/conclude` (cowork-session) — sistema antigo de wrap
2. `/gsd-session-report` — relatório GSD oficial
3. Edits manuais em `STATE.md` master e workstream
4. Edit manual em `PLAN.md` log do dia
5. Criação manual de `session-log`

Em vez de lembrar de 5 coisas → só `/wrap`.

## Anti-padrões (não fazer)

- ❌ Commitar sem aprovação do usuário
- ❌ Inventar entregas que não aconteceram na sessão (ver regra anti-alucinação)
- ❌ Sobrescrever SESSION_REPORT de outro dia
- ❌ Deletar linhas antigas de "Últimos 3 eventos" que ainda são relevantes (manter exatamente 3)
- ❌ Rodar se a sessão foi só "conversa" sem entrega real — nesse caso, perguntar primeiro
