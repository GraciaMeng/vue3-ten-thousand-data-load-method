/*
 * @Description: 路由配置
 * @Author: Gracia
 * @Date: 2022-01-15 10:29:29
 * @LastEditTime: 2022-01-18 08:33:04
 * @LastEditors: Gracia
 */

import {
  createRouter,
  createWebHistory
} from "vue-router";

const routes = [{
  path: '/',
  component: () => import("../views/Home.vue")
}, {
  path: '/animate',
  component: () => import("../views/Animate.vue")
}, {
  path: '/cut',
  component: () => import("../views/Cut.vue")
}, {
  path: '/time-animate',
  component: () => import("../views/TimeAnimate.vue")
}, {
  path: '/load',
  component: () => import("../views/Load.vue")
}, , {
  path: '/virtual',
  component: () => import("../views/virtual.vue")
}]

export default createRouter({
  history: createWebHistory(),
  routes
})