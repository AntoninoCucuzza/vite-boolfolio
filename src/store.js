import { reactive } from 'vue';

import axios from 'axios'

export const store = reactive({

    base_url: 'http://127.0.0.1:8000/',
    apiProjects: 'api/projects',
    projects: [],
    latest: [],
    currentPage: 1,
    totalPages: null,

    isLoading: true,

    fetchProjects() {
        axios.get(this.base_url + this.apiProjects + `?page=${this.currentPage}`)
            .then(response => {
                //console.log(response);
                this.projects = response.data.result.data

                this.currentPage = response.data.result.current_page;

                this.totalPages = response.data.result.last_page

                this.isLoading = false
            }).catch(error => {
                console.error(error);
            })
    },

    
    fetchLatest() {
        axios.get(this.base_url + this.apiProjects + '/'+'latest')
            .then(response => {
                this.latest = response.data.projects
                this.isLoading = false
                //console.log(this.latest, this.isLoading );

            }).catch(error => {
                console.error(error);
            })
    },

    getImg(url) {
        return new URL(`${url}`, import.meta.url).href
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