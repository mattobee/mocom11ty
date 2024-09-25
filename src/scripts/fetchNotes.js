// fetchNotes.js
const sanityClient = require('./sanityClient');

async function fetchNotes() {
  const query = `*[_type == "note"]{
    _id,
    title,
    "slug": slug.current,
    content,
    _updatedAt
  }`;

  const notes = await sanityClient.fetch(query);
  return notes;
}

module.exports = fetchNotes;