# Prompts Suno — Canal Gospel Instrumental

> Copie e cole no Suno (modo Custom). Use v5.5. Selecione **Instrumental = ON** pra garantir zero voz.
> Cada prompt gera loop de 2-3min que estendemos via ffmpeg pra 8h ou 1h.

---

## Como usar o Suno pro canal

1. Abrir https://suno.com
2. Modo **Custom** (não Basic)
3. Marcar ✅ **Instrumental**
4. Em "Style" colar o prompt (tags de estilo)
5. "Lyrics" deixar vazio (instrumental)
6. Model: **v5.5**
7. Gerar 2 variações, escolher a que tiver loop mais natural
8. Baixar .mp3 (não .wav — economiza espaço)

**Duração ideal**: 2-3 minutos. Suno gera ~4 min por padrão — usar "Extend" se precisar ou cortar via ffmpeg depois.

---

## Prompts por tipo de vídeo

### 🌙 Prompt 1 — SONO 8h base (mais usado)

```
peaceful gospel instrumental, soft piano and acoustic guitar,
slow worship tempo, no vocals, relaxing sleep music,
warm and soothing, church hymn style, 60 BPM,
reverb-heavy atmosphere, sustained strings background,
deeply calming, fade in fade out
```

**Quando usar**: vídeos de 8h puro sono. Padrão semanal (segunda-feira).

---

### 🌙 Prompt 2 — SONO 8h com chuva (variação)

```
gentle gospel piano with soft rain ambience,
acoustic worship music, instrumental hymn,
relaxing, sleep music, no vocals, 55 BPM,
muted tones, meditative, spiritual calm,
light cello and violin background, ethereal
```

**Quando usar**: thumbnail com paisagem chuvosa. Título tipo "Gospel Instrumental com Chuva Pra Dormir".

---

### 🌙 Prompt 3 — SONO leitura bíblica

```
soft christian worship instrumental,
acoustic guitar picking, slow piano melody,
peaceful bible reading background,
no vocals, 70 BPM, warm tone, sacred atmosphere,
prayer-friendly, meditation-ready, church-like reverb
```

**Quando usar**: "Música gospel pra leitura bíblica noturna" — converte leitor/estudo.

---

### ☀️ Prompt 4 — ORAÇÃO MATINAL (1h)

```
uplifting gentle christian instrumental,
bright acoustic guitar, soft piano,
morning prayer music, no vocals, 75 BPM,
hopeful and peaceful, sunrise ambience,
gospel worship style, encouraging,
subtle strings and flute, warm tone
```

**Quando usar**: vídeos de 1h oração/reflexão matinal. Padrão semanal (quarta-feira).

---

### 🙏 Prompt 5 — ADORAÇÃO PROFUNDA (1h)

```
deep worship instrumental, piano-led,
contemporary christian gospel, no vocals,
60 BPM, emotional, sacred, contemplative,
swelling strings, soft choir pads,
tears-inducing but peaceful, spiritual surrender,
full orchestral gospel, cinematic worship
```

**Quando usar**: títulos tipo "Adoração Pra Sentir a Presença de Deus".

---

### 💝 Prompt 6 — CURA EMOCIONAL (1h)

```
healing christian instrumental music,
soft piano, gentle pads, no vocals,
emotional release, gospel prayer ambience,
50 BPM, minor-to-major progression,
restorative, tears-to-peace journey,
soft violin, subtle harp, warm reverb
```

**Quando usar**: targeting "gospel pra cura da alma" / "oração pra cura interior".

---

### 😌 Prompt 7 — ANSIEDADE / PAZ (1h)

```
calming gospel instrumental for anxiety,
simple piano melody, acoustic guitar harmonics,
no vocals, 55 BPM, peaceful breathing rhythm,
anti-anxiety worship music, christian calm,
ambient pads, soft rain distant, gentle hymn feel,
spiritual serenity
```

**Quando usar**: títulos "Gospel pra Acalmar Ansiedade" (alto volume de busca).

---

### 👼 Prompt 8 — SALMOS / HINOS TRADICIONAIS

```
traditional gospel hymns instrumental,
classic church piano, organ subtle,
no vocals, hymn melody style (Amazing Grace-like),
70 BPM, reverent, timeless, sacred,
warm acoustic guitar, light strings,
old-church atmosphere
```

**Quando usar**: hooks "Salmos Instrumentais Clássicos Pra Dormir".

---

### 🕯️ Prompt 9 — CULTO NOTURNO (ambiance vela)

```
candlelight prayer instrumental,
soft piano and ambient strings,
no vocals, 58 BPM, reverent night atmosphere,
christian worship meditation,
intimate chapel vibe, low-fi reverb,
subtle chimes, sacred silence between notes
```

**Quando usar**: thumbnails com vela acesa + Bíblia. Converte bem pra audiência devocional.

---

### 🎹 Prompt 10 — SÓ PIANO (minimalista)

```
solo gospel piano, peaceful hymn arrangement,
no vocals, 65 BPM, minimalist,
christian worship melody, sustained notes,
church hall reverb, emotional but calm,
3-chord gospel progression,
spiritual solitude
```

**Quando usar**: vídeos piano-puro. Pesquisa mostrou que "Piano Instrumental" é âncora de título top.

---

## Tabela rápida — prompt por tipo

| Tipo vídeo | Prompt | Duração | Dia upload |
|---|---|---|---|
| Sono puro 8h | 1 ou 2 | 8h | Segunda 6h |
| Sono leitura 8h | 3 | 8h | Segunda alternada |
| Oração matinal 1h | 4 | 1h | Quarta 12h |
| Adoração 1h | 5 | 1h | Quarta alternada |
| Cura 1h | 6 | 1h | Variação |
| Ansiedade 1h | 7 | 1h | Variação |
| Hinos clássicos 8h | 8 | 8h | Variação |
| Culto noturno 1h | 9 | 1h | Variação |
| Piano solo 8h | 10 | 8h | Variação |

---

## Comandos ffmpeg pra estender pra 8h ou 1h

### Loop simples 8h (sem crossfade — mais rápido)

```
ffmpeg -stream_loop -1 -i input.mp3 -t 28800 -c copy output_8h.mp3
```

### Loop 1h

```
ffmpeg -stream_loop -1 -i input.mp3 -t 3600 -c copy output_1h.mp3
```

### Loop 8h com crossfade (loop imperceptível — mais lento)

Ver `.claude/skills/ffmpeg-usage/SKILL.md` seção crossfade pra script completo.

### Fade in 10s + fade out 30s (pra noite ficar suave)

```
ffmpeg -i input_8h.mp3 -af "afade=t=in:ss=0:d=10,afade=t=out:st=28770:d=30" -c:a aac output_final.mp3
```

---

## Dicas de otimização

1. **Teste loop primeiro** em 30min antes de render 8h (economiza tempo)
2. **Prompt em inglês** tende a render melhor no Suno (ele foi treinado em corpus EN)
3. **Evitar palavras proibidas** na Style: "christian" e "gospel" ok, mas "holy spirit" / "jesus" podem ser rejeitadas
4. **Se Suno não gerar direito**: adicionar `[instrumental only, no vocals]` no final do prompt
5. **Variação semanal**: NUNCA usar mesmo prompt 2 semanas seguidas — audiência percebe e CTR cai
6. **Armazenar MP3 original**: salvar versões 2-3min originais em `pgsa/suno-library/` pra reuso futuro
