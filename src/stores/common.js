import { defineStore } from "pinia";

export const useCommonStore = defineStore("common", {
  state: () => {
    return {
      locale: "en",
      backUrl: import.meta.env.VITE_BASE_URL,
      user: {},
      movies: {},
    };
  },
});
