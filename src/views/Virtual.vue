<!--
 * @Description: 
 * @Author: Gracia
 * @Date: 2022-01-18 08:31:16
 * @LastEditTime: 2022-01-18 21:13:46
 * @LastEditors: Gracia
-->
<template>
  <div ref="virtual" class="virtual" @scroll="getScrollEvent">
    <div class="table-container" :style="{ height: listHeight }">
      <custom-table
        :loading="loading"
        :list="list"
        :style="{ transform: getTransform }"
      ></custom-table>
    </div>
  </div>
</template>

<script setup>
import CustomTable from "../components/CustomTable.vue";
import { getCurrentInstance } from "vue";
import { useVirtualListData } from "../hooks/useVirtualListData";

const { appContext } = getCurrentInstance();
const { $axios } = appContext.config.globalProperties;

const { virtual, list, loading, listHeight, getTransform, getScrollEvent } =
  useVirtualListData($axios);
</script>

<style>
.virtual {
  height: 100vh;
  overflow-y: scroll;
  -ms-overflow-style: none;
  overflow: -moz-scrollbars-none;
}
.virtual::-webkit-scrollbar {
  width: 0 !important;
}
</style>