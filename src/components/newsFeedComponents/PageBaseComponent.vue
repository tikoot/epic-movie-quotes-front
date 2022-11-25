<template>
  <div class="h-[100vh] bg-[#151320]">
    <the-navbar></the-navbar>
    <div class="px-[70px] pt-[32px] flex">
      <div class="max-w-[232px]">
        <div class="flex items-center">
          <h1>img</h1>
          <div class="pl-[24px]">
            <h1 class="text-2xl text-[#FFFFFF]">{{ username }}</h1>
            <router-link :to="{ name: 'userProfile' }" class="text-[#CED4DA]"
              >Edit your profile</router-link
            >
          </div>
        </div>
        <div class="pt-[40px] flex items-center">
          <img src="@/assets/images/home.svg" alt="home logo" />
          <router-link
            :to="{ name: 'newsFeed' }"
            class="text-2xl text-[#FFFFFF] pl-[43px]"
            >News feed</router-link
          >
        </div>
        <div class="pt-[40px] flex items-center">
          <img src="@/assets/images/camera.svg" alt="video logo" />
          <router-link
            :to="{ name: 'movieList' }"
            class="text-2xl text-[#FFFFFF] pl-[43px]"
            >List of movies</router-link
          >
        </div>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import TheNavbar from "@/components/newsFeedComponents/TheNavbar.vue";
import axiosInstance from "@/config/axios/axios.js";
import { ref, onMounted } from "vue";

const username = ref(null);

onMounted(async () => {
  try {
    const response = await axiosInstance.get("/me");
    console.log(response);
    username.value = response.data.user.username;
  } catch (err) {
    console.log(err);
  }
});
</script>
