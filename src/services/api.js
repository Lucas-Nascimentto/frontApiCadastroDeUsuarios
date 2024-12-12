import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api-cadastro-de-usuarios-k874nh5ol.vercel.app'
});

export default api;