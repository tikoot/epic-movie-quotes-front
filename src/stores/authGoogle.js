import { defineStore } from "pinia";
import axios from "@/config/axios/axios.js";

export const useGoogleStore = defineStore("authGoogle", {
  state: () => {
    return {};
  },
  actions: {
    authWithGoogle() {
      axios
        .get("auth/google/redirect")
        .then((response) => {
          window.location.href = response.data.url;
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});
