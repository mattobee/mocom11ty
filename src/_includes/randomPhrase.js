// src/_includes/randomPhraseShortcode.js
module.exports = function (eleventyConfig) {
  eleventyConfig.addShortcode('randomPhrase', () => {
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

    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    return randomPhrase;
  });
};