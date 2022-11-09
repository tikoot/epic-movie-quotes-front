import { defineStore } from "pinia";

export const useRegisterStore = defineStore("register", {
  state: () => {
    return {
      showPassword: false,
      user: {
        username: "",
        email: "",
        password: "",
        password_confirmation: "",
      },
    };
  },
  getters: {},
  actions: {
    handleRegister() {},
    toggleShow() {
      this.showPassword = !this.showPassword;
    },
  },
});
