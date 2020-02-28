import Vue from 'vue'
import Router from 'vue-router'
// 首页直接载入
import HelloWorld from '@/components/HelloWorld'
// 延迟加载组件，当用户切换路由时，再来加载显示
// @的意思,短链接  webpack alias 快速链接
// @表示src
const Login = () => import('../components/Login');
const GoodsList = resolve => require(['@/components/GoodsList'], resolve);

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Login', // 登录
      name: 'Login',
      component: Login
    },
    {
      path: '/goodsList', // 商品列表
      name: 'GoodsList',
      component: GoodsList
    }
  ]
})
