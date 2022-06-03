# vue-simple-admin
这是一个Vue3开发的通用后台管理系统

### 添加依赖
yarn add vue-router@next vuex@next element-plus axios -Dyarn add vue-router@next vuex@next element-plus axios -S 线上环境也可以使用
 1. axios 
 2. element-plus
 3. vue-router
 4. sass   node-sass可以以换成   dart-sass   yarn add sass -D 仅限于开发环境使用

 ### 易错点

 1. 配置文件例如.env.dev中变量必须以 VITE_ 开头  否则不生效
 2. 使用vite构建，运行项目时，引入文件需要加上文件后缀，否则无法识别
