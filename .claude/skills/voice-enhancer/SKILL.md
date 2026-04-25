---
name: voice-enhancer
description: Polir áudio de voz gravado no WhatsApp (ou qualquer mic consumer) pra voz de narrador profissional — 100% local e gratuito. Usa DeepFilterNet3 (neural denoiser state-of-the-art, PESQ 3.5-4.0+, qualidade ≈ Adobe Podcast) + ffmpeg pra cortar silêncios, boost presence 2-4kHz, compressão de narrador, loudness -16 LUFS (padrão podcast/YouTube). Zero API, zero custo. Use quando usuário pedir "melhorar voz", "polir áudio", "cortar silêncio", "áudio do WhatsApp ficar profissional", "voz de narrador", "som de podcast".
---

# Voice Enhancer — pipeline 100% local, qualidade Adobe Podcast

**Objetivo**: áudio WhatsApp → voz narrador profissional em 6 steps automatizados. Sem API, sem custo, qualidade comparável ao Adobe Podcast Enhance.

## 🎯 Pipeline (workflow C — DeepFilterNet local + Adobe manual opcional)

```
WhatsApp OGG/MP3
    ↓ [1] deep-filter.exe (DeepFilterNet3 neural) → voz limpa PESQ 3.5-4.0+
    ↓ [2] ffmpeg silenceremove                    → pausas longas cortadas
    ↓ [3] ffmpeg highpass + EQ presence           → voz "à frente"
    ↓ [4] ffmpeg compand (compressor)             → dinâmica de narrador
    ↓ [5] ffmpeg loudnorm -16 LUFS                → padrão YouTube/podcast
    ↓ [6] (OPCIONAL) Adobe Podcast manual         → polimento extra pra vídeos pilar
```

## Pré-requisitos (instalados)

- **ffmpeg 8.1** ✅ — filtros nativos silenceremove, compand, loudnorm, etc.
- **DeepFilterNet3 binary** ✅ — `pgsa/bin/deep-filter.exe` (v0.5.6, 26MB, modelo embutido)
- **RNNoise models** ✅ — `pgsa/rnnoise-models/` (fallback se deep-filter falhar)

## Por quê DeepFilterNet3 > RNNoise > Adobe Podcast

Benchmarks 2026 oficiais (research papers):

| Métrica | RNNoise | **DeepFilterNet3** | Adobe Podcast |
|---|---|---|---|
| PESQ (qualidade) | 3.88 | **3.5-4.0+** | ~4.0 |
| STOI (inteligibilidade) | 0.92 | **>0.95** | ~0.95 |
| Ruído não-estacionário | Meio | **Forte** | Forte |
| Artefatos | Médio | **Baixo** | Baixo |
| Custo | Grátis | **Grátis** | Grátis (30min/dia) |
| Fragilidade | Zero | **Zero** | Alta (web scrape) |

**DeepFilterNet3 entrega qualidade ≈ Adobe Podcast** mas local/offline/sem limite.

## Workflow passo-a-passo

### Input

Áudio do WhatsApp (`.opus`/`.ogg`/`.mp3`):

```
Canal-gospel- conteudo/Abril-OpcaoE/vozes/raw/2026-04-23-coracao-cansado-voz-RAW.ogg
```

### Step 0 — Converter WhatsApp OGG → WAV (deep-filter precisa WAV 48kHz)

```bash
ffmpeg -i voz-RAW.ogg -ar 48000 -ac 1 voz-RAW.wav
```

### Step 1 — DeepFilterNet3 denoise (o equivalente Adobe Podcast grátis)

```bash
pgsa/bin/deep-filter.exe -D --pf --atten-lim-db 100 -o pgsa/_tmp voz-RAW.wav
```

**Parâmetros**:
- `-D` — compensa delay do STFT (mantém sync perfeito)
- `--pf` — post-filter (atenuação mais forte)
- `--atten-lim-db 100` — full noise reduction
- `-o pgsa/_tmp` — output dir
- Default model — embutido no binário, já otimizado

**Output**: `pgsa/_tmp/voz-RAW_DeepFilterNet3.wav` (voz limpa neural)

### Step 2 — Corta silêncios longos

```bash
ffmpeg -i voz-RAW_DeepFilterNet3.wav -af "silenceremove=start_periods=1:start_silence=0.2:start_threshold=-40dB:stop_periods=-1:stop_silence=0.5:stop_threshold=-40dB" voz-cortada.wav
```

### Step 3 — EQ + highpass

```bash
ffmpeg -i voz-cortada.wav -af "highpass=f=80, equalizer=f=3000:t=q:w=1.5:g=3, equalizer=f=200:t=q:w=1:g=-2" voz-eq.wav
```

### Step 4 — Compressor (compand) — dinâmica de narrador

```bash
ffmpeg -i voz-eq.wav -af "compand=attacks=0.3:decays=0.8:points=-80/-80|-45/-15|-27/-9|0/-7:soft-knee=6:gain=0" voz-comp.wav
```

### Step 5 — Loudness -16 LUFS (padrão YouTube/podcast)

```bash
ffmpeg -i voz-comp.wav -af "loudnorm=I=-16:TP=-1:LRA=11" -ar 48000 -c:a libmp3lame -b:a 192k voz-FINAL.mp3
```

### Step 6 (OPCIONAL) — Adobe Podcast Enhance manual

**Quando usar**: apenas pro **longform pilar** (vídeo de 30min ou 1h que vai fazer muito view).
**Como**: fazer manualmente no navegador — podcast.adobe.com/enhance → upload `voz-FINAL.mp3` → baixa `voz-FINAL-adobe.mp3`.
**Custo**: grátis até 30min/dia (5min de vídeo longform cabe folgado).

Não rodar Adobe em Shorts/Reels do dia-a-dia — DeepFilterNet3 já é suficiente.

## 🚀 Pipeline em 1 comando (Steps 2-5 encadeados após deep-filter)

Depois de rodar `deep-filter.exe` (Step 1), um único ffmpeg faz Steps 2-5:

```bash
ffmpeg -i "pgsa/_tmp/voz-RAW_DeepFilterNet3.wav" \
  -af "silenceremove=start_periods=1:start_silence=0.2:start_threshold=-40dB:stop_periods=-1:stop_silence=0.5:stop_threshold=-40dB, \
       highpass=f=80, \
       equalizer=f=3000:t=q:w=1.5:g=3, \
       equalizer=f=200:t=q:w=1:g=-2, \
       compand=attacks=0.3:decays=0.8:points=-80/-80|-45/-15|-27/-9|0/-7:soft-knee=6:gain=0, \
       loudnorm=I=-16:TP=-1:LRA=11" \
  -ar 48000 -c:a libmp3lame -b:a 192k \
  "Canal-gospel- conteudo/Abril-OpcaoE/vozes/2026-04-23-coracao-cansado-voz-FINAL.mp3"
```

## Convenção de nomes

```
2026-04-23-coracao-cansado-voz-RAW.ogg               (original WhatsApp)
2026-04-23-coracao-cansado-voz-RAW_DeepFilterNet3.wav (após Step 1, intermediário)
2026-04-23-coracao-cansado-voz-FINAL.mp3             (steps 1-5, padrão diário)
2026-04-23-coracao-cansado-voz-FINAL-adobe.mp3       (após Step 6 opcional, só pilar)
```

## Validação pós-processamento

```bash
ffmpeg -i voz-FINAL.mp3 -filter:a ebur128 -f null - 2>&1 | tail -20
```

**Targets**: I: -16 ± 0.5 LUFS · TP ≤ -1 dBTP · LRA: 6-11 LU

## Fallback — se deep-filter.exe falhar

Usar o pipeline RNNoise anterior (ainda disponível em `pgsa/rnnoise-models/`):

```bash
ffmpeg -i voz-RAW.wav -af "arnndn=m=pgsa/rnnoise-models/somnolent-hogwash-2018-09-01/sh.rnnn" voz-denoised.wav
```

Qualidade ligeiramente inferior (PESQ 3.88 vs 3.5-4.0+ do DeepFilterNet3), mas ainda boa.

## Anti-padrões

- ❌ Rodar compressor ANTES do denoise — amplifica ruído
- ❌ Cortar silêncios ANTES do denoise — deixa "buracos"
- ❌ Boost em 2kHz em vez de 3kHz — nasal em vez de presence
- ❌ Highpass >150Hz — voz fica fina
- ❌ Loudnorm ANTES do compressor — bombando
- ❌ Rodar Adobe Podcast em TODOS os áudios — é só pra pilar, desperdiça limite diário
- ❌ Usar `.ogg` direto no deep-filter — converter pra WAV 48kHz mono primeiro

## Skills relacionadas

- `ffmpeg-usage` — recipes base ffmpeg
- `mastering-engineer` — guidance mastering final
- `suno-song-creator` → Voice space do Suno deixa 2-6kHz aberto pra voz; esta skill enche com voz limpa

## Custo

**Zero.** ffmpeg + DeepFilterNet3 binary = public domain / open source. Sem API, sem cloud, sem limite. Adobe Podcast opcional no Step 6 é grátis até 30min/dia (manual).
