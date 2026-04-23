---
cssclasses:
  - dashboard
---

> 🏠 [[_obsidian-setup/homepage|Home]] · 📣 [[DASHBOARD-ads-performance|Ads]] · 🎯 [[DASHBOARD-funil-vendas|Funil]] · 💰 [[DASHBOARD-receita|Receita]] · 📊 **Plataformas** · 👀 [[DASHBOARD-concorrentes|Concorrentes]] · 🚀 [[DASHBOARD-pipelines|Pipelines]] · 🧠 [[DASHBOARD-skills-e-mcps|Skills & MCPs]]

# 📊 Dashboard — Plataformas

> Como cada plataforma tá performando: volume de peças, conversão pra venda, melhor formato.
> Heatmap: ⚪ 0 · 🟡 1-4 · 🟠 5-9 · 🔴 10+

---

## 🎯 Grid comparativo (últimos 30 dias)

```dataviewjs
const hoje = dv.date("today")
const ha30d = hoje.minus({ days: 30 })

const pecas = dv.pages().where(p => p.tipo === "peca-distribuida" && p.data_publicacao && dv.date(p.data_publicacao) >= ha30d)
const vendas = dv.pages().where(p => p.tipo === "venda-dm" && p.data && dv.date(p.data) >= ha30d)

const plataformas = ["IG", "TikTok", "YouTube", "Ad", "Pinterest"]

const heatmap = (n) => {
  if (n === 0) return "⚪"
  if (n <= 4) return "🟡"
  if (n <= 9) return "🟠"
  return "🔴"
}

const linhas = plataformas.map(plat => {
  const pecasPlat = pecas.where(p => (p.plataforma || "").toLowerCase() === plat.toLowerCase())
  const vendasPlat = vendas.where(v => (v.plataforma_origem || "").toLowerCase() === plat.toLowerCase())
  const receita = vendasPlat.array().reduce((s, v) => s + (Number(v.valor) || 37), 0)
  const taxa = pecasPlat.length > 0 ? ((vendasPlat.length / pecasPlat.length) * 100).toFixed(1) + "%" : "—"
  return [
    plat,
    `${heatmap(pecasPlat.length)} ${pecasPlat.length}`,
    vendasPlat.length,
    `R$${receita}`,
    taxa
  ]
})

dv.table(["Plataforma", "Peças", "Vendas", "Receita", "Conv. peça→venda"], linhas)
```

---

## 🔥 Heatmap — peças por plataforma x formato

```dataviewjs
const hoje = dv.date("today")
const ha30d = hoje.minus({ days: 30 })

const pecas = dv.pages().where(p => p.tipo === "peca-distribuida" && p.data_publicacao && dv.date(p.data_publicacao) >= ha30d)

const formatos = ["reel", "carrossel", "story", "short", "post", "video-longo"]
const plataformas = ["IG", "TikTok", "YouTube"]

const heatmap = (n) => {
  if (n === 0) return "⚪"
  if (n <= 2) return "🟡"
  if (n <= 5) return "🟠"
  return "🔴"
}

const linhas = formatos.map(f => {
  const row = [f]
  plataformas.forEach(plat => {
    const count = pecas.where(p => (p.plataforma || "").toLowerCase() === plat.toLowerCase() && (p.formato || "").toLowerCase() === f).length
    row.push(`${heatmap(count)} ${count}`)
  })
  return row
})

dv.table(["Formato ↓ / Plataforma →", ...plataformas], linhas)
```

---

## 🏆 Top peças por plataforma (por views)

```dataviewjs
const hoje = dv.date("today")
const ha60d = hoje.minus({ days: 60 })

const getViews = (p) => {
  if (!p.metricas_7d) return 0
  const m = p.metricas_7d
  if (typeof m === "object" && m.views != null) return Number(m.views) || 0
  if (typeof m === "string") {
    const match = m.match(/views[:\s]+(\d+)/i)
    return match ? Number(match[1]) : 0
  }
  return 0
}

const pecas = dv.pages().where(p => p.tipo === "peca-distribuida" && p.data_publicacao && dv.date(p.data_publicacao) >= ha60d)

const plataformas = ["IG", "TikTok", "YouTube"]
for (const plat of plataformas) {
  const top = pecas
    .where(p => (p.plataforma || "").toLowerCase() === plat.toLowerCase())
    .sort(p => getViews(p), "desc")
    .limit(5)
  if (top.length === 0) continue
  dv.header(3, `${plat === "IG" ? "📸" : plat === "TikTok" ? "🎵" : "▶️"} ${plat}`)
  dv.table(
    ["Peça", "Formato", "Hook", "Views 7d", "Data"],
    top.array().map(p => [
      p.file.link,
      p.formato || "—",
      p.hook ? p.hook.substring(0, 40) + "..." : "—",
      getViews(p) || "—",
      p.data_publicacao
    ])
  )
}
```

---

## 🧭 Pilares AEI por plataforma (30d)

```dataviewjs
const hoje = dv.date("today")
const ha30d = hoje.minus({ days: 30 })

const pecas = dv.pages().where(p => p.tipo === "peca-distribuida" && p.data_publicacao && dv.date(p.data_publicacao) >= ha30d)

const plataformas = ["IG", "TikTok", "YouTube"]
const pilares = ["autoridade", "engajamento", "influencia"]

const linhas = plataformas.map(plat => {
  const row = [plat]
  pilares.forEach(pil => {
    const count = pecas.where(p => (p.plataforma || "").toLowerCase() === plat.toLowerCase() && (p.pilar_aei || "").toLowerCase() === pil).length
    row.push(count)
  })
  row.push(pecas.where(p => (p.plataforma || "").toLowerCase() === plat.toLowerCase()).length)
  return row
})

dv.table(["Plat.", "🧠 Autoridade", "💬 Engajamento", "✨ Influência", "Total"], linhas)
dv.paragraph("_Meta AEI: 40% autoridade / 30% engajamento / 30% influência._")
```

---

## 📉 Plataformas que NÃO estão convertendo

```dataviewjs
const hoje = dv.date("today")
const ha30d = hoje.minus({ days: 30 })

const pecas = dv.pages().where(p => p.tipo === "peca-distribuida" && p.data_publicacao && dv.date(p.data_publicacao) >= ha30d)
const vendas = dv.pages().where(p => p.tipo === "venda-dm" && p.data && dv.date(p.data) >= ha30d)

const plataformas = ["IG", "TikTok", "YouTube", "Ad"]
const alertas = []

plataformas.forEach(plat => {
  const pecasPlat = pecas.where(p => (p.plataforma || "").toLowerCase() === plat.toLowerCase()).length
  const vendasPlat = vendas.where(v => (v.plataforma_origem || "").toLowerCase() === plat.toLowerCase()).length
  if (pecasPlat >= 5 && vendasPlat === 0) {
    alertas.push([`🔴 ${plat}`, pecasPlat + " peças", "0 vendas", "Revisar bio / oferta / CTA"])
  }
  if (pecasPlat >= 10 && vendasPlat > 0 && (vendasPlat / pecasPlat) < 0.05) {
    alertas.push([`🟡 ${plat}`, pecasPlat + " peças", vendasPlat + " vendas", "Taxa < 5%, otimizar CTA"])
  }
})

if (alertas.length === 0) {
  dv.paragraph("> [!success] ✅ Todas as plataformas com volume mínimo estão convertendo.")
} else {
  dv.table(["Alerta", "Peças", "Vendas", "Ação"], alertas)
}
```

---

## ⚡ Ações

- 📮 [[nova-peca-distribuida|Registrar peça publicada]]
- 📊 [[novo-snapshot-analytics|Snapshot por plataforma]]
- 🧠 Skills por plataforma:
  - **IG**: `social-content`, `create-viral-content`, `spy`
  - **TikTok**: `viral`, `repurpose`, `script`
  - **YouTube**: `script` (longform), `viral`
  - **Ads**: `ad-creative`, `paid-ads`, `claude-ads`
