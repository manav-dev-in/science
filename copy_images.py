import os
import shutil

src_dir = r'C:\Users\Manav\.gemini\antigravity-ide\brain\242516d3-1206-4c82-a7b5-886971caf335'
dest_dir = r'd:\Personal\images'

os.makedirs(dest_dir, exist_ok=True)

files = [
    ('media__1784738724778.png', 'microscope.png'),
    ('media__1784738754331.png', 'dry_cell.png'),
    ('media__1784738812233.png', 'plant_cell.png'),
    ('media__1784738855654.png', 'animal_cell.png'),
    ('media__1784738788528.png', 'paramecium.png')
]

for src, dst in files:
    sp = os.path.join(src_dir, src)
    dp = os.path.join(dest_dir, dst)
    if os.path.exists(sp):
        shutil.copy2(sp, dp)
        print(f'COPIED {src} -> {dst}')
    else:
        print(f'MISSING {sp}')
