// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import router from './router'
import axios from 'axios' // 处理http请求

Vue.use(VueRouter)

Vue.config.productionTip = false
/* eslint-disable no-new */
router.beforeEach(function(to, from, next) {
	console.log('开始')
	  if (to.name == null) {
	  	next('/error404')
	  }else{
	  	next()
	  }
  
})

router.afterEach((to) => {
	console.log('结束')
    window.scrollTo(0, 0);
});


Vue.prototype.$http = axios
axios.defaults.headers.post['Content-Type1111111'] = 'headers'

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  mounted(){
  	axios.interceptors.response.use(function (response) {
            console.log('成功')
            return response;
          }, function (error) {
            console.log('失败')
            console.log(error)
            return Promise.reject(error);
          });
  }
})
