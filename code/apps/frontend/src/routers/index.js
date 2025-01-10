import {createRouter, createWebHashHistory} from "vue-router";

const routes = [
    {path: '/', component: () => import('@/views/HelloWorld/index.vue')},
]

// 添加特殊路由
routes.push({
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/404.vue'),
})

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router