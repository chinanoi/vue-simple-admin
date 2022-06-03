<template>
  <h1>欢迎来到我的系统-{{msg}}</h1>
  <el-button @click="goLogin">去登陆</el-button>
</template>

<script>
export default {
  name: 'welcome',
  methods:{
    goLogin(){
      this.$router.push('/login')
    }
  }
}
</script>
<script setup>
import {defineProps} from 'vue'
defineProps({
    msg:String
})
</script>

<style scoped>
a {
  color: #42b983;
}
h3 {
  color: #42b983;
  cursor: pointer;
}
</style>
