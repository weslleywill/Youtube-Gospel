# Guia de Instalação — 06 Distribuição e Monetização

> Cole este prompt em uma nova sessão pra replicar o setup completo.

## Prompt pra colar no Claude Code

```
Instale as seguintes skills e dependências neste projeto:

### 1. Skills do 02-estrategia-conteudo (copiar)
Copie estas 7 skills de ../02-estrategia-conteudo/.claude/skills/ pra .claude/skills/:
- ad-creative
- paid-ads
- social-content
- email-sequence
- copywriting
- create-viral-content
- marketing-psychology

### 2. Skills do GitHub (clonar)
Clone estas skills direto pra .claude/skills/:
- git clone https://github.com/tenfoldmarc/repurpose-skill.git .claude/skills/repurpose
- git clone https://github.com/tenfoldmarc/script-skill.git .claude/skills/script
- git clone https://github.com/tenfoldmarc/viral-skill.git .claude/skills/viral
- git clone https://github.com/tenfoldmarc/copy-skill.git .claude/skills/copy
- git clone https://github.com/tenfoldmarc/spy-skill.git .claude/skills/spy
- git clone https://github.com/AgriciDaniel/claude-ads.git .claude/skills/claude-ads

### 3. Skill do ComposioHQ (extrair pasta específica)
Clone https://github.com/ComposioHQ/awesome-claude-skills.git num temp e copie só a pasta competitive-ads-extractor pra .claude/skills/

### 4. Dependências Python (Windows)
- pip install yt-dlp
- pip install openai-whisper
- winget install Gyan.FFmpeg (se não tiver)

Confirme que tudo foi instalado listando .claude/skills/
```

## Lista completa de skills (14 total)

| # | Skill | Fonte | Função |
|---|-------|-------|--------|
| 1 | ad-creative | 02-estrategia | Variações de anúncios em escala |
| 2 | paid-ads | 02-estrategia | Strategy Meta/TikTok/Google |
| 3 | social-content | 02-estrategia | Multi-canal + repurposing |
| 4 | email-sequence | 02-estrategia | Sequências de nurture/vendas |
| 5 | copywriting | 02-estrategia | Copy de páginas e anúncios |
| 6 | create-viral-content | 02-estrategia | Hooks e engajamento |
| 7 | marketing-psychology | 02-estrategia | Gatilhos psicológicos |
| 8 | script | tenfoldmarc | Roteiro de vídeo na SUA voz |
| 9 | repurpose | tenfoldmarc | URL de Reel → transcreve → reescreve |
| 10 | viral | tenfoldmarc | 10 ideias de vídeo viral |
| 11 | copy | tenfoldmarc | Copy com 100+ frameworks |
| 12 | spy | tenfoldmarc | Espiona concorrentes no IG |
| 13 | claude-ads | AgriciDaniel | 17 sub-skills de ads (audit, score, meta, tiktok, google) |
| 14 | competitive-ads-extractor | ComposioHQ | Scrape + análise de ads concorrentes |

## Dependências do sistema

| Pacote | Comando | Pra quê |
|--------|---------|---------|
| Python 3.12 | `winget install Python.Python.3.12` | Base pra tudo |
| yt-dlp | `pip install yt-dlp` | Download de vídeos |
| ffmpeg | `winget install Gyan.FFmpeg` | Processamento áudio/vídeo |
| Whisper | `pip install openai-whisper` | Transcrição de áudio |

## Verificação rápida

```bash
ls .claude/skills/  # deve ter 14 pastas
yt-dlp --version    # deve retornar versão
python -c "import whisper; print('OK')"  # deve printar OK
ffmpeg -version     # deve retornar versão
```
