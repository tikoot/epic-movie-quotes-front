import { createRouter, createWebHistory } from "vue-router";

import LandingPage from "@/views/LandingPage.vue";
import RegisterPage from "@/views/RegisterPage.vue";
import LoginPage from "@/views/LoginPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: LandingPage,
      children: [
        {
          path: "/register",
          component: RegisterPage,
        },
        {
          path: "/login",
          component: LoginPage,
        },
      ],
    },
  ],
});

export default router;
