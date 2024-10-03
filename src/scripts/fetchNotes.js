// src/scripts/fetchNotes.js
import { fetchData } from '../utils/fetchData.js';

/**
 * Fetches notes from the Sanity dataset.
 * @returns {Promise<Array>} A promise that resolves to an array of notes.
 */
export async function fetchNotes() {
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
  return fetchData(query, 'Notes');
}