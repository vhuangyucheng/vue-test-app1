import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/views/HomePage.vue'
import CateList from '/src/views/CateList.vue'
import ListMachine from "../views/ListMachine.vue";
import ListTicket from "../views/ListTicket.vue";
import AddTicket from "../views/AddTicket.vue";
import CloseTicket from "../views/CloseTicket.vue"



const myRouter = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/HomePage',
      name: 'home',
      component: Home
    },
    {
      path: '/',
      name: 'HomePage',
      component: Home
    },
    {
      path: '/listMachine',
      name: 'listMachine',
      component: ListMachine
    },
    {
      path: '/listTicket',
      name: 'listTicket',
      component: ListTicket
    },
    {
      path: '/addTicket',
      name: 'addTicket',
      component: AddTicket
    },
    {
      path: '/closeTicket',
      name: 'closeTicket',
      component: CloseTicket
    },
    {
      path: '/CateList',
      name: 'CateList',
      component: CateList
    }
  ]
})

export default myRouter

