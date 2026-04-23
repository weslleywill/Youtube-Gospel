# Histórico de Iterações — Strategy Finder (PGSA)

> Log persistente de todas as runs do strategy-finder. Consultar pra não repetir caminhos já explorados + rastrear evolução do champion.

---

## Iter 01 — 2026-04-17 (baseline inicial)

- **Hipóteses**: 25 (5 buckets: Pago / Orgânico / LTV / Parceria / Híbrida)
- **Stress test**: 4 cenários (Base, CPM+30%, CVR-40%, Orgânico-50%)
- **Champion**: **#24 "Funil Isca"** — Lead Magnet Meta + Email seq 5 + Ebook+bump+upsell + Amazon KDP
- **ROI M2**: **+27%** baseline / R$509 receita
- **Stress**: passou 3/4 cenários (4º break-even)
- **Primeira venda**: dia 9-14
- **Convergência em 1 iteração** — flagged como suspeita (espaço de busca pequeno)
- **Arquivo**: `iter-01-2026-04-17.md`

---

## Iter 02 — 2026-04-17 (re-run expandido 50 hipóteses)

- **Hipóteses**: 50 = 25 re-simuladas do iter-01 + 25 novas em 4 grupos:
  - Bucket novo **Produtizada** (#26-30): quiz, calculadora, mini-curso, desafio WhatsApp, template Notion
  - Bucket novo **Community-led** (#31-35): Telegram, WhatsApp R$9,90, Discord, lives IG, co-op PTs
  - **Híbridas adicionais** (#36-45): SEO+Amazon, YT+Meta ret, podcast, Substack, Reddit, TikTok whitelist, Instant Form, Display, Pinterest+SEO, LinkedIn B2B
  - **Variações do #24** (#46-50): vídeo LM, 8 emails, sem Amazon, webinar, tripwire R$9
- **Stress test**: 6 cenários (+ Sazonalidade Dez/Jan, + Saturação Amazon KDP 2x)
- **Champion**: **#50 "Funil Isca Ascension"** = #24 + tripwire R$9
- **ROI M2**: **+69%** baseline / R$677 receita
- **Stress**: **6/6 cenários PASS**
- **Primeira venda**: dia 2 (tripwire no email 2)
- **Delta vs #24**: **+42pp absolutos / +156% relativo** — TROCA CHAMPION
- **Aprendizado-chave**: Amazon KDP é componente crítico (#48 removendo Amazon = -43% ROI); tripwire R$9 é alavanca dominante; 4 dos top 5 são mutações do próprio #24
- **Arquivo**: `iter-02-2026-04-17.md`

---

## Iter 03 — 2026-04-17 (mutations do top 5 iter-02)

- **Hipóteses**: 20 mutações cross-combinando componentes de #50, #49, #47, #46, #38
- **Stress test**: 6 cenários
- **Champion**: **#64 "Funil Isca Ascension + IG Repurpose"** = #50 + IG orgânico via skills `spy`+`repurpose`
- **ROI M2**: **+119%** baseline / R$875 receita
- **Stress**: **6/6 cenários PASS**
- **Primeira venda**: dia 2
- **Delta vs #50**: **+50pp absolutos / +72% relativo** — TROCA CHAMPION
- **Delta vs #24 original**: **+92pp absolutos / +341% relativo**
- **Aprendizado-chave**: canais orgânicos "free ROI" (skills já instaladas) viram alavanca diferencial; platô dentro de constraints atingido — próximos ganhos >10pp exigem relaxar tempo (5h/sem) ou orçamento (R$400/mês) ou depender de terceiros (PTs, cross-promo criadores)
- **Paradas iterações adicionais**: espaço de busca esgotado dentro das regras; mutações ≥+120% todas violam constraint tempo ou dependem de execução frágil
- **Arquivo**: `iter-03-2026-04-17.md`

---

## Iter 04 — 2026-04-17 (re-run com constraint rígida "sem isca + sem IG pessoal")

- **Contexto de disparo**: Weslley pediu literalmente: "uma sem isca so frio mesmo… sem usar meu IG que e baixo pra vender"
- **Novas constraints rígidas**: sem lead magnet/isca, sem email sequence de nurture antes de venda, sem IG Weslley como canal no funil principal, sem WhatsApp/rede pessoal
- **Hipóteses**: 40 novas (#71-110) em 6 buckets:
  - Meta direct-to-checkout (#71-80): CBO/ABO/ASC, bundle, upsell, VSL, slideshow, UGC — **TODOS FAIL**
  - TikTok/Kwai direct (#81-86): Spark/Advantage+/Top-View — **TODOS FAIL**
  - Google Ads alta intenção (#87-92): Search exact/broad, Shopping, Display, TrueView, PMax
  - Pinterest/Amazon/Reddit/Quora/Afiliados (#93-100)
  - Ticket maior sem isca (#101-105): bundle, continuidade, upsell, triple stack, pre-order
  - Offer/copy/LP mechanics (#106-110)
- **Stress test**: 6 cenários (baseline, CPM+30%, CVR-40%, criativo fadiga, Hotmart bloqueio, plataforma kill)
- **Champion**: **#94+#98 "Amazon KDP + Afiliados Hotmart"** (CAC zero combo — única hipótese que passa ROI ≥0% dentro das novas constraints)
- **ROI M2**: **+608% sobre R$50 setup** / R$354 receita / R$304 lucro líquido
- **Stress**: **5/6 cenários PASS** (falha cenário Amazon kill — risco residual baixo)
- **Primeira venda**: dia 30-45 (Amazon típico) — ⚠ borderline gate 30d; afiliados pode cair dia 1-7
- **Delta vs #64 (champion iter-03, descartado por usar isca+IG)**: -R$171/mês lucro líquido absoluto
- **Aprendizado-chave**: ads pagos frios direct-to-checkout pra infoproduto R$37 **não fecham matematicamente** — 38/40 hipóteses falham ROI ≥0%; CBO/ABO/ASC não salvam (delta ~10-15% vs gap necessário ~60-80pp); Amazon KDP + Afiliados Hotmart é a **única escalada CAC-zero possível**; custo da constraint filosófica "sem isca" = ~R$170/mês lucro
- **4 opções de relaxamento documentadas**: A) budget R$800/mês, B) aceitar 1ª venda 45-60d, C) ticket mínimo R$67 bundle, D) combo Amazon+Afiliados+Google Search exact (+35% ROI baseline, stress frágil)
- **Arquivo**: `iter-04-2026-04-17.md`
- **Documento paralelo criado**: `../ESTRATEGIA-VENCEDORA-SEM-ISCA.md` (coexiste com `ESTRATEGIA-VENCEDORA.md` — Weslley escolhe qual seguir)

---

## Iter 05 — 2026-04-17 (portfolio de 5 vencedoras em 5 perfis)

- **Contexto de disparo**: Weslley pediu literalmente: "rode ate ter 5 vencedoras"
- **Interpretação**: PORTFOLIO de 5 estratégias-champion diferentes — não 5 variações da mesma. Cada uma responde uma pergunta distinta (max lucro M2, frio puro, velocity, hands-off, escala M6).
- **Hipóteses**: 50 novas (#111-160), 10 por perfil
- **Stress test**: 3-4 cenários por perfil (customizados ao tradeoff)
- **5 campeãs eleitas**:
  - **V1 Max Lucro M2**: **#111** "Ascension + Tripwire R$1 + Bump Duplo" — R$676/mês lucro líquido (+R$201 vs #64 baseline)
  - **V2 Frio Puro**: **#125** "Amazon KDP + Afiliados + Amazon Ads" — R$443/mês (+R$139 vs #94+98 baseline)
  - **V3 Velocity**: **#131+#134** "Afiliados Hotmart + Co-op 1 PT" — R$370/mês, 1ª venda dia 1-3, R$0 custo
  - **V4 Hands-Off**: **#142** "Amazon KDP Library 3 ebooks" — R$450 M2 / R$1.000+ M6, 0,5h/sem pós setup
  - **V5 Escala M6**: **#155** "#64 Evergreen + Lançamento R$197 M4" — R$475 M2 / **R$2.205 M6**
- **Recomendação default agent**: V5 + V4 embaixo como camada permanente (V5 é V1 evoluído + produto R$197; V4 é cimento sem dependência Meta/IG/CPM)
- **Insight não-óbvio**: V4 (Amazon KDP library 3 ebooks) foi sub-estimada em iters anteriores. Gera R$1.000+ M6 com 0,5h/sem pós setup. Deveria rodar embaixo de V1/V2/V5 como diversificação estrutural permanente.
- **Aprendizado-chave**: portfolio multi-perfil expõe tradeoffs que single-champion esconde. Weslley escolhe filosofia, agent fornece matemática pra cada.
- **Espaço de busca**: considerado **mapeado** após 5 iters × 160+ hipóteses × 5 dimensões. Próximas iters só com input novo (dados reais de execução, constraint mudada, produto R$197 pronto).
- **Arquivo**: `iter-05-2026-04-17.md`
- **Documento paralelo novo**: `../PORTFOLIO-5-VENCEDORAS.md` (resumo executivo das 5 vencedoras)

---

## Iter 06 — 2026-04-17 (Monte Carlo de robustez — portfolio 5)

- **Contexto de disparo**: Weslley quis saber qual das 5 vencedoras é mais ROBUSTA estatisticamente, não só a de maior expectativa. Pergunta: se rodar 1000× em universos paralelos com variação de inputs (CPM, CVR etc.), qual entrega lucro M2 >R$200 mais consistente?
- **Método**: aproximação analítica delta (produto de triangulares), não Monte Carlo real (sem Python na sessão). Documentado honestamente no topo do arquivo.
- **Arquivo**: `iter-06-2026-04-17-montecarlo.md`
- **Aprendizado-chave**: validação da robustez estatística das 5 vencedoras — complementa stress test determinístico da iter-05.

---

## Iter 07 — 2026-04-17 (cross-breed V6 do portfolio 5)

- **Contexto de disparo**: Weslley pediu "ao chegar em casa ter algo MAIS TOP que o portfolio de 5 atual". Missão: decompor V1-V5 em componentes, recompor em 15-20 híbridos, testar se algum DOMINA todas as 5 simultaneamente em ≥3 dimensões (das 5: lucro M2, M6, 1ª venda, tempo/sem, stress).
- **Hipóteses**: 18 híbridos (H1-H18), 13 sobreviventes na triagem.
- **Champion (V6 oficial)**: **H17 "Minimum Viable Portfolio sequencial"** — M1 V3 (afiliados+PT outreach), M1-M3 V4 (3 ebooks), M3+ V5 (Meta+produto R$197). **R$661 M2 / R$2.927 M6**, 1ª venda dia 1-3, stress 4/5.
- **Patch V5 descoberto**: V5 iter-05 usa #64 base (tripwire R$9); poderia usar #111 base (tripwire R$1) pra +R$201/mês M2 grátis. Upgrade aplicável independente de H17.
- **Alternativa "sem Meta"**: H2 (V3+V4) é V6-lite; domina V2/V3/V4 mas falha stress CVR-40%.
- **Aprendizado-chave**: H17 não é novidade — é composição temporal correta (V3 → V1+V4 → V5) em staggered activation. "V3 como kickstart M1" era componente faltando no portfolio 5.
- **Arquivo**: `iter-07-2026-04-17-crossbreed.md`

---

## Iter 08 — 2026-04-17 (substitutos do V3 sem PT co-op)

- **Contexto de disparo**: Weslley confirmou que **não tem rede de PTs reais** pra co-op. V3 (ignition humana afiliados+PT) fora do V6/H17. Iter busca substituto ou mutação V4/V5 pra cobrir gap V3 = R$74 M2 + R$222 M6.
- **Baseline a bater**: H1 (V5+V4 sem V3) = R$587 M2 / R$2.705 M6. Stretch: V6/H17 = R$2.927 M6.
- **Decisões travadas**: tripwire R$9,90 (não R$1), 6h/sem OK nas 3 primeiras semanas, V3 FORA, V5+produto R$197 M4 mantido.
- **Hipóteses**: 50 em 2 eixos — **Eixo A** (25 substitutos de ignition V3 sem PT: afiliados públicos, Reddit, Quora, Pinterest, cold DM volume, Telegram/newsletter pagos, TikTok/YT orgânico, Amazon Ads etc.) + **Eixo B** (25 mutações V4/V5: mais ebooks, VSL 12min, quiz funnel, bump duplo, email 8 peças, continuidade R$47/m, pre-qualification, retargeting etc.)
- **Gates**: M2≥R$587, M6≥R$2.705, 1ª venda ≤30d (ou ≤45 se compensa M6), budget ≤R$400/mês, tom marca.
- **Sub-iter 2**: 10 mutações cruzadas do TOP 5 pra testar combinações VSL + ebooks + continuidade + afiliados.
- **Stress test**: 6 cenários (baseline, CPM+30%, CVR-40%, Orgânico-50%, Sazonalidade -25%, Saturação Amazon -30%).
- **Champion**: **V6+ (M6 da sub-iter 2) = "VSL 12min + 5 ebooks library + continuidade R$47/mês"** — B32 + B26 + B41 combinados.
- **Math**: **R$879/mês M2 / R$4.405/mês M6** — supera V6/H17 em **+R$218 M2 / +R$1.478 M6**. Stress **6/6 cenários PASS**. 1ª venda dia 2. Custo R$400/mês (mesmo). Tempo regime 4-5h/sem; setup pico 5h×5 sem (spread).
- **Alternativa conservadora**: **M1 (VSL + 5 ebooks, sem continuidade)** = R$879 M2 / R$3.805 M6, stress 6/6 — caminho mais simples se continuidade der medo.
- **Aprendizado-chave**: **substituir V3 via canal único (Eixo A) é ineficiente**; nenhum canal sozinho fecha gap. **Turbinar V4+V5 via alavancas conversão/AOV/LTV (Eixo B) supera gap 6,6x** (V6/H17 ganhava +R$222 M6 com PT; V6+ ganha +R$1.700 M6 com VSL+5ebk+continuidade). **VSL 12min é alavanca universal** (+R$180 M2 / +R$600 M6 sozinho). **Continuidade R$47/m** é alavanca LTV M5+ que transforma infoprodutor em criador de comunidade.
- **Candidato extra-budget** (se Weslley relaxar R$400→R$600): **A21 Amazon Ads R$200/m** como ignition = R$3.539 M6 sozinho integrando V2 ao stack.
- **Skills usadas**: `script` (VSL), `copy` + `brand-voice:enforce-voice` (ebooks), `email-sequence` (nurture), `repurpose` (IG/TikTok), `spy` (audiência).
- **Arquivo**: `iter-08-2026-04-17.md`

---

## Estado atual (pós iter-08)

### Champion oficial atual: **V6+ "VSL 12min + 5 ebooks library + continuidade R$47/mês"** (iter-08)
- **Math**: R$879/mês M2 / **R$4.405/mês M6**, stress **6/6**, 1ª venda dia 2
- **Composição**: V5 engine (Meta R$400/mês + lead magnet + tripwire R$9,90 + email seq + produto R$197 M4) + **VSL 12min na LP** + V4 library **5 ebooks Amazon** + **continuidade R$47/m** ativada M5
- **Não requer PT co-op** (substitui gap V3 com alavancas universais)
- **Alternativa conservadora**: M1 (VSL + 5 ebooks, sem continuidade) = R$879 M2 / R$3.805 M6, stress 6/6
- Arquivo detalhado: `iteracoes/iter-08-2026-04-17.md`

### Portfolio de 5 vencedoras (iter-05) — mantido como opções filosóficas alternativas

Weslley escolhe baseado em qual pergunta quer responder. V6+ é default agent; as 5 abaixo são respostas a tradeoffs específicos:

- **V1 Max Lucro M2** (#111) — R$676/mês M2, 4/4 stress, usa isca+IG, Meta Ads R$400/mês
- **V2 Frio Puro** (#125) — R$443/mês M2, 4/4 stress, sem isca/IG, Amazon Ads R$200/mês
- **V3 Velocity** (#131+134) — R$370/mês, 1ª venda dia 1-3, 2/3 stress, R$0 custo — **BLOQUEADO (Weslley sem PT real)**
- **V4 Hands-Off** (#142) — R$450 M2 / R$1.000+ M6, 0,5h/sem, 2/3 stress, R$150 setup
- **V5 Escala M6** (#155) — R$475 M2 / R$2.205 M6, 2/4 stress, V1+produto R$197 M4

### Hibridizações iter-07 (cross-breed)
- **V6/H17** (portfolio sequencial V3→V4→V5): R$661 M2 / R$2.927 M6 — requer V3 = bloqueado.
- **H1** (V5+V4 sem V3): R$587 M2 / R$2.705 M6 — baseline que V6+ superou.

**Default agent pós iter-08**: **V6+** (se Weslley topa executar VSL gravação + continuidade setup). Fallback conservador: M1 (sem continuidade).

**Champions pré-existentes mantidos** (V1 e V2 expandem eles):

### Champion pragmático (com isca + IG): **#64** Funil Isca Ascension + IG Repurpose
- ROI M2 +119% / R$875 receita / R$475 lucro líquido mensal
- Usa lead magnet grátis + IG repurpose — VIOLA constraint "sem isca + sem IG"
- Arquivo: `../ESTRATEGIA-VENCEDORA.md`

### Champion respeitando constraint "sem isca + sem IG": **#94+98** Amazon KDP + Afiliados Hotmart
- ROI M2 +608% sobre R$50 / R$354 receita / R$304 lucro líquido mensal
- CAC zero, zero ads pagos — respeita 100% as novas constraints
- ⚠ Primeira venda borderline 30-45d
- Arquivo: `../ESTRATEGIA-VENCEDORA-SEM-ISCA.md`

**Delta entre champions**: ~R$170/mês lucro líquido (preço da constraint filosófica)

**Pontos-cegos conhecidos** (não re-explorar sem input novo):
- Ads frio direto pra ebook R$37: todas plataformas testadas (Meta CBO/ABO/ASC, TikTok, Kwai, Pinterest, Reddit, Quora, YouTube Shorts), todas falham (-67 a -97%). Lead magnet OU Google Search exact são as únicas janelas viáveis.
- SEO blog: maturação 60-90d incompatível com gate ≤30d. Fase 2+.
- LinkedIn B2B / Pack corp wellness: ciclo >30d. Fase 3+.
- Produto R$197 "Magro Gordo Atleta": waitlist M2 não cobre custo (ROI -41%). Lançar M3-4.
- CBO vs ABO vs ASC: diferença marginal (~10-15% CPA), não salva viabilidade.
- ASC (Advantage+ Shopping Campaign): exige 200+ compras no pixel — Weslley tem 0. Não serve no M1-M4.
- Bundle R$67 / Pre-order R$197 via ads cold: ticket maior = CVR cai mais do que margem sobe.

**Quando re-rodar**:
- 30+ dias após implementação real (validar projeções vs realidade)
- CPM mercado mudou ≥20%
- Weslley relaxar constraint (tempo, orçamento, produto novo)
- Champion atual falhou em teste de campo (CPL real >R$25, CVR email <3%, etc.)
- Novo canal/skill instalado que pode destravar novos buckets (ex: API meta ads-meta virá com automação)

---

## Convenções deste log

- Ordem: cronológica ascendente (mais antigo no topo)
- 1 entrada = 1 iteração completa
- Link sempre pro arquivo `iter-N-YYYY-MM-DD.md` com detalhes
- Champion em **bold** quando troca
- Aprendizados resumidos em 1 linha; detalhes no arquivo da iteração
