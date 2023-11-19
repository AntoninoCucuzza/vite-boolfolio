<script>
import axios from 'axios'

export default {
    name: 'ProjectCard',

    props: [
        'project',
        'base_url',
    ],

}
</script>

<template>
    <div class="col-4">
        <div class="card">
            <div class="card-header">
                <h1>{{ project.title }}</h1>
                <p v-if="project.type"><strong>type: </strong>{{ project.type.name }}</p>
                <p v-else><strong>type: </strong>no type</p>
            </div>
            <div class="card-body">
                <h3><strong>slug: </strong> {{ project.slug }}</h3>
                <p><strong>github_link: </strong>{{ project.github_link }}</p>
                <p><strong>project_link: </strong> {{ project.project_link }}</p>
                <img class="img-fluid" :src="project.thumb" alt="">
                <p>{{ project.description }}</p>

                <ul class="d-flex  g-2 list-unstyled">
                    <li class="badge bg-secondary me-1" v-for=" technology  in  project.technologies ">
                        <i class="fas fa-tag fa-xs fa-fw"></i> {{ technology.name }}
                    </li>
                    <li v-if="project.technologies.length === 0" class="badge bg-secondary">Untagged</li>
                </ul>

            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
/*  */
</style>