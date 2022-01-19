/*
 * @Description: 
 * @Author: Gracia
 * @Date: 2022-01-15 16:11:14
 * @LastEditTime: 2022-01-18 21:41:59
 * @LastEditors: Gracia
 */

import {
  ref,
  computed,
} from "vue";
import {
  useRequestData
} from "./useRequestData";

export function useCutData($axios) {
  const {
    allData,
    loading
  } = useRequestData($axios, () => {
    total.value = allData.value.length;
  });
  const total = ref(0);
  const once = ref(20);
  const currentNum = ref(1);
  const start = computed(() => (currentNum.value - 1) * once.value);
  const list = computed(() => allData.value.slice(start.value, start.value + once.value));

  return {
    list,
    loading,
    total,
    once,
    currentNum,
  }
}