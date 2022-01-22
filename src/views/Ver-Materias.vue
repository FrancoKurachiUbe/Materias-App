<template>
  <!-- <v-simple-table 
    class="elevation-1">
    <template v-slot:default>
      <v-card>
            <v-card-title>
              <span class="text-h5">Administrar Materias</span>
            </v-card-title>
      </v-card>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6" md="5">
              Materias
            </v-col>
            <v-col cols="12" sm="2" md="3">
              Notas
            </v-col>
            <v-col cols="12" sm="2" md="2">
              Promedio
            </v-col>
            <v-col cols="12" sm="2" md="2">
              Editar/Borar
            </v-col>
          </v-row>
        </v-container>
        </v-card-text> 
        <v-card-text v-for="item in local" :key="item.id">
        <v-container>
          <v-row>
            <v-col  cols="12" sm="6" md="5">
              {{item.titulo}}
            </v-col>
            <v-col cols="12" sm="2" md="3">
              Notas
            </v-col>
            <v-col cols="12" sm="2" md="2">
              Promedio
            </v-col>
            <v-col cols="12" sm="2" md="2">
              <v-btn fab dark x-small class="primary mr-2">
              <v-icon>
                mdi-pencil
              </v-icon>
            </v-btn>
            
            <v-btn fab dark x-small class="red mr-2">
              <v-icon>
                mdi-delete
              </v-icon>
            </v-btn>
            </v-col>
          </v-row>
          
        </v-container>
        </v-card-text>
    </template>
  </v-simple-table> -->

<v-container>
<v-simple-table dense>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-center">
            ID
          </th>
          <th class="text-center">
            Materia
          </th>
          <th class="text-center">
            Notas
          </th>
          <th class="text-center">
            Promedio
          </th>
          <th class="text-center">
            Editar / Borrar
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in local" :key="item.id">
          <td class="text-center">{{ item.id }}</td>
          <td class="text-center primary--text">{{ item.titulo }}</td>
          <td class="text-center">{{ item.id }}</td>
          <td class="text-center">{{ item.id }}</td>
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
          <!-- <td>{{ item. }}</td> -->
        </tr>
      </tbody>
       
  
    </template>
  </v-simple-table> 
  </v-container>
</template>

<script>
   export default{
      name: "Ver-Materias",

      data:function(){
      return {
        local:[],
        sin_datos: ""
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
          console.log(this.local)
      }
      /* if(this.local.length == 0){
        this.sin_datos ="Es hora de cargar datos !!"
      } */
    }

  }
}
</script>