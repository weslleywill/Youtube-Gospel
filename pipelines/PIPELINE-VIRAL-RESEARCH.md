# PIPELINE 01 — Viral Research (Pré-Produção de Ideias)

> Pipeline 1 de 12 • Pesquisa de ideias validadas antes de produzir qualquer peça.

## Objetivo
Sair de "não sei o que postar" pra 10 ideias de conteúdo validadas por dados reais de engajamento, alinhadas ao nicho fitness BR iniciante.

## Quando disparar (gatilho)
- Começo de semana (planejamento de 7 dias)
- Feed do Weslley caiu em engajamento (queda > 20% nas últimas 3 postagens)
- Calendário vazio pros próximos 3 dias
- Após lançamento/campanha (resetar pauta)
- Quando o Weslley fala "tô travado, não sei o que gravar"

## Inputs necessários
- **Nicho fixo**: fitness iniciante BR (musculação natural)
- **Persona**: homem 20-35, classe C/B, começou academia faz menos de 1 ano
- **5 concorrentes do Weslley** (handles IG) — se não tiver ainda, pedir pro Weslley listar
- **Timeframe**: últimos 30 dias
- **Angulação preferida**: erro+correção, mito, bastidor (não "dicas genéricas")

## Passo a passo

### Passo 1 — Skill `viral` (10 ideias base)
Invocar a skill pra gerar ideias com pesquisa web e alinhamento de voz.
```
/viral fitness iniciante BR, persona homem 20-35 começando academia,
ângulo vulnerabilidade + erro real + correção. 10 ideias.
```
**O que espero**: 10 títulos + hook curto + por que funciona. Cada ideia deve ter "cara" do Weslley, não genérico de coach.

### Passo 2 — Skill `spy` (validar via concorrentes)
Pra cada concorrente da lista, rodar scraping de virais dos últimos 30 dias.
```
/spy @concorrente1 @concorrente2 @concorrente3 @concorrente4 @concorrente5
últimos 30 dias, extrair só outliers (views > 3x média do perfil)
```
**O que espero**: lista de reels virais com hook transcrito, tema, duração, padrão de retenção. Usar isso pra cruzar com as 10 ideias do passo 1.

### Passo 3 — MCP `tiktok-trends-mcp` (tendência de áudio/formato)
Puxar áudios e hashtags em alta no TikTok BR no nicho fitness.
```
mcp call tiktok-trends-mcp → trending sounds BR, fitness tag, últimos 7 dias
mcp call tiktok-trends-mcp → trending hashtags BR fitness
```
**O que espero**: 5 áudios em alta + 10 hashtags crescendo. Marcar quais ideias do passo 1 casam com esses formatos.

### Passo 4 — Skill `claude-seo` (keyword research)
Validar se o tema tem volume de busca no Brasil (YouTube + Google).
```
/claude-seo keywords fitness iniciante BR, intent informacional,
volume mensal > 1000, dificuldade baixa
```
**O que espero**: lista de termos com volume real (ex: "treino costas iniciante", "quantas séries fazer peito", "falha muscular o que é"). Usar pra ajustar títulos.

### Passo 5 — Cruzar matriz
Montar tabela final das 10 ideias com 4 colunas de validação:

| # | Ideia | Viral em concorrente? | Áudio/hashtag em alta? | Keyword com volume? | Score (0-4) |
|---|-------|-----------------------|------------------------|---------------------|-------------|
| 1 | ...   | sim/não               | sim/não                | sim/não             | 3/4         |

**Regra**: só produz ideias com score >= 2/4. Resto descarta.

### Passo 6 — Marcar AEI em cada ideia aprovada
Pra cada ideia que passou, marcar:
- `[AEI: Autoridade]` — ensina algo técnico com evidência pessoal
- `[AEI: Engajamento]` — pergunta, meme, storytime
- `[AEI: Influência]` — bastidor, lifestyle, processo

**Target semanal**: 4 Autoridade, 3 Engajamento, 3 Influência.

## Outputs esperados
Arquivo `session-logs/YYYY-MM-DD-viral-research.md` com:
- 10 ideias validadas (score >= 2/4)
- Hook sugerido pra cada (2 segundos, obrigatório)
- Marcação AEI
- Áudio/hashtag sugerido pra cada
- Keyword principal e 2 long-tail
- Concorrente de referência (se tiver)
- Próximo passo: pra cada ideia aprovada, disparar `PIPELINE-PRODUCAO-CONTEUDO.md`

## Métricas de sucesso
- **Taxa de aprovação**: >= 6/10 ideias passam o score
- **Tempo pra rodar**: < 45 min de ponta a ponta
- **Conversão em produção**: >= 70% das ideias aprovadas viram peça gravada em 7 dias
- **Performance**: peças saídas desse pipeline devem ter engajamento >= média do perfil (30 dias)

## Quando NÃO usar
- Não usar pra conteúdo reativo (story sobre algo que aconteceu hoje — isso vai direto pro PIPELINE-STORYTELLING-CONSTRUCAO)
- Não usar se o Weslley já tem 10+ ideias na fila (evitar overdose de pauta)
- Não usar pra ads — ads saem do PIPELINE-ORGANICO-TO-PAGO, que parte de posts já validados

## Regra de tom (obrigatório)
Toda ideia gerada precisa passar no filtro: "o Weslley diria isso no WhatsApp pro amigo?". Se soar como coach/infoprodutor, descarta.

Palavras que matam a ideia automaticamente:
- "revolucionário", "definitivo", "garantido"
- "destrave seu...", "libere seu..."
- "segredo dos fisiculturistas"
- "transforme seu corpo"

## Exemplo de ideia aprovada (nicho fitness BR)

**Ideia 3**: "Treinei remada errado por 8 meses. Descobri ontem."
- Hook (2s): "Oito meses fazendo remada errado. Ontem vi esse vídeo e quebrei a cabeça."
- AEI: Autoridade (erro + correção técnica)
- Áudio: trending sound BR "reaction chocado"
- Keyword: "remada como fazer" (1.9k buscas/mês BR)
- Concorrente de referência: @x fez reel parecido em março, 180k views
- Score: 3/4

## Integração com Obsidian

Usar template `_obsidian-setup/_templates/viral-research-log.md` pra registrar cada execução. Campos mínimos:
- Data da pesquisa
- 5 concorrentes analisados
- Tabela das 10 ideias com score
- Link pro próximo pipeline (produção) quando a ideia for pra frente
- Status de cada ideia (aprovada / descartada / produzida / publicada / morta)

Tag no Obsidian: `#pipeline/viral-research` pra ver histórico e identificar o que tá virando post.
