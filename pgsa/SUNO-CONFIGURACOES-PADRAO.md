# 🎛️ Suno Pro — Configurações Padrão (Trilha de Fundo Gospel)

> Use este setup TODA vez que gerar trilha pro canal. Salva como preset mental.

---

## 1️⃣ Lyrics
**Deixa VAZIO.** É instrumental — a voz vem por cima depois (sua ou ElevenLabs).

## 2️⃣ Styles (campo principal — LIMPAR as tags padrão do Suno)

❌ **Apague** as sugestões genéricas (`innocent, hypertrap, smooth groove, r and b, space synth` — NADA a ver com gospel).

✅ **Cole o prompt completo** de `pgsa/PROMPTS-SUNO-TRILHA-DE-FUNDO.md` conforme o slot (Seg 8h, Ter 30min, Dom 1h, etc.).

Exemplo Ter 20h (Oração Ansiedade):
```
Intimate Brazilian gospel piano worship for guided prayer about anxiety,
very gentle and sparse piano with soft pad background,
52 BPM, key of D minor,
meditative nighttime prayer atmosphere,
leaves space for human voice on top (background layer),
no vocals, no drums,
duration 3 min
```

## 3️⃣ Exclude Styles (More Options)

Cola isso pra garantir que NÃO venha lixo:
```
pop, edm, dance, hip hop, trap, drums, percussion, vocals, singing, choir, country, rock, metal
```

## 4️⃣ Vocal Gender
**Irrelevante** (não vai ter vocal). Pode deixar Male por default.

## 5️⃣ Lyrics Mode
**Manual** (já que Lyrics está vazio, não gera nada).

## 6️⃣ Weirdness
**20-30%** (slider baixo).
- **Por quê**: gospel piano worship é previsível e acolhedor — "weird" quebra a imersão de oração.
- Só sobe pra 40%+ em experimentais (ex: testar Harp Celestial ou Bethel-style pad).

## 7️⃣ Style Influence
**70-80%** (slider alto).
- **Por quê**: queremos que o Suno SIGA o prompt à risca (mood, BPM, instrumentos).
- Baixo (<50%) = Suno inventa demais, foge do tema.

---

## ✅ Checklist antes de clicar Create

- [ ] Lyrics VAZIO
- [ ] Styles com o prompt do slot (do PROMPTS-SUNO-TRILHA-DE-FUNDO.md)
- [ ] Exclude Styles colado
- [ ] Lyrics Mode: Manual
- [ ] Weirdness: ~25%
- [ ] Style Influence: ~75%

## 🎯 Geração em série (Suno Pro permite 10/dia)

Pra cada slot da semana, gerar **3-4 variações** com o mesmo prompt → escolher a melhor → pós-processar com ffmpeg (EQ −3dB em 12kHz + loudnorm) → estender pro tamanho final.

Pós-master padrão (ver `pgsa/PROMPTS-SUNO-TRILHA-DE-FUNDO.md#policy-shield`):
```bash
ffmpeg -i suno-raw.mp3 \
  -af "loudnorm=I=-14:TP=-1:LRA=7, equalizer=f=12000:t=h:width=2000:g=-3" \
  -b:a 192k output-mastered.mp3
```

---

## 🚨 Erros comuns a evitar

1. **Esquecer de limpar as tags padrão** — Suno segue "hypertrap" se deixar.
2. **Weirdness alto** — gera gospel "esquisito" que quebra o tom.
3. **Style Influence baixo** — foge do BPM e chave especificados.
4. **Lyrics preenchido sem querer** — Suno vira música vocal.
5. **Não colar Exclude Styles** — vem bateria/sintetizador.
