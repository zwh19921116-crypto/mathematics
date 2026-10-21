import { sanitizeSvg } from "./validation";

function svgFrame(title: string, body: string, width: number, height: number): string {
  return sanitizeSvg(`<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img" aria-label="${title}"><rect width="100%" height="100%" fill="#ffffff"/><text x="32" y="42" font-size="24" fill="#0f2433" font-family="Public Sans,Segoe UI,sans-serif">${title}</text>${body}</svg>`);
}

function makeNumberLine(width: number, height: number): string {
  const startX = 80;
  const endX = width - 80;
  const y = height / 2;
  const step = (endX - startX) / 10;
  let ticks = "";
  for (let i = 0; i <= 10; i += 1) {
    const x = startX + step * i;
    ticks += `<line x1="${x}" y1="${y - 10}" x2="${x}" y2="${y + 10}" stroke="#234056" stroke-width="2"/><text x="${x - 4}" y="${y + 32}" font-size="14" fill="#234056">${i}</text>`;
  }
  return svgFrame("Number Line", `<line x1="${startX}" y1="${y}" x2="${endX}" y2="${y}" stroke="#234056" stroke-width="3"/>${ticks}`, width, height);
}

function makeAtom(width: number, height: number, prompt: string): string {
  const electrons = Number(prompt.match(/(\d+)\s*electrons?/)?.[1] ?? 6);
  let points = "";
  for (let i = 0; i < electrons; i += 1) {
    const angle = (Math.PI * 2 * i) / Math.max(electrons, 1);
    const x = width / 2 + Math.cos(angle) * 120;
    const y = height / 2 + Math.sin(angle) * 120;
    points += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="10" fill="#dd8b28"/>`;
  }
  return svgFrame("Atom Diagram", `<circle cx="${width / 2}" cy="${height / 2}" r="60" fill="#dceff1" stroke="#0f6b5f" stroke-width="3"/><circle cx="${width / 2}" cy="${height / 2}" r="120" fill="none" stroke="#2f6c99" stroke-width="2"/>${points}<text x="${width / 2 - 45}" y="${height / 2 + 6}" font-size="15" fill="#0f2433">Nucleus</text>`, width, height);
}

function makeBarChart(width: number, height: number): string {
  const values = [2, 5, 8];
  const chartHeight = height - 120;
  const max = Math.max(...values);
  const barWidth = 80;
  let bars = "";
  values.forEach((value, index) => {
    const x = 120 + index * 140;
    const h = (value / max) * chartHeight;
    const y = height - 60 - h;
    bars += `<rect x="${x}" y="${y}" width="${barWidth}" height="${h}" fill="#0f6b5f"/><text x="${x + 32}" y="${height - 35}" font-size="13">${index + 1}</text><text x="${x + 30}" y="${y - 8}" font-size="13">${value}</text>`;
  });
  return svgFrame("Bar Chart", `<line x1="90" y1="${height - 60}" x2="${width - 80}" y2="${height - 60}" stroke="#234056"/><line x1="90" y1="70" x2="90" y2="${height - 60}" stroke="#234056"/>${bars}`, width, height);
}

export function generateDiagram(prompt: string, width: number, height: number): string {
  const lower = prompt.toLowerCase();
  if (lower.includes("atom")) return makeAtom(width, height, lower);
  if (lower.includes("bar chart") || lower.includes("graph")) return makeBarChart(width, height);
  return makeNumberLine(width, height);
}
