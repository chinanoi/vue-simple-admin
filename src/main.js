import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import request from './utils/api';
import storage from './utils/storage';
import api from './api';
import store from './store';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';


console.log('环境变量=》',
    import.meta.env);
const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}
app.config.globalProperties.$request = request;
app.config.globalProperties.$api = api;
app.config.globalProperties.$storage = storage;
app.use(router).use(store).use(ElementPlus).mount('#app');