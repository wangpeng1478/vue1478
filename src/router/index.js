import Vue from 'vue'
import Router from 'vue-router'
import hello from '@/components/hello'
import index from '@/components/index/index'
import news from '@/components/news/news'
import error404 from '@/components/error/error404'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'hello',
      component: hello
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/news',
      name: 'news',
      component: news
    },
    {
      path: '/error404',
      name: 'error404',
      component: error404
    },
  ]
})
