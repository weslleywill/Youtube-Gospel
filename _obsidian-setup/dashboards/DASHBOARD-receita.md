---
cssclasses:
  - dashboard
---

> 🏠 [[_obsidian-setup/homepage|Home]] · 📣 [[DASHBOARD-ads-performance|Ads]] · 🎯 [[DASHBOARD-funil-vendas|Funil]] · 💰 **Receita** · 📊 [[DASHBOARD-plataformas|Plataformas]] · 👀 [[DASHBOARD-concorrentes|Concorrentes]] · 🚀 [[DASHBOARD-pipelines|Pipelines]] · 🧠 [[DASHBOARD-skills-e-mcps|Skills & MCPs]]

# 💰 Dashboard — Receita

> Vendas do ebook **O Treino Que Ninguém Vê** (R$37). Fonte: `tipo: venda-dm` no frontmatter.
> MRR projetado = receita média × frequência. ROAS global = receita / custo de ads.

---

## 📊 Snapshot

```dataviewjs
const hoje = dv.date("today")
const inicioMes = dv.date(hoje.toFormat("yyyy-MM") + "-01")
const ha7d = hoje.minus({ days: 7 })
const ha30d = hoje.minus({ days: 30 })

const todasVendas = dv.pages().where(p => p.tipo === "venda-dm" && p.data)

const somar = (arr) => arr.array().reduce((s, v) => s + (Number(v.valor) || 37), 0)

const receitaHoje = somar(todasVendas.where(p => dv.date(p.data).toFormat("yyyy-MM-dd") === hoje.toFormat("yyyy-MM-dd")))
const receita7d = somar(todasVendas.where(p => dv.date(p.data) >= ha7d))
const receita30d = somar(todasVendas.where(p => dv.date(p.data) >= ha30d))
const receitaMes = somar(todasVendas.where(p => dv.date(p.data) >= inicioMes))
const receitaTotal = somar(todasVendas)

dv.table(
  ["📅 Hoje", "📅 7 dias", "📅 30 dias", "📅 Mês atual", "💰 Total histórico"],
  [[`R$${receitaHoje}`, `R$${receita7d}`, `R$${receita30d}`, `R$${receitaMes}`, `R$${receitaTotal}`]]
)

const vendasMes = todasVendas.where(p => dv.date(p.data) >= inicioMes).length
dv.paragraph(`🛒 **${vendasMes} vendas** no mês atual · ${todasVendas.length} vendas históricas`)
```

---

## 📅 Receita diária (últimos 14 dias)

```dataviewjs
const hoje = dv.date("today")
const ha14d = hoje.minus({ days: 13 })

const vendas = dv.pages().where(p => p.tipo === "venda-dm" && p.data && dv.date(p.data) >= ha14d)

const porDia = {}
for (let i = 0; i < 14; i++) {
  const d = ha14d.plus({ days: i }).toFormat("yyyy-MM-dd")
  porDia[d] = 0
}
vendas.forEach(v => {
  const d = dv.date(v.data).toFormat("yyyy-MM-dd")
  if (porDia[d] != null) porDia[d] += Number(v.valor) || 37
})

const max = Math.max(...Object.values(porDia), 37)
const barra = (valor) => {
  if (valor === 0) return "░░░░░░░░░░"
  const pct = valor / max
  const preenchido = Math.max(1, Math.round(pct * 10))
  return "█".repeat(preenchido) + "░".repeat(10 - preenchido)
}

const linhas = Object.entries(porDia).map(([d, v]) => {
  const dia = dv.date(d).toFormat("EEE dd/MM")
  return [dia, `\`${barra(v)}\``, v > 0 ? `R$${v}` : "—"]
})

dv.table(["Dia", "Visual", "Receita"], linhas)
```

---

## 📈 Receita mensal (ano corrente)

```dataviewjs
const ano = dv.date("today").year
const vendas = dv.pages().where(p => p.tipo === "venda-dm" && p.data && dv.date(p.data).year === ano)

const porMes = {}
for (let m = 1; m <= 12; m++) {
  porMes[m] = { receita: 0, count: 0 }
}
vendas.forEach(v => {
  const m = dv.date(v.data).month
  porMes[m].receita += Number(v.valor) || 37
  porMes[m].count += 1
})

const meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"]
const max = Math.max(...Object.values(porMes).map(x => x.receita), 37)
const barra = (valor) => {
  if (valor === 0) return "░░░░░░░░░░░░"
  const pct = valor / max
  const preenchido = Math.max(1, Math.round(pct * 12))
  return "█".repeat(preenchido) + "░".repeat(12 - preenchido)
}

const linhas = meses.map((nome, i) => {
  const m = i + 1
  const x = porMes[m]
  return [nome, x.count, `\`${barra(x.receita)}\``, x.receita > 0 ? `R$${x.receita}` : "—"]
})

dv.table(["Mês", "Vendas", "Visual", "Receita"], linhas)
```

---

## 🎯 MRR projetado

```dataviewjs
const hoje = dv.date("today")
const ha30d = hoje.minus({ days: 30 })
const vendas30d = dv.pages().where(p => p.tipo === "venda-dm" && p.data && dv.date(p.data) >= ha30d)

const receita30d = vendas30d.array().reduce((s, v) => s + (Number(v.valor) || 37), 0)
const count = vendas30d.length
const mediaDiaria = (receita30d / 30).toFixed(2)
const projecaoMes = (mediaDiaria * 30).toFixed(0)
const projecaoAno = (mediaDiaria * 365).toFixed(0)

dv.table(
  ["📅 Últimos 30d", "🛒 Vendas", "📊 Média/dia", "📈 Projeção mês", "📈 Projeção ano"],
  [[`R$${receita30d}`, count, `R$${mediaDiaria}`, `R$${projecaoMes}`, `R$${projecaoAno}`]]
)

dv.paragraph(`> [!info] 💡 Projeção linear baseada em ${count} vendas dos últimos 30 dias. Se 0, o dashboard ainda tá esperando a primeira venda — vai acontecer.`)
```

---

## ⚖️ Receita vs Ads (ROAS global)

```dataviewjs
const hoje = dv.date("today")
const ha30d = hoje.minus({ days: 30 })

const vendas = dv.pages().where(p => p.tipo === "venda-dm" && p.data && dv.date(p.data) >= ha30d)
const receita = vendas.array().reduce((s, v) => s + (Number(v.valor) || 37), 0)

const campanhas = dv.pages().where(p => p.tipo === "campanha-ad" && p.status !== "planejada")
let custoAds = 0
campanhas.forEach(c => {
  const inicio = c.data_inicio ? dv.date(c.data_inicio) : null
  const fim = c.data_fim ? dv.date(c.data_fim) : hoje
  if (!inicio) return
  const inicioReal = inicio < ha30d ? ha30d : inicio
  const fimReal = fim > hoje ? hoje : fim
  const dias = Math.max(0, Math.floor((fimReal - inicioReal) / (1000*60*60*24)))
  custoAds += (Number(c.budget_diario) || 0) * dias
})

const roas = custoAds > 0 ? (receita / custoAds).toFixed(2) : "—"
const lucro = receita - custoAds
const sinal = lucro >= 0 ? "🟢" : "🔴"

dv.table(
  ["💰 Receita 30d", "💸 Custo Ads 30d", `${sinal} Lucro`, "🎯 ROAS"],
  [[`R$${receita.toFixed(2)}`, `R$${custoAds.toFixed(2)}`, `R$${lucro.toFixed(2)}`, roas]]
)
```

---

## 🏆 Top 10 vendas mais recentes

```dataview
TABLE WITHOUT ID
  file.link AS "Venda",
  data AS "Data",
  plataforma_origem AS "Origem",
  canal_dm AS "Canal",
  ("R$" + valor) AS "Valor",
  fechou_em AS "Fechou em"
FROM ""
WHERE tipo = "venda-dm"
SORT data DESC
LIMIT 10
```

---

## ⚡ Ações

- 💰 [[nova-venda-dm|Registrar venda]]
- 📊 [[novo-snapshot-analytics|Snapshot do mês]]
- 🎯 [[DASHBOARD-funil-vendas|Ver funil completo →]]
- 📣 [[DASHBOARD-ads-performance|Ver custo ads →]]
