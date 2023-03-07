import axios from "axios";

// ?api_key=3c00eaa45868cd68c6653fa2a92cdbf6&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;