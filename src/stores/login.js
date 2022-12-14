import { defineStore } from "pinia";

export const useLoginStore = defineStore("login", {
  state: () => {
    return {
      showPassword: false,
      email: "",
      password: "",
      errors_login: null,
    };
  },
  getters: {},
  actions: {
    toggleShow() {
      this.showPassword = !this.showPassword;
    },
  },
});
