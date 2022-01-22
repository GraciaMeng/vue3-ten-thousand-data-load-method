<!--
 * @Description: 
 * @Author: Gracia
 * @Date: 2022-01-17 21:18:28
 * @LastEditTime: 2022-01-22 17:08:16
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
  top: 80px;
  width: 80%;
  height: 100%;
  overflow: auto;
}
</style>