import { createRouter, createWebHistory } from "vue-router";

import LandingPage from "@/views/LandingPage.vue";
import RegisterPage from "@/views/RegisterPage.vue";
import LoginPage from "@/views/LoginPage.vue";
import SendEmail from "@/views/SendEmail.vue";
import VerifyEmail from "@/views/VerifyEmail.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "LandingPage",
      component: LandingPage,
      children: [
        {
          path: "/register",
          name: "register",
          component: RegisterPage,
        },
        {
          path: "/login",
          name: "login",
          component: LoginPage,
        },
        {
          path: "/send-email",
          name: "sendEmail",
          component: SendEmail,
        },
        {
          path: "/verify-email",
          name: "verifyEmail",
          component: VerifyEmail,
        },
      ],
    },
  ],
});

export default router;
