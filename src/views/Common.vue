<template>
  <div class="common-container">
    <CustomTable :list="allData" :loading="loading" />
  </div>
</template>

<script>
import { defineComponent, getCurrentInstance } from 'vue'
import CustomTable from "../components/CustomTable.vue";
import { useRequestData } from '../hooks/useRequestData'

export default defineComponent({
  name: 'Common',
  components: {
    CustomTable
  },
  setup() {
    const { appContext } = getCurrentInstance();
    const { $axios } = appContext.config.globalProperties;
    const { allData, loading } = useRequestData($axios)
    return {
      allData,
      loading
    }
  }
})
</script>

<style lang="scss" scoped></style>
