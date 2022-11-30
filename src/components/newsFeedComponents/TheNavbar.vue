<template>
  <nav class="flex justify-between py-[26px] px-[70px] bg-[#222030]">
    <h1 class="text-[#DDCCAA] place-self-center">MOVIE QUOTES</h1>

    <ul class="flex justify-items-center items-center">
      <li class="mr-[45px]">
        <button class="self-center box-border flex">
          <img
            src="@/assets/images/notificationBell.png"
            alt="notificaiton bell"
          />
        </button>
      </li>
      <LanguageSelect />
      <li>
        <router-link
          to=""
          class="px-[16px] py-[9px] text-[#fff] bg-transparent border-[1px] border-[#fff] rounded"
          >Log out</router-link
        >
      </li>
    </ul>
  </nav>
</template>
