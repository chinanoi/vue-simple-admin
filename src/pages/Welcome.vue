<template>
    <div class="welcome-page">
        <h1>欢迎来到我的系统-{{msg}}</h1>
        <el-button @click="goLogin">去登陆</el-button>
    </div>
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
.welcome-page{
    
}
</style>
