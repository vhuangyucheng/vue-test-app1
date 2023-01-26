import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: () => import('/src/views/HomePage.vue')
    },
    {
      path: '/',
      name: 'CateList',
      component: () => import('/src/views/CateList.vue')
    }
  ]
})

export default router

