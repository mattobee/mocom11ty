// src/_includes/markdownFilter.js
const markdownIt = require('markdown-it');
const md = new markdownIt();

module.exports = function (eleventyConfig) {
  eleventyConfig.addNunjucksFilter('markdown', (content) => {
    return md.render(content);
  });
};