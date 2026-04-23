# Guia Passo-a-Passo — Google OAuth pra YouTube MCP (Read/Analytics)

> **Escopo**: configurar só o MCP `youtube-studio` (leitura + analytics + search). Upload manual pelo YouTube Studio.
> **Tempo total**: ~30-40 minutos (só faz uma vez na vida)
> **Weslley posta os vídeos manualmente** — então NÃO configuramos `youtube-uploader`.

---

## ✅ Pré-requisitos (verificar antes)

- [ ] Conta Google ativa (a mesma que será DONA do canal gospel)
- [ ] Python instalado (já tem — v3.12)
- [ ] `uv` ou `uvx` instalado (já tem)

---

## Passo 1 — Criar projeto no Google Cloud (5 min)

1. Abrir: **https://console.cloud.google.com/**
2. Topo da página → clicar no **seletor de projeto** (ao lado do logo "Google Cloud")
3. Clicar **"NEW PROJECT"** (canto superior direito da caixa)
4. **Project name**: `youtube-mcp-gospel`
5. **Organization**: (deixar como está — "No organization")
6. Clicar **"CREATE"**
7. Esperar ~30s → selecionar o projeto no dropdown (se não selecionou auto)

✅ **Validação**: no topo da página deve aparecer "youtube-mcp-gospel"

---

## Passo 2 — Habilitar 3 APIs do YouTube (5 min)

Pra cada API abaixo, fazer:

1. Abrir: **https://console.cloud.google.com/apis/library**
2. Buscar pelo nome da API
3. Clicar no resultado → **"ENABLE"**

APIs a habilitar (nesta ordem):

- [ ] **YouTube Data API v3** — leitura de canais/vídeos/comentários
- [ ] **YouTube Analytics API** — métricas (views, retenção, revenue)
- [ ] **YouTube Reporting API** — relatórios diários em CSV

✅ **Validação**: abrir **https://console.cloud.google.com/apis/dashboard** — deve listar as 3 APIs habilitadas.

---

## Passo 3 — Configurar OAuth Consent Screen (10 min)

1. Abrir: **https://console.cloud.google.com/apis/credentials/consent**
2. **User Type**: selecionar **External** → **CREATE**
3. Preencher a primeira tela:
   - **App name**: `YouTube MCP Gospel`
   - **User support email**: weslleywillaguiar@gmail.com
   - **App logo**: (pular — opcional)
   - **Application home page**: (pular)
   - **Application privacy policy link**: (pular)
   - **Application terms of service link**: (pular)
   - **Authorized domains**: (pular)
   - **Developer contact information**: weslleywillaguiar@gmail.com
   - Clicar **SAVE AND CONTINUE**

4. Tela **Scopes** (pular por enquanto):
   - Clicar **SAVE AND CONTINUE** direto

5. Tela **Test users** — **ESTA É CRÍTICA**:
   - Clicar **+ ADD USERS**
   - Adicionar: **weslleywillaguiar@gmail.com** (ou o email que será dono do canal gospel, se for outro)
   - Clicar **ADD**
   - **SAVE AND CONTINUE**

6. Tela **Summary**: conferir e **BACK TO DASHBOARD**

✅ **Validação**: no Dashboard deve dizer "Publishing status: Testing" + 1 Test user.

⚠️ **Se você usar outro email como dono do canal** → adicionar aquele email também como Test user.

---

## Passo 4 — Criar OAuth Client ID (5 min)

1. Abrir: **https://console.cloud.google.com/apis/credentials**
2. Clicar **+ CREATE CREDENTIALS** (topo) → **OAuth client ID**
3. **Application type**: **Desktop app**
4. **Name**: `youtube-mcp-desktop`
5. Clicar **CREATE**
6. Popup vai aparecer com Client ID + Client Secret → clicar **DOWNLOAD JSON**
7. Salvar o arquivo com nome **exato**: `client_secret.json`

---

## Passo 5 — Mover o JSON pro lugar certo (2 min)

Abrir PowerShell (⊞ Windows → digitar "powershell" → Enter):

```powershell
# Criar pasta .youtube-mcp em C:\Users\wesll\
New-Item -ItemType Directory -Force -Path "$env:USERPROFILE\.youtube-mcp"

# Mover o JSON baixado (ajusta o caminho se baixou em outro lugar)
Move-Item -Path "$env:USERPROFILE\Downloads\client_secret*.json" -Destination "$env:USERPROFILE\.youtube-mcp\client_secret.json"

# Conferir
Get-ChildItem "$env:USERPROFILE\.youtube-mcp\"
```

✅ **Validação**: deve listar `client_secret.json` (sem o nome esquisito do download).

---

## Passo 6 — Setar variável de ambiente (2 min)

Ainda no PowerShell:

```powershell
[Environment]::SetEnvironmentVariable("YOUTUBE_CLIENT_SECRET_PATH", "$env:USERPROFILE\.youtube-mcp\client_secret.json", "User")

# Conferir
[Environment]::GetEnvironmentVariable("YOUTUBE_CLIENT_SECRET_PATH", "User")
```

✅ **Validação**: deve imprimir `C:\Users\wesll\.youtube-mcp\client_secret.json`

---

## Passo 7 — Instalar o MCP server (1 min)

```powershell
uv tool install youtube-studio-mcp
```

Se der erro `uv: command not found`:
```powershell
pip install uv
uv tool install youtube-studio-mcp
```

✅ **Validação**: rodar `uvx youtube-studio-mcp --help` — não pode dar erro.

---

## Passo 8 — Restart Claude Code

Fechar completamente o Claude Code e abrir de novo. O MCP só aparece após restart.

---

## Passo 9 — Primeiro uso (autorização OAuth) — 3 min

Na nova sessão do Claude Code, pedir:

```
Rode youtube_auth_status
```

- Se der erro "not authenticated" → normal. Pedir:
  ```
  Rode youtube_auth
  ```
- Vai **abrir o browser** automaticamente
- **Escolher a conta Gmail** que vai ser DONA do canal gospel
- Avisar "Este app não foi verificado pelo Google" → clicar **"Advanced"** → **"Go to youtube-mcp-gospel (unsafe)"** (é seguro, é seu app)
- Aceitar todos os scopes
- Fechar browser quando aparecer "You may close this window"

✅ **Validação final**: pedir:
```
Rode youtube_get_channel
```

Deve retornar seus dados de canal (inscritos, views, etc).

---

## 🚨 Troubleshooting comum

### "Access blocked: app not verified"
- Você esqueceu de se adicionar como Test user no Passo 3.5. Voltar e adicionar.

### "quota exceeded" logo no início
- Normal em dev. Quota diária do YouTube Data API = 10k units/dia = ~100 chamadas. Suficiente pra uso pessoal.

### MCP não aparece após restart
- Abrir `.mcp.json` em https://jsonlint.com — validar sintaxe
- Conferir que `YOUTUBE_CLIENT_SECRET_PATH` foi setada: `Get-Item env:YOUTUBE_CLIENT_SECRET_PATH`
- Olhar log: `C:\Users\wesll\AppData\Roaming\Claude\logs\mcp-server-youtube-studio.log`

### Token expirou ou revogou acesso
- Deletar `C:\Users\wesll\.youtube-mcp\token.json`
- Rodar `youtube_auth` de novo

---

## 📋 O que o Claude vai conseguir fazer depois disso

### Pesquisa e análise ✅
- Buscar canais/vídeos gospel BR (tool `youtube_search`)
- Extrair inscritos/views de concorrentes (tool `youtube_get_channel`)
- Listar vídeos top de qualquer canal (`youtube_list_videos`)
- Ver trending gospel BR (`youtube_trending`)
- Buscar suggestions de keyword (`youtube_search_suggestions`)

### Seu canal (quando estiver no ar) ✅
- Analytics diárias (CTR, retenção, views)
- Top 3 vídeos + Bottom 3
- Demographics (idade/gênero audiência)
- Revenue breakdown por vídeo
- Tráfego sources (busca vs sugeridos vs navegação)

### ❌ O que NÃO faz (por escolha sua — upload manual)
- Upload automático (você faz pelo Studio UI)
- Agendamento automático (você agenda no Studio)
- Responder comentários automático (você responde manual)

---

## 🔐 Segurança

- `client_secret.json` é **sensível** — nunca commitar em git público. Não tá no projeto, tá em `C:\Users\wesll\.youtube-mcp\`, fora da pasta do #youtube.
- `token.json` (criado após `youtube_auth`) também é sensível — mesma pasta, mesma regra.
- Se quiser revogar acesso: **https://myaccount.google.com/permissions** → revogar "youtube-mcp-gospel".

---

## ✅ Checklist final

Quando tudo tiver configurado, marque:

- [ ] Projeto Google Cloud criado
- [ ] 3 APIs habilitadas (Data v3, Analytics, Reporting)
- [ ] OAuth Consent Screen configurado com você como Test User
- [ ] OAuth Client ID criado (Desktop app) + JSON baixado
- [ ] `client_secret.json` em `C:\Users\wesll\.youtube-mcp\`
- [ ] Variável `YOUTUBE_CLIENT_SECRET_PATH` setada
- [ ] `uv tool install youtube-studio-mcp` executado
- [ ] Claude Code reiniciado
- [ ] `youtube_auth` rodado + browser autorizado
- [ ] `youtube_get_channel` retorna dados reais

Quando tudo verde → marcar no `FASE0-VALIDACAO-COMPLETA.md` item **1.1** como 🟢.
