<template>
  <base-dialog>
    <div class="flex flex-col items-center">
      <h1 class="text-white text-[16px] sm:text-[32px]">
        {{ $t("auth.create_an_account") }}
      </h1>
      <p class="text-[#6C757D]">{{ $t("auth.start_your_journey") }}</p>
      <VueForm class="pt-[24px]" @submit="store.handleRegister">
        <div v-if="store.errors !== ''">
          <div v-for="(value, key) in store.errors" :key="key">
            <p
              v-for="error in value"
              :key="error"
              class="text-[#E31221] text-base pt-[5px]"
            >
              {{ error }}
            </p>
          </div>
        </div>
        <div class="flex flex-col pb-[16px]">
          <label for="username" class="pb-2 mb-[1px] text-white"
            >{{ $t("auth.name") }}<span class="text-[#DC3545]"> *</span></label
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
            >{{ $t("auth.email") }}<span class="text-[#DC3545]"> *</span></label
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
            >{{ $t("auth.password")
            }}<span class="text-[#DC3545]"> *</span></label
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
            >{{ $t("auth.confirm_password")
            }}<span class="text-[#DC3545]"> *</span></label
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
          {{ $t("auth.get_started") }}
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
          {{ $t("auth.already_have_an_account") }}
        </div>
        <router-link :to="{ name: 'login' }" class="text-[#0D6EFD] underline">
          {{ $t("auth.log_in") }}
        </router-link>
      </div>
    </div>
  </base-dialog>
</template>

<script setup>
import { Form as VueForm, Field, ErrorMessage } from "vee-validate";

import { useRegisterStore } from "../../stores/register";
import { useGoogleStore } from "../../stores/authGoogle";
const store = useRegisterStore();
const googleStore = useGoogleStore();
</script>
