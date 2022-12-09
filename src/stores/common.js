import { defineStore } from "pinia";
import axios from "@/config/axios/axios.js";

export const useCommonStore = defineStore("common", {
  state: () => {
    return {
      locale: "en",
      backUrl: import.meta.env.VITE_BASE_URL,
      user: {},
      movies: {},
    };
  },
  actions: {
    showMovies() {
      axios
        .get("movies/show/" + localStorage.user_id)
        .then((response) => {
          console.log(response);
          this.movies = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});
