import { createApp } from 'vue'
import App from './App.vue'

console.log('22--', process.env.NODE_ENV, import.meta.env.MODE)

createApp(App).mount('#app')
