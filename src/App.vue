<script >
import ProjectCard from './components/ProjectCard.vue'

import { store } from './store.js'
export default {
    name: "App",
    components: {
        ProjectCard,
    },

    data() {
        return {
            store,

        }
    },

    created() {
        this.store.fetchProjects()
    }

}

</script>

<template>
    <header>
        <nav class="nav justify-content-center ">
            <a class="nav-link active" href="#" aria-current="page">About Me</a>
            <a class="nav-link" href="#">Projects</a>
            <a class="nav-link " href="#">Contacts</a>
        </nav>
    </header>
    <main>
        <div class="container">
            <div class="row g-3">

                <div class="pagination p-3 d-flex align-items-center gap-3 ">
                    <button class="btn btn-outline-light" @click="store.prev()"
                        :disabled="store.currentPage === 1">Prev</button>

                    <span>{{ store.currentPage }}</span>

                    <button class="btn btn-outline-light" @click="store.next()"
                        :disabled="store.currentPage === store.totalPages">Next</button>
                </div>

                <!--per le img -> :base_url="base_url"  👇-->
                <ProjectCard v-for="project in  store.projects" :project="project" />
            </div>
        </div>

    </main>
    <footer>
        <h1>footer</h1>
    </footer>
</template>

<style lang="scss" >
body {
    background-color: #0F0F0F;

}
</style>
