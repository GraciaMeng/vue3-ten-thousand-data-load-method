import { useRoute } from 'vue-router';
import { useDataStore } from '../store/useDataStore';

export function useComputeLoadTime() {
  const route = useRoute()
  const dataStore = useDataStore()
  dataStore.initData()
  let startTime = 0
  function startCompute() {
    startTime = new Date().getTime()
  }
  function queueComputeJob() {
    setTimeout(()=>{
      const endTime = new Date().getTime()
      const computeTime = endTime - startTime
      dataStore.addComputeTime(route.fullPath, computeTime)
    }, 0)
  }
  return {
    startCompute,
    queueComputeJob
  }
}