import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/lara-dark-teal/theme.css';
import store from './vuex/store'; // Импортируем ваше хранилище Vuex
import './style.css'; // Импортируем ваши стили после импорта PrimeVue

const app = createApp(App);

app.use(PrimeVue);
app.use(store); // Используем ваше хранилище Vuex с помощью метода use()
app.mount('#app');

