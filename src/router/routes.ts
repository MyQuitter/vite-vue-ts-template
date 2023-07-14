// 对外暴露配置路由

export const constantRoute = [
    {
        // 登录页
        path: '/login',
        component: () => import('@/views/login/index.vue'),
        name: 'login', // 命名路由
    },
    {
        // 首页
        path: '/',
        component: () => import('@/views/home/index.vue'),
        name: 'layout'
    },
    {
        // 404
        path: '/404',
        component: () => import('@/views/error/404.vue'),
        name: "404"
    },
    {
        // 任意页
        path: '/:pathMatch(.*)*',
        redirect: '/404',
        name: 'error'
    }
]