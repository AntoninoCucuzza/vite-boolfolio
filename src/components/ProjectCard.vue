<script>
import { store } from '../store';

export default {
    name: 'ProjectCard',
    props: [
        'project',
        'base_url',
    ],

    data() {
        return {
            store,
            imageError: false

        };
    },

    methods: {

        isError() {
            this.imageError = true;
        }
    },
    created() {

    },
}
/*per le img -> this.base_url + 'storage/' +  */
</script>
<template>
    <div class="col-4">
        <div class="card card_custom h-100 my-3">
            <div class="card-header">
                <h1>{{ project.title }}</h1>
                <p v-if="project.type"><strong>type: </strong>{{ project.type.name }}</p>
                <p v-else><strong>type: </strong>no type</p>
            </div>
            <div class="card-body">
                <h3><strong>slug: </strong> {{ project.slug }}</h3>
                <p><strong>github_link: </strong>{{ project.github_link }}</p>
                <p><strong>project_link: </strong> {{ project.project_link }}</p>

                <div class="img-wrapper">
                    <img v-if="imageError === false" class="img-fluid" :src="store.getImg(project.thumb)" alt=""
                        @error="isError()">
                    <img class="img-fluid" :src="store.getImg('../assets/img/placeholder.png')" alt="" v-else>
                </div>

                <p>{{ project.description }}</p>

                <ul class="d-flex flex-wrap gap-1 list-unstyled">
                    <li class="badge badge_custom me-1" v-for=" technology  in  project.technologies ">
                        <i class="fas fa-tag fa-xs fa-fw"></i> {{ technology.name }}
                    </li>
                    <li v-if="project.technologies.length === 0" class="badge badge_custom">Untagged</li>
                </ul>

            </div>
            <div class="card-footer">
                <router-link :to="{ name: 'project', params: { slug: project.slug } }">View Project</router-link>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>