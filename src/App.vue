<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import ProjectCard from './components/ProjectCard.vue';
import AppFooter from './components/AppFooter.vue';
import { store } from './store.js';
import axios from 'axios';

export default {
  data() {
    return {
      store,
      projects: [],
      current_page: 1,
      last_page: null,
    }
  },
  components: {
    AppHeader,
    AppMain,
    ProjectCard,
    AppFooter
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

};
</script>

<template>
  <AppHeader />
  <div class="container-lg py-4">
    <div class="row">
      <ProjectCard v-for="(project, index) in projects" :key="index" :project="project" />
      <div class="col-12 d-flex justify-content-end py-3 ">
        <button :class="current_page == 1 ? 'disabled' : ''" class="btn btn-sm btn-primary me-2 " @click="getPorjects(current_page - 1)">
          prev
        </button>
        <button :class="current_page == this.last_page ? 'disabled' : ''" class="btn btn-sm btn-primary" @click="getPorjects(current_page + 1)">
          next
        </button>
      </div>
    </div>
  </div>
  <AppMain />
  <AppFooter />
</template>

<style lang="scss">
@use './style/generals.scss' as *;
@use './style/partials/variables' as *;
</style>
