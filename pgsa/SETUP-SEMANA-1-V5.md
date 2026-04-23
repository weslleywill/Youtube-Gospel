# SETUP SEMANA 1 — V5 "Funil Isca Ascension + IG Repurpose + R$197 M4"

> **Abre esse arquivo segunda de manhã. Executa do começo ao fim.**
>
> **Budget de tempo**: 6h spread na semana (2x mais que sem V5, porque é a semana de SETUP).
> **Output final**: funil rodando + 3 reels gravados + emails prontos + Amazon KDP publicado.
> **Depois dessa semana**: orçamento volta pra 4-5h/sem.
> **Criado**: 2026-04-17 (operacional-exec background)

---

## 📋 VISÃO GERAL SEMANA 1

| Dia | Tempo | Foco | Resultado |
|---|---|---|---|
| Segunda | 1h | PDF Checklist 7 dias | Lead magnet pronto |
| Terça | 1h | Mini-guia tripwire R$9 | Produto tripwire pronto |
| Quarta | 1,5h | 2 LPs Carrd + Hotmart config | Funil técnico rodando |
| Quinta | 1h | Gravar 3 Reels | Conteúdo IG + ads criativos |
| Sexta | 30min | Meta Ads campaign setup | Ads prontos pra ligar |
| Sábado | 1h | Sequência 5 emails | Autoresponder carregado |
| Domingo | 30min | Ligar ads + validação | Funil ao vivo |
| **TOTAL** | **6h30** | | Pico absorvido |

**Paralelo em background (não conta no budget)**:
- Amazon KDP ebook R$9,90 → escrito + formatado + publicado (2h spread em 3 sessões de 40min). Pode fazer em qualquer momento da semana.

---

## 🗓️ DIA A DIA DETALHADO

### 🟠 SEGUNDA (1h) — PDF Checklist 7 Dias

**Tempo planejado**: 60min
**Resultado final**: arquivo `checklist-7-dias.pdf` hospedado no Google Drive, link público.

#### Tarefa 1.1 — Copiar texto do checklist já escrito (10min)
- **Ação**: abrir `COPYS-PRONTAS-V5.md` → seção "5. PDF CHECKLIST 7 DIAS"
- **Tool**: nenhuma (ctrl+C / ctrl+V)
- **Output**: texto completo em Google Docs novo
- **Critério "feito"**: texto do Dia 1 ao Dia 7 + capa + última página no Docs

#### Tarefa 1.2 — Formatar no Canva (40min)
- **Ação**: abrir [Canva](https://www.canva.com/) → buscar template "eBook Minimalista" ou "Workbook PDF" → customizar com paleta da marca
- **Tool**: Canva (grátis)
- **Paleta**:
  - Fundo: preto `#000000` ou off-black `#0A0A0A`
  - Destaque: laranja `#FF6B00` ou âmbar `#FFA726`
  - Texto: branco `#FFFFFF`
- **Fonte**: Montserrat Bold (títulos) + Inter Regular (corpo)
- **Estrutura**: 1 página capa + 7 páginas conteúdo (1 dia = 1 página) + 1 página intro + 1 última página = **10 páginas**
- **Output**: arquivo `checklist-7-dias.pdf` exportado
- **Critério "feito"**: PDF abre, texto legível, nenhuma página quebrada, logo Weslley visível

#### Tarefa 1.3 — Hospedar no Google Drive (10min)
- **Ação**: Google Drive → novo upload → arquivo → botão-direito "Compartilhar" → "Qualquer pessoa com o link pode visualizar" → copiar link
- **Output**: URL pública tipo `drive.google.com/file/d/XXX/view`
- **Critério "feito"**: link testado em aba anônima, PDF carrega sem login

**Dependência bloqueada por segunda**: LP Carrd (quarta) precisa desse link.

---

### 🟠 TERÇA (1h) — Mini-Guia Tripwire R$9

**Tempo planejado**: 60min
**Resultado final**: arquivo `mini-guia-basico.pdf` pronto pra upload no Hotmart.

#### Tarefa 2.1 — Gerar conteúdo do mini-guia (30min)
- **Ação**: invocar skill `copy` + `brand-voice:enforce-voice` com prompt:
  ```
  Preciso de 8 páginas pra mini-guia "O Básico Que Ninguém Explica", complementar ao checklist 7 dias.
  3 capítulos:
  1. Por que teu corpo não obedece treino "perfeito" da internet
  2. Como medir progresso sem balança
  3. 3 erros dos primeiros 6 meses (escrevi no ebook principal, adaptar aqui)

  Tom: mesmo do checklist. Primeira pessoa. Vulnerabilidade sincera. Sem clichês.
  ```
- **Tool**: Skills `copy` + `brand-voice:enforce-voice`
- **Output**: texto completo em Google Docs
- **Critério "feito"**: 3 capítulos escritos, validação brand-voice passou

#### Tarefa 2.2 — Formatar no Canva (20min)
- **Ação**: duplicar template do checklist no Canva, trocar capa, trocar conteúdo pelos 3 capítulos
- **Output**: `mini-guia-basico.pdf`
- **Critério "feito"**: 8 páginas, capa com título "O Básico Que Ninguém Explica"

#### Tarefa 2.3 — Upload no Hotmart (10min)
- **Ação**: login [Hotmart Producer](https://producer.hotmart.com/) → novo produto → "Ebook" → upload PDF → preço R$9
- **Copy produto**: copiar da seção 6 de `COPYS-PRONTAS-V5.md`
- **Output**: produto criado, status "pendente aprovação Hotmart" (demora 24-72h)
- **Critério "feito"**: produto listado no dashboard Hotmart, recebeu ID

**⚠️ Risco técnico**: Hotmart pode bloquear R$9. Se bloquear, fallback:
- R$9,90 (legal geralmente aceito)
- R$12 (se R$9,90 também falhar)
- Revisar mensagem "R$9" em todos os lugares (emails, LP) — Weslley consegue ajustar em 10min

---

### 🟠 QUARTA (1h30) — 2 LPs Carrd + Config Hotmart

**Tempo planejado**: 90min
**Resultado final**: 2 LPs online + Hotmart configurado.

#### Tarefa 3.1 — LP Carrd Lead Magnet (30min)
- **Ação**: login [Carrd.co](https://carrd.co/) → criar site novo → template "One Page Simple"
- **Nome subdomínio**: `checklist7dias.carrd.co`
- **Copy**: copiar da seção 4 de `COPYS-PRONTAS-V5.md`
- **Integração email**: escolher Mailchimp, ConvertKit ou Substack (grátis até 500 leads)
  - **Recomendação**: [ConvertKit free](https://convertkit.com/) — 1.000 leads grátis + automação incluída
- **Pixel Meta**: adicionar Meta Pixel ID (precisa antes — criar em [Meta Business](https://business.facebook.com/))
- **Output**: URL `checklist7dias.carrd.co` ao vivo
- **Critério "feito"**: abre no celular, form funciona, pixel registra visita

#### Tarefa 3.2 — LP Carrd Ebook R$37 (já existe copy) (20min)
- **Ação**: copiar LP já pronta em `funil/01-landing-carrd-copy.md` pro Carrd
- **Nome subdomínio**: `otreinoqueninguemve.carrd.co`
- **Link botão**: apontar pra checkout Hotmart do ebook principal com `?off=FUNDADOR19`
- **Output**: 2ª URL ao vivo
- **Critério "feito"**: abre, botão leva pro Hotmart com cupom pré-aplicado

#### Tarefa 3.3 — Config multiplicadores Hotmart (40min)
- **Ação**: seguir `funil/02-multiplicadores-hotmart.md` — 4 multiplicadores
  1. Preço âncora R$97 → R$37 (5min)
  2. Garantia 7 dias ativa (3min)
  3. Parcelamento 12x (2min)
  4. Order bump R$17 (produto + vinculação) (20min) — usar template "Planner Semanal" Canva
  5. Cupom FUNDADOR19 limitado a 50 usos (3min)
  6. Teste de compra com cartão próprio (10min)
- **Output**: checkout Hotmart 100% configurado
- **Critério "feito"**: fez compra teste com cupom, garantia aparece, bump aparece, parcelamento aparece

**Dependência bloqueada por quarta**: Meta Ads (sexta) precisa das LPs no ar.

---

### 🟠 QUINTA (1h) — Gravar 3 Reels

**Tempo planejado**: 60min (incluindo edição rápida)
**Resultado final**: 3 Reels gravados + editados + prontos pra postar.

#### Tarefa 4.1 — Revisar scripts (10min)
- **Ação**: abrir `COPYS-PRONTAS-V5.md` → seção "2. HOOKS DE REELS" → ler os 3 roteiros
- **Tool**: nenhuma
- **Output**: familiarização com texto

#### Tarefa 4.2 — Gravar (35min = 3 reels × 10-12min)
- **Ambiente**: academia OU casa (iluminação natural, fundo neutro)
- **Equipamento**: celular na vertical, tripé ou apoio
- **Vídeo 1 — "Remada errada"**: fala direto pra câmera + opcional mostrar movimento da escápula
- **Vídeo 2 — "Errei no supino"**: fala + opcional cena na academia (falhando)
- **Vídeo 3 — "Descanso é treino"**: fala + opcional cena deitando/descansando
- **Regras**:
  - Cru, sem filtro, sem ring light exagerado
  - Voz natural, não "locutor"
  - Pode cortar pausas grandes mas NÃO polir
  - Se errou, regrava — não deixa ruim
- **Output**: 3 arquivos MP4 de 30-45s cada
- **Critério "feito"**: 3 vídeos assistíveis, áudio claro, hook forte nos 2 primeiros segundos

#### Tarefa 4.3 — Legendas queimadas (opcional, 15min)
- **Ação**: [CapCut](https://www.capcut.com/) app celular → transcrição automática → revisar → exportar
- **Tool**: CapCut (grátis)
- **Output**: 3 reels com legenda queimada (aumenta retenção +15-20%)
- **Critério "feito"**: vídeos com texto visível + legíveis mesmo sem áudio

**Dependência bloqueada por quinta**: Meta Ads (sexta) precisa dos reels como criativo.

---

### 🟠 SEXTA (30min) — Meta Ads Campaign

**Tempo planejado**: 30min
**Resultado final**: campanha criada, prontinha pra ligar domingo.

#### Tarefa 5.1 — Criar campanha (20min)
- **Ação**: [Meta Business](https://business.facebook.com/) → Ads Manager → nova campanha
- **Objetivo**: "Lead Generation" (gerar leads na LP)
- **Orçamento**: CBO R$13/dia (≈R$400/mês)
- **Audience**: Advantage+ (deixa IA decidir), BR, 20-35 anos, interesses fitness/musculação
- **Criativos**: upload dos 3 Reels da quinta
- **Copy do anúncio**: usar a LEGENDA A de cada reel (de `COPYS-PRONTAS-V5.md` seção 2)
- **CTA**: "Baixar" + URL = `checklist7dias.carrd.co`
- **Output**: campanha criada, status "pausada"
- **Critério "feito"**: campanha aparece no Ads Manager, pixel confirma, LP abre do preview

#### Tarefa 5.2 — Configurar tracking (10min)
- **Ação**: verificar pixel Meta na LP Carrd com [Pixel Helper extension](https://chrome.google.com/webstore/detail/meta-pixel-helper/fdgfkebogiimcoedlicjlajpkdmockpc)
- **Conversion Event**: criar evento "Lead" no pixel (dispara quando form submete)
- **Output**: rastreamento funcionando
- **Critério "feito"**: Pixel Helper marca "Lead" quando Weslley preenche form teste

---

### 🟠 SÁBADO (1h) — Sequência 5 Emails

**Tempo planejado**: 60min
**Resultado final**: 5 emails carregados no ConvertKit, prontos pra disparar automático.

#### Tarefa 6.1 — Copiar os 5 emails (10min)
- **Ação**: abrir `COPYS-PRONTAS-V5.md` → seção "3. EMAILS DA SEQUÊNCIA" → copiar E1-E5
- **Output**: 5 textos em Google Docs

#### Tarefa 6.2 — Criar sequência automática ConvertKit (40min)
- **Ação**: [ConvertKit](https://app.convertkit.com/) → Sequences → New Sequence → "Checklist 7 Dias Pós-Download"
- **Estrutura**:
  - Email 1: enviar "Immediately" após entrar na lista
  - Email 2: "2 days after previous email"
  - Email 3: "2 days after previous email"
  - Email 4: "2 days after previous email"
  - Email 5: "2 days after previous email"
- **Placeholders a substituir**:
  - `[LINK_CHECKLIST_PDF]` → URL Google Drive do PDF (de segunda)
  - `[LINK_TRIPWIRE_HOTMART]` → URL checkout Hotmart tripwire (de terça)
  - `[LINK_EBOOK_HOTMART]` → URL checkout ebook principal
  - `[SEU_WHATSAPP]` → link wa.me/55[NUMERO]
  - `[X]` no E5 → deixar `[X]` até ter venda real
- **Output**: 5 emails ativados
- **Critério "feito"**: Weslley manda próprio email pra LP, recebe E1 imediatamente

#### Tarefa 6.3 — Integrar Carrd → ConvertKit (10min)
- **Ação**: no Carrd do lead magnet, conectar form → ConvertKit API key → adicionar à sequência criada
- **Output**: fluxo automático
- **Critério "feito"**: form da LP envia lead pra sequência correta no ConvertKit

**Dependência bloqueada por sábado**: ligar ads (domingo) só faz sentido se sequência tá viva.

---

### 🟠 DOMINGO (30min) — Ligar Ads + Validação Final

**Tempo planejado**: 30min
**Resultado final**: funil ao vivo recebendo tráfego pago.

#### Tarefa 7.1 — Teste fim-a-fim (15min)
Weslley faz o fluxo COMPLETO como se fosse um lead:
1. Abre `checklist7dias.carrd.co` → preenche email teste → confirma submit
2. Checa se recebeu Email 1 imediato (com link PDF)
3. Abre link PDF → valida PDF baixa certo
4. Espera 10min → abre link tripwire R$9 → valida checkout Hotmart abre
5. Abre link ebook R$37 → valida cupom FUNDADOR19 aplica → preço aparece R$19
6. Simula compra → garantia aparece → bump aparece → parcelamento aparece

**Critério "feito"**: todos os 6 passos sem erro.

#### Tarefa 7.2 — Ligar ads (5min)
- **Ação**: Meta Ads Manager → campanha criada sexta → toggle "Ativar"
- **Output**: ads ao vivo
- **Critério "feito"**: status "Ativa" no dashboard, Meta aprova em 2-24h

#### Tarefa 7.3 — Planejar semana 2 (10min)
- **Ação**: abrir `CHECKLIST-EXECUCAO-4SEMANAS.md` → ler Semana 2
- **Output**: clareza do que vem a seguir
- **Critério "feito"**: Weslley sabe primeira ação de segunda da semana 2

---

## ✅ ENTREGÁVEIS SEMANA 1 (CHECKLIST IMPRIMÍVEL)

Imprimir/colar na geladeira:

```
[ ] PDF Checklist 7 Dias formatado + hospedado Drive (SEG)
[ ] Mini-guia tripwire R$9 formatado + upload Hotmart (TER)
[ ] LP Carrd lead magnet no ar (QUA)
[ ] LP Carrd ebook no ar (QUA)
[ ] 4 Multiplicadores Hotmart configurados (QUA)
[ ] Cupom FUNDADOR19 criado (QUA)
[ ] 3 Reels gravados + editados (QUI)
[ ] Campanha Meta Ads criada (SEX)
[ ] Pixel rastreando (SEX)
[ ] 5 emails ConvertKit carregados (SÁB)
[ ] Integração Carrd → ConvertKit (SÁB)
[ ] Teste fim-a-fim passou (DOM)
[ ] Ads ao vivo (DOM)

PARALELO (qualquer momento da semana):
[ ] Ebook Amazon KDP R$9,90 escrito (via skill copy)
[ ] Capa Amazon Canva
[ ] Ebook Amazon publicado KDP BR (72h aprovação)
```

---

## 🔗 LINKS DIRETOS (bookmarks pra facilitar)

**Pra setup**:
- Carrd.co — https://carrd.co/
- Hotmart Producer — https://producer.hotmart.com/
- ConvertKit — https://app.convertkit.com/
- Meta Business — https://business.facebook.com/
- Canva (grátis) — https://www.canva.com/
- Google Drive — https://drive.google.com/
- Amazon KDP — https://kdp.amazon.com/pt_BR/
- CapCut — https://www.capcut.com/

**Pra monitorar**:
- Meta Pixel Helper (Chrome extension) — https://chrome.google.com/webstore/detail/meta-pixel-helper/fdgfkebogiimcoedlicjlajpkdmockpc
- Hotmart Analytics — https://app-vlc.hotmart.com/analytics

**Pra consulta rápida**:
- `COPYS-PRONTAS-V5.md` → todas as copys
- `PORTFOLIO-5-VENCEDORAS.md` → visão estratégica
- `ESTRATEGIA-VENCEDORA.md` → #64 detalhada
- `TOM-DE-MARCA.md` → validação de voz
- `funil/02-multiplicadores-hotmart.md` → passo-a-passo Hotmart

---

## 🚨 KILL SWITCHES DA SEMANA 1

Se alguma dessas acontecer, PARAR e reavaliar:

1. **Hotmart rejeita tripwire R$9 e fallbacks**: ativar só LP ebook R$37, pular tripwire por ora. Orçamento ainda fecha via #64 sem tripwire (~+69% ROI ao invés de +119%).
2. **Carrd não carrega / pixel não dispara**: debug essencial. Não liga ads sem pixel — vai queimar R$400 sem tracking.
3. **ConvertKit não dispara email automaticamente no teste**: NÃO liga ads. Resolver primeiro.
4. **Hotmart approval do ebook demora >72h**: ligar ads mesmo assim, redirecionando pro ebook R$37 (que já tá aprovado há meses). Tripwire fica pendente.
5. **Weslley extrapolou 9h no total da semana**: parar na sexta, ligar ads só com LP + email sequence (sem tripwire nem Amazon). Recuperar semana 2.

---

## 🎯 ENERGIA MENTAL

**Segunda**: mais pesado porque começa. Só o PDF.
**Terça-quarta**: pico técnico. LPs + Hotmart consomem energia.
**Quinta**: liberador. Grava reels (pode ser divertido).
**Sexta-sábado**: operacional. Configurações.
**Domingo**: leve. Só testar + ligar.

Se tiver que pular 1 dia, pula SÁBADO (emails) — dá pra fazer domingo de manhã + adiar ligar ads pra segunda.
NÃO pular quarta (LPs+Hotmart) — trava tudo depois.

---

**Próximo arquivo**: `CHECKLIST-EXECUCAO-4SEMANAS.md` pra visão geral das 4 semanas + dependências + kill switches globais.
