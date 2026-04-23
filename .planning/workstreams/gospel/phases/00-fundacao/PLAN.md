# PLAN — Fase 00 Fundação (Gospel)

> Objetivo: canal vivo + 1º longform publicado + ebook na Hotmart + pipeline validado
> Período: 22-28 Abr 2026 (7 dias)
> Deliverables: 7 (ver [REQUIREMENTS.md](../../../../REQUIREMENTS.md))

---

## 📋 Tarefas atômicas (ordem de execução)

### Dia 1-2 ✅ FEITO (22-23 Abr)

- [x] Aprovar Opção E Híbrida (pivot de H27)
- [x] Configurar OAuth YouTube Studio MCP
- [x] Criar 14 arquivos base em `pgsa/` e `_obsidian-setup/`
- [x] Validar pipeline Suno → master ffmpeg
- [x] Validar Higgsfield image-to-video 10s loop
- [x] Produzir GSP-VIDEO-01 (trilha + voz + vídeo)

### Dia 3 (HOJE 23 Abr) 🔴 EM ANDAMENTO

- [ ] **Upload GSP-VIDEO-01** no YouTube (22h)
  - Pipeline: [pipelines/PIPELINE-PRODUCAO-CONTEUDO.md](../../../../../pipelines/PIPELINE-PRODUCAO-CONTEUDO.md)
  - Arquivo: `Canal-gospel- conteudo/Abril-OpcaoE/finais/2026-04-22 - Oracao Ansiedade 30min - VIDEO-FINAL.mp4`
  - Thumb: aprovada ("ENTREGA")
  - Descrição + tags: geradas
- [ ] **Criar GSP-HOTMART-01** (produto R$19,90 + link UTM) ~1h
- [ ] **Revisar GSP-EBOOK-01** draft linha-a-linha (pode ser sessão separada Claude)

### Dia 4-5 (24-25 Abr)

- [ ] **Gravar GSP-SHORT-01** Versículo do dia (Sex 19h)
- [ ] **Setup GSP-LIVE-01** OBS + Restream (Sex 21h)
  - Pipeline: [pgsa/LIVE-247-SETUP.md](../../../../../pgsa/LIVE-247-SETUP.md)
- [ ] **Batch gravar 3-4 orações** semana seguinte (Sáb 2h)

### Dia 6 (26 Abr Domingo)

- [ ] **Gravar + subir GSP-VIDEO-02** Longform 1h Provisão Salmo 23 (22h)
  - Roteiro: [pgsa/ROTEIRO-ORACAO-GUIADA-TEMPLATE.md#maio-provisao](../../../../../pgsa/ROTEIRO-ORACAO-GUIADA-TEMPLATE.md)
  - Thumb: template 06 cordeiro

### Dia 7 (27 Abr Segunda)

- [ ] **Subir GSP-VIDEO-03** 8h OBRIG Provisão (06h)
- [ ] **Subir GSP-EBOOK-01** Ansiedade live na Hotmart (final de semana)

### Dia 7 (28 Abr Terça) — GATE CHECK

- [ ] Verificar `VERIFICATION.md`
- [ ] `/gsd-audit-milestone 00-fundacao`
- [ ] Se passou → avançar pra fase 01-validacao
- [ ] Se falhou → iterar + replanejar (extender até sábado se precisar)

---

## 🔧 Skills/pipelines que vão ser usados

| Tarefa | Skill/Pipeline |
|---|---|
| Upload YouTube | `mcp__youtube-studio__youtube_upload_video` |
| Produção longform | [pipelines/PIPELINE-PRODUCAO-CONTEUDO.md](../../../../../pipelines/PIPELINE-PRODUCAO-CONTEUDO.md) |
| Masterização áudio | `ffmpeg-usage` skill |
| Live setup | [pgsa/LIVE-247-SETUP.md](../../../../../pgsa/LIVE-247-SETUP.md) |
| Produto Hotmart | Manual (navegador) |
| Descrição/tags | Skill `copywriting` |

---

## ⚠️ Riscos identificados

1. **Policy strike no 1º upload** (Higgsfield 10s loop detectado) — mitigação: Cícero-style animado (não estático)
2. **Voz de 11s pode ter CVR baixo** — mitigação: usar formato "abertura + trilha solo"; se CVR < 0,02%, gravar 5min completos no próximo
3. **Hotmart setup demorar** — mitigação: criar produto ANTES do upload (link pra pôr na descrição)
4. **Live 12h consumir muito data** — mitigação: OBS bitrate 4500-5000 kbps (não ultra)

---

## 📊 Log de execução

_(atualizar enquanto executa)_

### 2026-04-23
- [ ] ⏳ 22h: upload GSP-VIDEO-01
- [ ] ⏳ criar produto Hotmart

### 2026-04-22
- ✅ Pipeline validado (áudio + vídeo 30min montado)
- ✅ Higgsfield Cícero-style funcionou
- ✅ Voz gravada (11s, aproveitada como abertura)
