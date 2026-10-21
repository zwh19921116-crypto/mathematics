import type { GenerateImageParams, GeneratedImage, ImageProvider } from "./imageProvider";

const FLUX_MODEL_ENDPOINT = "https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-schnell";

export class FluxSchnellProvider implements ImageProvider {
  async generate(params: GenerateImageParams): Promise<GeneratedImage> {
    const token = process.env.HUGGINGFACE_API_KEY || process.env.HF_API_KEY;
    if (!token) {
      throw new Error("Missing HUGGINGFACE_API_KEY or HF_API_KEY.");
    }

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 30000);

    try {
      const response = await fetch(FLUX_MODEL_ENDPOINT, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          inputs: params.prompt,
          parameters: {
            width: params.width,
            height: params.height
          }
        }),
        signal: controller.signal
      });

      if (!response.ok) {
        const text = await response.text();
        throw new Error(`FLUX API failed (${response.status}): ${text.slice(0, 220)}`);
      }

      const arrayBuffer = await response.arrayBuffer();
      return {
        mimeType: response.headers.get("content-type") || "image/png",
        bytes: Buffer.from(arrayBuffer)
      };
    } finally {
      clearTimeout(timeout);
    }
  }
}
