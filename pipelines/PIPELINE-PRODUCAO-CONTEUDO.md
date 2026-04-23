# PIPELINE 02 — Produção de Conteúdo (Ideia → Peça Pronta pra Gravar)

> Pipeline 2 de 12 • Transforma 1 ideia validada em roteiro final + brief de thumb/capa + plano de gravação.

## Objetivo
Sair de "tenho uma ideia" pra "posso gravar agora no celular" em menos de 40 min, com roteiro na voz real do Weslley.

## Quando disparar (gatilho)
- Saída do `PIPELINE-VIRAL-RESEARCH.md` (ideia aprovada com score >= 2/4)
- Saída do `PIPELINE-STORYTELLING-CONSTRUCAO.md` (erro real com narrativa definida)
- Reação a acontecimento do dia (ex: treino que deu errado hoje → quero postar ainda hoje)
- Pedido direto: "monta o roteiro desse aqui"

## Inputs necessários
- **Ideia base**: título + hook + AEI marcado (vem do pipeline 01 ou 10)
- **Plataforma primária**: IG Reel / YT Short / TikTok (escolher 1; adaptação entra no pipeline 03)
- **Duração alvo**: 15s / 30s / 45s / 60s
- **Gravação**: vai ser a favor (no espelho, falando) ou B-roll (treinando)?
- **Voz de referência**: confirmar que a skill `script` já foi calibrada com os vídeos antigos do Weslley

## Passo a passo

### Passo 1 — Skill `hook-writer-sms` (5 opções de hook de 2 segundos)
Hook é obrigatório em vídeo curto — 2 segundos ou perde.
```
/hook-writer-sms tema: [ideia], persona: homem 20-35 iniciante academia,
tom: vulnerabilidade + confissão, formato: vídeo vertical 9:16, 5 opções distintas
```
**O que espero**: 5 hooks curtos. Cada um com ângulo diferente (confissão / mito / erro / pergunta provocativa / contradição).

**Regra de validação**: se o hook tem "nesse vídeo você vai aprender" ou "3 dicas que", descarta. Hook de infoprodutor morre no scroll.

### Passo 2 — Skill `script` (roteiro completo na voz do Weslley)
Usar o hook escolhido + a ideia aprovada.
```
/script ideia: [título], hook escolhido: [passo 1],
duração: 30s, plataforma: IG Reel, voz: calibrada (perfil Weslley),
estrutura: hook → bullet/história → CTA suave
```
**O que espero**: roteiro palavra por palavra, com marcação de tempo (0-2s, 3-10s, 11-25s, 26-30s), direção de corte e fala de câmera vs. B-roll.

**Validar**: passar o roteiro pelo filtro TOM-DE-MARCA. Se tem "dedicação, superação, foco" → refazer. Se tem 1ª pessoa + detalhe específico + admissão honesta → aprova.

### Passo 3 — Skill `create-viral-content` (otimizar retenção)
Passar o roteiro do passo 2 pela skill pra cortar gordura e aumentar densidade.
```
/create-viral-content input: [roteiro do passo 2],
plataforma: Instagram Reel + TikTok, objetivo: retenção > 70% até metade,
regra: cortar qualquer frase que não prove ou não provoque
```
**O que espero**: roteiro v2, mais enxuto, com 1-2 "mini-hooks" no meio (frases que prendem quem tá pra sair).

### Passo 4 — Skill `copywriting` (legenda de publicação)
Legenda curta, em 1ª pessoa, convidando pra salvar + comentar. **NUNCA** CTA agressivo.
```
/copywriting legenda IG Reel, tema: [ideia], tom: amigo WhatsApp,
CTA: convite pra conversa ("qual foi o seu?", "me conta aqui"),
tamanho: 4-6 linhas máx, hashtags: 5-8 mistas (grandes + nicho BR)
```
**O que espero**:
- Legenda de 4-6 linhas
- CTA conversacional (não "compra agora")
- 5-8 hashtags (mistura grandes tipo #fitnessbrasil com nicho tipo #treinoiniciante)
- Se fizer claim de resultado, incluir disclaimer de individualidade

### Passo 5 — Brief de thumb/capa (pra IG + YT Short)
Gerar texto pra capa do Reel + título pro Short (YT exige título diferente).
- **Capa IG Reel**: 3-5 palavras de impacto, fonte grande, contraste preto+laranja
- **Título YT Short**: 40-60 caracteres, com keyword do `PIPELINE-VIRAL-RESEARCH` passo 4
- **Descrição do Short**: 1 parágrafo + CTA pro perfil

### Passo 6 — Checklist de gravação
Montar um mini-briefing pra o Weslley gravar no celular:
- [ ] Cenário (academia / quarto / casa)
- [ ] Figurino (preto / regata / camiseta da marca)
- [ ] Iluminação (natural / anel de luz)
- [ ] Mic (celular / lapela)
- [ ] Tempos alvo (0-2s hook, 3-25s desenvolvimento, 26-30s CTA)
- [ ] Variações a gravar (mínimo 2 tomadas — A-roll + variação de hook)

## Outputs esperados
Arquivo `instagram/YYYY-MM-DD-[slug].md` (ou `youtube/`, ou `tiktok/` conforme plataforma primária) com:
1. Roteiro final v2 (marcado por tempo)
2. Hook escolhido + 4 alternativos (caso queira regravar)
3. Legenda pronta pra copiar+colar
4. Hashtags
5. Brief de capa
6. Checklist de gravação
7. AEI marcado
8. Link pra próximo pipeline: `PIPELINE-REAPROVEITAMENTO.md` (quando peça for gravada e publicada)

## Métricas de sucesso
- **Tempo total**: roteiro pronto em < 40 min
- **Taxa de gravação**: >= 80% dos roteiros saem gravados em 72h (senão tá produzindo mais do que consegue filmar)
- **Retenção alvo (primeira semana pós-publicação)**: >= 65% até metade do vídeo
- **Taxa de aprovação TOM-DE-MARCA**: 100% (roteiro com palavra banida não publica)

## Quando NÃO usar
- Não usar pra story de reação rápida (isso é feeling direto, sem roteiro)
- Não usar pra longform YT (mais de 3 min) — precisa de pipeline próprio com BDA estendido
- Não usar pra ad pago — ad parte do pipeline 04 (orgânico → pago)

## Regras obrigatórias de tom (sanity check final antes de publicar)
- [ ] 1ª pessoa ("eu errei", "tô testando", "não sei ainda")
- [ ] Admissão de limite em algum lugar do roteiro
- [ ] Nenhuma palavra banida (lista em TOM-DE-MARCA.md)
- [ ] Nada de "transforme", "garantido", "definitivo", "revolucionário"
- [ ] Hook em 2 segundos de pé (não enrola)
- [ ] CTA suave, conversacional

## Exemplo de execução (nicho fitness BR)

**Input**: ideia 3 do pipeline 01 — "Treinei remada errado por 8 meses"

**Passo 1 — Hooks gerados**:
1. "Oito meses fazendo remada errado. Descobri ontem." ✅ (escolhido)
2. "Se sua remada não tá puxando costas, tá fazendo isso aqui."
3. "Ontem vi um vídeo e percebi: tô treinando errado há 8 meses."

**Passo 2 — Roteiro (30s)**:
```
[0-2s HOOK — câmera no espelho, regata preta]
"Oito meses fazendo remada errado. Descobri ontem."

[3-15s DESENVOLVIMENTO — B-roll puxando errado + correto]
"Eu travava a escápula. Puxava com o braço, não com as costas.
Meu personal nunca corrigiu. Vi esse vídeo do @ontem e parou moeda."

[16-25s CORREÇÃO — espelho de novo]
"Agora: retração de escápula primeiro. Cotovelo perto do corpo.
Puxa como se fosse estocar o cotovelo pro teto."

[26-30s CTA]
"Você também faz isso sem perceber? Me conta aqui embaixo."
```

**Passo 4 — Legenda**:
```
8 meses de treino e tava errando remada.
Não sou personal, tô aprendendo junto.
Se esse vídeo te ajudou, salva pra lembrar na hora do treino.

#remada #costas #treinoiniciante #fitnessbrasil #musculacao
```

**AEI**: Autoridade (40%) — erro + correção técnica com evidência pessoal.

## Integração com Obsidian

Usar template `_obsidian-setup/_templates/producao-conteudo.md`. Campos:
- Link pra ideia origem (pipeline 01 ou 10)
- Roteiro v2 completo
- Status de gravação (planejado / gravado / editado / publicado)
- Data de publicação + link do post
- Métricas reais após 7 dias (views, retenção, saves, compartilhamentos)
- Próximo passo: se performou bem → pipeline 03 (reaproveitamento) ou pipeline 04 (virar ad)

Tag Obsidian: `#pipeline/producao`, plataforma específica (`#ig-reel`, `#yt-short`, `#tiktok`), AEI (`#autoridade` / `#engajamento` / `#influencia`).
