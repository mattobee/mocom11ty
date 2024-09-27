const eleventySass = require("@11tyrocks/eleventy-plugin-sass-lightningcss");
const fetchNotes = require('./src/scripts/fetchNotes');
const fetchTopics = require('./src/scripts/fetchTopics');
const markdownFilter = require('./src/_includes/markdownFilter');
const randomPhrase = require('./src/_includes/randomPhrase');

module.exports = function (eleventyConfig) {

  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/scripts");

  eleventyConfig.addPlugin(eleventySass);
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  // Filters
  markdownFilter(eleventyConfig);

  // Shortcodes
  randomPhrase(eleventyConfig);

  // Fetch notes data at build time and sort by most recently updated
  eleventyConfig.addCollection("sortedNotes", async () => {
    const notes = await fetchNotes();
    return notes.sort((a, b) => {
      return new Date(b._updatedAt) - new Date(a._updatedAt);
    });
  });

  // Fetch topics data at build time
  eleventyConfig.addCollection("topics", async () => {
    const topics = await fetchTopics();
    return topics;
  });

  return {
    dir: { input: "src", output: "dist", data: "_data" },
    passthroughFileCopy: true,
    templateFormats: ["njk", "md", "css", "html", "yml", "png"],
    htmlTemplateEngine: "njk",
  };
};
