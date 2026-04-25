# Session Log — 2026-04-19

## Session Summary

Sessão focada em infraestrutura e economia de tokens: ativou o Tool Search Tool nativo da Anthropic (env var `ENABLE_TOOL_SEARCH=true`), instalou dois novos MCPs (`kindly-web-search` e `keywordtool-guest`), converteu dois blocos pesados de @import para skills on-demand (`/frameworks` e `/instalar-skill`), e criou `ANTHROPIC-OFFICIAL-REFERENCE.md` documentando features oficiais + regra de batch como lei permanente. Total: 13 MCPs configurados, ~3.5k tokens/sessão economizados nas @imports.

## What Changed

### Files Created
- `.claude/skills/frameworks/SKILL.md` — Todos os 7 frameworks (AEI, BDA, PAS, Epiphany Bridge, Big Domino, Stack Slide, Soap Opera) como skill on-demand. Antes carregava via @FRAMEWORKS.md em toda sessão (~2.5k tokens sempre). Agora carrega só quando invocada.
- `.claude/skills/instalar-skill/SKILL.md` — Guia de instalação de novas skills (Opção 1: plugins Anthropic / Opção 2: GitHub / Opção 3: do zero). Frontmatter com `disable-model-invocation: true` (só manual). Antes via @INSTALAR-SKILLS.md.
- `ANTHROPIC-OFFICIAL-REFERENCE.md` — Referência canônica das features oficiais Anthropic: Regra 1 (paralelismo/batch como regra obrigatória), todos os pilares (Skills/Subagents/Hooks/Rules/MCPs/Memory), features ainda não usadas (Routines, Channels, Remote Control), env vars úteis, links oficiais. HTML comment no rodapé demonstrando técnica de metadata invisível.

### Files Modified
- `.mcp.json` — Adicionados `kindly-web-search` (SearXNG https://search.canine.tools + fallback Tavily) e `keywordtool-guest` (mcp-remote → keywordtool.io/guest). Total: 13 MCPs configurados.
- `CLAUDE.md` — Removidas as @imports pesadas (`@FRAMEWORKS.md` e `@INSTALAR-SKILLS.md`); adicionadas como skills contextuais on-demand (`/frameworks`, `/instalar-skill`); adicionado link a `ANTHROPIC-OFFICIAL-REFERENCE.md`; adicionada seção "Tool Search Tool — ATIVO" documentando hot skills vs lazy loading; HTML comment em "Status atual" pra não consumir tokens.
- `TOM-DE-MARCA.md` — Removida seção completa de distribuição AEI (~500 tokens de exemplos e explicação). Mantida só a diretriz de marcação obrigatória `[AEI: X]` + pointer pra skill `/frameworks`. Racional: conteúdo duplicado vivia no FRAMEWORKS.md; agora centralizado na skill.

### Files Moved/Deleted
- Nenhum

## Decisions Made

- **Tool Search Tool via env var, não .mcp.json manual**: A sessão anterior havia adicionado um bloco `toolSearchTool` manual no .mcp.json. Isso estava errado — o mecanismo correto é env variable `ENABLE_TOOL_SEARCH=true` (feature nativa Anthropic). Rodado `setx ENABLE_TOOL_SEARCH true` via Bash (Windows). O bloco .mcp.json permanece como config morta inofensiva.

- **Kindly MCP com SearXNG público**: Opção escolhida — SearXNG instance pública (`search.canine.tools`) como backend primário, Tavily como fallback automático. Racional: Weslley argumentou corretamente que instabilidade de instância pública é mitigada pelo fallback automático do Kindly. Benefício: combina busca + scraping em 1 tool call (vs 2 calls separados com Tavily + Firecrawl).

- **keywordtool-guest como solução de keyword research padrão**: Instalado via `mcp-remote → https://mcp.keywordtool.io/guest`. Zero setup, zero API key, zero limite mensal. Sugestões Google + Bing autocomplete, volume das 5 primeiras. Racional: testadas 4-5 opções; todas com custo ou setup complexo. keywordtool-guest funciona out-of-the-box. Upgrade pra Google Keyword Planner real fica pendente (ver Open Threads).

- **@imports pesados viram skills on-demand**: FRAMEWORKS.md e INSTALAR-SKILLS.md deixaram de carregar em toda sessão. Economia estimada: ~3.5k tokens/sessão, ~35k tokens/dia (10 sessões). Racional: procedimentos → skills. Fatos sempre verdadeiros → CLAUDE.md. Regra documentada no próprio ANTHROPIC-OFFICIAL-REFERENCE.md.

- **ANTHROPIC-OFFICIAL-REFERENCE.md como lei de sessão**: Criado para registrar (1) regra de batch como non-negotiable, (2) inventário de pilares Claude Code disponíveis, (3) features ainda não utilizadas pra referência futura. Estratégia: arquivo pequeno em disco em vez de bloco grande no CLAUDE.md — link + pointer é suficiente pra Claude carregar quando precisar.

## Context & Discussion

- **Tool Search Tool estava mal configurado desde 2026-04-17**: A configuração manual em .mcp.json (`toolSearchTool: { implementation: "bm25_20251119", hotTools: [...] }`) era um artefato de sessão anterior. O mecanismo real é env var nativa. Sessões futuras devem assumir que Tool Search Tool tá ativo via env var (requer restart do Claude Code pra efetivar).

- **Kindly busca + scraping em 1 chamada**: Em vez de `tavily_search` + `firecrawl_scrape` em sequência (2 round-trips), Kindly faz os dois em 1. Isso é relevante especialmente nas skills `spy`, `viral`, `repurpose` que dependem de pesquisa + extração de conteúdo.

- **Google Ads: conta ≠ API access**: Weslley confirmou ter conta Google Ads. Mas isso não implica ter developer token (processo de aprovação separado no Google) nem OAuth2 configurado. A discussão terminou inconclusiva — ver Open Threads.

- **Limites do keywordtool-guest**: 60 req/hora, 120 req/dia. Volume das primeiras 5 sugestões grátis. Suficiente pra uso orgânico/planejamento de conteúdo. Para volume exato em escala de ads pago, precisaria de Google Keyword Planner real.

- **HTML comments em CLAUDE.md são invisíveis ao Claude**: `<!-- ... -->` é stripped pela Anthropic antes de injetar no contexto. Técnica documentada em ANTHROPIC-OFFICIAL-REFERENCE.md. Usada pra metadata de "última atualização" e seções de detalhe que humano precisa ver mas Claude não precisa carregar toda sessão.

## Open Threads

- **RESTART OBRIGATÓRIO**: Claude Code precisa ser reiniciado pra ativar os 3 itens: `ENABLE_TOOL_SEARCH=true`, `kindly-web-search` MCP, `keywordtool-guest` MCP. Sem restart, os MCPs novos não aparecem e Tool Search Tool não ativa.

- **Google Ads Keyword Planner (decisão pendente)**: Weslley tem conta Google Ads. Para ativar o `google-ads` MCP com dados reais de volume de busca, precisa: (1) developer token aprovado (`ads.google.com/aw/apicenter`), (2) projeto GCP com OAuth2, (3) cartão de crédito na conta Google Ads. Se tiver tudo isso → vale configurar `ncosentino/google-keyword-planner-mcp` ou o `google-ads` já no .mcp.json. Se não tiver → `keywordtool-guest` é suficiente pra agora.

- **Verificar Tool Search Tool funcionando pós-restart**: Depois de reiniciar Claude Code, confirmar que MCPs estão sendo carregados on-demand (não todos na boot). Indicador: contexto de sessão menor + MCPs aparecem só quando chamados.

- **Execução V6+ continua de 2026-04-18**: Weslley está na semana 0 (começo 2026-04-20). Open threads de execução (VSL, LP Carrd, Meta Ads, ebooks Amazon, Canal Telegram) estão documentados no session-log de 2026-04-18 e no `pgsa/TRACKER-V6-PLUS.md`.

## Cross-Project Handoffs

None this session. Todas as mudanças ficaram em 06-distribuicao-e-monetização (infraestrutura/MCPs/skills). Pasta 02-estrategia-conteudo READ-ONLY respeitada.

## Current State After This Session

Infraestrutura da pasta 06 otimizada: Tool Search Tool ativo, 13 MCPs configurados (2 novos: Kindly + keywordtool-guest), @imports pesados convertidos em skills on-demand, referência de features oficiais Anthropic documentada. O projeto está em fase de EXECUÇÃO V6+ (iniciando 2026-04-20) — a infraestrutura desta sessão serve essa execução. Próxima sessão deve focar em check-in de execução da semana 1 V6+ (VSL gravado? LP no ar? Meta Ads rodando?) ou configurar credenciais Google Ads se Weslley confirmar que tem developer token.

<!-- session-state
date: 2026-04-19
type: infrastructure-token-economy-mcp-installation
files_created:
  - .claude/skills/frameworks/SKILL.md
  - .claude/skills/instalar-skill/SKILL.md
  - ANTHROPIC-OFFICIAL-REFERENCE.md
files_modified:
  - .mcp.json
  - CLAUDE.md
  - TOM-DE-MARCA.md
decisions_made: 5
open_threads: 4
handoffs_pending: []
priority_changes: false
status_updated: false
next_session_focus: "Check-in semana 1 execução V6+ (2026-04-20+): VSL gravado? LP Carrd no ar? Meta Ads rodando? Primeiros leads? OU setup Google Ads Keyword Planner se Weslley confirmar developer token + cartão."
session-state -->
