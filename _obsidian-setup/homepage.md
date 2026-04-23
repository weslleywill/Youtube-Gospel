---
cssclasses:
  - dashboard
  - homepage
---

> 🏠 **Home** · 📣 [[DASHBOARD-ads-performance|Ads]] · 🎯 [[DASHBOARD-funil-vendas|Funil]] · 💰 [[DASHBOARD-receita|Receita]] · 📊 [[DASHBOARD-plataformas|Plataformas]] · 👀 [[DASHBOARD-concorrentes|Concorrentes]] · 🚀 [[DASHBOARD-pipelines|Pipelines]] · 🧠 [[DASHBOARD-skills-e-mcps|Skills & MCPs]]

# 🚀 Distribuição & Monetização — Central

> Fase 5 de 5. Conteúdo já criado nas fases anteriores — aqui adapta, publica, roda ads e conta o dinheiro.
>
> **Produto ativo:** _O Treino Que Ninguém Vê_ — ebook R$37 · **Vendas acumuladas:** conferir [[DASHBOARD-receita]]

---

## 📊 Snapshot do mês atual

```dataviewjs
const hoje = dv.date("today")
const primeiroDia = dv.date(hoje.toFormat("yyyy-MM") + "-01")
const ultimoDia = primeiroDia.endOf("month")

const dentroDoMes = (data) => {
  if (!data) return false
  const d = dv.date(data)
  return d >= primeiroDia && d <= ultimoDia
}

const vendas = dv.pages().where(p => p.tipo === "venda-dm" && dentroDoMes(p.data))
const pecas = dv.pages().where(p => p.tipo === "peca-distribuida" && dentroDoMes(p.data_publicacao))
const campanhas = dv.pages().where(p => p.tipo === "campanha-ad" && p.status === "ativa")
const testes = dv.pages().where(p => p.tipo === "teste-ab" && (!p.resultado || p.resultado === ""))

const receita = vendas.array().reduce((s, v) => s + (Number(v.valor) || 37), 0)
const custoAds = campanhas.array().reduce((s, c) => {
  const dias = c.data_inicio ? Math.max(1, Math.floor((dv.date("today") - dv.date(c.data_inicio)) / (1000*60*60*24))) : 1
  return s + (Number(c.budget_diario) || 0) * dias
}, 0)
const roasGlobal = custoAds > 0 ? (receita / custoAds).toFixed(2) : "—"

dv.table(
  ["💰 Receita mês", "🛒 Vendas", "📮 Peças publicadas", "📣 Campanhas ativas", "🧪 Testes A/B", "🎯 ROAS global"],
  [[`R$${receita}`, vendas.length, pecas.length, campanhas.length, testes.length, roasGlobal]]
)
```

---

## 🧭 Navegação principal

> [!tip] 📣 Performance de Ads
> CPA, ROAS, CTR por plataforma. Alertas visuais por campanha.
> [[DASHBOARD-ads-performance|Abrir dashboard →]]

> [!tip] 🎯 Funil de Vendas
> Conteúdo → perfil visto → DM iniciado → venda fechada. Meta 3% DM→venda.
> [[DASHBOARD-funil-vendas|Abrir dashboard →]]

> [!tip] 💰 Receita
> Vendas diárias/semanais/mensais do ebook R$37. MRR projetado vs custo de ads.
> [[DASHBOARD-receita|Abrir dashboard →]]

> [!tip] 📊 Plataformas
> Grid IG vs TikTok vs YouTube vs Ads. Heatmap de volume e conversão.
> [[DASHBOARD-plataformas|Abrir dashboard →]]

> [!tip] 👀 Concorrentes
> Auditorias de `spy` + `competitive-ads-extractor`. Gaps pra explorar.
> [[DASHBOARD-concorrentes|Abrir dashboard →]]

> [!tip] 🚀 Pipelines
> Mapa visual dos 12 pipelines de distribuição + uso semanal.
> [[DASHBOARD-pipelines|Abrir dashboard →]]

> [!tip] 🧠 Skills & MCPs
> 14 skills locais + MCPs ativos. Quando usar cada uma.
> [[DASHBOARD-skills-e-mcps|Abrir dashboard →]]

---

## ⚡ Ações rápidas

> Use Ctrl+P → QuickAdd pra disparar o template certo.

- 💰 [[nova-venda-dm|Registrar nova venda por DM]]
- 📣 [[nova-campanha-ad|Criar nova campanha de ads]]
- 🧪 [[novo-teste-ab|Criar novo teste A/B]]
- 📮 [[nova-peca-distribuida|Registrar peça distribuída]]
- 📊 [[novo-snapshot-analytics|Snapshot de analytics]]
- 👀 [[nova-auditoria-concorrente|Nova auditoria de concorrente]]

---

## 🎯 Foco da semana

```dataviewjs
const hoje = dv.date("today")
const inicioSemana = hoje.startOf("week")
const fimSemana = hoje.endOf("week")

const emSemana = (d) => {
  if (!d) return false
  const x = dv.date(d)
  return x >= inicioSemana && x <= fimSemana
}

const vendasSemana = dv.pages().where(p => p.tipo === "venda-dm" && emSemana(p.data))
const pecasSemana = dv.pages().where(p => p.tipo === "peca-distribuida" && emSemana(p.data_publicacao))
const testesAtivos = dv.pages().where(p => p.tipo === "teste-ab" && (!p.vencedor || p.vencedor === ""))

dv.paragraph(`📅 Semana de **${inicioSemana.toFormat("dd/MM")}** a **${fimSemana.toFormat("dd/MM")}**`)
dv.table(
  ["Métrica", "Valor"],
  [
    ["💰 Vendas na semana", vendasSemana.length],
    ["📮 Peças publicadas", pecasSemana.length],
    ["🧪 Testes A/B em curso", testesAtivos.length]
  ]
)
```

---

## 🔴 Alertas

```dataviewjs
const alertas = []

const campanhas = dv.pages().where(p => p.tipo === "campanha-ad" && p.status === "ativa")
campanhas.forEach(c => {
  const cpa = Number(c.cpa_atual) || 0
  const cpaAlvo = Number(c.cpa_alvo) || 40
  const roas = Number(c.roas) || 0
  if (cpa > cpaAlvo * 1.2) alertas.push([`🔴 CPA alto`, c.file.link, `R$${cpa} (alvo R$${cpaAlvo})`])
  if (roas > 0 && roas < 1) alertas.push([`🔴 ROAS < 1`, c.file.link, roas.toFixed(2)])
})

const hoje = dv.date("today")
const vendas30d = dv.pages().where(p => p.tipo === "venda-dm" && p.data && dv.date(p.data) >= hoje.minus({days: 30}))
if (vendas30d.length === 0) alertas.push([`🟡 Zero vendas 30d`, "—", "revisar funil"])

if (alertas.length === 0) {
  dv.paragraph("_Sem alertas ativos. 🎉_")
} else {
  dv.table(["Tipo", "Campanha", "Métrica"], alertas)
}
```

---

## 📚 Documentação

- [[SOBRE-MIM]] — identidade do Weslley
- [[TOM-DE-MARCA]] — 5 princípios de voz (usado até em ads)
- [[FRAMEWORKS]] — PAS, Stack Slide, AEI, Epiphany Bridge
- [[CLAUDE|CLAUDE.md]] — contexto completo desta fase
- [[config/README|Como usar este vault]]
