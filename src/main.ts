import Vue from 'vue'
import * as VueGL from "vue-gl";
import App from './App.vue'
import router from './router'
import store from './store'

import MyButton from '@/components/buttons/MyButton.vue'

Vue.config.productionTip = false

Vue.component('MyButton', MyButton)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
