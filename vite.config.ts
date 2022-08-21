import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

let Plus = ["axios", "vue-router", 'vue']
export default defineConfig({
  server: {
    open: true,
    port: 3001
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "comps": path.resolve(__dirname, "./src/components")
    }
  },

  build: {
    outDir: 'dist',
    assetsDir: `assets/`,
    cssCodeSplit: true,
    assetsInlineLimit: 1024 * 5,
    rollupOptions: {
      external: Plus,
      output: {
        assetFileNames: 'css/[name]_[hash].css',
        chunkFileNames: 'js/[name]_[hash].js',
        entryFileNames: 'js/[name]_[hash].js',
        manualChunks: {
          Plus: [...Plus, "element-plus"]
        },
        minifyInternalExports: false,
      },
    }
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/assets/css/variables.scss";`
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
  ]
})
