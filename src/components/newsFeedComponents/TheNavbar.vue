<template>
  <nav class="flex justify-between items-center px-[38px] py-[36px] sm:hidden">
    <button><img src="@/assets/images/list.png" alt="" /></button>
    <div class="flex justify-between items-center">
      <button>
        <img
          src="@/assets/images/VectorSEarch.png"
          alt=""
          class="w-[24px] h-[24px]"
        />
      </button>
      <button class="self-center box-border flex ml-[24px]">
        <img
          class="w-[26px] h-[26px]"
          src="@/assets/images/notificationBell.png"
          alt="notificaiton bell"
        />
      </button>
    </div>
  </nav>
  <nav class="hidden sm:flex justify-between py-[26px] px-[70px] bg-[#222030]">
    <h1 class="text-[#DDCCAA] place-self-center">MOVIE QUOTES</h1>

    <ul class="flex justify-items-center items-center">
      <li class="mr-[45px]">
        <button class="self-center box-border flex">
          <img
            src="@/assets/images/notificationBell.png"
            alt="notificaiton bell"
          />
        </button>
      </li>
      <LanguageSelect />
      <li>
        <button
          @click="logout"
          to="/"
          class="px-[16px] py-[9px] text-[#fff] bg-transparent border-[1px] border-[#fff] rounded"
        >
          {{ $t("userPage.log_out") }}
        </button>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import axiosInstance from "@/config/axios/axios";
import { useRouter } from "vue-router";
const router = useRouter();
const logout = async () => {
  try {
    axiosInstance.get("/logout");
  } catch (err) {
    console.log(err);
  } finally {
    router.push("/");
  }
};
</script>
