import fs from 'node:fs';
import path from 'node:path';

// Inline SVG icons at build time. No runtime JS, no external request.
// Lucide (lucide-static) for UI glyphs, Simple Icons for brand marks,
// with a local override dir for brands Simple Icons can't ship (LinkedIn).
const LUCIDE_DIR = 'node_modules/lucide-static/icons';
const BRAND_DIR = 'node_modules/simple-icons/icons';
const LOCAL_DIR = 'src/_includes/icons';

const cache = new Map();

function loadSvg(dirs, name) {
  const key = `${dirs.join('|')}/${name}`;
  if (cache.has(key)) return cache.get(key);
  for (const dir of dirs) {
    const file = path.join(dir, `${name}.svg`);
    if (fs.existsSync(file)) {
      const svg = fs.readFileSync(file, 'utf8');
      cache.set(key, svg);
      return svg;
    }
  }
  throw new Error(`Icon not found: ${name} (looked in ${dirs.join(', ')})`);
}

// A single non-greedy pass can leave a residual delimiter on nested or
// malformed input (e.g. "<!--<!---->-->"), so strip comments to a fixed point.
function stripComments(svg) {
  let prev;
  let next = svg;
  do {
    prev = next;
    next = prev.replace(/<!--[\s\S]*?-->/g, '');
  } while (next !== prev);
  return next;
}

// Normalise a raw SVG: drop its own sizing/class, size in em so it follows
// font-size, hide from assistive tech (icons here are always decorative).
function render(svg, { fill = false } = {}) {
  const attrs = `class="icon" width="1em" height="1em" aria-hidden="true" focusable="false"${
    fill ? ' fill="currentColor"' : ''
  }`;
  return (
    stripComments(svg)
      .replace(/<title>[\s\S]*?<\/title>/g, '')
      // Only rewrite the <svg> element's own attributes. Descendant shapes
      // (e.g. <rect width height>) must keep theirs or they collapse.
      .replace(/<svg\b[^>]*>/, (tag) =>
        tag
          .replace(/\s(?:width|height|class)="[^"]*"/g, '')
          .replace(/<svg\b/, `<svg ${attrs}`)
      )
      .replace(/\s*\n\s*/g, ' ')
      .trim()
  );
}

/**
 * Adds `icon` (Lucide) and `brand` (Simple Icons + local) shortcodes.
 * @param {Object} eleventyConfig - The Eleventy configuration object.
 * @returns {void}
 */
export default function (eleventyConfig) {
  eleventyConfig.addShortcode('icon', (name) =>
    render(loadSvg([LUCIDE_DIR], name))
  );
  eleventyConfig.addShortcode('brand', (name) =>
    render(loadSvg([LOCAL_DIR, BRAND_DIR], name), { fill: true })
  );
}
