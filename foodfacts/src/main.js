import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import Card from 'primevue/card';
import InputText from 'primevue/inputtext';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import '/src/style.css';

import router from './router';
import i18n from './i18n';

import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';

const app = createApp(App);
app.use(PrimeVue);
app.component('pv-button', Button);
app.component('pv-card', Card);
app.component('pv-input', InputText);
app.use(router);
app.use(i18n);
app.config.globalProperties.$axios = axios;
app.mount('#app');
