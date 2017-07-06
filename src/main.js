import Vue from 'vue'
import Router from 'vue-router'
import routes from './router/'
Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(Router)
const router = new Router({
  routes,
  mode: 'history',
  strict: process.env.NODE_ENV !== 'production',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      if (from.meta.keepAlive) {
        from.meta.savedPosition = document.body.scrollTop
      }
      return {
        x: 0,
        y: to.meta.savedPosition || 0
      }
    }
  }
})
new Vue({
  router
}).$mount('#app')
