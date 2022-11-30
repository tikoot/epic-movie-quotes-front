<template>
  <page-base-component activeList>
    <section class="pl-[127px] min-w-[1200px] box-border">
      <div class="flex justify-between items-center">
        <h1 class="text-2xl text-[#fff]">My list of movies (Total )</h1>
        <div class="flex items-center">
          <div>search</div>

          <router-link
            :to="{ name: 'addMovie' }"
            class="flex items-center px-[17px] py-[9px] text-xl text-[#fff] bg-[#E31221] border-[1px] border-[#E31221] rounded"
          >
            <img
              src="@/assets/images/addicon.png"
              alt="add icon"
              class="mr-[8px]"
            />
            Add movie
          </router-link>
        </div>
      </div>
    </section>
  </page-base-component>
</template>

<script setup>
import axios from "@/config/axios/axios.js";
import { onMounted } from "vue";
import { useMovieStore } from "../../stores/addMovie";
import { useCommonStore } from "../../stores/common";
const store = useMovieStore();
const storeCommon = useCommonStore();

onMounted(() => {
  return axios
    .get("movies/show/" + storeCommon.user.id)
    .then((response) => {
      console.log(response.data);
      store.user_movies = response.data;
    })
    .catch((error) => {
      console.log(error);
    });
});
</script>
