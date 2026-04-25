---
name: rename-audio
description: Renomeia arquivos de áudio baixados (Suno/Adobe Podcast) pro padrão do projeto canal gospel. Varre as pastas `Canal-gospel- conteudo/**` procurando arquivos com nomes genéricos tipo `<algo> (1).wav` ou `<algo>-Adobe podcast.wav` e renomeia pro padrão `YYYY-MM-DD-<tema>-<tipo>-<variante>.ext`, movendo pra subpasta correta.
argument-hint: "[--dry-run]"
allowed-tools:
  - Bash
  - Read
  - Glob
---

# /rename-audio — Renomear arquivos Suno/Adobe pro padrão do canal

## Objetivo

Quando Weslley baixa áudio do Suno ou do Adobe Podcast Enhance, os arquivos vêm com nomes:
- `2026-04-23-coracao-cansado-trilha (1).wav` (Suno duas versões)
- `2026-04-23-coracao-cansado-trilha (2)-Adobe podcast.wav` (Adobe enhanced)
- `nome-generico.mp3`

Este comando varre as pastas e renomeia pro padrão:
```
YYYY-MM-DD-<tema>-<tipo>-<variante>.<ext>
```

Onde `<tipo>` = `trilha`, `voz-RAW`, `voz-adobe`, `voz-FINAL`, `master`.

## Uso

```
/rename-audio
```

Varre e renomeia tudo. Sem argumentos.

```
/rename-audio --dry-run
```

Mostra o que SERIA renomeado, sem executar.

## Processo

1. **Varrer** as 3 pastas principais:
   - `Canal-gospel- conteudo/Abril-OpcaoE/trilhas/`
   - `Canal-gospel- conteudo/Abril-OpcaoE/vozes/`
   - `Canal-gospel- conteudo/Abril-OpcaoE/vozes/raw/`

2. **Pra cada arquivo com padrão suspeito** (regex: `\(\d+\)` OU `Adobe podcast` OU nome genérico), inferir:
   - **Data** (do prefixo YYYY-MM-DD ou perguntar)
   - **Tema** (do nome — ex: "coracao-cansado")
   - **Tipo**:
     - Tem `Adobe podcast` no nome → **voz-adobe** (vai pra `vozes/raw/`)
     - Tem `(1)`, `(2)` sem `Adobe` → **trilha** versão N (vai pra `trilhas/`)
     - Nome genérico → perguntar qual tipo
   - **Variante** (número da versão ou parte01/parte02)

3. **Renomear + mover** pra pasta correta seguindo padrão:
   ```
   trilha:      <data>-<tema>-trilha-v<N>.<ext>        → trilhas/
   voz-RAW:     <data>-<tema>-voz-RAW-parte<NN>.<ext>   → vozes/raw/
   voz-adobe:   <data>-<tema>-voz-parte<NN>-adobe.<ext> → vozes/raw/
   voz-FINAL:   <data>-<tema>-voz-FINAL.<ext>           → vozes/
   master:      <data>-<tema>-master.<ext>              → masters/
   ```

4. **Relatar** tudo que foi feito: tabela `antes → depois`.

## Script subjacente

`.claude/hooks/rename-suno-adobe.py` implementa a lógica de detecção + rename.

## Exemplo de execução

Input:
```
Canal-gospel- conteudo/Abril-OpcaoE/vozes/
├── 2026-04-23-coracao-cansado-trilha (1)-Adobe podcast.wav
└── 2026-04-23-coracao-cansado-trilha (2)-Adobe podcast.wav
```

Output:
```
Canal-gospel- conteudo/Abril-OpcaoE/vozes/raw/
├── 2026-04-23-coracao-cansado-voz-parte01-adobe.wav
└── 2026-04-23-coracao-cansado-voz-parte02-adobe.wav
```

## Quando usar

- Depois de baixar do Suno (2 versões vêm como `(1)` e `(2)`)
- Depois de baixar do Adobe Podcast Enhance (vem com sufixo "Adobe podcast")
- Quando notar arquivos com nomes fora do padrão nas pastas

## Não usar

- Pra arquivos já no padrão (vai pular)
- Pra arquivos de outros projetos fora de `Canal-gospel- conteudo/`
