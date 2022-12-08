<template>
  <page-base-dialog>
    <section>
      <div
        class="pr-[41px] pl-[32px] border-b border-[#efefef33] pt-[33px] pb-[23px]"
      >
        <div class="flex items-center justify-between">
          <div class="flex items-center">
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
      </div>
    </section>
  </page-base-dialog>
</template>

<script setup>
import { useRoute } from "vue-router";
import { useMovieStore } from "../../stores/addMovie";
import { useCommonStore } from "../../stores/common";

const storeCommon = useCommonStore();
const store = useMovieStore();
const route = useRoute();
</script>
