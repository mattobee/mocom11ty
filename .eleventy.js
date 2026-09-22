import markdownFilter from './src/_includes/markdownFilter.js';
import randomPhrase from './src/_includes/randomPhrase.js';
import lightningCSS from '@11tyrocks/eleventy-plugin-lightningcss';

export default function (eleventyConfig) {
  // Passthrough copy for static assets
  eleventyConfig.addPassthroughCopy('src/images');
  eleventyConfig.addPassthroughCopy('src/scripts');
  eleventyConfig.addPassthroughCopy({
    'node_modules/@fontsource/atkinson-hyperlegible/latin-400.css':
      'fonts/atkinson-hyperlegible/latin-400.css',
    'node_modules/@fontsource/atkinson-hyperlegible/latin-400-italic.css':
      'fonts/atkinson-hyperlegible/latin-400-italic.css',
    'node_modules/@fontsource/atkinson-hyperlegible/latin-700.css':
      'fonts/atkinson-hyperlegible/latin-700.css',
    'node_modules/@fontsource/atkinson-hyperlegible/latin-700-italic.css':
      'fonts/atkinson-hyperlegible/latin-700-italic.css',
    'node_modules/@fontsource/atkinson-hyperlegible/files':
      'fonts/atkinson-hyperlegible/files',
    'node_modules/@fontsource-variable/overpass/wght.css':
      'fonts/overpass/wght.css',
    'node_modules/@fontsource-variable/overpass/wght-italic.css':
      'fonts/overpass/wght-italic.css',
    'node_modules/@fontsource-variable/overpass/files': 'fonts/overpass/files',
  });

  // Add plugins
  eleventyConfig.addPlugin(lightningCSS, {
    sourceMap: true,
  });

  // Add shortcodes
  eleventyConfig.addShortcode('year', () => `${new Date().getFullYear()}`);

  // Add filters
  markdownFilter(eleventyConfig);

  // Add shortcodes
  randomPhrase(eleventyConfig);

  return {
    dir: { input: 'src', output: 'dist', data: '_data' },
    passthroughFileCopy: true,
    templateFormats: ['njk', 'md', 'css', 'html', 'yml', 'png'],
    htmlTemplateEngine: 'njk',
  };
}
