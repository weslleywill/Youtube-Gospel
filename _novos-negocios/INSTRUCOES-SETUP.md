# Instruções de Setup — 5 Tier 1 instalados

> **Data**: 2026-04-19
> **Status**: 2 skills ativas ✅ + 3 MCPs adicionados ao `.mcp.json` ⚠️ precisam credenciais

---

## ✅ O que já está funcionando (sem precisar fazer nada)

### 1. Skill `ffmpeg-usage`
**Localização**: `E:\Claude Code\#youtube\.claude\skills\ffmpeg-usage\`
**Requer**: `ffmpeg` instalado — ✅ **já instalado** (v8.1)
**Pronto pra usar**: pedir "Claude, usa ffmpeg-usage pra estender áudio de 2min pra 8h em loop com crossfade" → funciona direto.

### 2. Skill `claude-youtube` (14 sub-skills)
**Localização**: `E:\Claude Code\#youtube\.claude\skills\claude-youtube\`
**Requer**: nada pra uso básico (manual input)
**Pronto pra usar**: `/youtube strategy`, `/youtube monetize`, `/youtube competitor`, `/youtube audit`, etc.
**Opcional**: se quiser dados ao vivo, configurar YouTube Data API + DataForSEO (ver seção 3 abaixo).

---

## ⚠️ O que precisa setup de credenciais antes de funcionar

### 3. MCP `elevenlabs` ← ESTE É O PRINCIPAL

**Status**: entry já adicionada no `.mcp.json` ✅ — falta só a API key.

**Passo a passo**:

1. **Criar conta grátis** em [elevenlabs.io/sign-up](https://elevenlabs.io/sign-up)
   - 10.000 créditos grátis/mês (~1 vídeo de 10min narrado completo)
   - Zero cartão necessário
2. **Pegar API key** em [elevenlabs.io/app/settings/api-keys](https://elevenlabs.io/app/settings/api-keys)
3. **Configurar variável de ambiente**:

**No Windows (PowerShell com permissão de admin)**:
```powershell
[Environment]::SetEnvironmentVariable("ELEVENLABS_API_KEY", "sua-key-aqui", "User")
```

**Ou adicionar no arquivo do Claude Code** (se houver `.env.local` no projeto):
```
ELEVENLABS_API_KEY=sua-key-aqui
```

4. **Criar pasta output de áudio**:
```bash
mkdir -p "E:/Claude Code/#youtube/output/audio"
```

5. **Restart Claude Code** — o MCP só carrega quando reinicia.

**Testar**:
```
Pede pro Claude: "Use ElevenLabs pra gerar 'Olá mundo' em português brasileiro voz grave"
```

Se der erro `ELEVENLABS_API_KEY inválida` → refazer passo 2-3.

---

### 4. MCP `youtube-studio` (pauling-ai, 40 tools)

**Status**: entry adicionada ✅ — falta OAuth Google Cloud.

**Este é o mais chato porque Google OAuth é enrolado. Vale MUITO a pena (analytics + upload + SEO tools).**

**Passo a passo**:

1. **Instalar o pacote Python** (uma vez só):
```bash
pip install youtube-studio-mcp
# Ou preferir:
uv tool install youtube-studio-mcp
```

2. **Criar projeto Google Cloud**:
   - Ir em [console.cloud.google.com](https://console.cloud.google.com/)
   - Criar novo projeto "YouTube-AI-Weslley" (ou reusar existente)

3. **Habilitar 3 APIs**:
   - Vai em **APIs & Services > Library**
   - Habilitar: **YouTube Data API v3**, **YouTube Analytics API**, **YouTube Reporting API**

4. **Configurar OAuth consent screen**:
   - Vai em **APIs & Services > OAuth consent screen**
   - User Type: **External**
   - Preencher app name
   - **ADICIONAR SEU GMAIL (dono do canal) como Test User** — crítico

5. **Criar OAuth Client**:
   - Vai em **APIs & Services > Credentials**
   - **Create Credentials > OAuth client ID**
   - Tipo: **Desktop app**
   - Baixar o JSON

6. **Salvar o client_secret.json**:
```bash
mkdir -p ~/.youtube-mcp
# Copiar o JSON baixado pra ~/.youtube-mcp/client_secret.json
# No Windows o ~ equivale a C:\Users\wesll\
```

7. **Configurar variável de ambiente**:
```powershell
[Environment]::SetEnvironmentVariable("YOUTUBE_CLIENT_SECRET_PATH", "C:\Users\wesll\.youtube-mcp\client_secret.json", "User")
```

8. **Restart Claude Code**

**Primeiro uso**: ao chamar qualquer tool `youtube_*`, vai abrir browser pra autorizar. Loga com o Gmail **DONO** do canal (não manager — só owner acessa Analytics). Token salva em `~/.youtube-mcp/token.json` e auto-renova.

---

### 5. MCP `youtube-uploader` (anwerj, upload + scheduling)

**Status**: entry adicionada ✅ — falta binary + client_secret.

**Passo a passo**:

1. **Download binary Windows**:
   - Ir em [github.com/anwerj/youtube-uploader-mcp/releases](https://github.com/anwerj/youtube-uploader-mcp/releases)
   - Baixar `youtube-uploader-mcp-windows-amd64.exe`
   - Salvar em `C:\Users\wesll\youtube-uploader\youtube-uploader-mcp-windows-amd64.exe`

   **OU** rodar o script automático (PowerShell com permissão):
```powershell
Invoke-WebRequest -UseBasicParsing "https://raw.githubusercontent.com/anwerj/youtube-uploader-mcp/master/scripts/install.ps1" -OutFile "$env:TEMP\install.ps1"
PowerShell -NoProfile -ExecutionPolicy Bypass -File "$env:TEMP\install.ps1"
```

2. **Reusar o mesmo `client_secret.json`** do youtube-studio (passo 4 acima). Scopes são os mesmos (YouTube Data API v3).

3. **Configurar variáveis de ambiente**:
```powershell
[Environment]::SetEnvironmentVariable("YOUTUBE_UPLOADER_BINARY", "C:\Users\wesll\youtube-uploader\youtube-uploader-mcp-windows-amd64.exe", "User")
# YOUTUBE_CLIENT_SECRET_PATH já foi setada no passo 4 acima
```

4. **Restart Claude Code**

---

## 📋 Resumo: o que o Weslley precisa fazer

### Hoje / Amanhã (setup inicial — ~1h)

- [ ] **ElevenLabs**: criar conta grátis + pegar API key + setar env var (5 min)
- [ ] **Google Cloud**: criar projeto + habilitar 3 APIs + criar OAuth + baixar JSON (30 min, chato mas 1x só)
- [ ] **YouTube uploader binary**: download + salvar (2 min)
- [ ] **pip install youtube-studio-mcp** (1 comando)
- [ ] **Restart Claude Code**
- [ ] **Testar os 3 MCPs**:
  - `"ElevenLabs: gera 'teste' em PT-BR voz grave"` → deve salvar arquivo `output/audio/teste.mp3`
  - `"youtube-studio: qual é o ID do meu canal?"` → abre OAuth na primeira vez, depois responde
  - `"youtube-uploader: lista meus canais"` → mesma coisa

### Esta semana (teste técnico)

- [ ] **Teste Freepik vs ElevenLabs** (decisão assinar ou não R$30/mês):
  1. Gerar mesmo script estoico 9k chars em cada
  2. Postar como 2 Shorts teste
  3. Medir retenção 1min
  4. **Decisão**: se Freepik >= ElevenLabs, economiza R$360/ano

- [ ] **Validar catálogo afiliado Hotmart gospel** (já encontramos Kit Fé em Ação, Devocional 31 Dias — confirmar comissão ≥ 40%)

---

## 🔑 Todas as variáveis de ambiente necessárias

Crie um arquivo `.env` em `E:\Claude Code\#youtube\.env` (ou setar via PowerShell):

```env
# ElevenLabs (free tier 10k créditos/mês)
ELEVENLABS_API_KEY=sk_...

# YouTube Data API + Analytics + Reporting + Upload
YOUTUBE_CLIENT_SECRET_PATH=C:\Users\wesll\.youtube-mcp\client_secret.json
YOUTUBE_API_KEY=AIza...  # opcional, só pra public data
YOUTUBE_UPLOADER_BINARY=C:\Users\wesll\youtube-uploader\youtube-uploader-mcp-windows-amd64.exe
```

**⚠️ Nunca commitar este arquivo** — adicionar `.env` no `.gitignore` se ainda não tiver.

---

## 🔧 Troubleshooting

### "uvx: command not found"
```bash
# Reinstalar uv (já tá instalado v0.11.6, mas se sumir):
pip install uv
```

### "MCP server não aparece após restart"
1. Checar sintaxe do `.mcp.json` (abre em JSON validator online)
2. Rodar `claude mcp list` no terminal (se disponível)
3. Ver log do Claude Code: `C:\Users\wesll\AppData\Roaming\Claude\logs\`

### "Google OAuth: access denied"
- Você não adicionou seu Gmail como Test User no OAuth consent screen (passo 4 do youtube-studio)

### "elevenlabs-mcp: credits exhausted"
- Free tier só 10k/mês. Assinar Starter $6/mês = 30k, ou Creator $11 = 121k.

---

## 📂 Arquivos modificados nesta instalação

1. `E:\Claude Code\#youtube\.mcp.json` — 3 entries adicionadas (elevenlabs, youtube-studio, youtube-uploader)
2. `E:\Claude Code\#youtube\.mcp.json.backup-2026-04-19` — backup antes da edição
3. `E:\Claude Code\#youtube\.claude\skills\ffmpeg-usage\` — skill copiada
4. `E:\Claude Code\#youtube\.claude\skills\claude-youtube\` — skill copiada
5. `E:\Claude Code\#youtube\_sandbox-skills-2026-04-19\` — 5 repos clonados (referência/backup)

**Pode apagar `_sandbox-skills-2026-04-19/` depois de validar que tudo funciona.**

---

## 🔗 Hotmart MCP (Tier 1 #5, ainda pendente de decisão)

Dos 5 Tier 1, os 4 acima foram instalados. O 5º (Hotmart MCP) tem 2 opções:

- **Opção A — `hotmart-cli`** (dedicado, atualizado 2026-03-16): [lobehub.com/mcp/murilloimparavel-hotmart-cli](https://lobehub.com/mcp/murilloimparavel-hotmart-cli)
- **Opção B — `BridgeAPI`** (ecossistema BR 16 MCPs): [lobehub.com/mcp/evandroschechtel-bridgeapi](https://lobehub.com/mcp/evandroschechtel-bridgeapi)

**Recomendo Opção A** — mais focada, menos bloat. Mas precisa login Hotmart. **Me avisa qual escolher que eu plugo**.
