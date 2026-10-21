import { generateTextWorksheet } from "./textResourceGenerator";

export function generateWorksheet(prompt: string, yearLevel: string, includeAnswers: boolean): { html: string; text: string; title: string } {
  return generateTextWorksheet(prompt, yearLevel, includeAnswers);
}
