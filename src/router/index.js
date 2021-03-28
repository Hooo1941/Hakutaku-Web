/*
 * @Date: 2021-03-21 19:18:39
 * @LastEditors: QiuJhao
 * @LastEditTime: 2021-03-28 22:09:50
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/manage',
    name: 'Manage',
    component: () => import( /* webpackChunkName: "manage" */ '../views/Manage.vue')
  },
  {
    path: '/device',
    name: 'Device',
    component: () => import(/* webpackChunkName: "device" */ '../views/Device.vue')
  },
  {
    path: '/borrow',
    name: 'Borrow',
    component: () => import(/* webpackChunkName: "borrow" */ '../views/Borrow.vue')
  },
  {
    path: '/user',
    name: 'User',
    component: () => import( /* webpackChunkName: "user" */ '../views/User.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import( /* webpackChunkName: "login" */ '../views/Login.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
