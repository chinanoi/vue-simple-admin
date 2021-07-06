<template>
  <h1>欢迎来到登录页面</h1>
  <h3 @click="goWelcome">返回首页</h3>
</template>

<script>
export default {
  name: 'login',
  methods:{
    goWelcome(){
      this.$router.push('/welcome')
    }
  }
}
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
