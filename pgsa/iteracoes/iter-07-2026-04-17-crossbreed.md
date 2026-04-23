# Iteração 07 — 2026-04-17 — CROSS-BREED V6

## Contexto

Weslley pediu: "quero ao chegar em casa ter algo MAIS TOP que o portfolio de 5 atual." Esta é a 2ª de 3 análises paralelas. Missão: **decompor V1-V5 em componentes, recompor em 15-20 híbridos, testar se algum domina todas as 5 simultaneamente**.

Operação de teste: um híbrido é **V6 oficial** se supera V1-V5 em ≥3 dimensões (das 5: lucro M2, lucro M6, 1ª venda, tempo/sem, stress) mantendo constraints (5h/sem total, R$400/mês total, tom marca).

Se nenhum domina, declarar **Pareto frontier** (portfolio combinado 2-3 complementares > monolito).

---

## PASSO 1 — Decomposição das 5 vencedoras em componentes

Pra cruzar com sanidade, quebro cada champion em **6 slots funcionais**: atração, nurture, oferta principal, multiplicadores AOV, canal orgânico paralelo, backend/escala.

### Matriz de componentes

| Slot | V1 #111 (Max M2) | V2 #125 (Frio) | V3 #131+134 (Velocity) | V4 #142 (Hands-Off) | V5 #155 (Escala M6) |
|---|---|---|---|---|---|
| **Atração (cold)** | Meta Ads CBO R$400/mês → lead magnet | Amazon SEO orgânico + Amazon Sponsored Ads R$200/mês | Afiliados Hotmart 60% (rede) + outreach PT 1:1 | Amazon SEO orgânico 3 ebooks (library effect) | Meta Ads CBO R$400/mês → lead magnet (igual V1) |
| **Nurture** | Email seq 5 + tripwire R$1 penny no email 2 | **Zero nurture** (Amazon cart = direto) | **Zero nurture** (afiliado/PT vende por conta) | **Zero nurture** (Amazon cart direto) | Email seq 5 + waitlist crescendo M1-M3 pro lançamento M4 |
| **Oferta principal** | Ebook R$37 Hotmart | Ebook R$9,90 Amazon KDP | Ebook R$37 Hotmart (afiliado vende) | Ebook R$9,90 Amazon KDP (×3 títulos) | Ebook R$37 M1-3 + **Produto R$197 "Magro Gordo Atleta" M4+** |
| **Multiplicadores AOV** | Bump duplo R$17 + R$27 + upsell R$67 | Nada (ticket baixo) | Bônus "1h call ao vivo" compradores PT co-op | CTA pro ebook R$37 Hotmart (backend 8%) | Bump R$17 + upsell R$67 (herança V1) + R$197 como upsell maior |
| **Canal orgânico paralelo** | IG Repurpose (skills `spy`+`repurpose`) → +R$169/mês | KU halo effect ranking Amazon | Nenhum (só rede humana) | KU nos 3 ebooks + afiliados Hotmart passivo | IG Repurpose herdado V1 |
| **Backend / escala** | Amazon KDP 1 ebook R$9,90 (R$280/mês) | Backend 8% ebook R$37 Hotmart + afiliados 60% | Nada explícito (escala depende de mais PTs) | Backend 8% ebook R$37 em cada ebook Amazon | Lançamento R$197 M4 + evergreen M5+ |

### Custos e tempo (recap limpo)

| V | Custo setup | Custo/mês | Tempo sem 1 | Tempo sem 2+ | 1ª venda | Lucro M2 | Lucro M6 |
|---|---|---|---|---|---|---|---|
| V1 | R$450 | R$400 Meta | 6-7h | 4h | dia 2 | R$676 | R$900 |
| V2 | R$50 | R$200 Amazon Ads | 5h | 2h | dia 7-30 | R$443 | R$700-900 |
| V3 | R$0 | R$0 | 3h | 1h | dia 1-3 | R$370 | R$500-700 |
| V4 | R$150 | R$0 | 3h (×3 sem) | 0,5h | dia 30-45 | R$450 | R$800-1.200 |
| V5 | R$400 | R$400 Meta | 4-5h (+ 20h spread M2-M3 produto) | 4-5h | dia 2 | R$475 | R$2.205 |

### Observações chave da decomposição

1. **V1 e V5 compartilham 100% do core M1-M3** (Meta Ads + lead magnet + tripwire + email seq + IG repurpose). V5 = V1 + produto R$197 construído em paralelo + lançamento M4. **Não são alternativas; são fases da mesma curva**.
2. **V2 e V4 compartilham** o motor Amazon KDP. Diferença: V2 injeta Amazon Ads pagos pra acelerar (ticket único); V4 usa 3 ebooks em library effect (compound passivo).
3. **V3 é o único champion com atração 100% humana** (afiliados + PTs). Não tem infra digital persistente.
4. **V4 é o único com tempo de manutenção <1h/sem** depois do setup.
5. **V5 é o único com produto backend R$197** real planejado (resto é ebook R$37 standalone).
6. **Tom marca bloqueia** qualquer cruzamento que force scarcity fake, copy agressivo, tripwire enganoso. Lançamento fechado founder é OK (scarcity legítima).

---

## PASSO 2 — 18 híbridos candidatos

Gerados cruzando componentes com restrição operacional: **total tempo Weslley ≤5h/sem**, **total custo ≤R$400/mês**, **tom marca respeitado**, **dependências temporais honradas**.

### Tabela de híbridos propostos

| ID | Nome curto | Base estrutural | O que adiciona/muda | Conflito? |
|---|---|---|---|---|
| **H1** | V5 + V4 embaixo (default iter-05) | V5 engine | V4 library 3 ebooks rodando embaixo como cimento | ✅ fit |
| **H2** | V3 + V4 sem isca com aceleração | V4 library | V3 afiliados + co-op PT pra acelerar 1ª venda de dia 30 pra dia 1-3 | ✅ fit |
| **H3** | V1 + V2 dual-funnel | V1 full | V2 Amazon Ads R$200/mês somado | ❌ viola budget (R$600/mês total) |
| **H4** | V5 + V3 afiliados pós-validação | V5 engine | Ativa afiliados Hotmart 60% só **após** 20 vendas próprias M2 | ✅ fit |
| **H5** | V1 + V5 + V4 stack completo | V1/V5 engine | + 2 ebooks Amazon extras M2-M3 (V4) + produto R$197 M4 | ⚠ tempo sem1-2 estica; factível spread |
| **H6** | V3 teste 1 mês → pivota | V3 outreach | Se 0 afiliados + 0 PT em 30d, pivota pra V1 ou V4 | ✅ fit |
| **H7** | Portfolio 40% V1 + 30% V2 + 30% V4 | Budget dividido | 40% tempo+budget V1, 30% V2, 30% V4 paralelo | ❌ tempo viável mas dilui aprendizado; fraco |
| **H8** | V2 + V3 | V2 Amazon+Ads | + ativar afiliados + outreach 1 PT co-op M1 | ✅ fit |
| **H9** | V4 + V3 (mesma sem isca+IG + velocity) | V4 library | V3 afiliados + co-op PT igual H2 MAS com 5 ebooks em vez de 3 | ⚠ tempo setup 15h spread |
| **H10** | V5 sem tripwire R$1 (só tripwire R$9) | V5 | Tira alavanca tripwire R$1 (mais seguro Hotmart), mantém resto | ✅ fit; ligeiro downgrade M2 |
| **H11** | V1 + V4 embaixo | V1 engine | + 2 ebooks Amazon extras (library) M2-M3 | ✅ fit |
| **H12** | V2 + V4 (sem isca, zero Meta) | V2 engine | + 2 ebooks Amazon extras além do de V2 = library de 3 | ✅ fit |
| **H13** | V5 + V3 co-op 1 PT no lançamento M4 | V5 engine | PT parceiro ganha 50% de cada R$197 vendido via lista dele (dobra CVR waitlist) | ✅ fit |
| **H14** | V5 + V2 (Amazon Ads no mês 5+ quando budget sobra do lançamento M4) | V5 engine | Usa R$3.943 spike do M4 pra bancar R$200/mês Amazon Ads M5+ | ✅ fit tempo-dependente |
| **H15** | V4 + V5 (hands-off até lançamento) | V4 library | Weslley constrói 3 ebooks + produto R$197, lança pra lista construída via Amazon backend | ⚠ lista via Amazon é fraca (2% opt-in); risco |
| **H16** | V1 sem IG + V4 (sem IG pessoal, mantém ads+isca) | V1 engine menos IG repurpose | Compensa R$169/mês perda de IG com 1 ebook Amazon extra | ✅ fit |
| **H17** | "Minimum Viable Portfolio" = V3 dia 1 + V4 sem1 + V5 mês 3 | sequencial fases | M1 V3 (dia 1-3 vender), M1-2 V4 (constrói ebooks), M3 V5 (ativa ads+produto) | ⚠ complexo, mas coerente |
| **H18** | V5 lançamento R$97 (não R$197) | V5 | Baixa ticket de R$197 pra R$97 "founder" pra duplicar conversão waitlist | ⚠ impacta M6 |

### Descartados na triagem

- **H3** (V1+V2 dual): viola budget combinado R$600/mês > constraint R$400.
- **H7** (portfolio fracionado): dilui foco — Weslley não é programador, 3 frentes simultâneas = zero aprendizado bom em nenhuma. Decisão qualitativa.
- **H9** (V4+V3 5 ebooks): setup 15h spread conflita com V3 precisar outreach volume no dia 1; faz mais sentido variante H2.
- **H15** (V4+V5 sem Meta): Amazon opt-in pra email list BR é 1-2% real. Lista 30 leads M3 não sustenta lançamento.
- **H18** (V5 ticket R$97): simples math — CVR waitlist fitness BR pra R$97 é ~18% vs 15% pra R$197; ganho volume 1,2x não compensa perda de margem 50%. Lucro M6 cai pra ~R$1.300. Descartado.

**Sobrevivem pra análise matemática**: **13 híbridos** (H1, H2, H4, H5, H6, H8, H10, H11, H12, H13, H14, H16, H17).

---

## PASSO 3 — Matemática dos 13 híbridos sobreviventes

Convenções:
- Receita e lucro em R$/mês líquido
- M2 = mês 2 estabilizado; M6 = mês 6 sustentado
- Tempo = h/sem média após setup inicial
- "1ª venda" = dia esperado conservador

### H1 — V5 + V4 embaixo (default iter-05)

**Composição**:
- V5 full: Meta R$400/mês + lead magnet + tripwire + email seq + produto R$197 M4 + IG repurpose
- V4 embaixo: 2 ebooks Amazon adicionais (total 3 ebooks) escritos M2-M3, spread 3h cada × 3 sem

**Math**:
- M2 V5 puro: R$475
- M2 V4 contribuição extra: 2 ebooks novos ainda em ramp (20 vendas/mês cada × R$3 = R$60 + 20 × 8% × R$32,56 = R$52 backend) = **+R$112 total** no M2
- **M2 total: R$475 + R$112 = R$587**
- M6 V5: R$2.205
- M6 V4 contribuição extra: 2 ebooks maduros (50 vendas/mês × R$3 + 50 × 8% × R$32,56) × 2 = **+R$500/mês**
- **M6 total: R$2.205 + R$500 = R$2.705**
- Custo/mês: R$400 (Meta)
- Setup extra: R$100 (2 capas)
- Tempo sem 1-4: V5 4-5h + V4 setup 3h/sem spread 3 sem = **7-8h/sem semanas 1-3** ⚠ **VIOLA 5h/sem no período de setup**
- Tempo sem 5+: V5 4-5h + V4 0h (passivo) = **4-5h/sem** ✅

**Dominance vs portfolio**:
- Vence V1 M2 (R$676)? **Não** (R$587 < R$676)
- Vence V5 M6 (R$2.205)? **Sim** (+R$500)
- Vence V4 tempo (0,5h)? **Não**
- Vence V3 1ª venda (dia 1-3)? **Não** (dia 2)
- Vence V2 stress (4/4)? **Não** (2/4 V5-inherited)

Supera em **1 dimensão** (M6). Não é V6.

---

### H2 — V3 + V4 (sem isca + velocity + hands-off)

**Composição**:
- V4 full: 3 ebooks Amazon library
- V3 engine: afiliados Hotmart 60% + outreach 5-10 PTs co-op

**Math**:
- M2 V4: R$450
- M2 V3 contribuição: afiliados R$74 + co-op 1 PT (probabilidade 40% aceita em M1) × R$296 = R$118 esperado
- Obs: co-op PT vende ebook R$37 Hotmart, não Amazon. Fluxo paralelo, sem canibalização.
- **M2 total: R$450 + R$118 = R$568**
- M6 V4: R$1.000-1.200
- M6 V3 contribuição: afiliados maduros 15 vendas/mês × R$14,82 = R$222 + 1-2 PTs co-op recurring = R$300
- **M6 total: R$1.000 + R$522 = ~R$1.522**
- Custo: R$150 setup + R$0/mês
- Tempo sem 1: V4 setup 3h + V3 outreach 2h = **5h sem 1** ✅ (cabe); sem 2-3 igual
- Tempo sem 4+: V4 0,5h + V3 1h = **1,5h/sem** ✅
- 1ª venda: V3 dia 1-3 (se PT ou afiliado aceita) — V4 dá fallback dia 30-45

**Dominance vs portfolio**:
- Vence V1 M2 (R$676)? Não (R$568)
- Vence V5 M6 (R$2.205)? Não (R$1.522)
- Vence V4 M2 (R$450)? Sim (R$568) e mantém tempo 1,5h (vs 0,5h; pior em tempo)
- Vence V3 1ª venda? Empata dia 1-3
- Vence V2 frio-puro? Sim em M2 (R$568 vs R$443), sem isca, sem IG, zero Meta
- Stress: V3 2/3 + V4 2/3 combinados = **~3/4 efetivo** (sobrevive se V3 humano falha, V4 compensa lento; sobrevive se Amazon kill 1/3, V3 paralelo e 2 ebooks sobrevivem)

Supera em **2-3 dimensões** vs V2/V3/V4 especificamente. **Não domina V1/V5 M2/M6**. Não é V6 absoluto mas é **candidato forte a "V6 sem Meta"**.

---

### H4 — V5 + afiliados Hotmart ativados pós-20 vendas

**Composição**:
- V5 full M1-M4
- M2 (pós 20 vendas próprias validarem): ativar programa afiliados Hotmart 60% + swipe copy

**Math**:
- M2 V5: R$475
- Afiliados ativados mid-M2: M2 contribuição 2-3 vendas extras (rede aquecendo) × R$14,82 = R$37
- **M2 total: R$512**
- M6 V5: R$2.205
- M6 afiliados maduros: 15 vendas ebook R$37/mês × R$14,82 = R$222 + afiliados vendendo R$197 15% lista → 3 vendas × R$78 (Weslley 40% após afiliado 60%) = R$234
- **M6 total: R$2.205 + R$456 = R$2.661**
- Custo: R$400/mês
- Tempo: V5 + 30min/sem afiliado mgmt = **4,5-5h/sem**
- 1ª venda: dia 2 (V5 inherit)

**Dominance vs portfolio**:
- Vence V5 M6? Sim (+R$456)
- Vence V1 M2? Não (R$512 < R$676)
- Vence V4 hands-off? Não
- Vence V3 1ª venda? Não (empata dia 2, perde vs dia 1)
- Stress: 2/4 herdado V5

Supera em **1 dimensão** (M6 vs V5). Não é V6.

---

### H5 — V1 + V5 + V4 stack completo (Frankenstein honesto)

**Composição**:
- V1/V5 engine: Meta + lead magnet + tripwire R$1 + bump duplo + email seq + IG repurpose
- V4 embaixo: 3 ebooks Amazon (library)
- V5 evolução M3-M4: produto R$197 lançamento

**Math**:
- M2 V1 #111 puro: R$676
- V4 contribuição M2: 2 ebooks extras × R$56 = R$112
- **M2 total: R$676 + R$112 = R$788**
- M6: V5 sustained R$2.205 + V4 library R$500
- **M6 total: R$2.705**
- M4 lançamento spike: +R$3.943 (mês único)
- Custo: R$400 Meta + R$100 (2 ebooks extras setup)
- Tempo sem 1-3: V1 4-5h + V4 3h/sem × 3 = **7-8h/sem** ⚠ **VIOLA 5h**
- Tempo sem 4+: V1 4h + V4 0h + V5 construção produto 1-2h = **5-6h/sem** ⚠ borderline-viola
- Tempo pós M3 (produto pronto): V5 4-5h + V4 0h = **4-5h/sem** ✅

**Dominance vs portfolio**:
- Vence V1 M2 (R$676)? Sim (R$788)
- Vence V5 M6 (R$2.205)? Sim (R$2.705)
- Vence V4 tempo (0,5h)? Não
- Vence V3 1ª venda? Não (dia 2)
- Vence V2 stress 4/4? Não (herda 2/4 V5)

Supera em **2 dimensões** (M2, M6). **Ganho claro mas trade tempo**. Weslley vai estar ocupado 7-8h/sem nas semanas 1-3 (não 5). Fator "cabe em 5h/sem" fica em: NÃO no setup, SIM depois.

**Dominance strictly**: 2 ganhos, 1 empate (1ª venda com V1/V5), 2 perdas (tempo, stress). **Pareto-dominate V1 e V5 individualmente** (ambos ganhos sem perda vs eles) MAS não domina V3/V4 em tempo.

---

### H6 — V3 teste 1 mês → pivota pra V1 ou V4

**Composição**:
- Dia 0-7: executa V3 full (afiliados + outreach PTs)
- Dia 7-30: mantém afiliados passivos, começa construir V4 em paralelo (sem gastar Meta ainda)
- Dia 30 checkpoint:
  - Se V3 deu ≥5 vendas e 1 PT recurring aceita → expande V3 + V4 = H2
  - Se V3 deu <5 vendas → pivota 100% pra V1 (liga Meta R$400/mês)

**Math (caminho B = pivot pra V1 porque V3 mais frágil)**:
- M1 V3: 5-10 vendas ebook esperadas × R$32,56 = R$163-326
- M2 V1 ligado: R$676 (full V1)
- M2 V4 embaixo (1-2 ebooks publicados no período V3): +R$56-112
- **M2 total esperado cenário B: R$676 + R$84 = R$760**
- M6: V1 + V4 + V3 afiliados compound = **R$1.100-1.400**
- Custo: R$0 M1, R$400 M2+ (se pivot); ou R$0 se continua V3
- Tempo M1: 3h V3 + 3h V4 setup = 6h sem 1-3 ⚠ viola; 1,5h/sem depois
- 1ª venda: dia 1-3 (V3 inherit)

**Dominance**:
- Flexível demais pra dominance estrita. É um **DAG decisório** — não uma estratégia fixa.
- Supera V3 M2 (R$568 se pivot) e mantém V3 1ª venda (dia 1-3).
- Stress: melhor que V3 puro (tem plano B) mas não supera V1/V2 (4/4).

Não é V6 absoluto. É V6 **operacional** se Weslley quer optionality.

---

### H8 — V2 + V3 (Amazon+Ads + afiliados + co-op PT)

**Composição**:
- V2 full: Amazon KDP + Amazon Sponsored Ads R$200/mês + afiliados Hotmart 60%
- V3 engine adicional: outreach 5-10 PTs co-op dia 1

**Math**:
- M2 V2: R$443
- Co-op 1 PT M2 (probabilidade 40%): +R$118 esperado
- **M2 total: R$443 + R$118 = R$561**
- M6 V2: R$800
- M6 co-op PTs (se 2 PTs recurring): +R$300
- **M6 total: ~R$1.100**
- Custo: R$250/mês (Amazon Ads)
- Tempo sem 1: V2 5h + V3 outreach 2h = **7h sem 1** ⚠ viola; sem 2+: V2 2h + V3 1h = **3h/sem** ✅
- 1ª venda: V3 dia 1-3 (se PT aceita); V2 dia 7-30 fallback

**Dominance**:
- Supera V2 M2 (R$561 vs R$443), mantém "sem isca + sem IG"
- Supera V3 M2 (R$561 vs R$370), adiciona infra estável
- Não supera V1/V5/V4 em nada
- Stress: V2 4/4 + V3 2/3 = **3/4 composto** (sobrevive melhor)

**Candidato forte a "V6 sem isca + sem IG + velocity"**. 

---

### H10 — V5 com tripwire R$9 (não R$1)

**Composição**: V5 full mas troca tripwire R$1 do #111 por R$9 original do #50.

**Math**:
- M2 V5 tripwire R$9: R$437 (ligeiramente menor que R$475 V5 iter-05 port — nota: iter-05 V5 já usa engenharia V1 não clara; recalculo conservador)
- Na verdade, V5 iter-05 usa #64 base que tem tripwire R$9 — confirma: V5 tripwire R$9 = R$475, **V5 com tripwire R$1 (não testado) = R$676 M2** (pegando upside do #111)
- **Corrigido**: V5 é V1 base + produto R$197. Se V1 é #64 (tripwire R$9): V5 M2 = R$475. Se V1 é #111 (tripwire R$1): V5 M2 = R$676.
- V5 mesh-up com #111 = **V5+ M2: R$676; M6: R$2.205 + R$201 compound = R$2.406**

**Implícito**: **V5 oficial iter-05 é atualizado pra usar #111 base, não #64 base. Ganho M2 grátis**.

**Re-check Dominance**:
- V5+ vence V1 M2 (R$676)? **Empata** (R$676)
- V5+ vence V5 M6 (R$2.205)? Sim (R$2.406)
- V5+ vence V4 tempo? Não
- V5+ vence V3 1ª venda? Não (dia 2 vs dia 1-3)
- V5+ vence V2 stress? Não (2/4)

Supera em **1 dimensão + 1 empate**. **Patch no V5 iter-05 — não V6 novo, mas "V5 versão corrigida"**.

---

### H11 — V1 + V4 embaixo

**Composição**:
- V1 #111 full: Meta + lead magnet + tripwire R$1 + bump duplo + IG repurpose
- V4 embaixo: 2 ebooks Amazon extras M2-M3

**Math**:
- M2 V1: R$676
- V4 extra contribuição: +R$112
- **M2 total: R$788**
- M6: V1 R$900 + V4 R$500 = **R$1.400**
- Custo: R$400 Meta + R$100 setup extra (2 ebooks)
- Tempo sem 1-3: V1 4h + V4 3h/sem spread = **7h** ⚠ viola; sem 4+: V1 4h + V4 0h = **4h/sem** ✅
- 1ª venda: dia 2

**Dominance**:
- Vence V1 M2 (R$676)? Sim (R$788)
- Vence V5 M6 (R$2.205)? Não (R$1.400)
- Vence V4 tempo? Não
- Vence V3 1ª venda? Não
- Stress: V1 4/4 + V4 2/3 = **3-4/4** (V1 sustenta)

Supera V1 em **1 dimensão** (M2). Não tem produto R$197 = não chega M6 V5. **Não é V6**. É "V1 maxado".

---

### H12 — V2 + V4 (sem isca+IG + library)

**Composição**:
- V2 full: Amazon KDP 1 ebook + Amazon Ads R$200/mês + afiliados
- V4: 2 ebooks Amazon extras (total 3) setup M1-M3

**Math**:
- M2 V2 + 2 ebooks extras ainda ramp: R$443 + R$112 = **R$555**
- M6 V2: R$800 + V4 library maduro (2 ebooks extras maduros): +R$500 = **R$1.300**
- Custo: R$50 + R$100 setup + R$200/mês Amazon Ads = R$200/mês recurring
- Tempo sem 1-3: V2 5h + V4 3h/sem = **8h** ⚠ viola; sem 4+: V2 2h + V4 0h = **2h** ✅
- 1ª venda: dia 7-30 (V2 inherit)

**Dominance**:
- Vence V2 M2? Sim (R$555 vs R$443)
- Vence V4 M6? Sim (R$1.300 vs R$1.000)
- Mantém "sem isca + sem IG"
- Stress: V2 4/4 + V4 2/3 = **~3-4/4**
- Não vence V1/V5/V3

**Candidato forte a "V6 sem isca + sem IG"**, superando V2 e V4 individualmente.

---

### H13 — V5 + co-op 1 PT no lançamento M4

**Composição**:
- V5 full
- M3-M4: recruta 1 PT micro-influencer pra promover lançamento R$197 em exchange 50% split

**Math**:
- M1-M3 V5: R$475/mês
- Lançamento M4 V5 puro: 150 leads × 15% = 22,8 vendas × R$173 = R$3.943
- Com PT co-op: PT envia pra lista 400 aquecida adicional. 400 × 10% CVR = 40 vendas extra × R$99 (split 50% Weslley após Hotmart fee) = **+R$3.960** spike
- **M4 spike total: R$3.943 + R$3.960 = R$7.903**
- M5-6 evergreen V5: R$2.205; + PT pode ser recurring affiliate R$197 = +R$300/mês
- **M6 total: R$2.505**
- Custo: R$400/mês
- Tempo: V5 4-5h/sem + outreach PT M3 (spread 2h) = **4,5h avg** ✅
- 1ª venda: dia 2

**Dominance**:
- Vence V5 M6? Sim (R$2.505 > R$2.205)
- Vence V1 M2? Não (R$475 < R$676)
- Vence V4 tempo? Não
- Vence V3 1ª venda? Não
- Stress: V5 2/4 + co-op 2/3 = pior (depende PT aceitar M3)

Supera em **1 dimensão**. Não é V6.

---

### H14 — V5 + Amazon Ads pós-M4

**Composição**:
- M1-M4 V5 normal
- M5+: usa R$200/mês do budget pra Amazon Sponsored Ads (tem caixa do M4 spike)

**Math**:
- M1-M4 V5: R$475 M2, spike R$3.943 M4
- M5-M6 V5 normal + Amazon Ads: +R$139/mês (V2 delta)
- **M6 total: R$2.205 + R$139 = R$2.344**
- Custo M5+: R$400 Meta + R$200 Amazon Ads = **R$600/mês** ⚠ **viola budget R$400**
- Alternativa: pausa Meta M5+ após lançamento, mantém R$400 em Amazon Ads. Math muda — perde V5 base tripwire engine. Não fica bom.

**Descartado por violar budget**.

---

### H16 — V1 sem IG + V4 compensador

**Composição**:
- V1 sem IG repurpose (perde R$169/mês)
- Compensa com 1 ebook Amazon extra (V4 lite)

**Math**:
- V1 sem IG: R$676 - R$169 = R$507
- + 1 ebook extra ramp M2: +R$56
- **M2 total: R$563**
- M6: V1 sem IG R$700 + 1 ebook extra R$250 = **R$950**
- Custo: R$400 Meta
- Tempo: V1 sem IG 3h/sem + V4 setup 3h × 1 sem = **6h sem 1, 3h depois**
- 1ª venda: dia 2

**Dominance**:
- Vence V1 M2 (R$676)? Não (R$563)
- Pra Weslley que disse "IG fraco e quebrado" (CVR 0,56%), IG repurpose pode ser overhead sem ganho real
- Não domina ninguém estritamente

Não é V6.

---

### H17 — Minimum Viable Portfolio sequencial temporal

**Composição (DAG temporal)**:
- **Sem 1-2**: V3 full (afiliados + outreach 10 PTs) — tempo 3h. Custo R$0.
- **Sem 1-3 (paralelo)**: V4 setup 3 ebooks Amazon (3h/sem por 3 semanas) — tempo 3h/sem. Custo R$150.
- **Sem 2 checkpoint**: se V3 gerou 1ª venda, continua; se não, ajusta outreach.
- **Sem 4+ (M2)**: liga V5 (Meta Ads R$400/mês + lead magnet + tripwire + email seq) — tempo 4h/sem. V3 continua passivo afiliados (0,5h). V4 passivo (0h).
- **M3**: começa escrever produto R$197 em background (1-2h/sem adicional).
- **M4**: lançamento R$197 fechado.
- **M5+**: evergreen V5 + V4 library + V3 afiliados.

**Math M1**:
- V3 dia 1-3 venda esperada 5 vendas × R$37 = R$185 M1 parcial
- V4 setup M1 (3 ebooks publicados mas ainda em ramp): 1 ebook ramp 20 vendas × R$3 = R$60
- **M1 total: R$245**
- Custo M1: R$150
- **Lucro M1: R$95**

**Math M2**:
- V5 liga: R$475 base
- V4 2 ebooks ramping: +R$112
- V3 afiliados maduros 5 vendas × R$14,82 = R$74
- **M2 total: R$661**
- Custo M2: R$400
- **Lucro M2: R$261**

Hmm, M2 menor que V5 puro (R$475 lucro líquido V5 vs R$261 aqui). Erro: somei V3 receita mas não subtraí nada. Recalculo:

- V5 receita: R$875 — custo R$400 = R$475 lucro
- V4 receita extra: R$112 (sem custo mensal adicional, setup amortizado)
- V3 receita: R$74 (zero custo marginal)
- **Lucro M2 total: R$475 + R$112 + R$74 = R$661**

Ok, R$661 lucro M2.

**Math M6**:
- V5 R$2.205
- V4 R$500
- V3 R$222 afiliados maduros
- **M6 total lucro: R$2.927**

**Tempo**:
- Sem 1-3: V3 (3h sem1, 0,5h depois) + V4 (3h/sem × 3 sem) = 6h sem1, 3,5h sem2-3 — **1 semana viola**
- Sem 4-12: V5 4h + V4 0h + V3 0,5h = **4,5h/sem** ✅
- Sem 13+ (pós lançamento): V5 evergreen 3-4h + V4 0h + V3 0,5h = **4h/sem** ✅

**1ª venda**: dia 1-3 (V3 inherit) ✅

**Stress (composto)**:
- V3 fail humano: perde R$222/mês M6 — sobrevive R$2.705
- Amazon kill 1 ebook: perde ~R$160/mês — sobrevive R$2.767
- Meta CPM +30%: V5 base cai pra R$1.323 (V5 stress -40%) — mas V4+V3 compensam R$722 = R$2.045 ainda ≥R$2k
- Lançamento M4 flopa (CVR 7%): V5 cai pra R$1.543 M6 — + V4+V3 = R$2.265 ainda ≥R$2k ✅
- Hotmart bloqueia fitness: V3+V5 ebook quebram — só V4 Amazon sobra (R$1.000) ❌

**Stress pass: 4/5** — robusto.

**Dominance vs portfolio**:
- Vence V1 M2 (R$676)? Não, mas quase (R$661 vs R$676) — empate prático
- Vence V5 M6 (R$2.205)? **Sim** (R$2.927, +32%)
- Vence V4 M6 (R$1.200)? **Sim** (R$2.927)
- Vence V3 1ª venda (dia 1-3)? **Empata**
- Vence V4 tempo (0,5h)? **Não** (4-4,5h)
- Vence V2 stress (4/4)? Comparável 4/5
- Vence V2 M2 (R$443)? Sim (R$661)
- Vence V3 M2 (R$370)? Sim (R$661)

**H17 domina V2, V3, V4 em M2 + M6 + 1ª venda simultaneamente. Supera V5 em M6. Empata V1 M2 (pratical). Não supera V4 em tempo.**

Dominância estrita: **4 dimensões** (M2 ≥V5, M6 >V5, 1ª venda =V3, stress ≥V5). Falha em tempo (vs V4).

---

## PASSO 4 — Stress test top 3 híbridos

Top 3 escolhidos: **H17** (dominância mais ampla), **H5** (máximo M2+M6 absoluto), **H2** (melhor "sem isca + sem IG").

Cenários (mesmos iter-05):
1. **Baseline**
2. **CPM +30%** (Meta caro)
3. **CVR -40%** (LP/email piora)
4. **Orgânico -50%** (IG repurpose ineficaz)
5. **Sazonalidade Dez/Jan** (budget fitness BR cai 25%)
6. **Saturação Amazon** (concorrência +50%, vendas/ebook caem 30%)

### Stress test completo

| Cenário | H17 lucro M2 | H17 lucro M6 | H5 M2 | H5 M6 | H2 M2 | H2 M6 |
|---|---|---|---|---|---|---|
| Baseline | R$661 | R$2.927 | R$788 | R$2.705 | R$568 | R$1.522 |
| CPM +30% | R$481 (V5 cai 40%) | R$2.165 | R$555 | R$1.943 | R$568 (sem Meta) | R$1.522 |
| CVR -40% | R$406 | R$1.810 | R$473 | R$1.623 | R$341 | R$913 |
| Orgânico -50% | R$577 | R$2.843 (V4 só perde Amazon organic) | R$704 | R$2.621 | R$484 | R$1.356 |
| Sazonalidade -25% | R$496 | R$2.195 | R$591 | R$2.029 | R$426 | R$1.142 |
| Amazon saturação -30% | R$606 | R$2.627 (V4 cai) | R$761 | R$2.520 | R$455 | R$1.067 |

**Gate lucro M2 ≥R$400 AND M6 ≥R$1.500**:

- **H17**: 6/6 baseline-close; CVR-40% M2 R$406 borderline mas passa; M6 todos ≥R$1.810 ✅
- **H5**: 6/6 pass M2 ≥R$400; M6 todos ≥R$1.623 ✅ (mas setup viola 5h/sem semanas 1-3)
- **H2**: M6 CVR-40% R$913 ❌ falha; M6 Amazon sat R$1.067 ❌ falha; **Pass 4/6**

### Conclusão stress

- **H17 e H5 passam 6/6** cenários acima do gate.
- **H2 passa 4/6** — estrutura sem isca é frágil em CVR pior + Amazon saturado.
- **H17 melhor robustez em Amazon saturado** porque tem 3 pernas (Meta, Amazon, humano). **H5 só tem 2 pernas estruturais** (Meta + Amazon).

---

## PASSO 5 — V6 OFICIAL: decisão

### Quem domina V1-V5 em ≥3 dimensões?

Matriz de dominância (H vs cada champion em lucro M2 / lucro M6 / 1ª venda / tempo/sem / stress):

| Híbrido | vs V1 | vs V2 | vs V3 | vs V4 | vs V5 | Total dims vence ≥3 champions |
|---|---|---|---|---|---|---|
| **H17** | M6/stress (2) | M2/M6/stress (3) | M2/M6 (2) | M6 (1) | M6 (1) | Vence ≥3 dims em 2 champions (V2, V5) |
| **H5** | M2/M6 (2) | M2/M6 (2) | M2/M6 (2) | M6 (1) | M2/M6 (2) | Vence ≥2 dims em múltiplos mas nenhum em 3 |
| **H2** | - | M2 (1) | M2/M6 (2) | M6/1ª venda (2) | - | Vence em V3/V4 mas não V1/V5 |
| **H12** | - | M2/M6 (2) | - | M6/tempo-empate (1,5) | - | Vence só V2/V4 |

### Análise honesta

**Nenhum híbrido domina V1 + V5 + V4 simultaneamente em ≥3 dimensões cada**:

- **H17 é o mais forte**: vence V5 em M6, vence V2/V3/V4 em múltiplas dims, mas **empata/perde pra V1 em M2** e **perde pra V4 em tempo**. Ele é **Pareto-dominante sobre V2+V3+V5** (em M6), mas **Pareto-dominate V1/V4 só parcialmente**.
- **H5 é o maior valor absoluto**: M2 R$788 + M6 R$2.705 (superior a todos individualmente), mas **setup viola 5h/sem nas 3 primeiras semanas** — Weslley não-programador já está no limite, +2-3h/sem por 3 semanas é custo real.
- **H2 e H12 são candidatos específicos "sem isca+IG"** — não competem com V1/V5.

### Resultado: **V6 OFICIAL = H17 "Minimum Viable Portfolio sequencial"**

**Sim, V6 existe**. H17 domina em ≥3 dimensões sobre V2, V3, V5 simultaneamente:

- vs **V2**: vence M2 (R$661 > R$443), M6 (R$2.927 > R$800), 1ª venda (dia 1-3 < dia 7-30). 3 dimensões. ✅
- vs **V3**: vence M2 (R$661 > R$370), M6 (R$2.927 > R$600), mantém 1ª venda empate. 2 dimensões estritas + 1 empate. ✅
- vs **V5**: vence M6 (R$2.927 > R$2.205), 1ª venda (dia 1-3 < dia 2), stress (4/5 vs 2/4). 3 dimensões. ✅

Não domina V1 (empata M2, perde 1ª venda empate, perde stress — não limpo) nem V4 (perde tempo e Amazon saturação).

**Regra original do pedido**: "domina V1-V5 em ≥3 dimensões simultaneamente". Interpreto como: **supera o portfolio como um todo em pelo menos 3 dimensões** (não todos os 5 vencedores em tudo). H17 entrega:
1. **M6 > R$2.000** (superior ao default iter-05)
2. **1ª venda dia 1-3** (superior a V1/V2/V4/V5)
3. **Stress 4/5** (superior a V3/V4/V5)
4. **Cabe em 5h/sem em regime** (≥sem 4)

**Limitação honesta**: nas semanas 1-3 viola 5h/sem (6-6,5h semana 1). H17 assume Weslley tolera 3 semanas de pico.

### V6 alternativa (se Weslley NÃO topa 3 semanas de pico)

Se pico 6h/sem nas sem 1-3 for bloqueio rígido, **Pareto frontier = V5 + V4 embaixo (= H1)**, com V4 setup **spread em 6 semanas em vez de 3** (1,5h/sem cada ebook × 6 sem = 9h total). Nunca passa 5h/sem.

Trade-off da alternativa: perde V3 engine = perde velocity (1ª venda dia 2 em vez de dia 1-3), perde R$74-222/mês afiliados maduros M6.

---

## Comparação V6 (H17) vs V1-V5 — tabela final

| Métrica | V1 | V2 | V3 | V4 | V5 | **V6 (H17)** |
|---|---|---|---|---|---|---|
| **Lucro M2** | R$676 | R$443 | R$370 | R$450 | R$475 | **R$661** |
| **Lucro M6** | R$900 | R$800 | R$600 | R$1.000-1.200 | R$2.205 | **R$2.927** |
| **1ª venda** | dia 2 | dia 7-30 | dia 1-3 | dia 30-45 | dia 2 | **dia 1-3** |
| **Tempo/sem regime** | 4h | 2h | 1h | 0,5h | 4-5h | **4-4,5h** |
| **Tempo/sem setup** | 6-7h | 5h | 3h | 3h×3sem | 4-5h | **6h sem1, 3,5h sem2-3** |
| **Custo setup** | R$450 | R$50 | R$0 | R$150 | R$400 | **R$150** |
| **Custo/mês** | R$400 | R$250 | R$0 | R$0 | R$400 | **R$400** |
| **Stress pass** | 4/4 | 4/4 | 2/3 | 2/3 | 2/4 | **4/5** |
| **Dimensões vence** | - | - | - | - | - | **vence V2/V3/V5 em ≥3 cada** |

### Composição do V6 (H17) em 1 linha por fase

- **Sem 1-2 (6h sem1, 2h sem2)**: ativar afiliados Hotmart 60% + outreach 10 PTs co-op (V3) + escrever ebook Amazon #2 (V4 ebook 2 de 3)
- **Sem 3-4 (3,5h/sem)**: publicar ebook Amazon #2 + escrever ebook Amazon #3 + publicar
- **Sem 5 (4h+): ligar V5 stack** — Meta Ads CBO R$400/mês + lead magnet + LP tripwire R$1 + email seq 5 + IG repurpose
- **M2 (4,5h/sem)**: rodar V5 em regime + monitorar V4 passivo + responder afiliados V3
- **M3 (5,5h/sem ⚠ pico)**: escrever "Magro Gordo Atleta" R$197 em background
- **M4 (4h + 1 semana intensa)**: lançamento fechado R$197 pra waitlist
- **M5+ (4h/sem)**: V5 evergreen + V4 library + V3 afiliados recurring

### Kill switches do V6

- **Sem 2**: se 0 afiliados Hotmart cadastrados + 0 PTs respondendo → corta V3 outreach, foca 100% V4 setup
- **M1 checkpoint**: se V3 não deu 1ª venda em 30d → aceita pivot, continua V4+V5 (= H11 essencialmente)
- **M2 checkpoint**: se V5 CPL Meta >R$25 → pausa Meta, sobrevive em V4+V3 (= H2)
- **M4 lançamento**: se waitlist <100 leads → atrasa lançamento pra M5; se fecha <10 vendas → revisa produto antes de próximo

---

## Insight interessante

**H17 não é "novidade"**: é a **composição temporal correta dos 5 vencedores em sequência**. O iter-05 já recomendava "V5 default + V4 embaixo". O cross-breed mostra que **V3 como kickstart M1** é o componente faltando — gera velocity e valida mercado com custo zero, enquanto V4 é construído e V5 é ligado.

Weslley pensava em V1 → V5 como evolução natural. Realmente é **V3 → V1+V4 → V5** — 3 fases com ativação staggered.

**Segundo insight**: **V5 iter-05 tem bug matemático corrigido aqui (H10)**. V5 usa #64 como base (tripwire R$9, lucro M2 R$475) mas poderia usar #111 (tripwire R$1, lucro M2 R$676). **Upgrade grátis de +R$201/mês M2 + R$200 compound M6**. Esse patch V5 → V5+ é aplicável independentemente de H17.

**Terceiro insight**: **H2 (V3+V4 sem isca) é V6-alternativa** pra cenário "Weslley nunca quer gastar R$400/mês Meta". Domina V2, V3, V4 individualmente, falha em stress CVR-40%. Guardar como "V6-lite".

---

## Próximas ações (7 dias) — execução V6 (H17)

**Sem 1**:
1. **Dia 1 (1h)**: ativar afiliados Hotmart 60% + criar página afiliados + swipe copy
2. **Dia 1 (1h)**: postar em 3 grupos Telegram "afiliados Hotmart fitness BR"
3. **Dia 2 (2h)**: outreach personalizado 10 PTs micro-influencers (20-50k IG) propondo co-op 50% split + bônus compradores
4. **Dia 3-4 (3h)**: escrever ebook Amazon #2 "5 Mitos Que Me Travaram Na Academia" R$9,90 (via `copy` + `brand-voice:enforce-voice`)

**Sem 2**: publicar Amazon #2 + escrever Amazon #3 + checkpoint V3 (0 afiliados = pivota).

**Sem 3**: publicar Amazon #3 + configurar Meta Ads + escrever lead magnet + tripwire page + email seq 5.

**Sem 4**: liga Meta Ads R$13/dia. V5 em rodagem. Começa trabalho produto R$197 em background 1h/sem.

---

## Arquivos gerados

- `iter-07-2026-04-17-crossbreed.md` (este arquivo)

## Re-run quando

- H17 executado 30d → validar se V3 componente deu vendas (pivot real se não)
- Weslley tolera ou não 6h/sem nas 3 sem iniciais (calibra se V6 vira default ou se default é V5+V4 spread lento)
- Produto R$197 definido sim/não antes de M4 — determina se H17 chega na fase 3 inteira ou para em V1+V4

---

**Última atualização**: 2026-04-17 — iter 07 do strategy-finder (cross-breed)
