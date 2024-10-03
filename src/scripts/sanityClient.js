import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'eb20sjiu',
  dataset: 'production',
  apiVersion: '2024-10-03',
  useCdn: true,
});

export default client;