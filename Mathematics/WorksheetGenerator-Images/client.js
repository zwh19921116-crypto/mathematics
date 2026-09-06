const WORKSHEET_IMAGE_SERVER = 'http://127.0.0.1:4317';

export async function generateWorksheetImage(type, options = {}) {
  const response = await fetch(`${WORKSHEET_IMAGE_SERVER}/api/generate`, {
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
    url: new URL(result.url, WORKSHEET_IMAGE_SERVER).href,
  };
}

export async function imageGeneratorIsAvailable() {
  try {
    const response = await fetch(`${WORKSHEET_IMAGE_SERVER}/health`);
    return response.ok;
  } catch {
    return false;
  }
}
