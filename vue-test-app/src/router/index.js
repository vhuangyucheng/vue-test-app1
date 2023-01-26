import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/views/HomePage.vue'
import CateList from '/src/views/CateList.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/HomePage',
      name: 'HomePage',
      component: Home
    },
    {
      path: '/CateList',
      name: 'CateList',
      component: CateList
    }
  ]
})

export default router

