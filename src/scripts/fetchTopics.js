// fetchTopics.js
const sanityClient = require('./sanityClient');

async function fetchTopics() {
  const query = `*[_type == "topic"]{
    _id,
    title,
    "slug": slug.current
  }`;

  const topics = await sanityClient.fetch(query);
  console.log('topics', topics);
  return topics;
}

module.exports = fetchTopics;