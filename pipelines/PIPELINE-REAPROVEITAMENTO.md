# PIPELINE 03 — Reaproveitamento (1 Peça → 3 Adaptações)

> Pipeline 3 de 12 • Regra-mãe do 06: 1 conteúdo original vira no mínimo 3 peças em plataformas diferentes.

## Objetivo
Sair de "gravei um reel" pra "publiquei em IG + YT Short + TikTok com adaptação real de formato, hook e hashtag" — sem copy-paste preguiçoso.

## Quando disparar (gatilho)
- Peça original foi publicada há >= 24h (já tem dados iniciais de performance)
- Peça original performou dentro ou acima da média do perfil (se foi flop, revisar antes de reaproveitar)
- Início de semana: lotar calendário das outras plataformas com o melhor da semana anterior
- Semanalmente: auditoria — "o que postamos no IG e ainda não virou YT/TikTok?"

## Inputs necessários
- **Peça original** (link do Reel IG, arquivo mp4, ou URL pública)
- **Plataforma de origem**: normalmente IG Reel (prioridade do Weslley)
- **Performance atual**: views, retenção, saves, compartilhamentos
- **Decisão**: adapta pra 2 (YT Short + TikTok) ou 3 (YT Short + TikTok + carrossel IG estático)

## Passo a passo

### Passo 1 — Skill `repurpose` (transcrever + reescrever pra TikTok)
A skill baixa o reel, transcreve e gera variação pra nova plataforma.
```
/repurpose url: [link IG Reel], novo formato: TikTok,
ajustes: hook mais rápido (1s), duração: 15-21s,
gírias BR TikTok ok, manter voz do Weslley
```
**O que espero**:
- Transcrição completa do reel original
- Roteiro reescrito em TikTok-style (ritmo mais acelerado, mais cortes)
- Hook ajustado (TikTok tem scroll ainda mais rápido que IG)
- Sugestão de áudio viral BR pra trilhar

### Passo 2 — Skill `repurpose` (adaptar pra YT Short)
Rodar segunda vez com parâmetros diferentes.
```
/repurpose url: [mesmo link], novo formato: YouTube Short,
ajustes: título SEO-friendly, descrição com keyword,
duração: 40-60s (YT Short aceita mais fôlego que TikTok),
CTA: inscreva-se no canal + link pro IG na descrição
```
**O que espero**:
- Título YT Short (40-60 char, com keyword)
- Descrição de 2-3 parágrafos com keyword
- Tags YT (10-15 relevantes)
- Roteiro adaptado (pode ter mais desenvolvimento, público YT lê legenda)

### Passo 3 — Skill `social-content` (estratégia de publicação multi-canal)
Pra definir horário, frequência e qual peça vai pra qual plataforma.
```
/social-content calendário semanal, 3 plataformas (IG, TikTok, YT Shorts),
persona: homem 20-35 BR, tom: autenticidade radical,
horários peak BR: IG 19-21h, TikTok 12-13h e 20-22h, YT variável,
AEI 40/30/30
```
**O que espero**: planejamento de quando postar cada adaptação (não publicar os 3 no mesmo dia — distribuir na semana).

### Passo 4 — Skill `carousel-writer-sms` (opcional: virar carrossel IG estático)
Se o reel tem densidade informacional boa, extrair 6-8 slides pra carrossel estático. Carrossel fica no feed (reel some) e salva melhor.
```
/carousel-writer-sms input: [transcrição do reel],
formato: IG carrossel 8 slides 4:5,
visual: preto + laranja, fonte grande,
estrutura: capa (hook) → 6 slides conteúdo → slide CTA (salve / compartilhe)
```
**O que espero**:
- 8 slides com texto pronto
- Brief visual por slide (o que mostrar)
- Slide final com CTA suave
- Legenda separada pro post do carrossel

### Passo 5 — Adaptação de hashtags por plataforma
Hashtag não é universal. Ajustar por cultura da plataforma:

| Plataforma | Qtd | Estilo BR |
|------------|-----|-----------|
| IG Reel    | 5-8 | Mista: 2 grandes (#fitnessbrasil), 3 médias (#treinoiniciante), 3 nicho (#musculacaonatural) |
| TikTok     | 3-5 | Mais casual: #fyp #fy #treino #academia #fitnessbr |
| YT Short   | Tags field | 10-15 tags (não hashtag na descrição, usar tags) |
| IG Carrossel | 8-15 | Pode mais hashtags que reel, público feed lê descrição |

### Passo 6 — Adaptação de aspect ratio e corte
- IG Reel: 9:16 (1080x1920)
- TikTok: 9:16 (1080x1920) — mesmo arquivo
- YT Short: 9:16 (1080x1920) — mesmo arquivo
- Carrossel IG: 4:5 (1080x1350) — extrai frames ou remonta

Se a peça original foi gravada em 9:16, os 3 formatos de vídeo servem. Só o carrossel exige remontagem.

### Passo 7 — Sanity check (tom consistente entre plataformas)
Validar que em nenhuma das 3 adaptações o tom saiu do TOM-DE-MARCA. TikTok tem tentação de usar hook mais clickbait — resistir.

- [ ] Nenhuma das versões usa palavra banida
- [ ] 1ª pessoa mantida nas 3
- [ ] Disclaimer de individualidade (se aplicável) em todas
- [ ] AEI da peça original mantida (Autoridade continua Autoridade)

## Outputs esperados
Pasta `output/YYYY-MM-DD-[slug]/` com 3 subpastas:
- `ig-original/` → peça original + legenda + hashtags (referência)
- `tiktok/` → roteiro adaptado + áudio sugerido + hashtags TikTok
- `yt-short/` → roteiro + título + descrição + tags
- `carrossel-ig/` (opcional) → 8 slides .txt + brief visual + legenda

## Métricas de sucesso
- **Taxa de reaproveitamento**: >= 80% das peças com engajamento médio+ viram 3 adaptações em até 7 dias
- **Economia de produção**: adaptar deve custar < 30% do tempo de criar do zero (senão vira criação, não reaproveitamento)
- **Performance cross-platform**: adaptação em TikTok/YT Short deve fazer >= 50% do engajamento da original (reconhecer que cada plataforma tem teto próprio)
- **Alcance incremental**: seguidores únicos somados nas 3 plataformas > 1.5x o da plataforma original

## Quando NÃO usar
- Peça original foi flop extremo (< 30% da média) — não adianta reaproveitar conteúdo que morreu
- Peça é reação a acontecimento super local (tipo "foi pra academia agora, olha isso") — perde relevância na adaptação
- Se a adaptação vai exigir reescrever 80%+ do roteiro, não é reaproveitamento, é produção nova (volta pro pipeline 02)

## Regra de ouro

> "Reaproveitamento é ajuste, não reescrita. Se precisa reescrever do zero, não tá reaproveitando."

Se a skill `repurpose` devolveu roteiro irreconhecível da original, é sinal que a peça original não se adapta — descarta e segue.

## Exemplo aplicado (nicho fitness BR)

**Peça original**: Reel IG "Treinei remada errado por 8 meses" (30s, 12k views em 48h)

**Adaptação TikTok** (21s, ritmo acelerado):
- Hook mudou: "8 MESES. Fazendo isso aqui." (corte direto pra remada errada)
- Áudio: trending BR "plot twist" sound
- Hashtags: #fy #fyp #treino #academia #fitnessbr

**Adaptação YT Short** (55s, mais fôlego):
- Título: "Remada errada que eu fiz por 8 meses (como corrigir)"
- Descrição com keyword: "Tutorial de remada, como fazer remada correta..."
- CTA: inscreva no canal + link IG na descrição

**Carrossel IG** (8 slides):
- Slide 1 capa: "Eu errava remada. Por 8 meses."
- Slides 2-7: mostrar erro vs. correto em fotos + explicação
- Slide 8: "Salva aí pra lembrar no treino."

## Integração com Obsidian

Template `_obsidian-setup/_templates/reaproveitamento.md`. Campos:
- Link da peça original (IG)
- Performance original (views, retenção, saves após 7d)
- 3 adaptações (link pra cada arquivo em `output/`)
- Datas de publicação de cada adaptação
- Performance de cada adaptação após 7 dias
- Razão (ROI do tempo gasto adaptando)

Tag Obsidian: `#pipeline/reaproveitamento`, `#multi-canal`. Link de volta pra `#pipeline/producao` da peça origem.
