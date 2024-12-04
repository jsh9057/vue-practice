import Home from "../views/Home.vue";
import {createRouter, createWebHistory} from 'vue-router';
import UserFeed from "../views/UserFeed.vue";

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/feed',
        component: UserFeed
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;