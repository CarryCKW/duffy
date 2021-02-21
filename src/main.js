import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// new Vue({
//   render: h => h(App),
// }).$mount('#app')


const vm = new Vue({
  el:"#app",
  render:h=>h(App),
  router,
  store,
})

Vue.use(vm)

