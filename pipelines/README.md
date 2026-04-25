# Pipelines — Distribuição e Monetização

> Índice dos 12 pipelines operacionais do 06. Cada pipeline é uma receita executável com skills/MCPs específicos em cada passo.

## Fase atual
- **Vendas**: 0 (fase 0)
- **Prioridade**: orgânico primeiro (IG + TikTok + YT Shorts), pago só depois de validar funil
- **Produto único**: ebook "O Treino Que Ninguém Vê" R$37 (Hotmart)
- **Meta imediata**: primeiras 10 vendas via funil DM (pipeline 06)

## Mapa dos 12 pipelines

| # | Nome | Função | Skills principais | Gatilho |
|---|------|--------|-------------------|---------|
| 01 | [PIPELINE-VIRAL-RESEARCH.md](PIPELINE-VIRAL-RESEARCH.md) | Pesquisa de ideia pré-produção | `viral`, `spy`, `tiktok-trends-mcp`, `claude-seo` | Início de semana / pauta vazia |
| 02 | [PIPELINE-PRODUCAO-CONTEUDO.md](PIPELINE-PRODUCAO-CONTEUDO.md) | Ideia → roteiro pronto pra gravar | `hook-writer-sms`, `script`, `create-viral-content`, `copywriting` | Ideia aprovada no pipeline 01 |
| 03 | [PIPELINE-REAPROVEITAMENTO.md](PIPELINE-REAPROVEITAMENTO.md) | 1 peça → 3 adaptações (IG + YT + TikTok) | `repurpose`, `social-content`, `carousel-writer-sms` | Peça publicada há >= 24h |
| 04 | [PIPELINE-ORGANICO-TO-PAGO.md](PIPELINE-ORGANICO-TO-PAGO.md) | Post bom → ad pago | `performance-analyzer-sms`, `content-pattern-analyzer-sms`, `ad-creative`, `marketing-psychology` | Saves > 5%, shares > 2% em 7d |
| 05 | [PIPELINE-ADS-MANAGEMENT.md](PIPELINE-ADS-MANAGEMENT.md) | Criar + monitorar + otimizar ads | `claude-ads`, `paid-ads`, `meta-ads-mcp`, `tiktok-ads-mcp`, `mcp-google-ads`, `meta-ads-analyzer` | Semanal (segunda) |
| 06 | [PIPELINE-FUNIL-DM.md](PIPELINE-FUNIL-DM.md) | Conteúdo → DM → venda R$37 | `copywriting`, `marketing-psychology`, `email-sequence`, `whatsapp-mcp`, `hundred-million-offers` | Sempre ativo |
| 07 | [PIPELINE-ANALYTICS.md](PIPELINE-ANALYTICS.md) | Medir tudo, gerar decisões | `google-analytics-mcp`, `meta-ads-mcp`, `running-marketing-campaigns`, `performance-analyzer-sms` | Semanal (segunda) |
| 08 | [PIPELINE-COMPETITIVE-INTEL.md](PIPELINE-COMPETITIVE-INTEL.md) | Espiar 5 concorrentes | `spy`, `competitive-ads-extractor`, `claude-ads /competitor` | Quinzenal |
| 09 | [PIPELINE-AUTONOMO-FULL.md](PIPELINE-AUTONOMO-FULL.md) | Orquestração n8n end-to-end | `n8n-mcp`, `buffer-mcp` + todos anteriores | **Só depois dos outros 8 estáveis** |
| 10 | [PIPELINE-STORYTELLING-CONSTRUCAO.md](PIPELINE-STORYTELLING-CONSTRUCAO.md) ⭐ | Erro real → narrativa conectiva | `copywriting`, `create-viral-content`, `script` | Semanal (domingo) + reativo |
| 11 | [PIPELINE-PROVA-SOCIAL-UGC.md](PIPELINE-PROVA-SOCIAL-UGC.md) ⭐ | DM cliente → carrossel prova social | `whatsapp-mcp`, `copywriting`, `carousel-writer-sms`, `marketing-psychology` | Quando tiver 3+ depoimentos |
| 12 | [PIPELINE-PINTEREST-ORGANICO.md](PIPELINE-PINTEREST-ORGANICO.md) ⭐ | IG carrossel → 5 pins Pinterest | `repurpose`, `social-content`, `claude-seo`, `copywriting` | Semanal (sábado) |
| 13 | [PIPELINE-STRATEGY-FINDER.md](PIPELINE-STRATEGY-FINDER.md) | Buscar estratégia vencedora autonomamente | `strategy-finder` + `strategist-autonomous` agent | Quando estratégia trava |
| 14 | [PIPELINE-SHORTS-YOUTUBE.md](PIPELINE-SHORTS-YOUTUBE.md) ✅ NOVO | Short YouTube 9:16 do zero (Viral hook-first) | `viral`, `tiktok-trends` MCP, `hook-writer-sms`, `script`, `frameworks`, `image-prompt`, `kling-ai-prompt-generator`, `voice-enhancer`, `ffmpeg-usage`, `claude-youtube`, `claude-seo`, `repurpose` | 5×/semana |
| 15 | [PIPELINE-SHORTS-FUNIL-INTEGRADO.md](PIPELINE-SHORTS-FUNIL-INTEGRADO.md) 🛌 DORMENTE | Short otimizado pra venda ebook | Pipeline 14 + `monetization-coordinator`, `hundred-million-offers`, `running-marketing-campaigns`, `email-sequence` | Quando ebook live + pipeline 14 calibrado |

⭐ = pipelines diferenciais da marca (não padrão de infoproduto BR genérico)
✅ = adicionado nesta semana
🛌 = dormente — não rodar sem aprovação explícita

## Como os pipelines se conectam

```
[01 VIRAL RESEARCH] ←───────────┐
        ↓                       │
[02 PRODUÇÃO] ──→ Weslley grava │
        ↓                       │
[03 REAPROVEITAMENTO]           │
        ↓                       │
     Publica                    │
        ↓                       │
[07 ANALYTICS] ─────────────────┤  ← decisões voltam pras fontes
        ↓                       │
    [Se performou]              │
        ↓                       │
[04 ORGÂNICO→PAGO]              │
        ↓                       │
[05 ADS MANAGEMENT] ────────────┤
                                │
[06 FUNIL DM] (sempre ativo) ───┤
        ↓                       │
[11 PROVA SOCIAL] (pós-venda)   │
                                │
[08 COMPETITIVE INTEL] ─────────┘ (quinzenal, alimenta 01)

[10 STORYTELLING] ─ paralelo, feed o 02 com material único
[12 PINTEREST]    ─ paralelo, pega output do 03 (carrosséis)

[09 AUTÔNOMO]     ─ orquestra os 8 anteriores no futuro
```

## Ordem de implementação sugerida

**Fase imediata (semana 1-2)** — sair do zero:
1. `PIPELINE-FUNIL-DM.md` (setup oferta + scripts A-E)
2. `PIPELINE-VIRAL-RESEARCH.md` (primeira pauta validada)
3. `PIPELINE-PRODUCAO-CONTEUDO.md` (primeiras peças gravadas)
4. `PIPELINE-STORYTELLING-CONSTRUCAO.md` ⭐ (diferencial de marca desde dia 1)

**Fase crescimento (semana 3-8)** — consistência e medição:
5. `PIPELINE-REAPROVEITAMENTO.md` (ampliar alcance sem mais gravação)
6. `PIPELINE-ANALYTICS.md` (medir tudo)
7. `PIPELINE-COMPETITIVE-INTEL.md` (identificar gaps)

**Fase monetização (mês 3+)** — quando primeiras 10 vendas já aconteceram:
8. `PIPELINE-ORGANICO-TO-PAGO.md` + `PIPELINE-ADS-MANAGEMENT.md`
9. `PIPELINE-PROVA-SOCIAL-UGC.md` ⭐ (com clientes reais)
10. `PIPELINE-PINTEREST-ORGANICO.md` ⭐ (canal de expansão)

**Fase automação (mês 6+)** — só com tudo funcionando manual:
11. `PIPELINE-AUTONOMO-FULL.md`

## Regras gerais (obrigatórias em TODOS os pipelines)

1. **TOM-DE-MARCA**: nenhuma peça, ad ou DM pode usar palavra banida (ver `TOM-DE-MARCA.md`)
2. **1ª pessoa**: sempre que possível, tom amigo no WhatsApp
3. **Disclaimer fitness**: claim de resultado → nota sobre individualidade
4. **AEI marcado**: toda peça sai com `[AEI: Autoridade/Engajamento/Influência]` explícito
5. **Reaproveitamento**: 1 conteúdo vale >= 3 adaptações quando possível
6. **Hook 2 segundos**: obrigatório em vídeo curto
7. **Honestidade radical**: nenhum número inventado, nenhum depoimento fake, nenhum claim sem prova

## Skills instaladas (referência rápida)

Ver `CLAUDE.md` do projeto pra tabela completa. Principais referenciados nestes pipelines:

- `viral`, `spy`, `repurpose`, `script`, `copy` (tenfoldmarc)
- `copywriting`, `social-content`, `email-sequence`, `marketing-psychology`, `create-viral-content`
- `ad-creative`, `paid-ads`, `claude-ads`, `competitive-ads-extractor`
- `hook-writer-sms`, `carousel-writer-sms`, `performance-analyzer-sms`, `content-pattern-analyzer-sms`
- `hundred-million-offers`, `running-marketing-campaigns`
- MCPs: `google-analytics-mcp`, `meta-ads-mcp`, `tiktok-ads-mcp`, `mcp-google-ads`, `whatsapp-mcp`, `tiktok-trends-mcp`, `claude-seo`, `n8n-mcp`, `buffer-mcp`, `meta-ads-analyzer`

## Quando em dúvida

- **"Quero postar algo hoje, por onde começo?"** → pipeline 01 (ideia) ou pipeline 10 (se erro real rolou)
- **"Post foi bem, e agora?"** → pipeline 03 (reaproveitar) e depois pipeline 04 (se bateu critério de ad)
- **"Não sei se tá funcionando"** → pipeline 07 (analytics) + pipeline 08 (comparar com concorrentes)
- **"Cliente mandou elogio forte, uso?"** → pipeline 11 (com permissão)
- **"Quero automatizar pra parar de fazer tudo na mão"** → pipeline 09 **APENAS** se pipelines 1-8 estão estáveis

## Integração com Obsidian (vault)

Cada pipeline referencia um template em `_obsidian-setup/_templates/`. Tag padrão: `#pipeline/[nome]`. Cross-linking entre pipelines obrigatório pra ver fluxo completo.

Tags-índice úteis no Obsidian:
- `#pipeline/all` — ver todos registros de pipeline
- `#semanal` — execuções semanais
- `#quinzenal` — execuções quinzenais
- `#decisoes` — decisões acionáveis do pipeline 07
- `#diferencial-marca` — conteúdo dos pipelines 10 e 11

## Princípio norteador

> "Vulnerabilidade é mais forte que expertise performática." — Weslley Will (SOBRE-MIM.md)

Se algum pipeline começar a gerar conteúdo que soa como coach premium / infoproduto genérico / promessa impossível, **para imediatamente** e volta pro TOM-DE-MARCA. Qualquer venda feita comprometendo o tom é venda que não sustenta marca a médio prazo.
