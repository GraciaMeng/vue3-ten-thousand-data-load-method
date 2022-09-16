import {
  defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/vue3-ten-thousand-data-client',
  build: {
    rollupOptions: {
      base: "/vue3-ten-thousand-data-client"
    }
  },
  plugins: [vue()]
})