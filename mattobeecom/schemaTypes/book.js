export default {
  name: 'book',
  title: 'Book',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'author',
      type: 'string',
      title: 'Author',
    },
    {
      name: 'isbn',
      type: 'string',
      title: 'ISBN',
    },
    {
      name: 'url',
      type: 'url',
      title: 'URL',
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
    },
  ],
}
