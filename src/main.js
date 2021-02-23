import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAwesomeSwiper from "vue-awesome-swiper";
// import 'jquery'
// import jquery_min from '../static/assets/vendor/jquery/jquery-1.11.1.min'
// // import bootstrap_min from '../static/assets/vendor/bootstrap/js/bootstrap.min'
// import lightgallery from '../static/assets/vendor/lightgallery/js/lightgallery.min'
// import lightgallery_plugins from '../static/assets/vendor/lightgallery/js/lightgallery-plugins'
// import mousewheel from '../static/assets/vendor/lightgallery/js/jquery.mousewheel.min'
// import easing from '../static/assets/vendor/jquery.easing.min'
// import isotope from '../static/assets/vendor/isotope.pkgd.min'
// import imagesloaded from '../static/assets/vendor/imagesloaded.pkgd.min'
// import justifiedGallery from '../static/assets/vendor/justifiedgallery/js/jquery.justifiedGallery.min'
// import YTPlayer from '../static/assets/vendor/ytplayer/js/jquery.mb.YTPlayer.min'
// import theme from '../static/assets/js/theme'


Vue.use(VueAwesomeSwiper)

//
// Vue.use(jquery_min)
// // Vue.use(bootstrap_min)
// Vue.use(lightgallery)
// Vue.use(lightgallery_plugins)
// Vue.use(mousewheel)
// Vue.use(easing)
// Vue.use(isotope)
// Vue.use(imagesloaded)
// Vue.use(justifiedGallery)
// Vue.use(YTPlayer)
// Vue.use(theme)


const vm = new Vue({
  el:"#app",
  render:h=>h(App),
  router,
  store,
})

Vue.use(vm)

