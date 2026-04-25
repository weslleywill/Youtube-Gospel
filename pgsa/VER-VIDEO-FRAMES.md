# Ver vídeo via extração de frames (ffmpeg)

> **Problema**: Claude Code não lê arquivos `.mp4` direto.
> **Solução**: `ffmpeg` extrai N frames como PNGs → Claude lê os PNGs via Read → analisa o vídeo.

## Pré-requisitos (confirmados)

- ffmpeg instalado — versão 8.1 em `C:/Users/wesll/AppData/Local/Microsoft/WinGet/Packages/Gyan.FFmpeg_.../bin/ffmpeg`
- Skill `ffmpeg-usage` instalada em `.claude/skills/`
- Vídeo salvo em caminho local

---

## 🎯 Workflow padrão — contact sheet 3×3 (recomendado)

1 única imagem com 9 frames do vídeo em grid. Claude faz 1 Read e tem visão geral:

```bash
ffmpeg -i "Canal-gospel- conteudo/Abril-OpcaoE/higgsfield/2026-04-23-coracao-cansado-higgsfield-loop.mp4" -vf "fps=1,scale=320:-1,tile=3x3" "pgsa/_tmp/contact-sheet-2026-04-23.png"
```

**Saída**: 1 PNG 960×540 com 9 momentos do vídeo (1 frame por segundo).
**Quando usar**: visão geral de loops 10s.

---

## 🎯 Workflow rápido — só start + end (diagnóstico de loop)

Pra verificar se loop tá quebrando (primeira frame vs última):

```bash
ffmpeg -i "video.mp4" -ss 0 -frames:v 1 "frame-start.png"
ffmpeg -i "video.mp4" -sseof -0.1 -frames:v 1 "frame-end.png"
```

Claude faz Read das 2 PNGs e compara paleta/composição.

---

## 🎯 Workflow detalhado — 5 frames equidistantes

Pra análise mais rigorosa (0s, 2.5s, 5s, 7.5s, 10s):

```bash
ffmpeg -i "video.mp4" -vf "fps=0.5" "pgsa/_tmp/frame-%02d.png"
```

Claude lê cada frame e analisa: paleta muda entre frames? personagem drifta? cor shift?

---

## 🔍 Checklist que Claude aplica ao analisar um loop

Quando Weslley mandar um vídeo pra análise, Claude verifica:

1. **Paleta consistente** — cor dominante do frame 1 ≈ frame 10? Shift de warm → cool é defeito.
2. **Loop matching** — primeira frame visualmente ≈ última frame? Se não, vai ter "corte" ao loopar.
3. **Subject lock** — personagem/silhueta ficou estático? Movimento de braço/cabeça = prompt falhou.
4. **Câmera static** — posição da cruz/objeto central drifta? Dolly acidental = ruim pra loop.
5. **Movimento correto** — só luz/partículas/nuvens se movem? Outros elementos estáveis?
6. **Texto legível** — "ELE OUVE" continua nítido em todos os frames?

Se algum item falhar → Claude sugere ajuste no prompt + regera.

---

## 📁 Convenção de pastas

- Vídeos brutos do Higgsfield: `Canal-gospel- conteudo/Abril-OpcaoE/higgsfield/`
- Frames/contact-sheets temporários: `pgsa/_tmp/` (gitignore)

Criar `pgsa/_tmp/` se não existir:

```bash
mkdir -p "pgsa/_tmp"
```

---

## 🔗 Como Weslley aciona esse fluxo

1. Salva o vídeo gerado no Higgsfield com o nome padrão em `Canal-gospel- conteudo/Abril-OpcaoE/higgsfield/`
2. Avisa: *"vídeo salvo, analisa aí"*
3. Claude roda o contact-sheet ffmpeg
4. Claude faz Read da contact-sheet PNG
5. Claude aplica o checklist acima e reporta

---

## 🎧 Nota — áudio (mesmo princípio, limitação diferente)

Mesmo ffmpeg funciona pra áudio, MAS Claude não "ouve" WAV/MP3. Pra análise de áudio:

1. Usar `ffprobe` pra metadata (duração, bitrate, sample rate)
2. Usar skill `mastering-engineer` pra decisões técnicas sem ouvir
3. Se precisar "ver" som: extrair espectrograma como PNG via ffmpeg:

```bash
ffmpeg -i "master.mp3" -lavfi showspectrumpic=s=1024x512 "spectrogram.png"
```

Claude lê o espectrograma (PNG) e detecta problemas de faixa de frequência, saturação etc.

---

## Skills relacionadas (instaladas)

- `ffmpeg-usage` — 50+ recipes ffmpeg (frame extract, contact sheet, GIF, compress)
- `mastering-engineer` — decisões de masterização de áudio sem precisar ouvir
- `video-prompting-skill` — pra refinar prompt se vídeo não ficou bom
- `kling-ai-prompt-generator` — específico pra Kling (modelo usado no canal)
