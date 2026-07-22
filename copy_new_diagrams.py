import os
import shutil
import json

src_dir = r'C:\Users\Manav\.gemini\antigravity-ide\brain\242516d3-1206-4c82-a7b5-886971caf335'
dest_dir = r'd:\Personal\images'

os.makedirs(dest_dir, exist_ok=True)

new_files = [
    ('media__1784739693173.png', 'electromagnet.png'),
    ('media__1784739754802.png', 'bacteriophage.png'),
    ('media__1784739859171.png', 'oersted_deflection.png')
]

for src, dst in new_files:
    sp = os.path.join(src_dir, src)
    dp = os.path.join(dest_dir, dst)
    if os.path.exists(sp):
        shutil.copy2(sp, dp)
        print(f'COPIED {src} -> {dst}')
    else:
        print(f'MISSING {sp}')

# Now update script.js
with open('d:/Personal/script.js', 'r', encoding='utf-8') as f:
    code = f.read()

start_marker = "const SVG_DIAGRAMS = ["
end_marker = "];\n\n// --------------------------------------------------------------------------\n// 7. INITIALIZATION"

idx_start = code.find(start_marker)
idx_end = code.find(end_marker)

if idx_start != -1 and idx_end != -1:
    raw_json = code[idx_start + len("const SVG_DIAGRAMS = "):idx_end + 1]
    diagrams = json.loads(raw_json)

    # 1. Remove Biogas plant diagram card (any item with 'Biogas' in title or desc)
    diagrams = [d for d in diagrams if 'biogas' not in d['title'].lower() and 'biogas' not in d['desc'].lower()]

    # 2. Update Electromagnet card (img 1)
    for d in diagrams:
        if 'electromagnet' in d['title'].lower() and 'solenoid' in d['title'].lower():
            d['title'] = 'Electromagnet Diagram'
            d['desc'] = 'Simple electromagnet circuit with an iron nail core, coiled wire, and DC battery.'
            d['imgUrl'] = 'images/electromagnet.png'
            d['fallbackUrl'] = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Electromagnet.svg/800px-Electromagnet.svg.png'

    # 3. Update Bacteriophage card (img 2)
    for d in diagrams:
        if 'bacteriophage' in d['title'].lower() or 'virus' in d['title'].lower():
            d['title'] = 'Structure of Bacteriophage'
            d['desc'] = 'Anatomy of a bacteriophage virus detailing capsid head, nucleic acid (DNA), collar, sheath, baseplate, spikes, and tail fibers.'
            d['imgUrl'] = 'images/bacteriophage.png'
            d['fallbackUrl'] = 'https://upload.wikimedia.org/wikipedia/commons/1/11/Bacteriophage_structure_ja.png'

    # 4. Update Oersted magnet deflection card (img 3)
    for d in diagrams:
        if 'oersted' in d['title'].lower() or 'compass' in d['title'].lower():
            d['title'] = 'Oersted’s Magnet Deflection Experiment'
            d['desc'] = 'Circuit diagram demonstrating compass magnetic needle deflection when electric current (I) flows through a wire conductor.'
            d['imgUrl'] = 'images/oersted_deflection.png'
            d['fallbackUrl'] = 'https://upload.wikimedia.org/wikipedia/commons/9/96/Oersted%27s_experiment.JPG'

    new_js = "const SVG_DIAGRAMS = " + json.dumps(diagrams, indent=2) + ";\n"
    code_updated = code[:idx_start] + new_js + code[idx_end + 3:]

    with open('d:/Personal/script.js', 'w', encoding='utf-8') as f:
        f.write(code_updated)

    print("UPDATED script.js SUCCESSFULLY!")
