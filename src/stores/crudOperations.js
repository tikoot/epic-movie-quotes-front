import { defineStore } from "pinia";
import axiosInstance from "@/config/axios/axios";
import axios from "@/config/axios/axios.js";

export const useCrudStore = defineStore("crudOperations", {
  state: () => {
    return {
      movie_name_en: "",
      movie_name_ka: "",
      director_ka: "",
      director_en: "",
      description_ka: "",
      description_en: "",
      thumbnail: "",
      quote_thumbnail: "",
      quote_edit_thumbnail: null,
      movie_edit_thumbnail: null,
      year: null,
      budget: null,
      tags: [],
      errors: null,
      movie_description: null,
      quotes: null,
      visible: false,
      eachQuote: null,
      isDragging: false,
      dragCount: 0,
    };
  },
  actions: {
    toggleShow() {
      this.visible = !this.visible;
    },
    deleteQuote(id, param) {
      axiosInstance
        .delete("quotes/" + id)
        .then((response) => {
          console.log(response);
          this.showQuotes(param);
          this.router.replace({
            name: "movieDescription",
            params: { id: param },
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    movieDescription(param) {
      axios
        .get("movies/" + param)
        .then((response) => {
          this.movie_description = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    showQuotes(param) {
      axios
        .get("quotes/show/" + param)
        .then((response) => {
          this.quotes = response.data;
          this.Quotelength = response.data.length;
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});
