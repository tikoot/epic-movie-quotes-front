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
        <VueForm @submit="formSubmit" class="flex flex-col w-full">
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
              type="text"
              name="movie"
              v-model.trim="store.movie_name_en"
              class="w-full relative text-[#fff] placeholder:text-[#fff] border-2 border-[#6C757D] bg-[#11101A] py-[9px] pl-[17px] rounded-[4.8px]"
              placeholder="Movie name"
              rules="required"
            />
            <span class="absolute top-[9px] right-[9px] text-[#6C757D]"
              >Eng</span
            >
            <ErrorMessage
              name="movie"
              class="text-[#E31221] text-base pb-[5px] pl-5"
            />
          </div>
          <div class="relative w-full mb-[20px]">
            <Field
              type="text"
              name="movie_ka"
              v-model.trim="store.movie_name_ka"
              class="w-full relative text-[#fff] placeholder:text-[#fff] border-2 border-[#6C757D] bg-[#11101A] py-[9px] pl-[17px] rounded-[4.8px]"
              placeholder="ფილმის სახელი"
              rules="required"
            />
            <span class="absolute top-[9px] right-[9px] text-[#6C757D]"
              >ქარ</span
            >
            <ErrorMessage
              name="movie_ka"
              class="text-[#E31221] text-base pb-[5px] pl-5"
            />
          </div>

          <div
            class="w-full border-2 border-[#6C757D] bg-[#11101A] mb-[20px] py-[9px] pl-[17px] rounded-[4.8px] max-w-[895px]"
          >
            <div
              v-for="(tag, index) in store.tags"
              :key="tag"
              class="text-[#fff] flex items-center float-left bg-[#6C757D] mr-[4px] pl-[6px] pr-[10px] border-2 border-[#6C757D]"
            >
              {{ tag }}
              <img
                src="@/assets/images/Xvector.png"
                @click="removeTag(index)"
                class="cursor-pointer pl-[9px]"
                alt=""
              />
            </div>

            <Field
              type="text"
              placeholder="Category"
              name="category"
              class="border-none outline-none bg-[#11101A] text-[#fff] placeholder:text-[#fff]"
              @keydown.enter="addTag"
            />
          </div>

          <div class="relative w-full mb-[20px]">
            <Field
              type="text"
              name="director"
              v-model.trim="store.director_en"
              class="w-full relative text-[#fff] placeholder:text-[#fff] border-2 border-[#6C757D] bg-[#11101A] py-[9px] pl-[17px] rounded-[4.8px]"
              placeholder="Director"
              rules="required"
            />
            <span class="absolute top-[9px] right-[9px] text-[#6C757D]"
              >Eng</span
            >
            <ErrorMessage
              name="director"
              class="text-[#E31221] text-base pb-[5px] pl-5"
            />
          </div>
          <div class="relative w-full mb-[20px]">
            <Field
              type="text"
              name="director_ka"
              class="w-full relative text-[#fff] placeholder:text-[#fff] border-2 border-[#6C757D] bg-[#11101A] py-[9px] pl-[17px] rounded-[4.8px]"
              placeholder="რეჟისორი"
              v-model.trim="store.director_ka"
              rules="required"
            />
            <span class="absolute top-[9px] right-[9px] text-[#6C757D]"
              >ქარ</span
            >
            <ErrorMessage
              name="director_ka"
              class="text-[#E31221] text-base pb-[5px] pl-5"
            />
          </div>

          <div class="relative w-full mb-[20px]">
            <Field
              as="textarea"
              name="description"
              v-model.trim="store.description_en"
              class="border-2 border-[#6C757D] text-[#fff] placeholder:text-[#fff] bg-[#11101A] py-[9px] pl-[17px] rounded-[4.8px] w-full"
              placeholder="Movie description"
              rules="required"
            />
            <span class="absolute top-[13px] right-[9px] text-[#6C757D]"
              >Eng</span
            >
            <ErrorMessage
              name="description"
              class="text-[#E31221] text-base pb-[5px] pl-5"
            />
          </div>
          <div class="relative w-full mb-[20px]">
            <Field
              type="textarea"
              name="description_ka"
              class="border-2 border-[#6C757D] text-[#fff] placeholder:text-[#fff] bg-[#11101A] py-[9px] pl-[17px] rounded-[4.8px] w-full"
              v-model.trim="store.description_ka"
              placeholder="ფილმის აღწერა"
              rules="required"
            />
            <span class="absolute top-[13px] right-[9px] text-[#6C757D]"
              >ქარ</span
            >
            <ErrorMessage
              name="description_ka"
              class="text-[#E31221] text-base pb-[5px] pl-5"
            />
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
import { Form as VueForm, Field, ErrorMessage } from "vee-validate";
import { useMovieStore } from "../../stores/addMovie";
import { useCommonStore } from "../../stores/common";
import { useRouter } from "vue-router";

const store = useMovieStore();
const storeCommon = useCommonStore();
const router = useRouter();

const onFileChange = (e) => {
  store.thumbnail = e.target.files[0];
};

const addTag = (event) => {
  event.preventDefault();
  var val = event.target.value.trim();
  if (val.length > 0) {
    store.tags.push(val);
    event.target.value = "";
  }
};
const removeTag = (index) => {
  store.tags.splice(index, 1);
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
      store.errors = error.response.data.errors;
      console.log(error);
    });
};
</script>
