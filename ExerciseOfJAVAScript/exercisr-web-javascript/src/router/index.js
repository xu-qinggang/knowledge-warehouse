import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'mainpage',
  component: () => import('@/views/mainPage/index.vue'),
  children: [{
    path: '',
    name: 'midpage',
    component: () => import('@/views/mainPage/MidPage.vue'),
    children: [{
      path: '/es6',
      name:'es6',
      component: ()=>import('@/views/ES6/index.vue')
    }]
  }]
}]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router