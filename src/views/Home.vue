<!--
 * @Description: 
 * @Author: Gracia
 * @Date: 2022-01-15 10:31:31
 * @LastEditTime: 2022-01-22 17:02:41
 * @LastEditors: Gracia
-->
<template>
  <div class="home">
    <img src="../assets/logo.png" alt="logo" />
    <ComputeTable :list="computeData" />
  </div>
</template>

<script setup>
  import ComputeTable from "../components/ComputeTable.vue";
import { useDataStoreToRefs } from '../store/useDataStore';
const { computeData, dataStore } = useDataStoreToRefs()
dataStore.initData()
</script>
<style scoped>
.home {
  text-align: center;
}
</style>