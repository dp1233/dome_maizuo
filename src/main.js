import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from '@/api/http.js'


Vue.config.productionTip = false


Vue.prototype.$http = axios;

//定义事件中心
// Vue.prototype.$eventBus = new Vue()
//从缓存中取出JWT
let jwt = localStorage.getItem('_token')
if (jwt) {
  store.commit('global/setJwt',jwt)
}
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
