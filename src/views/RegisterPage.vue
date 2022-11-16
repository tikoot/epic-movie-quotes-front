<template>
  <base-dialog>
    <div class="flex flex-col items-center">
      <h1 class="text-white text-[32px]">Create an account</h1>
      <p class="text-[#6C757D]">Start your journey!</p>
      <VueForm class="pt-[24px]" @submit="store.handleRegister">
        <div class="flex flex-col pb-[16px]">
          <label for="username" class="pb-2 mb-[1px] text-white"
            >Name<span class="text-[#DC3545]"> *</span></label
          >
          <Field
            name="username"
            rules="required|min:3|max:15|symbols"
            placeholder="At least 3 & max.15 lower case characters"
            class="bg-[#CED4DA] rounded-[4px] py-[7px] px-[13px] border-[#CED4DA] w-[360px] text-[#6C757D]"
            v-model.trim="store.username"
          />
          <ErrorMessage
            name="username"
            class="text-[#E31221] text-base pt-[5px] pl-5"
          />
        </div>
        <div class="flex flex-col pb-[16px]">
          <label for="email" class="pb-2 mb-[1px] text-white"
            >Email<span class="text-[#DC3545]"> *</span></label
          >
          <Field
            name="email"
            rules="email|required"
            type="email"
            placeholder="Enter your email"
            class="bg-[#CED4DA] rounded-[4px] py-[7px] px-[13px] border-[#CED4DA] w-[360px] text-[#6C757D]"
            v-model.trim="store.email"
          />
          <ErrorMessage
            name="email"
            class="text-[#E31221] text-base pt-[5px] pl-5"
          />
        </div>
        <div class="flex flex-col pb-[16px]">
          <label for="password" class="pb-2 mb-[1px] text-white"
            >Password<span class="text-[#DC3545]"> *</span></label
          >
          <div class="relative">
            <Field
              v-if="!store.showPassword"
              name="password"
              type="password"
              rules="required|min:8|max:15|symbols"
              placeholder="At least 8 & max.15 lower case characters"
              class="bg-[#CED4DA] rounded-[4px] py-[7px] px-[13px] border-[#CED4DA] w-[360px] text-[#6C757D]"
              v-model.trim="store.password"
            />

            <Field
              v-else
              name="password"
              type="text"
              rules="required|min:8|max:15|symbols"
              placeholder="At least 8 & max.15 lower case characters"
              class="bg-[#CED4DA] rounded-[4px] py-[7px] px-[13px] border-[#CED4DA] w-[360px] text-[#6C757D]"
              v-model.trim="store.password"
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
        <div class="flex flex-col pb-[16px]">
          <label for="password_confirmation" class="pb-2 mb-[1px] text-white"
            >Confirm password<span class="text-[#DC3545]"> *</span></label
          >
          <div class="relative">
            <Field
              v-if="!store.showPassword"
              name="password_confirmation"
              type="password"
              rules="required|confirmed:@password"
              placeholder="At least 8 & max.15 lower case characters"
              class="bg-[#CED4DA] rounded-[4px] py-[7px] px-[13px] border-[#CED4DA] w-[360px] text-[#6C757D]"
              v-model.trim="store.password_confirmation"
            />
            <Field
              v-else
              name="password_confirmation"
              type="text"
              rules="required|confirmed:@password"
              placeholder="At least 8 & max.15 lower case characters"
              class="bg-[#CED4DA] rounded-[4px] py-[7px] px-[13px] border-[#CED4DA] w-[360px] text-[#6C757D]"
              v-model.trim="store.password_confirmation"
            />
            <div class="absolute top-3 right-3" @click="store.toggleShow">
              <img
                v-if="!store.showPassword"
                src="@/assets/images/Vector(2).png"
                alt=""
              />
              <img v-else src="@/assets/images/Vector(1).png" alt="" />
            </div>
          </div>
          <ErrorMessage
            name="password_confirmation"
            class="text-[#E31221] text-base pt-[5px] pl-5"
          />
        </div>
        <button
          type="submit"
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
        <router-link :to="{ name: 'login' }" class="text-[#0D6EFD] underline">
          log in
        </router-link>
      </div>
    </div>
  </base-dialog>
</template>

<script setup>
import { Form as VueForm, Field, ErrorMessage } from "vee-validate";

import { useRegisterStore } from "../stores/register";
const store = useRegisterStore();
</script>
