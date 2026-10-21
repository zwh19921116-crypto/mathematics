import { NextResponse } from "next/server";
import { needsPrecision } from "@/lib/resource-generation/classifyRequest";
import { generateResource } from "@/lib/resource-generation/generateResource";
import type { OutputType, ResourceStyle } from "@/lib/resource-generation/types";
import { validateAndNormalizeInput } from "@/lib/resource-generation/validation";

export const runtime = "nodejs";

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type"
};

interface CreateImageRequest {
  prompt?: string;
  style?: ResourceStyle;
  yearLevel?: string;
  width?: number;
  height?: number;
  quality?: number;
  freeMode?: boolean;
  variationSeed?: string;
}

function visualTypeFromPrompt(prompt: string): OutputType {
  return needsPrecision(prompt) ? "precise_diagram" : "ai_illustration";
}

export async function POST(request: Request): Promise<Response> {
  try {
    const payload = (await request.json()) as CreateImageRequest;
    const normalized = validateAndNormalizeInput({
      prompt: payload.prompt,
      outputType: "auto",
      style: payload.style,
      yearLevel: payload.yearLevel,
      width: payload.width ?? 1024,
      height: payload.height ?? 1024,
      quality: payload.quality ?? 95,
      freeMode: payload.freeMode !== false,
      variationSeed: payload.variationSeed,
      saveOutput: true,
      includeAnswers: false
    });

    const forcedType = visualTypeFromPrompt(normalized.prompt);
    const result = await generateResource({ ...normalized, outputType: forcedType });

    if (!result.resourceUrl) {
      return NextResponse.json({ error: "Image generation completed but no resource URL was produced." }, { status: 500 });
    }

    return NextResponse.json(
      {
        ok: true,
        outputType: result.outputType,
        title: result.title,
        imageUrl: result.resourceUrl,
        filename: result.filename,
        mimeType: result.mimeType,
        width: result.meta?.dimensions?.width,
        height: result.meta?.dimensions?.height,
        fileSizeBytes: result.meta?.fileSizeBytes,
        quality: result.meta?.quality,
        alt: result.title,
        warnings: result.warnings ?? []
      },
      { status: 200, headers: CORS_HEADERS }
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to create image.";
    return NextResponse.json({ error: message }, { status: 400, headers: CORS_HEADERS });
  }
}

export async function OPTIONS(): Promise<Response> {
  return new Response(null, { status: 204, headers: CORS_HEADERS });
}
