import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const sourceDirectory = process.argv[2];

if (!sourceDirectory) {
  throw new Error('Usage: node scripts/prepare-assets.mjs <source-directory>');
}

const outputDirectory = path.resolve('public/media');

function slugify(filename) {
  return path
    .parse(filename)
    .name
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

await fs.mkdir(outputDirectory, { recursive: true });

const filenames = (await fs.readdir(sourceDirectory))
  .filter((filename) => filename.toLowerCase().endsWith('.png'))
  .sort((a, b) => a.localeCompare(b));

for (const filename of filenames) {
  if (filename === 'hero-renders-contact-sheet.png') continue;

  const input = path.join(sourceDirectory, filename);
  const slug = slugify(filename);

  await Promise.all([
    sharp(input)
      .resize({ width: 960, withoutEnlargement: true })
      .webp({ quality: 78, effort: 5, alphaQuality: 90 })
      .toFile(path.join(outputDirectory, `${slug}-sm.webp`)),
    sharp(input)
      .resize({ width: 2400, withoutEnlargement: true })
      .webp({ quality: 86, effort: 5, alphaQuality: 95 })
      .toFile(path.join(outputDirectory, `${slug}-lg.webp`)),
  ]);
}

await sharp(path.join(sourceDirectory, 'seriouslycircuscircusbillboard.png'))
  .resize({ width: 1200, height: 630, fit: 'contain', background: '#080706' })
  .png({ compressionLevel: 9 })
  .toFile(path.resolve('public/og.png'));

await sharp(path.join(sourceDirectory, 'circuscircus-monogram.png'))
  .resize(96, 96, { fit: 'cover' })
  .png({ compressionLevel: 9 })
  .toFile(path.resolve('public/icon.png'));

console.log(`Prepared ${filenames.length} source images in ${outputDirectory}`);
