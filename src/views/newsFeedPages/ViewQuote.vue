<template>
  <page-base-dialog>
    <section>
      <div
        class="pr-[41px] pl-[32px] border-b border-[#efefef33] pt-[33px] pb-[23px]"
      >
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <router-link :to="{ name: 'editQuote' }">
              <img
                src="@/assets/images/VectorEdit.png"
                alt="edit icon"
                class="w-full h-full"
              />
            </router-link>
            <img src="@/assets/images/Line8.png" alt="line" class="px-[25px]" />
            <button @click="store.deleteQuote(route.params.id)">
              <img src="@/assets/images/VectorDelete.png" alt="delete icon" />
            </button>
          </div>
          <h1 class="text-center text-[#fff] text-[24px]">
            {{ $t("userPage.view_quote") }}
          </h1>
          <button @click="this.$router.back()">
            <img src="@/assets/images/exit.png" alt="exit icon" />
          </button>
        </div>
      </div>
      <div class="px-[32px]">
        <div class="flex items-center justify-start pb-[28px] pt-[30px]">
          <img
            :src="storeCommon.backUrl + storeCommon.user.avatar"
            alt="user avatar"
            class="object-contain h-[60px] w-[60px] rounded-full bg-[#D9D9D9]"
          />
          <h1 class="text-[#fff] text-[20px] pl-[16px]">
            {{ storeCommon.user.username }}
          </h1>
        </div>
        <div v-for="quote in store.eachQuote" :key="quote.id">
          <div class="relative w-full mb-[20px]">
            <p
              class="w-full relative text-[#fff] border-2 border-[#6C757D] bg-[#11101A] py-[9px] pl-[17px] rounded-[4.8px]"
            >
              “{{ quote.quote.en }}”
            </p>
            <span class="absolute top-[9px] right-[9px] text-[#6C757D]"
              >Eng</span
            >
          </div>
          <div class="relative w-full mb-[20px]">
            <p
              class="w-full relative text-[#fff] border-2 border-[#6C757D] bg-[#11101A] py-[9px] pl-[17px] rounded-[4.8px]"
            >
              “{{ quote.quote.ka }}”
            </p>
            <span class="absolute top-[9px] right-[9px] text-[#6C757D]"
              >ქარ</span
            >
          </div>
          <div>
            <img
              class="w-[897px] h-[513px] pr-[33px] rounded-[10px]"
              :src="storeCommon.backUrl + '/storage/' + quote.thumbnail"
            />
          </div>
        </div>
      </div>
    </section>
  </page-base-dialog>
</template>

<script setup>
import axios from "@/config/axios/axios.js";
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { useMovieStore } from "../../stores/addMovie";
import { useCommonStore } from "../../stores/common";
const storeCommon = useCommonStore();
const store = useMovieStore();
const route = useRoute();

onMounted(() => {
  axios
    .get("quotes/" + route.params.id)
    .then((response) => {
      store.eachQuote = response.data;
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
});
</script>
