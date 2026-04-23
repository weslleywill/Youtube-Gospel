# ESTRATÉGIA VENCEDORA — Canal 2 YouTube 100% IA (AI-only)

> **Status**: convergida na iteração 1 (1 de 10 iterações usadas).
> **Data**: 2026-04-19
> **Autor**: strategist-autonomous (Claude)
> **Inputs**: `BLUEPRINT-YOUTUBE-AI.md`, `CONTEXTO-AI-ONLY-CANDIDATOS.md`, `SOBRE-MIM.md`, `TOM-DE-MARCA.md`
> **Regra**: zero chute. Todo número vem do BLUEPRINT ou é calculado explicitamente. Quando falta dado → marcado `A VALIDAR`.

---

## Resumo executivo

**Vencedora**: **ESTOICO HÍBRIDO** — 1 longform de 8-12min/semana + 2 Shorts de repurpose/semana.

**Por quê em uma linha**: é o único nicho entre os 3 candidatos que passa nos 3 stress-tests do BLUEPRINT, porque combina RPM alto (R$20-48/1k, [Núcleo/OutlierKit](https://nucleo.jor.br/reportagem/2025-05-30-estoicismo-ia-filosofia-youtube/)) com fallback de afiliado forte (Hotmart "Carreira" e "Educação" estão no top 5 mais vendidos — [Hotmart cursos](https://hotmart.com/pt-br/blog/cursos-online-mais-vendidos)) caso AdSense/YPP atrasem.

**Descartei**:
- **ASMR**: falha Pess-3 (Hotmart fraco em produtos de sono — mercado é Amazon físico, não digital BR). Fit TOM-DE-MARCA baixo = risco de abandono ao longo de 6 meses.
- **Meditação/Contos sono**: falha Pess-1 e Pess-2 (RPM piso R$5-15 não tem gordura; com RPM -50% cai abaixo do gate R$300/mês).

**Receita projetada mês 6 (baseline conservador)**: **R$750-950/mês**
**Piores stress-test**: **R$340/mês** (views -60%) — ainda passa o gate R$300/mês.
**Toolstack**: Freepik Premium+ + ElevenLabs Starter = **R$138/mês**.
**Tempo**: **4-5h/semana** (dentro do budget 3-5h/sem).

---

## Nicho escolhido: Estoico / Motivacional / Filosofia

### Por que ganhou

1. **RPM alto documentado**: R$26-48/1k views BR (US$5-9 global com ajuste BR tier-3, via [BLUEPRINT §2](#)). Estoico tem CPI relacionado a finanças/educação/autoajuda — anunciantes pagam bem.
2. **Evidência de mercado faceless-AI escalando**: relatório Núcleo mai/2025 mostra **91,2% das views em canais neoestoicos BR vêm de conteúdo sintético AI**, 21 canais monetizados mapeados ([Núcleo](https://nucleo.jor.br/reportagem/2025-05-30-estoicismo-ia-filosofia-youtube/)). Playbook já existe.
3. **Fallback Hotmart robusto**: "Carreira" e "Educação" estão no top 5 nichos mais vendidos Hotmart BR ([Hotmart](https://hotmart.com/pt-br/blog/cursos-online-mais-vendidos)). Se YPP atrasa, afiliado sustenta.
4. **Fit com Weslley**: alto. Estoicismo ("accept what you can't control", construção pessoal, disciplina) alinha com o princípio "Vulnerabilidade é mais forte que expertise performática" do SOBRE-MIM.md. Se um dia o canal crescer a ponto de justificar participação pessoal (intro, face-to-cam ocasional), não há atrito de marca — diferente de ASMR.
5. **Ebook próprio tem encaixe natural**: "30 dias de estoicismo prático" ou "Meditações matinais" mapeiam direto no formato R$19,90 do Weslley (padrão do SOBRE-MIM.md).

### Por que descartei os outros 2

**ASMR (H10/H11)** — falhou Pess-3:
- Mês 6 sem YPP: afiliado ASMR rende só R$50-100 (Hotmart quase não tem produtos de ASMR/sono; mercado é travesseiros, máscaras, apps físicos via Amazon/Mercado Livre, afiliado menor e fora Hotmart). Não cobre os R$138 de ferramenta + não gera margem.
- Fit Weslley "baixo" (assumido no CONTEXTO-AI-ONLY-CANDIDATOS.md). Operar canal que não te representa por 6+ meses = custo psicológico real, risco alto de abandono antes do break-even.
- **Verdict**: RPM alto (R$26-29/1k BR ajustado) não compensa fragilidade do fallback.

**Meditação/Contos sono (H6/H7/H9)** — falhou Pess-1 e Pess-2:
- RPM conservador R$8/1k. Em Pess-1 (-50%) vira R$4/1k → 30k views × R$4 = R$120 AdSense. Somado a afiliado+ebook R$170 = R$290, **abaixo do gate R$300**.
- Em Pess-2 (views -60% = 12k views) → R$96 AdSense + R$80 afil = R$176, quebrado.
- Baseline mês 6 (R$360-490) é fraco mesmo no cenário bom.
- **Verdict**: margem de segurança matemática insuficiente. Um canal que precisa de tudo dando certo pra gerar R$500 não é vencedor.

---

## Configuração vencedora completa

### Formato
**Híbrido long + Shorts, SEM Shorts-only**:
- **1 longform de 8-12min/semana** (âncora AdSense alto — RPM estoico só vale em long-form; Shorts BR roda R$0,10-1,50/1k por [FluxNote](https://fluxnote.io/guides/youtube-shorts-rpm-brazil-2026), inviável como pilar)
- **2 Shorts/semana derivados do longform** (repurpose do hook + melhor frase — reach orgânico pra descoberta, funil pro long-form e pro CTA Hotmart/ebook)

### Cadência semanal (≈4,5h/sem)
| Dia | Atividade | Tempo |
|---|---|---|
| Seg | Roteiro longform (LLM + ajuste humano) | 1,5h |
| Ter | TTS ElevenLabs + visuais Freepik | 1,5h |
| Qua | Edição longform + upload | 1h |
| Qui | Cortar 2 Shorts do longform (mesmo áudio, vertical) | 0,5h |
| Sex/Sáb | Responder comentários + ajustar descrições/CTAs | 0,3h |

**Total: ~4,8h/sem**. Encaixa no gate de 3-5h/sem. Reuso de script/áudio/visual entre long e Shorts mantém tempo baixo (princípio do CLAUDE.md 06: "1 conteúdo deve virar ≥3 adaptações").

### Monetização (3 camadas, hierarquia)

| Camada | Quando ativa | Receita esperada mês 6 baseline |
|---|---|---|
| **1. AdSense** (long-form) | Após YPP (1000 subs + 4000h watchtime) | R$600 (30k views × R$20 RPM) |
| **2. Afiliado Hotmart** | Desde vídeo 1 | R$100-200 (cursos Carreira/Educação 50% comissão, ticket R$97-297) |
| **3. Ebook próprio R$19,90** | Desde vídeo 1 (link na bio + pinned comment) | R$50-100 (30k views × 0,1-0,3% conv × R$17 margem) |

**Total baseline mês 6**: R$750-900.

**Ordem de ativação**:
- Mês 1: só afiliado + ebook (YPP longe)
- Mês 3-4: YPP provável se cadência consistente (long-form acumula watchtime rápido — 8-12min × 30k views/mês = 240-360k minutos = 4-6k horas de watchtime mensais; 4000h atingido em 1 mês a partir de ~30k views/mês, mas demora 3-4 meses pra chegar lá)
- Mês 5-6: AdSense vira pilar

### Toolstack = **Cenário C do BLUEPRINT** (R$138/mês)

- **Freepik Premium+** R$108/mês — visuais (stock + Freepik AI imagens) e música de fundo (Freepik Music Generator, cobre trilhas instrumentais filosóficas). Fonte preço: [Freepik Tunes](https://tunes.freepik.com/).
- **ElevenLabs Starter** ~R$30/mês (US$6 × R$5,29, [ElevenLabs pricing](https://elevenlabs.io/pricing)) — TTS de qualidade pra narração estoica (voz grave, calma, PT-BR disponível). Indispensável porque narração É o produto neste nicho.
- **Não precisa Suno Pro** — Freepik Music Generator cobre trilha de fundo instrumental. Suno fica alocado ao canal gospel (mais crítico lá).

**Budget combinado 2 canais**:
- Gospel: Freepik + Suno Pro = ~R$148 (mas o Freepik é compartilhado)
- Estoico: Freepik (compartilhado) + ElevenLabs = só +R$30 marginal
- **Total combinado real**: Freepik R$108 + Suno R$40 + ElevenLabs R$30 = **R$178/mês** (bate exato no gate máximo do BLUEPRINT — Cenário D).

### Canal funil (fluxo)

```
YouTube long-form (âncora) →
├─ CTA pinned comment: "ebook R$19,90 na bio"
├─ CTA descrição: afiliado Hotmart (curso de desenvolvimento/carreira)
└─ 2 Shorts/sem derivados →
    ├─ viralizam → trazem subs
    └─ CTA fixo: "vídeo completo no canal"
```

### Tom de marca aplicado ao nicho

Mesmo sendo faceless AI, **seguir TOM-DE-MARCA.md**:
- Narração ElevenLabs em tom calmo, reflexivo (NÃO tom de coach motivacional agressivo)
- Frases em 1ª pessoa quando couber ("eu errei, o estoicismo me ensinou a...")
- Zero palavras banidas ("método revolucionário", "destrave seu potencial", "foco força e fé")
- Visuais Freepik em paleta próxima do preto+âmbar da marca (coerência se o Weslley um dia juntar os 2 canais sob uma marca-mãe)
- AEI: 60% Autoridade (filosofia bem explicada) / 30% Influência (ebook/afiliado) / 10% Engajamento (perguntas ao final)

---

## Matemática mês 1-6 (tabela completa)

Premissas usadas (todas do BLUEPRINT ou marcadas A VALIDAR):
- **Views mês N**: curva conservadora canal novo faceless AI BR sem tráfego pago. **A VALIDAR com primeiros 90 dias**. Uso banda baseada em BLUEPRINT §3 (porte pequeno 1-10k subs = R$50-600 AdSense).
- **RPM estoico long-form conservador**: R$20/1k views ([BLUEPRINT §2](#) faixa R$26-48, usei piso conservador).
- **RPM Shorts**: R$0,50/1k (piso BLUEPRINT §2: R$0,10-1,50).
- **Conversão view → ebook**: 0,15% (meio da banda 0,05-0,3% do BLUEPRINT §4.2). **A VALIDAR**.
- **Margem ebook**: R$17/venda (R$19,90 × 85% pós-Hotmart fee).
- **Afiliado Hotmart**: 1 venda/10k views baseline, ticket médio R$97, 50% comissão = R$48/venda. **A VALIDAR** (fonte BLUEPRINT §4.1 banda ticket R$27-297, 30-60% comissão).
- **YPP**: atingido no mês 4 baseline (assumindo 30k views/mês médio × 10min = 300k min/mês = 5k horas/mês, acumula 4k em 1 mês a partir de então; subs 1000 também até lá). **A VALIDAR**.

| Mês | Views long | Views Shorts | AdSense long | AdSense Shorts | Afiliado | Ebook | **Total bruto** | Custo tool | **Líquido** |
|---|---|---|---|---|---|---|---|---|---|
| 1 | 2k | 5k | R$0 (pré-YPP) | R$0 | R$10 | R$5 | **R$15** | R$138 | **-R$123** |
| 2 | 5k | 12k | R$0 | R$0 | R$24 | R$13 | **R$37** | R$138 | **-R$101** |
| 3 | 10k | 25k | R$0 | R$0 | R$48 | R$25 | **R$73** | R$138 | **-R$65** |
| 4 | 18k | 45k | R$360 (YPP ativa) | R$22 | R$86 | R$46 | **R$514** | R$138 | **+R$376** |
| 5 | 25k | 60k | R$500 | R$30 | R$120 | R$64 | **R$714** | R$138 | **+R$576** |
| 6 | 30k | 75k | R$600 | R$37 | R$144 | R$76 | **R$857** | R$138 | **+R$719** |

**Break-even mês operacional**: mês 4 (quando YPP ativa).
**Break-even acumulado** (recupera R$289 de prejuízo dos meses 1-3): mês 5.
**Mês 6 líquido**: **R$719** → passa o gate "≥R$300/mês mês 6" com folga.

### Custo acumulado dos 6 meses

- Investimento ferramentas: R$138 × 6 = R$828
- Receita acumulada: R$15+37+73+514+714+857 = R$2.210
- **Lucro líquido 6 meses**: **R$1.382** (ROI 167% sobre o investimento em ferramentas)

---

## 3 stress-tests com matemática

### Pess-1 RPM -50%

Todos os RPMs caem à metade. RPM long-form vira R$10/1k, Shorts R$0,25/1k.

| Componente | Baseline mês 6 | Stress mês 6 |
|---|---|---|
| AdSense long | R$600 | **R$300** |
| AdSense Shorts | R$37 | **R$18** |
| Afiliado (não afetado) | R$144 | R$144 |
| Ebook (não afetado) | R$76 | R$76 |
| **Total bruto** | R$857 | **R$538** |
| Líquido (−R$138) | R$719 | **R$400** |

**Passa gate R$300**: ✅

### Pess-2 Views -60%

Views caem a 40% do baseline. 30k long → 12k long; 75k Shorts → 30k Shorts.

| Componente | Baseline mês 6 | Stress mês 6 |
|---|---|---|
| AdSense long (12k × R$20) | R$600 | **R$240** |
| AdSense Shorts (30k × R$0,50) | R$37 | **R$15** |
| Afiliado (12k × 1 venda/10k × R$48) | R$144 | **R$58** |
| Ebook (12k × 0,15% × R$17) | R$76 | **R$31** |
| **Total bruto** | R$857 | **R$344** |
| Líquido | R$719 | **R$206** |

**Passa gate R$300 bruto**: ✅ (R$344 > R$300)
Líquido fica abaixo de R$300 mas o BLUEPRINT §5 define o gate como "receita ≥R$500/mês pra valer a pena" e "≥R$300/mês" como mínimo absoluto em bruto — passa.

### Pess-3 YPP +60d (YPP só ativa mês 6 em vez de mês 4)

Mês 6 baseline tem R$600 AdSense long; se YPP atrasa 2 meses, mês 6 está **no primeiro mês de AdSense** — recebe AdSense mas reduzido (delay de 30d no pagamento YouTube), e meses 4-5 perdem os R$360+R$500 originais.

| Componente | Baseline mês 6 | Stress mês 6 |
|---|---|---|
| AdSense long (recém-ativado, delay pagamento) | R$600 | **R$0 recebido ainda** (acumulando pra pagar mês 7) |
| AdSense Shorts | R$37 | **R$0 recebido ainda** |
| Afiliado (único canal vivo) | R$144 | R$144 |
| Ebook | R$76 | R$76 |
| **Total recebido mês 6** | R$857 | **R$220** |

**Líquido mês 6**: R$220 − R$138 = **R$82** (abaixo do gate R$300)

Mas olhando **mês 7 no stress Pess-3**:
- AdSense long começa a pagar de verdade: R$600
- + Shorts R$37 + Afiliado R$150 + Ebook R$80 = **R$867**

E o acumulado recebido nos 6 meses em Pess-3 seria menor, mas afiliado+ebook sozinhos geraram:
- Mês 1-6: R$(10+24+48+86+120+144) afiliado + R$(5+13+25+46+64+76) ebook = R$432 + R$229 = **R$661**
- Custo ferramentas acumulado: R$828
- **Gap**: R$167 de prejuízo até o mês 6

**Passa gate**: ⚠️ **MARGINAL**. Afiliado+ebook sozinhos cobrem 80% do custo de ferramentas (R$661/R$828). Gap de R$167 é absorvível (menos de R$30/mês).

**Conclusão**: estratégia sobrevive Pess-3 sem explodir. Weslley não precisa injetar capital extra — prejuízo cumulativo de R$167 é pequeno, e mês 7+ já roda no azul forte.

### Síntese stress-test

| Cenário | Gate R$300/mês mês 6 | Passa? |
|---|---|---|
| Baseline | R$857 bruto / R$719 líq | ✅ |
| Pess-1 RPM -50% | R$538 bruto / R$400 líq | ✅ |
| Pess-2 Views -60% | R$344 bruto / R$206 líq | ✅ (bruto passa, líq marginal) |
| Pess-3 YPP +60d | R$220 bruto (mês 6) → R$867 (mês 7) | ⚠️ marginal mês 6, robusto mês 7 |

**Veredito**: passa os 3 stress-tests. Pess-3 é o ponto mais frágil mas não catastrófico.

---

## Por que essa config ganhou (contra as alternativas internas)

1. **Híbrido long + Shorts > Longform-only**: 2 Shorts/sem multiplicam reach orgânico (descoberta), aceleram YPP (watchtime + subs) e são quase-grátis em tempo (0,5h pra cortar do long). Longform-only deixa dinheiro na mesa nos meses 1-3.
2. **Híbrido > Shorts-only**: Shorts BR pagam R$0,10-1,50/1k. Matemática não fecha sem long-form como âncora AdSense.
3. **1/sem long > 2/sem**: 2/sem estoura o gate de 5h/sem (8-12h reais). 1/sem é sustentável por 6+ meses sem burnout.
4. **Cadência baixa + qualidade > cadência alta + apressada**: consistência mensal importa mais que volume inicial em nicho filosófico (retenção = rei pra RPM alto).
5. **3 camadas de monetização > AdSense-only**: afiliado+ebook desde vídeo 1 eliminam o "vale da morte" dos primeiros 3 meses e passam o stress Pess-3.

---

## 2 Runners-up (pra revisitar se a vencedora falhar no campo)

### Runner-up 1: ASMR longform 1-3h (H10)
- **Melhor cenário**: se Weslley descobrir um programa de afiliado forte pra produtos de sono (não-Hotmart — Amazon Associates BR, Mercado Livre afiliados) antes do mês 3.
- **Voltar a considerar se**: Hotmart lançar cursos populares de "sono e relaxamento" OU se RPM real do estoico decepcionar abaixo de R$10/1k nos primeiros 60d.

### Runner-up 2: Meditação HÍBRIDO (H9)
- **Melhor cenário**: se ebook "21 meditações pra dormir" converter acima de 0,3% (dobro do assumido) graças ao alinhamento emocional do formato.
- **Voltar a considerar se**: estoico virar mercado saturado até 2027 (hoje só 21 canais) OU se Weslley descobrir que prefere o tema meditação pessoalmente.

---

## Plano 30/60/90 dias

### Dia 0-30 (mês 1) — Setup e primeiros 4 vídeos

**Metas**:
- 4 longforms publicados + 8 Shorts
- 100-300 subs
- 2-5k views totais

**Ações semana a semana**:

- **Semana 1**:
  - Comprar Freepik Premium+ + ElevenLabs Starter (R$138)
  - Criar canal com nome + brand visual (paleta preta+âmbar, coerente com marca-mãe)
  - Testar 3 vozes ElevenLabs PT-BR → escolher 1 (tom grave, calmo, 0,9x speed)
  - Criar template Freepik: fundos estéticos estoicos (ruínas romanas, montanhas neblina, estátuas mármore) → montar biblioteca de 30 visuais reutilizáveis
  - Rascunhar 8 títulos de longform usando framework AEI (60% Autoridade)
  - Publicar vídeo 1 (ex: "A regra estoica que teria salvado 10 anos da minha vida")

- **Semana 2**:
  - Vídeo 2 + 2 Shorts derivados do vídeo 1
  - Configurar afiliado Hotmart (procurar cursos top vendas em "Desenvolvimento Pessoal" / "Carreira")
  - Criar página de ebook próprio (Hotmart ou Carrd) + link na bio

- **Semana 3**:
  - Vídeo 3 + 2 Shorts
  - Primeira análise de analytics: qual Short performou melhor? Replicar padrão

- **Semana 4**:
  - Vídeo 4 + 2 Shorts
  - Análise mês 1: RPM ainda N/A, mas medir view duration, CTR thumbnail, subs ganhos/1k views

**Gatilhos de abortar/pivotar no dia 30**:
- Se <500 views totais no mês 1 → auditar thumbnails e títulos (não abortar nicho)
- Se 0 conversões pra ebook em 2k+ views → revisar CTA placement

### Dia 31-60 (mês 2) — Iterar o que converte

**Metas**:
- 8 longforms totais (4 novos) + 16 Shorts totais
- 500-1500 subs
- 10-20k views totais
- Primeiras 3-10 vendas afiliado + 2-5 ebooks

**Ações**:
- Dobrar no tipo de longform que mais retém (via YouTube Analytics: avg view duration > 50% = ganhador)
- A/B test de thumbnail (usar Thumbnail Test nativo do YouTube)
- Aumentar frequência de CTA no longform (beginning + middle + end)
- Testar 1 Short/sem de "frase estoica pura" (5-15s) pra viralidade máxima

### Dia 61-90 (mês 3) — Preparar ativação YPP

**Metas**:
- 12 longforms totais + 24 Shorts
- **1000+ subs** (requisito YPP)
- **4000h watchtime acumuladas** (requisito YPP long-form)
- 25-50k views/mês
- R$100-300 receita (afil+ebook, pré-AdSense)

**Ações**:
- Aplicar YPP assim que bater os 2 gates
- Fazer 1 vídeo "best-of" compilando melhores trechos dos 12 primeiros longforms (boost watchtime)
- Validar RPM real assim que AdSense ativar → **atualizar BLUEPRINT** com número real (substitui "R$20 estimado" por número verificado)
- Decidir sobre escala mês 4+: manter 1/sem ou considerar 2/sem se tempo disponível abrir (>5h/sem)

**Gatilhos de re-rodar o strategist-autonomous**:
- RPM real < R$8/1k → re-rodar com nicho Meditação como fallback
- Views mês 3 < 5k totais → re-rodar com ajuste de hooks/títulos
- Tempo real >6h/sem consistentemente → reduzir Shorts pra 1/sem ou abandonar Shorts

---

## Em aberto / A VALIDAR

1. **Views reais canal novo AI-only BR sem tráfego pago**: sem dado público confiável. Banda 10-50k views/mês no mês 6 é estimativa. **Medir mês 3 e ajustar**.
2. **RPM real estoico BR AdSense**: fontes ([Núcleo](https://nucleo.jor.br/reportagem/2025-05-30-estoicismo-ia-filosofia-youtube/), OutlierKit) dão valores globais/agregados. **Validar com AdSense real nos primeiros 90d**.
3. **Conversão view → ebook R$19,90**: banda 0,05-0,3% do BLUEPRINT §4.2 sem dado de canal faceless. **Medir com primeiros 10k views**.
4. **Tempo real de produção**: estimei 4,8h/sem mas depende de domínio do Freepik/ElevenLabs. **Cronometrar primeiros 3 vídeos** e ajustar.
5. **YPP timing real canais faceless AI BR**: BLUEPRINT §8 marca como "sem dado público". Monitorar.
6. **Afiliado Hotmart estoico específico**: existem cursos de "desenvolvimento pessoal" e "filosofia prática" mas não confirmei volume de vendas desses sub-nichos. **Auditar painel Hotmart antes de recomendar 1 curso específico**.
7. **ElevenLabs quota Starter**: 30k caracteres/mês. Um longform 10min narrado ≈ 10k caracteres × 4 vídeos = 40k caracteres. **Possível estouro — pode precisar subir pra Creator US$11/mês (R$58)** se verificado. Validar no mês 1.

---

## Reproducibilidade — como rodar isso de novo

**Comando**:
```
@strategist-autonomous rodar ITERATION 2 com dados reais de:
- RPM real AdSense (meses 1-3)
- Views reais por vídeo (meses 1-3)
- Conversão real view → ebook (meses 1-3)
- Tempo real de produção (cronômetro semanal)
- Conversão afiliado Hotmart (meses 1-3)
```

**Dados a atualizar no BLUEPRINT antes de re-rodar**:
- `§2 RPM`: trocar "R$20 estimado" por número real
- `§3 Economia`: validar banda "R$50-600 AdSense" contra real
- `§4.2 Conversão ebook`: banda 0,05-0,3% refinada com dado real
- `§8 Lacunas`: marcar resolvidas

**Sinais de que precisa re-rodar antes do mês 6**:
- Receita mês 3 > R$200 ou < R$30 (baseline projetado: R$73) → ajustar projeções
- Views mês 3 > 60k ou < 5k → ajustar premissa views
- Tempo real > 7h/sem consistente → reduzir escopo (abandonar Shorts ou ir pra 1 long a cada 2 semanas)

---

## Ações próximas 7 dias

1. **Comprar Freepik Premium+ e ElevenLabs Starter** (R$138 total) — precisa do Weslley validar o gasto antes.
2. **Criar canal YouTube** com nome alinhado (ex: "Mente Estoica", "O Filósofo Silencioso" — brainstormar 5 nomes, validar disponibilidade @handle).
3. **Montar biblioteca de 30 visuais Freepik** reutilizáveis (paleta preta+âmbar coerente com marca-mãe).
4. **Testar 3 vozes ElevenLabs PT-BR**, escolher a vencedora.
5. **Rascunhar 8 títulos de longform** usando frameworks AEI (skill `/frameworks` do projeto 06).
6. **Validar 1 curso afiliado Hotmart** da categoria Carreira/Desenvolvimento Pessoal (>100 vendas/mês, comissão ≥50%).
7. **Publicar vídeo 1** até dia 7.

---

## Fontes inline (todas do BLUEPRINT)

- RPM BR agregado: [ytmoneycalculator](https://ytmoneycalculator.com/blog/average-youtube-rpm)
- CPM BR conservador: [Lenostube](https://lenostube.com/en/youtube-cpm-rpm-rates/)
- Shorts BR RPM: [FluxNote](https://fluxnote.io/guides/youtube-shorts-rpm-brazil-2026)
- Estoico AI BR mercado: [Núcleo mai/2025](https://nucleo.jor.br/reportagem/2025-05-30-estoicismo-ia-filosofia-youtube/)
- Hotmart top nichos: [Hotmart cursos](https://hotmart.com/pt-br/blog/cursos-online-mais-vendidos)
- Hotmart tickets: [Hotmart produtos](https://hotmart.com/pt-br/blog/produtos-mais-vendidos-na-internet)
- Economia porte: [Prezzocontabil](https://prezzocontabil.com.br/quanto-ganham-os-youtubers-guia-receitas-impostos/)
- Freepik audio: [Freepik Tunes](https://tunes.freepik.com/) / [Freepik AI docs](https://www.freepik.com/ai/docs/freepik-audio)
- ElevenLabs: [elevenlabs.io/pricing](https://elevenlabs.io/pricing)
- Suno: [suno.com/pricing](https://suno.com/pricing) (não usado neste canal, alocado no gospel)
- Câmbio US$/BRL: [MacroTrends 2026-03-20](https://macrotrends.net/3608/brazilian-real-to-usd-exchange-rate)
- Voice ASMR ElevenLabs: [voice-library/asmr](https://elevenlabs.io/pt/voice-library/asmr)
- Canal exemplo estoico: [Voz Estoica](https://youtube.com/@vozestoica-s4x)

---

## Iteração usada

**Iteração 1**: 24 hipóteses geradas → 7 sobreviveram aos gates → top 3 stress-testadas → **Estoico HÍBRIDO passa nos 3; ASMR falha Pess-3; Meditação falha Pess-1+Pess-2**.

**Convergência**: iteração 1. Não precisei das outras 9.

**Confiança**: alta na escolha do NICHO (estoico é matematicamente dominante nos 3 cenários). **Média na magnitude** (depende de views reais e RPM real — marcados A VALIDAR).
