import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  build: {
    lib: {
      entry: path.resolve(__dirname, '/src/ssr.tsx'),
      name: 'client',
      formats: ['cjs'],
    },
    rollupOptions: {
      output: {
        dir: 'dist-ssr',
      },
    },
  },
  ssr: {
    optimizeDeps: {
      include: ['antd'],
    },
  },
})
