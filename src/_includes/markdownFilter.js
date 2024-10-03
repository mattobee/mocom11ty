import markdownIt from 'markdown-it';

// Initialize the markdown-it library
const md = new markdownIt();

/**
 * Adds a Nunjucks filter to render Markdown content.
 * @param {Object} eleventyConfig - The Eleventy configuration object.
 */
export default function (eleventyConfig) {
  eleventyConfig.addNunjucksFilter('markdown', (content) => {
    return md.render(content);
  });
}