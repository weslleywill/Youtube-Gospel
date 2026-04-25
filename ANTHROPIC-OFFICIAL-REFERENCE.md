# Anthropic Official — Referência de Features do Claude Code

> Documentação oficial condensada + regras críticas de otimização. Fonte: https://code.claude.com/docs

---

## 🔥 REGRA 1 — Paralelismo/Batch (ECONOMIA DE TOKENS)

**SEMPRE que possível, emitir múltiplas tool calls num ÚNICO bloco (paralelo).**

### Por quê
Cada tool call sequencial = 1 round-trip = prompt reprocessado = tokens queimados + resposta mais lenta.
Paralelizar 5 reads = 1 round-trip em vez de 5. **Economia ~80% de tokens nessa etapa.**

### Quando paralelizar
- Reads independentes de múltiplos arquivos
- Grep + Glob + Read que não dependem entre si
- Múltiplos Edits num mesmo arquivo (se não dependem)
- TodoWrite + Read + Edit de contexto
- Spawns de múltiplos sub-agents independentes
- Múltiplas WebFetch/WebSearch independentes

### Quando NÃO paralelizar
- Dependência real (output de A alimenta B)
- Ex: `call-actor` retorna ID → depois `get-actor-output(ID)`

### Regra mental
> **Em dúvida, paralelize.** Custo de 1 tool call extra < custo de 1 round-trip.

---

## 🧠 REGRA 2 — Usar Skills quando existirem

Skills locais em `.claude/skills/` carregam **só quando invocadas**, não em toda sessão. CLAUDE.md carrega **em TODA sessão**. Por isso:

- Procedimento repetível → Skill
- Fato sempre verdadeiro → CLAUDE.md

Regra: Se um bloco em CLAUDE.md virou um procedimento (passo 1, passo 2...), **converte em skill**.

---

## 🗂️ Pilares do Claude Code (o que você pode usar)

### 1. Skills (`.claude/skills/`)
- Packages de playbook reaproveitáveis
- Carregam sob demanda (não consomem contexto quando não invocadas)
- Frontmatter `description` = Claude decide quando carregar
- **Bundled skills grátis**: `/simplify`, `/batch`, `/debug`, `/loop`, `/claude-api`

### 2. Subagents (`.claude/agents/`)
- Rodam em **contexto separado**
- Retornam só o resumo pra sessão principal
- Usar pra tasks pesadas que poluiriam contexto (research, exploration, análise)
- Pré-carregados: Explore, Plan, general-purpose

### 3. Hooks (`.claude/settings.json`)
- Shell/HTTP/Prompt handlers que rodam em eventos do ciclo de vida
- Eventos: `SessionStart`, `UserPromptSubmit`, `PreToolUse`, `PostToolUse`, `PostToolUseFailure`, `PermissionRequest`, `Stop`, `SessionEnd`, `InstructionsLoaded`
- Matcher filtra quais triggeram (ex: só `Bash`, só `Write|Edit`)
- Uso: bloquear comandos perigosos, auto-aprovar, injetar contexto, validar output

### 4. Rules (`.claude/rules/`)
- Instruções modulares. Arquivo `.md` por tópico
- **Frontmatter `paths`** scopa quando carrega (ex: só em `ads/**/*`)
- Economia de contexto quando instrução é especializada

### 5. Custom Commands (`.claude/commands/` ou skills)
- `/comando` invoca fluxo pré-definido
- Hoje Anthropic recomenda fazer como skill (mais features)

### 6. MCPs (`.mcp.json`)
- Tools externas (APIs, serviços)
- Tool Search Tool ativo (carregamento sob demanda)

### 7. Memory
- `CLAUDE.md` (projeto) + `CLAUDE.local.md` (pessoal, gitignore)
- `~/.claude/CLAUDE.md` (user, todos projetos)
- Auto memory (`~/.claude/projects/<project>/memory/`) — Claude escreve sozinho
- Importa outros `.md` com `@path/to/file.md`

---

## 💡 Features avançadas (ainda não configuradas nesta pasta)

### Routines (`/schedule` no CLI)
Tasks agendadas que rodam na infra da Anthropic. Exemplo:
- Toda segunda 7h → gerar análise de concorrente
- Todo dia 6h → checar trends TikTok

### Channels
Push de Telegram/Discord/iMessage/webhooks direto pra sessão Claude.

### Remote Control
Controlar Claude do celular.

### Dispatch
Mandar task do celular, abrir no desktop.

### Plan Mode
`/plan` → Claude desenha estratégia antes de executar. Previne erros caros em tasks complexas.

### `context: fork` em skills
Roda skill em contexto isolado. Resultado volta pro main, mas não polui.

### HTML comments em CLAUDE.md
`<!-- nota pra humano -->` é **removido antes do contexto**. Use pra metadata (última atualização, responsável, etc.).

---

## ⚙️ Environment variables úteis

| Variable | Efeito |
|---|---|
| `ENABLE_TOOL_SEARCH=true` | Ativa Tool Search Tool (carregamento MCP sob demanda). Já ativo. |
| `CLAUDE_CODE_DISABLE_AUTO_MEMORY=1` | Desativa auto memory |
| `SLASH_COMMAND_TOOL_CHAR_BUDGET` | Aumenta budget pra descriptions de skills (se tiver muitas) |
| `CLAUDE_CODE_NEW_INIT=1` | Habilita `/init` interativo multi-fase |

---

## 📚 Links oficiais

- Overview: https://code.claude.com/docs/en/overview
- Hooks: https://code.claude.com/docs/en/hooks
- Skills: https://code.claude.com/docs/en/skills
- Subagents: https://code.claude.com/docs/en/sub-agents
- Memory: https://code.claude.com/docs/en/memory
- Settings: https://code.claude.com/docs/en/settings
- Tool Search Tool: https://platform.claude.com/docs/en/agents-and-tools/tool-use/tool-search-tool

<!--
Última atualização: 2026-04-19
Criado após análise da docs oficial em sessão de otimização de tokens.
Propósito: reforçar regra de batch + documentar features oficiais que ainda não estamos usando.
-->
