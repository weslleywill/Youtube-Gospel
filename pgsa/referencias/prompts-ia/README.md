# Banco de Prompts IA — Geração de Imagem

> Prompts prontos pra copy-paste. Inclui a FUNDAÇÃO da marca (brand-base) + templates por formato.
>
> **Regra de ouro**: sempre incluir `brand-base.md` como base em qualquer prompt. Depois adicionar o template do formato desejado.

## 📚 Arquivos

| Arquivo | Formato | Aspect | Quando usar |
|---|---|---|---|
| [brand-base.md](brand-base.md) | Fundação | — | **SEMPRE primeiro** — paleta, visual identity, style anchors do Weslley |
| [youtube-thumbnail.md](youtube-thumbnail.md) | YouTube thumb | 16:9 (1280×720, 2K) | Thumbs de vídeo YouTube (gospel + personal) — texto max 25 chars no Gemini |
| [instagram-post.md](instagram-post.md) | IG post | 1:1 (1080×1080, 1K) | Posts de feed Instagram |
| [instagram-story.md](instagram-story.md) | IG story | 9:16 (1080×1920, 1K) | Stories Instagram / Reels cover |
| [ebook-cover.md](ebook-cover.md) | Capa ebook | 2:3 (1600×2560, 2K) | Capa de produto Hotmart (ex: "30 Orações Pra Dormir em Paz") |

## 🔗 Como usar em roteiro novo

1. Ler `brand-base.md` → copiar o bloco de identidade visual
2. Escolher o template por formato (ex: `youtube-thumbnail.md` pra thumb de Long 30min)
3. Adaptar o "SUBJECT" e "TEXT OVERLAY" pro tema específico do vídeo
4. Colar no ChatGPT GPT-Image-2 (obrigatório) + modelo 2 recomendado (Ideogram/MJ/Flux) — padrão de [TEMPLATE-PROMPT-IMAGEM.md](../../TEMPLATE-PROMPT-IMAGEM.md)

## 📖 Skills relacionadas (instaladas em `.claude/skills/`)

Quando precisar gerar NOVOS prompts (além dos templates aqui), invocar:

| Skill | Quando |
|---|---|
| `image-prompt` | Prompt otimizado pro Nano Banana (Gemini) especificamente |
| `nano-banana-pro-prompts` | Busca nos 10k prompts do Nano Banana Pro |
| `ai-image-prompts` | Busca nos 10k prompts (generalista, qualquer modelo) |
| `prompt-master` | Otimiza prompt pra QUALQUER AI tool (Midjourney, Flux, Kling, etc.) |

## 🎬 Pra vídeo (não imagem)

| Skill | Quando |
|---|---|
| `kling-ai-prompt-generator` | Kling AI (app.klingai.com) — image-to-video |
| `seedance2-skill` | Jimeng Seedance 2.0 |
| `video-prompting-skill` | Generalista: Sora, Veo 3, Ovi, Wan, LTX-2 |
| `awesome-ai-video-prompts` | Biblioteca de referência cinemática |

## 🏛️ Origem

Esses prompts foram importados de `E:\Claude Code\ecossistema-personal-de-sucesso\04-imagens-ia\prompts\` em 2026-04-23. A lógica de 2 modelos por imagem (ChatGPT obrigatório + modelo 2 recomendado) está em [TEMPLATE-PROMPT-IMAGEM.md](../../TEMPLATE-PROMPT-IMAGEM.md).
