import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

const opts = {
  theme: {
    themes: {
      light: {
        primary: colors.red.darken4,
        secondary: colors.red.darken1,
        accent: colors.orange.accent3,
        text: colors.shades.white,
      },
    },
  },
};

export default new Vuetify(opts);
