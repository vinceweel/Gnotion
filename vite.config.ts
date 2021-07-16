import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({ script: { refSugar: true } })],
  base: './',
  resolve: {
    alias: {
      'vue-i18n': 'vue-i18n/index',
    },
  },
})
