// fetchTopics.js
import sanityClient from './sanityClient.js';

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

export default fetchTopics;