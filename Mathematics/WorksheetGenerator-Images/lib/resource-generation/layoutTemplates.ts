export interface WorksheetTemplate {
  title: string;
  subtitle: string;
  instructions: string;
  contentHtml: string;
  includeAnswers: boolean;
  answerKeyHtml?: string;
}

export function renderWorksheetTemplate(template: WorksheetTemplate): string {
  return `
  <article style="font-family: 'Public Sans', 'Segoe UI', sans-serif; color: #0f2433; max-width: 900px; margin: 0 auto; padding: 24px; border: 1px solid #d6e1e8; border-radius: 14px; background: #fff;">
    <header style="border-bottom: 2px solid #0f6b5f; padding-bottom: 10px; margin-bottom: 16px;">
      <h1 style="margin: 0; font-size: 28px;">${template.title}</h1>
      <p style="margin: 6px 0 0; color: #4d6778; font-size: 15px;">${template.subtitle}</p>
    </header>
    <section style="background: #eef5f8; border: 1px solid #d6e1e8; border-radius: 10px; padding: 10px 12px; margin-bottom: 16px; font-size: 14px;">
      <strong>Instructions:</strong> ${template.instructions}
    </section>
    <section style="line-height: 1.7; font-size: 15px;">${template.contentHtml}</section>
    ${template.includeAnswers && template.answerKeyHtml ? `<section style="margin-top: 20px; border-top: 1px dashed #b8c8d3; padding-top: 14px;"><h2 style="margin: 0 0 8px; font-size: 20px;">Answer Key</h2>${template.answerKeyHtml}</section>` : ""}
  </article>`;
}
