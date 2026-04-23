# VERIFICATION — Fase 00 Fundação (Gospel)

> Gate de saída OBJETIVO. Rodar `/gsd-audit-milestone 00-fundacao` no dia 28/04.
> Se ≥ 5/7 = OK avançar. Se < 5/7 = iterar + replanejar.

---

## ✅ Checklist de saída (dia 7 — 28/04/2026)

### Deliverables obrigatórios

- [ ] **GSP-VIDEO-01** (Longform 30min Ansiedade) publicado no YouTube
- [ ] **GSP-VIDEO-02** (Longform 1h Salmo 23 Provisão) publicado
- [ ] **GSP-VIDEO-03** (Longform 8h OBRIG Provisão) publicado
- [ ] **GSP-EBOOK-01** (30 Orações Pra Dormir em Paz) live na Hotmart com link UTM funcional
- [ ] **Canal sem strike** de policy (confirmar via YouTube Studio)

### Métricas mínimas

- [ ] **Views total acumuladas > 2k** (checar via `youtube_analytics_overview`)
- [ ] **Live 12h avg concurrent > 20** (se GSP-LIVE-01 rodou Sex)

### Infra

- [x] Pipeline Suno → master → extend → mix → vídeo validado
- [x] Higgsfield loop passa na policy (no strike no teste)
- [x] OAuth YouTube funcional
- [x] Dashboard Obsidian atualizado

---

## 🎯 Decisão de avanço

| Check | Peso | Passo? |
|---|---|---|
| 3 longforms publicados | CRÍTICO | — |
| Ebook live + UTM | CRÍTICO | — |
| Canal sem strike | CRÍTICO | — |
| Views > 2k | Forte | — |
| Live avg > 20 | Forte | — |
| Pipeline infra ok | CRÍTICO | ✅ |

**Regra**: 3 CRÍTICOS falham = BLOQUEIA avanço, iterar.
**Se 2 CRÍTICOS OK + 1 FORTE OK** = pode avançar com ressalva.
**Se tudo OK** = avança + abre [phases/01-validacao/](../01-validacao/).

---

## 🔴 Se gate falhar

Cenário A — **Views < 2k mas tudo publicado**: sinal de thumb/título fracos. 
- Invocar skill `create-viral-content` + `claude-youtube` pra iterar
- Rodar A/B em 2 thumbnails novas
- NÃO avançar pra fase 01 ainda, esperar +3 dias

Cenário B — **Strike de policy**: PÁRA TUDO.
- Remover vídeo strikado
- Pivotar narração pra 5min+ completos (não 11s)
- Revisar Higgsfield (talvez clipe muito curto/estático)
- Escalar fitness em paralelo enquanto gospel está em pause

Cenário C — **Ebook não live**: menor gravidade.
- Prioridade máxima fim de semana
- NÃO bloqueia avanço técnico, mas bloqueia monetização fase 01

---

## 📎 Decisão anterior + AUDIT (preenche quando fase fechar)

_(vazio — será preenchido em 28/04 com o resultado do `/gsd-audit-milestone`)_
