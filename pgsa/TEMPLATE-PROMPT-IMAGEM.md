# Template Prompt Imagem — 2 modelos por roteiro

> **Regra pro Claude**: TODO roteiro novo em `pgsa/roteiros/` DEVE ter a seção "PROMPT IMAGEM" com **2 prompts**:
> 1. **ChatGPT GPT-Image-2** — obrigatório, default validado do Weslley
> 2. **Modelo recomendado pra aquela cena específica** — escolhido via árvore de decisão abaixo
>
> **⚠️ REGRA CRÍTICA 1 — prompts adaptados ao modelo**: o prompt do Modelo 2 **SEMPRE** adaptado à gramática/estilo do modelo alvo — não colar o Modelo 1. (memória `feedback_prompts_adaptados_por_modelo.md`)
>
> **⚠️ REGRA CRÍTICA 2 — Modelo 2 de IMAGEM não pode ser ChatGPT**: se Modelo 1 é ChatGPT GPT-Image-2, o Modelo 2 NÃO pode ser GPT Image / GPT Image 2 / GPT Image 1.5 no Higgsfield (é o mesmo engine). Tem que ser engine DIFERENTE: Nano Banana Pro (Google), Higgsfield Soul 2.0, Seedream, FLUX, Reve, Kling O1. (memória `feedback_modelo_2_sempre_diferente_e_economico.md`)
>
> **⚠️ REGRA CRÍTICA 3 — Modelo 2 de VÍDEO = MAIS EM CONTA**: pro vídeo, o Modelo 2 deve ser explicitamente o mais econômico da plataforma, não o fallback premium. Default: **Minimax Hailuo** (marcado oficialmente "most affordable" no Higgsfield). Alternativas econômicas: Seedance 2.0 Fast, Grok Imagine, WAN 2.7.
>
> **⚠️ REGRA CRÍTICA 4 — nome de arquivo em caixinha**: todo artefato (imagem/vídeo/áudio/voz/trilha/master/final) tem o nome num bloco ``` isolado, igual campos do Suno — Weslley usa Obsidian e precisa do botão "copiar". (memória `feedback_nome_arquivo_em_caixinha.md`)
>
> **NUNCA usar Canva como pós-processamento pra adicionar texto.** O texto da thumb vai DENTRO do prompt, IA já entrega pronto.
>
> **Nome do arquivo final**: sempre `YYYY-MM-DD-<tema>-thumb-FINAL.png`. Mesma imagem serve de base pro Higgsfield vídeo.

---

## Plataforma principal do Weslley: **Higgsfield** (higgsfield.ai)

Weslley usa Higgsfield pra imagem + vídeo (image-to-video). Então o **Modelo 2** tem que ser algo que EXISTE no Higgsfield — não inventar modelo ou plataforma.

## ⚠️ FONTE DA VERDADE: [pgsa/HIGGSFIELD-MODELOS.md](HIGGSFIELD-MODELOS.md)

Antes de recomendar qualquer modelo, consultar esse arquivo — lista confirmada com prints da interface do Higgsfield.

## Modelos de IMAGEM no Higgsfield (resumo — lista completa em HIGGSFIELD-MODELOS.md)

**Featured (9 principais)**:
- **GPT Image 2** NEW — 4K + near-perfect text rendering (DEFAULT pra thumb com texto)
- **Nano Banana Pro** — Google Gemini 3.0 flagship
- **Nano Banana 2** UNLIMITED — Flash speed, Pro quality
- **Higgsfield Soul 2.0** NEW — next-gen ultra-realistic fashion
- **Higgsfield Soul Cinema** NEW — cinema-grade visual creation
- **Seedream 5.0 lite** UNLIMITED
- **Seedream 4.5** UNLIMITED — 4K ByteDance next-gen
- **Grok Imagine** — xAI styles
- **Auto** — Higgsfield escolhe sozinho

**Outros disponíveis (All models)**: Nano Banana, Higgsfield Soul, Higgsfield Face Swap, Higgsfield Character Swap, Seedream 4.0, GPT Image 1.5, Z-Image, Kling O1, FLUX.2 Pro/Flex/Max, Flux Kontext Max, GPT Image, Multi Reference, Reve, WAN 2.2.

## Modelos de VÍDEO no Higgsfield

**Featured**:
- **Kling 3.0** EXCLUSIVE — 4K, 3-15s, com som
- **Kling 3.0 Motion Control** — 1080p, 3-30s (MELHOR pra loop de thumb)
- **Seedance 2.0** NEW / **Seedance 2.0 Fast** NEW — 720p
- **Google Veo 3.1 Lite** NEW — 1080p, com som
- **Wan 2.7** NEW — 1080p
- **Grok Imagine** — 720p

**Outros**: Minimax Hailuo, Kling (geral), OpenAI Sora 2, Google Veo, Higgsfield (próprio), Wan, Seedance.

## ChatGPT (separado — não está no Higgsfield mas é nosso Modelo 1 obrigatório)

| Modelo | Forças | Quando |
|---|---|---|
| **ChatGPT GPT-Image-2** | Texto nítido, composição respeitada, coerência alta | **SEMPRE como Modelo 1 obrigatório** — prompt original do Claude já validou estética |

---

## Árvore de decisão — qual modelo 2 recomendar (dentro do Higgsfield)

```
A cena tem TEXTO GRANDE e obrigatório na imagem (thumb com gancho forte)?
├── SIM → **GPT Image 2** (NEW — "near-perfect text rendering", mesmo que o ChatGPT)
└── NÃO
    │
    É retrato/personagem que precisa ficar consistente entre gerações?
    ├── SIM → **Higgsfield Character Swap** + **Higgsfield Soul 2.0**
    └── NÃO
        │
        É pessoa real / fotorealismo técnico (personal real, produto, mãos)?
        ├── SIM → **Flux Kontext Max** ou **FLUX.2 Max**
        └── NÃO
            │
            É cinematográfico épico sem texto (landscape, mood, atmosfera)?
            ├── SIM → **Higgsfield Soul Cinema** (NEW — feito pra isso) ou **Seedream 4.5**
            └── NÃO (ilustração artística, capa ebook) → **Reve**
```

**Atalho seguro**: se em dúvida + tem texto → **GPT Image 2**. Se em dúvida + sem texto → **Nano Banana Pro**.

---

## Árvore de decisão — modelo de VÍDEO no Higgsfield (image-to-video)

> ⚠️ **Kling 3.0 Motion Control NÃO aceita imagem pura** — ele precisa de um vídeo de input pra fazer motion transfer. Pra animar uma thumb (image-to-video direto), usar **Kling 3.0 EXCLUSIVE**.

```
É image-to-video (animar uma imagem estática) — default do canal?
├── SIM (qualidade premium) → **Kling 3.0 EXCLUSIVE** (4K, 3-15s, image-to-video direto)
├── SIM (mais em conta) → **Minimax Hailuo** ("fastest and most affordable")
└── SIM (econômico rápido) → **Seedance 2.0 Fast** (720p, rápido)

Precisa de som gerado junto?
├── SIM → **Google Veo 3.1 Lite** (1080p + som, 4-8s) ou **OpenAI Sora 2**
└── NÃO — queremos silent loop (áudio vem do master): desativar audio no Kling 3.0

Já tem vídeo de referência e quer transferir o movimento pra outra cena?
└── **Kling 3.0 Motion Control** (única situação que ele serve — não é o caso de animar thumb)
```

---

## Formato OBRIGATÓRIO de cada roteiro

Cada roteiro deve ter EXATAMENTE essa estrutura na seção de imagem:

```markdown
## 🖼️ PROMPT IMAGEM — thumb final com texto embutido

> **Fluxo**: Gera a imagem com texto "X" embutido → salva como thumb-FINAL → usa a mesma no Higgsfield.

### 🥇 MODELO 1 — ChatGPT GPT-Image-2 (OBRIGATÓRIO)

**Prompt (copy-paste):**
[prompt 6-componentes — Subject / Context / Composition / Text / Lighting / Style / Negative]

### 🥈 MODELO 2 — [nome do modelo recomendado] (RECOMENDADO pra ESTA cena)

**Por quê escolhi esse pra essa imagem**: [1-2 frases explicando por que ESSE modelo pra ESSA cena]

**Prompt (copy-paste):**
[prompt adaptado ao modelo recomendado]

**Settings**:
- [parâmetros específicos do modelo — stylize, magic prompt, style, etc.]

### Export
- Resolução: 1280×720 mínimo
- Formato: PNG
- Nome: `YYYY-MM-DD-<tema>-thumb-FINAL.png`
- Salvar em: `pgsa/thumbs/`

### Critério de escolha entre os 2
[tabela de quando usar cada]
```

---

## 📐 Estrutura de prompt — ADAPTADA POR MODELO

**Regra de ouro**: cada modelo tem a sua gramática preferida. Um prompt genérico perde força em todos. Adapte.

### Modelo 1 — ChatGPT GPT-Image-2 (estrutura SEMPRE)

Tags explícitas em maiúsculo + parágrafos técnicos:

| Componente | O que escrever |
|---|---|
| **SUBJECT** | Quem/o quê é o foco (silhueta, pessoa, objeto) — descrever visualmente |
| **CONTEXT** | Cenário e ambiente (sky, earth, space, lighting environment) |
| **COMPOSITION** | Ângulo de câmera, enquadramento, regra de terços |
| **TEXT OVERLAY** | EXATAMENTE qual texto, onde na imagem, cor, tamanho, estilo tipográfico |
| **LIGHTING** | Direção, cor, intensidade, tipo (chiaroscuro, rim light, backlit) |
| **STYLE** | "Shot on ARRI Alexa 65, 24mm lens, Kodak Vision3" + estética (photorealistic, painterly) |
| **NEGATIVE** | O que NÃO quer aparecer (explícito) |

### Modelo 2 — adaptação por modelo

#### GPT Image 2 (Higgsfield)
**Estrutura**: idêntica ao ChatGPT (é o mesmo engine). **Prompt pode ser idêntico** — explicitar "mesmo engine, mesmo prompt".

#### Nano Banana Pro / Nano Banana 2 (Google Gemini)
**Estrutura**: narrativa densa visceral, "what the camera literally sees". Text overlays explicitados inline (não em tag). Menos maiúsculo, mais descrição. Gemini respeita JSON-like se preferir.

#### Higgsfield Soul 2.0 / Soul Cinema
**Estrutura**: termos fashion/cinema explícitos — "fashion editorial", "cinema-grade", "cinematic narrative frame", "shot on [camera]", style anchors tipo "Rembrandt lighting", "Caravaggio shadows".

#### Seedream 4.5 / 5.0 lite (ByteDance)
**Estrutura**: prompt estruturado cena + ação + ambiente + estilo. Ordem: "Setting → Action → Mood → Style". Respeita CJK text bem.

#### FLUX.2 Pro / Max / Kontext Max
**Estrutura**: descritivo natural **sem CAPS tags**. Photographic terms: aperture (f/1.4, f/2.8), lens (50mm, 85mm, 24mm), film stock (Kodak Portra 400, Fuji Velvia), grain, depth of field. "A cinematic photograph of..."

#### Reve
**Estrutura**: termos de arte pictórica — oil painting, watercolor, concept art, digital illustration, gouache, impasto texture.

#### Midjourney (fora do Higgsfield — caso surja)
**Estrutura**: curto, vírgulas separando elementos, termos densos + flags: `prompt here --stylize 500 --chaos 25 --ar 16:9 --v 7`.

#### Ideogram (fora do Higgsfield — caso surja)
**Estrutura**: Magic Prompt OFF, literal, texto em aspas `"ELE OUVE"`. Style = Realistic ou Design.

### Modelo 2 — adaptação por modelo de VÍDEO

#### Kling 3.0 / Kling 3.0 Motion Control (Higgsfield)
**Estrutura**: linguagem cinematográfica explícita — "slow dolly in at 5 seconds", "tilt up 15 degrees", "pan right", "rack focus from foreground to cross". Motion strength numérico. "Seamless loop" pra looping. Silhueta/personagem estáticos: "subject remains perfectly still". Sem diálogo, sem sound cues (é loop silencioso).

#### Seedance 2.0 / Seedance 2.0 Fast
**Estrutura**: multi-shot blocks separados por cena, com spec de câmera por shot. "Shot 1 (0-3s): wide establishing, slow push-in. Shot 2 (3-6s): medium close-up, rack focus..."

#### OpenAI Sora 2
**Estrutura**: narrativa visual rica como description de filme + sound cues naturalmente embutidos ("footsteps echo", "wind rustling"). Multi-shot escrito em prose natural.

#### Google Veo 3.1 / Veo 3.1 Lite
**Estrutura**: "Starting with [shot A], transitioning to [shot B]". Sound controls explícitos se usar áudio.

#### Wan 2.7
**Estrutura**: camera-controlled com freedom de movimento. Pode incluir sound layer separado.

#### Minimax Hailuo
**Estrutura**: movimento intenso explícito, VFX cues ("lens flare blooms", "particles burst outward"), high-dynamic language.

---

**Regra de ouro geral**: quanto mais VISCERAL e ESPECÍFICO ("ARRI Alexa 65, 24mm lens, Kodak Vision3 grading"), melhor — seja qual for o modelo. Adjetivos vagos ("bonito", "dramático") = resultado genérico em qualquer modelo.

---

## Negativos obrigatórios pro canal gospel (copiar em todos)

Sempre incluir no NEGATIVE:
```
no candles, no windows, no generic indoor scenes, no cartoon, no anime, 
no low-poly, no watermarks, no signatures, no faces visible, 
no other text besides the specified overlay
```

Motivo: o canal Cícero Euclides que o Weslley usa de referência NUNCA usa velas, janelas, cenas de interior genéricas — e a audiência identifica esse padrão. Esses negativos garantem que a thumb fique na estética "épico bíblico" (cruz, leão, águia, montanha, cordeiro, mãos, vitral).

---

## Referências

### Banco de prompts locais (sempre consultar ANTES de escrever do zero)

- **[pgsa/referencias/prompts-ia/](referencias/prompts-ia/README.md)** — banco importado do ecossistema personal:
  - `brand-base.md` — fundação visual (paleta, identidade)
  - `youtube-thumbnail.md` — templates 16:9 prontos
  - `instagram-post.md` / `instagram-story.md` — IG templates
  - `ebook-cover.md` — capa de produto

### Skills instaladas locais (invocar sob demanda)

**Imagem**:
- `image-prompt` — otimiza prompt pro Nano Banana (Gemini) especificamente
- `nano-banana-pro-prompts` — busca em 10k prompts curados do Nano Banana Pro
- `ai-image-prompts` — busca em 10k prompts generalistas (qualquer modelo)
- `prompt-master` — otimiza prompt pra QUALQUER AI (Midjourney, Flux, Kling, ChatGPT, Ideogram)
- Skill oficial SEO: `.claude/skills/claude-seo/skills/seo-image-gen/` (estrutura 6-componentes, via banana/Gemini MCP quando conectado)

**Vídeo** (pra animar a thumb no Higgsfield/Kling/Seedance):
- `kling-ai-prompt-generator` — Kling AI
- `seedance2-skill` — Jimeng Seedance 2.0
- `video-prompting-skill` — generalista (Sora, Veo 3, Ovi, Wan, LTX)
- `awesome-ai-video-prompts` — library cinemática (vocabulário de câmera, lighting)

### Templates visuais do canal

- Estrutura 6-componentes: `.claude/skills/claude-seo/skills/seo-image-gen/references/prompt-engineering.md`
- Template de thumb Cícero-style: `pgsa/THUMB-TEMPLATE-CICERO.md` (7 templates visuais: Leão, Águia, Fogo, Montanha, Vitral, Cordeiro+Pastor, Mãos — e Cruz+Luz)

### Fluxo recomendado pro Claude

Quando Weslley pedir prompt de imagem num roteiro novo:
1. **Primeiro**: consultar `pgsa/referencias/prompts-ia/` — já tem template pro formato? Aproveita.
2. **Se não bater**: invocar skill apropriada (`image-prompt` pra Nano Banana, ou `nano-banana-pro-prompts` pra buscar prompts similares)
3. **Se precisar otimizar pra modelo específico**: invocar `prompt-master` com o modelo alvo
4. **Sempre**: retornar 2 prompts (ChatGPT obrigatório + modelo 2 recomendado via árvore de decisão acima)
