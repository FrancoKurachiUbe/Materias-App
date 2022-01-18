<template>
  <!-- <v-form
    ref="form"
  >
    <v-text-field
      :counter="10"
      :rules="nameRules"
      label="Name"
      required
      v-model="form_data.titulo"
    ></v-text-field>

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="guardar(form_data)">
      Enviar
    </v-btn>
  </v-form> -->
  <v-form
    ref="form">
    <v-text-field v-model="form_data.titulo" label="Titulo"  counter="10"></v-text-field>
    <v-text-field v-model="form_data.tareas" label="tareas"  counter="10"></v-text-field>

    <v-btn
            color="primary"
            text
            @click="guardar(form_data)">
            Guardar
          </v-btn>
    
    </v-form>
</template>

<script>
export default {
  name:"Ingresar",
  data:function(){
    return {
      form_data:{
        titulo:"",
        tareas:[],
        fecha:""
      },
      arr:[]
    }
  },
  methods:{
    guardar:function(form_data){
      form_data = Object.assign({}, form_data, { fecha: new Date().getTime() })
    console.log(form_data)

    if(!localStorage.form){
      this.arr=[]
    }else{
      this.arr=JSON.parse(localStorage.getItem("form"))
      }

  //arr.push(nuevoObj)
  this.arr.push(form_data)
  localStorage.setItem("form",JSON.stringify(this.arr))
  //this.$router.push('/fav');
    }
  }

}

</script>