# Session Log — 2026-04-22

## Session Summary
Sessão longa de refatoração estratégica do canal Gospel Pra Descansar. Plano H27 (7 longform Suno-only, still+ping-pong) foi refutado após audit do strategist-autonomous identificar 3 riscos fatais (YouTube Inauthentic Content Policy Jul/2025, cadência logarítmica não linear, CVR 4× otimista). Pivotou-se pra **Opção E Híbrida** (narração Weslley + catálogo 7 ebooks temáticos + padrão Cícero 1×8h+1×1h+3×30min + live 12h). Plano aprovado, 14 arquivos criados/atualizados, pastas de abril/maio estruturadas, métricas template pronto. GSD framework detectado global (auxílio pra sessões longas futuras).

## What Changed

### Files Created
- `C:\Users\wesll\.claude\plans\whimsical-knitting-horizon.md` — plano v4 aprovado (Opção E Híbrida, 1×8h obrig + 1×8h opc + 1×1h + 3×30min + live + 5-7 Shorts)
- `pgsa/CHECKLIST-PRE-PRODUCAO.md` — checklist obrigatório 9 itens pré-gravação
- `pgsa/ROTEIRO-ORACAO-GUIADA-TEMPLATE.md` — template mestre 5min oração guiada + exemplos por tema mensal
- `pgsa/THUMB-TEMPLATE-CICERO.md` — 7 templates épicos bíblicos + palavras-âncora gospel BR
- `pgsa/LIVE-247-SETUP.md` — guia OBS + Restream + defesa policy Jul/2025
- `pgsa/PIPELINE-OPCAO-E.md` — pipeline 13 etapas produção oração guiada (30-45min humano)
- `pgsa/PROMPTS-SUNO-TRILHA-DE-FUNDO.md` — prompts Suno por slot semanal (trilha de fundo, não peça principal)
- `pgsa/CALENDARIO-EDITORIAL-OPCAO-E-MAI-DEZ.md` — 8 meses mapeados por tema + ebook do mês
- `pgsa/CATALOGO-EBOOKS-TEMATICOS.md` — 7 ebooks estruturados com outlines + cronograma de lançamento
- `pgsa/METRICAS-SEMANAIS.md` — template de tracking semanal (atualizar toda sexta)
- `_obsidian-setup/dashboard-gospel-opcao-e.md` — homepage vault Obsidian (fluxo diário Weslley)
- `Canal-gospel- conteudo/Abril-OpcaoE/` — estrutura pastas (trilhas/vozes/clips/finais/thumbs)
- `Canal-gospel- conteudo/Maio/` — mesma estrutura pra maio

### Files Modified
- `pgsa/FASE0-VALIDACAO-COMPLETA.md` — marcado Hotmart ✅ + Opção E aprovada ✅ + 4 items 🟢 (era 3)
- `pgsa/ESTRATEGIA-VENCEDORA-GOSPEL.md` — append seção "PIVOT 2026-04-22 — Opção E" (H27 fallback documentado)
- `MEMORY.md` — entry completa 2026-04-22 (pivot Opção E + toolstack + GSD + 11 correções/preferências Weslley reveladas)

## Decisions Made

- **Pivot H27 → Opção E Híbrida**: audit strategist-autonomous mostrou H27 com 20% policy-OK vs Opção E com 85%. Opção E sobrevive os 3 stress tests simultâneos (views -60% + RPM -50% + strike) mantendo margem positiva.

- **Cadência final: 1×8h OBRIG + 1×8h OPC + 1×1h + 3×30min + 1 live 12h + 5-7 Shorts**: Weslley explicitamente pediu preservar 8h/sem original (não abandonar formato do canal) + copiar padrão Cícero Euclides (1,22M subs) de 4 longforms/sem + live 12h. Híbrido dos dois = cobertura dupla (SEO sleep music + devoção Cícero-style).

- **Catálogo 7 ebooks temáticos vs 1 ebook genérico**: Weslley insight "oração pra ansiedade → ebook ansiedade, oração finanças → ebook finanças". Match de intenção perfeito = CVR 3-4× superior (0,08-0,12% vs 0,02-0,04%). Cronograma: Ansiedade (ativo), Provisão (Mai), Proteção (Jun/Jul), Cura (Ago), Gratidão (Set), Recomeço (Out/Nov), Esperança Natal (Dez).

- **Persona varia por mês**: Weslley rejeitou "persona fixa homem 25-45" — "pode ser homem ou mulher, varia por mês conforme tema sazonal". Regra: tema do mês ↔ dor quente ↔ ebook ↔ persona.

- **Thumb: ícone canal + imagem épica bíblica (ZERO rosto Weslley)**: Weslley "fiquei apagado com sugestão de vela". Padrão Cícero (ele usa nome dele + imagem bíblica épica). Templates: leão/águia/fogo/montanha/vitral/cordeiro/mãos-luz. Palavras-âncora: YESHUA/PROVISÃO/INTIMIDADE/SHEKINÁ (termos tribais gospel).

- **Narração humana OBRIGATÓRIA em todos longforms**: policy shield Jul/2025. Mínimo 1-2min intro nos 8h/1h, 5min+ nos 30min, 10min completo nos curtos. ElevenLabs A/B test mês 1 (2 orações voz Weslley + 2 ElevenLabs BR).

- **Live 12h formato Cícero**: sexta 21h mês 1 (teste OBS grátis) → domingo 22h mês 2+ (quando virar rotina). Alavanca gratuita de watchtime + sinal policy-shield ("authentic streaming").

- **Suno como trilha de fundo** (não peça principal): nova função pós-pivot. Voz Weslley é a peça principal, Suno acompanha. Pós-master EQ −3dB em 12kHz pra quebrar spectral watermark (DistroKid/Spotify compatibilidade).

- **GSD framework já instalado global**: descoberto nas skills disponíveis (gsd-help, gsd-plan-phase, gsd-autonomous + ~50 outras). Uso: sessões longas invocam `/gsd-next` ou `/gsd-plan-phase` pra não perder contexto.

## Context & Discussion

- **Weslley pediu "libere o melhor agente com máximo de esforço"**: Claude se perdeu na cadência (4+ iterações esquecendo requisitos prévios). Adicionado "REQUISITOS FECHADOS" no topo do plan file como âncora — qualquer edição futura valida contra essa lista antes de mexer.

- **Padrão Cícero Euclides decodificado por observação do Weslley**: 
  - 4 vídeos/sem upados (1×1h + 3×30min)
  - Vídeo grande (8h/12h) SÓ ao vivo (não upa como vídeo normal)
  - Fala 1min de voz no começo dos longforms
  - Shorts mostram piano real dele (diferencial)
  - Lançamentos (álbuns) via DistroKid no Spotify/Apple Music
  - Post community tab regular

- **"Tiro de canhão, não tiro d'água"**: Weslley tem arsenal caro (Suno Pro + ChatGPT Plus + Higgsfield PLUS + Claude) e precisa diferenciação real vs concorrentes. Plano anterior = "água" (genérico). Opção E = "canhão" (narração humana + multi-clip + temas específicos + catálogo ebooks).

- **YouTube Policy Jul/2025 é ameaça real**: cita LITERALMENTE "AI meditation music + static loop" como alvo demonetização. Derrubou 4,7B views Jan/2026 + 16 canais com 35M subs combinados zerados. Nosso formato anterior = perfil exato. Mitigações obrigatórias agora: voz humana + multi-clip real + descrição 500+ palavras + chapters.

- **YPP 2026 threshold real**: 500 subs + 3000h watchtime em 90d (não mais 1000+4000h). Meta de Junho 2026 passa de "esperar mês 4" pra "esperar mês 3" = +1 mês de AdSense no horizonte.

## Open Threads

### Pendentes (opcional — Weslley decide se roda agora ou depois)
- **Validar sazonalidade BR via `google-trends` MCP**: buscar "ansiedade", "provisão", "Salmo 91", "oração" últimos 12 meses pra confirmar picos sazonais assumidos no plano
- **Minerar 5 afiliados Hotmart gospel via `firecrawl`+`tavily`**: pra adicionar na descrição dos vídeos (receita paralela)
- **Expandir pool keywords Abril/Maio via `keywordtool-guest`**: volumes reais de busca BR pra otimizar títulos

### Ações Weslley (próximos 2-4 dias)
- **Qui 23/04**: OAuth YouTube MCP (1h30) — guia em `pgsa/GUIA-GOOGLE-OAUTH-YOUTUBE.md`
- **Qui 23/04**: criar produto Hotmart ebook Ansiedade R$19,90 + link UTM (1h)
- **Qui 23/04**: gravar Longform 30min #01 "Oração Pra Ansiedade Noturna" (45min) — PIPELINE-OPCAO-E.md
- **Sex 24/04 21h**: setup OBS + Restream + iniciar LIVE 12h (1h30) — LIVE-247-SETUP.md
- **Sáb 25/04**: batch gravar 3-4 orações da semana seguinte (2h)
- **Dom 27/04 06h**: Longform 8h OBRIGATÓRIO "Fundo Musical 8h PROVISÃO Salmo 23" ao ar
- **Dom 27/04 22h**: Longform 1h pilar

### Sessões separadas (paralelas à produção)
- **Revisar ebook Ansiedade linha-a-linha com Claude** (2-3h) — output em `pgsa/EBOOK-30-ORACOES-ANSIEDADE-FINAL.md` + PDF Canva + upload Hotmart Dom 27/04
- **Outline ebook PROVISÃO** (começar 28/04, lançar 05/05) — 2h sessão separada

### Gates de decisão próximos
- **Dia 7 (28/04)**: Views > 2k? Live avg concurrent > 20?
- **Dia 10 (30/04)**: Vendas ebook ansiedade Abril ≥ 2?
- **Dia 14 (05/05)**: Subs > 80? Policy status OK?
- **Fim Maio**: Líquido > R$300?

## Cross-Project Handoffs

None this session. Tudo ficou dentro do projeto `#youtube/` (pasta pgsa/).

## Session Type

**Strategic refactor + plan execution**. Mix de:
- Planning (plan mode ~3h — 4 iterações de cadência até convergir)
- Research (audit via strategist-autonomous + Plan agent + 4 WebSearches)
- Execution (14 arquivos criados/atualizados após aprovação)
- Memory capture (11 learnings novos em MEMORY.md)

Lição pra sessões futuras longas: usar GSD framework (`/gsd-plan-phase`) desde o início pra não perder contexto em refatorações iterativas.
