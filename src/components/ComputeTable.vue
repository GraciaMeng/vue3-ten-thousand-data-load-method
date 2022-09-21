<template>
  <div class="table">
    <el-table v-loading="loading" :data="transformList" border style="width: 100%">
      <el-table-column prop="title" label="标题" align="center">
        <template #default="scope">
          <router-link :to="scope.row.to">{{scope.row.title}}</router-link>
        </template>
      </el-table-column>
      <el-table-column prop="load_time" label="加载时间" align="center" />
    </el-table>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  loading: {
    type: Boolean,
    default: false,
  },
  list: {
    type: Array,
    default: () => [],
  },
});
const transformList = computed(() => props.list.map(item => ({
  ...item,
  load_time: `${item.load_time}s`
})))
</script>

<style scoped>
a {
  text-decoration: none;
  color: #409eff;
}

a:visited {
  color: #000;
}

.link .router-link-active {
  color: #409eff;
}
</style>