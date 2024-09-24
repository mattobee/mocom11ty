const sanityClient = require('@sanity/client');

const client = sanityClient({
projectId: 'eb20sjiu',
  dataset: 'production',
  useCdn: true,
});

module.exports = client;