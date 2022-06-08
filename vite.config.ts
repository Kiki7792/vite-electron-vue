// https://www.csdn.net/tags/MtTaAgysMjg3NjQzLWJsb2cO0O0O.html
// 
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: './',
  resolve: {
    alias:{
      "@": resolve(__dirname,"src"),
      "@c": resolve(__dirname,"src/components"),
      "/images": "src/assets/images/" // 便捷图片路径引用
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
  }
})
