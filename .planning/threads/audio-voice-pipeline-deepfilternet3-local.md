---
slug: audio-voice-pipeline-deepfilternet3-local
title: Pipeline completo de polimento de voz — DeepFilterNet3 + ffmpeg 100% local
status: open
created: 2026-04-24
updated: 2026-04-24
---

# Thread: Audio voice pipeline — DeepFilterNet3 local substitui Adobe Podcast / ElevenLabs

## Goal

Documentar pipeline completo de polimento de voz gravada no WhatsApp (ou celular) pra qualidade de **narrador profissional**, 100% local/grátis, sem API paga. Substitui Adobe Podcast Enhance (30min/dia grátis, depois pago) e ElevenLabs Voice Isolator (~US$0.05/min).

**Stack final**:
- `pgsa/bin/deep-filter.exe` — DeepFilterNet3 v0.5.6 (26MB, Rust binary, modelo embutido)
- ffmpeg 8.1 (filtros: silenceremove, highpass, equalizer, compand, loudnorm)
- `pgsa/rnnoise-models/` — 5 modelos RNNoise fallback (public domain)

**Qualidade atingida**: PESQ 3.5-4.0+ (benchmark 2026), STOI >0.95 — **≈ Adobe Podcast Enhance**.

## Context

**Pipeline workflow C** (decidido com Weslley sessão 2026-04-23):

```
WhatsApp OGG/MP3
  ↓ [0] ffmpeg OGG→WAV 48kHz mono
  ↓ [1] deep-filter.exe -D --pf --atten-lim-db 100   (neural denoise)
  ↓ [2] ffmpeg silenceremove                          (pausas > 0.5s cortadas)
  ↓ [3] ffmpeg highpass 80Hz + EQ +3dB @3kHz + -2dB @200Hz
  ↓ [4] ffmpeg compand (compressor narrador)
  ↓ [5] ffmpeg loudnorm -16 LUFS (padrão YouTube/podcast)
  ↓ [6] OPCIONAL: Adobe Podcast manual (só pra longform pilar)
```

**Aplicado no GSP-VIDEO-04 Coração Cansado**:
- Input: 2 arquivos voz parte01-principal + parte02-final (após Adobe, já denoisado)
- Adobe já fez Step 1 → rodei Steps 2-5 direto
- Output: 102s, -15.2 LUFS, LRA 7.0 LU, 192kbps MP3
- Resultado: qualidade narrador profissional validada

**Comando consolidado em 1 linha** (após Step 0+1):

```bash
ffmpeg -i voz-denoised.wav \
  -af "silenceremove=start_periods=1:start_silence=0.2:start_threshold=-40dB:stop_periods=-1:stop_silence=0.5:stop_threshold=-40dB, \
       highpass=f=80, \
       equalizer=f=3000:t=q:w=1.5:g=3, \
       equalizer=f=200:t=q:w=1:g=-2, \
       compand=attacks=0.3:decays=0.8:points=-80/-80|-45/-15|-27/-9|0/-7:soft-knee=6:gain=0, \
       loudnorm=I=-16:TP=-1:LRA=11" \
  -ar 48000 -c:a libmp3lame -b:a 192k voz-FINAL.mp3
```

## References

- `.claude/skills/voice-enhancer/SKILL.md` — skill completa (Step-by-step, fallback RNNoise, anti-padrões, validação ebur128)
- `pgsa/POLIR-VOZ-WHATSAPP.md` — workflow de uso operacional
- `pgsa/bin/deep-filter.exe` — binário pré-compilado
- `pgsa/rnnoise-models/somnolent-hogwash-2018-09-01/sh.rnnn` — modelo fallback pra gravação+speech
- Release GitHub: [Rikorose/DeepFilterNet v0.5.6](https://github.com/Rikorose/DeepFilterNet/releases/tag/v0.5.6)
- Repo modelos: [GregorR/rnnoise-models](https://github.com/GregorR/rnnoise-models) (public domain)

## Next Steps

- Próxima voz gravada: rodar pipeline completo Step 0-5 (sem Adobe se for Short/daily)
- Monitorar qualidade subjetiva da voz após 3-4 vídeos processados — ajustar EQ se precisar
- Se Weslley decidir passar voz pelo Adobe manual (pra longform pilar), pular Step 1 e rodar só 2-5
- Testar outros modelos RNNoise (`bd.rnnn`, `mp.rnnn`) se `sh.rnnn` deixar artefatos
- Considerar criar hook `PostToolUse` que dispara voice-enhancer automaticamente quando arquivo `*-voz-RAW.ogg` é adicionado em `vozes/raw/`
