# FASE 1 — Setup técnico + Primeiro vídeo (Semana 1)

> **Gate pra entrar na Fase 1**: `pgsa/FASE0-VALIDACAO-COMPLETA.md` 100% preenchido ✅
>
> **Objetivo Fase 1**: canal no ar + branding mínimo + 1 vídeo publicado + tooling funcionando + MCPs conectados.
>
> **Tempo estimado**: 8-12h distribuídas em 5-7 dias.

---

## Dia 1 — Credenciais + MCPs (2h)

### 1.1 Google OAuth pro YouTube (1h)

Executar `_novos-negocios/INSTRUCOES-SETUP.md` — seção credenciais:

- [ ] Abrir console.cloud.google.com
- [ ] Criar projeto "youtube-mcp-gospel"
- [ ] Habilitar: YouTube Data API v3 + YouTube Analytics API + YouTube Reporting API
- [ ] OAuth consent screen (external, tester = weslleywillaguiar@gmail.com)
- [ ] Credenciais OAuth 2.0 (Desktop app) → baixar client_secret.json
- [ ] Setar no .mcp.json ou variável ambiente conforme docs do MCP `youtube-studio`
- [ ] Testar: `mcp__youtube-studio__youtube_auth` → `youtube_auth_status`

### 1.2 MCPs dos 2 principais (30min)

- [ ] **youtube-studio** (Read/Analytics/Upload) — já listado nos deferred tools
- [ ] **youtube-uploader** (se diferente) — verificar em .mcp.json
- [ ] **firecrawl** — ativar permissions quando Claude pedir (pra scrape Hotmart)
- [ ] **tavily** — ativar permissions (pra pesquisa BR)

### 1.3 Aprovar permissions MCP que o agent precisava (30min)

Listar no client Claude como **allowlist** (ver `.claude/settings.json` global ou projeto):

```json
{
  "permissions": {
    "allow": [
      "mcp__youtube-studio__*",
      "mcp__tavily__tavily_search",
      "mcp__firecrawl__firecrawl_search",
      "mcp__firecrawl__firecrawl_scrape",
      "mcp__keywordtool-guest__*"
    ]
  }
}
```

---

## Dia 2 — Criação do canal YouTube (2h)

### 2.1 Criar canal
- [ ] Logar com conta Google (usar conta dedicada, não pessoal — facilita futuro brand account)
- [ ] youtube.com → Criar canal → Nome escolhido na Fase 0
- [ ] @handle = nome sem espaços (ex: @gospeldescansar)
- [ ] Verificar canal por telefone (destrava thumbnails customizadas, lives, 15min+ uploads)

### 2.2 Criar branding mínimo em `pgsa/brand-canal/`
- [ ] **Logo** (800x800 PNG transparente) — gerar via IA ou Canva
- [ ] **Banner** (2560x1440, safe area 1546x423) — paleta dark + âmbar, texto "[Canal] — Música Gospel Pra Dormir, Orar e Descansar"
- [ ] **Foto de perfil** (logo reduzido, 98x98 visible em circle)
- [ ] **About/Descrição**:
  ```
  🙏 Música gospel instrumental 8 horas pra dormir, orar e ler a Bíblia.

  Toda segunda 6h — novo vídeo de sono 8h.
  Toda quarta meio-dia — oração/adoração 1h.

  Sem voz, sem algoritmo agressivo.
  Só você, Deus e a paz.

  📖 Ebook: 30 Orações Curtas Pra Dormir em Paz
  👉 [LINK KIWIFY]

  Contato: [email]
  ```
- [ ] **Paleta aplicada**: dark (#0a0a0a) + âmbar (#f59e0b) + creme (#fef3c7)

### 2.3 Playlists iniciais
- [ ] "Sono 8h" — vídeos de dormir
- [ ] "Oração 1h" — oração/adoração
- [ ] "Leitura Bíblica" — vídeos pra estudar a palavra
- [ ] "Ansiedade e Paz" — vídeos pra acalmar

---

## Dia 3 — Primeiro vídeo: produção (3-4h)

### 3.1 Gerar música Suno (30min)
- [ ] Abrir suno.com (login com conta Pro R$50)
- [ ] Modo Custom + Instrumental = ON + Model v5.5
- [ ] Colar **Prompt 1** de `PROMPTS-SUNO-GOSPEL.md` (sono 8h base)
- [ ] Gerar 2 variações → escolher a com loop mais natural
- [ ] Download .mp3 → salvar em `pgsa/videos/video-01-sono-8h/audio-base.mp3`

### 3.2 Estender pra 8h via ffmpeg (20min)
```powershell
cd "E:\Claude Code\#youtube\pgsa\videos\video-01-sono-8h"
ffmpeg -stream_loop -1 -i audio-base.mp3 -t 28800 -c copy audio-8h.mp3
ffmpeg -i audio-8h.mp3 -af "afade=t=in:ss=0:d=10,afade=t=out:st=28770:d=30" -c:a aac audio-8h-final.mp3
```
- [ ] Tocar 5 min em headphone → validar loop sem click audível
- [ ] Validar tamanho arquivo (~400-500MB esperado)

### 3.3 Gerar visual via Remotion/IAs (2h)
- [ ] Usar Remotion ou ferramenta de IA do Weslley pra gerar **loop visual 30-60s** (noite estrelada, vela pulsante, paisagem calma)
- [ ] Render em 1920x1080 60fps → MP4
- [ ] Estender via ffmpeg (loop até casar com áudio 8h):
```powershell
ffmpeg -stream_loop -1 -i visual-loop.mp4 -i audio-8h-final.mp3 -t 28800 -c:v copy -c:a aac -shortest video-final.mp4
```

### 3.4 Thumbnail (30min)
- [ ] Canva template: 1280x720
- [ ] Bíblia aberta + vela acesa (asset gratuito Canva ou IA)
- [ ] Texto overlay ≤ 3 palavras: "PAZ • SONO • ORAÇÃO" (fonte serif)
- [ ] Teste preto-e-branco — ainda legível?
- [ ] Teste em 120x90 no celular — legível?
- [ ] Salvar como `thumbnail.png`

---

## Dia 4 — Upload + SEO + Publicação (1-2h)

### 4.1 Escrever metadata (30min)

Usar templates de `TEMPLATES-SEO-YOUTUBE.md`:

- [ ] **Título** (long-tail da Semana 1 do calendário):
  `8 HORAS Música Gospel Instrumental Pra Dormir Profundamente | Piano Suave`
- [ ] **Descrição** 250+ palavras (usar template)
- [ ] **Tags** (10 do template padrão)
- [ ] **Thumbnail** pronta
- [ ] **Categoria**: Música
- [ ] **Playlist**: "Sono 8h"
- [ ] **Timestamps/capítulos** na descrição (5 marcos)

### 4.2 Upload via MCP (30min)

Opção A — upload manual (primeira vez, sem risco):
- [ ] studio.youtube.com → Upload
- [ ] Agendar pra próxima **segunda-feira 6h AM**
- [ ] Marcar "não é conteúdo pra crianças"
- [ ] Desabilitar Shorts remix (sono 8h não vira Short)

Opção B — upload via `mcp__youtube-studio__youtube_upload_video`:
- [ ] Quando MCP autorizado, usar o tool — mais rápido pra vídeos futuros

### 4.3 Pinned comment + primeiro comentário (20min)
- [ ] Quando vídeo publicar, pinar comentário **Versão A** do `TEMPLATES-SEO-YOUTUBE.md`:
  ```
  🙏 Se essa música te trouxe paz, talvez o ebook "30 Orações Curtas
  Pra Dormir em Paz" (R$19,90) também toque seu coração. [...]
  👉 [LINK KIWIFY com UTM]
  ```
- [ ] Responder primeiros 5 comentários nas primeiras 48h (algoritmo valoriza engajamento orgânico do criador)

---

## Dia 5 — Validação + ajustes (1h)

### 5.1 Verificar métricas nas primeiras 24h
- [ ] CTR inicial (esperado: 1-3% em music)
- [ ] Retenção primeiros 10min (esperado: ≥ 30% do longform)
- [ ] Impressões aparecendo? (se 0 por 48h → problema de SEO)
- [ ] Tráfego: busca vs sugeridos vs navegação
- [ ] Rodar `mcp__youtube-studio__youtube_analytics_video_detail` pra extrair dados

### 5.2 Documentar aprendizados
- [ ] Criar `pgsa/videos/video-01-sono-8h/aprendizados.md`:
  - O que deu certo na produção
  - O que levou mais tempo que o esperado
  - Gargalos no fluxo (Suno lento? ffmpeg travou? Canva?)
  - Decisões pra ajustar no vídeo 2

### 5.3 Commit dos assets
- [ ] Salvar em `pgsa/videos/video-01-sono-8h/`:
  - `audio-base.mp3` (2-3min original Suno)
  - `audio-8h-final.mp3` (com fades)
  - `video-final.mp4` (com visual)
  - `thumbnail.png`
  - `metadata.md` (título, descrição, tags, link YouTube)
  - `aprendizados.md`

---

## Checklist final Fase 1

Fase 1 está 🟢 completa quando:

- [ ] Canal YouTube no ar com branding (logo, banner, about)
- [ ] 1 vídeo 8h sono publicado (ou agendado pra segunda 6h)
- [ ] Thumbnail custom aplicada
- [ ] SEO otimizado (título + descrição 250+ + tags + capítulos)
- [ ] Pinned comment com link Kiwify ativo
- [ ] Credenciais youtube-studio MCP funcionando (teste: `youtube_get_channel`)
- [ ] Permissions firecrawl/tavily destravadas
- [ ] Assets do vídeo 1 organizados em `pgsa/videos/video-01-sono-8h/`
- [ ] Arquivo `aprendizados.md` preenchido

---

## 🚨 Bloqueadores possíveis (e plano B)

### Suno gera música ruim
- Tentar prompts 2-5 (`PROMPTS-SUNO-GOSPEL.md`)
- Usar v5.5 (não v4.5)
- Adicionar `[instrumental only, no vocals]` no final do prompt

### ffmpeg trava ou falha loop
- Consultar `.claude/skills/ffmpeg-usage/SKILL.md`
- Testar primeiro com 30min (não 8h) pra ver se params funcionam

### Upload do YouTube rejeitado
- Checar política de áudio AI (declarar no form de upload que música é AI-generated — Suno commercial license cobre)
- Se copyright claim falso → contest via Studio

### Ebook não tá pronto pro lançamento
- OK — lançar vídeo 1 sem link ebook no pinned
- Substituir pinned quando ebook pronto (semana 2-3)
- Ou: pin link Hotmart afiliado (Planner Devocional) como MVP

---

## Próxima fase

Ao completar Fase 1 → abrir `pgsa/CALENDARIO-EDITORIAL-12SEMANAS.md` e executar vídeos 2-8 (semanas 1-4) em cadência.

Revisão de tempo real vs estimado toda sexta-feira em `pgsa/METRICAS-SEMANAIS.md`.
