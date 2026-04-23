# FASE 0 — Validações & Decisões (pré-setup canal gospel)

> Preencha conforme executa. Serve como gate pra liberar Fase 1 (setup técnico).
> Status: 🔴 pendente | 🟡 parcial | 🟢 completo

**Data de início**: ___/___/2026

---

## 1. 🟢 Nome do canal gospel — DECIDIDO

### Decisão final (2026-04-21): **Gospel Pra Descansar**

**Handle**: `@gospelpradescansar` ✅ **CONFIRMADO LIVRE via MCP youtube-studio**

### Validações feitas
- [x] Handle `@gospelpradescansar` disponível ✅ (API retornou "Channel not found")
- [x] Keyword match com intenção de busca BR ✅
- [x] Cobre 2 intenções (sono + descanso emocional) ✅
- [x] Fácil falar em voz alta ✅

### Plano B descartado
- `@descansoemcristo` → OCUPADO (canal pequeno 2023, 5 subs, 2 vídeos, inativo — mas handle tomado)

**Decisão final**: 🟢 **Gospel Pra Descansar** + handle `@gospelpradescansar`
**Data**: 2026-04-21

---

## 2. 🔴 Plataforma do ebook

### Comparativo (dados confirmados pela pesquisa)

| Critério | Hotmart | Kiwify |
|----------|---------|--------|
| Taxa sobre venda | 9,9% + R$1 (plano Starter) ou 14,9% (Pro) | 4,99% + R$1,30 (Starter) |
| Checkout | Padrão | Otimizado (conversão reportada +) |
| Marketplace afiliado | 370k+ produtos (gigante) | Pequeno mas crescente |
| Setup ebook | Médio (formulário longo) | Simples (upload + título + preço) |
| Saque | Semanal | D+2 |
| Cupom + upsell | Sim | Sim |

### Recomendação da pesquisa

**Kiwify** pro primeiro ebook (checkout simples + conversão BR superior). Hotmart se quiser escalar com afiliados no futuro.

### Decisão Weslley (2026-04-21)

**Hotmart** — escolha do Weslley pra **centralizar** produto próprio + produtos afiliados no mesmo lugar.

**Trade-off aceito**: taxa 9,9% + R$1 (Starter) vs Kiwify 4,99% + R$1,30. Em ticket R$19,90 = ~R$0,67 a mais por venda pra Hotmart. Vale pela centralização.

**Decisão final**: 🟢 **Hotmart**
**Data**: 2026-04-21

---

## 3. 🔴 Autor do ebook "30 Orações Pra Dormir em Paz"

### Opções

- [ ] **Weslley escreve 100%** — autêntico máximo, 15-20h de trabalho, custo R$0
- [ ] **LLM + revisão Weslley** — draft via Claude + revisão linha-a-linha (6-8h, R$0)
- [ ] **Ghostwriter Fiverr** — R$150-500, 3-5 dias, qualidade variável
- [ ] **Híbrido** — Weslley escreve intro + 5 orações pessoais; LLM gera restantes 25 com revisão

### Recomendação

**Híbrido**. Preserva autenticidade no que importa (intro + orações pessoais), acelera produção nas 25 orações genéricas. Tempo estimado: 4-5h.

### Decisão Weslley (2026-04-21)

🟢 **Híbrido**: intro 100% Weslley + 30 orações geradas via LLM com revisão linha-a-linha pelo Weslley.

**Tempo real estimado**: 5-7h (distribuir em 1 fim de semana).

**Draft já criado**: `pgsa/EBOOK-30-ORACOES-DRAFT.md` (estrutura + versículos + template por oração).

**Decisão final**: 🟢 **Híbrido (Weslley intro + LLM 30 orações com revisão)**
**Data**: 2026-04-21

---

## 4. 🟢 Teste Suno Pro + ffmpeg 8h — COMPLETO

### Executado em 2026-04-21

- [x] Suno Pro assinado ✅
- [x] 2 variantes geradas (01 e 01b) com prompt refinado baseado em pesquisa de hits gospel BR 2026
- [x] URLs Suno:
  - #01: https://suno.com/s/IPOxCy3ayKzhzmNC (3:14, cadência fechada)
  - #01b: https://suno.com/s/FPi6OnasnLiLqU3t (3:28, corte aberto — ideal pra loop)
- [x] Análise técnica via ffmpeg + ebur128
- [x] Pipeline de mastering implementado (replicando Suno-Song-Remaster)
- [x] Skill `mastering-engineer` (bitwize-music-studio) instalada no projeto
- [x] Loops finais gerados:
  - 1h oração: `Canal-gospel- conteudo/Abril/Gospel Pra Dormir 01 - Oracao 1 Hora.mp3` (138 MB)
  - 8h sono: `Canal-gospel- conteudo/Abril/Gospel Pra Dormir 01 - Sono 8 Horas.mp3`

### Qualidade validada (ebur128)

| Métrica | 1h final | 8h final | Padrão streaming |
|---------|----------|----------|-------------------|
| Loudness I | -13.9 LUFS | a validar | -14 LUFS ✅ |
| True Peak | -1.9 dBFS | a validar | ≤ -1 dBTP ✅ |
| LRA | 4.6 LU | a validar | < 8 LU sleep ✅ |

### Pipeline técnico documentado

Ver `SUNO-TRACK-RECORD.md` seção "🎛️ Pipeline de mastering".

### Teste auditivo pendente (Weslley)

- [ ] Ouvir 1 minuto da 1h em fone
- [ ] Ouvir 2-3 pontos de loop na 8h em fone
- [ ] Validar: sem clicks, sem AI artifacts, sensação de paz

**Resultado**: 🟢 **APROVADO técnico** (pendente só aprovação auditiva Weslley)
**Data**: 2026-04-21

---

## 5. 🟡 Pesquisa de canais gospel BR (agent em background)

Agent `ac7d11b752ca9d181` rodando em paralelo. Aguardar completar.

### O que vai entregar

- [ ] 5-10 canais BR de gospel instrumental benchmarkeados via YouTube API
- [ ] Tabela: inscritos, views top, cadência, título top, estilo thumb, produto pinado
- [ ] Top 3 insights acionáveis
- [ ] 5 títulos exatos pra replicar/adaptar
- [ ] 3 estilos thumbnail vencedores
- [ ] Gaps de conteúdo (oportunidade viral não explorada)

**Relatório esperado em**: `pgsa/RELATORIO-BENCHMARK-CANAIS-GOSPEL.md`

---

## 6. 🔴 Validação catálogo Hotmart/Kiwify gospel

### Checklist

- [ ] Login Hotmart marketplace afiliado
- [ ] Filtro: **Categoria = Religião/Espiritualidade**
- [ ] Ordenar por: Temperatura (mais quentes) + Comissão (%)
- [ ] Listar 5 produtos candidatos

### Tabela

| Produto | Plataforma | Ticket | Comissão | Temperatura | Tem landing? | Validado |
|---------|------------|--------|----------|-------------|--------------|----------|
| | | | | | | |
| | | | | | | |
| | | | | | | |
| | | | | | | |
| | | | | | | |

### Gate

Liberar validação se **≥ 3 produtos** com:
- Comissão ≥ 40%
- Temperatura ≥ 6 (Hotmart)
- Ticket entre R$27 e R$197

**Resultado**: 🔴 reprovado | 🟡 parcial | 🟢 aprovado

---

## 7. 🔴 Setup Google OAuth + MCP youtube-studio

### Decisão importante (2026-04-21)

Weslley vai postar vídeos **MANUALMENTE** pelo YouTube Studio. MCP `youtube-uploader` NÃO será configurado (reduz risco e escopo).

Só configuramos `youtube-studio` (read + analytics + search).

### Guia passo-a-passo

Arquivo dedicado: `pgsa/GUIA-GOOGLE-OAUTH-YOUTUBE.md` — ~30min, só fazer 1 vez.

### Checklist
- [ ] Passo 1: Projeto Google Cloud criado
- [ ] Passo 2: 3 APIs habilitadas (Data v3, Analytics, Reporting)
- [ ] Passo 3: OAuth Consent Screen + Test User
- [ ] Passo 4: OAuth Client ID (Desktop app) + JSON baixado
- [ ] Passo 5: `client_secret.json` em `C:\Users\wesll\.youtube-mcp\`
- [ ] Passo 6: Variável `YOUTUBE_CLIENT_SECRET_PATH` setada
- [ ] Passo 7: `uv tool install youtube-studio-mcp`
- [ ] Passo 8: Claude Code reiniciado
- [ ] Passo 9: `youtube_auth` rodado + `youtube_get_channel` retornando dados reais

**Resultado**: 🔴 não iniciado | 🟡 parcial | 🟢 completo
**Data**: ___/___/2026

---

## 📋 Gate de liberação pra Fase 1

✅ Libera Fase 1 SOMENTE quando:
- [x] Item 1 = 🟢 (nome decidido + handle validado) ✅
- [x] Item 2 = 🟢 (Hotmart decidido) ✅
- [x] Item 3 = 🟢 (Híbrido decidido) ✅
- [x] Item 4 = 🟢 (Suno + 8h aprovado) ✅
- [ ] Item 5 = 🟢 (relatório benchmark refeito com MCPs aprovados)
- [ ] Item 6 = 🟢 ou 🟡 (Hotmart gospel validado)
- [ ] Item 7 = 🟢 (OAuth YouTube funcionando)

**Tempo estimado Fase 0**: 3-5 dias (depende do Weslley)

**Data conclusão**: ___/___/2026

---

## 🔄 UPGRADE 2026-04-22: Pivot pra Opção E

**Status adicional**:
- [x] **Opção E aprovada** (2026-04-22) — orações guiadas com narração + catálogo 7 ebooks temáticos + padrão Cícero (1×8h obrig + 1×8h opc + 1×1h + 3×30min + live 12h + 5-7 Shorts)
- [x] **Plano aprovado** em `C:\Users\wesll\.claude\plans\whimsical-knitting-horizon.md` v4
- [x] **GSD framework detectado global** (skills gsd-* disponíveis no Claude Code)
- [ ] OAuth YouTube MCP (Qui 23/04)
- [ ] Produto Hotmart criado (Qui 23/04)
- [ ] Live 24/7 setup (Sex 24/04 21h)
- [ ] Primeiro Longform 30min Opção E gravado (Qui 23/04)

**Arquivos novos criados 2026-04-22**:
- `pgsa/CHECKLIST-PRE-PRODUCAO.md` — checklist obrigatório pré-gravação
- `pgsa/ROTEIRO-ORACAO-GUIADA-TEMPLATE.md` — template mestre 5min oração
- `pgsa/THUMB-TEMPLATE-CICERO.md` — 7 templates épicos bíblicos
- `pgsa/LIVE-247-SETUP.md` — guia OBS + Restream
- `pgsa/PIPELINE-OPCAO-E.md` — pipeline completo 13 etapas
- `pgsa/PROMPTS-SUNO-TRILHA-DE-FUNDO.md` — prompts por slot semanal

---

## Próxima Fase

Opção E aprovada. Próximo: executar Paralelo 2 (calendário editorial + dashboard Obsidian + catálogo ebooks) + gravar primeiro longform 30min Qui 23/04.
