"""Crée src/content/editions-en/<slug>.md à partir d'une traduction (scripts/traductions/<slug>.json)
et des champs techniques de la version française (date, couverture, vidéo, carte).
Usage : python3 scripts/assembler-en.py"""
import json, re, pathlib
CARTE = ("Words and pictures tell the emotion, but geography tells the effort. To see the full scale of the journey "
         "and its detours, explore the exact route they took and where each challenge was located.")
q = lambda s: json.dumps(s, ensure_ascii=False)
for tr in sorted(pathlib.Path('scripts/traductions').glob('*.json')):
    slug = tr.stem
    fr = pathlib.Path(f'src/content/editions/{slug}.md').read_text(encoding='utf-8')
    champ = lambda k: re.search(rf'^{k}: (.*)$', fr, re.M).group(1)
    t = json.loads(tr.read_text(encoding='utf-8'))
    fm = [f'titre: {q(t["titre"])}', f'date: {champ("date")}', f'description: {q(t["description"])}', f'chapo: {q(t["chapo"])}',
          f'couverture: {champ("couverture")}', f'youtube: {champ("youtube")}', f'carte: {champ("carte")}', f'carteTexte: {q(CARTE)}', 'defis:']
    for nom, question, reponse in t['defis']:
        fm += [f'  - nom: {q(nom)}', f'    question: {q(question)}', f'    reponse: {q(reponse)}']
    pathlib.Path(f'src/content/editions-en/{slug}.md').write_text('---\n' + '\n'.join(fm) + '\n---\n\n' + t['corps'].strip() + '\n', encoding='utf-8')
    print(slug, len(t['defis']), 'challenges')
