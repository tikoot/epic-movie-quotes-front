<template>
  <page-base-component activeList>
    <section
      class="pl-[127px] w-full box-border overflow-auto min-h-[100vh] bg-[#151320]"
    >
      <div class="flex justify-between items-center">
        <h1 class="text-2xl text-[#fff]">
          {{ $t("userPage.my_list_of_movies") }} ( {{ $t("userPage.total") }}
          {{ storeCommon.movies.length }})
        </h1>
        <div class="flex items-center">
          <router-link
            :to="{ name: 'addMovie' }"
            class="flex items-center px-[17px] py-[9px] text-xl text-[#fff] bg-[#E31221] border-[1px] border-[#E31221] rounded"
          >
            <img
              src="@/assets/images/addicon.png"
              alt="add icon"
              class="mr-[8px]"
            />
            {{ $t("userPage.add_movie") }}
          </router-link>
        </div>
      </div>
      <div
        v-if="storeCommon.movies.length > 0"
        class="grid grid-cols-3 gap-[50px] pt-[56px]"
      >
        <div
          v-for="movie in storeCommon.movies"
          :key="movie.id"
          class="max-w-sm"
        >
          <img
            class="rounded-[12px] w-[382px] h-[322px]"
            :src="storeCommon.backUrl + '/storage/' + movie.thumbnail"
          />
          <router-link
            :to="{ name: 'movieDescription', params: { id: movie.id } }"
            class="flex text-[#fff] text-[24px] pt-[16px]"
          >
            <div v-if="storeCommon.locale == 'en'">
              <h1>{{ movie.movie_name.en }} ({{ movie.year }})</h1>
            </div>
            <div v-else>
              <h1>{{ movie.movie_name.ka }} ({{ movie.year }})</h1>
            </div>
          </router-link>
          <div class="flex pt-[17px]">
            <p class="text-[20px] pr-[12px] text-[#fff]">quotes</p>
            <img src="@/assets/images/quoteIcon.png" alt="quote icon" />
          </div>
        </div>
      </div>
      <div v-else class="h-[100vh]">
        <h1 class="pt-[50px] text-[#fff] text-lg">
          {{ $t("userPage.you_have_not_added_any_movies_yet") }}
        </h1>
      </div>
    </section>
  </page-base-component>
</template>

<script setup>
import { onMounted } from "vue";
import { useCommonStore } from "../stores/common";
const storeCommon = useCommonStore();

onMounted(() => {
  storeCommon.showMovies();
});
</script>
