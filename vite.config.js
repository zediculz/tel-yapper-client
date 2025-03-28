import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: './lib/main.js',
      name: 'tel-yapper',
      fileName: 'tel-yapper',
    },
  },
})
