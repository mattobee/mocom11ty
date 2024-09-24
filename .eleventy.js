const eleventySass = require("@11tyrocks/eleventy-plugin-sass-lightningcss");
const fetchNotes = require('./src/scripts/fetchNotes');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/scripts");

  eleventyConfig.addPlugin(eleventySass);
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  // Fetch notes data at build time
  eleventyConfig.addGlobalData("notes", async () => {
    return await fetchNotes();
  });

  return {
    dir: { input: "src", output: "dist", data: "_data" },
    passthroughFileCopy: true,
    templateFormats: ["njk", "md", "css", "html", "yml", "png"],
    htmlTemplateEngine: "njk",
  };
};
