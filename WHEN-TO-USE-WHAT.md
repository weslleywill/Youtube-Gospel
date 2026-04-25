# WHEN-TO-USE-WHAT — Mapa de Tasks → Skills/Pipelines

> **Regra inegociável**: Antes de responder qualquer pedido não-trivial, Claude deve consultar esta tabela. Se bater com alguma entrada, invocar a skill/pipeline. Não responder "de cabeça" quando existe ferramenta pronta.

**Pasta**: `06-distribuicao-e-monetização`
**Produto**: Ebook R$37 ("O Treino Que Ninguém Vê")
**Fase**: 0 vendas. Construção 100%.

---

## 📚 Tabela Mestre (task → ferramenta)

| Task do usuário | O que invocar | Pipeline (se houver) | Quando NÃO usar |
|---|---|---|---|
| "pesquisa audiência / o que minha persona sente" | `customer-research` + `firecrawl` + `tavily` | — | Se persona já está bem definida |
| "quais tópicos / pilares de conteúdo usar" | `content-strategy` + `google-trends` | — | Se pauta já definida |
| "analisa concorrente orgânico / gaps de posicionamento" | `competitor-alternatives` + `spy` + `firecrawl` | PIPELINE-COMPETITIVE-INTEL | — |
| "o que tá trending agora / notícias do nicho" | `google-trends` (MCP) + `tiktok-trends-mcp` | — | — |
| "scraping / extrai conteúdo de site X" | `firecrawl` (MCP) | — | — |
| "busca web inteligente / pesquisa geral" | `tavily` (MCP) | — | — |
| "me dá ideias de reel/conteúdo/pauta" | `viral` + `tiktok-trends-mcp` | PIPELINE-VIRAL-RESEARCH | Se ideia já está definida |
| "quais hooks usar" | `hook-writer-sms` | PIPELINE-PRODUCAO-CONTEUDO | Hook já escrito |
| "escreve o roteiro desse vídeo" | `script` | PIPELINE-PRODUCAO-CONTEUDO | Só 1 frase pedida |
| "escreve copy dessa landing/page" | `copywriting` + `copy` | — | Texto muito curto (bio IG) |
| "escreve copy desse ad" | `ad-creative` + `claude-ads /creative` + `copy` | PIPELINE-ADS-MANAGEMENT | — |
| "cria variações de ad" | `ad-creative` + `claude-ads /generate` | PIPELINE-ADS-MANAGEMENT | — |
| "adapta esse reel pra YT Short / TikTok" | `repurpose` + `social-content` | PIPELINE-REAPROVEITAMENTO | Nunca pular — regra do 06 |
| "monta carrossel" | `carousel-writer-sms` | PIPELINE-PRODUCAO-CONTEUDO | — |
| "espiona concorrente X" | `spy` + `competitive-ads-extractor` | PIPELINE-COMPETITIVE-INTEL | — |
| "ache os ads ativos do concorrente" | `competitive-ads-extractor` + `claude-ads /competitor` | PIPELINE-COMPETITIVE-INTEL | — |
| "como tá minha performance?" | `performance-analyzer-sms` + `google-analytics-mcp` + `pipeboard-meta-ads` | PIPELINE-ANALYTICS | Se não tem dados ainda — responder isso |
| "o que tá funcionando / o que não tá" | `content-pattern-analyzer-sms` | PIPELINE-ORGANICO-TO-PAGO | — |
| "quanto devo cobrar / valor do ebook" | `hundred-million-offers` | — | Preço já fechado (R$37) |
| "bonus stacking / offer stack" | `hundred-million-offers` | — | — |
| "escreve sequência de email" | `email-sequence` + `marketing:email-sequence` | PIPELINE-FUNIL-DM | — |
| "script de DM pra fechar venda" | `copywriting` + `marketing-psychology` | PIPELINE-FUNIL-DM | — |
| "me ajuda com SEO / blog / keyword" | `claude-seo` | — | Ainda sem blog |
| "UTM / tracking link" | `running-marketing-campaigns` | PIPELINE-ANALYTICS | — |
| "configurar Meta Ads" | `claude-ads /meta` + `pipeboard-meta-ads` (MCP) | PIPELINE-ADS-MANAGEMENT | Sem token Pipeboard configurado |
| "configurar Google Ads" | `claude-ads /google` + `google-ads` (MCP) | PIPELINE-ADS-MANAGEMENT | Sem credenciais Google Ads |
| "configurar TikTok Ads" | `claude-ads /tiktok` + `tiktok-ads` (MCP) | PIPELINE-ADS-MANAGEMENT | Sem TikTok Business setup |
| "auditar campanha" | `meta-ads-analyzer` + `claude-ads /audit` | PIPELINE-ADS-MANAGEMENT | — |
| "criar ideia de conteúdo com meu erro" | `copywriting` + `create-viral-content` + frameworks Epiphany Bridge/Soap Opera | PIPELINE-STORYTELLING-CONSTRUCAO | Usuário pediu 100% autoral |
| "tenho um depoimento, como uso?" | `copywriting` + `carousel-writer-sms` + regras éticas | PIPELINE-PROVA-SOCIAL-UGC | Sem permissão do cliente → recusar |
| "pinterest como canal?" | `social-content` + `claude-seo` + `repurpose` | PIPELINE-PINTEREST-ORGANICO | — |
| "automatizar tudo / n8n" | `n8n-mcp` + orquestração completa | PIPELINE-AUTONOMO-FULL | Fase 0 (só manual ainda) |
| "agendar post" | `buffer-mcp` (quando ativado) | PIPELINE-AUTONOMO-FULL | Pode fazer manual |
| "analisar concorrente novo" | `spy` + `competitive-ads-extractor` | PIPELINE-COMPETITIVE-INTEL | — |
| "como vai ser meu funil?" | `monetization-coordinator` agent | PIPELINE-FUNIL-DM | — |
| "me ajuda a vender mais" (vago) | `monetization-coordinator` agent | vários | — |
| "como distribuir isso?" | `social-content` + `repurpose` | PIPELINE-REAPROVEITAMENTO | — |
| "CPA / ROAS / break-even" | `paid-ads` + consultar BLUEPRINT-MONETIZACAO.md | PIPELINE-ADS-MANAGEMENT | — |
| "blueprint / roadmap de monetização" | Ler `_MEGA-UPDATE-2026-04-17/BLUEPRINT-MONETIZACAO.md` | — | — |
| "quanto vou ganhar?" | Consultar BLUEPRINT + `paid-ads` | — | Não chutar — citar faixas documentadas |
| "humanizar esse texto (tá parecendo IA)" | `content-humanizer` (plugin) + `detect-ai` | — | — |
| "checar se viola marca" | `brand-voice:brand-voice-enforcement` | — | — |
| "me dá standup / encerra sessão" | `cowork-session` (`/standup`, `/conclude`) | — | — |
| "atualiza minha memória" | `memory` (`/memory update`) | — |
| "fluxograma / diagrama / mapa visual / mindmap / gantt / timeline" | `mermaid` | — | Desenho livre → use Excalidraw |
| "fazer Short YouTube" / "produzir Short" / "Short do dia" | `viral` + `tiktok-trends` MCP + `hook-writer-sms` + `script` + `frameworks` + `image-prompt` + `kling-ai-prompt-generator` + `voice-enhancer` + `ffmpeg-usage` + `claude-youtube` + `claude-seo` | **PIPELINE-SHORTS-YOUTUBE** ✅ | Recorte de longform → use PIPELINE-REAPROVEITAMENTO |
| "Short pra vender ebook" / "Short conversão Hotmart" | Pipeline 14 + `monetization-coordinator` + `hundred-million-offers` + `running-marketing-campaigns` + `email-sequence` | **PIPELINE-SHORTS-FUNIL-INTEGRADO** 🛌 DORMENTE | NÃO rodar sem ebook live + Pipeline 14 calibrado + aprovação Weslley |
| "visualiza esse funil / pipeline / fluxo" | `mermaid` (flowchart) | — | — |
| "roadmap mensal visual / gantt" | `mermaid` (gantt) | — | — |
| "distribuição AEI em pie chart" | `mermaid` (pie) | — | — | — |

---

## 🎯 Triggers explícitos (palavra → invoca)

Quando o usuário escrever estas palavras, Claude deve considerar invocar direto:

| Palavra/Frase | Invoca |
|---|---|
| "hook", "primeira linha", "scroll stopper" | `hook-writer-sms` |
| "roteiro", "script", "vídeo" | `script` |
| "carrossel", "slides" | `carousel-writer-sms` |
| "ad", "anúncio", "criativo pago" | `ad-creative` + `claude-ads` |
| "Meta Ads", "Facebook Ads", "Instagram Ads" | `pipeboard-meta-ads` MCP + `claude-ads /meta` |
| "TikTok Ads" | `tiktok-ads` MCP + `claude-ads /tiktok` |
| "Google Ads" | `google-ads` MCP + `claude-ads /google` |
| "trend", "viral", "tendência" | `tiktok-trends-mcp` + `google-trends` |
| "persona", "audiência", "dor do cliente" | `customer-research` + `tavily` |
| "pilar", "tópico", "pauta", "calendário editorial" | `content-strategy` |
| "gap", "posicionamento orgânico", "alternativa ao concorrente" | `competitor-alternatives` |
| "scraping", "extrai site", "lê blog" | `firecrawl` |
| "concorrente", "espiar", "spy" | `spy` + `competitive-ads-extractor` |
| "performance", "métrica", "analytics" | `performance-analyzer-sms` + MCPs de analytics |
| "UTM", "tracking" | `running-marketing-campaigns` |
| "ebook", "oferta", "preço" | `hundred-million-offers` |
| "DM", "direct message" | PIPELINE-FUNIL-DM + `whatsapp-mcp` |
| "Pinterest" | PIPELINE-PINTEREST-ORGANICO |
| "SEO", "keyword", "blog" | `claude-seo` |
| "fluxograma", "diagrama", "mermaid", "mindmap", "gantt", "timeline", "pie chart" | `mermaid` |

---

## 🚫 Quando NÃO invocar nada

Liberado responder de cabeça:
- Pergunta factual simples ("que horas são?")
- Explicação sobre o próprio ecossistema ("o que é a pasta 06?")
- Confirmação de ação em andamento
- Pergunta conceitual ("o que é AEI?")
- Usuário pediu explicitamente resposta rápida
- Pequenos ajustes de texto já existente (1-2 palavras)

---

## 🔁 Padrão de invocação

Quando Claude for invocar uma skill/pipeline, **anunciar antes**:

```
[Consultando WHEN-TO-USE-WHAT]
Match: "escreve ad pro meu ebook"
Invocando: ad-creative + claude-ads /creative
Pipeline: PIPELINE-ADS-MANAGEMENT
Respeitando: TOM-DE-MARCA.md (zero palavras banidas)
```

Isso deixa o processo transparente pro Weslley.

---

## 🎚️ Hierarquia quando múltiplas skills batem

Ordem de preferência quando várias skills se aplicam:
1. **Skill local do 06** antes de plugin global (melhor performance, customizada)
2. **Pipeline documentado** antes de skill isolada (contexto completo)
3. **Agent coordenador** quando múltiplas opções fazem sentido
4. **Skill de plugin Anthropic** (`marketing:`, `sales:`, etc.) só se nenhuma local bate

---

## 🔗 Integração com agents

- `monetization-coordinator` → usa esta tabela pra decidir pipeline
- `anti-desperdicio-tokens` → usa esta tabela pra detectar match forte/parcial

Ambos leem este arquivo como fonte da verdade.

---

**Última atualização**: 2026-04-19
**Responsável**: criado no MEGA UPDATE 2026-04-17
