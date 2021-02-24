<template>
    <header id="header" class="fixed-top">
      <div class="header-inner">

        <nav class="navbar navbar-default">
          <div class="navbar-inner">


            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="navbar-collapse-1">
              <ul class="nav navbar-nav navbar-right">
                <li class="dropdown dropdown-hover">
                  <a class="dropdown-toggle">Home <span class="caret-2"><i class="fa fa-chevron-down"></i></span></a>
                </li>
                <li class="dropdown dropdown-hover">
                  <a class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Gallery <span class="caret-2"><i class="fa fa-chevron-down"></i></span></a>
                  <ul class="dropdown-menu">
                    <li class="dropdown dropdown-submenu dropdown-hover">
                      <a class="dropdown-toggle keep-inside-screen" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><router-link to="/homepage">HomePage</router-link></a>
                    </li>
                    <!-- End dropdown -->

                    <li class="dropdown dropdown-submenu dropdown-hover">
                      <a class="dropdown-toggle keep-inside-screen" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><router-link to="/sharing">Sharing </router-link></a>
                    </li>
                    <!-- End dropdown -->
                    <li class="dropdown dropdown-submenu dropdown-hover">
                      <a class="dropdown-toggle keep-inside-screen" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><router-link to="/blog">Blog </router-link></a>
                    </li>
                  </ul>
                </li>
                <li class="dropdown dropdown-hover">
                  <a class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Fere <span class="caret-2"><i class="fa fa-chevron-down"></i></span></a>
                </li>
                <li class="dropdown dropdown-hover">
                  <a class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{{username}}</a>
                </li>
              </ul> <!-- /.nav -->
            </div> <!-- /.navbar-collapse -->

          </div> <!-- /.navbar-inner -->
        </nav>
        <!-- End menu -->

      </div> <!-- /.header-inner -->
    </header>

</template>

<script>

  export default {
    props:{
      username:String
    },
    name: "gallery-header-nav",
    methods:{
      goTo(path) {
        this.$router.replace(path) //导致回退忘记
      }
    },

  }
</script>

<style scoped>

</style>
