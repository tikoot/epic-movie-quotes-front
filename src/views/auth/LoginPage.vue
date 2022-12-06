<template>
  <base-dialog>
    <div class="flex flex-col items-center">
      <h1 class="text-white text-[32px]">
        {{ $t("auth.log_in_to_your_account") }}
      </h1>
      <p class="text-[#6C757D] pt-[8px]">
        {{ $t("auth.welcome_back_please_enter_your_details") }}
      </p>
      <VueForm class="pt-[24px]" @submit="onSumbit">
        <div class="flex flex-col pb-[16px]">
          <label for="email" class="pb-2 mb-[1px] text-white">{{
            $t("auth.email")
          }}</label>
          <Field
            name="email"
            type="email"
            rules="required|min:3"
            placeholder="Enter your email"
            v-model.trim="store.email"
            class="bg-[#CED4DA] rounded-[4px] py-[7px] px-[13px] border-[#CED4DA] w-[360px] text-[#6C757D]"
          />
          <ErrorMessage
            name="email"
            class="text-[#E31221] text-base pt-[5px] pl-5"
          />
        </div>
        <div class="flex flex-col pb-[16px]">
          <label for="password" class="pb-2 mb-[1px] text-white">{{
            $t("auth.password")
          }}</label>

          <div class="relative">
            <Field
              v-if="!store.showPassword"
              name="password"
              type="password"
              rules="required"
              placeholder="At least 8 & max.15 lower case characters"
              v-model.trim="store.password"
              class="bg-[#CED4DA] rounded-[4px] py-[7px] px-[13px] border-[#CED4DA] w-[360px] text-[#6C757D]"
            />

            <Field
              v-else
              name="password"
              type="text"
              rules="required"
              placeholder="At least 8 & max.15 lower case characters"
              v-model.trim="store.password"
              class="bg-[#CED4DA] rounded-[4px] py-[7px] px-[13px] border-[#CED4DA] w-[360px] text-[#6C757D]"
            />
            <button class="absolute top-3 right-3" @click="store.toggleShow">
              <img
                v-if="!store.showPassword"
                src="@/assets/images/Vector(2).png"
                alt=""
              />
              <img v-else src="@/assets/images/Vector(1).png" alt="" />
            </button>
          </div>

          <ErrorMessage
            name="password"
            class="text-[#E31221] text-base pt-[5px] pl-5"
          />
        </div>
        <div class="flex justify-between min-w-full mb-[9px]">
          <div class="flex items-center">
            <input
              type="checkbox"
              value="1"
              name="remember"
              class="w-4 h-4 border-lightgray border border-solid rounded-md"
            />
            <label for="remember" class="text-white pl-[8px]"
              >{{ $t("auth.remember_me") }}
            </label>
          </div>
          <router-link
            :to="{ name: 'forgotPassword' }"
            class="text-[#0D6EFD] underline"
          >
            {{ $t("auth.forgot_password") }}
          </router-link>
        </div>
        <button
          type="submit"
          class="w-full rounded-[4px] py-[7px] px-[13px] text-center text-white bg-[#E31221] mt-[8px]"
        >
          {{ $t("auth.sign_in") }}
        </button>
      </VueForm>
      <button
        @click="googleStore.authWithGoogle"
        class="w-full flex justify-center items-center py-[7px] px-[13px] text-center text-white bg-transparent border-white rounded-[4px] border-[1px] mt-[16px]"
      >
        <img
          src="@/assets/images/icon.png"
          alt="google icon"
          class="pr-[8px]"
        />
        {{ $t("auth.sign_up_with_google") }}
      </button>
      <div class="flex justify-center items-center mt-6">
        <div class="text-[#6C757D] text-center mr-[4px]">
          {{ $t("auth.dont_have_an_account") }}
        </div>
        <router-link
          :to="{ name: 'register' }"
          class="text-[#0D6EFD] underline"
        >
          {{ $t("auth.sign_up") }}
        </router-link>
      </div>
    </div>
  </base-dialog>
</template>

<script setup>
import { Form as VueForm, Field, ErrorMessage } from "vee-validate";
import { useLoginStore } from "../../stores/login";
import { useGoogleStore } from "../../stores/authGoogle";
import axiosInstance from "@/config/axios/axios";
import { useAuthStore } from "@/stores/auth";
import { useRouter } from "vue-router";

const googleStore = useGoogleStore();
const store = useLoginStore();
const router = useRouter();
const authStore = useAuthStore();

const onSumbit = async () => {
  try {
    const response = await axiosInstance.post(`/login`, {
      email: store.email,
      password: store.password,
    });
    authStore.authenticated = true;
    router.push({ name: "newsFeed" });
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};
</script>
