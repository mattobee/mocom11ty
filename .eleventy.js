import markdownFilter from './src/_includes/markdownFilter.js';
import randomPhrase from './src/_includes/randomPhrase.js';
import lightningCSS from '@11tyrocks/eleventy-plugin-lightningcss';

export default function (eleventyConfig) {
  // Passthrough copy for static assets
  eleventyConfig.addPassthroughCopy('src/images');
  eleventyConfig.addPassthroughCopy('src/scripts');

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
