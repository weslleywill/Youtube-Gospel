# PIPELINE 12 — Pinterest Orgânico (GAP BR fitness)

> Pipeline 12 de 12 • Canal subutilizado no fitness BR. Tráfego frio barato e duradouro → landing ebook R$37.

## Objetivo
Transformar carrosséis IG de alto engajamento em pins Pinterest (5 pins por carrossel), capturar tráfego orgânico do Pinterest BR pro link Hotmart, medir cliques/impressões após 30 dias.

**Por que Pinterest?** No BR, fitness masculino iniciante tem buscas orgânicas no Pinterest ("treino em casa", "treino iniciante", "ficha treino") com competição absurdamente menor que IG/TikTok. E cada pin vive MESES (não some em 48h como reel).

## Quando disparar (gatilho)
- Carrossel IG bateu engajamento >= 1.3x média do perfil (candidato a reaproveitar)
- **Semanalmente**: todo sábado manhã, produzir 5 pins da semana (meta: 20 pins/mês)
- Lançamento de novo conteúdo evergreen (ex: ebook) → burst de 15-20 pins promovendo o link
- Expansão pra novas keywords (quando pipeline 01 identificar volume novo no Pinterest)

## Inputs necessários
- **Carrossel IG** com boa performance (link do post + imagens dos slides)
- **Conta Pinterest Business BR** configurada (tem que ser business, não personal — dá acesso a analytics)
- **Rich Pins ativos** (product pins se aplicável, article pins pra conteúdo)
- **Landing page Hotmart** do ebook com UTM Pinterest configurada
- **Ferramenta de design**: Canva ou similar pra montar pins 2:3 (1000x1500)

## Passo a passo

### Passo 1 — Skill `claude-seo` (keyword research Pinterest BR)
Pinterest tem mecânica de busca PRÓPRIA — não copia do Google. Keywords específicas.
```
/claude-seo plataforma: Pinterest BR,
nicho: fitness iniciante masculino,
keywords alvo: treino em casa, treino iniciante, ficha de treino, 
treino costas, treino peito, como ganhar massa, musculação iniciante,
intent: informacional + salvamento (usuário salva pra ver depois),
extrair: long-tail com volume > 500/mês
```
**O que espero**: lista de 20-30 keywords Pinterest BR com volume aproximado + intent.

**Nota**: ferramentas tipo Pinterest Trends (nativo) ou Pin Inspector/PinClicks ajudam. Skill gera hipóteses, ferramenta valida.

### Passo 2 — Skill `repurpose` (adaptar carrossel IG → pins Pinterest)
Pinterest é **vertical 2:3** (1000x1500). IG carrossel é 4:5 (1080x1350). Precisa re-mastering, não é crop.
```
/repurpose input: [carrossel IG original],
destino: Pinterest pins 2:3,
estrutura por pin: 
  - Título visual grande (fonte legível mobile 300px)
  - 1 subtítulo com keyword Pinterest
  - Logo pequeno do Weslley (canto)
  - Visual preto + laranja (paleta da marca)
```
**O que espero**: briefing de design pra 5 pins distintos baseados no mesmo carrossel — cada pin explora uma keyword diferente (variação do passo 1).

### Passo 3 — Skill `social-content` (estratégia Pinterest BR)
Pinterest tem timing e comportamento diferentes.
```
/social-content plataforma: Pinterest BR,
estratégia mensal: 20 pins (5/semana),
mix: 60% pins novos + 40% re-pin variação de pin antigo que performou,
boards (pastas): 
  - "Treino Iniciante" (geral, 80% pins)
  - "Ficha de Treino" (específico)
  - "Erros Comuns Academia" (alinhado com tom Weslley)
  - "O Treino Que Ninguém Vê" (board dedicado ao ebook)
horário peak BR: manhã 7-9h + noite 20-22h
```
**O que espero**: calendário mensal + descrições de cada board + tags padronizadas.

### Passo 4 — Skill `copywriting` (descrição + título de cada pin)
Pinterest exige texto — algoritmo lê título, descrição e alt text.
```
/copywriting formato: pin Pinterest BR,
input: [conteúdo base + keyword alvo],
estrutura:
  - Título: 40-70 char com keyword principal natural (não keyword stuffing)
  - Descrição: 100-500 char, tom amigo, inclui keyword + 2-3 relacionadas naturalmente,
  - CTA no final: "Salva pra consultar na academia" OU "Link pro ebook R$37 com tudo"
  - Alt text: descrição da imagem com keyword (3-5 palavras)
```
**O que espero**: texto completo pronto pra copiar+colar no Pinterest.

### Passo 5 — Criar 5 variações por carrossel origem
Do mesmo carrossel IG, gerar 5 pins distintos:

| Pin | Ângulo | Keyword alvo | Título sugerido |
|-----|--------|--------------|-----------------|
| 1 | Problema direto | "remada iniciante" | "Como fazer remada certa (erros de iniciante)" |
| 2 | Pergunta | "remada como fazer" | "Sua remada tá certa? Checklist rápido" |
| 3 | Numerado | "erros de treino iniciante" | "5 erros de iniciante na remada (e como corrigir)" |
| 4 | Antes/depois | "remada erro vs certo" | "Remada errada x certa: diferença visual" |
| 5 | Guia | "ficha treino costas" | "Ficha de treino de costas (iniciante BR)" |

**Regra**: cada pin puxa keyword diferente. Não repetir título no Pinterest — algoritmo rebaixa duplicatas.

### Passo 6 — Agendar e publicar
- **Manual**: publicar direto no Pinterest Business pela semana (é chato mas controlado)
- **Automatizado (futuro)**: MCP `buffer-mcp` ou Tailwind (ferramenta especializada Pinterest)

Cada pin vai:
- Em 1 board principal (o mais relacionado)
- Em 1-2 boards secundários (cross-posting controlado — mais de 3 boards = spam)
- Com link direto pra landing Hotmart com UTM `utm_source=pinterest&utm_medium=organico&utm_campaign=[tema]&utm_content=pin[N]`

### Passo 7 — Monitorar após 30 dias (análise dedicada)
Pinterest tem ciclo LENTO. Não olhar em 7 dias — dá a impressão de flop.

**Métricas Pinterest a trackear (30 dias pós-publicação)**:
- Impressões do pin
- Cliques pro link (saída pra Hotmart)
- Saves do pin
- Taxa de clique pro link (cliques/impressões — meta >= 0.5%)
- Conversões rastreadas no GA4 via UTM

### Passo 8 — Iterar
Identificar top 3 pins do mês (por cliques) e:
- Criar 5 variações do pin vencedor (pipeline recomeça com esse como base)
- Descartar pins com < 100 impressões em 30 dias (não vai virar)
- Re-pin pins médios em boards alternativos (pode ser re-descoberto)

## Outputs esperados
- `pinterest/pins/YYYY-MM-DD-[slug]/` com 5 arquivos .md (1 por pin):
  - Título, descrição, alt text, board destino, keyword alvo, link com UTM
- `pinterest/boards/` com descrição de cada board (atualização rara)
- `pinterest/analytics/YYYY-MM.md` relatório mensal de cliques + impressões + top pins
- Link pra carrossel IG origem de cada pin

## Métricas de sucesso

**Mês 1** (baseline, expectativas baixas):
- 20 pins publicados
- >= 500 impressões agregadas
- >= 10 cliques pro link

**Mês 3**:
- 60 pins publicados
- >= 5.000 impressões/mês
- >= 100 cliques/mês pro link
- 1-3 pins "esverdeando" (consistentemente batendo impressões)

**Mês 6** (se estratégia funciona):
- >= 20.000 impressões/mês
- >= 400 cliques/mês
- >= 5 vendas diretas atribuídas (UTM pinterest)
- CPA de pinterest orgânico efetivamente R$0 (custo é tempo de produção)

**Critério de continuidade**: se aos 3 meses ainda tem < 50 cliques/mês, revisar keyword strategy. Se aos 6 meses ainda tem < 200 cliques/mês, descartar canal e realocar tempo.

## Quando NÃO usar
- Quando carrossel IG origem foi flop (não reaproveitar conteúdo ruim)
- Quando não tem landing page otimizada pra mobile (Pinterest é 80% mobile BR)
- Quando não tem UTMs configuradas (sem medição é cego)
- Quando oferta não existe ainda (sem ebook pronto, tráfego Pinterest é perdido)
- Nos primeiros 60 dias do projeto — focar IG+TikTok primeiro, Pinterest é canal de expansão

## Regra de ouro

> "Pinterest é maratona, não sprint. Se você quer impacto em 7 dias, não é este pipeline."

Diferente de IG/TikTok, cada pin precisa de 4-8 semanas pra mostrar se vai "pegar". Paciência obrigatória.

## Regras de tom no Pinterest

Pinterest tem cultura diferente — mais "save pra depois" que "engaja agora". Isso casa bem com o tom do Weslley:
- ✅ Títulos informacionais ("Como fazer X", "Checklist de Y", "Guia de Z")
- ✅ Visuais limpos, não clickbait chocado
- ✅ Paleta da marca (preto + laranja) mantida
- ✅ 1ª pessoa discreta ("Como eu corrigi minha remada" vs só "Como fazer remada")
- ❌ Clickbait agressivo
- ❌ Thumbnails estilo YT ("🚨 ISSO VAI TE CHOCAR")
- ❌ Emojis 🔥💪 em excesso nos títulos

## Integração com Obsidian

Template `_obsidian-setup/_templates/pinterest.md`. Campos:
- Lista de pins publicados + keyword alvo + board
- Performance (impressões, cliques) por pin, atualizada mensal
- Boards ativos + descrição
- Queries vencedoras (keywords que mais convertem → alimenta pipeline 01 pra criar mais conteúdo IG)
- Top pins do mês (candidatos a variações)

Tag Obsidian: `#pipeline/pinterest`, `#organico-frio`, `#evergreen`, `#mensal`. Cross-link com `#pipeline/reaproveitamento` (input de carrosséis IG) e `#pipeline/analytics` (reporting integrado).

## Nota estratégica

Este pipeline é **upside assimétrico**. Custa pouco (só tempo de adaptação), risco é zero (canal nunca atrapalha outros), e se "pegar" rende tráfego estável por meses.

Se em 6 meses o Pinterest virar fonte de 100+ cliques/mês pro ebook com UTM rastreado, isso é equivalente a um ad de R$600-900/mês rodando perpétuo e grátis.

Gap subexplorado + paciência = vantagem composta.
