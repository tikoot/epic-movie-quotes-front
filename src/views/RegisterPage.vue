<template>
  <base-dialog>
    <div class="flex flex-col items-center">
      <h1 class="text-white text-[32px]">Create an account</h1>
      <p class="text-[#6C757D]">Start your journey!</p>
      <VueForm class="pt-[24px]" @submit="store.registerUser">
        <div class="flex flex-col pb-[16px]">
          <label for="username" class="pb-2 mb-[1px] text-white"
            >Name<span class="text-[#DC3545]"> *</span></label
          >
          <Field
            name="username"
            placeholder="At least 3 & max.15 lower case characters"
            class="bg-[#CED4DA] rounded-[4px] py-[7px] px-[13px] border-[#CED4DA] w-[360px] text-[#6C757D]"
            v-model.trim="store.user.username"
          />
        </div>
        <div class="flex flex-col pb-[16px]">
          <label for="email" class="pb-2 mb-[1px] text-white"
            >Email<span class="text-[#DC3545]"> *</span></label
          >
          <Field
            name="email"
            type="email"
            placeholder="Enter your email"
            class="bg-[#CED4DA] rounded-[4px] py-[7px] px-[13px] border-[#CED4DA] w-[360px] text-[#6C757D]"
            v-model.trim="store.user.email"
          />
        </div>
        <div class="flex flex-col pb-[16px]">
          <label for="password" class="pb-2 mb-[1px] text-white"
            >Password<span class="text-[#DC3545]"> *</span></label
          >
          <Field
            name="password"
            type="password"
            placeholder="At least 8 & max.15 lower case characters"
            class="bg-[#CED4DA] rounded-[4px] py-[7px] px-[13px] border-[#CED4DA] w-[360px] text-[#6C757D]"
            v-model.trim="store.user.password"
          />
        </div>
        <div class="flex flex-col pb-[16px]">
          <label for="password_confirmation" class="pb-2 mb-[1px] text-white"
            >Confirm password<span class="text-[#DC3545]"> *</span></label
          >
          <Field
            name="password_confirmation"
            type="password"
            placeholder="At least 8 & max.15 lower case characters"
            class="bg-[#CED4DA] rounded-[4px] py-[7px] px-[13px] border-[#CED4DA] w-[360px] text-[#6C757D]"
            v-model.trim="store.user.password_confirmation"
          />
        </div>
        <button
          class="w-full rounded-[4px] py-[7px] px-[13px] text-center text-white bg-[#E31221] mt-[8px]"
        >
          Get Started
        </button>
        <button
          class="w-full py-[7px] px-[13px] text-center text-white bg-transparent border-white rounded-[4px] border-[1px] mt-[16px]"
        >
          Sign up with Google
        </button>
      </VueForm>
      <div class="flex justify-center items-center mt-6">
        <div class="text-[#6C757D] text-center mr-[4px]">
          already have an account?
        </div>
        <router-link
          :to="{ name: 'LoginPage' }"
          class="text-[#0D6EFD] underline"
        >
          log in
        </router-link>
      </div>
    </div>
  </base-dialog>
</template>

<script setup>
import { Form as VueForm, Field } from "vee-validate";

import { useRegisterStore } from "../stores/register";
const store = useRegisterStore();
</script>
