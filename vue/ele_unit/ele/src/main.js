import Vue from 'vue'
import App from './App.vue'
import router from './router'

import ccui from '@chen_cc/cc-ui'
import '@chen_cc/cc-ui/lib/cc_ui.css'

Vue.use(ccui)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
