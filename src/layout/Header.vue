<!--
 * @Description: 
 * @Author: Gracia
 * @Date: 2022-01-22 16:40:47
 * @LastEditTime: 2022-01-22 17:06:01
 * @LastEditors: Gracia
-->
<template>
  <header class="header-container">
    <div class="left-header">
      <img class="logo" src="../assets/logo.png" alt="logo" />
      <span>vue3十万条数据加载展示网站</span>
    </div>
    <div class="right-header">
      <div class="link" v-for="(item, index) in urlList" :key="index">
        <router-link :to="item.to">{{ item.path }}</router-link>
      </div>
    </div>
  </header>
</template>

<script setup>
const urlList = [
  { to: "/", path: "首页" },
  { to: "/animate", path: "帧动画" },
  { to: "/cut", path: "切片分页" },
  { to: "/time-animate", path: "计时器帧动画" },
  { to: "/load", path: "触底加载" },
  { to: "/virtual", path: "虚拟列表" },
];
</script>

<style scoped>
.header-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 50px;
  padding-right: 50px;
  z-index: 999;
}
.left-header {
  display: flex;
  align-items: center;
  margin-right: 50px;
}
.logo {
  height: 36px;
}
.right-header {
  height: 100%;
  display: flex;
  flex-direction: row;
}
.link {
  margin-left: 20px;
  height: 50px;
  line-height: 50px;
  text-align: center;
}
.link a {
  text-decoration: none;
}
a:visited {
  color: #000;
}
.link .router-link-active {
  color: #409eff;
}
</style>