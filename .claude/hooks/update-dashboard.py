#!/usr/bin/env python3
"""
Auto-update Obsidian dashboard when a new roteiro is created in pgsa/roteiros/.
Called by PostToolUse hook with file path as first argument.
"""
import sys
import re
from pathlib import Path
from datetime import datetime

DAYS_PT = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom']

TITLE_MAP = {
    'oracao': 'Oração', 'coracao': 'Coração', 'cansado': 'Cansado',
    'ansiedade': 'Ansiedade', 'provisao': 'Provisão', 'salmo': 'Salmo',
    'sofrendo': 'Sofrendo', 'silencio': 'Silêncio', 'dormir': 'Dormir',
    'paz': 'Paz', 'noturna': 'Noturna', 'manha': 'Manhã',
    'fundo': 'Fundo', 'musical': 'Musical', 'pra': 'Pra', 'para': 'Para',
    'em': 'em', 'de': 'de', 'da': 'da', 'do': 'do', 'na': 'na',
    'cura': 'Cura', 'emocional': 'Emocional', 'gratidao': 'Gratidão',
    'esperanca': 'Esperança', 'natal': 'Natal', 'protecao': 'Proteção',
    'declaracao': 'Declaração', 'fe': 'Fé', 'cansaco': 'Cansaço',
    'noite': 'Noite', 'dor': 'Dor', 'peso': 'Peso',
}


def slug_to_title(slug):
    return ' '.join(TITLE_MAP.get(p, p.capitalize()) for p in slug.split('-') if p)


def main():
    if len(sys.argv) < 2:
        sys.exit(0)

    raw_path = sys.argv[1]
    file_path = raw_path.replace('\\', '/')

    if 'pgsa/roteiros/' not in file_path:
        sys.exit(0)

    fp = Path(raw_path)
    if not fp.exists() or fp.suffix != '.md':
        sys.exit(0)

    # Parse: YYYY-MM-DD-<theme>-<dur>min.md
    m = re.match(r'^(\d{4}-\d{2}-\d{2})-(.+?)(?:-(\d+)min)?$', fp.stem)
    if not m:
        sys.exit(0)

    date_str = m.group(1)
    theme_slug = m.group(2)
    duration = m.group(3) or '30'

    try:
        d = datetime.strptime(date_str, '%Y-%m-%d')
    except ValueError:
        sys.exit(0)

    day_label = f"{DAYS_PT[d.weekday()]} {d.day:02d}/{d.month:02d}"

    content = fp.read_text(encoding='utf-8')

    # Extract thumb text
    thumb_m = re.search(r'\*\*Thumb\*\*:\s*(.+)', content)
    thumb = thumb_m.group(1).strip() if thumb_m else 'A definir'

    # Determine hora from slot number (1st longform = 20h, 2nd = 22h)
    slot_m = re.search(r'\*\*Slot\*\*:\s*.+?—\s*(\d+)[ºª]', content)
    slot_num = int(slot_m.group(1)) if slot_m else 2
    hora = {1: '20h', 2: '22h', 3: '00h'}.get(slot_num, '22h')

    clean_slug = re.sub(r'^oracao-?', '', theme_slug)
    theme_display = slug_to_title(clean_slug)
    formato = f"{duration}min {theme_display}"
    rel_link = f"../pgsa/roteiros/{fp.name}"

    new_row = f"| {day_label} | {hora} | {formato} | {theme_display} | ⚠️ A gravar | [Roteiro]({rel_link}) | {thumb} |"

    # Resolve dashboard path: pgsa/roteiros/file.md → ../../_obsidian-setup/dashboard...
    dashboard_path = fp.parent.parent.parent / '_obsidian-setup' / 'dashboard-gospel-opcao-e.md'
    if not dashboard_path.exists():
        print(f"[dashboard-hook] Dashboard não encontrado: {dashboard_path}")
        sys.exit(0)

    dash = dashboard_path.read_text(encoding='utf-8')

    # Skip if already mentioned
    if fp.name in dash:
        sys.exit(0)

    # Find weekly table and append row after existing rows
    table_pattern = re.compile(
        r'(### Essa semana[^\n]*\n\| Dia[^\n]*\n\|[-|: ]+\n)((?:\|[^\n]+\n)*)',
        re.MULTILINE
    )
    table_m = table_pattern.search(dash)
    if table_m:
        insert_pos = table_m.end(2)
        new_dash = dash[:insert_pos] + new_row + '\n' + dash[insert_pos:]
        dashboard_path.write_text(new_dash, encoding='utf-8')
        print(f"[dashboard-hook] Adicionado: {day_label} {hora} — {theme_display}")
    else:
        print(f"[dashboard-hook] Tabela semanal nao encontrada no dashboard")


if __name__ == '__main__':
    main()
