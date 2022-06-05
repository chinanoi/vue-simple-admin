<template>
  <div class="login-wrapper">
      <div class="modal">
          <el-form>
              <div class="title">登录</div>
              <el-form-item>
                  <el-input type="text"  prefix-icon="el-icon-user"></el-input>
              </el-form-item>
              <el-form-item>
                  <el-input type="password" prefix-icon="el-icon-view"></el-input>
              </el-form-item>
              <el-form-item>
                  <el-button type="primary" class="btn-login">登录</el-button>
              </el-form-item>
          </el-form>
      </div>
  </div>
</template>

<script>
export default {
  name: 'login', 
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

<style lang="scss">
.login-wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f9fcff;
    width: 100vw;
    height: 100vh;
    .modal{
        width:500px;
        padding: 50px;
        background-color: #fff;
        border-radius: 4px;
        box-shadow: 0px 0px 10px 3px #c7c9cb4d;
        .title{
            font-size: 50px;
            line-height: 1.5;
            text-align: center;
            margin-bottom: 30px;
        }
        .btn-login{
            width: 100%;
        }
    }
}
</style>
