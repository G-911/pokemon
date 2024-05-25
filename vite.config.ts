import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
<<<<<<< HEAD
import vueJsx from '@vitejs/plugin-vue-jsx'
=======
>>>>>>> f57388c50c19727adc6e3e1c0899e1e4c45af41c

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
<<<<<<< HEAD
    vueJsx(),
=======
>>>>>>> f57388c50c19727adc6e3e1c0899e1e4c45af41c
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
