import { createClient } from '@sanity/client';
const apiToken = process.env.SANITY;

const client = createClient({
  projectId: 'eb20sjiu',
  dataset: 'production',
  apiVersion: '2024-10-03',
  useCdn: true,
  token: apiToken
});

export default client;