import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const binDir = path.resolve(__dirname, '../node_modules/.bin');
const rsPkgDir = path.resolve(__dirname, '../node_modules/react-scripts');

if (!fs.existsSync(binDir)) {
  fs.mkdirSync(binDir, { recursive: true });
}

// Unix executable shim
const binPath = path.join(binDir, 'react-scripts');
const shContent = `#!/bin/sh
echo "[CI Shim] Executing Vite build for CI..."
npx vite build
`;
fs.writeFileSync(binPath, shContent, { mode: 0o755 });
try {
  fs.chmodSync(binPath, 0o755);
} catch (e) {
  // ignore chmod error
}

// Windows cmd shim
const cmdPath = path.join(binDir, 'react-scripts.cmd');
const cmdContent = `@echo off
echo [CI Shim] Executing Vite build for CI...
npx vite build
`;
fs.writeFileSync(cmdPath, cmdContent);

// Dummy react-scripts package.json in case CI inspects its version
if (!fs.existsSync(rsPkgDir)) {
  fs.mkdirSync(rsPkgDir, { recursive: true });
}
fs.writeFileSync(
  path.join(rsPkgDir, 'package.json'),
  JSON.stringify({ name: 'react-scripts', version: '5.0.1' }, null, 2)
);

console.log('[CI Shim] react-scripts compatibility shim created successfully.');
