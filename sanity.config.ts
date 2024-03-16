import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemaTypes'
import {visionTool} from '@sanity/vision'

export default defineConfig({
  name: 'default',
  title: 'sanity-crash-course',

  projectId: 'cclahlyn',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
