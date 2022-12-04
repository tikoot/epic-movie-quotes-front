<template>
  <div class="h-[100vh] bg-[#151320]">
    <the-navbar></the-navbar>
    <div class="px-[70px] pt-[32px] flex">
      <div class="max-w-[300px] flex flex-col">
        <div class="flex items-center">
          <img
            v-if="activeUser"
            :src="storeCommon.backUrl + storeCommon.user.avatar"
            alt="user avatar"
            class="object-contain h-[60px] w-[60px] rounded-full border-2 border-[#E31221] bg-[#D9D9D9]"
          />
          <img
            v-else
            :src="storeCommon.backUrl + storeCommon.user.avatar"
            alt="user avatar"
            class="object-contain h-[60px] w-[60px] rounded-full bg-[#D9D9D9]"
          />

          <div class="pl-[24px]">
            <h1 class="text-2xl text-[#FFFFFF]">
              {{ storeCommon.user.username }}
            </h1>
            <router-link :to="{ name: 'editProfile' }" class="text-[#CED4DA]"
              >Edit your profile</router-link
            >
          </div>
        </div>
        <div class="pt-[40px] flex items-center">
          <img
            v-if="activeNews"
            src="@/assets/images/redHome.svg"
            alt="home logo"
            class="pl-[10px]"
          />
          <img
            v-else
            src="@/assets/images/home.svg"
            alt="home logo"
            class="pl-[10px]"
          />
          <router-link
            :to="{ name: 'newsFeed' }"
            class="text-2xl text-[#FFFFFF] pl-[43px]"
            >News feed</router-link
          >
        </div>
        <div class="pt-[40px] flex items-center">
          <img
            v-if="activeList"
            src="@/assets/images/redCamera.svg"
            alt="video logo"
            class="pl-[10px]"
          />
          <img
            v-else
            src="@/assets/images/camera.svg"
            alt="video logo"
            class="pl-[10px]"
          />
          <router-link
            :to="{ name: 'movieList' }"
            class="text-2xl text-[#FFFFFF] pl-[43px]"
            >List of movies</router-link
          >
        </div>
      </div>
      <slot></slot>
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import TheNavbar from "@/components/newsFeedComponents/TheNavbar.vue";
import axiosInstance from "@/config/axios/axios.js";
import { onMounted } from "vue";
import { defineProps } from "vue";
import { useCommonStore } from "../../stores/common";

const storeCommon = useCommonStore();

defineProps({
  activeUser: {
    type: Boolean,
    required: false,
    default: false,
  },
  activeNews: {
    type: Boolean,
    required: false,
    default: false,
  },
  activeList: {
    type: Boolean,
    required: false,
    default: false,
  },
});

onMounted(async () => {
  try {
    const response = await axiosInstance.get("/me");
    console.log(response);
    storeCommon.user = response.data.user;
    localStorage.setItem("user_id", response.data.user.id);
  } catch (err) {
    console.log(err);
  }
});
</script>
