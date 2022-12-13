<template>
  <div class="h-[100vh] bg-[#11101a]">
    <the-navbar></the-navbar>
    <router-view></router-view>
    <div class="flex flex-col h-[75%] items-center justify-center">
      <h3 class="text-[#DDCCAA] text-[24px] md:text-[60px] text-center">
        Find any quote in <br />
        millions of movie lines
      </h3>
      <div>
        <button
          class="text-[#DDCCAA] pt-1 pb-1 pr-7 pl-7 border rounded bg-red-600 border-red-600 mt-5 text-xl"
        >
          Get Started
        </button>
      </div>
    </div>
    <img src="@/assets/images/landing-1.png" alt="" class="w-full" />
    <img src="@/assets/images/landing-2.png" alt="" />
    <img src="@/assets/images/landing-3.png" alt="" />
  </div>
</template>

<script>
import TheNavbar from "@/components/authComponents/TheNavbar.vue";

export default {
  name: "LandingPage",
  components: {
    TheNavbar,
  },
};
</script>
