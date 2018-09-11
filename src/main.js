import Vue from 'vue'
import App from './App.vue'
import store from './store'
import './registerServiceWorker'
import VueDragscroll from 'vue-dragscroll'

Vue.use(VueDragscroll)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
