const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: 'eb20sjiu',
  dataset: 'production',
  useCdn: true,
});

module.exports = client;