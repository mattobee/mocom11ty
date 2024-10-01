// fetchNotes.js
import sanityClient from './sanityClient.js';

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

  const notes = await sanityClient.fetch(query);
  console.log('notes', notes);
  return notes;
}

export default fetchNotes;