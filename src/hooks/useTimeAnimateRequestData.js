/*
 * @Description: 
 * @Author: Gracia
 * @Date: 2022-01-15 12:55:42
 * @LastEditTime: 2022-01-19 09:01:00
 * @LastEditors: Gracia
 */

import {
  ref
} from "vue";
import {
  useRequestData
} from "./useRequestData";

export function useTimeAnimateRequestData($axios) {
  const list = ref([]);
  let total = 0;
  let once = 20;
  let loopCount = 0;
  let countRender = 0;
  let time = 2000;
  let timer;

  const {
    allData,
    loading
  } = useRequestData($axios, () => {
    total = allData.value.length;
    loopCount = Math.ceil(total / once);
    loop();
  });


  const add = () => {
    const data = allData.value.slice(countRender * once, ++countRender * once);
    list.value.push(...data);
    timer = setTimeout(() => {
      loop();
    }, time);
  }

  const loop = () => {
    if (countRender < loopCount) {
      window.requestAnimationFrame(add);
    }
  }

  return {
    list,
    loading
  }
}