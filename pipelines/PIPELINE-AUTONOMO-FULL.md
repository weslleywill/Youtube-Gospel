# PIPELINE 09 — Autônomo Full (Orquestração n8n End-to-End)

> Pipeline 9 de 12 • **Avançado. Opcional.** Só depois que os pipelines 1-8 estão estáveis e o Weslley tá vendendo de forma consistente.

## Objetivo
Automatizar a sequência inteira (pesquisa → produção → reaproveitamento → ads → análise) via orquestração no n8n, reduzindo intervenção manual ao mínimo (idealmente: Weslley só grava e revisa).

## Quando disparar (gatilho)
**NÃO DISPARAR** até que estes critérios sejam satisfeitos:
- [ ] Pelo menos 30 dias consistentes executando manualmente pipelines 1-8
- [ ] Pelo menos 20 vendas do ebook fechadas (funil provou que converte)
- [ ] Pipelines 1-8 têm templates estabilizados (não mudam mais toda semana)
- [ ] Weslley tem conta n8n self-hosted ou cloud configurada
- [ ] APIs necessárias conectadas (Meta, Hotmart, GA4, Instagram via Graph API)

Se qualquer item falhar, voltar pra execução manual e revisitar em 30 dias.

## Inputs necessários
- **Conta n8n ativa** (cloud ou self-hosted)
- **MCPs conectados**: n8n, buffer, whatsapp, google-analytics, meta-ads, tiktok-ads, mcp-google-ads
- **Webhooks Hotmart** configurados (Purchase, Refund, CartAbandoned)
- **Credentials storage** seguro (nunca hardcode em workflow)
- **Ideias validadas na fila** (output do pipeline 01) pra servir de matéria-prima

## Passo a passo

### Passo 1 — MCP `n8n-mcp` (mapear fluxo antes de construir)
Antes de construir qualquer workflow, desenhar no papel / Miro / Excalidraw o fluxo completo.
```
mcp call n8n-mcp → list_existing_workflows (ver o que já existe)
```

**Fluxo ideal (high-level)**:
```
[Trigger] Toda segunda 8h
    ↓
[Pipeline 01] Rodar viral research (inclui skills: viral + spy + tiktok-trends + claude-seo)
    ↓
[Output] 10 ideias → Airtable ou Notion (tabela "backlog de ideias")
    ↓
[Notificação] Weslley revisa e aprova 5 ideias
    ↓
[Pipeline 02] Pra cada ideia aprovada: gerar roteiro + legenda + hook (skill script)
    ↓
[Output] Roteiros → pasta Google Drive "pra gravar"
    ↓
[Weslley grava] manual (não dá pra automatizar)
    ↓
[Trigger manual] Weslley marca "gravei, tá no Drive"
    ↓
[Pipeline 03] Rodar reaproveitamento (skill repurpose)
    ↓
[MCP buffer] Agendar publicação em 3 plataformas nos horários peak
    ↓
[24h depois da publicação]
    ↓
[Pipeline 07] Coletar métricas (google-analytics-mcp + meta-ads-mcp + performance-analyzer)
    ↓
[Se performou acima da média] Disparar pipeline 04 (organico → pago) → criar ad variations
    ↓
[Weslley aprova variações] → subir no Meta/TikTok via MCP
    ↓
[Segunda seguinte] Ciclo recomeça + relatório semanal
```

### Passo 2 — MCP `n8n-mcp` (construir workflow modular)
Não fazer um workflow gigante. Fazer módulos pequenos que se conectam via webhooks internos.

**Workflows recomendados** (cada um é um node principal no n8n):
1. `w1_viral_research_weekly` — trigger cron segunda 8h
2. `w2_content_production` — trigger manual (via botão no Airtable ou webhook)
3. `w3_repurpose_3x` — trigger quando Weslley confirma gravação no Drive
4. `w4_buffer_scheduler` — recebe os 3 output do w3 e agenda via MCP buffer
5. `w5_weekly_analytics` — cron segunda 9h, gera relatório e manda no email/Slack
6. `w6_organic_to_paid_trigger` — observa métricas de posts, dispara quando atinge threshold
7. `w7_hotmart_webhook_handler` — recebe Purchase/Refund/Cart, atualiza dashboard
8. `w8_dm_triage` — (se whatsapp-mcp permitir) triar DMs e rotular intent (dúvida / compra / parceria)

### Passo 3 — MCP `buffer-mcp` (agendamento multi-canal)
```
mcp call buffer-mcp → schedule_post(
  platforms: [ig, tiktok, yt_shorts],
  content: [conteúdo adaptado por plataforma],
  scheduled_at: [horário peak calculado por plataforma]
)
```
**Regra**: nunca agendar os 3 no mesmo horário (parece bot). Espaçar pelo menos 2h entre plataformas. Preferencialmente em dias diferentes pra dar vida útil máxima.

### Passo 4 — Skill `paid-ads` + MCPs Meta/TikTok (ads semi-autônomos)
Aqui é onde o Weslley mais hesita em automatizar (e com razão — dinheiro). Regra: automação só propõe, nunca executa ad novo.

**Fluxo**:
- n8n detecta post bateu critério orgânico (pipeline 04 gatilho)
- Chama skill `ad-creative` pra gerar 3x3 variações
- Salva num Airtable/Notion como "propostas de ad pendentes"
- Notifica Weslley no WhatsApp: "3 variações prontas pra aprovar"
- Weslley aprova 1-3 no app (checkbox)
- Só DEPOIS de aprovação, MCP meta-ads sobe a campanha

**NUNCA** configurar subida automática de ad sem aprovação humana.

### Passo 5 — MCP `google-analytics-mcp` + dashboards
Automatizar relatório semanal em HTML ou Google Sheets.
```
mcp call google-analytics-mcp → run_report_suite(
  reports: [traffic, conversions, funnel, source],
  schedule: weekly_monday_9am,
  delivery: email to weslleywillaguiar@gmail.com + archive no Google Drive
)
```

### Passo 6 — Controles de segurança e observabilidade

**Fail-safes obrigatórios**:
- **Rate limiting**: máximo X chamadas de API por hora (evitar banimento)
- **Budget cap**: n8n nunca pode subir ad com budget > R$50/dia sem aprovação
- **Dry-run mode**: toda sub-skill de ad roda em dry-run primeiro (só gera preview)
- **Logs centralizados**: todo workflow loga em tabela master com timestamp + status
- **Alertas**: erro de API ou fluxo falho dispara notificação WhatsApp imediata
- **Kill switch**: variável global "AUTOMATION_ACTIVE=true/false" que pausa tudo se setada false

### Passo 7 — Onboarding gradual
Não ligar todos os 8 workflows de uma vez. Sequência recomendada:

**Mês 1**: só `w5_weekly_analytics` (relatório automático). Baixo risco, alto valor.

**Mês 2**: adicionar `w1_viral_research_weekly` (gera ideias, Weslley ainda aprova). Risco zero.

**Mês 3**: adicionar `w3_repurpose_3x` + `w4_buffer_scheduler`. Automatiza distribuição.

**Mês 4**: adicionar `w6_organic_to_paid_trigger` (só propõe, não sobe). Weslley valida.

**Mês 5+**: avaliar adicionar w7 e w8 se quiser. Chamar só depois de revisão completa.

## Outputs esperados
- `automacao/n8n-workflows/` com export JSON de cada workflow versionado
- `automacao/fluxograma-geral.md` com diagrama atualizado
- `automacao/observabilidade.md` descrevendo como checar saúde dos fluxos
- `automacao/kill-switch.md` com procedimento de emergência (como parar tudo)
- Log semanal de execução em `automacao/logs/YYYY-WNN.md`

## Métricas de sucesso
- **Uptime dos workflows**: >= 99% (falhas recuperáveis em < 1h)
- **Tempo economizado**: >= 10h/semana do Weslley (mensurado honestamente, não teatro)
- **Taxa de erro**: < 2% das execuções falham silenciosamente
- **ROI da automação**: custo (n8n + MCPs + tempo de manutenção) < valor das horas economizadas
- **Feedback humano preservado**: >= 90% das peças publicadas ainda têm olhar do Weslley antes de sair

## Quando NÃO usar
- **Antes dos critérios de entrada** (ver "Quando disparar" acima) — virar automação sem processo é garantia de caos
- Quando pipelines manuais ainda não estabilizaram templates — automatizar mudança é perda de tempo
- Quando Weslley não tem conhecimento mínimo de n8n — dependência externa é risco
- Em momentos de alta sazonalidade (Black Friday, lançamento) — manter controle manual

## Regra de ouro da automação

> "Automatize o chato, humanize o importante."

- Chato: agendar post, puxar relatório, mandar email, gerar variação inicial
- Importante: aprovar ad, responder DM pessoal, decidir mudança de posicionamento

**Nunca automatize**:
- Resposta de DM (perde o tom de amigo instantâneamente)
- Subida de ad sem aprovação humana
- Publicação de conteúdo sem revisão final
- Decisão estratégica (pausar campanha, trocar oferta)

## Integração com Obsidian

Template `_obsidian-setup/_templates/automacao-workflow.md`. Campos:
- Mapa atual de workflows ativos
- Último status de cada workflow
- Log de alterações (cada mudança em workflow = entrada nova)
- Métricas de economia de tempo (semana/mês)

Tag Obsidian: `#pipeline/automacao`, `#n8n`, `#avancado`. Cross-link com TODOS os outros pipelines (este é o orquestrador).

## Checklist de go-live (antes de ligar qualquer workflow)

- [ ] Backup do processo manual documentado (pra caso de rollback)
- [ ] Credentials guardadas em secret store, não em texto plano
- [ ] Kill switch testado e funcionando
- [ ] Alertas de erro configurados pro WhatsApp do Weslley
- [ ] Log centralizado ativo
- [ ] Plano de rollback escrito (como voltar pra manual em caso de emergência)
- [ ] Primeira semana: rodar em dry-run mode + comparar output com processo manual
- [ ] Segunda semana: ligar 1 workflow por vez, observar 7 dias antes de ativar o próximo
