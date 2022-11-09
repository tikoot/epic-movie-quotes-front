import { defineStore } from "pinia";

export const useRegisterStore = defineStore("register", {
  state: () => {
    return {
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
    registerUser() {
      console.log(this.user);
    },
  },
});
