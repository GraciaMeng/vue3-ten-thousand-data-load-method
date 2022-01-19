/*
 * @Description: 
 * @Author: Gracia
 * @Date: 2022-01-15 21:34:00
 * @LastEditTime: 2022-01-18 21:11:55
 * @LastEditors: Gracia
 */

import {
  ref,
  computed,
  nextTick
} from "vue";
import {
  useRequestData
} from "./useRequestData";

export function useVirtualListData($axios) {
  const virtual = ref(null);
  const {
    allData,
    loading
  } = useRequestData($axios, () => {
    clientHeight.value = virtual.value.clientHeight;
    handlerRealNode();
  });
  const itemSize = ref(109);
  const headerSize = ref(0);
  const startOffset = ref(0);
  const start = ref(0);
  const end = computed(() => start.value + visibleCount.value + 1);
  const clientHeight = ref(document.documentElement.clientHeight || document.body.clientHeight);
  const total = computed(() => allData.value.length);
  const listHeight = computed(() => (allData.value.length * itemSize.value) + "px");
  const visibleCount = computed(() => Math.floor(clientHeight.value / itemSize.value));
  const getTransform = computed(() => `translate3d(0,${startOffset.value}px,0)`);
  const list = computed(() => allData.value.slice(start.value, Math.min(end.value, total.value)))


  const getScrollEvent = () => {
    const {
      scrollTop,
    } = virtual.value;
    start.value = Math.floor(scrollTop / itemSize.value);
    //此时的偏移量
    startOffset.value = scrollTop - (scrollTop % itemSize.value);
  }

  const handlerRealNode = () => {
    nextTick(() => {
      const firstNode = document.querySelector(".el-table__row");
      const headerNode = document.querySelector(".el-table__header-wrapper");

      if (firstNode) {
        itemSize.value = firstNode.offsetHeight;
      }
      if (headerNode) {
        headerSize.value = headerNode.offsetHeight;
      }
    })
  }

  return {
    virtual,
    list,
    loading,
    listHeight,
    getTransform,
    getScrollEvent
  }
}