<template>
  <h2>you are authenticated 🔐️</h2>
  <div v-if="profile">
    <h3>{{ profile.email }}</h3>
    <h3>{{ profile.id }}</h3>
  </div>
</template>

<script setup>
import axiosInstance from "@/config/axios/axios.js";
import { ref, onMounted } from "vue";

const profile = ref(null);
onMounted(async () => {
  try {
    const response = await axiosInstance.get("/me");

    console.log(response);
    profile.value = response.data.user;
  } catch (err) {
    console.log(err);
  }
});
</script>
