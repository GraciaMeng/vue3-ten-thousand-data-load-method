import {
  defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const base = mode === 'production' ? '/vue3-ten-thousand-data-client/' : ''
  return {
    base,
    build: {
      rollupOptions: {
        output: {
          chunkFileNames: 'static/js/[name]-[hash].js',
          entryFileNames: 'static/js/[name]-[hash].js',
          assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
          manualChunks(id) {
            if (id.includes('element-plus')) {
              return '_element-plus'
            } else if (id.includes('icons-vue')) {
              return '_element-plus__icons'
            } else if (id.includes('lodash')) {
              return '_lodash'
            } else if (id.includes('node_modules')) {
              return 'vendor'
            }
          }
          // manualChunks(id) {
          //   if (id.includes('node_modules')) {
          //     return id.toString().split('node_modules/')[1].split('/')[0].toString();
          //   }
          // }
        }
      }
    },
    plugins: [
      vue(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
    optimizeDeps: ['element-plus/es', 'element-plus/dist/index.css']
  }
})