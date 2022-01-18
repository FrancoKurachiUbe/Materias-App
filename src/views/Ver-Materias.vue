<template>
  <v-row justify="center">
    <v-expansion-panels inset>
      <v-expansion-panel
        v-for="item in local"
        :key="item.titulo"
      >
        <v-expansion-panel-header>{{item.tareas}}</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-card
          class="mx-auto"
          outlined
          >
            <!-- <v-card-title>Tarea</v-card-title> -->
              <!-- <v-card-subtitle>
                <v-card-text>
                  <v-card-actions>
                    <v-card-actions>
                <v-card-text>
              <v-card-subtitle> -->
            

            <v-list-item three-line>
              <v-list-item-content>
                
                <v-list-item-title class="text-h5 mb-2">
                  Tareas
                </v-list-item-title>
                  <v-simple-table>
                    <template v-slot:default>
                      <thead>
                        <tr>
                          <th class="text-left">
                            Name
                          </th>
                          <th class="text-left">
                            Calories
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for=" ite in item.tareas"
                          :key="ite.titulo"
                        >
                          <td>{{ ite.tarea }}</td>
                          <!-- <td>{{ item.tareas }}</td> -->
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
              </v-list-item-content>

              <v-list-item-avatar
                tile
                size="80"
              ><v-img
  lazy-src="https://picsum.photos/id/11/10/6"
  max-height="150"
  max-width="250"
  src="https://picsum.photos/id/11/500/300"
></v-img></v-list-item-avatar>
            </v-list-item>

            <v-card-actions>
              <v-btn
                outlined
                rounded
                text
              >
                Button
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-row>
</template>

<script>
  export default {
    /* data: () => ({
      cards: [
        { title: 'Matematicas', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
          tareas: [],
        },
        { title: 'Filosofia', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
          tareas: [
            {nombre: "ejercicio 2"}
          ],
        },
        { title: 'Lengua', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
          tareas: [
            {nombre: "ejercicio 2"}
          ],
        },
      ],
      items: [
        { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12 },
        { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
        { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
      ],
    }), */
    data:function(){
      return {
        local:[],
        sin_datos: "",
        //tareas:[]
      }
    },
    mounted:function(){
      console.log("se monto")
      this.ver_local();
    },
    methods:{
      ver_local:function(){
    
        if(localStorage.form){
        this.local=JSON.parse(localStorage.getItem("form")) 
        //tarea = local.titulo
        
        }
        for(var i = 0;i < 9 ; i++){
          let tareas = this.local[i].tareas
          console.log(tareas)
        }

        if(this.local.length == 0){
          this.sin_datos ="Es hora de cargar datos !!"
        }
      }
    }
}
</script>