/* c:\xampp\htdocs\www\trabajos\VUE-Viutify(Materias)\materias-vue */
/* 
Footer
Agregar un color
Agregar una Imagen
Agregar Colores de Seleccion
*/
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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Ingresar-Materias.vue')
  },
  {
    path: '/Tareas',
    name: 'Tareas',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Tareas.vue')
  },
  {
    path: '/Ver-Materias',
    name: 'Ver-Materias',
    component: () => import(/* webpackChunkName: "about" */ '../views/Ver-Materias.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router
