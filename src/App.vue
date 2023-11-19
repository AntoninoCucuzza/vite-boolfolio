<script >
import axios from 'axios'
import ProjectCard from './components/ProjectCard.vue'
export default {
    name: "App",

    data() {
        return {
            base_url: 'http://127.0.0.1:8000/',
            apiProjects: 'api/projects',
            projects: [],
        }
    },

    components: {
        ProjectCard,
    },



    mounted() {
        axios.get(this.base_url + this.apiProjects)
            .then(response => {
                console.log(response);
                this.projects = response.data.result.data
            }).catch(err => {
                console.error(err);
            })
    }

}

</script>

<template>
    <header>
        <nav class="nav justify-content-center  ">
            <a class="nav-link active" href="#" aria-current="page">Active link</a>
            <a class="nav-link" href="#">Link</a>
            <a class="nav-link disabled" href="#">Disabled link</a>
        </nav>
    </header>

    <main>
        <div class="container">
            <div class="row g-3">
                <ProjectCard v-for="project in  projects" :project="project" :base_url="base_url" />

            </div>
        </div>

    </main>

    <footer>
        <h2>footer</h2>

    </footer>
</template>

<style lang="scss" scoped>
/*  */
</style>
