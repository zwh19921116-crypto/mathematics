// ===========================
//  Math Worksheet Generator
//  app.js
// ===========================

const generateBtn      = document.getElementById('generateBtn');
const refreshBtn       = document.getElementById('refreshBtn');
const printBtn         = document.getElementById('printBtn');
const fullscreenBtn    = document.getElementById('fullscreenBtn');
const preview          = document.getElementById('worksheetPreview');
const previewToolbar   = document.getElementById('previewToolbar');
const pagination       = document.getElementById('pagination');
const prevBtn          = document.getElementById('prevBtn');
const nextBtn          = document.getElementById('nextBtn');
const solutionsJumpBtn = document.getElementById('solutionsJumpBtn');
const pageIndicator    = document.getElementById('pageIndicator');
const pageNumberInput  = document.getElementById('pageNumberInput');
const pageTotal        = document.getElementById('pageTotal');
const zoomOutBtn       = document.getElementById('zoomOutBtn');
const zoomResetBtn     = document.getElementById('zoomResetBtn');
const zoomInBtn        = document.getElementById('zoomInBtn');
const moduleSelect     = document.getElementById('module');
const yearLevelSelect  = document.getElementById('yearLevel');
const moduleTopicSearch = document.getElementById('moduleTopicSearch');
const moduleTopicSearchResults = document.getElementById('moduleTopicSearchResults');
const moduleTopicSearchToggle = document.getElementById('moduleTopicSearchToggle');
const moduleTopicSearchPopup = document.getElementById('moduleTopicSearchPopup');
const moduleTopicSearchBackdrop = document.getElementById('moduleTopicSearchBackdrop');
const topicSelect      = document.getElementById('topic');
const denominatorGroup = document.getElementById('denominatorGroup');
const denominatorSelect = document.getElementById('denominatorMode');
const timesTableGroup  = document.getElementById('timesTableGroup');
const magicSquareSizeGroup = document.getElementById('magicSquareSizeGroup');
const magicSquareSizeSelect = document.getElementById('magicSquareSize');
const pythagorasModeGroup = document.getElementById('pythagorasModeGroup');
const pythagorasModeSelect = document.getElementById('pythagorasMode');
const patternModeGroup = document.getElementById('patternModeGroup');
const patternModeSelect = document.getElementById('patternMode');
const termCountGroup = document.getElementById('termCountGroup');
const termCountSelect = document.getElementById('termCount');
const mixedQuestionsPerPageGroup = document.getElementById('mixedQuestionsPerPageGroup');
const mixedQuestionsPerPageSelect = document.getElementById('mixedQuestionsPerPage');
const roundingPlaceGroup = document.getElementById('roundingPlaceGroup');
const roundingPlaceSelect = document.getElementById('roundingPlace');
const graphQuestionsPerPageGroup = document.getElementById('graphQuestionsPerPageGroup');
const graphQuestionsPerPageSelect = document.getElementById('graphQuestionsPerPage');
const rangeRow         = document.getElementById('rangeRow');
const titleInput       = document.getElementById('title');
const solutionsCheckbox = document.getElementById('solutionsRequired');
const coverPageCheckbox = document.getElementById('coverPageRequired');
const examCheckbox = document.getElementById('examRequired');
const examDisclaimerEditBtn = document.getElementById('examDisclaimerEditBtn');
const examDisclaimerEditor = document.getElementById('examDisclaimerEditor');
const examEditorBackdrop = document.getElementById('examEditorBackdrop');
const examInfoBox = document.getElementById('examInfoBox');
const examInstructionsBox = document.getElementById('examInstructionsBox');
const DEFAULT_EXAM_DISCLAIMER = 'Exam conditions apply.';
const examDisclaimerPreset = document.getElementById('examDisclaimerPreset');
const examLoadPresetBtn = document.getElementById('examLoadPresetBtn');
const examDeletePresetBtn = document.getElementById('examDeletePresetBtn');
const examPresetName = document.getElementById('examPresetName');
const examSavePresetBtn = document.getElementById('examSavePresetBtn');
const examDisclaimerLivePreview = document.getElementById('examDisclaimerLivePreview');
const EXAM_DISCLAIMER_PRESETS_KEY = 'worksheetGenerator.examDisclaimerPresets';
const BUILT_IN_EXAM_DISCLAIMERS = {
  Exam: { html: '<p>Exam conditions apply.</p><ul><li>Read every question carefully before beginning.</li><li>Show all working clearly.</li><li>Write your name on the cover page.</li><li>Check your answers before submitting.</li></ul>' },
  'Exam - No Calculator': { html: '<p>Exam conditions apply. This is a no-calculator examination.</p><ul><li>Calculators, phones, and other electronic devices are not permitted.</li><li>Show all working clearly so each method can be checked.</li><li>Give exact answers where possible.</li><li>Check your answers before submitting.</li></ul>' },
  'Exam - Detailed Information': { html: '<p><strong>Examination Information</strong></p><p><strong>Reading Time:</strong> 5 minutes<br><strong>Writing Time:</strong> 55 minutes<br><strong>Total Time:</strong> 60 minutes<br><strong>Total Marks:</strong> ______</p><p><strong>Instructions</strong></p><ul><li>Read all questions carefully during the reading time.</li><li>Do not write in the examination booklet during reading time.</li><li>Answer all questions.</li><li>Show all working where appropriate.</li><li>Write clearly in the spaces provided.</li><li>If you make a mistake, rule through it neatly.</li></ul><p><strong>Permitted Materials</strong></p><ul><li>Pens (blue or black)</li><li>Pencil</li><li>Eraser</li><li>Ruler</li></ul><p><strong>Prohibited Materials</strong></p><ul><li>Mobile phones</li><li>Smart watches</li><li>Notes or textbooks</li><li>Calculators</li></ul>' },
  'Exam - Show Working': { html: '<p>Exam conditions apply.</p><ul><li>Show every important step in your working.</li><li>Write formulas before substituting values.</li><li>Include units in measurement answers.</li><li>Round answers only as instructed.</li></ul>' },
  'Assessment - Check Answers': { html: '<p>Complete all questions independently.</p><ol><li>Read each question carefully.</li><li>Plan your method before calculating.</li><li>Check calculations and units.</li><li>Review every answer before submitting.</li></ol>' },
  'Exam - Calculator Allowed': { html: '<p>Exam conditions apply. Calculators may be used where appropriate.</p><ul><li>Show the values and formula used.</li><li>Keep intermediate answers accurate.</li><li>Round only your final answer.</li><li>Check that your answer is reasonable.</li></ul>' },
  'Exam - Student Checklist': { html: '<p>Before you submit your examination:</p><ol><li>Answer every question.</li><li>Show all working.</li><li>Check signs, calculations, and units.</li><li>Make sure your writing is clear.</li><li>Review any questions you skipped.</li></ol>' },
};
const formulaSheetCheckbox = document.getElementById('formulaSheetRequired');
const coverPageTitleGroup = document.getElementById('coverPageTitleGroup');
const coverPageTitleInput = document.getElementById('coverPageTitle');
const whiteLabelCheckbox = document.getElementById('whiteLabelCheckbox');
const whiteLabelLogoInput = document.getElementById('whiteLabelLogoInput');
const whiteLabelUploadGroup = document.getElementById('whiteLabelUploadGroup');
const whiteLabelLogoPreview = document.getElementById('whiteLabelLogoPreview');
const headerLogoImg    = document.getElementById('headerLogoImg');
const controlsLogoImg  = document.getElementById('controlsLogoImg');
const initialDocumentTitle = document.title;
const bulkAddBtn        = document.getElementById('bulkAddBtn');
const bulkModalOverlay  = document.getElementById('bulkModalOverlay');
const bulkModalCloseBtn = document.getElementById('bulkModalCloseBtn');
const bulkCancelBtn     = document.getElementById('bulkCancelBtn');
const bulkGenerateBtn   = document.getElementById('bulkGenerateBtn');
const bulkAddItemBtn    = document.getElementById('bulkAddItemBtn');
const bulkItemsList     = document.getElementById('bulkItemsList');
const bulkItemsEmpty    = document.getElementById('bulkItemsEmpty');
const bulkProgress      = document.getElementById('bulkProgress');
const bulkBatchNameInput = document.getElementById('bulkBatchName');
const bulkFolderCountInput = document.getElementById('bulkFolderCount');
const bulkModuleSelect  = document.getElementById('bulkModule');
const bulkTopicSelect   = document.getElementById('bulkTopic');
const bulkDenominatorGroup = document.getElementById('bulkDenominatorGroup');
const bulkDenominatorSelect = document.getElementById('bulkDenominatorMode');
const bulkTermCountGroup = document.getElementById('bulkTermCountGroup');
const bulkTermCountSelect = document.getElementById('bulkTermCount');
const bulkRoundingPlaceGroup = document.getElementById('bulkRoundingPlaceGroup');
const bulkRoundingPlaceSelect = document.getElementById('bulkRoundingPlace');
const bulkMixedQuestionsPerPageGroup = document.getElementById('bulkMixedQuestionsPerPageGroup');
const bulkMixedQuestionsPerPageSelect = document.getElementById('bulkMixedQuestionsPerPage');
const bulkGraphQuestionsPerPageGroup = document.getElementById('bulkGraphQuestionsPerPageGroup');
const bulkGraphQuestionsPerPageSelect = document.getElementById('bulkGraphQuestionsPerPage');
const bulkTimesTableGroup = document.getElementById('bulkTimesTableGroup');
const bulkTimesTableSelect = document.getElementById('bulkTimesTable');
const bulkMagicSquareSizeGroup = document.getElementById('bulkMagicSquareSizeGroup');
const bulkMagicSquareSizeSelect = document.getElementById('bulkMagicSquareSize');
const bulkRangeRow      = document.getElementById('bulkRangeRow');
const bulkMinNumInput   = document.getElementById('bulkMinNum');
const bulkMaxNumInput   = document.getElementById('bulkMaxNum');
const bulkNumQuestionsInput = document.getElementById('bulkNumQuestions');
const bulkTitleInput    = document.getElementById('bulkTitle');
const bulkSolutionsCheckbox = document.getElementById('bulkSolutions');
const bulkPresetSelect  = document.getElementById('bulkPresetSelect');
const bulkLoadPresetBtn = document.getElementById('bulkLoadPresetBtn');
const bulkDeletePresetBtn = document.getElementById('bulkDeletePresetBtn');
const bulkPresetNameInput = document.getElementById('bulkPresetNameInput');
const bulkSavePresetBtn = document.getElementById('bulkSavePresetBtn');
const bulkDayLabelInput = document.getElementById('bulkDayLabelInput');
const bulkDayIndicator  = document.getElementById('bulkDayIndicator');
const bulkPrevDayBtn    = document.getElementById('bulkPrevDayBtn');
const bulkNextDayBtn    = document.getElementById('bulkNextDayBtn');
const bulkAddDayBtn     = document.getElementById('bulkAddDayBtn');
const bulkDuplicateDayBtn = document.getElementById('bulkDuplicateDayBtn');
const bulkRemoveDayBtn  = document.getElementById('bulkRemoveDayBtn');
const bulkDayFormulaCheckbox = document.getElementById('bulkDayFormulaCheckbox');
const bulkDayFormulaModule = document.getElementById('bulkDayFormulaModule');
const formulaLookupBtn  = document.getElementById('formulaLookupBtn');
const formulaModalOverlay = document.getElementById('formulaModalOverlay');
const formulaModalCloseBtn = document.getElementById('formulaModalCloseBtn');
const formulaModalCancelBtn = document.getElementById('formulaModalCancelBtn');
const formulaPrintBtn  = document.getElementById('formulaPrintBtn');
const formulaModuleSelect = document.getElementById('formulaModuleSelect');
const formulaLookupPreview = document.getElementById('formulaLookupPreview');
const DEFAULT_PREVIEW_ZOOM = 68;
const MIN_PREVIEW_ZOOM = 40;
const MAX_PREVIEW_ZOOM = 250;
const PREVIEW_ZOOM_STEP = 10;

const MODULE_TOPICS = {
  arithmetic: [
    { value: 'addition', label: 'Addition (+)' },
    { value: 'subtraction', label: 'Subtraction (−)' },
    { value: 'multiplication', label: 'Multiplication (×)' },
    { value: 'multiplication-groups', label: 'Multiplication Groups & Arrays' },
    { value: 'multiplication-strategies', label: 'Multiplication Strategies' },
    { value: 'division', label: 'Division (÷)' },
      { value: 'division-strategies', label: 'Division Strategies' },
    { value: 'word-problems', label: 'Word Problems' },
    { value: 'multi-step-word-problems', label: 'Multi-step Word Problems' },
    { value: 'fact-families', label: 'Fact Families' },
    { value: 'number-bonds', label: 'Number Bonds' },
    { value: 'mental-maths', label: 'Mental Maths Strategies' },
    { value: 'times-tables', label: 'Times Tables' },
    { value: 'bodmas', label: 'B.O.D.M.A.S' },
    { value: 'mixed', label: 'Mixed Operations' },
  ],
    fractions: [
    { value: 'recognising-fractions', label: 'Recognising Fractions' },
    { value: 'comparing-fractions', label: 'Comparing & Ordering Fractions' },
    { value: 'equivalent-fractions', label: 'Equivalent Fractions' },
    { value: 'fraction-models', label: 'Visual Fraction Models' },
    { value: 'fraction-of-quantity', label: 'Fractions of Quantities' },
    { value: 'simplifying-fractions', label: 'Simplifying Fractions' },
    { value: 'mixed-fractions', label: 'Mixed Fractions' },
    { value: 'improper-fractions', label: 'Improper Fractions' },
    { value: 'add-fractions', label: 'Add Fractions' },
    { value: 'subtract-fractions', label: 'Subtract Fractions' },
    { value: 'multiply-fractions', label: 'Multiply Fractions' },
    { value: 'divide-fractions', label: 'Divide Fractions' },
  ],
  decimals: [
    { value: 'decimal-place-value', label: 'Decimal Place Value' },
    { value: 'decimal-operations', label: 'Decimal Operations' },
  ],
  percentages: [
    { value: 'percentage-of-amount', label: 'Percentage of an Amount' },
    { value: 'fraction-decimal-percentage', label: 'Fractions, Decimals & Percentages' },
    { value: 'percentage-increase', label: 'Percentage Increase' },
    { value: 'percentage-decrease', label: 'Percentage Decrease' },
    { value: 'percentage-to-decimal', label: 'Converting Percentage to Decimal' },
  ],
  geometry: [
    { value: '2d-shapes', label: '2D Shapes' },
    { value: '3d-shapes', label: '3D Shapes' },
    { value: 'angles', label: 'Angles' },
    { value: 'symmetry', label: 'Symmetry' },
    { value: 'position-direction', label: 'Position and Direction' },
    { value: 'coordinates', label: 'Maps and Coordinates' },
    { value: 'plot-cartesian-plane', label: 'Plot on the Cartesian Plane' },
    { value: 'transformations', label: 'Transformations' },
    { value: 'congruence', label: 'Congruence' },
    { value: 'similarity', label: 'Similarity' },
    { value: 'circle-geometry', label: 'Circle Geometry' },
    { value: 'geometric-reasoning', label: 'Geometric Reasoning' },
    { value: 'proof', label: 'Proof' },
    { value: 'pythagoras', label: 'Pythagoras' },
    { value: 'shape-properties', label: '2D & 3D Shape Properties' },
  ],
  measurement: [
    { value: 'visual-measurement', label: 'Visual Measurement' },
    { value: 'length', label: 'Length' },
    { value: 'area', label: 'Area' },
    { value: 'perimeter', label: 'Perimeter' },
    { value: 'volume', label: 'Volume' },
    { value: 'surface-area', label: 'Surface Area' },
    { value: 'capacity', label: 'Capacity' },
    { value: 'mass', label: 'Mass' },
    { value: 'time', label: 'Time' },
    { value: 'analogue-clocks', label: 'Analogue Clocks' },
    { value: 'calendars', label: 'Calendars' },
    { value: 'temperature', label: 'Temperature' },
    { value: 'unit-conversions', label: 'Unit Conversions' },
      { value: 'measurement-conversions', label: 'Measurement Conversions' },
    { value: 'elapsed-time', label: 'Elapsed Time' },
  ],
  money: [
    { value: 'making-change', label: 'Making Change' },
    { value: 'coin-note-recognition', label: 'Coins and Notes' },
    { value: 'adding-money', label: 'Adding Money' },
    { value: 'money-word-problems', label: 'Money Word Problems' },
    { value: 'financial-mathematics', label: 'Financial Mathematics' },
    { value: 'saving-money', label: 'Saving Money' },
    { value: 'budgeting', label: 'Budgeting' },
    { value: 'best-buy', label: 'Best Buy' },
      { value: 'discounts', label: 'Discounts' },
  ],
  statistics: [
    { value: 'collecting-data', label: 'Collecting Data' },
    { value: 'tables', label: 'Tables' },
    { value: 'picture-graphs', label: 'Picture Graphs' },
    { value: 'bar-graphs', label: 'Bar/Column Graphs' },
    { value: 'graphs', label: 'Graphs' },
    { value: 'mean', label: 'Mean' },
    { value: 'median', label: 'Median' },
    { value: 'mode', label: 'Mode' },
    { value: 'range', label: 'Range' },
    { value: 'interquartile-range', label: 'Interquartile Range' },
    { value: 'box-plots', label: 'Box Plots' },
    { value: 'cumulative-frequency', label: 'Cumulative Frequency' },
    { value: 'stem-and-leaf', label: 'Stem-and-Leaf Plots' },
    { value: 'histograms', label: 'Histograms' },
    { value: 'dot-plots', label: 'Dot Plots' },
    { value: 'scatter-plots', label: 'Scatter Plots' },
    { value: 'frequency-distributions', label: 'Frequency Distributions' },
    { value: 'draw-charts', label: 'Draw Statistical Charts' },
    { value: 'distributions', label: 'Data Distributions' },
    { value: 'standard-deviation', label: 'Standard Deviation' },
    { value: 'data-analysis', label: 'Data Analysis' },
    { value: 'regression', label: 'Regression' },
    { value: 'data-interpretation', label: 'Data Interpretation' },
  ],
  probability: [
    { value: 'chance-language', label: 'Chance (Likely/Unlikely/Certain)' },
    { value: 'chance-experiments', label: 'Chance Experiments' },
    { value: 'simple-probability', label: 'Simple Probability' },
    { value: 'advanced-probability', label: 'Advanced Probability' },
  ],
  trigonometry: [
    { value: 'right-angle-trigonometry', label: 'Right Angle Trigonometry' },
    { value: 'sine-rule', label: 'Sine Rule' },
    { value: 'cosine-rule', label: 'Cosine Rule' },
    { value: 'bearings', label: 'Bearings' },
    { value: 'applications-of-trigonometry', label: 'Applications of Trigonometry' },
  ],
  algebra: [
    { value: 'patterns', label: 'Patterns' },
    { value: 'variables', label: 'Variables' },
    { value: 'expressions', label: 'Expressions' },
    { value: 'substitution', label: 'Substitution' },
    { value: 'expanding-expressions', label: 'Expanding Expressions' },
    { value: 'factorisation', label: 'Factorisation' },
    { value: 'linear-equations', label: 'Linear Equations' },
    { value: 'simultaneous-equations', label: 'Simultaneous Equations' },
    { value: 'inequalities', label: 'Inequalities' },
    { value: 'multi-step-linear-equations', label: 'Multi-step Linear Equations' },
    { value: 'linear-graphs', label: 'Linear Graphs' },
    { value: 'gradient', label: 'Gradient' },
    { value: 'algebraic-fractions', label: 'Algebraic Fractions' },
    { value: 'polynomials', label: 'Polynomials' },
    { value: 'functions', label: 'Functions' },
    { value: 'exponential-functions', label: 'Exponential Functions' },
    { value: 'logarithmic-functions', label: 'Logarithmic Functions' },
    { value: 'quadratics', label: 'Quadratics' },
    { value: 'calculus', label: 'Calculus' },
    { value: 'vectors', label: 'Vectors' },
    { value: 'sequences', label: 'Sequences' },
    { value: 'recurrence-relations', label: 'Recurrence Relations' },
  ],
  number: [
    { value: 'whole-numbers', label: 'Whole Numbers' },
    { value: 'rounding-estimation', label: 'Rounding and Estimation' },
    { value: 'writing-numbers-sequence', label: 'Writing Number (Sequence)' },
    { value: 'writing-numbers-random', label: 'Writing Number (Random)' },
    { value: 'identifying-numbers', label: 'Identifying Numbers' },
    { value: 'place-value', label: 'Place Value' },
    { value: 'odd-even', label: 'Odd and Even Numbers' },
    { value: 'comparing-numbers', label: 'Comparing Numbers' },
    { value: 'ordering-numbers', label: 'Ordering Numbers' },
    { value: 'missing-numbers', label: 'Missing Numbers' },
    { value: 'number-sentences', label: 'Number Sentences' },
    { value: 'equality', label: 'Understanding Equality' },
    { value: 'factors', label: 'Factors' },
    { value: 'multiples', label: 'Multiples' },
    { value: 'prime-numbers', label: 'Prime Numbers' },
    { value: 'composite-numbers', label: 'Composite Numbers' },
    { value: 'integers', label: 'Integers' },
    { value: 'indices', label: 'Indices' },
    { value: 'scientific-notation', label: 'Scientific Notation' },
    { value: 'surds', label: 'Surds' },
    { value: 'complex-numbers', label: 'Complex Numbers' },
    { value: 'magic-squares', label: 'Magic Squares' },
    { value: 'sudoku', label: 'Sudoku' },
  ],
  ratio: [
    { value: 'writing-ratios', label: 'Writing Ratios' },
    { value: 'equivalent-ratios', label: 'Equivalent Ratios' },
    { value: 'dividing-in-a-ratio', label: 'Dividing in a Ratio' },
    { value: 'proportion', label: 'Proportion' },
  ],
  networks: [
    { value: 'network-graphs', label: 'Network Graphs' },
    { value: 'shortest-paths', label: 'Shortest Paths' },
    { value: 'minimum-spanning-trees', label: 'Minimum Spanning Trees' },
    { value: 'critical-paths', label: 'Critical Path Analysis' },
    { value: 'network-flow', label: 'Network Flow and Optimisation' },
  ],
  matrices: [
    { value: 'matrix-addition', label: 'Matrix Addition' },
    { value: 'matrix-subtraction', label: 'Matrix Subtraction' },
    { value: 'matrix-multiplication', label: 'Matrix Multiplication' },
    { value: 'matrix-inverse', label: 'Matrix Inverse' },
  ],
};

const MODULES_BY_YEAR_LEVEL = {
  primary: new Set(['algebra', 'arithmetic', 'decimals', 'fractions', 'geometry', 'measurement', 'money', 'number', 'percentages', 'ratio', 'statistics', 'probability']),
  secondary: new Set(['algebra', 'arithmetic', 'decimals', 'fractions', 'geometry', 'measurement', 'money', 'number', 'percentages', 'ratio', 'statistics', 'probability', 'trigonometry', 'matrices', 'networks']),
  'general-mathematics': new Set(['algebra', 'money', 'statistics', 'matrices', 'networks']),
};

const GENERAL_MATHEMATICS_TOPIC_LIMITS = {
  algebra: new Set(['sequences', 'recurrence-relations']),
  matrices: new Set(['matrix-addition', 'matrix-subtraction', 'matrix-multiplication', 'matrix-inverse']),
  money: new Set(['financial-mathematics']),
  statistics: new Set(['collecting-data', 'tables', 'graphs', 'mean', 'median', 'mode', 'range', 'interquartile-range', 'box-plots', 'cumulative-frequency', 'histograms', 'scatter-plots', 'regression', 'data-analysis']),
  networks: new Set(['network-graphs', 'shortest-paths', 'minimum-spanning-trees', 'critical-paths', 'network-flow']),
};

const PRIMARY_TOPIC_LIMITS = {
  arithmetic: new Set(['addition', 'subtraction', 'multiplication', 'multiplication-groups', 'multiplication-strategies', 'division', 'division-strategies', 'word-problems', 'multi-step-word-problems', 'fact-families', 'number-bonds', 'mental-maths', 'times-tables', 'bodmas', 'mixed']),
  algebra: new Set(['patterns', 'variables', 'sequences']),
  geometry: new Set(['2d-shapes', '3d-shapes', 'angles', 'symmetry', 'position-direction', 'coordinates', 'plot-cartesian-plane', 'transformations', 'shape-properties']),
  money: new Set(['making-change', 'coin-note-recognition', 'adding-money', 'money-word-problems', 'saving-money', 'budgeting', 'best-buy', 'discounts']),
  number: new Set(['whole-numbers', 'rounding-estimation', 'writing-numbers-sequence', 'writing-numbers-random', 'identifying-numbers', 'place-value', 'odd-even', 'comparing-numbers', 'ordering-numbers', 'missing-numbers', 'number-sentences', 'equality', 'factors', 'multiples', 'magic-squares', 'sudoku']),
  statistics: new Set(['collecting-data', 'tables', 'picture-graphs', 'bar-graphs', 'graphs', 'mean', 'median', 'mode', 'range', 'interquartile-range', 'box-plots', 'cumulative-frequency', 'stem-and-leaf', 'histograms', 'dot-plots', 'scatter-plots', 'frequency-distributions', 'draw-charts', 'distributions', 'standard-deviation', 'data-analysis', 'regression', 'data-interpretation']),
  probability: new Set(['chance-language', 'chance-experiments', 'simple-probability', 'advanced-probability']),
  fractions: new Set(['recognising-fractions', 'comparing-fractions', 'equivalent-fractions', 'fraction-models', 'fraction-of-quantity', 'add-fractions', 'subtract-fractions', 'multiply-fractions', 'divide-fractions']),
  measurement: new Set(['visual-measurement', 'length', 'area', 'perimeter', 'volume', 'capacity', 'mass', 'time', 'analogue-clocks', 'calendars', 'temperature', 'unit-conversions', 'measurement-conversions', 'elapsed-time']),
};

const NUMBER_TOPICS = new Set([
  'whole-numbers',
  'writing-numbers-sequence',
  'writing-numbers-random',
  'identifying-numbers',
  'place-value',
  'odd-even',
  'comparing-numbers',
  'ordering-numbers',
  'missing-numbers',
  'number-sentences',
  'equality',
  'factors',
  'multiples',
  'prime-numbers',
  'composite-numbers',
  'integers',
  'indices',
  'scientific-notation',
  'surds',
  'complex-numbers',
  'magic-squares',
  'sudoku',
]);

const MULTIPLICATION_GROUPING_TOPICS = new Set(['multiplication-groups']);
const WORD_PROBLEM_TOPICS = new Set(['word-problems']);
const PRIMARY_ADDITIONAL_TOPICS = new Set([
  'multiplication-strategies', 'division-strategies', 'multi-step-word-problems', 'fact-families',
  'number-bonds', 'mental-maths', 'fraction-models', 'fraction-of-quantity', 'measurement-conversions', 'elapsed-time',
  'visual-measurement', 'analogue-clocks', 'coin-note-recognition', 'chance-experiments', 'rounding-estimation',
  'shape-properties', 'discounts',
  'data-interpretation',
]);
const ADVANCED_WORKSHEET_TOPICS = new Set([
  'quadratics',
  'calculus',
  'vectors',
  'matrices',
  'complex-numbers',
  'financial-mathematics',
  'advanced-probability',
  'pythagoras',
  'multi-step-linear-equations',
  'linear-graphs',
  'gradient',
  'algebraic-fractions',
  'box-plots',
  'cumulative-frequency',
]);

const NETWORK_TOPICS = new Set(['network-graphs', 'shortest-paths', 'minimum-spanning-trees', 'critical-paths', 'network-flow']);
const MATRIX_TOPICS = new Set(['matrix-addition', 'matrix-subtraction', 'matrix-multiplication', 'matrix-inverse']);

const SECONDARY_EXCLUDED_TOPICS = new Set([
  'number-bonds', 'mental-maths', 'analogue-clocks', 'coin-note-recognition', 'visual-measurement', 'chance-experiments',
  'multiplication-groups', 'multiplication-strategies', 'division-strategies', 'fact-families', 'times-tables',
  'writing-numbers-sequence', 'writing-numbers-random', 'identifying-numbers', 'odd-even',
]);

const FRACTION_TOPICS = new Set([
  'recognising-fractions',
  'comparing-fractions',
  'equivalent-fractions',
  'simplifying-fractions',
  'mixed-fractions',
  'improper-fractions',
  'add-fractions',
  'subtract-fractions',
  'multiply-fractions',
  'divide-fractions',
]);

const DENOMINATOR_MODE_TOPICS = new Set([
  'add-fractions',
  'subtract-fractions',
  'multiply-fractions',
  'divide-fractions',
]);

const DECIMAL_TOPICS = new Set([
  'decimal-place-value',
  'decimal-operations',
]);

const PERCENTAGE_TOPICS = new Set([
  'percentage-of-amount',
  'fraction-decimal-percentage',
  'percentage-increase',
  'percentage-decrease',
  'percentage-to-decimal',
]);

const GEOMETRY_TOPICS = new Set([
  '2d-shapes',
  '3d-shapes',
  'angles',
  'symmetry',
  'position-direction',
  'coordinates',
  'plot-cartesian-plane',
  'transformations',
  'congruence',
  'similarity',
  'circle-geometry',
  'geometric-reasoning',
  'proof',
  'pythagoras',
]);

const ALGEBRA_TOPICS = new Set([
  'patterns',
  'variables',
  'expressions',
  'substitution',
  'expanding-expressions',
  'factorisation',
  'linear-equations',
  'simultaneous-equations',
  'inequalities',
  'polynomials',
  'functions',
  'exponential-functions',
  'logarithmic-functions',
  'quadratics',
  'calculus',
  'vectors',
  'matrices',
  'sequences',
  'recurrence-relations',
]);

const MEASUREMENT_TOPICS = new Set([
  'length',
  'area',
  'perimeter',
  'volume',
  'surface-area',
  'capacity',
  'mass',
  'time',
  'calendars',
  'temperature',
  'unit-conversions',
  'scale-drawings',
]);

const TRIGONOMETRY_TOPICS = new Set([
  'right-angle-trigonometry',
  'sine-rule',
  'cosine-rule',
  'bearings',
  'applications-of-trigonometry',
]);
const MONEY_TOPICS = new Set([
  'making-change',
  'adding-money',
  'money-word-problems',
  'saving-money',
  'budgeting',
  'best-buy',
  'financial-mathematics',
]);
const RATIO_TOPICS = new Set([
  'writing-ratios',
  'equivalent-ratios',
  'dividing-in-a-ratio',
  'proportion',
]);
const STATISTICS_TOPICS = new Set([
  'collecting-data',
  'tables',
  'picture-graphs',
  'bar-graphs',
  'graphs',
  'mean',
  'median',
  'mode',
  'range',
  'interquartile-range',
  'standard-deviation',
  'data-analysis',
  'regression',
  'chance-language',
  'simple-probability',
  'advanced-probability',
  'stem-and-leaf',
  'histograms',
  'dot-plots',
  'scatter-plots',
  'frequency-distributions',
  'draw-charts',
  'distributions',
]);

let allPages    = [];
let currentPage = 0;
let lastGeneratedQuestions = [];
let titleTouched = false;
let isPrintPreviewActive = false;
let pageBeforePrint = 0;
let lastRenderedTitle = '';
let isFullscreenFallbackActive = false;
let scrollPositionBeforeFullscreen = 0;
let previewZoom = DEFAULT_PREVIEW_ZOOM;
let isPreviewPinching = false;
let previewPinchStartDistance = 0;
let previewPinchStartZoom = DEFAULT_PREVIEW_ZOOM;
let isPreviewDragging = false;
let previewDragStartX = 0;
let previewDragStartY = 0;
let previewDragStartScrollLeft = 0;
let previewDragStartScrollTop = 0;

moduleSelect.addEventListener('change', () => {
  populateTopics();
  updateTopicControls();
  updateTitleInput();
});

moduleTopicSearch.addEventListener('input', updateModuleTopicSearchResults);
moduleTopicSearchResults.addEventListener('change', applyModuleTopicSearchResult);
moduleTopicSearchToggle.addEventListener('click', toggleModuleTopicSearch);
moduleTopicSearchBackdrop.addEventListener('click', closeModuleTopicSearch);
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && examDisclaimerEditor.style.display !== 'none') {
    closeExamDisclaimerEditor();
    return;
  }

  if (event.key === 'Escape' && moduleTopicSearchPopup.style.display !== 'none') {
    closeModuleTopicSearch();
  }
});

function toggleModuleTopicSearch() {
  const isOpen = moduleTopicSearchPopup.style.display !== 'none';
  if (isOpen) {
    closeModuleTopicSearch();
    return;
  }

  moduleTopicSearchPopup.style.display = 'block';
  moduleTopicSearchBackdrop.style.display = 'block';
  moduleTopicSearchToggle.setAttribute('aria-expanded', 'true');
  moduleTopicSearch.focus();
}

function closeModuleTopicSearch() {
  moduleTopicSearchPopup.style.display = 'none';
  moduleTopicSearchBackdrop.style.display = 'none';
  moduleTopicSearchToggle.setAttribute('aria-expanded', 'false');
  moduleTopicSearch.value = '';
  moduleTopicSearchResults.innerHTML = '';
  moduleTopicSearchResults.style.display = 'none';
}

yearLevelSelect.addEventListener('change', () => {
  populateModulesForYearLevel();
  populateTopics();
  updateTopicControls();
  updateTitleInput(true);
});

topicSelect.addEventListener('change', () => {
  updateTopicControls();
  updateTitleInput();
});

pythagorasModeSelect.addEventListener('change', updateTitleInput);
patternModeSelect.addEventListener('change', updateTitleInput);
termCountSelect.addEventListener('change', updateTitleInput);

titleInput.addEventListener('input', () => {
  titleTouched = titleInput.value.trim() !== defaultTitleSuffix();
});

denominatorSelect.addEventListener('change', () => {
  updateTitleInput();
});

function updateCoverPageTitleVisibility() {
  if (examCheckbox.checked) {
    coverPageCheckbox.checked = true;
  }
  coverPageTitleGroup.style.display = coverPageCheckbox.checked || examCheckbox.checked ? 'block' : 'none';
  examDisclaimerEditBtn.disabled = !examCheckbox.checked;
  if (!examCheckbox.checked) {
    examDisclaimerEditor.style.display = 'none';
  }
}

coverPageCheckbox.addEventListener('change', updateCoverPageTitleVisibility);
examCheckbox.addEventListener('change', updateCoverPageTitleVisibility);
examDisclaimerEditBtn.addEventListener('click', () => {
  const isOpen = examDisclaimerEditor.style.display !== 'none';
  examDisclaimerEditor.style.display = isOpen ? 'none' : 'block';
  examEditorBackdrop.style.display = isOpen ? 'none' : 'block';
  if (!isOpen) {
    updateExamDisclaimerLivePreview();
    examInfoBox.focus();
  }
});

examEditorBackdrop.addEventListener('click', closeExamDisclaimerEditor);
function closeExamDisclaimerEditor() {
  examDisclaimerEditor.style.display = 'none';
  examEditorBackdrop.style.display = 'none';
}

function updateExamEditorFields() {
  updateExamDisclaimerLivePreview();
}

function updateExamDisclaimerLivePreview() {
  examDisclaimerLivePreview.innerHTML = buildExamDisclaimerHTML();
  if (lastGeneratedQuestions.length > 0 && examCheckbox.checked) {
    renderWorksheetPages(lastGeneratedQuestions);
  }
}

function getExamDisclaimerPresets() {
  try {
    return JSON.parse(localStorage.getItem(EXAM_DISCLAIMER_PRESETS_KEY) || '{}');
  } catch (error) {
    return {};
  }
}

function renderExamDisclaimerPresets(selectedName = '') {
  const presets = getExamDisclaimerPresets();
  const allPresets = { ...BUILT_IN_EXAM_DISCLAIMERS, ...presets };
  examDisclaimerPreset.innerHTML = '<option value="">Saved disclaimers</option>'
    + Object.keys(allPresets).sort().map((name) => `<option value="${escapeHtml(name)}">${escapeHtml(name)}</option>`).join('');
  examDisclaimerPreset.value = selectedName;
  const hasSelection = Boolean(examDisclaimerPreset.value);
  examLoadPresetBtn.disabled = !hasSelection;
  examDeletePresetBtn.disabled = !hasSelection;
}

function readExamDisclaimerPreset() {
  return { info: examInfoBox.innerHTML, instructions: examInstructionsBox.innerHTML };
}

function applyExamDisclaimerPreset(preset) {
  examInfoBox.innerHTML = preset.info || '<strong>Reading Time:</strong> 5 minutes<br><strong>Writing Time:</strong> 55 minutes<br><strong>Total Time:</strong> 60 minutes<br><strong>Total Marks:</strong> ______';
  examInstructionsBox.innerHTML = preset.instructions || '<ul><li>Read all questions carefully during the reading time.</li><li>Do not write in the examination booklet during reading time.</li><li>Answer all questions.</li><li>Show all working where appropriate.</li><li>Write clearly in the spaces provided.</li><li>If you make a mistake, rule through it neatly.</li></ul><strong>Permitted Materials</strong><ul><li>Pens (blue or black)</li><li>Pencil</li><li>Eraser</li><li>Ruler</li></ul><strong>Prohibited Materials</strong><ul><li>Mobile phones</li><li>Smart watches</li><li>Notes or textbooks</li><li>Calculators</li></ul>';
  updateExamEditorFields();
}

document.querySelectorAll('.exam-format-button').forEach((button) => {
  button.addEventListener('mousedown', (event) => event.preventDefault());
  button.addEventListener('click', () => {
    const targetBox = document.getElementById(button.dataset.target);
    if (targetBox) {
      targetBox.focus();
      document.execCommand(button.dataset.command, false);
      updateExamDisclaimerLivePreview();
    }
  });
});

examInfoBox.addEventListener('input', updateExamDisclaimerLivePreview);
examInstructionsBox.addEventListener('input', updateExamDisclaimerLivePreview);
examDisclaimerPreset.addEventListener('change', () => {
  const hasSelection = Boolean(examDisclaimerPreset.value);
  examLoadPresetBtn.disabled = !hasSelection;
  examDeletePresetBtn.disabled = !hasSelection;
});
examLoadPresetBtn.addEventListener('click', () => {
  const preset = { ...BUILT_IN_EXAM_DISCLAIMERS, ...getExamDisclaimerPresets() }[examDisclaimerPreset.value];
  if (preset) applyExamDisclaimerPreset(preset);
});
examDeletePresetBtn.addEventListener('click', () => {
  const name = examDisclaimerPreset.value;
  if (!name || BUILT_IN_EXAM_DISCLAIMERS[name]) return;
  const presets = getExamDisclaimerPresets();
  delete presets[name];
  localStorage.setItem(EXAM_DISCLAIMER_PRESETS_KEY, JSON.stringify(presets));
  renderExamDisclaimerPresets();
});
examSavePresetBtn.addEventListener('click', () => {
  const name = examPresetName.value.trim();
  if (!name || BUILT_IN_EXAM_DISCLAIMERS[name]) return;
  const presets = getExamDisclaimerPresets();
  presets[name] = readExamDisclaimerPreset();
  localStorage.setItem(EXAM_DISCLAIMER_PRESETS_KEY, JSON.stringify(presets));
  examPresetName.value = '';
  renderExamDisclaimerPresets(name);
});
updateExamEditorFields();
renderExamDisclaimerPresets();

const DEFAULT_LOGO_SRC = 'assets/logo/edgeducate-logo.png';
let customLogoDataUrl = null;

function getActiveLogoSrc() {
  return whiteLabelCheckbox.checked && customLogoDataUrl ? customLogoDataUrl : DEFAULT_LOGO_SRC;
}

function updateLiveLogos() {
  const logoSrc = getActiveLogoSrc();
  headerLogoImg.src = logoSrc;
  controlsLogoImg.src = logoSrc;

  if (whiteLabelCheckbox.checked && customLogoDataUrl) {
    whiteLabelLogoPreview.src = customLogoDataUrl;
    whiteLabelLogoPreview.style.display = 'block';
  } else {
    whiteLabelLogoPreview.removeAttribute('src');
    whiteLabelLogoPreview.style.display = 'none';
  }

  if (lastGeneratedQuestions.length > 0) {
    renderWorksheetPages(lastGeneratedQuestions);
  }

  if (formulaModalOverlay.style.display !== 'none') {
    renderFormulaLookupPreview();
  }
}

whiteLabelCheckbox.addEventListener('change', () => {
  whiteLabelUploadGroup.style.display = whiteLabelCheckbox.checked ? 'block' : 'none';
  if (!whiteLabelCheckbox.checked) {
    customLogoDataUrl = null;
  }
  updateLiveLogos();
});

whiteLabelLogoInput.addEventListener('change', () => {
  const file = whiteLabelLogoInput.files && whiteLabelLogoInput.files[0];
  if (!file) {
    return;
  }

  const reader = new FileReader();
  reader.onload = () => {
    customLogoDataUrl = reader.result;
    updateLiveLogos();
  };
  reader.readAsDataURL(file);
});

function ensureTrigonometryModuleOption() {
  if (!moduleSelect || moduleSelect.querySelector('option[value="trigonometry"]')) {
    return;
  }

  const option = document.createElement('option');
  option.value = 'trigonometry';
  option.textContent = 'Trigonometry';
  moduleSelect.appendChild(option);
}

function populateTopicsFor(moduleEl, topicEl) {
  let topics = MODULE_TOPICS[moduleEl.value] || [];
  if (moduleEl === moduleSelect) {
    const allowedTopics = PRIMARY_TOPIC_LIMITS[yearLevelSelect.value === 'primary' ? moduleEl.value : ''];
    if (allowedTopics) {
      topics = topics.filter((topic) => allowedTopics.has(topic.value));
    }
    if (yearLevelSelect.value === 'secondary') {
      topics = topics.filter((topic) => !SECONDARY_EXCLUDED_TOPICS.has(topic.value));
    }
    if (yearLevelSelect.value === 'general-mathematics') {
      topics = topics.filter((topic) => GENERAL_MATHEMATICS_TOPIC_LIMITS[moduleEl.value]?.has(topic.value));
    }
  }
  topics = topics.slice().sort((firstTopic, secondTopic) => firstTopic.label.localeCompare(secondTopic.label));
  topicEl.innerHTML = topics
    .map((topic) => `<option value="${topic.value}">${topic.label}</option>`)
    .join('');
}

function populateTopics() {
  populateTopicsFor(moduleSelect, topicSelect);
}

function populateModulesForYearLevel() {
  const availableModules = MODULES_BY_YEAR_LEVEL[yearLevelSelect.value] || MODULES_BY_YEAR_LEVEL.primary;
  const currentModule = moduleSelect.value;
  Array.from(moduleSelect.options).forEach((option) => {
    option.hidden = !availableModules.has(option.value);
  });

  if (!availableModules.has(currentModule)) {
    const firstAvailableOption = Array.from(moduleSelect.options).find((option) => availableModules.has(option.value));
    moduleSelect.value = firstAvailableOption ? firstAvailableOption.value : '';
  }
}

function getAvailableModuleTopicSearchResults() {
  const results = [];

  [
    { value: 'primary', label: 'Primary' },
    { value: 'secondary', label: 'Secondary' },
    { value: 'general-mathematics', label: 'General Mathematics - Units 1 & 2' },
  ].forEach((yearLevel) => {
    results.push({ yearLevel: yearLevel.value, module: '', topic: '', label: `Year Level > ${yearLevel.label}`, searchText: yearLevel.label });
    const availableModules = MODULES_BY_YEAR_LEVEL[yearLevel.value] || MODULES_BY_YEAR_LEVEL.primary;

    Array.from(moduleSelect.options)
      .filter((option) => availableModules.has(option.value))
      .forEach((moduleOption) => {
        const moduleValue = moduleOption.value;
        const moduleName = moduleOption.textContent;
        const yearName = yearLevel.label;
        results.push({ yearLevel: yearLevel.value, module: moduleValue, topic: '', label: `${yearName} > ${moduleName}`, searchText: `${yearName} ${moduleName}` });

        const allowedTopics = PRIMARY_TOPIC_LIMITS[yearLevel.value === 'primary' ? moduleValue : ''];
        const generalTopics = GENERAL_MATHEMATICS_TOPIC_LIMITS[moduleValue];
        const topics = allowedTopics
          ? (MODULE_TOPICS[moduleValue] || []).filter((topic) => allowedTopics.has(topic.value))
          : generalTopics
            ? (MODULE_TOPICS[moduleValue] || []).filter((topic) => generalTopics.has(topic.value))
            : (MODULE_TOPICS[moduleValue] || []);
        topics.forEach((topic) => {
          results.push({
            yearLevel: yearLevel.value,
            module: moduleValue,
            topic: topic.value,
            label: `${yearName} > ${moduleName} > ${topic.label}`,
            searchText: `${yearName} ${moduleName} ${topic.label}`,
          });
        });
      });
  });

  return results;
}

function updateModuleTopicSearchResults() {
  const query = moduleTopicSearch.value.trim().toLowerCase();
  if (!query) {
    moduleTopicSearchResults.innerHTML = '';
    moduleTopicSearchResults.style.display = 'none';
    return;
  }

  const matches = getAvailableModuleTopicSearchResults()
    .filter((result) => result.searchText.toLowerCase().includes(query));
  moduleTopicSearchResults.innerHTML = matches
    .map((result, index) => `<option value="${index}">${escapeHtml(result.label)}</option>`)
    .join('');
  moduleTopicSearchResults._searchResults = matches;
  moduleTopicSearchResults.style.display = matches.length > 0 ? 'block' : 'none';
}

function applyModuleTopicSearchResult() {
  const result = moduleTopicSearchResults._searchResults?.[Number(moduleTopicSearchResults.value)];
  if (!result) {
    return;
  }

  if (result.yearLevel) {
    yearLevelSelect.value = result.yearLevel;
    populateModulesForYearLevel();
  }

  if (!result.module) {
    populateTopics();
    updateTopicControls();
    updateTitleInput(true);
    moduleTopicSearch.value = '';
    moduleTopicSearchResults.innerHTML = '';
    moduleTopicSearchResults.style.display = 'none';
    closeModuleTopicSearch();
    return;
  }

  moduleSelect.value = result.module;
  populateTopics();
  if (result.topic) {
    topicSelect.value = result.topic;
  }
  updateTopicControls();
  updateTitleInput(true);
  moduleTopicSearch.value = '';
  moduleTopicSearchResults.innerHTML = '';
  moduleTopicSearchResults.style.display = 'none';
  closeModuleTopicSearch();
}

// Show/hide controls based on topic
function updateTopicControlsFor(topicEl, timesTableGroupEl, rangeRowEl, denominatorGroupEl, denominatorSelectEl) {
  const topic = topicEl.value;
  const isTimesTable = topic === 'times-tables';
  const isMagicSquare = topic === 'magic-squares';
  const isSudoku = topic === 'sudoku';
  const hasDenominatorMode = DENOMINATOR_MODE_TOPICS.has(topic);
  const magicSquareGroup = topicEl === topicSelect ? magicSquareSizeGroup : bulkMagicSquareSizeGroup;

  timesTableGroupEl.style.display = isTimesTable ? 'block' : 'none';
  rangeRowEl.style.display        = isTimesTable || isMagicSquare || isSudoku ? 'none' : 'flex';
  denominatorGroupEl.style.display = hasDenominatorMode ? 'block' : 'none';
  magicSquareGroup.style.display = isMagicSquare ? 'block' : 'none';

  if (hasDenominatorMode) {
    denominatorSelectEl.value = getDefaultDenominatorMode(topic, denominatorSelectEl.value);
  }
}

function updateTopicControls() {
  updateTopicControlsFor(topicSelect, timesTableGroup, rangeRow, denominatorGroup, denominatorSelect);
  pythagorasModeGroup.style.display = topicSelect.value === 'pythagoras' ? 'block' : 'none';
  patternModeGroup.style.display = topicSelect.value === 'patterns' ? 'block' : 'none';
  termCountGroup.style.display = ['addition', 'subtraction', 'mixed'].includes(topicSelect.value) ? 'block' : 'none';
  mixedQuestionsPerPageGroup.style.display = topicSelect.value === 'mixed' ? 'block' : 'none';
  roundingPlaceGroup.style.display = topicSelect.value === 'rounding-estimation' ? 'block' : 'none';
  graphQuestionsPerPageGroup.style.display = ['linear-graphs', 'gradient', 'box-plots', 'cumulative-frequency', 'stem-and-leaf', 'histograms', 'dot-plots', 'scatter-plots', 'frequency-distributions', 'draw-charts', 'distributions'].includes(topicSelect.value) ? 'block' : 'none';
}

function updateTitleInput(force = false) {
  if (!titleTouched || force) {
    titleInput.value = defaultTitleSuffix();
    titleTouched = false;
  }
}

function defaultTitleSuffix() {
  return buildDefaultTitle(
    moduleSelect.value,
    topicSelect.value,
    parseInt(document.getElementById('timesTable').value, 10)
  );
}

function buildDefaultTitle(module, topic, timesTable) {
  const defaultTopicTitle = topicLabel(topic, timesTable).replace(/ Practice$/, '');
  return `${moduleLabel(module)} - ${defaultTopicTitle}`;
}

ensureTrigonometryModuleOption();
populateModulesForYearLevel();
populateTopics();
updateTopicControls();
updateTitleInput(true);

populateTopicsFor(bulkModuleSelect, bulkTopicSelect);
updateTopicControlsFor(bulkTopicSelect, bulkTimesTableGroup, bulkRangeRow, bulkDenominatorGroup, bulkDenominatorSelect);
updateBulkPrimaryControlVisibility();

bulkModuleSelect.addEventListener('change', () => {
  populateTopicsFor(bulkModuleSelect, bulkTopicSelect);
  updateTopicControlsFor(bulkTopicSelect, bulkTimesTableGroup, bulkRangeRow, bulkDenominatorGroup, bulkDenominatorSelect);
});
bulkTopicSelect.addEventListener('change', () => {
  updateTopicControlsFor(bulkTopicSelect, bulkTimesTableGroup, bulkRangeRow, bulkDenominatorGroup, bulkDenominatorSelect);
  updateBulkPrimaryControlVisibility();
});

function updateBulkPrimaryControlVisibility() {
  const topic = bulkTopicSelect.value;
  bulkTermCountGroup.style.display = ['addition', 'subtraction', 'mixed'].includes(topic) ? 'block' : 'none';
  bulkRoundingPlaceGroup.style.display = topic === 'rounding-estimation' ? 'block' : 'none';
  bulkMixedQuestionsPerPageGroup.style.display = topic === 'mixed' ? 'block' : 'none';
  bulkGraphQuestionsPerPageGroup.style.display = ['plot-cartesian-plane', 'linear-graphs', 'gradient', 'box-plots', 'cumulative-frequency', 'stem-and-leaf', 'histograms', 'dot-plots', 'scatter-plots', 'frequency-distributions', 'draw-charts', 'distributions'].includes(topic) ? 'block' : 'none';
}

generateBtn.addEventListener('click', generateWorksheet);
refreshBtn.addEventListener('click', refreshWorksheet);
printBtn.addEventListener('click', () => {
  if (allPages.length === 0) {
    return;
  }

  document.title = buildPrintableFileName();
  window.print();
});
prevBtn.addEventListener('click', () => showPage(currentPage - 1));
nextBtn.addEventListener('click', () => showPage(currentPage + 1));
pageNumberInput.addEventListener('change', goToTypedPage);
pageNumberInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    goToTypedPage();
  }
});
solutionsJumpBtn.addEventListener('click', jumpToSolutions);
fullscreenBtn.addEventListener('click', toggleFullscreenMode);
zoomOutBtn.addEventListener('click', () => changePreviewZoom(-PREVIEW_ZOOM_STEP));
zoomResetBtn.addEventListener('click', resetPreviewZoom);
zoomInBtn.addEventListener('click', () => changePreviewZoom(PREVIEW_ZOOM_STEP));
preview.addEventListener('wheel', handlePreviewWheel, { passive: false });
preview.addEventListener('pointerdown', handlePreviewPointerDown);
preview.addEventListener('pointermove', handlePreviewPointerMove);
preview.addEventListener('pointerup', handlePreviewPointerUp);
preview.addEventListener('pointercancel', handlePreviewPointerUp);
preview.addEventListener('lostpointercapture', handlePreviewPointerUp);
preview.addEventListener('touchstart', handlePreviewTouchStart, { passive: false });
preview.addEventListener('touchmove', handlePreviewTouchMove, { passive: false });
preview.addEventListener('touchend', handlePreviewTouchEnd, { passive: true });
preview.addEventListener('touchcancel', handlePreviewTouchEnd, { passive: true });

window.addEventListener('beforeprint', preparePreviewForPrint);
window.addEventListener('afterprint', restorePreviewAfterPrint);
document.addEventListener('fullscreenchange', syncFullscreenUI);
document.addEventListener('webkitfullscreenchange', syncFullscreenUI);

applyPreviewZoom();
syncFullscreenUI();

async function toggleFullscreenMode() {
  const fullscreenElement = getFullscreenElement();

  try {
    if (!fullscreenElement && supportsNativeFullscreen()) {
      await enterNativeFullscreen();
      return;
    }

    if (fullscreenElement) {
      await exitNativeFullscreen();
      return;
    }

    setFullscreenFallbackActive(!isFullscreenFallbackActive);
    syncFullscreenUI();
  } catch (error) {
    setFullscreenFallbackActive(!isFullscreenFallbackActive);
    syncFullscreenUI();
  }
}

function syncFullscreenUI() {
  const hasNativeFullscreen = Boolean(getFullscreenElement());
  const isFullscreen = hasNativeFullscreen || isFullscreenFallbackActive;
  document.body.classList.toggle('is-fullscreen', isFullscreen);
  document.body.classList.toggle('is-fullscreen-fallback', isFullscreenFallbackActive && !hasNativeFullscreen);
  fullscreenBtn.textContent = isFullscreen ? 'Exit Fullscreen' : 'Fullscreen';
  fullscreenBtn.setAttribute('aria-pressed', String(isFullscreen));
}

function setFullscreenFallbackActive(nextValue) {
  const shouldActivate = Boolean(nextValue);
  if (shouldActivate === isFullscreenFallbackActive) {
    return;
  }

  isFullscreenFallbackActive = shouldActivate;

  if (shouldActivate) {
    scrollPositionBeforeFullscreen = window.scrollY || window.pageYOffset || 0;
    document.body.style.top = `-${scrollPositionBeforeFullscreen}px`;
    return;
  }

  document.body.style.top = '';
  window.scrollTo(0, scrollPositionBeforeFullscreen);
}

function changePreviewZoom(delta, anchorPoint = getPreviewViewportCenterAnchor()) {
  setPreviewZoom(previewZoom + delta, anchorPoint);
}

function resetPreviewZoom() {
  setPreviewZoom(DEFAULT_PREVIEW_ZOOM, getPreviewViewportCenterAnchor());
}

function setPreviewZoom(nextZoom, anchorPoint = null) {
  const boundedZoom = Math.max(MIN_PREVIEW_ZOOM, Math.min(MAX_PREVIEW_ZOOM, nextZoom));
  if (boundedZoom === previewZoom) {
    return;
  }

  const previousZoom = previewZoom;
  previewZoom = boundedZoom;
  applyPreviewZoom(previousZoom, anchorPoint);
}

function applyPreviewZoom(previousZoom = previewZoom, anchorPoint = null) {
  preview.style.setProperty('--page-zoom', String(previewZoom / 100));
  zoomResetBtn.textContent = `${previewZoom}%`;
  zoomOutBtn.disabled = previewZoom <= MIN_PREVIEW_ZOOM;
  zoomInBtn.disabled = previewZoom >= MAX_PREVIEW_ZOOM;

  if (anchorPoint) {
    adjustPreviewScrollForZoom(previousZoom, previewZoom, anchorPoint);
  }
}

function adjustPreviewScrollForZoom(previousZoomValue, nextZoomValue, anchorPoint) {
  const previousScale = previousZoomValue / 100;
  const nextScale = nextZoomValue / 100;
  if (previousScale <= 0 || nextScale <= 0) {
    return;
  }

  const anchorX = Math.max(0, Math.min(preview.clientWidth, Number(anchorPoint.x) || 0));
  const anchorY = Math.max(0, Math.min(preview.clientHeight, Number(anchorPoint.y) || 0));

  const contentX = (preview.scrollLeft + anchorX) / previousScale;
  const contentY = (preview.scrollTop + anchorY) / previousScale;

  preview.scrollLeft = (contentX * nextScale) - anchorX;
  preview.scrollTop = (contentY * nextScale) - anchorY;
}

function getPreviewViewportCenterAnchor() {
  return {
    x: preview.clientWidth / 2,
    y: preview.clientHeight / 2,
  };
}

function getPreviewAnchorFromClientPoint(clientX, clientY) {
  const rect = preview.getBoundingClientRect();
  return {
    x: clientX - rect.left,
    y: clientY - rect.top,
  };
}

function handlePreviewWheel(event) {
  if (!isPreviewZoomTouchEnabled()) {
    return;
  }

  const wheelDirection = Math.sign(event.deltaY);
  if (wheelDirection === 0) {
    return;
  }

  const anchor = getPreviewAnchorFromClientPoint(event.clientX, event.clientY);
  changePreviewZoom(wheelDirection < 0 ? PREVIEW_ZOOM_STEP : -PREVIEW_ZOOM_STEP, anchor);
  event.preventDefault();
}

function handlePreviewPointerDown(event) {
  if (!canDragPreview(event)) {
    return;
  }

  isPreviewDragging = true;
  previewDragStartX = event.clientX;
  previewDragStartY = event.clientY;
  previewDragStartScrollLeft = preview.scrollLeft;
  previewDragStartScrollTop = preview.scrollTop;
  preview.classList.add('is-dragging');
  preview.setPointerCapture(event.pointerId);
  event.preventDefault();
}

function handlePreviewPointerMove(event) {
  if (!isPreviewDragging) {
    return;
  }

  const deltaX = event.clientX - previewDragStartX;
  const deltaY = event.clientY - previewDragStartY;
  preview.scrollLeft = previewDragStartScrollLeft - deltaX;
  preview.scrollTop = previewDragStartScrollTop - deltaY;
  event.preventDefault();
}

function handlePreviewPointerUp(event) {
  if (!isPreviewDragging) {
    return;
  }

  isPreviewDragging = false;
  preview.classList.remove('is-dragging');
  if (event.pointerId !== undefined && preview.hasPointerCapture(event.pointerId)) {
    preview.releasePointerCapture(event.pointerId);
  }
}

function canDragPreview(event) {
  if (!isPreviewZoomTouchEnabled() || event.pointerType === 'touch' || event.button !== 0) {
    return false;
  }

  if (event.target instanceof Element && event.target.closest('a, button, input, select, textarea, label')) {
    return false;
  }

  return preview.scrollWidth > preview.clientWidth || preview.scrollHeight > preview.clientHeight;
}

function handlePreviewTouchStart(event) {
  if (!isPreviewPinchGesture(event)) {
    return;
  }

  isPreviewPinching = true;
  previewPinchStartDistance = getTouchDistance(event.touches[0], event.touches[1]);
  previewPinchStartZoom = previewZoom;
  event.preventDefault();
}

function handlePreviewTouchMove(event) {
  if (!isPreviewPinching || !isPreviewPinchGesture(event)) {
    return;
  }

  const nextDistance = getTouchDistance(event.touches[0], event.touches[1]);
  if (previewPinchStartDistance <= 0 || nextDistance <= 0) {
    return;
  }

  const scale = nextDistance / previewPinchStartDistance;
  const anchor = getPreviewAnchorFromClientPoint(
    (event.touches[0].clientX + event.touches[1].clientX) / 2,
    (event.touches[0].clientY + event.touches[1].clientY) / 2
  );
  setPreviewZoom(Math.round(previewPinchStartZoom * scale), anchor);
  event.preventDefault();
}

function handlePreviewTouchEnd(event) {
  if (event.touches.length >= 2) {
    previewPinchStartDistance = getTouchDistance(event.touches[0], event.touches[1]);
    previewPinchStartZoom = previewZoom;
    return;
  }

  isPreviewPinching = false;
  previewPinchStartDistance = 0;
}

function isPreviewPinchGesture(event) {
  return isPreviewZoomTouchEnabled() && event.touches.length >= 2;
}

function isPreviewZoomTouchEnabled() {
  return document.body.classList.contains('is-fullscreen') && allPages.length > 0;
}

function getTouchDistance(firstTouch, secondTouch) {
  const deltaX = secondTouch.clientX - firstTouch.clientX;
  const deltaY = secondTouch.clientY - firstTouch.clientY;
  return Math.hypot(deltaX, deltaY);
}

function syncPreviewToolbar() {
  const hasPages = allPages.length > 0;
  previewToolbar.style.display = hasPages ? '' : 'none';
}

function supportsNativeFullscreen() {
  const root = document.documentElement;
  return Boolean(
    root.requestFullscreen
    || root.webkitRequestFullscreen
    || document.exitFullscreen
    || document.webkitExitFullscreen
  );
}

function getFullscreenElement() {
  return document.fullscreenElement || document.webkitFullscreenElement || null;
}

async function enterNativeFullscreen() {
  const root = document.documentElement;

  if (root.requestFullscreen) {
    await root.requestFullscreen();
    return;
  }

  if (root.webkitRequestFullscreen) {
    await root.webkitRequestFullscreen();
  }
}

async function exitNativeFullscreen() {
  if (document.exitFullscreen) {
    await document.exitFullscreen();
    return;
  }

  if (document.webkitExitFullscreen) {
    await document.webkitExitFullscreen();
  }
}

function generateWorksheet() {
  const module      = moduleSelect.value;
  const topic       = topicSelect.value;
  const minNum      = parseInt(document.getElementById('minNum').value, 10);
  const maxNum      = parseInt(document.getElementById('maxNum').value, 10);
  const numQ        = parseInt(document.getElementById('numQuestions').value, 10);
  const timesTable  = parseInt(document.getElementById('timesTable').value, 10);
  const denominatorMode = denominatorSelect.value;
  const titleSuffix = titleInput.value.trim() || defaultTitleSuffix();
  const title       = titleSuffix;
  const includeSolutions = solutionsCheckbox.checked;

  if (topic !== 'times-tables' && minNum > maxNum) {
    alert('Min Number cannot be greater than Max Number.');
    return;
  }

  const questions = buildQuestions(topic, minNum, maxNum, numQ, timesTable, denominatorMode, parseInt(magicSquareSizeSelect.value, 10), pythagorasModeSelect.value, patternModeSelect.value, parseInt(termCountSelect.value, 10), roundingPlaceSelect.value);
  lastGeneratedQuestions = questions;
  renderWorksheetPages(questions);
}

function refreshWorksheet() {
  if (lastGeneratedQuestions.length === 0) {
    generateWorksheet();
    return;
  }

  renderWorksheetPages(lastGeneratedQuestions);
}

function renderWorksheetPages(questions) {
  const module      = moduleSelect.value;
  const topic       = topicSelect.value;
  const timesTable  = parseInt(document.getElementById('timesTable').value, 10);
  const titleSuffix = titleInput.value.trim() || defaultTitleSuffix();
  const title       = titleSuffix;
  const includeSolutions = solutionsCheckbox.checked;
  const includeFormulaSheet = formulaSheetCheckbox.checked;
  const coverPage = coverPageCheckbox.checked || examCheckbox.checked
    ? { title: coverPageTitleInput.value.trim() || title, exam: examCheckbox.checked }
    : null;

  lastRenderedTitle = title;
  allPages = paginateQuestions(questions, title, module, includeSolutions, topic, timesTable, coverPage, includeFormulaSheet, parseInt(mixedQuestionsPerPageSelect.value, 10), parseInt(graphQuestionsPerPageSelect.value, 10));
  currentPage = 0;
  showPage(0);
  printBtn.disabled = false;
  syncPreviewToolbar();
}

function moduleLabel(module) {
  const map = {
    arithmetic: 'Arithmetic',
    fractions: 'Fractions',
    decimals: 'Decimals',
    percentages: 'Percentages',
    geometry: 'Geometry',
    measurement: 'Measurement',
    statistics: 'Statistics',
    trigonometry: 'Trigonometry',
    algebra: 'Algebra',
    number: 'Number',
    money: 'Money',
    ratio: 'Ratio & Proportion',
    probability: 'Probability',
    matrices: 'Matrices',
    networks: 'Networks',
  };
  return map[module] || 'Mathematics';
}

function topicLabel(topic, timesTable) {
  const map = {
    'multiplication-strategies': 'Multiplication Strategies Practice',
    'division-strategies': 'Division Strategies Practice',
    'multi-step-word-problems': 'Multi-step Word Problems Practice',
    'fact-families': 'Fact Families Practice',
    'number-bonds': 'Number Bonds Practice',
    'mental-maths': 'Mental Maths Strategies Practice',
    'rounding-estimation': 'Rounding and Estimation Practice',
    'fraction-models': 'Visual Fraction Models Practice',
    'fraction-of-quantity': 'Fractions of Quantities Practice',
    'analogue-clocks': 'Analogue Clocks Practice',
    'coin-note-recognition': 'Coins and Notes Practice',
    'visual-measurement': 'Visual Measurement Practice',
    'chance-experiments': 'Chance Experiments Practice',
    'multi-step-linear-equations': 'Multi-step Linear Equations Practice',
    'linear-graphs': 'Linear Graphs Practice',
    gradient: 'Gradient Practice',
    'algebraic-fractions': 'Algebraic Fractions Practice',
    'box-plots': 'Box Plots Practice',
    'cumulative-frequency': 'Cumulative Frequency Practice',
    'network-graphs': 'Network Graphs Practice',
    'shortest-paths': 'Shortest Paths Practice',
    'minimum-spanning-trees': 'Minimum Spanning Trees Practice',
    'critical-paths': 'Critical Path Analysis Practice',
    'network-flow': 'Network Flow and Optimisation Practice',
    'matrix-addition': 'Matrix Addition Practice',
    'matrix-subtraction': 'Matrix Subtraction Practice',
    'matrix-multiplication': 'Matrix Multiplication Practice',
    'matrix-inverse': 'Matrix Inverse Practice',
    'recurrence-relations': 'Recurrence Relations Practice',
    'stem-and-leaf': 'Stem-and-Leaf Plots Practice',
    histograms: 'Histograms Practice',
    'dot-plots': 'Dot Plots Practice',
    'scatter-plots': 'Scatter Plots Practice',
    'frequency-distributions': 'Frequency Distributions Practice',
    'draw-charts': 'Drawing Statistical Charts Practice',
    distributions: 'Data Distributions Practice',
    'measurement-conversions': 'Measurement Conversions Practice',
    'elapsed-time': 'Elapsed Time Practice',
    'shape-properties': '2D & 3D Shape Properties Practice',
    discounts: 'Discounts Practice',
    'data-interpretation': 'Data Interpretation Practice',
    addition: 'Addition Practice',
    subtraction: 'Subtraction Practice',
    multiplication: 'Multiplication Practice',
    'word-problems': 'Word Problems Practice',
    'multiplication-groups': 'Multiplication Groups & Arrays Practice',
    'multiplication-strategies': 'Multiplication Strategies Practice',
    division: 'Division Practice',
    'times-tables': `${timesTable} Times Table`,
    bodmas: 'B.O.D.M.A.S Practice',
    mixed: 'Mixed Operations Practice',
    'whole-numbers': 'Whole Numbers Practice',
    'writing-numbers-sequence': 'Writing Number (Sequence) Practice',
    'writing-numbers-random': 'Writing Number (Random) Practice',
    'identifying-numbers': 'Identifying Numbers Practice',
    'place-value': 'Place Value Practice',
    'odd-even': 'Odd and Even Numbers Practice',
    'comparing-numbers': 'Comparing Numbers Practice',
    'ordering-numbers': 'Ordering Numbers Practice',
    'missing-numbers': 'Missing Numbers Practice',
    'number-sentences': 'Number Sentences Practice',
    equality: 'Understanding Equality Practice',
    factors: 'Factors Practice',
    multiples: 'Multiples Practice',
    'prime-numbers': 'Prime Numbers Practice',
    'composite-numbers': 'Composite Numbers Practice',
    integers: 'Integers Practice',
    indices: 'Indices Practice',
    'scientific-notation': 'Scientific Notation Practice',
    surds: 'Surds Practice',
    'complex-numbers': 'Complex Numbers Practice',
    'magic-squares': 'Magic Squares Practice',
    sudoku: 'Sudoku Practice',
    'making-change': 'Making Change Practice',
    'adding-money': 'Adding Money Practice',
    'money-word-problems': 'Money Word Problems Practice',
    'financial-mathematics': 'Financial Mathematics Practice',
    'saving-money': 'Saving Money Practice',
    budgeting: 'Budgeting Practice',
    'best-buy': 'Best Buy Practice',
    'writing-ratios': 'Writing Ratios Practice',
    'equivalent-ratios': 'Equivalent Ratios Practice',
    'dividing-in-a-ratio': 'Dividing in a Ratio Practice',
    proportion: 'Proportion Practice',
    'recognising-fractions': 'Recognising Fractions Practice',
    'comparing-fractions': 'Comparing Fractions Practice',
    'equivalent-fractions': 'Equivalent Fractions Practice',
    'simplifying-fractions': 'Simplifying Fractions Practice',
    'mixed-fractions': 'Mixed Fractions Practice',
    'improper-fractions': 'Improper Fractions Practice',
    'add-fractions': 'Add Fractions Practice',
    'subtract-fractions': 'Subtract Fractions Practice',
    'multiply-fractions': 'Multiply Fractions Practice',
    'divide-fractions': 'Divide Fractions Practice',
    'decimal-place-value': 'Decimal Place Value Practice',
    'decimal-operations': 'Decimal Operations Practice',
    'percentage-of-amount': 'Percentage of an Amount Practice',
    'fraction-decimal-percentage': 'Fractions, Decimals & Percentages Practice',
    'percentage-increase': 'Percentage Increase Practice',
    'percentage-decrease': 'Percentage Decrease Practice',
    'percentage-to-decimal': 'Percentage to Decimal Practice',
    'collecting-data': 'Collecting Data Practice',
    tables: 'Tables Practice',
    'picture-graphs': 'Picture Graphs Practice',
    'bar-graphs': 'Bar/Column Graphs Practice',
    graphs: 'Graphs Practice',
    mean: 'Mean Practice',
    median: 'Median Practice',
    mode: 'Mode Practice',
    range: 'Range Practice',
    'interquartile-range': 'Interquartile Range Practice',
    'standard-deviation': 'Standard Deviation Practice',
    'data-analysis': 'Data Analysis Practice',
    regression: 'Regression Practice',
    'chance-language': 'Chance Practice',
    'simple-probability': 'Simple Probability Practice',
    'advanced-probability': 'Advanced Probability Practice',
    '2d-shapes': '2D Shapes Practice',
    '3d-shapes': '3D Shapes Practice',
    angles: 'Angles Practice',
    symmetry: 'Symmetry Practice',
    'position-direction': 'Position and Direction Practice',
    coordinates: 'Maps and Coordinates Practice',
    'plot-cartesian-plane': 'Plot on the Cartesian Plane Practice',
    transformations: 'Transformations Practice',
    congruence: 'Congruence Practice',
    similarity: 'Similarity Practice',
    'circle-geometry': 'Circle Geometry Practice',
    'geometric-reasoning': 'Geometric Reasoning Practice',
    proof: 'Proof Practice',
    pythagoras: 'Pythagoras Practice',
    patterns: 'Patterns Practice',
    variables: 'Variables Practice',
    expressions: 'Expressions Practice',
    substitution: 'Substitution Practice',
    'expanding-expressions': 'Expanding Expressions Practice',
    factorisation: 'Factorisation Practice',
    'linear-equations': 'Linear Equations Practice',
    'simultaneous-equations': 'Simultaneous Equations Practice',
    inequalities: 'Inequalities Practice',
    polynomials: 'Polynomials Practice',
    functions: 'Functions Practice',
    'exponential-functions': 'Exponential Functions Practice',
    'logarithmic-functions': 'Logarithmic Functions Practice',
    quadratics: 'Quadratics Practice',
    calculus: 'Calculus Practice',
    vectors: 'Vectors Practice',
    matrices: 'Matrices Practice',
    sequences: 'Sequences Practice',
    length: 'Length Practice',
    area: 'Area Practice',
    perimeter: 'Perimeter Practice',
    volume: 'Volume Practice',
    'surface-area': 'Surface Area Practice',
    capacity: 'Capacity Practice',
    mass: 'Mass Practice',
    time: 'Time Practice',
    calendars: 'Calendars Practice',
    temperature: 'Temperature Practice',
    'unit-conversions': 'Unit Conversions Practice',
    'scale-drawings': 'Scale Drawings Practice',
    'right-angle-trigonometry': 'Right Angle Trigonometry Practice',
    'sine-rule': 'Sine Rule Practice',
    'cosine-rule': 'Cosine Rule Practice',
    bearings: 'Bearings Practice',
    'applications-of-trigonometry': 'Applications of Trigonometry Practice',
  };
  return map[topic] || 'Math Practice';
}

function paginateQuestions(questions, title, module, includeSolutions, topic, timesTable, coverPage, includeFormulaSheet = false, mixedQuestionsPerPage = 6, graphQuestionsPerPage = 2) {
  const pageModels = [];
  const questionsPerPage = getQuestionsPerPage(questions, topic, mixedQuestionsPerPage, graphQuestionsPerPage);
  const worksheetPageCount = Math.ceil(questions.length / questionsPerPage);

  if (coverPage) {
    pageModels.push({ type: 'cover', title: coverPage.title, module, topic, timesTable, exam: coverPage.exam });
  }

  if (includeFormulaSheet || questions[0]?.topic === 'unit-conversions') {
    pageModels.push({ type: 'formula-sheet', title, module, topic });
  }

  for (let p = 0; p < worksheetPageCount; p++) {
    const slice    = questions.slice(p * questionsPerPage, (p + 1) * questionsPerPage);
    const startIdx = p * questionsPerPage;
    pageModels.push({
      type: 'worksheet',
      questions: slice,
      startIdx,
      title,
      module,
      topic,
      timesTable,
    });
  }

  if (includeSolutions) {
    const chartTopics = new Set(['plot-cartesian-plane', 'linear-graphs', 'gradient', 'box-plots', 'cumulative-frequency', 'stem-and-leaf', 'histograms', 'dot-plots', 'scatter-plots', 'frequency-distributions', 'draw-charts', 'distributions']);
    const solutionsPerPage = topic === 'sudoku' ? 1 : chartTopics.has(topic) ? 2 : 20;
    const solutionPageCount = Math.ceil(questions.length / solutionsPerPage);
    for (let p = 0; p < solutionPageCount; p++) {
      const slice = questions.slice(p * solutionsPerPage, (p + 1) * solutionsPerPage);
      const startIdx = p * solutionsPerPage;
      pageModels.push({
        type: 'solutions',
        questions: slice,
        startIdx,
        title,
        module,
      });
    }
  }

  const totalPages = pageModels.length;
  return pageModels.map((pageModel, index) => {
    if (pageModel.type === 'cover') {
      return buildCoverPageHTML(pageModel.title, pageModel.module, pageModel.topic, pageModel.timesTable, index + 1, totalPages, pageModel.exam);
    }

    if (pageModel.type === 'formula-sheet') {
      return buildUnitConversionFormulaSheetHTML(pageModel.title, pageModel.module, pageModel.topic, index + 1, totalPages);
    }

    if (pageModel.type === 'solutions') {
      return buildSolutionsPageHTML(pageModel.questions, pageModel.startIdx, pageModel.title, pageModel.module, index + 1, totalPages);
    }

    return buildPageHTML(
      pageModel.questions,
      pageModel.startIdx,
      pageModel.title,
      pageModel.module,
      index + 1,
      totalPages,
      pageModel.topic,
      pageModel.timesTable
    );
  });
}

function buildCoverPageHTML(title, module, topic, timesTable, pageNum, totalPages, isExam = false) {
  const topicText = topicLabel(topic, timesTable).replace(/ Practice$/, '');

  return `
    <div class="a4-page cover-page">
      <div class="worksheet-header">
        ${buildWorksheetHeaderBrandHTML('', module)}
      </div>
      <div class="cover-page-content">
        <div class="cover-page-kicker">Mathematics Worksheet</div>
        <h1 class="cover-page-title">${escapeHtml(title)}</h1>
        <div class="cover-page-rule" aria-hidden="true"></div>
        ${isExam ? buildExamCoverBoxesHTML() : ''}
        <div class="cover-page-fields">
          ${buildInfoStripBlankItem('user', 'Name', 'name')}
          ${buildInfoStripBlankItem('calendar', 'Date', 'date')}
        </div>
      </div>
      <div class="page-footer">
        <div class="page-footer-left">${buildFooterLegalHTML()}</div>
        <span class="page-footer-right">Page ${pageNum} of ${totalPages}</span>
      </div>
    </div>`;
}

function buildExamCoverBoxesHTML() {
  const infoHTML = sanitizeDisclaimerHTML(examInfoBox.innerHTML);
  const instructionsHTML = sanitizeDisclaimerHTML(examInstructionsBox.innerHTML);
  return `
    <div class="exam-cover-boxes">
      <div class="exam-cover-box exam-info-box">
        <h3>Examination Information</h3>
        ${infoHTML || '<strong>Reading Time:</strong> 5 minutes<br><strong>Writing Time:</strong> 55 minutes<br><strong>Total Time:</strong> 60 minutes<br><strong>Total Marks:</strong> ______'}
      </div>
      <div class="exam-cover-box exam-instructions-box">
        <h3>Instructions</h3>
        ${instructionsHTML || '<ul><li>Read all questions carefully during the reading time.</li><li>Do not write in the examination booklet during reading time.</li><li>Answer all questions.</li><li>Show all working where appropriate.</li><li>Write clearly in the spaces provided.</li><li>If you make a mistake, rule through it neatly.</li></ul><strong>Permitted Materials</strong><ul><li>Pens (blue or black)</li><li>Pencil</li><li>Eraser</li><li>Ruler</li></ul><strong>Prohibited Materials</strong><ul><li>Mobile phones</li><li>Smart watches</li><li>Notes or textbooks</li><li>Calculators</li></ul>'}
      </div>
    </div>`;
}

function buildExamDisclaimerHTML() {
  const infoHTML = sanitizeDisclaimerHTML(examInfoBox.innerHTML);
  const instructionsHTML = sanitizeDisclaimerHTML(examInstructionsBox.innerHTML);
  return `
    <div class="exam-cover-boxes">
      <div class="exam-cover-box exam-info-box">
        <h3>Examination Information</h3>
        ${infoHTML || '<strong>Reading Time:</strong> 5 minutes<br><strong>Writing Time:</strong> 55 minutes<br><strong>Total Time:</strong> 60 minutes<br><strong>Total Marks:</strong> ______'}
      </div>
      <div class="exam-cover-box exam-instructions-box">
        <h3>Instructions</h3>
        ${instructionsHTML || '<ul><li>Read all questions carefully during the reading time.</li><li>Do not write in the examination booklet during reading time.</li><li>Answer all questions.</li><li>Show all working where appropriate.</li><li>Write clearly in the spaces provided.</li><li>If you make a mistake, rule through it neatly.</li></ul><strong>Permitted Materials</strong><ul><li>Pens (blue or black)</li><li>Pencil</li><li>Eraser</li><li>Ruler</li></ul><strong>Prohibited Materials</strong><ul><li>Mobile phones</li><li>Smart watches</li><li>Notes or textbooks</li><li>Calculators</li></ul>'}
      </div>
    </div>`;
}

function sanitizeDisclaimerHTML(html) {
  const container = document.createElement('div');
  container.innerHTML = html;
  const allowedTags = new Set(['P', 'BR', 'UL', 'OL', 'LI', 'STRONG', 'B', 'EM', 'I']);
  container.querySelectorAll('*').forEach((element) => {
    if (!allowedTags.has(element.tagName)) {
      element.replaceWith(...Array.from(element.childNodes));
      return;
    }
    Array.from(element.attributes).forEach((attribute) => element.removeAttribute(attribute.name));
  });
  return container.innerHTML.trim();
}

function buildUnitConversionFormulaSheetHTML(title, module, topic, pageNum, totalPages) {
  const conversionGroups = [
    {
      heading: 'Length',
      rules: ['km → m: multiply by 1,000', 'm → km: divide by 1,000', 'm → cm: multiply by 100', 'cm → m: divide by 100', 'cm → mm: multiply by 10', 'mm → cm: divide by 10'],
    },
    {
      heading: 'Mass',
      rules: ['tonnes → kg: multiply by 1,000', 'kg → tonnes: divide by 1,000', 'kg → g: multiply by 1,000', 'g → kg: divide by 1,000', 'g → mg: multiply by 1,000', 'mg → g: divide by 1,000'],
    },
    {
      heading: 'Capacity',
      rules: ['L → mL: multiply by 1,000', 'mL → L: divide by 1,000', 'mL → cm³: multiply by 1', 'cm³ → mL: multiply by 1'],
    },
    {
      heading: 'Time',
      rules: ['hours → minutes: multiply by 60', 'minutes → hours: divide by 60', 'minutes → seconds: multiply by 60', 'seconds → minutes: divide by 60', 'days → hours: multiply by 24', 'hours → days: divide by 24'],
    },
  ];

  const formulaGroups = getTopicFormulaGroups(module, topic, conversionGroups);

  const groupsHTML = formulaGroups.map((group) => `
    <section class="conversion-formula-group">
      <h3>${group.heading}</h3>
      <ul>${group.rules.map((rule) => `<li>${rule}</li>`).join('')}</ul>
    </section>`).join('');

  return `
    <div class="a4-page conversion-formula-page">
      <div class="worksheet-header">
        ${buildWorksheetHeaderBrandHTML(title, module)}
        <div class="worksheet-info-strip">
          ${buildInfoStripItem('book', 'Module', moduleLabel(module))}
          ${buildInfoStripItem('clipboard', 'Topic', topicLabel(topic).replace(/ Practice$/, ''))}
          ${buildInfoStripBlankItem('calendar', 'Date', 'date')}
        </div>
      </div>
      <div class="conversion-formula-content">
        <h2>${escapeHtml(moduleLabel(module))} Formula Sheet</h2>
        <div class="conversion-formula-grid">${groupsHTML}</div>
      </div>
      <div class="page-footer">
        <div class="page-footer-left">${buildFooterLegalHTML()}</div>
        <span class="page-footer-right">Page ${pageNum} of ${totalPages}</span>
      </div>
    </div>`;
}

function getQuestionsPerPage(questions, topic = '', mixedQuestionsPerPage = 6, graphQuestionsPerPage = 2) {
  const multiplicationOnly = questions.length > 0 && questions.every((question) => question.operation === 'multiplication');
  const bodmasOnly = questions.length > 0 && questions.every((question) => question.operation === 'bodmas');
  const numberOnly = questions.length > 0 && questions.every((question) => question.kind === 'number');
  const magicSquareOnly = questions.length > 0 && questions.every((question) => question.kind === 'magic-square');
  const sudokuOnly = questions.length > 0 && questions.every((question) => question.kind === 'sudoku');
  const numberWritingOnly = questions.length > 0 && questions.every((question) => question.kind === 'number-writing');
  const fractionOnly = questions.length > 0 && questions.every((question) => question.kind === 'fraction');
  const visualOnly = questions.length > 0 && questions.every((question) => usesLargeVisualLayout(question));
  const hasDoubleDigitByDoubleDigit = questions.some((question) => question.a >= 10 && question.b >= 10);

  if (sudokuOnly) {
    return 1;
  }

  if (topic === 'mixed') {
    return [4, 6].includes(mixedQuestionsPerPage) ? mixedQuestionsPerPage : 6;
  }

  if (topic === 'plot-cartesian-plane') {
    return 1;
  }

  if (['plot-cartesian-plane', 'linear-graphs', 'gradient', 'box-plots', 'cumulative-frequency', 'stem-and-leaf', 'histograms', 'dot-plots', 'scatter-plots', 'frequency-distributions', 'draw-charts', 'distributions'].includes(topic)) {
    return [2, 4].includes(graphQuestionsPerPage) ? graphQuestionsPerPage : 2;
  }

  if (questions.some((question) => Array.isArray(question.numbers) && question.numbers.length > 2)) {
    return 6;
  }

  if (numberWritingOnly) {
    return 6;
  }

  if (visualOnly) {
    return 4;
  }

  if (magicSquareOnly) {
    return 4;
  }

  if (bodmasOnly) {
    return 8;
  }

  if (numberOnly) {
    return 8;
  }

  if (fractionOnly) {
    return 8;
  }

  if (multiplicationOnly && hasDoubleDigitByDoubleDigit) {
    return 6;
  }

  return 10;
}

function usesLargeVisualLayout(question) {
  if (!question || typeof question !== 'object') {
    return false;
  }

  if (question.visual || question.chart) {
    return true;
  }

  if (question.kind === 'trigonometry') {
    return true;
  }

  if (question.kind === 'magic-square') {
    return true;
  }

  if (question.kind === 'number-writing') {
    return true;
  }

  if (question.kind === 'geometry') {
    return question.topic === '2d-shapes'
      || question.topic === '3d-shapes'
      || question.topic === 'circle-geometry'
      || question.topic === 'pythagoras';
  }

  if (question.kind === 'measurement') {
    return question.topic === 'area'
      || question.topic === 'perimeter'
      || question.topic === 'volume'
      || question.topic === 'surface-area';
  }

  if (question.kind === 'statistics') {
    return question.topic === 'graphs' || question.topic === 'regression';
  }

  return Boolean(question.shape || question.plot || question.diagram);
}

function showPage(index) {
  if (index < 0 || index >= allPages.length) return;
  currentPage = index;
  preview.innerHTML = allPages[index];

  const total = allPages.length;
  pageNumberInput.value = index + 1;
  pageNumberInput.max = total;
  pageTotal.textContent = total;
  prevBtn.disabled = index === 0;
  nextBtn.disabled = index === total - 1;
  pagination.style.display = total > 1 ? 'flex' : 'none';
  const solutionsPageIndex = allPages.findIndex((page) => page.includes('solutions-page'));
  solutionsJumpBtn.style.display = solutionsPageIndex >= 0 ? 'inline-flex' : 'none';
  solutionsJumpBtn.disabled = currentPage === solutionsPageIndex;
  syncPreviewToolbar();
}

function goToTypedPage() {
  const requestedPage = Number.parseInt(pageNumberInput.value, 10);
  if (!Number.isFinite(requestedPage)) {
    pageNumberInput.value = currentPage + 1;
    return;
  }
  showPage(Math.max(0, Math.min(allPages.length - 1, requestedPage - 1)));
}

function jumpToSolutions() {
  const solutionsPageIndex = allPages.findIndex((page) => page.includes('solutions-page'));
  if (solutionsPageIndex >= 0) {
    showPage(solutionsPageIndex);
  }
}

function preparePreviewForPrint() {
  if (allPages.length === 0 || isPrintPreviewActive) {
    return;
  }

  pageBeforePrint = currentPage;
  preview.innerHTML = allPages.join('');
  pagination.style.display = 'none';
  isPrintPreviewActive = true;
}

function restorePreviewAfterPrint() {
  if (!isPrintPreviewActive) {
    return;
  }

  isPrintPreviewActive = false;
  document.title = initialDocumentTitle;
  showPage(pageBeforePrint);
}

function buildPrintableFileName() {
  const baseTitle = sanitizeFileNamePart(lastRenderedTitle || titleInput.value.trim() || defaultTitleSuffix());
  const now = new Date();
  const timestamp = [
    now.getFullYear(),
    String(now.getMonth() + 1).padStart(2, '0'),
    String(now.getDate()).padStart(2, '0'),
  ].join('') + '_'
    + [
      String(now.getHours()).padStart(2, '0'),
      String(now.getMinutes()).padStart(2, '0'),
      String(now.getSeconds()).padStart(2, '0'),
    ].join('');

  return `${baseTitle}_${timestamp}`;
}

function sanitizeFileNamePart(value) {
  return String(value)
    .trim()
    .replace(/[\\/:*?"<>|]+/g, '')
    .replace(/\s+/g, '_')
    .replace(/_+/g, '_')
    .replace(/^_+|_+$/g, '') || 'worksheet';
}

function buildPageHTML(questions, startIdx, title, module, pageNum, totalPages, topic, timesTable) {
  const opSymbol = { addition: '+', subtraction: '−', multiplication: '×', division: '÷' };
  const pageTopic = questions[0]?.topic;
  const pageInstruction = getPageInstruction(pageTopic);

  const cols = 2;
  const rows = Math.ceil(questions.length / cols);
  let html = `<div class="a4-page" style="--q-rows:${rows}">`;

  // Header
  html += `<div class="worksheet-header">`;
  html += buildWorksheetHeaderBrandHTML(title, module);
  if (pageNum === 1) {
    const headerTopic = buildWorksheetTopicLabel(questions, topic, timesTable);
    html += `<div class="worksheet-info-strip">
      ${buildInfoStripItem('book', 'Module', moduleLabel(module))}
      ${buildInfoStripItem('clipboard', 'Topic', headerTopic)}
      ${buildInfoStripBlankItem('calendar', 'Date', 'date')}
    </div>`;
  } else {
    html += `<div class="worksheet-info-strip worksheet-info-strip-divider" aria-hidden="true"></div>`;
  }
  if (pageInstruction) {
    html += `<div class="page-instruction">${escapeHtml(pageInstruction)}</div>`;
  }
  html += `</div>`;

  // Questions grid
  const questionsGridClass = questions.every((question) => question.kind === 'sudoku')
    ? 'questions-grid sudoku-questions-grid'
    : questions.every((question) => question.kind === 'number-writing')
      ? 'questions-grid number-writing-questions-grid'
    : 'questions-grid';
  const graphTopics = new Set(['plot-cartesian-plane', 'linear-graphs', 'gradient', 'box-plots', 'cumulative-frequency', 'stem-and-leaf', 'histograms', 'dot-plots', 'scatter-plots', 'frequency-distributions', 'draw-charts', 'distributions']);
  const graphLayoutClass = graphTopics.has(topic) && questions.length <= 2 ? ' graph-single-column' : '';
  html += `<div class="${questionsGridClass}${graphLayoutClass}">`;
  questions.forEach((q, idx) => {
    const num    = startIdx + idx + 1;
    html += renderVerticalQuestion(num, q, opSymbol[q.operation]);
  });
  html += `</div>`;

  // Page footer
  html += `
    <div class="page-footer">
      <div class="page-footer-left">${buildFooterLegalHTML()}</div>
      <span class="page-footer-right">Page ${pageNum} of ${totalPages}</span>
    </div>`;

  html += `</div>`;
  return html;
}

function buildSolutionsPageHTML(questions, startIdx, title, module, pageNum, totalPages) {
  const pageTopic = questions[0]?.topic;
  const pageInstruction = getPageInstruction(pageTopic);
  let html = `<div class="a4-page solutions-page">`;

  html += `<div class="worksheet-header">`;
  html += buildWorksheetHeaderBrandHTML(title, module, true);
  html += `<div class="worksheet-info-strip worksheet-info-strip-divider" aria-hidden="true"></div>`;
  if (pageInstruction) {
    html += `<div class="page-instruction">${escapeHtml(pageInstruction)}</div>`;
  }
  html += `</div>`;

  const solutionsGridClass = questions.every((question) => question.kind === 'sudoku')
    ? 'solutions-grid sudoku-solutions-grid'
    : 'solutions-grid';
  html += `<div class="${solutionsGridClass}">`;
  questions.forEach((question, idx) => {
    const num = startIdx + idx + 1;
    html += `<div class="solution-item"><span class="solution-number">${num}.</span><span class="solution-answer">${renderSolutionHTML(question)}</span></div>`;
  });
  html += `</div>`;

  html += `
    <div class="page-footer">
      <div class="page-footer-left">${buildFooterLegalHTML()}</div>
      <span class="page-footer-right">Page ${pageNum} of ${totalPages}</span>
    </div>`;

  html += `</div>`;
  return html;
}

function formatSolution(question) {
  if (question.numbers?.length > 2) {
    const symbol = question.operation === 'addition' ? '+' : '−';
    return `${question.numbers.join(` ${symbol} `)} = ${question.answer}`;
  }

  if (question.kind === 'number') {
    return `${question.prompt} = ${question.answer}`;
  }

  if (question.kind === 'fraction') {
    return `${question.prompt} = ${question.answer}`;
  }

  switch (question.operation) {
    case 'addition':
      return `${question.a} + ${question.b} = ${question.a + question.b}`;
    case 'subtraction':
      return `${question.a} - ${question.b} = ${question.a - question.b}`;
    case 'multiplication':
      return `${question.a} × ${question.b} = ${question.a * question.b}`;
    case 'division':
      return `${question.a} ÷ ${question.b} = ${question.a / question.b}`;
    case 'bodmas':
      return `${question.expression} = ${question.answer}`;
    default:
      return '';
  }
}

function buildFooterLegalHTML() {
  const currentYear = new Date().getFullYear();
  return `
    <span class="footer-brand"><span class="footer-brand-edge">Edge</span>ducate | <a class="footer-link" href="https://www.edgeducate.com.au" target="_blank" rel="noopener noreferrer">www.edgeducate.com.au</a> | <a class="footer-link" href="mailto:hello@edgeducate.com.au">hello@edgeducate.com.au</a></span>
    <span class="footer-copyright">© ${currentYear} The Edgeducation Company Pty Ltd. All rights reserved.</span>
  `;
}

function buildWorksheetHeaderBrandHTML(titleText, module, isSolutions = false) {
  const badgeText = isSolutions ? 'MATHEMATICS - SOLUTIONS' : 'MATHEMATICS';
  const badgeClassName = isSolutions ? 'worksheet-badge worksheet-badge-solutions' : 'worksheet-badge';
  return `
    <div class="worksheet-brand">
      <div class="worksheet-brand-left">
        <img class="worksheet-logo" src="${getActiveLogoSrc()}" alt="Edgeducate logo" />
      </div>
      <span class="worksheet-brand-divider" aria-hidden="true"></span>
      <div class="worksheet-brand-right">
        <span class="${badgeClassName}">${badgeText}</span>
        <h2 class="worksheet-title">${escapeHtml(titleText)}</h2>
      </div>
    </div>
  `;
}

function buildInfoStripItem(iconType, label, value) {
  const hasValue = String(value).trim().length > 0;
  const valueHTML = hasValue ? `<span class="meta-value">${escapeHtml(value)}</span>` : '';

  return `
    <span class="info-item">
      <span class="info-icon" aria-hidden="true">${buildInfoIconSVG(iconType)}</span>
      <span class="info-label">${escapeHtml(label)}:</span>
      ${valueHTML}
    </span>`;
}

function buildInfoStripBlankItem(iconType, label, fieldKind) {
  return `
    <span class="info-item info-item-blank">
      <span class="info-icon" aria-hidden="true">${buildInfoIconSVG(iconType)}</span>
      <span class="info-label">${escapeHtml(label)}:</span>
      <span class="info-empty-value info-empty-value-${escapeHtml(fieldKind)}" aria-hidden="true"></span>
    </span>`;
}

function buildWorksheetTopicLabel(questions, topic, timesTable) {
  const resolvedTopic = topic !== undefined ? topic : topicSelect.value;
  const resolvedTimesTable = timesTable !== undefined
    ? timesTable
    : parseInt(document.getElementById('timesTable').value, 10);
  const defaultLabel = topicLabel(resolvedTopic, resolvedTimesTable).replace(/ Practice$/, '');

  if (!Array.isArray(questions) || questions.length === 0) {
    return defaultLabel;
  }

  const sampleQuestion = questions[0];
  const denominatorMode = sampleQuestion?.kind === 'fraction'
    ? describeFractionDenominatorMode(sampleQuestion.topic, sampleQuestion.denominatorMode)
    : '';

  return denominatorMode ? `${defaultLabel} (${denominatorMode})` : defaultLabel;
}

function describeFractionDenominatorMode(topic, denominatorMode = '') {
  if (denominatorMode === 'same' || denominatorMode === 'mixed') {
    return `${denominatorMode} denominator`;
  }

  if (topic === 'add-fractions' || topic === 'subtract-fractions') {
    return 'same denominator';
  }

  if (topic === 'multiply-fractions' || topic === 'divide-fractions') {
    return 'mixed denominator';
  }

  return '';
}

function getDefaultDenominatorMode(topic, currentValue = '') {
  if (currentValue === 'same' || currentValue === 'mixed') {
    return currentValue;
  }

  if (topic === 'add-fractions' || topic === 'subtract-fractions') {
    return 'same';
  }

  return 'mixed';
}

function buildInfoIconSVG(iconType) {
  if (iconType === 'book') {
    return '<svg viewBox="0 0 20 20" focusable="false"><path d="M3 4.2C3 3.54 3.54 3 4.2 3H9.1C10.17 3 11.19 3.47 11.9 4.28L12 4.4V15.6L11.9 15.52C11.2 14.86 10.22 14.5 9.2 14.5H4.2A1.2 1.2 0 0 1 3 13.3V4.2Zm14 0C17 3.54 16.46 3 15.8 3H10.9C9.83 3 8.81 3.47 8.1 4.28L8 4.4V15.6L8.1 15.52C8.8 14.86 9.78 14.5 10.8 14.5H15.8A1.2 1.2 0 0 0 17 13.3V4.2Z" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>';
  }

  if (iconType === 'clipboard') {
    return '<svg viewBox="0 0 20 20" focusable="false"><rect x="5" y="4" width="10" height="13" rx="1.4" fill="none" stroke="currentColor" stroke-width="1.6"/><rect x="7" y="2.6" width="6" height="2.8" rx="1" fill="none" stroke="currentColor" stroke-width="1.4"/><line x1="7" y1="8" x2="13" y2="8" stroke="currentColor" stroke-width="1.4"/><line x1="7" y1="11" x2="13" y2="11" stroke="currentColor" stroke-width="1.4"/></svg>';
  }

  if (iconType === 'clock') {
    return '<svg viewBox="0 0 20 20" focusable="false"><circle cx="10" cy="10" r="7" fill="none" stroke="currentColor" stroke-width="1.6"/><line x1="10" y1="10" x2="10" y2="6.2" stroke="currentColor" stroke-width="1.6"/><line x1="10" y1="10" x2="13" y2="11.8" stroke="currentColor" stroke-width="1.6"/></svg>';
  }

  if (iconType === 'user') {
    return '<svg viewBox="0 0 20 20" focusable="false"><circle cx="10" cy="6.6" r="3" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M4.6 16.2c0-2.8 2.4-4.8 5.4-4.8s5.4 2 5.4 4.8" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>';
  }

  if (iconType === 'calendar') {
    return '<svg viewBox="0 0 20 20" focusable="false"><rect x="3.5" y="4.8" width="13" height="11.2" rx="1.4" fill="none" stroke="currentColor" stroke-width="1.6"/><line x1="3.5" y1="8" x2="16.5" y2="8" stroke="currentColor" stroke-width="1.4"/><line x1="7" y1="3.2" x2="7" y2="6" stroke="currentColor" stroke-width="1.6"/><line x1="13" y1="3.2" x2="13" y2="6" stroke="currentColor" stroke-width="1.6"/></svg>';
  }

  return '<svg viewBox="0 0 20 20" focusable="false"><rect x="4" y="10" width="2.4" height="6" fill="currentColor"/><rect x="8.4" y="7.4" width="2.4" height="8.6" fill="currentColor"/><rect x="12.8" y="4.8" width="2.4" height="11.2" fill="currentColor"/></svg>';
}

function renderVerticalQuestion(num, question, symbol) {
  if (question.kind === 'number-writing') {
    return renderNumberWritingQuestion(num, question);
  }

  if (question.kind === 'sudoku') {
    return renderSudokuQuestion(num, question);
  }

  if (question.kind === 'multiplication-grouping') {
    return renderMultiplicationGroupingQuestion(num, question);
  }

  if (question.kind === 'magic-square') {
    return renderMagicSquareQuestion(num, question);
  }

  if (question.kind === 'number') {
    return renderNumberQuestion(num, question);
  }

  if (question.kind === 'fraction') {
    return renderFractionQuestion(num, question);
  }

  if (question.kind === 'geometry') {
    return renderGeometryQuestion(num, question);
  }

  if (question.kind === 'algebra') {
    return renderAlgebraQuestion(num, question);
  }

  if (question.kind === 'percentage') {
    return renderPercentageQuestion(num, question);
  }

  if (question.kind === 'decimal') {
    return renderDecimalQuestion(num, question);
  }

  if (question.kind === 'measurement') {
    return renderMeasurementQuestion(num, question);
  }

  if (question.kind === 'statistics') {
    return renderStatisticsQuestion(num, question);
  }

  if (question.kind === 'trigonometry') {
    return renderTrigonometryQuestion(num, question);
  }

  if (question.operation === 'bodmas') {
    return renderBodmasQuestion(num, question);
  }

  if (question.operation === 'division') {
    return renderLongDivisionQuestion(num, question);
  }

  if (question.numbers?.length > 2) {
    const termRows = question.numbers.map((value, index) => `
        <div class="question-${index === 0 ? 'top' : 'bottom'}">
          ${index === 0 ? '' : `<span class="question-operator">${symbol}</span>`}
          <span class="question-value">${value}</span>
        </div>`).join('');
    return `
    <div class="question question-vertical question-multi-term-question">
      <div class="question-number">${num}.</div>
      <div class="question-stack question-multi-term">
        ${termRows}
        <div class="answer-line"></div>
      </div>
    </div>`;
  }

  return `
    <div class="question question-vertical">
      <div class="question-number">${num}.</div>
      <div class="question-stack">
        <div class="question-top">${question.a}</div>
        <div class="question-bottom">
          <span class="question-operator">${symbol}</span>
          <span class="question-value">${question.b}</span>
        </div>
        <div class="answer-line"></div>
      </div>
    </div>`;
}

function renderLongDivisionQuestion(num, question) {
  const dividendWidth = String(question.a).length + 2;
  return `
    <div class="question question-long-division">
      <div class="question-number">${num}.</div>
      <div class="long-division" style="--dividend-ch:${dividendWidth}">
        <div class="long-division-answer"></div>
        <div class="long-division-divisor">${question.b}</div>
        <div class="long-division-dividend">${question.a}</div>
      </div>
    </div>`;
}

function renderBodmasQuestion(num, question) {
  return `
    <div class="question question-bodmas">
      <div class="question-number">${num}.</div>
      <div class="bodmas-body">
        <div class="bodmas-expression">${escapeHtml(question.expression)}</div>
        <div class="bodmas-answer-line"></div>
      </div>
    </div>`;
}

function renderNumberQuestion(num, question) {
  if (question.matrix) {
    return `
    <div class="question question-number-topic question-matrix">
      <div class="question-number">${num}.</div>
      <div class="number-topic-body matrix-body">
        <div class="number-topic-prompt">${escapeHtml(question.prompt)}</div>
        <div class="matrix-expression">${renderMatrixHTML(question.matrix.first)}<span class="matrix-operator">${question.matrix.operator || '+'}</span>${question.matrix.second ? renderMatrixHTML(question.matrix.second) : ''}</div>
        <div class="number-topic-answer-line"></div>
      </div>
    </div>`;
  }

  return `
    <div class="question question-number-topic">
      <div class="question-number">${num}.</div>
      <div class="number-topic-body">
        <div class="number-topic-prompt">${renderNumberPromptHTML(question)}</div>
        <div class="number-topic-answer-line"></div>
      </div>
    </div>`;
}

function renderMatrixHTML(matrix) {
  return `<table class="matrix-table" aria-label="Matrix">${matrix.map((row) => `<tr>${row.map((value) => `<td>${escapeHtml(String(value))}</td>`).join('')}</tr>`).join('')}</table>`;
}

function renderFractionQuestion(num, question) {
  return `
    <div class="question question-fraction-topic">
      <div class="question-number">${num}.</div>
      <div class="fraction-topic-body">
        <div class="fraction-topic-prompt">${question.topic === 'improper-fractions' ? renderMixedFractionHTML(question.prompt) : renderFractionTextHTML(question.prompt)}</div>
      </div>
    </div>`;
}

function renderDecimalQuestion(num, question) {
  if (question.mode === 'operations') {
    return renderDecimalOperationQuestion(num, question);
  }

  const promptHTML = renderDecimalPlaceValueHTML(question);

  return `
    <div class="question question-decimal-topic">
      <div class="question-number">${num}.</div>
      <div class="decimal-topic-body">
        <div class="decimal-topic-prompt">${promptHTML}</div>
      </div>
    </div>`;
}

function renderMeasurementQuestion(num, question) {
  const inlineMeasurementTopics = new Set();

  if (inlineMeasurementTopics.has(question.topic)) {
    return `
      <div class="question question-number-topic question-measurement-inline">
        <div class="question-number">${num}.</div>
        <div class="number-topic-body">
          <div class="measurement-inline-row">
            <div class="number-topic-prompt measurement-inline-prompt">${renderMeasurementPromptHTML(question, true)}</div>
            <div class="number-topic-answer-line measurement-inline-answer-line"></div>
          </div>
        </div>
      </div>`;
  }

  return `
    <div class="question question-number-topic">
      <div class="question-number">${num}.</div>
      <div class="number-topic-body">
        <div class="number-topic-prompt">${renderMeasurementPromptHTML(question, true)}</div>
        <div class="number-topic-answer-line"></div>
      </div>
    </div>`;
}

function renderStatisticsQuestion(num, question) {
  const tableHTML = question.topic === 'tables' ? renderStatisticsFrequencyTableHTML(question) : '';
  const regressionHTML = question.topic === 'regression' ? renderStatisticsRegressionHTML(question) : '';
  const promptHTML = question.topic === 'regression' ? '' : `<div class="number-topic-prompt statistics-topic-prompt">${renderStatisticsPromptHTML(question)}</div>`;
  const layoutClass = question.chart || question.topic === 'regression' ? ' question-chart-topic' : question.topic === 'tables' ? ' question-table-topic' : '';
  return `
    <div class="question question-number-topic question-statistics-topic${layoutClass}">
      <div class="question-number">${num}.</div>
      <div class="number-topic-body statistics-topic-body">
        ${promptHTML}
        ${tableHTML}
        ${regressionHTML}
        <div class="number-topic-answer-line statistics-topic-answer-line"></div>
      </div>
    </div>`;
}

function renderTrigonometryQuestion(num, question) {
  return `
    <div class="question question-number-topic question-trigonometry-topic">
      <div class="question-number">${num}.</div>
      <div class="number-topic-body trigonometry-topic-body">
        <div class="number-topic-prompt trigonometry-topic-prompt">${renderTrigonometryPromptHTML(question, true)}</div>
        <div class="number-topic-answer-line trigonometry-topic-answer-line"></div>
      </div>
    </div>`;
}

function renderTrigonometryPromptHTML(question, concise = false) {
  const label = escapeHtml(concise ? getConciseVisualPrompt(question) : String(question.prompt ?? ''));
  const shapeSvg = renderTrigonometryShapeSVG(question);
  if (!shapeSvg) {
    return label;
  }

  return `
    <span class="geometry-shape-stack trigonometry-shape-stack">
      <span class="geometry-shape-question trigonometry-shape-question">${label}</span>
      <span class="geometry-shape-icon trigonometry-shape-icon" aria-hidden="true">${shapeSvg}</span>
    </span>`;
}

function renderStatisticsPromptHTML(question) {
  if (question.topic === 'regression') {
    return `<div class="statistics-topic-question statistics-regression-question">${escapeHtml(String(question.prompt ?? ''))}</div>`;
  }
  const dataHTML = question.data ? `<div class="statistics-topic-data">${escapeHtml(String(question.data))}</div>` : '';
  const chartHTML = question.chart ? `<div class="secondary-chart-wrap">${renderSecondaryChartSVG(question.chart)}</div>` : '';
  const chartTableHTML = question.chart?.table ? renderChartDataTableHTML(question.chart) : '';
  const promptHTML = `<div class="statistics-topic-question">${escapeHtml(String(question.prompt ?? ''))}</div>`;
  return `${dataHTML}<div class="chart-and-data">${chartHTML}${chartTableHTML}</div>${promptHTML}`;
}

function renderChartDataTableHTML(chart) {
  const headers = chart.type === 'scatter' ? ['x', 'y'] : ['Group', 'Frequency'];
  const rows = chart.table.map((row) => `<tr>${row.map((value) => `<td>${escapeHtml(String(value))}</td>`).join('')}</tr>`).join('');
  return `<table class="secondary-chart-data-table"><thead><tr>${headers.map((header) => `<th>${header}</th>`).join('')}</tr></thead><tbody>${rows}</tbody></table>`;
}

function renderSecondaryChartSVG(chart) {
  const axes = '<line x1="24" y1="86" x2="164" y2="86"/><line x1="24" y1="16" x2="24" y2="86"/>';
  const chartGrid = `<g stroke="#d9e2ec" stroke-width="0.55">${Array.from({ length: 11 }, (_, index) => `<line x1="${24 + index * 14}" y1="16" x2="${24 + index * 14}" y2="86"/><line x1="24" y1="${86 - index * 7}" x2="164" y2="${86 - index * 7}"/>`).join('')}</g>`;
  const axisNumbers = `<g fill="currentColor" stroke="none" font-size="7">${Array.from({ length: 11 }, (_, index) => `<text x="${24 + index * 14}" y="96" text-anchor="middle">${index}</text><text x="17" y="${88 - index * 7}" text-anchor="end">${index}</text>`).join('')}</g>`;
  const axisLabels = `<g fill="currentColor" stroke="none" font-size="6"><text x="94" y="112" text-anchor="middle">${escapeHtml(chart.xLabel || 'Value')}</text><text x="6" y="51" text-anchor="middle" transform="rotate(-90 6 51)">${escapeHtml(chart.yLabel || 'Frequency')}</text></g>`;
  if (chart.type === 'stem-and-leaf') {
    const stems = [...new Set(chart.values.map((value) => Math.floor(value / 10)))];
    return `<svg class="secondary-chart secondary-stem-leaf" viewBox="0 0 190 100" role="img" aria-label="Stem and leaf plot"><text x="70" y="16">Stem</text><text x="110" y="16">Leaf</text>${stems.map((stem, index) => `<text x="76" y="${32 + index * 14}">${stem}</text><text x="110" y="${32 + index * 14}">${chart.showData ? chart.values.filter(value => Math.floor(value / 10) === stem).map(value => value % 10).join('  ') : '______'}</text>`).join('')}<text x="70" y="94">Key: 3 | 4 = 34</text></svg>`;
  }
  if (!chart.showData) {
    return `<svg class="secondary-chart" viewBox="0 0 190 115" role="img" aria-label="Blank chart to complete">${chartGrid}<g stroke="currentColor" fill="none">${axes}</g>${axisNumbers}${axisLabels}</svg>`;
  }
  if (chart.type === 'dot-plot') {
    const dots = chart.values.map((value, index) => `<circle cx="${32 + value * 14}" cy="${76 - (chart.values.slice(0, index).filter(item => item === value).length * 10)}" r="4" fill="#c62828"/>`).join('');
    return `<svg class="secondary-chart" viewBox="0 0 190 100" role="img" aria-label="Dot plot"><line x1="24" y1="78" x2="174" y2="78" stroke="currentColor"/>${[1,2,3,4,5,6,7,8,9].map(value => `<text x="${32 + value * 14}" y="94">${value}</text>`).join('')}${dots}</svg>`;
  }
  if (chart.type === 'scatter') {
    return `<svg class="secondary-chart" viewBox="0 0 190 115" role="img" aria-label="Scatter plot">${chartGrid}<g stroke="currentColor" fill="none">${axes}</g>${axisNumbers}${axisLabels}${chart.points.map(point => `<circle cx="${24 + point.x * 14}" cy="${86 - point.y * 7}" r="3" fill="#c62828"/>`).join('')}</svg>`;
  }
  if (chart.type === 'distribution') {
    const heights = chart.shape === 'approximately symmetric' ? [2, 5, 9, 13, 9, 5, 2] : chart.shape === 'positively skewed' ? [12, 9, 6, 4, 3, 2, 1] : [1, 2, 3, 4, 6, 9, 12];
    return `<svg class="secondary-chart" viewBox="0 0 190 100" role="img" aria-label="Distribution shape">${chartGrid}<g stroke="currentColor" fill="none">${axes}</g>${axisNumbers}${heights.map((height, index) => `<rect x="${35 + index * 18}" y="${82 - height * 4}" width="14" height="${height * 4}" fill="#d9eaf7" stroke="#2b6cb0"/>`).join('')}</svg>`;
  }
  const bars = chart.bins || chart.frequencies || [];
  return `<svg class="secondary-chart" viewBox="0 0 190 115" role="img" aria-label="Frequency chart">${chartGrid}<g stroke="currentColor" fill="none">${axes}</g>${axisNumbers}${axisLabels}${bars.map((value, index) => `<rect x="${35 + index * 30}" y="${82 - value * 6}" width="20" height="${value * 6}" fill="#d9eaf7" stroke="#2b6cb0"/>`).join('')}</svg>`;
}

function renderStatisticsRegressionHTML(question) {
  const plotHTML = question.plot ? renderStatisticsRegressionPlotSVG(question.plot) : '';
  const dataHTML = question.data ? `<div class="statistics-topic-data statistics-regression-data">${escapeHtml(String(question.data))}</div>` : '';
  const promptHTML = `<div class="statistics-topic-question statistics-regression-question">${escapeHtml(String(question.prompt ?? ''))}</div>`;
  return `${plotHTML}${dataHTML}${promptHTML}`;
}

function renderStatisticsRegressionPlotSVG(plot) {
  const points = Array.isArray(plot.points) ? plot.points : [];
  const line = plot.line || null;
  const pointMarkup = points.map((point) => {
    const x = 24 + (point.x * 11);
    const y = 96 - (point.y * 6.2);
    return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="3.2" fill="currentColor" opacity="0.95"/>`;
  }).join('');
  const lineMarkup = line ? `<line x1="${(24 + line.start.x * 11).toFixed(1)}" y1="${(96 - line.start.y * 6.2).toFixed(1)}" x2="${(24 + line.end.x * 11).toFixed(1)}" y2="${(96 - line.end.y * 6.2).toFixed(1)}" stroke="currentColor" stroke-width="1.8" stroke-dasharray="4 3" opacity="0.9"/>` : '';

  return `
    <div class="statistics-regression-plot-wrap" aria-hidden="true">
      <svg class="statistics-regression-plot" viewBox="0 0 140 110">
        <rect x="0" y="0" width="140" height="110" rx="8" fill="rgba(235,244,255,0.7)" stroke="rgba(43,108,176,0.18)"/>
        <line x1="18" y1="96" x2="124" y2="96" stroke="currentColor" stroke-width="1.8"/>
        <line x1="24" y1="16" x2="24" y2="98" stroke="currentColor" stroke-width="1.8"/>
        <line x1="24" y1="80" x2="27" y2="80" stroke="currentColor" stroke-width="1"/>
        <line x1="24" y1="64" x2="27" y2="64" stroke="currentColor" stroke-width="1"/>
        <line x1="24" y1="48" x2="27" y2="48" stroke="currentColor" stroke-width="1"/>
        <line x1="24" y1="32" x2="27" y2="32" stroke="currentColor" stroke-width="1"/>
        <line x1="40" y1="96" x2="40" y2="99" stroke="currentColor" stroke-width="1"/>
        <line x1="56" y1="96" x2="56" y2="99" stroke="currentColor" stroke-width="1"/>
        <line x1="72" y1="96" x2="72" y2="99" stroke="currentColor" stroke-width="1"/>
        <line x1="88" y1="96" x2="88" y2="99" stroke="currentColor" stroke-width="1"/>
        <line x1="104" y1="96" x2="104" y2="99" stroke="currentColor" stroke-width="1"/>
        ${lineMarkup}
        ${pointMarkup}
      </svg>
    </div>`;
}

function renderStatisticsFrequencyTableHTML(question) {
  const rows = Array.isArray(question.tableRows) ? question.tableRows : [];
  const rowHTML = rows.map((row) => `
    <tr>
      <td>${escapeHtml(String(row.value))}</td>
      <td><span class="statistics-frequency-blank">&nbsp;</span></td>
    </tr>`).join('');

  return `
    <div class="statistics-frequency-table-wrap">
      <table class="statistics-frequency-table">
        <thead>
          <tr>
            <th>Value</th>
            <th>Frequency</th>
          </tr>
        </thead>
        <tbody>
          ${rowHTML}
        </tbody>
      </table>
    </div>`;
}

function renderStatisticsFrequencyTableSolutionHTML(question) {
  const rows = Array.isArray(question.tableRows) ? question.tableRows : [];
  const rowHTML = rows.map((row) => `
    <tr>
      <td>${escapeHtml(String(row.value))}</td>
      <td>${escapeHtml(String(row.frequency))}</td>
    </tr>`).join('');

  return `
    <div class="statistics-frequency-table-wrap">
      <table class="statistics-frequency-table statistics-frequency-table-solution">
        <thead>
          <tr>
            <th>Value</th>
            <th>Frequency</th>
          </tr>
        </thead>
        <tbody>
          ${rowHTML}
        </tbody>
      </table>
    </div>`;
}

function renderTrigonometryShapeSVG(question) {
  if (!TRIGONOMETRY_TOPICS.has(question.topic) || !question.shape) {
    return '';
  }

  const dims = question.dimensions || {};
  const n = (value, suffix = '') => escapeHtml(`${value}${suffix}`);
  const badge = (content, x, y, width, height, options = {}) => {
    const rotate = options.rotate ?? 0;
    const rectFill = options.fill ?? 'rgba(255,255,255,0.72)';
    const rectStroke = options.stroke ?? 'rgba(43,108,176,0.35)';
    const textFill = options.textFill ?? 'rgba(43,108,176,0.9)';
    const fontSize = options.fontSize ?? 7.8;
    const fontWeight = options.fontWeight ?? 600;
    return `<g transform="translate(${x} ${y}) rotate(${rotate})"><rect x="${-width / 2}" y="${-height / 2}" width="${width}" height="${height}" rx="4" ry="4" fill="${rectFill}" stroke="${rectStroke}" stroke-width="0.7"/><text x="0" y="${Math.max(3, height * 0.32)}" text-anchor="middle" font-size="${fontSize}" font-weight="${fontWeight}" fill="${textFill}">${content}</text></g>`;
  };

  if (question.shape === 'right-triangle') {
    return `<svg viewBox="0 0 180 130" aria-hidden="true"><polygon points="30,102 140,102 140,34" fill="rgba(43,108,176,0.06)" stroke="currentColor" stroke-width="2.4"/><path d="M130 102 L130 92 L140 92" fill="none" stroke="currentColor" stroke-width="2.1"/><path d="M46 102 A16 16 0 0 0 43 94" fill="none" stroke="currentColor" stroke-width="1.9"/><text x="30" y="82" font-size="9.2" font-weight="700" fill="currentColor">${n(dims.angle, '°')}</text>${badge('adj=?', 86, 112, 30, 12)}${badge('opp=?', 150, 66, 30, 12)}${badge(`hyp=${n(dims.hypotenuse, ' cm')}`, 86, 28, 50, 12)}</svg>`;
  }

  if (question.shape === 'sine-rule-triangle') {
    return `<svg viewBox="0 0 180 130" aria-hidden="true"><polygon points="34,102 146,102 92,26" fill="rgba(43,108,176,0.06)" stroke="currentColor" stroke-width="2.3"/>${badge('B', 27, 114, 10, 10, { fontSize: 7.2, fontWeight: 700 })}${badge('C', 153, 114, 10, 10, { fontSize: 7.2, fontWeight: 700 })}${badge('A', 92, 18, 10, 10, { fontSize: 7.2, fontWeight: 700 })}${badge(`a=${n(dims.sideA, ' cm')}`, 90, 122, 36, 12)}${badge('b=?', 154, 58, 24, 12)}<path d="M84 37 A14 14 0 0 1 100 37" fill="none" stroke="currentColor" stroke-width="1.8"/><text x="92" y="24" text-anchor="middle" font-size="9.1" font-weight="700" fill="currentColor">${n(dims.angleA, '°')}</text><path d="M48 102 A14 14 0 0 0 42 92" fill="none" stroke="currentColor" stroke-width="1.8"/><text x="20" y="90" text-anchor="middle" font-size="9.1" font-weight="700" fill="currentColor">${n(dims.angleB, '°')}</text></svg>`;
  }

  if (question.shape === 'cosine-rule-triangle') {
    return `<svg viewBox="0 0 180 130" aria-hidden="true"><polygon points="34,102 146,102 92,26" fill="rgba(43,108,176,0.06)" stroke="currentColor" stroke-width="2.3"/>${badge('B', 27, 114, 10, 10, { fontSize: 7.2, fontWeight: 700 })}${badge('C', 153, 114, 10, 10, { fontSize: 7.2, fontWeight: 700 })}${badge('A', 92, 18, 10, 10, { fontSize: 7.2, fontWeight: 700 })}${badge('a=?', 90, 122, 24, 12)}${badge(`b=${n(dims.sideB, ' cm')}`, 154, 58, 38, 12)}${badge(`c=${n(dims.sideC, ' cm')}`, 28, 48, 38, 12)}<path d="M84 37 A14 14 0 0 1 100 37" fill="none" stroke="currentColor" stroke-width="1.8"/><text x="92" y="24" text-anchor="middle" font-size="9.1" font-weight="700" fill="currentColor">${n(dims.angleA, '°')}</text></svg>`;
  }

  if (question.shape === 'bearings-compass') {
    return `<svg viewBox="0 0 180 130" aria-hidden="true"><circle cx="90" cy="66" r="31" fill="rgba(43,108,176,0.05)" stroke="currentColor" stroke-width="2.2"/><circle cx="90" cy="66" r="3" fill="currentColor"/><line x1="90" y1="35" x2="90" y2="16" stroke="currentColor" stroke-width="2.2"/>${badge('N', 90, 12, 10, 10, { fontSize: 7.2, fontWeight: 700 })}<line x1="90" y1="66" x2="118" y2="46" stroke="currentColor" stroke-width="2.2"/>${badge('B', 120, 43, 10, 10, { fontSize: 7.2, fontWeight: 700 })}${badge('A', 83, 61, 10, 10, { fontSize: 7.2, fontWeight: 700 })}<path d="M90 50 A16 16 0 0 1 105 56" fill="none" stroke="currentColor" stroke-width="1.8"/><text x="110" y="46" text-anchor="start" font-size="9.1" font-weight="700" fill="currentColor">${n(String(dims.bearingAB).padStart(3, '0'), '°')}</text>${badge('reverse: ?°', 32, 116, 44, 12)}</svg>`;
  }

  if (question.shape === 'ladder-application') {
    return `<svg viewBox="0 0 180 130" aria-hidden="true"><line x1="24" y1="104" x2="154" y2="104" stroke="currentColor" stroke-width="2.3"/><line x1="132" y1="104" x2="132" y2="26" stroke="currentColor" stroke-width="2.3"/><line x1="36" y1="104" x2="132" y2="26" stroke="currentColor" stroke-width="2.6"/><path d="M52 104 A16 16 0 0 0 46 96" fill="none" stroke="currentColor" stroke-width="1.8"/><text x="18" y="88" font-size="9.1" font-weight="700" fill="currentColor">${n(dims.angle, '°')}</text>${badge(n(dims.ladderLength, ' m'), 84, 54, 28, 12, { fontSize: 7.4, fontWeight: 600, fill: 'rgba(255,255,255,0.72)', stroke: 'rgba(43,108,176,0.28)', textFill: 'rgba(43,108,176,0.82)' })}${badge('h=?', 142, 68, 22, 12)}</svg>`;
  }

  return '';
}

function renderMeasurementPromptHTML(question, concise = false) {
  const label = escapeHtml(concise ? getConciseVisualPrompt(question) : String(question.prompt ?? ''));
  const shapeSvg = renderMeasurementShapeSVG(question);
  const areaPerimeterShapeClass = (question.topic === 'area' || question.topic === 'perimeter') ? ' measurement-area-perimeter-shape' : '';
  const volumeShapeClass = question.topic === 'volume' ? ' measurement-volume-shape' : '';

  if (!shapeSvg) {
    return label;
  }

  return `
    <span class="geometry-shape-stack">
      <span class="geometry-shape-question">${label}</span>
      <span class="geometry-shape-icon measurement-shape-icon${areaPerimeterShapeClass}${volumeShapeClass}" aria-hidden="true">${shapeSvg}</span>
    </span>`;
}

function renderMeasurementShapeSVG(question) {
  if ((question.topic !== 'area' && question.topic !== 'perimeter' && question.topic !== 'volume' && question.topic !== 'surface-area') || !question.shape) {
    return '';
  }

  const dims = question.dimensions || {};
  const format = (value) => escapeHtml(`${value} cm`);

  if (question.shape === 'rectangle') {
    return `<svg viewBox="0 0 140 110" aria-hidden="true"><rect x="28" y="24" width="76" height="52" fill="none" stroke="currentColor" stroke-width="2.2"/><text x="66" y="13" text-anchor="middle" font-size="10" font-weight="700" fill="currentColor">${format(dims.length)}</text><text x="125" y="53" text-anchor="middle" font-size="10" font-weight="700" fill="currentColor">${format(dims.width)}</text></svg>`;
  }

  if (question.shape === 'square') {
    return `<svg viewBox="0 0 140 110" aria-hidden="true"><rect x="38" y="20" width="64" height="64" fill="none" stroke="currentColor" stroke-width="2.2"/><text x="70" y="11" text-anchor="middle" font-size="10" font-weight="700" fill="currentColor">${format(dims.side)}</text></svg>`;
  }

  if (question.shape === 'triangle-area') {
    return `<svg viewBox="0 0 140 110" aria-hidden="true"><polygon points="26,82 114,82 70,24" fill="none" stroke="currentColor" stroke-width="2.2"/><line x1="70" y1="24" x2="70" y2="82" stroke="currentColor" stroke-dasharray="4 3" stroke-width="1.8"/><text x="70" y="102" text-anchor="middle" font-size="10" font-weight="700" fill="currentColor">${format(dims.base)}</text><text x="116" y="56" text-anchor="start" font-size="10" font-weight="700" fill="currentColor">${format(dims.height)}</text></svg>`;
  }

  if (question.shape === 'parallelogram') {
    return `<svg viewBox="0 0 140 110" aria-hidden="true"><polygon points="36,80 112,80 94,30 18,30" fill="none" stroke="currentColor" stroke-width="2.2"/><line x1="94" y1="30" x2="94" y2="80" stroke="currentColor" stroke-dasharray="4 3" stroke-width="1.8"/><text x="64" y="102" text-anchor="middle" font-size="10" font-weight="700" fill="currentColor">${format(dims.base)}</text><text x="118" y="58" text-anchor="start" font-size="10" font-weight="700" fill="currentColor">${format(dims.height)}</text></svg>`;
  }

  if (question.shape === 'triangle-perimeter') {
    return `<svg viewBox="0 0 140 110" aria-hidden="true"><polygon points="24,84 114,84 74,26" fill="none" stroke="currentColor" stroke-width="2.2"/><text x="69" y="100" text-anchor="middle" font-size="10" font-weight="700" fill="currentColor">${format(dims.c)}</text><text x="42" y="54" text-anchor="middle" font-size="10" font-weight="700" fill="currentColor">${format(dims.a)}</text><text x="102" y="52" text-anchor="middle" font-size="10" font-weight="700" fill="currentColor">${format(dims.b)}</text></svg>`;
  }

  if (question.shape === 'regular-pentagon') {
    return `<svg viewBox="0 0 140 110" aria-hidden="true"><polygon points="70,16 112,48 96,94 44,94 28,48" fill="none" stroke="currentColor" stroke-width="2.2"/><text x="70" y="107" text-anchor="middle" font-size="10" font-weight="700" fill="currentColor">${format(dims.side)}</text></svg>`;
  }

  if (question.shape === 'cuboid') {
    return `<svg viewBox="0 0 180 130" aria-hidden="true"><rect x="44" y="42" width="78" height="56" fill="rgba(43,108,176,0.1)" stroke="currentColor" stroke-width="2.2"/><polygon points="44,42 66,24 144,24 122,42" fill="rgba(43,108,176,0.06)" stroke="currentColor" stroke-width="2.2"/><polygon points="122,42 144,24 144,80 122,98" fill="rgba(43,108,176,0.03)" stroke="currentColor" stroke-width="2.2"/><line x1="66" y1="24" x2="66" y2="80" stroke="currentColor" stroke-width="2.2"/><line x1="66" y1="80" x2="144" y2="80" stroke="currentColor" stroke-width="2.2"/><line x1="44" y1="98" x2="66" y2="80" stroke="currentColor" stroke-width="2.2"/><line x1="92" y1="104" x2="92" y2="112" stroke="currentColor" stroke-width="1.4"/><text x="92" y="122" text-anchor="middle" font-size="9.5" font-weight="700" fill="currentColor">l=${format(dims.length)}</text><line x1="148" y1="60" x2="138" y2="60" stroke="currentColor" stroke-width="1.4"/><text x="152" y="63" text-anchor="start" font-size="9.5" font-weight="700" fill="currentColor">w=${format(dims.width)}</text><line x1="34" y1="70" x2="44" y2="70" stroke="currentColor" stroke-width="1.4"/><text x="8" y="73" text-anchor="start" font-size="9.5" font-weight="700" fill="currentColor">h=${format(dims.height)}</text></svg>`;
  }

  if (question.shape === 'cube') {
    return `<svg viewBox="0 0 180 130" aria-hidden="true"><rect x="52" y="42" width="52" height="52" fill="rgba(43,108,176,0.1)" stroke="currentColor" stroke-width="2.2"/><rect x="74" y="24" width="52" height="52" fill="rgba(43,108,176,0.06)" stroke="currentColor" stroke-width="2.2"/><line x1="52" y1="42" x2="74" y2="24" stroke="currentColor" stroke-width="2.2"/><line x1="104" y1="42" x2="126" y2="24" stroke="currentColor" stroke-width="2.2"/><line x1="52" y1="94" x2="74" y2="76" stroke="currentColor" stroke-width="2.2"/><line x1="104" y1="94" x2="126" y2="76" stroke="currentColor" stroke-width="2.2"/><line x1="86" y1="100" x2="86" y2="108" stroke="currentColor" stroke-width="1.4"/><text x="86" y="118" text-anchor="middle" font-size="9.5" font-weight="700" fill="currentColor">s=${format(dims.side)}</text></svg>`;
  }

  if (question.shape === 'cylinder') {
    return `<svg viewBox="0 0 160 120" aria-hidden="true"><ellipse cx="80" cy="30" rx="26" ry="8" fill="rgba(43,108,176,0.04)" stroke="currentColor" stroke-width="2.2"/><line x1="54" y1="30" x2="54" y2="90" stroke="currentColor" stroke-width="2.2"/><line x1="106" y1="30" x2="106" y2="90" stroke="currentColor" stroke-width="2.2"/><ellipse cx="80" cy="90" rx="26" ry="8" fill="rgba(43,108,176,0.1)" stroke="currentColor" stroke-width="2.2"/><line x1="80" y1="30" x2="106" y2="30" stroke="currentColor" stroke-dasharray="4 3" stroke-width="1.8"/><line x1="109" y1="30" x2="116" y2="30" stroke="currentColor" stroke-width="1.4"/><text x="120" y="33" text-anchor="start" font-size="9.5" font-weight="700" fill="currentColor">r=${format(dims.radius)}</text><line x1="50" y1="60" x2="40" y2="60" stroke="currentColor" stroke-width="1.4"/><text x="6" y="63" text-anchor="start" font-size="9.5" font-weight="700" fill="currentColor">h=${format(dims.height)}</text></svg>`;
  }

  if (question.shape === 'triangular-prism') {
    return `<svg viewBox="0 0 160 120" aria-hidden="true"><polygon points="30,90 62,44 62,90" fill="rgba(43,108,176,0.1)" stroke="currentColor" stroke-width="2.2"/><polygon points="80,90 112,44 112,90" fill="rgba(43,108,176,0.04)" stroke="currentColor" stroke-width="2.2"/><line x1="30" y1="90" x2="80" y2="90" stroke="currentColor" stroke-width="2.2"/><line x1="62" y1="44" x2="112" y2="44" stroke="currentColor" stroke-width="2.2"/><line x1="62" y1="90" x2="112" y2="90" stroke="currentColor" stroke-width="2.2"/><line x1="62" y1="44" x2="62" y2="90" stroke="currentColor" stroke-dasharray="4 3" stroke-width="1.8"/><line x1="55" y1="96" x2="55" y2="102" stroke="currentColor" stroke-width="1.4"/><text x="55" y="112" text-anchor="middle" font-size="9.5" font-weight="700" fill="currentColor">b=${format(dims.base)}</text><line x1="117" y1="67" x2="124" y2="67" stroke="currentColor" stroke-width="1.4"/><text x="128" y="70" text-anchor="start" font-size="9.5" font-weight="700" fill="currentColor">h=${format(dims.triHeight)}</text><line x1="116" y1="96" x2="124" y2="96" stroke="currentColor" stroke-width="1.4"/><text x="128" y="99" text-anchor="start" font-size="9.5" font-weight="700" fill="currentColor">L=${format(dims.length)}</text></svg>`;
  }

  return '';
}

function renderSolutionHTML(question) {
  if (question.visual) {
    const stepsHTML = question.solutionSteps?.length ? `<div class="secondary-solution-steps">${question.solutionSteps.map((step) => `<div>${escapeHtml(step)}</div>`).join('')}</div>` : '';
    return `<div class="primary-visual-solution">${renderNumberPromptHTML(question)}<div class="primary-solution-answer">Answer: ${escapeHtml(String(question.answer ?? ''))}</div>${stepsHTML}</div>`;
  }

  if (question.kind !== 'number') {
    if (question.kind === 'sudoku') {
      return `${renderSudokuLegendHTML()}${renderSudokuGridHTML(question.solution, true, question.puzzle)}`;
    }

    if (question.kind === 'multiplication-grouping') {
      return `${renderMultiplicationArrayHTML(question, true)} = ${escapeHtml(question.answer)}`;
    }

    if (question.kind === 'number-writing') {
      return renderNumberWritingSVG(question, true);
    }

    if (question.kind === 'magic-square') {
      return renderMagicSquareGridHTML(question.solution, true);
    }

    if (question.kind === 'fraction') {
      return `${renderFractionTextHTML(question.prompt)} = ${renderFractionTextHTML(String(question.answer))}`;
    }

    if (question.kind === 'geometry') {
      if (question.topic === 'plot-cartesian-plane') {
        return renderGeometryPromptHTML({ ...question, showPoints: true });
      }
      if (question.topic === 'pythagoras' && question.legs) {
        const completedQuestion = {
          ...question,
          legs: {
            legA: question.legs.legA === '?' ? question.answer : question.legs.legA,
            legB: question.legs.legB === '?' ? question.answer : question.legs.legB,
            hypotenuse: question.legs.hypotenuse === '?' ? question.answer : question.legs.hypotenuse,
          },
        };
        return `${renderGeometryPromptHTML(completedQuestion)} = ${escapeHtml(String(question.answer))}`;
      }

      return `${escapeHtml(String(question.prompt ?? ''))} = ${escapeHtml(String(question.answer))}`;
    }

    if (question.kind === 'algebra') {
      return `${renderAlgebraPromptHTML(question)} = ${renderAlgebraTextHTML(String(question.answer))}`;
    }

    if (question.kind === 'percentage') {
      return `${renderPercentagePromptHTML(question)} = ${escapeHtml(String(question.answer))}`;
    }

    if (question.kind === 'decimal') {
      return `${renderDecimalSolutionText(question)} = ${escapeHtml(String(question.answer))}`;
    }

    if (question.kind === 'measurement') {
      return `${escapeHtml(String(question.prompt ?? ''))} = ${escapeHtml(String(question.answer ?? ''))}`;
    }

    if (question.kind === 'statistics') {
      if (question.topic === 'tables') {
        return renderStatisticsFrequencyTableSolutionHTML(question);
      }
      if (question.topic === 'regression') {
        return `${renderStatisticsRegressionHTML(question)} = ${escapeHtml(String(question.answer ?? ''))}`;
      }
      if (question.chart) {
        return renderStatisticsPromptHTML({ ...question, chart: { ...question.chart, showData: true } });
      }
      return `${renderStatisticsPromptHTML(question)} = ${escapeHtml(String(question.answer ?? ''))}`;
    }

    if (question.kind === 'trigonometry') {
      return `${escapeHtml(String(question.prompt ?? ''))} = ${escapeHtml(String(question.answer ?? ''))}`;
    }

    return escapeHtml(formatSolution(question));
  }

  if (isYesNoNumberQuestion(question)) {
    return `${renderNumberPromptHTML(question)} = ${escapeHtml(String(question.answer))}`;
  }

  if (question.topic === 'scientific-notation') {
    return `${renderNumberPromptHTML(question)} = ${renderScientificNotationHTML(String(question.answer))}`;
  }

  if (question.matrix) {
    return `<div class="matrix-solution"><div>${escapeHtml(question.prompt)}</div><div class="matrix-expression">${renderMatrixHTML(question.matrix.first)}<span class="matrix-operator">${question.matrix.operator || '+'}</span>${question.matrix.second ? renderMatrixHTML(question.matrix.second) : ''}<span class="matrix-operator">=</span>${renderMatrixHTML(question.matrix.result)}</div></div>`;
  }

  if (question.solutionSteps?.length) {
    return `<div class="secondary-solution-steps"><div>${renderNumberPromptHTML(question)} = ${escapeHtml(String(question.answer ?? ''))}</div>${question.solutionSteps.map((step) => `<div>${escapeHtml(step)}</div>`).join('')}</div>`;
  }

  return `${renderNumberPromptHTML(question)} = ${escapeHtml(String(question.answer))}`;
}

function buildQuestions(topic, min, max, count, timesTable, denominatorMode, magicSquareSize = 3, pythagorasMode = 'hypotenuse', patternMode = 'random', termCount = 2, roundingPlace = 'mixed') {
  const mixedOps = ['addition', 'subtraction', 'multiplication', 'division'];
  const questions = [];
  const seenSignatures = new Set();

  if (PRIMARY_ADDITIONAL_TOPICS.has(topic)) {
    for (let i = 0; i < count; i++) {
      pushUniqueQuestion(questions, seenSignatures, () => buildPrimaryAdditionalQuestion(topic, min, max, roundingPlace));
    }
    return questions;
  }

  if (ADVANCED_WORKSHEET_TOPICS.has(topic)) {
    for (let i = 0; i < count; i++) {
      pushUniqueQuestion(questions, seenSignatures, () => buildAdvancedWorksheetQuestion(topic, pythagorasMode));
    }
    return questions;
  }

  if (NETWORK_TOPICS.has(topic)) {
    for (let i = 0; i < count; i++) {
      pushUniqueQuestion(questions, seenSignatures, () => buildNetworkQuestion(topic));
    }
    return questions;
  }

  if (MATRIX_TOPICS.has(topic)) {
    for (let i = 0; i < count; i++) {
      pushUniqueQuestion(questions, seenSignatures, () => buildMatrixQuestion(topic));
    }
    return questions;
  }

  if (GEOMETRY_TOPICS.has(topic)) {
    return buildGeometryQuestions(topic, count);
  }

  if (ALGEBRA_TOPICS.has(topic)) {
    for (let i = 0; i < count; i++) {
      pushUniqueQuestion(questions, seenSignatures, () => buildAlgebraQuestion(topic, min, max, patternMode));
    }
    return questions;
  }

  if (MEASUREMENT_TOPICS.has(topic)) {
    for (let i = 0; i < count; i++) {
      pushUniqueQuestion(questions, seenSignatures, () => buildMeasurementQuestion(topic, min, max));
    }
    return questions;
  }
  if (STATISTICS_TOPICS.has(topic)) {
    for (let i = 0; i < count; i++) {
      pushUniqueQuestion(questions, seenSignatures, () => buildStatisticsQuestion(topic, min, max));
    }
    return questions;
  }

  if (TRIGONOMETRY_TOPICS.has(topic)) {
    for (let i = 0; i < count; i++) {
      pushUniqueQuestion(questions, seenSignatures, () => buildTrigonometryQuestion(topic, min, max));
    }
    return questions;
  }

  if (PERCENTAGE_TOPICS.has(topic)) {
    for (let i = 0; i < count; i++) {
      pushUniqueQuestion(questions, seenSignatures, () => buildPercentageQuestion(topic));
    }
    return questions;
  }

  if (DECIMAL_TOPICS.has(topic)) {
    for (let i = 0; i < count; i++) {
      pushUniqueQuestion(questions, seenSignatures, () => buildDecimalQuestion(topic));
    }
    return questions;
  }

  if (FRACTION_TOPICS.has(topic)) {
    for (let i = 0; i < count; i++) {
      pushUniqueQuestion(questions, seenSignatures, () => buildFractionQuestion(topic, denominatorMode));
    }
    return questions;
  }

  if (NUMBER_TOPICS.has(topic)) {
    if (topic === 'sudoku') {
      for (let i = 0; i < count; i++) {
        pushUniqueQuestion(questions, seenSignatures, buildSudokuQuestion);
      }
      return questions;
    }

    if (topic === 'magic-squares') {
      for (let i = 0; i < count; i++) {
        pushUniqueQuestion(questions, seenSignatures, () => buildMagicSquareQuestion(magicSquareSize));
      }
      return questions;
    }

    for (let i = 0; i < count; i++) {
      pushUniqueQuestion(questions, seenSignatures, () => buildNumberQuestion(topic, min, max, i));
    }
    return questions;
  }

  if (MULTIPLICATION_GROUPING_TOPICS.has(topic)) {
    for (let i = 0; i < count; i++) {
      pushUniqueQuestion(questions, seenSignatures, () => buildMultiplicationGroupingQuestion(topic));
    }
    return questions;
  }

  if (WORD_PROBLEM_TOPICS.has(topic)) {
    for (let i = 0; i < count; i++) {
      pushUniqueQuestion(questions, seenSignatures, () => buildWordProblemQuestion(min, max));
    }
    return questions;
  }

  if (MONEY_TOPICS.has(topic)) {
    for (let i = 0; i < count; i++) {
      pushUniqueQuestion(questions, seenSignatures, () => buildMoneyQuestion(topic, min, max));
    }
    return questions;
  }

  if (RATIO_TOPICS.has(topic)) {
    for (let i = 0; i < count; i++) {
      pushUniqueQuestion(questions, seenSignatures, () => buildRatioQuestion(topic, min, max));
    }
    return questions;
  }

  for (let i = 0; i < count; i++) {
    pushUniqueQuestion(questions, seenSignatures, () => {
      if (topic === 'times-tables') {
        return { a: timesTable, b: randomInt(1, 12), operation: 'multiplication' };
      }

      if (topic === 'bodmas') {
        return buildBodmasQuestion(min, max);
      }

      let operation, a, b;
      if (topic === 'mixed') {
        operation = mixedOps[randomInt(0, 3)];
        if (['addition', 'subtraction'].includes(operation) && termCount > 2) {
          return buildMultiTermArithmeticQuestion(operation, min, max, termCount);
        }
        a = randomInt(min, max);
        b = randomInt(min, max);
        if (operation === 'subtraction' && a < b) [a, b] = [b, a];
        if (operation === 'division') {
          ({ a, b } = buildExactDivisionOperands(min, max));
        }
      } else {
        operation = topic;
        if (['addition', 'subtraction'].includes(operation) && termCount > 2) {
          return buildMultiTermArithmeticQuestion(operation, min, max, termCount);
        }
        a = randomInt(min, max);
        b = randomInt(min, max);
        if (operation === 'subtraction' && a < b) [a, b] = [b, a];
        if (operation === 'division') {
          ({ a, b } = buildExactDivisionOperands(min, max));
        }
      }

      return { a, b, operation };
    });
  }
  return questions;
}

function buildMultiTermArithmeticQuestion(operation, min, max, termCount) {
  const safeTermCount = Math.min(5, Math.max(3, termCount));
  const numbers = Array.from({ length: safeTermCount }, () => randomInt(min, max));
  if (operation === 'subtraction') {
    numbers[0] = numbers.slice(1).reduce((total, number) => total + number, 0) + randomInt(min, max);
  }
  const answer = operation === 'addition'
    ? numbers.reduce((total, number) => total + number, 0)
    : numbers.slice(1).reduce((total, number) => total - number, numbers[0]);
  return { numbers, a: numbers[0], b: numbers[1], operation, answer };
}

function buildMagicSquareQuestion(size) {
  const squareSize = [3, 4, 5].includes(size) ? size : 3;
  const solution = createMagicSquare(squareSize);
  const puzzle = solution.map((row) => row.slice());
  const blankCount = squareSize === 3 ? 4 : squareSize === 4 ? 7 : 10;
  const positions = Array.from({ length: squareSize * squareSize }, (_, index) => index);

  for (let index = positions.length - 1; index > 0; index--) {
    const swapIndex = randomInt(0, index);
    [positions[index], positions[swapIndex]] = [positions[swapIndex], positions[index]];
  }

  positions.slice(0, blankCount).forEach((position) => {
    puzzle[Math.floor(position / squareSize)][position % squareSize] = null;
  });

  return { kind: 'magic-square', topic: 'magic-squares', size: squareSize, puzzle, solution };
}

function createMagicSquare(size) {
  if (size % 2 === 1) {
    const square = Array.from({ length: size }, () => Array(size).fill(0));
    let row = 0;
    let column = Math.floor(size / 2);
    for (let value = 1; value <= size * size; value++) {
      square[row][column] = value;
      const nextRow = (row - 1 + size) % size;
      const nextColumn = (column + 1) % size;
      if (square[nextRow][nextColumn]) {
        row = (row + 1) % size;
      } else {
        row = nextRow;
        column = nextColumn;
      }
    }
    return square;
  }

  const square = Array.from({ length: size }, (_, row) =>
    Array.from({ length: size }, (_, column) => (row * size) + column + 1)
  );
  for (let row = 0; row < size; row++) {
    for (let column = 0; column < size; column++) {
      const inPattern = (row % 4 === column % 4)
        || ((row % 4) + (column % 4) === 3);
      if (inPattern) {
        square[row][column] = (size * size) + 1 - square[row][column];
      }
    }
  }
  return square;
}

function renderMagicSquareQuestion(num, question) {
  const magicNumber = (question.size * ((question.size * question.size) + 1)) / 2;
  return `
    <div class="question question-magic-square">
      <div class="question-number">${num}.</div>
      <div class="magic-square-body">
        <div class="magic-square-prompt">Complete the ${question.size} × ${question.size} magic square. <span class="magic-square-number">Magic number: ${magicNumber}</span></div>
        ${renderMagicSquareGridHTML(question.puzzle)}
      </div>
    </div>`;
}

function renderMagicSquareGridHTML(grid, isSolution = false) {
  const cellHTML = grid.map((row) => `<tr>${row.map((value) => `
    <td class="${value === null ? 'magic-square-blank' : ''}">${value === null ? '&nbsp;' : escapeHtml(String(value))}</td>`).join('')}</tr>`).join('');
  return `<table class="magic-square-grid${isSolution ? ' magic-square-grid-solution' : ''}" aria-label="Magic square">${cellHTML}</table>`;
}

function buildSudokuQuestion() {
  const solution = createSudokuSolution();
  const puzzle = solution.map((row) => row.slice());
  const positions = Array.from({ length: 81 }, (_, index) => index);

  for (let index = positions.length - 1; index > 0; index--) {
    const swapIndex = randomInt(0, index);
    [positions[index], positions[swapIndex]] = [positions[swapIndex], positions[index]];
  }

  positions.slice(0, 45).forEach((position) => {
    puzzle[Math.floor(position / 9)][position % 9] = null;
  });

  return { kind: 'sudoku', topic: 'sudoku', size: 9, puzzle, solution };
}

function createSudokuSolution() {
  const basePattern = (row, column) => ((row * 3) + Math.floor(row / 3) + column) % 9;
  const shuffledNumbers = shuffleList([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const rowGroups = shuffleList([0, 1, 2]);
  const rows = rowGroups.flatMap((group) => shuffleList([0, 1, 2]).map((row) => (group * 3) + row));
  const columnGroups = shuffleList([0, 1, 2]);
  const columns = columnGroups.flatMap((group) => shuffleList([0, 1, 2]).map((column) => (group * 3) + column));

  return rows.map((row) => columns.map((column) => shuffledNumbers[basePattern(row, column)]));
}

function shuffleList(values) {
  const shuffled = values.slice();
  for (let index = shuffled.length - 1; index > 0; index--) {
    const swapIndex = randomInt(0, index);
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }
  return shuffled;
}

function renderSudokuQuestion(num, question) {
  return `
    <div class="question question-sudoku">
      <div class="question-number">${num}.</div>
      <div class="sudoku-body">
        <div class="sudoku-prompt">Complete the 9 × 9 Sudoku.</div>
        ${renderSudokuGridHTML(question.puzzle)}
      </div>
    </div>`;
}

function renderSudokuGridHTML(grid, isSolution = false, puzzle = null) {
  const cellHTML = grid.map((row, rowIndex) => `<tr>${row.map((value, columnIndex) => {
    const wasProvided = Array.isArray(puzzle) && puzzle[rowIndex]?.[columnIndex] !== null;
    const cellClass = value === null ? 'sudoku-blank' : (wasProvided ? 'sudoku-given' : 'sudoku-answer');
    return `
    <td class="${cellClass}">${value === null ? '&nbsp;' : escapeHtml(String(value))}</td>`;
  }).join('')}</tr>`).join('');
  return `<table class="sudoku-grid${isSolution ? ' sudoku-grid-solution' : ''}" aria-label="Sudoku">${cellHTML}</table>`;
}

function renderSudokuLegendHTML() {
  return `<div class="sudoku-solution-legend"><span><i class="sudoku-legend-swatch sudoku-legend-given"></i> Given number</span><span><i class="sudoku-legend-swatch sudoku-legend-answer"></i> Answer</span></div>`;
}

function getQuestionSignature(question) {
  if (question && typeof question === 'object') {
    if (Array.isArray(question.numbers)) {
      return `${question.operation}:${question.numbers.join(':')}`;
    }
    if ('operation' in question && 'a' in question && 'b' in question) {
      return `${question.operation}:${question.a}:${question.b}`;
    }
    if (question.expression) {
      return `bodmas:${question.expression}`;
    }
    if (question.kind === 'magic-square') {
      return `magic-square:${JSON.stringify(question.puzzle)}`;
    }
    if (question.kind === 'sudoku') {
      return `sudoku:${JSON.stringify(question.puzzle)}`;
    }
    if ('prompt' in question) {
      return `${question.kind || ''}:${question.topic || ''}:${String(question.prompt)}`;
    }
  }
  return JSON.stringify(question);
}

// Regenerates a question up to maxAttempts times to avoid repeats within a worksheet, then accepts a duplicate if the topic's pool is exhausted.
function pushUniqueQuestion(questions, seenSignatures, generateQuestion, maxAttempts = 30) {
  let question = generateQuestion();
  let signature = getQuestionSignature(question);
  let attempts = 0;

  while (seenSignatures.has(signature) && attempts < maxAttempts) {
    question = generateQuestion();
    signature = getQuestionSignature(question);
    attempts++;
  }

  seenSignatures.add(signature);
  questions.push(question);
}

function buildExactDivisionOperands(min, max) {
  const lowerBound = Math.max(2, min);
  const nonTrivialPairs = [];

  for (let dividend = lowerBound; dividend <= max; dividend++) {
    for (let divisor = 2; divisor <= Math.floor(dividend / 2); divisor++) {
      if (dividend % divisor === 0) {
        nonTrivialPairs.push({ a: dividend, b: divisor });
      }
    }
  }

  if (nonTrivialPairs.length > 0) {
    return pickRandomFromList(nonTrivialPairs);
  }

  return { a: 1, b: 1 };
}

function buildBodmasQuestion(min, max) {
  const lowerBound = Math.max(1, min);
  const template = randomInt(1, 6);

  const a = randomInt(lowerBound, max);
  const b = randomInt(lowerBound, max);
  const c = randomInt(lowerBound, max);

  switch (template) {
    case 1:
      return {
        operation: 'bodmas',
        expression: `${a} + ${b} × ${c}`,
        answer: a + (b * c),
      };
    case 2:
      return {
        operation: 'bodmas',
        expression: `(${a} + ${b}) × ${c}`,
        answer: (a + b) * c,
      };
    case 3:
      return {
        operation: 'bodmas',
        expression: `${a} × ${b} + ${c}`,
        answer: (a * b) + c,
      };
    case 4:
      return {
        operation: 'bodmas',
        expression: `${a} × (${b} + ${c})`,
        answer: a * (b + c),
      };
    case 5:
      return {
        operation: 'bodmas',
        expression: `${a} × ${b} - ${c}`,
        answer: (a * b) - c,
      };
    default: {
      const divisor = randomInt(lowerBound, max);
      const multiplier = randomInt(lowerBound, max);
      const dividend = divisor * multiplier;
      return {
        operation: 'bodmas',
        expression: `${a} + ${dividend} ÷ ${divisor}`,
        answer: a + (dividend / divisor),
      };
    }
  }
}

function buildFractionQuestion(topic, denominatorMode) {
  switch (topic) {
    case 'recognising-fractions': {
      const denominator = randomInt(2, 12);
      const numerator = randomInt(1, denominator - 1);
      return {
        kind: 'fraction',
        topic,
        prompt: `${numerator} out of ${denominator} equal parts are shaded. Write this as a fraction.`,
        answer: fractionToText({ numerator, denominator }),
      };
    }
    case 'comparing-fractions': {
      const d1 = randomInt(2, 12);
      const n1 = randomInt(1, d1 - 1);
      const d2 = randomInt(2, 12);
      const n2 = randomInt(1, d2 - 1);
      const symbol = (n1 / d1) > (n2 / d2) ? '>' : (n1 / d1) < (n2 / d2) ? '<' : '=';
      return {
        kind: 'fraction',
        topic,
        prompt: `${fractionToText({ numerator: n1, denominator: d1 })} ___ ${fractionToText({ numerator: n2, denominator: d2 })}`,
        answer: symbol,
      };
    }
    case 'equivalent-fractions': {
      const fraction = createProperFraction();
      const multiplier = randomInt(2, 5);
      return {
        kind: 'fraction',
        topic,
        prompt: fractionToText(fraction),
        answer: fractionToText({ numerator: fraction.numerator * multiplier, denominator: fraction.denominator * multiplier }),
      };
    }
    case 'simplifying-fractions': {
      const simplified = createProperFraction(true);
      const multiplier = randomInt(2, 5);
      const unsimplified = {
        numerator: simplified.numerator * multiplier,
        denominator: simplified.denominator * multiplier,
      };
      return {
        kind: 'fraction',
        topic,
        prompt: `Simplify ${fractionToText(unsimplified)}.`,
        answer: fractionToText(simplified),
      };
    }
    case 'mixed-fractions': {
      const whole = randomInt(1, 9);
      const fraction = createProperFraction();
      return {
        kind: 'fraction',
        topic,
        prompt: fractionToText({ numerator: whole * fraction.denominator + fraction.numerator, denominator: fraction.denominator }),
        answer: formatMixedFraction(whole, fraction.numerator, fraction.denominator),
      };
    }
    case 'improper-fractions': {
      const whole = randomInt(1, 9);
      const fraction = createProperFraction();
      return {
        kind: 'fraction',
        topic,
        prompt: formatMixedFraction(whole, fraction.numerator, fraction.denominator),
        answer: fractionToText({ numerator: whole * fraction.denominator + fraction.numerator, denominator: fraction.denominator }),
      };
    }
    case 'add-fractions': {
      if ((denominatorMode || getDefaultDenominatorMode(topic)) === 'mixed') {
        const firstDenominator = randomInt(2, 12);
        let secondDenominator = randomInt(2, 12);
        while (secondDenominator === firstDenominator) {
          secondDenominator = randomInt(2, 12);
        }

        const firstNumerator = randomInt(1, firstDenominator - 1);
        const secondNumerator = randomInt(1, secondDenominator - 1);
        return {
          kind: 'fraction',
          topic,
          denominatorMode: 'mixed',
          prompt: `${fractionToText({ numerator: firstNumerator, denominator: firstDenominator })} + ${fractionToText({ numerator: secondNumerator, denominator: secondDenominator })}`,
          answer: reduceFraction(
            (firstNumerator * secondDenominator) + (secondNumerator * firstDenominator),
            firstDenominator * secondDenominator
          ),
        };
      }

      const denominator = randomInt(2, 12);
      const first = randomInt(1, denominator - 1);
      const second = randomInt(1, denominator - first);
      return {
        kind: 'fraction',
        topic,
        denominatorMode: 'same',
        prompt: `${fractionToText({ numerator: first, denominator })} + ${fractionToText({ numerator: second, denominator })}`,
        answer: reduceFraction(first + second, denominator),
      };
    }
    case 'subtract-fractions': {
      if ((denominatorMode || getDefaultDenominatorMode(topic)) === 'mixed') {
        const firstDenominator = randomInt(2, 12);
        let secondDenominator = randomInt(2, 12);
        while (secondDenominator === firstDenominator) {
          secondDenominator = randomInt(2, 12);
        }

        const commonDenominator = firstDenominator * secondDenominator;
        let firstScaled = randomInt(2, Math.max(2, commonDenominator - 1));
        let secondScaled = randomInt(1, firstScaled - 1);

        while (firstScaled % secondDenominator !== 0 || secondScaled % firstDenominator !== 0) {
          firstScaled = randomInt(2, Math.max(2, commonDenominator - 1));
          secondScaled = randomInt(1, firstScaled - 1);
        }

        const firstNumerator = firstScaled / secondDenominator;
        const secondNumerator = secondScaled / firstDenominator;
        return {
          kind: 'fraction',
          topic,
          denominatorMode: 'mixed',
          prompt: `${fractionToText({ numerator: firstNumerator, denominator: firstDenominator })} - ${fractionToText({ numerator: secondNumerator, denominator: secondDenominator })}`,
          answer: reduceFraction(
            (firstNumerator * secondDenominator) - (secondNumerator * firstDenominator),
            firstDenominator * secondDenominator
          ),
        };
      }

      const denominator = randomInt(3, 12);
      const first = randomInt(2, denominator - 1);
      const second = randomInt(1, first - 1);
      return {
        kind: 'fraction',
        topic,
        denominatorMode: 'same',
        prompt: `${fractionToText({ numerator: first, denominator })} - ${fractionToText({ numerator: second, denominator })}`,
        answer: reduceFraction(first - second, denominator),
      };
    }
    case 'multiply-fractions': {
      if ((denominatorMode || getDefaultDenominatorMode(topic)) === 'same') {
        const denominator = randomInt(2, 12);
        const first = { numerator: randomInt(1, denominator - 1), denominator };
        const second = { numerator: randomInt(1, denominator - 1), denominator };
        return {
          kind: 'fraction',
          topic,
          denominatorMode: 'same',
          prompt: `${fractionToText(first)} × ${fractionToText(second)}`,
          answer: reduceFraction(first.numerator * second.numerator, first.denominator * second.denominator),
        };
      }

      const first = createProperFraction();
      const second = createProperFraction();
      return {
        kind: 'fraction',
        topic,
        denominatorMode: 'mixed',
        prompt: `${fractionToText(first)} × ${fractionToText(second)}`,
        answer: reduceFraction(first.numerator * second.numerator, first.denominator * second.denominator),
      };
    }
    case 'divide-fractions': {
      if ((denominatorMode || getDefaultDenominatorMode(topic)) === 'same') {
        const denominator = randomInt(2, 12);
        const first = { numerator: randomInt(1, denominator - 1), denominator };
        const second = { numerator: randomInt(1, denominator - 1), denominator };
        return {
          kind: 'fraction',
          topic,
          denominatorMode: 'same',
          prompt: `${fractionToText(first)} ÷ ${fractionToText(second)}`,
          answer: reduceFraction(first.numerator * second.denominator, first.denominator * second.numerator),
        };
      }

      const first = createProperFraction();
      const second = createProperFraction();
      return {
        kind: 'fraction',
        topic,
        denominatorMode: 'mixed',
        prompt: `${fractionToText(first)} ÷ ${fractionToText(second)}`,
        answer: reduceFraction(first.numerator * second.denominator, first.denominator * second.numerator),
      };
    }
    default:
      return {
        kind: 'fraction',
        topic,
        prompt: 'Write the answer.',
        answer: '',
      };
  }
}

function buildDecimalQuestion(topic) {
  switch (topic) {
    case 'decimal-place-value': {
      const wholeDigits = randomInt(1, 3);
      const decimalDigits = randomInt(2, 3);
      const digitCount = wholeDigits + decimalDigits;
      const highlightIndex = randomInt(0, digitCount - 1);
      const number = buildDecimalNumber(wholeDigits, decimalDigits, highlightIndex);
      return {
        kind: 'decimal',
        topic,
        mode: 'place-value',
        number: number.value,
        highlightIndex,
        answer: formatDecimalPlaceValue(number.highlightDigit, number.highlightPower),
      };
    }
    case 'decimal-operations': {
      const operation = ['addition', 'subtraction', 'multiplication', 'division'][randomInt(0, 3)];
      const question = buildDecimalOperation(operation);
      return {
        kind: 'decimal',
        topic,
        mode: 'operations',
        operation,
        left: question.left,
        right: question.right,
        answer: question.answer,
      };
    }
    default:
      return {
        kind: 'decimal',
        topic,
        mode: 'operations',
        prompt: 'Write the answer.',
        answer: '',
      };
  }
}

function buildPercentageQuestion(topic) {
  switch (topic) {
    case 'percentage-of-amount': {
      const percent = pickRandomFromList([5, 10, 20, 25, 50, 75]);
      const amount = randomInt(2, 40) * 10;
      return {
        kind: 'percentage',
        topic,
        prompt: `Find ${percent}% of ${amount}`,
        answer: formatDecimalResult((percent / 100) * amount),
      };
    }
    case 'fraction-decimal-percentage': {
      const options = [
        { n: 1, d: 2 }, { n: 1, d: 4 }, { n: 3, d: 4 }, { n: 1, d: 5 },
        { n: 2, d: 5 }, { n: 3, d: 5 }, { n: 4, d: 5 }, { n: 1, d: 10 },
        { n: 3, d: 10 }, { n: 7, d: 10 }, { n: 1, d: 20 }, { n: 1, d: 25 },
      ];
      const chosen = pickRandomFromList(options);
      const decimal = chosen.n / chosen.d;
      const percent = decimal * 100;
      return {
        kind: 'percentage',
        topic,
        prompt: `Write ${fractionToText({ numerator: chosen.n, denominator: chosen.d })} as a decimal and a percentage.`,
        answer: `${formatDecimalResult(decimal)} and ${formatDecimalResult(percent)}%`,
      };
    }
    case 'percentage-increase': {
      const base = randomInt(2, 20) * 20;
      const percent = randomInt(1, 10) * 5;
      return {
        kind: 'percentage',
        topic,
        prompt: `Increase ${base} by ${percent}%`,
        answer: formatPercentageChange(base, percent, 1),
      };
    }
    case 'percentage-decrease': {
      const base = randomInt(2, 20) * 20;
      const percent = randomInt(1, 10) * 5;
      return {
        kind: 'percentage',
        topic,
        prompt: `Decrease ${base} by ${percent}%`,
        answer: formatPercentageChange(base, percent, -1),
      };
    }
    case 'percentage-to-decimal': {
      const percent = randomInt(5, 100);
      return {
        kind: 'percentage',
        topic,
        prompt: `${percent}%`,
        answer: formatPercentageToDecimal(percent),
      };
    }
    default:
      return {
        kind: 'percentage',
        topic,
        prompt: 'Write the answer.',
        answer: '',
      };
  }
}

function buildGeometryQuestion(topic) {
  switch (topic) {
    case 'position-direction': {
      const dirs = ['North', 'East', 'South', 'West'];
      const startIdx = randomInt(0, 3);
      const turn = pickRandomFromList([90, 180, 270]);
      const clockwise = randomInt(0, 1) === 0;
      const steps = turn / 90;
      const newIdx = clockwise ? (startIdx + steps) % 4 : ((startIdx - steps) % 4 + 4) % 4;
      return {
        kind: 'geometry',
        topic,
        prompt: `Facing ${dirs[startIdx]}, turn ${turn}° ${clockwise ? 'clockwise' : 'anticlockwise'}. What direction do you now face?`,
        answer: dirs[newIdx],
      };
    }
    case 'coordinates': {
      const x = randomInt(1, 10);
      const y = randomInt(1, 10);
      return {
        kind: 'geometry',
        topic,
        prompt: `A point is ${x} units right and ${y} units up from the origin (0, 0). Write its coordinates.`,
        answer: `(${x}, ${y})`,
      };
    }
    case 'plot-cartesian-plane': {
      const points = Array.from({ length: 3 }, (_, index) => ({
        label: String.fromCharCode(65 + index),
        x: randomInt(-4, 4),
        y: randomInt(-4, 4),
      }));
      return {
        kind: 'geometry',
        topic,
        diagram: 'cartesian-plane',
        points,
        prompt: `Plot points ${points.map((point) => `${point.label}(${point.x}, ${point.y})`).join(', ')} on the Cartesian plane.`,
        answer: points.map((point) => `${point.label}(${point.x}, ${point.y})`).join(', '),
      };
    }
    case '2d-shapes': {
      const shape = pickRandomFromList(get2dShapeFacts());
      const promptType = pickRandomFromList(['sides', 'vertices', 'symmetry']);
      if (promptType === 'sides') {
        return {
          kind: 'geometry',
          topic,
          prompt: `${shape.name}: number of sides`,
          answer: shape.sides,
        };
      }
      if (promptType === 'vertices') {
        return {
          kind: 'geometry',
          topic,
          prompt: `${shape.name}: number of vertices`,
          answer: shape.vertices,
        };
      }
      return {
        kind: 'geometry',
        topic,
        prompt: `${shape.name}: line(s) of symmetry`,
        answer: shape.symmetry,
      };
    }
    case '3d-shapes': {
      const shape = pickRandomFromList(get3dShapeFacts());
      const promptType = pickRandomFromList(['faces', 'edges', 'vertices']);
      if (promptType === 'faces') {
        return {
          kind: 'geometry',
          topic,
          prompt: `${shape.name}: number of faces`,
          answer: shape.faces,
        };
      }
      if (promptType === 'edges') {
        return {
          kind: 'geometry',
          topic,
          prompt: `${shape.name}: number of edges`,
          answer: shape.edges,
        };
      }
      return {
        kind: 'geometry',
        topic,
        prompt: `${shape.name}: number of vertices`,
        answer: shape.vertices,
      };
    }
    case 'angles': {
      const first = randomInt(30, 80);
      const second = randomInt(20, 70);
      const missing = 180 - first - second;
      return {
        kind: 'geometry',
        topic,
        prompt: `${first}° + ${second}° + x = 180°`,
        answer: `x = ${missing}°`,
      };
    }
    case 'symmetry': {
      const shapes = [
        { name: 'Square', lines: 4 },
        { name: 'Rectangle', lines: 2 },
        { name: 'Equilateral Triangle', lines: 3 },
        { name: 'Isosceles Triangle', lines: 1 },
        { name: 'Regular Pentagon', lines: 5 },
        { name: 'Regular Hexagon', lines: 6 },
      ];
      const shape = pickRandomFromList(shapes);
      return {
        kind: 'geometry',
        topic,
        prompt: shape.name,
        answer: `${shape.lines} line(s) of symmetry`,
      };
    }
    case 'transformations': {
      const x = randomInt(-6, 6);
      const y = randomInt(-6, 6);
      const dx = randomInt(-4, 4);
      const dy = randomInt(-4, 4);
      return {
        kind: 'geometry',
        topic,
        prompt: `A(${x}, ${y}) translated by (${dx}, ${dy})`,
        answer: `A'(${x + dx}, ${y + dy})`,
      };
    }
    case 'congruence': {
      const a = randomInt(3, 10);
      const b = randomInt(3, 10);
      const c = randomInt(3, 10);
      const congruent = randomInt(0, 1) === 0;
      const d = congruent ? a : a + randomInt(1, 3);
      const e = congruent ? b : b + randomInt(1, 3);
      const f = congruent ? c : c + randomInt(1, 3);
      return {
        kind: 'geometry',
        topic,
        prompt: `△P: ${a}, ${b}, ${c} and △Q: ${d}, ${e}, ${f}`,
        answer: congruent ? 'Congruent' : 'Not congruent',
      };
    }
    case 'similarity': {
      const side = randomInt(2, 14);
      const scale = randomInt(2, 5);
      return {
        kind: 'geometry',
        topic,
        prompt: `Side ${side} cm at scale factor ${scale}`,
        answer: `${side * scale} cm`,
      };
    }
    case 'circle-geometry': {
      const askDiameter = randomInt(0, 1) === 0;
      if (askDiameter) {
        const diameter = randomInt(4, 30);
        return {
          kind: 'geometry',
          topic,
          prompt: `Diameter = ${diameter} cm`,
          answer: `Radius = ${diameter / 2} cm`,
        };
      }

      const radius = randomInt(2, 15);
      return {
        kind: 'geometry',
        topic,
        prompt: `Radius = ${radius} cm`,
        answer: `Diameter = ${radius * 2} cm`,
      };
    }
    case 'geometric-reasoning': {
      const angle = randomInt(35, 145);
      return {
        kind: 'geometry',
        topic,
        prompt: `${angle}° + y = 180°`,
        answer: `y = ${180 - angle}°`,
      };
    }
    case 'proof': {
      const statements = [
        { prompt: 'Vertical opposite angles are equal.', answer: 'True' },
        { prompt: 'A triangle can have two right angles.', answer: 'False' },
        { prompt: 'All quadrilaterals have four equal sides.', answer: 'False' },
        { prompt: 'Corresponding angles in parallel lines are equal.', answer: 'True' },
      ];
      const statement = pickRandomFromList(statements);
      return {
        kind: 'geometry',
        topic,
        prompt: statement.prompt,
        answer: statement.answer,
      };
    }
    default:
      return {
        kind: 'geometry',
        topic,
        prompt: 'Write the answer.',
        answer: '',
      };
  }
}

function buildSecondaryChartQuestion(topic) {
  const values = Array.from({ length: 8 }, () => randomInt(1, 9));

  if (topic === 'stem-and-leaf') {
    const data = values.map((value) => value * 10 + randomInt(0, 9)).sort((a, b) => a - b);
    return { kind: 'statistics', topic, data: `Data: ${data.join(', ')}`, prompt: 'Construct a stem-and-leaf plot for the data.', chart: { type: 'stem-and-leaf', values: data } };
  }

  if (topic === 'histograms') {
    const bins = [randomInt(1, 8), randomInt(1, 8), randomInt(1, 8), randomInt(1, 8)];
    return { kind: 'statistics', topic, data: `Intervals: 0–9, 10–19, 20–29, 30–39`, prompt: 'Draw a histogram using the frequency table.', chart: { type: 'histogram', bins, xLabel: 'Class interval', yLabel: 'Frequency', table: [['0–9', bins[0]], ['10–19', bins[1]], ['20–29', bins[2]], ['30–39', bins[3]]] } };
  }

  if (topic === 'dot-plots') {
    return { kind: 'statistics', topic, data: `Data: ${values.join(', ')}`, prompt: 'Construct a dot plot for the data.', chart: { type: 'dot-plot', values } };
  }

  if (topic === 'scatter-plots') {
    const points = values.map((x, index) => ({ x, y: Math.max(1, Math.min(10, x + randomInt(-2, 2))) }));
    return { kind: 'statistics', topic, data: 'Paired data: study hours and test score', prompt: 'Plot the paired data on a scatter plot.', chart: { type: 'scatter', points, xLabel: 'Study hours', yLabel: 'Test score', table: points.map(point => [point.x, point.y]) } };
  }

  if (topic === 'frequency-distributions') {
    const frequencies = [randomInt(2, 8), randomInt(2, 8), randomInt(2, 8), randomInt(2, 8)];
    return { kind: 'statistics', topic, data: 'Groups: 1–5, 6–10, 11–15, 16–20', prompt: 'Display the frequency distribution as a column graph.', chart: { type: 'frequency', frequencies, xLabel: 'Group', yLabel: 'Frequency', table: [['1–5', frequencies[0]], ['6–10', frequencies[1]], ['11–15', frequencies[2]], ['16–20', frequencies[3]]] } };
  }

  if (topic === 'distributions') {
    const shape = pickRandomFromList(['approximately symmetric', 'positively skewed', 'negatively skewed']);
    return { kind: 'statistics', topic, data: `The distribution is ${shape}.`, prompt: 'Sketch a distribution with this shape.', chart: { type: 'distribution', shape } };
  }

  const chartBins = values.slice(0, 4);
  return { kind: 'statistics', topic, data: `Frequencies: ${chartBins.join(', ')}`, prompt: 'Draw a suitable graph for the data.', chart: { type: 'histogram', bins: chartBins, xLabel: 'Category', yLabel: 'Frequency', table: chartBins.map((value, index) => [`${index + 1}`, value]) } };
}

function buildStatisticsQuestion(topic, min, max) {
    const parsedMin = Number.isFinite(min) ? min : 1;
    const parsedMax = Number.isFinite(max) ? max : 12;
    const safeMin = Math.max(1, Math.min(parsedMin, parsedMax));
    const safeMax = Math.max(safeMin, Math.max(parsedMin, parsedMax));
    const rangeInt = (minimumValue = 1) => {
      const low = Math.max(minimumValue, safeMin);
      const high = Math.max(low, safeMax);
      return randomInt(low, high);
    };

    const values = Array.from({ length: randomInt(5, 8) }, () => rangeInt(0));
    const sortedValues = [...values].sort((a, b) => a - b);
    const dataString = values.join(', ');
    const sum = values.reduce((total, value) => total + value, 0);
    const mean = sum / values.length;
    const middle = Math.floor(sortedValues.length / 2);
    const median = sortedValues.length % 2 === 0
      ? (sortedValues[middle - 1] + sortedValues[middle]) / 2
      : sortedValues[middle];
    const counts = new Map();
    values.forEach((value) => counts.set(value, (counts.get(value) || 0) + 1));
    const highestFrequency = Math.max(...counts.values());
    const modes = [...counts.entries()].filter(([, frequency]) => frequency === highestFrequency).map(([value]) => value).sort((a, b) => a - b);
    const rangeValue = Math.max(...values) - Math.min(...values);
    const lowerHalf = sortedValues.slice(0, Math.floor(sortedValues.length / 2));
    const upperHalf = sortedValues.slice(Math.ceil(sortedValues.length / 2));
    const lowerQuartile = lowerHalf[Math.floor(lowerHalf.length / 2)] ?? sortedValues[0];
    const upperQuartile = upperHalf[Math.floor(upperHalf.length / 2)] ?? sortedValues[sortedValues.length - 1];
    const iqr = upperQuartile - lowerQuartile;
    const meanSquared = values.reduce((total, value) => total + ((value - mean) ** 2), 0) / values.length;
    const standardDeviation = Math.sqrt(meanSquared);

    if (['stem-and-leaf', 'histograms', 'dot-plots', 'scatter-plots', 'frequency-distributions', 'draw-charts', 'distributions'].includes(topic)) {
      return buildSecondaryChartQuestion(topic);
    }

    switch (topic) {
      case 'collecting-data': {
        const scenarios = [
          { prompt: "Which method is best to find out students' favourite colour?", answer: 'Survey' },
          { prompt: 'Which method is best to record how many cars pass a school gate in an hour?', answer: 'Observation / Tally' },
          { prompt: 'Which method is best to test whether plants grow faster with more sunlight?', answer: 'Experiment' },
          { prompt: 'Which method is best to find out how students travel to school?', answer: 'Survey' },
        ];
        const scenario = pickRandomFromList(scenarios);
        return { kind: 'statistics', topic, prompt: scenario.prompt, answer: scenario.answer };
      }
      case 'picture-graphs': {
        const items = ['apples', 'books', 'stars', 'cars'];
        const item = pickRandomFromList(items);
        const key = pickRandomFromList([2, 5, 10]);
        const symbols = randomInt(2, 8);
        return {
          kind: 'statistics',
          topic,
          data: `Each picture = ${key} ${item}`,
          prompt: `If there are ${symbols} pictures shown, how many ${item} are there in total?`,
          answer: `${symbols * key} ${item}`,
        };
      }
      case 'bar-graphs': {
        const categories = ['Red', 'Blue', 'Green', 'Yellow'].map((name) => ({ name, value: randomInt(2, 20) }));
        const dataStr = categories.map((c) => `${c.name}: ${c.value}`).join(', ');
        const highest = categories.reduce((a, b) => (a.value > b.value ? a : b));
        return {
          kind: 'statistics',
          topic,
          data: dataStr,
          prompt: 'Which category has the highest value on the bar graph?',
          answer: highest.name,
        };
      }
      case 'chance-language': {
        const statements = [
          { prompt: 'Rolling a 7 on a standard six-sided die', answer: 'Impossible' },
          { prompt: 'The sun rising tomorrow', answer: 'Certain' },
          { prompt: 'Flipping a coin and it landing on heads', answer: 'Even chance' },
          { prompt: 'It raining in a desert tomorrow', answer: 'Unlikely' },
          { prompt: 'Picking a red ball from a bag of only red balls', answer: 'Certain' },
          { prompt: 'Picking a blue ball from a bag with 9 red balls and 1 blue ball', answer: 'Unlikely' },
          { prompt: 'Getting a number less than 7 when rolling a standard die', answer: 'Certain' },
        ];
        const statement = pickRandomFromList(statements);
        return {
          kind: 'statistics',
          topic,
          prompt: `Describe the chance: ${statement.prompt}. (Impossible, Unlikely, Even chance, Likely, or Certain)`,
          answer: statement.answer,
        };
      }
      case 'simple-probability': {
        const totalOutcomes = randomInt(4, 10);
        const favourable = randomInt(1, totalOutcomes - 1);
        const scenario = pickRandomFromList(['marbles', 'cards', 'spinner sections']);
        return {
          kind: 'statistics',
          topic,
          prompt: `A bag has ${totalOutcomes} ${scenario}, ${favourable} of which are the winning colour. What is the probability of picking a winning one?`,
          answer: reduceFraction(favourable, totalOutcomes),
        };
      }
      case 'tables': {
        const frequencyMap = new Map();
        values.forEach((value) => frequencyMap.set(value, (frequencyMap.get(value) || 0) + 1));
          return {
            kind: 'statistics',
            topic,
            data: dataString,
          tableRows: buildFrequencyTableRows(values, frequencyMap),
            prompt: 'Use the data to complete the frequency table.',
            answer: 'Frequency table',
          };
      }
      case 'graphs': {
        const graphTypes = [
          { prompt: 'Which graph is best for comparing categories?', answer: 'Bar graph' },
          { prompt: 'Which graph is best for showing change over time?', answer: 'Line graph' },
          { prompt: 'Which graph is best for showing parts of a whole?', answer: 'Pie chart' },
          { prompt: 'Which graph would you use for grouped data?', answer: 'Histogram' },
        ];
        const graph = pickRandomFromList(graphTypes);
        return { kind: 'statistics', topic, prompt: graph.prompt, answer: graph.answer };
      }
      case 'mean':
        return { kind: 'statistics', topic, data: dataString, prompt: 'Find the mean of the data set.', answer: formatDecimalResult(mean) };
      case 'median':
        return { kind: 'statistics', topic, data: dataString, prompt: 'Find the median of the data set.', answer: formatDecimalResult(median) };
      case 'mode':
        return { kind: 'statistics', topic, data: dataString, prompt: 'Find the mode of the data set.', answer: modes.length === 1 ? String(modes[0]) : modes.join(', ') };
      case 'range':
        return { kind: 'statistics', topic, data: dataString, prompt: 'Find the range of the data set.', answer: String(rangeValue) };
      case 'interquartile-range':
        return { kind: 'statistics', topic, data: dataString, prompt: 'Find the interquartile range of the data set.', answer: String(iqr) };
      case 'standard-deviation':
        return { kind: 'statistics', topic, data: dataString, prompt: 'Find the standard deviation of the data set.', answer: formatDecimalResult(standardDeviation) };
      case 'data-analysis': {
        const analysisQuestions = [
          { prompt: 'What does the data suggest about the trend?', answer: 'Describe the pattern in the data' },
          { prompt: 'Is there any outlier in the data set?', answer: 'State whether there is an outlier' },
          { prompt: 'What conclusion can you make from the data?', answer: 'Write a reasonable conclusion' },
        ];
        const analysis = pickRandomFromList(analysisQuestions);
        return { kind: 'statistics', topic, data: dataString, prompt: analysis.prompt, answer: analysis.answer };
      }
      case 'regression': {
        const regressionTypes = ['correlation', 'best-fit-line', 'prediction'];
        const regressionType = pickRandomFromList(regressionTypes);

        if (regressionType === 'correlation') {
          const scenarios = [
            {
              data: 'Scatter plot: study time vs test score',
              plot: {
                points: [
                  { x: 1, y: 2 },
                  { x: 2, y: 3 },
                  { x: 3, y: 5 },
                  { x: 4, y: 6 },
                  { x: 5, y: 7 },
                ],
                line: { start: { x: 1, y: 1.5 }, end: { x: 6, y: 8.5 } },
              },
              prompt: 'Study time vs test score: what type of correlation does the scatter plot show?',
              answer: 'Positive correlation',
            },
            {
              data: 'Scatter plot: price vs quantity sold',
              plot: {
                points: [
                  { x: 1, y: 8 },
                  { x: 2, y: 7 },
                  { x: 3, y: 5 },
                  { x: 4, y: 4 },
                  { x: 5, y: 2 },
                ],
                line: { start: { x: 1, y: 8.5 }, end: { x: 6, y: 1.5 } },
              },
              prompt: 'Price vs quantity sold: what type of correlation does the scatter plot show?',
              answer: 'Negative correlation',
            },
            {
              data: 'Scatter plot: age vs shoe size',
              plot: {
                points: [
                  { x: 1, y: 4 },
                  { x: 2, y: 4 },
                  { x: 3, y: 5 },
                  { x: 4, y: 4 },
                  { x: 5, y: 4 },
                ],
                line: null,
              },
              prompt: 'Age vs shoe size: what type of correlation does the scatter plot show?',
              answer: 'No correlation',
            },
          ];
          const scenario = pickRandomFromList(scenarios);
          return { kind: 'statistics', topic, data: scenario.data, plot: scenario.plot, prompt: scenario.prompt, answer: scenario.answer };
        }

        if (regressionType === 'best-fit-line') {
          const scenario = pickRandomFromList([
            {
              data: 'Scatter plot: number of lessons completed vs score',
              plot: {
                points: [
                  { x: 1, y: 2 },
                  { x: 2, y: 4 },
                  { x: 3, y: 6 },
                  { x: 4, y: 8 },
                ],
                line: { start: { x: 1, y: 1.5 }, end: { x: 5, y: 9 } },
              },
              prompt: 'Number of lessons completed vs score: which line should be drawn to show the trend?',
              answer: 'Line of best fit',
            },
            {
              data: 'Scatter plot: hours practised vs result',
              plot: {
                points: [
                  { x: 2, y: 1 },
                  { x: 3, y: 2 },
                  { x: 4, y: 3 },
                  { x: 5, y: 4 },
                ],
                line: { start: { x: 1.5, y: 1 }, end: { x: 6, y: 5 } },
              },
              prompt: 'Hours practised vs result: what line should be drawn to show the trend?',
              answer: 'Line of best fit',
            },
          ]);
          return { kind: 'statistics', topic, data: scenario.data, plot: scenario.plot, prompt: scenario.prompt, answer: scenario.answer };
        }

        const slope = randomInt(1, 4);
        const intercept = randomInt(0, 5);
        const xValue = randomInt(4, 8);
        const predictedY = slope * xValue + intercept;
        return {
          kind: 'statistics',
          topic,
          data: `Scatter plot trend: y = ${slope}x + ${intercept}`,
          plot: {
            points: [
              { x: 1, y: slope * 1 + intercept },
              { x: 2, y: slope * 2 + intercept },
              { x: 3, y: slope * 3 + intercept },
              { x: 4, y: slope * 4 + intercept },
              { x: 5, y: slope * 5 + intercept },
            ],
            line: { start: { x: 1, y: slope * 1 + intercept }, end: { x: 6, y: slope * 6 + intercept } },
          },
          prompt: `Use the line of best fit on the scatter plot to predict y when x = ${xValue}.`,
          answer: String(predictedY),
        };
      }
      default:
        return { kind: 'statistics', topic, prompt: 'Write the answer.', answer: '' };
    }
  }

function buildMeasurementQuestion(topic, min, max) {
  const parsedMin = Number.isFinite(min) ? min : 1;
  const parsedMax = Number.isFinite(max) ? max : 12;
  const safeMin = Math.max(1, Math.min(parsedMin, parsedMax));
  const safeMax = Math.max(safeMin, Math.max(parsedMin, parsedMax));
  const rangeInt = (minimumValue = 1) => {
    const low = Math.max(minimumValue, safeMin);
    const high = Math.max(low, safeMax);
    return randomInt(low, high);
  };

  switch (topic) {
    case 'length': {
      const meters = rangeInt(1);
      return {
        kind: 'measurement',
        topic,
        prompt: `${meters} m to cm`,
        answer: `${meters * 100} cm`,
      };
    }
    case 'area': {
      const shapeType = pickRandomFromList(['rectangle', 'square', 'triangle', 'parallelogram']);

      if (shapeType === 'rectangle') {
        const length = rangeInt(2);
        const width = rangeInt(2);
        return {
          kind: 'measurement',
          topic,
          shape: 'rectangle',
          dimensions: { length, width },
          prompt: `Rectangle ${length} cm by ${width} cm. Find the area`,
          answer: `${length * width} cm²`,
        };
      }

      if (shapeType === 'square') {
        const side = rangeInt(2);
        return {
          kind: 'measurement',
          topic,
          shape: 'square',
          dimensions: { side },
          prompt: `Square side length ${side} cm. Find the area`,
          answer: `${side * side} cm²`,
        };
      }

      if (shapeType === 'triangle') {
        const base = rangeInt(2);
        const height = rangeInt(2);
        const area = (base * height) / 2;
        return {
          kind: 'measurement',
          topic,
          shape: 'triangle-area',
          dimensions: { base, height },
          prompt: `Triangle base ${base} cm and height ${height} cm. Find the area`,
          answer: `${formatDecimalResult(area)} cm²`,
        };
      }

      const base = rangeInt(2);
      const height = rangeInt(2);
      return {
        kind: 'measurement',
        topic,
        shape: 'parallelogram',
        dimensions: { base, height },
        prompt: `Parallelogram base ${base} cm and perpendicular height ${height} cm. Find the area`,
        answer: `${base * height} cm²`,
      };
    }
    case 'perimeter': {
      const shapeType = pickRandomFromList(['rectangle', 'square', 'triangle', 'regular-pentagon']);

      if (shapeType === 'rectangle') {
        const length = rangeInt(2);
        const width = rangeInt(2);
        return {
          kind: 'measurement',
          topic,
          shape: 'rectangle',
          dimensions: { length, width },
          prompt: `Rectangle ${length} cm by ${width} cm. Find the perimeter`,
          answer: `${2 * (length + width)} cm`,
        };
      }

      if (shapeType === 'square') {
        const side = rangeInt(2);
        return {
          kind: 'measurement',
          topic,
          shape: 'square',
          dimensions: { side },
          prompt: `Square side length ${side} cm. Find the perimeter`,
          answer: `${4 * side} cm`,
        };
      }

      if (shapeType === 'triangle') {
        const a = rangeInt(3);
        const b = rangeInt(3);
        const cMin = Math.abs(a - b) + 1;
        const cMax = a + b - 1;
        const c = randomInt(cMin, Math.max(cMin, Math.min(cMax, safeMax)));
        return {
          kind: 'measurement',
          topic,
          shape: 'triangle-perimeter',
          dimensions: { a, b, c },
          prompt: `Triangle side lengths ${a} cm, ${b} cm and ${c} cm. Find the perimeter`,
          answer: `${a + b + c} cm`,
        };
      }

      const side = rangeInt(2);
      return {
        kind: 'measurement',
        topic,
        shape: 'regular-pentagon',
        dimensions: { side },
        prompt: `Regular pentagon side length ${side} cm. Find the perimeter`,
        answer: `${5 * side} cm`,
      };
    }
    case 'volume': {
      const solidType = pickRandomFromList(['cuboid', 'cube', 'cylinder', 'triangular-prism']);

      if (solidType === 'cuboid') {
        const l = rangeInt(2);
        const w = rangeInt(2);
        const h = rangeInt(2);
        return {
          kind: 'measurement',
          topic,
          shape: 'cuboid',
          dimensions: { length: l, width: w, height: h },
          prompt: `Cuboid ${l} cm by ${w} cm by ${h} cm. Find the volume`,
          answer: `${l * w * h} cm³`,
        };
      }

      if (solidType === 'cube') {
        const side = rangeInt(2);
        return {
          kind: 'measurement',
          topic,
          shape: 'cube',
          dimensions: { side },
          prompt: `Cube side length ${side} cm. Find the volume`,
          answer: `${side * side * side} cm³`,
        };
      }

      if (solidType === 'cylinder') {
        const radius = rangeInt(2);
        const height = rangeInt(2);
        return {
          kind: 'measurement',
          topic,
          shape: 'cylinder',
          dimensions: { radius, height },
          prompt: `Cylinder radius ${radius} cm and height ${height} cm. Find the volume`,
          answer: `${radius * radius * height}π cm³`,
        };
      }

      const base = rangeInt(2);
      const triHeight = rangeInt(2);
      const length = rangeInt(2);
      const volume = (base * triHeight * length) / 2;
      return {
        kind: 'measurement',
        topic,
        shape: 'triangular-prism',
        dimensions: { base, triHeight, length },
        prompt: `Triangular prism with triangle base ${base} cm, triangle height ${triHeight} cm and prism length ${length} cm. Find the volume`,
        answer: `${formatDecimalResult(volume)} cm³`,
      };
    }
    case 'surface-area': {
      const side = rangeInt(2);
      return {
        kind: 'measurement',
        topic,
        shape: 'cube',
        dimensions: { side },
        prompt: `Cube side length ${side} cm. Find the surface area`,
        answer: `${6 * side * side} cm²`,
      };
    }
    case 'capacity': {
      const liters = rangeInt(1);
      return {
        kind: 'measurement',
        topic,
        prompt: `Convert ${liters} L to mL`,
        answer: `${liters * 1000} mL`,
      };
    }
    case 'mass': {
      const kg = rangeInt(1);
      return {
        kind: 'measurement',
        topic,
        prompt: `Convert ${kg} kg to g`,
        answer: `${kg * 1000} g`,
      };
    }
    case 'time': {
      const hours = rangeInt(1);
      const minutes = randomInt(1, 11) * 5;
      return {
        kind: 'measurement',
        topic,
        prompt: `${hours} h ${minutes} min to minutes`,
        answer: `${hours * 60 + minutes} min`,
      };
    }
    case 'calendars': {
      if (randomInt(0, 1) === 0) {
        const weeks = randomInt(1, 10);
        return {
          kind: 'measurement',
          topic,
          prompt: `Convert ${weeks} weeks to days`,
          answer: `${weeks * 7} days`,
        };
      }
      const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
      const startIdx = randomInt(0, 6);
      const add = randomInt(1, 20);
      return {
        kind: 'measurement',
        topic,
        prompt: `If today is ${days[startIdx]}, what day will it be in ${add} days?`,
        answer: days[(startIdx + add) % 7],
      };
    }
    case 'temperature': {
      const start = randomInt(-10, 30);
      const change = randomInt(1, 15);
      const rises = randomInt(0, 1) === 0;
      const result = rises ? start + change : start - change;
      return {
        kind: 'measurement',
        topic,
        prompt: `The temperature is ${start}°C and ${rises ? 'rises' : 'falls'} by ${change}°C. What is the new temperature?`,
        answer: `${result}°C`,
      };
    }
    case 'unit-conversions': {
      const conversionType = pickRandomFromList(['length', 'mass', 'capacity']);
      if (conversionType === 'length') {
        const cm = rangeInt(1) * 100;
        return {
          kind: 'measurement',
          topic,
          prompt: `${cm} cm to m`,
          answer: `${formatDecimalResult(cm / 100)} m`,
        };
      }

      if (conversionType === 'mass') {
        const grams = rangeInt(1) * 100;
        return {
          kind: 'measurement',
          topic,
          prompt: `${grams} g to kg`,
          answer: `${formatDecimalResult(grams / 1000)} kg`,
        };
      }

      const ml = rangeInt(1) * 250;
      return {
        kind: 'measurement',
        topic,
        prompt: `${ml} mL to L`,
        answer: `${formatDecimalResult(ml / 1000)} L`,
      };
    }
    case 'scale-drawings': {
      const scale = pickRandomFromList([20, 50, 100]);
      const realMeters = rangeInt(2);
      const drawingCm = (realMeters * 100) / scale;
      return {
        kind: 'measurement',
        topic,
        prompt: `Scale 1:${scale}, real ${realMeters} m -> ? cm`,
        answer: `${formatDecimalResult(drawingCm)} cm`,
      };
    }
    default:
      return {
        kind: 'measurement',
        topic,
        prompt: 'Write the answer.',
        answer: '',
      };
  }
}

function buildFrequencyTableRows(values, frequencyMap = new Map()) {
  const uniqueValues = [...new Set(values)].sort((a, b) => a - b);
  return uniqueValues.map((value) => ({
    value,
    frequency: frequencyMap.get(value) ?? values.filter((item) => item === value).length,
  }));
}

function buildTrigonometryQuestion(topic, min, max) {
  const parsedMin = Number.isFinite(min) ? min : 1;
  const parsedMax = Number.isFinite(max) ? max : 12;
  const safeMin = Math.max(1, Math.min(parsedMin, parsedMax));
  const safeMax = Math.max(safeMin, Math.max(parsedMin, parsedMax));
  const rangeInt = (minimumValue = 1) => {
    const low = Math.max(minimumValue, safeMin);
    const high = Math.max(low, safeMax);
    return randomInt(low, high);
  };

  switch (topic) {
    case 'right-angle-trigonometry': {
      const angle = randomInt(20, 70);
      const hypotenuse = rangeInt(2);
      const opposite = hypotenuse * Math.sin((angle * Math.PI) / 180);
      return {
        kind: 'trigonometry',
        topic,
        shape: 'right-triangle',
        dimensions: { angle, hypotenuse },
        prompt: `Right triangle: hypotenuse ${hypotenuse} cm, angle ${angle}°. Find opposite`,
        answer: `${formatDecimalResult(opposite)} cm`,
      };
    }
    case 'sine-rule': {
      const sideA = rangeInt(3);
      const angleA = randomInt(25, 95);
      const angleB = randomInt(25, Math.min(95, 170 - angleA));
      const sideB = sideA * Math.sin((angleB * Math.PI) / 180) / Math.sin((angleA * Math.PI) / 180);
      return {
        kind: 'trigonometry',
        topic,
        shape: 'sine-rule-triangle',
        dimensions: { sideA, angleA, angleB },
        prompt: `a=${sideA} cm, A=${angleA}°, B=${angleB}°. Find b`,
        answer: `${formatDecimalResult(sideB)} cm`,
      };
    }
    case 'cosine-rule': {
      const sideB = rangeInt(3);
      const sideC = rangeInt(3);
      const angleA = randomInt(30, 120);
      const sideA = Math.sqrt((sideB ** 2) + (sideC ** 2) - (2 * sideB * sideC * Math.cos((angleA * Math.PI) / 180)));
      return {
        kind: 'trigonometry',
        topic,
        shape: 'cosine-rule-triangle',
        dimensions: { sideB, sideC, angleA },
        prompt: `Sides b=${sideB} cm, c=${sideC} cm, included angle A=${angleA}°. Find a`,
        answer: `${formatDecimalResult(sideA)} cm`,
      };
    }
    case 'bearings': {
      const bearingAB = randomInt(1, 359);
      const bearingBA = ((bearingAB + 180) % 360) || 360;
      return {
        kind: 'trigonometry',
        topic,
        shape: 'bearings-compass',
        dimensions: { bearingAB },
        prompt: `Bearing of B from A is ${String(bearingAB).padStart(3, '0')}°. Find bearing of A from B`,
        answer: `${String(bearingBA).padStart(3, '0')}°`,
      };
    }
    case 'applications-of-trigonometry': {
      const ladder = rangeInt(3);
      const angle = randomInt(20, 75);
      const height = ladder * Math.sin((angle * Math.PI) / 180);
      return {
        kind: 'trigonometry',
        topic,
        shape: 'ladder-application',
        dimensions: { ladderLength: ladder, angle },
        prompt: `A ${ladder} m ladder makes a ${angle}° angle with the ground. Find vertical height`,
        answer: `${formatDecimalResult(height)} m`,
      };
    }
    default:
      return {
        kind: 'trigonometry',
        topic,
        prompt: 'Write the answer.',
        answer: '',
      };
  }
}

function buildGeometryQuestions(topic, count) {
  if (topic !== '2d-shapes' && topic !== '3d-shapes') {
    const items = [];
    const seenSignatures = new Set();
    for (let i = 0; i < count; i++) {
      pushUniqueQuestion(items, seenSignatures, () => buildGeometryQuestion(topic));
    }
    return items;
  }

  const source = topic === '2d-shapes' ? get2dShapeFacts() : get3dShapeFacts();
  const shuffled = source.slice().sort(() => Math.random() - 0.5);
  const items = [];
  let lastPromptType = '';

  const promptVariants2d = {
    sides: ['number of sides', 'how many sides', 'sides'],
    corners: ['number of corners', 'how many corners', 'corners'],
    vertices: ['number of vertices', 'how many vertices', 'vertices'],
    symmetry: ['number of lines of symmetry', 'how many lines of symmetry', 'line(s) of symmetry'],
  };

  const promptVariants3d = {
    faces: ['number of faces', 'how many faces', 'faces'],
    edges: ['number of edges', 'how many edges', 'edges'],
    vertices: ['number of vertices', 'how many vertices', 'vertices'],
  };

  for (let i = 0; i < count; i++) {
    const shape = shuffled[i % shuffled.length];

    if (topic === '2d-shapes') {
      const availableTypes = ['sides', 'corners', 'vertices', 'symmetry'].filter((type) => type !== lastPromptType);
      const promptType = pickRandomFromList(availableTypes);
      const wording = pickRandomFromList(promptVariants2d[promptType]);
      lastPromptType = promptType;

      if (promptType === 'sides') {
        items.push({ kind: 'geometry', topic, prompt: `${shape.name}: ${wording}`, answer: shape.sides });
      } else if (promptType === 'corners' || promptType === 'vertices') {
        items.push({ kind: 'geometry', topic, prompt: `${shape.name}: ${wording}`, answer: shape.vertices });
      } else {
        items.push({ kind: 'geometry', topic, prompt: `${shape.name}: ${wording}`, answer: shape.symmetry });
      }
      continue;
    }

    const availableTypes = ['faces', 'edges', 'vertices'].filter((type) => type !== lastPromptType);
    const promptType = pickRandomFromList(availableTypes);
    const wording = pickRandomFromList(promptVariants3d[promptType]);
    lastPromptType = promptType;

    if (promptType === 'faces') {
      items.push({ kind: 'geometry', topic, prompt: `${shape.name}: ${wording}`, answer: shape.faces });
    } else if (promptType === 'edges') {
      items.push({ kind: 'geometry', topic, prompt: `${shape.name}: ${wording}`, answer: shape.edges });
    } else {
      items.push({ kind: 'geometry', topic, prompt: `${shape.name}: ${wording}`, answer: shape.vertices });
    }
  }

  return items;
}

function get2dShapeFacts() {
  return [
    { name: 'Triangle', sides: 3, vertices: 3, symmetry: 3 },
    { name: 'Square', sides: 4, vertices: 4, symmetry: 4 },
    { name: 'Rectangle', sides: 4, vertices: 4, symmetry: 2 },
    { name: 'Pentagon', sides: 5, vertices: 5, symmetry: 5 },
    { name: 'Hexagon', sides: 6, vertices: 6, symmetry: 6 },
    { name: 'Octagon', sides: 8, vertices: 8, symmetry: 8 },
  ];
}

function get3dShapeFacts() {
  return [
    { name: 'Cube', faces: 6, edges: 12, vertices: 8 },
    { name: 'Cuboid', faces: 6, edges: 12, vertices: 8 },
    { name: 'Triangular Prism', faces: 5, edges: 9, vertices: 6 },
    { name: 'Square Pyramid', faces: 5, edges: 8, vertices: 5 },
    { name: 'Cylinder', faces: 3, edges: 2, vertices: 0 },
    { name: 'Cone', faces: 2, edges: 1, vertices: 1 },
    { name: 'Sphere', faces: 1, edges: 0, vertices: 0 },
  ];
}

function buildAlgebraQuestion(topic, min, max, selectedPatternMode = 'random') {
  switch (topic) {
    case 'patterns': {
      const patternType = selectedPatternMode === 'random'
        ? pickRandomFromList(['add', 'multiply-add', 'multiply-divide', 'alternate-add-subtract'])
        : selectedPatternMode;
      const safeMin = Number.isFinite(min) ? Math.max(0, min) : 1;
      const safeMax = Number.isFinite(max) ? Math.max(safeMin, max) : 12;
      const start = randomInt(safeMin, safeMax);
      const step = randomInt(2, 9);
      const multiplier = patternType === 'multiply-4-add-2' || patternType === 'multiply-4-divide-2' || patternType === 'multiply-divide' ? 4 : randomInt(2, 4);
      const adjustment = patternType === 'multiply-4-add-2' ? 2 : randomInt(1, 3);
      const divisor = 2;
      const alternateAdd = randomInt(2, 6);
      const alternateSubtract = randomInt(1, Math.min(4, alternateAdd - 1));
      const values = [start];

      for (let index = 0; index < 3; index++) {
        const previousValue = values[values.length - 1];
        values.push(
          patternType === 'add'
            ? previousValue + step
            : patternType === 'multiply-add' || patternType === 'multiply-4-add-2'
              ? (previousValue * multiplier) + adjustment
              : patternType === 'multiply-divide' || patternType === 'multiply-4-divide-2'
                ? index % 2 === 0
                  ? previousValue * multiplier
                  : previousValue / divisor
                : index % 2 === 0
                  ? previousValue + alternateAdd
                  : previousValue - alternateSubtract
        );
      }

      const answer = patternType === 'add'
        ? values[3] + step
        : patternType === 'multiply-add' || patternType === 'multiply-4-add-2'
          ? (values[3] * multiplier) + adjustment
          : patternType === 'multiply-divide' || patternType === 'multiply-4-divide-2'
            ? values[3] * multiplier
            : values[3] + alternateAdd;

      return {
        kind: 'algebra',
        topic,
        prompt: `${values.join(', ')}, __`,
        answer,
      };
    }
    case 'variables': {
      const variable = pickRandomFromList(['x', 'y', 'n', 'a']);
      const coefficient = randomInt(2, 9);
      const constant = randomInt(1, 12);
      const phrase = `${coefficient} times ${variable} plus ${constant}`;
      const answer = `${coefficient}${variable} + ${constant}`;
      return { kind: 'algebra', topic, prompt: phrase, answer };
    }
    case 'expressions': {
      const variable = pickRandomFromList(['x', 'y', 'n']);
      const first = randomInt(2, 6);
      const second = randomInt(2, 6);
      const third = randomInt(1, 5);
      return {
        kind: 'algebra',
        topic,
        prompt: `${first}${variable} + ${second}${variable} + ${third}${variable}`,
        answer: `${first + second + third}${variable}`,
      };
    }
    case 'substitution': {
      const variable = pickRandomFromList(['x', 'y', 'n']);
      const value = randomInt(2, 9);
      const coefficient = randomInt(2, 8);
      const constant = randomInt(1, 12);
      return {
        kind: 'algebra',
        topic,
        prompt: `${coefficient}${variable} + ${constant}, where ${variable} = ${value}.`,
        answer: coefficient * value + constant,
      };
    }
    case 'expanding-expressions': {
      const coefficient = randomInt(2, 9);
      const variable = pickRandomFromList(['x', 'y', 'n']);
      const constant = randomInt(2, 12);
      return {
        kind: 'algebra',
        topic,
        prompt: `${coefficient}(${variable} + ${constant})`,
        answer: `${coefficient}${variable} + ${coefficient * constant}`,
      };
    }
    case 'factorisation': {
      const coefficient = randomInt(2, 9);
      const variable = pickRandomFromList(['x', 'y', 'n']);
      const constant = randomInt(2, 12);
      return {
        kind: 'algebra',
        topic,
        prompt: `${coefficient}${variable} + ${coefficient * constant}`,
        answer: `${coefficient}(${variable} + ${constant})`,
      };
    }
    case 'linear-equations': {
      const variable = pickRandomFromList(['x', 'y', 'n']);
      const solution = randomInt(2, 20);
      const constant = randomInt(1, 12);
      return {
        kind: 'algebra',
        topic,
        prompt: `${variable} + ${constant} = ${solution + constant}`,
        answer: `${variable} = ${solution}`,
      };
    }
    case 'simultaneous-equations': {
      const x = randomInt(1, 9);
      const y = randomInt(1, 9);
      const sum = x + y;
      const diff = x - y;
      return {
        kind: 'algebra',
        topic,
        prompt: `x + y = ${sum}\nx - y = ${diff}`,
        answer: `x = ${x}, y = ${y}`,
      };
    }
    case 'inequalities': {
      const variable = pickRandomFromList(['x', 'y', 'n']);
      const solution = randomInt(2, 15);
      const offset = randomInt(1, 9);
      const comparison = pickRandomFromList(['>', '<']);
      const rightSide = solution + offset;
      return {
        kind: 'number',
        topic,
        prompt: `${variable} + ${offset} ${comparison} ${rightSide}`,
        visual: { type: 'inequality', solution, comparison },
        answer: `${variable} ${comparison} ${solution}`,
        solutionSteps: [`Subtract ${offset} from both sides`, `${variable} ${comparison} ${solution}`],
      };
    }
    case 'polynomials': {
      const variable = 'x';
      const first = randomInt(2, 6);
      const second = randomInt(2, 6);
      const third = randomInt(1, 4);
      return {
        kind: 'algebra',
        topic,
        prompt: `Simplify ${first}${variable}^2 + ${second}${variable}^2 + ${third}${variable}.`,
        answer: `${first + second}${variable}^2 + ${third}${variable}`,
      };
    }
    case 'functions': {
      const variable = pickRandomFromList(['x', 'n']);
      const value = randomInt(2, 8);
      const multiplier = randomInt(2, 6);
      const constant = randomInt(1, 12);
      return {
        kind: 'algebra',
        topic,
        prompt: `If f(${variable}) = ${multiplier}${variable} + ${constant}, find f(${value}).`,
        answer: multiplier * value + constant,
      };
    }
    case 'exponential-functions': {
      const base = randomInt(2, 5);
      const exponent = randomInt(2, 4);
      return {
        kind: 'algebra',
        topic,
        prompt: `${base}^${exponent}`,
        answer: Math.pow(base, exponent),
      };
    }
    case 'logarithmic-functions': {
      const exponent = randomInt(2, 4);
      const value = Math.pow(10, exponent);
      return {
        kind: 'algebra',
        topic,
        prompt: `log10(${value})`,
        answer: exponent,
      };
    }
    case 'sequences': {
      const start = randomInt(1, 15);
      const step = randomInt(2, 9);
      const terms = [start, start + step, start + (step * 2), start + (step * 3)];
      return {
        kind: 'algebra',
        topic,
        prompt: `${terms.join(', ')}, __`,
        answer: terms[3] + step,
      };
    }
    case 'recurrence-relations': {
      const first = randomInt(2, 12);
      const difference = randomInt(2, 8);
      const terms = [first, first + difference, first + difference * 2, first + difference * 3];
      return { kind: 'algebra', topic, prompt: `For a₁ = ${first}, aₙ = aₙ₋₁ + ${difference}, find a₅.`, answer: terms[3] + difference };
    }
    default:
      return {
        kind: 'algebra',
        topic,
        prompt: 'Write the answer.',
        answer: '',
      };
  }
}

function buildNumberQuestion(topic, min, max, questionIndex = 0) {
  switch (topic) {
    case 'writing-numbers-sequence':
    case 'writing-numbers-random': {
      const safeMin = Math.max(0, Math.min(9, Number.isFinite(min) ? min : 0));
      const safeMax = Math.max(safeMin, Math.min(9, Number.isFinite(max) ? max : 9));
      const range = safeMax - safeMin + 1;
      const value = topic === 'writing-numbers-sequence'
        ? safeMin + (questionIndex % range)
        : randomInt(safeMin, safeMax);
      return {
        kind: 'number-writing',
        topic,
        value,
        answer: value,
      };
    }
    case 'identifying-numbers': {
      const value = randomInt(10, 9999);
      return {
        kind: 'number',
        topic,
        prompt: `Write the number: ${numberToWords(value)}.`,
        answer: value,
      };
    }
    case 'odd-even': {
      const safeMin = Number.isFinite(min) ? min : 1;
      const safeMax = Number.isFinite(max) ? max : 100;
      const value = randomInt(Math.min(safeMin, safeMax), Math.max(safeMin, safeMax));
      return {
        kind: 'number',
        topic,
        prompt: `Is ${value} odd or even?`,
        answer: value % 2 === 0 ? 'Even' : 'Odd',
      };
    }
    case 'comparing-numbers': {
      const safeMin = Number.isFinite(min) ? min : 1;
      const safeMax = Number.isFinite(max) ? max : 100;
      const a = randomInt(Math.min(safeMin, safeMax), Math.max(safeMin, safeMax));
      const b = randomInt(Math.min(safeMin, safeMax), Math.max(safeMin, safeMax));
      const symbol = a > b ? '>' : a < b ? '<' : '=';
      return {
        kind: 'number',
        topic,
        prompt: `Compare: ${a} ___ ${b}`,
        answer: symbol,
      };
    }
    case 'missing-numbers': {
      const safeMin = Number.isFinite(min) ? Math.max(1, min) : 1;
      const safeMax = Number.isFinite(max) ? Math.max(safeMin, max) : 20;
      const first = randomInt(safeMin, safeMax);
      const second = randomInt(safeMin, safeMax);
      const total = first + second;
      const blankPosition = pickRandomFromList(['first', 'second', 'total']);
      const prompt = blankPosition === 'first'
        ? `? + ${second} = ${total}`
        : blankPosition === 'second'
          ? `${first} + ? = ${total}`
          : `${first} + ${second} = ?`;
      const answer = blankPosition === 'first' ? first : blankPosition === 'second' ? second : total;
      return { kind: 'number', topic, prompt, answer };
    }
    case 'number-sentences': {
      const safeMin = Number.isFinite(min) ? Math.max(1, min) : 1;
      const safeMax = Number.isFinite(max) ? Math.max(safeMin, max) : 20;
      const op = pickRandomFromList(['+', '-', '×']);
      let first = randomInt(safeMin, safeMax);
      let second = randomInt(safeMin, safeMax);
      if (op === '-' && first < second) {
        [first, second] = [second, first];
      }
      const total = op === '+' ? first + second : op === '-' ? first - second : first * second;
      const blankPosition = pickRandomFromList(['first', 'second', 'total']);
      const prompt = blankPosition === 'first'
        ? `? ${op} ${second} = ${total}`
        : blankPosition === 'second'
          ? `${first} ${op} ? = ${total}`
          : `${first} ${op} ${second} = ?`;
      const answer = blankPosition === 'first' ? first : blankPosition === 'second' ? second : total;
      return { kind: 'number', topic, prompt, answer };
    }
    case 'equality': {
      const safeMin = Number.isFinite(min) ? Math.max(1, min) : 1;
      const safeMax = Number.isFinite(max) ? Math.max(safeMin, max) : 20;
      const leftA = randomInt(safeMin, safeMax);
      const leftB = randomInt(safeMin, safeMax);
      const leftTotal = leftA + leftB;
      const makeTrue = randomInt(0, 1) === 0;
      let rightA = randomInt(safeMin, safeMax);
      let rightB = makeTrue ? leftTotal - rightA : randomInt(safeMin, safeMax);
      if (makeTrue && rightB < 0) {
        rightA = randomInt(0, leftTotal);
        rightB = leftTotal - rightA;
      }
      if (!makeTrue) {
        while (rightA + rightB === leftTotal) {
          rightB = randomInt(safeMin, safeMax);
        }
      }
      return {
        kind: 'number',
        topic,
        prompt: `Is ${leftA} + ${leftB} = ${rightA} + ${rightB} true or false?`,
        answer: (leftTotal === rightA + rightB) ? 'True' : 'False',
      };
    }
    case 'whole-numbers': {
      const value = randomInt(100, 9999);
      return {
        kind: 'number',
        topic,
        prompt: `${value}`,
        answer: numberToWords(value),
      };
    }
    case 'place-value': {
      const digitsCount = randomInt(3, 5);
      const index = randomInt(0, digitsCount - 1);
      const digit = String(randomInt(0, 9));
      const digits = buildUniquePlaceValueDigits(digitsCount, index, digit);
      const value = digits.join('');
      const placeValue = Number(digit) * Math.pow(10, digitsCount - index - 1);
      const placeName = getPlaceName(digitsCount - index - 1);
      return {
        kind: 'number',
        topic,
        prompt: `What is the value of the ${digit} in the ${placeName} place of ${value}?`,
        answer: placeValue,
      };
    }
    case 'ordering-numbers': {
      const values = uniqueRandomValues(4, min, max);
      return {
        kind: 'number',
        topic,
        prompt: values.join(', '),
        answer: values.slice().sort((a, b) => a - b).join(', '),
      };
    }
    case 'factors': {
      const value = randomInt(12, 144);
      return {
        kind: 'number',
        topic,
        prompt: `${value}`,
        answer: getFactors(value).join(', '),
      };
    }
    case 'multiples': {
      const value = randomInt(2, 12);
      const countLimit = 5;
      return {
        kind: 'number',
        topic,
        prompt: `${value}`,
        answer: Array.from({ length: countLimit }, (_, index) => value * (index + 1)).join(', '),
      };
    }
    case 'prime-numbers': {
      const isPrimeQuestion = randomInt(0, 1) === 0;
      const value = isPrimeQuestion ? pickRandomFromList(PRIME_NUMBERS) : pickNonPrimeNumber();
      return {
        kind: 'number',
        topic,
        prompt: `Is ${value} a prime number?`,
        answer: isPrimeQuestion ? 'Yes' : 'No',
      };
    }
    case 'composite-numbers': {
      const isCompositeQuestion = randomInt(0, 1) === 0;
      const value = isCompositeQuestion ? pickRandomFromList(COMPOSITE_NUMBERS) : pickNonCompositeNumber();
      return {
        kind: 'number',
        topic,
        prompt: `Is ${value} a composite number?`,
        answer: isCompositeQuestion ? 'Yes' : 'No',
      };
    }
    case 'integers': {
      const values = uniqueRandomValues(4, -20, 20);
      return {
        kind: 'number',
        topic,
        prompt: values.join(', '),
        answer: values.slice().sort((a, b) => a - b).join(', '),
      };
    }
    case 'indices': {
      const base = randomInt(2, 9);
      const exponent = randomInt(2, 4);
      return {
        kind: 'number',
        topic,
        prompt: `Evaluate ${base}^${exponent}.`,
        answer: Math.pow(base, exponent),
      };
    }
    case 'scientific-notation': {
      const value = randomInt(1000, 9999999);
      const scientific = toScientificNotation(value);
      return {
        kind: 'number',
        topic,
        prompt: `${value}`,
        answer: scientific,
      };
    }
    case 'surds': {
      const rootFactor = randomInt(2, 9);
      const radicand = pickNonSquareRadicand();
      return {
        kind: 'number',
        topic,
        prompt: `Simplify √(${rootFactor * rootFactor * radicand}).`,
        answer: `${rootFactor}√${radicand}`,
      };
    }
    default:
      return {
        kind: 'number',
        topic,
        prompt: 'Write the answer.',
        answer: '',
      };
  }
}

function buildMatrixQuestion(topic) {
  const first = [[randomInt(1, 9), randomInt(1, 9)], [randomInt(1, 9), randomInt(1, 9)]];
  const second = [[randomInt(1, 9), randomInt(1, 9)], [randomInt(1, 9), randomInt(1, 9)]];

  if (topic === 'matrix-inverse') {
    const matrix = [[2, 1], [1, 1]];
    return { kind: 'number', topic, prompt: 'Find the inverse of the matrix.', matrix: { first: matrix, operator: '−1', result: [[1, -1], [-1, 2]], answerFormat: 'fraction' }, answer: '[[1, -1], [-1, 2]]' };
  }

  const operator = topic === 'matrix-addition' ? '+' : topic === 'matrix-subtraction' ? '−' : '×';
  const result = operator === '+'
    ? first.map((row, rowIndex) => row.map((value, columnIndex) => value + second[rowIndex][columnIndex]))
    : operator === '−'
      ? first.map((row, rowIndex) => row.map((value, columnIndex) => value - second[rowIndex][columnIndex]))
      : [[first[0][0] * second[0][0] + first[0][1] * second[1][0], first[0][0] * second[0][1] + first[0][1] * second[1][1]], [first[1][0] * second[0][0] + first[1][1] * second[1][0], first[1][0] * second[0][1] + first[1][1] * second[1][1]]];
  return { kind: 'number', topic, prompt: `Perform matrix ${operator === '+' ? 'addition' : operator === '−' ? 'subtraction' : 'multiplication'}.`, matrix: { first, second, operator, result }, answer: JSON.stringify(result) };
}

function buildNetworkQuestion(topic) {
  const edges = [["A-B", 4], ["A-C", 7], ["B-C", 3], ["B-D", 6], ["C-D", 5]];
  if (topic === 'network-graphs') {
    return { kind: 'number', topic, prompt: `A network has edges ${edges.map(([edge, weight]) => `${edge} (${weight})`).join(', ')}. How many edges are shown?`, answer: edges.length };
  }
  if (topic === 'shortest-paths') {
    return { kind: 'number', topic, prompt: 'A route from A to D has lengths A–B = 4, B–D = 6, A–C = 7, C–D = 5. Find the shortest route length.', answer: 10 };
  }
  if (topic === 'minimum-spanning-trees') {
    return { kind: 'number', topic, prompt: 'A network has connection costs 3, 4, 5, 6 and 7. Find the total cost of the minimum spanning tree using the three smallest connections.', answer: 12 };
  }
  if (topic === 'critical-paths') {
    return { kind: 'number', topic, prompt: 'A project has three critical activities lasting 4, 7 and 5 days in sequence. Find the project duration.', answer: '16 days' };
  }
  return { kind: 'number', topic, prompt: 'A network can carry 12, 8 and 5 units through three independent routes. Find the maximum total flow.', answer: '25 units' };
}

function buildAdvancedWorksheetQuestion(topic, pythagorasMode = 'hypotenuse') {
  if (topic === 'multi-step-linear-equations') {
    const coefficient = randomInt(2, 8);
    const solution = randomInt(2, 12);
    const constant = randomInt(1, 12);
    const result = coefficient * solution + constant;
    return { kind: 'number', topic, prompt: `Solve ${coefficient}x + ${constant} = ${result}.`, answer: `x = ${solution}`, solutionSteps: [`Subtract ${constant}: ${coefficient}x = ${result - constant}`, `Divide by ${coefficient}: x = ${solution}`] };
  }

  if (topic === 'linear-graphs') {
    const gradient = randomInt(1, 5);
    const intercept = randomInt(-5, 5);
    const x = randomInt(1, 6);
    return { kind: 'number', topic, prompt: `For y = ${gradient}x ${intercept < 0 ? '−' : '+'} ${Math.abs(intercept)}, find y when x = ${x}.`, visual: { type: 'line-graph', gradient, intercept, x }, answer: gradient * x + intercept };
  }

  if (topic === 'gradient') {
    const gradient = randomInt(-4, 6) || 1;
    const x1 = randomInt(-4, 4);
    const y1 = randomInt(-4, 4);
    const run = randomInt(1, 5);
    const rise = gradient * run;
    return { kind: 'number', topic, prompt: `Find the gradient between (${x1}, ${y1}) and (${x1 + run}, ${y1 + rise}).`, visual: { type: 'gradient', x1, y1, x2: x1 + run, y2: y1 + rise }, answer: gradient, solutionSteps: [`Rise = ${rise}`, `Run = ${run}`, `Gradient = rise ÷ run = ${gradient}`] };
  }

  if (topic === 'algebraic-fractions') {
    const numerator = randomInt(2, 12);
    const denominator = pickRandomFromList([2, 3, 4, 5]);
    const divisor = gcd(numerator, denominator);
    return { kind: 'number', topic, prompt: `Simplify ${numerator}x/${denominator}.`, answer: `${numerator / divisor}x/${denominator / divisor}`, solutionSteps: [`Divide numerator and denominator by ${divisor}`, `Simplified form: ${numerator / divisor}x/${denominator / divisor}`] };
  }

  if (topic === 'box-plots') {
    const values = Array.from({ length: 5 }, () => randomInt(1, 30)).sort((a, b) => a - b);
    return { kind: 'number', topic, prompt: `A box plot has five-number summary ${values.join(', ')}. What is the interquartile range?`, visual: { type: 'box-plot', values }, answer: values[3] - values[1] };
  }

  if (topic === 'cumulative-frequency') {
    const frequencies = Array.from({ length: 4 }, () => randomInt(2, 10));
    const index = randomInt(0, frequencies.length - 1);
    const cumulative = frequencies.slice(0, index + 1).reduce((total, value) => total + value, 0);
    return { kind: 'number', topic, prompt: `The frequencies for groups 1–4 are ${frequencies.join(', ')}. Find the cumulative frequency at group ${index + 1}.`, visual: { type: 'cumulative-frequency', frequencies, index }, answer: cumulative };
  }

  if (topic === 'quadratics') {
    const first = randomInt(1, 9);
    const second = randomInt(1, 9);
    return { kind: 'number', topic, prompt: `Solve x² - ${first + second}x + ${first * second} = 0.`, answer: `x = ${Math.min(first, second)} or x = ${Math.max(first, second)}` };
  }

  if (topic === 'calculus') {
    const coefficient = randomInt(2, 9);
    const power = randomInt(2, 5);
    const constant = randomInt(1, 12);
    return { kind: 'number', topic, prompt: `Find the derivative of f(x) = ${coefficient}x^${power} + ${constant}.`, answer: `${coefficient * power}x^${power - 1}` };
  }

  if (topic === 'vectors') {
    const first = [randomInt(-9, 9), randomInt(-9, 9)];
    const second = [randomInt(-9, 9), randomInt(-9, 9)];
    return { kind: 'number', topic, prompt: `Add the vectors (${first[0]}, ${first[1]}) + (${second[0]}, ${second[1]}).`, answer: `(${first[0] + second[0]}, ${first[1] + second[1]})` };
  }

  if (topic === 'matrices') {
    const first = [[randomInt(1, 9), randomInt(1, 9)], [randomInt(1, 9), randomInt(1, 9)]];
    const second = [[randomInt(1, 9), randomInt(1, 9)], [randomInt(1, 9), randomInt(1, 9)]];
    const result = first.map((row, rowIndex) => row.map((value, columnIndex) => value + second[rowIndex][columnIndex]));
    return { kind: 'number', topic, prompt: 'Add the matrices.', matrix: { first, second, result }, answer: `[[${result[0].join(', ')}], [${result[1].join(', ')}]]` };
  }

  if (topic === 'complex-numbers') {
    const realFirst = randomInt(-9, 9);
    const imaginaryFirst = randomInt(1, 9);
    const realSecond = randomInt(-9, 9);
    const imaginarySecond = randomInt(1, 9);
    return { kind: 'number', topic, prompt: `Simplify (${realFirst} + ${imaginaryFirst}i) + (${realSecond} + ${imaginarySecond}i).`, answer: `${realFirst + realSecond} + ${imaginaryFirst + imaginarySecond}i` };
  }

  if (topic === 'financial-mathematics') {
    const scenarios = [
      { item: 'savings account', amount: randomInt(2, 20) * 100, rate: pickRandomFromList([3, 5, 8]) },
      { item: 'small business loan', amount: randomInt(4, 25) * 100, rate: pickRandomFromList([4, 6, 10]) },
    ];
    const scenario = pickRandomFromList(scenarios);
    const years = randomInt(1, 4);
    const interest = scenario.amount * (scenario.rate / 100) * years;
    return { kind: 'number', topic, prompt: `A ${scenario.item} starts with $${scenario.amount}. It earns simple interest at ${scenario.rate}% per year for ${years} year${years === 1 ? '' : 's'}. How much interest is earned?`, answer: `$${interest.toFixed(2)}` };
  }

  if (topic === 'advanced-probability') {
    const favourable = randomInt(2, 8);
    const total = randomInt(favourable + 1, 12);
    return { kind: 'number', topic, prompt: `A bag has ${total} counters and ${favourable} are blue. What is the probability of choosing a blue counter?`, answer: fractionToText({ numerator: favourable, denominator: total }) };
  }

  const triples = [[3, 4, 5], [6, 8, 10], [5, 12, 13], [8, 15, 17]];
  const [legA, legB, hypotenuse] = pickRandomFromList(triples);
  if (pythagorasMode === 'missing-leg') {
    const unknownLeg = randomInt(0, 1);
    const knownLeg = unknownLeg === 0 ? legB : legA;
    const missingLeg = unknownLeg === 0 ? legA : legB;
    return { kind: 'geometry', topic, prompt: `A right triangle has a hypotenuse of ${hypotenuse} and a leg of ${knownLeg}. Find the missing leg.`, legs: { legA: unknownLeg === 0 ? '?' : legA, legB: unknownLeg === 1 ? '?' : legB, hypotenuse }, answer: formatDecimalResult(missingLeg) };
  }
  return { kind: 'geometry', topic, prompt: `A right triangle has legs ${legA} and ${legB}. Find the hypotenuse.`, legs: { legA, legB, hypotenuse: '?' }, answer: formatDecimalResult(hypotenuse) };
}

function buildPrimaryAdditionalQuestion(topic, min, max, roundingPlace = 'mixed') {
  const safeMin = Number.isFinite(min) ? Math.max(1, min) : 1;
  const safeMax = Number.isFinite(max) ? Math.max(safeMin + 1, max) : 20;

  if (topic === 'rounding-estimation') {
    const place = roundingPlace === 'mixed' ? pickRandomFromList([10, 100, 1000]) : Number(roundingPlace);
    const value = randomInt(Math.max(place, safeMin), Math.max(place, safeMax) * 10);
    return { kind: 'number', topic, prompt: `Round ${value} to the nearest ${place}.`, answer: Math.round(value / place) * place };
  }
  if (topic === 'number-bonds') {
    const target = pickRandomFromList([10, 20, 50, 100]);
    const part = randomInt(1, target - 1);
    return { kind: 'number', topic, prompt: `Complete the number bond: ${part} + ___ = ${target}.`, answer: target - part };
  }
  if (topic === 'mental-maths') {
    const base = randomInt(2, 20) * 5;
    const adjustment = randomInt(1, 9);
    const add = Math.random() < 0.5;
    return { kind: 'number', topic, prompt: `Use a mental strategy to solve ${base} ${add ? '+' : '−'} ${adjustment}.`, answer: add ? base + adjustment : base - adjustment };
  }
  if (topic === 'fraction-of-quantity') {
    const denominator = pickRandomFromList([2, 4, 5, 10]);
    const numerator = randomInt(1, denominator - 1);
    const groups = randomInt(2, 12);
    const quantity = denominator * groups;
    return { kind: 'number', topic, prompt: `Find ${numerator}/${denominator} of ${quantity}.`, visual: { type: 'fraction-quantity', numerator, denominator, quantity }, answer: numerator * groups };
  }
  if (topic === 'analogue-clocks') {
    const hour = randomInt(1, 12);
    const minute = pickRandomFromList([0, 15, 30, 45]);
    return { kind: 'number', topic, prompt: 'Write the time shown in words.', visual: { type: 'clock', hour, minute }, answer: formatClockTime(hour, minute) };
  }
  if (topic === 'coin-note-recognition') {
    const value = pickRandomFromList([1, 2, 5, 10, 20, 50, 100, 200]);
    const type = value <= 2 ? 'coin' : 'note';
    return { kind: 'number', topic, prompt: `What is the value of this Australian ${type}?`, visual: { type: 'currency', value }, answer: `$${value}` };
  }
  if (topic === 'visual-measurement') {
    const length = randomInt(2, 20);
    const unit = pickRandomFromList(['cm', 'm']);
    return { kind: 'number', topic, prompt: 'Write the measurement shown with its unit.', visual: { type: 'ruler', length, unit }, answer: `${length} ${unit}` };
  }
  if (topic === 'chance-experiments') {
    const red = randomInt(1, 5);
    const blue = randomInt(1, 5);
    const total = red + blue;
    const divisor = gcd(red, total);
    return { kind: 'number', topic, prompt: 'What is the probability of choosing a red counter?', visual: { type: 'counters', red, blue }, answer: fractionToText({ numerator: red / divisor, denominator: total / divisor }) };
  }

  if (topic === 'multiplication-strategies') {
    const first = randomInt(2, 10);
    const second = randomInt(2, 10);
    return { kind: 'number', topic, prompt: `Use a multiplication strategy to solve ${first} × ${second}.`, answer: first * second };
  }
  if (topic === 'division-strategies') {
    const divisor = randomInt(2, 10);
    const quotient = randomInt(2, 10);
    return { kind: 'number', topic, prompt: `Use a division strategy to solve ${divisor * quotient} ÷ ${divisor}.`, answer: quotient };
  }
  if (topic === 'multi-step-word-problems') {
    const contexts = [
      { name: 'Luca', item: 'cards', firstVerb: 'receives', secondVerb: 'trades away' },
      { name: 'Mia', item: 'dollars', firstVerb: 'earns', secondVerb: 'spends' },
      { name: 'Noah', item: 'points', firstVerb: 'scores', secondVerb: 'loses' },
    ];
    const context = pickRandomFromList(contexts);
    const start = randomInt(safeMin + 5, safeMax + 15);
    const first = randomInt(2, Math.max(2, Math.floor(start / 3)));
    const second = randomInt(2, Math.max(2, Math.floor(start / 3)));
    return { kind: 'number', topic, prompt: `${context.name} has ${start} ${context.item}, ${context.firstVerb} ${first} more, then ${context.secondVerb} ${second}. How many ${context.item} are left?`, answer: start + first - second };
  }
  if (topic === 'fact-families') {
    const first = randomInt(2, 9);
    const second = randomInt(2, 9);
    return { kind: 'number', topic, prompt: `Write the fact family for ${first}, ${second} and ${first * second}.`, answer: `${first} × ${second} = ${first * second}; ${second} × ${first} = ${first * second}` };
  }
  if (topic === 'fraction-models') {
    const denominator = randomInt(2, 8);
    const numerator = randomInt(1, denominator - 1);
    return { kind: 'fraction', topic, prompt: `${numerator} of ${denominator} equal parts are shaded. Write the fraction.`, answer: fractionToText({ numerator, denominator }) };
  }
  if (topic === 'measurement-conversions') {
    const value = randomInt(2, 9);
    return { kind: 'number', topic, prompt: `Convert ${value} metres to centimetres.`, answer: `${value * 100} cm` };
  }
  if (topic === 'elapsed-time') {
    const startHour = randomInt(8, 15);
    const minutes = randomInt(1, 5) * 15;
    const endHour = startHour + Math.floor(minutes / 60);
    const endMinutes = (minutes % 60);
    return { kind: 'number', topic, prompt: `A lesson starts at ${startHour}:${String(0).padStart(2, '0')} and lasts ${minutes} minutes. What time does it finish?`, answer: `${endHour}:${String(endMinutes).padStart(2, '0')}` };
  }
  if (topic === 'shape-properties') {
    const shape = pickRandomFromList([{ name: 'triangle', answer: '3' }, { name: 'square', answer: '4' }, { name: 'pentagon', answer: '5' }, { name: 'hexagon', answer: '6' }]);
    return { kind: 'number', topic, prompt: `How many sides does a ${shape.name} have?`, answer: shape.answer };
  }
  if (topic === 'discounts') {
    const price = randomInt(2, 10) * 10;
    const discount = pickRandomFromList([10, 20, 50]);
    return { kind: 'number', topic, prompt: `A $${price} item is reduced by ${discount}%. What is the sale price?`, answer: `$${(price * (1 - discount / 100)).toFixed(2)}` };
  }

  const data = [randomInt(2, 10), randomInt(2, 10), randomInt(2, 10)];
  const labels = ['Monday', 'Tuesday', 'Wednesday'];
  const highestIndex = data.indexOf(Math.max(...data));
  return { kind: 'number', topic, prompt: `Books read: ${labels[0]} ${data[0]}, ${labels[1]} ${data[1]}, ${labels[2]} ${data[2]}. Which day had the most?`, answer: labels[highestIndex] };
}

function formatClockTime(hour, minute) {
  if (minute === 0) return `${hour} o'clock`;
  if (minute === 15) return `quarter past ${hour}`;
  if (minute === 30) return `half past ${hour}`;
  return `quarter to ${hour === 12 ? 1 : hour + 1}`;
}

function buildMultiplicationGroupingQuestion(topic) {
  const rows = randomInt(2, 5);
  const columns = randomInt(2, 5);
  return {
    kind: 'multiplication-grouping',
    rows,
    columns,
    topic,
    prompt: `There are ${rows} rows with ${columns} counters in each row. Write the multiplication sentence.`,
    answer: `${rows} × ${columns} = ${rows * columns}`,
  };
}

function buildWordProblemQuestion(min, max) {
  const safeMin = Number.isFinite(min) ? Math.max(1, min) : 1;
  const safeMax = Number.isFinite(max) ? Math.max(safeMin + 1, max) : 20;
  const operation = pickRandomFromList(['addition', 'subtraction', 'multiplication', 'division']);
  const name = pickRandomFromList(['Sam', 'Mia', 'Ava', 'Noah']);
  const item = pickRandomFromList(['stickers', 'books', 'marbles', 'apples']);

  if (operation === 'addition') {
    const first = randomInt(safeMin, safeMax);
    const second = randomInt(safeMin, safeMax);
    return { kind: 'number', topic: 'word-problems', prompt: `${name} has ${first} ${item} and gets ${second} more. How many ${item} does ${name} have now?`, answer: first + second };
  }

  if (operation === 'subtraction') {
    const start = randomInt(safeMin + 1, safeMax);
    const used = randomInt(1, start - 1);
    return { kind: 'number', topic: 'word-problems', prompt: `${name} has ${start} ${item} and gives away ${used}. How many ${item} are left?`, answer: start - used };
  }

  if (operation === 'multiplication') {
    const groups = randomInt(2, 5);
    const each = randomInt(2, Math.max(2, Math.min(10, safeMax)));
    return { kind: 'number', topic: 'word-problems', prompt: `${name} puts ${each} ${item} in each of ${groups} groups. How many ${item} are there altogether?`, answer: groups * each };
  }

  const divisor = randomInt(2, Math.max(2, Math.min(10, safeMax)));
  const quotient = randomInt(2, Math.max(2, Math.floor(safeMax / divisor)));
  return { kind: 'number', topic: 'word-problems', prompt: `${name} shares ${divisor * quotient} ${item} equally among ${divisor} children. How many does each child get?`, answer: quotient };
}

function renderNumberWritingQuestion(num, question) {
  return `
    <div class="question question-number-writing">
      <div class="question-number">${num}.</div>
      <div class="number-writing-body">
        ${renderNumberWritingSVG(question)}
      </div>
    </div>`;
}

function renderNumberWritingSVG(question, isSolution = false) {
  const strokeClass = isSolution ? 'number-writing-solution-digit' : 'number-writing-trace-digit';
  const digitPath = getNumberWritingPath(question.value);
  return `<svg class="number-writing-svg" viewBox="0 0 300 150" preserveAspectRatio="none" role="img" aria-label="${isSolution ? `Number ${question.value}` : 'Trace the number'}">
    <line x1="20" y1="32" x2="280" y2="32" class="number-writing-guide number-writing-top-guide" />
    <line x1="20" y1="105" x2="280" y2="105" class="number-writing-guide number-writing-mid-guide" />
    <line x1="20" y1="142" x2="280" y2="142" class="number-writing-guide number-writing-bottom-guide" />
    <path d="${digitPath}" class="number-writing-digit-backdrop" />
    <path d="${digitPath}" class="${strokeClass}" />
  </svg>`;
}

function getNumberWritingPath(value) {
  const paths = {
    0: 'M150 32 C108 32 102 62 102 88 C102 116 114 136 150 136 C186 136 198 116 198 84 C198 52 186 32 150 32',
    1: 'M122 52 L148 34 L148 136 M118 136 L178 136',
    2: 'M100 55 C112 30 170 22 192 49 C214 77 193 94 170 108 L102 136 L200 136',
    3: 'M105 43 C140 25 190 31 193 59 C195 78 176 87 150 87 C179 87 198 98 194 118 C188 145 132 145 103 128',
    4: 'M178 136 L178 34 L92 100 L205 100',
    5: 'M195 34 L108 34 L102 82 C130 70 191 72 195 105 C200 143 130 148 102 124',
    6: 'M190 42 C165 26 120 36 105 76 C91 113 110 138 145 138 C180 138 197 120 194 96 C191 73 164 68 106 88',
    7: 'M96 35 L202 35 L132 136',
    8: 'M150 32 C112 32 105 52 116 70 C126 87 174 87 185 69 C196 50 187 32 150 32 M150 82 C110 82 101 106 113 124 C126 144 176 144 188 124 C199 105 190 82 150 82',
    9: 'M194 84 C178 97 126 96 108 74 C91 52 108 30 143 30 C180 30 197 53 194 84 L184 136',
  };
  return paths[value] || paths[0];
}

function renderMultiplicationGroupingQuestion(num, question) {
  return `
    <div class="question question-multiplication-grouping">
      <div class="question-number">${num}.</div>
      <div class="multiplication-grouping-body">
        <div class="multiplication-grouping-prompt">${escapeHtml(question.prompt)}</div>
        ${renderMultiplicationArrayHTML(question)}
        <div class="multiplication-grouping-answer-line"></div>
      </div>
    </div>`;
}

function renderMultiplicationArrayHTML(question, isSolution = false) {
  const counters = Array.from({ length: question.rows * question.columns }, () => '<span class="multiplication-counter"></span>').join('');
  return `<div class="multiplication-array${isSolution ? ' multiplication-array-solution' : ''}" style="--array-columns:${question.columns}" aria-label="${question.rows} rows of ${question.columns}">${counters}</div>`;
}

function buildMoneyQuestion(topic, min, max) {
  switch (topic) {
    case 'making-change': {
      const priceDollars = randomInt(1, 20);
      const priceCents = pickRandomFromList([0, 25, 50, 75]);
      const price = priceDollars + priceCents / 100;
      const notes = [5, 10, 20, 50];
      const validNotes = notes.filter((note) => note > price);
      const paid = pickRandomFromList(validNotes.length ? validNotes : [Math.ceil(price) + 5]);
      const change = paid - price;
      return {
        kind: 'number',
        topic,
        prompt: `You buy an item for $${price.toFixed(2)} and pay with a $${paid} note. How much change do you get?`,
        answer: `$${change.toFixed(2)}`,
      };
    }
    case 'adding-money': {
      const safeMin = Number.isFinite(min) ? Math.max(1, min) : 1;
      const safeMax = Number.isFinite(max) ? Math.max(safeMin, max) : 50;
      const aCents = randomInt(safeMin, safeMax) * 100 + pickRandomFromList([0, 25, 50, 75]);
      const bCents = randomInt(safeMin, safeMax) * 100 + pickRandomFromList([0, 25, 50, 75]);
      return {
        kind: 'number',
        topic,
        prompt: `$${(aCents / 100).toFixed(2)} + $${(bCents / 100).toFixed(2)}`,
        answer: `$${((aCents + bCents) / 100).toFixed(2)}`,
      };
    }
    case 'money-word-problems': {
      const safeMin = Number.isFinite(min) ? Math.max(2, min) : 10;
      const safeMax = Number.isFinite(max) ? Math.max(safeMin + 1, max) : 100;
      const start = randomInt(safeMin + 1, safeMax);
      const spend = randomInt(1, start - 1);
      return {
        kind: 'number',
        topic,
        prompt: `Sam has $${start}. He spends $${spend} on a toy. How much money does he have left?`,
        answer: `$${start - spend}`,
      };
    }
    case 'saving-money': {
      const target = randomInt(10, 50);
      const saved = randomInt(1, target - 1);
      return {
        kind: 'number',
        topic,
        prompt: `Ava wants to save $${target}. She has saved $${saved}. How much more does she need?`,
        answer: `$${target - saved}`,
      };
    }
    case 'budgeting': {
      const budget = randomInt(20, 80);
      const firstSpend = randomInt(2, Math.floor(budget / 3));
      const secondSpend = randomInt(2, Math.floor(budget / 3));
      return {
        kind: 'number',
        topic,
        prompt: `Mia has a $${budget} budget. She spends $${firstSpend} on lunch and $${secondSpend} on a book. How much is left?`,
        answer: `$${budget - firstSpend - secondSpend}`,
      };
    }
    case 'best-buy': {
      const item = pickRandomFromList(['juice', 'cereal', 'pencils', 'apples']);
      const smallQuantity = 2;
      const smallPrice = randomInt(3, 8);
      const largeQuantity = 4;
      const largePrice = randomInt(smallPrice + 1, smallPrice * 2 + 2);
      const smallUnitPrice = smallPrice / smallQuantity;
      const largeUnitPrice = largePrice / largeQuantity;
      return {
        kind: 'number',
        topic,
        prompt: `Which is the better buy for ${item}: ${smallQuantity} for $${smallPrice.toFixed(2)} or ${largeQuantity} for $${largePrice.toFixed(2)}?`,
        answer: smallUnitPrice <= largeUnitPrice ? `${smallQuantity} for $${smallPrice.toFixed(2)}` : `${largeQuantity} for $${largePrice.toFixed(2)}`,
      };
    }
    default:
      return {
        kind: 'number',
        topic,
        prompt: 'Write the answer.',
        answer: '',
      };
  }
}

function buildRatioQuestion(topic) {
  switch (topic) {
    case 'writing-ratios': {
      const a = randomInt(2, 12);
      const b = randomInt(2, 12);
      const items = pickRandomFromList([
        ['red balls', 'blue balls'],
        ['boys', 'girls'],
        ['cats', 'dogs'],
        ['apples', 'oranges'],
      ]);
      return {
        kind: 'number',
        topic,
        prompt: `There are ${a} ${items[0]} and ${b} ${items[1]}. Write the ratio of ${items[0]} to ${items[1]}.`,
        answer: `${a}:${b}`,
      };
    }
    case 'equivalent-ratios': {
      const a = randomInt(1, 10);
      const b = randomInt(1, 10);
      const multiplier = randomInt(2, 5);
      return {
        kind: 'number',
        topic,
        prompt: `Find an equivalent ratio to ${a}:${b} (multiply by ${multiplier}).`,
        answer: `${a * multiplier}:${b * multiplier}`,
      };
    }
    case 'dividing-in-a-ratio': {
      const partA = randomInt(1, 9);
      const partB = randomInt(1, 9);
      const perPart = randomInt(2, 10);
      return {
        kind: 'number',
        topic,
        prompt: `Share $${(partA + partB) * perPart} in the ratio ${partA}:${partB}.`,
        answer: `$${partA * perPart} and $${partB * perPart}`,
      };
    }
    case 'proportion': {
      const items = randomInt(2, 6);
      const cost = items * randomInt(1, 5);
      const newItems = randomInt(2, 10);
      return {
        kind: 'number',
        topic,
        prompt: `If ${items} items cost $${cost}, how much do ${newItems} items cost?`,
        answer: `$${((cost / items) * newItems).toFixed(2)}`,
      };
    }
    default:
      return {
        kind: 'number',
        topic,
        prompt: 'Write the answer.',
        answer: '',
      };
  }
}

function getFactors(value) {
  const factors = [];
  for (let i = 1; i <= value; i++) {
    if (value % i === 0) {
      factors.push(i);
    }
  }
  return factors;
}

function uniqueRandomValues(count, min, max) {
  const values = new Set();
  while (values.size < count) {
    values.add(randomInt(min, max));
  }
  return Array.from(values);
}

function pickRandomFromList(list) {
  return list[randomInt(0, list.length - 1)];
}

function createProperFraction(alreadyReduced = false) {
  let denominator = randomInt(2, 12);
  let numerator = randomInt(1, denominator - 1);

  if (alreadyReduced) {
    while (gcd(numerator, denominator) !== 1) {
      denominator = randomInt(2, 12);
      numerator = randomInt(1, denominator - 1);
    }
  }

  return { numerator, denominator };
}

function fractionToText(fraction) {
  return `${fraction.numerator}/${fraction.denominator}`;
}

function formatMixedFraction(whole, numerator, denominator) {
  return `${whole} ${numerator}/${denominator}`;
}

function renderMixedFractionHTML(value) {
  const match = String(value).match(/^(\d+) (\d+)\/(\d+)$/);
  if (!match) {
    return renderFractionTextHTML(String(value));
  }

  return `${escapeHtml(match[1])} ${renderFractionTextHTML(`${match[2]}/${match[3]}`)}`;
}

function reduceFraction(numerator, denominator) {
  const divisor = gcd(Math.abs(numerator), Math.abs(denominator));
  numerator = numerator / divisor;
  denominator = denominator / divisor;
  if (denominator < 0) {
    numerator = -numerator;
    denominator = -denominator;
  }
  return fractionToText({ numerator, denominator });
}

function gcd(a, b) {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a || 1;
}

function renderFractionValueHTML(value) {
  return renderFractionTextHTML(String(value));
}

function renderFractionTextHTML(value) {
  const text = String(value);
  const parts = [];
  const regex = /(\d+)\/(\d+)/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(escapeHtml(text.slice(lastIndex, match.index)));
    }

    parts.push(`<span class="fraction-inline"><span class="fraction-numerator">${escapeHtml(match[1])}</span><span class="fraction-line"></span><span class="fraction-denominator">${escapeHtml(match[2])}</span></span>`);
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(escapeHtml(text.slice(lastIndex)));
  }

  return parts.join('');
}

function renderDecimalPlaceValueHTML(question) {
  return renderHighlightedDecimalHTML(question.number, question.highlightIndex);
}

function renderDecimalPromptHTML(question) {
  return escapeHtml(String(question.prompt ?? question.number ?? ''));
}

function renderPercentageQuestion(num, question) {
  return `
    <div class="question question-percentage-topic">
      <div class="question-number">${num}.</div>
      <div class="percentage-topic-body">
        <div class="percentage-topic-prompt">${renderPercentagePromptHTML(question)}</div>
        <div class="percentage-topic-answer-line"></div>
      </div>
    </div>`;
}

function renderAlgebraQuestion(num, question) {
  return `
    <div class="question question-algebra-topic">
      <div class="question-number">${num}.</div>
      <div class="algebra-topic-body">
        <div class="algebra-topic-prompt">${renderAlgebraPromptHTML(question)}</div>
        <div class="algebra-topic-answer-line"></div>
      </div>
    </div>`;
}

function renderGeometryQuestion(num, question) {
  const largeShapeClass = (question.topic === '2d-shapes' || question.topic === '3d-shapes') ? ' geometry-topic-large-shape' : '';
  const threeDShapeClass = question.topic === '3d-shapes' ? ' geometry-topic-3d-shape' : '';
  return `
    <div class="question question-geometry-topic">
      <div class="question-number">${num}.</div>
      <div class="geometry-topic-body${largeShapeClass}${threeDShapeClass}">
        <div class="geometry-topic-prompt">${renderGeometryPromptHTML(question)}</div>
        <div class="geometry-topic-answer-line"></div>
      </div>
    </div>`;
}

function renderPercentagePromptHTML(question) {
  return escapeHtml(String(question.prompt ?? ''));
}

function renderAlgebraPromptHTML(question) {
  return renderAlgebraTextHTML(String(question.prompt ?? '')).replace(/\n/g, '<br>');
}

function renderGeometryPromptHTML(question) {
  const rawPrompt = String(question.prompt ?? '');
  const shapeName = rawPrompt.includes(':') ? rawPrompt.split(':')[0].trim() : rawPrompt;
  const label = escapeHtml(getConciseVisualPrompt(question));

  if (question.topic === 'plot-cartesian-plane') {
    return `<span class="geometry-shape-stack cartesian-plot-stack"><span class="geometry-shape-question">${label}</span><span class="geometry-shape-icon cartesian-plot-icon">${renderCartesianPlaneSVG(question)}</span></span>`;
  }

  if (question.topic === 'pythagoras' && question.legs) {
    return `
      <span class="geometry-shape-stack pythagoras-shape-stack">
        <span class="geometry-shape-question">${label}</span>
        <span class="geometry-shape-icon pythagoras-shape-icon" aria-hidden="true">${renderPythagorasSVG(question)}</span>
      </span>`;
  }

  if (question.topic === 'circle-geometry') {
    const diagram = renderCircleGeometrySVG(rawPrompt);
    if (!diagram) {
      return label;
    }

    return `
      <span class="geometry-shape-stack">
        <span class="geometry-shape-question">${label}</span>
        <span class="geometry-shape-icon geometry-circle-diagram" aria-hidden="true">${diagram}</span>
      </span>`;
  }

  if (question.topic !== '2d-shapes' && question.topic !== '3d-shapes') {
    return label;
  }

  const shapeSvg = renderGeometryShapeSVG(shapeName, question.topic);
  if (!shapeSvg) {
    return label;
  }

  return `
    <span class="geometry-shape-stack">
      <span class="geometry-shape-question">${label}</span>
      <span class="geometry-shape-icon" aria-hidden="true">${shapeSvg}</span>
    </span>`;
}

function renderCartesianPlaneSVG(question) {
  const gridLines = Array.from({ length: 11 }, (_, index) => {
    const position = 20 + index * 14;
    return `<line x1="${position}" y1="5" x2="${position}" y2="145"/><line x1="20" y1="${position - 5}" x2="160" y2="${position - 5}"/>`;
  }).join('');
  const points = question.showPoints ? (question.points || []).map((point) => {
    const x = 90 + point.x * 14;
    const y = 75 - point.y * 14;
    return `<circle cx="${x}" cy="${y}" r="3.5" fill="#c62828"/><text x="${x + 5}" y="${y - 5}">${point.label}</text>`;
  }).join('') : '';
  const labels = Array.from({ length: 9 }, (_, index) => index - 4).map((value) => `<text x="${90 + value * 14}" y="86" text-anchor="middle">${value}</text><text x="84" y="${79 - value * 14}" text-anchor="end">${value}</text>`).join('');
  return `<svg viewBox="0 0 180 155" class="cartesian-plot-svg" role="img" aria-label="Cartesian plane"><g stroke="#cbd5e0" stroke-width="0.7">${gridLines}</g><line x1="20" y1="75" x2="160" y2="75" stroke="#1f4ea2" stroke-width="1.5"/><line x1="90" y1="5" x2="90" y2="145" stroke="#1f4ea2" stroke-width="1.5"/><g fill="#1f4ea2" font-size="7">${labels}</g><text x="163" y="79" fill="#1f4ea2">x</text><text x="94" y="10" fill="#1f4ea2">y</text>${points}</svg>`;
}

function getConciseVisualPrompt(question) {
  const prompt = String(question.prompt ?? '');
  return prompt
    .replace(/\. Find the (area|perimeter|volume|surface area)\.?$/i, '')
    .replace(/\. Find the hypotenuse to 2 decimal places\.?$/i, '')
    .replace(/\. Find the missing leg to 2 decimal places\.?$/i, '')
    .replace(/\. Find (opposite|adjacent|hypotenuse)\.?$/i, '');
}

function renderGeometryShapeSVG(shapeName, topic) {
  if (topic === '2d-shapes') {
    const shapeMap = {
      Triangle: '<svg viewBox="0 0 24 24" aria-hidden="true"><polygon points="12,3 21,20 3,20" fill="none" stroke="currentColor" stroke-width="2"/></svg>',
      Square: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="4" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"/></svg>',
      Rectangle: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="6" width="18" height="12" fill="none" stroke="currentColor" stroke-width="2"/></svg>',
      Pentagon: '<svg viewBox="0 0 24 24" aria-hidden="true"><polygon points="12,3 21,10 18,20 6,20 3,10" fill="none" stroke="currentColor" stroke-width="2"/></svg>',
      Hexagon: '<svg viewBox="0 0 24 24" aria-hidden="true"><polygon points="7,3 17,3 22,12 17,21 7,21 2,12" fill="none" stroke="currentColor" stroke-width="2"/></svg>',
      Octagon: '<svg viewBox="0 0 24 24" aria-hidden="true"><polygon points="8,2 16,2 22,8 22,16 16,22 8,22 2,16 2,8" fill="none" stroke="currentColor" stroke-width="2"/></svg>',
    };
    return shapeMap[shapeName] || '';
  }

  const shapeMap = {
    Cube: '<svg viewBox="0 0 64 64" aria-hidden="true"><polygon points="32,10 50,20 32,30 14,20" fill="rgba(43,108,176,0.08)" stroke="currentColor" stroke-width="2"/><polygon points="14,20 32,30 32,52 14,42" fill="rgba(43,108,176,0.12)" stroke="currentColor" stroke-width="2"/><polygon points="32,30 50,20 50,42 32,52" fill="rgba(43,108,176,0.05)" stroke="currentColor" stroke-width="2"/></svg>',
    Cuboid: '<svg viewBox="0 0 64 64" aria-hidden="true"><polygon points="24,12 50,12 58,20 32,20" fill="rgba(43,108,176,0.08)" stroke="currentColor" stroke-width="2"/><polygon points="12,20 38,20 38,48 12,48" fill="rgba(43,108,176,0.12)" stroke="currentColor" stroke-width="2"/><polygon points="38,20 58,20 58,48 38,48" fill="rgba(43,108,176,0.05)" stroke="currentColor" stroke-width="2"/><line x1="24" y1="12" x2="12" y2="20" stroke="currentColor" stroke-width="2"/></svg>',
    'Triangular Prism': '<svg viewBox="0 0 64 64" aria-hidden="true"><polygon points="12,44 24,20 36,44" fill="rgba(43,108,176,0.12)" stroke="currentColor" stroke-width="2"/><polygon points="28,44 40,20 52,44" fill="rgba(43,108,176,0.05)" stroke="currentColor" stroke-width="2"/><line x1="12" y1="44" x2="28" y2="44" stroke="currentColor" stroke-width="2"/><line x1="24" y1="20" x2="40" y2="20" stroke="currentColor" stroke-width="2"/><line x1="36" y1="44" x2="52" y2="44" stroke="currentColor" stroke-width="2"/></svg>',
    'Square Pyramid': '<svg viewBox="0 0 64 64" aria-hidden="true"><polygon points="18,42 46,42 38,50 10,50" fill="rgba(43,108,176,0.06)" stroke="currentColor" stroke-width="2"/><polygon points="32,14 18,42 32,42" fill="rgba(43,108,176,0.12)" stroke="currentColor" stroke-width="2"/><polygon points="32,14 32,42 46,42" fill="rgba(43,108,176,0.03)" stroke="currentColor" stroke-width="2"/><line x1="32" y1="14" x2="38" y2="50" stroke="currentColor" stroke-width="2"/><line x1="32" y1="14" x2="10" y2="50" stroke="currentColor" stroke-width="2"/></svg>',
    Cylinder: '<svg viewBox="0 0 64 64" aria-hidden="true"><ellipse cx="32" cy="16" rx="16" ry="6" fill="rgba(43,108,176,0.05)" stroke="currentColor" stroke-width="2"/><line x1="16" y1="16" x2="16" y2="44" stroke="currentColor" stroke-width="2"/><line x1="48" y1="16" x2="48" y2="44" stroke="currentColor" stroke-width="2"/><ellipse cx="32" cy="44" rx="16" ry="6" fill="rgba(43,108,176,0.12)" stroke="currentColor" stroke-width="2"/></svg>',
    Cone: '<svg viewBox="0 0 64 64" aria-hidden="true"><polygon points="32,12 14,42 50,42" fill="rgba(43,108,176,0.08)" stroke="currentColor" stroke-width="2"/><ellipse cx="32" cy="42" rx="18" ry="6" fill="rgba(43,108,176,0.02)" stroke="currentColor" stroke-width="2"/></svg>',
    Sphere: '<svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="18" fill="rgba(43,108,176,0.05)" stroke="currentColor" stroke-width="2"/><ellipse cx="32" cy="32" rx="18" ry="7" fill="none" stroke="currentColor" stroke-width="1.4"/><ellipse cx="32" cy="32" rx="7" ry="18" fill="none" stroke="currentColor" stroke-width="1.4"/></svg>',
  };
  return shapeMap[shapeName] || '';
}

function renderCircleGeometrySVG(promptText) {
  const prompt = String(promptText ?? '');
  const match = prompt.match(/^(Diameter|Radius)\s*=\s*(\d+(?:\.\d+)?)\s*cm$/i);
  if (!match) {
    return '';
  }

  const measureType = match[1].toLowerCase();
  const valueText = `${match[2]} cm`;

  if (measureType === 'diameter') {
    return `<svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="24" fill="none" stroke="currentColor" stroke-width="2"/><line x1="8" y1="32" x2="56" y2="32" stroke="currentColor" stroke-width="2"/><circle cx="32" cy="32" r="2" fill="currentColor"/><text x="32" y="27" text-anchor="middle" font-size="7" font-weight="700" fill="currentColor">${escapeHtml(valueText)}</text></svg>`;
  }

  return `<svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="24" fill="none" stroke="currentColor" stroke-width="2"/><line x1="32" y1="32" x2="56" y2="32" stroke="currentColor" stroke-width="2"/><circle cx="32" cy="32" r="2" fill="currentColor"/><text x="44" y="27" text-anchor="middle" font-size="7" font-weight="700" fill="currentColor">${escapeHtml(valueText)}</text></svg>`;
}

function renderAlgebraTextHTML(text) {
  return escapeHtml(String(text)).replace(/\^(\d+)/g, '<sup>$1</sup>');
}

function renderDecimalSolutionText(question) {
  if (question.mode === 'operations') {
    return formatDecimalOperationText(question);
  }

  return renderDecimalPromptHTML(question);
}

function renderDecimalOperationQuestion(num, question) {
  if (question.operation === 'division') {
    return `
      <div class="question question-long-division question-decimal-topic">
        <div class="question-number">${num}.</div>
        <div class="long-division decimal-long-division" style="--dividend-ch:${String(question.left).length + 2}">
          <div class="long-division-answer"></div>
          <div class="long-division-divisor">${escapeHtml(String(question.right))}</div>
          <div class="long-division-dividend">${escapeHtml(String(question.left))}</div>
        </div>
      </div>`;
  }

  const symbol = question.operation === 'addition' ? '+' : question.operation === 'subtraction' ? '−' : '×';

  return `
    <div class="question question-vertical question-decimal-topic">
      <div class="question-number">${num}.</div>
      <div class="question-stack decimal-question-stack">
        <div class="question-top">${escapeHtml(String(question.left))}</div>
        <div class="question-bottom">
          <span class="question-operator">${symbol}</span>
          <span class="question-value">${escapeHtml(String(question.right))}</span>
        </div>
        <div class="answer-line"></div>
      </div>
    </div>`;
}

function renderHighlightedDecimalHTML(value, highlightIndex) {
  const text = String(value);
  const parts = [];
  let digitIndex = 0;

  for (const character of text) {
    if (character === '.') {
      parts.push('.');
      continue;
    }

    const digit = escapeHtml(character);
    if (digitIndex === highlightIndex) {
      parts.push(`<span class="decimal-highlight">${digit}</span>`);
    } else {
      parts.push(digit);
    }
    digitIndex += 1;
  }

  return parts.join('');
}

function buildDecimalNumber(wholeDigits, decimalDigits, highlightIndex) {
  const whole = Array.from({ length: wholeDigits }, (_, index) => (index === 0 ? randomInt(1, 9) : randomInt(0, 9))).join('');
  const fractional = Array.from({ length: decimalDigits }, () => randomInt(0, 9)).join('');
  const value = `${whole}.${fractional}`;
  const plainDigits = `${whole}${fractional}`.split('');
  const highlightDigit = plainDigits[highlightIndex];
  const highlightPower = highlightIndex < wholeDigits ? wholeDigits - highlightIndex - 1 : -(highlightIndex - wholeDigits + 1);

  return { value, highlightDigit, highlightPower };
}

function buildDecimalOperation(operation) {
  const places = randomInt(1, 2);
  const left = randomInt(1, 99) / Math.pow(10, places);
  const right = randomInt(1, 99) / Math.pow(10, places);

  if (operation === 'addition') {
    return { left: left.toFixed(places), right: right.toFixed(places), answer: formatDecimalResult(left + right) };
  }

  if (operation === 'subtraction') {
    const larger = Math.max(left, right);
    const smaller = Math.min(left, right);
    return { left: larger.toFixed(places), right: smaller.toFixed(places), answer: formatDecimalResult(larger - smaller) };
  }

  if (operation === 'multiplication') {
    return { left: left.toFixed(places), right: right.toFixed(places), answer: formatDecimalResult(left * right) };
  }

  const divisor = randomInt(2, 9);
  const quotient = randomInt(1, 99) / 10;
  const dividend = divisor * quotient;
  return { left: formatDecimalResult(dividend), right: String(divisor), answer: formatDecimalResult(quotient) };
}

function formatDecimalOperationText(question) {
  const operators = {
    addition: '+',
    subtraction: '−',
    multiplication: '×',
    division: '÷',
  };

  return `${question.left} ${operators[question.operation]} ${question.right}`;
}

// ===========================
//  Bulk Add (multi-folder PDF export)
// ===========================

function createBulkDay(label) {
  return { label, items: [], formulaSheetModule: '' };
}

let bulkDays = [createBulkDay('Day 1')];
let currentBulkDayIndex = 0;

function buildWorksheetPagesForConfig(config) {
  const questions = buildQuestions(
    config.topic,
    config.minNum,
    config.maxNum,
    config.numQuestions,
    config.timesTable,
    config.denominatorMode,
    config.magicSquareSize,
    'hypotenuse',
    'random',
    config.termCount,
    config.roundingPlace
  );
  const title = config.title || buildDefaultTitle(config.module, config.topic, config.timesTable);
  return paginateQuestions(questions, title, config.module, config.includeSolutions, config.topic, config.timesTable, null, false, config.mixedQuestionsPerPage, config.graphQuestionsPerPage);
}

function buildBulkItemLabel(config) {
  const topicTitle = topicLabel(config.topic, config.timesTable).replace(/ Practice$/, '');
  const sizeLabel = config.topic === 'magic-squares' ? `, ${config.magicSquareSize} × ${config.magicSquareSize}` : '';
  return `${moduleLabel(config.module)} - ${topicTitle}${sizeLabel} (${config.numQuestions} Qs${config.includeSolutions ? ', solutions' : ''})`;
}

function openBulkModal() {
  bulkModalOverlay.style.display = 'flex';
}

function closeBulkModal() {
  bulkModalOverlay.style.display = 'none';
}

function getCurrentBulkDay() {
  return bulkDays[currentBulkDayIndex];
}

function renderBulkDayNav() {
  const day = getCurrentBulkDay();
  bulkDayLabelInput.value = day.label;
  bulkDayIndicator.textContent = `Day ${currentBulkDayIndex + 1} of ${bulkDays.length}`;
  bulkPrevDayBtn.disabled = currentBulkDayIndex === 0;
  bulkNextDayBtn.disabled = currentBulkDayIndex === bulkDays.length - 1;
  bulkRemoveDayBtn.disabled = bulkDays.length <= 1;

  const hasFormulaSheet = Boolean(day.formulaSheetModule);
  bulkDayFormulaCheckbox.checked = hasFormulaSheet;
  bulkDayFormulaModule.disabled = !hasFormulaSheet;
  bulkDayFormulaModule.value = day.formulaSheetModule || bulkModuleSelect.value;
}

function renderBulkItemsList() {
  const items = getCurrentBulkDay().items;

  bulkItemsList.innerHTML = items
    .map((item, index) => `
      <li data-index="${index}">
        <span>${escapeHtml(item.label)}</span>
        <button type="button" class="bulk-item-remove" data-index="${index}">Remove</button>
      </li>`)
    .join('');

  bulkItemsEmpty.style.display = items.length === 0 ? 'block' : 'none';
  updateBulkGenerateButtonState();
}

function updateBulkGenerateButtonState() {
  const hasAnyItems = bulkDays.some((day) => day.items.length > 0 || day.formulaSheetModule);
  bulkGenerateBtn.disabled = !hasAnyItems;
}

function readBulkItemConfigFromForm() {
  const module = bulkModuleSelect.value;
  const topic = bulkTopicSelect.value;
  const minNum = parseInt(bulkMinNumInput.value, 10);
  const maxNum = parseInt(bulkMaxNumInput.value, 10);
  const numQuestions = parseInt(bulkNumQuestionsInput.value, 10);
  const timesTable = parseInt(bulkTimesTableSelect.value, 10);
  const denominatorMode = bulkDenominatorSelect.value;
  const magicSquareSize = parseInt(bulkMagicSquareSizeSelect.value, 10);
  const includeSolutions = bulkSolutionsCheckbox.checked;
  const title = bulkTitleInput.value.trim();
  const termCount = parseInt(bulkTermCountSelect.value, 10);
  const roundingPlace = bulkRoundingPlaceSelect.value;
  const mixedQuestionsPerPage = parseInt(bulkMixedQuestionsPerPageSelect.value, 10);
  const graphQuestionsPerPage = parseInt(bulkGraphQuestionsPerPageSelect.value, 10);

  if (topic !== 'times-tables' && minNum > maxNum) {
    alert('Min Number cannot be greater than Max Number.');
    return null;
  }

  if (!Number.isFinite(numQuestions) || numQuestions < 1) {
    alert('Number of Questions must be at least 1.');
    return null;
  }

  return { module, topic, minNum, maxNum, numQuestions, timesTable, denominatorMode, magicSquareSize, termCount, roundingPlace, mixedQuestionsPerPage, graphQuestionsPerPage, includeSolutions, title };
}

function addBulkItem() {
  const config = readBulkItemConfigFromForm();
  if (!config) {
    return;
  }

  config.label = buildBulkItemLabel(config);
  getCurrentBulkDay().items.push(config);
  renderBulkItemsList();
}

function removeBulkItem(index) {
  getCurrentBulkDay().items.splice(index, 1);
  renderBulkItemsList();
}

function goToBulkDay(index) {
  if (index < 0 || index >= bulkDays.length) {
    return;
  }
  currentBulkDayIndex = index;
  renderBulkDayNav();
  renderBulkItemsList();
}

function addBulkDay() {
  bulkDays.push(createBulkDay(`Day ${bulkDays.length + 1}`));
  goToBulkDay(bulkDays.length - 1);
}

function duplicateBulkDay() {
  const current = getCurrentBulkDay();
  const copy = {
    label: `${current.label} (copy)`,
    items: current.items.map((item) => ({ ...item })),
    formulaSheetModule: current.formulaSheetModule,
  };
  bulkDays.splice(currentBulkDayIndex + 1, 0, copy);
  goToBulkDay(currentBulkDayIndex + 1);
}

function removeBulkDay() {
  if (bulkDays.length <= 1) {
    alert('A program needs at least one day.');
    return;
  }

  bulkDays.splice(currentBulkDayIndex, 1);
  goToBulkDay(Math.min(currentBulkDayIndex, bulkDays.length - 1));
}

function renameBulkDay() {
  const label = bulkDayLabelInput.value.trim() || `Day ${currentBulkDayIndex + 1}`;
  getCurrentBulkDay().label = label;
}

function setBulkBusy(isBusy, message = '') {
  updateBulkGenerateButtonState();
  bulkGenerateBtn.disabled = isBusy || bulkGenerateBtn.disabled;
  bulkCancelBtn.disabled = isBusy;
  bulkAddItemBtn.disabled = isBusy;
  bulkModalCloseBtn.disabled = isBusy;
  bulkAddDayBtn.disabled = isBusy;
  bulkDuplicateDayBtn.disabled = isBusy;
  bulkRemoveDayBtn.disabled = isBusy || bulkDays.length <= 1;
  bulkPrevDayBtn.disabled = isBusy || currentBulkDayIndex === 0;
  bulkNextDayBtn.disabled = isBusy || currentBulkDayIndex === bulkDays.length - 1;
  bulkProgress.style.display = message ? 'block' : 'none';
  bulkProgress.textContent = message;
}

function getPdfCaptureSandbox() {
  let sandbox = document.getElementById('pdfCaptureSandbox');
  if (!sandbox) {
    sandbox = document.createElement('div');
    sandbox.id = 'pdfCaptureSandbox';
    sandbox.className = 'pdf-capture-sandbox';
    document.body.appendChild(sandbox);
  }
  return sandbox;
}

async function renderPagesIntoPdf(pdf, pageHtmlList, hasExistingPages) {
  const sandbox = getPdfCaptureSandbox();
  let addedFirstPage = hasExistingPages;

  for (const pageHtml of pageHtmlList) {
    sandbox.innerHTML = pageHtml;
    const pageEl = sandbox.firstElementChild;

    // Let the browser lay out/paint the page before capturing it.
    await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));

    const canvas = await html2canvas(pageEl, { scale: 2, useCORS: true, backgroundColor: '#ffffff' });
    const imgData = canvas.toDataURL('image/jpeg', 0.92);

    if (addedFirstPage) {
      pdf.addPage('a4', 'portrait');
    }
    pdf.addImage(imgData, 'JPEG', 0, 0, 210, 297);
    addedFirstPage = true;
  }

  sandbox.innerHTML = '';
  return addedFirstPage;
}

function padFolderNumber(num, total) {
  const digits = String(total).length;
  return String(num).padStart(Math.max(digits, 2), '0');
}

async function generateBulkPdfs() {
  const folderCount = parseInt(bulkFolderCountInput.value, 10);
  const batchName = bulkBatchNameInput.value.trim() || 'Bulk Worksheets';

  if (!Number.isFinite(folderCount) || folderCount < 1) {
    alert('Number of Folders must be at least 1.');
    return;
  }

  const emptyDay = bulkDays.find((day) => day.items.length === 0 && !day.formulaSheetModule);
  if (emptyDay) {
    alert(`"${emptyDay.label}" has no worksheets yet. Add at least one worksheet to every day, or remove empty days.`);
    return;
  }

  const { jsPDF } = window.jspdf || {};
  if (!jsPDF || typeof html2canvas !== 'function' || typeof JSZip !== 'function') {
    alert('Bulk PDF generation requires an internet connection to load required libraries. Please check your connection and try again.');
    return;
  }

  setBulkBusy(true, 'Preparing...');

  try {
    const zip = new JSZip();
    const batchFolder = zip.folder(sanitizeFileNamePart(batchName));

    for (let folderNum = 1; folderNum <= folderCount; folderNum++) {
      const dayConfig = bulkDays[(folderNum - 1) % bulkDays.length];
      setBulkBusy(true, `Generating folder ${folderNum} of ${folderCount} (${dayConfig.label})...`);

      const pdf = new jsPDF({ unit: 'mm', format: 'a4', orientation: 'portrait' });
      let hasPages = false;

      if (dayConfig.formulaSheetModule) {
        setBulkBusy(true, `Folder ${folderNum} of ${folderCount} (${dayConfig.label}) - adding formula sheet cover page...`);
        hasPages = await renderPagesIntoPdf(pdf, [buildFormulaSheetHTML(dayConfig.formulaSheetModule)], hasPages);
      }

      for (let i = 0; i < dayConfig.items.length; i++) {
        const config = dayConfig.items[i];
        setBulkBusy(true, `Folder ${folderNum} of ${folderCount} (${dayConfig.label}) - worksheet ${i + 1} of ${dayConfig.items.length}...`);
        const pages = buildWorksheetPagesForConfig(config);
        hasPages = await renderPagesIntoPdf(pdf, pages, hasPages);
      }

      const folderLabel = `Day ${padFolderNumber(folderNum, folderCount)}`;
      const pdfBlob = pdf.output('blob');
      batchFolder.folder(folderLabel).file(`${sanitizeFileNamePart(dayConfig.label)}.pdf`, pdfBlob);
    }

    setBulkBusy(true, 'Packaging folders into a zip file...');
    const zipBlob = await zip.generateAsync({ type: 'blob' });

    const url = URL.createObjectURL(zipBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${sanitizeFileNamePart(batchName)}.zip`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);

    bulkDays = [createBulkDay('Day 1')];
    currentBulkDayIndex = 0;
    renderBulkDayNav();
    renderBulkItemsList();
    closeBulkModal();
  } catch (error) {
    console.error('Bulk PDF generation failed:', error);
    alert('Something went wrong while generating the bulk PDFs. Please try again.');
  } finally {
    setBulkBusy(false, '');
  }
}

bulkAddBtn.addEventListener('click', openBulkModal);
bulkModalCloseBtn.addEventListener('click', closeBulkModal);
bulkCancelBtn.addEventListener('click', closeBulkModal);
bulkModalOverlay.addEventListener('click', (event) => {
  if (event.target === bulkModalOverlay) {
    closeBulkModal();
  }
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && bulkModalOverlay.style.display !== 'none') {
    closeBulkModal();
  }
});
bulkAddItemBtn.addEventListener('click', addBulkItem);
bulkItemsList.addEventListener('click', (event) => {
  const button = event.target.closest('.bulk-item-remove');
  if (button) {
    removeBulkItem(parseInt(button.dataset.index, 10));
  }
});
bulkGenerateBtn.addEventListener('click', generateBulkPdfs);
bulkPrevDayBtn.addEventListener('click', () => goToBulkDay(currentBulkDayIndex - 1));
bulkNextDayBtn.addEventListener('click', () => goToBulkDay(currentBulkDayIndex + 1));
bulkAddDayBtn.addEventListener('click', addBulkDay);
bulkDuplicateDayBtn.addEventListener('click', duplicateBulkDay);
bulkRemoveDayBtn.addEventListener('click', removeBulkDay);
bulkDayLabelInput.addEventListener('change', renameBulkDay);
bulkDayFormulaCheckbox.addEventListener('change', () => {
  const day = getCurrentBulkDay();
  day.formulaSheetModule = bulkDayFormulaCheckbox.checked ? bulkDayFormulaModule.value : '';
  bulkDayFormulaModule.disabled = !bulkDayFormulaCheckbox.checked;
});
bulkDayFormulaModule.addEventListener('change', () => {
  if (bulkDayFormulaCheckbox.checked) {
    getCurrentBulkDay().formulaSheetModule = bulkDayFormulaModule.value;
  }
});

renderBulkDayNav();
renderBulkItemsList();

// ---- Saved filters (bulk programs), persisted in localStorage ----

const BULK_PRESETS_STORAGE_KEY = 'worksheetGenerator.bulkPresets';

function loadBulkPresets() {
  try {
    const raw = localStorage.getItem(BULK_PRESETS_STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (error) {
    console.error('Failed to read saved filters:', error);
    return {};
  }
}

function saveBulkPresets(presets) {
  try {
    localStorage.setItem(BULK_PRESETS_STORAGE_KEY, JSON.stringify(presets));
  } catch (error) {
    console.error('Failed to save filters:', error);
    alert('Could not save the filter. Your browser storage may be full or unavailable.');
  }
}

function renderBulkPresetOptions(selectedName = '') {
  const presets = loadBulkPresets();
  const names = Object.keys(presets).sort((a, b) => a.localeCompare(b));

  bulkPresetSelect.innerHTML = '<option value="">-- Select a saved filter --</option>'
    + names.map((name) => `<option value="${escapeHtml(name)}">${escapeHtml(name)}</option>`).join('');
  bulkPresetSelect.value = names.includes(selectedName) ? selectedName : '';

  const hasSelection = Boolean(bulkPresetSelect.value);
  bulkLoadPresetBtn.disabled = !hasSelection;
  bulkDeletePresetBtn.disabled = !hasSelection;
}

function saveCurrentBulkPreset() {
  const name = bulkPresetNameInput.value.trim();
  if (!name) {
    alert('Enter a name for this filter before saving.');
    return;
  }

  const hasAnyItems = bulkDays.some((day) => day.items.length > 0 || day.formulaSheetModule);
  if (!hasAnyItems) {
    alert('Add at least one worksheet or formula sheet to at least one day before saving a filter.');
    return;
  }

  const presets = loadBulkPresets();
  if (presets[name] && !confirm(`A saved filter named "${name}" already exists. Overwrite it?`)) {
    return;
  }

  presets[name] = {
    batchName: bulkBatchNameInput.value.trim() || 'Bulk Worksheets',
    folderCount: parseInt(bulkFolderCountInput.value, 10) || 1,
    days: bulkDays.map((day) => ({
      label: day.label,
      items: day.items.map((item) => ({ ...item })),
      formulaSheetModule: day.formulaSheetModule || '',
    })),
  };
  saveBulkPresets(presets);
  bulkPresetNameInput.value = '';
  renderBulkPresetOptions(name);
}

function loadSelectedBulkPreset() {
  const name = bulkPresetSelect.value;
  if (!name) {
    return;
  }

  const presets = loadBulkPresets();
  const preset = presets[name];
  if (!preset) {
    return;
  }

  bulkBatchNameInput.value = preset.batchName || 'Bulk Worksheets';
  bulkFolderCountInput.value = preset.folderCount || 1;

  if (Array.isArray(preset.days) && preset.days.length > 0) {
    bulkDays = preset.days.map((day) => ({
      label: day.label,
      items: (day.items || []).map((item) => ({ ...item })),
      formulaSheetModule: day.formulaSheetModule || '',
    }));
  } else if (Array.isArray(preset.items)) {
    // Back-compat with filters saved before the day-plan feature.
    bulkDays = [{ label: 'Day 1', items: preset.items.map((item) => ({ ...item })), formulaSheetModule: '' }];
  } else {
    bulkDays = [createBulkDay('Day 1')];
  }

  currentBulkDayIndex = 0;
  renderBulkDayNav();
  renderBulkItemsList();
}

function deleteSelectedBulkPreset() {
  const name = bulkPresetSelect.value;
  if (!name) {
    return;
  }

  if (!confirm(`Delete the saved filter "${name}"?`)) {
    return;
  }

  const presets = loadBulkPresets();
  delete presets[name];
  saveBulkPresets(presets);
  renderBulkPresetOptions();
}

bulkPresetSelect.addEventListener('change', () => {
  const hasSelection = Boolean(bulkPresetSelect.value);
  bulkLoadPresetBtn.disabled = !hasSelection;
  bulkDeletePresetBtn.disabled = !hasSelection;
});
bulkSavePresetBtn.addEventListener('click', saveCurrentBulkPreset);
bulkLoadPresetBtn.addEventListener('click', loadSelectedBulkPreset);
bulkDeletePresetBtn.addEventListener('click', deleteSelectedBulkPreset);

renderBulkPresetOptions();

// ===========================
//  Formula & Glossary Lookup
// ===========================

const FORMULA_SHEETS = {
  arithmetic: [
    { heading: 'Order of Operations (BODMAS)', rules: ['Brackets first', 'Orders (powers & roots) next', 'Division and Multiplication, left to right', 'Addition and Subtraction, left to right'] },
    { heading: 'Basic Properties', rules: ['a + b = b + a (commutative addition)', 'a × b = b × a (commutative multiplication)', 'a × (b + c) = (a × b) + (a × c) (distributive law)'] },
    { heading: 'Mental Strategies', rules: ['Number bond: part + part = whole', 'Compensation: adjust a number, then correct the answer'] },
  ],
  fractions: [
    { heading: 'Equivalent Fractions', rules: ['Multiply or divide the numerator and denominator by the same number'] },
    { heading: 'Add / Subtract', rules: ['Same denominator: a/c + b/c = (a+b)/c', 'Different denominators: find a common denominator first'] },
    { heading: 'Multiply / Divide', rules: ['Multiply: a/b × c/d = (a×c)/(b×d)', 'Divide: a/b ÷ c/d = a/b × d/c (flip and multiply)'] },
    { heading: 'Simplifying & Converting', rules: ['Simplify: divide numerator and denominator by their GCD', 'Mixed to improper: (whole × denominator) + numerator, over the denominator'] },
    { heading: 'Fractions of Quantities', rules: ['Fraction of a quantity = numerator × (quantity ÷ denominator)'] },
  ],
  decimals: [
    { heading: 'Place Value', rules: ['Tenths, hundredths, thousandths (each column is ÷10 of the last)'] },
    { heading: 'Operations', rules: ['Add/Subtract: line up the decimal points', 'Multiply: multiply as whole numbers, then count total decimal places', 'Divide: move the decimal point to make the divisor a whole number'] },
  ],
  percentages: [
    { heading: 'Conversions', rules: ['% to decimal: divide by 100', 'Decimal to %: multiply by 100', 'Fraction to %: (numerator ÷ denominator) × 100'] },
    { heading: 'Calculations', rules: ['Percentage of an amount: (percentage ÷ 100) × amount', 'Percentage increase: original + (percentage × original)', 'Percentage decrease: original − (percentage × original)'] },
  ],
  geometry: [
    { heading: 'Angle Facts', rules: ['Angles on a straight line = 180°', 'Angles around a point = 360°', 'Angles in a triangle = 180°', 'Angles in a quadrilateral = 360°'] },
    { heading: 'Circles', rules: ['Circumference = 2πr = πd', 'Area = πr²'] },
  ],
  measurement: [
    { heading: 'Perimeter', rules: ['Rectangle = 2(l + w)', 'Square = 4s', 'Triangle = a + b + c'] },
    { heading: 'Area', rules: ['Rectangle = l × w', 'Square = s²', 'Triangle = ½ × b × h', 'Circle = πr²', 'Parallelogram = b × h', 'Trapezium = ½(a + b) × h'] },
    { heading: 'Volume & Surface Area', rules: ['Cube volume = s³, surface area = 6s²', 'Rectangular prism volume = l × w × h', 'Cylinder volume = πr²h'] },
    { heading: 'Unit Conversions', rules: ['km ↔ m: ×1,000 / ÷1,000', 'm ↔ cm: ×100 / ÷100', 'kg ↔ g: ×1,000 / ÷1,000', 'L ↔ mL: ×1,000 / ÷1,000', 'hours ↔ minutes: ×60 / ÷60'] },
    { heading: 'Time', rules: ['Elapsed time = finish time − start time', 'Quarter past = :15, half past = :30, quarter to = :45'] },
  ],
  money: [
    { heading: 'Working with Money', rules: ['Adding money: line up the decimal points, add cents then dollars', 'Making change: amount paid − cost = change'] },
  ],
  number: [
    { heading: 'Key Terms', rules: ['Factors: numbers that divide exactly into another number', 'Multiples: results of multiplying a number by whole numbers', 'Prime numbers: only divisible by 1 and itself (2, 3, 5, 7, 11, 13...)', 'Composite numbers: have more than two factors', 'Square numbers: n × n', 'Square root: √(n × n) = n', 'Rounding: look at the digit to the right of the target place'] },
  ],
  ratio: [
    { heading: 'Ratios', rules: ['Writing ratios: a : b', 'Equivalent ratios: multiply or divide both sides by the same number', 'Dividing in a ratio: total parts = a + b, each part = total ÷ parts'] },
    { heading: 'Proportion', rules: ['a/b = c/d, cross multiply: a × d = b × c'] },
  ],
  networks: [
    { heading: 'Networks', rules: ['Shortest path: choose the route with the smallest total weight', 'Minimum spanning tree: connect all vertices with minimum total weight and no cycles'] },
    { heading: 'Flow and Scheduling', rules: ['Maximum flow is limited by edge capacities', 'Critical path duration is the longest dependent path'] },
  ],
  statistics: [
    { heading: 'Averages', rules: ['Mean = sum of values ÷ number of values', 'Median = middle value when ordered (average the two middle values if even count)', 'Mode = most frequently occurring value', 'Range = highest value − lowest value'] },
    { heading: 'Probability', rules: ['Probability = favourable outcomes ÷ total outcomes'] },
    { heading: 'Box Plots & Cumulative Frequency', rules: ['IQR = upper quartile − lower quartile', 'Cumulative frequency = running total of frequencies'] },
  ],
  probability: [
    { heading: 'Probability', rules: ['Probability = favourable outcomes ÷ total outcomes', 'Probability is between 0 and 1 inclusive', 'Impossible = 0, certain = 1'] },
  ],
  trigonometry: [
    { heading: 'SOH CAH TOA', rules: ['sin θ = opposite / hypotenuse', 'cos θ = adjacent / hypotenuse', 'tan θ = opposite / adjacent'] },
    { heading: 'Key Rules', rules: ['Pythagoras\u2019 Theorem: a² + b² = c²', 'Sine Rule: a/sin A = b/sin B = c/sin C', 'Cosine Rule: c² = a² + b² − 2ab cos C', 'Angle sum of a triangle = 180°'] },
  ],
  algebra: [
    { heading: 'Working with Expressions', rules: ['Like terms: combine terms with the same variable and power', 'Expanding: a(b + c) = ab + ac', 'Factorising: reverse of expanding — find common factors'] },
    { heading: 'Equations & Substitution', rules: ['Solving equations: do the same operation to both sides to keep it balanced', 'Substitution: replace variables with given values, then calculate'] },
    { heading: 'Index Laws', rules: ['aᵐ × aⁿ = aᵐ⁺ⁿ', 'aᵐ ÷ aⁿ = aᵐ⁻ⁿ', '(aᵐ)ⁿ = aᵐⁿ'] },
    { heading: 'Graphs & Equations', rules: ['Straight line: y = mx + c', 'Gradient = rise ÷ run', 'Solve equations by performing inverse operations on both sides', 'For inequalities, reverse the sign when multiplying or dividing by a negative'] },
    { heading: 'Algebraic Fractions', rules: ['Simplify by dividing the numerator and denominator by their common factor'] },
  ],
  matrices: [
    { heading: 'Matrix Operations', rules: ['Add or subtract corresponding entries', 'Matrices must have compatible dimensions for multiplication', 'Multiply rows by columns'] },
    { heading: 'Inverse of a 2×2 Matrix', rules: ['For [[a,b],[c,d]], determinant = ad − bc', 'A⁻¹ = 1/(ad−bc) [[d,−b], [−c,a]]'] },
  ],
};

const TOPIC_FORMULA_GROUPS = {
  'matrix-addition': [{ heading: 'Matrix Addition', rules: ['Add corresponding entries', 'Matrices must have the same dimensions'] }],
  'matrix-subtraction': [{ heading: 'Matrix Subtraction', rules: ['Subtract corresponding entries', 'Matrices must have the same dimensions'] }],
  'matrix-multiplication': [{ heading: 'Matrix Multiplication', rules: ['Multiply rows by columns', 'Each result entry is a row-column dot product'] }],
  'matrix-inverse': [{ heading: 'Inverse of a 2×2 Matrix', rules: ['For [[a,b],[c,d]], determinant = ad − bc', 'A⁻¹ = 1/(ad−bc) [[d,−b], [−c,a]]'] }],
  'add-fractions': [{ heading: 'Adding Fractions', rules: ['Same denominator: a/c + b/c = (a+b)/c', 'Different denominators: find a common denominator first', 'Simplify the final fraction'] }],
  'subtract-fractions': [{ heading: 'Subtracting Fractions', rules: ['Same denominator: a/c − b/c = (a−b)/c', 'Different denominators: find a common denominator first', 'Simplify the final fraction'] }],
  'multiply-fractions': [{ heading: 'Multiplying Fractions', rules: ['a/b × c/d = (a×c)/(b×d)', 'Simplify before or after multiplying'] }],
  'divide-fractions': [{ heading: 'Dividing Fractions', rules: ['a/b ÷ c/d = a/b × d/c', 'Flip the second fraction, then multiply'] }],
  area: [{ heading: 'Area', rules: ['Rectangle = length × width', 'Triangle = ½ × base × height', 'Parallelogram = base × perpendicular height'] }],
  perimeter: [{ heading: 'Perimeter', rules: ['Rectangle = 2(length + width)', 'Square = 4 × side', 'Polygon perimeter = sum of all side lengths'] }],
  'linear-graphs': [{ heading: 'Linear Graphs', rules: ['Straight line: y = mx + c', 'm is the gradient and c is the y-intercept'] }],
  gradient: [{ heading: 'Gradient', rules: ['Gradient = rise ÷ run', 'Gradient = (y₂ − y₁) ÷ (x₂ − x₁)'] }],
  inequalities: [{ heading: 'Inequalities', rules: ['Perform the same operation on both sides', 'Reverse the inequality sign when multiplying or dividing by a negative'] }],
  'multi-step-linear-equations': [{ heading: 'Multi-step Equations', rules: ['Undo addition or subtraction first', 'Undo multiplication or division second', 'Perform the same operation on both sides'] }],
  'algebraic-fractions': [{ heading: 'Algebraic Fractions', rules: ['Divide the numerator and denominator by their common factor'] }],
  'box-plots': [{ heading: 'Box Plots', rules: ['IQR = upper quartile − lower quartile', 'The five-number summary is minimum, Q1, median, Q3, maximum'] }],
  'cumulative-frequency': [{ heading: 'Cumulative Frequency', rules: ['Add each frequency to the running total', 'The final cumulative frequency equals the total frequency'] }],
  'plot-cartesian-plane': [{ heading: 'Cartesian Plane', rules: ['Coordinates are written (x, y)', 'Move along the x-axis first, then move along the y-axis'] }],
  'stem-and-leaf': [{ heading: 'Stem-and-Leaf Plots', rules: ['The stem shows leading digits', 'The leaf shows the final digit', 'Include a key, for example 3 | 4 = 34'] }],
  histograms: [{ heading: 'Histograms', rules: ['Use touching bars for continuous grouped data', 'Bar height represents frequency'] }],
  'dot-plots': [{ heading: 'Dot Plots', rules: ['Place one dot above a value for each occurrence', 'Stack dots when values repeat'] }],
  'scatter-plots': [{ heading: 'Scatter Plots', rules: ['Plot paired values as (x, y)', 'Describe the association as positive, negative or none'] }],
  'frequency-distributions': [{ heading: 'Frequency Distributions', rules: ['Frequency is the number of observations in a group', 'The sum of frequencies is the total frequency'] }],
  'draw-charts': [{ heading: 'Drawing Statistical Charts', rules: ['Label both axes', 'Choose an appropriate scale', 'Plot or draw each value accurately'] }],
  distributions: [{ heading: 'Distributions', rules: ['A symmetric distribution has similar tails', 'A skewed distribution has a longer tail on one side'] }],
  'recurrence-relations': [{ heading: 'Recurrence Relations', rules: ['Define the first term, a₁', 'Define each term from the previous term, aₙ = f(aₙ₋₁)'] }],
  'network-graphs': [{ heading: 'Network Graphs', rules: ['Vertices represent objects and edges represent connections', 'Edge weights represent distance, time or cost'] }],
  'shortest-paths': [{ heading: 'Shortest Paths', rules: ['Add edge weights along each route', 'Choose the route with the smallest total weight'] }],
  'minimum-spanning-trees': [{ heading: 'Minimum Spanning Trees', rules: ['Connect every vertex without cycles', 'Choose edges with the smallest possible total weight'] }],
  'critical-paths': [{ heading: 'Critical Path Analysis', rules: ['Critical path duration is the sum of activity durations on the longest dependent path'] }],
  'network-flow': [{ heading: 'Network Flow', rules: ['Maximum flow is limited by capacity', 'Total flow is the sum of flow through independent routes'] }],
};

function getTopicFormulaGroups(module, topic, unitConversionGroups) {
  if (topic === 'unit-conversions') return unitConversionGroups;
  return TOPIC_FORMULA_GROUPS[topic] || FORMULA_SHEETS[module] || [];
}

function buildFormulaSheetHTML(module) {
  const groups = FORMULA_SHEETS[module] || [];
  const groupsHTML = groups.map((group) => `
    <section class="conversion-formula-group">
      <h3>${escapeHtml(group.heading)}</h3>
      <ul>${group.rules.map((rule) => `<li>${escapeHtml(rule)}</li>`).join('')}</ul>
    </section>`).join('');

  return `
    <div class="a4-page conversion-formula-page">
      <div class="worksheet-header">
        ${buildWorksheetHeaderBrandHTML(`${moduleLabel(module)} Formula Sheet`, module)}
        <div class="worksheet-info-strip">
          ${buildInfoStripItem('book', 'Module', moduleLabel(module))}
          ${buildInfoStripItem('clipboard', 'Type', 'Formula & Glossary Sheet')}
        </div>
      </div>
      <div class="conversion-formula-content">
        <h2>${escapeHtml(moduleLabel(module))} - Key Formulas &amp; Terms</h2>
        <div class="conversion-formula-grid">${groupsHTML}</div>
      </div>
      <div class="page-footer">
        <div class="page-footer-left">${buildFooterLegalHTML()}</div>
        <span class="page-footer-right">Page 1 of 1</span>
      </div>
    </div>`;
}

function renderFormulaLookupPreview() {
  formulaLookupPreview.innerHTML = buildFormulaSheetHTML(formulaModuleSelect.value);
}

function openFormulaModal() {
  renderFormulaLookupPreview();
  formulaModalOverlay.style.display = 'flex';
}

function closeFormulaModal() {
  formulaModalOverlay.style.display = 'none';
}

function printFormulaSheet() {
  const printContainer = document.createElement('div');
  printContainer.className = 'formula-print-only';
  printContainer.innerHTML = buildFormulaSheetHTML(formulaModuleSelect.value);
  document.body.appendChild(printContainer);
  document.body.classList.add('formula-print-mode');
  document.title = buildPrintableFileName();

  const cleanup = () => {
    document.body.classList.remove('formula-print-mode');
    document.title = initialDocumentTitle;
    printContainer.remove();
    window.removeEventListener('afterprint', cleanup);
  };
  window.addEventListener('afterprint', cleanup);

  window.print();
}

formulaLookupBtn.addEventListener('click', openFormulaModal);
formulaModalCloseBtn.addEventListener('click', closeFormulaModal);
formulaModalCancelBtn.addEventListener('click', closeFormulaModal);
formulaModalOverlay.addEventListener('click', (event) => {
  if (event.target === formulaModalOverlay) {
    closeFormulaModal();
  }
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && formulaModalOverlay.style.display !== 'none') {
    closeFormulaModal();
  }
});
formulaModuleSelect.addEventListener('change', renderFormulaLookupPreview);
formulaPrintBtn.addEventListener('click', printFormulaSheet);

function formatDecimalResult(value) {
  return Number(value.toFixed(2)).toString();
}

function formatDecimalPlaceValue(digit, power) {
  const numeric = Number(digit) * Math.pow(10, power);
  return formatDecimalResult(numeric);
}

function formatPercentageToDecimal(percent) {
  return formatDecimalResult(percent / 100);
}

function formatPercentageChange(base, percent, direction) {
  const change = base * (percent / 100);
  return formatDecimalResult(direction === 1 ? base + change : base - change);
}

function getPageInstruction(topic) {
  const primaryInstructions = {
    'multiplication-strategies': 'Use a strategy to solve each multiplication question:',
    'division-strategies': 'Use a strategy to solve each division question:',
    'multi-step-word-problems': 'Read each problem carefully and solve it in steps:',
    'fact-families': 'Write the related facts for each number family:',
    'fraction-models': 'Write the fraction represented by each description:',
    'measurement-conversions': 'Convert each measurement:',
    'elapsed-time': 'Work out the finishing time for each activity:',
    'shape-properties': 'Answer each question about shape properties:',
    discounts: 'Calculate each sale price:',
    'data-interpretation': 'Read the data and answer each question:',
  };
  if (primaryInstructions[topic]) {
    return primaryInstructions[topic];
  }

  const advancedInstructions = {
    quadratics: 'Solve each quadratic equation:',
    calculus: 'Find each derivative:',
    vectors: 'Add each pair of vectors:',
    matrices: 'Add each pair of matrices:',
    'complex-numbers': 'Simplify each complex-number expression:',
    'financial-mathematics': 'Calculate the simple interest in each question:',
    'advanced-probability': 'Find the probability of each event:',
    pythagoras: 'Use Pythagoras’ theorem to find each missing side:',
  };
  if (advancedInstructions[topic]) {
    return advancedInstructions[topic];
  }

  if (topic === 'sudoku') {
    return 'Complete the grid so each row, column and 3 × 3 box contains the numbers 1 to 9 once.';
  }

  if (topic === 'magic-squares') {
    return 'Complete each square so every row, column and diagonal has the same total.';
  }

  if (topic === 'odd-even') {
    return 'State whether each number is odd or even:';
  }

  if (topic === 'comparing-numbers') {
    return 'Compare the numbers using <, > or =:';
  }

  if (topic === 'missing-numbers') {
    return 'Find the missing number in each number sentence:';
  }

  if (topic === 'number-sentences') {
    return 'Find the missing number in each number sentence:';
  }

  if (topic === 'writing-numbers-sequence' || topic === 'writing-numbers-random') {
    return 'Trace each number carefully:';
  }

  if (topic === 'identifying-numbers') {
    return 'Write the numeral for each number name:';
  }

  if (topic === 'multiplication-groups') {
    return 'Use the rows and columns to write each multiplication sentence:';
  }

  if (topic === 'equality') {
    return 'State whether each number sentence is true or false:';
  }

  if (topic === 'recognising-fractions') {
    return 'Write the fraction represented by each description:';
  }

  if (topic === 'comparing-fractions') {
    return 'Compare the fractions using <, > or =:';
  }

  if (topic === 'percentage-of-amount') {
    return 'Find the percentage of each amount:';
  }

  if (topic === 'fraction-decimal-percentage') {
    return 'Convert each fraction to a decimal and a percentage:';
  }

  if (topic === 'position-direction') {
    return 'Work out the new direction after each turn:';
  }

  if (topic === 'coordinates') {
    return 'Write the coordinates for each point:';
  }

  if (topic === 'temperature') {
    return 'Find each new temperature:';
  }

  if (topic === 'calendars') {
    return 'Answer each question about days and weeks:';
  }

  if (topic === 'collecting-data') {
    return 'Choose the best method to collect the data:';
  }

  if (topic === 'picture-graphs') {
    return 'Use the picture graph key to answer each question:';
  }

  if (topic === 'bar-graphs') {
    return 'Use the bar graph data to answer each question:';
  }

  if (topic === 'chance-language') {
    return 'Describe the chance of each event:';
  }

  if (topic === 'simple-probability') {
    return 'Find the probability of each event as a fraction:';
  }

  if (topic === 'word-problems') {
    return 'Read each problem carefully and solve it:';
  }

  if (topic === 'making-change') {
    return 'Find the change for each purchase:';
  }

  if (topic === 'adding-money') {
    return 'Add the following amounts of money:';
  }

  if (topic === 'money-word-problems') {
    return 'Solve each money word problem:';
  }

  if (topic === 'writing-ratios') {
    return 'Write each ratio in simplest form:';
  }

  if (topic === 'equivalent-ratios') {
    return 'Find an equivalent ratio:';
  }

  if (topic === 'dividing-in-a-ratio') {
    return 'Divide each amount according to the ratio:';
  }

  if (topic === 'proportion') {
    return 'Use proportional reasoning to solve each problem:';
  }

  if (topic === 'decimal-place-value') {
    return 'What is the value of the highlighted digit in the following decimal:';
  }

  if (topic === 'decimal-operations') {
    return 'Calculate the following decimal operations:';
  }

  if (topic === 'percentage-increase') {
    return 'Calculate the percentage increase:';
  }

  if (topic === 'percentage-decrease') {
    return 'Calculate the percentage decrease:';
  }

  if (topic === 'percentage-to-decimal') {
    return 'Convert the following percentages to decimals:';
  }

  if (topic === '2d-shapes') {
    return 'Write the requested property for each 2D shape:';
  }

  if (topic === '3d-shapes') {
    return 'Write the requested property for each 3D shape:';
  }

  if (topic === 'angles') {
    return 'Find the missing angle:';
  }

  if (topic === 'symmetry') {
    return 'Write the number of lines of symmetry for each shape:';
  }

  if (topic === 'transformations') {
    return 'Apply each transformation and write the new coordinate:';
  }

  if (topic === 'congruence') {
    return 'Decide if the two triangles are congruent:';
  }

  if (topic === 'similarity') {
    return 'Use similarity and scale factor to find the new side length:';
  }

  if (topic === 'circle-geometry') {
    return 'Find the missing circle measure:';
  }

  if (topic === 'geometric-reasoning') {
    return 'Use angle facts to find the missing value:';
  }

  if (topic === 'proof') {
    return 'State whether each geometric statement is true or false:';
  }

  if (topic === 'length') {
    return 'Convert each length to the requested unit:';
  }

  if (topic === 'area') {
    return 'Find the area of each shape:';
  }

  if (topic === 'perimeter') {
    return 'Find the perimeter of each shape:';
  }

  if (topic === 'volume') {
    return 'Find the volume of each solid:';
  }

  if (topic === 'surface-area') {
    return 'Find the surface area of each solid:';
  }

  if (topic === 'capacity') {
    return 'Convert each capacity to the requested unit:';
  }

  if (topic === 'mass') {
    return 'Convert each mass to the requested unit:';
  }

  if (topic === 'time') {
    return 'Convert each time value to the requested unit:';
  }

  if (topic === 'unit-conversions') {
    return 'Convert each value to the requested unit:';
  }

  if (topic === 'scale-drawings') {
    return 'Use the scale to find the missing drawing length:';
  }

  if (topic === 'right-angle-trigonometry') {
    return 'Use right-angle trigonometry to find the missing value:';
  }

  if (topic === 'sine-rule') {
    return 'Use the sine rule to find the missing side:';
  }

  if (topic === 'cosine-rule') {
    return 'Use the cosine rule to find the missing side:';
  }

  if (topic === 'bearings') {
    return 'Find the required three-figure bearing:';
  }

  if (topic === 'applications-of-trigonometry') {
    return 'Use trigonometry to solve each real-world problem:';
  }

  if (ALGEBRA_TOPICS.has(topic)) {
    const map = {
      patterns: 'Complete the patterns:',
      variables: 'Write each expression:',
      expressions: 'Simplify each expression:',
      substitution: 'Substitute the values and evaluate:',
      'expanding-expressions': 'Expand each expression:',
      factorisation: 'Factorise each expression:',
      'linear-equations': 'Solve each equation:',
      'simultaneous-equations': 'Solve the simultaneous equations:',
      inequalities: 'Solve each inequality:',
      polynomials: 'Simplify each polynomial:',
      functions: 'Evaluate each function:',
      'exponential-functions': 'Evaluate each exponential function:',
      'logarithmic-functions': 'Evaluate each logarithmic function:',
      sequences: 'Continue the sequences:',
    };
    return map[topic] || 'Complete the following algebra questions:';
  }

  if (topic === 'whole-numbers') {
    return 'Write the following in words:';
  }

  if (topic === 'ordering-numbers') {
    return 'Order the following numbers from smallest to largest:';
  }

  if (topic === 'factors') {
    return 'List all the factors of the following number:';
  }

  if (topic === 'multiples') {
    return 'Write the first 5 multiples of the following number:';
  }

  if (topic === 'integers') {
    return 'Order the following integers from least to greatest:';
  }

  if (topic === 'scientific-notation') {
    return 'Write the following in scientific notation:';
  }

  if (topic === 'equivalent-fractions') {
    return 'Write an equivalent fraction for the following:';
  }

  if (topic === 'mixed-fractions') {
    return 'Convert the following to a mixed fraction:';
  }

  if (topic === 'improper-fractions') {
    return 'Convert the following to an improper fraction:';
  }

  return '';
}

function renderPythagorasSVG(question) {
  const { legA, legB, hypotenuse } = question.legs;
  return `<svg viewBox="0 0 180 140" aria-hidden="true"><polygon points="35,112 35,32 145,112" fill="rgba(43,108,176,0.1)" stroke="currentColor" stroke-width="2.8"/><polyline points="35,98 49,98 49,112" fill="none" stroke="currentColor" stroke-width="2"/><text x="25" y="74" text-anchor="middle" font-size="16" font-weight="700" fill="currentColor">${legA}</text><text x="90" y="130" text-anchor="middle" font-size="16" font-weight="700" fill="currentColor">${legB}</text><text x="103" y="62" text-anchor="middle" font-size="17" font-weight="700" fill="currentColor">${hypotenuse}</text></svg>`;
}

function buildUniquePlaceValueDigits(length, targetIndex, targetDigit) {
  const digits = new Array(length);
  digits[targetIndex] = targetDigit;

  for (let i = 0; i < length; i++) {
    if (i === targetIndex) {
      continue;
    }

    let nextDigit = String(randomInt(0, 9));
    while (nextDigit === targetDigit || (i === 0 && nextDigit === '0')) {
      nextDigit = String(randomInt(0, 9));
    }
    digits[i] = nextDigit;
  }

  return digits;
}

function getPlaceName(power) {
  switch (power) {
    case 0:
      return 'ones';
    case 1:
      return 'tens';
    case 2:
      return 'hundreds';
    case 3:
      return 'thousands';
    case 4:
      return 'ten-thousands';
    case 5:
      return 'hundred-thousands';
    case 6:
      return 'millions';
    default:
      return `10^${power}`;
  }
}

function pickNonPrimeNumber() {
  const candidates = [1].concat(COMPOSITE_NUMBERS);
  return pickRandomFromList(candidates);
}

function pickNonCompositeNumber() {
  const candidates = [1].concat(PRIME_NUMBERS);
  return pickRandomFromList(candidates);
}

function isPrime(value) {
  if (value < 2) return false;
  for (let i = 2; i * i <= value; i++) {
    if (value % i === 0) return false;
  }
  return true;
}

function pickNonSquareRadicand() {
  const options = [2, 3, 5, 6, 7, 10, 11, 13];
  return options[randomInt(0, options.length - 1)];
}

function toScientificNotation(value) {
  const exponent = String(value).length - 1;
  const mantissa = (value / Math.pow(10, exponent)).toFixed(2).replace(/\.00$/, '').replace(/0$/, '');
  return `${mantissa} × 10^${exponent}`;
}

function numberToWords(value) {
  const ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  if (value < 10) return ones[value];
  if (value < 20) return teens[value - 10];
  if (value < 100) {
    const tensPart = tens[Math.floor(value / 10)];
    const onesPart = value % 10;
    return onesPart === 0 ? tensPart : `${tensPart}-${ones[onesPart]}`;
  }

  if (value < 1000) {
    const hundredsPart = Math.floor(value / 100);
    const remainder = value % 100;
    return remainder === 0 ? `${ones[hundredsPart]} hundred` : `${ones[hundredsPart]} hundred and ${numberToWords(remainder)}`;
  }

  if (value < 10000) {
    const thousandsPart = Math.floor(value / 1000);
    const remainder = value % 1000;
    if (remainder === 0) {
      return `${numberToWords(thousandsPart)} thousand`;
    }
    const remainderWords = remainder < 100 ? numberToWords(remainder) : numberToWords(remainder);
    return `${numberToWords(thousandsPart)} thousand ${remainderWords}`;
  }

  return String(value);
}

function renderPrimaryVisualHTML(visual) {
  if (!visual) return '';

  if (visual.type === 'clock') {
    const minuteAngle = visual.minute * 6;
    const hourAngle = (visual.hour % 12) * 30 + visual.minute * 0.5;
    const hand = (angle, length, width) => {
      const radians = (angle - 90) * Math.PI / 180;
      return `<line x1="50" y1="50" x2="${50 + Math.cos(radians) * length}" y2="${50 + Math.sin(radians) * length}" stroke="currentColor" stroke-width="${width}" stroke-linecap="round"/>`;
    };
    return `<svg class="primary-visual primary-clock" viewBox="0 0 100 100" role="img" aria-label="Analogue clock"><circle cx="50" cy="50" r="42" fill="white" stroke="currentColor" stroke-width="2"/><text x="50" y="17" text-anchor="middle">12</text><text x="84" y="54" text-anchor="middle">3</text><text x="50" y="91" text-anchor="middle">6</text><text x="16" y="54" text-anchor="middle">9</text>${hand(hourAngle, 23, 3)}${hand(minuteAngle, 32, 2)}<circle cx="50" cy="50" r="3" fill="currentColor"/></svg>`;
  }

  if (visual.type === 'currency') {
    const isCoin = visual.value <= 2;
    return isCoin
      ? `<svg class="primary-visual primary-currency" viewBox="0 0 120 70" role="img" aria-label="Australian coin"><circle cx="60" cy="35" r="28" fill="#d7a743" stroke="currentColor" stroke-width="2"/><text x="60" y="42" text-anchor="middle">$${visual.value}</text></svg>`
      : `<svg class="primary-visual primary-currency" viewBox="0 0 120 70" role="img" aria-label="Australian banknote"><rect x="10" y="12" width="100" height="46" rx="3" fill="#d9eef2" stroke="currentColor" stroke-width="2"/><text x="60" y="42" text-anchor="middle">$${visual.value}</text></svg>`;
  }

  if (visual.type === 'ruler') {
    const ticks = Array.from({ length: 11 }, (_, index) => `<line x1="${10 + index * 10}" y1="35" x2="${10 + index * 10}" y2="${index % 5 === 0 ? 12 : 22}" stroke="currentColor" stroke-width="1"/><text x="${10 + index * 10}" y="49" text-anchor="middle">${index}</text>`).join('');
    return `<svg class="primary-visual primary-ruler" viewBox="0 0 120 55" role="img" aria-label="Ruler showing a measurement"><rect x="5" y="10" width="110" height="28" fill="#fff5c7" stroke="currentColor" stroke-width="1.5"/>${ticks}<text x="60" y="54" text-anchor="middle">${visual.length} ${escapeHtml(visual.unit)}</text></svg>`;
  }

  if (visual.type === 'counters') {
    const counters = [...Array(visual.red).fill('red'), ...Array(visual.blue).fill('blue')];
    return `<svg class="primary-visual primary-counters" viewBox="0 0 180 55" role="img" aria-label="Counters in a bag"><rect x="4" y="4" width="172" height="47" rx="20" fill="#f7fafc" stroke="currentColor" stroke-width="1.5"/>${counters.map((colour, index) => `<circle cx="${18 + (index % 8) * 21}" cy="${18 + Math.floor(index / 8) * 20}" r="7" fill="${colour}" stroke="currentColor" stroke-width="0.8"/>`).join('')}</svg>`;
  }

  if (visual.type === 'fraction-quantity') {
    const groups = visual.quantity / visual.denominator;
    const cells = Array.from({ length: visual.quantity }, (_, index) => `<rect x="${8 + (index % 10) * 16}" y="${8 + Math.floor(index / 10) * 18}" width="12" height="12" rx="2" fill="${index < visual.numerator * groups ? '#2b6cb0' : '#edf2f7'}" stroke="currentColor" stroke-width="0.7"/>`).join('');
    return `<svg class="primary-visual primary-fraction-model" viewBox="0 0 170 52" role="img" aria-label="Fraction of a quantity model">${cells}</svg>`;
  }

  if (visual.type === 'line-graph') {
    const y = visual.gradient * visual.x + visual.intercept;
    return `<svg class="primary-visual secondary-graph" viewBox="0 0 180 100" role="img" aria-label="Linear graph"><line x1="20" y1="82" x2="165" y2="82" stroke="currentColor"/><line x1="20" y1="15" x2="20" y2="82" stroke="currentColor"/><line x1="25" y1="76" x2="150" y2="20" stroke="#c62828" stroke-width="2"/><circle cx="${25 + visual.x * 12}" cy="${82 - y * 5}" r="3" fill="#c62828"/><text x="91" y="96" text-anchor="middle">x = ${visual.x}, y = ${y}</text></svg>`;
  }

  if (visual.type === 'gradient') {
    return `<svg class="primary-visual secondary-graph" viewBox="0 0 180 100" role="img" aria-label="Gradient rise and run diagram"><line x1="25" y1="78" x2="155" y2="22" stroke="currentColor" stroke-width="2"/><path d="M70 58 L105 58 L105 43" fill="none" stroke="#c62828" stroke-width="2"/><text x="87" y="70" text-anchor="middle">run</text><text x="113" y="51">rise</text></svg>`;
  }

  if (visual.type === 'inequality') {
    const x = 30 + visual.solution * 12;
    const open = visual.comparison === '<' || visual.comparison === '>';
    const leftArrow = visual.comparison === '<' ? `${x - 48},50 ${x - 58},44 ${x - 48},38` : `${x + 48},50 ${x + 58},44 ${x + 48},38`;
    return `<svg class="primary-visual secondary-number-line" viewBox="0 0 180 75" role="img" aria-label="Inequality number line"><line x1="15" y1="44" x2="165" y2="44" stroke="currentColor" stroke-width="1.5"/><path d="M${leftArrow}" fill="none" stroke="#c62828" stroke-width="2"/><circle cx="${x}" cy="44" r="6" fill="white" stroke="#c62828" stroke-width="2"${open ? '' : ' fill="#c62828"'}/><text x="${x}" y="68" text-anchor="middle">${visual.solution}</text></svg>`;
  }

  if (visual.type === 'box-plot') {
    const [minimum, lowerQuartile, median, upperQuartile, maximum] = visual.values;
    const scale = value => 15 + value * 4;
    return `<svg class="primary-visual secondary-box-plot" viewBox="0 0 160 70" role="img" aria-label="Box plot"><line x1="10" y1="42" x2="150" y2="42" stroke="currentColor"/><line x1="${scale(minimum)}" y1="42" x2="${scale(maximum)}" y2="42" stroke="currentColor" stroke-width="2"/><line x1="${scale(minimum)}" y1="34" x2="${scale(minimum)}" y2="50" stroke="currentColor"/><line x1="${scale(maximum)}" y1="34" x2="${scale(maximum)}" y2="50" stroke="currentColor"/><rect x="${scale(lowerQuartile)}" y="28" width="${scale(upperQuartile) - scale(lowerQuartile)}" height="28" fill="#d9eaf7" stroke="currentColor"/><line x1="${scale(median)}" y1="28" x2="${scale(median)}" y2="56" stroke="#c62828" stroke-width="2"/></svg>`;
  }

  if (visual.type === 'cumulative-frequency') {
    let total = 0;
    const points = visual.frequencies.map((frequency, index) => { total += frequency; return `${25 + index * 38},${78 - total * 3}`; }).join(' ');
    return `<svg class="primary-visual secondary-graph" viewBox="0 0 180 100" role="img" aria-label="Cumulative frequency graph"><line x1="20" y1="82" x2="165" y2="82" stroke="currentColor"/><line x1="20" y1="15" x2="20" y2="82" stroke="currentColor"/><polyline points="${points}" fill="none" stroke="#c62828" stroke-width="2"/><text x="92" y="96" text-anchor="middle">Groups</text><text x="7" y="20" text-anchor="middle" transform="rotate(-90 7 20)">Frequency</text></svg>`;
  }

  return '';
}

function renderNumberPromptHTML(question) {
  const visualHTML = renderPrimaryVisualHTML(question.visual);
  if (visualHTML) {
    return `<span class="primary-visual-question">${visualHTML}<span>${escapeHtml(question.prompt)}</span></span>`;
  }

  switch (question.topic) {
    case 'indices': {
      const match = question.prompt.match(/^Evaluate (\d+)\^(\d+)\.$/);
      if (match) {
        const base = escapeHtml(match[1]);
        const exponent = escapeHtml(match[2]);
        return `Evaluate ${base}<sup>${exponent}</sup>.`;
      }
      return escapeHtml(question.prompt);
    }
    case 'scientific-notation': {
      const match = question.prompt.match(/^Write (\d+) in scientific notation\.$/);
      if (match) {
        return `Write ${escapeHtml(match[1])} in scientific notation.`;
      }
      return escapeHtml(question.prompt);
    }
    default:
      return escapeHtml(question.prompt);
  }
}

function renderScientificNotationHTML(value) {
  const match = String(value).match(/^(.+?) × 10\^(\d+)$/);
  if (!match) {
    return escapeHtml(String(value));
  }

  return `${escapeHtml(match[1])} × 10<sup>${escapeHtml(match[2])}</sup>`;
}

function isYesNoNumberQuestion(question) {
  return typeof question.prompt === 'string' && question.prompt.startsWith('Is ');
}

const PRIME_NUMBERS = [
  2, 3, 5, 7, 11, 13, 17, 19, 23, 29,
  31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
  73, 79, 83, 89, 97,
];

const COMPOSITE_NUMBERS = [
  4, 6, 8, 9, 10, 12, 14, 15, 16, 18,
  20, 21, 22, 24, 25, 26, 27, 28, 30, 32,
  33, 34, 35, 36, 38, 39, 40, 42, 44, 45,
  46, 48, 49, 50, 51, 52, 54, 55, 56, 57,
  58, 60, 62, 63, 64, 65, 66, 68, 69, 70,
  72, 74, 75, 76, 77, 78, 80, 81, 82, 84,
  85, 86, 87, 88, 90, 91, 92, 93, 94, 95,
  96, 98, 99,
];

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
