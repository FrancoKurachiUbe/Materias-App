import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: colors.blue.darken4, // #E53935
            secondary: colors.lightBlue.darken3, // #FFCDD2
            edit:colors.lightBlue.darken1,
            white: colors.shades.white,// #FFFFFF
            red: colors.red.accent4,
            green : colors.green.base,
            //Colores del usuario
            indigo: colors.indigo.base, // #3F51B5
            purpura: colors.purple.base, // #9C27
            rojo : colors.red.base,
            azul : colors.blue.base,
            ambar : colors.amber.base,
            marron : colors.brown.base,

          },
        },
      },
});
