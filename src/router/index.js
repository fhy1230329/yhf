import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Projects from '@/pages/Projects'
import Services from '@/pages/Services'

Vue.use(Router)

export default new Router({
  mode:'history',//去掉#锚点
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Projects',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/Services',
      name: 'Services',
      component: Services
    },

  ]
})
