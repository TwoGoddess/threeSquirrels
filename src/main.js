// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'

// 路由
import router from './router'
// axios网络请求
import axios from 'axios'
// 将axios添加到原型,保证任何地方都能访问到
Vue.prototype.axios = axios

// 屏幕适配
import flexible from "./assets/js/flexible"
flexible(window)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
})
