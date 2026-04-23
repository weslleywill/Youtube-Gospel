# PIPELINE 04 — Orgânico → Pago (Post que Performou Vira Ad)

> Pipeline 4 de 12 • Nunca inventa ad do zero. Ad parte de post orgânico com prova real de performance.

## Objetivo
Pegar post orgânico que já provou funcionar (saves, compartilhamentos, comentários qualitativos) e transformar em anúncio pago com 3 variações de hook + 3 de body + audience sugerida.

## Quando disparar (gatilho)
Peça orgânica bate **pelo menos 2** dos critérios abaixo em 7 dias:
- Saves >= 5% das views
- Compartilhamentos >= 2% das views
- Comentários com intenção de compra (pergunta preço, pede link, "onde compro?")
- Engagement rate >= 1.5x a média do perfil
- Alcance orgânico plateou mas ainda gera DM

## Inputs necessários
- **Peça orgânica com dados** (link + screenshot de insights Meta/IG)
- **Performance completa**: views, alcance, saves, compartilhamentos, retenção, comentários
- **Budget de teste**: R$30/dia (ver `PIPELINE-ADS-MANAGEMENT.md`)
- **Oferta conectada**: link Hotmart do ebook "O Treino Que Ninguém Vê" R$37
- **UTMs prontas**: vide `PIPELINE-ANALYTICS.md` (running-marketing-campaigns)

## Passo a passo

### Passo 1 — Skill `performance-analyzer-sms` (confirmar que performou mesmo)
Não confiar só no olhômetro. Rodar análise da peça.
```
/performance-analyzer-sms input: [screenshot insights + link post],
benchmark: últimas 20 peças do perfil,
critérios: saves, shares, retention curve, comment intent
```
**O que espero**: verdict claro — "essa peça performou X% acima da média em saves e Y% em shares — candidata forte a ad" OU "performou ok mas nada fora de série, não vale ad ainda".

### Passo 2 — Skill `content-pattern-analyzer-sms` (entender o porquê)
Se o post performou, entender qual elemento fez funcionar.
```
/content-pattern-analyzer-sms input: [post + top 5 comentários + retention curve],
analisar: hook, estrutura, duração, tema, CTA,
extrair: padrão que pode ser replicado nas variações
```
**O que espero**: 3-5 insights do tipo "hook de confissão foi o que segurou 0-3s", "B-roll de erro técnico segurou até 15s", "comentários se engajaram com a pergunta final". Isso vira briefing pras variações.

### Passo 3 — Skill `marketing-psychology` (gatilhos que já tão funcionando no orgânico)
Identificar qual gatilho mental tá segurando a peça no orgânico pra amplificar no pago.
```
/marketing-psychology input: [transcrição do post + top comentários],
objetivo: identificar gatilhos ativos (reciprocidade, prova social, autoridade vulnerável, medo de perda),
sugerir: como reforçar no ad sem perder o tom de marca
```
**O que espero**: 1-2 gatilhos principais identificados + sugestão de como reforçar SEM cair em tom infoprodutor agressivo.

### Passo 4 — Skill `ad-creative` (gerar 3 headlines + 3 body copies)
Com os inputs acima, gerar as variações.
```
/ad-creative base: [peça orgânica transcrita],
plataforma: Meta (IG + FB feed + stories + reels),
frameworks: PAS e AIDA (proibido: urgência fake, caps-lock agressivo),
gerar: 3 headlines distintas + 3 primary texts + 3 descrições,
restrição: zero palavras banidas (lista em TOM-DE-MARCA.md),
tom: post orgânico do Weslley, não ad de infoprodutor
```
**O que espero**: matriz 3x3 de variações — cada headline combina com qualquer body. 9 combinações possíveis pra testar.

**Validação obrigatória**: nenhuma variação pode conter:
- "ÚLTIMA CHANCE", "COMPRE AGORA", "OFERTA IMPERDÍVEL"
- "transforme seu corpo", "resultados garantidos"
- "método revolucionário / definitivo"
- Emojis em excesso (máx 2)
- Caps-lock em frase inteira

### Passo 5 — Disclaimer de fitness (se tiver claim de resultado)
Se alguma variação mencionar resultado (ganho de massa, perda de peso), incluir nota: *"Resultados variam individualmente. Este conteúdo não substitui acompanhamento profissional."*

### Passo 6 — Audience sugerida pro ad
Baseado em quem interagiu com o orgânico + persona do Weslley:

**Audience 1 — Fria (interesse)**:
- Localização: Brasil
- Idade: 20-35
- Gênero: M
- Interesses: musculação, academia, nutrição esportiva, Max Titanium, Growth Supplements, Paulo Muzy, Renato Cariani
- Exclusões: personal trainers, nutricionistas (evitar concorrentes)

**Audience 2 — Morna (lookalike)**:
- Lookalike 1-3% dos que engajaram com o post orgânico (IG account engagers últimos 90 dias)

**Audience 3 — Quente (retargeting)**:
- Visitaram landing page do ebook mas não compraram (últimos 30 dias)
- Engajaram com perfil IG últimos 60 dias
- Já clicaram em ad anterior mas não converteram

### Passo 7 — Plano de teste (budget R$30/dia)
Recomendação pro primeiro teste:
- **Dia 1-3**: R$30/dia dividido nas 3 audiences (R$10 cada), com Advantage+ creative on, deixando Meta escolher melhor combinação hook+body automaticamente
- **Dia 4-7**: Manter a combinação vencedora, escalar budget em 20%/dia
- **Dia 8**: Avaliar CPA (alvo < R$30 pro ebook R$37)

## Outputs esperados
Arquivo `ads/YYYY-MM-DD-[slug]-organico-to-pago.md`:
- Link da peça orgânica origem + dados
- 3 headlines aprovadas
- 3 body copies aprovadas
- 3 audiences descritas
- Plano de budget de 7 dias
- UTMs prontas (formato definido em `PIPELINE-ANALYTICS.md`)
- Link pra próximo pipeline: `PIPELINE-ADS-MANAGEMENT.md` pra subir e monitorar

## Métricas de sucesso
- **CTR (Click-Through Rate)**: >= 1.5% (Meta BR fitness benchmark)
- **CPM**: < R$15 (nicho fitness BR)
- **CPA (Cost per Acquisition do ebook R$37)**: < R$30 pra viabilidade
- **ROAS (Return on Ad Spend)**: >= 1.3x após 14 dias (próximo a break-even com cauda de upsell)
- **Taxa de transformação orgânico → pago**: 30-40% dos posts que batem critério viram ad (não tudo, só os melhores)

## Quando NÃO usar
- Peça orgânica não bateu critério de performance (não inventa ad do zero — isso é copywriting, outro fluxo)
- Peça é super situacional/datada (ex: reação a polêmica que já passou)
- Não tem budget mínimo de R$30/dia disponível
- Oferta do ebook tá desconectada (link Hotmart quebrado, landing page ruim) — arrumar isso primeiro
- **Zero vendas ainda**: se a landing page/funil de DM nunca converteu, não adianta mandar tráfego pago. Primeiro valida funil orgânico (pipeline 06).

## Exemplo aplicado (nicho fitness BR)

**Peça orgânica**: "Remada errada por 8 meses" — 45k views, 4.2k saves, 1.1k shares, 230 comentários (37 pedindo link do ebook).

**Verdict pipeline 01**: saves a 9.3%, shares a 2.4%, intent comments presentes → ELEGÍVEL.

**Gatilhos identificados** (passo 3):
- Autoridade vulnerável ("não sou personal, tô aprendendo")
- Prova específica (detalhe técnico da correção)

**3 Headlines geradas**:
1. "Você faz remada assim? Eu fiz por 8 meses errado."
2. "A remada que eu corrigi semana passada (depois de 8 meses)."
3. "Não sou personal. Mas essa correção me salvou."

**3 Body copies**:
1. *PAS curto*: "Você treina costas e não sente as costas? Pode ser o mesmo erro que eu fazia. Escrevi um ebook com o básico que ninguém me explicou — R$37, sem pressão."
2. *Storytime*: "Oito meses treinando errado até eu ver um vídeo aleatório e cair a ficha. Juntei esse e outros 12 erros no ebook. Não é o segredo de ninguém, é o básico honesto."
3. *Contrarian*: "Não precisa de coach premium pra parar de treinar errado. Precisa de um cara que erra na sua frente e mostra como corrigiu. Fiz um ebook com isso."

**Todas com disclaimer**: *Resultados variam individualmente.*

## Integração com Obsidian

Template `_obsidian-setup/_templates/organico-to-pago.md`. Campos:
- Peça orgânica origem (link)
- Screenshot de insights
- 3x3 variações aprovadas
- 3 audiences definidas
- Link pra campanha no Meta Ads Manager
- Status: em teste / vencedor definido / escalando / pausado
- Performance após 7 e 14 dias (CPA, CTR, ROAS)

Tag Obsidian: `#pipeline/organico-to-pago`, `#ads`. Link de volta pro `#pipeline/producao` da peça original.
