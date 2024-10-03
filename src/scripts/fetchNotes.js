import sanityClient from './sanityClient.js';
import { logInfo, logError } from '../utils/logger.js';

/**
 * Fetches notes from the Sanity dataset.
 * @returns {Promise<Array>} A promise that resolves to an array of notes.
 */
async function fetchNotes() {
  const query = `*[_type == "note"]{
    _id,
    title,
    "slug": slug.current,
    content,
    tldr,
    maturity,
    _updatedAt,
    "topics": topic[]->{title, "slug": slug.current}
  }`;

  try {
    const notes = await sanityClient.fetch(query);
    logInfo(`fetchNotes fetched ${notes.length} notes`);
    return notes;
  } catch (error) {
    logError('Error fetching notes:', error);
    throw new Error('Failed to fetch notes');
  }
}

export default fetchNotes;