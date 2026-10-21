"use client";

import { useMemo, useState } from "react";
import type { GenerateResourceInput, GeneratedResource, OutputType, ResourceStyle } from "@/lib/resource-generation/types";

const outputOptions: Array<{ value: OutputType | "auto"; label: string }> = [
  { value: "auto", label: "Auto" },
  { value: "ai_illustration", label: "AI Illustration" },
  { value: "precise_diagram", label: "Precision Diagram" },
  { value: "worksheet_content", label: "Worksheet Resource" },
  { value: "mixed_resource", label: "Mixed Resource" }
];

const styles: ResourceStyle[] = [
  "Clean Educational",
  "Colour Cartoon",
  "Black and White Worksheet",
  "Science Illustration",
  "Maths Diagram",
  "Reading Worksheet",
  "Revision Sheet",
  "Formula Sheet"
];

const yearLevels = ["Lower Primary", "Upper Primary", "Year 7", "Year 8", "Year 9", "Year 10", "General"]; 

function makeDownload(name: string, content: string, mimeType: string): void {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = name;
  anchor.click();
  URL.revokeObjectURL(url);
}

export default function Page() {
  const [form, setForm] = useState<GenerateResourceInput>({
    prompt: "",
    outputType: "ai_illustration",
    style: "Clean Educational",
    width: 1024,
    height: 1024,
    quality: 95,
    yearLevel: "General",
    includeAnswers: false
  });
  const [lastRequest, setLastRequest] = useState<GenerateResourceInput | null>(null);
  const [resource, setResource] = useState<GeneratedResource | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const canGenerate = useMemo(() => form.prompt.trim().length > 0 && !loading, [form.prompt, loading]);

  async function generate(payload?: GenerateResourceInput): Promise<void> {
    const req = payload ?? form;
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/generate-resource", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(req)
      });
      const result = (await response.json()) as GeneratedResource | { error: string };
      if (!response.ok) {
        const message = "error" in result ? result.error : "Unable to generate resource";
        throw new Error(message);
      }
      setResource(result as GeneratedResource);
      setLastRequest(req);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unknown error";
      setError(message);
    } finally {
      setLoading(false);
    }
  }

  function renderPreview() {
    if (!resource) return <p className="meta">Generate a resource to preview it here.</p>;
    if (resource.resourceUrl && (resource.kind === "image" || resource.kind === "svg")) {
      return <img src={resource.resourceUrl} alt={resource.title} />;
    }
    if (resource.kind === "image" && resource.imageDataUrl) return <img src={resource.imageDataUrl} alt={resource.title} />;
    if (resource.kind === "svg" && resource.svg) return <div dangerouslySetInnerHTML={{ __html: resource.svg }} />;
    if (resource.kind === "html" && resource.html) return <div dangerouslySetInnerHTML={{ __html: resource.html }} />;
    if (resource.kind === "mixed") {
      return (
        <div>
          {resource.visualSvg ? <div dangerouslySetInnerHTML={{ __html: resource.visualSvg }} /> : null}
          {resource.visualImageDataUrl ? <img src={resource.visualImageDataUrl} alt="Visual" /> : null}
          {resource.html ? <div dangerouslySetInnerHTML={{ __html: resource.html }} /> : null}
        </div>
      );
    }
    return <pre>{resource.text ?? "No preview available."}</pre>;
  }

  function copyContent(): void {
    if (!resource) return;
    const text = resource.text ?? resource.html ?? "";
    if (!text) return;
    navigator.clipboard.writeText(text);
  }

  function downloadResource(): void {
    if (!resource) return;
    const base = resource.outputType;
    if (resource.kind === "svg" && resource.svg) return makeDownload(`${base}.svg`, resource.svg, "image/svg+xml");
    if (resource.kind === "html" && resource.html) return makeDownload(`${base}.html`, resource.html, "text/html");
    if (resource.kind === "text" && resource.text) return makeDownload(`${base}.txt`, resource.text, "text/plain");
    if (resource.kind === "image" && resource.imageDataUrl) {
      const anchor = document.createElement("a");
      anchor.href = resource.imageDataUrl;
      anchor.download = `${base}.webp`;
      anchor.click();
      return;
    }
    if (resource.kind === "mixed" && resource.html) return makeDownload(`${base}.html`, resource.html, "text/html");
  }

  return (
    <main className="page">
      <section className="hero">
        <h1>Worksheet Resource Generator</h1>
        <p>
          Create clean, printable educational resources with auto-routing between AI illustrations,
          precise diagrams, and worksheet content.
        </p>
      </section>

      <section className="grid">
        <div className="card">
          <h2>Generate Resource</h2>

          <label htmlFor="prompt">Prompt</label>
          <textarea
            id="prompt"
            placeholder="Example: Year 7 worksheet on fractions with answers"
            value={form.prompt}
            onChange={(event) => setForm((previous) => ({ ...previous, prompt: event.target.value }))}
          />

          <div className="row" style={{ marginTop: 10 }}>
            <div>
              <label htmlFor="outputType">Resource Type</label>
              <select
                id="outputType"
                value={form.outputType}
                onChange={(event) => setForm((previous) => ({ ...previous, outputType: event.target.value as OutputType | "auto" }))}
              >
                {outputOptions.map((option) => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="style">Style</label>
              <select
                id="style"
                value={form.style}
                onChange={(event) => setForm((previous) => ({ ...previous, style: event.target.value as ResourceStyle }))}
              >
                {styles.map((style) => (
                  <option key={style} value={style}>{style}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="row3" style={{ marginTop: 10 }}>
            <div>
              <label htmlFor="yearLevel">Year Level</label>
              <select
                id="yearLevel"
                value={form.yearLevel}
                onChange={(event) => setForm((previous) => ({ ...previous, yearLevel: event.target.value }))}
              >
                {yearLevels.map((level) => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="width">Width</label>
              <input
                id="width"
                type="number"
                min={256}
                max={1024}
                step={256}
                value={form.width ?? 512}
                onChange={(event) => setForm((previous) => ({ ...previous, width: Number(event.target.value) }))}
              />
            </div>
            <div>
              <label htmlFor="height">Height</label>
              <input
                id="height"
                type="number"
                min={256}
                max={1024}
                step={256}
                value={form.height ?? 1024}
                onChange={(event) => setForm((previous) => ({ ...previous, height: Number(event.target.value) }))}
              />
            </div>
          </div>

          <div className="row" style={{ marginTop: 10 }}>
            <div>
              <label htmlFor="quality">Image Quality</label>
              <select
                id="quality"
                value={form.quality ?? 95}
                onChange={(event) => setForm((previous) => ({ ...previous, quality: Number(event.target.value) }))}
              >
                <option value={82}>Balanced (82)</option>
                <option value={90}>High (90)</option>
                <option value={95}>Textbook (95)</option>
              </select>
            </div>
            <div>
              <label htmlFor="widthHint">Print Hint</label>
              <input id="widthHint" type="text" value="Use 768 or 1024 for print" readOnly />
            </div>
          </div>

          <label className="inline-check">
            <input
              type="checkbox"
              checked={Boolean(form.includeAnswers)}
              onChange={(event) => setForm((previous) => ({ ...previous, includeAnswers: event.target.checked }))}
            />
            Include answer key
          </label>

          <div className="actions">
            <button className="primary" disabled={!canGenerate} onClick={() => void generate()}>
              {loading ? "Generating..." : "Generate"}
            </button>
            <button className="secondary" disabled={loading || !lastRequest} onClick={() => void generate(lastRequest ?? undefined)}>
              Regenerate
            </button>
            <button className="accent" disabled={!resource || loading} onClick={downloadResource}>Download</button>
            <button className="secondary" disabled={!resource || loading} onClick={copyContent}>Copy Text</button>
          </div>
          {error ? <div className="error">{error}</div> : null}
        </div>

        <div className="card">
          <h2>Preview</h2>
          <span className="badge">
            {resource ? resource.outputType.replace("_", " ").toUpperCase() : "NO OUTPUT"}
          </span>
          <div className="preview">{renderPreview()}</div>
          {resource?.warnings?.length ? (
            <div className="error">{resource.warnings[0]}</div>
          ) : null}
          {resource?.meta ? (
            <div className="meta">
              {resource.meta.dimensions ? `Size: ${resource.meta.dimensions.width}x${resource.meta.dimensions.height} · ` : ""}
              {typeof resource.meta.fileSizeBytes === "number" ? `File: ${Math.round(resource.meta.fileSizeBytes / 1024)} KB · ` : ""}
              {typeof resource.meta.quality === "number" ? `Quality: ${resource.meta.quality}` : ""}
            </div>
          ) : null}
        </div>
      </section>
    </main>
  );
}
