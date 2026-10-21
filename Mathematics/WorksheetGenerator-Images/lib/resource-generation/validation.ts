import type { GenerateResourceInput } from "./types";

const SUPPORTED_SIZES = new Set([512, 768, 1024]);

export function sanitizeSvg(svg: string): string {
  return svg.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, "").replace(/on[a-z]+\s*=\s*"[^"]*"/gi, "");
}

export function sanitizeHtml(html: string): string {
  return html
    .replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, "")
    .replace(/on[a-z]+\s*=\s*"[^"]*"/gi, "")
    .replace(/javascript:/gi, "");
}

export function validateAndNormalizeInput(input: Partial<GenerateResourceInput>): GenerateResourceInput {
  const prompt = (input.prompt ?? "").trim();
  if (!prompt) throw new Error("Please enter a prompt.");
  if (prompt.length > 1500) throw new Error("Prompt is too long. Please keep it under 1500 characters.");

  const width = Number(input.width ?? 512);
  const height = Number(input.height ?? 512);
  const quality = Number(input.quality ?? 88);
  const variationSeed = String(input.variationSeed ?? "").trim().slice(0, 120);

  if (!SUPPORTED_SIZES.has(width) || !SUPPORTED_SIZES.has(height)) {
    throw new Error("Width and height must be one of 512, 768, or 1024.");
  }

  if (!Number.isFinite(quality) || quality < 60 || quality > 100) {
    throw new Error("Quality must be between 60 and 100.");
  }

  return {
    prompt,
    outputType: input.outputType ?? "auto",
    style: input.style ?? "Clean Educational",
    width,
    height,
    quality: Math.round(quality),
    saveOutput: Boolean(input.saveOutput),
    freeMode: input.freeMode !== false,
    variationSeed,
    yearLevel: (input.yearLevel ?? "General").trim() || "General",
    includeAnswers: Boolean(input.includeAnswers)
  };
}
