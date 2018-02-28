import Vue from 'vue'
import Router from 'vue-router'
import User from '@/components/User'
import Callback from '@/components/Callback'
import Home from '@/components/Home'
import Admin from '@/components/Admin'
import Logout from '@/components/logout'
import video from '@/components/video'
import ViewTrainingData from '@/components/ViewTrainingData'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/logout',
      name: 'Logout',
      component: Logout
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/callback',
      name: 'Callback',
      component: Callback
    },
    {
      path: '/video/:item',
      name: 'video',
      component: video
    },
    {
      path: '/ViewTrainingData/:item',
      name: 'ViewTrainingData',
      component: ViewTrainingData
    }
  ]
})
