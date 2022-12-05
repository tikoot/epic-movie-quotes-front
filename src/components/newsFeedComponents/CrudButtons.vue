<template>
  <div
    class="flex items-center bg-[#24222F] rounded-[10px] py-[10px] px-[27px] h-fit"
  >
    <router-link :to="{ name: 'updateMovie' }">
      <img
        src="@/assets/images/VectorEdit.png"
        alt="edit icon"
        class="w-full h-full"
      />
    </router-link>
    <img src="@/assets/images/Line8.png" alt="line" class="px-[25px]" />
    <button @click="deleteMovie">
      <img src="@/assets/images/VectorDelete.png" alt="delete icon" />
    </button>
  </div>
</template>

<script setup>
import axiosInstance from "@/config/axios/axios";
import { useRouter } from "vue-router";
import { useMovieStore } from "../../stores/addMovie";

const router = useRouter();
const store = useMovieStore();

const movieId = store.movie_description[0].id;
const deleteMovie = async () => {
  axiosInstance
    .delete("movies/" + movieId)
    .then((response) => {
      console.log(response);
      router.replace({ name: "movieList" });
    })
    .catch((error) => {
      console.log(error);
    });
};
</script>
