import { defineStore } from "pinia";
import axios from "@/config/axios/axios.js";

export const useRegisterStore = defineStore("register", {
  state: () => {
    return {
      showPassword: false,
      username: "",
      email: "",
      password: "",
      password_confirmation: "",
      errors: null,
    };
  },
  getters: {},
  actions: {
    handleRegister() {
      axios
        .post("register", {
          username: this.username,
          email: this.email,
          password: this.password,
          password_confirmation: this.password_confirmation,
        })
        .then(() => {
          this.username = "";
          this.email = "";
          this.password = "";
          this.password_confirmation = "";
          this.router.replace({ name: "sendEmail" });
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
          console.log(error.response.data.errors);
        });
    },
    toggleShow() {
      this.showPassword = !this.showPassword;
    },
  },
});
