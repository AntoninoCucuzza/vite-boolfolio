<script>
import axios from 'axios';
import { store } from '../store';

import Jumbotron from '../components/Jumbotron.vue'
export default {
    name: 'HomeView',
    data() {
        return {
            store
        }
    },

    components: {
        Jumbotron
    },

    methods: {

    },/*  */

    created() {
        store.fetchLatest()
        console.log('URL:', store.base_url + store.apiProjects + '/latest');

    },
}
</script>

<template>
    <Jumbotron />
    <div class="container">
        <div class="row mt-5">
            <div class="col col-lg-9">
                <div class="mt-3" v-for="project in  store.latest">
                    <div class="row" v-if="store.isLoading">
                        <div class="col-4">
                            <img src="../assets/img/placeholder.png" class="img-fluid h-100 object-fit-cover"
                                alt="loading...">
                        </div>
                        <div class="col-8">
                            <div class="card-body">
                                <h5 class="card-title placeholder-glow">
                                    <span class="placeholder col-6"></span>
                                </h5>
                                <p class="card-text placeholder-glow">
                                    <span class="placeholder col-7"></span>
                                    <span class="placeholder col-4"></span>
                                    <span class="placeholder col-4"></span>
                                    <span class="placeholder col-6"></span>
                                    <span class="placeholder col-8"></span>
                                </p>
                                <a class="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
                            </div>
                        </div>
                    </div>
                    <div class="row" v-else>
                        <div class="project_card d-flex p-0 w-100 ">
                            <div class="img-wrapper">
                                <img class="img img-fluid h-100 object-fit-cover" :src="store.getImg(project.thumb)" alt="">
                            </div>
                            <div class="content text-white">
                                <h1>{{ project.title }}</h1>
                                <p>{{ project.description }}</p>
                                <div class="d-flex mt-3">
                                    <ul class="ms-2 d-flex flex-wrap gap-1 list-unstyled">
                                        <template v-for="technology in project.technologies">
                                            <li class="badge badge_custom_sm">
                                                <i class="fas fa-tag fa-xs fa-fw"></i> {{ technology.name }}
                                            </li>
                                        </template>

                                    </ul>
                                </div>
                                <div class="single_project">
                                    <router-link class="flex-shrink-0"
                                        :to="{ name: 'project', params: { slug: project.slug } }">View
                                        Project</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-3 d-none d-lg-block">
                <div class="card mt-3">
                    <h1>tabella tech e type?</h1>

                </div>

            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

.project_card {
    border: 2px solid $black_main ;
    flex-direction: column;
    border-radius: 5px;
    overflow: hidden;
    z-index: 0;

    &:hover {
        border: 2px solid $green_main !important;

        .img {
            transform: scale(1.3) rotate(3deg);
        }
    }

    .img-wrapper {
        position: relative;
        z-index: 0;
    }

    .img {
        transition: transform .2s;
    }

    .content {
        padding: 1rem;
        background-color: transparent;
        position: relative;
        z-index: 1;
        background-color: $black_secondary;
    }

    p {
        position: relative;
        margin: 1rem 0 0;

        &:first-of-type {
            margin-top: 1.25rem;

            &:before {
                content: "";
                position: absolute;
                height: 5px;
                background: $green_main;
                width: 35px;
                top: -0.75rem;
                border-radius: 3px;
            }
        }
    }

    @media (min-width: 640px) {
        flex-direction: row;

        .img-wrapper {
            flex-basis: 40%;
            height: auto;
        }

        .content {
            flex-basis: 60%;
            background-color: $black_secondary;

            &:before {
                transform: skewX(-3deg);
                content: "";
                background: $black_secondary;
                width: 30px;
                position: absolute;
                left: -10px;
                top: 0;
                bottom: 0;
                z-index: -1;
            }

            .single_project {
                position: absolute;
                bottom: 20px;
                right: 20px;
            }
        }

        &.alt {
            flex-direction: row-reverse;

            .content {
                &:before {
                    left: inherit;
                    right: -10px;
                    transform: skew(3deg)
                }
            }


        }
    }
}
</style>