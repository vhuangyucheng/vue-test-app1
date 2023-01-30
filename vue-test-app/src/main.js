import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import myRouter from './router'



const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.use(myRouter)

app.mount('#app')
