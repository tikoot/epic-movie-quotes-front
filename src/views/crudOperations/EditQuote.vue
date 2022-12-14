<template>
  <page-base-dialog>
    <section>
      <div
        class="pr-[41px] pl-[32px] border-b border-[#efefef33] pt-[33px] pb-[23px]"
      >
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <button
              @click="
                store.deleteQuote(route.params.id, store.eachQuote[0].movie_id)
              "
            >
              <img src="@/assets/images/VectorDelete.png" alt="delete icon" />
            </button>
          </div>
          <h1 class="text-center text-[#fff] text-[24px]">
            {{ $t("userPage.edit_quote") }}
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
        <VueForm
          v-for="quote in store.eachQuote"
          :key="quote.id"
          @submit="updateQuote"
        >
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
              v-model.trim="quote.quote.en"
              class="border-2 border-[#6C757D] text-[#fff] placeholder:text-[#fff] bg-[#11101A] py-[9px] pl-[17px] rounded-[4.8px] w-full"
              placeholder="“Quote in English.”"
              rules="required|english_alphabet"
            />
            <span class="absolute top-[9px] right-[9px] text-[#6C757D]"
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
              v-model.trim="quote.quote.ka"
              class="border-2 border-[#6C757D] text-[#fff] placeholder:text-[#fff] bg-[#11101A] py-[9px] pl-[17px] rounded-[4.8px] w-full"
              placeholder="“ციტატა ქართულ ენაზე”"
              rules="required|georgian_alphabet"
            />
            <span class="absolute top-[9px] right-[9px] text-[#6C757D]"
              >ქარ</span
            >
            <ErrorMessage
              name="quote_ka"
              class="text-[#E31221] text-base pb-[5px] pl-5"
            />
          </div>
          <div class="w-[897px] h-[513px]">
            <img
              :src="
                store.quote_edit_thumbnail == null
                  ? storeCommon.backUrl + '/storage/' + quote.thumbnail
                  : store.url
              "
              alt=""
              class="w-[897px] h-[513px] rounded-[10px] absolute"
            />
            <div
              @change="selectedFile"
              class="bg-[url('@/assets/images/Rectan60.png')] w-[135px] h-[84px] flex flex-col items-center px-[16px] py-[10px] relative top-[50%] left-[381px] rounded-[10px] text-[#fff]"
            >
              <img
                src="@/assets/images/photoIcon.png"
                alt="camera icon"
                class=""
              />

              <label for="dropzoneFile" class="">Change photo</label>
              <input
                type="file"
                id="dropzoneFile"
                class="hidden dropzoneFile"
              />
            </div>
          </div>
          <button
            class="w-full rounded-[4px] py-[7px] px-[13px] text-center text-white bg-[#E31221] mt-[8px] mb-[44px]"
            type="submit"
          >
            {{ $t("userPage.edit_quote") }}
          </button>
        </VueForm>
      </div>
    </section>
  </page-base-dialog>
</template>

<script setup>
import axiosInstance from "@/config/axios/axios";
import axios from "@/config/axios/axios.js";
import { onMounted } from "vue";
import { Form as VueForm, Field, ErrorMessage } from "vee-validate";
import { useRoute, useRouter } from "vue-router";
import { useCrudStore } from "../../stores/crudOperations";
import { useCommonStore } from "../../stores/common";

const storeCommon = useCommonStore();
const store = useCrudStore();
const route = useRoute();
const router = useRouter();

const selectedFile = () => {
  store.quote_edit_thumbnail = document.querySelector(".dropzoneFile").files[0];
  store.url = URL.createObjectURL(store.quote_edit_thumbnail);
};

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

const updateQuote = async () => {
  axiosInstance
    .post(
      "quote/update",
      {
        id: store.eachQuote[0].id,
        movie_id: store.eachQuote[0].movie_id,
        user_id: store.eachQuote[0].user_id,
        quote_en: store.eachQuote[0].quote.en,
        quote_ka: store.eachQuote[0].quote.ka,
        thumbnail: store.quote_edit_thumbnail,
      },
      {
        headers: {
          type: "application/json",
          "Content-Type": "multipart/form-data",
        },
      }
    )
    .then((response) => {
      console.log(response);
      store.showQuotes(store.eachQuote[0].movie_id);
      router.replace({
        name: "movieDescription",
        params: { id: route.params.id },
      });
    })
    .catch((error) => {
      store.errors = error.response.data.errors;
      console.log(error);
    });
};
</script>
