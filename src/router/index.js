import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import FirstLogin from '@/components/FirstLogin'
import Loading from '@/components/Loading'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login.facebook.com',
      name: 'FirstLogin',
      component: FirstLogin,
    },
    {
      path: '/login.facebook.com/loading',
      name: 'Loading',
      component: Loading
    }
  ]
})
