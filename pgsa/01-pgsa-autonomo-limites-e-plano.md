# PGSA Autônomo via Chrome — o que dá e o que não dá

**Pedido do Weslley**: 10 comentários/dia em vídeos dos top 10 fitness BR, intervalo 30min entre cada, curtidas quando fizer sentido, autônomo (sem intervenção). "Movimentando meu IG" continuamente. Economizar tokens.

---

## 1. Honestidade técnica sobre o que é possível

### O QUE DÁ PRA FAZER 100% AUTÔNOMO
- **Dentro de uma sessão ativa do Claude Code**: eu abro Chrome extension, navego em YouTube/IG, identifico vídeos novos, redijo comentário, posto. Repito em loop.
- **Uma vez disparado, vai até terminar o batch** (ex: 10 comentários em ~5h com intervalos).
- Curtir vídeos/posts no caminho (gasto de token mínimo).

### O QUE NÃO DÁ (limitação real do Claude Code)
- **Claude Code não roda 24/7 em background**. A sessão existe enquanto tu tá com ele aberto. Se fechar/dormir o PC, para.
- **Não tem "daemon" nativo** que fica acionando Claude sozinho em horários programados.
- **Chrome extension precisa estar autenticado manualmente** nas contas (IG, YT) — uma vez só, mas tem que ser tu.

### COMO CONTORNAR (3 opções)

**Opção 1 — Manual trigger diário (mais simples)**:
Tu abre Claude 1x/dia, diz "roda PGSA hoje", eu executo os 10 comentários em ~5h com intervalos. Tempo teu: 30 segundos/dia pra disparar.

**Opção 2 — Scheduled trigger via `scheduled-tasks` MCP (meio autônomo)**:
Usa o MCP `scheduled-tasks` (já instalado) pra criar cron que dispara Claude em horários fixos. Ex: "9h da manhã todo dia, abrir Claude e rodar PGSA-daily". Ainda exige PC ligado e Chrome aberto.

**Opção 3 — Script externo + Claude API (100% autônomo real)**:
Criar um script Python que roda em cron do Windows (task scheduler), chama Claude API direto (não Claude Code), e usa Playwright/Selenium pra navegador ao invés de Chrome extension. **Custo**: ~R$15-25/mês em tokens da API + 4-6h de setup. Mas roda REALMENTE sozinho, mesmo com PC desligado (se hospedar em VPS).

---

## 2. Recomendação inicial: Opção 1 por 2 semanas → migra pra 2 ou 3

**Razão**: precisamos calibrar meu tom de comentário ANTES de automatizar. Se eu postar 100 comentários ruins antes da calibragem, queima teu perfil sem retorno.

Ciclo recomendado:
- **Semana 1**: Opção 1 (tu dispara diário, eu executo, tu revisa o primeiro batch de 3-5 pra ver se o tom tá bom)
- **Semana 2**: Opção 1 ainda, sem tua revisão (confiança calibrada)
- **Semana 3-4**: migra pra Opção 2 (scheduled trigger) — cron dispara, Claude roda
- **Mês 2+**: se validar, migra pra Opção 3 (script + API) pra roda em VPS 24/7

---

## 3. Os 10 criadores-alvo (rascunho — pediu que tu confirme)

Critérios: fitness BR + nicho musculação/hipertrofia + 100k+ seguidores + público masculino iniciante/intermediário + postagens recentes regulares.

| # | Nome | @IG | Canal YT | Por que escolher |
|---|---|---|---|---|
| 1 | Renato Cariani | @renatocariani | Canal Cariani | Maior do nicho, público BR, 5M+ YT |
| 2 | Leandro Twin | @leandrotwin | Leandro Twin | Iniciante + técnica, 2M+ YT |
| 3 | Pedro Tourinho | @pedrotourinho | Pedro Tourinho | Hipertrofia técnica, ~400k |
| 4 | Caio Bottura | @caiobottura | Caio Bottura | Cético, anti-bro-science, ~600k |
| 5 | Bruno Brazil | @brunobrazil | — | Clássico fisiculturismo (sintonia com teu futuro produto) |
| 6 | Paulo Muzy | @paulomuzy | Paulo Muzy | Médico + musculação, público culto |
| 7 | Renato Dyorio | @renatodyorio | Dyorio | Natural + ciência |
| 8 | Felipe Franco | @felipefranco | — | Hardcore, público clássico |
| 9 | Júlio Balestrin | @juliobalestrin | — | Clássico, ES-adjacente |
| 10 | Matheus Faccioni | @matheusfaccioni | Faccioni | Recomposição, TRT-friendly |

**PEDIDO**: confirma se todos fazem sentido pro teu nicho. Remove 1-2 se achar que não bate e sugere substitutos. Esse set muda o estilo de comentário.

---

## 4. Template de comentário — 3 estruturas que funcionam

**Regra de ouro**: comentário precisa contribuir com valor pro público do vídeo. Não "puxar saco" do criador. Não linkar nada. Não ser genérico. História pessoal + conexão ao tema + micro-insight.

### Estrutura A — Confissão conectada
> [algo específico do vídeo ele falou] me bateu aqui. Eu [contexto pessoal: magro, TRT, começando]. Por meses eu fiz [erro relacionado ao tema do vídeo]. Só virou quando [insight pessoal curto]. Vídeo bom — precisava escutar isso.

### Estrutura B — Pergunta que gera discussão
> Concordo com [ponto específico do vídeo]. Mas o que você acha de [pergunta técnica/contraditória curta]? Pergunto porque [contexto pessoal: tô em prep clássico, recomposição, TRT]. Tô no meio dessa dúvida.

### Estrutura C — Adição técnica (pra vídeos técnicos)
> Complementando o que você falou em [timestamp ou tema]: [micro-info útil baseada em experiência]. Funcionou pra mim no [contexto específico]. Mas depende — quem tá começando provavelmente deveria [adaptação iniciante].

**REGRA**: NUNCA usar palavras banidas do `TOM-DE-MARCA.md`. Nunca "método definitivo", "segredo", etc. Comentário passa por `brand-voice:enforce-voice` antes de postar.

---

## 5. Proteções contra shadowban

Ele aceitou o risco, mas vamos minimizar com:

- **Máx 10 comentários/dia** (limite acordado)
- **Intervalos de 30-45min entre cada** (jitter aleatório, não exato)
- **Só comenta em vídeos <72h de publicação** (comentário em vídeo velho = red flag)
- **Não comenta em 2+ vídeos do mesmo criador no mesmo dia** (parece bot)
- **Curte alguns vídeos ao longo do dia** (comportamento humano)
- **Zero link direto em nenhum comentário** (link em comentário = shadowban quase garantido)
- **Persistência** em arquivo `pgsa/historico-comentarios.md` — não comentar 2x no mesmo vídeo
- **Monitor shadowban**: se views dos teus reels caírem 50%+ em 7 dias vs baseline, pausar tudo

---

## 6. Economia de tokens

Teu pedido explícito. Como implementar:

- **Reuso de contexto**: mantenho "template base" em cache, só gero o custom por vídeo (curto: ~300-500 tokens por comentário)
- **Batch no output**: redijo os 10 comentários de uma só vez, depois posto em sequência (não carrego histórico completo a cada post)
- **Sem overthink**: regra de 3 variações no máximo por comentário; escolho a melhor, posto, próxima
- **Custo estimado por dia** (10 comentários): ~15-25k tokens Claude → ~R$0,40-0,80/dia = **R$12-24/mês**

Valor barato pro que entrega, mas **se quiser zero**: Opção 3 (script Python + API com prompt caching agressivo) desce pra ~R$4-6/mês.

---

## 7. Entregável pra começar amanhã

Se aprovar esse plano, entrego antes de começar:
1. Lista final dos 10 criadores (com tua confirmação)
2. 5 comentários PRONTOS (amostra do tom) pra tu aprovar
3. Arquivo `pgsa/historico-comentarios.md` iniciado (tracker de idempotência)
4. Checklist de segurança Chrome extension (autenticar no IG + YouTube ANTES de eu tocar)
5. Primeira execução em supervisão (tu vê eu postando 3, aprova/rejeita, depois corre solto)

---

## 8. Kill switches

Paro automaticamente se:
- Views de teus próprios reels caírem 30%+ em 7 dias vs baseline de 500/média
- Algum comentário for apagado pelo criador (flag de "não agregou")
- Chrome extension der erro de "sua conta foi bloqueada por atividade suspeita"
- 3 comentários seguidos não receberem nenhuma curtida em 24h (ou o tom tá errado ou o timing)

Em qualquer kill, paro, reporto, replaneio.
