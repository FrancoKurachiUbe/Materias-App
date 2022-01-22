<template>
  <v-row justify="center">
    <v-expansion-panels inset>
      <v-expansion-panel class="primary white--text"
        v-for="item in local"
        :key="item.id"
      >
        <v-expansion-panel-header>{{item.titulo}}</v-expansion-panel-header>
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
                
                <!-- <v-list-item-title class="text-h5 mb-2">
                  Tareas
                </v-list-item-title> -->
                  <v-simple-table>
                    <template v-slot:default>
                      <thead>
                        <tr>
                          <th class="text-left">
                            Tareas
                          </th>
                          <!-- <th class="text-left">
                            Calories
                          </th> -->
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="tar in item.tareas"
                        :key="tar.fecha"
                        
                        >
                          <td>{{tar.tareas}}</td>
                          <!-- <td>{{tar.id}}</td> -->
                          <!-- <td>{{ item.tareas }}</td> -->
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                  <v-form
                    ref="form">
                    <v-text-field :key="item.fecha" v-model="form_tareas.tareas" label="tareas"  counter="10"></v-text-field>

                      <v-select
                        v-model="form_tareas.id"
                        :items= "item.id"
                        label="Select"
                        data-vv-name="select"
                        required
                      ></v-select>
                    <v-btn
                            color="primary"
                            text
                            @click="guardar(form_tareas)">
                            Guardar
                    </v-btn>
                    
                    </v-form>
              </v-list-item-content>

              <v-list-item-avatar
                tile
                size="80"
                >
                <v-img
                  lazy-src="https://picsum.photos/id/11/10/6"
                  max-height="150"
                  max-width="250"
                  src="https://picsum.photos/id/11/500/300"
                  >
                </v-img>
              </v-list-item-avatar>
            </v-list-item>

            <!-- <v-card-actions>
              <v-btn
                outlined
                rounded
                text
              >
                Button
              </v-btn>
            </v-card-actions> -->
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-row>
</template>

<script>
  export default {
    data:function(){
      return {
        form_tareas: {
          tareas:"",
          fecha:""
        },
        arr:[],
        local:[],
        sin_datos: "",
        tareas:[]
      }
    },
    mounted:function(){
      console.log("se monto")
      this.ver_local();
    },
    methods:{
      guardar:function(form_tareas){
      form_tareas = Object.assign({}, form_tareas, { fecha: new Date().getTime() })
      console.log(form_tareas)

      this.local=JSON.parse(localStorage.getItem("form"))
      var id = form_tareas.id
      var tarea = this.local[id].tareas
      console.log(tarea)
      tarea.push(form_tareas)
      console.log(tarea)
      localStorage.setItem("form",JSON.stringify(this.local))

      },
      ver_local:function(){
    
        if(localStorage.form){
        this.local=JSON.parse(localStorage.getItem("form")) 
        //console.log(this.local[1].titulo)
        console.log(this.local[0].tareas)
        console.log()
        

        }
      }
    }
}
</script>