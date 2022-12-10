module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/images')
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  return {
    dir: { input: 'src', output: 'dist', data: '_data' },
    passthroughFileCopy: true,
    templateFormats: ['njk', 'md', 'css', 'html', 'yml', 'png'],
    htmlTemplateEngine: 'njk'
  }
}
