# PIPELINE 14 — SHORTS YOUTUBE (VIRAL HOOK-FIRST)

> **Status**: ✅ ATIVO
> **Aprovado**: 2026-04-24 (Weslley)
> **Filosofia**: Hook ganhador primeiro (TikTok-style), só depois roteiriza. Otimiza retenção 3s.
> **Tempo total**: ~1h30 por Short
> **Skills**: 12 · **MCPs**: 2

---

## 🎯 Quando invocar

- Produzir Short YouTube (vertical 9:16, 30-60s) DO ZERO
- Workstream gospel (canal "Gospel Pra Descansar") OU fitness (Personal de Sucesso)
- Frequência prevista: 5×/semana (Seg/Ter/Qua/Qui/Dom — ver `pgsa/CALENDARIO-EDITORIAL-OPCAO-E-MAI-DEZ.md`)

## ❌ Quando NÃO invocar

- Short de recorte de longform → use `PIPELINE-REAPROVEITAMENTO.md` adaptado
- Short pra TikTok/IG Reels primeiro → use `PIPELINE-VIRAL-RESEARCH.md` + adapta com `PIPELINE-REAPROVEITAMENTO.md`
- Quando ebook estiver live na Hotmart → considerar Pipeline 15 (SHORTS-FUNIL-INTEGRADO) pra otimizar CVR

---

## 🧩 Etapas (12 skills + 2 MCPs)

### Fase A — Pesquisa (15min, paralelo)
| # | Skill/MCP | Objetivo | Output |
|---|---|---|---|
| 1 | `viral` | 10 ideias virais com pesquisa web pro nicho | Lista 10 ideias |
| 2 | `mcp__tiktok-trends__trendsMCP___get_trends` | Trends gospel BR ativos | Top 10 hooks/temas trending |

### Fase B — Hook + Roteiro (20min, sequencial)
| # | Skill | Objetivo | Output |
|---|---|---|---|
| 3 | `hook-writer-sms` | 10 hooks 3s baseados nas trends + ideia | 10 hooks → escolher 1 |
| 4 | `marketing-psychology` | Validar gatilho psicológico do hook escolhido | Confirma/sugere refinamento |
| 5 | `frameworks` | Aplicar BDA (Before-During-After) + Big Domino | Estrutura roteiro |
| 6 | `script` | Roteiro 30s na voz Weslley (calibrado em vídeos reais) | Roteiro pronto pra gravar |

### Fase C — Visual 100% IA (20min, sequencial pra manter consistência GPT→Higgsfield)

> ⚠️ **REGRA 2 PROMPTS** (memória `feedback_modelo_2_sempre_diferente_e_economico.md`):
> - Imagem Modelo 1 = ChatGPT GPT-Image-2 (obrigatório, default)
> - Imagem Modelo 2 = engine DIFERENTE (Nano Banana Pro / Ideogram v3 / Soul Cinema)
> - Vídeo Modelo 1 = Kling 3.0 Exclusive (Higgsfield, image-to-video 4K)
> - Vídeo Modelo 2 = Minimax Hailuo (Higgsfield, econômico)

| # | Skill/Tool | Objetivo | Output |
|---|---|---|---|
| 7a | `prompt-master` ou estrutura 6-componentes (Subject/Action/Context/Composition/Lighting/Style) — ChatGPT GPT-Image-2 | Imagem 1 base 9:16 (1080×1920) | PNG vertical principal |
| 7b | `nano-banana-pro-prompts` ou `image-prompt` ou Ideogram v3 — Modelo 2 | Imagem 2 alternativa (engine DIFERENTE) | PNG vertical backup |
| 8a | `kling-ai-prompt-generator` (Kling 3.0 Exclusive) — Higgsfield | Animação Modelo 1 com PALETTE LOCK + LOOP LOCK + Subject lock + camera STATIC + audio OFF | MP4 vídeo principal |
| 8b | `video-prompting-skill` (Minimax Hailuo) — Higgsfield | Animação Modelo 2 econômica fallback | MP4 vídeo backup |

### Fase D — Áudio (15min, sequencial)

> ⚠️ **IMPORTANTE**: Visual é 100% IA (canal AI-only visualmente — Weslley NÃO aparece). Mas a VOZ é gravada por ele e polida — MESMO padrão do longform Coração Cansado 30min. Ver memória `feedback_tudo_100_ia_zero_gravacao.md`.

| # | Skill | Objetivo | Output |
|---|---|---|---|
| 9 | (gravação Weslley — celular silencioso, lê o roteiro) | Voz crua MP3 192kbps Mono | WAV/MP3 cru |
| 10 | `voice-enhancer` (DeepFilterNet3 local + EQ + compand + loudnorm -15 LUFS) | Polir voz idêntico ao pipeline validado no longform 30min | WAV polido |

### Fase E — Mix + Metadata (15min, sequencial)
| # | Skill | Objetivo | Output |
|---|---|---|---|
| 11 | `ffmpeg-usage` | Mix vertical 9:16 + duração exata 30s + overlay text hook | MP4 final |
| 12a | `claude-youtube` | Título 100c otimizado + categoria + hashtag #shorts | Metadata pronta |
| 12b | `claude-seo` | Tags SEO YouTube Shorts | Lista de tags |

### Fase F — Upload (5min)
| # | Tool | Objetivo | Output |
|---|---|---|---|
| 13 | `mcp__youtube-studio__youtube_upload_video` | Upload + metadata | URL do Short |

### Fase G — Reaproveitamento (depois, opcional)
| # | Skill | Objetivo | Output |
|---|---|---|---|
| 14 | `repurpose` | Adaptar pra TikTok | Versão TT |
| 15 | `social-content` | Adaptar pra IG Reels | Versão IG |

---

## ⚠️ Regras críticas

1. **Aspect ratio rigoroso**: 9:16 (1080×1920). Se postar 16:9, YouTube NÃO trata como Short.
2. **Duração ≤60s** (sweet spot: 30-45s).
3. **Hashtag `#shorts` na descrição** (obrigatória pro algoritmo).
4. **Texto na tela é crítico**: 85% dos viewers veem sem som no início → hook visual > hook voz.
5. **Sem thumbnail customizada** — YouTube usa primeiro frame ou frame escolhido.
6. **Sem cards/tela final** — CTA precisa ser na descrição ou no áudio.
7. **TOM-DE-MARCA.md obrigatório**: nada de copy agressivo, nada de palavras banidas.
8. **Descrição NUNCA menciona Suno ou disclaimer AI** (ver memória `feedback_descricao_sem_suno_disclaimer.md`).

---

## 📂 Onde salvar arquivos

```
Canal-gospel- conteudo/Abril-OpcaoE/shorts/
  YYYY-MM-DD-tema-roteiro.md
  YYYY-MM-DD-tema-imagem-base.png
  YYYY-MM-DD-tema-voz-raw.wav
  YYYY-MM-DD-tema-voz-polida.wav
  YYYY-MM-DD-tema-VIDEO-FINAL.mp4
  YYYY-MM-DD-tema-METADATA.md (UPLOAD-READY com todos campos Studio)
```

---

## 🔄 Refinamento contínuo

Cada Short executado deve gerar 1 aprendizado salvo em:
- `.planning/workstreams/gospel/phases/00-fundacao/log.md` (curto prazo)
- Memória durável (longo prazo) se for padrão recorrente

Após 3 Shorts → revisar pipeline e ajustar.
