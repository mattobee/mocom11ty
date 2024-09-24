// fetchNotes.js
import sanityClient from './sanityClient';

export async function fetchNotes() {
  const query = `*[_type == "note"]{
    _id,
    title,
    "slug": slug.current,
    content
  }`;

  const notes = await sanityClient.fetch(query);
  return notes;
}