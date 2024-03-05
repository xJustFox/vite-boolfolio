<script>
import { store } from '../store.js';

export default {
    name: 'ProjectCard',
    data() {
        return {
            store,
        }
    },
    props: {
        project: Object,
    },
    methods: {
        getImg() {
            let img;
            let imgApi = this.project.img;

            if (this.project.img != null) {
                if (imgApi.includes("https")) {
                    img = this.project.img;
                } else {
                    img = this.store.apiImg + imgApi;
                }
            }

            return img;
        },
    },
}
</script>

<template>
    <div class="col-4 py-2 ">
        <div class="card">
            <img :src="getImg()" class="card-img-top" :alt="project.name" style="max-height: 300px">
            <div class="card-body">
                <h5 class="card-title">{{ project.name }}</h5>
                <p class="card-text">{{ project.description.substring(0, 20) }}...</p>
                <div class="text-end ">
                    <router-link class="btn btn-sm my-color" :to="{ name: 'show-project', params: { slug: project.slug } }"> Show More </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.btn{
    color: white;

    &:hover{
        background-color: #203054b4;
    }
}
</style>