<script>
import { store } from '../store.js';
import axios from 'axios';

export default {
    name: 'Projects',
    data() {
        return {
            store,
            project: [],
        }
    },
    created() {
        this.getProject()
    },
    methods: {
        getProject() {
            axios.get(`${this.store.apiUrl}/api/projects/${this.$route.params.slug}`).then((response) => {
                this.project = response.data.results;
            })
        }
    },
}
</script>

<template>
    <div class="container-lg py-4">
        <div class="row">

            <div class="col-12 py-2">
                <div class="container-lg mt-3 detailesPrj">
                    <div v-if="project.img != null">
                        <img class="float-end mx-2"
                            :src="project.img.includes('https') ? project.img : `${this.store.apiImg}${project.img}`"
                            alt="">
                    </div>
                    <div v-else>
                        <img class="float-end mx-2"
                            src="https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg"
                            alt="">
                    </div>

                    <h1>{{ project.name }}</h1>


                    <div class="my-2">
                        <div class="badge rounded-pill my-color me-1"
                            v-for="(technology, index) in project.technologies" :key="index">
                            {{ technology.name }}
                        </div>
                    </div>
                    <p>{{ project.description }}</p>


                    <div v-if="project.type">
                        Type: 
                        <span class="badge rounded-pill my-color me-1">{{ project.type.name }}</span>
                    </div>
                    <div v-else>
                        Without type
                    </div>


                    <div>
                        <span>
                            Start Project:
                            {{ project.date_start }}
                        </span>
                        &VerticalSeparator;
                        <span>
                            End Project: <span v-if="project.date_end != null">{{ project.date_end }} </span>
                            <span v-else>In progress...</span>
                        </span>
                    </div>
                    <div class="text-end mt-4">
                        <a class="px-2" :href="project.repository_link">Link Repository</a>
                    </div>
                </div>
            </div>
            <hr>
        </div>
    </div>
</template>

<style lang="scss" scoped>
</style>
