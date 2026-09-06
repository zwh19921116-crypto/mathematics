# Worksheet Generator Images

A fast local SVG image and diagram API shared by Biology, Chemistry, Mathematics and Physics worksheet generators. It uses deterministic SVG templates, so subject diagrams stay sharp, printable and controlled without requiring AI or a GPU.

## Start

```powershell
npm start
```

The server listens at `http://127.0.0.1:4317`.

## One shared server

Double-click [`Start Worksheet Image Server.vbs`](Start%20Worksheet%20Image%20Server.vbs) once. This single global server is shared by Biology, Chemistry, Mathematics and Physics at `http://127.0.0.1:4317`. It does not choose or open a worksheet generator; it simply listens for requests from whichever generator is running.

## Endpoints

- `GET /health`
- `GET /api/catalog`
- `GET /api/generate?type=atom&protons=6&neutrons=6&electrons=6`
- `POST /api/generate` with JSON such as `{ "type": "molecule", "formula": "H2O" }`
- `GET /resources/<filename>.svg`

Generated SVG resources are saved in `resources/` and returned as both `svg` and a resource `url`.

Supported types: `atom`, `molecule`, `energyProfile`, `electrochemicalCell`, and `spectrum`.

## Shared client

Use [`client.js`](client.js) from any worksheet generator:

```js
import { generateWorksheetImage } from './path/to/WorksheetGenerator-Images/client.js';

const image = await generateWorksheetImage('atom', {
	protons: 8,
	neutrons: 8,
	electrons: 8,
});

const imageHTML = `<img src="${image.url}" alt="Generated diagram" />`;
```

The API is intentionally subject-neutral. Biology, Mathematics and Physics can add their own generator types and options without changing the endpoint contract.
