import { copyFile, writeFile } from 'node:fs/promises';

await writeFile('out/.nojekyll', '');
await copyFile('out/index.html', 'out/404.html');

console.log('GitHub Pages export prepared in out/');
