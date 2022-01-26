/* c:\xampp\htdocs\www\trabajos\VUE-Viutify(Materias)\materias-vue */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Ingresar-Materias',
    name: 'Ingresar-Materias',
    component: () => import('../views/Ingresar-Materias.vue')
  },
  {
    path: '/Tareas',
    name: 'Tareas',
    component: () => import('../views/Tareas.vue')
  },
  {
    path: '/Ver-Materias',
    name: 'Ver-Materias',
    component: () => import('../views/Ver-Materias.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
