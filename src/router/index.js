import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Welcome from '../pages/Welcome.vue';
import Login from '../pages/Login.vue';

const routes = [{
    name: 'home',
    path: '/',
    component: Home,
    redirect: '/welcome',
    meta: {
        title: '首页'
    },
    children: [{
            name: 'welcome',
            path: '/welcome',
            meta: {
                title: '欢迎页'
            },
            component: Welcome,
        },
        {
            name: 'login',
            path: '/login',
            meta: {
                title: '登录'
            },
            component: Login
        }
    ]
}];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;