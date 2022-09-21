import { defineStore, storeToRefs } from "pinia";
import { generateRoute } from '../router';

export const useDataStore = defineStore("data", {
  state: () => {
    return {
      computeData: []
    };
  },
  actions: {
    initData() {
      if (this.computeData.length) return
      const info = generateRoute()
      this.computeData = info.map(item => {
        return {
          ...item,
          load_time: 0
        }
      }).slice(1)
    },
    addComputeTime(to, loadTime) {
      const index = this.computeData.findIndex(item => item.to === to)
      this.computeData[index].load_time = loadTime / 1000
    }
  },
});

export function useDataStoreToRefs() {
  const dataStore = useDataStore();
  return {
    dataStore,
    ...storeToRefs(dataStore),
  };
}
