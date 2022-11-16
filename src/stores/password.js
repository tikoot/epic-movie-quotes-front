import { defineStore } from "pinia";
import axios from "@/config/axios/axios.js";

export const usePasswordStore = defineStore("password", {
  state: () => {
    return {
      email: "",
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
          console.log(error);
        });
    },
  },
});
