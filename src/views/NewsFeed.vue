<template>
  <page-base-component activeNews>
    <section class="pl-[127px] w-full box-border overscroll-auto">
      <div class="pb-[22px] flex items-center">
        <div>
          <router-link
            :to="{ name: 'QuoteFromNews' }"
            class="flex items-center rounded-[10px] text-[#fff] py-[11px] px-[16px] bg-[#24222F]"
          >
            <img
              src="@/assets/images/pencil-square.png"
              alt=""
              class="pr-[16px]"
            />
            {{ $t("userPage.write_new_quote") }}
          </router-link>
        </div>
        <form action="" class="relative">
          <img
            src="@/assets/images/Vectorsearch.png"
            alt=""
            class="absolute top-5 left-[32px]"
          />
          <input
            type=""
            value=""
            name="search"
            class="bg-[#151320] outline-0 border-b-[1px] border-b-[#efefef4d] ml-[32px] py-[17px] text-[#CED4DA] placeholder:text-[#CED4DA] w-[688px] pl-[36px]"
            placeholder="Enter @ to search movies, Enter # to search quotes "
          />
        </form>
      </div>
      <div
        v-for="quote in storeCommon.quotes_all"
        :key="quote.id"
        class="bg-[#11101A] rounded-[12px] w-[938px] px-[24px] pb-[41px] pt-[24px] mb-[40px]"
      >
        <div class="flex items-center justify-start pb-[16px]">
          <img
            :src="storeCommon.backUrl + quote.user.avatar"
            alt="user avatar"
            class="object-contain h-[60px] w-[60px] rounded-full bg-[#D9D9D9]"
          />
          <h1 class="text-[#fff] text-[20px] pl-[16px]">
            {{ quote.user.username }}
          </h1>
        </div>
        <div>
          <div v-if="storeCommon.locale == 'en'" class="pb-[24px]">
            <p class="text-[#CED4DA] text-[20px] max-w-[490px]">
              "{{ quote.quote.en }}." movie-
              <span class="text-[#DDCCAA]"
                >{{ quote.movie.movie_name.en }}.</span
              >
              ({{ quote.movie.year }})
            </p>
          </div>
          <div v-else class="pb-[24px]">
            <p class="text-[#CED4DA] text-[20px] max-w-[490px]">
              "{{ quote.quote.ka }}." movie-
              <span class="text-[#DDCCAA]"
                >{{ quote.movie.movie_name.ka }}.</span
              >({{ quote.movie.year }})
            </p>
          </div>
        </div>
        <div>
          <img
            class="w-[890px] h-[501px] rounded-[10px]"
            :src="storeCommon.backUrl + '/storage/' + quote.thumbnail"
          />
        </div>
        <div class="flex pb-[43px] pt-[25px]">
          <div class="flex items-center pr-[24px]">
            <p class="text-[#fff] pr-[12px] text-[20px]">
              {{ quote.comments.length }}
            </p>
            <img src="@/assets/images/Vectorcomment.png" alt="" />
          </div>
          <div class="flex items-center">
            <p class="text-[#fff] pr-[12px] text-[20px]">
              {{ quote.likes.length }}
            </p>

            <button @click.prevent="likeQuote(quote.id, storeCommon.user.id)">
              <img
                v-if="quote.likes.length == 0"
                src="@/assets/images/Vectorlike.png"
                alt=""
              />
              <img v-else src="@/assets/images/redLike.png" alt="" />
            </button>
          </div>
        </div>
        <div v-if="quote.comments.length > 0">
          <div
            class="flex pb-[35px]"
            v-for="comments in quote.comments"
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
        <VueForm
          @submit="storeComment(quote.id, storeCommon.user.id)"
          class="pb-[33px] flex"
        >
          <img
            :src="storeCommon.backUrl + storeCommon.user.avatar"
            alt="user avatar"
            class="w-[52px] h-[52px] rounded-[50%]"
          />
          <input
            name=""
            id=""
            v-model="store.comments"
            placeholder="Write a comment"
            class="ml-[24px] w-full bg-[#24222F] text-[#CED4DA] rounded-[10px] placeholder:text-[#CED4DA] pl-[27px] py-[11px] h-[52px] box-border"
          />
          <input type="submit" hidden />
        </VueForm>
      </div>
    </section>
  </page-base-component>
</template>

<script setup>
import axios from "@/config/axios/axios.js";
import { onMounted } from "vue";
import axiosInstance from "@/config/axios/axios.js";
import { useCrudStore } from "../stores/crudOperations";
import { useCommonStore } from "../stores/common";
import { Form as VueForm } from "vee-validate";

const storeCommon = useCommonStore();
const store = useCrudStore();
const likeQuote = async (id, user_id) => {
  axios
    .post("quote-like/", {
      id: id,
      user_id: user_id,
    })
    .then((response) => {
      storeCommon.allQuotes();
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

const storeComment = async (id, user_id) => {
  axiosInstance
    .post(
      "quotes/" + id + "/comments",
      {
        user_id: user_id,
        body: store.comments,
      },
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    )
    .then((response) => {
      store.comments = "";
      storeCommon.allQuotes();
      console.log(response);
    })
    .catch((error) => {
      store.errors = error.response.data.errors;
      console.log(error);
    });
};

onMounted(() => {
  storeCommon.allQuotes();
  storeCommon.scroll();
});
</script>
