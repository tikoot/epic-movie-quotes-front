<template>
  <div
    @click="this.$router.replace('/movie-list')"
    class="fixed top-0 left-0 h-screen w-full z-10 bg-[#0000008a] backdrop-blur-[3px]"
  ></div>
  <dialog
    open
    style="padding: 0px"
    class="fixed top-32 min-w-[961px] z-[100] bg-[#11101A] border-[1px] border-[#11101A] rounded-[12px] divide-y divide-red-800"
  >
    <slot></slot>
  </dialog>
</template>
