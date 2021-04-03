/*
 * @Date: 2021-03-21 19:18:39
 * @LastEditors: QiuJhao
 * @LastEditTime: 2021-04-04 01:28:08
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/manage',
    name: 'Manage',
    component: () => import( /* webpackChunkName: "manage" */ '../views/Manage.vue')
  },
  {
    path: '/device',
    name: 'Device',
    component: () => import( /* webpackChunkName: "device" */ '../views/Device.vue')
  },
  {
    path: '/borrow',
    name: 'Borrow',
    component: () => import( /* webpackChunkName: "borrow" */ '../views/Borrow.vue')
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
  {
    path: '/logout',
    name: 'Logout',
    component: () => import( /* webpackChunkName: "logout" */ '../views/Logout.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router