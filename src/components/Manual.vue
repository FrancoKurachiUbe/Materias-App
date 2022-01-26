<template>
    <v-container>
        <v-stepper v-model="e1">
                <v-stepper-header>
                <v-stepper-step editable :complete="e1 > 1" step="1">Ingresa la Materia</v-stepper-step>

                <v-divider></v-divider>
                <v-stepper-step editable :complete="e1 > 2" step="2">Agregar Tareas</v-stepper-step>

                <v-divider></v-divider>
                <v-stepper-step editable step="3">Administrar Materias</v-stepper-step>
            </v-stepper-header>

            <v-stepper-items>
                <v-stepper-content step="1">
                    <v-card class="mb-12" color="grey lighten-1" height="500px">
                        <img src="../assets/IngresarMateria.png"/>
                    </v-card>
                </v-stepper-content>

                <v-stepper-content step="2">
                    <v-card class="mb-12" color="grey lighten-1" height="500px">
                        <img src="../assets/IngresarTareas.png"/>
                    </v-card>
                </v-stepper-content>

                <v-stepper-content step="3">
                    <v-card class="mb-12" color="grey lighten-1" height="500px">
                        <img src="../assets/AdminMaterias.png"/>
                    </v-card>
                </v-stepper-content>
            </v-stepper-items>
        </v-stepper>
    </v-container>
</template>

<script>
  export default {
    data () {
      return {
        e1: 1,
      }
    },
  }
</script>