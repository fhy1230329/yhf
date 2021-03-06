import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Projects from '@/pages/Projects'
import Services from '@/pages/Services'
import Blog from '@/pages/Blog'
import BlogDetails from '@/pages/BlogDetails'
import ContactUs from '@/pages/ContactUs'
import About from '@/pages/About'
import Shop from '@/pages/Shop'
import ShopCart from '@/pages/ShopCart'
import SingleProduct from '@/pages/SingleProduct'

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
    {
      path: '/About',
      name: 'About',
      component: About
    },
    {
      path: '/Blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/BlogDetails',
      name: 'BlogDetails',
      component: BlogDetails
    },
    {
      path: '/ContactUs',
      name: 'ContactUs',
      component: ContactUs
    },
    {
      path: '/Shop',
      name: 'Shop',
      component: Shop
    },
    {
      path: '/ShopCart',
      name: 'ShopCart',
      component: ShopCart
    },
   
    {
      path: '/SingleProduct',
      name: 'SingleProduct',
      component: SingleProduct
    },
  ]
})
