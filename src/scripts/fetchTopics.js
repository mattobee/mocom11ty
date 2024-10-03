import sanityClient from './sanityClient.js';
import { logInfo, logError } from '../utils/logger.js';

/**
 * Fetches topics from the Sanity dataset.
 * @returns {Promise<Array>} A promise that resolves to an array of topics.
 */
async function fetchTopics() {
  const query = `*[_type == "topic"]{
    _id,
    title,
    "slug": slug.current
  }`;

  try {
    const topics = await sanityClient.fetch(query);
    logInfo(`fetchTopics fetched ${topics.length} topics`);
    return topics;
  } catch (error) {
    logError('Error fetching topics:', error);
    throw new Error('Failed to fetch topics');
  }
}

export default fetchTopics;