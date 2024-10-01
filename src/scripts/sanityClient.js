import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'eb20sjiu',
  dataset: 'production',
  useCdn: true,
});

export default client;