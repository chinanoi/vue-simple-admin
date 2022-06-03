<template>
  <h1>欢迎来到登录页面</h1>
  <Welcome msg="zhangsan" />
  <el-button @click="goWelcome">返回首页</el-button>
    <el-button @click="login">登录</el-button>
</template>

<script>
import Welcome from './Welcome.vue'
export default {
  name: 'login',
  components:{Welcome},
  methods:{
    goWelcome(){
      this.$router.push('/welcome')
    },
    login(){
        // this.$request({
        //     url:'/dddd',
        //     method:'get',
        //     data:{
        //         username:'xxx',
        //         password:'xxx'
        //     }
        // }).then((res)=>{
        //     console.log('res',res)
        // })
        this.$storage.setItem('userInfo',{name:'zhangsan'})
        this.$storage.clearItem('name')
        const userInfo = this.$storage.getItem('userInfo')
        console.log('userInfo',userInfo)
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
