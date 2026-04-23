# PIPELINE 05 — Ads Management (Criar, Monitorar, Otimizar)

> Pipeline 5 de 12 • Operação de campanhas pagas (Meta, TikTok, Google) com budget inicial R$30/dia, CPA alvo < R$30 pro ebook R$37.

## Objetivo
Manter ads rodando de forma **sustentável** — nunca queimar budget em criativo não-validado, nunca deixar ad morto gastando, semanalmente auditar performance e cortar/escalar baseado em dados.

## Quando disparar (gatilho)
- Saída do `PIPELINE-ORGANICO-TO-PAGO.md` com 3x3 variações prontas pra subir
- Revisão semanal: toda segunda, auditoria de campanhas ativas
- Revisão mensal: decisão de renovar, pausar ou ampliar budget
- Alert automático: CPA > R$45 por 3 dias consecutivos (pausa imediata)

## Inputs necessários
- **Criativos aprovados** (vem do pipeline 04)
- **Budget**: R$30/dia inicial (pode escalar até R$100/dia se ROAS >= 1.5x)
- **Plataformas ativas**: Meta primário, TikTok Ads secundário, Google Ads terciário (só quando tiver volume de busca comprovado via `PIPELINE-ANALYTICS`)
- **Oferta**: ebook R$37 Hotmart
- **Pixel/eventos**: Pixel Meta + TikTok Pixel + GA4 configurados e disparando Purchase

## Passo a passo

### Passo 1 — Skill `paid-ads` (estrutura de campanha antes de subir)
Definir estrutura de conta antes de botar dinheiro.
```
/paid-ads plataforma: Meta (foco) + TikTok (secundário),
objetivo: conversão (Purchase), budget inicial R$30/dia,
estrutura: 1 campanha → 3 ad sets (audiences do pipeline 04) → 3-9 ads (variações),
estratégia de lance: Highest Volume (Meta) / Lowest Cost (TikTok) nos primeiros 7 dias
```
**O que espero**: árvore de campanha definida, nomenclatura padrão (ex: `[CAMP]-[OBJ]-[PROD]-[DATA]`), convenção de UTM.

### Passo 2 — Skill `claude-ads` (suite completa Meta/TikTok/Google)
A skill tem 17 sub-skills. Invocar especificamente:
```
/claude-ads ads-meta → montar campanha no painel Meta (estrutura, audiences, criativos)
/claude-ads ads-tiktok → replicar pra TikTok Ads (adaptar audiences + pixel TikTok)
/claude-ads ads-audit → checklist pré-publicação (pixel ok? evento Purchase ok? UTM ok? landing carrega?)
/claude-ads ads-score → score preditivo de performance antes de subir (identificar ad fraco)
```
**O que espero**: checklist completo marcado antes de ativar. Zero tolerância com "sobe e vê" — sobe só quando passou auditoria.

### Passo 3 — MCP `meta-ads-mcp` (subir + monitorar Meta)
Conectar à API Meta pra subir programaticamente.
```
mcp call meta-ads-mcp → create_campaign(name, objective, daily_budget)
mcp call meta-ads-mcp → create_ad_set(audience, placements, optimization_goal)
mcp call meta-ads-mcp → upload_creative(video, headline, primary_text, description)
mcp call meta-ads-mcp → get_insights(campaign_id, last_7d) — pra monitoramento
```
**Regra**: nunca subir manualmente se dá pra automatizar via MCP — reduz erro humano.

### Passo 4 — MCP `tiktok-ads-mcp` (replicar no TikTok)
```
mcp call tiktok-ads-mcp → create_campaign(...)
mcp call tiktok-ads-mcp → get_ad_performance(...)
```
**Nota**: TikTok Ads BR ainda tem CPM mais baixo que Meta no nicho fitness — vale rodar em paralelo.

### Passo 5 — MCP `mcp-google-ads` (Search + YouTube)
Só quando tiver keywords validadas via `claude-seo` (pipeline 01 passo 4).
```
mcp call mcp-google-ads → create_search_campaign(keywords, bids, budget)
mcp call mcp-google-ads → create_youtube_campaign(video_ad, audiences)
```
**Estratégia**: Google Ads entra como 3º canal — foco em Search pra captar intenção ("melhor ebook treino iniciante") + YouTube pra remarketing.

### Passo 6 — Skill `meta-ads-analyzer` (análise semanal Meta)
Toda segunda, rodar análise dos últimos 7 dias.
```
/meta-ads-analyzer campanha: [id], período: últimos 7 dias,
métricas: CPM, CTR, CPC, CPA, ROAS, frequency, hook rate (3s views/impressions),
identificar: criativos esgotados, audiences saturadas, oportunidades de escala
```
**O que espero**: relatório com 3 decisões claras — (1) o que pausar, (2) o que manter, (3) o que escalar.

### Passo 7 — Regras de decisão semanal

| Métrica | Bom | Atenção | Pausar |
|---------|-----|---------|--------|
| CPA | < R$25 | R$25-R$35 | > R$35 por 3 dias |
| CTR | > 1.5% | 0.8-1.5% | < 0.8% |
| Frequency | < 2.5 | 2.5-4.0 | > 4.0 (audience saturada) |
| ROAS | > 1.3x | 1.0-1.3x | < 1.0x por 7 dias |
| Hook rate | > 25% | 15-25% | < 15% |

**Regra de escala**: só escalar ad set com >= 20 conversões no período. Escala máxima 20%/dia (evitar reset de aprendizado do algoritmo Meta).

### Passo 8 — Relatório semanal
Toda segunda, gerar relatório consolidado:
- Budget gasto na semana
- Vendas geradas (unidades ebook)
- CPA médio
- ROAS consolidado
- 3 aprendizados da semana
- 3 decisões pra semana seguinte (pausar / manter / escalar)

## Outputs esperados
Arquivo semanal `ads/relatorios/YYYY-semana-NN.md`:
- Tabela de todas campanhas ativas com métricas
- Decisões de cada uma (pausar / manter / escalar)
- Screenshots ou exports da Meta/TikTok/Google
- Orçamento próxima semana
- Criativos esgotados marcados pra reposição (volta pro pipeline 04)

Pasta `ads/ativos/` com cada campanha em arquivo separado atualizado semanalmente.

## Métricas de sucesso
- **CPA**: < R$30 (margem pra ebook R$37)
- **ROAS**: >= 1.3x no primeiro mês, meta 2x+ após 3 meses
- **Frequency controlada**: nunca > 4.0 sem troca de criativo
- **Taxa de criativos novos**: >= 2 ads novos por semana testados (evita fadiga)
- **% Budget em ads vencedores**: >= 60% do gasto indo pra 20% dos ads (Pareto)
- **Cobertura multi-canal**: Meta 70% / TikTok 20% / Google 10% do budget após 60 dias

## Quando NÃO usar
- **Zero vendas orgânicas**: não subir ad se funil de DM nunca converteu (validar pipeline 06 primeiro)
- **Criativo não-validado**: não subir ad que não veio de post orgânico bem performando (exceção: remarketing com criativo comprovado)
- **Pixel quebrado**: não rodar ad sem pixel disparando Purchase corretamente
- **Sem budget reservado 30 dias**: não começar campanha se só tem budget pra 5-10 dias — Meta precisa de 7-14 dias só pra sair da fase de aprendizado

## Regras obrigatórias de tom em ads (crítico)

Tom de ad do Weslley = tom de post orgânico dele. Se alguém ver o ad e não perceber que é pago, o tom tá certo.

**NUNCA**:
- Urgência fake ("só hoje", "últimas horas")
- Caps-lock em sentença inteira
- Emojis 🚨⚠️🔥 como clickbait
- Thumbnails chocadas (corpo sem camisa com setinhas, antes/depois irreal)

**SEMPRE**:
- Vídeo do Weslley falando como em post orgânico
- 1ª pessoa
- Admissão de limite ("não sou coach", "ainda tô aprendendo")
- CTA conversacional ("se te interessar, o link tá aí", não "COMPRE AGORA")

## Controles de segurança (budget cap)

- Cap diário total: R$100/dia (soma de todas campanhas)
- Se ultrapassar cap, pausar automaticamente (via alerta Meta)
- Revisão de cap mensal baseada em ROAS dos últimos 30 dias

## Integração com Obsidian

Template `_obsidian-setup/_templates/ads-management.md`. Dashboard dinâmico com:
- Tabela de campanhas ativas
- Gráfico de CPA ao longo do tempo (via dataview se usar)
- Log de decisões semanais
- Histórico de criativos usados (com link pros posts orgânicos origem)

Tag Obsidian: `#pipeline/ads`, `#meta-ads` / `#tiktok-ads` / `#google-ads`, `#semanal`. Cross-link com `#pipeline/organico-to-pago` e `#pipeline/analytics`.
