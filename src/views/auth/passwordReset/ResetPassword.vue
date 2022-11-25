<template>
  <base-dialog>
    <div class="flex flex-col items-center pt-[40px]">
      <h1 class="text-white text-[32px]">Create new password</h1>
      <p class="text-[#6C757D] pt-[8px] text-center">
        Your new password must be different from <br />
        previous used passwords
      </p>
      <VueForm class="pt-[24px]" @submit="store.resetPassword">
        <div v-if="store.passwordErrors !== ''">
          <div v-for="(value, key) in store.passwordErrors" :key="key">
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
          <label for="password" class="pb-2 mb-[1px] text-white"
            >Password<span class="text-[#DC3545]"> *</span></label
          >
          <div class="relative">
            <Field
              v-if="!store.showPassword"
              name="password"
              type="password"
              placeholder="At least 8 & max.15 lower case characters"
              rules="required|min:8|max:15|symbols"
              class="bg-[#CED4DA] rounded-[4px] py-[7px] px-[13px] border-[#CED4DA] w-[360px] text-[#6C757D]"
              v-model.trim="store.password"
            />

            <Field
              v-else
              name="password"
              type="text"
              placeholder="At least 8 & max.15 lower case characters"
              rules="required|min:8|max:15|symbols"
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
              placeholder="Confirm password"
              rules="required|confirmed:@password"
              class="bg-[#CED4DA] rounded-[4px] py-[7px] px-[13px] border-[#CED4DA] w-[360px] text-[#6C757D]"
              v-model.trim="store.password_confirmation"
            />
            <Field
              v-else
              name="password_confirmation"
              type="text"
              placeholder="Confirm password"
              rules="required|confirmed:@password"
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
          Reset password
        </button>
      </VueForm>
      <div class="flex justify-center items-center mt-6">
        <router-link
          :to="{ name: 'SendPasswordEmail' }"
          class="text-[#0D6EFD] underline"
        >
          <img src="@/assets/images/arrowBack.png" alt="arrow" />
        </router-link>
        <div class="text-[#6C757D] text-center mr-[4px] pl-[12px]">
          Back to log in
        </div>
      </div>
    </div>
  </base-dialog>
</template>

<script setup>
import { Form as VueForm, Field, ErrorMessage } from "vee-validate";
import { usePasswordStore } from "../../../stores/password";
const store = usePasswordStore();
</script>
