/*
router
 */
import Vue from 'vue'
import VueRouter from "vue-router"
import Homepage from "../pages/Gallery/Homepage/Homepage";
import Sharing from "../pages/Gallery/Sharing/Sharing";
import Blog from "../pages/Gallery/Blog/Blog";
import Login from "../pages/Login/Login";
import Domin from "../pages/Domin/Domin";

Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {
      path: '/homepage',
      component: Homepage,
      meta:{
        showHeadNav:true
      }
    },
    {
      path: '/sharing',
      component: Sharing,
      meta:{
        showHeadNav:false
      }
    },
    {
      path: '/blog',
      component: Blog,
      meta:{
        showHeadNav:true
      }
    },{
      path: '/login',
      component: Login,
      meta:{
        showHeadNav:false
      }
    },{
      path:'/',
      component:Domin,
      meta:{
        showHeadNav:false
      }
    }
  ]
})

