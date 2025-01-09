import {createApp} from 'vue'
import App from './App.vue'

import {createPinia} from 'pinia'
const pinia = createPinia()

import router from '@/routers/index.js'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
const vuetify = createVuetify()


createApp(App)
    .use(pinia)
    .use(router)
    .use(vuetify)
    .mount('#app')
