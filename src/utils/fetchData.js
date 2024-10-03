import sanityClient from '../scripts/sanityClient.js';
import { logInfo, logError } from './logger.js';

export async function fetchData(query, type) {
  try {
    const data = await sanityClient.fetch(query);
    logInfo(`fetch${type} fetched ${data.length} ${type.toLowerCase()}s`);
    return data;
  } catch (error) {
    logError(`Error fetching ${type.toLowerCase()}s:`, error);
    throw new Error(`Failed to fetch ${type.toLowerCase()}s`);
  }
}