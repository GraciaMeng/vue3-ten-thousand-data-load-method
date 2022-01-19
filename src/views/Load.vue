<!--
 * @Description: 
 * @Author: Gracia
 * @Date: 2022-01-17 21:18:28
 * @LastEditTime: 2022-01-19 08:51:15
 * @LastEditors: Gracia
-->
<template>
  <div ref="load" class="load" @scroll="throttleScrollEvent">
    <custom-table :loading="loading" :list="list"></custom-table>
  </div>
</template>

<script setup>
import CustomTable from "../components/CustomTable.vue";
import { getCurrentInstance } from "vue";
import { useLoadListData } from "../hooks/useLoadListData";

const { appContext } = getCurrentInstance();
const { $axios } = appContext.config.globalProperties;
const { load, list, loading, throttleScrollEvent } = useLoadListData($axios);
</script>

<style scoped>
.load {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  overflow: auto;
}
</style>