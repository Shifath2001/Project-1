import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/Homepage'
import Contactform from '@/components/Contactform'

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
    }
  ]
})
