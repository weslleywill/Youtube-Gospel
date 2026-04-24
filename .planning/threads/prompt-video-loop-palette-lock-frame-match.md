---
slug: prompt-video-loop-palette-lock-frame-match
title: Prompts de vídeo pra loop precisam PALETTE LOCK + LOOP LOCK explícitos
status: open
created: 2026-04-24
updated: 2026-04-24
---

# Thread: Prompts de vídeo pra LOOP precisam PALETTE LOCK + LOOP LOCK explícitos

## Goal

Documentar pattern reusável descoberto na sessão 2026-04-23: quando gerar vídeo no Kling/Seedance/Sora/Veo/Hailuo pra usar como **LOOP de fundo** de vídeo longo (30min, 1h, 8h), o prompt **PRECISA**:

1. **PALETTE LOCK** explícito — "Do NOT shift sky color", "Do NOT transition warm to cool tones", "palette at second 0 must match second 10"
2. **LOOP LOCK** explícito — "first frame and last frame MUST be visually near-identical in color palette, composition, lighting, element position"
3. **Câmera STATIC** (não dolly) — dolly induz drift de cor e quebra loop
4. **EVITAR** termos de progressão temporal — "revealing progressively more brightness toward the end", "gradually parting", "building up" → todos estes geram MUDANÇA visual entre start e end = loop quebrado

## Context

**Descoberta**: Sessão 2026-04-23, vídeo 1 "Oração Pra Coração Cansado". Prompt v1 meu:

```
Slow cinematic push-in toward the cross at very gentle pace, divine golden light
rays slowly pulsing and expanding outward from behind the cross, golden dust particles
and embers drifting slowly upward through the light beams, dark storm clouds
continuing to part in slow motion revealing more divine light, atmospheric haze
breathing softly, the kneeling silhouette remains perfectly still and reverent,
no sudden movements, no camera shake, seamless loop, 10 seconds, ultra-cinematic
```

**Resultado**: Kling 3.0 interpretou "revealing more divine light" como permissão pra MUDAR PALETA. Frame 1 = céu DOURADO quente. Frame 10 = céu ROXO/AZUL frio. Loop quebrou — primeira frame ≠ última = salto visual quando vídeo repete (pra fundo de 30min, 180 loops = 180 saltos).

**Fix v2** (o que funcionou):

```
CRITICAL — LOOP LOCK: first frame and last frame MUST be visually near-identical in
color palette, composition, lighting intensity, and element position. The clip must
loop seamlessly when repeated — no progressive shifts, no buildup, no "reveal" that
changes between start and end.

PALETTE LOCK: maintain warm golden-amber lighting and deep purple-blue storm contrast
THROUGHOUT the entire clip. Do NOT shift the sky color. Do NOT transition from warm
to cool tones. Do NOT let the background clouds change hue. The color palette at
second 0 must match the color palette at second 10 exactly.

Camera: locked static — no dolly, no pan, no tilt, no zoom, no shake. Static framing
throughout.
```

**Validação**: Weslley regenerou com prompt v2 curtado do ChatGPT, contact-sheet de 9 frames mostrou paleta dourada **CONSISTENTE start→end**. Loop perfeito confirmado.

## References

- `pgsa/roteiros/2026-04-23-oracao-coracao-cansado-30min.md` — seção "Prompt v2 ADAPTADO ao Kling 3.0" com PALETTE/LOOP LOCK
- `pgsa/VER-VIDEO-FRAMES.md` — workflow ffmpeg pra analisar loop via contact-sheet (9 frames)
- `pgsa/TEMPLATE-PROMPT-IMAGEM.md` — árvore de decisão vídeo + adaptação por modelo
- Contact-sheet exemplo: `pgsa/_tmp/final-contact-sheet.png` (9 frames idênticos ao longo de 30min)

## Next Steps

- Aplicar PALETTE/LOOP LOCK em **TODO prompt de vídeo loop** de agora em diante (incluir na memory `feedback_prompts_adaptados_por_modelo`)
- Testar se Sora 2 / Seedance 2.0 / Veo 3.1 também precisam — suspeita: sim, mesmo problema
- Validar via contact-sheet 3×3 pós-geração ANTES de aceitar o loop
- Se detectar drift > 10% de cor entre frame 1 e frame last → regerar com prompt mais restritivo
- Adicionar nota no `pgsa/HIGGSFIELD-MODELOS.md`: prompts de loop requerem PALETTE/LOOP LOCK, independente do modelo
