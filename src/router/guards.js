import { useAuthStore } from "@/stores/auth";

const isAuthenticated = () => {
  const authStore = useAuthStore();
  if (!authStore.authenticated) {
    return "/forbidden";
  }
};

export default isAuthenticated;
