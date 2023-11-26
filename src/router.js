import { createWebHashHistory, createRouter } from "vue-router";

import HomeView from "./views/HomeView.vue";
import ContactsView from "./views/ContactsView.vue";
import AboutView from "./views/AboutView.vue";
import ProjectsView from "./views/ProjectsView.vue";
import SingleProjectView from "./views/SingleProjectView.vue";
import NotFound from "./views/NotFound.vue";



const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/Contacts',
        name: 'Contacts',
        component: ContactsView
    },

    {
        path: '/About',
        name: 'About',
        component: AboutView
    },

    {
        path: '/Projects',
        name: 'Projects',
        component: ProjectsView
    },

    {
        path: '/project/:slug',
        name: 'project',
        component: SingleProjectView
    },

    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound
    },

]


const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export { router }