<template>
  <div id="body-content">

    <section id="page-header-secion" class="alter-heading">

      <div class="page-header-image parallax bg-image" style="background-image: url(./images/domin.jpg); background-position: 50% 50%;"></div>

      <div class="cover page-header-cover"></div>

      <!-- Begin page header info -->
      <div class="container page-header-content no-padding max-width-800 text-center">
        <div class="row">
          <div class="col-lg-12">

            <h1 class="album-title">Login/Register</h1>

          </div> <!-- /.col -->
        </div> <!-- /.row -->
      </div>

    </section>

    <section id="content-section" class="page">

      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="content-wrap">
              <div class="row">
                <!-- Left column -->
                <div class="col-lg-8 col-md-6 margin-bottom-30">
                  <!-- Begin tabs -->

                  <div class="tabs-wrap">
<!--                    <button-->
<!--                        v-for="tab in tabs"-->
<!--                        v-bind:key="tab"-->
<!--                        v-bind:class="['nav nav-tabs', {active: currentTab === tab}]"-->
<!--                        v-on:click="currentTab = tab"-->
<!--                    >-->
<!--                      {{tab}}-->
<!--                    </button>-->
                    <ul class="nav nav-tabs nav-justified" role="tablist">
                      <li role="presentation" :class="{on:currentTab === 'Login'}" v-on:click="currentTab = 'Login'"><a href="#login" aria-controls="login" role="tab" data-toggle="tab">Login</a></li>
                      <li role="presentation" :class="{on:currentTab === 'Register'}" v-on:click="currentTab = 'Register'"><a href="#register" aria-controls="register" role="tab" data-toggle="tab">Register</a></li>
                    </ul>
                    <div class="tab-content">
                      <component v-bind:is="currentTabComponent" ></component>
                    </div>
                  </div>
                </div>
                <!-- Right column -->
                <div class="col-lg-4 col-md-6">
                  <div class="sidebar sidebar-right">
                    <h3 class="sidebar-heading">DESCRIPTION</h3>
                    <hr class="hr-short">
                    <p>
                      在幸福和睦的弗莱格布岛上住着一位村长，还有她的村民，村民是一群可爱、会讲话的小动物，他们每天随着日出日落而作息，每天的快乐来自于期待还有美好的事物，就这样，时间在慢慢流逝，直到远处来了一艘小船，小船上有一位舵手，上帝说他可以带来种子和快乐。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
    <!-- End content section -->


  </div>
  <!-- End body content -->
</template>

<script>
import LoginSection from "../../components/LoginRegister/LoginSection/LoginSection";
import RegisterSection from "../../components/LoginRegister/RegisterSection/RegisterSection";

export default {
  name: "login",
  components:{
    LoginSection,
    RegisterSection
  },
  data:function (){
    return {
      currentTab:"Register",
      tabs:["Login", "Register"]
    }
  },
  computed:{
    currentTabComponent:function () {
      return this.currentTab.toLowerCase() + "-section"
    }
  }
}

</script>

<style scoped>

</style>
