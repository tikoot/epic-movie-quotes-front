<template>
  <nav class="flex justify-between py-[26px] px-[70px] bg-[#222030]">
    <h1 class="text-[#DDCCAA] place-self-center">MOVIE QUOTES</h1>

    <ul class="flex justify-items-center items-center">
      <li>
        <button class="self-center box-border flex">
          <img
            src="@/assets/images/notificationBell.png"
            alt="notificaiton bell"
          />
        </button>
      </li>
      <a
        href="#"
        class="text-[16px] text-[#fff] pl-[45px] flex justify-between items-center pr-[40px]"
        >Eng
        <img
          src="@/assets/images/Vector.png"
          alt="arrow down"
          class="pl-[10px] pt-[2.5px]"
        />
      </a>
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
