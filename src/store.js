import { reactive } from 'vue';

import axios from 'axios'

export const store = reactive({

    base_url: 'http://127.0.0.1:8000/',
    apiProjects: 'api/projects',
    projects: [],
    currentPage: 1,
    totalPages: null,

    fetchProjects() {
        axios.get(this.base_url + this.apiProjects + `?page=${this.currentPage}`)
            .then(response => {
                console.log(response);
                this.projects = response.data.result.data

                this.currentPage = response.data.result.current_page;

                this.totalPages = response.data.result.last_page

            }).catch(err => {
                console.error(err);
            })
    },

    next() {
        if (this.currentPage < this.totalPages) {
            this.currentPage++;
            this.fetchProjects();
        }
    },

    prev() {
        if (this.currentPage > 1) {
            this.currentPage--;
            this.fetchProjects();
        }
    }
})