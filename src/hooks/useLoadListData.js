/*
 * @Description: 
 * @Author: Gracia
 * @Date: 2022-01-15 21:34:00
 * @LastEditTime: 2022-01-19 08:53:57
 * @LastEditors: Gracia
 */

import {
  ref,
} from "vue";
import {
  useRequestData
} from "./useRequestData";
import {
  throttle
} from "../utils/index";

export function useLoadListData($axios) {
  const load = ref(null);
  const {
    allData,
    loading
  } = useRequestData($axios, () => {
    total.value = allData.value.length;
    addDataList();
  });
  const list = ref([]);
  const total = ref(0);
  const once = 20;
  const currentNum = ref(1);
  const clientHeight = document.documentElement.clientHeight || document.body.clientHeight;

  const addDataList = () => {
    const start = (currentNum.value - 1) * once;
    const addData = allData.value.slice(start, start + once);
    list.value.push(...addData);
  }

  const getScrollEvent = () => {
    const {
      scrollTop,
      scrollHeight
    } = load.value;
    const currentHeight = scrollTop + clientHeight;
    // 滚动加载
    if (currentHeight >= scrollHeight) {
      currentNum.value++;
      addDataList();
    }
  }

  const throttleScrollEvent = throttle(getScrollEvent, 2000);

  return {
    load,
    list,
    loading,
    total,
    once,
    currentNum,
    throttleScrollEvent
  }
}