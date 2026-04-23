# Suno Track Record — Gospel Pra Descansar

> **Objetivo**: registrar cada música gerada pra não duplicar prompts/estilos + identificar o que funciona vs não funciona.
> **Modelo padrão**: Suno v5.5 Pro
> **Sliders padrão**: Weirdness 35% + Style Influence 80% + Lyrics Mode Manual

## ⚠️ REGRA PERMANENTE — como o Claude DEVE mandar sugestões Suno

Toda vez que o Claude sugerir música Suno, resposta deve:

**A) Mandar 2 VARIANTES** (pra Weslley escolher ou gerar as duas)

**B) Cada variante com cada um dos 6 campos em BLOCO SEPARADO** (copy-paste individual, não tudo numa caixa só):

1. **Styles** → bloco próprio
2. **Exclude styles** → bloco próprio
3. **Weirdness** → inline com % exato
4. **Style Influence** → inline com % exato
5. **Lyrics Mode** → inline (Manual/Auto)
6. **Song Title** → bloco próprio

**Formato-modelo** (reproduzir exatamente assim):

---

### 🎵 Variante 1 — [Nome do perfil sonoro]

**Styles** (colar no campo Styles):
```
<texto do estilo>
```

**Exclude styles** (colar no campo Exclude):
```
<negativos>
```

**Weirdness**: `XX%`
**Style Influence**: `XX%`
**Lyrics Mode**: `Manual`

**Song Title**:
```
Gospel Pra Dormir XX - Descrição
```

---

### 🎵 Variante 2 — [Outro perfil sonoro]

(mesmo formato acima)

---

Por que 2 variantes: Suno Pro tem 2.500 créditos/mês, cabe geração dupla sem stress. Com 2 estilos diferentes a gente identifica rápido qual funciona melhor com a audiência.

Por que blocos separados: cada campo tem botão "copy" próprio no Claude, colagem direta no Suno sem precisar fatiar manualmente.

---

## 🗂️ Configurações padrão POR ABA DO SUNO

### 🟢 ADVANCED (padrão — usar 95% do tempo)

| Campo | Valor |
|-------|-------|
| Modelo | v5.5 |
| Lyrics | (vazio) |
| Styles | `peaceful gospel worship instrumental, warm grand piano, soft string pad, cathedral reverb, slow 65 BPM, devotional meditative, contemplative sleep music, brazilian gospel style, C major key` |
| Exclude styles | `no vocals, no drums, no percussion, no choir, no humming, no beats` |
| Weirdness | 35% |
| Style Influence | 80% |
| Vocal Gender | irrelevante |
| Lyrics Mode | Manual |
| Song Title | `Gospel Pra Dormir XX - [tema]` |

### 🟡 SIMPLE (só pra brainstorm rápido)

| Campo | Valor |
|-------|-------|
| Song Description (≤500 chars) | `Peaceful gospel worship instrumental. Warm grand piano with soft string pad, cathedral reverb. Slow 65 BPM, C major. Brazilian gospel style, contemplative and meditative. Perfect for sleep, prayer, and rest. No vocals, no drums, no percussion, no crescendos. Very gradual, continuous, seamless.` |
| Instrumental toggle | ✅ **LIGADO** (crítico) |
| +Audio | não usar |
| +Lyrics | não usar |
| Inspiration tags | **apagar todas** (são default irrelevante) |

### 🔵 SOUNDS (pra ambiências curtas, NÃO música principal)

**Uso**: samples 4-8s de efeitos/loops pra mixar sob a música gospel (ex: chuva + piano).

| Efeito | Type | Sound description |
|--------|------|-------------------|
| Chuva noturna | Loop | `soft rainfall on window glass, steady gentle rain, no thunder, no wind, peaceful night` |
| Fogueira aconchegante | Loop | `gentle fireplace crackling, wood burning softly, warm cozy indoor ambience` |
| Ondas calmas | Loop | `calm ocean waves lapping on sand, distant night beach, peaceful, no seagulls` |
| Sino de igreja | One-Shot | `distant church bell single toll, deep reverberant, sacred echo` |
| Vento floresta | Loop | `gentle forest wind through leaves, soft rustling, night ambience, no birds, no animals` |
| Crepitar vela | Loop | `candle wick crackling soft, intimate flame, very subtle, quiet room` |

Campos padrão Sounds: BPM=Auto, Key=Any.

---

## 📋 Template de entrada (copiar pra cada nova geração)

```markdown
### #XX — Título Interno
- **Data**: YYYY-MM-DD
- **Tema**: sono / oração / adoração / salmo
- **Duração**: X min
- **Prompt Styles**:
  > (cola aqui o que foi no campo Styles)
- **Exclude Styles**:
  > (cola aqui)
- **Lyrics**: vazio / [manual text se tiver]
- **Sliders**: Weirdness X% / Style Influence X%
- **URL Suno**: https://suno.com/s/...
- **Arquivo baixado**: pgsa/suno/FILENAME.mp3
- **Status**: 🟢 aprovada | 🟡 parcial | 🔴 descartada
- **Notas auditivas** (preencher APÓS ouvir):
  - Qualidade gospel instrumental: __/10
  - Fluidez pra loop (termina "fechada"?): __/10
  - Sensação de paz/descanso: __/10
  - Problemas detectados: (ex: entrou vocal, tempo acelerou, etc.)
- **Uso pretendido**: (ex: vídeo 8h sono #1 / oração de abertura / transição)
```

---

## 🎵 Geradas

<!-- Adicionar abaixo, mais recente primeiro -->

### #01 — Piano Noturno (Variante A, cadência fechada)
- **Data**: 2026-04-21
- **Tema**: oração (final natural perfeito)
- **Duração original Suno**: 3:14 (194.84s)
- **Prompt Styles**:
  > contemporary worship instrumental, warm grand piano as main voice, atmospheric synth pads, subtle cello and violin ensemble, cathedral reverb, slow 63 BPM, C major, devotional peaceful contemplative, brazilian evangelical worship style, gradual, no crescendos, sleep and prayer music
- **Exclude Styles**: (padrão)
- **Sliders**: Weirdness 35% / Style Influence 80%
- **URL Suno**: https://suno.com/s/IPOxCy3ayKzhzmNC
- **Arquivo original**: `Canal-gospel- conteudo/Abril/Gospel Pra Dormir 01 - Piano Noturno.mp3`
- **Status**: 🟢 **MASTERIZADA + ESTENDIDA PRA 1h**
- **Métricas auditivas (pós-master)**:
  - I: -13.9 LUFS ✅ (streaming-ready)
  - TP: -1.9 dBFS ✅ (sem clipping)
  - LRA: 4.6 LU ✅ (dinâmica controlada pra sleep)
  - Cadência final: 🟢 FECHADA (silêncio -inf dB nos últimos 15s)
- **Arquivo final 1h**: `Canal-gospel- conteudo/Abril/Gospel Pra Dormir 01 - Oracao 1 Hora.mp3` (138 MB, 320 kbps)
- **Uso pretendido**: **Vídeo #02** — oração guiada de 1h (cadência fechada = encerra natural)

### #01b — Piano Noturno (Variante B, sem cadência)
- **Data**: 2026-04-21
- **Tema**: sono 8h
- **Duração original Suno**: 3:28 (208.28s)
- **Prompt Styles**: idêntico ao #01 (geração gêmea Suno)
- **Sliders**: Weirdness 35% / Style Influence 80%
- **URL Suno**: https://suno.com/s/FPi6OnasnLiLqU3t
- **Arquivo original**: `Canal-gospel- conteudo/Abril/Gospel Pra Dormir 01b - Piano Noturno.mp3`
- **Status**: 🟢 **MASTERIZADA + ESTENDIDA PRA 8h SEAMLESS**
- **Métricas auditivas (pós-master)**:
  - I: -13.6 LUFS ✅
  - TP: -1.5 dBFS ✅
  - LRA: 4.7 LU ✅
  - Cadência final: corte aberto (volumes de entrada/saída similares, ideal pra loop)
- **Arquivo final 8h**: `Canal-gospel- conteudo/Abril/Gospel Pra Dormir 01 - Sono 8 Horas.mp3`
- **Uso pretendido**: **Vídeo #01** — gospel pra dormir 8h seamless

---

## 🎛️ Pipeline de mastering (replicado do Suno-Song-Remaster)

**Pesquisa**: 2026-04-21 — clonado skill `mastering-engineer` do bitwize-music-studio, extraídos parâmetros do Suno-Song-Remaster.

**Pipeline ffmpeg (chain único)**:
```
highpass=f=30 →
equalizer=f=80:width_type=q:width=1:g=1 →
equalizer=f=250:width_type=q:width=1:g=-2 (cut mud de IA) →
equalizer=f=1000:width_type=q:width=1:g=1 →
equalizer=f=4000:width_type=q:width=2:g=-2 (tame harsh) →
equalizer=f=6000:width_type=q:width=1.5:g=-1.5 →
equalizer=f=12000:width_type=q:width=1:g=2 (air) →
acompressor=threshold=-22dB:ratio=2:attack=20:release=250:knee=6 (glue suave) →
loudnorm=I=-14:TP=-1.5:LRA=10 (streaming target)
```

**Pipeline seamless 8h** (3 passadas):
1. Master → WAV 48kHz 16-bit
2. Batch4 (4 cópias + 3 crossfades 5s triangular) → ~13min
3. Batch16 (4× batch4 + 3 crossfades) → ~54min
4. 9× batch16 + 8 crossfades + fade bordas, cortar em 28800s → MP3 320 kbps 8h

**Resultado**: ZERO emendas secas em 8 horas (todos os ~140 pontos de loop usam acrossfade triangular equal-power).

---

## 🧪 Prompts testáveis em rotação (pra não repetir)

Cada vídeo novo usa UM destes — marcar qual já foi usado.

| # | Estilo | Status |
|---|--------|--------|
| A | Piano solo + strings pad (gospel noturno) | ✅ **usado #01/#01b (2026-04-21, masterizado + loop 1h e 8h)** |
| B | Piano + harpa + pads etéreos (celestial) | pendente |
| C | Piano + violino solo (devocional íntimo) | pendente |
| D | Piano + violoncelo (profundo, oração) | pendente |
| E | Piano + órgão suave (contemplativo igreja) | pendente |
| F | Piano + flauta (pastoral, Salmo 23) | pendente |
| G | Piano + coro humming muito baixo (borderline — testar se consegue sem cruzar pra vocal) | pendente |
| H | Piano + chuva ambiente (sono profundo) | pendente |
| I | Piano + lareira crepitar + vento (inverno, conforto) | pendente |
| J | Piano + ondas do mar (paz oceânica) | pendente |

---

## 📐 Regras de produção

1. **Duração real por geração Suno v5.5 = máx 8 min** (não 30 min — corrigido 2026-04-21)
2. **Pra estender**: usar função **Extend** do Suno (cada Extend ~+6-8 min, mas qualidade degrada após 2-3 Extends)
3. **Pra vídeo 8h**: opção A = 1 música de 8 min × 60 loops no ffmpeg / opção B = Extend 2x → ~22 min × 22 loops (mais fluido, 3x mais créditos)
4. **Sempre v5.5** (melhor qualidade até agora)
5. **Sempre Weirdness 35% + Style Influence 80%**
6. **Baixar em .mp3** — não WAV (peso desnecessário)
7. **Salvar em**: `E:\Claude Code\#youtube\pgsa\suno\`
8. **Nome do arquivo**: `gpd-XX-tema-descricao.mp3` (ex: `gpd-01-sono-piano-noturno.mp3`)
9. **Atualizar este arquivo** imediatamente após gerar + após ouvir

## 💳 Plano Pro — orçamento mensal de créditos

- **Total**: 2.500 créditos/mês
- **Consumo padrão**: ~10 créditos por música v5.5 (8 min)
- **Consumo com Extend 2x**: ~30 créditos por música (~22 min)
- **Capacidade**: 250 músicas/mês simples OU 83 músicas com Extend 2x
- **Consumo planejado canal**: 8 vídeos/mês × 1 música = ~80 créditos/mês (simples) ou ~240 (com Extend)
- **Margem de sobra**: >95% do plano

---

## 🚫 Anti-padrões detectados (atualizar conforme encontrar)

- ❌ Não usar "epic", "dramatic", "cinematic powerful" — traz crescendos que acordam ouvinte
- ❌ Não usar "choir" mesmo com exclude — Suno às vezes insiste
- ❌ Não usar BPM > 75 pra sono — muito rápido
- ❌ Não deixar Weirdness 50%+ — gera variações estilísticas que quebram loop
- ❌ Não esquecer Exclude Styles — Suno pode meter percussion sutil sem aviso
