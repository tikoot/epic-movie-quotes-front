<template>
  <div class="h-[100vh] bg-[#11101a]">
    <the-navbar></the-navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import TheNavbar from "@/components/layouts/TheNavbar.vue";
export default {
  name: "LandingPage",
  components: {
    TheNavbar,
  },
};
</script>
