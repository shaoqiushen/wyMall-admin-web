import Vue from 'vue'
import Router from 'vue-router'
const home = () => import('../pages/home/Home')
const order = () => import('../pages/order/Order')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', name: 'home', component: home, redirect: '/home'
    },
    {
      path: '/home', name: 'home', component: home
    },
    {
      path: '/order', name: 'order', component: order
    }
  ]
})
