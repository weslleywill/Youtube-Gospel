# SKILLS MAP — Tabela final de tudo instalado no 06

> Referência rápida de todas as skills + MCPs + em qual pipeline usar. Atualizado em 2026-04-17.

---

## 🧠 Skills locais em `.claude/skills/` (24 total)

### 🧑‍💼 Skills originais do 06 (16 — instaladas antes deste update)

| Skill | Origem | O que faz | Pipeline principal | Dependências |
|---|---|---|---|---|
| `ad-creative` | 02 (cópia) | Headlines/bodies/primary text por plataforma | 4, 5 | — |
| `claude-ads` | [AgriciDaniel/claude-ads](https://github.com/AgriciDaniel/claude-ads) | Suite 17 sub-skills audit+creative+strategy | 5, 8 | — |
| `competitive-ads-extractor` | ComposioHQ | Scrape ads concorrentes | 8 | Apify (opcional) |
| `copy` | tenfoldmarc/GitHub | 100+ frameworks copywriting | 2, 5, 6 | — |
| `copywriting` | 02 (cópia) | Landing pages + copy longo | 2, 6 | — |
| `cowork-session` | gyoung55 | /standup + /conclude | — | — |
| `create-viral-content` | 02 (cópia) | Hooks + mecânicas virais | 2, 10 | — |
| `email-sequence` | 02 (cópia) | Drip campaigns | 6 | — |
| `marketing-psychology` | 02 (cópia) | Gatilhos psicológicos | 6 | — |
| `memory` | SomeStay07 | /memory update/prune/reflect | — | — |
| `paid-ads` | 02 (cópia) | Strategy Meta/TikTok/Google | 5 | — |
| `repurpose` | tenfoldmarc/GitHub | URL reel → transcreve → reescreve | 3, 12 | yt-dlp, ffmpeg, whisper |
| `script` | tenfoldmarc/GitHub | Roteiros na voz real | 2, 10 | yt-dlp, ffmpeg, whisper, Apify |
| `social-content` | 02 (cópia) | Multi-canal + repurposing | 3, 12 | — |
| `spy` | tenfoldmarc/GitHub | Espiona Instagram concorrentes | 8 | Apify, yt-dlp, ffmpeg, whisper |
| `viral` | tenfoldmarc/GitHub | 10 ideias virais com pesquisa | 1 | Apify (opcional) |

### 📦 Skills trazidas de 02 neste update (4)

| Skill | Origem | O que faz | Pipeline principal | Dependências |
|---|---|---|---|---|
| `carousel-writer-sms` | 02 (cópia individual) | Reformata carrosseis por plataforma | 3 | — |
| `content-pattern-analyzer-sms` | 02 (cópia individual) | "Do More / Do Less" report | 4 | — |
| `hook-writer-sms` | 02 (cópia individual) | 9 padrões de hook validados | 2, 4, 5 | — |
| `performance-analyzer-sms` | 02 (cópia individual) | Reach/engagement/conversion | 4, 7 | — |

### 🌐 Skills clonadas do GitHub neste update (4)

| Skill | Repo | O que faz | Pipeline principal | Dependências |
|---|---|---|---|---|
| `claude-seo` | [AgriciDaniel/claude-seo](https://github.com/AgriciDaniel/claude-seo) | Suite 22 sub-skills SEO + GEO | 1, 12 | — |
| `hundred-million-offers` | [wondelai/skills](https://github.com/wondelai/skills) | Value Equation, offer, pricing (Hormozi) | 6 | — |
| `meta-ads-analyzer` | [mathiaschu/meta-ads-analyzer](https://github.com/mathiaschu/meta-ads-analyzer) | Breakdown Effect, Learning Phase | 5, 7 | — |
| `running-marketing-campaigns` | [SpillwaveSolutions/running-marketing-campaigns-agent-skill](https://github.com/SpillwaveSolutions/running-marketing-campaigns-agent-skill) | UTM hygiene, tracking, GEO | 5, 7 | — |

---

## 🔌 MCPs em `.mcp.json` (8)

### ✅ MCPs prontos pra uso (precisam só API key)

| MCP | Comando | Env vars | Pipeline |
|---|---|---|---|
| `pipeboard-meta-ads` | `npx mcp-remote` | `PIPEBOARD_API_TOKEN` | 5, 7 |
| `tiktok-trends` | `npx mcp-remote` | `TRENDSMCP_API_KEY` | 1 |
| `n8n` | `npx n8n-mcp` | `N8N_API_URL`, `N8N_API_KEY` | 9 |
| `shopify` | `npx shopify-mcp` | `SHOPIFY_CLIENT_ID`, `SHOPIFY_CLIENT_SECRET`, `SHOPIFY_STORE_DOMAIN` | Futuro |

### 🔧 MCPs que precisam setup (clone + build)

| MCP | Comando | Env vars | Setup adicional |
|---|---|---|---|
| `google-analytics` | `ga4-mcp-server` | `GA4_SERVICE_ACCOUNT_PATH`, `GA4_PROPERTY_ID` | `pip install google-analytics-mcp` + service account |
| `google-ads` | `python <path>/google_ads_server.py` | `GOOGLE_ADS_MCP_PATH`, `GOOGLE_ADS_DEVELOPER_TOKEN`, `GOOGLE_ADS_LOGIN_CUSTOMER_ID`, `GOOGLE_ADS_CREDENTIALS_PATH` | Clone repo + venv + OAuth |
| `tiktok-ads` | `python <path>/run_server.py` | `TIKTOK_ADS_MCP_PATH`, `TIKTOK_APP_ID`, `TIKTOK_APP_SECRET`, `TIKTOK_ACCESS_TOKEN` | Clone repo + `uv sync` + TikTok for Business |
| `whatsapp` | `uv run main.py` | `WHATSAPP_MCP_PATH` | Clone + Go bridge rodando separado + QR scan |

---

## 🚀 Pipelines (12) em `pipelines/`

| # | Arquivo | Objetivo | Skills usadas |
|---|---|---|---|
| 1 | `PIPELINE-VIRAL-RESEARCH.md` | Pesquisa de ideia pré-produção | `viral`, `spy`, `tiktok-trends-mcp`, `claude-seo` |
| 2 | `PIPELINE-PRODUCAO-CONTEUDO.md` | Ideia → roteiro → peça pronta | `script`, `hook-writer-sms`, `copywriting`, `create-viral-content` |
| 3 | `PIPELINE-REAPROVEITAMENTO.md` | 1 peça → 3 adaptações | `repurpose`, `social-content`, `carousel-writer-sms` |
| 4 | `PIPELINE-ORGANICO-TO-PAGO.md` | Post performando → ad | `performance-analyzer-sms`, `content-pattern-analyzer-sms`, `ad-creative` |
| 5 | `PIPELINE-ADS-MANAGEMENT.md` | Criar + monitorar + otimizar ads | `claude-ads`, `paid-ads`, `meta-ads-mcp`, `tiktok-ads-mcp`, `mcp-google-ads`, `meta-ads-analyzer` |
| 6 | `PIPELINE-FUNIL-DM.md` | Conteúdo → DM → venda | `copywriting`, `marketing-psychology`, `email-sequence`, `whatsapp-mcp`, `hundred-million-offers` |
| 7 | `PIPELINE-ANALYTICS.md` | Medir tudo | `google-analytics-mcp`, `pipeboard-meta-ads`, `running-marketing-campaigns`, `performance-analyzer-sms` |
| 8 | `PIPELINE-COMPETITIVE-INTEL.md` | Espiar concorrentes | `spy`, `competitive-ads-extractor`, `claude-ads /competitor` |
| 9 | `PIPELINE-AUTONOMO-FULL.md` | Orquestração n8n | `n8n-mcp`, `buffer-mcp` + todos anteriores |
| 10 | `PIPELINE-STORYTELLING-CONSTRUCAO.md` ⭐ | Erros reais → Soap Opera | `copywriting`, `create-viral-content`, `script` |
| 11 | `PIPELINE-PROVA-SOCIAL-UGC.md` ⭐ | DMs felizes → carrossel | `whatsapp-mcp`, `copywriting`, `carousel-writer-sms`, `marketing-psychology` |
| 12 | `PIPELINE-PINTEREST-ORGANICO.md` ⭐ | IG carrossel → Pinterest pin | `repurpose`, `social-content`, `claude-seo`, `copywriting` |

---

## 🤖 Agents em `.claude/agents/` (2)

| Agent | Disparo | Função |
|---|---|---|
| `monetization-coordinator` | Quando pedido for vago ("me ajuda a vender mais") | Decide qual pipeline rodar |
| `anti-desperdicio-tokens` | PreToolUse ou /verifica-skill | Flaga se Claude for responder sem invocar skill |

---

## 🧩 Skills de plugins Anthropic disponíveis (globais, não contam como "instaladas" no 06)

Podem ser usadas mas não são prioridade (skills locais do 06 vêm primeiro):

- `marketing:brand-review`, `marketing:campaign-plan`, `marketing:content-creation`, `marketing:draft-content`, `marketing:email-sequence`, `marketing:performance-report`, `marketing:seo-audit`, `marketing:competitive-brief`
- `sales:account-research`, `sales:forecast`, `sales:competitive-intelligence`, `sales:draft-outreach`
- `brand-voice:brand-voice-enforcement`, `brand-voice:guideline-generation`
- `content-humanizer`, `detect-ai`

---

## 🎯 Decisão rápida — qual skill pra qual task

### Quero ideias de conteúdo
→ `viral` + `tiktok-trends-mcp` (PIPELINE 1)

### Quero gravar vídeo
→ `script` (PIPELINE 2)

### Quero hook matador
→ `hook-writer-sms` (PIPELINE 2)

### Quero adaptar peça pra várias plataformas
→ `repurpose` + `social-content` (PIPELINE 3)

### Quero copy de ad
→ `ad-creative` + `claude-ads /creative` + `copy` (PIPELINE 5)

### Quero ver minha performance
→ `performance-analyzer-sms` + `pipeboard-meta-ads` MCP (PIPELINE 7)

### Quero espiar concorrente
→ `spy` + `competitive-ads-extractor` (PIPELINE 8)

### Quero ajustar preço ou oferta
→ `hundred-million-offers`

### Quero script de DM pra fechar venda
→ `copywriting` + `marketing-psychology` (PIPELINE 6)

### Quero contar uma história de erro meu
→ `copywriting` + frameworks Epiphany Bridge / Soap Opera (PIPELINE 10)

### Quero estratégia SEO pra blog futuro
→ `claude-seo`

### Pedido vago / não sei qual skill
→ agent `monetization-coordinator`

---

## 🔗 Links úteis

- **Mapa task → skill**: `../WHEN-TO-USE-WHAT.md`
- **Pipelines**: `../pipelines/`
- **Dashboard Obsidian**: `../_obsidian-setup/homepage.md`
- **Blueprint**: `BLUEPRINT-MONETIZACAO.md`
- **Checklist**: `CHECKLIST-30-60-90.md`
- **Expectativas**: `EXPECTATIVAS.md`
