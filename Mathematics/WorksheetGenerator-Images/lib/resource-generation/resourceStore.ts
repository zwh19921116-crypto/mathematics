import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";

const PUBLIC_RESOURCE_DIR = path.join(process.cwd(), "public", "resources");

function safeSlug(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 48) || "resource";
}

function ensureResourceDir(): void {
  fs.mkdirSync(PUBLIC_RESOURCE_DIR, { recursive: true });
}

export function saveResourceBuffer(prefix: string, extension: string, content: Buffer): { filename: string; resourceUrl: string } {
  ensureResourceDir();
  const hash = crypto.createHash("sha1").update(content).digest("hex").slice(0, 12);
  const filename = `${safeSlug(prefix)}-${hash}.${extension}`;
  fs.writeFileSync(path.join(PUBLIC_RESOURCE_DIR, filename), content);
  return { filename, resourceUrl: `/resources/${filename}` };
}

export function saveResourceText(prefix: string, extension: string, content: string): { filename: string; resourceUrl: string } {
  ensureResourceDir();
  const hash = crypto.createHash("sha1").update(content, "utf8").digest("hex").slice(0, 12);
  const filename = `${safeSlug(prefix)}-${hash}.${extension}`;
  fs.writeFileSync(path.join(PUBLIC_RESOURCE_DIR, filename), content, "utf8");
  return { filename, resourceUrl: `/resources/${filename}` };
}
