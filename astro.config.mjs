import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import rehypeMermaid from './src/plugins/rehype-mermaid.mjs';

export default defineConfig({
  integrations: [react()],
  output: 'static',
  markdown: {
    rehypePlugins: [rehypeMermaid],
  },
});
