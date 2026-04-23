---
cssclasses:
  - dashboard
---

> 🏠 [[_obsidian-setup/homepage|Home]] · 📣 [[DASHBOARD-ads-performance|Ads]] · 🎯 [[DASHBOARD-funil-vendas|Funil]] · 💰 [[DASHBOARD-receita|Receita]] · 📊 [[DASHBOARD-plataformas|Plataformas]] · 👀 [[DASHBOARD-concorrentes|Concorrentes]] · 🚀 [[DASHBOARD-pipelines|Pipelines]] · 🧠 **Skills & MCPs**

# 🧠 Dashboard — Skills & MCPs

> O que tá instalado neste projeto em `.claude/skills/` e `.mcp.json`. Atualiza automaticamente.

---

## 📊 Total instalado

```dataviewjs
const fs = app.vault.adapter

const listarSkills = async () => {
  try {
    const res = await fs.list(".claude/skills")
    return res.folders.map(f => f.replace(".claude/skills/", ""))
  } catch (e) { return [] }
}

const lerMcp = async () => {
  try {
    const txt = await fs.read(".mcp.json")
    const j = JSON.parse(txt)
    return Object.keys(j.mcpServers || {})
  } catch (e) { return [] }
}

const skills = await listarSkills()
const mcps = await lerMcp()

dv.table(
  ["🧠 Skills locais", "🔌 MCPs ativos"],
  [[skills.length, mcps.length]]
)
```

---

## 📋 Skills — grid completo

```dataviewjs
const fs = app.vault.adapter
const pasta = ".claude/skills"

const listar = async () => {
  try {
    const res = await fs.list(pasta)
    return res.folders.map(f => f.replace(pasta + "/", ""))
  } catch (e) { return [] }
}

const extrairDescricao = async (skill) => {
  try {
    const txt = await fs.read(`${pasta}/${skill}/SKILL.md`)
    const match = txt.match(/description:\s*(.+)/)
    if (match) {
      const desc = match[1].trim().replace(/^["']|["']$/g, "")
      return desc.substring(0, 120) + (desc.length > 120 ? "..." : "")
    }
    return "_sem description no frontmatter_"
  } catch (e) { return "_SKILL.md ausente_" }
}

const skills = (await listar()).sort()

if (skills.length === 0) {
  dv.paragraph("_Nenhuma skill encontrada em `.claude/skills/`._")
} else {
  const linhas = []
  for (const s of skills) {
    const desc = await extrairDescricao(s)
    linhas.push([`\`${s}\``, desc])
  }
  dv.table(["Skill", "O que faz"], linhas)
}
```

---

## 🎯 Skills por função (desta fase)

### 📮 Distribuição & Repurposing
| Skill | Quando usar |
|-------|-------------|
| `social-content` | Adaptar 1 post pra múltiplos canais, gerar calendário |
| `create-viral-content` | Otimizar hook + engajamento antes de postar |
| `repurpose` | Cola URL de Reel → transcreve → reescreve na voz do Weslley |
| `viral` | Gerar 10 ideias de vídeo baseadas em pesquisa + opinião |
| `script` | Roteiro de vídeo completo (precisa de setup: Apify/yt-dlp/Whisper) |
| `hook-writer-sms` | Só precisa escrever a primeira linha que prende |
| `carousel-writer-sms` | Conteúdo slide-a-slide pra carrossel IG |
| `content-pattern-analyzer-sms` | O que tá funcionando nos meus posts |
| `performance-analyzer-sms` | Analisar métricas de posts |

### 💸 Ads pagos
| Skill | Quando usar |
|-------|-------------|
| `ad-creative` | Gerar N variações de headline + body pra 1 campanha |
| `paid-ads` | Estratégia de campanha (segmentação, bid, CPA alvo) |
| `claude-ads` | Suite completa: 17 sub-skills (ads-meta, ads-tiktok, ads-google, ads-audit, ads-score) |
| `competitive-ads-extractor` | Scrape da Ads Library + análise de gap |

### 💰 Copy & funil
| Skill | Quando usar |
|-------|-------------|
| `copywriting` | Copy de landing / página de vendas / bio |
| `copy` | Copy com 14 princípios + 100+ frameworks clássicos |
| `marketing-psychology` | Aplicar gatilhos psicológicos sem ficar vendedor |
| `email-sequence` | Sequência de emails (quando tiver lista) |
| `hundred-million-offers` | Estruturar oferta irresistível (Value Eq. + bônus) |

### 👀 Inteligência competitiva
| Skill | Quando usar |
|-------|-------------|
| `spy` | Espiona IG, acha virais, extrai hook pronto pra copiar |

### 🛠️ Utilitários de sessão
| Skill | Quando usar |
|-------|-------------|
| `memory` | `/memory update`, `/memory prune`, `/memory reflect` |
| `cowork-session` | `/standup` (início) e `/conclude` (fim) de sessão |

---

## 🔌 MCPs ativos

```dataviewjs
const fs = app.vault.adapter

const lerMcp = async () => {
  try {
    const txt = await fs.read(".mcp.json")
    return JSON.parse(txt)
  } catch (e) { return null }
}

const j = await lerMcp()
if (!j || !j.mcpServers || Object.keys(j.mcpServers).length === 0) {
  dv.paragraph("_Nenhum MCP configurado em `.mcp.json` — é esperado nesta fase. Futuramente: Meta Ads API, TikTok Ads API, Hotmart API._")
} else {
  const linhas = Object.entries(j.mcpServers).map(([nome, cfg]) => [
    `\`${nome}\``,
    cfg.command || cfg.url || "—",
    cfg.description || "—"
  ])
  dv.table(["MCP", "Comando/URL", "Descrição"], linhas)
}
```

---

## 🎓 Quando usar qual skill?

### "Preciso criar conteúdo do zero"
→ `viral` → escolher ideia → `script` (vídeo) ou `carousel-writer-sms` (carrossel)

### "Já tenho um Reel que bombou, quero repurpose"
→ `repurpose` (cola URL) → gera variação TikTok + Short

### "Vou rodar ad pela primeira vez"
→ `paid-ads` (estratégia) → `ad-creative` (criativos) → [[nova-campanha-ad]]

### "Ad tá rodando mal"
→ `claude-ads` (sub-skill `ads-audit`) → [[novo-teste-ab|teste A/B]]

### "Quero saber o que concorrente tá fazendo"
→ `spy` (IG) ou `competitive-ads-extractor` (ads) → [[nova-auditoria-concorrente]]

### "Alguém mandou DM querendo comprar"
→ Nenhuma skill específica, só [[nova-venda-dm]] pra registrar quando fechar.
→ Se precisar de ajuda em objeção: `marketing-psychology`

---

## 📚 Referências

- [[CLAUDE|CLAUDE.md]] — lista oficial atualizada das skills
- [[INSTALAR-SKILLS|INSTALAR-SKILLS.md]] — como adicionar nova skill
- Plugins Anthropic (já disponíveis, não precisa instalar):
  - `marketing:draft-content`, `marketing:campaign-plan`, `marketing:performance-report`, `marketing:email-sequence`
