# PIPELINE 07 — Analytics (Medir Tudo → Decisões Acionáveis)

> Pipeline 7 de 12 • Sem medição, tudo é chute. Toda decisão estratégica sai dessa camada.

## Objetivo
Ter dashboard semanal confiável com métricas de engajamento, tráfego, conversão e receita — e extrair 3 decisões acionáveis toda segunda.

## Quando disparar (gatilho)
- **Setup inicial** (uma vez): configurar GA4, pixel Meta, pixel TikTok, UTMs, Hotmart webhooks
- **Semanal** (toda segunda 9h): rodar relatório de performance
- **Pós-campanha**: quando pausar ads, fechar relatório final
- **Mudança de estratégia**: antes de grandes mudanças (ex: subir budget de ads 3x), puxar baseline

## Inputs necessários
- **GA4 configurado** no link do ebook (landing Hotmart)
- **Pixel Meta** no site + perfil IG conectado ao Business
- **Pixel TikTok** no site
- **Hotmart webhooks** → enviar eventos de venda pra GA4 e Meta
- **UTMs padrão** documentadas (ver passo 1)
- **Acesso**: GA4, Meta Ads Manager, TikTok Ads Manager, Hotmart Analytics

## Passo a passo

### Passo 1 — Skill `running-marketing-campaigns` (higiene de UTMs)
Sem UTM consistente, análise vira chute. Definir e DOCUMENTAR padrão.
```
/running-marketing-campaigns setup UTM hygiene,
formato: utm_source / utm_medium / utm_campaign / utm_content / utm_term,
padrão do Weslley: 
- source: ig / tiktok / yt / google / hotmart-email
- medium: organico / cpc / dm / story / bio
- campaign: [slug-da-peça-ou-campanha]
- content: [variação A/B]
- term: [keyword se pago search]
```
**O que espero**: documento `ANALYTICS-UTMS.md` com o padrão + exemplos. Toda peça postada e todo ad deve seguir.

**Exemplo**:
```
https://hotmart.com/... 
?utm_source=ig
&utm_medium=organico
&utm_campaign=remada-erro-8-meses
&utm_content=reel-v1
```

### Passo 2 — MCP `google-analytics-mcp` (pull semanal GA4)
Buscar dados das últimas 7 dias.
```
mcp call google-analytics-mcp → run_report(
  metrics: [sessions, users, conversions, event_count],
  dimensions: [source, medium, campaign, landing_page],
  date_range: last_7_days
)
```
**O que espero**: tabela com sessões por fonte/meio/campanha + conversões (evento de compra).

### Passo 3 — MCP `meta-ads-mcp` (pull ads Meta)
```
mcp call meta-ads-mcp → get_insights(
  campaign_ids: [todas ativas],
  fields: [spend, impressions, clicks, ctr, cpm, cpc, purchases, purchase_value, roas],
  date_range: last_7_days
)
```
**O que espero**: tabela com gasto e retorno por campanha + ad set + ad individual.

### Passo 4 — Skill `performance-analyzer-sms` (analisar engajamento orgânico)
Dados de engagement por post (IG/TikTok/YT) das últimas 7 dias.
```
/performance-analyzer-sms plataformas: IG, TikTok, YT Shorts,
período: últimos 7 dias,
métricas: views, reach, saves, shares, comments, retention curve,
output: top 3 peças + bottom 3 peças + porquê (padrão)
```
**O que espero**: lista das melhores e piores peças + hipótese do porquê + sugestão de ação.

### Passo 5 — Dados de venda Hotmart (manual ou via API)
Toda segunda, puxar:
- Vendas totais da semana (unidades + receita líquida)
- Refunds (alvo < 5%)
- Origem das vendas (via UTM no checkout Hotmart)
- Tempo médio entre primeira visita e compra (latência de conversão)

Se tiver Hotmart API + n8n: automatizar via webhook.

### Passo 6 — Consolidar dashboard (relatório semanal)
Juntar tudo num arquivo `analytics/YYYY-semana-NN.md`:

**Seção 1 — Tráfego & Engajamento**
| Plataforma | Views | Seguidores novos | Saves | Shares | DMs iniciadas |
|------------|-------|------------------|-------|--------|---------------|
| IG         | -     | -                | -     | -      | -             |
| TikTok     | -     | -                | -     | -      | -             |
| YT Shorts  | -     | -                | -     | -      | -             |

**Seção 2 — Funil de Conversão**
```
Views nos posts top 5:        ____
↓ CTR pro perfil:             ____% 
Visitas ao perfil:            ____
↓ Taxa de DM/bio click:       ____%
Cliques bio + DMs iniciadas:  ____
↓ Taxa DM → Venda (pipeline 06): ____%
Vendas fechadas:              ____ unidades
Receita semana:               R$ ____
```

**Seção 3 — Ads (se ativos)**
- Gasto total: R$___
- CPA médio: R$___
- ROAS: ___x
- Ads vencedores + perdedores (tabela)

**Seção 4 — 3 decisões pra semana seguinte**
1. [Ação específica baseada em dado] — ex: "Escalar ad set 2 em 20% (ROAS 1.8x, frequency 2.1)"
2. [Ação sobre conteúdo] — ex: "Produzir 2 peças no formato 'erro X mês' (top performer saves)"
3. [Ação sobre funil] — ex: "Testar novo script DM C pra objeção de preço (conversão atual 0.9%)"

### Passo 7 — Decisões acionáveis → alimentar outros pipelines
- Decisão sobre conteúdo → entra no `PIPELINE-VIRAL-RESEARCH` ou `PIPELINE-PRODUCAO-CONTEUDO`
- Decisão sobre ads → entra no `PIPELINE-ADS-MANAGEMENT`
- Decisão sobre funil → ajuste nos scripts do `PIPELINE-FUNIL-DM`
- Decisão sobre posicionamento → revisa `PIPELINE-COMPETITIVE-INTEL`

## Outputs esperados
- `analytics/YYYY-semana-NN.md` (relatório semanal completo)
- `analytics/ANALYTICS-UTMS.md` (padrão vivo, atualizado só quando mudar)
- `analytics/historico.md` (série temporal das métricas principais — alimenta dashboards visuais)
- 3 decisões acionáveis registradas (uma por pipeline afetado)

## Métricas de sucesso
- **Tempo pra rodar relatório**: < 45 min toda segunda
- **Taxa de decisão → ação**: >= 70% das decisões do relatório são executadas na semana
- **Cobertura de UTM**: >= 95% do tráfego identificado com fonte (sem "direct/none" > 10%)
- **Visibilidade do funil**: todos os 5 estágios medidos (views → perfil → DM → link → venda)
- **Latência de decisão**: problema detectado hoje → ação executada em <= 48h

## Quando NÃO usar
- Quando ainda não tem dados suficientes (< 2 semanas de atividade) — só ruído
- Em meio de campanha: não fazer análise granular nas primeiras 7 dias de ad (fase de aprendizado Meta)
- Análise de micro-variação diária (gera ansiedade, não decisão) — relatório é semanal

## Regras de ouro

- **Uma métrica por decisão**: relatório pode ter 50 números, mas cada decisão se apoia em 1 métrica principal + 1 de validação
- **Dado sem ação é ruído**: se um número chama atenção mas você não sabe o que fazer com ele, não inclui no relatório
- **Tendência > valor absoluto**: "CPA caiu de R$42 pra R$28" > "CPA tá R$28"
- **Honestidade total**: se semana foi ruim, registra ruim. Vaidade em relatório próprio é autossabotagem

## Integração com Obsidian

Template `_obsidian-setup/_templates/analytics-semanal.md`. Campos:
- Métricas por plataforma (tabela semanal)
- Dataview query pra gráfico de evolução (seguidores, vendas, CPA) ao longo das semanas
- 3 decisões marcadas com checkbox (validar semana seguinte se foram executadas)
- Link pra próximas ações em cada pipeline afetado

Tag Obsidian: `#pipeline/analytics`, `#relatorio-semanal`, `#decisoes`. Cross-link com todos os outros pipelines (é o pipeline "hub" de informação).

## Exemplo de insight bom vs. ruim

**Ruim (vago)**: "Engajamento caiu essa semana, precisa melhorar conteúdo"

**Bom (acionável)**:
> "Posts de Autoridade caíram 30% em saves vs. semana passada. Posts de Influência (bastidor) subiram 15%. Hipótese: audiência tá cansada de conteúdo técnico, quer mais processo pessoal. Decisão: semana que vem, inverter proporção pra 30% Autoridade / 40% Influência / 30% Engajamento e medir novamente em 7 dias."
