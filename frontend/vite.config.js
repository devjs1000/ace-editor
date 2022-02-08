import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  proxy: {
    '/api/*': {
      target: 'http://localhost:8080',
      changeOrigin: true,
      secure:false
      // isSecureContext:false,
      
      // changeOrigin: true,
      // rewrite: path => path.replace('/api', ''),
    }
  },
  plugins: [react()]
})
