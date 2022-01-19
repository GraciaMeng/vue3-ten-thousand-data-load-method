<!--
 * @Description: 
 * @Author: Gracia
 * @Date: 2022-01-15 10:56:48
 * @LastEditTime: 2022-01-18 09:26:21
 * @LastEditors: Gracia
-->
<template>
  <div class="animate">
    <custom-table :loading="loading" :list="list"></custom-table>
  </div>
</template>

<script setup>
import CustomTable from "../components/CustomTable.vue";
import { getCurrentInstance } from "vue";
import { useAnimateRequestData } from "../hooks/useAnimateRequestData";

const { appContext } = getCurrentInstance();
const { $axios } = appContext.config.globalProperties;
const { list, loading } = useAnimateRequestData($axios);
</script>

<style scoped>
</style>