<script >
export default {
    name: 'AppHeader',
    data() {
        return {
            flagActive: 0,
            navLinks: [
                {
                    name: 'home',
                    label: 'Home',
                },
                {
                    name: 'projects',
                    label: 'Projects',
                },
                {
                    name: 'contact-us',
                    label: 'Contact Us',
                },
            ],
        };
    },
    created() {
    },
    methods: {
        getActiveLink(index){
            this.flagActive = index
        }
    },
}
</script>

<template>
  <header>
    <div class="container-fluid pt-2 px-3">
        <div class="row justify-content-between ">
            <div class="col">
                <h1>BoolFolio</h1>
            </div>
            <div class="col d-flex justify-content-end align-items-center">
                <ul class="list-unstyled d-flex mb-0">
                    <li class="mx-1" v-for="link, index in navLinks">
                        <router-link :class="this.flagActive == index ? 'text-decoration-underline' : ''" class=" text-decoration-none text-white" :to="{ name: link.name }" @click="getActiveLink(index)">{{ link.label }}</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.container-fluid{
    background-color: #304674;
    color: white;
}
</style>