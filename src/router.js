import { createRouter, createWebHistory } from 'vue-router';
import ReadLater from './components/ReadLater.vue';
import Home from './components/Home.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/read-later', component: ReadLater },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
