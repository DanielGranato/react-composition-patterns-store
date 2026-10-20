import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const database = JSON.parse(readFileSync(join(root, 'server.json'), 'utf8'));
const outputDir = join(root, 'public', 'data');

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'products.json'), JSON.stringify(database.products, null, 2));
writeFileSync(join(outputDir, 'categories.json'), JSON.stringify(database.categories, null, 2));
