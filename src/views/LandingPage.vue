<template>
  <div class="h-[100vh] bg-[#11101a]">
    <the-navbar></the-navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import TheNavbar from "@/components/TheNavbar.vue";
export default {
  components: {
    TheNavbar,
  },
};
</script>
