<!--
 * @Description: 
 * @Author: Gracia
 * @Date: 2022-01-15 16:16:16
 * @LastEditTime: 2022-01-18 09:26:32
 * @LastEditors: Gracia
-->
<template>
  <div class="time-animate">
    <custom-table :loading="loading" :list="list"></custom-table>
  </div>
</template>

<script setup>
import CustomTable from "../components/CustomTable.vue";
import { getCurrentInstance } from "vue";
import { useTimeAnimateRequestData } from "../hooks/useTimeAnimateRequestData";

const { appContext } = getCurrentInstance();
const { $axios } = appContext.config.globalProperties;
const { list, loading } = useTimeAnimateRequestData($axios);
</script>

<style scoped>
</style>