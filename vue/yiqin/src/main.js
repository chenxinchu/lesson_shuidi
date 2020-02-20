import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import View from './views/View.vue'

Vue.use(VueRouter) // url 改变，页面热改变，部分更新

Vue.config.productionTip = false

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/*', // * 匹配所有
    name: 'view',
    component: View 
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})
new Vue({
  router, // 
  render: h => h(App),
}).$mount('#app')
