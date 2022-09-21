import {
  defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const base = mode === 'production' ? '/vue3-ten-thousand-data-client' : ''
  return {
    base,
    build: {
      rollupOptions: {
        base: "/vue3-ten-thousand-data-client"
      }
    },
    plugins: [vue()]
  }
})