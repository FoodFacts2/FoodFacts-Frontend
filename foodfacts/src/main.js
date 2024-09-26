import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import Card from 'primevue/card';
import InputText from 'primevue/inputtext';
import Sidebar from "primevue/sidebar";
import Toolbar from "primevue/toolbar";

import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import '/src/style.css';

import router from './router';
import i18n from './i18n';

import axios from 'axios';


import DataTable from 'primevue/datatable'
import Column from 'primevue/column'

import ToastService from 'primevue/toastservice'

import Row from 'primevue/row'

import Menu from 'primevue/menu'
import Dialog from 'primevue/dialog'
import Toast from 'primevue/toast'
import Dropdown from 'primevue/dropdown'
import Tag from 'primevue/tag'




axios.defaults.baseURL = 'http://localhost:3000';

const app = createApp(App);
app.use(PrimeVue);
app.component('pv-button', Button);
app.component('pv-card', Card);
app.component('pv-input', InputText);
app.component('pv-sidebar', Sidebar)
app.component('pv-toolbar', Toolbar)

    .component('pv-data-table', DataTable)
    .component('pv-column', Column)
    .component('pv-toolbar',Toolbar)
    .component('pv-input-text', InputText)
    .component('pv-button', Button)
    .component('pv-row', Row)
    .component('pv-sidebar', Sidebar)
    .component('pv-menu', Menu)
    .component('pv-dialog', Dialog)
    .component('pv-toast', Toast)
    .component('pv-dropdown', Dropdown)
    .component('pv-tag', Tag)
    .component('pv-card', Card)

app.use(router);
app.use(i18n);
app.config.globalProperties.$axios = axios;
app.mount('#app');
