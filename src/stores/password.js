import { defineStore } from "pinia";
import axios from "@/config/axios/axios.js";

export const usePasswordStore = defineStore("password", {
  state: () => {
    return {
      email: "",
      errors: null,
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
  },
});
