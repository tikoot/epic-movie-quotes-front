<template>
  <page-base-dialog>
    <section>
      <div
        class="pl-[425px] pr-[41px] border-b border-[#efefef33] pt-[33px] pb-[23px]"
      >
        <div class="flex items-center justify-between">
          <h1 class="text-center w-[120px] text-[#fff] text-[24px]">
            Add Movie
          </h1>
          <button @click="this.$router.replace('/movie-list')">
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
        <VueForm @submit="formSubmit" class="flex flex-col items-center w-full">
          <div class="relative w-full">
            <input
              type="text"
              name="movie"
              v-model.trim="store.movie_name_en"
              class="mb-[20px] w-full relative text-[#fff] placeholder:text-[#fff] border-2 border-[#6C757D] bg-[#11101A] py-[9px] pl-[17px] rounded-[4.8px]"
              placeholder="Movie name"
            />
            <span class="absolute bottom-1/2 right-[9px] text-[#6C757D]"
              >Eng</span
            >
          </div>
          <div class="relative w-full">
            <input
              type="text"
              v-model.trim="store.movie_name_ka"
              class="mb-[20px] w-full relative text-[#fff] placeholder:text-[#fff] border-2 border-[#6C757D] bg-[#11101A] py-[9px] pl-[17px] rounded-[4.8px]"
              placeholder="ფილმის სახელი"
            />
            <span class="absolute bottom-1/2 right-[9px] text-[#6C757D]"
              >ქარ</span
            >
          </div>

          <input
            type="text"
            name="category"
            class="mb-[20px] border-2 border-[#6C757D] bg-[#11101A] py-[9px] pl-[17px] rounded-[4.8px] w-full"
          />
          <div class="relative w-full">
            <input
              type="text"
              name="director"
              v-model.trim="store.director_en"
              class="mb-[20px] w-full relative text-[#fff] placeholder:text-[#fff] border-2 border-[#6C757D] bg-[#11101A] py-[9px] pl-[17px] rounded-[4.8px]"
              placeholder="Director"
            />
            <span class="absolute bottom-1/2 right-[9px] text-[#6C757D]"
              >Eng</span
            >
          </div>
          <div class="relative w-full">
            <input
              type="text"
              class="mb-[20px] w-full relative text-[#fff] placeholder:text-[#fff] border-2 border-[#6C757D] bg-[#11101A] py-[9px] pl-[17px] rounded-[4.8px]"
              placeholder="რეჟისორი"
              v-model.trim="store.director_ka"
            />
            <span class="absolute bottom-1/2 right-[9px] text-[#6C757D]"
              >ქარ</span
            >
          </div>

          <div class="relative w-full">
            <textarea
              type="textarea"
              name="description"
              v-model.trim="store.description_en"
              class="mb-[20px] border-2 border-[#6C757D] text-[#fff] placeholder:text-[#fff] bg-[#11101A] py-[9px] pl-[17px] rounded-[4.8px] w-full"
              placeholder="Movie description"
            ></textarea>
            <span class="absolute top-[13px] right-[9px] text-[#6C757D]"
              >Eng</span
            >
          </div>
          <div class="relative w-full">
            <textarea
              type="textarea"
              class="mb-[20px] border-2 border-[#6C757D] text-[#fff] placeholder:text-[#fff] bg-[#11101A] py-[9px] pl-[17px] rounded-[4.8px] w-full"
              v-model.trim="store.description_ka"
              placeholder="ფილმის აღწერა"
            ></textarea>
            <span class="absolute top-[13px] right-[9px] text-[#6C757D]"
              >ქარ</span
            >
          </div>
          <input type="file" class="form-control" v-on:change="onFileChange" />

          <button
            class="w-full rounded-[4px] py-[7px] px-[13px] text-center text-white bg-[#E31221] mt-[8px] mb-[44px]"
            type="submit"
          >
            Add movie
          </button>
        </VueForm>
      </div>
    </section>
  </page-base-dialog>
</template>

<script setup>
import axiosInstance from "@/config/axios/axios";
import { Form as VueForm } from "vee-validate";
import { useMovieStore } from "../../stores/addMovie";
import { useCommonStore } from "../../stores/common";
import { useRouter } from "vue-router";

const store = useMovieStore();
const storeCommon = useCommonStore();
const router = useRouter();

const onFileChange = (e) => {
  store.thumbnail = e.target.files[0];
};

const formSubmit = async () => {
  axiosInstance
    .post(
      "movies/store",
      {
        user_id: storeCommon.user.id,
        movie_name_en: store.movie_name_en,
        movie_name_ka: store.movie_name_ka,
        director_en: store.director_en,
        director_ka: store.director_ka,
        description_en: store.description_en,
        description_ka: store.description_ka,
        thumbnail: store.thumbnail,
      },
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    )
    .then((response) => {
      console.log(response);
      router.replace({ name: "movieList" });
    })
    .catch((error) => {
      console.log(error);
    });
};
</script>
