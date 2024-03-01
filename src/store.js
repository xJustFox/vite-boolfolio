import { reactive } from "vue";

export const store = reactive({
    apiUrl: 'http://127.0.0.1:8000/api/projects/?page=3',
    apiImg: 'http://127.0.0.1:8000/storage/'
});