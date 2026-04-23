# 🏗️ PIPELINE OPÇÃO E — Produção Oração Guiada (passo-a-passo)

> **Uso**: pipeline completo pra produzir 1 longform de 30min de oração guiada.
> **Aplicável também**: longform 10min (só oração, sem trilha extra), 1h (1min voz + 59min trilha), 8h (1-2min voz + trilha extensão).
> **Tempo humano**: 30-45min por vídeo 30min | ~45-50min vídeo 1h/8h
> **Tempo máquina idle paralelo**: 30-60min (pode fazer outra coisa)

---

## 📋 ETAPAS (1 longform 30min)

| # | Etapa | Ferramenta | Humano | Idle |
|---|---|---|---|---|
| 0 | Rodar CHECKLIST-PRE-PRODUCAO | Obsidian | 5min | — |
| 1 | Escrever/adaptar roteiro 5min (template ROTEIRO-ORACAO-GUIADA) | Claude Code + template | 5min | — |
| 2 | Gravar voz (1-3 takes) | Celular / microfone USB | 15min | — |
| 3 | Gerar trilha Suno 3-5min (prompt do arquivo PROMPTS-SUNO-TRILHA) | Suno Pro web | 2min | 5min |
| 4 | Master áudio −14 LUFS | ffmpeg script | 1min | 2min |
| 5 | Estender trilha 3min → 25min (crossfade) | ffmpeg script | 1min | 5min |
| 6 | Gerar 3-4 clips Higgsfield 5s (multi-visual) | Higgsfield web | 2min | 20-30min paralelo |
| 7 | Mixar voz + trilha (voz em 0-5min, trilha de fundo, depois trilha só) | ffmpeg | 2min | 3min |
| 8 | Concatenar clips Higgsfield → 30min loop | ffmpeg | 1min | 10min |
| 9 | Mux vídeo + áudio final | ffmpeg | 1min | 5min |
| 10 | Gerar thumb (template THUMB-TEMPLATE-CICERO + Canva) | Higgsfield + Canva | 5min | 3min idle |
| 11 | SEO pack (título + descrição + tags + pinned) | Claude + TEMPLATES-SEO-YOUTUBE | 5min | — |
| 12 | Upload YouTube (manual OU youtube-studio MCP após OAuth) | Browser / MCP | 3min | 30-60min upload |
| 13 | Pinned comment + link ebook do mês | Manual | 2min | — |
| **TOTAL HUMANO** | | | **~30-45min** | **~60-90min paralelo** |

---

## 🎙️ ETAPA 2 — GRAVAÇÃO VOZ (detalhado)

### Setup
- Ambiente silencioso (fecha janela, desliga ar, celular modo avião)
- Microfone: celular com app "Voice Memos" OU USB (Fifine K669, ~R$200)
- Distância: 15-20cm da boca
- Ângulo: 45° lateral (evita plosivas "P" e "B")

### Performance
- Volume normal (não sussurrar, não gritar)
- Velocidade lenta (+20% mais devagar que conversa normal)
- Pausas respiratórias PROPOSITAIS (ouvir entre frases = intimidade)
- 2-3 takes → escolhe o melhor

### Export
- MP3 192 kbps, Mono
- Salvar em: `Canal-gospel- conteudo/<Mês>/vozes/oracao-<tema>-<data>.mp3`

---

## 🎵 ETAPA 3-5 — TRILHA SUNO + EXTENSÃO

### 3. Suno
1. Abre Obsidian → dashboard → pega prompt do dia de `PROMPTS-SUNO-TRILHA-DE-FUNDO.md`
2. Cola no Suno web → **Custom** → gera 2 variantes
3. Ouve ambas → escolhe a melhor → download MP3

### 4. Master (ffmpeg)
```bash
ffmpeg -i trilha-raw.mp3 -filter:a "loudnorm=I=-14:TP=-1:LRA=7" -b:a 192k trilha-mastered.mp3
```

### 5. Estender 3min → 25min (crossfade batch)
Script já existe no projeto. Copia `pgsa/scripts/extend-audio.sh` e roda:
```bash
bash extend-audio.sh trilha-mastered.mp3 25 # 25 = minutos alvo
```
Output: `trilha-mastered-25min.mp3` com crossfades suaves (sem clicks).

---

## 🎨 ETAPA 6 — HIGGSFIELD MULTI-CLIP (defesa policy)

### Gerar 3-4 clips diferentes (não 1 só)

**Exemplo pra oração ansiedade**:
- Clip A (5s): "dark bedroom with soft candle, moonlight through window, peaceful atmosphere"
- Clip B (5s): "opened Bible page turning in soft light, dust particles floating"
- Clip C (5s): "gentle rain drops on window at night, blurred city lights"
- Clip D (5s): "starry night sky with slow moving clouds, cinematic"

### Download cada clip MP4

Salvar em: `Canal-gospel- conteudo/<Mês>/clips/oracao-<tema>/A.mp4`, `B.mp4`, etc.

---

## 🔊 ETAPA 7 — MIX VOZ + TRILHA

Estrutura final de áudio do 30min:
```
[0:00-5:00]  voz forte (−3dB) + trilha de fundo (−20dB)
[5:00-5:10]  fade trilha pra +0dB (primeiro plano)
[5:10-30:00] só trilha em +0dB (meditação)
```

Script ffmpeg (simplificado):
```bash
ffmpeg -i voz.mp3 -i trilha-25min.mp3 -filter_complex "
[0:a]volume=1.0,apad=whole_dur=30:00[voz_padded];
[1:a]volume=0.2,afade=t=out:st=300:d=10[trilha_bg];
[1:a]volume=1.0,adelay=310000|310000[trilha_solo];
[voz_padded][trilha_bg]amix=inputs=2:duration=longest[parte1];
[parte1][trilha_solo]amix=inputs=2:duration=longest[final]
" -map "[final]" -b:a 192k audio-final-30min.mp3
```

(Tem template script em `pgsa/scripts/mix-voz-trilha.sh` — chamar com 2 args.)

---

## 🎬 ETAPA 8-9 — VÍDEO 30MIN + MUX

### 8. Concatenar clips Higgsfield em loop até 30min

```bash
# Cria arquivo de lista
echo "file 'A.mp4'
file 'B.mp4'
file 'C.mp4'
file 'D.mp4'" > clips-list.txt

# Loop 30min: 4 clips de 5s = 20s. Precisa 90 loops pra 30min = 30*60/20 = 90
for i in {1..90}; do cat clips-list.txt >> loop-list.txt; done

# Concat
ffmpeg -f concat -safe 0 -i loop-list.txt -c copy video-30min.mp4
```

### 9. Mux vídeo + áudio (H264 1080p + AAC)
```bash
ffmpeg -i video-30min.mp4 -i audio-final-30min.mp3 \
  -c:v copy -c:a aac -b:a 192k -shortest \
  "Canal-gospel- conteudo/Abril-OpcaoE/30min-oracao-ansiedade-01.mp4"
```

---

## 📝 ETAPA 11 — SEO PACK (5min)

Usar template `pgsa/TEMPLATES-SEO-YOUTUBE.md` + adaptação:

**Título**: 
```
🙏 Oração Pra [DOR DO MÊS] | Fundo Musical 30min Gospel Pra Descansar
```

**Descrição** (500+ palavras — ajuda policy + SEO):
```
🙏 Oração guiada pra [DOR] + fundo musical instrumental 30 minutos...

[Devocional escrito 500 palavras — expande o tema, versículos, aplicação]

Ideal para:
• Orar antes de dormir
• Meditar em casa
• Sentir a presença de Deus
• Entregar [DOR] a Deus

━━━━━━━━━━━━━━━━━━━
📖 EBOOK DO MÊS: 30 Orações Pra [Tema] — R$19,90
👉 [Link Hotmart UTM]
━━━━━━━━━━━━━━━━━━━

⏱ CAPÍTULOS:
00:00 - Abertura
00:10 - Hook
00:25 - Promessa
00:55 - Oração Guiada
04:30 - CTA Ebook
05:00 - Meditação com Trilha
━━━━━━━━━━━━━━━━━━━

🎵 Sobre o canal:
[Sobre — 3 linhas]

⚠️ DIREITOS AUTORAIS:
Voz e roteiro originais. Trilha instrumental original (Suno Pro licença comercial).
© 2026 Gospel Pra Descansar.

#OracaoGuiada #[TEMA] #GospelInstrumental #FundoMusicalOracao
```

**Tags**: 10 tags max, puxar de `pgsa/TEMPLATES-SEO-YOUTUBE.md`

**Pinned comment**: Versão A/B/C rotacionada (catálogo ebook do mês)

---

## 📤 ETAPA 12 — UPLOAD (3min)

**Se OAuth YouTube MCP ativo**:
```
Claude Code: invoca youtube-studio:youtube_upload_video com:
- title, description, tags, thumbnail
- scheduled_for: "2026-04-27T06:00:00-03:00"
- privacy_status: "public"
- category_id: 10 (Music) OU 22 (People & Blogs)
```

**Se ainda manual (Abril)**: abre YouTube Studio, clica em **+ Criar**, faz upload, preenche campos da mesma forma.

---

## ⚡ PIPELINE RÁPIDO — LONGFORM 1H (Dom 22h)

Mesma estrutura, mas:
- Voz: 1-2min intro só (hook + promessa + 30s de convite)
- Trilha: 58-59min (única faixa estendida, sem voz depois)
- Tempo humano: 40-45min

## ⚡ PIPELINE RÁPIDO — LONGFORM 8H (Seg 06h — obrigatório)

Mesma estrutura, mas:
- Voz: 1-2min intro só
- Trilha: 7h58min (estender 3min → 8h via crossfade batch — script existe)
- Tempo humano: 45-50min
- Tempo idle (extensão áudio): 15-20min idle + 30min upload

---

## 🤖 AUTOMAÇÃO POSSÍVEL MÊS 2+

1. **Higgsfield batch**: gera 20 clips de uma vez (10 por tema). Reusa no pipeline.
2. **Script "produzir-30min.sh"**: passa roteiro + tema como arg, roda tudo automático (Suno é manual, resto automatizado).
3. **Scheduler**: batcha upload de 3 vídeos de uma vez Sáb 22h (agenda semana inteira).

Meta mês 2: tempo humano 30min → **20min** por longform.

---

## 🛡️ CHECKLIST DE DEFESA POLICY (pré-upload)

- [ ] Voz humana presente (mínimo 1min 8h/1h, 5min+ nos 30min, 10min nos curtos)
- [ ] Visual tem MOVIMENTO real (3+ clips Higgsfield, não ping-pong)
- [ ] Descrição 500+ palavras (devocional escrito, não boilerplate)
- [ ] Chapters no vídeo (4+ marcadores)
- [ ] Tags do tema do mês (não genéricas)
- [ ] Thumb não é genérica (leão/águia/fogo + palavra CAPS + logo GPD)

**Se falhar 1 item → NÃO sobe ainda. Conserta.**
