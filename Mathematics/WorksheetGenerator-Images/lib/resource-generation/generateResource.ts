import { classifyRequest } from "./classifyRequest";
import { generateDiagram } from "./diagramGenerator";
import { enhancePrompt } from "./enhancePrompt";
import { FluxSchnellProvider } from "./fluxProvider";
import { optimizeToWebP } from "./imageOptimizer";
import { saveResourceBuffer, saveResourceText } from "./resourceStore";
import { generateWorksheet } from "./worksheetGenerator";
import type { GenerateResourceInput, GeneratedResource, OutputType } from "./types";
import { sanitizeHtml, sanitizeSvg } from "./validation";

function toDataUrl(bytes: Buffer, mimeType: string): string {
  return `data:${mimeType};base64,${bytes.toString("base64")}`;
}

function seedValue(seed: string): number {
  let hash = 2166136261;
  for (let i = 0; i < seed.length; i += 1) {
    hash ^= seed.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return Math.abs(hash >>> 0);
}

function fallbackIllustration(prompt: string, width: number, height: number, variationSeed = ""): string {
  const seeded = seedValue(`${prompt}:${variationSeed || "default"}`);
  const cx = Math.round(width / 2);
  const cy = Math.round(height / 2 + 36);
  const sceneWidth = width - 96;
  const sceneHeight = height - 180;
  const left = 48;
  const top = 116;
  const promptLabel = prompt.slice(0, 120).replace(/[<>&]/g, "");
  const shiftA = (seeded % 19) - 9;
  const shiftB = (Math.floor(seeded / 7) % 15) - 7;
  const shiftC = (Math.floor(seeded / 17) % 17) - 8;
  const cardTone = ["#4c86b7", "#5f7cc0", "#3a8fb0", "#577c9f"][seeded % 4];
  const shirtTone = ["#0f6b5f", "#0f5e6b", "#0c6f77", "#156b4f"][Math.floor(seeded / 5) % 4];
  const jacketTone = ["#de8b2a", "#c87a1d", "#d9963c", "#b97f2a"][Math.floor(seeded / 9) % 4];
  const deskY = cy + 22;
  const noteLine1 = `${left + 20},${top + sceneHeight - 128} ${left + sceneWidth - 20},${top + sceneHeight - 128}`;
  const noteLine2 = `${left + 20},${top + sceneHeight - 104} ${left + sceneWidth - 20},${top + sceneHeight - 104}`;
  const noteLine3 = `${left + 20},${top + sceneHeight - 80} ${left + sceneWidth - 20},${top + sceneHeight - 80}`;
  return sanitizeSvg(`<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f1f8fc"/><stop offset="1" stop-color="#dbeaf4"/></linearGradient>
      <linearGradient id="card" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#eff6fa"/></linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#bg)"/>
    <rect x="24" y="24" width="${width - 48}" height="66" rx="12" fill="#0f6b5f"/>
    <text x="40" y="62" font-size="28" fill="#ffffff" font-family="Public Sans,Segoe UI,sans-serif" font-weight="700">Worksheet Illustration</text>
    <text x="40" y="84" font-size="12" fill="#d6f2ea" font-family="Public Sans,Segoe UI,sans-serif">AI key not configured, showing local fallback visual</text>

    <rect x="${left}" y="${top}" width="${sceneWidth}" height="${sceneHeight}" rx="14" fill="url(#card)" stroke="#9ab7ca" stroke-width="2"/>
    <text x="${left + 18}" y="${top + 30}" font-size="14" fill="#345267" font-family="Public Sans,Segoe UI,sans-serif">${promptLabel}</text>

    <rect x="${left + 36}" y="${deskY}" width="${sceneWidth - 72}" height="300" rx="12" fill="#ffffff" stroke="#9db9cc" stroke-width="2"/>
    <line x1="${left + 36}" y1="${deskY + 44}" x2="${left + sceneWidth - 36}" y2="${deskY + 44}" stroke="#d7e5ee" stroke-width="2"/>
    <line x1="${left + 24}" y1="${top + sceneHeight - 42}" x2="${left + sceneWidth - 24}" y2="${top + sceneHeight - 42}" stroke="#6f96b1" stroke-width="3"/>

    <circle cx="${cx - 120 + shiftA}" cy="${cy - 112}" r="22" fill="#f2b782"/>
    <rect x="${cx - 142 + shiftA}" y="${cy - 90}" width="44" height="66" rx="10" fill="${cardTone}" stroke="#2c5c86"/>
    <rect x="${cx - 139}" y="${cy - 36}" width="14" height="34" rx="6" fill="#2b5f88" stroke="#1f4362"/>
    <rect x="${cx - 115}" y="${cy - 36}" width="14" height="34" rx="6" fill="#2b5f88" stroke="#1f4362"/>

    <circle cx="${cx + shiftB}" cy="${cy - 118}" r="22" fill="#f2b782"/>
    <rect x="${cx - 22 + shiftB}" y="${cy - 96}" width="44" height="72" rx="10" fill="${shirtTone}" stroke="#0b4f47"/>
    <rect x="${cx - 19}" y="${cy - 36}" width="14" height="34" rx="6" fill="#0b4f47" stroke="#083b35"/>
    <rect x="${cx + 5}" y="${cy - 36}" width="14" height="34" rx="6" fill="#0b4f47" stroke="#083b35"/>

    <circle cx="${cx + 120 + shiftC}" cy="${cy - 112}" r="22" fill="#f2b782"/>
    <rect x="${cx + 98 + shiftC}" y="${cy - 90}" width="44" height="66" rx="10" fill="${jacketTone}" stroke="#9e6118"/>
    <rect x="${cx + 101}" y="${cy - 36}" width="14" height="34" rx="6" fill="#b66f1e" stroke="#864f14"/>
    <rect x="${cx + 125}" y="${cy - 36}" width="14" height="34" rx="6" fill="#b66f1e" stroke="#864f14"/>

    <rect x="${cx - 86}" y="${cy - 18}" width="172" height="52" rx="9" fill="#ffffff" stroke="#7ea0b6" stroke-width="2"/>
    <circle cx="${cx - 44}" cy="${cy + 8}" r="10" fill="#f7c948"/>
    <circle cx="${cx}" cy="${cy + 8}" r="10" fill="#63a1d1"/>
    <circle cx="${cx + 44}" cy="${cy + 8}" r="10" fill="#f08a5d"/>

    <polyline points="${noteLine1}" fill="none" stroke="#d2e1ea" stroke-width="2"/>
    <polyline points="${noteLine2}" fill="none" stroke="#d2e1ea" stroke-width="2"/>
    <polyline points="${noteLine3}" fill="none" stroke="#d2e1ea" stroke-width="2"/>
    <text x="${left + 20}" y="${top + sceneHeight - 138}" font-size="12" fill="#567183" font-family="Public Sans,Segoe UI,sans-serif">Teacher notes / student observations</text>
  </svg>`);
}

export async function generateResource(input: GenerateResourceInput): Promise<GeneratedResource> {
  const outputType: OutputType = classifyRequest(input.prompt, input.outputType);
  const enhancedPrompt = enhancePrompt(input, outputType);
  const width = input.width ?? 512;
  const height = input.height ?? 512;
  const quality = input.quality ?? 88;
  const saveOutput = Boolean(input.saveOutput);
  const freeMode = input.freeMode !== false;
  const variationSeed = input.variationSeed ?? "";

  if (outputType === "precise_diagram") {
    const svg = generateDiagram(input.prompt, width, height);
    const saved = saveOutput ? saveResourceText("diagram", "svg", svg) : null;
    return {
      outputType,
      kind: "svg",
      title: "Precision Diagram",
      subtitle: enhancedPrompt,
      filename: saved?.filename,
      resourceUrl: saved?.resourceUrl,
      mimeType: "image/svg+xml",
      svg,
      meta: { dimensions: { width, height }, quality }
    };
  }

  if (outputType === "worksheet_content") {
    const worksheet = generateWorksheet(input.prompt, input.yearLevel ?? "General", Boolean(input.includeAnswers));
    return {
      outputType,
      kind: "html",
      title: worksheet.title,
      subtitle: enhancedPrompt,
      html: sanitizeHtml(worksheet.html),
      text: worksheet.text
    };
  }

  if (outputType === "mixed_resource") {
    const worksheet = generateWorksheet(input.prompt, input.yearLevel ?? "General", Boolean(input.includeAnswers));
    const visualSvg = generateDiagram(input.prompt, width, height);
    const saved = saveOutput ? saveResourceText("mixed-visual", "svg", visualSvg) : null;
    return {
      outputType,
      kind: "mixed",
      title: "Mixed Worksheet Resource",
      subtitle: enhancedPrompt,
      html: sanitizeHtml(worksheet.html),
      text: worksheet.text,
      filename: saved?.filename,
      resourceUrl: saved?.resourceUrl,
      mimeType: "image/svg+xml",
      visualSvg,
      meta: { dimensions: { width, height }, quality }
    };
  }

  const provider = new FluxSchnellProvider();
  if (freeMode) {
    const svg = fallbackIllustration(input.prompt, width, height, variationSeed);
    const saved = saveOutput ? saveResourceText("illustration-fallback", "svg", svg) : null;
    return {
      outputType,
      kind: "svg",
      title: "AI Illustration Fallback",
      subtitle: enhancedPrompt,
      filename: saved?.filename,
      resourceUrl: saved?.resourceUrl,
      mimeType: "image/svg+xml",
      svg,
      warnings: ["Free mode is enabled. Using local illustration renderer."],
      meta: { dimensions: { width, height }, quality }
    };
  }

  try {
    const image = await provider.generate({ prompt: enhancedPrompt, width, height });
    const webp = await optimizeToWebP(image.bytes, width, height, quality);
    const saved = saveOutput ? saveResourceBuffer("illustration", "webp", webp) : null;
    return {
      outputType,
      kind: "image",
      title: "AI Illustration",
      subtitle: enhancedPrompt,
      filename: saved?.filename,
      resourceUrl: saved?.resourceUrl,
      mimeType: "image/webp",
      imageDataUrl: toDataUrl(webp, "image/webp"),
      meta: {
        dimensions: { width, height },
        fileSizeBytes: webp.byteLength,
        quality
      }
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to generate AI illustration.";
    const svg = fallbackIllustration(input.prompt, width, height, variationSeed);
    const saved = saveOutput ? saveResourceText("illustration-fallback", "svg", svg) : null;
    return {
      outputType,
      kind: "svg",
      title: "AI Illustration Fallback",
      subtitle: enhancedPrompt,
      filename: saved?.filename,
      resourceUrl: saved?.resourceUrl,
      mimeType: "image/svg+xml",
      svg,
      warnings: [message],
      meta: { dimensions: { width, height }, quality }
    };
  }
}
