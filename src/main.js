import { createApp } from 'vue'
import App from './App.vue';
import router from './router/index.ts';


createApp(App)
    // .use(store)
    .use(router)
    .mount('#app');
