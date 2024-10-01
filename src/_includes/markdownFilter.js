// src/_includes/markdownFilter.js
import markdownIt from 'markdown-it';

const md = new markdownIt();

export default function (eleventyConfig) {
  eleventyConfig.addNunjucksFilter('markdown', (content) => {
    return md.render(content);
  });
}