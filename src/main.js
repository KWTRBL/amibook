import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import VueSweetalert2 from 'vue-sweetalert2';

Vue.config.productionTip = false
Vue.use(Antd)
Vue.use(VueSweetalert2);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
