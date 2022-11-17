import { createRouter, createWebHistory } from "vue-router";

import LandingPage from "@/views/LandingPage.vue";
import RegisterPage from "@/views/auth/RegisterPage.vue";
import LoginPage from "@/views/auth/LoginPage.vue";
import SendEmail from "@/views/auth/email/SendEmail.vue";
import VerifyEmail from "@/views/auth/email/VerifyEmail.vue";
import ForgotPassword from "@/views/auth/passwordReset/ForgotPassword.vue";
import SendPasswordEmail from "@/views/auth/passwordReset/SendPasswordEmail.vue";

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
        {
          path: "/forgot-password",
          name: "forgotPassword",
          component: ForgotPassword,
        },
        {
          path: "/send-reset-email",
          name: "SendPasswordEmail",
          component: SendPasswordEmail,
        },
      ],
    },
  ],
});

export default router;
