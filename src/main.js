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
import rem from "./assets/js/rem"
rem(document,window)
// import flexible from "./assets/js/flexible"
// flexible(window)

//懒加载图片插件
import VueLazyLoad from 'vue-lazy-load'
Vue.use(VueLazyLoad)
Vue.use(VueLazyLoad, {
	preload: 1.3,
	error: '',
	loading: ''
})

// vuex
import store from "./vuex/store"

// 轮播图
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

// 过滤器
import filter from "./assets/js/filter"

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: {App},
  router
})


