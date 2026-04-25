# Session Log — 2026-04-17 (4)

## Session Summary
Setup manual de 2 MCPs do FALTA-FAZER: Pipeboard Meta Ads (item 5) e TikTok Trends (item 4). Ambos com env vars setadas via PowerShell executado pelo Claude. Weslley deixou claro que não é programador e prefere execução direta — aprendizado salvo em memória pra próximas sessões. 6 MCPs restantes adiados pra fases futuras.

## What Changed

### Files Created
- `~/.claude/projects/.../memory/project_mcps-pendentes.md` — status de configuração dos 8 MCPs (2 ativos, 6 pendentes) com env vars necessárias e ordem de prioridade
- `~/.claude/projects/.../memory/feedback_nao-programador.md` — regra pra executar comandos shell direto via Bash em vez de pedir pro Weslley abrir terminal

### Files Modified
- `~/.claude/projects/.../memory/MEMORY.md` — adicionados 2 pointers pros novos arquivos de memória
- `~/.claude/projects/.../memory/project_mcps-pendentes.md` — adicionado alerta sobre possível mismatch de URL Pipeboard (nova UI mostra URL com query param, .mcp.json usa URL antiga com header Bearer)

### Environment Variables Set (Windows User scope)
- `PIPEBOARD_API_TOKEN` — Pipeboard Meta Ads MCP
- `TRENDSMCP_API_KEY` — TikTok Trends MCP

### Files Moved/Deleted
- Nenhum.

## Decisions Made
- **Ativar 2 MCPs fáceis agora, adiar 6 complexos:** Pipeboard + TikTok Trends têm setup de 10-15 min cada e ajudam em skills já ativas (ad-creative, viral). Os outros 6 (Google Ads, Google Analytics, TikTok Ads, n8n, WhatsApp, Shopify) dependem de fases futuras do funil e exigem 1-2h de setup cada — não faz sentido configurar agora.
- **Claude executa PowerShell pelo Weslley:** ele pediu explicitamente "agiliza minha vida". Comando `setx` via `powershell -Command` rodado direto pelo Bash tool, sem copy/paste manual.
- **Tokens não entram em memória/logs:** env vars são secrets, ficam só no Windows. Memory files referenciam só o prefixo (`pk_48a6bd...`) sem o token completo — na revisão final removi até o prefixo do memory file principal.

## Context & Discussion
- Weslley já tinha conta Pipeboard e passou pelo OAuth do GitHub antes de entrar na parte do API token — confusão inicial entre "login" vs "API token" resolvida orientando URL direta https://pipeboard.co/api-tokens.
- A UI atual do Pipeboard entrega URL no formato `https://meta-ads.mcp.pipeboard.co/?token=pk_xxx`. O `.mcp.json` neste projeto usa URL antiga `https://mcp.pipeboard.co/meta-ads-mcp` + header `Authorization: Bearer`. Se `/mcp` mostrar desconectado após reinício, trocar a config pro formato novo.
- Confirmado que o MCP Apify é **global** (aparece como `mcp__Apify__*` na lista de ferramentas), não precisa configurar nesta pasta.

## Open Threads
- **Reiniciar Claude Code** pra ativar Pipeboard + TikTok Trends — Weslley disse que não consegue agora ("tenho de trabalhar daqui a pouco"), vai reiniciar depois.
- **Verificar conexão Pipeboard pós-reinício** com `/mcp`. Se aparecer desconectado → trocar URL no `.mcp.json` (ver alerta em `project_mcps-pendentes.md`).
- **6 MCPs pendentes** (Shopify, GA, Google Ads, TikTok Ads, n8n, WhatsApp) — ordem documentada em `project_mcps-pendentes.md`.
- **Itens 1-3 e 12-14 do FALTA-FAZER.md continuam abertos** (ativar Obsidian, testar 1 pipeline, finalizar ebook, investigar pasta duplicada, validar dashboards, teste anti-desperdício).

## Cross-Project Handoffs
- None this session.

## Current State After This Session
Setup de MCPs da pasta 06 avançou de 0/8 pra 2/8 ativos (falta só o reinício do Claude Code pra conectar). Os 2 ativados são os que mais impactam o trabalho atual (Meta Ads + tendências TikTok). Prioridade próxima sessão: reiniciar, confirmar conexão via `/mcp`, e focar em item 1 do FALTA-FAZER (ativar Obsidian) ou rodar um pipeline de teste pra validar que o sistema tá funcional end-to-end.

<!-- session-state
date: 2026-04-17
type: mcp-setup-execution
files_created:
  - ~/.claude/projects/.../memory/project_mcps-pendentes.md
  - ~/.claude/projects/.../memory/feedback_nao-programador.md
files_modified:
  - ~/.claude/projects/.../memory/MEMORY.md
  - ~/.claude/projects/.../memory/project_mcps-pendentes.md
decisions_made: 3
open_threads: 4
handoffs_pending: []
priority_changes: false
status_updated: false
next_session_focus: "reiniciar Claude Code, validar /mcp mostra Pipeboard + TikTok Trends conectados, próximo: item 1 FALTA-FAZER (Obsidian) ou teste de pipeline"
session-state -->
