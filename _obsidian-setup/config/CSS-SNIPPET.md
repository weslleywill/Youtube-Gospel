# 🎨 CSS Snippet — dashboard.css

> Paleta: **preto + laranja/âmbar** (cores da marca) + tons suaves pros callouts.
> **Onde salvar:** `.obsidian/snippets/dashboard.css`
> **Como ativar:** Settings → Appearance → CSS snippets → reload → toggle ON em `dashboard`.

---

## 📄 Conteúdo do arquivo `dashboard.css`

Copie tudo abaixo pra dentro de `.obsidian/snippets/dashboard.css`:

```css
/* ========================================================
   DASHBOARD — Personal de Sucesso (fase 06)
   cssclass aplicada no frontmatter: cssclasses: [dashboard]
   ======================================================== */

/* ---------- Tabelas mais legíveis ---------- */
.dashboard table {
  font-size: 0.88em;
  border-collapse: collapse;
  width: 100%;
  margin: 0.5em 0;
}

.dashboard table th {
  background: var(--background-secondary);
  padding: 6px 10px;
  border-bottom: 2px solid var(--interactive-accent);
  text-align: left;
  font-weight: 600;
}

.dashboard table td {
  padding: 5px 10px;
  border-bottom: 1px solid var(--background-modifier-border);
  vertical-align: top;
}

.dashboard table tr:hover td {
  background: var(--background-secondary-alt);
}

/* ---------- Callouts coloridos (alertas) ---------- */
.dashboard .callout[data-callout="success"] {
  --callout-color: 16, 185, 129; /* verde emerald */
  border-left: 4px solid rgb(var(--callout-color));
}

.dashboard .callout[data-callout="warning"] {
  --callout-color: 234, 179, 8; /* amarelo */
  border-left: 4px solid rgb(var(--callout-color));
}

.dashboard .callout[data-callout="danger"] {
  --callout-color: 239, 68, 68; /* vermelho */
  border-left: 4px solid rgb(var(--callout-color));
}

.dashboard .callout[data-callout="tip"] {
  --callout-color: 251, 146, 60; /* laranja/âmbar — marca */
  border-left: 4px solid rgb(var(--callout-color));
}

.dashboard .callout[data-callout="info"] {
  --callout-color: 59, 130, 246;
  border-left: 4px solid rgb(var(--callout-color));
}

/* ---------- Homepage: cards clicáveis ---------- */
.dashboard.homepage .callout[data-callout="tip"] {
  background: linear-gradient(90deg, rgba(251, 146, 60, 0.06), transparent);
  padding: 12px 16px;
  margin: 8px 0;
  border-radius: 6px;
  transition: transform 0.12s ease, box-shadow 0.12s ease;
}

.dashboard.homepage .callout[data-callout="tip"]:hover {
  transform: translateX(3px);
  box-shadow: 0 2px 6px rgba(251, 146, 60, 0.15);
}

/* ---------- Barras de progresso ASCII (blocos █) ---------- */
.dashboard code {
  font-family: "Cascadia Code", "JetBrains Mono", "Consolas", monospace;
  letter-spacing: -0.5px;
}

/* ---------- Header da homepage ---------- */
.dashboard.homepage h1 {
  border-bottom: 2px solid #fb923c; /* laranja/âmbar */
  padding-bottom: 6px;
  margin-top: 0.5em;
}

/* ---------- Navegação topo ---------- */
.dashboard blockquote:first-of-type {
  background: var(--background-secondary);
  border-left: 3px solid #fb923c;
  padding: 8px 14px;
  font-size: 0.9em;
  margin-bottom: 1.2em;
}

/* ---------- Semáforos: destaque nos emojis ---------- */
.dashboard table td:first-child {
  font-weight: 500;
}

/* ---------- Dataview list (list output) ---------- */
.dashboard .dataview.list-view-ul li {
  padding: 3px 0;
}

/* ---------- Links mais visíveis ---------- */
.dashboard a.internal-link {
  color: #fb923c;
  text-decoration: none;
  border-bottom: 1px dashed rgba(251, 146, 60, 0.4);
}

.dashboard a.internal-link:hover {
  color: #f97316;
  border-bottom-color: #f97316;
}

/* ---------- Tema escuro: ajuste de laranja ---------- */
.theme-dark.dashboard a.internal-link {
  color: #fdba74;
  border-bottom-color: rgba(253, 186, 116, 0.4);
}

/* ---------- Dataview headers ---------- */
.dashboard h3 {
  margin-top: 1.4em;
  padding-bottom: 3px;
  border-bottom: 1px solid var(--background-modifier-border);
}

/* ---------- Heatmap cells: padding confortável ---------- */
.dashboard table td code {
  padding: 1px 4px;
  background: transparent;
  font-size: 0.95em;
}
```

---

## 🛠️ Como aplicar

### Caminho 1 — via interface
1. Abrir Obsidian → **Settings** → **Appearance**
2. Rolar até **CSS snippets**
3. Clicar no ícone de **pasta** (abre `.obsidian/snippets/`)
4. Criar arquivo `dashboard.css` e colar o conteúdo acima
5. Voltar em Settings → Appearance → **Reload** nos CSS snippets
6. Ligar o toggle em `dashboard`

### Caminho 2 — manual
```
cd "E:\Claude Code\ecossistema-personal-de-sucesso\06-distribuicao-e-monetização"
mkdir .obsidian\snippets
```
Criar `.obsidian\snippets\dashboard.css` com o conteúdo acima. Reabrir Obsidian.

---

## ✅ Verificação

Depois de ativar, abra `homepage.md`. Você deve ver:
- Navegação do topo com borda laranja
- Callouts `> [!tip]` com leve gradiente laranja e efeito hover
- Tabelas com header destacado
- Links internos em laranja

Se não mudou nada, confira:
1. Frontmatter da página tem `cssclasses: [dashboard]`
2. Snippet `dashboard` tá ativo em Settings → Appearance
3. Deu **reload** no snippet (ícone circular) depois de editar o arquivo

---

## 🎨 Ajustes opcionais

Quer mudar a cor da marca?
- Substitua `#fb923c` (laranja/âmbar atual) por outra cor em todas as ocorrências
- Use https://coolors.co pra achar tons que combinem com o preto base

Quer tabelas ainda menores?
- Mude `font-size: 0.88em` pra `0.82em` ou `0.78em`

Quer callouts mais destacados?
- Aumente `border-left: 4px` pra `6px` ou `8px`
