import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import Projects from './pages/Projects.vue';
import ErrorNotFund from './pages/ErrorNotFund.vue';
import ShowProject from './pages/ShowProject.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/projects',
            name: 'projects',
            component: Projects,
        },
        {
            path: '/projects/:slug',
            name: 'show-project',
            component: ShowProject
        },
        {
            path: '/:patchMatch(.*)*',
            name: 'not-found',
            component: ErrorNotFund,
        }
    ]
})

export default router