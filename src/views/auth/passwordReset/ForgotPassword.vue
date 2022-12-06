<template>
  <base-dialog>
    <div class="flex flex-col items-center pt-[40px]">
      <h1 class="text-white text-[32px]">{{ $t("auth.forgot_password") }}?</h1>
      <p class="text-[#6C757D] pt-[8px] text-center">
        {{ $t("auth.enter_the_email_and_we_send_an_email_with") }}<br />
        {{ $t("auth.instructions_to_reset_your_password") }}
      </p>
      <VueForm class="pt-[24px]" @submit="store.forgotPassword">
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
          <label for="email" class="pb-2 mb-[1px] text-white">{{
            $t("auth.email")
          }}</label>
          <Field
            name="email"
            type="email"
            rules="required|min:3|email"
            placeholder="Enter your email"
            v-model.trim="store.email"
            class="bg-[#CED4DA] rounded-[4px] py-[7px] px-[13px] border-[#CED4DA] w-[360px] text-[#6C757D]"
          />
          <ErrorMessage
            name="email"
            class="text-[#E31221] text-base pt-[5px] pl-5"
          />
        </div>

        <button
          type="submit"
          class="w-full rounded-[4px] py-[7px] px-[13px] text-center text-white bg-[#E31221] mt-[8px]"
        >
          {{ $t("auth.send_instructions") }}
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
          {{ $t("auth.back_to_log_in") }}
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
