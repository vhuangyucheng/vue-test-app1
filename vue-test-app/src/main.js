import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import { Notify } from 'vant';
import 'vant/es/notify/style';

import App from './App.vue'
import myRouter from './router'



const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.use(myRouter)
// app.use(Notify);

app.mount('#app')
