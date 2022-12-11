<template>
  <div
    @click="this.$router.replace('/news-feed')"
    class="fixed top-0 left-0 h-screen w-full z-10 bg-[#0000008a] backdrop-blur-[3px]"
  ></div>
  <dialog
    open
    class="fixed top-32 min-w-[961px] z-[100] bg-[#11101A] border-[1px] border-[#11101A] rounded-[12px] divide-y divide-red-800"
  >
    <section>
      <div
        class="pl-[425px] pr-[41px] border-b border-[#efefef33] pt-[33px] pb-[23px]"
      >
        <div class="flex items-center justify-between">
          <h1 class="text-center w-[120px] text-[#fff] text-[24px]">
            {{ $t("userPage.write_new_quote") }}
          </h1>
          <button @click="this.$router.back()">
            <img src="@/assets/images/exit.png" alt="exit icon" />
          </button>
        </div>
      </div>
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
            placeholder="“Quote in English.”"
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
            placeholder="“ციტატა ქართულ ენაზე”"
            rules="required|georgian_alphabet"
          />
          <span class="absolute top-[13px] right-[9px] text-[#6C757D]">Ka</span>
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

        <select class="text-red-700 block" @change="onChange($event)">
          <option disabled select selected>Choose movie</option>
          <option
            class="text-red-700"
            :value="movie.id"
            v-for="movie in storeCommon.movies"
            :key="movie.id"
          >
            {{ movie.movie_name.en }}
          </option>
        </select>

        <button
          class="w-full rounded-[4px] py-[7px] px-[13px] text-center text-white bg-[#E31221] mt-[8px] mb-[44px]"
          type="submit"
        >
          Post
        </button>
      </VueForm>
    </section>
  </dialog>
</template>

<script setup>
import DragAndDrop from "@/components/newsFeedComponents/DragAndDrop.vue";
import axiosInstance from "@/config/axios/axios";
import { onMounted } from "vue";
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

const onChange = (event) => {
  store.selectedVal = event.target.value;
  console.log(event.target.value);
};

const storeQuote = async () => {
  axiosInstance
    .post(
      "quotes/store",
      {
        movie_id: store.selectedVal,
        user_id: storeCommon.user.id,
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
      storeCommon.allQuotes();
      router.back();
    })
    .catch((error) => {
      store.errors = error.response.data.errors;
      console.log(error);
    });
};

onMounted(() => {
  storeCommon.showMovies();
});
</script>
