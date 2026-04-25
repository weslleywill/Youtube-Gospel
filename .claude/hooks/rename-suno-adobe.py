#!/usr/bin/env python3
"""
Auto-rename de arquivos baixados do Suno/Adobe Podcast pro padrão do canal.

Detecta padrões comuns e renomeia automaticamente:
- `<algo> (1).wav`, `<algo> (2).wav` → Suno versões, vão pra trilhas/
- `<algo>-Adobe podcast.wav` → voz pós-Adobe, vai pra vozes/raw/

Formato alvo: YYYY-MM-DD-<tema>-<tipo>-<variante>.<ext>

Executado como hook PostToolUse em Write|Edit|Read que detectar essas pastas.
Passado o file_path como arg, decide e renomeia silenciosamente.
"""
import sys
import re
import shutil
from pathlib import Path

CANAL_ROOT = Path("E:/Claude Code/#youtube/Canal-gospel- conteudo/Abril-OpcaoE")

def detect_type(filename: str) -> str | None:
    """Retorna 'trilha' ou 'voz-adobe' ou None."""
    f = filename.lower()
    if "adobe podcast" in f or "-adobe" in f:
        return "voz-adobe"
    if re.search(r'\s*\(\d+\)\s*\.(wav|mp3)$', f) and "coracao" in f or "oracao" in f:
        # Padrão "nome (1).wav" - Suno download
        return "trilha"
    return None


def main():
    if len(sys.argv) < 2:
        sys.exit(0)

    raw_path = Path(sys.argv[1])
    if not raw_path.exists():
        sys.exit(0)

    filename = raw_path.name
    kind = detect_type(filename)
    if not kind:
        sys.exit(0)

    # Extrai date e tema do filename (ex: 2026-04-23-coracao-cansado-trilha (1).wav)
    m = re.match(r'^(\d{4}-\d{2}-\d{2})-(.+?)[-\s]', filename)
    if not m:
        sys.exit(0)
    date = m.group(1)
    tema = m.group(2).strip('-').strip()

    # Extrai número de variante (1), (2), etc
    var_m = re.search(r'\((\d+)\)', filename)
    variant = var_m.group(1) if var_m else "01"

    ext = raw_path.suffix

    if kind == "trilha":
        new_name = f"{date}-{tema}-trilha-v{variant}{ext}"
        dest_dir = CANAL_ROOT / "trilhas"
    elif kind == "voz-adobe":
        # Adivinha parte pela ordem (variant)
        parte = f"parte{int(variant):02d}" if variant.isdigit() else "parte01"
        new_name = f"{date}-{tema}-voz-{parte}-adobe{ext}"
        dest_dir = CANAL_ROOT / "vozes" / "raw"
    else:
        sys.exit(0)

    dest_dir.mkdir(parents=True, exist_ok=True)
    new_path = dest_dir / new_name

    if new_path.exists():
        print(f"[rename-suno-adobe] já existe: {new_path}")
        sys.exit(0)

    shutil.move(str(raw_path), str(new_path))
    print(f"[rename-suno-adobe] {filename} -> {new_path}")


if __name__ == "__main__":
    main()
