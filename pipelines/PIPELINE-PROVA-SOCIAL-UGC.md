# PIPELINE 11 — Prova Social UGC (DM de Cliente → Carrossel Autêntico)

> Pipeline 11 de 12 • Quando Weslley começar a vender, capturar DMs positivas reais (COM PERMISSÃO) e virar prova social. Zero tolerância com depoimento inventado.

## Objetivo
Transformar mensagens reais de clientes felizes em carrosséis de prova social autênticos, mantendo tom de marca e ética absoluta na captação e uso.

## Quando disparar (gatilho)
- Cliente manda DM positiva após comprar o ebook (tipo "cara, gostei muito", "ajudou demais", "o erro X que você falou eu fazia")
- Review ou comentário positivo específico (não genérico "muito bom!") em post público
- Email de resposta D+7 (sequência pós-compra do pipeline 06) com feedback qualitativo
- **Atingir 10 depoimentos acumulados** → produzir carrossel de prova social
- **Pré-lançamento** de ad novo: pegar 3-5 mais fortes pra usar como prova visual no criativo

## Inputs necessários
- **DM, email ou comentário público** com feedback específico (nome, situação, o que mudou)
- **Permissão explícita escrita** do cliente (template abaixo)
- **Acesso ao WhatsApp/Instagram** pra screenshot original (anonimizar depois se pedido)
- **Pasta organizada** `prova-social/originais/` (print raw) + `prova-social/aprovados/` (com permissão)

## Passo a passo

### Passo 1 — Identificar feedback qualitativo (não genérico)
Critérios pra candidato a prova social:
- ✅ Nomeia situação específica ("fazia remada errado igual você disse")
- ✅ Cita o ebook ou conteúdo direto ("o capítulo X me ajudou")
- ✅ Descreve mudança concreta (não "amei")
- ❌ Genérico demais ("muito bom!", "recomendo", "top")
- ❌ Sem contexto ("obrigado!")

Se feedback é genérico, responder com carinho mas NÃO usar como prova social.

### Passo 2 — MCP `whatsapp-mcp` (puxar DM original)
```
mcp call whatsapp-mcp → get_message_thread(contact: [nome/número]),
filtro: últimos 30 dias,
extrair: mensagem completa + timestamp + (se permitido) foto de perfil
```
Salvar screenshot limpo da conversa. Importante: capturar contexto (não só a msg elogio — também a pergunta do Weslley ou o que veio antes).

### Passo 3 — PEDIR PERMISSÃO EXPLÍCITA (template obrigatório)
**NÃO usar depoimento sem isso.** Responder no mesmo DM com texto padrão:

```
"Ei [nome], aqui é o Weslley de novo.
Muito obrigado pelo que você me mandou. Significa muito.

Queria te pedir uma coisa: posso usar essa mensagem sua 
como depoimento nos meus conteúdos? Tipo num carrossel pro Insta.

Duas opções:
1) Com seu nome e foto (seu Insta marcado se quiser)
2) Anônimo (só a mensagem, sem nome)

Se preferir 'nenhuma das duas', também tranquilo — eu respeito.
Só me fala qual que prefere?"
```

**Regras inegociáveis**:
- [ ] NUNCA usar sem resposta escrita explícita
- [ ] Se cliente demora > 7 dias pra responder, assumir "não" e não usar
- [ ] Guardar a permissão em `prova-social/permissoes/[nome]-[data].txt` (print + texto da resposta)
- [ ] Se cliente pedir anônimo, remover TODO detalhe identificável (foto, handle, primeira letra do nome — "L." vira "um cliente")

### Passo 4 — Skill `copywriting` (contextualizar o depoimento)
Depoimento cru no slide fica estranho. Contextualizar com frame.
```
/copywriting formato: slide de prova social,
input: [screenshot do DM com permissão],
estrutura: frame curto do Weslley antes (1 linha) + screenshot + 1 linha depois (observação honesta do Weslley),
tom: amigo comentando, não infoprodutor celebrando
```
**O que espero**: pra cada depoimento, 3 elementos:
- Frame antes: "Essa daqui é [nome], que comprou o ebook em março e me mandou semana passada."
- Screenshot (anonimizado conforme permissão)
- Nota do Weslley: "O legal é que ele achou o mesmo erro que eu demorei 8 meses pra ver. Esse tipo de retorno me faz continuar."

**Validação**: nota do Weslley não celebra venda ("mais um cliente feliz!"). Celebra a conexão/aprendizado.

### Passo 5 — Skill `carousel-writer-sms` (montar carrossel)
Juntar 3-8 depoimentos num carrossel único.
```
/carousel-writer-sms formato: IG carrossel 4:5,
slides: 1 capa + 5-7 depoimentos + 1 CTA,
estilo visual: preto + laranja + screenshots claros,
tom capa: honesto e tímido ("Gente real que comprou e comentou"), não ostentação
```
**Estrutura recomendada** (8 slides):
1. Capa: "Quem comprou o ebook e o que falou" (tímido, não "DEPOIMENTOS INCRÍVEIS")
2. Intro: "Sem edição, sem roteiro. Prints reais com permissão de cada um."
3-7. 5 depoimentos (1 por slide) com frame antes + screenshot + nota curta
8. CTA suave: "Se quiser saber mais do ebook, tá no link da bio. R$37 com garantia de 7 dias."

### Passo 6 — Skill `marketing-psychology` (sequenciar na ordem certa)
Ordem dos depoimentos importa.
```
/marketing-psychology input: [5 depoimentos aprovados],
objetivo: ordenar pra máxima variedade de objeções resolvidas,
princípio: primeiro depoimento mais próximo da objeção #1 do avatar (ceticismo),
último depoimento o mais forte emocionalmente (quem aplicou e teve mudança concreta)
```
**O que espero**: ordem sugerida + racional de por que cada depoimento está naquela posição.

### Passo 7 — Legenda + publicação
Legenda curta e humilde:
```
Essa galera aqui comprou o ebook e me mandou mensagem.
Tirei print com permissão de cada um (tá no carrossel).

Não é o "método revolucionário". É o básico honesto.
Se fizer sentido pra você também, o link tá na bio.
R$37, garantia 7 dias.
```

**AEI**: Autoridade 60% (prova social é autoridade derivada) / Influência 40%.

## Outputs esperados
- `prova-social/originais/[cliente-data].png` — screenshots sem edição
- `prova-social/permissoes/[cliente-data].txt` — texto de permissão com timestamp
- `prova-social/aprovados/[cliente-data].md` — versão final com metadados
- `instagram/prova-social/YYYY-MM-DD-carrossel.md` — carrossel pronto (texto de cada slide + brief visual)
- (Opcional) `ads/creative-prova-social/YYYY-MM-carrossel-ad.md` — versão adaptada pra ad Meta (ver pipeline 04)

## Métricas de sucesso
- **Permissão obtida**: 100% dos depoimentos usados (zero tolerância)
- **Salves**: >= 8% (prova social salva alto)
- **Conversão**: pico de DMs sobre ebook nas 72h após publicação (>= 30% acima da média semanal de DMs do pipeline 06)
- **Ticket médio após prova social publicada**: pode crescer se incluir bundle futuramente
- **Volume de novos depoimentos gerados**: publicar prova social gera mais gente comprando + mandando DM positiva (ciclo virtuoso) → monitorar crescimento DMs qualitativas por mês

## Quando NÃO usar
- **Sem permissão escrita** (nunca, em nenhuma circunstância)
- **Feedback genérico** ("amei!") — se nem o cliente foi específico, o carrossel não tem substância
- **Menos de 3 depoimentos** acumulados — carrossel fraco prejudica credibilidade
- **Cliente insatisfeito ou refundou** — óbvio, mas registro explícito
- **Em momento de polêmica** do Weslley (ex: se errou e tá pedindo desculpa na mesma semana, não publicar celebração)

## Regras inegociáveis (ética máxima)

- ❌ **NUNCA** editar mensagem do cliente pra "melhorar" — se precisa editar, não usa
- ❌ **NUNCA** inventar nome ou foto ou mesmo uma palavra a mais
- ❌ **NUNCA** agrupar frases de clientes diferentes em "um depoimento"
- ❌ **NUNCA** pedir pra cliente "regravar melhor" o depoimento
- ✅ **SEMPRE** guardar evidência da permissão
- ✅ **SEMPRE** oferecer opção anônima
- ✅ **SEMPRE** mostrar screenshot (texto cru, sem redesign em Canva com fonte bonita — parece fake)
- ✅ **SEMPRE** deixar nome do cliente visível se ele autorizou (se der medo "parece pouca gente", junta menos ego e mais honestidade — 3 reais valem mais que 10 falsos)

## Uso derivado em ads pagos

Quando tiver prova social aprovada e carrossel publicado, o pipeline 04 (orgânico → pago) pode gerar ad Meta com o carrossel como criativo. Regra:
- Permissão original cobre uso em ads? Checar cláusula do template. Se pediu pra usar "em carrossel do Insta", pedir autorização adicional pra ad (ad é escopo diferente).
- Template de 2ª autorização:
```
"Ei [nome], aquele carrossel que você autorizou performou bem.
Queria te perguntar: posso usar o print seu também em um anúncio pago
no Instagram/Facebook? Isso faz ele chegar em mais gente.
Mesma lógica — com nome ou anônimo, você escolhe. Se preferir 'não', tranquilo."
```

## Integração com Obsidian

Template `_obsidian-setup/_templates/prova-social.md`. Campos:
- Lista de depoimentos aprovados (base de dados viva)
- Para cada: cliente, data, texto cru, escopo de permissão (carrossel / ad / ambos / anônimo), link screenshot
- Carrosséis produzidos com link pros depoimentos usados
- Métricas de cada carrossel publicado

Tag Obsidian: `#pipeline/prova-social-ugc`, `#depoimento`, `#etica`. Cross-link com `#pipeline/funil-dm` (origem dos depoimentos via email D+7) e `#pipeline/organico-to-pago` (destino opcional em ad).

## Nota sobre timing

Este pipeline **só entra em cena depois das primeiras vendas acumuladas**. Hoje (fase 0 vendas), ele está em standby.

**Preparativos que valem fazer agora** mesmo antes de ter vendas:
1. Template de permissão já escrito (passo 3)
2. Pasta `prova-social/` criada
3. Email D+7 da sequência pós-compra (pipeline 06) pedindo feedback qualitativo

Assim, no dia da primeira venda boa, o sistema já tá pronto pra capturar.
