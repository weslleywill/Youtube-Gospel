# FALTA FAZER — Setup manual do Weslley

> Checklist acionável do que depende de você executar. Faça aos poucos, na ordem. Marque com [x] conforme for fazendo.

**Prioridade**: do mais importante (começar primeiro) pro menos urgente.
**Tempo total estimado**: ~6-10 horas (distribuídas em 2-4 semanas).

---

## 🟢 NÍVEL 1 — Essencial (sem isso, nada funciona bem)

### 1. Ativar Obsidian ⏱️ ~30 min ⭐ CRÍTICO

- [ ] Baixar/abrir Obsidian (https://obsidian.md)
- [ ] "Open folder as vault" → selecionar pasta `06-distribuicao-e-monetização`
- [ ] Settings → Community plugins → Turn on
- [ ] Instalar e habilitar os **3 críticos**:
  - [ ] **Dataview** (depois: Settings → Dataview → Enable JavaScript Queries = ON)
  - [ ] **Templater** (depois: Settings → Templater → Template folder location = `_obsidian-setup/_templates`)
  - [ ] **QuickAdd** (criar 6 macros, 1 pra cada template em `_obsidian-setup/_templates/`)
- [ ] Instalar os **recomendados** (visual bonito):
  - [ ] Minimal Theme (Kepano) — Settings → Appearance → Minimal
  - [ ] Style Settings
  - [ ] Homepage (apontar pra `_obsidian-setup/homepage.md`)
  - [ ] Iconize
  - [ ] Periodic Notes (opcional, pra diário)
- [ ] Colar CSS snippet de `_obsidian-setup/config/CSS-SNIPPET.md` em `.obsidian/snippets/dashboard.css`
  - [ ] Settings → Appearance → CSS snippets → ativar `dashboard`
- [ ] Abrir `_obsidian-setup/homepage.md` → ver se renderiza os 7 dashboards
- [ ] Guia completo: `_obsidian-setup/config/README.md`

### 2. Testar 1 pipeline (validação funcional) ⏱️ ~15 min ⭐

- [ ] Numa sessão limpa com Claude Code, rodar: `me dá 10 ideias de reel fitness`
- [ ] Verificar que Claude invoca PIPELINE-VIRAL-RESEARCH (cita `viral` + `tiktok-trends-mcp`)
- [ ] Se NÃO invocar → me avisa (pode ser bug no WHEN-TO-USE-WHAT.md)
- [ ] Se invocar → 🎉 sistema tá funcionando

### 3. Finalizar ebook (pasta 05) ⏱️ ~4-8h (fora deste sistema)

- [ ] Ir pra pasta `05-ebooks-e-paginas/ebooks/o-treino-que-ninguem-ve/`
- [ ] Revisar capítulos (sem palavras banidas do TOM-DE-MARCA)
- [ ] Gerar PDF final (usar `react-pdf` ou similar da pasta 05)
- [ ] (Opcional) Gerar EPUB com `claude-epub-skill`
- [ ] Subir no Hotmart como produto R$37
- [ ] Pegar link de checkout
- [ ] Adicionar link na bio do Instagram
- [ ] ⚠️ Sem ebook no ar, nenhum funil funciona

---

## 🟡 NÍVEL 2 — MCPs fáceis (faça quando quiser ativar a plataforma)

Todos com API key pronta, só precisa criar conta e copiar token.

### 4. Ativar TikTok Trends MCP ⏱️ ~10 min

- [ ] Registrar em https://trendsmcp.ai
- [ ] Gerar API key no dashboard
- [ ] Setar env var (Windows PowerShell):
  ```
  [Environment]::SetEnvironmentVariable("TRENDSMCP_API_KEY", "sua-key-aqui", "User")
  ```
- [ ] Reiniciar Claude Code
- [ ] Testar: `/viral` ou `mcp call tiktok-trends` deve funcionar
- [ ] Free tier: 100 req/dia (suficiente pra uso pessoal)

### 5. Ativar Pipeboard Meta Ads MCP ⏱️ ~15 min

- [ ] Criar conta em https://pipeboard.co
- [ ] Conectar conta Meta Business (OAuth)
- [ ] Gerar API token em https://pipeboard.co/api-tokens
- [ ] Setar env var `PIPEBOARD_API_TOKEN`
- [ ] Testar via Claude: "lista minhas campanhas Meta Ads ativas"
- [ ] ⚠️ Precisa de conta Meta Business já criada

### 6. Ativar Shopify MCP ⏱️ ~10 min (só se tiver Shopify)

- [ ] Só faz sentido se você já tem loja Shopify (fase 4+)
- [ ] Partners.shopify.com → criar app privado
- [ ] Pegar clientId, clientSecret, storeDomain
- [ ] Setar as 3 env vars
- [ ] ⏳ **Pode pular por enquanto** — só na fase 4

### 7. Ativar n8n MCP ⏱️ ~30 min (pra automação fase 3+)

- [ ] Decidir: n8n cloud (R$20/mês) ou self-host (R$25/mês VPS)
- [ ] Setup n8n rodando
- [ ] Pegar API URL + API key
- [ ] Setar env vars `N8N_API_URL`, `N8N_API_KEY`
- [ ] ⏳ **Pode pular por enquanto** — só na fase 3 (após 2-3 meses de dados)

---

## 🟠 NÍVEL 3 — MCPs complexos (fase 2+, quando rodar ads)

Requerem clone de repo + setup local. Cada um é 1-2 horas.

### 8. Google Analytics MCP ⏱️ ~1h

Só faz sentido se tiver site próprio (blog, landing page) trackado.

- [ ] `pip install google-analytics-mcp`
- [ ] Criar service account em https://console.cloud.google.com
  - [ ] Habilitar "Analytics Data API"
  - [ ] Criar service account → gerar JSON key
  - [ ] Baixar o JSON
- [ ] No GA4 property, dar permissão "Viewer" pro email da service account
- [ ] Setar env vars:
  - [ ] `GA4_SERVICE_ACCOUNT_PATH` = caminho pro JSON baixado
  - [ ] `GA4_PROPERTY_ID` = ID numérico do property (não measurement ID)
- [ ] Testar via Claude: "top 10 source/medium últimos 30 dias"
- [ ] ⏳ **Adiar**: só quando tiver landing page ou blog

### 9. Google Ads MCP ⏱️ ~1h

Só se for rodar Google Ads (fase 3+).

- [ ] `git clone https://github.com/cohnen/mcp-google-ads.git` pra uma pasta tipo `C:/mcp-servers/`
- [ ] Criar venv: `python -m venv venv && source venv/bin/activate` (ou `venv\Scripts\activate` no Windows)
- [ ] `pip install -r requirements.txt`
- [ ] Pegar Developer Token em https://ads.google.com/home/tools/manager-accounts/
- [ ] Criar credenciais OAuth2 no GCP
- [ ] Setar 4 env vars:
  - [ ] `GOOGLE_ADS_MCP_PATH`
  - [ ] `GOOGLE_ADS_DEVELOPER_TOKEN`
  - [ ] `GOOGLE_ADS_LOGIN_CUSTOMER_ID`
  - [ ] `GOOGLE_ADS_CREDENTIALS_PATH`
- [ ] Testar
- [ ] ⏳ **Adiar**: só na fase 3 ou 4

### 10. TikTok Ads MCP ⏱️ ~1h

Só se for rodar TikTok Ads pago.

- [ ] `git clone https://github.com/AdsMCP/tiktok-ads-mcp-server.git`
- [ ] Instalar `uv`: https://docs.astral.sh/uv/
- [ ] `cd tiktok-ads-mcp-server && uv sync`
- [ ] Criar app em https://business-api.tiktok.com
- [ ] Pegar APP_ID, APP_SECRET, ACCESS_TOKEN
- [ ] Setar 4 env vars:
  - [ ] `TIKTOK_ADS_MCP_PATH`
  - [ ] `TIKTOK_APP_ID`
  - [ ] `TIKTOK_APP_SECRET`
  - [ ] `TIKTOK_ACCESS_TOKEN`
- [ ] ⏳ **Adiar**: só quando validar que TikTok Ads faz sentido pro seu ROAS

### 11. WhatsApp MCP ⏱️ ~2h (mais complexo)

Só se quiser automatizar DM/follow-up via WhatsApp pessoal.

- [ ] Instalar Go: https://go.dev/doc/install
- [ ] `git clone https://github.com/lharries/whatsapp-mcp.git`
- [ ] `cd whatsapp-mcp/whatsapp-bridge && go run main.go`
- [ ] Escanear QR code com seu WhatsApp (fica vinculado)
- [ ] Em outro terminal: `cd whatsapp-mcp && uv sync`
- [ ] Setar `WHATSAPP_MCP_PATH`
- [ ] ⚠️ **Ponto crítico**: bridge precisa ficar rodando 24/7. Se desconectar, precisa escanear QR de novo.
- [ ] ⏳ **Adiar**: provavelmente fase 3+. Alternativa manual funciona melhor no início.

---

## 🔵 NÍVEL 4 — Housekeeping (baixa prioridade, zero urgência)

### 12. Investigar pasta duplicada ⏱️ ~5 min

- [ ] Abrir `E:\Claude Code\ecossistema-personal-de-sucesso\06-distribuicao-e-monetização\06-distribuicao-e-monetização\`
- [ ] Só tem 1 arquivo: `Bem-vindo.md`
- [ ] Abrir e ver o conteúdo — se for só teste antigo, pode apagar
- [ ] Se tiver algo importante, mover pro lugar certo
- [ ] Apagar a pasta vazia depois
- [ ] (Não fiz por regra "não apagar sem verificar")

### 13. Validar dashboards Obsidian (visual) ⏱️ ~10 min

Depois do item 1 (ativar Obsidian):

- [ ] Abrir cada um dos 7 dashboards e verificar se renderiza:
  - [ ] DASHBOARD-ads-performance
  - [ ] DASHBOARD-funil-vendas
  - [ ] DASHBOARD-receita
  - [ ] DASHBOARD-plataformas
  - [ ] DASHBOARD-concorrentes
  - [ ] DASHBOARD-pipelines
  - [ ] DASHBOARD-skills-e-mcps
- [ ] Se algum der erro de Dataview → me avisa, eu ajusto a query
- [ ] Normal estar tudo vazio hoje (ainda não tem dados — só rodar templates pra popular)

### 14. Teste do detector anti-desperdício ⏱️ ~5 min

- [ ] Fazer uma pergunta vaga: "me ajuda a vender mais"
- [ ] Claude deveria invocar o agent `monetization-coordinator`
- [ ] Fazer pergunta com match forte: "escreve copy de ad"
- [ ] Claude deveria invocar `ad-creative` ou flaggar anti-desperdício
- [ ] Se não invocar → me avisa

---

## 🎯 Ordem recomendada de execução

**Semana 1 (essencial)**:
1. Item 1 — Ativar Obsidian
2. Item 2 — Testar 1 pipeline
3. Item 3 — Finalizar ebook (se ainda não tá no Hotmart)

**Semana 2-3 (fase orgânica)**:
4. Item 4 — TikTok Trends MCP (ajuda no `/viral`)
5. Item 12 — Investigar pasta duplicada
6. Item 13 — Validar dashboards visuais
7. Item 14 — Teste anti-desperdício

**Semana 4-8 (quando for rodar ads)**:
8. Item 5 — Pipeboard Meta Ads
9. Item 8 — Google Analytics (se tiver landing page)

**Mês 3+ (fase escala)**:
10. Item 9 — Google Ads MCP
11. Item 10 — TikTok Ads MCP
12. Item 7 — n8n MCP
13. Item 11 — WhatsApp MCP (mais complexo, talvez nunca precise)

**Nunca, provavelmente**:
14. Item 6 — Shopify (só se migrar de Hotmart)

---

## 📞 Quando me chamar

Se travar em qualquer item, me avisa assim:

> "Tô no item X do FALTA-FAZER e não tô conseguindo Y. Erro: Z"

Com isso eu resolvo em 1-2 mensagens.

**Especialmente me chama se**:
- Dashboard Obsidian não renderizar (query Dataview quebrada)
- Alguma skill não aparecer como disponível no Claude Code
- MCP não conectar mesmo com env var certa
- Pipeline não invocar a skill esperada

---

## 📌 Lembretes finais

- ✅ Tudo tá LOCAL no 06 (zero global)
- ✅ Pasta 02 intocada (regra sagrada)
- ✅ Dashboard Next.js intocado (deprecado em favor do Obsidian)
- ✅ Whisper já tá instalado (instalei durante o update)
- ⚠️ Antes de gastar R$ em ads: ler BLUEPRINT-MONETIZACAO.md + CHECKLIST-30-60-90.md

**Última atualização**: 2026-04-17
**Próxima revisão**: quando você marcar 50% dos itens como feitos (ou depois de 30 dias)
