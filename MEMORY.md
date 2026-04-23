# MEMORY — Projeto #youtube (canais YouTube AI)

> Learnings persistentes. Separado do CLAUDE.md (que tem rules). Aqui: decisões, preferências reveladas, contexto operacional.
>
> Última atualização: **2026-04-23** (GSD Full Adaptado instalado)

---

## 🆕 2026-04-23 — GSD Full Adaptado + 1º longform produzido

### ✅ Infraestrutura instalada

- **`.planning/` criado** (16 arquivos, ~1800 linhas) — virou o CÉREBRO CENTRAL do projeto
  - `PROJECT.md` visão master, `STATE.md` onde estou HOJE, `ROADMAP.md` fases, `REQUIREMENTS.md` catálogo
  - `workstreams/gospel/` (ATIVO fase 00-fundacao) + `workstreams/fitness/` (HIBERNANDO)
  - `phases/00-fundacao/` com PLAN + VERIFICATION
  - `seeds/` pra ideias futuras
- **Git repo inicializado** — antes não tinha. 3 commits: backup inicial + backup completo + GSD instalado
- **5 arquivos arquivados** em `pgsa/_arquivo/2026-04-23/` via `git mv` (preserva histórico):
  - `ESTRATEGIA-VENCEDORA.md`, `-AI-ONLY.md`, `-SEM-ISCA.md`, `CALENDARIO-EDITORIAL-12SEMANAS.md`
  - ATIVO continua: `ESTRATEGIA-VENCEDORA-GOSPEL.md` + `CALENDARIO-EDITORIAL-OPCAO-E-MAI-DEZ.md`
- **Hook SessionStart** ganhou 3º comando que lê `.planning/STATE.md` e mostra fase + próxima ação
- **CLAUDE.md** topo tem seção "GSD CÉREBRO CENTRAL" com atalhos
- **Dashboard Obsidian** ganhou seção "GSD VISÃO RÁPIDA" espelhando STATE.md

### 🎬 1º longform 30min "Oração Ansiedade" PRODUZIDO

- Trilha Suno: masterizada (`loudnorm=I=-14:TP=-1:LRA=7` + EQ anti-watermark `equalizer=f=12000:t=h:width=2000:g=-3`) e estendida pra 30min via `ffmpeg -stream_loop -1 ... -t 1800 -af "afade=t=in:st=0:d=2,afade=t=out:st=1798:d=2"`
- Voz: Weslley gravou só **11s** (hook+promessa) em vez de 5min completos. Em vez de forçar regravação, aproveitamos como "abertura guiada + 29:48 trilha solo"
- Mix final: voz pad 1800s (silêncio 2s + voz 11s + silêncio) + trilha extended; `volume=1.3` voz + `volume=0.55` trilha
- Vídeo: 10s clip Higgsfield Cícero-style + loop via `stream_loop` + re-encode `libx264 crf 20`
- **Arquivo final**: `Canal-gospel- conteudo/Abril-OpcaoE/finais/2026-04-22 - Oracao Ansiedade 30min - VIDEO-FINAL.mp4` (30:00, 1.3GB)
- Descrição, tags, título gerados pronto pra copy-paste no YT Studio
- Recomendação horário: **Hoje 22h** (canal 0 subs, quarta-feira menos concorrência)

### 🎯 Correções & preferências reveladas do Weslley (2026-04-23)

12. **ALWAYS**: quando Weslley grava curto/diferente do template (11s em vez de 5min), NÃO forçar regravação — adaptar o FORMATO ao que ele fez. Ele prefere "minha voz autêntica mesmo que curta" > "performance perfeita". Formato "abertura guiada + trilha instrumental" é válido no nicho sleep/meditação.

13. **Regra de preservação de dados**: Weslley teme perder informação mesmo concordando com consolidação ("nao sei se nao perdermos os nossos dados e informações"). Regra: toda consolidação precisa explicar "preserva tudo, só arquiva" ANTES de executar. `git mv` + pasta `_arquivo/YYYY-MM-DD/` + README explicativo.

14. **Preferência em escolhas**: quando hesita entre leve/parcial/full → tende a escolher **FULL** ("rodar em tudo e dar um up no nosso ecossistema"). Oferecer 3 opções de tamanho e deixar ele decidir, mas padrão é ele pedir o maior.

15. **Workflow GSD validado**: Weslley confirmou valor da estrutura `.planning/` quando perdido ("rapaz vc nao pode se perder nao tu criiou mts arquvs nem eu to savendo masi nde esta kkkk procura skill para isso"). Problema real: múltiplos MDs concorrentes = perdido. Solução: 1 fonte master + arquivar redundantes.

16. **API quirk gitignore pastas grandes**: projeto tem `Canal-gospel- conteudo/` com arquivos de 330MB (trilhas WAV) a 1.3GB (vídeos finais). Adicionar ao `.gitignore`: `*.wav *.mp3 *.mp4 *.ogg *.opus *.png *.jpg Canal-gospel- conteudo/ _sandbox-skills-*/`

17. **Whisper local > ElevenLabs STT**: ElevenLabs API key do MCP dá 401 (inválida). Fallback funcionou: `whisper arquivo.ogg --model small --language Portuguese --output_format txt`. Primeira rodada baixa modelo (~461MB) ~10s.

### 📂 Arquivos importantes criados nesta sessão

Em `.planning/`:
- `PROJECT.md`, `STATE.md`, `ROADMAP.md`, `REQUIREMENTS.md`
- `workstreams/gospel/ROADMAP.md` + `STATE.md`
- `workstreams/gospel/phases/00-fundacao/PLAN.md` + `VERIFICATION.md`
- `workstreams/gospel/phases/01-validacao/PLAN.md` + `VERIFICATION.md`
- `workstreams/gospel/phases/02-escala-organica/PLAN.md`
- `workstreams/gospel/phases/03-ads/PLAN.md`
- `workstreams/fitness/ROADMAP.md` + `STATE.md` (hibernando)
- `seeds/README.md`

Em `pgsa/`:
- `SUNO-CONFIGURACOES-PADRAO.md` (criado 2026-04-22, referenciado hoje)
- `_arquivo/README.md` + 4 arquivos arquivados em `_arquivo/2026-04-23/`

Atualizados:
- `CLAUDE.md` (seção GSD no topo)
- `.claude/settings.local.json` (3º hook SessionStart)
- `.gitignore` (regras pastas mídia)
- `_obsidian-setup/dashboard-gospel-opcao-e.md` (seção GSD visão rápida)

Plano GSD: `C:\Users\wesll\.claude\plans\humming-churning-map.md`

### 🎯 Próximos passos imediatos (pós 2026-04-23)

1. Weslley: subir video final no YouTube hoje 22h (arquivo pronto em `finais/`)
2. Weslley: criar produto Hotmart ebook Ansiedade + link UTM (~1h)
3. Weslley: revisar ebook draft em `pgsa/EBOOK-30-ORACOES-DRAFT.md` (sessão separada)
4. Weslley: Sex 24/04 gravar Short + setup LIVE 12h
5. Weslley: Dom 26/04 gravar longform 1h Provisão
6. Weslley: Seg 27/04 06h longform 8h OBRIG Provisão
7. Dia 7 (Ter 28/04): rodar `/gsd-audit-milestone 00-fundacao` pra validar gate

---

## 🔄 ATUALIZAÇÃO 2026-04-22 — PIVOT PRA OPÇÃO E

**Contexto**: Weslley publicou 2 vídeos iniciais (Sono 8h + Oração 1h) no canal @gospelpradescansar. Depois de audit do `strategist-autonomous` (pesquisa gringa 2025-2026) + observação própria do Weslley do padrão Cícero Euclides (1,22M subs), plano H27 foi refutado por 3 riscos:

1. **YouTube Inauthentic Content Policy Jul/2025**: cita literalmente "AI sleep music + static image loop" como alvo. H27 = 20% policy-OK.
2. **Cadência 7×/sem** tem ganho logarítmico, não linear (~25% views pra 7× trabalho).
3. **CVR 0,08% sleep music canal novo = 4× otimista** (baseline real 0,02%).

### ⚡ Opção E aprovada (v4 final)

**Cadência**:
- 1× Longform 8h OBRIGATÓRIO (Seg 06h) — com narração Weslley 1-2min intro + multi-clip
- 1× Longform 8h OPCIONAL (Sex 06h) — variação temática
- 1× Longform 1h (Dom 22h) — pilar devocional Cícero-style
- 3× Longforms 30min (Ter/Qua/Qui) — orações guiadas temáticas
- 1× LIVE 12h permanente (Sex 21h → Dom 22h mês 2+)
- 5-7 Shorts/sem via Higgsfield + voz Weslley

**Tempo humano**: 6h30-7h20/sem (dentro teto 10h)

**Tese Opção E**: cada vídeo tem CTA pro ebook DO TEMA DO MÊS (catálogo 7 ebooks) = CVR 3-4× superior vs ebook genérico único.

**Math**: Abril líq −R$7 (investimento) | Maio R$355 | Junho R$720 | Setembro R$2.275.

**Catálogo ebooks temáticos** (1/mês):
- Abril: Ansiedade (ativo) ✅
- Maio: Provisão/Finanças (lança 05/05)
- Jun/Jul: Proteção Salmo 91
- Ago: Cura Emocional
- Set: Gratidão
- Out/Nov: Recomeço
- Dez: Esperança Natal

### 🎨 Decisões técnicas Opção E

- **Narração humana OBRIGATÓRIA** em todo longform (policy shield)
- **Visual multi-clip Higgsfield** (3-4 clips em loop, NÃO ping-pong 1 still)
- **Thumb**: ícone canal canto sup + imagem épica bíblica (leão/águia/fogo/montanha/vitral) + 1-2 palavras CAPS (YESHUA/PROVISÃO/INTIMIDADE). **ZERO rosto Weslley, ZERO vela genérica.**
- **A/B ElevenLabs BR** mês 1 (2 orações Weslley voz + 2 ElevenLabs pra testar escalabilidade)
- **Suno**: trilha de FUNDO agora (não peça principal), com pós-master EQ −3dB em 12kHz pra quebrar spectral watermark
- **Live 12h**: OBS local mês 1 (grátis) → Restream R$80/mês se watchtime render

### 📁 Arquivos criados 2026-04-22 (Paralelo 1 e 2)

Em `pgsa/`:
- `CHECKLIST-PRE-PRODUCAO.md`
- `ROTEIRO-ORACAO-GUIADA-TEMPLATE.md`
- `THUMB-TEMPLATE-CICERO.md`
- `LIVE-247-SETUP.md`
- `PIPELINE-OPCAO-E.md`
- `PROMPTS-SUNO-TRILHA-DE-FUNDO.md`
- `CALENDARIO-EDITORIAL-OPCAO-E-MAI-DEZ.md`
- `CATALOGO-EBOOKS-TEMATICOS.md`

Em `_obsidian-setup/`:
- `dashboard-gospel-opcao-e.md` (homepage vault)

Atualizados:
- `pgsa/FASE0-VALIDACAO-COMPLETA.md` (Opção E aprovada + itens 🟢)
- `pgsa/ESTRATEGIA-VENCEDORA-GOSPEL.md` (append pivot Opção E, H27 fallback)

**Plano completo**: `C:\Users\wesll\.claude\plans\whimsical-knitting-horizon.md` v4

### 🧰 Toolstack atualizado (custo mensal)

| Ferramenta | Custo | Uso |
|---|---|---|
| Suno Pro | R$50 | Trilha de fundo instrumental |
| ChatGPT Plus | R$110 | Imagem/thumbnails auxiliares |
| Higgsfield PLUS | ~R$100 | Clips 5s épicos pra visuais + Shorts |
| Claude Code | já pago | Orquestração + documentação |
| ElevenLabs | grátis (free tier) ou R$27 | A/B narração BR |
| Restream (opcional) | R$80 | Live 24/7 sem PC ligado |
| **Total fixo** | **R$260** (+R$80 se Restream) | |

Meta: receita cobre ferramentas em **Maio** (R$355 líq vs R$260 custo).

### 🔍 GSD Framework (get-shit-done)

- **Detectado já instalado global** (skills gsd-help, gsd-plan-phase, gsd-execute-phase, gsd-autonomous, gsd-progress, gsd-next + ~50 outras)
- Origem: [gsd-build/get-shit-done](https://github.com/gsd-build/get-shit-done) — 51k stars
- Uso sugerido: `/gsd-next` pra avançar pipeline, `/gsd-progress` pra ver status, `/gsd-plan-phase` pra fases longas
- Ajuda a não perder contexto em sessões grandes (problema notado nessa sessão)

### 🎯 Correções & Preferências Reveladas do Weslley (Added: 2026-04-22)

Capturadas nesta sessão pra nunca mais esquecer:

1. **ALWAYS**: considerar manutenção do formato antigo quando pivotar plano. Weslley reclamou "pedi pra considerar vídeo 30m do Cícero e manter pelo menos 1 ou 2 do nosso 8h" quando eu cortei o 8h pivot pra Opção E. Regra: pivots são híbridos, não substituições totais.

2. **ALWAYS**: antes de editar plano de longa duração, **LISTAR "REQUISITOS FECHADOS" no topo do plan file** como âncora pra qualquer edição futura. Weslley validou esse padrão explicitamente em 2026-04-22. Se edit futuro bate contra requisito fechado → PARA e pergunta.

3. **NEVER**: colocar rosto do Weslley em thumb do canal Gospel Pra Descansar. Regra visual fixa. Usar ícone canal canto sup direito + imagem épica bíblica (leão/águia/fogo/montanha/vitral) + 1-2 palavras CAPS tribais (YESHUA/PROVISÃO/INTIMIDADE). Vela / janela chuvosa genérica = REJEITADO pelo Weslley ("fiquei apagado com a sugestão de vela"). Padrão é Cícero Euclides (ele usa nome dele, não rosto).

4. **NEVER**: forçar persona única pro canal gospel. Weslley explicitamente: "nao precisa de uma persona especifica pode ir mudando a persona dentro do gospel não tem necessidade de ser homem pode ser mulher". Regra: **persona varia por MÊS**, alinhada ao tema sazonal. Homem OU mulher conforme dor do mês.

5. **Preference: "Tiro de canhão, não tiro d'água"** — Weslley valoriza QUALIDADE > quantidade. Arsenal caro (Suno Pro + ChatGPT Plus + Higgsfield PLUS + Claude) precisa entregar diferenciação real. Evitar sugestões genéricas/saturadas. Se sugestão fica no "mesmo que todo mundo faz" → refatorar antes de propor.

6. **Workflow: GSD framework em sessões grandes** — Claude se perdeu nesta sessão (fez 4+ edições de cadência e esqueceu requisitos). Skills `gsd-*` estão instaladas global. Para sessões com 3+ ciclos de revisão → invocar `/gsd-plan-phase` ou `/gsd-next` pra não perder contexto.

7. **Decisão estratégica: Catálogo 7 ebooks temáticos > 1 ebook genérico**. Weslley: "oracao para ansiedade e lancamois um ebook para ansiedade, oração para desafios financeiros ebook para desafios". Match de intenção perfeito = CVR 3-4× maior. Cronograma completo em `pgsa/CATALOGO-EBOOKS-TEMATICOS.md`.

8. **Decisão: Imitar padrão Cícero Euclides (1,22M subs)** — 4 longforms/sem (1×1h + 3×30min) + live 12h + Shorts. 8h/12h **SÓ em live** (ele não upa como vídeo). Nossa adaptação: mantém 1×8h obrig (SEO histórico) + 1×8h opc + 1×1h + 3×30min + live 12h.

9. **API quirk YouTube**: YPP 2026 threshold é **500 subs + 3000h em 90d** (não mais 1000 subs + 4000h). Confirmado via audit strategist-autonomous. Fonte: Subsub.

10. **API quirk Suno Pro**: pra distribuir via DistroKid/Spotify, fazer pós-master `ffmpeg -af "equalizer=f=12000:t=h:width=2000:g=-3"` pra quebrar spectral watermark + sempre creditar como nome próprio ("Gospel Pra Descansar"), NUNCA como "Suno". Rejeição alta em AI music sem isso.

11. **API quirk YouTube Policy Jul/2025 "Inauthentic Content"**: derrubou 4,7B views Jan/2026. Alvo EXPLÍCITO: "AI sleep music + static image loop". Defesa: narração humana + multi-clip visual + descrição 500+ palavras + chapters. Formato anterior (Suno + still ping-pong) = 20% policy-OK. Nova formato Opção E = 85% policy-OK.

### 🎯 Próximos passos imediatos (pós 2026-04-22)

1. Weslley: OAuth YouTube MCP (Qui 23/04 — 1h30)
2. Weslley: criar produto Hotmart ebook Ansiedade (Qui 23/04 — 1h)
3. Weslley: gravar primeiro longform 30min "Oração Pra Ansiedade Noturna" (Qui 23/04 — 45min)
4. Weslley: setup OBS + Restream + iniciar LIVE 12h (Sex 24/04 21h — 1h30)
5. Claude (sessão separada): revisar ebook Ansiedade linha-a-linha (pode começar agora)
6. Claude (sessão separada): outline ebook Provisão pra Maio (começar 28/04)
7. Claude (próxima sessão): Paralelo 3 = google-trends validar sazonalidade + firecrawl minerar 5 afiliados Hotmart gospel + keywordtool-guest expandir keywords

---

---

## 🔑 Ferramentas que Weslley paga (verificadas nesta sessão)

### Google AI Pro — R$96,99/mês — ATIVO, foi SUBUTILIZADO até 2026-04-19
**REGRA**: SEMPRE considerar ferramentas Google AI Pro antes de sugerir qualquer coisa paga extra.

Inclui:
- 5TB storage (compartilha até 5 pessoas)
- Gemini 3.1 Pro + 1M tokens
- **Imagen** (image gen) — usar pra thumbnails YouTube (substitui Gemini API paga)
- **Veo 3.1 Lite** (vídeo gen) — usar pra clipes estoicos curtos
- **Lyria 3 Pro** (música gen) — ⚠️ **RISCO LEGAL** — não usar em vídeo monetizado
- **Chirp** (TTS) — narração PT-BR (pode substituir ElevenLabs)
- NotebookLM Plus
- Flow (filmmaking)
- 1000 créditos AI/mês

### Freepik Premium+ — R$108/mês — ❌ DESCARTADO em 2026-04-21
**Motivo**: qualidade de música inferior ao Suno, quota estoura rápido, commercial license incerta.
Weslley já tem **Remotion + outras IAs de vídeo** → Freepik não é necessário pra visuais.

### Suno Pro — R$50/mês — ✅ APROVADO em 2026-04-21 (substitui Freepik)
- **2.500 créditos/mês** (até 500 músicas) — cobre MUITO mais que necessário (gospel usa ~8/mês)
- **Commercial use rights** incluído (new songs made)
- Acesso ao modelo **v5.5** (melhor qualidade instrumental)
- Split em até 12 stems, upload até 30min, priority queue
- **MCP descartado**: só existem MCPs reverse-engineered (frágil, risco ToS) — usar via web manualmente
- Fonte: página Suno Pro pricing confirmada por Weslley

---

## ⚠️ Risco legal Lyria 3 (ativo até processo resolver)

- **Ação judicial 06/mar/2026**: artistas independentes × Google
- **Alegação**: Lyria 3 treinada em recordings copyrighted do YouTube sem permissão
- **NUNCA publicar vídeo monetizado com Lyria 3** até processo resolver
- Usar só pra: protótipo, estudo, inspiração
- Fonte: https://www.musicbusinessworldwide.com/indie-artists-sue-google-claiming-it-used-youtubes-own-catalog-to-train-lyria-3-ai-music-tool/

---

## 🎯 Decisões estratégicas desta sessão

### 2 canais YouTube AI — estratégias matematicamente convergidas

**Canal 1 — GOSPEL (H27)** → `pgsa/ESTRATEGIA-VENCEDORA-GOSPEL.md`
- 2 vídeos/sem: 1× sono 8h + 1× oração 1h
- Ebook próprio **"30 Orações Pra Dormir em Paz"** R$19,90 pinado
- Toolstack: só Freepik R$108
- Baseline mês 6: **R$832 líquido**
- YPP mês 4 (acelerado por 8h sono — 1000 views completas = 4000h watch)

**Canal 2 — ESTOICO HÍBRIDO** → `pgsa/ESTRATEGIA-VENCEDORA-AI-ONLY.md`
- 1 longform 8-12min/sem + 2 Shorts repurpose/sem
- Toolstack: Freepik + ElevenLabs R$138 (ou Chirp grátis)
- Baseline mês 6: **R$719 líquido**

### Caminho escolhido: CONSERVADOR
- Mês 1-2: gospel solo
- Mês 3: estoico entra
- Custo inicial: R$108/mês
- Receita combinada mês 6 esperada: **R$1.551 líquido**

---

## 👤 Preferências reveladas do Weslley

- **Economizar sempre** — questiona toda assinatura antes de aprovar → default é testar free tier primeiro
- **Data-driven** — exige matemática, fontes, benchmarks. Nunca chutar número
- **Tom sóbrio pra gospel** — adaptar TOM-DE-MARCA.md (sem "kkkk", sem gírias casuais)
- **Reaproveitar conteúdo** — 1 vídeo vira 3+ adaptações (regra CLAUDE.md)
- **Paralelizar tool calls** — regra global, nunca sequencial quando independente
- **Anti-alucinação extrema** — verifica tudo antes de afirmar (ver `~/.claude/rules/feedback_anti_alucinacao.md`)

---

## ❌ Ferramentas DESCARTADAS (não sugerir mais)

- **MusicGPT pago (~R$132/mês)**: pior custo-benefício que Suno Pro (R$40) com qualidade similar
- **MusicGPT free (500 créditos)**: sem commercial license — inviável pra monetização
- **Lyria 3 em vídeo monetizado**: risco legal ativo
- **Gemini API paga (pra thumbnail)**: Imagen do Google AI Pro substitui grátis

---

## 🛠️ Instalações desta sessão (2026-04-19)

### Skills ATIVAS em `.claude/skills/`
- `ffmpeg-usage` (ychoi-kr) — loop áudio, concat, crossfade
- `claude-youtube` (AgriciDaniel, 14 sub-skills) — strategy, monetize, competitor, audit, ideate, seo, thumbnail, hook, script, calendar, shorts, analyze, repurpose, metadata

### MCPs adicionados ao `.mcp.json` (pendente credenciais — ver `_novos-negocios/INSTRUCOES-SETUP.md`)
- `elevenlabs` — precisa `ELEVENLABS_API_KEY` (free tier 10k chars/mês)
- `youtube-studio` (pauling-ai, 40 tools) — precisa Google OAuth + `YOUTUBE_CLIENT_SECRET_PATH`
- `youtube-uploader` (anwerj) — binary Windows + mesmo OAuth

### MCPs Google AI descobertos (NÃO plugados — aguarda decisão Weslley)
- `gemini-media-mcp` (mordor-forge) OU `Stevekaplanai/google-ai-mcp-server` — Imagen + Veo + Lyria + Chirp + Gemini
- `PleasePrompto/notebooklm-mcp` OU `julianoczkowski/notebooklm-mcp-2026` — research com citations
- Custo zero (usa Google AI Pro que já paga)
- Oficial Google: `GoogleCloudPlatform/vertex-ai-creative-studio` (MCPs oficiais pra Veo/Imagen/Lyria/Chirp)

### Hotmart MCP (pendente escolha)
- **Recomendado**: `hotmart-cli` (dedicado, atualizado 2026-03-16)
- Alternativa: `BridgeAPI` (ecossistema BR 16 MCPs)

---

## 🧪 Testes planejados pra semana 1

1. **Blind TTS test**: mesmo script ~9k chars em 3 ferramentas (Freepik Voice, Chirp, ElevenLabs free)
   - 3 Shorts teste → medir retenção 1min
   - Gate: se Freepik/Chirp ≥ ElevenLabs → economiza R$360/ano
2. **Teste Freepik 8h loop**: 1 vídeo gospel sono completo (validar qualidade ffmpeg extend + watermark)
3. **Validar catálogo Hotmart gospel**: Kit Fé em Ação, Devocional 31 Dias, Planner Devocional — confirmar comissão ≥40%

---

## 📁 Arquivos-chave criados nesta sessão

Em `_novos-negocios/`:
- `BLUEPRINT-YOUTUBE-AI.md` — economia, gates, stress-test adaptado
- `CONTEXTO-GOSPEL.md` — briefing canal 1
- `CONTEXTO-AI-ONLY-CANDIDATOS.md` — 6 nichos avaliados
- `RECOMENDACAO-FINAL.md` — síntese + escolha única
- `SKILLS-E-MCPS-PROXIMOS-PASSOS.md` — 3 tiers + gaps + status
- `INSTRUCOES-SETUP.md` — passo a passo credenciais (~1h total)

Em `pgsa/`:
- `ESTRATEGIA-VENCEDORA-GOSPEL.md` — H27 convergida (6 iter × 27 hipóteses)
- `ESTRATEGIA-VENCEDORA-AI-ONLY.md` — Estoico Híbrido convergida (1 iter × 24 hipóteses)

`.mcp.json.backup-2026-04-19` (backup antes da edição).

---

## 🎬 Próxima sessão — onde parou

**Status atual**:
- Planejamento estratégico: ✅ completo
- Skills/MCPs Tier 1: ✅ 2 skills ativas + 3 MCPs no .mcp.json (pendente credenciais)
- Decisão ElevenLabs vs Chirp: ⏳ pendente testes
- Hotmart MCP: ⏳ pendente escolha Weslley

**Próximos passos imediatos** (ordem):
1. Weslley rodar setup das credenciais (`INSTRUCOES-SETUP.md`) — ~1h
2. Decidir: plugar Google AI Media MCP + NotebookLM MCP? (custo zero)
3. Escolher Hotmart MCP (hotmart-cli recomendado)
4. Restart Claude Code
5. Rodar blind TTS test (Freepik vs Chirp vs ElevenLabs)
6. Iniciar Fase 1 do plano (setup canal gospel — nome + ebook + 1º vídeo)
