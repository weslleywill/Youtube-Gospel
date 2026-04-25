# PLAN — Fase 00 Fundação (Gospel)

> Objetivo: canal vivo + 1º longform publicado + ebook na Hotmart + pipeline validado
> Período: 22-28 Abr 2026 (7 dias)
> Deliverables: 7 (ver [REQUIREMENTS.md](../../../../REQUIREMENTS.md))

---

## 📋 Tarefas atômicas (ordem de execução)

### Dia 1-2 ✅ FEITO (22-23 Abr)

- [x] Aprovar Opção E Híbrida (pivot de H27)
- [x] Configurar OAuth YouTube Studio MCP
- [x] Criar 14 arquivos base em `pgsa/` e `_obsidian-setup/`
- [x] Validar pipeline Suno → master ffmpeg
- [x] Validar Higgsfield image-to-video 10s loop
- [x] Produzir GSP-VIDEO-01 (trilha + voz + vídeo)

### Dia 3 (HOJE 23 Abr) 🔴 EM ANDAMENTO

- [ ] **Upload GSP-VIDEO-01** no YouTube (22h)
  - Pipeline: [pipelines/PIPELINE-PRODUCAO-CONTEUDO.md](../../../../../pipelines/PIPELINE-PRODUCAO-CONTEUDO.md)
  - Arquivo: `Canal-gospel- conteudo/Abril-OpcaoE/finais/2026-04-22 - Oracao Ansiedade 30min - VIDEO-FINAL.mp4`
  - Thumb: aprovada ("ENTREGA")
  - Descrição + tags: geradas
- [ ] **Criar GSP-HOTMART-01** (produto R$19,90 + link UTM) ~1h
- [ ] **Revisar GSP-EBOOK-01** draft linha-a-linha (pode ser sessão separada Claude)

### Dia 4-5 (24-25 Abr)

- [ ] **Gravar GSP-SHORT-01** Versículo do dia (Sex 19h)
- [ ] **Setup GSP-LIVE-01** OBS + Restream (Sex 21h)
  - Pipeline: [pgsa/LIVE-247-SETUP.md](../../../../../pgsa/LIVE-247-SETUP.md)
- [ ] **Batch gravar 3-4 orações** semana seguinte (Sáb 2h)

### Dia 6 (26 Abr Domingo)

- [ ] **Gravar + subir GSP-VIDEO-02** Longform 1h Provisão Salmo 23 (22h)
  - Roteiro: [pgsa/ROTEIRO-ORACAO-GUIADA-TEMPLATE.md#maio-provisao](../../../../../pgsa/ROTEIRO-ORACAO-GUIADA-TEMPLATE.md)
  - Thumb: template 06 cordeiro

### Dia 7 (27 Abr Segunda)

- [ ] **Subir GSP-VIDEO-03** 8h OBRIG Provisão (06h)
- [ ] **Subir GSP-EBOOK-01** Ansiedade live na Hotmart (final de semana)

### Dia 7 (28 Abr Terça) — GATE CHECK

- [ ] Verificar `VERIFICATION.md`
- [ ] `/gsd-audit-milestone 00-fundacao`
- [ ] Se passou → avançar pra fase 01-validacao
- [ ] Se falhou → iterar + replanejar (extender até sábado se precisar)

---

## 🔧 Skills/pipelines que vão ser usados

| Tarefa | Skill/Pipeline |
|---|---|
| Upload YouTube | `mcp__youtube-studio__youtube_upload_video` |
| Produção longform | [pipelines/PIPELINE-PRODUCAO-CONTEUDO.md](../../../../../pipelines/PIPELINE-PRODUCAO-CONTEUDO.md) |
| Masterização áudio | `ffmpeg-usage` skill |
| Live setup | [pgsa/LIVE-247-SETUP.md](../../../../../pgsa/LIVE-247-SETUP.md) |
| Produto Hotmart | Manual (navegador) |
| Descrição/tags | Skill `copywriting` |

---

## ⚠️ Riscos identificados

1. **Policy strike no 1º upload** (Higgsfield 10s loop detectado) — mitigação: Cícero-style animado (não estático)
2. **Voz de 11s pode ter CVR baixo** — mitigação: usar formato "abertura + trilha solo"; se CVR < 0,02%, gravar 5min completos no próximo
3. **Hotmart setup demorar** — mitigação: criar produto ANTES do upload (link pra pôr na descrição)
4. **Live 12h consumir muito data** — mitigação: OBS bitrate 4500-5000 kbps (não ultra)

---

## 📊 Log de execução

_(atualizar enquanto executa)_

### 2026-04-23
- ✅ Roteiro GSP-VIDEO-04 "Oração Pra Coração Cansado" 30min pronto (skills: copy, hook-writer-sms, claude-youtube, seo-image-gen, claude-seo)
- ✅ Suno fields separados (Styles, Exclude, Vocal, Lyrics Mode, Weirdness 30%, Style Inf 70%, Title) documentados
- ✅ Padrão de nomes de arquivo com data `2026-04-23-coracao-cansado-*` em todas as etapas (trilha/voz/master/thumb/higgsfield/final)
- ✅ Hook PostToolUse `update-dashboard.py` instalado em `.claude/settings.local.json` — dashboard Obsidian agora auto-atualiza
- ✅ Fluxo imagem corrigido: texto "ELE OUVE" embutido no prompt (sem Canva) + 2 prompts por roteiro (ChatGPT obrigatório + modelo 2 recomendado)
- ✅ Template `pgsa/TEMPLATE-PROMPT-IMAGEM.md` criado com árvore de decisão de modelos (Ideogram/MJ/Flux/nano-banana)
- ✅ **Integração ecossistema-personal**: 8 skills + 5 prompts de imagem importados de `ecossistema-personal-de-sucesso/{04-imagens-ia, 07-video}` → `.claude/skills/` (lazy-load) + `pgsa/referencias/prompts-ia/` (banco). CLAUDE.md atualizado com seção de prompts.
- ✅ References pesadas (37 MB × 2) das libraries de 10k prompts trazidas de volta — lazy-load por padrão (só carregam em contexto quando skill é invocada, não afeta sessões normais).
- ✅ **Correção modelos Higgsfield (parcial)**: pesquisa em higgsfield.ai identificou modelos reais (Nano Banana Pro/Gemini 3.0, Soul 2.0, GPT Image, Seedream 4.0, Flux Kontext Max, Reve, WAN 2.2). Ideogram era alucinação — NÃO existe no Higgsfield.
- ✅ **Catálogo completo Higgsfield** (via prints do Weslley): criado [pgsa/HIGGSFIELD-MODELOS.md](../../../../../pgsa/HIGGSFIELD-MODELOS.md) — lista definitiva de 24+ modelos de imagem e 15+ de vídeo. Fonte da verdade anti-alucinação.
- ✅ **Roteiro + template atualizados** com modelos REAIS confirmados:
  - **Imagem Modelo 2 pra thumb "ELE OUVE"**: Nano Banana Pro (Google Gemini 3.0) — engine DIFERENTE do ChatGPT (regra: Modelo 2 não pode ser o mesmo engine do Modelo 1).
  - **Vídeo Modelo 1**: Kling 3.0 EXCLUSIVE (4K, image-to-video direto) — **corrigido** após descoberta de que Kling 3.0 Motion Control exige vídeo de input (não aceita imagem pura). HIGGSFIELD-MODELOS.md + TEMPLATE atualizados com essa distinção pra evitar repetir o erro.
  - **Vídeo Modelo 2 (mais em conta)**: Minimax Hailuo — oficialmente marcado "fastest and most affordable" no Higgsfield.
  - Árvores de decisão atualizadas pra texto/retrato/fotorealismo/cinematográfico.
- ✅ **3 regras novas salvas em memory** (valem em todas sessões futuras):
  - Prompts sempre adaptados ao modelo alvo
  - Nome de arquivo sempre em caixinha ``` copy-paste (igual Suno)
  - Modelo 2 sempre DIFERENTE do Modelo 1 + pra vídeo sempre mais em conta
- ✅ **Escolha de thumb**: das 2 variações geradas, recomendada a **Thumb 2** (simétrica, silhueta pura, melhor pra animação Kling).
- ✅ **PRODUÇÃO VÍDEO COMPLETA GSP-VIDEO-04** "Oração Pra Coração Cansado" 30min — pipeline executado autonomamente:
  - **Voz polida** — pipeline voice-enhancer steps 2-5 (Adobe já denoisou Step 1): concat parte01+parte02, silenceremove, EQ presence +3dB 3kHz, compand, loudnorm. Output: 1:42 em -15.2 LUFS, arquivos raw renomeados em `vozes/raw/voz-parte01-principal-adobe.wav` + `voz-parte02-final-adobe.wav`.
  - **Trilha Suno estendida** 3:05 → 30:00 exato com fade-in 2s / fade-out 10s (ffmpeg stream_loop).
  - **Master mix** 30:00 em -15.5 LUFS / LRA 7.0 LU: voz delay 2s + volume +6dB + trilha ducked (-8dB entre 2-112s) + loudnorm final.
  - **Vídeo final** Higgsfield loop 10s × 180 + áudio master + encode h264/AAC 1080p @ 24fps, rodando em background.
  - Chapters do roteiro atualizados com timings REAIS do master.
- ✅ **Skill voice-enhancer + DeepFilterNet3 binary** instalados: pipeline 100% local/grátis pra próximas gravações (6 steps, PESQ 3.5-4.0+, qualidade ≈ Adobe Podcast). Adobe manual fica opcional pra pilares.
- ✅ **4 skills Suno + Remotion instaladas**:
  - `suno-song-creator` (via `git clone nwp/suno-song-creator-plugin`) — plugin completo com 4 sub-skills (Song Creator, Research Artist, Review Song, Upload via Chrome MCP) + utils de character counting
  - `remotion-video-creation`, `remotion-video-skill`, `video-toolkit` (do ecossistema-personal/07-video) — geração de vídeo programático com React Remotion
  - Templates Remotion React (Composition.tsx, Root.tsx, index.ts + package.json) copiados pra `pgsa/remotion-templates/`
- ✅ **Prompt Suno entregue em formato 2-modelos** seguindo a regra:
  - Prompt 1 = versão anterior (F minor 45 BPM, simples)
  - Prompt 2 = V4 gerado via skill `suno-song-creator` — Suno-native format com tags `[Genre]/[Mood]/[Tempo]/[Instrumentation]/[Harmony]/[Form]/[Production]/[Voice space]/[Constraints]`, copyright-safe (descritores técnicos em vez de "in the style of Cícero Euclides"), instrumentação específica ("grand piano felt-muted hammers"), production specs explícitas.
- [ ] ⏳ 22h: upload GSP-VIDEO-01 (Ansiedade)
- [ ] ⏳ criar produto Hotmart

### 2026-04-22
- ✅ Pipeline validado (áudio + vídeo 30min montado)
- ✅ Higgsfield Cícero-style funcionou
- ✅ Voz gravada (11s, aproveitada como abertura)
