<template>
  <div
    class="flex items-center bg-[#24222F] rounded-[10px] py-[10px] px-[27px] h-fit"
  >
    <router-link :to="{ name: 'updateMovie' }">
      <img
        src="@/assets/images/VectorEdit.png"
        alt="edit icon"
        class="w-full h-full"
      />
    </router-link>
    <img src="@/assets/images/Line8.png" alt="line" class="px-[25px]" />
    <button>
      <img src="@/assets/images/VectorDelete.png" alt="delete icon" />
    </button>
  </div>
</template>
