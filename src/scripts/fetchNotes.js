// src/scripts/fetchNotes.js
import { fetchData } from '../utils/fetchData.js';

/**
 * Fetches notes from the Sanity dataset.
 * @returns {Promise<Array>} A promise that resolves to an array of notes.
 */
export async function fetchNotes() {
  const query = `*[_type == "note" && !(_id in path("drafts.**"))]{
    _id,
    title,
    "slug": slug.current,
    content,
    tldr,
    maturity,
    _updatedAt,
    published,
    "topics": topic[]->{title, "slug": slug.current}
  }`;
  const notes = await fetchData(query, 'Notes');
  console.log('Fetched notes:', notes); // Add logging to inspect fetched notes
  return notes;
}