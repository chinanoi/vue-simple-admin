import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../pages/Home.vue';

const routes = [{
        name: 'home',
        path: '/',
        meta: {
            title: '首页'
        },
        component: Home,
        redirect: '/welcome',
        children: [{
            name: 'welcome',
            path: '/welcome',
            meta: {
                title: '欢迎体验Vue3通用后台和管理系统'
            },
            component: () =>
                import ('@/pages/Welcome.vue')
        }]
    },
    {
        name: 'login',
        path: '/login',
        meta: {
            title: '登录'
        },
        component: () =>
            import ('@/pages/Login.vue')
    },
    {
        name: '404',
        path: '/404',
        meta: {
            title: '页面不存在'
        },
        component: () =>
            import ('@/pages/404.vue')
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;