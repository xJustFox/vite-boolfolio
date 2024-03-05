<script>
import ProjectCard from '../components/ProjectCard.vue';
import { store } from '../store.js';
import axios from 'axios';

export default {
    name: 'TypesProjects',
    data() {
        return {
            store,
            projects: [],
            types: [],
            current_page: 1,
            last_page: null,
        }
    },
    components: {
        ProjectCard,
    },
    created() {
        this.getPorjects();
        this.getTypes();
    },
    methods: {
        getPorjects(page_num) {
            console.log(this.$route.params.slug);
            this.projects = [];
            axios.get(`${this.store.apiUrl}/api/projects/type/${this.$route.params.slug}`, {
                params: {
                    page: page_num
                }
            }).then((response) => {
                this.projects = response.data.results.data;
                this.current_page = response.data.results.current_page;
                this.last_page = response.data.results.last_page;
            })
        },
        getTypes() {
            axios.get(`${this.store.apiUrl}/api/types/`).then((response) => {
                this.types = response.data.results;
            })
        }
    },
}
</script>

<template>
    <div class="container-lg py-4">
        <div class="row">
            <div class="col-12 text-center py-3">
                <h1>Types Projects page</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil voluptate ex quasi quis ducimus
                    aliquam sint expedita. Tenetur ullam dolorem voluptatibus, mollitia accusamus nam odio nemo nihil
                    vitae, laboriosam obcaecati?</p>
            </div>

            <hr>
            <div class="col-12 py-3">
                <div @click="getPorjects(page_num)">
                    <router-link class="badge rounded-pill type-fs my-color me-2 text-decoration-none" :to="{ name: 'type-projects', params: { slug: type.slug } }" v-for="(type, index) in types" :key="index"> {{ type.name }} </router-link>
                </div>
            </div>
            <ProjectCard v-for="(project, index) in projects" :key="index" :project="project" />
            <div class="col-12 d-flex justify-content-end py-3 ">
                <button :class="current_page == 1 ? 'disabled' : ''" class="btn btn-sm my-color me-2 "
                    @click="getPorjects(current_page - 1)">
                    prev
                </button>
                <button :class="current_page == this.last_page ? 'disabled' : ''" class="btn btn-sm my-color"
                    @click="getPorjects(current_page + 1)">
                    next
                </button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.type-fs{
    font-size: smaller;

    &:hover{
        cursor: pointer;
        background-color: #203054b4;
    }
}
.btn{

    &:hover{
        background-color: #203054b4;
    }
}
</style>