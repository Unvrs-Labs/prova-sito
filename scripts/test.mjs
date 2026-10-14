// Controlla che index.html esista e non sia vuoto.
import { existsSync, readFileSync } from 'node:fs';

const file = 'src/index.html';
if (!existsSync(file)) {
  console.error(`test: manca ${file}`);
  process.exit(1);
}
if (!readFileSync(file, 'utf8').includes('<title>')) {
  console.error(`test: ${file} senza <title>`);
  process.exit(1);
}
console.log(`test: ${file} ok`);
