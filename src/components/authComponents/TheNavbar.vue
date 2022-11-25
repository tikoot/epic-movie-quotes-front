<template>
  <nav class="flex justify-between pt-[31px] px-[70px]">
    <h1 class="text-[#DDCCAA]">MOVIE QUOTES</h1>

    <ul class="flex">
      <a
        href="#"
        class="text-[16px] text-[#fff] flex justify-between items-center pr-[40px]"
        >Eng
        <img
          src="@/assets/images/Vector.png"
          alt="arrow down"
          class="pl-[10px] pt-[2.5px]"
        />
      </a>
      <li>
        <router-link
          to="/register"
          class="px-[25px] py-[8px] mr-[16px] text-[#fff] bg-[#E31221] border-[1px] border-[#E31221] rounded"
          >Sign Up</router-link
        >
      </li>
      <li>
        <router-link
          to="/login"
          class="px-[25px] py-[7px] text-[#fff] bg-transparent border-[1px] border-[#fff] rounded"
          >Log in</router-link
        >
      </li>
    </ul>
  </nav>
</template>
