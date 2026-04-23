---
cssclasses:
  - dashboard
---

> 🏠 [[_obsidian-setup/homepage|Home]] · 📣 [[DASHBOARD-ads-performance|Ads]] · 🎯 [[DASHBOARD-funil-vendas|Funil]] · 💰 [[DASHBOARD-receita|Receita]] · 📊 [[DASHBOARD-plataformas|Plataformas]] · 👀 **Concorrentes** · 🚀 [[DASHBOARD-pipelines|Pipelines]] · 🧠 [[DASHBOARD-skills-e-mcps|Skills & MCPs]]

# 👀 Dashboard — Concorrentes

> Auditorias feitas com `spy` (IG) e `competitive-ads-extractor` (Ads Library).
> Foco: **achar gaps**, não copiar. O que eles não fazem que eu posso fazer com autenticidade.

---

## 📊 Resumo

```dataviewjs
const auds = dv.pages().where(p => p.tipo === "auditoria-concorrente")
const ultimos30 = auds.where(p => p.data_auditoria && dv.date(p.data_auditoria) >= dv.date("today").minus({ days: 30 }))

const concorrentes = new Set()
auds.forEach(a => { if (a.concorrente) concorrentes.add(a.concorrente) })

dv.table(
  ["👀 Auditorias totais", "📅 Últimos 30d", "🎯 Concorrentes únicos"],
  [[auds.length, ultimos30.length, concorrentes.size]]
)
```

---

## 🗓️ Timeline de auditorias

```dataview
TABLE WITHOUT ID
  file.link AS "Auditoria",
  concorrente AS "Concorrente",
  plataforma AS "Plat.",
  data_auditoria AS "Data",
  ads_ativos AS "Ads ativos"
FROM ""
WHERE tipo = "auditoria-concorrente"
SORT data_auditoria DESC
LIMIT 15
```

---

## 🎯 Gaps identificados (abertos pra explorar)

```dataviewjs
const auds = dv.pages().where(p => p.tipo === "auditoria-concorrente")

const gaps = []
auds.forEach(a => {
  const g = a.gaps_identificados
  if (!g) return
  const items = Array.isArray(g) ? g : typeof g === "string" ? g.split(/[;|·]/).map(x => x.trim()).filter(Boolean) : []
  items.forEach(item => {
    gaps.push([a.concorrente || "—", a.plataforma || "—", item, a.file.link])
  })
})

if (gaps.length === 0) {
  dv.paragraph("_Nenhum gap identificado ainda. Rode uma auditoria com [[nova-auditoria-concorrente]]._")
} else {
  dv.table(["Concorrente", "Plat.", "Gap", "Auditoria"], gaps)
}
```

---

## 🏆 Peças virais dos concorrentes (banco de ideias)

```dataviewjs
const auds = dv.pages().where(p => p.tipo === "auditoria-concorrente")

const linhas = []
auds.forEach(a => {
  const p = a.pecas_virais
  if (!p) return
  const items = Array.isArray(p) ? p : typeof p === "string" ? p.split(/[;\n]/).map(x => x.trim()).filter(Boolean) : []
  items.slice(0, 3).forEach(link => {
    linhas.push([a.concorrente || "—", a.plataforma || "—", link, a.data_auditoria || "—", a.file.link])
  })
})

if (linhas.length === 0) {
  dv.paragraph("_Sem peças virais catalogadas ainda._")
} else {
  dv.table(["Concorrente", "Plat.", "Peça", "Data", "Fonte"], linhas.slice(0, 20))
}
```

---

## 🚀 Ações nossas já decididas (backlog)

```dataview
TABLE WITHOUT ID
  concorrente AS "Concorrente",
  acao_nossa AS "Ação decidida",
  file.link AS "Auditoria",
  data_auditoria AS "Data"
FROM ""
WHERE tipo = "auditoria-concorrente" AND acao_nossa != null AND acao_nossa != ""
SORT data_auditoria DESC
LIMIT 10
```

---

## 📣 Concorrentes rodando ads (agora)

```dataview
TABLE WITHOUT ID
  concorrente AS "Concorrente",
  plataforma AS "Plat.",
  ads_ativos AS "# Ads",
  file.link AS "Auditoria",
  data_auditoria AS "Última check"
FROM ""
WHERE tipo = "auditoria-concorrente" AND ads_ativos > 0
SORT ads_ativos DESC
LIMIT 10
```

---

## ⚡ Ações

- 👀 [[nova-auditoria-concorrente|Rodar nova auditoria]]
- 🧠 Skills:
  - `spy` — IG: acha virais + extrai hooks (precisa Apify + yt-dlp + Whisper)
  - `competitive-ads-extractor` — scrape de ads + análise de gaps
