import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ECharts from 'vue-echarts/components/ECharts.vue'
import 'echarts'
import 'bootstrap/scss/bootstrap.scss'

Vue.config.productionTip = false
Vue.component('chart', ECharts)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
