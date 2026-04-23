---
cssclasses:
  - dashboard
---

> 🏠 [[_obsidian-setup/homepage|Home]] · 📣 [[DASHBOARD-ads-performance|Ads]] · 🎯 **Funil** · 💰 [[DASHBOARD-receita|Receita]] · 📊 [[DASHBOARD-plataformas|Plataformas]] · 👀 [[DASHBOARD-concorrentes|Concorrentes]] · 🚀 [[DASHBOARD-pipelines|Pipelines]] · 🧠 [[DASHBOARD-skills-e-mcps|Skills & MCPs]]

# 🎯 Dashboard — Funil de Vendas

> Conteúdo publicado → perfil visto → DM iniciado → venda fechada.
> **Meta:** 3% de DMs viram venda. Abaixo disso = rever oferta/script de DM.

---

## 🪜 As 4 etapas (últimos 30 dias)

```dataviewjs
const hoje = dv.date("today")
const ha30d = hoje.minus({ days: 30 })

const dentro = (d) => d && dv.date(d) >= ha30d

const pecas = dv.pages().where(p => p.tipo === "peca-distribuida" && dentro(p.data_publicacao))
const vendas = dv.pages().where(p => p.tipo === "venda-dm" && dentro(p.data))

// Soma perfis visitados / DMs dos snapshots
const snapshots = dv.pages().where(p => p.tipo === "snapshot-analytics" && p.data_fim && dv.date(p.data_fim) >= ha30d)
const perfisVistos = snapshots.array().reduce((s, x) => s + (Number(x.perfis_vistos) || 0), 0)
const dmsIniciadas = snapshots.array().reduce((s, x) => s + (Number(x.dms_iniciadas) || 0), 0)

const totalPecas = pecas.length
const vendasCount = vendas.length

const taxaDmVenda = dmsIniciadas > 0 ? ((vendasCount / dmsIniciadas) * 100).toFixed(1) : "—"
const taxaPerfilDm = perfisVistos > 0 ? ((dmsIniciadas / perfisVistos) * 100).toFixed(1) : "—"

const barra = (valor, max) => {
  const pct = max > 0 ? Math.min(1, valor / max) : 0
  const preenchido = Math.round(pct * 10)
  return "█".repeat(preenchido) + "░".repeat(10 - preenchido)
}

const maxValor = Math.max(totalPecas, perfisVistos, dmsIniciadas, vendasCount, 1)

dv.table(
  ["Etapa", "Count", "Barra", "Conversão"],
  [
    ["📮 Peças publicadas", totalPecas, `\`${barra(totalPecas, maxValor)}\``, "—"],
    ["👀 Perfis visitados", perfisVistos || "—", `\`${barra(perfisVistos, maxValor)}\``, "—"],
    ["💬 DMs iniciadas", dmsIniciadas || "—", `\`${barra(dmsIniciadas, maxValor)}\``, `${taxaPerfilDm}% perfil→DM`],
    ["💰 Vendas fechadas", vendasCount, `\`${barra(vendasCount, maxValor)}\``, `${taxaDmVenda}% DM→venda`]
  ]
)

// Alerta de meta
const meta = 3.0
if (dmsIniciadas > 0) {
  const atual = parseFloat(taxaDmVenda)
  if (atual >= meta) {
    dv.paragraph(`> [!success] ✅ Taxa DM→venda: **${atual}%** (meta ${meta}%) — bate ou supera a meta.`)
  } else {
    dv.paragraph(`> [!warning] 🟡 Taxa DM→venda: **${atual}%** (meta ${meta}%) — abaixo da meta. Revisar script de DM / oferta.`)
  }
}
```

---

## 💬 Vendas por canal de DM (30 dias)

```dataviewjs
const hoje = dv.date("today")
const ha30d = hoje.minus({ days: 30 })

const vendas = dv.pages().where(p => p.tipo === "venda-dm" && p.data && dv.date(p.data) >= ha30d)

const porCanal = {}
vendas.forEach(v => {
  const canal = v.canal_dm || "não informado"
  porCanal[canal] = (porCanal[canal] || 0) + 1
})

const linhas = Object.entries(porCanal).sort((a, b) => b[1] - a[1])

if (linhas.length === 0) {
  dv.paragraph("_Nenhuma venda registrada nos últimos 30 dias._")
} else {
  dv.table(["Canal", "Vendas", "%"], linhas.map(([c, n]) => [c, n, ((n / vendas.length) * 100).toFixed(0) + "%"]))
}
```

---

## 🎣 Conteúdo que mais converteu (peças que viraram venda)

```dataview
TABLE WITHOUT ID
  file.link AS "Venda",
  plataforma_origem AS "Plat.",
  trigger_conteudo AS "Peça gatilho",
  fechou_em AS "Dias p/ fechar",
  data AS "Data"
FROM ""
WHERE tipo = "venda-dm"
SORT data DESC
LIMIT 15
```

---

## ⏱️ Tempo médio de fechamento

```dataviewjs
const vendas = dv.pages().where(p => p.tipo === "venda-dm" && p.fechou_em != null)
const dias = vendas.array().map(v => Number(v.fechou_em) || 0).filter(d => d >= 0)

if (dias.length === 0) {
  dv.paragraph("_Sem dados de `fechou_em` ainda._")
} else {
  const media = (dias.reduce((s, d) => s + d, 0) / dias.length).toFixed(1)
  const min = Math.min(...dias)
  const max = Math.max(...dias)
  dv.table(
    ["⏱️ Média", "⚡ Mais rápido", "🐢 Mais lento", "📊 Amostra"],
    [[`${media} dias`, `${min}d`, `${max}d`, `${dias.length} vendas`]]
  )
}
```

---

## 🚧 Gargalos detectados

```dataviewjs
const hoje = dv.date("today")
const ha30d = hoje.minus({ days: 30 })

const pecas = dv.pages().where(p => p.tipo === "peca-distribuida" && p.data_publicacao && dv.date(p.data_publicacao) >= ha30d)
const snapshots = dv.pages().where(p => p.tipo === "snapshot-analytics" && p.data_fim && dv.date(p.data_fim) >= ha30d)

const perfisVistos = snapshots.array().reduce((s, x) => s + (Number(x.perfis_vistos) || 0), 0)
const dms = snapshots.array().reduce((s, x) => s + (Number(x.dms_iniciadas) || 0), 0)
const vendas = dv.pages().where(p => p.tipo === "venda-dm" && p.data && dv.date(p.data) >= ha30d).length

const gargalos = []
if (pecas.length > 0 && perfisVistos === 0) gargalos.push(["🔴 Perfil invisível", "Publicando mas ninguém visita o perfil", "Testar bio / CTA final das peças"])
if (perfisVistos > 0 && dms === 0) gargalos.push(["🔴 Perfil não puxa pra DM", "Visitam mas não mandam DM", "Revisar bio / destaque / oferta visível"])
if (dms > 0 && vendas === 0) gargalos.push(["🔴 DM não fecha", "Conversa não vira venda", "Revisar script de DM / objeções"])
if (dms > 0 && vendas > 0 && (vendas/dms) < 0.03) gargalos.push(["🟡 Taxa DM→venda < 3%", `${((vendas/dms)*100).toFixed(1)}%`, "Revisar oferta / preço / urgência honesta"])

if (gargalos.length === 0) {
  dv.paragraph("> [!success] ✅ Sem gargalos claros nos últimos 30 dias.")
} else {
  dv.table(["Alerta", "Diagnóstico", "Ação sugerida"], gargalos)
}
```

---

## ⚡ Ações

- 💰 [[nova-venda-dm|Registrar venda que fechou]]
- 📊 [[novo-snapshot-analytics|Rodar snapshot semanal]]
- 📮 [[nova-peca-distribuida|Registrar peça que gerou tração]]
- 💰 [[DASHBOARD-receita|Ver receita consolidada →]]
