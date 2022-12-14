<template>
  <div
    @click="this.$router.replace('/')"
    class="fixed top-0 left-0 h-screen w-full z-10 bg-[#0000008a] backdrop-blur-[3px]"
  ></div>
  <dialog
    open
    class="w-screen h-screen top-0 fixed sm:top-36 sm:max-w-[600px] sm:h-fit z-[100] bg-[#222030] border-[1px] border-[#222030] rounded-[10px] sm:py-[37px] px-[34px] sm:px-[104px]"
  >
    <slot></slot>
  </dialog>
</template>
