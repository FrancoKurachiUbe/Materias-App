<template>
  <v-container>
  <v-simple-table dense class="mb-10">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-center">ID</th>
            <th class="text-center">Materia</th>
            <th class="text-center">Notas</th>
            <th class="text-center">Promedio</th>
            <th class="text-center">Editar / Borrar</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in local" :key="item.id">
            <td :class="item.color" class="text-center white--text">{{ item.id }}</td>
            <td :class="item.textColor" class="text-center">{{ item.titulo }}</td>
            
              <td  :class="item.textColor" class="text-center">
                <span v-for="id in item.notas" :key="id.fecha">
                    <span>| {{id.nota}} </span>
                </span>|
              </td>
            
            <td :class="item.textColor" class="text-center">{{ promedio }}</td>
            <td class="text-center">
              <v-btn fab dark x-small class="edit mr-1">
                <v-icon>
                  mdi-pencil
                </v-icon>
              </v-btn>
              <v-btn fab dark x-small class="red">
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>


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
                    <v-select
                        v-model="form_notas.id"
                        :items= "items"
                        label="Seleccione la Materia"
                        data-vv-name="select"
                        required
                      ></v-select>
                    <v-text-field v-model="form_notas.nota" label="Ingrese una nota"  counter="10"></v-text-field>
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
        promedio:0,
        items:[],
        local:[],
        sin_datos: ""
      }
  },

    mounted:function(){
    console.log("se monto")
    this.ver_local();
  },

  
  methods:{
    guardar:function(form_notas){
      form_notas = Object.assign({}, form_notas, { fecha: new Date().getTime() })
      console.log(form_notas)

      this.local=JSON.parse(localStorage.getItem("form"))
      var id = form_notas.id
      var nota = this.local[id].notas
      console.log(nota)
      nota.push(form_notas)
      console.log(nota)
      //Number.parseInt(nota)
      //console.log(nota)
      // Promedio
      var cantidad = nota.length
      console.log(cantidad)

      var subtotal = 0
      for(var i=0; i < cantidad; i++){
      
      console.log(subtotal)
      //console.log(nota[i].nota)
      subtotal += parseInt(nota[i].nota) 
      console.log(subtotal)

      }
      console.log(subtotal)
      this.promedio = subtotal / cantidad 
      console.log(this.promedio)
      localStorage.setItem("prom",JSON.stringify(this.promedio))

      localStorage.setItem("form",JSON.stringify(this.local))
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