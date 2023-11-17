<script >
import axios from 'axios'

export default {
    name: "App",

    data() {

        return {
            baseurl: 'http://127.0.0.1:8000/',
            apiProjects: 'api/projects',
            projects: [],
        }

    },

    methods: {

    },

    mounted() {
        axios.get(this.baseurl + this.apiProjects)
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
                <div v-for="project in projects" class="col-4">
                    <div class="card">
                        <div class="card-header">
                            <h1>{{ project.title }}</h1>
                        </div>
                        <div class="card-body">
                            <h3><strong>slug: </strong> {{ project.slug }}</h3>
                            <p><strong>github_link: </strong>{{ project.github_link }}</p>
                            <p><strong>project_link: </strong> {{ project.project_link }}</p>
                            <img class="img-fluid" :src="project.thumb" alt="">
                            <p>{{ project.description }}</p>

                            <ul class="d-flex  g-2 list-unstyled">
                                <li class="badge bg-secondary me-1" v-for="technology in project.technologies">
                                    <i class="fas fa-tag fa-xs fa-fw"></i> {{ technology.name }}
                                </li>
                                <li v-if="project.technologies.length === 0" class="badge bg-secondary">Untagged</li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    </main>

    <footer>
        <h2>footer</h2>

    </footer>
</template>

<style scoped>
/*  */
</style>
