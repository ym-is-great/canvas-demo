import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('@/views/Index')
    },
    {
      path: '/rectangle',
      component: () => import('@/views/Rectangle')
    },
    {
      path: '/text',
      component: () => import('@/views/Text')
    },
    {
      path: '/line-and-path',
      component: () => import('@/views/LineAndPath')
    }
  ]
})
