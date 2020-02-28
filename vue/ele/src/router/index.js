import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// @代表什么? 
// 延迟加载组件，当用户切换路由时，再来加载显示
const GoodsList = resolve => require(['@/components/GoodsList'], resolve);

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/goodsList', // 商品列表
    name: 'GoodsList',
    component: GoodsList
  }
]

const router = new VueRouter({
  routes
})

export default router
