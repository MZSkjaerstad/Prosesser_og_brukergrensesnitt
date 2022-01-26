import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { store } from '../store/';

import App from './App.vue';
import routes from '../routes.js';

const app_router = createRouter({
	routes: routes,
	history: createWebHistory()
});

createApp(App)
	.use(store)
	.use(app_router)
	.mount('#app');