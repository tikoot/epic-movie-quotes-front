import { defineStore } from "pinia";
import axios from "@/config/axios/axios.js";

export const usePasswordStore = defineStore("password", {
  state: () => {
    return {
      email: "",
      errors: null,
      passwordErrors: null,
      showPassword: false,
      password: null,
      password_confirmation: null,
      token: null,
    };
  },
  getters: {},
  actions: {
    forgotPassword() {
      axios
        .post("forgot-password", { email: this.email })
        .then(() => {
          this.email = "";
          this.router.replace({ name: "SendPasswordEmail" });
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
          console.log(error.response.data.errors);
        });
    },
    toggleShow() {
      this.showPassword = !this.showPassword;
    },
    resetPassword() {
      this.token = this.router.currentRoute.value.query.token;
      this.email = this.router.currentRoute.value.query.email;
      axios
        .post("reset-password", {
          email: this.email,
          password: this.password,
          password_confirmation: this.password_confirmation,
          token: this.token,
        })
        .then(() => {
          this.token = null;
          this.email = "";
          this.password = null;
          this.password_confirmation = null;
          this.errors = null;
          this.router.replace({ name: "successMessage" });
        })
        .catch((error) => {
          this.passwordErrors = error.response.data.errors;
          console.log(error.response.data.errors);
        });
    },
  },
});
