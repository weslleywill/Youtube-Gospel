# Polir voz do WhatsApp → narrador profissional (100% grátis, sem API)

> **Input**: áudio gravado no WhatsApp (celular, com ruído, pausas irregulares, volume inconsistente)
> **Output**: voz profissional padrão podcast/YouTube (-16 LUFS, sem ruído, pausas cortadas, presence forte)
> **Custo**: ZERO — só ffmpeg + RNNoise models (public domain)

## Quando usar

- Gravou a voz do roteiro no celular pelo WhatsApp (modo "send voice note")
- Tem pausas longas de "hmm... uh..."
- Tem ruído de fundo (chuva, trânsito, eco do cômodo)
- Volume inconsistente (começa alto, fica baixo)

## Pipeline — workflow C (DeepFilterNet3 local + Adobe manual opcional)

Ver skill `.claude/skills/voice-enhancer/SKILL.md` pro detalhe técnico. Resumo:

```
WhatsApp .ogg
    ↓ [1] deep-filter.exe (DeepFilterNet3 neural)  → PESQ 3.5-4.0+ (≈ Adobe Podcast)
    ↓ [2] ffmpeg silenceremove                     → pausas cortadas
    ↓ [3] ffmpeg highpass + EQ presence            → voz "à frente"
    ↓ [4] ffmpeg compand (compressor)              → dinâmica de narrador
    ↓ [5] ffmpeg loudnorm -16 LUFS                 → padrão YouTube/podcast
    ↓ [6] (OPCIONAL) Adobe Podcast manual          → só pra pilar (30min/dia grátis)
```

**DeepFilterNet3** é o denoiser neural state-of-the-art (2023+, sucessor do RNNoise). Benchmark 2026 oficial mostra qualidade **comparável ao Adobe Podcast** (PESQ 3.5-4.0+). Mas local, offline, grátis, sem limite.

**Workflow decidido com Weslley (sessão 2026-04-23)**: Opção C — DeepFilterNet3 automático default pra todos os áudios, Adobe Podcast manual só pros **longforms pilares** (30min / 1h) quando quiser polimento extra premium.

## Como invocar (próxima sessão)

Quando gravar voz do próximo roteiro:

1. Exportar áudio do WhatsApp (Windows: abre WhatsApp Web → clica 3 pontinhos no áudio → Download; OU: envia pra si mesmo num chat e baixa pelo WhatsApp Desktop)
2. Renomeia seguindo padrão:
   ```
   2026-MM-DD-<tema>-voz-RAW.ogg
   ```
3. Salva em: `Canal-gospel- conteudo/Abril-OpcaoE/vozes/raw/`
4. Pede pro Claude: *"Polir voz WhatsApp desse arquivo: [path]"* ou *"Roda voice-enhancer no áudio de hoje"*
5. Claude invoca a skill `voice-enhancer`, rodando os 5 steps automaticamente
6. Output final em: `Canal-gospel- conteudo/Abril-OpcaoE/vozes/2026-MM-DD-<tema>-voz-FINAL.mp3`

## Ganhos típicos antes → depois

| Métrica | WhatsApp RAW | Pós-voice-enhancer |
|---|---|---|
| Loudness | -28 a -35 LUFS (variável) | -16 LUFS (padrão) |
| Ruído de fundo | Audível | Removido (ElevenLabs) |
| Pausas >1s | 5-10 por minuto | 0 (só respiração natural) |
| Presence 2-4kHz | Plana | +3dB (voz "à frente") |
| Rumble <80Hz | Presente | Removido |
| True Peak | Varia | ≤ -1 dBTP (safe pra streaming) |

## Infraestrutura usada (tudo já instalado, zero custo)

- **ffmpeg 8.1** — já instalado, tem filtros nativos `silenceremove`, `compand`, `loudnorm`, `equalizer`, `highpass`
- **DeepFilterNet3 binary** — `pgsa/bin/deep-filter.exe` (v0.5.6, 26MB, modelo neural embutido)
- **RNNoise models** — `pgsa/rnnoise-models/` (fallback se DeepFilterNet3 falhar)
- **Skill `voice-enhancer`** local
- ~~ElevenLabs MCP~~ — NÃO usado (você não tem API)
- **Adobe Podcast Enhance** (opcional Step 6) — você acessa manual, grátis 30min/dia

**Custo total: ZERO.** Nada de API, nada de cloud, sem limite de uso no pipeline automatizado.

## Integração no pipeline de produção do canal

O pipeline completo do vídeo fica:

```
1. Gravar voz no celular/WhatsApp       (5min)
2. voice-enhancer → voz-FINAL.mp3       (~2min automatizado)
3. Suno → trilha.mp3                    (3-5min)
4. ffmpeg → estende trilha pra 25min    (~30s)
5. Higgsfield → loop.mp4                (3-5min)
6. ffmpeg → monta voz + trilha + loop   (~1min)
7. Upload YouTube                       (5min)
                                        -----
                                        Total: ~20min
```

Antes do voice-enhancer: gravava direto, voz ficava amadora, CTR baixo. Agora: som profissional a cada upload, zero esforço manual.

## Anti-padrões (a skill já avisa mas reforçando aqui)

- ❌ Rodar compressor antes do denoise = amplifica ruído
- ❌ Rodar loudnorm antes do compressor = bombando
- ❌ Cortar silêncios antes do denoise = corta ruído junto, fica "buracos"
- ❌ Boost 2kHz em vez de 3kHz = nasal em vez de presence

## Como saber se ficou bom

Claude roda validação pós-processamento:

```bash
ffmpeg -i voz-FINAL.mp3 -filter:a ebur128 -f null - 2>&1 | tail -20
```

Se `I: -16 ± 0.5 LUFS`, `TP ≤ -1 dBTP`, `LRA: 6-11 LU` → ✅ pronto pra mix.
Se fora do target → Claude ajusta e rerun.
