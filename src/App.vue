
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/Ingresar-Materias">ingresar Materias</router-link>
    </div>

  <v-app>
    <v-navigation-drawer
      v-model="drawer"
        app >
      <v-list>
        <v-list-item links 
          v-for="item in items"
          :key="item.titulo"
          :to="item.path">
          <v-list-item-action>
            <v-icon class="secondary--text">mdi-{{item.icono }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="secondary--text"> {{ item.titulo }}</v-list-item-title>
            
          </v-list-item-content>
          
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar class="primary" app>
     <v-app-bar-nav-icon class="white--text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="white--text">Materias</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        
      
         <transition mode="out-in" enter-active-class="animate__animated animate__fadeInLeft">
          <router-view></router-view>
        </transition>

      </v-container>

    </v-main> 
    
  </v-app>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    items: [
      {
        titulo:'Home',
        icono:'home',
        path:'/'
      },
      {
        titulo:'Ingresar',
        icono:'format-list-checkbox',
        path:'/Ingresar-Materias'
      },
      {
        titulo:'Ver',
        icono:'format-list-checkbox',
        path:'/Ver-Materias'
      }
    ],
    drawer:null,
  })
}

</script>
