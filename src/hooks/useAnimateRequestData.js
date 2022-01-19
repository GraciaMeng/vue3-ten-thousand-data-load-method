/*
 * @Description: 
 * @Author: Gracia
 * @Date: 2022-01-15 12:55:42
 * @LastEditTime: 2022-01-18 21:37:18
 * @LastEditors: Gracia
 */

import {
  ref,
  computed,
  onBeforeUnmount,
  watch,
} from "vue";
import {
  useRequestData
} from "./useRequestData";

export function useAnimateRequestData($axios) {
  const list = ref([]);
  const total = ref(0);
  const once = ref(20);
  const countRender = ref(0);
  const animationFrameId = ref(undefined);
  const loopCount = computed(() => Math.ceil(total.value / once.value));
  const {
    allData,
    loading
  } = useRequestData($axios, () => {
    total.value = allData.value.length;
    loop();
  });

  watch(countRender,
    (newCountRender, preCountRender) => {
      const addData = allData.value.slice(preCountRender * once.value, newCountRender * once.value)
      list.value.push(...addData)
    })

  const add = () => {
    ++countRender.value;
    loop();
  }
  const loop = () => {
    if (countRender.value < loopCount.value) {
      animationFrameId.value = window.requestAnimationFrame(add);
    }
  }
  onBeforeUnmount(() => {
    cancelAnimationFrame(animationFrameId.value)
  })
  return {
    list,
    loading
  }
}