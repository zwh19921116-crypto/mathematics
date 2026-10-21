import type { GenerateResourceInput, OutputType } from "./types";

function styleHint(style: string): string {
  if (style === "Colour Cartoon") return "bright educational colours, clean cartoon style";
  if (style === "Black and White Worksheet") return "black and white printable worksheet style";
  if (style === "Science Illustration") return "clean scientific visual style";
  if (style === "Maths Diagram") return "clear mathematical diagram style";
  if (style === "Reading Worksheet") return "reading worksheet formatting and spacing";
  if (style === "Revision Sheet") return "exam revision layout";
  if (style === "Formula Sheet") return "formula sheet layout with grouped sections";
  return "clean educational worksheet style";
}

export function enhancePrompt(input: GenerateResourceInput, outputType: OutputType): string {
  const base = input.prompt.trim();
  const style = styleHint(input.style);
  const year = input.yearLevel || "General";

  if (outputType === "ai_illustration") {
    return `Clean educational worksheet illustration: ${base}. Style: ${style}. Age group: ${year}. High contrast, simple composition, no random text, no watermark.`;
  }

  if (outputType === "precise_diagram") {
    return `Generate a precise labelled educational diagram for: ${base}. Use exact labels, accurate values, and printable clarity. Age group: ${year}.`;
  }

  if (outputType === "mixed_resource") {
    return `Create a worksheet resource with both visual and questions for: ${base}. Style: ${style}. Include clear headings, spaced answer areas, and student-friendly instructions.`;
  }

  return `Create a printable worksheet for: ${base}. Style: ${style}. Age group: ${year}. Include title, instructions, question section, and answer space${input.includeAnswers ? ", plus answer key" : ""}.`;
}
