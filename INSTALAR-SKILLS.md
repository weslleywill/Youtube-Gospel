# Como Instalar Skills Neste Projeto

> Guia rápido de instalação local. Consultar `../COMO-TESTAR-SKILLS.md` pro workflow completo de teste via sandbox.

## 🔒 Regra de ouro

Skills vão em `.claude/skills/` DESTE projeto (local).
**NUNCA** instalar em `~/.claude/skills/` (global) sem passar pelo sandbox primeiro.

## Opção 1 — Skills oficiais Anthropic (plugin)

O plugin `anthropic-skills` já está disponível no Claude Code. Rodam automaticamente. Não precisa copiar nada — só invocar quando precisar (ex: `pptx`, `docx`, `pdf`, `xlsx`, `canvas-design`, etc.).

## Opção 2 — Skill de repositório GitHub

```bash
# 1. Vai pro sandbox primeiro (sempre)
cd "..\_sandbox-skills"

# 2. Clona a skill
git clone <url> .claude/skills/nome-skill

# 3. Testa
cd "..\_sandbox-skills" && claude
# (invoca a skill com um caso real)

# 4. Se funcionou, move pra ESTE projeto
mv "..\_sandbox-skills\.claude\skills\nome-skill" ".claude\skills\"
```

## Opção 3 — Criar skill própria do zero

```bash
# 1. Cria a pasta
mkdir .claude/skills/nome-da-skill

# 2. Cria o SKILL.md com frontmatter obrigatório
cat > .claude/skills/nome-da-skill/SKILL.md << 'EOF'
---
name: nome-da-skill
description: O que a skill faz e QUANDO deve ser invocada. Isso é crítico — Claude lê essa description pra decidir se usa.
---

# Nome da Skill

[Instruções pro Claude sobre como executar a skill]

## Quando usar
[Situações específicas]

## Como usar
[Passo a passo]
EOF

# 3. Testa primeiro no sandbox antes de confiar
```

## Verificar o que está instalado

```bash
# Listar skills locais deste projeto
ls .claude/skills/

# Listar MCPs ativos
claude mcp list

# Ver contexto base deste projeto
cat CLAUDE.md
```

## Skills recomendadas pra este projeto

Veja a seção "Skills sugeridas" no `CLAUDE.md` deste projeto. São ponto de partida — instale conforme a necessidade real.

## Dúvidas?

Pergunta ao Claude: "quais skills eu tenho disponível neste projeto e qual você recomenda pra tarefa X?"

Consulte também:
- `../COMO-TESTAR-SKILLS.md` — workflow detalhado de teste seguro
- `../README.md` — visão geral do ecossistema
