const LEGACY_WORKSHEET_IMAGE_SERVER = 'http://127.0.0.1:4317';
const WORKSHEET_RESOURCE_SERVER = 'http://127.0.0.1:3000';

export async function generateWorksheetImage(type, options = {}) {
  const response = await fetch(`${LEGACY_WORKSHEET_IMAGE_SERVER}/api/generate`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ type, ...options }),
  });

  if (!response.ok) {
    throw new Error(`Image generator returned HTTP ${response.status}`);
  }

  const result = await response.json();
  return {
    ...result,
    url: new URL(result.url, LEGACY_WORKSHEET_IMAGE_SERVER).href,
  };
}

export async function createWorksheetVisual(prompt, options = {}) {
  const response = await fetch(`${WORKSHEET_RESOURCE_SERVER}/api/create-image`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      prompt,
      style: options.style || 'Clean Educational',
      yearLevel: options.yearLevel || 'General',
      width: options.width || 1024,
      height: options.height || 1024,
      quality: options.quality || 95,
      freeMode: options.freeMode !== false,
      variationSeed: options.variationSeed || '',
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Image creator returned HTTP ${response.status}: ${errorText}`);
  }

  const result = await response.json();
  return {
    ...result,
    imageUrl: new URL(result.imageUrl, WORKSHEET_RESOURCE_SERVER).href,
  };
}

export function buildWorksheetImageTag(imageResult, altText = 'Worksheet visual') {
  if (!imageResult || !imageResult.imageUrl) return '';
  const safeAlt = String(altText).replace(/"/g, '&quot;');
  return `<img src="${imageResult.imageUrl}" alt="${safeAlt}" style="max-width:100%;height:auto;" />`;
}

export async function imageGeneratorIsAvailable() {
  try {
    const response = await fetch(`${WORKSHEET_RESOURCE_SERVER}/api/generate-resource`);
    return response.ok;
  } catch {
    return false;
  }
}
