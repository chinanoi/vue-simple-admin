import axios from 'axios';
import config from '../config';
import { ElMessage } from 'element-plus';

// 创建axios实例对象，添加全局配置
const service = axios.create({
    baseURL: config.baseApi,
    timeout: 8000
});

// 请求拦截
service.interceptors.request.use((req) => {
    const headers = req.headers;
    if (!headers.Authorization) headers.Authorization = 'zhangsan';
    return req;
});

// 响应拦截
service.interceptors.response.use((res) => {
    const { data, code, msg } = res.data;
    if (code === 200) {
        return data;
    }
    ElMessage.error(msg);
    return Promise.reject(msg || "");
});

// 封装请求函数
function request(options) {
    options.method = options.method || 'get';
    console.log('options.method', options.method);
    if (options.method.toLocaleLowerCase() === 'get') {
        options.param = options.data;
    }
    if (typeof options.mock != 'undefined') {
        config.mock = options.mock;
    }
    if (config.env === 'prod') {
        service.defaults.baseURL = config.baseApi;
    } else {
        service.defaults.baseURL = config.mock ? config.mockApi : config.baseApi;
    }
    return service(options);
}


['get', 'post', 'put', 'delete', 'patch'].forEach((item) => {
    request[item] = (url, data, options) => {
        return request({
            url,
            data,
            method: item,
            ...options
        });
    };
});

export default request;