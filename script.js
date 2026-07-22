/* ==========================================================================
   Grade 8 Science Study Companion — Single Page Application Engine
   Based on Curiosity Textbook (Comprehensive Deep Explanations & Ultra-Detailed Diagrams)
   ========================================================================== */

// Global State
const STATE = {
  activeTab: 'home',
  bookmarks: JSON.parse(localStorage.getItem('g8_sci_bookmarks') || '[]'),
  learnedFlashcards: JSON.parse(localStorage.getItem('g8_sci_learned_fc') || '[]'),
  quizHighScore: parseInt(localStorage.getItem('g8_sci_quiz_score') || '0', 10),
  currentTopicIndex: 0,
  flashcardIndex: 0,
  flashcardFiltered: [],
  quizIndex: 0,
  quizScore: 0,
  quizUserAnswers: [],
  quizActiveQuestions: [],
  searchQuery: ''
};

// --------------------------------------------------------------------------
// 1. TOPICS DATASET (Expanded with Deep Scientific Mechanisms & Formulas)
// --------------------------------------------------------------------------
const TOPICS = [
  // CHAPTER 2: THE INVISIBLE LIVING WORLD
  {
    id: 'ch2-invisible-world',
    chapterId: 'living-world',
    chapterTitle: 'The Invisible Living World',
    icon: '🔬',
    title: '1. The Invisible World & Human Resolution Limit',
    difficulty: 'Easy',
    readTime: '5 min',
    preview: 'Why can’t we see microorganisms with the naked eye? Deep dive into the 0.1 mm human eye resolution limit, light wavelengths, and early magnification tools.',
    contentHtml: `
      <p>Look around you. You can see macroscopic organisms like trees, birds, dogs, humans, and ants. But can you see bacteria? No. Amoeba? No. Yeast? No. These microscopic organisms are far smaller than the resolving power of human vision.</p>

      <div class="callout callout-important">
        <div class="callout-title">⭐ Human Eye Limit of Resolution</div>
        The human eye has a limit of resolution of approximately <strong>0.1 mm (100 micrometers / 100 μm)</strong>. Anything smaller than this limit cannot be resolved as a distinct separate object by our retina without magnification.
      </div>

      <div class="formula-block">
        Limit of Resolution (d) &approx; 0.1 mm = 100 &mu;m = 100,000 nm
      </div>

      <table>
        <thead>
          <tr><th>Entity</th><th>Typical Diameter</th><th>Visible to Naked Eye?</th></tr>
        </thead>
        <tbody>
          <tr><td>Human Being</td><td>1.7 meters</td><td>✅ Visible</td></tr>
          <tr><td>Ant</td><td>5.0 millimeters</td><td>✅ Visible</td></tr>
          <tr><td>Human Hair (thickness)</td><td>100 micrometers (0.1 mm)</td><td>✅ Borderline Limit</td></tr>
          <tr><td>Onion Epidermal Cell</td><td>50 &ndash; 100 micrometers</td><td>❌ Microscopic</td></tr>
          <tr><td>Human Red Blood Cell</td><td>7 &ndash; 8 micrometers</td><td>❌ Microscopic</td></tr>
          <tr><td>Bacterium (E. coli)</td><td>1 &ndash; 2 micrometers</td><td>❌ Microscopic</td></tr>
          <tr><td>Influenza Virus</td><td>0.1 micrometer (100 nm)</td><td>❌ Electron Microscopic</td></tr>
        </tbody>
      </table>

      <h3>How Did Science Overcome the Human Vision Barrier?</h3>
      <p>Scientists invented optical tools that bend light rays to increase the angular resolution of tiny objects:</p>
      <ul>
        <li><strong>Lenses:</strong> Curved pieces of glass or plastic that refract (bend) light rays outward to produce magnified virtual images.</li>
        <li><strong>Magnifying Glasses:</strong> Simple convex lenses providing 2x to 10x magnification.</li>
        <li><strong>Compound Optical Microscopes:</strong> Dual-lens optical systems achieving 40x to 1500x magnification.</li>
        <li><strong>Electron Microscopes:</strong> Systems using high-voltage electron beams and electromagnetic coils instead of light rays, achieving magnifications up to 2,000,000x!</li>
      </ul>
    `
  },
  {
    id: 'ch2-lens-microscope',
    chapterId: 'living-world',
    chapterTitle: 'The Invisible Living World',
    icon: '🔍',
    title: '2. Lenses, Light Refraction & Microscope Optics',
    difficulty: 'Medium',
    readTime: '6 min',
    preview: 'Explore light refraction in convex lenses, the round-bottom water flask experiment, ray paths, and differences between Simple and Compound Microscopes.',
    contentHtml: `
      <div class="callout callout-definition">
        <div class="callout-title">📖 Lens Refraction</div>
        A <strong>lens</strong> is a transparent optical component with curved surfaces that refracts (bends) light rays passing through it. Convex lenses are thicker in the middle and cause parallel light rays to converge at a focal point, producing an enlarged image.
      </div>

      <p>The word <em>lens</em> comes from the Latin word for lentil seed, because early convex glass lenses resembled the biconvex shape of lentils.</p>

      <div class="callout callout-activity">
        <div class="callout-title">🔬 Activity: Water Flask Magnifier</div>
        Fill a round-bottom glass flask with clean water and position it close to small text on a printed book page.
      </div>

      <div class="callout callout-observation">
        <div class="callout-title">📝 Observation & Optical Explanation</div>
        The curved glass surface filled with water forms a spherical biconvex liquid lens. Light rays travelling from the paper pass from air into water (denser medium), refracting inward. When viewed from above, the text appears dramatically enlarged.
      </div>

      <h3>Total Magnification Formula</h3>
      <p>In a compound microscope, two lenses work together to multiply magnification:</p>
      <div class="formula-block">
        Total Magnification = Eyepiece Magnification &times; Objective Magnification
      </div>
      <p><em>Example:</em> A 10x Eyepiece combined with a 40x High-Power Objective lens yields: <strong>10 &times; 40 = 400x Total Magnification!</strong></p>

      <h3>Comparative Anatomy of Microscopes</h3>
      <table>
        <thead>
          <tr><th>Feature</th><th>Simple Microscope</th><th>Compound Optical Microscope</th></tr>
        </thead>
        <tbody>
          <tr><td>Lens Count</td><td>Single biconvex lens</td><td>Multiple lenses (Eyepiece + Objective)</td></tr>
          <tr><td>Magnification Range</td><td>2x to 20x</td><td>40x to 1500x</td></tr>
          <tr><td>Illumination</td><td>Natural ambient light</td><td>Adjustable Mirror or LED Condenser</td></tr>
          <tr><td>Primary Usage</td><td>Field loupe, hand lens</td><td>School biology labs, medical pathology</td></tr>
        </tbody>
      </table>
    `
  },
  {
    id: 'ch2-scientists-hooke-leeuwenhoek',
    chapterId: 'living-world',
    chapterTitle: 'The Invisible Living World',
    icon: '👨‍🔬',
    title: '3. Historical Milestones: Hooke & Leeuwenhoek',
    difficulty: 'Easy',
    readTime: '5 min',
    preview: 'Learn about Robert Hooke’s 1665 discovery of dead cork cell walls and Antonie van Leeuwenhoek, the Father of Microbiology.',
    contentHtml: `
      <h3>Robert Hooke (1665) &mdash; Coining the Term "Cell"</h3>
      <p>In 1665, English polymath Robert Hooke published his landmark treatise <em>Micrographia</em>. Using his custom-built compound microscope, he examined a razor-thin slice of oak cork bark. He observed hundreds of empty, honeycomb-like box compartments.</p>
      <p>These tiny compartments reminded him of <em>cellulae</em>&mdash;the small dormitory rooms occupied by monks in monasteries. He gave them the scientific term <strong>CELL</strong>.</p>

      <div class="callout callout-mistake">
        <div class="callout-title">❌ Common Exam Trap</div>
        Robert Hooke did <strong>NOT</strong> observe living cells! Cork tissue is dead bark tissue. Hooke observed only the empty, dead cellulose cell walls.
      </div>

      <h3>Antonie van Leeuwenhoek (1660s&ndash;1670s) &mdash; Observing Live Microbes</h3>
      <p>Dutch merchant Antonie van Leeuwenhoek perfected the art of grinding tiny glass spheres into single-lens microscopes with exceptional optical clarity. In 1674, he became the first human to observe living, swimming microorganisms in pond water, rain water, and dental scrapings.</p>
      <p>He named these moving microbes <em>"animalcules"</em> (little animals). Today we know them as bacteria, protozoa, and micro-algae.</p>

      <div class="callout callout-fact">
        <div class="callout-title">💡 Father of Microbiology</div>
        Leeuwenhoek is universally recognized as the <strong>Father of Microbiology</strong> for documenting the first detailed observations of living bacteria, sperm cells, and blood corpuscles.
      </div>

      <div class="callout callout-trick">
        <div class="callout-title">🧠 Easy Memory Mnemonic</div>
        <strong>Hooke</strong> = Hooked the word <em>"Cell"</em> (Dead cork walls)<br>
        <strong>Leeuwenhoek</strong> = Looked at <em>Living Microbes</em> (Animalcules)
      </div>
    `
  },
  {
    id: 'ch2-cell-definition-parts',
    chapterId: 'living-world',
    chapterTitle: 'The Invisible Living World',
    icon: '🧫',
    title: '4. Cell Theory & Detailed Organelle Anatomy',
    difficulty: 'Hard',
    readTime: '7 min',
    preview: 'Deep dive into the fundamental definition of a cell, organelle functions (Membrane, Cytoplasm, Nucleus, Cell Wall, Mitochondria, Chloroplasts, Vacuoles).',
    contentHtml: `
      <div class="callout callout-definition">
        <div class="callout-title">📖 Fundamental Definition of a Cell</div>
        A <strong>cell</strong> is the smallest, self-contained basic structural, functional, and biological unit of life. Every living organism is constructed from one or more cells.
      </div>

      <p><strong>Brick Building Analogy:</strong> A skyscraper is built from thousands of individual bricks. The brick provides shape, structural integrity, and boundaries. Similarly, cells form the structural building blocks of plants, animals, and microorganisms.</p>

      <h3>Detailed Molecular Anatomy of Cell Components</h3>
      <ol>
        <li>
          <strong>Cell Membrane (Plasma Membrane):</strong> Phospholipid bilayer boundary embedded with proteins. It is <em>selectively permeable</em>&mdash;allowing nutrients (glucose, oxygen) to enter while retaining essential proteins and allowing metabolic wastes (CO&thinsp;&bdquo; urea) to leave.
        </li>
        <li>
          <strong>Cytoplasm:</strong> A viscous, jelly-like aqueous matrix containing enzymes, amino acids, glucose, and mineral salts. It hosts glycolytic metabolic reactions and holds organelles in suspension.
        </li>
        <li>
          <strong>Nucleus (Brain of the Cell):</strong> Double-membrane organelle containing nucleoplasm, the nucleolus (ribosome assembly site), and chromatin threads (DNA double-helix encoding genetic instructions). Controls cellular respiration, protein synthesis, and cell division.
        </li>
        <li>
          <strong>Cell Wall (Plant & Fungal Cells Only):</strong> Outer rigid layer composed of tough cellulose microfibrils in plants (chitin in fungi). Withstands internal turgor pressure when water enters plant cells.
        </li>
        <li>
          <strong>Chloroplasts (Plant Cells Only):</strong> Double-membrane plastids containing green chlorophyll pigment arranged in stacked thylakoid grana. Site of photosynthesis.
        </li>
        <li>
          <strong>Vacuole:</strong> Membrane-bound storage sac (tonoplast membrane). Plant cells feature one enormous central vacuole maintaining turgidity, whereas animal cells have small temporary vacuoles.
        </li>
      </ol>

      <div class="callout callout-trick">
        <div class="callout-title">🧠 Core Mnemonic: M-C-N</div>
        <strong>M (Membrane)</strong> &rarr; Regulates entry & exit (Security Gate)<br>
        <strong>C (Cytoplasm)</strong> &rarr; Site of chemical reactions (Factory Floor)<br>
        <strong>N (Nucleus)</strong> &rarr; Coordinates cellular functions (Command Center)
      </div>
    `
  },
  {
    id: 'ch2-onion-cheek-experiments',
    chapterId: 'living-world',
    chapterTitle: 'The Invisible Living World',
    icon: '🔬',
    title: '5. Onion Peel & Human Cheek Cell Lab Protocols',
    difficulty: 'Medium',
    readTime: '6 min',
    preview: 'Step-by-step practical guides for preparing slides using Safranin, Methylene Blue, and Glycerin with precaution guidelines.',
    contentHtml: `
      <h3>Experiment 1: Preparation of Onion Epidermal Slide</h3>
      <div class="callout callout-activity">
        <div class="callout-title">🔬 Protocol</div>
        <ol>
          <li>Peel a small inner fleshy scale leaf from an onion bulb.</li>
          <li>Using forceps, pull out a thin transparent membrane (epidermis).</li>
          <li>Place peel in a watch glass containing water; add 2 drops of <strong>Safranin stain</strong> for 1 minute.</li>
          <li>Transfer peel to a clean glass slide, add 1 drop of <strong>Glycerin</strong>.</li>
          <li>Gently lower a coverslip at a <strong>45&deg; angle</strong> using a needle to prevent air bubble entrapment.</li>
        </ol>
      </div>

      <div class="callout callout-observation">
        <div class="callout-title">📝 Observation</div>
        Under 100x/400x magnification, you observe tightly packed rectangular cells arranged like brick masonry. Distinct outer rigid cell walls, pink-stained cytoplasm, and dark peripheral nuclei are clearly visible.
      </div>

      <h3>Experiment 2: Preparation of Human Cheek Cell Slide</h3>
      <div class="callout callout-activity">
        <div class="callout-title">🔬 Protocol</div>
        Gently scrape the inner lining of your cheek using a clean, blunt toothpick. Smear scrapings onto a clean slide, stain with <strong>Methylene Blue</strong> for 60 seconds, apply glycerin and a coverslip.
      </div>

      <div class="callout callout-observation">
        <div class="callout-title">📝 Observation</div>
        Cheek cells appear irregular, flat, or polygonal. They lack cell walls, displaying a delicate cell membrane, blue-stained cytoplasm, and a dark central nucleus.
      </div>

      <h3>Key Reagent Chemical Functions</h3>
      <ul>
        <li><strong>Safranin Stain:</strong> Basic dye that stains cell walls, lignin, and nuclei bright pinkish-red.</li>
        <li><strong>Methylene Blue:</strong> Stains animal cell nucleic acids and nuclear DNA dark blue.</li>
        <li><strong>Glycerin:</strong> High-viscosity refractive medium that prevents slide dehydration under hot microscope light bulbs.</li>
        <li><strong>45&deg; Coverslip Technique:</strong> Pushes out air sequentially, preventing round black air bubbles under the lens.</li>
      </ul>
    `
  },
  {
    id: 'ch2-plant-vs-animal-cells',
    chapterId: 'living-world',
    chapterTitle: 'The Invisible Living World',
    icon: '🌿',
    title: '6. Plant Cell vs Animal Cell Deep Comparison',
    difficulty: 'Medium',
    readTime: '6 min',
    preview: 'Comprehensive comparison table highlighting Cell Wall microfibrils, Chloroplasts, Vacuolar Turgor Pressure, and Shape rigidity.',
    contentHtml: `
      <p>Although both plant and animal cells belong to eukaryotic organisms, their evolutionary adaptations to autotrophic (photosynthetic) vs heterotrophic lifestyles created major structural differences.</p>

      <table>
        <thead>
          <tr><th>Structural Component</th><th>Plant Cell</th><th>Animal Cell</th></tr>
        </thead>
        <tbody>
          <tr><td>Cell Wall</td><td>✅ Present (Outer cellulose rigid wall)</td><td>❌ Completely Absent</td></tr>
          <tr><td>Chloroplasts / Plastids</td><td>✅ Present (Contains chlorophyll for photosynthesis)</td><td>❌ Completely Absent</td></tr>
          <tr><td>Vacuole Structure</td><td>Single large permanent central vacuole (occupies up to 90% volume)</td><td>Small, temporary, multiple vacuoles (or absent)</td></tr>
          <tr><td>Cell Boundary & Shape</td><td>Fixed, rigid, rectangular shape</td><td>Flexible, irregular, rounded shape</td></tr>
          <tr><td>Centrosomes & Centrioles</td><td>❌ Absent in higher plants</td><td>✅ Present (Aids spindle formation in cell division)</td></tr>
          <tr><td>Lysosomes</td><td>Rare / absent</td><td>✅ Present (Contains digestive enzymes)</td></tr>
          <tr><td>Storage Carbohydrate</td><td>Starch grains</td><td>Glycogen granules</td></tr>
        </tbody>
      </table>

      <div class="callout callout-tip">
        <div class="callout-title">⭐ Exam Reasoning Tip</div>
        Plants cannot move to escape harsh winds or heavy rain. The rigid <strong>cellulose cell wall</strong> combined with the high internal water turgor pressure of the <strong>central vacuole</strong> gives plants the structural strength to stand upright without a bony skeleton!
      </div>
    `
  },
  {
    id: 'ch2-cell-shapes-organization',
    chapterId: 'living-world',
    chapterTitle: 'The Invisible Living World',
    icon: '🧱',
    title: '7. Cell Specialization & Levels of Organization (CTOSO)',
    difficulty: 'Hard',
    readTime: '7 min',
    preview: 'Golden rule: "Structure follows function." Details of Muscle cells, Nerve cells, Cheek cells, Xylem tubes, and the CTOSO organizational hierarchy.',
    contentHtml: `
      <h3>Why don't all cells look identical?</h3>
      <p>In multicellular organisms, division of labor requires specialized cellular architecture. Just like a modern hospital employs surgeons, radiographers, and nurses, living bodies utilize specialized cell types suited for specific physiological tasks.</p>

      <div class="callout callout-important">
        <div class="callout-title">⭐ Golden Physiological Rule</div>
        <strong>Structure follows function.</strong> The visual shape, length, and organelle count of a cell directly enable its specific biological function.
      </div>

      <ul>
        <li><strong>Nerve Cell (Neuron):</strong> Extremely long (up to 1 meter!) with branched dendrites and an extended axon insulated with myelin sheath. Designed for rapid transmission of bio-electrical nerve impulses across the nervous system.</li>
        <li><strong>Skeletal Muscle Cell:</strong> Elongated, cylindrical, multinucleate, spindle-shaped cells packed with contractile actin and myosin protein microfilaments. Stretch and contract to generate physical locomotion.</li>
        <li><strong>Red Blood Cell (Erythrocyte):</strong> Biconcave disc shape without a nucleus. Maximizes surface area for binding oxygen to hemoglobin molecules.</li>
        <li><strong>Plant Xylem Vessel Element:</strong> Hollow, lignified cylindrical tubes stacked end-to-end to transport water and dissolved minerals from roots to canopy leaves.</li>
      </ul>

      <h3>Levels of Biological Organization (CTOSO Pyramid)</h3>
      <div class="callout callout-trick">
        <div class="callout-title">🧠 CTOSO Mnemonic</div>
        <strong>Cell</strong> &rarr; <strong>Tissue</strong> &rarr; <strong>Organ</strong> &rarr; <strong>Organ System</strong> &rarr; <strong>Organism</strong>
      </div>
      <ol>
        <li><strong>Cell:</strong> Basic functional building block (e.g., Cardiac muscle cell).</li>
        <li><strong>Tissue:</strong> Group of synchronized similar cells performing a unified task (e.g., Cardiac muscle tissue).</li>
        <li><strong>Organ:</strong> Anatomical structure composed of different tissue types working together (e.g., Heart containing muscle, nerve, and connective blood tissue).</li>
        <li><strong>Organ System:</strong> Group of coordinated organs performing a major life process (e.g., Circulatory system comprising heart, arteries, veins, and capillaries).</li>
        <li><strong>Organism:</strong> Fully functional individual living entity (e.g., Human being, Oak tree).</li>
      </ol>
    `
  },
  {
    id: 'ch2-unicellular-multicellular',
    chapterId: 'living-world',
    chapterTitle: 'The Invisible Living World',
    icon: '🧫',
    title: '8. Unicellular vs Multicellular Organisms',
    difficulty: 'Easy',
    readTime: '5 min',
    preview: 'Contrast single-celled organisms performing all life tasks in one cell with multi-celled complex organisms.',
    contentHtml: `
      <h3>Unicellular Organisms (Latin <em>"Uni"</em> = One)</h3>
      <p>Organisms whose entire body consists of a single isolated cell. This single cell carries out all physiological life processes: nutrient ingestion, intracellular digestion, respiration, waste excretion, movement, and reproduction (e.g., <em>Amoeba, Paramecium, Chlamydomonas, E. coli bacteria</em>).</p>

      <h3>Multicellular Organisms (Latin <em>"Multi"</em> = Many)</h3>
      <p>Organisms constructed from millions, billions, or trillions of specialized cells working cooperatively. Complex multicellular life forms (including humans, dogs, and trees) begin existence as a single fertilized egg cell (zygote) that undergoes repeated mitotic divisions and differentiation.</p>

      <table>
        <thead>
          <tr><th>Feature</th><th>Unicellular Organisms</th><th>Multicellular Organisms</th></tr>
        </thead>
        <tbody>
          <tr><td>Body Composition</td><td>Single cell</td><td>Millions / Billions of cells</td></tr>
          <tr><td>Division of Labor</td><td>Single cell performs all life functions</td><td>Different specialized cells perform distinct functions</td></tr>
          <tr><td>Injury Impact</td><td>Injury to cell causes death of organism</td><td>Loss of individual cells does not kill organism</td></tr>
          <tr><td>Lifespan</td><td>Usually short lifespan</td><td>Usually longer lifespan</td></tr>
          <tr><td>Size & Visibility</td><td>Microscopic (Invisible to naked eye)</td><td>Macroscopic (Visible to naked eye)</td></tr>
        </tbody>
      </table>
    `
  },
  {
    id: 'ch2-microorganisms-groups',
    chapterId: 'living-world',
    chapterTitle: 'The Invisible Living World',
    icon: '🦠',
    title: '9. The 5 Major Microorganism Groups',
    difficulty: 'Hard',
    readTime: '8 min',
    preview: 'Detailed guide to Protozoa (Amoeba, Paramecium), Algae, Fungi, Bacteria, and acellular Viruses.',
    contentHtml: `
      <div class="callout callout-definition">
        <div class="callout-title">📖 Microorganisms</div>
        Microscopic living entities incapable of being viewed by naked human eyes without optical magnification. Inhabit air, soil, fresh water, oceans, hot hydrothermal vents (&gt;100&deg;C), polar glaciers, and host digestive tracts.
      </div>

      <h3>1. Protozoa ("Primitive Animals")</h3>
      <p>Heterotrophic single-celled animal-like protists:</p>
      <ul>
        <li><strong>Amoeba proteus:</strong> Irregular body shape; moves and engulfs food particles via <strong>Pseudopodia</strong> ("false feet") through phagocytosis.</li>
        <li><strong>Paramecium caudatum:</strong> Slipper-shaped body with a rigid pellicle; swims rapidly via thousands of beating <strong>Cilia</strong>; ingests food via an oral groove.</li>
      </ul>

      <h3>2. Micro-Algae</h3>
      <p>Autotrophic photosynthetic organisms containing chlorophyll. Include unicellular <em>Chlamydomonas</em> (possessing 2 flagella) and filamentous <em>Spirogyra</em> containing spiral ribbon chloroplasts.</p>

      <h3>3. Fungi</h3>
      <p>Achlorophyllous (lacking chlorophyll) heterotrophic eukaryotic organisms. Absorb dissolved organic matter via hyphal filaments (e.g., <em>Rhizopus</em> bread mould, single-celled <em>Saccharomyces</em> yeast, edible mushrooms).</p>

      <h3>4. Bacteria</h3>
      <p>Single-celled prokaryotic microorganisms lacking a nuclear membrane. Classified by shape:</p>
      <ul>
        <li><strong>Cocci:</strong> Spherical shape (e.g., <em>Streptococcus</em>)</li>
        <li><strong>Bacilli:</strong> Rod shape (e.g., <em>Lactobacillus, E. coli</em>)</li>
        <li><strong>Spirilla:</strong> Spiral coil shape (e.g., <em>Spirillum</em>)</li>
        <li><strong>Vibrio:</strong> Comma shape (e.g., <em>Vibrio cholerae</em>)</li>
      </ul>

      <h3>5. Viruses (Special Acellular Borderline Entity)</h3>
      <div class="callout callout-important">
        <div class="callout-title">⭐ Acellular Parasites</div>
        Viruses are NOT constructed from cells. They consist solely of a genetic nucleic acid core (DNA or RNA) enclosed inside a protein capsid coat. Outside a host cell, they are completely inert non-living crystals. Inside a host cell, they hijack the host's ribosome machinery to replicate explosively!
      </div>
    `
  },
  {
    id: 'ch2-helpful-microbes-decomposition',
    chapterId: 'living-world',
    chapterTitle: 'The Invisible Living World',
    icon: '♻️',
    title: '10. Helpful Microbes: Decomposition, Manure & Biogas',
    difficulty: 'Medium',
    readTime: '7 min',
    preview: 'Discover how saprophytic bacteria and fungi clean the planet, form humus manure, recycle minerals, produce biogas, and clean oil spills.',
    contentHtml: `
      <div class="callout callout-definition">
        <div class="callout-title">📖 Saprophytic Decomposition</div>
        Decomposition is the enzymatic breakdown of complex, insoluble organic matter (dead plants, fallen leaves, animal carcasses) into simple soluble inorganic nutrients by saprophytic bacteria and fungi.
      </div>

      <p>Without decomposers, Earth's land surfaces would become buried under hundreds of meters of non-decomposed organic debris within a century!</p>

      <h3>Biochemical Roles of Microbes in Nature</h3>
      <ul>
        <li><strong>Manure & Humus Formation:</strong> Soil bacteria decompose kitchen vegetable peels, crop stubble, and cow dung into dark brown, nutrient-rich organic <strong>manure</strong> that improves soil aeration and water retention.</li>
        <li><strong>Nutrient Cycling:</strong> Recycles carbon, nitrogen, phosphorus, and potassium from dead biomass back into soil solution for plant root absorption.</li>
        <li><strong>Biogas Production:</strong> Methanogenic anaerobic bacteria decompose animal dung in the absence of oxygen to produce <strong>Biogas</strong> (55-70% Methane CH₄ + 30-45% CO₂).</li>
      </ul>

      
      <div class="formula-block">
        Organic Waste &rarr; [Methanogenic Bacteria] &rarr; Methane (CH₄) + Carbon Dioxide (CO₂) + Carbonate Slurry
      </div>

      <ul>
        <li><strong>Bioremediation of Oil Spills:</strong> Hydrocarbonoclastic bacteria (such as <em>Pseudomonas putida</em> engineered by Dr. Ananda Chakrabarty) metabolize toxic petroleum crude oil spills into non-toxic CO₂ and water.</li>
      </ul>
    `
  },
  {
    id: 'ch2-food-production-preservation',
    chapterId: 'living-world',
    chapterTitle: 'The Invisible Living World',
    icon: '🍞',
    title: '11. Food Biotechnology & Chemical Preservation',
    difficulty: 'Medium',
    readTime: '7 min',
    preview: 'Detailed biochemistry of Yeast bread fermentation, Lactobacillus curd conversion, lactic acid production, and salt/sugar preservation methods.',
    contentHtml: `
      <h3>Biochemistry of Bread Making & Yeast Fermentation</h3>
      <p>Yeast (<em>Saccharomyces cerevisiae</em>) is a single-celled fungus. When mixed into wheat dough containing sugar and warm water, yeast respires anaerobically, breaking down glucose into ethyl alcohol and <strong>carbon dioxide gas (CO₂)</strong>.</p>

      
      <div class="formula-block">
        Glucose (C₆H₁₂O₆) &rarr; [Yeast Fermentation] &rarr; 2 Ethanol (C₂H₅OH) + 2 Carbon Dioxide (2 CO₂ &uarr;)
      </div>

      <p>Trapped CO₂ gas bubbles expand under heat during baking, causing dough to rise, becoming light, porous, and spongy. Alcohol evaporates during baking.</p>

      <h3>Biochemistry of Curd Formation (Lactobacillus)</h3>
      <p>Milk contains the natural sugar <strong>Lactose</strong>. When lukewarm milk is inoculated with a small inoculum of curd containing <em>Lactobacillus</em> bacteria, the bacteria multiply rapidly.</p>

      
      <div class="formula-block">
        Lactose Sugar (C₁₂H₂₂O₁₁) &rarr; [Lactobacillus Bacteria] &rarr; Lactic Acid (C₃H₆O₃)
      </div>

      <p>Lactic acid lowers milk pH from 6.6 to 4.5. Acidic conditions cause soluble milk casein protein to denature, coagulate, and precipitate into thick, solid, sour curd.</p>

      <h3>Food Preservation Principles</h3>
      <ul>
        <li><strong>Salting & Sugaring:</strong> High osmotic pressure draws out water from microbial cells via <em>plasmolysis</em>, dehydrating and killing spoilage bacteria in pickles and jams.</li>
        <li><strong>Refrigeration:</strong> Low temperatures (4&deg;C) deactivate bacterial enzymes, dramatically slowing spoilage.</li>
      </ul>
    `
  },

  // CHAPTER 4: ELECTRICITY - MAGNETIC AND HEATING EFFECTS
  {
    id: 'ch4-oersted-magnetic-effect',
    chapterId: 'electricity',
    chapterTitle: 'Electricity: Magnetic and Heating Effects',
    icon: '🧭',
    title: '12. Discovery of Magnetic Effect & Oersted’s Experiment',
    difficulty: 'Medium',
    readTime: '6 min',
    preview: 'Learn how Hans Christian Oersted proved in 1820 that electric current produces a magnetic field around a conductor, and the Right-Hand Thumb Rule.',
    contentHtml: `
      <p>Prior to 1820, electricity (static/current charges) and magnetism (lodestones/bar magnets) were believed to be completely unrelated physical phenomena. A chance discovery revolutionized physics.</p>

      <h3>Hans Christian Oersted (1820) &mdash; The Discovery</h3>
      <p>While conducting a lecture demonstration in Copenhagen, Danish physicist Hans Christian Oersted noticed that whenever an electric current was switched ON through a copper wire, a nearby magnetic compass needle deflected away from its geographical North-South orientation!</p>
      <p>When the current was switched OFF, the compass needle returned to its original North-South position. When current direction was reversed, the needle deflected in the opposite direction!</p>

      <div class="callout callout-important">
        <div class="callout-title">⭐ Magnetic Effect of Electric Current</div>
        An electric current flowing through any conductor generates a surrounding <strong>magnetic field</strong> in concentric circular field lines around the wire.
      </div>

      <h3>Right-Hand Thumb Rule (Maxwell's Rule)</h3>
      <div class="formula-block">
        Thumb = Current Direction (I) &rArr; Curled Fingers = Magnetic Field Lines (B)
      </div>
      <p>Imagine grasping a straight current-carrying wire with your right hand such that your thumb points in the direction of conventional electric current (from + to -). The direction in which your fingers curl gives the circular direction of magnetic field lines!</p>
    `
  },
  {
    id: 'ch4-electromagnets-construction',
    chapterId: 'electricity',
    chapterTitle: 'Electricity: Magnetic and Heating Effects',
    icon: '🧲',
    title: '13. Electromagnet Construction & Field Physics',
    difficulty: 'Hard',
    readTime: '7 min',
    preview: 'How to construct a temporary magnet using wire coils and a soft iron core. Mathematical factors affecting magnetic flux density B.',
    contentHtml: `
      <div class="callout callout-definition">
        <div class="callout-title">📖 Electromagnet</div>
        An <strong>electromagnet</strong> is a temporary magnet formed by passing electric current through a solenoid coil of insulated copper wire wrapped around a soft iron core.
      </div>

      <h3>Step-by-Step Construction Protocol</h3>
      <ol>
        <li>Obtain a 10 cm soft iron nail or bolt (soft iron core).</li>
        <li>Wind 50 to 100 turns of insulated copper wire tightly around the nail in a continuous helix coil (solenoid).</li>
        <li>Strip insulation from wire ends and connect through a knife switch to a 3V DC battery.</li>
        <li>Switch ON current: bring iron paperclips near the nail tip&mdash;they stick strongly! Switch OFF current&mdash;they drop immediately!</li>
      </ol>

      <h3>Magnetic Flux Density Formula</h3>
      <p>The magnetic field strength (B) of an electromagnet is calculated by:</p>
      <div class="formula-block">
        B = &mu;&thinsp;&bdquo; &middot; &mu;&thinsp;&sbquo; &middot; (N / L) &middot; I
      </div>
      <p>Where &mu; is relative permeability of iron core, N is number of coil turns, L is coil length, and I is electric current in amperes.</p>

      <h3>3 Ways to Increase Electromagnet Strength</h3>
      <ol>
        <li><strong>Increase Current (I):</strong> Connect additional cells in series to drive more current.</li>
        <li><strong>Increase Number of Coil Turns (N):</strong> Wrapping 100 turns produces twice the magnetic field of 50 turns.</li>
        <li><strong>Use a Soft Iron Core:</strong> Soft iron concentrates magnetic flux lines thousands of times more effectively than an air core.</li>
      </ol>
    `
  },
  {
    id: 'ch4-earth-magnet-lifting-cranes',
    chapterId: 'electricity',
    chapterTitle: 'Electricity: Magnetic and Heating Effects',
    icon: '🏗️',
    title: '14. Earth’s Planetary Geodynamo & Industrial Cranes',
    difficulty: 'Medium',
    readTime: '6 min',
    preview: 'Why Earth acts as a giant magnet, molten outer core convective currents, and how industrial scrapyard cranes lift and release heavy scrap metal.',
    contentHtml: `
      <h3>Earth is a Giant Geodynamo Magnet</h3>
      <p>Deep inside Earth's liquid outer core (2,900 km below ground), convective currents of superheated molten iron and nickel generate massive electric currents. These moving electrical charges generate Earth's magnetic field (Geodynamo effect).</p>
      <p>Earth's magnetic south pole is located near the geographical North Pole, which is why the north-seeking pole of a compass needle points North!</p>

      <h3>Industrial Scrapyard Lifting Cranes</h3>
      <p>Heavy recycling scrap yards use giant crane electromagnets measuring 1.5 meters in diameter:</p>
      <ul>
        <li><strong>Current Switched ON:</strong> Heavy electric current creates a colossal magnetic field. Massive iron scrap, steel plates, and car chassis instantly stick to the crane disk.</li>
        <li><strong>Transport:</strong> Crane swings heavy loads safely across the yard.</li>
        <li><strong>Current Switched OFF:</strong> Current stops &rArr; magnetic field vanishes instantly &rArr; heavy steel scrap drops precisely into processing hoppers!</li>
      </ul>

      <p><strong>Other Engineering Applications:</strong> Maglev bullet trains (magnetic levitation at 500 km/h), MRI scanner machines in hospitals, electric door bells, loudspeakers, electric motors, relays.</p>
    `
  },
  {
    id: 'ch4-heating-effect-resistance',
    chapterId: 'electricity',
    chapterTitle: 'Electricity: Magnetic and Heating Effects',
    icon: '🔥',
    title: '15. Joule’s Law of Heating & Atomic Resistance Model',
    difficulty: 'Hard',
    readTime: '7 min',
    preview: 'Understand electron-ion atomic collisions, Joule’s Law formula (H = I² R t), and why Nichrome alloy is chosen for heating elements.',
    contentHtml: `
      <div class="callout callout-definition">
        <div class="callout-title">📖 Heating Effect of Current</div>
        The conversion of electrical energy into thermal heat energy when electric current passes through an electrical conductor possessing resistance.
      </div>

      <h3>Microscopic Atomic Friction Model of Resistance</h3>
      <p>When voltage pushes free electrons through a metallic conductor, moving electrons collide continuously with vibrating metal lattice ions. These energetic microscopic collisions transfer kinetic energy to the metal ions, increasing their vibrational thermal kinetic energy&mdash;which manifests macroscopically as <strong>HEAT</strong>!</p>

      <h3>Joule's Law of Heating (H = I&sup2; &middot; R &middot; t)</h3>
      <div class="formula-block">
        Heat H = I&sup2; &middot; R &middot; t &nbsp;|&nbsp; Electric Power P = I&sup2; &middot; R = V&sup2; / R
      </div>
      <ul>
        <li>H = Heat generated in Joules (J)</li>
        <li>I = Electric current in Amperes (A)</li>
        <li>R = Electrical resistance in Ohms (&Omega;)</li>
        <li>t = Time duration of current flow in seconds (s)</li>
      </ul>

      <h3>Why Nichrome Alloy is Superior for Heating Elements</h3>
      <p>Copper wire has very low resistance (used for cool connecting wires). <strong>Nichrome</strong> (an alloy of 80% Nickel + 20% Chromium) is used for heating elements because:</p>
      <ol>
        <li>✔ <strong>Extremely High Electrical Resistance:</strong> Generates maximum heat per meter.</li>
        <li>✔ <strong>High Melting Point (1400&deg;C):</strong> Does NOT melt even when glowing red hot.</li>
        <li>✔ <strong>High Resistance to Oxidation:</strong> Forms a protective chromium oxide layer that prevents burning or rusting at high temperatures.</li>
      </ol>
    `
  },
  {
    id: 'ch4-heating-appliances-safety',
    chapterId: 'electricity',
    chapterTitle: 'Electricity: Magnetic and Heating Effects',
    icon: '🔌',
    title: '16. Heating Appliances & Electrical Safety Hazards',
    difficulty: 'Medium',
    readTime: '6 min',
    preview: 'Working of electric irons, room heaters, immersion rods, plastic thermal insulation, and socket overloading fire hazards.',
    contentHtml: `
      <h3>Common Electrical Heating Appliances</h3>
      <p>Electric Irons, Toasters, Water Heaters (Geysers), Room Heaters, Electric Kettles, and Hair Dryers all contain coiled <strong>Nichrome heating elements</strong>.</p>

      <h3>Internal Mechanism of an Electric Iron</h3>
      <p>Current flows through a flat Nichrome heating ribbon encased inside mica insulation sheets. Heat transfers by conduction to a heavy polished steel soleplate. A bimetallic thermostat strip automatically bends when hot, breaking the circuit to regulate ironing temperature.</p>

      <div class="callout callout-fact">
        <div class="callout-title">💡 Why Handles Stay Cool</div>
        Appliance handles are constructed from thick Bakelite plastic or rubber because plastic is an exceptional <strong>thermal insulator</strong> (poor conductor of heat), keeping user hands safe from burns.
      </div>

      <h3>Disadvantages & Electrical Safety Hazards</h3>
      <div class="callout callout-mistake">
        <div class="callout-title">❌ Overloading Danger</div>
        Plugging multiple high-power heating appliances (e.g. 2000W heater + iron) into a single wall socket draws excessive total current (I). By Joule's Law (H = I&sup2; R t), current quadruples heat in house wiring, melting PVC insulation and causing short circuits and electrical fires!
      </div>
    `
  },
  {
    id: 'ch4-voltaic-lemon-dry-cells',
    chapterId: 'electricity',
    chapterTitle: 'Electricity: Magnetic and Heating Effects',
    icon: '🔋',
    title: '17. How Batteries Work: Voltaic, Lemon & Dry Cells',
    difficulty: 'Hard',
    readTime: '8 min',
    preview: 'Electrochemistry of energy conversion. Voltaic cell half-reactions, Lemon battery experiment, and internal structure of a Zinc-Carbon Dry Cell.',
    contentHtml: `
      <p>Batteries are electrochemical cells that convert chemical energy directly into electrical energy through oxidation-reduction (redox) chemical reactions.</p>

      <h3>1. Voltaic (Galvanic) Cell Electrochemistry</h3>
      <p>Invented by Alessandro Volta in 1800. Consists of a Copper cathode plate (+) and a Zinc anode plate (-) immersed in dilute Sulfuric Acid (H₂SO₄) electrolyte.</p>
      
      
      <div class="formula-block">
        Anode Oxidation: Zn &rarr; Zn&sup2;&⁺; + 2e&minus; &nbsp;|&nbsp; Cathode Reduction: 2H&⁺; + 2e&minus; &rarr; H₂ &uarr;
      </div>
      <p>Zinc dissolves, releasing free electrons that travel through external wires to the copper plate, generating an electric current!</p>

      <h3>2. Lemon Battery Experiment</h3>
      <p>Insert a Copper strip (+ electrode) and an Iron nail (- electrode) into a juicy lemon. Citric acid acts as the electrolyte solution. Connecting 3 lemons in series generates ~1.5 Volts, lighting a red LED bulb!</p>

      <h3>3. Internal Structure of a Zinc-Carbon Dry Cell</h3>
      <div class="callout callout-observation">
        <div class="callout-title">📝 Anatomy of a Dry Cell</div>
        <ul>
          <li><strong>Outer Zinc Container:</strong> Functions as the <strong>Negative (-) Anode Terminal</strong>.</li>
          <li><strong>Central Carbon (Graphite) Rod with Brass Cap:</strong> Functions as the <strong>Positive (+) Cathode Terminal</strong>.</li>
          <li><strong>Moist Chemical Paste:</strong> A moist mixture of Ammonium Chloride (NH₄Cl), Zinc Chloride (ZnCl₂), and Manganese Dioxide (MnO₂) acts as the non-liquid electrolyte.</li>
          <li><strong>Porous Separator:</strong> Prevents direct shorting between carbon rod and zinc container.</li>
        </ul>
      </div>

      <h3>4. Primary vs Secondary (Rechargeable) Batteries</h3>
      <table>
        <thead>
          <tr><th>Feature</th><th>Primary Cell (Dry Cell)</th><th>Secondary Battery (Lithium-ion)</th></tr>
        </thead>
        <tbody>
          <tr><td>Rechargability</td><td>❌ Single-use (Non-rechargeable)</td><td>✅ Rechargeable 500+ times</td></tr>
          <tr><td>Chemical Reaction</td><td>Irreversible chemical reaction</td><td>Reversible chemical redox reaction</td></tr>
          <tr><td>Applications</td><td>TV remotes, wall clocks, torches</td><td>Smartphones, laptops, Electric Vehicles</td></tr>
        </tbody>
      </table>
    `
  }
];

// --------------------------------------------------------------------------
// 2. FLASHCARDS DATASET (45+ Cards)
// --------------------------------------------------------------------------
const FLASHCARDS = [
  { topic: 'Living World', q: 'What is the limit of resolution of the human eye?', a: 'Objects smaller than about 0.1 mm (100 μm) cannot be resolved clearly by naked eyes.' },
  { topic: 'Living World', q: 'Who discovered cells and in what year?', a: 'Robert Hooke in 1665 by observing thin slices of dead oak cork bark under a compound microscope.' },
  { topic: 'Living World', q: 'Who is known as the Father of Microbiology?', a: 'Antonie van Leeuwenhoek, for being the first to clearly observe living microbes in 1674.' },
  { topic: 'Living World', q: 'Define a Cell.', a: 'A cell is the smallest basic structural, functional, and biological unit of life.' },
  { topic: 'Living World', q: 'Why is Safranin used in the onion peel slide experiment?', a: 'Safranin stains transparent plant cell walls, lignin, and nuclei bright pinkish-red.' },
  { topic: 'Living World', q: 'Why is Methylene Blue used for cheek cell slides?', a: 'Methylene blue stains nucleic acids and animal cell nuclei dark blue.' },
  { topic: 'Living World', q: 'What is the main function of the Cell Wall in plants?', a: 'It provides structural strength, rigidity, shape, and protection against osmotic turgor pressure.' },
  { topic: 'Living World', q: 'Name 3 organelles present in Plant Cells but absent in Animal Cells.', a: 'Cell Wall, Chloroplasts, and a large permanent Central Vacuole.' },
  { topic: 'Living World', q: 'What is the shape and function of a Nerve Cell (Neuron)?', a: 'Long and branched; designed to rapidly transmit bio-electrical nerve impulses across the body.' },
  { topic: 'Living World', q: 'State the CTOSO hierarchy of biological organization.', a: 'Cell → Tissue → Organ → Organ System → Organism.' },
  { topic: 'Living World', q: 'How does Amoeba move and capture food?', a: 'Using Pseudopodia (false feet) through phagocytosis.' },
  { topic: 'Living World', q: 'How does Paramecium move?', a: 'Using thousands of hair-like beating structures called Cilia.' },
  { topic: 'Living World', q: 'Why are Viruses classified as Acellular?', a: 'Viruses lack cellular structure and metabolic machinery; they replicate only inside host cells.' },
  { topic: 'Living World', q: 'What is Decomposition?', a: 'The enzymatic breakdown of complex dead organic matter into simpler inorganic nutrients by bacteria and fungi.' },
  { topic: 'Living World', q: 'What is Manure?', a: 'Nutrient-rich organic fertilizer formed by the microbial decomposition of plant and animal waste.' },
  { topic: 'Living World', q: 'Which fungus is used to make bread dough rise?', a: 'Yeast (Saccharomyces). It respires anaerobically releasing CO₂ gas bubbles that expand the dough.' },
  { topic: 'Living World', q: 'Which bacterium converts milk into curd?', a: 'Lactobacillus. It converts milk lactose sugar into lactic acid, coagulating milk casein protein.' },
  { topic: 'Living World', q: 'What is the chemical equation for Photosynthesis?', a: '6 CO₂ + 6 H₂O → C₆H₁₂O₆ + 6 O₂ (in presence of sunlight & chlorophyll).' },
  { topic: 'Electricity', q: 'Who discovered the Magnetic Effect of Electric Current?', a: 'Hans Christian Oersted in 1820.' },
  { topic: 'Electricity', q: 'What happens to a compass needle near a current-carrying wire?', a: 'The needle deflects due to the magnetic field generated around the conductor.' },
  { topic: 'Electricity', q: 'Define an Electromagnet.', a: 'A temporary magnet produced when electric current flows through a wire coil wrapped around a soft iron core.' },
  { topic: 'Electricity', q: 'Name 3 ways to make an electromagnet stronger.', a: '1. Increase current (I). 2. Increase number of wire turns (N). 3. Insert a soft iron core.' },
  { topic: 'Electricity', q: 'What happens when current flow to an electromagnet is switched OFF?', a: 'Its magnetic field collapses immediately and it loses its magnetic attraction.' },
  { topic: 'Electricity', q: 'How can you reverse the North and South poles of an electromagnet?', a: 'By reversing the battery terminals to change current flow direction.' },
  { topic: 'Electricity', q: 'Why does Earth behave like a giant magnet?', a: 'Convective currents of superheated molten liquid iron in Earth’s outer core generate planetary electric currents.' },
  { topic: 'Electricity', q: 'Define the Heating Effect of Electric Current.', a: 'The conversion of electrical energy into thermal heat energy due to resistance collisions.' },
  { topic: 'Electricity', q: 'What is Joule’s Law of Heating formula?', a: 'H = I² · R · t (Heat = Current² × Resistance × Time).' },
  { topic: 'Electricity', q: 'What is Resistance?', a: 'The opposition offered by a conductor material to the flow of electric current.' },
  { topic: 'Electricity', q: 'Why is Nichrome alloy used as a heating element?', a: 'It has high resistance, high melting point (1400°C), and does not oxidize when glowing red hot.' },
  { topic: 'Electricity', q: 'Why are appliance handles made of Bakelite plastic?', a: 'Plastic is a thermal insulator (poor conductor of heat) protecting hands from thermal burns.' },
  { topic: 'Electricity', q: 'What components make up a Dry Cell?', a: 'Zinc outer can (Negative anode), Carbon rod (Positive cathode), and moist NH₄Cl + MnO₂ paste electrolyte.' },
  { topic: 'Electricity', q: 'In a lemon battery experiment, what acts as the electrolyte?', a: 'The natural citric acid juice of the lemon.' },
  { topic: 'Electricity', q: 'Difference between Primary and Secondary (Rechargeable) cells.', a: 'Primary cells are single-use; Secondary cells undergo reversible chemical reactions and can be recharged.' },
  { topic: 'Living World', q: 'What is the function of Mitochondria?', a: 'Powerhouse of the cell; produces ATP energy through cellular respiration.' },
  { topic: 'Living World', q: 'What is the function of Ribosomes?', a: 'Sites of cellular protein synthesis.' },
  { topic: 'Living World', q: 'Which organelle contains digestive hydrolytic enzymes?', a: 'Lysosomes (Suicide bags of the cell).' },
  { topic: 'Electricity', q: 'State the Right-Hand Thumb Rule.', a: 'Thumb points in current direction (I); curled fingers show circular magnetic field direction (B).' },
  { topic: 'Electricity', q: 'What is the SI unit of Electrical Resistance?', a: 'Ohm (Ω).' },
  { topic: 'Electricity', q: 'What is the SI unit of Electric Current?', a: 'Ampere (A).' },
  { topic: 'Electricity', q: 'What is the SI unit of Energy / Heat?', a: 'Joule (J).' },
  { topic: 'Living World', q: 'Which stain is used for starch detection in leaves?', a: 'Iodine solution (turns blue-black).' },
  { topic: 'Living World', q: 'What is Biogas composed of?', a: '55-70% Methane (CH₄) and 30-45% Carbon Dioxide (CO₂).' },
  { topic: 'Electricity', q: 'Why is copper used for connecting wires instead of Nichrome?', a: 'Copper has very low resistance, allowing current to flow without wasted heat.' },
  { topic: 'Living World', q: 'What is the role of Pseudopodia in Amoeba?', a: 'Locomotion and engulfing food particles through phagocytosis.' },
  { topic: 'Electricity', q: 'What chemical oxidation occurs at the Zinc anode in a Voltaic Cell?', a: 'Zn → Zn²⁺ + 2e⁻ (Zinc dissolves releasing 2 free electrons).' }
];

// --------------------------------------------------------------------------
// 3. MCQs QUIZ DATASET (50+ Questions)
// --------------------------------------------------------------------------
const MCQS = [
  { q: "What is the approximate limit of resolution of the human eye?", opts: ["0.1 mm (100 μm)", "1.0 cm", "0.01 μm", "5.0 mm"], ans: 0, exp: "Anything smaller than 0.1 mm (100 μm) cannot be resolved as a distinct object by human eyes." },
  { q: "Who coined the word 'Cell' in 1665?", opts: ["Leeuwenhoek", "Robert Hooke", "Louis Pasteur", "Charles Darwin"], ans: 1, exp: "Robert Hooke observed dead cork compartments in 1665 and coined the word cell." },
  { q: "Robert Hooke observed cells in a thin slice of:", opts: ["Onion peel", "Oak Cork Bark", "Cheek tissue", "Leaf epidermis"], ans: 1, exp: "Hooke examined dead oak cork bark tissue under his compound microscope." },
  { q: "Who was the first person to observe living cells like bacteria?", opts: ["Robert Hooke", "Antonie van Leeuwenhoek", "Robert Brown", "Alexander Fleming"], ans: 1, exp: "Leeuwenhoek crafted high-quality single-lens microscopes to observe live microbes in 1674." },
  { q: "Which organelle is known as the 'Brain of the Cell'?", opts: ["Cytoplasm", "Cell Membrane", "Nucleus", "Vacuole"], ans: 2, exp: "The Nucleus controls all vital metabolic activities, protein synthesis, and cell division." },
  { q: "Cell Wall is found in:", opts: ["Animal cells only", "Plant cells only", "Both plant and animal cells", "Human cheek cells"], ans: 1, exp: "Cell wall made of cellulose microfibrils is present outside the plasma membrane in plant cells." },
  { q: "The jelly-like fluid occupying the space inside a cell is called:", opts: ["Nucleus", "Cytoplasm", "Cell sap", "Safranin"], ans: 1, exp: "Cytoplasm is the cellular matrix where life chemical reactions take place." },
  { q: "Which stain is commonly used to prepare onion peel cell slides?", opts: ["Methylene Blue", "Safranin", "Iodine only", "Glycerin"], ans: 1, exp: "Safranin stains plant cell walls and nuclei bright pinkish-red." },
  { q: "Which stain is commonly used for human cheek cell slides?", opts: ["Safranin", "Methylene Blue", "Eosin", "Acetocarmine"], ans: 1, exp: "Methylene blue stains animal cheek cell nuclei and cytoplasm blue." },
  { q: "What is the primary role of adding Glycerin to a microscope slide?", opts: ["To kill bacteria", "To stain the cell", "To prevent specimen dehydration", "To magnify image"], ans: 2, exp: "Glycerin retains moisture so cells don't shrink or dry out under lamp light." },
  { q: "Which cell organelle contains Chlorophyll for photosynthesis?", opts: ["Mitochondria", "Chloroplast", "Cell membrane", "Ribosome"], ans: 1, exp: "Chloroplasts contain green chlorophyll pigment to absorb sunlight for photosynthesis." },
  { q: "Which shape best describes a Nerve Cell (Neuron)?", opts: ["Spherical", "Spindle-shaped", "Long and branched", "Rectangular"], ans: 2, exp: "Neurons have long axons and branched dendrites to carry bio-electrical nerve signals." },
  { q: "Which shape best describes a Muscle Cell?", opts: ["Long and spindle-shaped", "Circular", "Irregular polygonal", "Branched"], ans: 0, exp: "Spindle shape allows muscle cells to contract and stretch smoothly." },
  { q: "What is the correct sequence of biological organization?", opts: ["Tissue → Cell → Organ → Organism", "Cell → Tissue → Organ → Organ System → Organism", "Organ → Cell → Tissue → System", "Cell → Organ → Tissue → Organism"], ans: 1, exp: "CTOSO: Cell builds Tissue, Tissue builds Organ, Organ builds System, System builds Organism." },
  { q: "Which of the following is a Unicellular organism?", opts: ["Human", "Mango tree", "Amoeba", "Earthworm"], ans: 2, exp: "Amoeba consists of only one single cell performing all life tasks." },
  { q: "Amoeba moves and captures prey using false feet called:", opts: ["Cilia", "Flagella", "Pseudopodia", "Tentacles"], ans: 2, exp: "Pseudopodia are temporary cytoplasmic extensions used by Amoeba." },
  { q: "Paramecium moves through water using tiny hair-like projections called:", opts: ["Pseudopodia", "Cilia", "Flagella", "Spurs"], ans: 1, exp: "Cilia beat synchronously to propel Paramecium through water." },
  { q: "Why are Viruses described as Acellular?", opts: ["They have no nucleus", "They lack cellular structure and metabolic machinery", "They are green", "They live in water"], ans: 1, exp: "Viruses lack cell membranes and organelles, replicating only inside host cells." },
  { q: "Organisms that break down dead organic matter into simpler nutrients are called:", opts: ["Producers", "Decomposers", "Parasites", "Carnivores"], ans: 1, exp: "Decomposers (saprophytic bacteria and fungi) recycle organic waste back to soil." },
  { q: "Gas released by Yeast during bread dough fermentation is:", opts: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Methane"], ans: 1, exp: "CO₂ bubbles expand trapped in dough, making bread soft and fluffy." },
  { q: "Bacterium responsible for converting milk into curd is:", opts: ["Rhizobium", "Lactobacillus", "E. coli", "Salmonella"], ans: 1, exp: "Lactobacillus converts milk lactose into lactic acid." },
  { q: "Curd formation involves the production of which acid?", opts: ["Citric Acid", "Lactic Acid", "Acetic Acid", "Hydrochloric Acid"], ans: 1, exp: "Lactic acid lowers pH and coagulates milk casein proteins into curd." },
  { q: "High concentrations of salt and sugar preserve pickles and jams by:", opts: ["Adding oxygen", "Inhibiting microbial growth through osmosis dehydration", "Heating the food", "Changing color"], ans: 1, exp: "Osmotic pressure draws out water from microbial cells (plasmolysis)." },
  { q: "Who discovered the Magnetic Effect of Electric Current in 1820?", opts: ["Faraday", "Oersted", "Newton", "Thomas Edison"], ans: 1, exp: "Hans Christian Oersted observed compass deflection near a current wire in 1820." },
  { q: "A compass needle deflects near a current wire because:", opts: ["The wire heats up", "Electric current produces a magnetic field", "Gravity acts on it", "Air blows"], ans: 1, exp: "Moving electric charges create an surrounding magnetic field." },
  { q: "An Electromagnet is a:", opts: ["Permanent magnet", "Temporary magnet powered by electricity", "Natural lodestone", "Non-magnetic piece"], ans: 1, exp: "Electromagnets are temporary magnets active only while electric current flows." },
  { q: "Inserting a soft iron core into an electromagnet coil:", opts: ["Weakens the magnetic field", "Greatly strengthens the magnetic field", "Stops current flow", "Reverses battery"], ans: 1, exp: "Soft iron has high permeability and concentrates magnetic lines of force." },
  { q: "Which of the following increases electromagnet strength?", opts: ["Decreasing battery voltage", "Increasing number of wire turns", "Removing iron core", "Using plastic wire"], ans: 1, exp: "More wire loops add up individual magnetic field contributions." },
  { q: "How can you reverse the North and South poles of an electromagnet?", opts: ["Turn off current", "Reverse battery terminal connections", "Add more iron", "Heat the wire"], ans: 1, exp: "Reversing current direction flips the polarity of magnetic poles." },
  { q: "Earth's internal magnetic field is generated by:", opts: ["Permanent magnets underground", "Convective currents of liquid iron in the outer core", "Ocean waves", "Atmospheric wind"], ans: 1, exp: "Convection of molten iron generates planetary geodynamo currents." },
  { q: "What happens when current to a scrapyard lifting electromagnet is switched OFF?", opts: ["Metal objects stick tighter", "It loses magnetism and drops scrap metal", "It explodes", "It turns cold"], ans: 1, exp: "Without current, temporary magnetism vanishes immediately." },
  { q: "Electrical Resistance is defined as:", opts: ["Flow of electrons", "Opposition offered by a conductor to electric current flow", "Voltage battery power", "Magnetic force"], ans: 1, exp: "Resistance opposes current, converting electrical energy into heat." },
  { q: "Joule's Law of Heating states that heat generated is calculated by:", opts: ["H = I · R · t", "H = I² · R · t", "H = V / I", "H = I / R²"], ans: 1, exp: "Heat H is proportional to current squared (I²), resistance (R), and time (t)." },
  { q: "Why is Nichrome alloy ideal for appliance heating elements?", opts: ["Low resistance and low melting point", "High resistance and high melting point (1400°C)", "Magnetic property", "Transparent"], ans: 1, exp: "High resistance generates intense heat without melting red hot." },
  { q: "Nichrome is an alloy composed of:", opts: ["Copper + Zinc", "Nickel + Chromium", "Iron + Gold", "Aluminum + Silver"], ans: 1, exp: "Nichrome is an alloy of 80% Nickel and 20% Chromium." },
  { q: "Electric iron handles are made of Bakelite plastic because plastic is a good:", opts: ["Electrical conductor", "Thermal insulator (poor conductor of heat)", "Magnetic core", "Reflector"], ans: 1, exp: "Thermal insulators prevent heat transfer to user hands." },
  { q: "In a Zinc-Carbon Dry Cell, the outer Zinc container acts as the:", opts: ["Positive (+) terminal", "Negative (-) Anode terminal", "Electrolyte paste", "Insulator"], ans: 1, exp: "Zinc casing acts as the negative anode terminal." },
  { q: "In a Dry Cell, the central Carbon rod acts as the:", opts: ["Negative (-) terminal", "Positive (+) Cathode terminal", "Separator", "Electrolyte"], ans: 1, exp: "Carbon rod with brass cap forms the positive cathode terminal." },
  { q: "Why is a Dry Cell called 'Dry'?", opts: ["It contains no chemicals", "Its electrolyte is a moist paste rather than liquid", "It cannot be touched", "It lasts forever"], ans: 1, exp: "The ammonium chloride electrolyte is prepared as a non-spillable paste." },
  { q: "Which battery can be recharged and reused multiple times?", opts: ["Dry Cell", "Lithium-ion Secondary Battery", "Dead Cell", "Simple Lemon Cell"], ans: 1, exp: "Rechargeable secondary batteries undergo reversible internal chemical reactions." },
  { q: "Overloading an electrical wall socket by plugging many heaters causes:", opts: ["Less current draw", "Overheating of wires and fire hazard", "Cold wires", "Higher battery charge"], ans: 1, exp: "Excessive current flow produces dangerous heat levels in wiring (H = I² R t)." },
  { q: "What chemical gas is produced in an anaerobic biogas digester?", opts: ["Oxygen", "Methane (CH₄)", "Chlorine", "Helium"], ans: 1, exp: "Methanogenic bacteria produce Methane (CH₄) gas from manure." },
  { q: "Which organelle is called the 'Powerhouse of the Cell'?", opts: ["Nucleus", "Mitochondria", "Golgi apparatus", "Ribosome"], ans: 1, exp: "Mitochondria synthesize ATP energy through cellular respiration." },
  { q: "The chemical equation for yeast alcoholic fermentation is:", opts: ["Glucose → Ethanol + CO₂", "Glucose → Lactic Acid", "Glucose + O₂ → CO₂ + H₂O", "H₂O → H₂ + O₂"], ans: 0, exp: "Yeast converts glucose into ethanol alcohol and CO₂ gas." },
  { q: "In Maxwell's Right-Hand Thumb Rule, the thumb points in the direction of:", opts: ["Magnetic field", "Electric current (I)", "Voltage", "Resistance"], ans: 1, exp: "Thumb points in current direction; curled fingers show magnetic field circles." },
  { q: "What is the SI unit of Electrical Resistance?", opts: ["Volt", "Ampere", "Ohm (Ω)", "Watt"], ans: 2, exp: "Resistance is measured in Ohms (Ω)." },
  { q: "What happens during plasmolysis when bacteria are placed in heavy salt solution?", opts: ["Water enters bacterial cell", "Water leaves bacterial cell causing shrinking and death", "Cell wall doubles", "Nucleus divides"], ans: 1, exp: "Osmosis draws water out, dehydrating microbial cells." },
  { q: "Which component of a lemon battery acts as the positive electrode (+)?", opts: ["Iron nail", "Copper strip", "Lemon skin", "Plastic wire"], ans: 1, exp: "Copper strip has higher reduction potential acting as cathode (+)." },
  { q: "What is the primary role of Manganese Dioxide (MnO₂) in a dry cell?", opts: ["Insulator", "Depolarizer preventing hydrogen gas buildup", "Container", "Wire"], ans: 1, exp: "MnO₂ oxidizes hydrogen gas generated at carbon rod to water." },
  { q: "The level of biological organization above Organ is:", opts: ["Tissue", "Cell", "Organ System", "Organism"], ans: 2, exp: "Cell → Tissue → Organ → Organ System → Organism." }
];

// --------------------------------------------------------------------------
// 4. IMPORTANT QUESTIONS (1M, 2M, 3M, 5M Accordions)
// --------------------------------------------------------------------------
const IMPORTANT_QUESTIONS = {
  m1: [
    { q: "Who discovered cells and in which year?", a: "Robert Hooke in 1665 by observing thin slices of dead oak cork bark under a microscope." },
    { q: "Who is known as the Father of Microbiology?", a: "Antonie van Leeuwenhoek, for being the first to observe living microbes in 1674." },
    { q: "Define a Cell.", a: "A cell is the smallest basic structural, functional, and biological unit of life." },
    { q: "Define Microorganism.", a: "Extremely small living organisms that cannot be seen with the naked eye and require a microscope." },
    { q: "What is Manure?", a: "Nutrient-rich organic fertilizer formed by the microbial decomposition of plant and animal waste." },
    { q: "Name the bacterium used in converting milk to curd.", a: "Lactobacillus." },
    { q: "Name the fungus used in bread making.", a: "Yeast (Saccharomyces)." },
    { q: "Which gas causes bread dough to rise?", a: "Carbon Dioxide (CO₂) gas." },
    { q: "Who discovered the magnetic effect of electric current?", a: "Hans Christian Oersted in 1820." },
    { q: "Define Magnetic Field.", a: "The region around a magnet or current-carrying wire where magnetic forces can be detected." },
    { q: "Define Electromagnet.", a: "A temporary magnet produced when electric current flows through a wire coil around an iron core." },
    { q: "What material is used as the core of an electromagnet?", a: "Soft iron core." },
    { q: "Define Resistance.", a: "The opposition offered by a conductor material to the flow of electric current." },
    { q: "Why is Nichrome used in electrical heating appliances?", a: "Because it has high electrical resistance and a high melting point (1400°C), producing high heat without melting." }
  ],
  m2: [
    { q: "Write two differences between Plant Cell and Animal Cell.", a: "1. Plant cells have a rigid cellulose cell wall; animal cells do not.<br>2. Plant cells contain chloroplasts for photosynthesis; animal cells do not." },
    { q: "Why are microorganisms called nature's decomposers?", a: "Because saprophytic bacteria and fungi break down complex dead organic waste into simple soil minerals, cleaning the Earth and recycling nutrients." },
    { q: "Why does bread dough expand and become fluffy when yeast is added?", a: "Yeast respires on sugar in dough, producing CO₂ gas bubbles. These trapped bubbles expand under heat, making dough porous and soft." },
    { q: "State two differences between a Permanent Magnet and an Electromagnet.", a: "1. Permanent magnets retain magnetism permanently; electromagnets lose magnetism when current is OFF.<br>2. Electromagnet strength can be varied by changing current; permanent magnet strength is fixed." },
    { q: "Why does a compass needle deflect near a current-carrying wire?", a: "Because an electric current flowing through a wire creates a surrounding magnetic field that exerts magnetic force on the compass needle." },
    { q: "Differentiate between a Dry Cell and a Rechargeable Battery.", a: "Dry cells are single-use primary batteries with non-reversible chemicals; Rechargeable batteries undergo reversible chemical reactions and can be reused 500+ times." }
  ],
  m3: [
    { q: "Explain curd formation step-by-step with chemical mechanisms.", a: "Milk contains Lactose sugar. When a small amount of curd starter containing <em>Lactobacillus</em> bacteria is added to lukewarm milk, the bacteria multiply. They convert lactose into Lactic Acid (C₃H₆O₃). Lactic acid lowers pH from 6.6 to 4.5 and coagulates milk casein proteins, turning liquid milk into solid, sour curd." },
    { q: "Explain Oersted's Experiment and state the Right-Hand Thumb Rule.", a: "Oersted placed a magnetic compass under a copper wire connected to a battery switch. When current was OFF, the compass needle aligned North-South. When current was switched ON, the needle instantly deflected. Reversing current direction flipped needle deflection. The Right-Hand Thumb Rule states that if the thumb points in current direction, curled fingers show magnetic field circles." },
    { q: "Describe the construction, working, and formula of an Electromagnet.", a: "Wind insulated copper wire tightly around a soft iron nail to form a coil (N turns). Connect wire ends to a battery and switch. When current (I) flows, the magnetic field magnetizes the iron core, attracting paperclips. Switching OFF current collapses the field instantly." },
    { q: "Explain Joule's Law of Heating with formula and atomic model.", a: "When voltage pushes free electrons through a metal conductor, moving electrons collide continuously with vibrating metal lattice ions. These energetic collisions transfer kinetic energy to ions, increasing thermal heat (H = I² R t). Heat increases with higher current, higher resistance, or longer time." }
  ],
  m5: [


    { q: "Explain useful and harmful microorganisms with detailed examples and chemical equations.", a: "<strong>Useful Roles:</strong><br>1. Decomposition & Soil Fertility: Saprophytic bacteria & fungi decompose organic waste into humus manure and recycle nitrogen/phosphorus.<br>2. Food Industry: Yeast ferments bread dough (C₆H₁₂O₆ &rarr; 2 C₂H₅OH + 2 CO₂ &uarr;); Lactobacillus converts milk lactose to lactic acid (C₃H₆O₃).<br>3. Biogas: Methanogens produce methane (CH₄) gas from dung.<br>4. Bioremediation: Oil-degrading bacteria clean oceanic crude oil spills.<br><br><strong>Harmful Roles:</strong><br>1. Food Spoilage: Mould fungi rot bread and fruits.<br>2. Pathogenic Diseases: Microbes cause Cholera (Bacteria), Influenza (Virus), and Ringworm (Fungi)." },
    { q: "Explain the construction, working, properties, mathematical formula, and applications of an Electromagnet.", a: "<strong>Construction:</strong> Soft iron core surrounded by insulated copper wire coil (N turns) connected to a DC battery circuit.<br><strong>Working & Formula:</strong> Electric current (I) flowing in coil loops generates magnetic flux density B = &mu;&thinsp;&bdquo; &middot; &mu;&thinsp;&sbquo; &middot; n &middot; I.<br><strong>Properties:</strong> 1. Temporary magnet (Current ON = Magnetic, OFF = Non-magnetic). 2. Polarity can be reversed by flipping terminals. 3. Strength increases by adding turns or current.<br><strong>Applications:</strong> Industrial scrapyard lifting cranes, Maglev trains, electric bells, loudspeakers, motors, MRI machines." },
    { q: "Explain the internal structure of a Dry Cell with chemical reactions and compare it with a Voltaic Cell.", a: "<strong>Dry Cell Anatomy:</strong><br>1. Outer Zinc Can: Acts as Negative Anode (-) Terminal.<br>2. Central Carbon Rod: Fitted with brass cap, acts as Positive Cathode (+) Terminal.<br>3. Paste Electrolyte: Moist mixture of NH₄Cl, ZnCl₂, and MnO₂.<br><br><strong>Voltaic Cell Comparison:</strong> Voltaic cells use liquid sulfuric acid electrolyte (Zn &rarr; Zn&sup2;&⁺; + 2e&minus;), which can spill. Dry cells use moist non-liquid paste, making them portable for remote controls and torches." }
  ]
};

// --------------------------------------------------------------------------
// 5. GLOSSARY DATASET (50+ Terms)
// --------------------------------------------------------------------------
const GLOSSARY = [
  { term: "Acellular", def: "Not composed of cells, such as viruses." },
  { term: "Algae", def: "Simple green eukaryotic organisms containing chlorophyll, capable of photosynthesis." },
  { term: "Amoeba", def: "Single-celled microscopic protozoan with no fixed shape, moving via pseudopodia." },
  { term: "Bacilli", def: "Rod-shaped bacteria." },
  { term: "Biogas", def: "Fuel gas (methane + CO₂) produced by anaerobic breakdown of organic waste." },
  { term: "Cell", def: "The basic structural, functional, and biological unit of all living organisms." },
  { term: "Cell Membrane", def: "Selectively permeable phospholipid boundary of a cell regulating entry and exit of substances." },
  { term: "Cell Wall", def: "Rigid cellulose layer surrounding plant cells providing structural support and protection." },
  { term: "Chloroplast", def: "Double-membrane organelle in plant cells containing green chlorophyll for photosynthesis." },
  { term: "Cilia", def: "Tiny hair-like projections on Paramecium used for rapid locomotion." },
  { term: "Cocci", def: "Spherical-shaped bacteria." },
  { term: "Compound Microscope", def: "Optical microscope utilizing multiple lenses (eyepiece + objective) to achieve high magnification." },
  { term: "Cytoplasm", def: "Viscous aqueous matrix filling the cell where metabolic reactions occur." },
  { term: "Decomposition", def: "Enzymatic breakdown of dead organic material into simpler nutrients by saprophytic microbes." },
  { term: "Deflection", def: "Movement of a magnetic compass needle away from geographical north-south alignment." },
  { term: "Dry Cell", def: "Primary electrochemical battery using a moist non-liquid chemical paste electrolyte." },
  { term: "Electrode", def: "Conductor through which electric current enters or leaves an electrochemical cell." },
  { term: "Electromagnet", def: "Temporary magnet created by electric current flowing through a wire coil around an iron core." },
  { term: "Electrolyte", def: "Chemical substance conducting electric current via mobile ions inside a battery." },
  { term: "Fermentation", def: "Microbial anaerobic conversion of sugars into alcohol, organic acids, or CO₂ gas." },
  { term: "Flagellum", def: "Tail-like whip structure used by certain bacteria and micro-algae for locomotion." },
  { term: "Fungi", def: "Non-green heterotrophic eukaryotic organisms absorbing nutrients from decaying matter." },
  { term: "Heating Effect", def: "Thermal heat generated when electric current passes through a conductor due to resistance." },
  { term: "Joule's Law", def: "Law stating electrical heat H = I² R t generated in a resistance conductor." },
  { term: "Lactobacillus", def: "Bacterium that ferments milk lactose sugar into lactic acid to form curd." },
  { term: "Lens", def: "Transparent curved glass or plastic component bending light rays to magnify images." },
  { term: "Magnetic Field", def: "Region around a magnet or current-carrying wire where magnetic forces act." },
  { term: "Magnifying Glass", def: "Convex optical lens producing enlarged virtual images of nearby small objects." },
  { term: "Manure", def: "Nutrient-rich organic fertilizer produced by microbial decomposition of biodegradable waste." },
  { term: "Micrographia", def: "Famous 1665 treatise by Robert Hooke detailing early microscopic cell observations." },
  { term: "Microorganism", def: "Microscopic living entity invisible to the naked human eye without optical magnification." },
  { term: "Microscope", def: "Optical instrument used to magnify microscopic objects." },
  { term: "Multicellular", def: "Organism composed of many specialized cells working cooperatively." },
  { term: "Muscle Cell", def: "Spindle-shaped cell packed with actin/myosin protein filaments capable of contracting." },
  { term: "Nerve Cell (Neuron)", def: "Long branched cell specialized for transmitting bio-electrical impulses." },
  { term: "Nichrome", def: "High-resistance alloy of 80% Nickel + 20% Chromium used in heating elements." },
  { term: "Nucleus", def: "Double-membrane organelle controlling cellular functions, protein synthesis, and heredity." },
  { term: "Oersted, Hans Christian", def: "Danish scientist who discovered the magnetic effect of electric current in 1820." },
  { term: "Paramecium", def: "Slipper-shaped single-celled protozoan moving via beating cilia." },
  { term: "Photosynthesis", def: "Process by which green plants make glucose using sunlight, water, and CO₂." },
  { term: "Primary Cell", def: "Non-rechargeable single-use battery." },
  { term: "Protozoa", def: "Single-celled heterotrophic animal-like microorganisms." },
  { term: "Pseudopodia", def: "Temporary 'false feet' extended by Amoeba for locomotion and phagocytosis." },
  { term: "Rechargeable Battery", def: "Secondary battery capable of restoring charge through reversible chemical reactions." },
  { term: "Resistance", def: "Opposition offered by a material conductor to electric current flow." },
  { term: "Safranin", def: "Red/pink stain used to highlight plant cell walls and nuclei under a microscope." },
  { term: "Tissue", def: "Group of similar cells performing a specific shared function." },
  { term: "Unicellular", def: "Organism consisting of a single independent cell." },
  { term: "Vacuole", def: "Membrane-bound sac storing water, cell sap, nutrients, or waste inside cells." },
  { term: "Virus", def: "Acellular microscopic parasite replicating only inside host living cells." },
  { term: "Voltaic Cell", def: "Early electric cell generating electricity via chemical metal-acid reactions." },
  { term: "Yeast", def: "Single-celled fungus used in bread baking and alcohol fermentation." }
];

// --------------------------------------------------------------------------
// 6. ULTRA-DETAILED MULTI-COLORED SVG DIAGRAM GENERATORS & EMBEDS
// --------------------------------------------------------------------------
const SVG_DIAGRAMS = [
  {
    "title": "1. Compound Optical Microscope Labeled Anatomy",
    "desc": "High-resolution diagram detailing Eyepiece (10x), Revolving Nosepiece, Objective Lenses (40x), Mechanical Stage, Iris Diaphragm, and Concave Light Mirror.",
    "imgUrl": "images/microscope.png",
    "fallbackUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Compound_Microscope_diagram.svg/800px-Compound_Microscope_diagram.svg.png"
  },
  {
    "title": "2. Plant Cell",
    "desc": "Anatomical diagram showing Cellulose Cell Wall, Selective Plasma Membrane, Nucleus, Chloroplasts, and Large Central Vacuole.",
    "imgUrl": "images/plant_cell.png",
    "fallbackUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Plant_cell_structure-en.svg/800px-Plant_cell_structure-en.svg.png"
  },
  {
    "title": "3. Animal Cell",
    "desc": "Complete animal cell structure highlighting Plasma Membrane, Central Nucleus & DNA, Mitochondria powerhouses, Lysosomes, and Centrioles.",
    "imgUrl": "images/animal_cell.png",
    "fallbackUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Animal_cell_structure_en.svg/800px-Animal_cell_structure_en.svg.png"
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
    "imgUrl": "images/paramecium.png",
    "fallbackUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Paramecium_diagram.svg/800px-Paramecium_diagram.svg.png"
  },
  {
    "title": "7. Microscopic Filamentous Algae (Spirogyra)",
    "desc": "Photomicrograph under 400x magnification showing green Spirogyra filaments with ribbon-shaped spiral chloroplasts.",
    "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Spirogyra_Under_Light_Microscope_40_X_Mag.jpg/960px-Spirogyra_Under_Light_Microscope_40_X_Mag.jpg",
    "fallbackUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Spirogyra_under_microscope.jpg/800px-Spirogyra_under_microscope.jpg"
  },
  {
    "title": "Structure of Bacteriophage",
    "desc": "Anatomy of a bacteriophage virus detailing capsid head, nucleic acid (DNA), collar, sheath, baseplate, spikes, and tail fibers.",
    "imgUrl": "images/bacteriophage.png",
    "fallbackUrl": "https://upload.wikimedia.org/wikipedia/commons/1/11/Bacteriophage_structure_ja.png"
  },
  {
    "title": "Oersted\u2019s Magnet Deflection Experiment",
    "desc": "Circuit diagram demonstrating compass magnetic needle deflection when electric current (I) flows through a wire conductor.",
    "imgUrl": "images/oersted_deflection.png",
    "fallbackUrl": "https://upload.wikimedia.org/wikipedia/commons/9/96/Oersted%27s_experiment.JPG"
  },
  {
    "title": "Electromagnet Diagram",
    "desc": "Simple electromagnet circuit with an iron nail core, coiled wire, and DC battery.",
    "imgUrl": "images/electromagnet.png",
    "fallbackUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Electromagnet.svg/800px-Electromagnet.svg.png"
  },
  {
    "title": "12. Voltaic Galvanic Acid Cell Diagram",
    "desc": "Alessandro Volta\u2019s 1800 cell: Copper (+) and Zinc (-) metal plates immersed in dilute Sulfuric Acid electrolyte.",
    "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/c/c2/Voltaic_cell_diagram.png",
    "fallbackUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Voltaic_cell_diagram.svg/800px-Voltaic_cell_diagram.svg.png"
  },
  {
    "title": "13. Zinc-Carbon Dry Cell Cross-Section Anatomy",
    "desc": "Electrochemistry diagram showing Zinc container anode (-), central Carbon rod cathode (+), and moist NH\u2084Cl + MnO\u2082 paste electrolyte.",
    "imgUrl": "images/dry_cell.png",
    "fallbackUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Zinc-carbon_battery_cross_section.svg/800px-Zinc-carbon_battery_cross_section.svg.png"
  },
  {
    "title": "14. Lemon Battery Electrochemistry Experiment",
    "desc": "Citric acid electrolyte generating electrical voltage across copper strip cathode (+) and zinc/iron nail anode (-).",
    "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Lemon_battery_experiment.JPG/960px-Lemon_battery_experiment.JPG",
    "fallbackUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Lemon_battery_experiment.jpg/800px-Lemon_battery_experiment.jpg"
  }
];

// --------------------------------------------------------------------------
// 7. INITIALIZATION & ROUTING ENGINE
// --------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  renderTopics();
  renderDiagrams();
  renderQuickRevision();
  renderFlashcards();
  renderQuiz();
  renderImportantQuestions();
  renderGlossary();
  updateHeroStats();
  setupSearch();
  setupKeyboardListeners();

  window.addEventListener('scroll', handleScroll);
});

function initNavigation() {
  const links = document.querySelectorAll('.nav-link, .hero-link');
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').replace('#', '');
      navigateTo(targetId);
    });
  });

  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('open');
    });
  }

  document.getElementById('back-to-top')?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function navigateTo(tabId) {
  STATE.activeTab = tabId;
  document.querySelectorAll('.nav-link').forEach(l => {
    l.classList.toggle('active', l.getAttribute('href') === `#${tabId}`);
  });

  const section = document.getElementById(tabId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }

  const nav = document.querySelector('nav');
  if (nav && nav.classList.contains('open')) {
    nav.classList.remove('open');
  }
}

function handleScroll() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;

  const bar = document.getElementById('progress-bar');
  if (bar) bar.style.width = `${Math.min(100, Math.max(0, scrollPercent))}%`;

  const topBtn = document.getElementById('back-to-top');
  if (topBtn) {
    topBtn.classList.toggle('visible', scrollTop > 400);
  }
}

// --------------------------------------------------------------------------
// 8. RENDER TOPICS & MODAL READER
// --------------------------------------------------------------------------
function renderTopics() {
  const livingGrid = document.getElementById('living-world-grid');
  const electricityGrid = document.getElementById('electricity-grid');

  if (livingGrid) livingGrid.innerHTML = '';
  if (electricityGrid) electricityGrid.innerHTML = '';

  TOPICS.forEach((topic, idx) => {
    const isBookmarked = STATE.bookmarks.includes(topic.id);
    const card = document.createElement('div');
    card.className = 'card';
    card.setAttribute('tabindex', '0');
    card.setAttribute('data-id', topic.id);
    card.innerHTML = `
      <div class="card-top">
        <div class="card-icon">${topic.icon}</div>
        <div class="card-meta">
          <span class="pill ${topic.difficulty === 'Easy' ? 'pill-cyan' : 'pill-amber'}">${topic.difficulty}</span>
          <button class="bookmark-btn ${isBookmarked ? 'active' : ''}" onclick="toggleBookmark(event, '${topic.id}')" title="Bookmark Topic">
            ${isBookmarked ? '★' : '☆'}
          </button>
        </div>
      </div>
      <h3>${topic.title}</h3>
      <p class="card-preview">${topic.preview}</p>
      <div class="card-more">
        <span>Read Complete Topic</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </div>
    `;

    card.addEventListener('click', () => openModal(idx));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModal(idx);
      }
    });

    if (topic.chapterId === 'living-world' && livingGrid) {
      livingGrid.appendChild(card);
    } else if (topic.chapterId === 'electricity' && electricityGrid) {
      electricityGrid.appendChild(card);
    }
  });
}

function toggleBookmark(e, id) {
  if (e) e.stopPropagation();
  const index = STATE.bookmarks.indexOf(id);
  if (index > -1) {
    STATE.bookmarks.splice(index, 1);
    showToast("Bookmark Removed");
  } else {
    STATE.bookmarks.push(id);
    showToast("Topic Bookmarked!");
  }
  localStorage.setItem('g8_sci_bookmarks', JSON.stringify(STATE.bookmarks));
  renderTopics();
  updateHeroStats();
}

function openModal(index) {
  STATE.currentTopicIndex = index;
  const topic = TOPICS[index];
  if (!topic) return;

  const overlay = document.getElementById('modal-overlay');
  const titleEl = document.getElementById('modal-title');
  const iconEl = document.getElementById('modal-icon');
  const bodyEl = document.getElementById('modal-body');
  const prevBtn = document.getElementById('modal-prev');
  const nextBtn = document.getElementById('modal-next');
  const bmBtn = document.getElementById('modal-bookmark');

  if (titleEl) titleEl.innerText = topic.title;
  if (iconEl) iconEl.innerText = topic.icon;
  if (bodyEl) {
    bodyEl.innerHTML = topic.contentHtml;
    bodyEl.scrollTop = 0;
  }

  if (prevBtn) prevBtn.disabled = index === 0;
  if (nextBtn) nextBtn.disabled = index === TOPICS.length - 1;

  if (bmBtn) {
    bmBtn.classList.toggle('active', STATE.bookmarks.includes(topic.id));
    bmBtn.onclick = (e) => toggleBookmark(e, topic.id);
  }

  if (overlay) {
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  setupModalBodyScroll();
}

function closeModal() {
  const overlay = document.getElementById('modal-overlay');
  if (overlay) {
    overlay.classList.remove('open');
    document.body.style.overflow = 'auto';
  }
}

function setupModalBodyScroll() {
  const bodyEl = document.getElementById('modal-body');
  const progressBar = document.getElementById('modal-progress');
  if (bodyEl && progressBar) {
    bodyEl.onscroll = () => {
      const scrollHeight = bodyEl.scrollHeight - bodyEl.clientHeight;
      const scrollPercent = (bodyEl.scrollTop / scrollHeight) * 100;
      progressBar.style.width = `${Math.min(100, Math.max(0, scrollPercent))}%`;
    };
  }
}

// --------------------------------------------------------------------------
// 9. DIAGRAMS RENDERER WITH WEB EMBEDS
// --------------------------------------------------------------------------
function renderDiagrams() {
  const container = document.getElementById('diagrams-grid');
  if (!container) return;
  container.innerHTML = '';

  SVG_DIAGRAMS.forEach((d) => {
    const card = document.createElement('div');
    card.className = 'diagram-card';
    card.innerHTML = `
      <div class="diagram-img-wrap" onclick="openDiagramLightbox('${d.imgUrl}', '${d.title.replace(/'/g, "\\'")}')">
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

// --------------------------------------------------------------------------
// 10. QUICK REVISION & SUMMARY TABLES
// --------------------------------------------------------------------------
function renderQuickRevision() {
  const container = document.getElementById('quick-revision-wrap');
  if (!container) return;

  container.innerHTML = `
    <div class="chapter-section" style="padding-top:20px;">
      <div class="callout callout-important" style="margin-bottom:30px;">
        <div class="callout-title">⚡ 15-Minute Rapid Exam Summary</div>
        Review essential scientist discoveries, physics equations, chemical formulas, golden rules, key memory tricks, and comparison tables before stepping into your examination room.
      </div>

      <h3 style="color:var(--cyan); margin-bottom:14px;">Key Formulas & Equations</h3>
      <div class="formula-block" style="text-align:left;">
        <ul>
          <li><strong>Joule's Law of Heating:</strong> H = I&sup2; &middot; R &middot; t</li>
          <li><strong>Total Magnification:</strong> Total Mag = Eyepiece Mag &times; Objective Mag</li>
          <li><strong>Photosynthesis:</strong> 6 CO₂ + 6 H₂O &rarr; C₆H₁₂O₆ + 6 O₂</li>
          <li><strong>Yeast Alcoholic Fermentation:</strong> C₆H₁₂O₆ &rarr; 2 C₂H₅OH + 2 CO₂ &uarr;</li>
          <li><strong>Lactic Acid Fermentation:</strong> C₆H₁₂O₆ &rarr; 2 C₃H₆O₃</li>
          <li><strong>Electromagnet Flux Density:</strong> B = &mu;&thinsp;&bdquo; &middot; &mu;&thinsp;&sbquo; &middot; n &middot; I</li>
        </ul>
      </div>

      <h3 style="color:var(--cyan); margin:30px 0 14px;">Key Scientists & Discoveries</h3>
      <table>
        <thead><tr><th>Scientist</th><th>Year</th><th>Key Discovery / Contribution</th></tr></thead>
        <tbody>
          <tr><td>Robert Hooke</td><td>1665</td><td>Coined the word "Cell" after examining dead oak cork bark.</td></tr>
          <tr><td>Antonie van Leeuwenhoek</td><td>1674</td><td>Father of Microbiology; first to observe living microbes (animalcules).</td></tr>
          <tr><td>Hans Christian Oersted</td><td>1820</td><td>Discovered the Magnetic Effect of Electric Current (Compass deflection).</td></tr>
          <tr><td>Alessandro Volta</td><td>1800</td><td>Invented the Voltaic Cell (Zinc-Copper acid battery).</td></tr>
          <tr><td>Dr. Ananda Chakrabarty</td><td>Modern</td><td>Engineered oil-eating bacteria to clean oceanic oil spills.</td></tr>
        </tbody>
      </table>

      <h3 style="color:var(--cyan); margin:30px 0 14px;">Vital Biological & Physics Rules</h3>
      <div class="card-grid">
        <div class="card" style="height:auto;">
          <h4 style="color:var(--cyan);">CTOSO Hierarchy</h4>
          <p>Cell → Tissue → Organ → Organ System → Organism</p>
        </div>
        <div class="card" style="height:auto;">
          <h4 style="color:var(--amber);">Structure Follows Function</h4>
          <p>Cell shape directly fits its job (e.g. Nerve cell long & branched to carry signals).</p>
        </div>
        <div class="card" style="height:auto;">
          <h4 style="color:var(--emerald);">Oersted's Rule</h4>
          <p>Current ON = Magnetic Field; Current OFF = Magnetic Field Disappears.</p>
        </div>
      </div>
    </div>
  `;
}

// --------------------------------------------------------------------------
// 11. FLASHCARDS ENGINE
// --------------------------------------------------------------------------
function renderFlashcards() {
  STATE.flashcardFiltered = [...FLASHCARDS];
  STATE.flashcardIndex = 0;
  updateFlashcardUI();
}

function updateFlashcardUI() {
  const cardEl = document.getElementById('flashcard');
  const tagEl = document.getElementById('fc-tag');
  const qEl = document.getElementById('fc-question');
  const aEl = document.getElementById('fc-answer');
  const counterEl = document.getElementById('fc-counter');

  if (!cardEl) return;
  cardEl.classList.remove('flipped');

  const cur = STATE.flashcardFiltered[STATE.flashcardIndex];
  if (!cur) return;

  if (tagEl) tagEl.innerText = cur.topic;
  if (qEl) qEl.innerText = cur.q;
  if (aEl) aEl.innerText = cur.a;
  if (counterEl) counterEl.innerText = `${STATE.flashcardIndex + 1} / ${STATE.flashcardFiltered.length}`;

  const markBtn = document.getElementById('fc-mark-btn');
  if (markBtn) {
    const isLearned = STATE.learnedFlashcards.includes(cur.q);
    markBtn.innerText = isLearned ? '✓ Learned' : 'Mark as Learned';
    markBtn.style.borderColor = isLearned ? 'var(--emerald)' : 'var(--glass-border)';
  }
}

function flipFlashcard() {
  const cardEl = document.getElementById('flashcard');
  if (cardEl) cardEl.classList.toggle('flipped');
}

function nextFlashcard() {
  if (STATE.flashcardIndex < STATE.flashcardFiltered.length - 1) {
    STATE.flashcardIndex++;
    updateFlashcardUI();
  }
}

function prevFlashcard() {
  if (STATE.flashcardIndex > 0) {
    STATE.flashcardIndex--;
    updateFlashcardUI();
  }
}

function shuffleFlashcards() {
  for (let i = STATE.flashcardFiltered.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [STATE.flashcardFiltered[i], STATE.flashcardFiltered[j]] = [STATE.flashcardFiltered[j], STATE.flashcardFiltered[i]];
  }
  STATE.flashcardIndex = 0;
  updateFlashcardUI();
  showToast("Flashcards Shuffled!");
}

function toggleMarkLearned() {
  const cur = STATE.flashcardFiltered[STATE.flashcardIndex];
  if (!cur) return;

  const idx = STATE.learnedFlashcards.indexOf(cur.q);
  if (idx > -1) {
    STATE.learnedFlashcards.splice(idx, 1);
  } else {
    STATE.learnedFlashcards.push(cur.q);
  }
  localStorage.setItem('g8_sci_learned_fc', JSON.stringify(STATE.learnedFlashcards));
  updateFlashcardUI();
  updateHeroStats();
}

// Line 1500 FIX: Clean event parameter handling
function filterFlashcards(e, category) {
  document.querySelectorAll('.fc-filter-btn').forEach(b => b.classList.remove('active'));
  if (e && e.target) {
    e.target.classList.add('active');
  }

  if (category === 'All') {
    STATE.flashcardFiltered = [...FLASHCARDS];
  } else {
    STATE.flashcardFiltered = FLASHCARDS.filter(f => f.topic === category);
  }
  STATE.flashcardIndex = 0;
  updateFlashcardUI();
}

// --------------------------------------------------------------------------
// 12. MCQ QUIZ ENGINE
// --------------------------------------------------------------------------
function renderQuiz() {
  STATE.quizIndex = 0;
  STATE.quizScore = 0;
  STATE.quizUserAnswers = [];
  STATE.quizActiveQuestions = shuffleArray([...MCQS]).slice(0, 20); // 20 randomized questions per quiz session
  updateQuizQuestion();
}

function updateQuizQuestion() {
  const container = document.getElementById('quiz-container');
  if (!container) return;

  const cur = STATE.quizActiveQuestions[STATE.quizIndex];
  if (!cur) {
    renderQuizResults();
    return;
  }

  const fill = document.getElementById('quiz-fill');
  const count = document.getElementById('quiz-count');
  if (fill) fill.style.width = `${((STATE.quizIndex) / STATE.quizActiveQuestions.length) * 100}%`;
  if (count) count.innerText = `Question ${STATE.quizIndex + 1} of ${STATE.quizActiveQuestions.length}`;

  const qTitle = document.getElementById('quiz-q-title');
  if (qTitle) qTitle.innerText = `${STATE.quizIndex + 1}. ${cur.q}`;

  const optContainer = document.getElementById('quiz-options');
  if (optContainer) {
    optContainer.innerHTML = '';
    cur.opts.forEach((optText, optIdx) => {
      const btn = document.createElement('button');
      btn.className = 'quiz-opt-btn';
      btn.innerHTML = `<span style="font-weight:bold; color:var(--cyan);">${String.fromCharCode(65 + optIdx)}.</span> ${optText}`;
      btn.onclick = () => selectQuizOption(optIdx);
      optContainer.appendChild(btn);
    });
  }

  const expBox = document.getElementById('quiz-explanation');
  if (expBox) expBox.style.display = 'none';

  const nextBtn = document.getElementById('quiz-next-btn');
  if (nextBtn) nextBtn.style.display = 'none';
}

function selectQuizOption(selectedIdx) {
  const cur = STATE.quizActiveQuestions[STATE.quizIndex];
  const btns = document.querySelectorAll('.quiz-opt-btn');

  btns.forEach(b => b.disabled = true);

  if (selectedIdx === cur.ans) {
    btns[selectedIdx].classList.add('correct');
    STATE.quizScore++;
  } else {
    btns[selectedIdx].classList.add('incorrect');
    btns[cur.ans].classList.add('correct');
  }

  const expBox = document.getElementById('quiz-explanation');
  if (expBox) {
    expBox.innerHTML = `<strong>Explanation:</strong> ${cur.exp}`;
    expBox.style.display = 'block';
  }

  const nextBtn = document.getElementById('quiz-next-btn');
  if (nextBtn) nextBtn.style.display = 'inline-flex';
}

function nextQuizQuestion() {
  STATE.quizIndex++;
  if (STATE.quizIndex >= STATE.quizActiveQuestions.length) {
    renderQuizResults();
  } else {
    updateQuizQuestion();
  }
}

function renderQuizResults() {
  const container = document.getElementById('quiz-container');
  if (!container) return;

  const total = STATE.quizActiveQuestions.length;
  const pct = Math.round((STATE.quizScore / total) * 100);

  if (STATE.quizScore > STATE.quizHighScore) {
    STATE.quizHighScore = STATE.quizScore;
    localStorage.setItem('g8_sci_quiz_score', STATE.quizHighScore.toString());
  }

  updateHeroStats();

  container.innerHTML = `
    <div style="text-align:center; padding:30px 10px;">
      <div style="font-size:3.5rem; margin-bottom:10px;">🎯</div>
      <h2 style="font-size:2rem; font-weight:800; color:var(--white-soft);">Quiz Completed!</h2>
      <p style="font-size:1.1rem; color:var(--gray-light); margin-top:8px;">You scored <strong>${STATE.quizScore}</strong> out of <strong>${total}</strong> (${pct}%)</p>
      
      <div style="margin:30px 0;">
        <span class="pill ${pct >= 70 ? 'pill-cyan' : 'pill-amber'}" style="font-size:1rem; padding:8px 20px;">
          ${pct >= 85 ? '🌟 Outstanding Mastery!' : pct >= 70 ? '👍 Great Job!' : '📖 Review Key Topics'}
        </span>
      </div>

      <div style="display:flex; gap:14px; justify-content:center; flex-wrap:wrap;">
        <button class="cta-btn" onclick="renderQuiz()">Retry Quiz</button>
        <button class="cta-btn-outline" onclick="navigateTo('quick-revision')">Quick Revision</button>
      </div>
    </div>
  `;
}

// --------------------------------------------------------------------------
// 13. IMPORTANT QUESTIONS ACCORDIONS
// --------------------------------------------------------------------------
function renderImportantQuestions() {
  const container = document.getElementById('important-questions-wrap');
  if (!container) return;

  container.innerHTML = `
    <div class="accordion-group">
      <h3>⭐ 1 Mark Questions</h3>
      ${IMPORTANT_QUESTIONS.m1.map(item => createAccordionHtml(item.q, item.a)).join('')}
    </div>
    <div class="accordion-group">
      <h3>⭐⭐ 2 Marks Questions</h3>
      ${IMPORTANT_QUESTIONS.m2.map(item => createAccordionHtml(item.q, item.a)).join('')}
    </div>
    <div class="accordion-group">
      <h3>⭐⭐⭐ 3 Marks Questions</h3>
      ${IMPORTANT_QUESTIONS.m3.map(item => createAccordionHtml(item.q, item.a)).join('')}
    </div>
    <div class="accordion-group">
      <h3>🏆 5 Marks Long Questions</h3>
      ${IMPORTANT_QUESTIONS.m5.map(item => createAccordionHtml(item.q, item.a)).join('')}
    </div>
  `;

  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      item.classList.toggle('open');
    });
  });
}

function createAccordionHtml(question, answer) {
  return `
    <div class="accordion-item">
      <div class="accordion-header">
        <span>${question}</span>
        <span class="accordion-icon">▼</span>
      </div>
      <div class="accordion-content">
        ${answer}
      </div>
    </div>
  `;
}

// --------------------------------------------------------------------------
// 14. GLOSSARY RENDERER & LETTER FILTER
// --------------------------------------------------------------------------
function renderGlossary() {
  const lettersContainer = document.getElementById('glossary-letters');
  const gridContainer = document.getElementById('glossary-grid');

  if (!gridContainer) return;

  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  if (lettersContainer) {
    lettersContainer.innerHTML = `
      <button class="glossary-letter-btn active" onclick="filterGlossaryLetter(event, 'ALL')">ALL</button>
      ${letters.map(l => `<button class="glossary-letter-btn" onclick="filterGlossaryLetter(event, '${l}')">${l}</button>`).join('')}
    `;
  }

  filterGlossaryLetter(null, 'ALL');
}

// Line 1550 FIX: Clean event parameter handling
function filterGlossaryLetter(e, letter) {
  document.querySelectorAll('.glossary-letter-btn').forEach(b => {
    b.classList.toggle('active', b.innerText === letter);
  });

  const gridContainer = document.getElementById('glossary-grid');
  if (!gridContainer) return;

  gridContainer.innerHTML = '';
  const items = letter === 'ALL' ? GLOSSARY : GLOSSARY.filter(g => g.term.toUpperCase().startsWith(letter));

  items.sort((a, b) => a.term.localeCompare(b.term)).forEach(item => {
    const card = document.createElement('div');
    card.className = 'glossary-card';
    card.innerHTML = `
      <h4>${item.term}</h4>
      <p>${item.def}</p>
    `;
    gridContainer.appendChild(card);
  });
}

// --------------------------------------------------------------------------
// 15. LIVE SEARCH ENGINE & HERO STATS
// --------------------------------------------------------------------------
function setupSearch() {
  const input = document.getElementById('search-input');
  if (!input) return;

  input.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    STATE.searchQuery = query;

    document.querySelectorAll('.card').forEach(card => {
      const title = card.querySelector('h3')?.innerText.toLowerCase() || '';
      const preview = card.querySelector('.card-preview')?.innerText.toLowerCase() || '';
      const matches = title.includes(query) || preview.includes(query);
      card.classList.toggle('hidden-by-search', query.length > 0 && !matches);
    });
  });
}

function updateHeroStats() {
  const totalTopics = document.getElementById('stat-total-topics');
  const flashcardsLearned = document.getElementById('stat-fc-learned');
  const quizHigh = document.getElementById('stat-quiz-high');
  const bookmarksCount = document.getElementById('stat-bookmarks');

  if (totalTopics) totalTopics.innerText = TOPICS.length;
  if (flashcardsLearned) flashcardsLearned.innerText = `${STATE.learnedFlashcards.length} / ${FLASHCARDS.length}`;
  if (quizHigh) quizHigh.innerText = `${STATE.quizHighScore} / 20`;
  if (bookmarksCount) bookmarksCount.innerText = STATE.bookmarks.length;
}

// --------------------------------------------------------------------------
// 16. UTILITIES (TOAST, COPY, PRINT, KEYBOARD)
// --------------------------------------------------------------------------
function showToast(msg) {
  const wrap = document.getElementById('toast-wrap') || createToastWrap();
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerText = msg;
  wrap.appendChild(toast);
  setTimeout(() => toast.remove(), 2500);
}

function createToastWrap() {
  const wrap = document.createElement('div');
  wrap.id = 'toast-wrap';
  wrap.className = 'toast-wrap';
  document.body.appendChild(wrap);
  return wrap;
}

function copyModalContent() {
  const bodyEl = document.getElementById('modal-body');
  if (bodyEl) {
    navigator.clipboard.writeText(bodyEl.innerText);
    showToast("Topic notes copied to clipboard!");
  }
}

function printModalContent() {
  window.print();
}

function navigateModalTopic(direction) {
  const newIndex = STATE.currentTopicIndex + direction;
  if (newIndex >= 0 && newIndex < TOPICS.length) {
    openModal(newIndex);
  }
}

function setupKeyboardListeners() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
    const modalOpen = document.getElementById('modal-overlay')?.classList.contains('open');
    if (modalOpen) {
      if (e.key === 'ArrowLeft') navigateModalTopic(-1);
      if (e.key === 'ArrowRight') navigateModalTopic(1);
    }
  });
}

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
