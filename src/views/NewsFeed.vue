<template>
  <page-base-component activeNews>
    <p></p>
  </page-base-component>
</template>

<script setup>
import axios from "@/config/axios/axios.js";
import { onMounted } from "vue";

onMounted(() => {
  axios
    .get("/quotes-all")
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
});
</script>
