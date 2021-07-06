<template>
  <h1>欢迎来到我的系统</h1>
  <h3 @click="goLogin">去登陆</h3>
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

<style scoped>
a {
  color: #42b983;
}
h3 {
  color: #42b983;
  cursor: pointer;
}
</style>
