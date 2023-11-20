
<script>
import ProjectCard from '../components/ProjectCard.vue'

import { store } from '../store.js'
export default {
    name: 'HomeView',
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
</template>


<style lang="scss" scoped></style>