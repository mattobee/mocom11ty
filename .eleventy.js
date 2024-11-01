import { fetchNotes } from './src/scripts/fetchNotes.js';
import { fetchTopics } from './src/scripts/fetchTopics.js';
import markdownFilter from './src/_includes/markdownFilter.js';
import randomPhrase from './src/_includes/randomPhrase.js';
import { logInfo, logError } from './src/utils/logger.js';
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

  // Fetch notes data at build time and sort by most recently updated
  eleventyConfig.addCollection('sortedNotes', async () => {
    try {
      const notes = await fetchNotes();
      logInfo(`fetchNotes fetched ${notes.length} notes`);
      return notes.sort((a, b) => {
        const dateA = new Date(a.published || a._updatedAt);
        const dateB = new Date(b.published || b._updatedAt);
        return dateB - dateA;
      });
    } catch (error) {
      logError('Error fetching notes:', error);
      return [];
    }
  });

  // Fetch topics data at build time
  eleventyConfig.addCollection('topics', async () => {
    try {
      const topics = await fetchTopics();
      logInfo(`fetchTopics fetched ${topics.length} topics`);
      return topics;
    } catch (error) {
      logError('Error fetching topics:', error);
      return [];
    }
  });

  return {
    dir: { input: 'src', output: 'dist', data: '_data' },
    passthroughFileCopy: true,
    templateFormats: ['njk', 'md', 'css', 'html', 'yml', 'png'],
    htmlTemplateEngine: 'njk',
  };
}
