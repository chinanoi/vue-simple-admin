// 环境配置封装

const env =
    import.meta.env.MODE || 'prod';

const EnvConfig = {
    dev: {
        baseApi: '/api',
        mockApi: ''
    },
    test: {
        baseApi: '/test/api',
        mockApi: ''
    },
    prod: {
        baseApi: '/product/api',
        mockApi: ''
    }
};


export default {
    env: 'dev',
    mock: 'true',
    namespace: 'VUE_CUSTOM_MANAGER_SYSTEM',
    ...EnvConfig[env]
};