<!--
 * @Description: 
 * @Author: Gracia
 * @Date: 2022-01-15 10:56:48
 * @LastEditTime: 2022-01-15 18:54:42
 * @LastEditors: Gracia
-->

<template>
  <div class="cut">
    <custom-table :loading="loading" :list="list"></custom-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="total"
      :page-size="once"
      v-model:current-page="currentNum"
    >
    </el-pagination>
  </div>
</template>

<script setup>
import CustomTable from "../components/CustomTable.vue";
import { getCurrentInstance } from "vue";
import { useCutData } from "../hooks/useCutData";

const { appContext } = getCurrentInstance();
const { $axios } = appContext.config.globalProperties;
const { list, loading, total, once, currentNum } = useCutData($axios);
</script>

<style scoped>
</style>