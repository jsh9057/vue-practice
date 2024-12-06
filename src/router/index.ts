import Feed from "../views/FeedView.vue";
import {createRouter, createWebHistory} from 'vue-router';
import UserFeed from "../views/UserFeedView.vue";
import Profile from "../views/ProfileView.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Feed
    },
    {
        path: '/my-feed',
        name: 'MyFeed',
        component: UserFeed
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;