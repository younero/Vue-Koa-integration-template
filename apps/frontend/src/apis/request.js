import axios from "axios";

const request = axios.create({
    baseURL: process.env.VITE_APP_BASE_API,
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