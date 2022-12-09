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

        <div class="pt-[32px]">
          <div class="flex pb-[43px]">
            <div class="flex items-center pr-[24px]">
              <p class="text-[#fff] pr-[12px]">raod</p>
              <img src="@/assets/images/Vectorcomment.png" alt="" />
            </div>
            <div class="flex items-center">
              <p class="text-[#fff] pr-[12px]">raod</p>
              <img src="@/assets/images/Vectorlike.png" alt="" />
            </div>
          </div>
          <div v-for="quotes in store.eachQuote" :key="quotes.id">
            <div
              class="flex pb-[35px]"
              v-for="comments in quotes.comments"
              :key="comments.id"
            >
              <img
                :src="storeCommon.backUrl + comments.user.avatar"
                alt=""
                class="w-[52px] h-[52px] rounded-[50%]"
              />
              <div class="text-[#fff] pl-[24px]">
                <p>{{ comments.user.username }}</p>
                <p class="max-w-[814px] pt-[11px] pb-[24px]">
                  {{ comments.body }}
                </p>
                <img src="@/assets/images/divyLine.png" alt="" />
              </div>
            </div>
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
import { useCrudStore } from "../../stores/crudOperations";
import { useCommonStore } from "../../stores/common";
const storeCommon = useCommonStore();
const store = useCrudStore();
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
