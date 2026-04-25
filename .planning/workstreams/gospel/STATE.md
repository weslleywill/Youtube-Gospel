# STATE Gospel — workstream gospel

> Estado específico do workstream. O `STATE.md` master agrega isso.

---

## 📅 2026-04-24

**Fase atual**: 00-fundacao
**Dias corridos nessa fase**: 3 de 7 (começou 22/04)
**Progresso de fase**: ~30% (canal vivo, pipeline validado, **1º longform PUBLICADO**)

---

## ✅ Entregue até agora

- Canal criado + branding definido
- Opção E Híbrida aprovada (pivot de H27)
- 14 arquivos operacionais criados em `pgsa/`
- Dashboard Obsidian montado
- Dashboard auto-update hook instalado (PostToolUse → `.claude/hooks/update-dashboard.py`) — todo roteiro novo em `pgsa/roteiros/` adiciona linha automaticamente
- OAuth YouTube Studio MCP funcional
- Pipeline Suno → master ffmpeg validado (ver [pgsa/SUNO-CONFIGURACOES-PADRAO.md](../../../pgsa/SUNO-CONFIGURACOES-PADRAO.md))
- Higgsfield image-to-video validado (Cícero-style)
- 1º longform 30min Ansiedade: voz + trilha + vídeo MP4 montado
- Roteiro #02 Coração Cansado 30min pronto: `pgsa/roteiros/2026-04-23-oracao-coracao-cansado-30min.md` — Suno por campos + prompt imagem 6-component + Higgsfield + metadata completo

---

## ✅ Entregue na fase atual

- [x] GSP-VIDEO-04 "Coração Cansado" 30min PUBLICADO (24/04)

## 🔴 Pendente na fase atual

- [ ] 🎯 **HOJE**: GSP-SHORT-01 (Versículo do dia Sex 24/04 19h)
- [ ] **HOJE 21h**: Setup GSP-LIVE-01 (OBS + Restream) — pode pular se Short atrasar
- [ ] Criar GSP-HOTMART-01 (produto Hotmart + link UTM) — hoje OU sábado
- [ ] Finalizar GSP-EBOOK-01 (revisar draft + PDF export)
- [ ] Gravar GSP-VIDEO-02 (Longform 1h Provisão Dom 26/04)
- [ ] Produzir GSP-VIDEO-03 (8h OBRIG Provisão Seg 27/04 06h)

---

## 🚦 Gate da fase 00

Ver [phases/00-fundacao/VERIFICATION.md](phases/00-fundacao/VERIFICATION.md)

**Dia 7 (28/04)** — checks:
- [ ] 3 longforms publicados (VIDEO-01, 02, 03)
- [ ] Ebook live Hotmart + UTM
- [ ] Canal sem strike
- [ ] Views total > 2k?
- [ ] Live avg concurrent > 20?

---

## ⚠️ Red flags hoje

Nenhum por enquanto. Monitorar:
- Policy strike no 1º upload (Higgsfield loop) — se acontecer, pivotar pra voz mais longa
- Views baixas (<50 no vídeo 1 em 48h) — sinal que thumb/título precisa iterar
- Voz de 11s pode quebrar CVR ebook — pronto pra gravar 5min completos se precisar

---

## 🔗 Próxima revisão automática

Revisar STATE Gospel **todo dia útil às 9h** (quando abrir Claude Code).
Se > 3 dias sem update → `/gsd-progress` força.
