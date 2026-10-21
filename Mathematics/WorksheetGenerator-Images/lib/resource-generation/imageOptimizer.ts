import sharp from "sharp";

export async function optimizeToWebP(imageBytes: Buffer, width: number, height: number, quality = 80): Promise<Buffer> {
  return sharp(imageBytes)
    .rotate()
    .normalize()
    .modulate({ brightness: 1.02, saturation: 1.03 })
    .sharpen({ sigma: 1.1, m1: 0.8, m2: 2.4, x1: 2, y2: 10, y3: 20 })
    .resize(width, height, { fit: "inside", withoutEnlargement: true })
    .webp({ quality, effort: 6, smartSubsample: true, nearLossless: quality >= 92 })
    .toBuffer();
}
