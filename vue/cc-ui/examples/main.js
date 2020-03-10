import Vue from 'vue'
import App from './App.vue'

import cc_ui from '../packages'

Vue.use(cc_ui)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
