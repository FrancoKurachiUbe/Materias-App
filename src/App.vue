<template>
  <div id="app">
    <v-app>
      <v-navigation-drawer v-model="drawer" app>
        <v-list>
          <v-list-item links v-for="item in items" :key="item.titulo" :to="item.path">
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
        <v-toolbar-title class="white--text">FAG</v-toolbar-title>
      </v-app-bar>
      <v-main>
        <v-container fluid>
          <transition mode="out-in" enter-active-class="animate__animated animate__fadeInLeft">
            <router-view></router-view>
          </transition>
        </v-container>
      </v-main>
      <v-spacer></v-spacer>
        
      <!-- Footer -->
      <template>
        <v-footer dark padless>
          <v-card class="flex text-center" flat tile>
            <v-card-text class="">
              <v-btn href="https://www.linkedin.com/in/franco-kurachi-ub%C3%A9-325ab5205/" target="_blank" class="mr-1" dark icon>
                <v-icon size="30px">mdi-linkedin</v-icon>
              </v-btn>
              <v-btn href="https://github.com/FrancoKurachiUbe" target="_blank" class="ml-1" dark icon>
                <v-icon size="30px">mdi-github</v-icon>
              </v-btn>
              <v-btn href="https://francokurachiube.github.io/" target="_blank" class="ml-1" dark icon>
                <v-icon size="30px">mdi-web</v-icon>
              </v-btn>
            </v-card-text>
            <v-card-text class="py-1 white--text text-center">
              {{ new Date().getFullYear() }} | <strong>Copyright©Franco Kurachi Ubé | Escuela DaVinci. | Aplicaciones para Dispositivos Móviles.</strong>
            </v-card-text>
          </v-card>
        </v-footer>
      </template>
    </v-app>
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
        icono:'file-move-outline',
        path:'/Ingresar-Materias'
      },
      {
        titulo:'Tareas',
        icono:'file-edit-outline',
        path:'/Tareas'
      },
      {
        titulo:'Materias',
        icono:'file-document-outline',
        path:'/Ver-Materias'
      }
    ],
    drawer:null,
  })
}
</script>
