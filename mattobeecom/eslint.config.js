import {defineConfig} from 'eslint/config'
import sanityStudio from '@sanity/eslint-config-studio'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

export default defineConfig([...sanityStudio(), eslintPluginPrettierRecommended])
