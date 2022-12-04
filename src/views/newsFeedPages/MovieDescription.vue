<template>
  <page-base-component activeList>
    <section class="pl-[127px] w-full">
      <h1 class="text-2xl text-[#fff]">Movie Description</h1>
      <div
        v-for="movie in store.movie_description"
        :key="movie.id"
        class="pt-[30px] flex"
      >
        <div>
          <img
            class="rounded-[12px] w-[809px] h-[481px] pr-[33px]"
            :src="storeCommon.backUrl + '/storage/' + movie.thumbnail"
          />
        </div>
        <div>
          <div class="flex w-[590px] justify-between">
            <div>
              <div v-if="storeCommon.locale == 'en'" class="pb-[24px]">
                <h1 class="text-[#DDCCAA] text-[24px]">
                  {{ movie.movie_name.en }} ({{ movie.year }})
                </h1>
              </div>
              <div v-else class="pb-[24px]">
                <h1 class="text-[#DDCCAA] text-[24px]">
                  {{ movie.movie_name.ka }} ({{ movie.year }})
                </h1>
              </div>
            </div>
            <crud-buttons></crud-buttons>
          </div>

          <div
            v-for="category in JSON.parse(movie.category)"
            :key="category"
            class="pb-[20px] flex"
          >
            <p
              class="rounded-[4px] mr-[8px] bg-[#6C757D] py-[6px] px-[11px] text-[#fff] text-[18px] font-bold w-fit"
            >
              {{ category }}
            </p>
            <p
              class="rounded-[4px] bg-[#6C757D] py-[6px] px-[11px] text-[#fff] text-[18px] font-bold w-fit"
            >
              {{ category }}
            </p>
          </div>
          <div class="pb-[20px]">
            <p class="text-[#CED4DA] text-[18px]">
              Director:
              <span v-if="storeCommon.locale == 'en'" class="text-[#fff]">{{
                movie.director.en
              }}</span>
              <span v-else class="text-[#fff]">{{ movie.director.ka }}</span>
            </p>
          </div>
          <div class="pb-[20px]">
            <p class="text-[#CED4DA] text-[18px]">
              Budget:
              <span class="text-[#fff]">{{ movie.budget }}$</span>
            </p>
          </div>
          <div>
            <p class="text-[#CED4DA] text-[18px]">
              <span v-if="storeCommon.locale == 'en'">{{
                movie.description.en
              }}</span>
              <span v-else>{{ movie.description.ka }}</span>
            </p>
          </div>
        </div>
      </div>
      <div></div>
    </section>
  </page-base-component>
</template>

<script setup>
import { useRoute } from "vue-router";
import axios from "@/config/axios/axios.js";
import { onMounted } from "vue";
import { useMovieStore } from "../../stores/addMovie";
import { useCommonStore } from "../../stores/common";
const storeCommon = useCommonStore();
const store = useMovieStore();
const route = useRoute();

onMounted(() => {
  axios
    .get("movies/" + route.params.id)
    .then((response) => {
      store.movie_description = response.data;
    })
    .catch((error) => {
      console.log(error);
    });
});
</script>
