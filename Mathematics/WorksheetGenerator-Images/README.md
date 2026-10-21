# Worksheet Resource Generator (MVP)

This project now includes a Next.js + TypeScript worksheet resource generator designed for fast, low-cost educational content creation.

It supports Stage 1 and Stage 2 of the requested build:

- Stage 1: Professional UI for prompt-based resource generation.
- Stage 2: Server-side API route with modular generation pipeline.

The legacy Node SVG server is still available and unchanged as a fallback path.

## Quick Start

```powershell
npm install
npm run dev
```

Open `http://127.0.0.1:3000`.

## Start By Clicking (No Commands)

- Double-click `Start Worksheet Resource Server.vbs` to start the new Next.js image/resource server and open the app.
- Double-click `Start Worksheet Image Server.vbs` to start the legacy image server and open the legacy console.

## Build Check

```powershell
npm run build
```

## Environment Variables

Copy `.env.example` to `.env.local` and set values as needed.

- `HUGGINGFACE_API_KEY` (optional): enables FLUX.1 Schnell image generation through Hugging Face inference.
- `HF_API_KEY` (optional alternative key name).
- `HOST` and `PORT` (optional, standard server settings).

If no FLUX key is configured, AI illustration requests return a clean SVG fallback so the app remains usable.

## New API Route

- `POST /api/generate-resource`
- `GET /api/generate-resource` (health-style metadata)
- `POST /api/create-image` (visual-only endpoint for worksheet insertion)

`POST /api/generate-resource` accepts a body like:

```json
{
	"prompt": "Year 7 worksheet on fractions",
	"outputType": "auto",
	"style": "Clean Educational",
	"width": 512,
	"height": 512,
	"yearLevel": "Year 7",
	"includeAnswers": true
}
```

`POST /api/create-image` accepts a body like:

```json
{
	"prompt": "carbon atom with 6 electrons",
	"style": "Science Illustration",
	"yearLevel": "Year 7",
	"width": 512,
	"height": 512
}
```

It returns an `imageUrl` you can insert directly into worksheet HTML.

## Worksheet Generator Integration

From your worksheet generator app:

```js
import { createWorksheetVisual, buildWorksheetImageTag } from "./path/to/WorksheetGenerator-Images/client.js";

const visual = await createWorksheetVisual("3 children sharing 12 apples", {
	style: "Clean Educational",
	yearLevel: "Year 4",
	width: 512,
	height: 512,
});

const imageHtml = buildWorksheetImageTag(visual, "Children sharing apples");
// Append imageHtml into your worksheet template/content.
```

## Modular Generation Structure

Implemented under `lib/resource-generation/`:

- `classifyRequest.ts`
- `enhancePrompt.ts`
- `generateResource.ts`
- `worksheetGenerator.ts`
- `textResourceGenerator.ts`
- `diagramGenerator.ts`
- `imageProvider.ts`
- `fluxProvider.ts`
- `imageOptimizer.ts`
- `layoutTemplates.ts`
- `validation.ts`
- `types.ts`

## Current MVP Behavior

- Auto classifies prompt into AI Illustration, Precision Diagram, Worksheet Resource, or Mixed Resource.
- Uses precision-first rules to avoid AI for exact maths/science structure.
- Generates diagram output as SVG.
- Generates worksheet content as structured HTML templates.
- Generates AI illustrations via FLUX.1 Schnell when configured.
- Converts AI image output to WebP with `sharp`.
- Handles input validation and friendly errors.

## Legacy Server (Still Available)

The previous shared SVG server remains in `server.js` and can still be started with:

```powershell
npm run start:legacy
```

Legacy endpoints remain:

- `GET /health`
- `GET /api/catalog`
- `GET /api/generate`
- `POST /api/generate`

