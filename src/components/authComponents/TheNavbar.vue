<template>
  <nav class="flex justify-between pt-[31px] px-[70px]">
    <h1 class="text-[#DDCCAA]">MOVIE QUOTES</h1>

    <ul class="flex">
      <LanguageSelect />
      <li>
        <router-link
          to="/register"
          class="px-[25px] py-[8px] mr-[16px] text-[#fff] bg-[#E31221] border-[1px] border-[#E31221] rounded"
          >{{ $t("auth.sign_up") }}
        </router-link>
      </li>
      <li>
        <router-link
          to="/login"
          class="px-[25px] py-[7px] text-[#fff] bg-transparent border-[1px] border-[#fff] rounded"
          >{{ $t("auth.log_in") }}</router-link
        >
      </li>
    </ul>
  </nav>
</template>
