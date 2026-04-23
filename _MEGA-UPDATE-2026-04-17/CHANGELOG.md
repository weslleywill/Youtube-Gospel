# CHANGELOG — MEGA UPDATE 2026-04-17
<!-- Atualizado em 2026-04-19 pós-sessão de infraestrutura/token-economy -->

---

## UPDATE 2026-04-19 — Infraestrutura / Token Economy / MCPs

### ➕ Adicionado

- **`ANTHROPIC-OFFICIAL-REFERENCE.md`** (raiz) — Referência canônica de features oficiais Anthropic: regra de batch/paralelismo como lei permanente, pilares Claude Code (Skills/Subagents/Hooks/Rules/MCPs/Memory), features não usadas (Routines, Channels, Remote Control), env vars, links oficiais.
- **`.claude/skills/frameworks/SKILL.md`** — Os 7 frameworks (AEI, BDA, PAS, Epiphany Bridge, Big Domino, Stack Slide, Soap Opera) como skill on-demand. Carrega só quando invocada.
- **`.claude/skills/instalar-skill/SKILL.md`** — Guia de instalação de skills (plugins Anthropic / GitHub / do zero). `disable-model-invocation: true`.
- **MCPs adicionados ao `.mcp.json`**:
  - `kindly-web-search` — busca + scraping em 1 tool call (SearXNG https://search.canine.tools + fallback Tavily automático)
  - `keywordtool-guest` — keyword research grátis via mcp-remote → keywordtool.io/guest (60 req/h, 120 req/dia)
  - **Total MCPs**: 13 configurados

### 🔧 Modificado

- **`CLAUDE.md`** — Removidas @imports pesadas (`@FRAMEWORKS.md`, `@INSTALAR-SKILLS.md`); adicionadas como skills on-demand; adicionado link a `ANTHROPIC-OFFICIAL-REFERENCE.md`; seção Tool Search Tool documentada; HTML comments em "Status atual".
- **`TOM-DE-MARCA.md`** — Removida seção de distribuição AEI (~500 tokens); mantida só diretriz de marcação + pointer pra skill `/frameworks`.
- **`.mcp.json`** — Mantido bloco `toolSearchTool` manual (inofensivo); ativação real via env var `ENABLE_TOOL_SEARCH=true` (setx executado).

### ⚙️ Configuração de sistema

- **`ENABLE_TOOL_SEARCH=true`** setado via `setx` (Windows, persistente). Ativa Tool Search Tool nativo (lazy loading de MCPs). **Requer restart do Claude Code pra efetivar.**

### 📊 Totais atualizados (pós 2026-04-19)

- **Skills locais**: ~48 (incluindo frameworks e instalar-skill)
- **MCPs configurados**: 13
- **Tokens economizados/sessão**: ~3.5k (remoção de @imports pesados)

---

> O que mudou tecnicamente na pasta 06. Pra Claude e Weslley.

## ➕ Adicionado

### Skills copiadas de 02-estrategia-conteudo (4)
Copiadas como arquivos individuais. A pasta 02 permanece intocada (read-only).

- `.claude/skills/carousel-writer-sms/` — reformatar carrosseis por plataforma
- `.claude/skills/hook-writer-sms/` — 9 padrões de hook validados
- `.claude/skills/performance-analyzer-sms/` — análise reach/engagement/conversion
- `.claude/skills/content-pattern-analyzer-sms/` — "Do More / Do Less" report

### Skills clonadas do GitHub (4)

- `.claude/skills/hundred-million-offers/` — Hormozi: value equation, bonus stacking, offer naming (192 KB). Origem: [wondelai/skills](https://github.com/wondelai/skills).
- `.claude/skills/claude-seo/` — Suite SEO com 22 sub-skills (6.4 MB). Origem: [AgriciDaniel/claude-seo](https://github.com/AgriciDaniel/claude-seo).
- `.claude/skills/running-marketing-campaigns/` — UTM hygiene, tracking URLs, GEO (390 KB). Origem: [SpillwaveSolutions/running-marketing-campaigns-agent-skill](https://github.com/SpillwaveSolutions/running-marketing-campaigns-agent-skill).
- `.claude/skills/meta-ads-analyzer/` — Breakdown Effect + Learning Phase expert (167 KB). Origem: [mathiaschu/meta-ads-analyzer](https://github.com/mathiaschu/meta-ads-analyzer).

### MCPs configurados em `.mcp.json` (8)

Todos com placeholders de env var. Weslley preenche conforme for ativando.

| MCP | Status | Config | Env vars |
|---|---|---|---|
| `pipeboard-meta-ads` | pronto | npx mcp-remote | PIPEBOARD_API_TOKEN |
| `tiktok-trends` | pronto | npx mcp-remote | TRENDSMCP_API_KEY |
| `n8n` | pronto | npx n8n-mcp | N8N_API_URL, N8N_API_KEY |
| `shopify` | pronto | npx shopify-mcp | SHOPIFY_CLIENT_ID, SHOPIFY_CLIENT_SECRET, SHOPIFY_STORE_DOMAIN |
| `google-analytics` | precisa `pip install google-analytics-mcp` | ga4-mcp-server | GA4_SERVICE_ACCOUNT_PATH, GA4_PROPERTY_ID |
| `google-ads` | precisa clone local | python <path>/google_ads_server.py | GOOGLE_ADS_MCP_PATH, GOOGLE_ADS_DEVELOPER_TOKEN, GOOGLE_ADS_LOGIN_CUSTOMER_ID, GOOGLE_ADS_CREDENTIALS_PATH |
| `tiktok-ads` | precisa clone local | python <path>/run_server.py | TIKTOK_ADS_MCP_PATH, TIKTOK_APP_ID, TIKTOK_APP_SECRET, TIKTOK_ACCESS_TOKEN |
| `whatsapp` | precisa clone + Go bridge | uv run main.py | WHATSAPP_MCP_PATH |

### Pipelines criados (12 + 1 README)

Em `pipelines/`:

- PIPELINE-VIRAL-RESEARCH.md (pesquisa de ideia)
- PIPELINE-PRODUCAO-CONTEUDO.md (ideia → roteiro → peça)
- PIPELINE-REAPROVEITAMENTO.md (1 peça → 3 adaptações)
- PIPELINE-ORGANICO-TO-PAGO.md (post performando vira ad)
- PIPELINE-ADS-MANAGEMENT.md (criar + monitorar + otimizar)
- PIPELINE-FUNIL-DM.md (conteúdo → DM → venda)
- PIPELINE-ANALYTICS.md (medir tudo)
- PIPELINE-COMPETITIVE-INTEL.md (espiar concorrentes)
- PIPELINE-AUTONOMO-FULL.md (orquestração n8n end-to-end)
- PIPELINE-STORYTELLING-CONSTRUCAO.md ⭐ (erros reais → Soap Opera)
- PIPELINE-PROVA-SOCIAL-UGC.md ⭐ (DMs felizes → carrossel)
- PIPELINE-PINTEREST-ORGANICO.md ⭐ (IG carrossel → Pinterest pin)
- README.md (índice dos 12)

Total: ~2.088 linhas, ~105 KB.

### Dashboard Obsidian (17 arquivos)

Em `_obsidian-setup/`:

- `homepage.md` — navegação + snapshot mensal + foco + alertas
- `dashboards/` (7): ads-performance, funil-vendas, receita, plataformas, concorrentes, pipelines, skills-e-mcps
- `_templates/` (6): nova-campanha-ad, novo-teste-ab, nova-venda-dm, nova-peca-distribuida, novo-snapshot-analytics, nova-auditoria-concorrente
- `config/` (3): README (setup), PLUGINS-OBSIDIAN, CSS-SNIPPET

Total: ~116 KB. Plugins necessários (críticos): Dataview, Templater, QuickAdd.

### Agents criados (2)

- `.claude/agents/monetization-coordinator.md` — orquestra pipelines quando pedido é vago
- `.claude/agents/anti-desperdicio-tokens.md` — flaga quando Claude vai responder sem invocar skill

### Sistema de auto-guidance (3)

- `WHEN-TO-USE-WHAT.md` (raiz) — tabela task → skill/pipeline
- `CLAUDE.md` atualizado com seção "🚨 REGRA OBRIGATÓRIA"
- `.claude/settings.local.json` com hook `SessionStart` que imprime contexto + lembrete

### Entregáveis finais (8)

Em `_MEGA-UPDATE-2026-04-17/`:

- README.md (índice)
- CHANGELOG.md (este arquivo)
- COMO-USAR.md
- EXPECTATIVAS.md
- BLUEPRINT-MONETIZACAO.md
- CHECKLIST-30-60-90.md
- SKILLS-MAP.md
- BACKLOG-FUTURO.md

## ❌ Removido

- `GUIA-INSTALACAO-SKILLS.txt` (duplicata)
- `Guia de instalação.txt` (0 bytes, vazio)

## 🔒 Intocado (por regra)

- `02-estrategia-conteudo/` — pasta sagrada, read-only
- `dashboard-skills/` — Next.js deprecado em favor do Obsidian, mantido intocado

## 🛠️ Dependências do sistema

Validadas:
- ✅ yt-dlp 2026.03.17
- ✅ ffmpeg 8.1
- ✅ Node v24.14.1
- ✅ Python 3.13.13
- ✅ Whisper (instalado durante este update)

## 📊 Totais do update

- **Skills totais no 06 após update**: ~24 (16 originais + 4 de 02 + 4 de GitHub)
- **MCPs configurados**: 8 (4 prontos com API key, 4 precisam setup manual)
- **Pipelines**: 12
- **Arquivos Obsidian**: 17
- **Agents**: 2
- **Entregáveis**: 8

## 🎯 Próximos passos pro Weslley

Ler [COMO-USAR.md](COMO-USAR.md) e [CHECKLIST-30-60-90.md](CHECKLIST-30-60-90.md).
