import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/Homepage'
import Contactform from '@/components/Contactform'
import Services from '@/components/Services'
import About from '@/components/About'
import Loginpage from  '@/components/Loginpage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage' , 
      component: Homepage 
    },
    {
      path: '/contact',
      name: 'Contactform' , 
      component: Contactform 
    },
    {
      path: '/services',
      name: 'Services' , 
      component: Services 
 

    },
    {
     path: '/about',
     name: '/About',
     component: About

    },

    {
     path: '/login',
     name:'/Loginpage',
     component: Loginpage


    }

  ]
})
