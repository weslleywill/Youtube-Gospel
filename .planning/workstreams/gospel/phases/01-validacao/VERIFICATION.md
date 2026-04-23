# VERIFICATION — Fase 01 Validação (Gospel)

> Gate de saída: 500 subs + 5-10 vendas/mês + CVR DM > 3%
> Check: 02 Jun 2026 via `/gsd-audit-milestone 01-validacao`

---

## ✅ Checklist de saída (dia 35 — 02 Jun)

### Audiência

- [ ] **500 inscritos** (fonte: `youtube_analytics_overview`)
- [ ] **1+ longform com 1k+ views** (fonte: `youtube_analytics_top_videos`)
- [ ] **Watchtime acumulado ≥ 1000h** (rampup pra YPP)
- [ ] **LIVE 12h rodou 3+ vezes** (≥ avg concurrent 15)

### Monetização

- [ ] **5-10 vendas/mês** do ebook (Ansiedade + Provisão somados)
- [ ] **CVR DM → venda > 3%** (pelo menos 30% das DMs viram venda)
- [ ] **Ebook 02 Provisão live** desde 05/05
- [ ] **Receita acum ≥ R$100** líquido (5 vendas × R$17)

### Infra

- [ ] LIVE 12h setup documentado e reproduzível
- [ ] Pipeline produção rodando sem crise (semana inteira sem precisar re-fazer)

---

## 🎯 Decisão de avanço

| Métrica | Gate | Medir via |
|---|---|---|
| Subs | ≥ 500 | `youtube_analytics_overview` |
| Views top video | ≥ 1000 | `youtube_analytics_top_videos` |
| Vendas mensais | ≥ 5 | Hotmart dashboard |
| CVR DM | > 3% | Log manual DMs |
| Watchtime | ≥ 1000h | `youtube_analytics_overview` |

**Regra**: 
- **4/5 métricas OK** → avança pra fase 02 com confiança
- **3/5 OK** → avança mas define 1-2 "melhorias prioritárias" na fase 02
- **< 3/5** → BLOQUEIA avanço. Iterar cadência/copy por +3 semanas.

---

## 🔴 Se gate falhar

Cenário A — **Subs baixo (< 300)**:
- Thumb/título fracos → rodar `claude-youtube` pra iterar
- Cadência pode ser muita → considerar reduzir (mas não abaixo de 3x/sem)

Cenário B — **Vendas zero**:
- CTA ebook fraco → rodar `copywriting` skill
- Ebook não resolve dor (revisar reviews DMs) → usar `customer-research`
- Preço pode estar alto → testar R$14,90 por 2 semanas

Cenário C — **CVR DM < 1%**:
- Copy de DM impersonal → invocar `monetization-coordinator`
- Oferta pode não bater com audiência real → revalidar persona

---

## 📎 AUDIT (preenche quando fase fechar em 02/06)

_(vazio)_
