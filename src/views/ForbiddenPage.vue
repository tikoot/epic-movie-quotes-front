<template>
  <div class="h-[100vh] bg-[#11101a] flex justify-center items-center">
    <div class="mx-auto flex items-center justify-center flex-col">
      <img src="@/assets/images/Gandolf.png" alt="gandolf" />
      <h1 class="text-[24px] text-[#fff]">You shall not pass!</h1>
      <p
        class="max-w-[295px] text-center text-[16px] text-[#fff] mb-[32px] mt-[16px]"
      >
        Sorry, but you don’t have permission to access this page
      </p>
      <router-link
        :to="{ name: 'LandingPage' }"
        class="text-[#DDCCAA] pl-[28px] pr-[28px] pt-[7px] pb-[7px] border rounded bg-red-600 border-red-600 mt-5"
      >
        Return Home
      </router-link>
    </div>
  </div>
</template>
