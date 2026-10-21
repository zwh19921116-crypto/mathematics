const { chromium } = require('playwright');
const path = require('path');

const fileUrl = 'file:///' + path.resolve(__dirname, 'Mathematics', 'WorksheetGenerator-Math', 'index.html').replace(/\\/g, '/');

// One representative topic per module across primary & secondary
const CASES = [
  ['primary', 'arithmetic', 'bodmas'],
  ['primary', 'fractions', 'divide-fractions'],
  ['primary', 'decimals', 'decimal-operations'],
  ['primary', 'percentages', 'percentage-of-amount'],
  ['primary', 'geometry', 'angles'],
  ['primary', 'measurement', 'area'],
  ['primary', 'money', 'making-change'],
  ['primary', 'number', 'factors'],
  ['primary', 'ratio', 'writing-ratios'],
  ['primary', 'statistics', 'mean'],
  ['primary', 'probability', 'chance-experiments'],
  ['primary', 'algebra', 'patterns'],
  ['secondary', 'algebra', 'quadratics'],
  ['secondary', 'number', 'indices'],
  ['secondary', 'trigonometry', 'sine-rule'],
  ['secondary', 'matrices', 'matrix-inverse'],
  ['secondary', 'networks', 'shortest-paths'],
  ['secondary', 'geometry', 'pythagoras'],
];

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const errors = [];
  page.on('pageerror', (e) => errors.push('PAGEERROR: ' + e.message));

  const failures = [];
  for (const [yearLevel, moduleValue, topicValue] of CASES) {
    await page.goto(fileUrl);
    await page.selectOption('#yearLevel', yearLevel);
    await page.waitForTimeout(120);
    await page.selectOption('#module', moduleValue);
    await page.waitForTimeout(120);
    await page.selectOption('#topic', topicValue);
    await page.evaluate(() => { document.getElementById('formulaSheetRequired').checked = true; });
    await page.click('#generateBtn');
    await page.waitForTimeout(250);

    const r = await page.evaluate(() => {
      const pages = (typeof allPages !== 'undefined') ? allPages : [];
      const agg = { groups: 0, rules: 0, instructions: 0, examples: 0, steps: 0, answers: 0, sheets: 0 };
      for (let i = 0; i < pages.length; i++) {
        showPage(i);
        const sheet = document.querySelector('.conversion-formula-page');
        if (!sheet) continue;
        agg.sheets++;
        agg.groups += sheet.querySelectorAll('.conversion-formula-group').length;
        agg.rules += sheet.querySelectorAll('.conversion-formula-group li').length;
        agg.instructions += sheet.querySelectorAll('.fs-step-list li').length;
        agg.examples += sheet.querySelectorAll('.formula-sheet-example').length;
        agg.steps += sheet.querySelectorAll('.formula-sheet-example-step').length;
        agg.answers += sheet.querySelectorAll('.formula-sheet-example-answer').length;
      }
      return agg;
    });

    const problems = [];
    if (r.sheets < 1) problems.push('no formula sheet');
    if (r.groups < 1) problems.push('no formula groups');
    if (r.instructions < 3) problems.push('too few instructions');
    if (r.examples < 1) problems.push('no examples');
    if (r.examples > 0 && r.steps < r.examples) problems.push('examples missing steps');
    if (problems.length) failures.push({ case: `${yearLevel}/${moduleValue}/${topicValue}`, problems, r });
    else console.log(`OK  ${yearLevel}/${moduleValue}/${topicValue}  groups=${r.groups} rules=${r.rules} instr=${r.instructions} examples=${r.examples} steps=${r.steps} answers=${r.answers}`);
  }

  console.log('\nFailures:', failures.length ? JSON.stringify(failures, null, 2) : 'none');
  console.log('Page errors:', errors.length ? errors : 'none');
  await browser.close();
})();
