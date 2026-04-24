---
slug: kling-motion-control-precisa-video-input
title: Kling 3.0 Motion Control não serve pra image-to-video puro
status: open
created: 2026-04-24
updated: 2026-04-24
---

# Thread: Kling 3.0 Motion Control precisa vídeo input — não serve pra image-to-video

## Goal

Documentar armadilha técnica descoberta na sessão 2026-04-23: **Kling 3.0 Motion Control** (no Higgsfield) **requer um vídeo de input** pra transferir movimento. NÃO aceita imagem estática pura como base. Confundi o nome "Motion Control" com "controle de movimento de câmera", mas é na verdade "motion transfer from reference video".

Pra **animar uma thumb estática** (image-to-video) no Higgsfield, usar:
1. **Kling 3.0 EXCLUSIVE** (4K, 3-15s, com som opcional) ⭐
2. **Kling 3.0** genérico (1080p)
3. **Minimax Hailuo** (mais em conta)

## Context

**Descoberta**: Sessão 2026-04-23. Weslley tentou usar Kling Motion Control conforme eu recomendei. Interface pediu vídeo de input. Ele reportou: *"nao consigo usar o kling motion pede video"*.

**Pesquisa pós-fato** na interface Higgsfield confirmou:
- `Kling 3.0` (EXCLUSIVE) — image-to-video direto, 4K nativo, 3-15s
- `Kling 3.0 Motion Control` — motion transfer, requer vídeo input, 1080p, 3-30s

**Impacto**: se tivesse seguido minha recomendação inicial, o vídeo não teria saído. Weslley pegou o erro antes. Importante documentar pra NÃO REPETIR em vídeos futuros (longform semanal = 4 vídeos/mês mínimo).

## References

- `pgsa/HIGGSFIELD-MODELOS.md` — catálogo definitivo com aviso explícito sobre Motion Control
- `pgsa/TEMPLATE-PROMPT-IMAGEM.md` — árvore de decisão de vídeo (Motion Control só aparece no branch "já tenho vídeo de referência")
- `pgsa/roteiros/2026-04-23-oracao-coracao-cansado-30min.md` — roteiro com seção Higgsfield corrigida (Kling 3.0 EXCLUSIVE + fallback Minimax Hailuo)
- Print Higgsfield: `Kling 3.0 EXCLUSIVE` (featured) × `Kling 3.0 Motion Control` (all models)

## Next Steps

- Monitorar se Kling libera "Motion Control from single image" no futuro (Kling 4.0?) — checar release notes trimestrais
- Se Higgsfield adicionar novo modelo de image-to-video 4K+som, avaliar em `pgsa/HIGGSFIELD-MODELOS.md`
- **Regra de default confirmada**: Kling 3.0 EXCLUSIVE = default pra loop de thumb; Minimax Hailuo = default econômico
