---
name: mermaid
description: Gerar diagramas Mermaid (flowchart, gantt, timeline, mindmap, pie) a partir de dados em markdown. Renderiza direto no Obsidian/GitHub sem HTML.
---

# Mermaid — Diagramas em Markdown

Skill pra gerar diagramas Mermaid válidos embutidos em markdown. Renderizam nativamente no Obsidian, GitHub, VS Code, e a maioria das ferramentas markdown modernas.

## Quando usar

- Planejar workflow de conteúdo (flowchart)
- Roadmap mensal de posts (gantt)
- Linha do tempo de campanha (timeline)
- Mapa mental de ideias (mindmap)
- Distribuição AEI (pie)
- Substituir diagramas em imagens (mais leve, versionável, editável)

## Quando NÃO usar

- Desenhos livres / wireframes visuais → use **Excalidraw** plugin
- Gráficos com dados dinâmicos → use **Dataview** com visualização

## Sintaxe principal

### Flowchart (decisões / fluxos)

```mermaid
flowchart TD
    A[Ideia] --> B{Tem dados?}
    B -->|Sim| C[Roteirizar]
    B -->|Não| D[Pesquisar]
    D --> A
    C --> E[Gravar]
    E --> F[Editar]
    F --> G[Publicar]
```

### Gantt (cronograma)

```mermaid
gantt
    title Abril 2026 — Pipeline
    dateFormat YYYY-MM-DD
    section Carrosséis
    dia-20 Carrossel        :2026-04-15, 5d
    dia-25 Carrossel        :2026-04-20, 5d
    section Reels
    dia-18 Reel             :2026-04-14, 4d
    dia-22 Reel             :2026-04-18, 4d
```

### Timeline

```mermaid
timeline
    title Campanha Abril
    04/15 : Planejamento
    04/17 : Primeiro carrossel
    04/22 : Pico de reels
    04/30 : Análise
```

### Mindmap

```mermaid
mindmap
  root((Instagram))
    Carrosséis
      Listicle
      Tutorial
      Native
    Reels
      AEI+BDA
      Epiphany Bridge
      PAS
    Stories
      Bastidor
      Enquete
      CTA
```

### Pie (distribuição AEI)

```mermaid
pie title Distribuição AEI — Abril
    "Autoridade" : 40
    "Engajamento" : 30
    "Influência" : 30
```

## Regras gerais

1. **Sempre** envolver em ` ```mermaid ... ``` ` (três backticks)
2. Nomes de nós: letras+números+underscore (ex: `A1`, `carrossel_01`)
3. Texto com espaços: entre colchetes `[texto com espaços]`
4. Decisão: entre chaves `{pergunta?}`
5. Testar render em https://mermaid.live antes de commitar se for complexo

## Integração com o projeto

Quando fizer sentido, inserir diagramas em:
- `planejamento/PIPELINE-*.md` — fluxo visual do pipeline
- `CONTEUDOS-GERADOS-AQUI/YYYY-MM/plano-mensal.md` — gantt do mês
- `_obsidian-setup/dashboards/DASHBOARD-anual.md` — pie AEI anual (complementar ao Dataview)
- `analise/` — timeline de resultados

## Reference rápido

- **Docs oficiais:** https://mermaid.js.org/
- **Editor live:** https://mermaid.live
- **Obsidian:** renderiza nativamente (ligue "Readable line length" em Settings → Editor pra melhor layout)
