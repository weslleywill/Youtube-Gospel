# Pesquisa de Skills GitHub — Gaps do Processo V5/V6

**Data**: 2026-04-17
**Budget gasto**: ~90k tokens (9 WebSearch + 7 WebFetch)
**Scope**: Buscar skills `.claude/skills/*/SKILL.md` pra preencher gaps do portfolio pós-strategy-finder

---

## 1. Metodologia da busca

### Queries WebSearch executadas
1. `github "claude code" skill "SKILL.md" Amazon KDP keyword`
2. `github claude-skill affiliate marketing swipe copy recruitment`
3. `github "claude code" skill launch sequence PLF webinar waitlist 2025`
4. `github claude code skill Pinterest SEO blog content 2025`
5. `github "claude code" skill VSL video sales letter script 2025`
6. `github "claude code" skill conversion rate optimization funnel checkout 2025`
7. `github "claude code" skill ebook Kindle KDP self-publishing metadata`
8. `github claude code skill UGC testimonial capture review request flow`
9. `github "claude code" skill pricing psychology stack slide bundle`
10. `github "claude code" skill KDP Amazon book keyword research A/B cover`
11. `github "claude code" skill founder solopreneur delegation ops time management`
12. `github "claude-skill" UTM attribution analytics dashboard GA4 Meta`
13. `github claude code skill hotmart checkout upsell order bump`
14. `github "claude code" skill lead magnet PDF ebook quiz assessment funnel 2025`
15. `github "claude code" skill social proof testimonial case study capture`
16. `"amazon-kdp-keyword-optimizer" OR "amazon-kdp-category-researcher" SKILL.md github`

### WebFetch pra aprofundar
- Affitor/affiliate-skills (50 skills, 318 stars)
- coreyhaines31/marketingskills (21.8k stars)
- alirezarezvani/claude-skills (44 marketing skills, 11.6k stars)
- ekr0/auto-kdp (CLI, 25 stars)
- smerchek/claude-epub-skill (106 stars)
- rxpelle/kdp-scout (CLI, 21 stars)
- SpillwaveSolutions/running-marketing-campaigns-agent-skill (13 stars)
- robertguss/claude-code-toolkit (74 stars)
- resciencelab/opc-skills (783 stars)
- BrianRWagner/ai-marketing-claude-code-skills (236 stars)
- wondelai/skills (629 stars)

### Princípios aplicados
- Verificar estrelas + última atividade (2025+)
- Flagar se é skill Claude Code (tem SKILL.md) OU CLI standalone
- Anotar dependências (APIs/MCPs pagos ou chave custosa)
- Evitar duplicatas do que Weslley já tem (lista de 40+ skills)

**Caveat**: 2 WebFetches (mcpmarket.com) deram 429/403 — info obtida via snippets do search. Confiança "alta" pras URLs GitHub verificadas diretamente; "média" pras skills cujo repo exato não achei (ex.: `amazon-kdp-keyword-optimizer` aparece só no mcpmarket, ainda não localizei o repo GitHub correspondente).

---

## 2. Tabela de skills encontradas

Legend: **Prioridade** = 🔥 Top5 / ⭐ Watchlist / ➖ Baixa

| Skill / Repo | Gap que preenche | Stars | Deps | Risco | Prio |
|---|---|---|---|---|---|
| **Affitor/affiliate-skills** (50 skills) | #4 Afiliados (recruit + swipe + onboarding) + S1/S3 research + comparison/listicle + bonus-stack + guarantee + conversion-tracker + compliance-checker | 318 | MCP `hidrix-tools` (16 tools: scraping social, SimilarWeb) — recomendado. Sem MCP, ~60% skills ainda funcionam. | Médio (MCP extra) | 🔥 #1 |
| **robertguss/claude-code-toolkit** (ebook-factory + non-fiction-book-factory) | #1 Amazon KDP (pipeline completo de ebook não-fiction) + brainstorm + writing voice | 74 | `uv`, Python. Requer `book-market-research` via lobehub | Baixo | 🔥 #2 |
| **SpillwaveSolutions/running-marketing-campaigns-agent-skill** | #3 Analytics/ROI (UTM + GA4 + QR codes + batch CSV) | 13 | Python 3.8+, `qrcode`/`pillow` opcionais | Baixo | 🔥 #3 |
| **wondelai/skills** (scorecard-marketing + cro-methodology + storybrand-messaging) | #2 Hotmart checkout CRO + #9 pricing psych (via `hundred-million-offers`) + quiz funnel 30-50% | 629 | Nenhuma | Baixo | 🔥 #4 |
| **BrianRWagner/ai-marketing-claude-code-skills** (Testimonial Collector + Case Study Builder + Homepage Audit) | #7 UGC/social proof + depoimento capture + case study formatting | 236 | Nenhuma | Baixo | 🔥 #5 |
| **resciencelab/opc-skills** (requesthunt + seo-geo + domain-hunter + banner-creator) | #10 Founder-mode ops (validação demanda + AI search visibility + banners Amazon) | 783 | twitterapi.io (paga), Reddit JSON (free), Gemini Pro Image (paga pro banner) | Médio (APIs pagas) | ⭐ Watchlist |
| **AgriciDaniel/claude-blog** + **AgriciDaniel/claude-seo** | #6 Pinterest SEO/blog long-tail (blog factory completo, dual-optimized Google+AI) | n/d | DataForSEO (paga), Firecrawl, Banana | Alto (3 APIs pagas) | ⭐ Watchlist |
| **aaron-he-zhu/seo-geo-claude-skills** (20 skills, keyword-research) | #6 SEO/Pinterest keyword BR | n/d | CORE-EEAT/CITE frameworks (zero-API mode disponível) | Baixo | ⭐ Watchlist |
| **mcpmarket: amazon-kdp-keyword-optimizer** | #1 KDP backend keywords (A10/Rufus semantic) | ? | Search volume data (fonte?) | Alto (repo GitHub não confirmado) | ⭐ Watchlist |
| **mcpmarket: amazon-kdp-category-researcher** | #1 KDP category + BSR + competitor metadata | ? | ? | Alto (repo não confirmado) | ⭐ Watchlist |
| **mcpmarket: upsell-downsell-scripting** | #2 Hotmart upsell (OTO Russell Brunson) | ? | ? | Alto (repo não confirmado) | ⭐ Watchlist |
| **mcpmarket: vsl-script-writing-pro** | #8 VSL especializado (Hook-Story-Offer) | ? | ? | Alto (repo não confirmado) | ⭐ Watchlist |
| **mcpmarket: taiyo-style-vsl-script-generator** | #8 VSL (15-chapter estrutura, Before story, objection handling) | ? | ? | Alto (repo não confirmado) | ⭐ Watchlist |
| **adamlyttleapps/claude-skill-app-onboarding-questionnaire** | #7 Quiz onboarding estilo Noom/Headspace (alta conversão) | n/d | Nenhuma | Baixo | ⭐ Watchlist |
| **rxpelle/kdp-scout** (CLI) | #1 KDP autocomplete mining + BSR/sales estimation + Amazon Ads import | 21 | Python 3, SQLite, DataForSEO opcional | Médio (CLI, não skill) | ⭐ Watchlist |
| **smerchek/claude-epub-skill** | Entrega ebook final em EPUB (Apple Books, Kindle, Kobo) | 106 | Python 3.8+, ebooklib, markdown2 | Baixo | ⭐ Watchlist |
| **ekr0/auto-kdp** (CLI Puppeteer) | Automação upload KDP via CSV | 25 | Node/TS/Puppeteer; quebra se Amazon muda UI | Alto (babysitting) | ➖ Baixa |
| **OneWave-AI/claude-skills** (100+) | Genérico sales/business automation | n/d | n/d | Baixo | ➖ Baixa (muito genérico) |
| **kostja94/marketing-skills** (160+ skills, 40+ page types) | CRO de page types específicos (pricing page, hero, testimonial section) | n/d | Nenhuma | Baixo | ⭐ Watchlist |
| **OpenClaudia/openclaudia-skills** (34 skills) | Subset de marketing skills (SEO/content/email/ads/analytics) | n/d | n/d | Baixo | ➖ Baixa (duplica o que já tem) |
| **coreyhaines31/marketingskills** (page-cro, signup-flow-cro, aso-audit) | Alguns gaps CRO + ASO (app store — tem partial overlap com KDP) | 21.8k | Nenhuma | Baixo | ⭐ Watchlist |

---

## 3. TOP 5 skills pra instalar imediatamente

### 🔥 #1 — Affitor/affiliate-skills (50 skills de afiliado)

**Por quê pro V5/V6**:
V5 depende de afiliados Hotmart 60% comissão + co-op com 1 PT iniciante. Gap #4 (afiliado recruitment) é direto. Esta skill tem **bonus-stack-builder** (empilhar bônus por afiliado), **commission-calculator** (comparar estruturas), **multi-program-manager** (portfolio), **paid-ad-copy-writer**, **compliance-checker** (FTC). Bonus: S1 `affiliate-program-search`, `competitor-spy` e `monopoly-niche-finder` ajudam Amazon KDP também (encontrar nichos underserved).

**Conexão com killer input KDP**: `purple-cow-audit` + `monopoly-niche-finder` + `content-angle-ranker` = triagem de subnicho fitness BR antes de lançar ebook KDP 2 e 3.

**Instalação**:
```bash
cd "E:\Claude Code\ecossistema-personal-de-sucesso\_sandbox-skills"
git clone https://github.com/Affitor/affiliate-skills .claude/skills/affiliate-skills
# testa 1 skill (ex.: affiliate-program-search) com caso real Hotmart
# se OK, move pra 06-distribuicao:
mv .claude/skills/affiliate-skills "../06-distribuicao-e-monetização/.claude/skills/"
```

**Dependência**: MCP `hidrix-tools` (opcional, agrega valor pras skills S1/S2 que fazem social scraping). Sem o MCP, skills de conteúdo + landing + analytics ainda funcionam.

---

### 🔥 #2 — robertguss/claude-code-toolkit (ebook-factory + non-fiction-book-factory)

**Por quê pro V5/V6**:
Killer input Monte Carlo = Amazon KDP vendas/mês. Weslley precisa lançar ebooks 2 e 3 em paralelo (paralelo ao funil R$37). `non-fiction-book-factory` é "pipeline from idea to chapter architecture", `ebook-factory` é "focused ebook creation pipeline". Isso elimina 40h manual de outlining por ebook.

**Conexão**: combina com `book-market-research` (via lobehub Skills Marketplace) pra validar mercado ANTES de escrever. Valida Monte Carlo na vida real.

**Instalação**:
```bash
cd "E:\Claude Code\ecossistema-personal-de-sucesso\_sandbox-skills"
git clone https://github.com/robertguss/claude-code-toolkit .claude/skills/claude-code-toolkit-robertguss
# skills ficam em .claude/skills/claude-code-toolkit-robertguss/skills/
# testa ebook-factory com um outline curto
# se OK, copia só skills/ebook-factory e skills/non-fiction-book-factory pro projeto 06
```

**Dependência**: `uv` (instala com `pip install uv` ou `winget install astral-sh.uv`).

---

### 🔥 #3 — SpillwaveSolutions/running-marketing-campaigns-agent-skill (UTM + GA4)

**Por quê pro V5/V6**:
Gap #3 (analytics/ROI tracking). Weslley precisa **validar se Monte Carlo bate com realidade**. Sem UTM disciplinado, não dá pra saber se Meta Ads → LP → Hotmart está performando dentro das faixas. Skill faz: gera UTMs com GA4 channel alignment, valida batch via CSV, gera QR codes pros criativos impressos/IG bio.

**Conexão**: fecha o ciclo "projeção → execução → medição". Permite ajustar iteração 8 da strategy-finder com dados reais.

**Instalação**:
```bash
cd "E:\Claude Code\ecossistema-personal-de-sucesso\_sandbox-skills"
git clone https://github.com/SpillwaveSolutions/running-marketing-campaigns-agent-skill .claude/skills/running-campaigns
# testa: pedir pra gerar 3 UTMs pra campanha V5 Meta (isca + tripwire + ebook)
# se OK:
mv .claude/skills/running-campaigns "../06-distribuicao-e-monetização/.claude/skills/"
```

**Dependência**: Python 3.8+ (já tem). Opcional: `pip install qrcode pillow`.

---

### 🔥 #4 — wondelai/skills: scorecard-marketing + cro-methodology + hundred-million-offers

**Por quê pro V5/V6**:
3 gaps de uma vez:
- **scorecard-marketing** → quiz funnel 30-50% conversão (benchmark segundo wondel) vs 3-10% PDF padrão. Weslley pode A/B testar o lead magnet V5 "isca PDF grátis" vs "quiz interativo" — se quiz converter 3x mais, muda o topo do funil.
- **cro-methodology** → otimização checkout Hotmart (gap #2)
- **hundred-million-offers** → Weslley **já tem** `hundred-million-offers` na lista, mas a versão wondel pode ser a mesma ou versão diferente — conferir no sandbox antes de instalar pra não duplicar.

**Conexão killer input**: quiz funnel pode virar o lead magnet que leva pro tripwire R$9,90 → ebook R$37. Se validar em pequena escala, reduz CAC do funil inteiro.

**Instalação** (skill por skill, não monorepo):
```bash
cd "E:\Claude Code\ecossistema-personal-de-sucesso\_sandbox-skills"
npx skills add wondelai/skills/scorecard-marketing
npx skills add wondelai/skills/cro-methodology
# VERIFICAR antes: ls .claude/skills/ | grep hundred-million-offers
# se já existe (tem na lista do Weslley), PULAR essa. se versões diferentes, manter 2.
```

**Dependência**: Nenhuma.

---

### 🔥 #5 — BrianRWagner/ai-marketing-claude-code-skills (Testimonial Collector + Case Study Builder)

**Por quê pro V5/V6**:
Gap #7 (UGC/social proof automation). V5 depende de prova social pra copy de Meta Ads. Weslley hoje faz depoimento capture manual via DM. Estas duas skills + **Homepage Audit** automatizam:
- Formato de pergunta pra capturar depoimento (via template guiado)
- Conversão de depoimento bruto → formato carrossel/copy ad/LP
- Case study builder (pra usar em "cliente #1: Carlos, 26, ganhou 3kg em 8 semanas")

**Conexão**: prova social bruta → virada em assets pra todos os canais (IG, carrossel, ad creative, LP) sem retrabalho manual.

**Instalação**:
```bash
cd "E:\Claude Code\ecossistema-personal-de-sucesso\_sandbox-skills"
git clone https://github.com/BrianRWagner/ai-marketing-claude-code-skills .claude/skills/ai-marketing-brw
bash .claude/skills/ai-marketing-brw/scripts/install.sh
# testa Testimonial Collector com 1 depoimento real do Weslley
# se OK, seleciona só Testimonial Collector + Case Study Builder + Homepage Audit pro projeto
```

**Dependência**: Nenhuma (MIT, platform-agnostic).

---

## 4. Watchlist (interessante, não urgente)

| Skill | Por quê na watchlist (não top 5) |
|---|---|
| **resciencelab/opc-skills** (10 skills, 783 stars) | `requesthunt` e `seo-geo` são TOP, mas dependem de twitterapi.io (paga) e Gemini Pro Image (paga). Justifica só quando tiver orçamento de validação — **se Weslley já tem MCP Apify + web_search nativo, `requesthunt` é redundante**. |
| **AgriciDaniel/claude-blog + claude-seo** | Pipeline blog SEO completo, mas pede DataForSEO + Firecrawl + Banana (3 APIs pagas). Overkill pra fase atual. Reabrir quando Weslley decidir ativar V5 long-tail blog BR. |
| **aaron-he-zhu/seo-geo-claude-skills** (20 skills) | Alternativa sem API paga ao `claude-seo` do AgriciDaniel. Se quiser testar SEO blog orgânico BR, começar por aqui. |
| **mcpmarket: amazon-kdp-keyword-optimizer / category-researcher** | Skills parecem perfeitas pro killer input, MAS não achei repo GitHub público — só listagem no mcpmarket. Arriscado instalar algo sem código auditável. **Ação sugerida**: Weslley acessar `https://mcpmarket.com/tools/skills/amazon-kdp-keyword-optimizer` pelo navegador pra ver se tem link pra repo. |
| **adamlyttleapps/claude-skill-app-onboarding-questionnaire** | Quiz estilo Noom/Headspace — alta conversão. Mas é otimizado pra onboarding de APP (trial activation), não pra lead magnet web. Reaproveitável, mas precisa adaptação. |
| **rxpelle/kdp-scout** (CLI) | Mining de keywords Amazon autocomplete + competitor ASIN tracking = ouro pro killer input KDP. Mas é CLI Python, não skill. Weslley pode rodar via Bash; Claude pode ajudar a fazer wrapper `.claude/skills/kdp-scout-wrapper/` que chama o CLI. |
| **smerchek/claude-epub-skill** | Gera EPUB, mas KDP prefere .mobi/.azw3 — wraper ainda não suporta nativamente. Serve pra entrega do tripwire R$9,90 (PDF/EPUB) não pro KDP. |
| **kostja94/marketing-skills** (160+ skills, 40+ page types) | Se Weslley for construir LP mais elaborada com carrd ou migrar pra site próprio, skills de "testimonial section", "hero section", "pricing page" são úteis. Por enquanto, Carrd é minimalista — não justifica. |
| **coreyhaines31/marketingskills** (21.8k stars!) | Marca já consolidada. `aso-audit` tem overlap com KDP metadata (App Store Optimization ≈ KDP SEO). Vale ler SKILL.md pra ver se adapta. |
| **ekr0/auto-kdp** (CLI Puppeteer) | Automatiza upload KDP mas "babysitting" (Amazon muda UI, seletores quebram). **Risco de frustração alto**. Só pra quem publica 10+ livros/mês. |

---

## 5. Gaps SEM skill madura encontrada

### A. Hotmart-específico (order bump + upsell 1-click R$67)
Nada madura no GitHub pra **Hotmart especificamente**. `upsell-downsell-scripting` (mcpmarket) existe mas sem repo público verificado. `coreyhaines31/marketingskills → paywall-upgrade-cro` é o mais próximo mas é genérico SaaS.

**Mini-brief pra skill própria**:
```yaml
name: hotmart-checkout-optimizer
description: Gera variações de copy pra order bump Hotmart (R$9,90 tripwire → +R$27 order bump) e upsell 1-click pós-compra (R$37 ebook → +R$67). Inclui: headline do bump, CTA "adicionar ao pedido", parcelamento psychology BR (3x sem juros), texto de rejeição respeitoso.
when_to_use: quando Weslley monta ou revisa checkout Hotmart pré-lançamento V5
output: 3 variações de copy por elemento (bump headline / bump CTA / upsell headline / upsell oferta / downsell fallback)
knowledge_base: FRAMEWORKS.md (Stack Slide, PAS) + TOM-DE-MARCA.md (nunca "ÚLTIMA CHANCE")
```

### B. Amazon KDP BR especificamente (palavras-chave PT-BR, categorização BR, reviews BR)
Skills encontradas (kdp-scout, book-market-research) são US-centric. **Faixa do Monte Carlo (15-20% lift) foi calibrada em mercado US** — aplicar sem adaptação pode inflar expectativa.

**Mini-brief**:
```yaml
name: kdp-brasil-optimizer
description: Otimiza listing Amazon KDP BR — 7 keywords backend em PT-BR + categoria BR (árvore diferente da US) + descrição formatada HTML KDP + A/B de capa via enquetes IG (proxy de Amazon Ads BR). Usa dados reais de BSR Amazon.com.br.
when_to_use: lançamento ou relisting de ebook KDP BR
dependencies: Apify (acesso Amazon.com.br scraping) OU manual
output: CSV com 7 keywords + 2 categorias + descrição HTML + 3 variações de título
```

### C. Pinterest BR fitness (gap #6)
Nada específico. `AgriciDaniel/claude-blog` e `seo-geo-claude-skills` fazem SEO blog mas não abordam Pinterest pin design / keyword PT-BR.

**Mini-brief**:
```yaml
name: pinterest-fitness-br
description: Gera 10 pins fitness PT-BR otimizados pra Pinterest BR — título pin, descrição com keywords long-tail, alt text, estratégia de board. Foca em nichos "treino em casa homem", "musculação iniciante", "hipertrofia natural".
when_to_use: quando Weslley ativar canal Pinterest no portfolio V5/V6
output: CSV com 10 pins + imagens prompt (pra Canva/DALL-E) + descrição
dependencies: nenhuma (web search pode substituir keyword tool Pinterest)
```

### D. Founder-mode ops (gap #10) — delegation matrix
`opc-skills` faz research, mas não há skill pura de **delegation matrix pro solo founder** ("o que Claude faz / o que eu faço / o que terceirizo"). Pode ser skill minimal, manual, armazenada em `.claude/skills/founder-delegation/`.

---

## 6. Comandos de instalação rápida pros TOP 5

```bash
# Assume CWD no ecossistema raiz

# === #1 affiliate-skills (Affitor) ===
cd "E:/Claude Code/ecossistema-personal-de-sucesso/_sandbox-skills"
git clone https://github.com/Affitor/affiliate-skills .claude/skills/affiliate-skills
# teste manual: claude → "usa affiliate-program-search pra encontrar programas fitness BR"
# se OK:
mv .claude/skills/affiliate-skills "../06-distribuicao-e-monetização/.claude/skills/affiliate-skills"

# === #2 robertguss/claude-code-toolkit (ebook-factory) ===
cd "E:/Claude Code/ecossistema-personal-de-sucesso/_sandbox-skills"
git clone https://github.com/robertguss/claude-code-toolkit .claude/skills/robertguss-toolkit
# teste: claude → "usa ebook-factory pra esboçar um ebook de 28 pg sobre treino em casa"
# se OK (copia só subfolders relevantes):
mkdir -p "../06-distribuicao-e-monetização/.claude/skills/ebook-factory"
mkdir -p "../06-distribuicao-e-monetização/.claude/skills/non-fiction-book-factory"
cp -r .claude/skills/robertguss-toolkit/skills/ebook-factory/* "../06-distribuicao-e-monetização/.claude/skills/ebook-factory/"
cp -r .claude/skills/robertguss-toolkit/skills/non-fiction-book-factory/* "../06-distribuicao-e-monetização/.claude/skills/non-fiction-book-factory/"

# === #3 running-marketing-campaigns-agent-skill ===
cd "E:/Claude Code/ecossistema-personal-de-sucesso/_sandbox-skills"
git clone https://github.com/SpillwaveSolutions/running-marketing-campaigns-agent-skill .claude/skills/running-campaigns
# teste: claude → "gera UTM pra campanha Meta V5: source=meta, medium=cpc, campaign=ebook-v5-ad1"
# se OK:
mv .claude/skills/running-campaigns "../06-distribuicao-e-monetização/.claude/skills/running-campaigns"

# === #4 wondelai/skills (scorecard + cro) ===
cd "E:/Claude Code/ecossistema-personal-de-sucesso/_sandbox-skills"
git clone https://github.com/wondelai/skills .claude/skills/wondelai-all
# teste cada: scorecard-marketing, cro-methodology
# se OK (copia apenas 2):
mkdir -p "../06-distribuicao-e-monetização/.claude/skills/scorecard-marketing"
mkdir -p "../06-distribuicao-e-monetização/.claude/skills/cro-methodology"
cp -r .claude/skills/wondelai-all/skills/scorecard-marketing/* "../06-distribuicao-e-monetização/.claude/skills/scorecard-marketing/"
cp -r .claude/skills/wondelai-all/skills/cro-methodology/* "../06-distribuicao-e-monetização/.claude/skills/cro-methodology/"
# ATENÇÃO: conferir se .claude/skills/hundred-million-offers já existe — Weslley tem na lista.
# Se repositório wondelai tiver versão diferente, validar qual manter.

# === #5 BrianRWagner/ai-marketing-claude-code-skills ===
cd "E:/Claude Code/ecossistema-personal-de-sucesso/_sandbox-skills"
git clone https://github.com/BrianRWagner/ai-marketing-claude-code-skills .claude/skills/ai-marketing-brw
bash .claude/skills/ai-marketing-brw/scripts/install.sh
# teste: claude → "usa testimonial-collector pra montar 5 perguntas de captura"
# se OK (seleciona 3 skills):
mkdir -p "../06-distribuicao-e-monetização/.claude/skills/testimonial-collector"
mkdir -p "../06-distribuicao-e-monetização/.claude/skills/case-study-builder"
mkdir -p "../06-distribuicao-e-monetização/.claude/skills/homepage-audit"
# copiar arquivos correspondentes do repo brw
```

**Validar pós-instalação**:
```bash
cd "E:/Claude Code/ecossistema-personal-de-sucesso/06-distribuicao-e-monetização"
ls .claude/skills/
# confirmar: affiliate-skills, ebook-factory, non-fiction-book-factory, running-campaigns, scorecard-marketing, cro-methodology, testimonial-collector, case-study-builder, homepage-audit
```

---

## 7. Observações finais

### O que não instalar ainda
- `OneWave-AI/claude-skills` e `OpenClaudia/openclaudia-skills` — bundles grandes que duplicam o que Weslley já tem. Risco de cargar skills "zumbi" consumindo tokens.
- `ekr0/auto-kdp` — automação KDP via Puppeteer é **frágil por design**. Quando Amazon muda UI, quebra. Justifica só se volume for >5 livros/mês.

### O ecossistema Claude Code skills é imaturo pra:
- Hotmart-específico (mercado BR é nicho; ninguém publicou skill oficial)
- KDP BR (maioria focada em US/UK; keywords PT-BR mal cobertas)
- Pinterest BR fitness (Pinterest em geral pouco explorado no stack skills)

Nestes 3 casos, **vale escrever skill própria** (briefs na seção 5).

### Priorização contra killer input
Se Weslley só pode instalar UMA skill agora: **#2 robertguss/claude-code-toolkit** (ebook-factory). Mexe direto no killer input (Amazon KDP library) e corta ~40h de outlining manual por ebook.

Se pode instalar TRÊS: **#1 affiliate + #2 ebook-factory + #3 UTM/GA4**. Cobre os 3 alavancas de lift do Monte Carlo (afiliados ampliam faixa, KDP é o killer, UTM valida realidade vs projeção).

---

**Arquivo**: `E:\Claude Code\ecossistema-personal-de-sucesso\06-distribuicao-e-monetização\pgsa\SKILLS-GITHUB-PESQUISA-2026-04-17.md`
