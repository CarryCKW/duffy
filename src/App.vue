<template>
  <div>
    <gallery-header-nav username="小咕噜" v-show="$route.meta.showHeadNav"></gallery-header-nav>
    <router-view></router-view>
  </div>
</template>

<script>
import GalleryHeaderNav from "./components/HeaderNav/GalleryHeaderNav";
export default {
  name: 'App',
  components: {
    GalleryHeaderNav
  }
}
</script>

<style>

@import "./assets/vendor/bootstrap/css/bootstrap.min.css";
@import "./assets/vendor/font-awesome/css/font-awesome.min.css";
/*@import "~@/assets/vendor/lightgallery/css/lightgallery.min.css";*/
@import "./assets/vendor/justifiedgallery/css/justifiedGallery.min.css";
@import "./assets/vendor/ytplayer/css/jquery.mb.YTPlayer.min.css";
@import "./assets/vendor/owl-carousel/css/owl.carousel.css";
@import "./assets/vendor/owl-carousel/css/owl.carousel.plugins.css";
@import "./assets/vendor/owl-carousel/css/owl.theme.default.css";
@import "./assets/vendor/animate.min.css";
@import "./assets/css/theme.css";
@import "./assets/css/helper.css";
@import "./assets/css/iview.css";
@import "./assets/css/swiper.min.css";
</style>
