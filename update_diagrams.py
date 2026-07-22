import json

internet_diagrams = [
  {
    "title": "1. Compound Optical Microscope Labeled Anatomy",
    "desc": "High-resolution diagram detailing Eyepiece (10x), Revolving Nosepiece, Objective Lenses (40x), Mechanical Stage, Iris Diaphragm, and Concave Light Mirror.",
    "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Compound_Microscope_diagram.svg/800px-Compound_Microscope_diagram.svg.png",
    "fallbackUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Optical_microscope_nikon_alphaphot.jpg/800px-Optical_microscope_nikon_alphaphot.jpg"
  },
  {
    "title": "2. Eukaryotic Plant Cell Detailed Structure",
    "desc": "Anatomical diagram showing Cellulose Cell Wall, Selective Plasma Membrane, Nucleus, Chloroplasts, and Large Central Vacuole.",
    "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Plant_cell_structure-en.svg/800px-Plant_cell_structure-en.svg.png",
    "fallbackUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Plant_cell_structure-en.svg/800px-Plant_cell_structure-en.svg.png"
  },
  {
    "title": "3. Eukaryotic Animal Cell Detailed Structure",
    "desc": "Complete animal cell structure highlighting Plasma Membrane, Central Nucleus & DNA, Mitochondria powerhouses, Lysosomes, and Centrioles.",
    "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Animal_cell_structure_en.svg/800px-Animal_cell_structure_en.svg.png",
    "fallbackUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Biological_cell.svg/800px-Biological_cell.svg.png"
  },
  {
    "title": "4. Microscopic View of Onion Epidermal Cells",
    "desc": "Photomicrograph showing rectangular plant cells stained with Safranin, prominent cell walls, and dark peripheral nuclei.",
    "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/9/90/Onion_skin_cells_under_a_microscope.jpg",
    "fallbackUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Onion_cells_under_microscope.jpg/800px-Onion_cells_under_microscope.jpg"
  },
  {
    "title": "5. Microscopic View of Stained Human Cheek Cells",
    "desc": "Photomicrograph showing flat, irregular animal cheek cells stained with Methylene Blue highlighting cell membrane and nucleus.",
    "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Human_Cheek_Cells_%28Methylene_Blue_Stain%29.jpg/960px-Human_Cheek_Cells_%28Methylene_Blue_Stain%29.jpg",
    "fallbackUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Human_cheek_cells_stained.jpg/800px-Human_cheek_cells_stained.jpg"
  },
  {
    "title": "6. Paramecium Caudatum Cilia & Anatomy Diagram",
    "desc": "Slipper-shaped protozoan diagram illustrating surrounding hair-like cilia fringe, oral groove, food vacuoles, and macronucleus.",
    "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Paramecium_diagram.svg/800px-Paramecium_diagram.svg.png",
    "fallbackUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Paramecium_diagram.svg/800px-Paramecium_diagram.svg.png"
  },
  {
    "title": "7. Microscopic Filamentous Algae (Spirogyra)",
    "desc": "Photomicrograph under 400x magnification showing green Spirogyra filaments with ribbon-shaped spiral chloroplasts.",
    "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Spirogyra_Under_Light_Microscope_40_X_Mag.jpg/960px-Spirogyra_Under_Light_Microscope_40_X_Mag.jpg",
    "fallbackUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Spirogyra_under_microscope.jpg/800px-Spirogyra_under_microscope.jpg"
  },
  {
    "title": "8. Bacteriophage Virus Structure Diagram",
    "desc": "Acellular virus schematic showing protein capsid head, DNA nucleic acid core, sheath collar, and tail fibers.",
    "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/1/11/Bacteriophage_structure_ja.png",
    "fallbackUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/T4_Bacteriophage.svg/800px-T4_Bacteriophage.svg.png"
  },
  {
    "title": "9. Underground Biogas (Gobar Gas) Plant Diagram",
    "desc": "Engineering cross-section of anaerobic digester tank, slurry inlet mixing pit, methane gas holder dome, and spent manure outlet.",
    "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Biogas_plant_sa.svg/960px-Biogas_plant_sa.svg.png",
    "fallbackUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Biogas_plant_diagram-en.svg/800px-Biogas_plant_diagram-en.svg.png"
  },
  {
    "title": "10. Oersted’s Compass Deflection Experiment (1820)",
    "desc": "Historical physics experiment proving electric current generates a magnetic field around a wire conductor.",
    "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/9/96/Oersted%27s_experiment.JPG",
    "fallbackUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Oersted_experiment.svg/800px-Oersted_experiment.svg.png"
  },
  {
    "title": "11. Electromagnet Solenoid Coil & Soft Iron Core",
    "desc": "Diagram of insulated copper wire solenoid coil wrapped around a soft iron nail core connected to a DC circuit.",
    "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Electromagnet.svg/800px-Electromagnet.svg.png",
    "fallbackUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Magnetic_field_of_solenoid.svg/800px-Magnetic_field_of_solenoid.svg.png"
  },
  {
    "title": "12. Voltaic Galvanic Acid Cell Diagram",
    "desc": "Alessandro Volta’s 1800 cell: Copper (+) and Zinc (-) metal plates immersed in dilute Sulfuric Acid electrolyte.",
    "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/c/c2/Voltaic_cell_diagram.png",
    "fallbackUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Voltaic_cell_diagram.svg/800px-Voltaic_cell_diagram.svg.png"
  },
  {
    "title": "13. Zinc-Carbon Dry Cell Cross-Section Anatomy",
    "desc": "Electrochemistry diagram showing Zinc container anode (-), central Carbon rod cathode (+), and moist NH₄Cl + MnO₂ paste electrolyte.",
    "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Zinc-carbon_battery_cross_section.svg/800px-Zinc-carbon_battery_cross_section.svg.png",
    "fallbackUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Voltaic_cell_diagram.svg/800px-Voltaic_cell_diagram.svg.png"
  },
  {
    "title": "14. Lemon Battery Electrochemistry Experiment",
    "desc": "Citric acid electrolyte generating electrical voltage across copper strip cathode (+) and zinc/iron nail anode (-).",
    "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Lemon_battery_experiment.JPG/960px-Lemon_battery_experiment.JPG",
    "fallbackUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Lemon_battery_experiment.jpg/800px-Lemon_battery_experiment.jpg"
  }
]

with open('d:/Personal/script.js', 'r', encoding='utf-8') as f:
    code = f.read()

start_marker = "const SVG_DIAGRAMS = ["
end_marker = "];\n\n// --------------------------------------------------------------------------\n// 7. INITIALIZATION"

idx_start = code.find(start_marker)
idx_end = code.find(end_marker)

if idx_start != -1 and idx_end != -1:
    new_diagrams_js = "const SVG_DIAGRAMS = " + json.dumps(internet_diagrams, indent=2) + ";\n"
    code = code[:idx_start] + new_diagrams_js + code[idx_end + 3:]

# Now replace renderDiagrams function
fn_start = code.find("function renderDiagrams() {")
fn_end = code.find("// --------------------------------------------------------------------------\n// 10. QUICK REVISION")

new_fn_js = """function renderDiagrams() {
  const container = document.getElementById('diagrams-grid');
  if (!container) return;
  container.innerHTML = '';

  SVG_DIAGRAMS.forEach((d) => {
    const card = document.createElement('div');
    card.className = 'diagram-card';
    card.innerHTML = `
      <div class="diagram-img-wrap" onclick="openDiagramLightbox('${d.imgUrl}', '${d.title.replace(/'/g, "\\\\'")}')">
        <img src="${d.imgUrl}" alt="${d.title}" loading="lazy" class="diagram-img" onerror="this.onerror=null; this.src='${d.fallbackUrl}';">
        <div class="diagram-img-overlay">🔍 Click to View Full Image</div>
      </div>
      <div class="diagram-info">
        <h4>${d.title}</h4>
        <p>${d.desc}</p>
      </div>
    `;
    container.appendChild(card);
  });
}

function openDiagramLightbox(imgUrl, title) {
  let lightbox = document.getElementById('diagram-lightbox');
  if (!lightbox) {
    lightbox = document.createElement('div');
    lightbox.id = 'diagram-lightbox';
    lightbox.className = 'modal-overlay';
    lightbox.onclick = (e) => { if (e.target === lightbox) lightbox.classList.remove('open'); };
    document.body.appendChild(lightbox);
  }
  lightbox.innerHTML = `
    <div class="modal-box" style="max-width:900px; text-align:center; padding:24px; background:#071A2E; border:1px solid var(--cyan);">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
        <h3 style="margin:0; color:var(--cyan); font-size:1.2rem;">${title}</h3>
        <button class="icon-btn" onclick="document.getElementById('diagram-lightbox').classList.remove('open')">✕</button>
      </div>
      <div style="background:#040E19; padding:16px; border-radius:14px; max-height:75vh; overflow:auto; display:flex; justify-content:center; align-items:center;">
        <img src="${imgUrl}" alt="${title}" style="max-width:100%; max-height:70vh; object-fit:contain; border-radius:8px; box-shadow:0 10px 30px rgba(0,0,0,0.6);">
      </div>
    </div>
  `;
  lightbox.classList.add('open');
}

"""

if fn_start != -1 and fn_end != -1:
    code = code[:fn_start] + new_fn_js + code[fn_end:]

with open('d:/Personal/script.js', 'w', encoding='utf-8') as f:
    f.write(code)

print("SUCCESSFULLY UPDATED script.js WITH INTERNET DIAGRAMS!")
