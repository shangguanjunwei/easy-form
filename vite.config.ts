import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
const resolve = (dir: string) => path.join(__dirname, dir)

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve('src'),
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData: `@import "@/style/scss/_variables.scss";`
      }
    }
  }
})
