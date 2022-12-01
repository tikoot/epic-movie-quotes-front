import { defineStore } from "pinia";

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
      user_movies: {},
      errors: null,
    };
  },
});
