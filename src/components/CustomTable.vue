<!--
 * @Description: 
 * @Author: Gracia
 * @Date: 2022-01-15 16:16:42
 * @LastEditTime: 2022-01-15 16:22:04
 * @LastEditors: Gracia
-->
<template>
  <div class="table">
    <el-table v-loading="loading" :data="list" border style="width: 80%">
      <el-table-column prop="id" label="序号" />
      <el-table-column prop="ctime" label="创建时间" />
      <el-table-column prop="nickname" label="姓名" />
      <el-table-column prop="area" label="地区" />
      <el-table-column prop="email" label="邮箱" />
      <el-table-column prop="title" label="标题" />
      <el-table-column prop="text" label="文本" />
    </el-table>
  </div>
</template>

<script setup>
defineProps({
  loading: {
    type: Boolean,
    default: true,
  },
  list: {
    type: Array,
    default: () => [],
  },
});
</script>