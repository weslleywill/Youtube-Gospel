# 🔌 Plugins Obsidian — Setup da fase 06

> Lista completa de plugins community pra esse vault funcionar.
> **Críticos:** Dataview + Templater. Sem eles, os dashboards não rodam e os templates não preenchem data.

---

## 🔴 Obrigatórios (CRÍTICOS)

### 1. Dataview
- **ID:** `dataview`
- **Função:** engine de queries dinâmicas. Usado em todos os 7 dashboards.
- **Install:** Settings → Community plugins → Browse → "Dataview" → Install + Enable
- **Config pós-install:**
  - Settings → Dataview → **Enable JavaScript Queries** ✅
  - Settings → Dataview → **Enable Inline JavaScript Queries** ✅
- **Link:** https://github.com/blacksmithgu/obsidian-dataview

### 2. Templater
- **ID:** `templater-obsidian`
- **Função:** preenchimento automático dos templates (`<% tp.date.now(...) %>`, `<% tp.file.title %>`).
- **Install:** Browse → "Templater" → Install + Enable
- **Config:**
  - Template folder location: `_obsidian-setup/_templates`
  - Trigger Templater on new file creation: ON
- **Link:** https://github.com/SilentVoid13/Templater

### 3. QuickAdd
- **ID:** `quickadd`
- **Função:** atalhos rápidos pra criar arquivos a partir dos 6 templates.
- **Install:** Browse → "QuickAdd" → Install + Enable
- **Config:** criar 1 macro pra cada template (ver [[README]] deste setup).
- **Link:** https://github.com/chhoumann/quickadd

---

## 🟡 Altamente recomendados

### 4. Homepage
- **ID:** `homepage`
- **Função:** abrir `_obsidian-setup/homepage.md` ao iniciar o Obsidian.
- **Config:** Settings → Homepage → Homepage: `_obsidian-setup/homepage` · Open on startup ON.
- **Link:** https://github.com/mirnovov/obsidian-homepage

### 5. Minimal Theme (kepano)
- **ID:** `minimal-theme` (Theme, não plugin)
- **Função:** tema limpo que combina com os dashboards (cards, cores suaves).
- **Install:** Settings → Appearance → Themes → Manage → "Minimal" → Install + Use.
- **Link:** https://github.com/kepano/obsidian-minimal

### 6. Style Settings
- **ID:** `obsidian-style-settings`
- **Função:** expõe sliders pro Minimal Theme (cores, tamanhos, callouts).
- **Link:** https://github.com/mgmeyers/obsidian-style-settings

### 7. Iconize
- **ID:** `obsidian-icon-folder`
- **Função:** emojis nas pastas (📣 ads/, 💰 vendas/, 📮 distribuicao/).
- **Link:** https://github.com/FlorianWoelki/obsidian-icon-folder

---

## 🟢 Úteis

### 8. Banners
- **ID:** `banners`
- **Função:** banner em cima dos dashboards (visual).
- **Link:** https://github.com/noatpad/obsidian-banners

### 9. Periodic Notes
- **ID:** `periodic-notes`
- **Função:** notas diárias/semanais automáticas.
- **Link:** https://github.com/liamcain/obsidian-periodic-notes

### 10. Linter
- **ID:** `obsidian-linter`
- **Função:** formatação consistente (trailing whitespace, frontmatter YAML).
- **Link:** https://github.com/platers/obsidian-linter

### 11. Advanced Tables
- **ID:** `table-editor-obsidian`
- **Função:** edição assistida de tabelas (auto-format, ordenação).
- **Link:** https://github.com/tgrosinger/advanced-tables-obsidian

### 12. Natural Language Dates
- **ID:** `nldates-obsidian`
- **Função:** interpreta "ontem", "próxima segunda" nos templates.
- **Link:** https://github.com/argenos/nldates-obsidian

---

## 🔵 Opcionais (fase futura)

### 13. Obsidian Git
- **ID:** `obsidian-git`
- **Função:** commit + push automático do vault (backup).
- **Link:** https://github.com/Vinzent03/obsidian-git

### 14. Tasks
- **ID:** `obsidian-tasks-plugin`
- **Função:** gerenciar checklists com datas (útil pros pipelines).
- **Link:** https://github.com/obsidian-tasks-group/obsidian-tasks

### 15. Omnisearch
- **ID:** `omnisearch`
- **Função:** busca fuzzy melhor que a nativa.
- **Link:** https://github.com/scambier/obsidian-omnisearch

### 16. Claude Code MCP (experimental)
- **ID:** `claude-code-mcp` (iansinnott)
- **Função:** expõe o vault via WebSocket pra Claude Code conseguir ler/escrever direto. Requer setup `.mcp.json`.
- **Link:** https://github.com/iansinnott/obsidian-claude-code-mcp

---

## 📊 Ordem de instalação recomendada

1. Dataview (CRÍTICO)
2. Templater (CRÍTICO)
3. QuickAdd (CRÍTICO)
4. Homepage
5. Minimal Theme + Style Settings
6. Linter + Advanced Tables
7. Iconize + Banners (cosmético, pode depois)
8. Periodic Notes + NL Dates (fluxo, pode depois)
9. Opcionais (quando precisar)

---

## ✅ Checklist pós-instalação

- [ ] Dataview rodando (abrir `DASHBOARD-receita` → não dá erro)
- [ ] Templater preenche `<% tp.date.now(...) %>` ao criar arquivo
- [ ] Homepage abre automático no `homepage.md`
- [ ] QuickAdd tem 6 macros visíveis em Ctrl+P
- [ ] Minimal Theme aplicado
- [ ] CSS snippet `dashboard.css` ativo
