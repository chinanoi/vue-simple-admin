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
    ...EnvConfig[env]
};