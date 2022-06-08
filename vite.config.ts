// https://www.csdn.net/tags/MtTaAgysMjg3NjQzLWJsb2cO0O0O.html
// 
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  // base: path.resolve(__dirname, './dist'),
  base: './',
  plugins: [vue()]
})
