import type { OutputType } from "./types";

const DIAGRAM_KEYWORDS = [
  "diagram", "label", "labelled", "labels", "atom", "geometry", "triangle", "bar chart", "line graph",
  "number line", "coordinate", "fraction", "array", "water cycle", "cycle", "flow", "graph", "equation"
];

const WORKSHEET_KEYWORDS = [
  "worksheet", "comprehension", "questions", "question sheet", "multiple choice", "fill in", "fill-in",
  "vocabulary", "formula", "answer key", "revision", "handout", "passage", "short answer", "match"
];

const ILLUSTRATION_KEYWORDS = [
  "children", "kids", "classroom", "food", "animals", "objects", "cartoon", "scene", "apples"
];

const MIXED_KEYWORDS = ["with questions", "plus", "and questions", "worksheet with", "include a diagram", "with a visual"];

export function needsPrecision(prompt: string): boolean {
  const lower = prompt.toLowerCase();
  if (/\b\d+\b/.test(lower) && /atom|triangle|bar chart|graph|fraction|coordinate|equation|electrons|protons|labels?/.test(lower)) {
    return true;
  }
  return /exact|equation|table|formula|geometry|graph/.test(lower);
}

export function classifyRequest(prompt: string, selected: OutputType | "auto"): OutputType {
  if (selected !== "auto") return selected;
  const lower = prompt.toLowerCase();

  if (MIXED_KEYWORDS.some((keyword) => lower.includes(keyword))) return "mixed_resource";
  if (needsPrecision(lower) || DIAGRAM_KEYWORDS.some((keyword) => lower.includes(keyword))) return "precise_diagram";
  if (WORKSHEET_KEYWORDS.some((keyword) => lower.includes(keyword))) return "worksheet_content";
  if (ILLUSTRATION_KEYWORDS.some((keyword) => lower.includes(keyword))) return "ai_illustration";

  return "worksheet_content";
}
