<script>
import axios from 'axios';
import {store} from '../store.js';
export default {
    name: 'ContactUs',
    data() {
        return {
            store,
            name: '',
            surname: '',
            email: '',
            description: '',
            succes: '',
            errors:  '',
            loading: false,
        }   
    },
    methods: {
        sendForm(){
            this.loading = true;
            const data = {
                name: this.name,
                surname: this.surname,
                email: this.email,
                description: this.description
            }
            
            axios.post(`${this.store.apiUrl}/api/contact-us`, data).then((response) => {

                this.succes = response.data.succes;

                if (response.data.succes) {
                    this.name = '';
                    this.surname = '';
                    this.email = '';
                    this.description = '';

                    this.$router.push({
                        name: 'thanks-you',
                    });
                }
                else{
					this.errors = response.data.errors
				};

                this.loading = false;
            });

        }
    },
}
</script>

<template>
    <div class="container-sm py-3">
        <form class="d-flex justify-content-center" @submit.prevent="sendForm()" method="post">
            <div class="row w-75">
                <div class="col-6 py-2">
                    <label class="form-label" for="name">Name</label>
                    <input :class="errors && errors.name ? 'is-invalid' : ''" class="form-control form-control-sm" type="text" name="name" id="name" v-model="name" required>
                    <div v-for="(error, index) in errors.name" :key="`message-error-${index}`" class="invalid-feedback">{{error}}</div>	
                </div>

                <div class="col-6 py-2">
                    <label class="form-label" for="surname">Surname</label>
                    <input :class="errors && errors.surname ? 'is-invalid' : ''" class="form-control form-control-sm" type="text" name="surname" id="surname" v-model="surname" required>
                    <div v-for="(error, index) in errors.surname" :key="`message-error-${index}`" class="invalid-feedback">{{error}}</div>
                </div>

                <div class="col-12 py-2">
                    <label class="form-label" for="email">Email</label>
                    <input :class="errors && errors.email ? 'is-invalid' : ''" class="form-control form-control-sm" type="email" name="email" id="email" v-model="email" required>
                    <div v-for="(error, index) in errors.email" :key="`message-error-${index}`" class="invalid-feedback">{{error}}</div>
                </div>

                <div class="col-12 py-2">
                    <label class="form-label" for="description">Description</label>
                    <textarea :class="errors && errors.description ? 'is-invalid' : ''" class="form-control form-control-sm" name="description" id="description" cols="30" rows="10" v-model="description"></textarea>
                    <div v-for="(error, index) in errors.description" :key="`message-error-${index}`" class="invalid-feedback">{{error}}</div>
                </div>

                <div class="col-12 text-end py-2">
                    <button class="btn btn-sm btn-primary" type="submit" :disable="loading">{{loading ? 'Sendind...' : 'Send'}}</button>
                </div>
            </div>
        </form>
    </div>
</template>

<style lang="scss">
    
</style>