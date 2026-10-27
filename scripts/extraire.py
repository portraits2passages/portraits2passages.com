"""Extrait les éditions du HTML public de Site Creator vers src/content/editions/*.md (usage : python3 -I scripts/extraire.py pages/*.html)."""
import re, sys, html, json, pathlib
MOIS = dict(janvier=1,février=2,mars=3,avril=4,mai=5,juin=6,juillet=7,août=8,septembre=9,octobre=10,novembre=11,décembre=12)
def txt(s):
    s = re.sub(r'<br\s*/?>', ' ', s); s = re.sub(r'<[^>]+>', '', s)
    return re.sub(r'\s+', ' ', html.unescape(s)).strip()
def md(fragment):
    out = []
    for m in re.finditer(r'<p class="ce-paragraph"[^>]*>(.*?)</p>|<ul>(.*?)</ul>', fragment, re.S):
        if m.group(1) is not None:
            t = txt(m.group(1))
            if t: out.append(t)
        else:
            out.append('\n'.join('- ' + txt(li) for li in re.findall(r'<li>(.*?)</li>', m.group(2), re.S)))
    return '\n\n'.join(out)
q = lambda s: json.dumps(s, ensure_ascii=False)
imgs = set()
for f in sys.argv[1:]:
    r = open(f, encoding='utf-8').read()
    canon = re.search(r'rel="canonical" href="([^"]+)"', r)
    if not canon or '/editions/' not in canon.group(1): continue
    slug = canon.group(1).rstrip('/').split('/')[-1]
    titre = txt(re.search(r'<h1 class="editorjsH1[^>]*>(.*?)</h1>', r, re.S).group(1))
    j, mois, an = re.search(r'(\d{1,2}) (\w+) (\d{4})</span>', r).groups()
    date = f'{an}-{MOIS[mois.lower()]:02d}-{int(j):02d}'
    chapo = txt(re.search(r'id="blogEditorjsSubtitle">(.*?)</p>', r, re.S).group(1))
    desc = html.unescape(re.search(r'name="description" content="([^"]*)"', r).group(1))
    cover = re.search(r'itemCover[^>]*><img data-src="([^"]+)"', r).group(1)
    imgs.add(cover)
    corps = r[r.find('blogEditorjsSubtitle'):]
    intro = md(corps[:corps.find('<h2>La vidéo')])
    yt = re.search(r'youtube\.com/embed/([\w-]+)', r).group(1)
    umap = re.search(r'src="(https://umap[^"]+)"', r).group(1)
    carte = corps[corps.find('<h2>La carte'):corps.find('<h2>Les défis')]
    carte_txt = md(carte)
    defis = []
    for it in re.findall(r'class="p2p-accordion-item">(.*?)</div>\s*</div>\s*</div>', r, re.S):
        nom = txt(re.search(r'p2p-question-title">(.*?)</span>', it, re.S).group(1))
        quest = txt(re.search(r'</span>(.*?)</span>', it, re.S).group(1)).lstrip('- ').strip()
        rep = txt(re.search(r'p2p-accordion-text">(.*)', it, re.S).group(1))
        defis.append((nom, quest, rep))
    fm = [f'titre: {q(titre)}', f'date: {date}', f'description: {q(desc)}', f'chapo: {q(chapo)}',
          f'couverture: {q("/images/" + pathlib.Path(cover).name)}', f'youtube: {q(yt)}', f'carte: {q(umap)}']
    if carte_txt: fm.append(f'carteTexte: {q(carte_txt)}')
    fm.append('defis:' if defis else 'defis: []')
    for n, qu, re_ in defis:
        fm += [f'  - nom: {q(n)}', f'    question: {q(qu)}', f'    reponse: {q(re_)}']
    pathlib.Path(f'src/content/editions/{slug}.md').write_text('---\n' + '\n'.join(fm) + '\n---\n\n' + intro + '\n', encoding='utf-8')
    print(slug, date, len(defis), 'défis')
pathlib.Path('scripts/images.txt').write_text('\n'.join(sorted(imgs)) + '\n')
