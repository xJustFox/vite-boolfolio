import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import Projects from './pages/Projects.vue';
import ErrorNotFund from './pages/ErrorNotFund.vue';
import ShowProject from './pages/ShowProject.vue';
import TypeProjects from './pages/TypeProjects.vue';
import ContactUs from './pages/ContactUs.vue';
import ThanksPage from './pages/ThanksPage.vue'
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
            path: '/projects/type/:slug',
            name: 'type-projects',
            component: TypeProjects
        },
        {
            path: '/contact-us',
            name: 'contact-us',
            component: ContactUs,
        },
        {
            path: '/contact-us/thanks-you',
            name: 'thanks-you',
            component: ThanksPage,
        },
        {
            path: '/:patchMatch(.*)*',
            name: 'not-found',
            component: ErrorNotFund,
        }
    ]
})

export default router