---
cssclasses:
  - dashboard
---

> 🏠 [[_obsidian-setup/homepage|Home]] · 📣 **Ads** · 🎯 [[DASHBOARD-funil-vendas|Funil]] · 💰 [[DASHBOARD-receita|Receita]] · 📊 [[DASHBOARD-plataformas|Plataformas]] · 👀 [[DASHBOARD-concorrentes|Concorrentes]] · 🚀 [[DASHBOARD-pipelines|Pipelines]] · 🧠 [[DASHBOARD-skills-e-mcps|Skills & MCPs]]

# 📣 Dashboard — Performance de Ads

> Todas as campanhas com `tipo: campanha-ad`. Verde/amarelo/vermelho por ROAS.
> 🟢 ROAS > 1.5 · 🟡 1 – 1.5 · 🔴 < 1

---

## 📊 Resumo geral

```dataviewjs
const campanhas = dv.pages().where(p => p.tipo === "campanha-ad")
const ativas = campanhas.where(p => p.status === "ativa")
const pausadas = campanhas.where(p => p.status === "pausada")
const encerradas = campanhas.where(p => p.status === "encerrada")
const planejadas = campanhas.where(p => p.status === "planejada")

const totalBudget = ativas.array().reduce((s, c) => s + (Number(c.budget_diario) || 0), 0)
const cpas = ativas.array().map(c => Number(c.cpa_atual) || 0).filter(v => v > 0)
const roasArr = ativas.array().map(c => Number(c.roas) || 0).filter(v => v > 0)
const cpaMedio = cpas.length ? (cpas.reduce((s, v) => s + v, 0) / cpas.length).toFixed(2) : "—"
const roasMedio = roasArr.length ? (roasArr.reduce((s, v) => s + v, 0) / roasArr.length).toFixed(2) : "—"

dv.table(
  ["🟢 Ativas", "🟡 Planejadas", "🔴 Pausadas", "⚫ Encerradas", "💸 Budget/dia", "📉 CPA médio", "📈 ROAS médio"],
  [[ativas.length, planejadas.length, pausadas.length, encerradas.length, `R$${totalBudget.toFixed(2)}`, `R$${cpaMedio}`, roasMedio]]
)
```

---

## 🟢 Campanhas ativas (por plataforma)

```dataviewjs
const campanhas = dv.pages()
  .where(p => p.tipo === "campanha-ad" && p.status === "ativa")

const semaforo = (roas) => {
  const r = Number(roas) || 0
  if (r >= 1.5) return "🟢"
  if (r >= 1) return "🟡"
  if (r > 0) return "🔴"
  return "⚪"
}

const diasAtivo = (inicio) => {
  if (!inicio) return "—"
  const d = Math.max(1, Math.floor((dv.date("today") - dv.date(inicio)) / (1000*60*60*24)))
  return `${d}d`
}

const plataformas = ["meta", "tiktok", "google", "pinterest"]
for (const plat of plataformas) {
  const doGrupo = campanhas.where(p => (p.plataforma || "").toLowerCase() === plat)
  if (doGrupo.length === 0) continue
  dv.header(3, `${plat === "meta" ? "🔵" : plat === "tiktok" ? "⚫" : plat === "google" ? "🔴" : "🟠"} ${plat.toUpperCase()}`)
  dv.table(
    ["", "Campanha", "Budget/d", "CPA", "ROAS", "Dias"],
    doGrupo.array().map(c => [
      semaforo(c.roas),
      c.file.link,
      `R$${Number(c.budget_diario || 0).toFixed(2)}`,
      c.cpa_atual ? `R$${Number(c.cpa_atual).toFixed(2)}` : "—",
      c.roas ? Number(c.roas).toFixed(2) : "—",
      diasAtivo(c.data_inicio)
    ])
  )
}

if (campanhas.length === 0) {
  dv.paragraph("_Nenhuma campanha ativa. Use [[nova-campanha-ad]] pra criar a primeira._")
}
```

---

## 🚨 Red flags automáticas

> [!danger] Critério: CPA > R$40 por 7+ dias OU ROAS < 1 por 3+ dias

```dataviewjs
const campanhas = dv.pages().where(p => p.tipo === "campanha-ad" && p.status === "ativa")

const flags = []
campanhas.forEach(c => {
  const dias = c.data_inicio ? Math.floor((dv.date("today") - dv.date(c.data_inicio)) / (1000*60*60*24)) : 0
  const cpa = Number(c.cpa_atual) || 0
  const cpaAlvo = Number(c.cpa_alvo) || 40
  const roas = Number(c.roas) || 0

  if (cpa > cpaAlvo && dias >= 7) {
    flags.push(["🔴 CPA acima do alvo 7d+", c.file.link, `R$${cpa.toFixed(2)} (alvo R$${cpaAlvo})`, `${dias}d ativa`])
  }
  if (roas > 0 && roas < 1 && dias >= 3) {
    flags.push(["🔴 ROAS < 1 há 3d+", c.file.link, roas.toFixed(2), `${dias}d ativa`])
  }
  if (!c.data_inicio) {
    flags.push(["🟡 Sem data_inicio", c.file.link, "—", "preencher frontmatter"])
  }
})

if (flags.length === 0) {
  dv.paragraph("> [!success] ✅ Nenhuma red flag. Todas as campanhas estão dentro dos parâmetros.")
} else {
  dv.table(["Alerta", "Campanha", "Métrica", "Contexto"], flags)
}
```

---

## 📈 Top 5 campanhas (ROAS)

```dataview
TABLE WITHOUT ID
  file.link AS "Campanha",
  plataforma AS "Plat.",
  ("R$" + budget_diario) AS "Budget/d",
  ("R$" + cpa_atual) AS "CPA",
  roas AS "ROAS",
  status AS "Status"
FROM ""
WHERE tipo = "campanha-ad" AND roas != null
SORT roas DESC
LIMIT 5
```

---

## 💤 Campanhas pausadas / encerradas (últimas 10)

```dataview
TABLE WITHOUT ID
  file.link AS "Campanha",
  plataforma AS "Plat.",
  status AS "Status",
  ("R$" + cpa_atual) AS "CPA final",
  roas AS "ROAS final",
  data_fim AS "Encerrada em"
FROM ""
WHERE tipo = "campanha-ad" AND (status = "pausada" OR status = "encerrada")
SORT data_fim DESC
LIMIT 10
```

---

## ⚡ Ações

- 📣 [[nova-campanha-ad|Nova campanha]]
- 🧪 [[novo-teste-ab|Novo teste A/B de criativo]]
- 👀 [[DASHBOARD-concorrentes|Auditar ads dos concorrentes]]
- 🧠 Skills: `ad-creative`, `paid-ads`, `claude-ads`, `competitive-ads-extractor`
