// fetchNotes.js
// const sanityClient = require('./sanityClient');

async function fetchNotes() {
  // Return a hard-coded list of notes for debugging
  return [
    {
      _id: '1',
      title: 'Note 1',
      slug: 'note-1',
      content: 'This is the content of note 1.'
    },
    {
      _id: '2',
      title: 'Note 2',
      slug: 'note-2',
      content: 'This is the content of note 2.'
    },
    {
      _id: '3',
      title: 'Note 3',
      slug: 'note-3',
      content: 'This is the content of note 3.'
    }
  ];
}

module.exports = fetchNotes;