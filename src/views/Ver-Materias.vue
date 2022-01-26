<template>
  <v-container>
    <v-simple-table dense class="mb-10">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-center">ID</th>
            <th class="text-center">Materia</th>
            <th class="text-center">Tareas</th>
            <th class="text-center">Notas</th>
            <th class="text-center">Promedio</th>
            <th class="text-center">Editar / Borrar</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in local" :key="item.id">
            <td :class="item.color" class="text-center white--text">{{ item.id }}</td>
            <td  class="text-center text-capitalize">{{ item.titulo }}</td>
            <td  class="text-center">{{item.tareas.length}}</td>
            <td   class="text-center">
              <span v-for="id in item.notas" :key="id.fecha">
                <span>| {{id.nota}} </span>
              </span>|
            </td>
            <td  class="text-center">{{ item.promedio }}</td>
            <td class="text-center">
              <v-btn @click="editItem(item)" fab dark x-small class="edit mr-1">
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
              <v-btn @click="deleteItem(item)" fab dark x-small class="red">
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </td>
          </tr>

          <!-- Borrar Item -->
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h5">¿Estas seguro que quieres borrar toda la Materia?</v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDelete">No</v-btn>
                <v-btn color="blue darken-1" text @click="deleteItemConfirm">Si</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>

          <!-- Editar Item -->
          <v-dialog v-model="dialog" max-width="500px">
          <v-card>
            <v-card-title>
              <span class="text-h5">Editar Materia</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.titulo" label="Nombre de la Materia"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-select v-model="editedItem.color" label="Seleccione un color" data-vv-name="select" required :items="colors">
                    </v-select>
                  </v-col>
                  <v-col v-for="item in editedItem.notas"
                  :key="item.fecha"
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="item.nota"
                      label="Nota"
                    ></v-text-field>
                  </v-col>
                  
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn text outlined class="red white--text" @click="close">Cancel</v-btn>
              <v-btn color="succes" class="green white--text" text @click="save">Guardar</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        </tbody>
      </template>
    </v-simple-table>

<!-- Formulario para el Ingreso de notas -->
    <template class="mt-4">
      <v-expansion-panels>
        <v-expansion-panel>
          <v-expansion-panel-header>
            Ingresar Notas
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-card class="mx-auto" outlined>
              <v-list-item three-line>
                <v-list-item-content>
                    <v-form
                      ref="form">
                      <v-select v-model="form_notas.id" :items= "items" label="Seleccione el ID de la Materia" data-vv-name="select" required
                        ></v-select>
                      <v-text-field v-model="form_notas.nota" label="Ingrese una nota"  counter="10"></v-text-field>
                      <ul v-for="item in errNota" :key="item">
                            <li class="red--text mb-4">{{item}}</li>
                        </ul>
                      <v-btn color="succes" class="green white--text" text  @click="guardar(form_notas)">Guardar</v-btn>
                      </v-form>
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </template>
  </v-container>
</template>

<script>
   export default{
      name: "Ver-Materias",

      data:function(){
      return {
        form_notas: {
          nota:null,
          fecha:"",
          id:null
        },
        dialogDelete: false,
        dialog: false,
        colors:["indigo", "purpura","rojo","azul","ambar","marron","verde"],
        items:[],
        local:[],
        sin_datos: "",
        editedItem: {
        titulo: '',
        notas:[],
        color:"",
        },
        errNota:[]
      }
  },

  mounted:function(){
  console.log("se monto")
  this.ver_local();
  },

  
  methods:{
    guardar:function(form_notas){
      form_notas = Object.assign({}, form_notas, { fecha: new Date().getTime() })
      //console.log(form_notas)
      
      // Notas
      this.local=JSON.parse(localStorage.getItem("form"))
      var id = form_notas.id
      var nota = this.local[id].notas
      //parseInt(nota)
      console.log(form_notas.nota)
      
        if(form_notas.nota > 10){
          this.errNota.push('La Nota debe ser entre 0 y 10')
        }
        if(this.errNota.length == 0){
          
          nota.push(form_notas)
          
          // Promedio
          var cantidad = nota.length
          var subtotal = 0
            for(var i=0; i < cantidad; i++){
            subtotal += parseInt(nota[i].nota) 
            //console.log(subtotal)
            }
          this.local[id].promedio = subtotal / cantidad 
          //console.log(this.promedio)
          
        }
      localStorage.setItem("prom",JSON.stringify(this.promedio))
      localStorage.setItem("form",JSON.stringify(this.local))
    },

    // Borrar Items
    deleteItem (item) {
        this.editedIndex = this.local.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },
    deleteItemConfirm () {
      this.local.splice(this.editedIndex, 1)
      localStorage.setItem("form",JSON.stringify(this.local))
      this.closeDelete()
    },
    closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },
    // Editar Materias
    editItem (item) {
        this.editedIndex = this.local.indexOf(item)
        //console.log(this.editedIndex)
        this.editedItem = Object.assign({}, item)
        //console.log(this.editedItem.notas[0].nota)
        var cantidad = this.editedItem.notas.length
        console.log(cantidad)
        //console.log(this.editedItem.color)
         
        /* var textoColor = this.editedItem.color + "--text"
        this.editedItem.textColor = textoColor
        console.log(this.editedItem.textColor) */
        this.dialog = true
      },
    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },
    save () {
      if (this.editedIndex > -1) {
        Object.assign(this.local[this.editedIndex], this.editedItem)
      } else {
        this.local.push(this.editedItem)
      }
      localStorage.setItem("form",JSON.stringify(this.local))
      this.close()
    },

    ver_local:function(){  
      if(localStorage.form){
      this.local=JSON.parse(localStorage.getItem("form")) 
          
          console.log(this.local)
          var total = this.local.length
          for(var i=0; i < total; i++){
            this.items.push(this.local[i].id)
          }
          //console.log(this.items)
      }
      
      this.promedio=JSON.parse(localStorage.getItem("prom")) 
    }
  }
}
</script>