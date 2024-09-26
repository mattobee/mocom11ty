// src/_includes/randomPhraseShortcode.js
module.exports = function (eleventyConfig) {
  eleventyConfig.addShortcode('randomPhrase', () => {
    const phrases = [
      'Chocolate Hobnobs',
      'lemon drizzle cake',
      'coffee drinking',
      'LEGO',
      'rabbit holes',
      'obscure facts',
      'expensive gadgets',
      'Star Trek'
    ];

    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    return randomPhrase;
  });
};