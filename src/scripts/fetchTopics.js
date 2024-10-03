// src/scripts/fetchTopics.js
import { fetchData } from '../utils/fetchData.js';

/**
 * Fetches topics from the Sanity dataset.
 * @returns {Promise<Array>} A promise that resolves to an array of topics.
 */
export async function fetchTopics() {
  const query = `*[_type == "topic"]{
    _id,
    title,
    "slug": slug.current
  }`;
  return fetchData(query, 'Topics');
}