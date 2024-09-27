export default {
    name: 'note',
    title: 'Note',
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
      // digital garden maturity level
      {
        name: 'maturity',
        type: 'string',
        title: 'Maturity',
        options: {
          list: [
            { title: 'Seedling', value: 'seedling' },
            { title: 'Budding', value: 'budding' },
            { title: 'Evergreen', value: 'evergreen' },
            { title: 'Worth mentioning', value: 'mention' },
          ],
        },
        initialValue: 'seedling',
      },
      {
        name: 'content',
        type: 'markdown',
        title: 'Content'
      },
      {
        name: 'tldr',
        type: 'markdown',
        title: 'TLDR'
      },
    ],
  }