# 06 — Distribuição e Monetização

> **Objetivo**: Adaptar conteúdo pra cada plataforma (IG, YouTube, TikTok), criar anúncios (Meta Ads, TikTok Ads, Google Ads) e monetizar via ebook + funil orgânico.

## 🧠 GSD CÉREBRO CENTRAL — ativo desde 2026-04-23

> **REGRA CRÍTICA**: antes de responder tarefa de planejamento, roadmap, "onde estou", ou "próxima ação" → **LER `.planning/STATE.md`** primeiro.

Estrutura `.planning/`:
- [.planning/PROJECT.md](.planning/PROJECT.md) — visão master (fonte única da verdade)
- [.planning/STATE.md](.planning/STATE.md) — onde estou HOJE
- [.planning/ROADMAP.md](.planning/ROADMAP.md) — fases + gates
- [.planning/REQUIREMENTS.md](.planning/REQUIREMENTS.md) — catálogo de deliverables
- [.planning/workstreams/gospel/](.planning/workstreams/gospel/) — ATIVO (fase 00-fundacao)
- [.planning/workstreams/fitness/](.planning/workstreams/fitness/) — HIBERNANDO

**Comandos úteis** (skills GSD instaladas globais):
- `/gsd-progress` — fase atual + próxima ação + dias pro gate
- `/gsd-next` — próxima ação concreta
- `/gsd-audit-milestone <fase>` — validar gate antes de avançar
- `/gsd-plant-seed` — capturar ideia futura em `.planning/seeds/`

**Integração com sistemas existentes**:
- `WHEN-TO-USE-WHAT.md` continua router de tasks (complementa GSD)
- `pipelines/*` continuam executores (GSD ROADMAP aponta qual pipeline rodar em cada fase)
- `TASKS.md` continua fila do dia (espelha phase PLAN.md atual)
- `_obsidian-setup/dashboard-gospel-opcao-e.md` espelha STATE.md

## Fase do fluxo
**Fase 5 de 5** — Última fase. Conteúdo já foi criado nas fases anteriores; aqui adapta e prepara pra publicar/pagar.

## Contexto obrigatório (ler antes de qualquer trabalho)
- @SOBRE-MIM.md — quem é o Weslley
- @TOM-DE-MARCA.md — tom mantido mesmo em anúncios

## Skills contextuais (invocar sob demanda — NÃO carregam em sessão)
- `/frameworks` — AEI, BDA, PAS, Epiphany Bridge, Stack Slide, Big Domino, Soap Opera
- `/instalar-skill` — guia pra adicionar skills novas ao projeto

📖 **Features oficiais Anthropic disponíveis**: ver `ANTHROPIC-OFFICIAL-REFERENCE.md`
⚡ **Regra crítica**: sempre paralelizar tool calls independentes (economia de tokens)

## Regras específicas
- **Reaproveitamento é regra**: 1 conteúdo deve virar pelo menos 3 adaptações (IG Reel → YT Short → TikTok)
- **Hook em 2 segundos** obrigatório pra vídeo curto
- **Anúncios**: PAS ou AIDA — **NUNCA** copy agressivo (nada de "ÚLTIMA CHANCE", "COMPRE AGORA")
- **Anúncios com tom de marca**: anúncio do Weslley deve parecer um post orgânico dele, não um anúncio infoprodutor
- **Variações**: sempre gerar 3 variações de headline + 3 de body pra cada anúncio
- **Disclaimer fitness**: se fizer claim de resultado, incluir nota sobre individualidade
- **Plataforma-específico**: adaptar formato, hashtags, duração, aspect ratio

## 🔍 Tool Search Tool — ATIVO desde 2026-04-19

**Implementação**: BM25 semantic search (Anthropic official)  
**Impacto**: Reduz context overhead ~85% (55k → ~10k tokens), carregamento sob demanda  
**Hot skills** (sempre carregadas): `ad-creative`, `claude-ads`, `paid-ads`, `social-content`, `copywriting`, `email-sequence`  
**Resto** (41 skills + 11 MCPs): lazy loading on-demand  

📖 Ver `TOOL-SEARCH-SETUP.md` pra documentação completa. **⚠️ Requer restart do Claude Code pra ativar.**

---

## Subpastas
- `instagram/` — Posts, stories, reels adaptados pra IG
- `youtube/` — Longform scripts + Shorts
- `tiktok/` — Roteiros e adaptações TikTok
- `ads/` — Anúncios pagos (Meta, TikTok, Google) com variações
- `output/` — Versões finais prontas pra publicar

<!--
Status atual (metadata — não gasta tokens na sessão):
- Skills: 48 locais (47 originais + /frameworks + /instalar-skill convertidos de @import em 2026-04-19)
- MCPs: 12 (11 originais + kindly-web-search adicionado em 2026-04-19)
-->
## Status atual
- Skills instaladas: **48 locais**
- MCPs ativos: **12**

## Skills instaladas (locais)

### Conteúdo & Distribuição (copiadas do 02-estrategia)
| Skill | Função |
|-------|--------|
| `social-content` | Distribuição multi-canal + repurposing |
| `create-viral-content` | Otimização de hooks e engajamento |
| `copywriting` | Copy de landing pages e páginas |
| `email-sequence` | Sequências de nurture/vendas por email |
| `marketing-psychology` | Gatilhos psicológicos em ads |

### Conteúdo & Distribuição (tenfoldmarc — GitHub)
| Skill | Função | Dependências |
|-------|--------|-------------|
| `script` | Roteiro de vídeo na SUA voz | Apify, yt-dlp, ffmpeg, Whisper |
| `repurpose` | Cola URL de Reel → transcreve → reescreve na sua voz | yt-dlp, ffmpeg, Whisper |
| `viral` | 10 ideias de vídeo viral com pesquisa | Nenhuma (usa web search) |
| `copy` | Copy com 14 princípios, 100+ frameworks clássicos | Nenhuma |
| `spy` | Espiona concorrentes no IG, acha viral, extrai hooks | Apify, yt-dlp, ffmpeg, Whisper |

### Anúncios Pagos
| Skill | Função |
|-------|--------|
| `ad-creative` | Geração de variações de ads (do 02-estrategia) |
| `paid-ads` | Strategy de campanha Meta/TikTok/Google (do 02-estrategia) |
| `claude-ads` | Suite completa: 17 sub-skills (ads-meta, ads-tiktok, ads-google, ads-audit, ads-score, etc.) |
| `competitive-ads-extractor` | Scrape de ads concorrentes + análise de gaps |

### Utilitários de Sessão
| Skill | Fonte | Função |
|-------|-------|--------|
| `memory` | SomeStay07 | /memory update, prune, reflect, status |
| `cowork-session` | gyoung55 | /standup + /conclude — início e fim de sessão |

### Pesquisa & Descoberta (migradas do 01-descobrir em 2026-04-19)
| Skill | Função |
|-------|--------|
| `customer-research` | Pesquisa de audiência (Reddit, reviews, fóruns fitness) |
| `content-strategy` | Planejamento de tópicos, pilares, keyword research |
| `competitor-alternatives` | Gaps de concorrente, posicionamento orgânico |

## Skills adicionais disponíveis (Anthropic plugins, não precisa instalar)
- `marketing:draft-content` — drafts multi-plataforma
- `marketing:campaign-plan` — planejamento de campanha completo
- `marketing:performance-report` — relatório de performance
- `marketing:email-sequence` — sequências de email avançadas

## MCPs ativos (11 total)

### Ads & Analytics
| MCP | Status | Função |
|-----|--------|--------|
| `pipeboard-meta-ads` | ✅ ativo | Meta Ads API completa |
| `tiktok-trends` | ✅ ativo | Trends TikTok em tempo real |
| `google-ads` | ⏳ pendente credenciais | Google Ads API |
| `tiktok-ads` | ⏳ pendente credenciais | TikTok Ads API |
| `google-analytics` | ⏳ pendente credenciais | GA4 analytics |

### Pesquisa & Descoberta (migrados do 01-descobrir)
| MCP | Status | Função |
|-----|--------|--------|
| `google-trends` | ✅ ativo (grátis) | Keywords trending + notícias |
| `firecrawl` | ✅ ativo (500 créditos/mês) | Scraping profundo de sites/blogs |
| `tavily` | ✅ ativo (1k buscas/mês) | Busca otimizada pra AI |

### Automação & Funil
| MCP | Status | Função |
|-----|--------|--------|
| `n8n` | ⏳ pendente credenciais | Automação de workflows |
| `whatsapp` | ⏳ pendente credenciais | WhatsApp Business |
| `shopify` | ⏳ pendente credenciais | Shopify (futuro) |

## Monetização
- **Produto**: "O Treino Que Ninguém Vê" — ebook R$19,90
- **Funil**: Conteúdo orgânico → DM → Venda
- **Modelo**: Orgânico primeiro, ads depois (quando tiver validação)
- **Prioridade**: IG → TikTok → YouTube Shorts → Ads → Analytics

## Fluxo de reaproveitamento
```
Conteúdo original (IG Reel)
    ↓
    ├── instagram/  → post estático + carrossel + stories
    ├── youtube/    → script de Short + (opcional) longform derivado
    ├── tiktok/     → adaptação do hook + legendas
    └── ads/        → variações pagas das melhores peças orgânicas
```

## Economizar tokens
- Respostas curtas
- Reaproveitar > recriar
- Pedir 1 plataforma por vez, não todas de uma vez

---

## 🚨 REGRA OBRIGATÓRIA — Uso de skills/MCPs/Pipelines

**Antes de responder QUALQUER pedido não-trivial nesta pasta**, Claude DEVE consultar `@WHEN-TO-USE-WHAT.md`.

Se a tarefa bate com alguma entrada da tabela, **INVOCAR** a skill/pipeline correspondente — não responder de cabeça.

Vazão de atuação:

1. **Pedido chega** → Claude lê WHEN-TO-USE-WHAT.md (match?)
2. **Match forte** → anuncia "[Consultando mapa] Invocando: X" → invoca
3. **Match parcial** → sugere a skill antes de decidir
4. **Sem match** → responde de cabeça (liberado)

Em caso de dúvida, chamar o agent `monetization-coordinator` (em `.claude/agents/`).

Se Claude responder sem invocar skill quando deveria, o agent `anti-desperdicio-tokens` vai flagar.

**Pipelines documentados** (12): ver pasta `pipelines/`. Cada um especifica quais skills/MCPs usar em cada passo.

**Dashboard Obsidian** (operacional): abrir pasta 06 como vault → ver `_obsidian-setup/homepage.md`.

**Blueprint de monetização data-driven**: `_MEGA-UPDATE-2026-04-17/BLUEPRINT-MONETIZACAO.md`. NUNCA chutar números — sempre citar faixas documentadas no blueprint.

**Pasta 02-estrategia-conteudo é SAGRADA / READ-ONLY**: só ler, nunca modificar/mover/copiar pastas inteiras.
