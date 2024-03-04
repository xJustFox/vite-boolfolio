<script>
import ProjectCard from '../components/ProjectCard.vue';
import { store } from '../store.js';
import axios from 'axios';

export default {
    name: 'Projects',
    data() {
        return {
            store,
            projects: [],
            current_page: 1,
            last_page: null,
        }
    },
    components: {
        ProjectCard,
    },
    created() {
        this.getPorjects();
    },
    methods: {
        getPorjects(page_num) {
            axios.get(this.store.apiUrl, {
                params: {
                    page: page_num
                }
            }).then((response) => {
                this.projects = response.data.results.data;
                this.current_page = response.data.results.current_page;
                this.last_page = response.data.results.last_page;
            })
        }
    },
}
</script>

<template>
    <div class="container-lg py-4">
        <div class="row">
            <div class="col-12 text-center py-3">
                <h1>Projects page</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil voluptate ex quasi quis ducimus
                    aliquam sint expedita. Tenetur ullam dolorem voluptatibus, mollitia accusamus nam odio nemo nihil
                    vitae, laboriosam obcaecati?</p>
            </div>

            <hr>

            <ProjectCard v-for="(project, index) in projects" :key="index" :project="project" />
            <div class="col-12 d-flex justify-content-end py-3 ">
                <button :class="current_page == 1 ? 'disabled' : ''" class="btn btn-sm btn-primary me-2 "
                    @click="getPorjects(current_page - 1)">
                    prev
                </button>
                <button :class="current_page == this.last_page ? 'disabled' : ''" class="btn btn-sm btn-primary"
                    @click="getPorjects(current_page + 1)">
                    next
                </button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>./AppMain.vue/index.js