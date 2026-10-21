import { renderWorksheetTemplate } from "./layoutTemplates";

function numberedQuestions(items: string[]): string {
  return `<ol style="padding-left: 22px;">${items.map((item) => `<li style="margin-bottom: 12px;">${item}<div style="height: 22px; border-bottom: 1px dotted #8ca5b4;"></div></li>`).join("")}</ol>`;
}

export function generateTextWorksheet(prompt: string, yearLevel: string, includeAnswers: boolean): { html: string; text: string; title: string } {
  const lower = prompt.toLowerCase();

  if (lower.includes("reading") || lower.includes("comprehension") || lower.includes("passage")) {
    const passage = "Volcanoes are openings in the Earth where melted rock, gas, and ash can escape. Some eruptions are gentle, while others are explosive. Scientists study volcanoes to predict eruptions and keep communities safe.";
    const questions = [
      "What is a volcano?",
      "Name two materials that can escape during an eruption.",
      "Why do scientists study volcanoes?"
    ];
    const html = renderWorksheetTemplate({
      title: "Reading Comprehension Worksheet",
      subtitle: `${yearLevel} · Volcanoes`,
      instructions: "Read the passage and answer the questions in full sentences.",
      contentHtml: `<p style=\"line-height:1.8;\">${passage}</p><h3>Questions</h3>${numberedQuestions(questions)}`,
      includeAnswers,
      answerKeyHtml: includeAnswers ? `<ol><li>An opening in Earth where magma, gas, and ash escape.</li><li>Any two: melted rock, gas, ash.</li><li>To predict eruptions and keep people safe.</li></ol>` : undefined
    });
    return { html, text: `${passage}\n\n${questions.join("\n")}`, title: "Reading Comprehension Worksheet" };
  }

  if (lower.includes("vocabulary") || lower.includes("match")) {
    const terms = ["Evaporation", "Condensation", "Precipitation", "Collection"];
    const meanings = [
      "Water vapor cools and turns back into liquid.",
      "Water gathers in rivers, lakes, and oceans.",
      "Liquid water changes into water vapor.",
      "Rain, hail, sleet, or snow falls from clouds."
    ];
    const rows = terms.map((term, i) => `<tr><td style=\"padding:8px;border:1px solid #c9d8e2;\">${term}</td><td style=\"padding:8px;border:1px solid #c9d8e2;\">${String.fromCharCode(65 + i)}</td><td style=\"padding:8px;border:1px solid #c9d8e2;\">${meanings[i]}</td></tr>`).join("");
    const html = renderWorksheetTemplate({
      title: "Vocabulary Matching Sheet",
      subtitle: `${yearLevel} · Water Cycle Terms`,
      instructions: "Match each term to the correct meaning.",
      contentHtml: `<table style=\"width:100%;border-collapse:collapse;\"><thead><tr><th style=\"text-align:left;padding:8px;border:1px solid #c9d8e2;\">Term</th><th style=\"padding:8px;border:1px solid #c9d8e2;\">Match</th><th style=\"text-align:left;padding:8px;border:1px solid #c9d8e2;\">Meaning</th></tr></thead><tbody>${rows}</tbody></table>`,
      includeAnswers,
      answerKeyHtml: includeAnswers ? "<p>Answer key: Evaporation = C, Condensation = A, Precipitation = D, Collection = B.</p>" : undefined
    });
    return { html, text: "Vocabulary matching activity", title: "Vocabulary Matching Sheet" };
  }

  if (lower.includes("formula")) {
    const html = renderWorksheetTemplate({
      title: "Formula Reference Sheet",
      subtitle: `${yearLevel} · Area and Perimeter`,
      instructions: "Use the formulas to solve related practice questions.",
      contentHtml: "<h3>Perimeter</h3><ul><li>Rectangle: P = 2(l + w)</li><li>Triangle: P = a + b + c</li></ul><h3>Area</h3><ul><li>Rectangle: A = l × w</li><li>Triangle: A = 1/2 × b × h</li><li>Circle: A = πr²</li></ul><h3>Example</h3><p>Rectangle with length 8 cm and width 3 cm: Area = 24 cm², Perimeter = 22 cm.</p>",
      includeAnswers,
      answerKeyHtml: includeAnswers ? "<p>Example answers are shown in the worked example section.</p>" : undefined
    });
    return { html, text: "Formula reference sheet", title: "Formula Reference Sheet" };
  }

  const questions = [
    "Solve: 3/4 + 1/8",
    "Write 0.625 as a fraction in simplest form.",
    "Find the area of a rectangle with length 9 cm and width 4 cm.",
    "Convert 2.5 kg to grams."
  ];

  const html = renderWorksheetTemplate({
    title: "Worksheet Question Sheet",
    subtitle: `${yearLevel} · Practice`,
    instructions: "Show all working and write final answers clearly.",
    contentHtml: `<h3>Questions</h3>${numberedQuestions(questions)}`,
    includeAnswers,
    answerKeyHtml: includeAnswers ? "<ol><li>7/8</li><li>5/8</li><li>36 cm²</li><li>2500 g</li></ol>" : undefined
  });

  return { html, text: questions.join("\n"), title: "Worksheet Question Sheet" };
}
