<template>
  <page-base-dialog>
    <section>
      <div
        class="pl-[425px] pr-[41px] border-b border-[#efefef33] pt-[33px] pb-[23px]"
      >
        <div class="flex items-center justify-between">
          <h1 class="text-center w-[120px] text-[#fff] text-[24px]">
            {{ $t("userPage.edit_movie") }}
          </h1>
          <button @click="this.$router.replace('/movie-list')">
            <img src="@/assets/images/exit.png" alt="exit icon" />
          </button>
        </div>
      </div>
      {{ store.movie }}
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
          @submit="update"
          class="flex flex-col w-full"
          enctype="multipart/form-data"
          v-for="movie in store.movie_description"
          :key="movie.id"
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
              type="text"
              name="movie"
              v-model.trim="movie.movie_name.en"
              class="w-full relative text-[#fff] placeholder:text-[#fff] border-2 border-[#6C757D] bg-[#11101A] py-[9px] pl-[17px] rounded-[4.8px]"
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
              v-model.trim="movie.movie_name.ka"
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
              v-model="store.tagsNew"
              class="border-none outline-none bg-[#11101A] text-[#fff] placeholder:text-[#fff]"
              @keydown.enter="addTag"
            />
          </div>

          <div class="relative w-full mb-[20px]">
            <Field
              type="text"
              name="director"
              v-model.trim="movie.director.en"
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
              v-model.trim="movie.director.ka"
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
          <div class="w-full mb-[20px]">
            <Field
              type="number"
              name="budget"
              class="w-full relative text-[#fff] placeholder:text-[#fff] border-2 border-[#6C757D] bg-[#11101A] py-[9px] pl-[17px] rounded-[4.8px]"
              placeholder="Budget"
              v-model.trim="movie.budget"
              rules="required"
            />

            <ErrorMessage
              name="budget"
              class="text-[#E31221] text-base pb-[5px] pl-5"
            />
          </div>
          <div class="w-full mb-[20px]">
            <Field
              type="number"
              name="year"
              class="w-full relative text-[#fff] placeholder:text-[#fff] border-2 border-[#6C757D] bg-[#11101A] py-[9px] pl-[17px] rounded-[4.8px]"
              placeholder="Year"
              v-model.trim="movie.year"
              rules="required"
            />

            <ErrorMessage
              name="year"
              class="text-[#E31221] text-base pb-[5px] pl-5"
            />
          </div>

          <div class="relative w-full mb-[20px]">
            <Field
              as="textarea"
              name="description"
              v-model.trim="movie.description.en"
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
              as="textarea"
              name="description_ka"
              class="border-2 border-[#6C757D] text-[#fff] placeholder:text-[#fff] bg-[#11101A] py-[9px] pl-[17px] rounded-[4.8px] w-full"
              v-model.trim="movie.description.ka"
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
            {{ $t("userPage.edit_movie") }}
          </button>
        </VueForm>
      </div>
    </section>
  </page-base-dialog>
</template>
<script setup>
import axiosInstance from "@/config/axios/axios";
import { Form as VueForm, Field, ErrorMessage } from "vee-validate";
import { onMounted } from "vue";
import { useCrudStore } from "../../stores/crudOperations";
import { useCommonStore } from "../../stores/common";
import { useRouter } from "vue-router";

const store = useCrudStore();
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

onMounted(() => {
  store.movie_description.forEach((movie) => {
    JSON.parse(movie.category).forEach((category) => {
      store.tags.push(category);
    });
  });
});

let data = store.movie_description[0];
const update = async () => {
  axiosInstance
    .post(
      "movies/update",
      {
        id: data.id,
        user_id: data.user_id,
        movie_name_en: data.movie_name.en,
        movie_name_ka: data.movie_name.ka,
        director_en: data.director.en,
        director_ka: data.director.ka,
        description_en: data.description.en,
        description_ka: data.description.ka,
        category: store.tags,
        year: data.year,
        budget: data.budget,
        thumbnail: store.thumbnail,
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
      store.movieDescription(data.id);
      router.replace({ name: "movieDescription", params: { id: data.id } });
    })
    .catch((error) => {
      store.errors = error.response.data.errors;
      console.log(error);
    });
};
</script>
