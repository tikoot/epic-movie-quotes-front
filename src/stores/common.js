import { defineStore } from "pinia";

export const useCommonStore = defineStore("common", {
  state: () => {
    return {
      locale: "en",
    };
  },
});
