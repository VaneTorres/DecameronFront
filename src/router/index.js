import { createRouter, createWebHistory } from 'vue-router'
import InicioVista from '../views/InicioVista.vue'

const routes = [
  {
    path: '/',
    name: 'inico',
    component: InicioVista
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
