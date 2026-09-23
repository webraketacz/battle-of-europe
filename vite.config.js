import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const entry = (path) => fileURLToPath(new URL(path, import.meta.url))

export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: entry('index.html'),
        // standalone test page for the terminuj.cz workshops widget
        test: entry('test/index.html'),
      },
    },
  },
})
