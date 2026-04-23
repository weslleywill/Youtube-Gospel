# BACKLOG FUTURO — Updates que ficaram pra depois

> Aprovado pelo Weslley mas guardado pra próximos ciclos. Não perder.

---

## 🎯 Regra geral

Cada item tem um **gate** que precisa ser cumprido antes de começar a construir. Não faz sentido investir tempo em coisa pra um cenário que não chegou.

---

## 📧 Item 1 — Newsletter email semanal

### O que é
Sequência de email semanal pra lista de interessados. Complementa IG — lista de email cresce **independente do algoritmo**, é posse do Weslley.

### Quando fazer
- [ ] Gate: **500+ seguidores ativos no IG** (significa base pra converter em email)
- [ ] Gate: **50+ DMs de pessoas interessadas** (prova que tem demanda)
- [ ] Gate: **Ebook vendendo minimamente** (pra ter o que mencionar na newsletter)

### Como construir
- Usar skill `email-sequence` + `marketing:email-sequence` (plugin)
- Provider: ConvertKit (grátis até 300 assinantes), Beehiiv, ou RD Station BR
- Integração: whatsapp-mcp pra capturar emails em DM automaticamente
- Cadência: 1 email/semana (quinta-feira, fim do dia)
- Conteúdo: storytelling (PIPELINE-STORYTELLING) + CTA soft pro ebook

### Estimativa
- Setup inicial: 4-6 horas
- Manutenção: 2 horas/semana (redigir + enviar)

### ROI esperado
- 500 assinantes × 25% open rate × 5% click-through × 3% conversão = **~2 vendas/email**
- Se 1 email/semana: ~8 vendas/mês (R$ 260/mês incremental)

---

## 💰 Item 2 — Dashboard de Dinheiro (Next.js)

### O que é
Extensão (ou reativação) do `dashboard-skills/` Next.js pra puxar em tempo real:
- Vendas Hotmart (via webhook/API)
- Custo Meta Ads (via pipeboard-meta-ads MCP)
- Vendas Google Ads / TikTok Ads
- Calcular ROAS, LTV, CAC instantâneos
- Gráfico diário + projeção mensal

### Quando fazer
- [ ] Gate: **Vendas recorrentes** (pelo menos 30 vendas/mês consistente)
- [ ] Gate: **Ads rodando** em pelo menos 2 plataformas (dados pra cruzar)
- [ ] Gate: **Dashboard Obsidian** saturou (já não comporta decisões diárias rápidas)

### Como construir
- Stack: Next.js (já existe em `dashboard-skills/`)
- Backend: Supabase free tier ou SQLite local
- Webhooks: Hotmart → Next.js API → save no DB
- MCPs: pipeboard-meta-ads pra puxar custos ads
- UI: cards em tempo real + gráficos Recharts

### Estimativa
- Setup inicial: 20-30 horas (é um mini-projeto)
- Manutenção: baixa (uma vez pronto)

### ROI esperado
- Decisões mais rápidas → economia em ads ruins
- Motivação diária (ver receita subir em tempo real)
- Não tem ROI direto em receita, mas acelera decisões

---

## ⏰ Item 3 — Benchmark automático mensal

### O que é
Cron job que todo dia 1 do mês:
1. Puxa métricas do mês anterior (GA4, Meta, vendas Hotmart, engagement IG)
2. Compara com mês anterior
3. Identifica top 3 e worst 3 peças
4. Calcula mudança de CAC, LTV, ROAS
5. Manda relatório pro Weslley via WhatsApp (ou email)
6. Sugere 3 ações concretas pro mês seguinte

### Quando fazer
- [ ] Gate: **2-3 meses de dados acumulados** (senão comparação é ruidosa)
- [ ] Gate: **MCPs de analytics configurados** (google-analytics, pipeboard-meta-ads)
- [ ] Gate: **n8n ou schedule setado**

### Como construir
- Orquestração: n8n (via n8n-mcp) OU skill `schedule` + cron
- Skills: `performance-analyzer-sms`, `content-pattern-analyzer-sms`, `marketing:performance-report`
- Disparo: todo dia 1, 8h da manhã
- Canal: WhatsApp-mcp OU email via `email-sequence`
- Formato: 1 página, bullets, gráficos ASCII simples

### Estimativa
- Setup inicial: 8-12 horas (configurar n8n workflow)
- Manutenção: 0 (roda sozinho)

### ROI esperado
- Garante que Weslley tome decisões baseadas em dados todo mês
- Evita "vivido por trás dos números"
- Sem ROI direto, mas melhora qualidade de decisões

---

## 🧰 Outros itens que podem virar backlog conforme evoluir

**Não aprovados pelo Weslley, mas deixar documentados** caso ele queira considerar:

### "Detector de quando recomeçar nicho"
Agent que analisa trend de crescimento e flaga se "esse nicho tá saturando pra você" — sinal pra diversificar.

### Sistema de depoimento automático
Pós-compra Hotmart, webhook dispara mensagem (com permissão) pedindo depoimento em áudio. Audio → transcreve → vira peça de prova social (PIPELINE-PROVA-SOCIAL-UGC).

### Landing page dedicada ao ebook (além do Hotmart)
Página própria com depoimentos, FAQ, tabela comparativa. Checkout Hotmart embedado. Melhora conversão em 20-40% (benchmark infoprodutor).

### Integração YouTube Long-form
Gravar videos de 10-20 min explicando conceitos do ebook. YouTube Long = SEO residual, busca "treino iniciante em casa" trafega por anos.

### Blog SEO completo (próprio, não medium)
Subir WordPress + `claude-seo`. Cluster de tópicos "treino em casa", "iniciante academia", "proteína natural". Ranking demora 6-12 meses mas vira ativo duradouro.

### Upsell curso R$97 pós-ebook
Curso em vídeo curto (5-10 módulos de 10 min). Oferecer pós-compra ebook. Benchmark: 10-15% das pessoas que compraram ebook compram o upsell.

### Pinterest pago
Quando Pinterest orgânico mostrar tração (3-6 meses), testar Pinterest Ads. CPM barato BR, audience feminina fitness explorando.

---

## 🗓️ Revisão deste backlog

Sempre que rodar PIPELINE-ANALYTICS mensalmente, conferir se algum gate virou verde. Se sim, considerar iniciar o item.

**Próxima revisão deste arquivo**: 2026-07-17 (3 meses depois do update).
