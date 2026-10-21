export interface GenerateImageParams {
  prompt: string;
  width: number;
  height: number;
}

export interface GeneratedImage {
  mimeType: string;
  bytes: Buffer;
}

export interface ImageProvider {
  generate(params: GenerateImageParams): Promise<GeneratedImage>;
}
