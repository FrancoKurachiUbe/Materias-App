<template>
  <v-container>
    <v-form ref="form">
      <v-text-field v-model="form_data.titulo" label="Ingrese el Nombre de la Materia"  counter="10">
      </v-text-field>
      <v-select v-model="form_data.color" label="Seleccione un color" data-vv-name="select" required :items="colors">
      </v-select>
      <ul v-for="item in err" :key="item">
          <li class="red--text mb-4">{{item}}</li>
      </ul>
      <v-btn color="succes" class="green white--text" text  @click="guardar(form_data)">Guardar</v-btn>
    </v-form>
  </v-container>
</template>

<script>
export default {
  name:"Ingresar",
  data:function(){
    return {
      form_data:{
        titulo:"",
        fecha:"",
        tareas:[],
        notas:[],
        color:"",
        promedio:0,
        textColor:"",
        id:null,
      },
      arr:[],
      err:[],
      colors:["indigo", "purpura","rojo","azul","ambar","marron","verde"]
    }
  },
  methods:{
    guardar:function(form_data){
      form_data = Object.assign({}, form_data, { fecha: new Date().getTime() })

    if(!localStorage.form){
      this.arr=[]
    }else{
      this.arr=JSON.parse(localStorage.getItem("form"))
      }
  // Validaciones:
  if(form_data.titulo < 3){
    this.err.push('La Materia Debe tener mas de 3 caracteres.')
  }
  if(form_data.titulo == ""){
    this.err.push('Debe Ingresar el nombre de la materia.')
  }
  if(form_data.color == 0){
    this.err.push('Debe seleccionar el color de la materia.')
  }
  if(this.err.length == 0){
    var id = this.arr.length
    form_data.id = id
    console.log(form_data.id)

    console.log(form_data.color)
    var color = form_data.color
    color += "--text" 
    form_data.textColor= color
    console.log(form_data)

    this.arr.push(form_data)
    console.log(this.arr)
  }  
  localStorage.setItem("form",JSON.stringify(this.arr))
    }
  }
}
</script>