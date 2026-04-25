# Skills e MCPs — Próximos Passos Pro Plano Gospel + Estoico

> Pesquisa GitHub profunda 2026-04-19. Complementa `pgsa/SKILLS-A-INSTALAR-DEPOIS.md` e `pgsa/SKILLS-GITHUB-PESQUISA-2026-04-17.md` (focados em KDP/afiliado).
> **Novo foco**: tudo que plugar nas 2 estratégias vencedoras (gospel H27 + estoico híbrido).

**Data**: 2026-04-19
**Budget gasto nesta pesquisa**: ~15k tokens (6 WebSearch + 1 WebFetch + 2 Reads)

---

## ⚡ STATUS DE INSTALAÇÃO (2026-04-19)

**4 dos 5 Tier 1 instalados**. Ver [INSTRUCOES-SETUP.md](INSTRUCOES-SETUP.md) para credenciais.

| # | Item | Status |
|---|------|--------|
| 1 | ElevenLabs MCP | ⚠️ entry no .mcp.json, **falta API key** (free tier) |
| 2 | pauling-ai youtube-mcp-server | ⚠️ entry no .mcp.json, **falta Google OAuth** |
| 3 | anwerj youtube-uploader-mcp | ⚠️ entry no .mcp.json, **falta binary + OAuth** |
| 4 | ychoi-kr claude-ffmpeg-skill | ✅ ATIVO (`ffmpeg-usage`) |
| 5 | AgriciDaniel claude-youtube | ✅ ATIVO (`claude-youtube` + 14 sub-skills) |
| 5 bonus | Hotmart MCP | ⏳ pendente escolha (hotmart-cli vs BridgeAPI) |

### 🎯 Decisão ElevenLabs (atualizada 2026-04-19)

Weslley questionou se precisa mesmo assinar ElevenLabs (R$30/mês) quando Freepik Premium+ já tem Voice Generator. **Resposta matemática**:

- **Freepik Voice Generator**: "melhor grátis, simples, browser-based, casual" — suporta PT-BR mas qualidade não documentada em reviews.
- **ElevenLabs**: "superior pra realismo e nuance expressiva" (até o blog da Freepik admite).
- **Decisão**: **testar Freepik primeiro** via ElevenLabs free tier (10k créditos/mês) antes de pagar R$30/mês.
- **Protocolo de teste**: gerar mesmo script 9k chars nas 2 ferramentas, postar 2 Shorts blind, medir retenção 1min.
- **Gate**: se Freepik >= ElevenLabs em retenção → economiza **R$360/ano**. Se pior → assina Starter R$30/mês.

**Gospel NÃO precisa ElevenLabs** (só música instrumental). ElevenLabs é 100% dedicado ao canal estoico.

---

## 1. Contexto — o que já temos

### Na pasta `E:\Claude Code\Youtube - Músicas de Louvor\`
- `.claude/skills/claude-youtube/` — skills com 14 sub-skills (audit, seo, script, hook, thumbnail, strategy, calendar, shorts, analyze, repurpose, monetize, competitor, metadata, ideate). **Confirmado**: é o `AgriciDaniel/claude-youtube`.
- `.claude/skills/suno-engineer/`, `lyric-writer`, `mastering-engineer`, `genre-creator`.
- MCPs: `suno-mcp` (API key vazia), `video-audio-mcp` (ativo), `mcp-image` (API key vazia).

### Na pasta `E:\Claude Code\#youtube\`
- 48 skills locais (focadas em distribuição + afiliado + ads).
- 12 MCPs ativos (google-trends, tavily, firecrawl, keywordtool, pipeboard-meta-ads, tiktok-trends).
- Skills `strategy-finder` + agent `strategist-autonomous` já usados.

---

## 2. TIER 1 — MUST HAVE (bloqueia execução do plano)

Essas resolvem problemas CRÍTICOS das estratégias vencedoras. Instalar antes de começar.

### 🔥 2.1 `elevenlabs/elevenlabs-mcp` (oficial)
- **Repo**: [github.com/elevenlabs/elevenlabs-mcp](https://github.com/elevenlabs/elevenlabs-mcp)
- **Por quê**: canal estoico usa ElevenLabs Starter (R$30/mês) como toolstack. Narração É o produto.
- **Bloqueio que resolve**: plugar TTS direto no fluxo = gerar narração sem sair do Claude Code. Sem isso, vai ser copiar-colar texto no site toda vez.
- **Free tier**: 10k créditos/mês (grátis pra testar antes de assinar).
- **Custo**: zero (além da assinatura ElevenLabs que já tá prevista).

### 🔥 2.2 `pauling-ai/youtube-mcp-server`
- **Repo**: [github.com/pauling-ai/youtube-mcp-server](https://github.com/pauling-ai/youtube-mcp-server)
- **Por quê**: 40 tools — Data API v3 + Analytics + Reporting. Channel analytics, video publishing, transcripts, audience insights, SEO discovery, comments, bulk reporting.
- **Bloqueio que resolve**: **todo o plano exige validar premissas mês 1-3** (RPM real, views, watchtime). Sem esse MCP, vai ter que copiar manual do YouTube Studio pra planilha.
- **Dependência**: Google Cloud OAuth credentials (grátis pra configurar).
- **Alternativas**: `ZubeidHendricks/youtube-mcp-server` (10 tools, menor), `hakanoz203/youtube-channel-mcp` (OAuth + Shorts analytics).

### 🔥 2.3 `anwerj/youtube-uploader-mcp`
- **Repo**: [github.com/anwerj/youtube-uploader-mcp](https://github.com/anwerj/youtube-uploader-mcp)
- **Por quê**: Upload + **scheduling**. Pasta Louvor já tem esse mcp-server baixado mas **NÃO está no `.mcp.json`** — só falta plugar.
- **Bloqueio que resolve**: upload manual + agendamento manual = tempo desperdiçado. Gospel = 2 uploads/sem × 2 canais (se rodar paralelo) × 24 semanas = 96 uploads manuais.
- **Alternativa**: `adamanz/youtube-mcp-server` (também upload via Claude Desktop).

### 🔥 2.4 `ychoi-kr/claude-ffmpeg-skill`
- **Repo**: [github.com/ychoi-kr/claude-ffmpeg-skill](https://github.com/ychoi-kr/claude-ffmpeg-skill)
- **Por quê**: estratégia vencedora gospel (H27) depende de **estender áudio 2-3min → 8h via ffmpeg**. Isso é o truque central do plano (pilar de watchtime pra YPP mês 4).
- **Bloqueio que resolve**: sem skill que encapsule comandos ffmpeg (concat, loop, crossfade), vai ser trial-error no terminal. Skill documenta padrões testados.
- **Dependência**: ffmpeg instalado (free, standard).
- **Alternativa**: `digitalsamba/claude-code-video-toolkit` inclui sub-skill ffmpeg ([link](https://agentskills.so/skills/digitalsamba-claude-code-video-toolkit-ffmpeg)).

### 🔥 2.5 MCP Hotmart (escolher 1 de 2)
- **Opção A**: `hotmart-cli` (via lobehub) — CLI + MCP server, gerencia produtos, vendas, **afiliados**, email marketing. Última atualização 2026-03-16. ([link](https://lobehub.com/mcp/murilloimparavel-hotmart-cli))
- **Opção B**: `BridgeAPI → mcp-hotmart` — ecossistema BR com 16 MCPs (WhatsApp, Hotmart, Pix, NFe). ([link](https://lobehub.com/mcp/evandroschechtel-bridgeapi))
- **Por quê**: BLUEPRINT tem **"gap de evidência"** marcado pra volume Hotmart gospel BR. Plano gospel depende de afiliado Hotmart gospel (Kit Fé em Ação, Devocional 31 Dias). MCP permite auditar catálogo + trackear comissões direto.
- **Bloqueio que resolve**: descoberta de produtos gospel + monitoramento comissões.
- **Recomendação**: testar `hotmart-cli` primeiro (dedicado + recente).

---

## 3. TIER 2 — NICE TO HAVE (acelera mas não bloqueia)

### 🟡 3.1 `mcpmarket / YouTube Thumbnail Optimizer`
- **Link**: [mcpmarket.com/tools/skills/youtube-thumbnail-optimizer](https://mcpmarket.com/tools/skills/youtube-thumbnail-optimizer)
- **Por quê**: gera thumbnails reais (usa Thumbkit CLI + Gemini image models). CTR thumbnail é **fator #1** de crescimento orgânico.
- **Por que Tier 2**: Gemini API é paga (alguns créditos grátis). Pode rodar Freepik pra thumbnails primeiro e migrar se CTR abaixo do alvo.

### 🟡 3.2 `digitalsamba/claude-code-video-toolkit` ou `wilwaldon/Claude-Code-Video-Toolkit`
- **Repos**: [digitalsamba](https://github.com/digitalsamba/claude-code-video-toolkit) / [wilwaldon](https://github.com/wilwaldon/Claude-Code-Video-Toolkit)
- **Por quê**: Remotion (programmatic video), ffmpeg, screen recording, YouTube clipping. Overkill pro gospel (só loop) mas útil pro **estoico** (visual mais variado — cortes, legendas, ruins romanas mudando).
- **Por que Tier 2**: estoico pode rodar Freepik puro nos 2 primeiros meses. Se CTR baixo, migrar pra Remotion.
- **Bonus**: Remotion skill oficial viralizou em jan/2026 — curva de aprendizado estável.

### 🟡 3.3 `AgriciDaniel/claude-youtube` (já na pasta Louvor)
- **Ação**: copiar de `E:\Claude Code\Youtube - Músicas de Louvor\.claude\skills\claude-youtube\` pra `E:\Claude Code\#youtube\.claude\skills\` (ou criar symlink).
- **Por quê**: 14 sub-skills estratégicas e táticas. Já validei que tem `strategy`, `monetize`, `competitor`, `audit` estratégicos — complementam o `strategy-finder`.
- **Observação**: Sub-skills precisam de DataForSEO MCP (paga) pra dados ao vivo. Sem isso, ainda funcionam com dados que eu passo manual.

### 🟡 3.4 `hancengiz/youtube-transcript-mcp` ou `jkawamoto/mcp-youtube-transcript`
- **Repos**: [hancengiz](https://github.com/hancengiz/youtube-transcript-mcp) / [jkawamoto](https://github.com/jkawamoto/mcp-youtube-transcript)
- **Por quê**: extrair transcripts de concorrentes (canais gospel instrumental grandes, canais estoicos — Voz Estoica tem 21 canais pareceiros). Alimenta skills `spy`, `competitor`, `repurpose`.
- **Suporte PT**: language code `pt` disponível.
- **Por que Tier 2**: skill `repurpose` já usa yt-dlp + Whisper (já instalado). Esse MCP só adiciona conveniência.

### 🟡 3.5 `robertguss/claude-code-toolkit` → `ebook-factory`
- **Repo**: [github.com/robertguss/claude-code-toolkit](https://github.com/robertguss/claude-code-toolkit)
- **Por quê**: escrever ebook gospel "30 Orações Pra Dormir em Paz" + ebook estoico "30 Dias de Estoicismo Prático". Ambos são pilares de receita das 2 estratégias.
- **Por que Tier 2**: LLM direto (Claude) já escreve ebook. Skill acelera e dá estrutura (pipeline idea → chapters → drafting).
- **Já listado em**: `pgsa/SKILLS-A-INSTALAR-DEPOIS.md` (#2).

### 🟡 3.6 `jordicor/youtube_thumbnail_generator_with_AIs`
- **Repo**: [github.com/jordicor/youtube_thumbnail_generator_with_AIs](https://github.com/jordicor/youtube_thumbnail_generator_with_AIs)
- **Por quê**: pipeline video file → scene detection → face extraction → transcription → image generation.
- **Por que Tier 2**: face detection não ajuda canal faceless. Mas scene detection + transcription são úteis pra repurpose.

---

## 4. TIER 3 — WATCHLIST (reavaliar se sinal claro)

### 🔵 4.1 `MCKRUZ/ComfyUI-Expert` (12 skills)
- **Repo**: [github.com/MCKRUZ/ComfyUI-Expert](https://github.com/MCKRUZ/ComfyUI-Expert)
- **Por quê**: image gen, video, voice cloning, LoRA training. Power-user.
- **Reavaliar se**: Freepik bater limite de créditos OU qualidade visual do gospel ficar abaixo do alvo.

### 🔵 4.2 Remotion skill oficial (Claude Code)
- **Docs**: [code.claude.com/docs/en/skills](https://code.claude.com/docs/en/skills)
- **Por quê**: programmatic video. 6M+ views no launch demo, 25k+ installs na 1ª semana (jan/2026).
- **Reavaliar se**: estoico escalar e Freepik não der conta de variação visual.

### 🔵 4.3 MCPs SEO (redundantes)
- `cnych/seo-mcp` (free SEO MCP via Ahrefs data)
- `egebese/seo-research-mcp`
- **Por quê Watchlist**: já temos `keywordtool-guest` + `google-trends`. Redundante.

### 🔵 4.4 Skills do `SKILLS-A-INSTALAR-DEPOIS.md` que não mudaram
- `Affitor/affiliate-skills` — útil se expandir afiliado (não imediato).
- `SpillwaveSolutions/running-marketing-campaigns-agent-skill` — UTM/GA4 tracking (útil quando rodar campanhas, e o plano atual é orgânico).
- `wondelai/skills` (scorecard-marketing = quiz funnel) — reavaliar se quiser isca via quiz pro ebook gospel.
- `BrianRWagner/ai-marketing-claude-code-skills` (testimonial collector) — reavaliar quando tiver 5+ depoimentos de leitores ebook.

### 🔵 4.5 `mcp-brasil` / `mcp-dev-brasil`
- **Repos**: [jxnxts/mcp-brasil](https://github.com/jxnxts/mcp-brasil) (41 APIs públicas BR), [codespar/mcp-dev-brasil](https://github.com/codespar/mcp-dev-brasil)
- **Por quê Watchlist**: APIs BR gerais (payments, fiscal, banking). Não é pipeline crítico do plano.

---

## 5. GAPS confirmados (sem solução madura)

| Gap | Status | O que fazer |
|-----|--------|-------------|
| **Suno MCP oficial** | Só tem comunitário (já na Louvor, API key vazia). | Se H27 precisar Suno, ativar API key manual. |
| **Freepik MCP** | Não existe. | Usar UI Freepik manualmente (sem integração Claude). |
| **YouTube upload automação avançada** (multi-canal, bulk) | Parcial via `anwerj/youtube-uploader-mcp`. | Ok pro plano atual (2 canais × 2 vídeos/sem). |
| **Gospel BR nicho-específico** | Zero skills. | Usar skill `content-strategy` genérico + keywordtool pra keywords gospel BR. |
| **Análise retention por nicho musical 8h** | Zero. | Medir manual no YouTube Studio mês 1-3. |

---

## 6. Plano de instalação recomendado (ordem cronológica)

### Semana 1 (antes de começar gospel)
1. **`elevenlabs/elevenlabs-mcp`** — plugar mesmo antes de assinar ElevenLabs (free tier pra testar)
2. **`anwerj/youtube-uploader-mcp`** — mover do projeto Louvor pro `.mcp.json` da `#youtube`
3. **`pauling-ai/youtube-mcp-server`** — configurar OAuth Google Cloud (30 min)
4. **`ychoi-kr/claude-ffmpeg-skill`** — clonar em `.claude/skills/`
5. **`AgriciDaniel/claude-youtube`** — copiar da Louvor pra `#youtube/.claude/skills/`

### Semana 2 (durante produção dos primeiros 4 vídeos gospel)
6. Testar `hotmart-cli` ou `BridgeAPI mcp-hotmart` — validar 3-5 produtos afiliado gospel BR
7. **`robertguss/claude-code-toolkit → ebook-factory`** — escrever ebook "30 Orações Pra Dormir em Paz"

### Mês 2+
8. Se CTR thumbnail < 4%: instalar `mcpmarket youtube-thumbnail-optimizer`
9. Se estoico começar e Freepik apertar: avaliar `digitalsamba/claude-code-video-toolkit` (Remotion)
10. Se tiver 5+ vendas ebook: instalar `BrianRWagner` (testimonial collector)

---

## 7. Como instalar (padrão seguro)

### Pro Weslley (Claude NÃO instala direto — precisa autorização)

**Regra**: clonar em sandbox primeiro, testar 1 skill, mover só as que funcionam.

```bash
# 1. Sandbox
mkdir -p "E:/Claude Code/#youtube/_sandbox-skills-2026-04-19"
cd "E:/Claude Code/#youtube/_sandbox-skills-2026-04-19"

# 2. Clonar paralelo (5 repos principais)
git clone https://github.com/elevenlabs/elevenlabs-mcp
git clone https://github.com/pauling-ai/youtube-mcp-server
git clone https://github.com/anwerj/youtube-uploader-mcp
git clone https://github.com/ychoi-kr/claude-ffmpeg-skill
git clone https://github.com/AgriciDaniel/claude-youtube

# 3. Testar cada antes de integrar
cat elevenlabs-mcp/README.md
cat pauling-ai/youtube-mcp-server/README.md
# etc

# 4. Mover pro destino
# MCPs: editar E:/Claude Code/#youtube/.mcp.json (adicionar entry)
# Skills: mv <skill>/  ../.claude/skills/
```

**Não confio em instalar sem testar**. Tem repo com dependências ocultas (DataForSEO paga, Gemini API paga). Sandbox primeiro.

---

## 8. Custo adicional estimado (além do R$138/mês toolstack)

| Item | Custo | Quando |
|------|-------|--------|
| ElevenLabs MCP | R$0 (free tier 10k) ou parte do ElevenLabs Starter R$30 já previsto | imediato |
| YouTube Data API | R$0 (Google Cloud free tier cobre) | imediato |
| ffmpeg skill | R$0 | imediato |
| Hotmart MCP | R$0 | imediato |
| AgriciDaniel claude-youtube | R$0 (grátis) ou DataForSEO (~R$30-90/mês opcional) | opcional |
| Thumbnail optimizer + Gemini API | ~R$50-100/mês se usar bulk | se CTR baixo |
| Remotion (plan B) | R$0 (open source) | se Freepik falhar |

**Adição mínima ao orçamento**: R$0 pra Tier 1 inteiro.
**Upside máximo mês 3+**: R$50-150/mês se ativar thumbnail AI + DataForSEO.

---

## 9. Decisão pra Weslley bater (3 perguntas)

1. **Plugar os 5 MCPs/skills Tier 1 agora** (semana 1 do plano)? Custo zero, upside enorme.
2. **Qual Hotmart MCP testar primeiro**: `hotmart-cli` (dedicado + recente) ou `BridgeAPI` (ecossistema BR)?
3. **Autoriza sandbox auto-clone** (todos os 5 repos em `_sandbox-skills-2026-04-19`) ou prefere clonar 1 por vez manual?

---

## 10. Fontes

- [AgriciDaniel/claude-youtube](https://github.com/AgriciDaniel/claude-youtube) — confirmado é o mesmo da pasta Louvor
- [elevenlabs/elevenlabs-mcp](https://github.com/elevenlabs/elevenlabs-mcp) (oficial)
- [pauling-ai/youtube-mcp-server](https://github.com/pauling-ai/youtube-mcp-server)
- [anwerj/youtube-uploader-mcp](https://github.com/anwerj/youtube-uploader-mcp)
- [ychoi-kr/claude-ffmpeg-skill](https://github.com/ychoi-kr/claude-ffmpeg-skill)
- [digitalsamba/claude-code-video-toolkit](https://github.com/digitalsamba/claude-code-video-toolkit)
- [wilwaldon/Claude-Code-Video-Toolkit](https://github.com/wilwaldon/Claude-Code-Video-Toolkit)
- [hotmart-cli via lobehub](https://lobehub.com/mcp/murilloimparavel-hotmart-cli)
- [BridgeAPI mcp-hotmart](https://lobehub.com/mcp/evandroschechtel-bridgeapi)
- [mcpmarket YouTube Thumbnail Optimizer](https://mcpmarket.com/tools/skills/youtube-thumbnail-optimizer)
- [hancengiz/youtube-transcript-mcp](https://github.com/hancengiz/youtube-transcript-mcp)
- [jkawamoto/mcp-youtube-transcript](https://github.com/jkawamoto/mcp-youtube-transcript)
- [MCKRUZ/ComfyUI-Expert](https://github.com/MCKRUZ/ComfyUI-Expert)
- [jordicor/youtube_thumbnail_generator](https://github.com/jordicor/youtube_thumbnail_generator_with_AIs)
- [ZubeidHendricks/youtube-mcp-server](https://github.com/ZubeidHendricks/youtube-mcp-server)
- [adamanz/youtube-mcp-server](https://github.com/adamanz/youtube-mcp-server)
- [hakanoz203/youtube-channel-mcp](https://glama.ai/mcp/servers/hakanoz203/youtube-channel-mcp)
- [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills)
- [travisvn/awesome-claude-skills](https://github.com/travisvn/awesome-claude-skills)
- [alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills) (232+ skills)
- [VoltAgent/awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills) (1000+ skills)
