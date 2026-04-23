# 📘 Setup Obsidian — Distribuição & Monetização

> Guia rápido pra ativar este vault no Obsidian.
> **Não edite este arquivo manualmente** — é doc do agente.

## 📂 Estrutura

```
_obsidian-setup/
├── homepage.md               # Página inicial (defina como Home)
├── dashboards/               # 7 dashboards Dataview
│   ├── DASHBOARD-ads-performance.md
│   ├── DASHBOARD-funil-vendas.md
│   ├── DASHBOARD-receita.md
│   ├── DASHBOARD-plataformas.md
│   ├── DASHBOARD-concorrentes.md
│   ├── DASHBOARD-pipelines.md
│   └── DASHBOARD-skills-e-mcps.md
├── _templates/               # 6 templates Templater/QuickAdd
│   ├── nova-campanha-ad.md
│   ├── novo-teste-ab.md
│   ├── nova-venda-dm.md
│   ├── nova-peca-distribuida.md
│   ├── novo-snapshot-analytics.md
│   └── nova-auditoria-concorrente.md
└── config/
    ├── README.md             # você tá aqui
    ├── PLUGINS-OBSIDIAN.md   # plugins obrigatórios
    └── CSS-SNIPPET.md        # snippet visual
```

---

## ⚡ Passo-a-passo de ativação

### 1. Abrir o vault
1. Abrir **Obsidian** → **Open folder as vault**
2. Selecionar a pasta `06-distribuicao-e-monetização/`
3. Clicar em "Trust author & enable plugins" (se aparecer)

### 2. Instalar plugins essenciais
Abrir **Settings → Community plugins → Browse** e instalar na ordem:
- **Dataview** (CRÍTICO — sem ele os dashboards ficam vazios)
- **Templater** (CRÍTICO — sem ele os templates não preenchem data auto)
- **QuickAdd** (atalho de template)
- **Homepage** (abrir `homepage.md` direto)
- **Minimal Theme** (Kepano) + **Style Settings**
- **Iconize** (emojis nas pastas)
- **Banners** (banners nos dashboards)
- **Periodic Notes** (notas diárias/semanais)
- **Linter** (formatação consistente)
- **Advanced Tables** (edição de tabela)

Ver [[PLUGINS-OBSIDIAN]] pra lista completa com link de instalação.

### 3. Configurar Templater
**Settings → Templater**
- **Template folder location:** `_obsidian-setup/_templates`
- **Trigger Templater on new file creation:** ✅ ON
- **Folder templates** (opcional): mapear subpastas pra templates específicos

### 4. Configurar QuickAdd
**Settings → QuickAdd → Manage Macros**
Criar 6 macros do tipo "Template":

| Nome do macro | Template | Destino |
|---|---|---|
| Nova venda DM | `nova-venda-dm.md` | `/vendas/YYYY-MM/` |
| Nova campanha ad | `nova-campanha-ad.md` | `/ads/YYYY-MM/` |
| Novo teste A/B | `novo-teste-ab.md` | `/ads/testes/` |
| Nova peça distribuída | `nova-peca-distribuida.md` | `/distribuicao/YYYY-MM/` |
| Snapshot analytics | `novo-snapshot-analytics.md` | `/analytics/` |
| Nova auditoria concorrente | `nova-auditoria-concorrente.md` | `/concorrentes/` |

Sugestão: ativar **Show in command palette** pra cada macro (aí roda com Ctrl+P).

### 5. Configurar Homepage
**Settings → Homepage**
- **Homepage:** `_obsidian-setup/homepage`
- **Open on startup:** ✅
- **Use when opening new tab:** ✅

### 6. Aplicar CSS snippet
1. Criar pasta `.obsidian/snippets/` se não existir
2. Criar arquivo `.obsidian/snippets/dashboard.css`
3. Copiar conteúdo de [[CSS-SNIPPET]]
4. **Settings → Appearance → CSS snippets → reload → ativar `dashboard`**

### 7. Verificar que tudo funciona
- Abrir `homepage.md` → deve mostrar snapshot do mês com números (mesmo que zerados)
- Ctrl+P → QuickAdd → "Nova venda DM" → template abre com data preenchida
- Abrir `DASHBOARD-ads-performance` → Dataview roda sem erro

---

## 🎯 Schema YAML — fonte de verdade

**Todos os registros usam esses tipos:**

| `tipo:` | Onde fica | Dashboard principal |
|---|---|---|
| `campanha-ad` | `/ads/YYYY-MM/` | [[DASHBOARD-ads-performance]] |
| `teste-ab` | `/ads/testes/` | [[DASHBOARD-ads-performance]] |
| `venda-dm` | `/vendas/YYYY-MM/` | [[DASHBOARD-receita]] |
| `peca-distribuida` | `/distribuicao/YYYY-MM/` | [[DASHBOARD-plataformas]] |
| `snapshot-analytics` | `/analytics/` | [[DASHBOARD-funil-vendas]] |
| `auditoria-concorrente` | `/concorrentes/` | [[DASHBOARD-concorrentes]] |

**Regra de ouro:** Dataview filtra por `tipo:` do frontmatter, não por pasta. Se o frontmatter tá errado, o dashboard não vê. Sempre use um dos templates.

---

## 🐛 Troubleshooting

### Dashboard vazio / "no results"
- Confere se os arquivos têm `tipo:` no frontmatter
- Dataview às vezes precisa de **reload do vault** (Ctrl+R)
- Se usou pasta/path que quebra: tente fechar Obsidian e reabrir

### Templater não preenche data
- Settings → Templater → "Trigger Templater on new file creation" = ON
- Confere que o template tá em `_obsidian-setup/_templates/`

### QuickAdd não aparece no command palette
- Edit macro → habilita "Show in command palette"
- Recarregue o Obsidian

### "Dataview query failed" em `dataviewjs`
- Dataview precisa de **JS queries enabled**: Settings → Dataview → "Enable JavaScript Queries" ✅

### Dashboard de skills mostra "pasta vazia"
- O dashboard lê `.claude/skills/` — se não existir, mostra vazio
- Skills da fase devem estar em `E:\...\06-distribuicao-e-monetização\.claude\skills\<nome>`

---

## 📊 O que cada dashboard mostra

### 📣 DASHBOARD-ads-performance
- Resumo geral (ativas / pausadas / encerradas)
- Grid por plataforma (Meta / TikTok / Google)
- Semáforo ROAS (🟢 >1.5 · 🟡 1-1.5 · 🔴 <1)
- Red flags automáticas (CPA > alvo 7d+, ROAS < 1 por 3d+)
- Top 5 campanhas por ROAS

### 🎯 DASHBOARD-funil-vendas
- 4 etapas com barra de progresso ASCII
- Taxa de conversão DM→venda (meta 3%)
- Gargalos auto-detectados
- Vendas por canal de DM

### 💰 DASHBOARD-receita
- Receita hoje / 7d / 30d / mês / total
- Receita diária ASCII (14 dias)
- Receita mensal (ano corrente)
- MRR projetado
- ROAS global (receita vs ads)

### 📊 DASHBOARD-plataformas
- Grid comparativo (IG / TT / YT / Ad)
- Heatmap plataforma × formato
- Top 5 peças por plataforma
- AEI por plataforma
- Alertas de plataformas sem conversão

### 👀 DASHBOARD-concorrentes
- Timeline de auditorias
- Gaps identificados (extraídos do frontmatter)
- Banco de peças virais dos concorrentes
- Concorrentes rodando ads agora

### 🚀 DASHBOARD-pipelines
- Mapa dos 12 pipelines
- Uso na semana (via `tipo:` como proxy)
- Status de cada pipeline (🟢 ativo 7d / 🟡 parado 7d+ / ⚪ zero)

### 🧠 DASHBOARD-skills-e-mcps
- Total de skills em `.claude/skills/`
- Grid com nome + description extraída do SKILL.md
- Agrupamento por função (distribuição, ads, copy, spy)
- MCPs ativos em `.mcp.json`

---

## 🔄 Atualizações

- **Criado por:** Claude Code — 2026-04-17
- **Pra atualizar:** peça "atualize o setup do Obsidian do 06 com [mudança X]"
