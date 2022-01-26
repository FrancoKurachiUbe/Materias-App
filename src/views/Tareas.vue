<template>
  <v-container>
    <v-row justify="center">
      <v-expansion-panels inset v-for="item in local" :key="item.id">
        <v-expansion-panel v-bind:class="item.color" class="white--text mb-3">
          <v-expansion-panel-header class="text-capitalize">{{item.id}}. {{item.titulo}}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-card class="mx-auto" outlined>
              <v-list-item three-line>
                <v-list-item-content>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="10" md="10">
                        <th class="text-left">Tareas</th>
                      </v-col>
                      <v-col cols="12" sm="2" md="2">
                        <th class="text-left">Botones</th>
                      </v-col>
                    </v-row>
                  </v-container>
                  <v-container>
                    <v-row v-for="tar in item.tareas" :key="tar.fecha">
                      <v-col :class="tar.css" cols="12" sm="10" md="10">
                        <td class="text-left">{{tar.tareas}}</td>
                      </v-col>
                      <v-col :class="tar.css" cols="12" sm="2" md="2">
                        <td class="text-left">
                          <v-btn @click="checkItem(tar)" fab dark small class="green mr-3">
                            <v-icon>mdi-check-circle</v-icon>
                          </v-btn>
                          <v-btn @click="deleteItem(tar)" fab dark small class="red">
                            <v-icon>mdi-delete</v-icon>
                          </v-btn>
                        </td>
                      </v-col>
                    </v-row>
                  </v-container>
                  <v-form ref="form">
                    <v-text-field :key="item.fecha" v-model="form_tareas.tareas" label="Ingrese una tarea"  counter="10"></v-text-field>
                    <v-select v-model="form_tareas.id" :items= "item.id" label="Seleccione el ID" data-vv-name="select" required></v-select>
                    <v-btn color="succes" class="green white--text" text  @click="guardar(form_tareas)">Guardar</v-btn>
                  </v-form>
                    <ul v-for="item in err" :key="item">
                      <li class="red--text mt-4">{{item}}</li>
                    </ul>
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data:function(){
      return {
        form_tareas: {
          tareas:"",
          fecha:"",
          css:"",
          id:null
        },
        err:[],
        local:[],
        items:[],
        sin_datos: "",
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
      // Validaciones:
      if(form_tareas.tareas < 3){
        this.err.push('La Tarea Debe tener mas de 3 caracteres.')
      }
      if(form_tareas.tareas == ""){
        this.err.push('Debe Ingresar el nombre de la Tarea.')
      }
      if(form_tareas.id == null){
        this.err.push('Debe seleccionar el ID de la Tarea.')
      }
      if(this.err.length == 0){
        this.local=JSON.parse(localStorage.getItem("form"))
        var id = form_tareas.id
        var tarea = this.local[id].tareas
        console.log(tarea)
        tarea.push(form_tareas)
        console.log(tarea)
      }
      localStorage.setItem("form",JSON.stringify(this.local))

      },
      //Borrar Item de Tareas
      deleteItem(tar) {
        this.local[tar.id].tareas.splice(this.editedIndex, 1)
        localStorage.setItem("form",JSON.stringify(this.local))
      },
      checkItem(tar){
        console.log(tar)
          if(tar.css == "green white--text"){
            tar.css = ""
          }else {
            tar.css = "green white--text"
          }
        
       console.log(tar)
       localStorage.setItem("form",JSON.stringify(this.local))
      },
      ver_local:function(){
    
        if(localStorage.form){
        this.local=JSON.parse(localStorage.getItem("form")) 
        //console.log(this.local[1].titulo)
        //console.log(this.local[0].tareas)
        //console.log()
        console.log(this.local)
          var total = this.local.length
          for(var i=0; i < total; i++){
            this.items.push(this.local[i].id)
          }
        }
      }
    }
}
</script>