<template>
  <v-container>
    <v-form ref="form">
      <v-text-field v-model="form_data.titulo" label="Ingrese el Nombre de la Materia"  counter="10">
      </v-text-field>
      <v-select v-model="form_data.color" label="Seleccione un color" data-vv-name="select" required :items="colors">
      </v-select>
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
        color:[],
        textColor:"",
        id:null,
      },
      arr:[],
      colors:["indigo", "purpura","rojo","azul","ambar","marron"]
    }
  },
  methods:{
    guardar:function(form_data){
      form_data = Object.assign({}, form_data, { fecha: new Date().getTime() })
      //console.log(form_data.id)

    if(!localStorage.form){
      this.arr=[]
    }else{
      this.arr=JSON.parse(localStorage.getItem("form"))
      }
  
  var id = this.arr.length
  form_data.id = id
  console.log(form_data.id)

  console.log(form_data.color)
  //console.log(arr.color)
  var color = form_data.color
  color += "--text" 
  form_data.textColor= color
  //form_data.textColor.push(color)
  console.log(form_data)
  /* textColor.push(form_data.color)
  console.log(textColor) */

  /* var cantidad = this.arr.length
      for(var i=0; i < cantidad; i++){
        var color = this.arr[i].color 
        color +="--text"
        console.log(color)
      } */

  this.arr.push(form_data)
  console.log(this.arr)
  localStorage.setItem("form",JSON.stringify(this.arr))
  //this.$router.push('/fav');
    }
  }

}

</script>