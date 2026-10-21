import { NextResponse } from "next/server";
import { generateResource } from "@/lib/resource-generation/generateResource";
import { validateAndNormalizeInput } from "@/lib/resource-generation/validation";

export const runtime = "nodejs";

export async function GET(): Promise<Response> {
  return NextResponse.json({
    ok: true,
    service: "worksheet-resource-generator",
    endpoint: "/api/generate-resource"
  });
}

export async function POST(request: Request): Promise<Response> {
  try {
    const payload = await request.json();
    const input = validateAndNormalizeInput(payload);
    const result = await generateResource(input);
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to generate resource.";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
