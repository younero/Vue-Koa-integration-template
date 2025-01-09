import axios from "axios";

const request = axios.create({
    baseURL: import.meta.mode === 'development' ? 'http://localhost:3000/api' : '/api',
})

request.interceptors.request.use((config) => {
    config.headers['Authorization'] = 'Bearer ' + localStorage.getItem('token')
    return config;
})

request.interceptors.response.use((res) => {
    return res
}, (err) => {
    if (err.response.status === 401) {
        localStorage.removeItem('token')
        window.location.href = '/login'
    } else {
        return Promise.reject(err)
    }
})