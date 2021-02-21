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
<!--      <alert-tip :alert-text="alertText" v-show="alertShow" @closeTip="closeTip"></alert-tip>-->
    </div> <!-- /.login-wrapper -->

  </div> <!-- /.tab-pane -->

</template>

<script>
import {reqLoginByPwd} from "../../../api";
import AlertTip from "../../AlertTip/AlertTip";

export default {
  name: "login-section",
  components:{
    AlertTip
  },
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
        // this.showTip("请输入用户名")
        return
      }
      if (!userpwd) {
        // this.showTip("请输入密码")
        return
      }
      this.result = await reqLoginByPwd({username:username, password:userpwd})
      //保存userid和跳转
      if (this.result.code === 210) {
        if (this.result.data['pass'] === true) {
          console.log("passnow")
          await this.$store.dispatch("saveUserId", this.result.data['userId'])
          this.success()
          await this.$router.replace('/homepage')
        }
        else {
          username = ''
          userpwd = ''
          this.error()
        }
      }else {
        this.error()
      }
    },
    showTip (alertText) {
      this.alertText = alertText
      this.alertShow = true
    },
    closeTip () {
      this.alertText = ''
      this.alertShow = false
    },
    error() {
      this.$Message.error("登录失败")
    },
    success() {
      this.$Message.success("登录成功")
    }
  }
}
</script>

<style scoped>

</style>
