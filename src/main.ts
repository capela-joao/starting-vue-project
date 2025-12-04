import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { useAuthStore } from './stores/auth';
import './assets/main.css';
import App from './App.vue';
import router from './router';
import { api } from './api/api';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);

const authStore = useAuthStore();
api
  .get('/users/profile', { withCredentials: true })
  .then((res) => {
    authStore.setAuth(res.data);
  })
  .catch(() => {
    authStore.logout();
  });

app.mount('#app');
