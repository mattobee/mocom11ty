import eleventySass from "@11tyrocks/eleventy-plugin-sass-lightningcss";
import fetchNotes from './src/scripts/fetchNotes.js';
import fetchTopics from './src/scripts/fetchTopics.js';
import markdownFilter from './src/_includes/markdownFilter.js';
import randomPhrase from './src/_includes/randomPhrase.js';

export default function(eleventyConfig) {
  // Passthrough copy for static assets
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/scripts");

  // Add Sass plugin
  eleventyConfig.addPlugin(eleventySass);

  // Add shortcodes
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  // Add filters
  markdownFilter(eleventyConfig);

  // Add shortcodes
  randomPhrase(eleventyConfig);

  // Fetch notes data at build time and sort by most recently updated
  eleventyConfig.addCollection("sortedNotes", async () => {
    try {
      const notes = await fetchNotes();
      console.log(`Fetched ${notes.length} notes`);
      return notes.sort((a, b) => new Date(b._updatedAt) - new Date(a._updatedAt));
    } catch (error) {
      console.error('Error fetching notes:', error);
      return [];
    }
  });

  // Fetch topics data at build time
  eleventyConfig.addCollection("topics", async () => {
    try {
      const topics = await fetchTopics();
      console.log(`Fetched ${topics.length} topics`);
      return topics;
    } catch (error) {
      console.error('Error fetching topics:', error);
      return [];
    }
  });

  return {
    dir: { input: "src", output: "dist", data: "_data" },
    passthroughFileCopy: true,
    templateFormats: ["njk", "md", "css", "html", "yml", "png"],
    htmlTemplateEngine: "njk",
  };
}