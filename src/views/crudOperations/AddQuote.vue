<template>
  <page-base-dialog>
    <section>
      <div
        class="pl-[425px] pr-[41px] border-b border-[#efefef33] pt-[33px] pb-[23px]"
      >
        <div class="flex items-center justify-between">
          <h1 class="text-center w-[120px] text-[#fff] text-[24px]">
            {{ $t("userPage.add_quote") }}
          </h1>
          <button @click="this.$router.back()">
            <img src="@/assets/images/exit.png" alt="exit icon" />
          </button>
        </div>
      </div>
      <div class="px-[32px]">
        <div class="flex items-center justify-start pb-[28px] pt-[30px]">
          <img
            :src="storeCommon.backUrl + 'storage/' + storeCommon.user.avatar"
            alt="user avatar"
            class="object-contain h-[60px] w-[60px] rounded-full bg-[#D9D9D9]"
          />
          <h1 class="text-[#fff] text-[20px] pl-[16px]">
            {{ storeCommon.user.username }}
          </h1>
        </div>
        <div
          v-for="movie in store.movie_description"
          :key="movie.id"
          class="flex pb-[28px]"
        >
          <div>
            <img
              class="rounded-[12px] w-[280px] h-[158px] pr-[27px]"
              :src="storeCommon.backUrl + 'storage/' + movie.thumbnail"
            />
          </div>
          <div>
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
            <div class="flex">
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
              </div>
            </div>
            <div class="pb-[20px]">
              <p class="text-[#CED4DA] text-[18px]">
                {{ $t("userPage.director") }}:
                <span v-if="storeCommon.locale == 'en'" class="text-[#fff]">{{
                  movie.director.en
                }}</span>
                <span v-else class="text-[#fff]">{{ movie.director.ka }}</span>
              </p>
            </div>
          </div>
        </div>
        <VueForm @submit="storeQuote" class="flex flex-col w-full">
          <div v-if="store.errors !== ''">
            <div v-for="(value, key) in store.errors" :key="key">
              <p
                v-for="error in value"
                :key="error"
                class="text-[#E31221] text-base py-[5px]"
              >
                {{ error }}
              </p>
            </div>
          </div>
          <div class="relative w-full mb-[20px]">
            <Field
              as="textarea"
              name="quote_en"
              v-model.trim="store.quote_en"
              class="border-2 border-[#6C757D] text-[#fff] placeholder:text-[#fff] bg-[#11101A] py-[9px] pl-[17px] rounded-[4.8px] w-full"
              placeholder="???Quote in English.???"
              rules="required|english_alphabet"
            />
            <span class="absolute top-[13px] right-[9px] text-[#6C757D]"
              >Eng</span
            >
            <ErrorMessage
              name="quote_en"
              class="text-[#E31221] text-base pb-[5px] pl-5"
            />
          </div>
          <div class="relative w-full mb-[20px]">
            <Field
              as="textarea"
              name="quote_ka"
              v-model.trim="store.quote_ka"
              class="border-2 border-[#6C757D] text-[#fff] placeholder:text-[#fff] bg-[#11101A] py-[9px] pl-[17px] rounded-[4.8px] w-full"
              placeholder="????????????????????? ?????????????????? ??????????????????"
              rules="required|georgian_alphabet"
            />
            <span class="absolute top-[13px] right-[9px] text-[#6C757D]"
              >Ka</span
            >
            <ErrorMessage
              name="quote_ka"
              class="text-[#E31221] text-base pb-[5px] pl-5"
            />
          </div>
          <div
            class="w-full h-[84px] flex items-center border-[#6C757D] border-[1px] rounded-[4px] mb-[40px]"
          >
            <DragAndDrop
              @drop.prevent="drop"
              @change="selectedFile"
              :thumbnail="store.quote_thumbnail.name"
            ></DragAndDrop>
          </div>
          <div class="relative w-full">
            <img
              src="@/assets/images/VectorCamera.png"
              alt=""
              class="absolute left-[24px] top-[18px]"
            />
            <select
              disabled
              class="bg-[#000] w-full text-[#fff] text-[24px] mb-[48px] pb-[15px] pt-[25px] pl-[68px] pr-[32px] rounded-[4px]"
            >
              <option
                v-for="movie in store.movie_description"
                :key="movie.id"
                :value="movie.id"
                class="bg-[#000] text-[#fff]"
              >
                {{ movie.movie_name.en }}
              </option>
            </select>
          </div>
          <button
            class="w-full rounded-[4px] py-[7px] px-[13px] text-center text-white bg-[#E31221] mt-[8px] mb-[44px]"
            type="submit"
          >
            Post
          </button>
        </VueForm>
      </div>
    </section>
  </page-base-dialog>
</template>

<script setup>
import DragAndDrop from "@/components/newsFeedComponents/DragAndDrop.vue";
import axiosInstance from "@/config/axios/axios";
import { Form as VueForm, Field, ErrorMessage } from "vee-validate";
import { useCrudStore } from "../../stores/crudOperations";
import { useCommonStore } from "../../stores/common";
import { useRouter } from "vue-router";

const storeCommon = useCommonStore();
const store = useCrudStore();
const router = useRouter();

const drop = (e) => {
  store.quote_thumbnail = e.dataTransfer.files[0];
};
const selectedFile = () => {
  store.quote_thumbnail = document.querySelector(".dropzoneFile").files[0];
};

const storeQuote = async () => {
  axiosInstance
    .post(
      "quotes/store",
      {
        movie_id: store.movie_description[0].id,
        user_id: store.movie_description[0].user_id,
        quote_en: store.quote_en,
        quote_ka: store.quote_ka,
        thumbnail: store.quote_thumbnail,
      },
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    )
    .then((response) => {
      console.log(response);
      store.quote_en = "";
      store.quote_ka = "";
      store.showQuotes(store.movie_description[0].id);
      router.back();
    })
    .catch((error) => {
      store.errors = error.response.data.errors;
      console.log(error);
    });
};
</script>
