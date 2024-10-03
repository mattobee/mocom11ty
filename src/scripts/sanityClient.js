import { createClient } from '@sanity/client';

// Retrieve the Sanity API token from environment variables
const apiToken = process.env.SANITY;

// Ensure the API token is defined
if (!apiToken) {
  throw new Error('Sanity API token is not defined. Please set the SANITY environment variable.');
}

// Create and configure the Sanity client
const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2024-10-03', // Use the current date or a specific version date
  useCdn: true, // `true` to use the CDN for faster responses, `false` for fresh data
  token: apiToken // Add the API token here
});

export default client;