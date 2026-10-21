export type OutputType = "ai_illustration" | "precise_diagram" | "worksheet_content" | "mixed_resource";

export type ResourceKind = "image" | "svg" | "html" | "text" | "mixed";

export type ResourceStyle =
  | "Clean Educational"
  | "Colour Cartoon"
  | "Black and White Worksheet"
  | "Science Illustration"
  | "Maths Diagram"
  | "Reading Worksheet"
  | "Revision Sheet"
  | "Formula Sheet";

export interface GenerateResourceInput {
  prompt: string;
  outputType: OutputType | "auto";
  style: ResourceStyle;
  width?: number;
  height?: number;
  quality?: number;
  saveOutput?: boolean;
  freeMode?: boolean;
  variationSeed?: string;
  yearLevel?: string;
  includeAnswers?: boolean;
}

export interface GeneratedResource {
  outputType: OutputType;
  kind: ResourceKind;
  title: string;
  subtitle?: string;
  filename?: string;
  resourceUrl?: string;
  mimeType?: string;
  text?: string;
  html?: string;
  svg?: string;
  imageDataUrl?: string;
  visualSvg?: string;
  visualImageDataUrl?: string;
  warnings?: string[];
  meta?: {
    dimensions?: { width: number; height: number };
    fileSizeBytes?: number;
    quality?: number;
  };
}
