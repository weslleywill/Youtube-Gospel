# 🔴 LIVE 24/7 (12h) SETUP — Gospel Pra Descansar

> **Objetivo**: ter 1 live permanente 12h rodando (Cícero-style) como alavanca de watchtime gratuita.
> **Tempo de setup**: 1-2h (primeira vez) | 10min/mês manutenção
> **Custo**: Restream.io Basic US$16/mês (R$80) OU free tier (limitado) OU rodar OBS local PC ligado
> **Mês 1**: começar Sexta 21h | **Mês 2+**: migrar pra Domingo 22h (melhor pico)

---

## 🎯 POR QUE LIVE 24/7 É A MAIOR ALAVANCA DO PLANO

Dados Plan agent (fontes na conversa):
- Lofi Girl (1 live 24/7): **US$9.600/dia ≈ US$3,5M/ano**
- Canal sleep music 24/7 típico: 2-3× sub growth + 200-300% watchtime vs uploads tradicionais
- YouTube Premium Music split: lives contam como "music channel" = boost algorítmico
- **Custo marginal zero**: reusa os MP3 Suno que você já gera pros longforms

---

## 🛠️ STACK TÉCNICO (escolha uma das 2 opções)

### Opção A — OBS + Restream.io (RECOMENDADA)
- **Custo**: R$80/mês Restream Basic
- **PC ligado**: NÃO (Restream replica em servidor deles)
- **Confiabilidade**: alta (99%+ uptime)
- **Setup**: 1h

### Opção B — OBS local sem Restream
- **Custo**: R$0
- **PC ligado**: SIM 24/7 (risco de queda de luz / reboot)
- **Confiabilidade**: média (depende da tua rede + PC)
- **Setup**: 30min

**Recomendação mês 1**: **Opção B grátis** pra validar. Se watchtime render > R$80/mês = migra pra A.

---

## 📦 OPÇÃO B (GRÁTIS) — OBS Local — passo a passo

### 1. Download OBS Studio
```
https://obsproject.com/download
```
Instala Windows (grátis, código aberto).

### 2. Criar cena "Gospel Pra Descansar LIVE"

Abre OBS → "+Cena" → nomeia "GPD LIVE 24/7".

### 3. Adicionar fontes (sources)

**Fonte 1 — Audio (Media Source)**:
- `+` → Media Source → nome "Trilha Suno"
- Arquivo local: pasta com 8-10 MP3s gerados (Suno Pro já gerou pros longforms)
- ✅ Marca "Loop"
- ✅ Marca "Restart playback when source becomes active"

**Fonte 2 — Video (Media Source)**:
- `+` → Media Source → nome "Visual Higgsfield"
- Arquivo: 1 MP4 de 5-10min em loop (Higgsfield gera cena longa)
- ✅ Marca "Loop"
- Cobre 100% da tela

**Fonte 3 — Overlay texto (opcional mas recomendado)**:
- `+` → Text GDI+ → nome "Título LIVE"
- Texto: `🔴 AO VIVO — Gospel Pra Descansar 24/7`
- Font: serif elegante, branco, 36px
- Posição: canto sup esquerdo, opacidade 70%

**Fonte 4 — Logo canal (opcional)**:
- `+` → Image → arquivo do logo GPD PNG transparente
- Posição: canto sup direito, 120px × 120px

### 4. Configurar transmissão YouTube

YouTube Studio → **Criar** → **Transmissão ao vivo** → "Gerenciar"

**Configurações**:
- Título: `🔴 AO VIVO 24/7 Gospel Pra Descansar | Fundo Musical Oração e Sono`
- Categoria: Música
- Idioma: Português (Brasil)
- Descrição (rica, 500+ palavras pra policy shield):
  ```
  Transmissão ao vivo 24/7 de fundo musical gospel instrumental pra oração, 
  meditação e descanso. Trilha original, sem voz, pra acompanhar sua noite, 
  seu momento de oração ou estudo bíblico.
  
  [Catálogo de ebooks do canal]
  [Sobre o canal]
  [CTAs]
  ```
- Pegar **Stream Key** no final da página

### 5. Ligar stream OBS → YouTube

OBS → Config → Stream
- Service: YouTube
- Server: auto
- Stream Key: [cola a key]

Voltar pra interface principal → **Start Streaming** → acompanhar YouTube Studio validar.

### 6. Aguardar 1-2min YouTube processar → live no ar 🔴

**Checklist pós-ligado**:
- [ ] Áudio saindo (abre aba anônima YouTube e confere)
- [ ] Visual mexendo (não travado)
- [ ] Título correto
- [ ] Sem warning de copyright (se der, é Suno sendo flag — pular pra próxima faixa ou rodar pós-processamento EQ)

---

## 🛡️ DEFESA POLICY JUL/2025 (Inauthentic Content Shield pra LIVE)

YouTube detecta "same loop looping" em live também. Mitigações obrigatórias:

### 1. Playlist ROTATIVA (não 1 MP3 em loop)
- Mínimo **8-10 MP3s diferentes** em rotação
- Ordem random ou shuffle
- Cada MP3 dura 5-10min → rotação completa a cada 1-1h30

### 2. Visual MULTI-CLIP (não 1 loop de 10min)
- Mínimo **4-6 clips Higgsfield** concatenados (~30-60min de vídeo total)
- Transições crossfade entre eles
- Conteúdo: montanhas + céu dramático + fogo + vitral + cordeiro + águia (variação dos templates thumb)

### 3. Pequenas variações de volume/EQ ao longo do tempo
- Plugin OBS "Audio Limiter" com pequena oscilação (±2dB a cada 30min)
- Não é perceptível pelo espectador
- Rompe detecção de "identical audio signature"

### 4. Título da live **mudar semanalmente**
- Semana 1: "🔴 AO VIVO 24/7 Gospel Pra Descansar | Fundo Oração"
- Semana 2: "🔴 AO VIVO 12h Música Gospel Pra Dormir e Orar"
- Semana 3: "🔴 AO VIVO Intimidade com Deus — Fundo Musical 24h"
- Semana 4: "🔴 AO VIVO Gospel 24/7 Pra Descansar em Cristo"

### 5. Post community tab 1×/semana sobre a live
- Texto simples ("Essa semana tô entregando tempo com Deus na live — me conta nos comentários o que você tá orando")
- Sinaliza presença humana pro algoritmo

### 6. Reiniciar stream diariamente (Cícero faz isso)
- Às 23:59 Sex: `Stop Streaming` + `Start Streaming` novamente
- Novo stream = novo boost inicial + quebra detecção de "same loop rodando há 30 dias"
- Alternativa: agendar crontab Windows pra reiniciar

---

## 💰 MONETIZAÇÃO DA LIVE (mês 3+ pós-YPP)

- **AdSense**: lives geram ads durante o stream (R$2-3/1k watchtime)
- **Super Chat**: pessoas mandam R$5-50 com mensagem destacada (mês 3+)
- **Channel Membership**: R$4,99-R$14,99/mês (mês 4+, precisa 500+ subs)
- **Playlist no description**: CTA pros longforms + ebook do mês

**Meta realista mês 6**: R$200-400/mês só da live (entre AdSense + Super Chat).

---

## 🚨 TROUBLESHOOTING

### "Copyright detected" na live
- Pausa stream
- Vai em Studio → Content ID → contestar (música é original, Suno Pro tem licença comercial)
- Regera a faixa problemática com leve variação (pitch +/-1 semitom)
- Re-master aplicando EQ −3dB em 12kHz (quebra spectral watermark Suno se existir)

### "Stream caiu (offline)"
- OBS: verifica Stream Key ainda válida (YouTube renova periodicamente)
- Internet: checa ping (< 100ms estável)
- PC dormindo: desliga "sleep" na Config Windows (Power Options → Sleep = Never)

### "Viewers = 0" após 24h
- Título ruim → revisa SEO
- Thumbnail ruim → troca (mesma regra dos longforms)
- Horário ruim → desliga + religa no horário pico (21h-23h BRT)
- Sem descoberta orgânica → posta community tab + share num grupo WhatsApp

---

## 📅 CALENDÁRIO DE MANUTENÇÃO

**Diário** (1min):
- Dar olhada rápida no YouTube Studio — stream online?
- Responder 1-2 comentários se chegarem

**Semanal** (10min):
- Mudar título da live (rotação acima)
- Postar community tab sobre a live
- Reiniciar stream (Sáb 23:59)

**Mensal** (30min):
- Regenerar 5-10 MP3s novos via Suno Pro (refresh playlist)
- Gerar 2-3 clips Higgsfield novos (refresh visual)
- Conferir analytics (avg concurrent, watchtime, vendas vindas da live)

---

## 🎯 META SEMANAL

| Semana | Avg concurrent viewers | Watchtime (h/sem) |
|---|---|---|
| Sem 1 | 5-10 | 50-100h |
| Sem 2 | 10-20 | 150-300h |
| Sem 4 | 20-50 | 500-1.000h |
| Mês 3 | 50-100 | 2.000-4.000h |
| Mês 6 | 100-300 | 10.000-20.000h |

**Watchtime da live sozinha no mês 3** = suficiente pra YPP threshold (4.000h/90d).
