<!--
 * @Description: 
 * @Author: Gracia
 * @Date: 2022-01-15 10:31:31
 * @LastEditTime: 2022-01-18 08:32:40
 * @LastEditors: Gracia
-->
<template>
  <div class="home">
    <ul>
      <li v-for="(item, index) in urlList" :key="index">
        <router-link :to="item.to">{{ item.path }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
const urlList = [
  { to: "/animate", path: "animate" },
  { to: "/cut", path: "cut" },
  { to: "/time-animate", path: "time-animate" },
  { to: "/load", path: "load" },
  { to: "/virtual", path: "virtual" },
];
</script>
<style scoped>
</style>