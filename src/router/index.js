/* c:\xampp\htdocs\www\trabajos\VUE-Viutify(Materias)\materias-vue */
/* 
Home
    * Hacer el Home.

Ingresar-Materia
    * Agregar Imagen de la materia.

Ingresar-Tareas
    * Las Tareas solo de muestran cuando se apreta Guardar.
    * Agregar la Imagen de la MATERIA.

Ver-Materias
    * Generar la Logica de el Promedio de las materias.    
    * Agregar al LocalStorage las Notas Ingresadas.
    * Terminar el Formulario para ingresar las materias junto con el seleccionador.
    * Generar function Editar.
    * Generar function Borrar.
    
Footer
    * Icono de GitHub

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
