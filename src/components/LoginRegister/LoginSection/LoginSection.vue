<template>
  <div role="tabpanel" class="fade tab-pane in active" id="login">

    <div class="login-wrapper margin-top-50">

      <!-- Begin login form -->
      <form id="login-form" class="margin-top-40" @submit.prevent="login">
        <div class="form-group">
          <input type="text" maxlength="20" v-model="username" class="form-control" name="username" placeholder="Enter Your Username" required>
        </div>
        <div class="form-group no-margin-bottom">
          <input type="password" v-model="userpwd" class="form-control" name="password" placeholder="Enter Your Password" required>
        </div>
        <button class="btn btn-primary btn-rounded-5x btn-block margin-top-40">Login</button>
      </form>
      <!-- End login form -->

    </div> <!-- /.login-wrapper -->

  </div> <!-- /.tab-pane -->

</template>

<script>
import {reqLoginByPwd} from "../../../api";

export default {
  name: "login-section",
  data:function (){
    return {
      username : '',
      userpwd : '',
      code: '', //验证码
      phone: '', //手机号
      alertText: '', // 提示文本
      alertShow: false// 显示警告
    }
  },
  computed:{
    rightPhone(){
      return /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/.test(this.phone)
    }
  },
  methods:{
    async login(){
      let {username, userpwd, code, phone} =this
      if (!username) {
        //show Tip
        return
      }
      if (!userpwd) {
        // show Tip
        return
      }
      this.result = await reqLoginByPwd({username:username, password:userpwd})
      //保存userid和跳转
      if (this.result.code === 210) {
        if (this.result.data['pass'] === true) {
          console.log("passnow")
          await this.$store.dispatch("saveUserId", this.result.data['userId'])
          await this.$router.replace('/homepage')
        }
        else {
          username = ''
          userpwd = ''
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
