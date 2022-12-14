<template>
  <page-base-component activeUser>
    <div class="sm:ml-56 ml-0 mt-8 pb-20 h-[100vh]">
      <h1 class="text-2xl sm:block hidden text-[#fff]">My profile</h1>
      <div class="flex flex-col items-center mt-10">
        <img
          :src="
            storeCommon.update_user_avatar == null
              ? storeCommon.backUrl + 'storage/' + storeCommon.avatar
              : storeCommon.url
          "
          class="w-[188px] h-[188px] rounded-full object-cover absolute top-56"
          alt=""
        />
        <div
          class="flex flex-col gap-6 mt-14 sm:w-[780px] w-[428px] rounded-[12px] h-full sm:px-20 px-5 bg-[#11101a] pt-[124px]"
        >
          <VueForm @submit="updateUser" class="">
            <div class="flex items-center justify-center">
              <div @change="selectedFile" class="">
                <label
                  for="dropzoneFile"
                  class="text-[#FFFFFF] text-[20px] text-center"
                  >Upload new photo</label
                >
                <input
                  type="file"
                  id="dropzoneFile"
                  class="hidden dropzoneFile"
                />
              </div>
            </div>
            <div
              class="flex justify-start items-center sm:text-base text-xs mb-[56px] mt-[41px]"
            >
              <div class="flex flex-col sm:w-[360px] w-[200px]">
                <label
                  for="name"
                  class="block text-sm font-medium text-white mb-2"
                  >{{ $t("auth.name") }}</label
                >
                <div class="relative mt-1 rounded-md shadow-sm">
                  <Field
                    rules="required|min:3|max:15|symbols"
                    :readonly="storeCommon.readonly"
                    v-model="storeCommon.username"
                    name="username"
                    class="py-2 px-5 block w-full rounded-md pr-10 text-[#212529] border-[2px]"
                  />
                  <ErrorMessage
                    name="username"
                    class="text-[#E31221] text-base pt-[5px] pl-5"
                  />
                </div>
              </div>
              <button
                @click.prevent="storeCommon.editProfile()"
                class="sm:py-2 py-1 sm:px-4 px-2 text-white rounded flex items-center flex-row-reverse justify-center gap-2 mt-7"
              >
                edit
              </button>
            </div>

            <div
              class="flex justify-start items-center sm:text-base text-xs mb-[56px] mt-[41px]"
            >
              <div class="flex flex-col sm:w-[360px] w-[200px]">
                <label
                  for="email"
                  class="block text-sm font-medium text-white mb-2"
                  >{{ $t("auth.email") }}</label
                >
                <div class="relative mt-1 rounded-md shadow-sm">
                  <input
                    readonly
                    v-model="storeCommon.user.email"
                    class="py-2 px-5 block w-full rounded-md pr-10 text-[#fff] border-[1px] border-[#198754] bg-[#132826]"
                  />
                </div>
              </div>
              <p
                class="sm:py-2 py-1 sm:px-4 px-2 text-white rounded flex items-center flex-row-reverse justify-center gap-2 mt-7"
              >
                Primary Email
              </p>
            </div>

            <div v-if="storeCommon.user.google_id == null">
              <div>
                <router-link
                  :to="{ name: 'addEmail' }"
                  class="flex items-center border-[#D9D9D9] border-[1px] mb-[80px] rounded-[4.8px] max-w-[191px] text-[#fff] py-[11px] px-[10px] bg-transparent"
                >
                  <img
                    src="@/assets/images/Union.png"
                    alt=""
                    class="pr-[16px]"
                  />
                  {{ $t("userPage.add_new_email") }}
                </router-link>
              </div>
              <div class="flex justify-start items-center sm:text-base text-xs">
                <div class="flex flex-col sm:w-[360px] w-[200px]">
                  <label
                    for="name"
                    class="block text-sm font-medium text-white mb-2"
                    >{{ $t("auth.password") }}</label
                  >

                  <div class="relative mt-1 rounded-md shadow-sm">
                    <Field
                      rules="min:3|max:15|symbols"
                      type="password"
                      :readonly="storeCommon.readonlyPass"
                      v-model="storeCommon.password"
                      name="password"
                      placeholder="At least 8 & max.15 lower case characters"
                      class="py-2 px-5 block w-full rounded-md pr-10 text-[#212529] border-[2px]"
                    />
                    <ErrorMessage
                      name="password"
                      class="text-[#E31221] text-base pt-[5px] pl-5"
                    />
                  </div>
                </div>
                <button
                  @click.prevent="storeCommon.editPassword()"
                  class="sm:py-2 py-1 sm:px-4 px-2 text-white rounded flex items-center flex-row-reverse justify-center gap-2 mt-7"
                >
                  edit
                </button>
              </div>
            </div>

            <div class="flex justify-end my-8">
              <button
                class="sm:py-2 py-1 sm:px-4 px-2 text-white rounded flex items-center flex-row-reverse justify-center gap-2"
                type="reset"
              >
                Cancel</button
              ><button
                class="sm:py-2 py-1 sm:px-4 px-2 text-white rounded flex items-center flex-row-reverse justify-center gap-2 bg-[#E31221]"
              >
                Save changes
              </button>
            </div>
          </VueForm>
        </div>
      </div>
    </div>
  </page-base-component>
</template>

<script setup>
import axios from "@/config/axios/axios.js";
import { onMounted } from "vue";
import axiosInstance from "@/config/axios/axios.js";
import { useCommonStore } from "../stores/common";
import { Form as VueForm, Field, ErrorMessage } from "vee-validate";
import { useRoute } from "vue-router";

const storeCommon = useCommonStore();

const route = useRoute();

const selectedFile = () => {
  storeCommon.update_user_avatar =
    document.querySelector(".dropzoneFile").files[0];
  storeCommon.url = URL.createObjectURL(storeCommon.update_user_avatar);
};
const updateUser = async () => {
  axiosInstance
    .post(
      "user/update",
      {
        id: storeCommon.user.id,
        username: storeCommon.username,
        password: storeCommon.password,
        thumbnail: storeCommon.update_user_avatar,
      },
      {
        headers: {
          type: "application/json",
          "Content-Type": "multipart/form-data",
        },
      }
    )
    .then((response) => {
      console.log(response);
      window.location.reload();
    })
    .catch((error) => {
      console.log(error);
    });
};

onMounted(() => {
  if (route.query) {
    return axios
      .get("/secondary-email/" + route.query.token)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }
});
</script>
