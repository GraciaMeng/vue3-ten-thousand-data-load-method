<!--
 * @Description: 
 * @Author: Gracia
 * @Date: 2022-01-15 10:11:17
 * @LastEditTime: 2022-01-22 17:09:30
 * @LastEditors: Gracia
-->

<template>
  <Header />
  <div class="container">
    <router-view />
  </div>
</template>

<script setup>
import Header from "./layout/Header.vue";
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}
.container {
  width: 80%;
  margin: 0 auto;
  padding-top: 80px;
  padding-bottom: 50px;
  min-height: calc(100vh - 80px - 50px);
}
</style>
