const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');

const HOST = process.env.HOST || '127.0.0.1';
const PORT = Number(process.env.PORT) || 4317;
const RESOURCE_DIR = path.join(__dirname, 'resources');
const LOG_FILE = path.join(__dirname, 'server.log');
const IMAGE_RENDER_VERSION = '19';
fs.mkdirSync(RESOURCE_DIR, { recursive: true });

function log(message, error = false) {
  const line = `[${new Date().toISOString()}] ${message}`;
  fs.appendFileSync(LOG_FILE, `${line}\n`, 'utf8');
  (error ? console.error : console.log)(line);
}

const catalog = {
  atom: 'Atom with nucleus, protons, neutrons and electron shells',
  molecule: 'Molecule with labelled atoms and bonds',
  energyProfile: 'Reaction energy profile',
  electrochemicalCell: 'Electrochemical cell',
  spectrum: 'IR or NMR spectrum',
};

const xml = (value) => String(value).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' }[c]));
const svg = (body, label, width = 720, height = 360, viewBox = `0 0 ${width} ${height}`) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}" width="${width}" height="${height}" role="img" aria-label="${xml(label)}">${body}</svg>`;
const text = (x, y, value, size = 20, color = '#183b56') => `<text x="${x}" y="${y}" fill="${color}" font-family="Arial,sans-serif" font-size="${size}">${xml(value)}</text>`;

function atom(options = {}) {
  const p = Number(options.protons) || 6;
  const n = Number(options.neutrons) || 6;
  const e = Number(options.electrons) || 6;
  const shellCapacity = [2, 8, 8];
  const shellRadii = [62, 108, 154];
  const shells = shellRadii.map((radius, index) => {
    const colour = '#58738d';
    return `<circle cx="260" cy="180" r="${radius}" fill="none" stroke="${colour}" stroke-width="3"/>`;
  }).join('');
  let remainingElectrons = Math.max(0, e);
  let electronMarks = '';
  shellCapacity.forEach((capacity, shellIndex) => {
    const shellElectrons = Math.min(remainingElectrons, capacity);
    const radius = shellRadii[shellIndex];
    for (let electronIndex = 0; electronIndex < shellElectrons; electronIndex++) {
      const angle = (-Math.PI / 2) + (electronIndex * Math.PI * 2 / Math.max(shellElectrons, 1));
      const x = (260 + Math.cos(angle) * radius).toFixed(1);
      const y = (180 + Math.sin(angle) * radius).toFixed(1);
      electronMarks += `<circle cx="${x}" cy="${y}" r="15" fill="#fbbf24" stroke="#172b43" stroke-width="3"/>`;
    }
    remainingElectrons -= shellElectrons;
  });
  const accent = ['#2b6cb0', '#0f766e', '#7c3aed', '#be123c'][p % 4];
  const particleCount = 8;
  const particles = Array.from({ length: particleCount }, (_, index) => {
    const angle = index * Math.PI / 3 + ((p + n) % 3) * 0.12;
    const radius = index % 2 === 0 ? 23 : 47;
    const x = 260 + Math.cos(angle) * radius;
    const y = 180 + Math.sin(angle) * radius;
    const proton = index % 2 === 0;
    return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="20" fill="url(#${proton ? 'proton' : 'neutron'})" stroke="#17324d" stroke-width="2"/>${proton ? text(x - 10, y + 8, '+', 22, '#17324d') : ''}`;
  }).join('');
  const key = `<rect x="480" y="72" width="130" height="215" rx="10" fill="#f8fafc" stroke="#d8e2eb" stroke-width="2"/>${text(498, 101, 'Key:', 20, '#172b43')}${text(498, 138, '+', 24, '#17324d')}${text(526, 138, 'Proton', 17, '#172b43')}${text(498, 183, '●', 23, '#587ca4')}${text(526, 183, 'Neutron', 17, '#172b43')}${text(498, 228, '●', 23, '#f59e0b')}${text(526, 228, 'Electron', 17, '#172b43')}`;
  return svg(`<defs><radialGradient id="proton" cx="32%" cy="28%"><stop offset="0" stop-color="#fff7ed"/><stop offset="0.38" stop-color="#fb7185"/><stop offset="1" stop-color="#c2414d"/></radialGradient><radialGradient id="neutron" cx="32%" cy="28%"><stop offset="0" stop-color="#f8fafc"/><stop offset="0.38" stop-color="#b8c9dc"/><stop offset="1" stop-color="#5d7fa5"/></radialGradient><filter id="shadow" x="-40%" y="-40%" width="180%" height="180%"><feDropShadow dx="0" dy="5" stdDeviation="5" flood-color="#183b56" flood-opacity="0.2"/></filter></defs><rect width="560" height="400" fill="#ffffff"/>${shells}${electronMarks}<circle cx="260" cy="180" r="78" fill="#f4f8fc" stroke="#345979" stroke-width="3" filter="url(#shadow)"/>${particles}${key}`, 'Bohr atom diagram with proton, neutron and electron key', 560, 400, '85 0 550 360');
}

function molecule(options = {}) {
  const formula = options.formula || 'H2O';
  return svg(`<rect width="720" height="360" fill="#f8fbfd"/>${text(28, 42, `Molecular structure: ${formula}`, 26)}<line x1="360" y1="170" x2="225" y2="100" stroke="#4a6b82" stroke-width="7"/><line x1="360" y1="170" x2="495" y2="100" stroke="#4a6b82" stroke-width="7"/><circle cx="360" cy="170" r="48" fill="#d97706"/><circle cx="225" cy="100" r="36" fill="#2b6cb0"/><circle cx="495" cy="100" r="36" fill="#2b6cb0"/>${text(349, 179, 'O', 22, '#fff')}${text(218, 108, 'H', 21, '#fff')}${text(488, 108, 'H', 21, '#fff')}${text(28, 330, 'Bonds and molecular shape', 18, '#52667a')}`, `Molecular structure ${formula}`);
}

function energyProfile() {
  return svg(`<rect width="720" height="360" fill="#f8fbfd"/>${text(28, 42, 'Reaction energy profile', 26)}<line x1="90" y1="290" x2="90" y2="75" stroke="#52667a" stroke-width="3"/><line x1="90" y1="290" x2="650" y2="290" stroke="#52667a" stroke-width="3"/><path d="M125 235 H235 C290 235 285 110 370 110 C455 110 450 265 520 265 H620" fill="none" stroke="#d97706" stroke-width="6"/><line x1="235" y1="235" x2="235" y2="110" stroke="#183b56" stroke-width="3" stroke-dasharray="8 7"/>${text(245, 170, 'Ea', 18)}${text(125, 258, 'Reactants', 18)}${text(520, 285, 'Products', 18)}${text(320, 330, 'Reaction progress', 18, '#52667a')}`, 'Reaction energy profile');
}

function cell() {
  return svg(`<rect width="720" height="360" fill="#f8fbfd"/>${text(28, 42, 'Electrochemical cell', 26)}<rect x="130" y="100" width="150" height="150" fill="#e7f0f7" stroke="#4a6b82" stroke-width="4"/><rect x="440" y="100" width="150" height="150" fill="#e7f0f7" stroke="#4a6b82" stroke-width="4"/><rect x="195" y="75" width="20" height="200" fill="#d97706"/><rect x="505" y="75" width="20" height="200" fill="#2b6cb0"/><path d="M215 65 C300 10 420 10 505 65" fill="none" stroke="#183b56" stroke-width="4"/>${text(180, 305, 'Anode', 19)}${text(487, 305, 'Cathode', 19)}${text(330, 30, 'e- flow ->', 19)}${text(145, 130, 'Oxidation', 17, '#52667a')}${text(455, 130, 'Reduction', 17, '#52667a')}`, 'Electrochemical cell with anode and cathode');
}

function spectrum(options = {}) {
  const label = options.spectrum === 'nmr' ? '1H NMR spectrum' : 'IR spectrum';
  return svg(`<rect width="720" height="360" fill="#f8fbfd"/>${text(28, 42, label, 26)}<line x1="90" y1="285" x2="650" y2="285" stroke="#52667a" stroke-width="3"/><line x1="90" y1="285" x2="90" y2="80" stroke="#52667a" stroke-width="3"/><path d="M120 285 V255 M210 285 V145 M310 285 V220 M430 285 V100 M545 285 V185 M620 285 V245" stroke="#2b6cb0" stroke-width="7"/>${text(330, 330, 'Chemical shift / wavenumber', 17, '#52667a')}${text(20, 180, 'Intensity', 17, '#52667a')}`, label);
}

function generate(type, options) {
  if (type === 'atom') return atom(options);
  if (type === 'molecule') return molecule(options);
  if (type === 'energyProfile') return energyProfile(options);
  if (type === 'electrochemicalCell') return cell(options);
  if (type === 'spectrum') return spectrum(options);
  throw new Error(`Unknown image type: ${type}`);
}

function json(response, status, value) {
  response.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8', 'Access-Control-Allow-Origin': '*', 'Cache-Control': 'no-store' });
  response.end(JSON.stringify(value));
}

const server = http.createServer((request, response) => {
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  if (request.method === 'OPTIONS') { response.writeHead(204); return response.end(); }
  const url = new URL(request.url, `http://${HOST}:${PORT}`);
  if (url.pathname === '/health') return json(response, 200, { ok: true, service: 'worksheet-generator-images' });
  if (url.pathname === '/api/catalog') return json(response, 200, { types: catalog });
  if (url.pathname === '/api/logs') return json(response, 200, { lines: fs.existsSync(LOG_FILE) ? fs.readFileSync(LOG_FILE, 'utf8').split(/\r?\n/).filter(Boolean).slice(-200) : [] });
  if (url.pathname === '/api/logs/clear' && request.method === 'POST') {
    fs.writeFileSync(LOG_FILE, '', 'utf8');
    log('Logs cleared from dashboard');
    return json(response, 200, { ok: true });
  }
  if (url.pathname === '/console') {
    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8', 'Access-Control-Allow-Origin': '*' });
    return fs.createReadStream(path.join(__dirname, 'console.html')).pipe(response);
  }
  if (url.pathname.startsWith('/resources/')) {
    const file = path.join(RESOURCE_DIR, path.basename(url.pathname));
    if (!fs.existsSync(file)) return json(response, 404, { error: 'Resource not found' });
    response.writeHead(200, { 'Content-Type': 'image/svg+xml; charset=utf-8', 'Access-Control-Allow-Origin': '*' });
    return fs.createReadStream(file).pipe(response);
  }
  if (url.pathname !== '/api/generate' || !['GET', 'POST'].includes(request.method)) return json(response, 404, { error: 'Not found' });
  let body = '';
  request.on('data', (chunk) => { body += chunk; });
  request.on('end', () => {
    try {
      const input = request.method === 'POST' ? JSON.parse(body || '{}') : Object.fromEntries(url.searchParams.entries());
      const type = input.type || 'atom';
      if (!catalog[type]) return json(response, 400, { error: 'Unknown type', available: Object.keys(catalog) });
      log(`[request] ${type} ${JSON.stringify(input)}`);
      const content = generate(type, input);
      const id = crypto.createHash('sha1').update(`${IMAGE_RENDER_VERSION}:${type}:${JSON.stringify(input)}`).digest('hex').slice(0, 12);
      const filename = `${type}-${id}.svg`;
      fs.writeFileSync(path.join(RESOURCE_DIR, filename), content, 'utf8');
      log(`[generated] ${filename}`);
      return json(response, 200, { ok: true, type, filename, url: `/resources/${filename}`, svg: content });
    } catch (error) { log(`[error] ${error.message}`, true); return json(response, 400, { error: error.message }); }
  });
});

server.listen(PORT, HOST, () => log(`Worksheet image server listening at http://${HOST}:${PORT}`));
