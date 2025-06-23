import { createApp } from 'vue';
import App from './App.vue';

// Vuetify imports
import 'vuetify/styles';
import { createVuetify } from 'vuetify';

// Your global styles - commenting out styles.scss for now
// import '../assets/scss/styles.scss';
import '../assets/css/icons.css';

// Create Vuetify instance with minimal config
const vuetify = createVuetify({
  ssr: false,
});

createApp(App)
  .use(vuetify)
  .mount('#app');