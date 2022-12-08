import { defineStore } from "pinia";
import axiosInstance from "@/config/axios/axios";

export const useMovieStore = defineStore("movie", {
  state: () => {
    return {
      movie_name_en: "",
      movie_name_ka: "",
      director_ka: "",
      director_en: "",
      description_ka: "",
      description_en: "",
      thumbnail: "",
      year: null,
      budget: null,
      tags: [],
      errors: null,
      movie_description: null,
      quotes: null,
      visible: false,
    };
  },
  actions: {
    toggleShow() {
      this.visible = !this.visible;
    },
    deleteQuote(id) {
      axiosInstance
        .delete("quotes/" + id)
        .then((response) => {
          console.log(response);
          this.router.back();
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});
