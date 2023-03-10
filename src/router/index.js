import { createRouter, createWebHistory } from "vue-router";

import LandingPage from "@/views/LandingPage.vue";
import NewsFeed from "@/views/NewsFeed.vue";
import MovieList from "@/views/MovieList.vue";
import EditProfile from "@/views/EditProfile.vue";
import AddMovie from "@/views/crudOperations/AddMovie.vue";
import AddQuote from "@/views/crudOperations/AddQuote.vue";
import MovieDescription from "@/views/crudOperations/MovieDescription.vue";
import QuoteFromNews from "@/views/crudOperations/QuoteFromNews.vue";
import ViewQuote from "@/views/crudOperations/ViewQuote.vue";
import EditQuote from "@/views/crudOperations/EditQuote.vue";
import UpdateMovie from "@/views/crudOperations/UpdateMovie.vue";
import RegisterPage from "@/views/auth/RegisterPage.vue";
import LoginPage from "@/views/auth/LoginPage.vue";
import GoogleCallback from "@/views/auth/GoogleCallback.vue";
import SendEmail from "@/views/auth/email/SendEmail.vue";
import VerifyEmail from "@/views/auth/email/VerifyEmail.vue";
import AddEmail from "@/views/auth/email/AddEmail.vue";
import ForgotPassword from "@/views/auth/passwordReset/ForgotPassword.vue";
import SendPasswordEmail from "@/views/auth/passwordReset/SendPasswordEmail.vue";
import ResetPassword from "@/views/auth/passwordReset/ResetPassword.vue";
import SuccessMessage from "@/views/auth/passwordReset/SuccessMessage.vue";
import isAuthenticated from "./guards";
import { useAuthStore } from "@/stores/auth";
import axios from "axios";
import ForbiddenPage from "../views/ForbiddenPage.vue";
import NotFound from "../views/NotFound.vue";

axios.defaults.withCredentials = true;

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
        {
          path: "/reset-password",
          name: "resetPassword",
          component: ResetPassword,
        },
        {
          path: "/password-change-successfully",
          name: "successMessage",
          component: SuccessMessage,
        },
        {
          path: "auth/google/callback",
          name: "googleCallback",
          component: GoogleCallback,
        },
      ],
    },
    {
      path: "/news-feed",
      name: "newsFeed",
      component: NewsFeed,
      beforeEnter: isAuthenticated,
      children: [
        {
          path: "/add-quote",
          name: "QuoteFromNews",
          component: QuoteFromNews,
        },
      ],
    },

    {
      path: "/movie-list",
      name: "movieList",
      component: MovieList,
      beforeEnter: isAuthenticated,
      children: [
        {
          path: "/add-movie",
          name: "addMovie",
          component: AddMovie,
          props: true,
        },
      ],
    },
    {
      path: "/movie-description/:id",
      name: "movieDescription",
      component: MovieDescription,
      params: true,
      beforeEnter: isAuthenticated,
      children: [
        {
          path: "/update",
          name: "updateMovie",
          component: UpdateMovie,
        },
        {
          path: "/add-quote",
          name: "addQuote",
          component: AddQuote,
        },
        {
          path: "/view-quote/:id",
          name: "viewQuote",
          component: ViewQuote,
          params: true,
        },
        {
          path: "/edit-quote/:id",
          name: "editQuote",
          component: EditQuote,
          params: true,
        },
      ],
    },

    {
      path: "/edit-profile",
      name: "editProfile",
      component: EditProfile,
      beforeEnter: isAuthenticated,
      children: [
        {
          path: "/add-email",
          name: "addEmail",
          component: AddEmail,
        },
      ],
    },
    {
      path: "/forbidden",
      name: "forbidden",
      component: ForbiddenPage,
    },
    { path: "/:notFound(.*)", name: "notFound", component: NotFound },
  ],
});

router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore();

  if (authStore.authenticated === null) {
    try {
      await axios.get(`${import.meta.env.VITE_API_BASE_URL}/me`);
      authStore.authenticated = true;
    } catch (err) {
      authStore.authenticated = false;
    } finally {
      return next();
    }
  }
  return next();
});

export default router;
