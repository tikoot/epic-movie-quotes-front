<template>
  <div
    @click="this.$router.back()"
    class="fixed top-0 left-0 h-screen w-full z-10 bg-[#0000008a] backdrop-blur-[3px]"
  ></div>
  <dialog
    open
    class="w-screen h-screen top-0 fixed sm:top-36 sm:max-w-[600px] sm:h-fit z-[100] bg-[#11101A] border-[1px] border-[ #11101A] rounded-[10px] sm:py-[37px] px-[34px] sm:px-[104px]"
  >
    <div>
      <h1 class="text-center text-[#fff] text-[24px]">
        {{ $t("userPage.add_new_email") }}
      </h1>
      <div class="pt-[59px]">
        <VueForm @submit="addEmail">
          <div class="flex flex-col pb-[16px]">
            <label for="email" class="pb-2 mb-[1px] text-white">{{
              $t("auth.email")
            }}</label>

            <Field
              name="email"
              rules="email|required"
              type="email"
              placeholder="Enter new email"
              class="bg-[#CED4DA] rounded-[4px] py-[7px] px-[13px] border-[#CED4DA] w-[360px] text-black"
              v-model.trim="storeCommon.change_email"
            />
            <ErrorMessage
              name="email"
              class="text-[#E31221] text-base pt-[5px] pl-5"
            />
          </div>
          <div class="flex justify-end">
            <button
              class="sm:py-2 py-1 sm:px-4 px-2 text-white rounded flex items-center flex-row-reverse justify-center gap-2"
              type="reset"
            >
              Cancel</button
            ><button
              class="sm:py-2 py-1 sm:px-4 px-2 text-white rounded flex items-center flex-row-reverse justify-center gap-2 bg-[#E31221]"
            >
              add
            </button>
          </div>
        </VueForm>
      </div>
    </div>
  </dialog>
</template>
<script setup>
import axiosInstance from "@/config/axios/axios.js";
import { useCommonStore } from "../../../stores/common";
import { Form as VueForm, Field, ErrorMessage } from "vee-validate";
import { useRouter } from "vue-router";

const storeCommon = useCommonStore();
const router = useRouter();

const addEmail = async () => {
  axiosInstance
    .post("/add-email", {
      primary: storeCommon.user.email,
      user_id: storeCommon.user.id,
      email: storeCommon.change_email,
    })
    .then((response) => {
      console.log(response);
      storeCommon.getUserEmails();
      router.push({ name: "editProfile" });
    })
    .catch((error) => {
      console.log(error);
    });
};
</script>
