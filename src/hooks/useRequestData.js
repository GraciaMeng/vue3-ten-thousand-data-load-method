/*
 * @Description: 
 * @Author: Gracia
 * @Date: 2022-01-18 21:08:40
 * @LastEditTime: 2022-01-18 21:12:51
 * @LastEditors: Gracia
 */

import {
  onBeforeMount,
  ref
} from "vue";
import { useComputeLoadTime } from './useComputeLoadTime';

export function useRequestData(request, callback) {
  const allData = ref([]);
  const loading = ref(true);
  const { startCompute, queueComputeJob } = useComputeLoadTime()
  
  onBeforeMount(() => {
    startCompute()
    new Promise((resolve, reject) => {
      request.get(`/api/data`).then(res => resolve(res)).catch(err => reject(err))
    }).then(res => {
      const {
        data: dataList
      } = res.data;
      allData.value = dataList;
      if (callback) callback(dataList);
    }).finally(() => {
      loading.value = false;
      queueComputeJob()
    })
  })
  return {
    allData,
    loading
  }
}