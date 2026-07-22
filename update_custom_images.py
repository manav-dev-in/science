import json

with open('d:/Personal/script.js', 'r', encoding='utf-8') as f:
    code = f.read()

# Load SVG_DIAGRAMS dataset in code or update it
# Find const SVG_DIAGRAMS = ...
start_marker = "const SVG_DIAGRAMS = ["
end_marker = "];\n\n// --------------------------------------------------------------------------\n// 7. INITIALIZATION"

idx_start = code.find(start_marker)
idx_end = code.find(end_marker)

if idx_start != -1 and idx_end != -1:
    raw_json = code[idx_start + len("const SVG_DIAGRAMS = "):idx_end + 1]
    try:
        diagrams = json.loads(raw_json)
    except Exception as e:
        print("JSON parse error:", e)
        diagrams = []

    # Update diagram cards per user request:
    # 1. Img 1 for 1st diagram
    if len(diagrams) > 0:
        diagrams[0]['title'] = '1. Compound Optical Microscope Labeled Anatomy'
        diagrams[0]['imgUrl'] = 'images/microscope.png'
        diagrams[0]['fallbackUrl'] = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Compound_Microscope_diagram.svg/800px-Compound_Microscope_diagram.svg.png'

    # 2. Img 4 for 2nd diagram [change card name to Plant Cell]
    if len(diagrams) > 1:
        diagrams[1]['title'] = '2. Plant Cell'
        diagrams[1]['imgUrl'] = 'images/plant_cell.png'
        diagrams[1]['fallbackUrl'] = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Plant_cell_structure-en.svg/800px-Plant_cell_structure-en.svg.png'

    # 3. Img 5 for 3rd diagram [change card name to Animal Cell]
    if len(diagrams) > 2:
        diagrams[2]['title'] = '3. Animal Cell'
        diagrams[2]['imgUrl'] = 'images/animal_cell.png'
        diagrams[2]['fallbackUrl'] = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Animal_cell_structure_en.svg/800px-Animal_cell_structure_en.svg.png'

    # 4. Img 3 for 6th diagram
    if len(diagrams) > 5:
        diagrams[5]['title'] = '6. Paramecium Caudatum Cilia & Anatomy Diagram'
        diagrams[5]['imgUrl'] = 'images/paramecium.png'
        diagrams[5]['fallbackUrl'] = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Paramecium_diagram.svg/800px-Paramecium_diagram.svg.png'

    # 5. Img 2 for 13th diagram
    if len(diagrams) > 12:
        diagrams[12]['title'] = '13. Zinc-Carbon Dry Cell Cross-Section Anatomy'
        diagrams[12]['imgUrl'] = 'images/dry_cell.png'
        diagrams[12]['fallbackUrl'] = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Zinc-carbon_battery_cross_section.svg/800px-Zinc-carbon_battery_cross_section.svg.png'

    new_js = "const SVG_DIAGRAMS = " + json.dumps(diagrams, indent=2) + ";\n"
    code_updated = code[:idx_start] + new_js + code[idx_end + 3:]

    with open('d:/Personal/script.js', 'w', encoding='utf-8') as f:
        f.write(code_updated)

    print("UPDATED script.js WITH USER PROVIDED IMAGES SUCCESSFULLY!")
