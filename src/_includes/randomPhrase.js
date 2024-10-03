/**
 * Adds a shortcode to generate a random phrase.
 * @param {Object} eleventyConfig - The Eleventy configuration object.
 * @returns {void}
 */
export default function (eleventyConfig) {
  eleventyConfig.addShortcode('randomPhrase', () => {
    // List of phrases to choose from
    const phrases = [
      'Chocolate Hobnobs',
      'lemon drizzle cake',
      'belgian buns',
      'LEGO',
      'the storylines of Paw Patrol',
      'Forrero Rocher',
      'oven chips',
      'expensive hobbies',
      'Star Trek',
      'Labrador Retrievers',
      'procrastination',
      'not finishing books',
      'drawing rectangles',
      'opening tabs',
      'spilling coffee',
    ];

    // Select a random phrase from the list
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    return randomPhrase;
  });
}