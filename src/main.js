import { createApp } from 'vue';
import App from './App.vue';

// Vuetify imports
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

// Your global styles - commenting out styles.scss for now
// import '../assets/scss/styles.scss';
import '../assets/css/icons.css';

// Create Vuetify instance with all components
const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'dark'
  },
  ssr: false,
});

const app = createApp(App);
app.use(vuetify);
app.mount('#app');