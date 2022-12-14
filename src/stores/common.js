import { defineStore } from "pinia";
import axios from "@/config/axios/axios.js";

export const useCommonStore = defineStore("common", {
  state: () => {
    return {
      locale: "en",
      backUrl: import.meta.env.VITE_BASE_URL,
      user: {},
      movies: {},
      quotes_all: [],
      params: {},
      searchString: null,
      username: "",
      avatar: "",
      readonly: true,
      readonlyPass: true,
      update_user_avatar: null,
      change_email: "",
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
    allQuotes() {
      axios
        .get("/quotes-all")
        .then((response) => {
          this.quotes_all = response.data.data;
          this.params.next_page_url = response.data.next_page_url;
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    scroll() {
      setTimeout(() => {
        window.onscroll = async () => {
          let bottomOfWindow =
            Math.max(
              window.pageYOffset,
              document.documentElement.scrollTop,
              document.body.scrollTop
            ) +
              window.innerHeight ===
            document.documentElement.offsetHeight;

          if (bottomOfWindow) {
            this.max = true;
            let pagination = this.params.next_page_url;
            if (pagination !== null) {
              axios
                .get(pagination)
                .then((response) => {
                  console.log(response);
                  for (let i = 0; i < response.data.data.length; i++) {
                    this.quotes_all.push(response.data.data[i]);
                  }
                  this.params.next_page_url = response.data.next_page_url;
                })
                .catch((error) => {
                  console.log(error);
                });
            }
          }
        };
      }, 2000);
    },
    getResults() {
      setTimeout(() => {
        axios
          .get("/quotes-all", { params: { search: this.searchString } })
          .then((response) => {
            this.quotes_all = response.data.data;
            this.params.next_page_url = response.data.next_page_url;
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
      }, 500);
    },
    editProfile() {
      this.readonly = false;
    },
    editPassword() {
      this.readonlyPass = false;
    },
  },
});
