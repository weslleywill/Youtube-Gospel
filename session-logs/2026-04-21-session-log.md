# Session Log — 2026-04-21

## Session Summary

Reaproveitamento da pasta `#youtube` (originalmente IG fitness) pra planejar **2 novos canais YouTube 100% IA** (gospel instrumental faceless + estoico). Geradas 2 estratégias vencedoras matematicamente convergidas via `strategist-autonomous` em paralelo, pesquisa profunda no GitHub por skills/MCPs relevantes, instalação de 2 skills + 3 MCPs (Tier 1), e descoberta crítica de que o Weslley já paga **Google AI Pro (R$96,99/mês)** com recursos sub-utilizados (Imagen, Veo, Chirp TTS, NotebookLM, Lyria — este último com risco legal).

## What Changed

### Files Created

- `_novos-negocios/BLUEPRINT-YOUTUBE-AI.md` — economia/gates/stress-test adaptado pra YouTube AI (substitui BLUEPRINT fitness pra esse escopo)
- `_novos-negocios/CONTEXTO-GOSPEL.md` — briefing canal 1 com público, oferta, constraints, 194 keywords validadas
- `_novos-negocios/CONTEXTO-AI-ONLY-CANDIDATOS.md` — 6 nichos AI-first avaliados com evidência
- `_novos-negocios/RECOMENDACAO-FINAL.md` — síntese + escolha única + plano 180d combinado
- `_novos-negocios/SKILLS-E-MCPS-PROXIMOS-PASSOS.md` — 3 tiers de skills/MCPs + gaps + status instalação
- `_novos-negocios/INSTRUCOES-SETUP.md` — passo a passo completo credenciais (~1h setup)
- `pgsa/ESTRATEGIA-VENCEDORA-GOSPEL.md` — H27 convergida (6 iter × 27 hipóteses, baseline R$832/mês líq mês 6)
- `pgsa/ESTRATEGIA-VENCEDORA-AI-ONLY.md` — Estoico Híbrido convergida (1 iter × 24 hipóteses, baseline R$719/mês líq)
- `MEMORY.md` — memória persistente do projeto com toolstack, decisões, preferências
- `.mcp.json.backup-2026-04-19` — backup antes da edição
- `_sandbox-skills-2026-04-19/` — 5 repos clonados (elevenlabs-mcp, youtube-mcp-server pauling, youtube-uploader-mcp, claude-ffmpeg-skill, claude-youtube)
- `.claude/skills/ffmpeg-usage/` — skill copiada e ATIVA
- `.claude/skills/claude-youtube/` — skill 14 sub-skills copiada e ATIVA
- `C:\Users\wesll\.claude\plans\essa-pasta-aqui-de-bubbly-duckling.md` — plano da sessão (fase de exploração)

### Files Modified

- `.mcp.json` — adicionadas 3 entries: `elevenlabs`, `youtube-studio`, `youtube-uploader` (pendente credenciais via env vars)

### Files Moved/Deleted
Nenhum.

## Decisions Made

- **Reaproveitar pasta `#youtube` em vez de pasta Louvor**: tem strategy-finder, BLUEPRINT, WHEN-TO-USE-WHAT prontos. Pasta Louvor fica como repositório de skills técnicas (suno-engineer, etc.).
- **Caminho conservador escolhido**: gospel solo mês 1-2, estoico entra mês 3. Rejeitado caminho agressivo (2 canais desde dia 1) por risco de burnout com 5-10h/sem.
- **Gospel vence estratégia (H27)**: 2 vídeos/sem (sono 8h + oração 1h) + ebook "30 Orações Pra Dormir em Paz" R$19,90 pinado. Suno Pro NÃO necessário — loops Freepik + ffmpeg resolvem.
- **Estoico híbrido escolhido pro canal 2**: ASMR descartado (fit baixo + afiliado Hotmart fraco). Meditação descartada (RPM sem margem).
- **Lyria 3 não publicar em vídeo monetizado**: ação judicial 06/mar/2026 (artistas × Google) cria risco de demonetização retroativa.
- **MusicGPT descartado**: pago (R$132) pior que Suno Pro (R$40); free (500 créditos) sem commercial license.
- **ElevenLabs adiado**: testar free tier (10k chars) + Chirp TTS (grátis via Google AI Pro) antes de assinar Starter R$30/mês. Potencial economia R$360/ano.
- **MCPs Google AI descobertos mas NÃO plugados ainda**: aguardando confirmação Weslley. Custo zero (usa Google AI Pro já pago).

## Context & Discussion

- **Weslley paga Google AI Pro R$96,99/mês** (5TB storage + Gemini 3.1 Pro + Imagen + Veo 3.1 Lite + **Lyria 3 Pro** + **Chirp TTS** + NotebookLM Plus + Flow + 1000 créditos/mês). Esse plano estava sub-utilizado — agora vira pilar pro projeto.
- **Weslley paga Freepik Premium+ R$108/mês** (Music Gen + Voice Gen + SFX + Voice Changer + 50 premium tracks/dia). Commercial license clara (seguro pra YouTube monetizado).
- **Risco legal Lyria 3**: ação judicial ativa. Usar só pra protótipo, nunca publicar em canal monetizado.
- **Preferência Weslley revelada**: economizar sempre, questiona toda assinatura antes de aprovar. Default: testar free tier primeiro.
- **Constraints confirmadas**: budget R$108-138/mês máx, tempo 5-10h/sem total 2 canais, zero tráfego pago, monetização via AdSense + Hotmart afiliado + ebook próprio R$19,90.
- **Hotmart gospel validado**: produtos reais encontrados (Kit Fé em Ação, Devocional 31 Dias com Deus, Planner Devocional 2026, Devocional Fernando Mardegan). Resolve "gap de evidência" do BLUEPRINT.
- **"100 testes" do Weslley = 51 hipóteses** matematicamente testadas (27 gospel + 24 estoico) via strategist-autonomous em paralelo. Mais rigoroso que chute manual.

## Open Threads

1. **Credenciais dos 3 MCPs no `.mcp.json`** — Weslley precisa rodar `INSTRUCOES-SETUP.md`:
   - ElevenLabs API key (free tier 10k chars)
   - Google Cloud OAuth (YouTube Data API + Analytics + Reporting) — reutiliza entre `youtube-studio` e `youtube-uploader`
   - YouTube uploader binary Windows (download)
2. **Decisão Hotmart MCP** — escolher entre `hotmart-cli` (recomendado) ou `BridgeAPI`
3. **Decisão MCPs Google AI** — plugar `gemini-media-mcp` + `notebooklm-mcp`? (custo zero, grande upside)
4. **Teste blind TTS** — Freepik Voice vs Chirp vs ElevenLabs free (3 Shorts, retenção 1min) → decide se assina Starter R$30 ou economiza
5. **Teste Freepik 8h loop** — validar qualidade ffmpeg extend + watermark antes de comprometer 4h/sem produção gospel
6. **Decisões em aberto pro Weslley**:
   - Nome canal gospel (3 sugestões no CONTEXTO-GOSPEL.md)
   - Autor ebook gospel: Weslley escreve / LLM + revisão / terceiriza?
   - Tema ebook estoico (decide mês 2-3 com dados reais)

## Cross-Project Handoffs

- **Pasta `Youtube - Músicas de Louvor`**: validada como repositório de skills técnicas (suno-engineer, lyric-writer, mastering-engineer, genre-creator). Skills estratégicas de lá (strategy, monetize, competitor, audit do claude-youtube) foram copiadas pra `#youtube/.claude/skills/`. Pasta Louvor pode ser reativada quando gospel entrar em produção (ativar SUNO_API_KEY).
- **Pasta `02-estrategia-conteudo`** (SAGRADA / READ-ONLY): nada modificado.

## Current State After This Session

Planejamento estratégico completo e matematicamente fundamentado pros 2 canais. Skills/MCPs Tier 1 instalados (2 ativas, 3 pendentes de credenciais). Toolstack revisado considerando Google AI Pro já pago (potencial economia R$360/ano + Imagen gratis pra thumbnails + Chirp TTS possível substituto ElevenLabs). Próxima sessão foca em: 1) Weslley executar `INSTRUCOES-SETUP.md` (~1h), 2) rodar teste blind TTS, 3) iniciar Fase 1 do plano (setup canal gospel: nome + ebook + vídeo 1).

<!-- session-state
date: 2026-04-21
type: strategic-planning + tooling-setup
files_created:
  - _novos-negocios/BLUEPRINT-YOUTUBE-AI.md
  - _novos-negocios/CONTEXTO-GOSPEL.md
  - _novos-negocios/CONTEXTO-AI-ONLY-CANDIDATOS.md
  - _novos-negocios/RECOMENDACAO-FINAL.md
  - _novos-negocios/SKILLS-E-MCPS-PROXIMOS-PASSOS.md
  - _novos-negocios/INSTRUCOES-SETUP.md
  - pgsa/ESTRATEGIA-VENCEDORA-GOSPEL.md
  - pgsa/ESTRATEGIA-VENCEDORA-AI-ONLY.md
  - MEMORY.md
  - .mcp.json.backup-2026-04-19
  - .claude/skills/ffmpeg-usage/ (skill copiada)
  - .claude/skills/claude-youtube/ (skill copiada, 14 sub-skills)
  - _sandbox-skills-2026-04-19/ (5 repos clonados)
files_modified:
  - .mcp.json (3 novas entries: elevenlabs, youtube-studio, youtube-uploader)
decisions_made: 8
open_threads: 6
handoffs_pending:
  - target: pasta Youtube - Músicas de Louvor
    topic: validada como repositório de skills técnicas para fase de execução
priority_changes: true
status_updated: false
next_session_focus: "Weslley executa INSTRUCOES-SETUP.md (credenciais) → teste blind TTS → setup canal gospel (nome/ebook/vídeo 1)"
session-state -->
