const { chromium } = require('playwright');
const path = require('path');

// Usage: node validate-formula-sheet.js [yearLevel] [module] [topic] [outName]
const yearLevel = process.argv[2] || 'primary';
const moduleValue = process.argv[3] || 'fractions';
const topicValue = process.argv[4] || 'add-fractions';
const outName = process.argv[5] || `${moduleValue}-${topicValue}`;

const fileUrl = 'file:///' + path.resolve(__dirname, 'Mathematics', 'WorksheetGenerator-Math', 'index.html').replace(/\\/g, '/');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 900, height: 1400 } });
  const errors = [];
  page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
  page.on('pageerror', (e) => errors.push('PAGEERROR: ' + e.message));

  await page.goto(fileUrl);

  await page.selectOption('#yearLevel', yearLevel);
  await page.waitForTimeout(150);
  await page.selectOption('#module', moduleValue);
  await page.waitForTimeout(150);
  await page.selectOption('#topic', topicValue);
  await page.waitForTimeout(100);

  await page.check('#formulaSheetRequired').catch(async () => {
    await page.evaluate(() => { document.getElementById('formulaSheetRequired').checked = true; });
  });
  await page.click('#generateBtn');
  await page.waitForTimeout(400);

  const report = await page.evaluate(() => {
    const pages = (typeof allPages !== 'undefined') ? allPages : [];
    if (typeof showPage !== 'function' || pages.length === 0) return { found: false };
    const agg = { sections: 0, instructionSteps: 0, formulaGroups: 0, formulaRules: 0, exampleCards: 0, exampleSteps: 0, problems: 0, answers: 0, formulaPages: 0 };
    let title = '';
    const groupHeadings = [];
    let firstFormula = -1;
    for (let i = 0; i < pages.length; i++) {
      showPage(i);
      const sheet = document.querySelector('.conversion-formula-page');
      if (!sheet) continue;
      if (firstFormula < 0) firstFormula = i;
      agg.formulaPages++;
      const count = (sel) => sheet.querySelectorAll(sel).length;
      agg.sections += count('.fs-section-head');
      agg.instructionSteps += count('.fs-step-list li');
      agg.formulaGroups += count('.conversion-formula-group');
      agg.formulaRules += count('.conversion-formula-group li');
      agg.exampleCards += count('.formula-sheet-example');
      agg.exampleSteps += count('.formula-sheet-example-step');
      agg.problems += count('.fs-example-problem');
      agg.answers += count('.formula-sheet-example-answer');
      if (!title) title = (sheet.querySelector('h2')?.textContent || '').trim();
      sheet.querySelectorAll('.conversion-formula-group h3').forEach((h) => groupHeadings.push(h.textContent.trim()));
    }
    // Return to first formula page for the screenshot
    if (firstFormula >= 0) showPage(firstFormula);
    return { found: agg.formulaPages > 0, title, groupHeadings, totalPages: pages.length, ...agg };
  });

  // Screenshot just the formula sheet page element
  const el = await page.$('.conversion-formula-page');
  if (el) {
    await el.screenshot({ path: path.resolve(__dirname, `sheet-${outName}.png`) });
  }

  console.log(JSON.stringify({ outName, report, consoleErrors: errors }, null, 2));
  await browser.close();
})();
