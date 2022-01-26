<template>
  <div>
    <v-row class="mt-7 mb-7" align="center" justify="center">
      <v-col class="text-center" cols="12">
          <img style="width:50px" src="../assets/logo.png">
        <h1>Bienvenido a FAG </h1>
        <p>Una App que te permite administrar tus materias</p>
      </v-col>
    </v-row>
    <Parallax/>
    <Manual class="mt-10 pt-10 mb-7"/>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import Parallax from '@/components/Parallax.vue'
import Manual from '@/components/Manual.vue'

export default {
  name: 'Home',
  components: {
    //HelloWorld,
    Parallax,
    Manual
  }
}
</script>

