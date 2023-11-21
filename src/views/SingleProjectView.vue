<script>
import axios from 'axios'
import { store } from '../store.js'

export default {
    name: 'SingleProjectView',
    data() {
        return {
            store,
            project: {},
        }
    },
    methods: {
        getPlaceholderImg(url) {
            return new URL(`${url}`, import.meta.url).href
        },

        fetchData() {
            axios.get(store.base_url + store.apiProjects + '/' + `${this.$route.params.slug}`)
                .then(response => {
                    this.project = response.data.project;
                    console.log(this.project);
                }).catch(err => {
                    console.error(err);
                })
        }
    },
    mounted() {
        console.log('URL:', store.base_url + store.apiProjects + '/' + this.$route.params.slug);
        this.fetchData();
    },
}
</script>

<template>
    <h1>{{ project.title }}</h1>
    <p>{{ project.description }}</p>
    <img class="img-fluid" :src="project.thumb" alt="">
    <p>{{ project.github_link }}</p>
    <p>{{ project.project_link }}</p>

    <ul class="d-flex flex-wrap gap-1 list-unstyled">
        <li class="badge badge_custom me-1" v-for=" technology  in  project.technologies ">
            <i class="fas fa-tag fa-xs fa-fw"></i> {{ technology.name }}
        </li>
    </ul>
</template>

<style lang="scss" scoped></style>