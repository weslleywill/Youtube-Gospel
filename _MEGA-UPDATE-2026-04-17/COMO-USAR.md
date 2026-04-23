# COMO USAR — Guia prático pós-update

> Se você tá com pressa: leia só a **Primeira hora** e o **Primeiro dia**.

## ⚡ Primeira hora (40 min)

### 1. Abrir o Obsidian (10 min)
- Abrir Obsidian → "Open folder as vault" → selecionar a pasta `06-distribuicao-e-monetização`
- Instalar os 3 plugins críticos: **Dataview**, **Templater**, **QuickAdd**
- (Opcional) Instalar **Minimal Theme**, **Iconize**, **Homepage**, **Style Settings**
- Configurar:
  - Templater → "Template folder location" = `_obsidian-setup/_templates/`
  - QuickAdd → criar 6 macros apontando pros 6 templates
  - Homepage → apontar pra `_obsidian-setup/homepage.md`
- Colar o CSS snippet (`_obsidian-setup/config/CSS-SNIPPET.md`) em `.obsidian/snippets/dashboard.css` e ativar em Settings

### 2. Testar 1 pipeline (15 min)
Rodar o mais simples primeiro:

```
/viral
```
Esse comando invoca PIPELINE-VIRAL-RESEARCH. Vai te pedir nicho, audience, tópicos. Responde com 10 ideias de reel.

**Escolhe 1 ideia** pra gravar amanhã.

### 3. Registrar no Obsidian (5 min)
No Obsidian, Ctrl+P → "QuickAdd: nova-peca-distribuida". Preenche com a ideia escolhida (status `rascunho`).

### 4. Ler BLUEPRINT-MONETIZACAO.md (10 min)
Entender o roadmap de 4 fases. Você tá na **Fase 0 (Fundação)**. Meta: 3 vídeos no ar em 1 semana.

## 📅 Primeiro dia (2h)

Depois da primeira hora:

1. **Gravar 1 vídeo** (1h) — pode ser celular, iluminação natural. Não precisa de produção.
2. **Rodar** `/repurpose` no vídeo → gera versão YT Short + TikTok. PIPELINE-REAPROVEITAMENTO.
3. **Publicar** manualmente (Obsidian não publica — você faz o upload).
4. **Registrar no Obsidian** — atualizar o template da peça com `status: publicado` e `metricas_7d` (preenche daqui a 7 dias).

## 🗓️ Primeira semana

Meta: 3 vídeos no ar.

Cadência sugerida:
- **Seg**: `/viral` → escolher ideia → `/script`
- **Ter**: gravar
- **Qua**: publicar + `/repurpose`
- **Qui**: `/viral` → ideia nova → `/script`
- **Sex**: gravar
- **Sáb**: publicar + `/repurpose`
- **Dom**: descanso (ou agendar semana seguinte)

Depois do 3º vídeo, **rodar** `/spy` com 3-5 concorrentes seus. PIPELINE-COMPETITIVE-INTEL.

## 🚀 Pra produzir conteúdo consistente

Ordem dos pipelines (roda nessa sequência):

```
1. VIRAL-RESEARCH      → ideia
2. PRODUCAO-CONTEUDO   → roteiro
3. REAPROVEITAMENTO    → 3 versões (IG + YT + TT)
   (publicar manualmente)
4. (após 7 dias) ANALYTICS → medir
5. ORGANICO-TO-PAGO    → se alguma peça bombar, virar ad
```

## 💰 Pra lançar primeiro ad (depois de 30 dias orgânico)

Gates antes de pagar por ad (ver BLUEPRINT):
- [ ] Publicando 3x/semana há 2 semanas
- [ ] Pelo menos 1 peça com >1000 views orgânicos
- [ ] Pelo menos 1 pedido de info via DM
- [ ] Ebook finalizado em Hotmart (pasta 05)

Se tudo ✅:

```
1. Rodar PIPELINE-ORGANICO-TO-PAGO (escolher peça campeã)
2. Rodar PIPELINE-ADS-MANAGEMENT (Meta R$30/dia, CPA alvo < R$30)
3. Configurar MCP pipeboard-meta-ads (precisa token)
4. Monitorar diariamente via DASHBOARD-ads-performance
```

## 📊 Pra medir performance

Semanalmente:

```
/standup                         (cowork-session skill)
→ gera report de sessão
rodar PIPELINE-ANALYTICS
→ puxa GA4 + Meta Ads + performance orgânica
preencher template novo-snapshot-analytics (Obsidian)
→ alimenta DASHBOARD-receita
```

## 🎯 Pra resolver dúvidas sobre qual skill usar

Sempre consultar primeiro:

```
E:/Claude Code/ecossistema-personal-de-sucesso/06-distribuicao-e-monetização/WHEN-TO-USE-WHAT.md
```

Ou pedir pro Claude: "qual skill eu uso pra X?" — ele vai consultar o mapa.

Se o pedido for vago tipo "me ajuda a vender mais", o agent `monetization-coordinator` entra em ação.

## 🤖 Pra automação avançada (fase 3)

Só depois de 2-3 meses consistente:

1. Instalar n8n (self-host ou cloud)
2. Configurar MCP n8n (precisa URL + API key)
3. Rodar PIPELINE-AUTONOMO-FULL
4. Criar workflows n8n conectando: scraping IG → Claude gera → buffer agenda → Hotmart webhook → WhatsApp follow-up

## 📝 Pra qualquer coisa pedir ao Claude

Exemplos de invocação certa:

- ✅ "me dá 10 ideias de reel sobre remada" → dispara PIPELINE-VIRAL-RESEARCH
- ✅ "escreve 3 variações de ad pro ebook" → dispara PIPELINE-ADS-MANAGEMENT
- ✅ "como tá minha conversão de DM?" → dispara PIPELINE-ANALYTICS
- ❌ "escreve um post" (muito vago) → pergunta "qual plataforma? qual pilar AEI?"

## 🔐 O que NÃO fazer

- ❌ Mexer na pasta `02-estrategia-conteudo/` (sagrada)
- ❌ Mexer em `dashboard-skills/` (deprecado)
- ❌ Escalar budget de ads sem CPA < R$30 por 2 semanas (BLUEPRINT gate)
- ❌ Subir ad de produto ainda não no Hotmart
- ❌ Inventar depoimento de cliente (PIPELINE-PROVA-SOCIAL-UGC exige permissão)
- ❌ Usar palavras banidas do TOM-DE-MARCA ("garantido", "revolucionário", etc.)

## 🆘 Travou? Onde achar info

- Qual skill/pipeline usar → `WHEN-TO-USE-WHAT.md`
- Como rodar um pipeline → `pipelines/PIPELINE-*.md`
- Plugins Obsidian → `_obsidian-setup/config/PLUGINS-OBSIDIAN.md`
- Quanto cobrar / roadmap → `BLUEPRINT-MONETIZACAO.md`
- Dia a dia → `CHECKLIST-30-60-90.md`
- O que mudou no sistema → `CHANGELOG.md`
- Por que não funciona / tem bug → abrir issue... brincadeira, me chama no chat.

## 🧭 Resumo do fluxo do dia

```
Manhã:  /viral → escolher ideia → /script
Tarde:  gravar
Noite:  publicar + /repurpose → registrar no Obsidian
```

Simples. Repetível. Mensurável.
