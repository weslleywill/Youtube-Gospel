---
cssclasses:
  - dashboard
---

> 🏠 [[_obsidian-setup/homepage|Home]] · 📣 [[DASHBOARD-ads-performance|Ads]] · 🎯 [[DASHBOARD-funil-vendas|Funil]] · 💰 [[DASHBOARD-receita|Receita]] · 📊 [[DASHBOARD-plataformas|Plataformas]] · 👀 [[DASHBOARD-concorrentes|Concorrentes]] · 🚀 **Pipelines** · 🧠 [[DASHBOARD-skills-e-mcps|Skills & MCPs]]

# 🚀 Dashboard — Pipelines de Distribuição & Monetização

> Mapa dos 12 pipelines desta fase. Cada um é um fluxo reusável com input → skills → output.

---

## 🗺️ Mapa dos pipelines

### 📮 Distribuição orgânica

- **[[PIPELINE-REPURPOSING|Repurposing 1→3]]** — 1 peça vira IG Reel + YT Short + TikTok
  - Skills: `repurpose`, `social-content`, `create-viral-content`
- **[[PIPELINE-IG-DIARIO|Instagram diário]]** — planejamento e publicação diária no IG
  - Skills: `social-content`, `hook-writer-sms`, `carousel-writer-sms`
- **[[PIPELINE-TIKTOK|TikTok adaptação]]** — roteiro adaptado pro feed TikTok (hook nativo)
  - Skills: `viral`, `script`
- **[[PIPELINE-YOUTUBE-SHORTS|YouTube Shorts]]** — Short derivado do Reel, tags e título otimizado
  - Skills: `script`, `create-viral-content`

### 📣 Ads pagos

- **[[PIPELINE-ADS-META|Meta Ads]]** — criativo + audience + teste A/B no Meta
  - Skills: `ad-creative`, `paid-ads`, `claude-ads` (ads-meta)
- **[[PIPELINE-ADS-TIKTOK|TikTok Ads]]** — criativo UGC pra TikTok Ads
  - Skills: `ad-creative`, `claude-ads` (ads-tiktok)
- **[[PIPELINE-ADS-GOOGLE|Google Ads]]** — search/youtube ads
  - Skills: `claude-ads` (ads-google)
- **[[PIPELINE-ADS-AUDIT|Auditoria semanal de ads]]** — review de campanhas ativas
  - Skills: `claude-ads` (ads-audit, ads-score)

### 💰 Monetização & funil

- **[[PIPELINE-DM-VENDA|DM → Venda]]** — script de DM, resposta a objeção, fechamento
  - Skills: `copywriting`, `copy`, `marketing-psychology`
- **[[PIPELINE-EBOOK-LAUNCH|Launch de ebook]]** — sequência de peças pro lançamento do ebook
  - Skills: `email-sequence`, `copywriting`, `hundred-million-offers`

### 👀 Inteligência & análise

- **[[PIPELINE-SPY-CONCORRENTE|Spy de concorrente]]** — scrape + análise de gap
  - Skills: `spy`, `competitive-ads-extractor`, `content-pattern-analyzer-sms`
- **[[PIPELINE-ANALYTICS-SEMANAL|Analytics semanal]]** — snapshot + decisão
  - Skills: `performance-analyzer-sms`

---

## 📊 Uso esta semana

```dataviewjs
const hoje = dv.date("today")
const inicioSemana = hoje.startOf("week")

// Contador por "pipeline" tag no frontmatter (ou por tipo como proxy)
const registrosSemana = dv.pages()
  .where(p => p.data || p.data_publicacao || p.data_auditoria || p.data_inicio)
  .where(p => {
    const dt = p.data || p.data_publicacao || p.data_auditoria || p.data_inicio
    return dt && dv.date(dt) >= inicioSemana
  })

const porTipo = {}
registrosSemana.forEach(r => {
  const t = r.tipo || "outro"
  porTipo[t] = (porTipo[t] || 0) + 1
})

const mapaTipoPipeline = {
  "peca-distribuida": "Distribuição orgânica",
  "campanha-ad": "Ads",
  "teste-ab": "Teste A/B de ads",
  "venda-dm": "DM → Venda",
  "auditoria-concorrente": "Spy de concorrente",
  "snapshot-analytics": "Analytics semanal"
}

const linhas = Object.entries(porTipo).map(([t, n]) => [mapaTipoPipeline[t] || t, n])

if (linhas.length === 0) {
  dv.paragraph("_Nenhum pipeline rodou essa semana ainda._")
} else {
  dv.table(["Pipeline (proxy via `tipo`)", "Registros"], linhas)
}
```

---

## 🧭 Fluxo recomendado (semanal)

```
Segunda       → PIPELINE-ANALYTICS-SEMANAL (snapshot)
Seg/Ter       → PIPELINE-SPY-CONCORRENTE (1 concorrente/semana)
Ter-Sex       → PIPELINE-REPURPOSING (produção) + PIPELINE-IG-DIARIO
Sex           → PIPELINE-ADS-AUDIT (se tiver campanhas rodando)
Todo dia      → PIPELINE-DM-VENDA (checar caixa DM e responder)
Quando tiver  → PIPELINE-EBOOK-LAUNCH (só em eventos/lançamentos)
```

---

## 🧠 Status dos pipelines

```dataviewjs
const hoje = dv.date("today")
const ha7d = hoje.minus({ days: 7 })

const tipos = [
  { nome: "Distribuição (peças)", filtro: p => p.tipo === "peca-distribuida", data: "data_publicacao" },
  { nome: "Ads (campanhas ativas)", filtro: p => p.tipo === "campanha-ad" && p.status === "ativa", data: "data_inicio" },
  { nome: "Testes A/B", filtro: p => p.tipo === "teste-ab", data: "data_inicio" },
  { nome: "DM → Venda", filtro: p => p.tipo === "venda-dm", data: "data" },
  { nome: "Spy concorrente", filtro: p => p.tipo === "auditoria-concorrente", data: "data_auditoria" },
  { nome: "Analytics", filtro: p => p.tipo === "snapshot-analytics", data: "data_fim" }
]

const linhas = tipos.map(t => {
  const todos = dv.pages().where(t.filtro)
  const recentes = todos.where(p => p[t.data] && dv.date(p[t.data]) >= ha7d).length
  const status = recentes > 0 ? "🟢 ativo" : todos.length > 0 ? "🟡 parado 7d+" : "⚪ zero registros"
  return [t.nome, todos.length, recentes, status]
})

dv.table(["Pipeline", "Total", "Últ. 7d", "Status"], linhas)
```

---

## ⚡ Ações

- 🔧 Pra executar um pipeline: pergunte ao Claude "rode o pipeline X"
- 📝 Criar o arquivo `PIPELINE-X.md` na raiz do projeto (ou `/pipelines/`) se ainda não existe
- 🧠 [[DASHBOARD-skills-e-mcps|Ver todas skills disponíveis →]]
