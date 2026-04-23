# Skills a instalar depois — pendentes

> Salvo em 2026-04-17. Pesquisa completa em `SKILLS-GITHUB-PESQUISA-2026-04-17.md`. Weslley autorizou depois, não agora.

## Top 5 pra instalar quando voltar a esse tópico

| # | Skill | Repo | Por quê |
|---|---|---|---|
| 1 | affiliate-skills | [Affitor/affiliate-skills](https://github.com/Affitor/affiliate-skills) | V3/V6 afiliados + research KDP |
| 2 | claude-code-toolkit | [robertguss/claude-code-toolkit](https://github.com/robertguss/claude-code-toolkit) | Amazon KDP killer input (ebook-factory) |
| 3 | running-marketing-campaigns | [SpillwaveSolutions/running-marketing-campaigns-agent-skill](https://github.com/SpillwaveSolutions/running-marketing-campaigns-agent-skill) | UTM + GA4 tracking |
| 4 | wondelai/skills | [wondelai/skills](https://github.com/wondelai/skills) | Quiz funnel + Hotmart CRO |
| 5 | ai-marketing | [BrianRWagner/ai-marketing-claude-code-skills](https://github.com/BrianRWagner/ai-marketing-claude-code-skills) | UGC + social proof |

## Fluxo de instalação quando quiser rodar

```bash
# 1. Sandbox primeiro (sempre)
cd "E:/Claude Code/ecossistema-personal-de-sucesso/_sandbox-skills"

# 2. Clonar as 5 (paralelo)
git clone https://github.com/Affitor/affiliate-skills .claude/skills/_test-affitor
git clone https://github.com/robertguss/claude-code-toolkit .claude/skills/_test-robertguss
git clone https://github.com/SpillwaveSolutions/running-marketing-campaigns-agent-skill .claude/skills/_test-spillwave
git clone https://github.com/wondelai/skills .claude/skills/_test-wondelai
git clone https://github.com/BrianRWagner/ai-marketing-claude-code-skills .claude/skills/_test-brianwagner

# 3. Cherry-pick skills individuais (cada repo tem várias — não instalar tudo, só o que casa com o gap)
# Ver a seção TOP 5 do arquivo SKILLS-GITHUB-PESQUISA-2026-04-17.md pra mapping exato

# 4. Mover pras 06 local
mv _test-X/skill-escolhida ../../06-distribuicao-e-monetização/.claude/skills/

# 5. Apagar os _test
```

## Pré-requisitos a checar antes de instalar

- [ ] Ebook Amazon KDP 1 já tá no ar (pra skill #2 ter ROI imediato)
- [ ] Programa de afiliados Hotmart ativado (pra skill #1 ter onde plugar)
- [ ] Pixel Meta + GA4 configurados (pra skill #3 ter dados)
- [ ] Hotmart checkout rodando com tráfego (pra skill #4 ter o que otimizar)
- [ ] Primeiras 5-10 vendas feitas (pra skill #5 ter depoimento pra capturar)

**Se nada disso tá pronto ainda → adiar instalação até ter dados/tráfego**. Skill sem dado pra trabalhar é só overhead.

## Gaps sem skill (criar próprias no futuro)

1. Hotmart BR específico (order bump + upsell 1-click + parcelamento)
2. Amazon KDP BR (keywords PT-BR, categorias BR, capa A/B enquete IG)
3. Pinterest BR fitness

Mini-briefs completos em `SKILLS-GITHUB-PESQUISA-2026-04-17.md` seção 5.

## Watchlist (não verificadas — risco alto)

4 skills no mcpmarket.com retornaram 429/403 — pode ser pago/privado. Validar manualmente se fizer sentido no futuro:
- Amazon KDP keyword optimizer
- Amazon KDP category researcher
- VSL script writing pro
- Upsell/downsell scripting

## Como lembrar disso depois

Quando falar "vamos instalar aquelas skills que tinha achado" ou "quero melhorar o processo" → abrir este arquivo.
