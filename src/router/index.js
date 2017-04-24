import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import demo01 from '@/components/demo01'
import demo02 from '@/components/demo02'
import demo03 from '@/components/demo03'
import demo04 from '@/components/demo04'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/demo01',
      name: 'demo01',
      component:demo01
    },
    {
      path: '/demo02',
      name: 'demo02',
      component:demo02
    },
    {
      path: '/demo03',
      name: 'demo03',
      component:demo03
    },
       {
      path: '/demo04',
      name: 'demo04',
      component:demo04
    },
    
    
  ]
})
