# PIPELINE 08 — Competitive Intelligence (Espiar 5 Concorrentes Semanalmente)

> Pipeline 8 de 12 • Saber o que concorrente tá fazendo, identificar gaps, roubar formato sem copiar tom.

## Objetivo
Mapear o que tá funcionando pros 5 concorrentes principais do Weslley no nicho fitness iniciante BR, identificar gaps de mensagem onde ele pode entrar, e gerar 3-5 ideias de conteúdo + 2-3 ideias de ad quinzenalmente.

## Quando disparar (gatilho)
- **Quinzenal** (a cada 2 semanas): rotina padrão
- **Novo concorrente surgiu** (alguém viralizou no nicho e cresceu rápido): inclui na lista
- **Antes de lançar ad novo**: ver o que concorrentes estão rodando agora pra evitar brigar pelo mesmo ângulo
- **Antes de lançar novo produto** (futuro): auditoria completa de ofertas concorrentes

## Inputs necessários
- **Lista de 5 concorrentes principais** (handles IG + YT se tiver). Sugestão de critério:
  - Nicho fitness iniciante BR (não bodybuilders profissionais)
  - Tamanho: 3 maiores (50k+ seguidores) + 2 menores em crescimento (5-30k)
  - Tom próximo ou oposto (contraste ajuda a encontrar gap)
- **Timeframe**: últimos 14 dias
- **Acesso**: Apify (pra `spy`), Meta Ad Library (pra `competitive-ads-extractor`)

## Passo a passo

### Passo 1 — Skill `spy` (scraping de virais dos 5)
Pra cada concorrente da lista, rodar scraping e pegar outliers dos últimos 14 dias.
```
/spy accounts: [@conc1, @conc2, @conc3, @conc4, @conc5],
período: últimos 14 dias,
filtro: outliers (views > 2x média do perfil),
extrair: hook transcrito, duração, tema, padrão visual, CTA
```
**O que espero**: lista consolidada dos top 3 virais de cada concorrente (15 peças total), com hook transcrito e tema marcado.

### Passo 2 — Skill `competitive-ads-extractor` (ads rodando agora)
Puxar ads ativos dos mesmos concorrentes via Meta Ad Library.
```
/competitive-ads-extractor sources: Meta Ad Library,
accounts: [@conc1-fbpage, @conc2-fbpage, ...],
filtro: ads ativos últimos 30 dias,
extrair: headline, primary text, CTA, formato (vídeo/imagem/carrossel), landing page destino
```
**O que espero**: matriz de ads ativos com:
- Quais concorrentes estão rodando ads (e quais não)
- Principais ganchos de copy usados
- Ofertas promovidas (preço, bônus, garantia)
- Formato preferido (quase sempre vídeo UGC no nicho)

### Passo 3 — Skill `claude-ads /competitor` (análise estratégica de cada ad)
Análise profunda de 3-5 ads de concorrentes que parecem estar há mais tempo rodando (sinal que convertem).
```
/claude-ads competitor-analysis ads: [3-5 selecionados],
identificar: framework (PAS/AIDA/etc), gatilhos mentais, big domino, avatar implícito,
comparar: com posicionamento do Weslley, marcar diferenças
```
**O que espero**: por cada ad, um mini-resumo do que tá funcionando + sugestão de contra-ataque ou complemento que o Weslley pode explorar.

### Passo 4 — Identificar GAPS (onde o Weslley pode entrar)
Matriz de cobertura temática. Pra cada tema, marcar se os concorrentes cobrem bem, mal ou não cobrem:

| Tema (fitness iniciante BR) | Conc1 | Conc2 | Conc3 | Conc4 | Conc5 | Gap? |
|------------------------------|-------|-------|-------|-------|-------|------|
| Erro + correção técnica      | ✓     | ✓     | -     | ✓     | -     | Parcial |
| Bastidor honesto (não só resultado) | -     | -     | -     | ✓     | -     | **GAP FORTE** |
| Vulnerabilidade radical      | -     | -     | -     | -     | -     | **GAP FORTE** |
| Dicas "como começar"         | ✓     | ✓     | ✓     | ✓     | ✓     | Saturado — evitar |
| Cutting / off-season         | ✓     | -     | ✓     | -     | -     | Parcial |
| Suplementação honesta        | -     | ✓     | -     | -     | -     | Parcial |

**Regra**: onde tem gap forte, Weslley tem mais chance de destacar (menos ruído). Onde tá saturado, só entra com ângulo muito diferente ou não entra.

### Passo 5 — Gerar 3-5 ideias de conteúdo explorando gaps
Passar os gaps identificados pra ideias concretas:
```
Gap: "Bastidor honesto" → ideias:
- "Esse é o meu treino real da semana — deu errado 3 vezes"
- "Como eu documento falha na dieta (e o que aprendo)"
- "Dia que pulei treino e o que pensei"

Gap: "Vulnerabilidade radical" → ideias:
- "Ainda não sei se isso que eu faço é o ideal. Mas..."
- "Coisas que eu achava que sabia sobre treino e não sabia"
- "Erros que eu cometo hoje, em 2026"
```

Enviar essas ideias pro `PIPELINE-VIRAL-RESEARCH` pra entrar na próxima matriz de validação.

### Passo 6 — Gerar 2-3 ideias de ad baseadas em hooks que funcionam
Dos 15 virais do passo 1, pegar os 3 com melhor estrutura de hook e adaptar pra ad do Weslley (sem copiar palavra por palavra).
```
Hook viral concorrente: "Seu ombro dói fazendo supino? Tá errando ISSO."
→ Adaptação Weslley: "Meu ombro doeu 2 meses fazendo supino. Descobri que fazia essa coisa."
(Mesma estrutura problema-descoberta, mas em 1ª pessoa vulnerável — tom do Weslley)
```

### Passo 7 — Relatório quinzenal de gaps + oportunidades
Consolidar em `competitive-intel/YYYY-QN.md`:
- Top 15 virais analisados (hook + tema + por que funcionou)
- Matriz de ads rodando nos concorrentes
- Matriz de cobertura temática com gaps marcados
- 3-5 ideias de conteúdo pra explorar gaps
- 2-3 ideias de ad inspiradas em hooks validados
- 1 observação de posicionamento (algo que concorrente tá errando e vale evitar)

## Outputs esperados
- `competitive-intel/YYYY-QN.md` (relatório quinzenal)
- `competitive-intel/matriz-gaps.md` (documento vivo, atualizado a cada ciclo)
- Ideias enfileiradas no `PIPELINE-VIRAL-RESEARCH`
- Ideias de ad enfileiradas no `PIPELINE-ORGANICO-TO-PAGO` ou direto pro `PIPELINE-ADS-MANAGEMENT`

## Métricas de sucesso
- **Gaps identificados por ciclo**: >= 2 gaps fortes
- **Ideias geradas que viram post**: >= 60% das ideias extraídas aqui são produzidas em 30 dias
- **Performance de peças "gap-filler"**: em média >= 1.2x a performance média do perfil (porque ocupam espaço vazio)
- **Tempo de execução**: < 60 min o ciclo completo

## Quando NÃO usar
- Não usar pra copiar concorrente palavra por palavra (isso é risco jurídico + identidade)
- Não usar concorrente de nicho muito distante (ex: nutricionista, yoga, crossfit) — ruído
- Não rodar toda semana (overfitting pra movimento dos outros — você vira reativo, não original)

## Regra inegociável

> "Observar pra aprender. Nunca pra imitar. Copiar estrutura ≠ copiar tom. O Weslley traduz tudo pra voz dele."

Se a ideia gerada aqui não passa no filtro "isso parece coisa que o Weslley diria no WhatsApp?", descarta.

## Exemplo aplicado (nicho fitness BR)

**5 concorrentes escolhidos** (hipotéticos):
- @conc1 — "Treino Simples", 180k, foco dicas técnicas
- @conc2 — "Academia do Zero", 45k, iniciante absoluto
- @conc3 — "Projeto Cutting", 80k, foco cutting/dieta
- @conc4 — "Diário Natty", 22k, em crescimento, tom honesto (concorrente mais próximo do Weslley)
- @conc5 — "Fitness Brasil", 500k, mainstream

**Gap identificado**: nenhum dos 5 explora o ângulo "eu ainda não sou expert, tô construindo junto". @conc4 tem algo parecido mas ainda posa de autoridade. Gap forte pro Weslley.

**Ideia gerada**: série "Ainda não sei" — 5 posts em que Weslley abre dúvidas reais que tem sobre treino/dieta e convida audiência pra discutir. AEI: Engajamento 70% + Autoridade 30%.

## Integração com Obsidian

Template `_obsidian-setup/_templates/competitive-intel.md`. Campos:
- Lista viva dos 5 concorrentes + handles + notas
- Matriz de gaps (atualizada a cada ciclo)
- Histórico de ciclos (link pra cada relatório quinzenal)
- Ideias geradas + status (backlog / produzida / postada / morta)

Tag Obsidian: `#pipeline/competitive-intel`, `#concorrentes`, `#gaps`, `#quinzenal`. Cross-link com `#pipeline/viral-research` (input) e `#pipeline/producao` (destino das ideias).
