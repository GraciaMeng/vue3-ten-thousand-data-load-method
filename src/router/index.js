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
  meta: {
    title: '首页'
  },
  component: () => import("../views/Home.vue")
},
{
  path: '/common',
  meta: {
    title: '普通'
  },
  component: () => import('../views/Common.vue')
},
{
  path: '/animate',
  meta: {
    title: '帧动画'
  },
  component: () => import("../views/Animate.vue")
}, {
  path: '/cut',
  meta: {
    title: '切片分页'
  },
  component: () => import("../views/Cut.vue")
}, {
  path: '/time-animate',
  meta: {
    title: '计时器帧动画'
  },
  component: () => import("../views/TimeAnimate.vue")
}, {
  path: '/load',
  meta: {
    title: '触底加载'
  },
  component: () => import("../views/Load.vue")
}, {
  path: '/virtual',
  meta: {
    title: '虚拟列表'
  },
  component: () => import("../views/virtual.vue")
}]

export function generateRoute() {
  return routes.map(item => {
    const { path, meta: { title } } = item
    return {
      to: path,
      title
    }
  })
}

export default createRouter({
  history: createWebHistory('/vue3-ten-thousand-data-client/'),
  routes
})