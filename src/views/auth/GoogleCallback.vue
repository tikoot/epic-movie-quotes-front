<script setup>
import axios from "@/config/axios/axios.js";
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { useAuthStore } from "@/stores/auth";
import { useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const authStore = useAuthStore();

onMounted(() => {
  return axios
    .get("auth/google/callback", {
      params: { code: route.query.code },
    })
    .then((response) => {
      authStore.authenticated = true;
      router.push({ name: "newsFeed" });
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
});
</script>
