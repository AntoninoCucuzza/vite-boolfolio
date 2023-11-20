import { createWebHashHistory, createRouter } from "vue-router";

import HomeView from "./views/HomeView.vue";
import ContactsView from "./views/ContactsView.vue";
import AboutView from "./views/AboutView.vue";
import ProjectsView from "./views/ProjectsView.vue";


const routes = [
    { path: '/', component: HomeView },
    { path: '/Contacts', component: ContactsView },
    { path: '/About', component: AboutView },
    { path: '/Projects', component: ProjectsView },


]


const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export { router }