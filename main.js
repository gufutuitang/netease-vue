import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false
//2注册
Vue.use(VueLazyload)
Vue.use(VueLazyload, {
  preload:1.3,
  reeor: 'dis/err.error.png',
  attempt:1
})


new Vue({
  router,
  store,
  VueLazyload,
  render: h => h(App)
}).$mount('#app')
