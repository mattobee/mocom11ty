import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {markdownSchema} from 'sanity-plugin-markdown'
import {schemaTypes} from './schemaTypes'

// Define and export the Sanity configuration
export default defineConfig({
  name: 'default',
  title: 'mattobee.com',

  // Project ID and dataset
  projectId: 'eb20sjiu',
  dataset: 'production',

  // Plugins to use in the Sanity Studio
  plugins: [structureTool(), visionTool(), markdownSchema()],

  // Schema configuration
  schema: {
    types: schemaTypes,
  },
})
